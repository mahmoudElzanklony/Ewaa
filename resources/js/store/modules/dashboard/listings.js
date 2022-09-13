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
        inialize_data:function (state,item){
            state.data = item;
        },
        update_data:function(state,item){
            if(state.data == null){
                return state.data = item;
            }
            return state.data.push(item);
        },
        update_index_data:function (state,payload){
            let id = state.data.findIndex((item)=>{
                return item.id ==  payload.id;
            });
            if(id >= 0){
                Vue.set(state.data, id, payload);
            }
        }
    },
    actions:{
        save_listing:function({commit,getters,state}){
            var target = event.target;
            var data = event.target.getAttribute('val');
            console.log(target);
            var id = event.target.id;
            var msg = data;
            if(data == ''){
                return false;
            }
            if(window.vm.$inertia.page.props.lang == 'ar'){
                if(msg == 'live'){
                    msg = 'نشطه';
                }else if(msg == 'rejected'){
                    msg = 'مرفوضة'
                }
            }
            axios.post('/dashboard/update-listing',{
                status:data,
                id,
            }).then((e)=>{
                // check if there is no error
                Toast.fire({
                   icon:e.data.message.icon,
                   title:e.data.message.title,
                });
                $(target).parent().parent().prev().html(msg);
            });
        }
    }
}
