import validation from "../../../formValidation/validation";

export default {
    namespaced:true,

    actions:{
        send_email:function ({commit}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/listings/sendemail',data).then((e)=>{
                validation(e.data,target,'',true);
            }).catch((e)=>{
                window.location = document.URL;
            });
        }
    }
}
