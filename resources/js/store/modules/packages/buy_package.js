import validation from "../../../formValidation/validation";

export default {
    namespaced:true,

    actions:{
        buy:function({commit,getters,state},payload){
            var target = payload['target'];
            var data = payload['data'];
            axios.post('/packages/buy',data).then((e) => {
                validation(e.data,target,'/merchant/balance',true);
            });
        },
    }
}
