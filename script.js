window.onload = function(){
  var txtbox=document.getElementById('txtbox');
  var addtodo=document.getElementById('addtodo');
  var Todolist=document.getElementById('Todolist');
  document.getElementById('txtbox').value="";
  var arr = JSON.parse(localStorage.getItem("todos"));
  for(var i=0;i<arr.length;i++){
    Todolist.innerHTML +=
    "<div>"+"<li>"+
    arr[i].task+
    "<button onclick='delete_todo(this)'>"+
    "DELETE"+"</button>"+"</li>"+"</div>";
  }
}

var list=[];

function add() {
  Todolist.innerHTML +=
  "<div>"+"<li>"+
  txtbox.value+
  "<button onclick='delete_todo(this)'>"+
  "DELETE"+"</button>"+"</li>"+"</div>";
  storing();
}

function storing() {

  list.push({
        task: txtbox.value
});

  localStorage.setItem("todos",JSON.stringify(list));

}

function delete_todo(el) {
  console.log(el.parentNode);
  console.log(el.parentNode.firstChild.data);
   deleting_from_storage(el.parentNode);
  el.parentNode.remove();
}

function deleting_from_storage(el) {
    var arr = JSON.parse(localStorage.getItem("todos"));
    for(var i=0;i<arr.length;i++){
      console.log(arr[i].task == el.firstChild.data);
      if(arr[i].task == el.firstChild.data)
      {
          for(var j=i;j<arr.length-1;j++){
            arr[j]=arr[j+1];
          }
          arr.length-=1;
          break;
      }
    }
    localStorage.setItem("todos",JSON.stringify(arr));
}
