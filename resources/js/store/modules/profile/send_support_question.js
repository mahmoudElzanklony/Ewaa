import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){

    },
    actions:{
        save_question:function (){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/support/send',data).then((e)=>{
                validation(e.data,target,'',true);
            });
        },

    },
}
