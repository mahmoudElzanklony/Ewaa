<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mt-4 mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span @click="incrementAction({amount:100})">{{ main_title }}</span>
                    <span>
                        <i class="ri-arrow-down-s-line toggle_next"></i>
                    </span>
                </p>
                <div class="overflow-auto">
                    <table class="myTable table text-center table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <td v-for="i in handling_data['table_head_keys']" :key="i">
                                {{ i }}
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="i in 15" :key="i">
                            <td>أحمد علي</td>
                            <td>Ahmed@yahoo.com</td>
                            <td>عندي مشكلة في شراء نقاط</td>
                            <td></td>
                            <td class="actions">
                                <span><i data-toggle="modal" data-target="#update_box" class="ri-edit-line"></i></span>
                                <span><i @click="deleteRecord(10)" class="ri-close-line"></i></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="update_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_users_box">{{ switchWord('add_new_item') }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                               <textarea class="form-control" name="reply" :placeholder="handling_data['table_head_keys']['reply']" required></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary" :value="switchWord('send')">
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import DeleteItemComponent from "../../components/DeleteItemComponent";
import {mapMutations , mapActions} from 'vuex';
export default {
    name: "support",
    mixins:[tableData,SwitchLangWord,DeleteItemComponent],
    props:['main_title','handling_data'],
    components: {SideNavbarComponent},
    methods:{
        ...mapActions({
            incrementAction:`counter/incrementAsyc`
        }),
    },
    created() {
        this.incrementAction({amount:200});
       // this.$store.commit({type:'increment',amount:42});
      /*  this.increment(this.$store);
        console.log(this.$store.state);*/
       /* console.log(this.$store.getters.filter_data(15));
        console.log('---------------');
      //  console.log(this.$store.dispatch({type:'incrementAsyc',amount:123456}));*/
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
