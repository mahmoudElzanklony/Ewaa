
export default {
    namespaced:true,
    state(){
        return {
            sub_categories:[],
        }
    },
    getters:{
        get_sub_categories_data:(state)=>{
            return state.sub_categories;
        }
    },
    mutations:{
        inialize_sub_categories_items:function (state,item){
            state.sub_categories = item;
        },
    },
    actions:{
        get_sub_where_parent_is:function({commit,getters,state},payload){
            if(typeof payload == 'number'){
                var value = payload;
            }else{
                var value = event.target.value;
            }

            axios.post('/categories/get-subcategories-where',{
                value,
            }).then((e)=>{
                commit('inialize_sub_categories_items',e.data.data);
            });
        },

    }
}
