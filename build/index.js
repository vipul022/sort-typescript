"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var sorter_1 = require("./sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// !create an instance of NumberCollections and pass an array
var collection = new NumbersCollection_1.NumbersCollection([10, -31, -5, 0]);
var sorter = new sorter_1.Sorter(collection);
sorter.sort();
var characterCollection = new CharactersCollection_1.CharactersCollection("XayZ");
var sorterString = new sorter_1.Sorter(characterCollection);
sorterString.sort();
console.log(characterCollection.data);
