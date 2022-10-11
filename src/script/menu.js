function showMenu(id, bold)
{
    if(id != "ArrayAppButtons")
    {
        document.getElementById("ArrayAppButtons").style.display = "none";
        document.getElementById("arraymenu").innerHTML = "Array";
    }
    if(id != "VectorAppButtons")
    {
        document.getElementById("VectorAppButtons").style.display = "none"; 
        document.getElementById("vectormenu").innerHTML = "Vector";
    }
    if(id != "ListAppButtons")
    {
        document.getElementById("ListAppButtons").style.display = "none"; 
        document.getElementById("listmenu").innerHTML = "Linked List";
    }

    document.getElementById(id).style.display = "block"; 
    
    if(bold == "arraymenu")
    {
        document.getElementById("arraymenu").innerHTML = "<b>Array</b>";
        arraycontroller.drawArray();
    }
    else if(bold == "vectormenu")
    {
        document.getElementById("vectormenu").innerHTML = "<b>Vector</b>";
        vectorcontroller.drawArray();
    }
    else if(bold == "listmenu")
    {
        document.getElementById("listmenu").innerHTML = "<b>Linked List</b>";
        listcontroller.drawArray();
    }
}

arraymenubutton = document.getElementById("arraymenu");
vectormenubutton = document.getElementById("vectormenu");
listmenubutton = document.getElementById("listmenu");

arraymenubutton.onclick = function() {showMenu("ArrayAppButtons", "arraymenu")};
vectormenubutton.onclick = function() {showMenu("VectorAppButtons", "vectormenu")};
listmenubutton.onclick = function() {showMenu("ListAppButtons", "listmenu")};


showMenu("ArrayAppButtons", "arraymenu");