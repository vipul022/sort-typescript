export class NumbersCollection {

  constructor(public data: number[] ) {}

  length(): number{
    return this.data.length;
  }
// length: number = this.data.length;
  compare(leftIndex: number, rightIndex: number): boolean {
      return this.data[leftIndex] > this.data[rightIndex];

  } 

  swap(leftIndex: number, rightIndex: number): void {
      let leftHand = this.data[leftIndex];
      this.data[leftIndex] = this.data[rightIndex];
      this.data[rightIndex] = leftHand;
  }
}


