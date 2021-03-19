
// !defining interface so that Sorter can take any collection(array, string numberList). if the collection has the length, compare, swap properties, it can be passes to sorter
interface Sortable {
  length(): number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void
}
export class Sorter {
  // collection: NumbersCollection;

  // constructor(collection: NumbersCollection) {
  //   this.collection = []
  // }
  // !this is the short hand of the above code

  constructor(public collection: Sortable){}

  sort(): void {
    const  length  = this.collection.length();

    for (let i  = 0; i < length; i++) {
      
      for (let j = 0; j < length -i -1; j++){
        if(this.collection.compare(j , j+1)) {
            this.collection.swap(j, j+1);
        }
      }
    }
  }
}