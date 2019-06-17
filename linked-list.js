 class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(val){
        var node = new Node(val);
        var current;
        if(this.head == null) this.head = node;
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }

    removeVal(val){
        var current = this.head;
        var prev = null;
        while(current != null){
            if(current.val === val){
                if(prev==null){
                    this.head = current.next;
                }
                else{
                    prev.next = current.next;
                }
                return current.val;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    updateVal(val1, val2){
        var current = this.head;
        var prev = null;
        while(current != null){
            if(current.val == val1){
                current.val = val2;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    print(){
        var current = this.head;
        var elements = [];
        while(current){
            elements.push(current.val);
            current = current.next;
        } 
        console.log(elements);
        return elements;
    }
}

// var ll = new LinkedList();
// ll.add(10);
// ll.add(20);
// ll.add(30);
// ll.add(40);
// ll.add(50);
// ll.print();
// ll.updateVal(70,200);
// ll.print();

export {LinkedList};