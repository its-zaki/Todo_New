const Email = (document.querySelector("#email"));
const Password = (document.querySelector("#password"));
const Submit = document.querySelector("#submit");
const Li_div = document.querySelector("#li_div");
const data_arr=[]
function user_data(e){
    e.preventDefault()
    data_arr.push(Email.value , Password.value)
    console.log(data_arr);
    Email.value=""
    Password.value=""
    Li_div.innerHTML= ""
    for(i=0; i<data_arr.length; i++){
        const items = data_arr[i]
    Li_div.innerHTML+=`<li class="list">${items} <button onclick="Delete(${i})">Delete</button><button>Edit</button> </li>`;
    }
    

}
function Delete(index){
    data_arr.splice(index,1)
    render();

}
// function render (){
//     e.preventDefault()
//     for(i=0; i<data_arr.length; i++)
//     Li_div.innerHTML+=`<li class="list">${Email.value} </br> ${Password.value} <button onclick="${i}">Delete</button><button>Edit</button> </li>`;

//     console.log(data_arr);
// }   
