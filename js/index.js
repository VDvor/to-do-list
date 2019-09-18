let date = new Date(),
numberDate= document.body.querySelector('.number-date').textContent= date.getDate();
const day= document.body.querySelector('.day');
const month = document.body.querySelector('.month');
const arrDayWeek= ['Воскресенье,', 'Понедельник,', "Вторник,", "Среда,", "Четверг,", "Пятница,","Суббота,"];
const  arrMonth =["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const addedButton =document.body.querySelector('.add-button');
const appendTask = document.querySelector('.append_task');
const closedTask = document.querySelector('.close');
const okButton = document.querySelector('.task__buttom__add');
const textareaTask =  document.querySelector('.add_taks__text');
const tasks = document.querySelector('.tasks');
const taskNum =document.body.querySelector('.tasks__number');
let deleteTask = document.querySelectorAll('.close_task');
let editTask = document.querySelectorAll('.edit');
let sumTask =document.body.querySelectorAll('.tasks__item').length;
taskNum.textContent= sumTask;

arrDayWeek.forEach(function(item, i){
    if(date.getDay()==i){
        day.textContent= item;        
    }
});
arrMonth.forEach(function(item, i){
    if(date.getMonth()==i){
        month.textContent= item;        
    }
});


function addLiTask(task){
    let date = new Date();
           const inLiTask = `
        <label for="realization${date.getMilliseconds()}" class="task__realization">
            <input type="checkbox" class="realization_checkbox" id="realization${date.getMilliseconds()}">
            <div class="realization_fake"></div>      
            <input type="text" name="" class="task" value="${task}" readonly>
        </label>
         <div class="task__time-button">
            <div class="task_time">${date.getHours()}:${(date.getMinutes()<10?'0':'')+date.getMinutes()}</div>
            <button type="button" class="close close_task" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <button class="edit">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
        </div>`;
      let liTask = document.createElement('li');
      liTask.className= 'tasks__item';
      liTask.innerHTML=inLiTask;
      tasks.appendChild(liTask);   
}
function changeTask(task){
task.setAttribute('readonly', true);

}

const showTask =  () =>{
    appendTask.classList.toggle("_show");
    textareaTask.focus();
    
};


const closeTask= ()=>{
    appendTask.classList.remove('_show');  
};


const addTask= ()=>{
    addLiTask(textareaTask.value);
    textareaTask.value='' ;
    appendTask.classList.remove('_show');
    sumTask =document.body.querySelectorAll('.tasks__item').length;
    taskNum.textContent= sumTask;
    deleteTask = document.querySelectorAll('.close_task');
    editTask= document.querySelectorAll('.edit');
    deleteTask.forEach(item=>{
        item.addEventListener('click',delTask);
    });
    editTask.forEach(item=>{
        item.addEventListener('click',editedTask);
     });     
    textareaTask.blur();
};


const delTask = event =>{
event.target.closest('.tasks__item').remove();
};

const editedTask = event =>{
const taskChange = event.target.closest('.tasks__item').querySelector('.task');
taskChange.removeAttribute("readonly");
taskChange.value='';
taskChange.focus();
taskChange.addEventListener('keypress', event=>{
    if(event.keyCode==13){
        changeTask(taskChange);
    } 
});
taskChange.addEventListener('change', ()=>{
     changeTask(taskChange);    
})
};

addedButton.addEventListener('click', showTask);
closedTask.addEventListener('click', closeTask);
okButton.addEventListener('click',addTask);
textareaTask.addEventListener('keypress', event=>{
    if(event.keyCode==13){
       okButton.click();
   }
})