import validation from "../../../formValidation/validation";


export default {
    namespaced:true,
    state(){
        return {
            data:null,
        }
    },
    getters:{
        get_data:function (state){
            return state.data
        }
    },
    mutations:{
        inilize_data:function(state,item){
            return state.data = item;
        },
        update_data:function(state,item){
            if(state.data == null){
                return state.data = item;
            }
            return state.data.push(item);
        },
    },
    actions:{
        save_inilaize_listing:function({commit,getters,state}){
            var target = event.target;
            var id = $(target).find('input[name="id"]').val();
            var data = new FormData(target);
            axios.post('/listings/save-inilaize',data).then((e)=>{
                window.vm.$inertia.visit('/listing/info');
            });
        },
        save_info_listing:function({commit,getters,state}){
            var target = event.target;
            var id = $(target).find('input[name="id"]').val();
            var data = new FormData(target);
            axios.post('/listings/save-listing-info',data).then((e)=>{
                window.vm.$inertia.visit('/listing/photos');
            });
        },
    }
}
