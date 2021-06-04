const table=document.getElementsByTagName("tbody")[0];
const rows=document.getElementsByTagName("tr");
const lastPosition=document.getElementsByClassName("main__content__newLottery-number endPosition");


function addRow(){

    const deleteBtn=document.getElementsByClassName("main__content__newLottery-deleteButton");

    if(deleteBtn[deleteBtn.length-1]!=undefined){
        deleteBtn[deleteBtn.length-1].remove();
    }

    const addBtn=document.getElementsByClassName("main__content__newLottery-addButton");

    let nextPosition=parseInt(lastPosition[lastPosition.length-1].value)+1;
    lastPosition[lastPosition.length-1].setAttribute("disabled","");

    addBtn[addBtn.length-1].setAttribute("disabled","");

    let newRow=document.createElement("tr");
    let newData=document.createElement("td");
    let newInput=document.createElement("input");
    
    newInput.setAttribute("type","number");
    newInput.setAttribute("name","startPosition");
    newInput.setAttribute("class","main__content__newLottery-number startPosition");
    newInput.setAttribute("min",nextPosition);
    newInput.setAttribute("step","1");
    newInput.setAttribute("value",nextPosition);
    newInput.setAttribute("disabled","");
    
    
    newData.appendChild(newInput);
    newRow.appendChild(newData);

    newData=document.createElement("td");
    newInput=document.createElement("input");
    
    newInput.setAttribute("type","number");
    newInput.setAttribute("name","endPosition");
    newInput.setAttribute("class","main__content__newLottery-number endPosition");
    newInput.setAttribute("min",nextPosition);
    newInput.setAttribute("step","1");
    newInput.setAttribute("value",nextPosition);

    newData.appendChild(newInput);
    newRow.appendChild(newData);

    newData=document.createElement("td");
    newInput=document.createElement("input");
    
    newInput.setAttribute("type","number");
    newInput.setAttribute("name","porcentage");
    newInput.setAttribute("class","main__content__newLottery-number porcentage");
    newInput.setAttribute("min","0.01");
    newInput.setAttribute("step","0.01");
    newInput.setAttribute("value","1");

    newData.appendChild(newInput);
    newRow.appendChild(newData);

    newData=document.createElement("td");
    newButton=document.createElement("button");
    
    newButton.setAttribute("class","main__content__newLottery-addButton");
    newButton.setAttribute("onclick","addRow(); return false;")
    newButton.innerHTML="Agregar";

    newData.appendChild(newButton);
    newRow.appendChild(newData);

    newData=document.createElement("td");
    newButton=document.createElement("button");
    
    newButton.setAttribute("class","main__content__newLottery-deleteButton");
    newButton.setAttribute("onclick","deleteRow(); return false;")
    newButton.innerHTML="Eliminar";

    newData.appendChild(newButton);
    newRow.appendChild(newData);
    table.appendChild(newRow);

    return false;
}

function deleteRow(){
    const lastRow=document.getElementsByTagName("tr");
    lastRow[lastRow.length-1].remove();

    const addBtn=document.getElementsByClassName("main__content__newLottery-addButton");
    addBtn[addBtn.length-1].removeAttribute("disabled");

    lastPosition[lastPosition.length-1].removeAttribute("disabled");

    if (lastRow.length>2){
        let newData=document.createElement("td");
        let newButton=document.createElement("button");

        newButton.setAttribute("class","main__content__newLottery-deleteButton");
        newButton.setAttribute("onclick","deleteRow(); return false;")
        newButton.innerHTML="Eliminar";

        newData.appendChild(newButton);
        lastRow[lastRow.length-1].appendChild(newData);
    }
}