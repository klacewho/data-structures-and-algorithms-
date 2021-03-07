class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
        this.tail = null
    }
    insert(x){
        const node = new Node (x);
            if (!this.head){
                this.head = node;
            } else {
                let a = this.head;

                while (a.next){
                    a = a.next;
                }
                a.next = node;
            }
            return this;
    }
}
