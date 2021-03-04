//* THE MAPPY THINGS
const mapToNegativize = (arr) => arr.map( ele => ele * -1 )

const mapToNoChange = (arr) => arr.map( ele => ele)

const mapToDouble = (arr) => arr.map( ele => ele * 2 )

const mapToSquare = (arr) => arr.map( ele => ele ** 2 )

//* THE REDUCY THINGS
const reduceToTotal = (arr, startingPoint = 0) => arr.reduce((total, values) => {return total + values}, startingPoint)

const reduceToAllTrue = (arr) => arr.every( ele => !!ele)

const reduceToAnyTrue = (arr) => arr.some( ele => !!ele)