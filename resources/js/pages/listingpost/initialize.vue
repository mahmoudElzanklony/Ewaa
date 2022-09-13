<template>
    <section>
        <navbar-component></navbar-component>
        <div class="container mt-4 mb-6">
            <h2 class="d-flex align-items-center mb-4 main-title">
                <span v-if="$page.props.lang == 'ar'"><i class="ri-arrow-left-s-fill"></i></span>
                <span v-else><i class="ri-arrow-right-s-fill"></i></span>
                <span>{{ keywords.list_property }}</span>
            </h2>
            <div class="progress-form">
                <span class="active"><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_data }}</p>
                <span><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_info }}</p>
                <span><i class="ri-check-line"></i></span>
                <p>{{ keywords.listing_images }}</p>
                <span><i class="ri-check-line"></i></span>
            </div>
            <form method="post" @submit.prevent="save_inilaize_listing">
                <input v-if="data['listing_info'] != null && data['listing_info'].hasOwnProperty('id')"
                       type="hidden" name="id" :value="data['listing_info']['id']">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>{{ keywords.listing_section }}</label>
                            <select name="listing_type" class="form-control" @change="get_sub" required>
                                <option value="">{{ keywords.choose_property_type }}</option>
                                <option v-for="(cat,index) in data['categories']"
                                        :key="index" :value="cat['id']"
                                        :selected="data['listing_info'] != null && data['listing_info']['category']['parent_id'] == cat['id']">
                                    {{ cat['name'] }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>{{ keywords.sub_category }}</label>
                            <select name="category_id" class="form-control" required>
                                <option value="">{{ keywords.choose_sub_category }}</option>
                                <option v-for="(c,index) in get_sub_data" :key="index"
                                        :value="c['id']"
                                        :selected="data['listing_info'] != null && data['listing_info']['category_id'] == c['id']"
                                >
                                    {{ c['name'] }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>{{ keywords.listing_type }}</label>
                            <select name="rent_or_sale" class="form-control" required>
                                <option value="sale"
                                        :selected="data['listing_info'] != null && data['listing_info']['rent_or_sale'] == 'sale'">{{ keywords.sale }}</option>
                                <option value="rent" :selected="data['listing_info'] != null && data['listing_info']['rent_or_sale'] == 'rent'">{{ keywords.rent }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">

                            <div class="col-lg-4 col-6"
                                 v-for="(i,index) in Object.keys(data['place_data'])" :key="index">
                                <div class="form-group">
                                    <select class="form-control"
                                            @change="update_location"
                                            required :name="i">
                                        <option>{{ switchWord(data['place_data'][i]) }}</option>
                                        <option v-for="(val,index) in map_data(i)" :key="index"
                                                :selected="data['listing_info'] != null &&
                                                 data['listing_info'][i] == val['id']"
                                                :value="val['id']">{{ val['name'] }}</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <input type="submit" class="btn btn-primary" :value="keywords.next">
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
import {mapActions , mapMutations , mapGetters} from "vuex";
export default {
    name: "initialize",
    props:['keywords','data'],
    mixins:[SwitchLangWord],
    components: {FooterComponent, NavbarComponent},
    computed:{
        ...mapGetters({
            'get_sub_data':'categories/get_sub_categories_data',
            'map_data':'countries_govenrn_cities_areas/get_items_data',

        }),
    },
    methods:{
        ...mapActions({
            'get_sub':'categories/get_sub_where_parent_is',
            'update_location':'countries_govenrn_cities_areas/update_location',
            'save_inilaize_listing':'listings/save_inilaize_listing',
            'get_next_map_type_from_previous_value':'countries_govenrn_cities_areas/get_next_map_type_from_previous_value'
        }),
        ...mapMutations({
            'inialize_items_map':'countries_govenrn_cities_areas/inialize_items',
        }),
        next_step:function (){
            this.$inertia.visit('/listing/info');
        }
    },
    created() {
        this.inialize_items_map({name:'governments',value:this.data['governments']})
        // check if listing_info is not null
        if(this.data['listing_info'] != null){
            // get sub categories
            this.get_sub(this.data['listing_info']['category']['parent_id'])
            // get cities
            this.get_next_map_type_from_previous_value(
                {
                    name:'cities',
                    value:this.data['listing_info']['government_id'],
                    where:'government_id',
                }
            )
            // get areas
            this.get_next_map_type_from_previous_value(
                {
                    name:'areas',
                    value:this.data['listing_info']['city_id'],
                    where:'city_id',
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";


@media (min-width: 567px) {
    form{
        >div.row{
            >div:last-of-type{
                .row{
                    >div:not(:first-of-type){
                        p{
                            margin-bottom: 32px;
                        }
                    }
                }
            }
        }
    }
}

</style>
