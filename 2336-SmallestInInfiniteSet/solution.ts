class SmallestInfiniteSet {
  private current: number;
  private heap: number[];
  private set: Set<number>;

  constructor() {
    this.current = 1;
    this.heap = [];
    this.set = new Set();
  }

  popSmallest(): number {
    if (this.heap.length > 0) {
      const smallest = this.heap.shift()!;
      this.set.delete(smallest);
      return smallest;
    }

    return this.current++;
  }

  addBack(num: number): void {
    if (num < this.current && !this.set.has(num)) {
      this.heap.push(num);
      this.set.add(num);
      this.heap.sort((a, b) => a - b)
    }
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */