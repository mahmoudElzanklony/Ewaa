import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){

    },
    actions:{
       save_note:function (){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/profile/save-note',data).then((e)=>{
                 validation(e.data,target);
            });
       },

    },
}
