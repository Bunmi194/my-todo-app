let i = 1;

let addButton = document.getElementById('btnAdd');
addButton.addEventListener('click', ()=>{
    if(document.getElementById('inputElement').value == ''){
        alert('Please enter a to-do label');
    }else{
        let taskDiv = document.createElement("div");
        let date = new Date().toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
        let time = new Date().toLocaleString('en-us', {hour: 'numeric', minute: 'numeric'});
        let re = new Date().toLocaleDateString()
        let toDoContent = document.getElementById('inputElement').value;
        taskDiv.setAttribute('id',`itemEach${i}`);
        
        taskDiv.setAttribute('class','itemEach');
        taskDiv.innerHTML = `<div class='todoblock'><h4 class='itemHeader' id='itemHeader${i}'>${toDoContent}</h4><span class='date'>${date}&nbsp;&#x2022;&nbsp;${time}</span></div><div class='icons'><i class='fa-regular fa-square-check fa-2xl blue button' onclick=complete(${i})></i><i class='fa-solid fa-pen-to-square fa-2xl blue button' onclick=editItem(${i})></i><i class='fa-solid fa-rectangle-xmark fa-2xl red button' onclick=removeItem(${i})></i></div>`;
    
        let blockDiv = document.getElementById('wrapper');
        blockDiv.appendChild(taskDiv); 
        //"<div class='todoblock'></div>"2. <div class="itemEach" id="itemEach">
    
        //refresh
        document.getElementById('inputElement').value = '';
        i++;
        // let innerContent = document.querySelectorAll('.itemEach');
        // console.log(innerContent);
    }
});

const removeItem = (idd) =>{
    //removeitem
    let id = 'itemEach'+idd;
    let deleteItem = document.getElementById(id);
    //alert(deleteItem.innerHTML)
    let rsp = confirm('Are you sure you want to delete this task?');
    if (rsp == false) {
        preventDefault();
        return false;
    }else{
        deleteItem.remove();
    }
}

const editItem = (id) =>{
    let idd = 'itemHeader'+id;
    let element = document.getElementById(idd);
    if (element.classList.contains('completed')) {
        alert('Task has already been completed');
        return false
    }
    let data = element.innerText;
    let response = prompt('Please enter new item',data);
    //console.log(response)
    if (response == null || response == '') {
        document.getElementById(idd).innerHTML = data;
    }else{
        document.getElementById(idd).innerHTML = response;
    }
}

const complete = (id) =>{
    let idd = 'itemHeader'+id;
    let element = document.getElementById(idd);
    //alert(element.classList.contains('completed'))
    if (!element.classList.contains('completed')) {
        let response = confirm('Are you sure you want to mark this task as completed?');
        if (response) {
            element.classList.add('completed');
        }
    }else if(element.classList.contains('completed')){
        let rsp = confirm('Are you sure you want to reopen this task?');
        if (rsp) {
            element.classList.remove('completed');
        }
    }
}
// var div = document.getElementById('wrapper');
// alert(div.childElementCount)

const searchElements = (event) =>{
    let divElement = document.getElementById('wrapper');
    let innerContent = document.querySelectorAll('.itemEach');
    console.log(innerContent);
    let strings = event.target.value;
    let string = strings.toLowerCase();
    //alert(divElement.childElementCount)
    if (divElement.childElementCount > 0) {
        //alert(innerContent[0].innerText.toLowerCase())

        for (let i = 0; i < divElement.childElementCount; i++) {
            if (innerContent[i].innerText.toLowerCase().includes(string)) {
                //show
                innerContent[i].style.display = 'flex';
            }else{
                //hide
                innerContent[i].style.display = 'none';
            }
            
        }
    }else{
        return false;
    }
}

let searchBlock = document.getElementById('search');
// let searchValue = searchBlock.value;
searchBlock.addEventListener('keyup', searchElements)


// let divElement = document.getElementById('wrapper');
// let innerContent = document.querySelectorAll('.itemHeader');
// console.log(innerContent[0].innerText)








// //console.log(new Date().toLocaleDateString('en-us', {weekday:"long", day:"numeric", month:"long", year:"numeric"}))