// function abc(call){
//     call();
// }
function person(friend, person2)
{
    setTimeout(function(){
        alert("My friend's name is"+ friend);
        person2();},);
}

function person2()
{
    alert("My name is Bhargav");
}

person("Rudhra",person2);