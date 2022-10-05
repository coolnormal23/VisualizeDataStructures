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

    document.getElementById(id).style.display = "block"; 
    
    if(bold == "arraymenu")
    {
        document.getElementById("arraymenu").innerHTML = "<b>Array</b>";
    }
    else if(bold == "vectormenu")
    {
        document.getElementById("vectormenu").innerHTML = "<b>Vector</b>";
    }
}

arraymenubutton = document.getElementById("arraymenu");
vectormenubutton = document.getElementById("vectormenu");

arraymenubutton.onclick = function() {showMenu("ArrayAppButtons", "arraymenu")};
vectormenubutton.onclick = function() {showMenu("VectorAppButtons", "vectormenu")};

showMenu("ArrayAppButtons", "arraymenu");