import LinkedList from "./linkedList";
class Queue<T> {
  list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  enqueue(element: T) {
    this.list.append(element);
  }

  dequeue() {
    return this.list.removeAt(0);
  }

  size() {
    return this.list.size();
  }
}

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.dequeue(), queue, queue.size());

export default Queue;
