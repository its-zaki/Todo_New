const Email = document.querySelector("#email");
const Password = document.querySelector("#password");
const Submit = document.querySelector("#submit");
const Li_div = document.querySelector("#li_div");
const data_arr = [];
function user_data(e) {
  e.preventDefault();
  data_arr.push(Email.value, Password.value);
  console.log(data_arr);
  Email.value = "";
  Password.value = "";
  Li_div.innerHTML = "";
  for (i = 0; i < data_arr.length; i++) {
    const items = data_arr[i];
    Li_div.innerHTML += `<div class="li-div"><li class="todo-li">${items} </li><button class="del" onclick="Delete(${i})"><i class="ri-delete-bin-line"></i></button><button class="edit"onclick="edit_data(${i})"><i class="ri-pencil-fill"></i></button> </div>`;
  }
}
function Delete(index) {
  Li_div.innerHTML = "";
  data_arr.splice(index, 1);
  render();
}
function render() {
  Li_div.innerHTML = "";
  for (i = 0; i < data_arr.length; i++) {
    const items = data_arr[i];
    Li_div.innerHTML += `<div class="li-div"><li class="todo-li">${items} </li> <button class="del" onclick="Delete(${i})"><i class="ri-delete-bin-line"></i></button><button class="edit" onclick="edit_data(${i})"><i class="ri-pencil-fill"></i></button> </div>`;
  }
  console.log(data_arr);
}
function edit_data(index) {

  const edit = prompt("Edit", data_arr[index]);
    data_arr[index] = edit;

render();
}
