function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class VisualizerApp
{
    elements = [];
    index = 0;
    size = 0;
    constructor()
    {
        this.canvas = document.getElementById('maincanvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.height = (window.innerHeight);
        this.canvas.width = (window.innerWidth);
    }
    clearCanvas()
    {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.context.font = '20px inter';
    }
    async drawArray(index, color, structure)
    {
        console.log("Drawing in " + structure + "App");
        this.clearCanvas();

        let x = 50;
        let y = 100;

        if(this.elements.length == 0)
        {
            console.log("array empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText(structure + " is not initialized", (x), (y));
        }
        else
        {
            for(let i = 0; i < this.size; i++)
            {
                if(x >= (this.canvas.width-200))
                {
                    x = 50;
                    y += 200;
                }
                console.log("rendering element");

                if(index == i)
                    this.context.fillStyle=color;
                else
                    this.context.fillStyle="#D9D9D9";

                this.context.fillRect(x, y, 100, 100);
                this.context.fillStyle="black";
                
                if(this.elements[i] == undefined)
                    this.context.fillText("NULL", (x+40), (y+50));
                else
                    this.context.fillText(this.elements[i], (x+40), (y+50));
                
                this.context.fillText(("i = " + i), (x+35), (y-20));
            
                x += 125;
            }
            if(color != "#D9D9D9")
                    await sleep(700);
        }
    }
    async findElement(structure)
    {   
        var pop = document.getElementById(structure + "findpop");
        var find = document.getElementById(structure + "find");
        if (find.checkValidity())
        {   
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");
                
            console.log("Findelement");
            if(this.elements.length == 0)
                alert(structure + " does not exist yet");
            else
            {    
                let element = find.value;
                let found = false;
                for( let i = 0; i < this.elements.length; i++)
                {
                        if(element == this.elements[i])
                        {
                            found = true;
                            await this.drawArray(i, "#3cff3e");
                            alert("Element " + element + " found at index " + i);
                        }
                        else
                        {
                            await this.drawArray(i, "#ff0000");
                        }
                }
                if(found == false)
                {
                    alert("Element " + element + " not found.");
                }
                this.drawArray(0, "#D9D9D9");
            }
        }
        else
            pop.classList.toggle("show");    
    }  
    setSize(structure)
    {   
        var pop = document.getElementById(structure + "sizepop");
        var s = document.getElementById(structure + "size");
        if (s.checkValidity())
        {   
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            this.size = s.value;

            for(let i = 0; i < this.size; i++)
            {
                console.log("adding undefined element");
                this.elements[i] = undefined;
            }
            this.clearCanvas();
            this.drawArray(0, "#D9D9D9", structure);}
        else
            pop.classList.toggle("show");    
            
    }
}

class ArrayApp extends VisualizerApp
{  
    setElement()
    {
        var pop = document.getElementById("arraysetpop");
        var set = document.getElementById("arrayindexset")
        if(set.checkValidity())
        {
            console.log("Setting array element");
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            let index = set.value;
            if(index < this.elements.length && index > -1)
            {
                let element = prompt("Enter element", 0);

                this.elements[index] = element;
            }
            else
                alert("This index does not exist");

            this.drawArray(0, "#D9D9D9", "Array");
        }
        else
            pop.classList.toggle("show"); 
            
    } 
}


class VectorApp extends VisualizerApp
{
    push_back()
    {
        var pop = document.getElementById("vectorpushpop");
        var push = document.getElementById("vectorpushback")
        if(push.checkValidity())
        {
            console.log("Setting array element");
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            console.log("pushing back element");
            let element = push.value;

            this.elements[this.index] = element;
            (this.index)++;
            
            this.size = this.elements.length;
            this.drawArray(0, "#D9D9D9", "Vector");
        }
        else
         pop.classList.toggle("show"); 
    }
    pop_back()
    {
        console.log("popping back element");

        this.elements.pop();
        (this.index)--;

        this.size = this.elements.length;
        this.drawArray(0, "#D9D9D9", "Vector");
    }
}

class ListApp extends VisualizerApp
{
    drawArrow(x, y)
    {
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
        return x;
    }
    async drawArray(index, color)
    {
        console.log("Drawing in List App");
        this.clearCanvas();

        let x = 50;
        let y = 100;
        for(let i = 0; i < this.elements.length; i++)
        {
            if(x >= (this.canvas.width-200))
            {
                x = 50;
                y += 200;
            }
            console.log("rendering element");
            if(i == index)
                this.context.fillStyle=color;
            else
                this.context.fillStyle="#D9D9D9";
            this.context.fillRect(x, y, 100, 100);
            this.context.fillStyle="black";
            this.context.fillText(this.elements[i], (x+40), (y+50));
            if(i == 0)
            {
                this.context.fillText("head", (x+35), (y-20));
            }
            else if(i == (this.elements.length-1))
            {
                this.context.fillText("tail", (x+35), (y-20));
            }
          
            x += 100; 

            x = this.drawArrow(x, y);
            
        }
        if(this.elements.length == 0)
        {
            console.log("linkedlist empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Linked List contains no elements", (x), (y));
        }
        else
        {
            if(x >= (this.canvas.width-200))
            {
                x = 50;
                y += 200;
            }
            console.log("rendering element");
            this.context.fillStyle="#D9D9D9";
            this.context.fillRect(x, y, 100, 100);
            this.context.fillStyle="black";
            this.context.fillText("NULL", (x+25), (y+55));
        }   
        if(color != "#D9D9D9")
            await sleep(700);
    }
    add()
    {
        var pop = document.getElementById("listaddpop");
        var add = document.getElementById("listadd");
        if(add.checkValidity())
        {
            console.log("Setting array element");
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            let element = add.value;

            this.elements.push(element);

            this.drawArray(0, "#D9D9D9");
        }
        else
            pop.classList.toggle("show"); 
    }
    delete()
    {
        var pop = document.getElementById("listdeletepop");
        var del = document.getElementById("listdelete");
        if(del.checkValidity())
        {
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            console.log("deleting element");
            let i = 0;
            let element = del.value;

            while(this.elements[i] != element && i <= this.elements.length)
                i++;
            
            if(i < this.elements.length + 1)
                this.elements.splice(i, 1);

            this.drawArray(0, "#D9D9D9");
        }
        else
            pop.classList.toggle("show"); 
    }
}

class StackApp extends VisualizerApp
{
    maxSize = Math.floor((this.canvas.height - 50) / 100);
    async drawArray(index, color)
    {
        this.maxSize = Math.floor((this.canvas.height - 50 ) / 100);
        console.log("Drawing in Stack App");
        this.clearCanvas();

        while(this.elements.length > this.maxSize)
            this.pop();
        
        let x_Axis = 50;
        let y_Axis = (this.canvas.height-250);
        if(this.elements.length == 0)
        {
            console.log("stack empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Stack contains no elements", (50), (100));
        }
        for(let i = 0; i < this.elements.length; i++)
        {
            console.log("rendering element");
            if(i == index)
                this.context.fillStyle=color;
            else
                this.context.fillStyle="#D9D9D9";
            
            this.context.fillRect(x_Axis, y_Axis, 150, 50);
            this.context.fillStyle="black";
            this.context.fillText(this.elements[i], (x_Axis+64), (y_Axis+33));
            if(i == 0)
                this.context.fillText("bottom", (x_Axis+175), (y_Axis+40));
            else if(i == (this.elements.length-1))
                this.context.fillText("top", (x_Axis+175), (y_Axis+40));

            y_Axis-=75;
            
        } 
        if(color != "#D9D9D9")
            await sleep(700); 
    }
    push()
    {
        var pop = document.getElementById("stackpushpop");
        var push = document.getElementById("stackpush");
        if(push.checkValidity())
        {
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            if(this.index + 1 <= this.maxSize)
            {    
                console.log("pushing back element");
                let element = push.value;

                this.elements[this.index] = element;
                (this.index)++;

                this.drawArray(0, "#D9D9D9");
            }
        }
        else
            pop.classList.toggle("show"); 
    }
    pop()
    {
        console.log("popping back element");

        this.elements.pop();
        (this.index)--;

        this.drawArray(0, "#D9D9D9");
    }
}

class QueueApp extends VisualizerApp
{
    async drawArray(index, color)
    {
        console.log("Drawing in Array App");
        this.clearCanvas();

        let x = 50;
        let y = 100;

        if(this.elements.length == 0)
        {
            console.log("array empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Queue is not initialized", (x), (y));
        }
        else
        {
            for(let i = 0; i < this.elements.length; i++)
            {
                if(x >= (this.canvas.width-200))
                {
                    x = 50;
                    y += 200;
                }
                console.log("rendering element");

                if(index == i)
                    this.context.fillStyle=color;
                else
                    this.context.fillStyle="#D9D9D9";

                this.context.fillRect(x, y, 100, 100);
                this.context.fillStyle="black";
                
                if(this.elements[i] == undefined)
                    this.context.fillText("NULL", (x+40), (y+50));
                else
                    this.context.fillText(this.elements[i], (x+40), (y+50));
                if(i == 0)
                {
                    this.context.fillText("start", (x+35), (y-20));
                }
                else if(i == (this.elements.length-1))
                {
                    this.context.fillText(("end"), (x+35), (y-20));
                }
                x += 125;
            }
            if(color != "#D9D9D9")
                    await sleep(700);
        }
    }
    enqueue()
    {
        
        var pop = document.getElementById("enqueuepop");
        var nq = document.getElementById("enqueue");
        if (nq.checkValidity())
        {   
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            console.log("dequeueing element");
            let element = nq.value;

            this.elements.unshift(element);
            (this.index)++;

            this.drawArray(0, "#D9D9D9");
        }
        else
            pop.classList.toggle("show");
    }
    dequeue()
    {
        console.log("dequeueing element");

        this.elements.pop();
        (this.index)--;

        this.drawArray(0, "#D9D9D9");
    }
}

class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTreeApp extends VisualizerApp
{
    constructor()
    {
        super();
        this.root = null;
        this.x = (window.innerWidth/2);
        this.y = 200;
        this.depth = 0;
    }
    
    clearTree()
    {
        this.root = null;
        this.drawArray();
    }

    insert()
    {
        var data = document.getElementById("binarytreeinsert").value;
        // Creating a node and initialising
        // with data
        var newNode = new Node(data);
        
        // root is null then node will
        // be added to the tree and made root.
        if(this.root === null)
        {
            this.root = newNode;
        }
        else
        {
            // find the correct position in the
            // tree and add the node
            this.insertNode(this.root, newNode);
        }
        this.drawArray();
    }
    
    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    insertNode(node, newNode)
    {
        // if the data is less than the node
        // data move left of the tree
        if(newNode.data < node.data)
        {
            // if left is null insert node here
            if(node.left === null)
            node.left = newNode;
            else
            
            // if left is not null recur until
            // null is found
            this.insertNode(node.left, newNode);
        }
        else
        {
            // if right is null insert node here
            if(node.right === null)
            node.right = newNode;
            else
            
            // if right is not null recur until
            // null is found
            this.insertNode(node.right,newNode);
        }
    }
    
    remove(data)
    {
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.removeNode(this.root, data);
    }
    
    // Method to remove node with a
    // given data
    // it recur over the tree to find the
    // data and removes it
    removeNode(node, key)
    {
        
        // if the root is null then tree is
        // empty
        if(node === null)
        return null;
        
        // if data to be delete is less than
        // roots data then move to left subtree
        else if(key < node.data)
        {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        
        // if data to be delete is greater than
        // roots data then move to right subtree
        else if(key > node.data)
        {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        
        // if data is similar to the root's data
        // then delete this node
        else
        {
            // deleting node with no children
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }
            
            // deleting node with one children
            if(node.left === null)
            {
                node = node.right;
                return node;
            }
            
            else if(node.right === null)
            {
                node = node.left;
                return node;
            }
            
            // Deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
    
    travel(node, direction)
    {
        if(direction !== "none")
        {
            this.depth++;
        }
        if(node !== null)
        {
            console.log(node.data);
            console.log("rendering element");
            
            if(direction == "left")
            {
                this.x = (this.x-150+(40*this.depth));
                this.y = (200+(150*this.depth));
            }
            if(direction == "right")
            {
                this.x = (this.x+150-(40*this.depth));
                this.y = (200+(150*this.depth));
            }
            
            this.context.fillStyle="#D9D9D9";
            this.context.fillRect(this.x, this.y, 50, 50);
            this.context.fillStyle="black";
            this.context.fillText(node.data, (this.x+20), (this.y+25));
            
            this.travel(node.left, "left");
            if(node.left !== null)
            this.x = this.x+150-(40*this.depth);

            this.depth--;
            this.travel(node.right, "right");

            if(node.right !== null)
            this.x = this.x-150+(40*this.depth);
            this.depth--;
        }
    }

    drawArray()
    {
        console.log("Drawing in Binary Tree App");
        this.clearCanvas();

        if(this.root == null)
        {
            console.log("binary tree empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Binary search tree is empty", (50), (100));
        }
        else
        {
            this.x = (window.innerWidth/2)
            this.y = 200;
            this.depth = 0;
            this.travel(this.root, "none");
        }
    }
}

class HashApp extends VisualizerApp
{
    add()
    {
        var pop = document.getElementById("hashaddpop");
        var add = document.getElementById("hashadd");
        if (add.checkValidity())
        {   
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            console.log("Setting array element");

            let element = parseInt(add.value);
            let key = Math.floor(this.size * (element * 0.618033 % 1));
            let original = this.elements[key];

            if(this.elements[key] !== undefined && this.elements[key] != element)
            alert("Hash collision. Element at index " + key + " will change from " + original + " to " + element);
            this.elements[key] = element; 
            this.drawArray(0, "#D9D9D9");
        }
        else
            pop.classList.toggle("show");

    }
    async findElement()
    {
        var pop = document.getElementById("hashfindpop");
        var find = document.getElementById("hashfind");
        if (find.checkValidity())
        {   
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            let element = find.value;
            let index = Math.floor(this.size * (element * 0.618033 % 1));
            
            if(this.elements[index] == element)
            {
                await this.drawArray(index, "#3cff3e");
                alert("Element " + element + " found at index " + index);
            }
            else
            {
                await this.drawArray(index, "#ff0000");
                alert("Element " + element + " not found");
            }
            this.drawArray(0, "#D9D9D9", "Hash");
        }
        else
            pop.classList.toggle("show");   
    }
    delete()
    {
        var pop = document.getElementById("hashdeletepop");
        var del = document.getElementById("hashdelete");
        if (del.checkValidity())
        {   
            if(window.getComputedStyle(pop).visibility == "visible")
                pop.classList.toggle("show");

            let element = del.value;
            let index = Math.floor(this.size * (element * 0.618033 % 1));
            if(this.elements[index] == element)
                this.elements[index] = undefined;
            else
                alert("Element " + element + " does not exist in the hash")

            this.drawArray(0, "#D9D9D9", "Hash");
        }
        else
            pop.classList.toggle("show");
    }
}

const visualizercontroller = new VisualizerApp();
const arraycontroller = new ArrayApp();
const vectorcontroller = new VectorApp();
const listcontroller = new ListApp();
const stackcontroller = new StackApp();
const queuecontroller = new QueueApp();
const binarytreecontroller = new BinaryTreeApp();
const hashcontroller = new HashApp();

window.addEventListener('load', () =>
{
    arraycontroller.drawArray(0, "#D9D9D9", "Array");
})