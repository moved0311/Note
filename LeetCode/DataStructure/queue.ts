type NodeValue = number | string;

class LinkedListNode {
  val: NodeValue;
  next: LinkedListNode | null;

  constructor(element: NodeValue) {
    this.val = element;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode | null = null;
  tail: LinkedListNode | null = null;
  length: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(element: NodeValue) {
    const node = new LinkedListNode(element);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;

      while (current && current.next !== null) {
        current = current.next;
      }
      if (current) current.next = node;
    }
    this.length += 1;
  }

  removeAt(pos: number) {
    const current = this.head;
    let count = 0;
  }
}

class Queue {
  list: LinkedList;

  constructor() {
    this.list = new LinkedList();
  }

  enqueue(element: NodeValue) {
    this.list.append(element);
  }

  dequeue() {
    return;
  }

  size() {
    return this.list.length;
  }
}

const a = new LinkedList();
a.append(10);
a.append(20);

console.log(a);
