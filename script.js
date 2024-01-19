var cardbody=document.querySelector('.card-body');
var cardform=document.querySelector('#card-form');
var cardsearch=document.querySelector('#card-search');
var button =document.querySelector('#button');
var ul=document.querySelector('.ul');
var h3=document.querySelector('#message');
 
 
 
 //show message
 
 showmessage=(text,color)=>{
   h3.innerHTML=(text)
   h3.classList.add(color)
   
   setTimeout(()=>{
     h3.innerHTML=''
     h3.classList.remove(color);
   },1000)
 }
 
 creattodo=(todoid,todovalue)=>{
  var li=document.createElement('li');
  
 li.id=todoid;
 li.innerHTML=`<span>${todovalue}</span><span><butto id='deletebutton' class='deletebutton'><i class="fa-solid fa-trash"></i></button></span>`
  li.classList.add('li')
  ul.appendChild(li);
 
 
  //find list
 var deletebutton=li.querySelector('.deletebutton')
   deletebutton.addEventListener('click',(even)=>{
     var selectlest=even.target.parentElement.parentElement.parentElement;
        ul.removeChild(selectlest)
        
       
 showmessage('Todo deleted','massegedeletecolor');
 
  var todos=localStoragetodo();
 
  var todos = todos.filter((todo)=>todo.todoid!==selectlest.id)
  
    localStorage.setItem('mytodos',JSON.stringify(todos))
   
   })
 
 }
//local Storage todos

localStoragetodo=()=>{
  return localStorage.getItem('mytodos')?JSON.parse(localStorage.getItem('mytodos')):[];
}


//submit function 
cardbody.addEventListener("submit",(even)=>{
  even.preventDefault();
  var todovalue=cardsearch.value;
  //todoid
  var todoid=Date.now().toString();

  creattodo(todoid,todovalue)
  
  showmessage ('todo is create','massegecolor')
  
  var todos=localStoragetodo();
 
 todos.push({todoid,todovalue})
 localStorage.setItem('mytodos',JSON.stringify(todos))
 cardsearch.value='';
 
});
window.addEventListener('DOMContentLoaded',()=>{
 
 var todos=localStoragetodo();
todos.map((todo)=>creattodo(todo.todoid,todo.todovalue))
  
});