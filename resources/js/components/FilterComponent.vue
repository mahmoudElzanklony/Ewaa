<template>

    <form action="/for-sale">
        <div class="form-group input-icon">
            <label>{{ keywords.area }}</label>
            <input class="form-control" name="area">
            <span><i class="ri-map-line"></i></span>
        </div>
        <div class="form-group">
            <label>{{ keywords.category }}</label>
            <div class="special_radio_container">
                <div class="special_radio">
                    <span>{{ keywords.sale }}</span>
                    <input class="active" type="radio" name="category" value="sale">
                </div>
                <div class="special_radio">
                    <span>{{ keywords.rent }}</span>
                    <input type="radio" name="category" value="rent">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>{{ keywords.type }}</label>
            <div class="d-flex align-items-center flex-wrap">
                <div class="input-radius-radio active">
                    <span>{{ keywords.all_options }}</span>
                    <input type="radio" name="type" value="all">
                </div>
                <div class="input-radius-radio" v-for="i in 10" :key="i">
                    <span>شقق</span>
                    <input type="radio" name="type" value="شقق">
                </div>
            </div>
        </div>
        <div class="form-group two_inputs_together d-flex justify-content-between flex-wrap">
            <label class="d-block w-100">{{ keywords.price_range }}</label>
            <select class="form-control half" name="min_price">
                <option value="">{{ keywords.min_price }}</option>
            </select>
            <select class="form-control half" name="max_price">
                <option value="">{{ keywords.max_price }}</option>
            </select>
        </div>
        <p class="d-flex justify-content-between
                            cursor-pointer
                            align-items-center mb-3"
           @click="show_hide_filters">
            <strong>{{ keywords.more_filters }}</strong>
            <span><i class="ri-arrow-drop-down-line"></i></span>
        </p>
        <div class="reset_of_filter">

            <div class="form-group two_inputs_together d-flex justify-content-between flex-wrap">
                <label class="d-block w-100">{{ keywords.area }}</label>
                <select class="form-control half" name="min_area">
                    <option value="">{{ keywords.min_area }}</option>
                </select>
                <select class="form-control half" name="max_area">
                    <option value="">{{ keywords.max_area }}</option>
                </select>
            </div>

            <div class="form-group">
                <label>{{ keywords.payment_methods }}</label>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="input-radius-radio active">
                        <span>{{ keywords.all_options }}</span>
                        <input type="radio" name="payment" value="all">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.cash }}</span>
                        <input type="radio" name="payment" value="cash">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.installments }}</span>
                        <input type="radio" name="payment" value="installments">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label>{{ keywords.listings_available_for_mortgage }}</label>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="input-radius-radio active">
                        <span>{{ keywords.all_financing_options }}</span>
                        <input type="radio" name="bank_type" value="all_financing_options">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.cbe_initiative }}</span>
                        <input type="radio" name="bank_type" value="cbe_initiative">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.cbe_another_initiative }}</span>
                        <input type="radio" name="bank_type" value="cbe_another_initiative">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.commercial_financing }}</span>
                        <input type="radio" name="bank_type" value="commercial_financing">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label>{{ keywords.type }}</label>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="input-radius-radio active">
                        <span>{{ keywords.all_options }}</span>
                        <input type="radio" name="view" value="all">
                    </div>
                    <div class="input-radius-radio" v-for="i in 10" :key="i">
                        <span>شارع رئيسي</span>
                        <input type="radio" name="view" value="شارع رئيسي">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label>{{ keywords.keywords }}</label>
                <textarea class="form-control" name="keywords"></textarea>
            </div>

            <div class="form-group">
                <label>{{ keywords.result_filtering }}</label>
                <div class="d-flex align-items-center mb-2">
                    <input name="filter_result"
                           type="checkbox" value="listings_with_photos_only">
                    <span>{{ keywords.listings_with_photos_only }}</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <input name="filter_result"
                           type="checkbox" value="listings_inside_compounds_only">
                    <span>{{ keywords.listings_inside_compounds_only }}</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <input name="filter_result"
                           type="checkbox" value="direct_from_the_owner_listings">
                    <span>{{ keywords.direct_from_the_owner_listings }}</span>
                </div>
            </div>

            <div class="form-group">
                <label>{{ keywords.sort_by }}</label>
                <div class="d-flex align-items-center flex-wrap">
                    <div class="input-radius-radio active">
                        <span>{{ keywords.newest_first }}</span>
                        <input type="radio" name="sort_by" value="newest_first">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.lowest_price }}</span>
                        <input type="radio" name="sort_by" value="lowest_price">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.height_price }}</span>
                        <input type="radio" name="sort_by" value="height_price">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.smallest_area }}</span>
                        <input type="radio" name="sort_by" value="smallest_area">
                    </div>
                    <div class="input-radius-radio">
                        <span>{{ keywords.largest_area }}</span>
                        <input type="radio" name="sort_by" value="largest_area">
                    </div>

                </div>
            </div>
        </div>
        <div class="form-group">
            <input type="submit"
                   class="btn btn-primary"
                   :value="keywords.search">
        </div>
    </form>

</template>

<script>
export default {
    name: "FilterComponent",
    props:['keywords'],
    methods:{
        show_hide_filters:function(){
            $(event.target).parent().parent().parent().find('.reset_of_filter').slideToggle();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
form{
    label{
        font-size: $paragraph;
        color:$black;
        font-weight: bold;
    }
    input[type="submit"]{
        width:200px;
        border-radius: 20px;
    }
}
textarea{
    height: 80px;
    resize: none;
}
input[type="checkbox"]{
    width: 18px;
    height: 18px;
}
.ar{
    input[type="checkbox"]{
        margin-left: 10px;
    }
}
.en{
    input[type="checkbox"]{
        margin-right: 10px;
    }
}

@media (max-width: 992px) {
    .special_radio_container .special_radio input{
        width:180px;
    }
}

</style>
