class VisualizerApp
{
    constructor()
    {
        this.canvas = document.getElementById('maincanvas');
        this.context = this.canvas.getContext('2d');
    }
}

class ArrayApp extends VisualizerApp
{
    size = 0;
    elements = [];

    drawArray()
    {
        console.log("Drawing in Array App");
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.context.font = '20px inter';

        let x = 50;
        let y = 200;

        if(this.elements.length == 0)
        {
            console.log("array empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Array is not initialized", (x), (y));
        }
        else
        {
            for(let i = 0; i < this.elements.length; i++)
            {
                console.log("rendering element");
                this.context.fillStyle="#D9D9D9";
                this.context.fillRect(x, y, 100, 100);
                this.context.fillStyle="black";
                this.context.fillText(this.elements[i], (x+40), (y+50));
                if(i == 0)
                {
                    this.context.fillText("i = 0", (x+35), (y-20));
                }
                else if(i == (this.elements.length-1))
                {
                    this.context.fillText(("i = " + (this.elements.length-1)), (x+35), (y-20));
                }
                x += 125;
            }
        }
    }
    setSize()
    {
        let newsize = document.getElementById("arraysize").value;
        this.size = newsize;
        this.elements = [];
        for(let i = 0; i < this.size; i++)
        {
            console.log("adding 0 element");
            this.elements[i] = 0;
        }
        this.drawArray();
    }
    setElement()
    {
        console.log("Setting array element");

        let index = document.getElementById("arrayindexset").value;
        let element = prompt("Enter element", 0)

        this.elements[index] = element;

        this.drawArray();
    }
    findElement()
    {
        console.log("Findelement");
        let element = document.getElementById("arrayindexfind").value;
        let flag = false;
        for(let i = 0; i < this.elements.length; i++)
        {
            if(this.elements[i] == element)
            {
                alert("Element " + element + " found at index " + i);
                flag = true;
            }
        }
        if(!flag)
        {
            alert("Element " + element + " not found.");
        }
    }
}

class VectorApp extends VisualizerApp
{
    elements = [];
    index = 0;

    drawArray()
    {
        console.log("Drawing in Vector App");
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.context.font = '20px inter';

        let x = 50;
        let y = 200;
        if(this.elements.length == 0)
        {
            console.log("vector empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Vector contains no elements", (x), (y));
        }
        for(let i = 0; i < this.elements.length; i++)
        {
            console.log("rendering element");
            this.context.fillStyle="#D9D9D9";
            this.context.fillRect(x, y, 100, 100);
            this.context.fillStyle="black";
            this.context.fillText(this.elements[i], (x+40), (y+50));
            if(i == 0)
            {
                this.context.fillText("i = 0", (x+35), (y-20));
            }
            else if(i == (this.elements.length-1))
            {
                this.context.fillText(("i = " + (this.elements.length-1)), (x+35), (y-20));
            }
            x += 125;
        }
    }
    push_back()
    {
        console.log("pushing back element");
        let element = document.getElementById("vectorpushback").value;

        this.elements[this.index] = element;
        (this.index)++;

        this.drawArray();
    }
    pop_back()
    {
        console.log("popping back element");

        this.elements.pop();
        (this.index)--;

        this.drawArray();
    }
    findElement()
    {
        console.log("Findelement");
        let element = document.getElementById("vectorfind").value;
        let flag = false;
        for(let i = 0; i < this.elements.length; i++)
        {
            if(this.elements[i] == element)
            {
                alert("Element " + element + " found at index " + i);
                flag = true;
            }
        }
        if(!flag)
        {
            alert("Element " + element + " not found.");
        }
    }
}

class ListApp extends VisualizerApp
{
    elements = [];
    index = 0;

    drawArray()
    {
        console.log("Drawing in List App");
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.context.font = '20px inter';

        let x = 50;
        let y = 200;
        for(let i = 0; i < this.elements.length; i++)
        {
            console.log("rendering element");
            this.context.fillStyle="#D9D9D9";
            this.context.fillRect(x, y, 100, 100);
            this.context.fillStyle="black";
            this.context.fillText(this.elements[i], (x+40), (y+50));
            if(i == 0)
            {
                this.context.fillText("i = 0", (x+35), (y-20));
            }
            else if(i == (this.elements.length-1))
            {
                this.context.fillText(("i = " + (this.elements.length-1)), (x+35), (y-20));
            }
          
            x += 100; 

            this.context.strokeStyle = 'black';
            this.context.lineWidth = 5;
            this.context.beginPath();
            this.context.moveTo(x,y + 50);

            x += 75;

            this.context.lineTo(x,y+ 50);
            this.context.stroke();
            this.context.beginPath();

            this.context.moveTo(x - 20,y +20);
            this.context.lineTo(x,y + 50);
            this.context.stroke();

            this.context.moveTo(x - 20,y +80);
            this.context.lineTo(x,y + 50);
            this.context.stroke();
        }
        if(this.elements.length == 0)
        {
            console.log("linkedlist empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Linked list contains no elements", (x), (y));
        }
        else
        {
            console.log("rendering element");
            this.context.fillStyle="#D9D9D9";
            this.context.fillRect(x, y, 100, 100);
            this.context.fillStyle="black";
            this.context.fillText("NULL", (x+25), (y+55));
        }   
    }
    add()
    {
        console.log("pushing back element");
        let element = document.getElementById("add").value;

        this.elements[this.index] = element;
        (this.index)++;

        this.drawArray();
    }
    delete()
    {
        console.log("popping back element");

        this.elements.pop();
        (this.index)--;

        this.drawArray();
    }
    findElement()
    {
        console.log("Findelement");
        let element = document.getElementById("find").value;
        for(let i = 0; i < this.elements.length; i++)
        {
            if(this.elements[i] == element)
            {
                alert("Element " + element + " found at index " + i);
            }
        }
    }
}

class StackApp extends VisualizerApp
{
    elements = [];
    index = 0;

    drawArray()
    {
        console.log("Drawing in Stack App");
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.context.font = '20px inter';

        let x = 650;
        let y = 500;
        if(this.elements.length == 0)
        {
            console.log("stack empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Stack contains no elements", (50), (200));
        }
        for(let i = 0; i < this.elements.length; i++)
        {
            console.log("rendering element");
            this.context.fillStyle="#D9D9D9";
            this.context.fillRect(x, y, 100, 100);
            this.context.fillStyle="black";
            this.context.fillText(this.elements[i], (x+40), (y+50));
            if(i == 0)
            {
                this.context.fillText("i = 0", (x+135), (y+50));
            }
            else if(i == (this.elements.length-1))
            {
                this.context.fillText(("i = " + (this.elements.length-1)), (x+135), (y+50));
            }
            y-=125;
        }  
    }
    push()
    {
        console.log("pushing back element");
        let element = document.getElementById("stackpush").value;

        this.elements[this.index] = element;
        (this.index)++;

        this.drawArray();
    }
    pop()
    {
        console.log("popping back element");

        this.elements.pop();
        (this.index)--;

        this.drawArray();
    }
    findElement()
    {
        console.log("Findelement");
        let element = document.getElementById("stackfind").value;
        let flag = false;
        for(let i = 0; i < this.elements.length; i++)
        {
            if(this.elements[i] == element)
            {
                alert("Element " + element + " found at index " + i);
                flag = true;
            }
        }
        if(!flag)
        {
            alert("Element " + element + " not found.");
        }
    }
}

const arraycontroller = new ArrayApp();
const vectorcontroller = new VectorApp();
const listcontroller = new ListApp();
const stackcontroller = new StackApp();
arraycontroller.drawArray();