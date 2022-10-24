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

class QueueApp extends VisualizerApp
{
    elements = [];
    index = 0;

    drawArray()
    {
        console.log("Drawing in Queue App");
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.context.font = '20px inter';

        let x = 50;
        let y = 200;
        if(this.elements.length == 0)
        {
            console.log("queue empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Queue contains no elements", (50), (200));
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
    enqueue()
    {
        console.log("dequeueing element");
        let element = document.getElementById("enqueue").value;

        this.elements.unshift(element);
        (this.index)++;

        this.drawArray();
    }
    dequeue()
    {
        console.log("dequeueing element");

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
    
    clear()
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
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.context.font = '20px inter';

        if(this.root == null)
        {
            console.log("binary tree empty");
            this.context.font = '40px inter';
            this.context.fillStyle="black";
            this.context.fillText("Binary search tree is empty", (50), (200));
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

const arraycontroller = new ArrayApp();
const vectorcontroller = new VectorApp();
const listcontroller = new ListApp();
const stackcontroller = new StackApp();
const queuecontroller = new QueueApp();
const binarytreecontroller = new BinaryTreeApp();
arraycontroller.drawArray();