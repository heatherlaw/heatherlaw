var listItems=[];
function addItem(){
    listItems.push(prompt("Please enter item name"));
    printList();
}
function printList(){
    document.getElementById("list").innerHTML="";
    for(let i=0; i<listItems.length; i++){
        document.getElementById("list").innerHTML+="<ul style=\"display:list-item\">"+(listItems[i])+"</ul>";
    }
}
function removeItem(){
    itemRemove=prompt("Which item would you like to remove?");
    gone=(listItems.indexOf(itemRemove));
    listItems.splice(gone, 1);
    printList();
}