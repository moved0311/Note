class LinkedListNode<T> {
  val: T;
  next: LinkedListNode<T> | null;

  constructor(element: T) {
    this.val = element;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;
  length: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(element: T) {
    const node = new LinkedListNode(element);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;

      while (current && current.next !== null) {
        current = current.next;
      }
      if (current) current.next = node;

      this.tail = node;
    }
    this.length += 1;
  }

  removeAt(pos: number) {
    let current = this.head;
    if (pos === 0) {
      this.head = current?.next || null;
    } else {
      let index = 0;
      let previous;

      while (index !== pos) {
        index += 1;
        previous = current;
        current = current?.next || null;
      }

      if (previous) {
        previous.next = current?.next || null;
      }
    }
    this.length -= 1;
    return current?.val;
  }

  size() {
    return this.length;
  }
}

// const linkedlist = new LinkedList();
// linkedlist.append(1);
// linkedlist.append(2);
// console.log(linkedlist);

export default LinkedList;
