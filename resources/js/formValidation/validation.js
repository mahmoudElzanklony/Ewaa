
export default function (data,target,url = ''){

    $(target).find('p.alert-danger').html('').hide();
    // check if there are any errors
    if(data.hasOwnProperty('errors')){
        for(let error of Object.keys(data.errors)){
            let err = '';
            if(typeof data.errors[error] == 'string'){
                err = data.errors[error];
            }else{
                err = data.errors[error].join(',');
            }
            $(target).find('input[name="'+error+'"],select[name="'+error+'"],textarea[name="'+error+'"]')
                .next().html(err).fadeIn();
        }
    }
    // check if i have success data
    else if(data.hasOwnProperty('success')){
        Toast.fire({
            icon:'success',
            title:data.success.message
        });
        // check if visit another page
        if(url != ''){
            setTimeout(()=>{
                window.vm.$inertia.visit(url);
            },2000);
        }
    }
}
