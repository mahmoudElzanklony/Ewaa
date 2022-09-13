<template>
    <section>
        <navbar-component></navbar-component>
        <div class="loading">
            <img src="/images/loading.gif">
        </div>
        <div class="container mt-4 mb-4">
            <h2 class="d-flex align-items-center mb-4 main-title">
                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                <span>{{ keywords.add_your_photos }}</span>
            </h2>
            <div class="progress-form">
                <span class="active"><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_data }}</p>
                <span class="active"><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_info }}</p>
                <span class="active"><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_images }}</p>
                <span><i class="ri-check-line"></i></span>
            </div>
            <p class="alert alert-info">
                {{ keywords.please_make_sure_each_photo_is_smaller_than }}
            </p>
            <form method="post" @submit.prevent="upload_images">
                <div class="drag-drop-files">
                    <input type="file" name="photos[]" accept="image/*"
                           :maxlength="10 -  number_of_photos"
                           :max="10 -  number_of_photos"
                           @change="uploadFiles" multiple>
                    <p class="text-center mb-2 mt-2">{{ keywords.drop_your_images_here }}</p>
                    <button type="button" class="btn btn-primary mb-2">
                        <span>{{ keywords.add_files }}</span>
                        <span><i class="ri-add-line"></i></span>
                    </button>
                </div>
                <div class="uploaded_images_before">
                    <div class="image" v-for="(img,index) in photos" :key="index" :class="'image_'+img['id']">
                        <p>
                            <span></span>
                            <span><i
                                @click="delete_item('listing_photos',img['id'],'.image_'+img['id'])" class="ri-close-line"></i>
                            </span>
                        </p>
                        <img :src="'/images/listings/'+img['image']">
                    </div>
                </div>
                <div class="preview-uploaded-images">

                </div>
                <div class="text-center mt-3 mb-3">
                    <input type="submit" class="btn btn-primary" :value="switchWord('save')">
                    <input @click="previous_step" type="button" class="btn btn-outline-primary" :value="keywords.previous">
                </div>
            </form>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import {mapActions} from "vuex";
import $ from "jquery";
export default {
    name: "photos",
    props:['keywords','photos'],
    data:function (){
      return{
          files:[],
          number_of_photos:this.photos.length,
      }
    },
    mixins:[SwitchLangWord],
    components: {FooterComponent, NavbarComponent},
    methods:{
        ...mapActions({
           'save_image':'listings/save_photos',
        }),
        upload_images:function(){
            this.save_image({photos: this.files});
        },
        previous_step:function(){
            this.$inertia.visit('/listing/info');
        },
        delete_item:function (table,id, selector = '' ){
            if(window.vm.$inertia.page.props.lang == 'ar'){
                var msg = 'هل أنت متأكد من عملية المسح';
                var confirm = 'نعم أنا متأكد';
                var cancel = 'إلغاء';
            }else{
                var msg = 'are you sure from delete operation';
                var confirm = 'yes';
                var cancel = 'cancel';

            }
            var com = this;
            Swal.fire({
                title: msg,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#ff6a15',
                cancelButtonColor: '#aaa',
                confirmButtonText: confirm,
                cancelButtonText:cancel,
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('/deleteitem',{
                        table:table,
                        id:id,
                    }).then((e)=>{
                        Toast.fire({
                            icon:'success',
                            title:e.data.message[0]
                        });
                        if(selector != ''){
                            console.log($(selector));
                            $(selector).remove();
                        }
                        com.number_of_photos--;

                    });

                }
            })
        },
        uploadFiles:function (){
             for(let image of Array.from(event.target.files)){
                 if(this.number_of_photos < 10) {
                     this.files.push(image);
                     this.number_of_photos++;
                     console.log(this.number_of_photos);
                 }else{
                     Toast.fire({
                         icon:'error',
                         title:this.switchWord('you_exceed_number_of_uploaded'),
                     });
                 }
             }

            if(this.files.length > 0 && this.number_of_photos <= 10){
                $('.preview-uploaded-images').html('');
                for(let i = 0 ; i < this.files.length ; i++){
                    if(parseFloat((Number(this.files[i].size) / 1024 / 1024).toFixed(2)) > 1){
                        Toast.fire({
                            icon:'error',
                            title:this.switchWord('big_photo_upload_error_preview'),
                        });
                        this.files.splice(i,1);
                        this.number_of_photos--;
                    }else if(this.files[i].type.indexOf('image') == -1){
                        Toast.fire({
                            icon:'error',
                            title:this.switchWord('upload_good_image'),
                        });
                        this.files.splice(i,1);
                        this.number_of_photos--;
                    }else {
                        var output = '<div class="image"><p><span>' + (Number(this.files[i].size) / 1024 / 1024).toFixed(2) + 'Mb</span><span><i  number="'+i+'" class="ri-close-line delete-file-uploaded"></i></span></p>';
                        output = output + '<img src="' + URL.createObjectURL(this.files[i]) + '">';
                        output += '</div>';
                        $('.preview-uploaded-images').append(output);
                    }
                }
            }else{
                Toast.fire({
                    icon:'error',
                    title:this.switchWord('you_exceed_number_of_uploaded'),
                });
              //  document.querySelector('form input[type="file"]').value = ''
            }
        }
    },
    mounted() {
        var com = this;
        $('.content').on('click','.delete-file-uploaded',function(){
            var target = $(this);
            if(window.vm.$inertia.page.props.lang == 'ar'){
                var msg = 'هل أنت متأكد من عملية المسح';
                var confirm = 'نعم أنا متأكد';
                var cancel = 'إلغاء';
                var done = 'تمت عمليه المسح بنجاح';
            }else{
                var msg = 'are you sure from delete operation';
                var confirm = 'yes';
                var cancel = 'cancel';
                var done = 'delete done';

            }
            Swal.fire({
                title: msg,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#ff6a15',
                cancelButtonColor: '#aaa',
                confirmButtonText: confirm,
                cancelButtonText:cancel,
            }).then((result) => {
                if (result.isConfirmed) {
                    target.parent().parent().parent().remove();
                    com.files.splice(target.attr('number'),1);
                    console.log(com.files);
                    com.number_of_photos--;
                    console.log(com.number_of_photos);
                    Toast.fire({
                        icon:'success',
                        title:done
                    })
                }
            })
        });
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.loading{
    display: none;
}
</style>
