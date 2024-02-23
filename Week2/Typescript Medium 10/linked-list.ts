class ListNode<T> {
    public value: T;
    public next: ListNode<T> | null;
    public prev: ListNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  export class LinkedList<TElement> {
    private head: ListNode<TElement> | null;
    private tail: ListNode<TElement> | null;
    private length: number;
  
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    public push(element: TElement): void {
      const newNode = new ListNode(element);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail!.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    public pop(): TElement | undefined {
      if (!this.tail) return undefined;
  
      const poppedValue = this.tail.value;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail!.next = null;
      }
      this.length--;
      return poppedValue;
    }
  
    public shift(): TElement | undefined {
      if (!this.head) return undefined;
  
      const shiftedValue = this.head.value;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head!.prev = null;
      }
      this.length--;
      return shiftedValue;
    }
  
    public unshift(element: TElement): void {
      const newNode = new ListNode(element);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
    }
  
    public delete(element: TElement): void {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === element) {
          if (currentNode === this.head) {
            this.shift();
          } else if (currentNode === this.tail) {
            this.pop();
          } else {
            currentNode.prev!.next = currentNode.next;
            currentNode.next!.prev = currentNode.prev;
            this.length--;
          }
          break;
        }
        currentNode = currentNode.next;
      }
    }
  
    public count(): number {
      return this.length;
    }
  }
  