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
    if(id != "StackAppButtons")
    {
        document.getElementById("StackAppButtons").style.display = "none"; 
        document.getElementById("stackmenu").innerHTML = "Stack";
    }
    if(id != "QueueAppButtons")
    {
        document.getElementById("QueueAppButtons").style.display = "none"; 
        document.getElementById("queuemenu").innerHTML = "Queue";
    }
    if(id != "BinaryTreeAppButtons")
    {
        document.getElementById("BinaryTreeAppButtons").style.display = "none"; 
        document.getElementById("binarytreemenu").innerHTML = "Binary Tree";
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
    else if(bold == "stackmenu")
    {
        document.getElementById("stackmenu").innerHTML = "<b>Stack</b>";
        stackcontroller.drawArray();
    }
    else if(bold == "queuemenu")
    {
        document.getElementById("queuemenu").innerHTML = "<b>Queue</b>";
        queuecontroller.drawArray();
    }
    else if(bold == "binarytreemenu")
    {
        document.getElementById("binarytreemenu").innerHTML = "<b>Binary Tree</b>";
        binarytreecontroller.drawArray();
    }
}

arraymenubutton = document.getElementById("arraymenu");
vectormenubutton = document.getElementById("vectormenu");
listmenubutton = document.getElementById("listmenu");
stackmenubutton = document.getElementById("stackmenu");
queuemenubutton = document.getElementById("queuemenu");
binarytreemenubutton = document.getElementById("binarytreemenu");

arraymenubutton.onclick = function() {showMenu("ArrayAppButtons", "arraymenu")};
vectormenubutton.onclick = function() {showMenu("VectorAppButtons", "vectormenu")};
listmenubutton.onclick = function() {showMenu("ListAppButtons", "listmenu")};
stackmenubutton.onclick = function() {showMenu("StackAppButtons", "stackmenu")};
queuemenubutton.onclick = function() {showMenu("QueueAppButtons", "queuemenu")};
binarytreemenubutton.onclick = function() {showMenu("BinaryTreeAppButtons", "binarytreemenu")};


showMenu("ArrayAppButtons", "arraymenu");