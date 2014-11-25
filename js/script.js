
var cart = {
addButton :     document.getElementById('addNewTask'),
newTask    :    document.getElementById('addItem'),
incompleteTask: document.getElementById('incompletedList'),
completedTask:  document.getElementById('completedList'),
listItem :          "",
// confirmEntry:   function () {
//                 var userItem = value.replace(/^\s+/, '').replace(/\s+$/, '');
//                 if (user)    
validate :  function (item){

if (item.trim()===""){
    alert('ERROR');
}else {
    return item;
}
},

//                 }

createNewItem: function() {
          //          console.log(this.newTask.value);
                var list = document.createElement('li');
                var checkbox = document.createElement('input');
                    checkbox.setAttribute('type', 'checkbox');
                var label = document.createTextNode(this.newTask.value);
                 
                list.appendChild(checkbox);
                list.appendChild(label);
                return list;

                },

addItem :        function() {
                   var item = this.newTask.value;
                   console.log(item); 
                   if (this.validate(item)) {
                   var listItem = this.createNewItem(item);
                   this.incompleteTask.appendChild(listItem);
                   this.listItem= listItem;
                   this.bindTaskEvents(listItem, cart.taskCompleted);
                   return this.listItem;
                   }
                  
                },

 bindTaskEvents : function (taskListItem, checkBoxEventHandler){
    
                var checkBox = taskListItem.querySelector("input[type=checkbox]");
                checkBox.onclick = checkBoxEventHandler;
                console.log(checkBox);
},

 taskCompleted :function() {
                var listItem = this.parentNode;
                // console.log(this.completedTask);
                cart.completedTask.appendChild(listItem);
                cart.bindTaskEvents(listItem, cart.taskIncomplete);
},

taskIncomplete : function(){
                var listItem = this.parentNode;
                cart.incompleteTask.appendChild(listItem);
                cart.bindTaskEvents(listItem, cart.taskCompleted);

},

trasverseIncomplete:     function () {
                for (var i = 0; i < cart.incompleteTask.children.length; i++) {
                cart.bindTaskEvents(cart.incompleteTask.children[i], cart.taskCompleted);
                };

},
trasverseComplete: function(){for (var i = 0; i < cart.completedTask.children.length; i++) {
                cart.bindTaskEvents(cart.completedTask.children[i], cart.taskIncomplete);

            };
},


};

/*================================
EVENT HANDLERS
================================*/
cart.addButton.addEventListener('click', function(e){
    e.preventDefault();
    cart.addItem();} , false);
cart.trasverseIncomplete();
cart.trasverseComplete();
