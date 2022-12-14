active = "ArrayApp";
function showMenu(id, bold, sidebar)
{
    if(id != "ArrayAppButtons")
    {
        document.getElementById("ArrayAppButtons").style.display = "none";
        document.getElementById("ArraySidebarContent").style.display = "none";
        document.getElementById("arraymenu").innerHTML = "Array";
    }
    if(id != "VectorAppButtons")
    {
        document.getElementById("VectorAppButtons").style.display = "none";
        document.getElementById("VectorSidebarContent").style.display = "none";
        document.getElementById("vectormenu").innerHTML = "Vector";
    }
    if(id != "ListAppButtons")
    {
        document.getElementById("ListAppButtons").style.display = "none";
        document.getElementById("ListSidebarContent").style.display = "none";
        document.getElementById("listmenu").innerHTML = "Linked List";
    }
    if(id != "StackAppButtons")
    {
        document.getElementById("StackAppButtons").style.display = "none";
        document.getElementById("StackSidebarContent").style.display = "none";
        document.getElementById("stackmenu").innerHTML = "Stack";
    }
    if(id != "QueueAppButtons")
    {
        document.getElementById("QueueAppButtons").style.display = "none";
        document.getElementById("QueueSidebarContent").style.display = "none"; 
        document.getElementById("queuemenu").innerHTML = "Queue";
    }
    if(id != "BinaryTreeAppButtons")
    {
        document.getElementById("BinaryTreeAppButtons").style.display = "none";
        document.getElementById("TreeSidebarContent").style.display = "none";
        document.getElementById("binarytreemenu").innerHTML = "Binary Search Tree";
    }
    if(id != "HashAppButtons")
    {
        document.getElementById("HashAppButtons").style.display = "none";
        document.getElementById("HashSidebarContent").style.display = "none";
        document.getElementById("hashmenu").innerHTML = "Hash";
    }
    if(id != "ProgressMenu")
    {
        document.getElementById("ProgressMenu").style.display = "none";
        document.getElementById("progress").innerHTML = "Progress";
        document.getElementById("maincanvas").style.display = "block";
    }

    if(id == "ProgressMenu")
    {
        document.getElementById("maincanvas").style.display = "none";
    }
    document.getElementById(id).style.display = "block";
    document.getElementById(sidebar).style.display = "block"; 
    
    if(bold == "arraymenu")
    {
        document.getElementById("arraymenu").innerHTML = "<b>Array</b>";
        arraycontroller.drawArray(0, "#D9D9D9", "Array");
        active = "ArrayApp";
    }
    else if(bold == "vectormenu")
    {
        document.getElementById("vectormenu").innerHTML = "<b>Vector</b>";
        vectorcontroller.drawArray(0, "#D9D9D9", "Vector");
        active = "VectorApp";
    }
    else if(bold == "listmenu")
    {
        document.getElementById("listmenu").innerHTML = "<b>Linked List</b>";
        listcontroller.drawArray(0, "#D9D9D9");
        active = "ListApp";
    }
    else if(bold == "stackmenu")
    {
        document.getElementById("stackmenu").innerHTML = "<b>Stack</b>";
        stackcontroller.drawArray(0, "#D9D9D9");
        active = "StackApp";
    }
    else if(bold == "queuemenu")
    {
        document.getElementById("queuemenu").innerHTML = "<b>Queue</b>";
        queuecontroller.drawArray(0, "#D9D9D9");
        active = "QueueApp";
    }
    else if(bold == "binarytreemenu")
    {
        document.getElementById("binarytreemenu").innerHTML = "<b>Binary Search Tree</b>";
        binarytreecontroller.drawArray();
        active = "TreeApp";
    }
    else if(bold == "hashmenu")
    {
        document.getElementById("hashmenu").innerHTML = "<b>Hash</b>";
        hashcontroller.drawArray(0, "#D9D9D9", "Hash");
        active = "HashApp";
    }
    else if(bold == "progress")
    {
        document.getElementById("progress").innerHTML = "<b>Progress</b>";
    }
}

document.getElementById("arraymenu").onclick = function() {showMenu("ArrayAppButtons", "arraymenu", "ArraySidebarContent")};
document.getElementById("vectormenu").onclick = function() {showMenu("VectorAppButtons", "vectormenu", "VectorSidebarContent")};
document.getElementById("listmenu").onclick = function() {showMenu("ListAppButtons", "listmenu", "ListSidebarContent")};
document.getElementById("stackmenu").onclick = function() {showMenu("StackAppButtons", "stackmenu", "StackSidebarContent")};
document.getElementById("queuemenu").onclick = function() {showMenu("QueueAppButtons", "queuemenu", "QueueSidebarContent")};
document.getElementById("binarytreemenu").onclick = function() {showMenu("BinaryTreeAppButtons", "binarytreemenu", "TreeSidebarContent")};
document.getElementById("hashmenu").onclick = function() {showMenu("HashAppButtons", "hashmenu", "HashSidebarContent")};
document.getElementById("progress").onclick = function() {showMenu("ProgressMenu", "progress", "ArraySidebarContent")};

showMenu("ArrayAppButtons", "arraymenu", "ArraySidebarContent");

window.onresize = function()
{
    visualizercontroller.canvas.height = (window.innerHeight);
    visualizercontroller.canvas.width = (window.innerWidth);

    switch(active)
    {
        case "ArrayApp":
            arraycontroller.drawArray(0, "#D9D9D9", "Array");
        break;
        case "VectorApp":
            vectorcontroller.drawArray(0, "#D9D9D9", "Vector");
        break;
        case "ListApp":
            listcontroller.drawArray(0, "#D9D9D9");
        break;
        case "StackApp":
            stackcontroller.drawArray(0, "#D9D9D9");
        break;
        case "QueueApp":
            queuecontroller.drawArray(0, "#D9D9D9");
        break;
        case "TreeApp":
            binarytreecontroller.drawArray();
        break;
        case "HashApp":
            hashcontroller.drawArray(0, "#D9D9D9", "Hash");
    }
}

//hide login form when clicking outside of it
var modal = document.getElementById("modal");
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}