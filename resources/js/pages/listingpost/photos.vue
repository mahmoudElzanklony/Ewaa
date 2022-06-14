<template>
    <section>
        <navbar-component></navbar-component>
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
            <form>
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
                <div class="preview-uploaded-images">

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
export default {
    name: "photos",
    props:['keywords'],
    data:function (){
      return{
          files:[],
          number_of_photos:0,
      }
    },
    mixins:[SwitchLangWord],
    components: {FooterComponent, NavbarComponent},
    methods:{
        uploadFiles:function (){
            this.files = Array.from(event.target.files);
            $('.preview-uploaded-images').html('');
            if(this.files.length > 0 && this.files.length < (10 - this.number_of_photos)){
                for(let i = 0 ; i < this.files.length ; i++){
                    if(parseFloat((Number(this.files[i].size) / 1024 / 1024).toFixed(2)) > 1){
                        Toast.fire({
                            icon:'error',
                            title:this.switchWord('big_photo_upload_error_preview'),
                        });
                        this.files.splice(i,1);

                    }else {
                        var output = '<div class="image"><p><span>' + (Number(this.files[i].size) / 1024 / 1024).toFixed(2) + 'Mb</span><span><i class="ri-close-line"></i></span></p>';
                        output = output + '<img src="' + URL.createObjectURL(this.files[i]) + '">';
                        output += '</div>';
                        $('.preview-uploaded-images').append(output);
                    }
                }
                this.number_of_photos += $('.preview-uploaded-images .image').length;

            }else{
                Toast.fire({
                    icon:'error',
                    title:this.switchWord('you_exceed_number_of_uploaded'),
                });
                document.querySelector('form input[type="file"]').value = ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
