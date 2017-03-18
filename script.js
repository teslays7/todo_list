window.onload = function(){
  document.getElementById('txtbox').value="";
}

var txtbox=document.getElementById('txtbox');
var addtodo=document.getElementById('addtodo');
var Todolist=document.getElementById('Todolist');


function add() {
  Todolist.innerHTML +=
  "<div>"+"<li>"+"<input type='checkbox' onclick='strike_todo(this.parentNode)'>"
  +"</input>"+txtbox.value+"  "+
  "<button onclick='delete_todo(this)'>"+
  "DELETE"+"</button>"+"</li>"+"</div>";
}

function delete_todo(el) {
  console.log(this);
  el.parentNode.remove();
}

function strike_todo(ele) {
  console.log(ele);
  if(ele.style.textDecoration=="")
  {
    ele.style.textDecoration="line-through";
  }
  else{
   ele.style.textDecoration="";
  }
}
