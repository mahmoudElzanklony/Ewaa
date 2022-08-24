import validation from "../../../formValidation/validation";

export default {
    namespaced:true,

    actions:{
        send_email:function ({commit}){
            var target = event.target;
            var data = new FormData(target);
            axios.post('/sendmail',data).then((e)=>{
                validation(e.data,target);
            }).catch((e)=>{
                window.location = document.URL;
            });
        }
    }
}
