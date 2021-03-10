class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head;
    this.length = 0;
    this.tail = null
  }
  insert(data){
    const makeNode = new Node(data);
    if (this.head === null){
      this.head = makeNode;
    }
  } else {
    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = makeNode;
  }
};
