var _ = require('lodash')

function reduce(arr, fn, initial) {
  
  if (arr.length === 0 ) { 
    return initial 
  } else {
    return reduce(arr.slice(1), fn, fn(initial, arr[0]))
  }

}

var input = [
  'do', 'elit', 'aute', 'irure', 'nisi', 'laboris', 'eiusmod', 'aute', 'sit', 
  'labore', 'esse', 'esse', 'fugiat', 'mollit', 'sint', 'lorem', 'dolor', 
  'commodo', 'qui', 'fugiat', 'magna', 'dolore', 'cupidatat', 'sint', 'ipsum',
  'irure', 'anim', 'dolor', 'sint', 'exercitation', 'sunt', 'nostrud', 'aliqua', 
  'ut', 'voluptate', 'cillum', 'ipsum', 'occaecat', 'labore', 'amet', 'lorem', 
  'pariatur', 'sint', 'aliquip', 'do', 'nisi', 'excepteur', 'cupidatat', 
  'ullamco', 'ut', 'ad', 'tempor', 'irure', 'nulla', 'cupidatat', 'fugiat', 
  'minim', 'commodo', 'velit', 'ex', 'veniam', 'ad', 'sint', 'lorem', 'magna', 
  'nisi', 'esse', 'nulla', 'eu', 'tempor', 'fugiat' ]

var expected = {
  do: 2, elit: 1, aute: 2, irure: 3, nisi: 3, laboris: 1, eiusmod: 1, sit: 1, 
  labore: 2, esse: 3, fugiat: 4, mollit: 1, sint: 5, lorem: 3, dolor: 2, 
  commodo: 2, qui: 1, magna: 2, dolore: 1, cupidatat: 3, ipsum: 2, anim: 1,
  exercitation: 1, sunt: 1, nostrud: 1, aliqua: 1, ut: 2, voluptate: 1,
  cillum: 1, occaecat: 1, amet: 1, pariatur: 1, aliquip: 1, excepteur: 1,
  ullamco: 1, ad: 2, tempor: 2, nulla: 2, minim: 1, velit: 1, ex: 1, veniam: 1,
  eu: 1 }

function fun(prev, curr, index, arr) {
  prev[curr] = prev[curr] + 1 || 1
    return prev
}

var result = reduce(input, fun, {})

//for (word in expected) {
//  console.log(expected[word], result[word], expected[word] === result[word])
//}

console.log(_.isEqual(result, expected))

// Details on how object comparisons work:
// http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html


// reduce([1,2,3], function(prev, curr, index, arr) {
//       return prev + curr
//     }, 0)
