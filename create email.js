const form =document.querySelector('form');
form.addEventListener('submit',(Event)=>){
    Event.preventDefualt();
    const formData = new formData(form);
    if (formData.get('first_name')==='')
        alert('please enter your first.');
    return;
}
{
    if (formData.get('second_name')==='')
        alert('please enter your second second_name.');
    return;  
}
{
    if (formData.get('last_name')==='')
        alert('please enter your last name.');
    return;
}
{
    if (formData.get('phone_number')==='')
        alert('please enter your phone phone_number.');
    return;
}
{
    if (formData.get('password')==='')
        alert('please enter your password.');
    return;
}
//submit the form data to the server using a post request.
fetch('submit_email .php',{
method: 'post',
body: formData,
})
.then((Response) =>Response.json())
.then((data) => {
    if(data.success) {
        alert('your email account has been created.');
    }
    else{
        alert('There was an error creating your email account. please try again.');
    }
    })
    .catch((error)=> {
        alert('There was an error connecting to the server. please try again.')
    });


