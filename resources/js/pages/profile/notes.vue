<template>
    <section class="profile">
        <navbar-component></navbar-component>
        <profile-nav-component></profile-nav-component>
        <div class="container">
            <div class="row pt-4">
                <div class="col-lg-4" v-for="i in 5" :key="i">
                    <ListingPostComponent @write_note="update_note"
                        note="true"
                        compound="true"
                        bed="2"
                        baths="3"
                        area="400"
                        image="one.jpg"
                        number_of_images="5"
                        info="لاول مره في العاصمه الاداريه شقه بمقدم 0% واقساط"
                        address="العاصمه الاداريه-الحي الثامن-كمبوند كارديا"
                        price="500"
                    ></ListingPostComponent>
                </div>
            </div>
        </div>

        <div class="modal fade" id="show_notes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="show_notes_box" style="font-size: 16px">{{ keywords.note_you_write_it }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>{{ keywords.note }}</label>
                                <textarea name="note" class="form-control"
                                          :value="note_obj['text']">{{ note_obj['text'] }}</textarea>
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary"
                                       type="submit"
                                       name="save"
                                       :value="keywords.save" required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ keywords.close }}
                        </button>
                    </div>
                </div>
            </div>
        </div>



        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import ProfileNavComponent from "../../components/ProfileNavComponent";
import ListingPostComponent from "../../components/ListingPostComponent";
export default {
    name: "notes",
    props:['keywords'],
    data:function(){
        return {
            note_obj:{
                id:0,
                text:'',
            },
        }
    },
    methods:{
        update_note:function(e){
            // update
            this.note_obj['id'] = e[0];
            this.note_obj['text'] = e[1];
            // show box
            $('#show_notes').modal('show');
        }
    },
    components: {ListingPostComponent, ProfileNavComponent, FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
#show_notes{
    z-index: 99999999999;
}
</style>
