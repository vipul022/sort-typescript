import {NumbersCollection} from "./NumbersCollection";
import {Sorter} from "./sorter"
import {CharactersCollection} from "./CharactersCollection"

// !create an instance of NumberCollections and pass an array
const collection = new NumbersCollection([10,-31,-5,0])


const sorter = new Sorter(collection);

sorter.sort();

const characterCollection = new CharactersCollection("XayZ")

const sorterString = new Sorter(characterCollection)

sorterString.sort();

console.log(characterCollection.data)