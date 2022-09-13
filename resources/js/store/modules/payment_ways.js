
export default {
    namespaced:true,
    state(){
        return {
            payment_ways:[],
        }
    },
    getters:{
        get_payment_ways:(state)=>{
            return state.payment_ways;
        },
    },
    mutations:{
        inialize_payment_ways:function (state,item){
            state.payment_ways = item;
        },
    },
    actions:{
        find_payment_ways:function({commit,getters,state},payload){
            console.log(payload);
            if(event != undefined){
                console.log(event.target.tagName);
                if(event.target.tagName == 'SPAN'){
                    event.target.nextElementSibling.checked = true;
                }else if(event.target.tagName == 'DIV'){
                    event.target.children[1].checked = true;
                }else{
                    event.target.checked = true;
                }
                console.log(document.querySelector('input[name="type"]:checked'));
            }
            if(typeof payload == 'string'){
                var val = payload;
            }else {
                var val = event.target.value;
            }
            axios.post('/payment-ways/find', {
                type: val
            }).then((e) => {
                commit('inialize_payment_ways', e.data.data);
            });
        },
    }
}
