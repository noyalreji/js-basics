// 1. Print 1-255
// Print1To255()
// Print all the integers from 1 to 255.
for(var i=1; i<=255; i++){
  console.log(i)
}

// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.

for(var i=0; i<=255; i++){
  if(i%2 != 0){
    console.log(i)
  }
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer
// print the sum so far.

  var sum= 0
  for(var i=0; i<=255; i++){
  sum += i;
  console.log("Num:",i, "Sum:",sum)
  }



// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// PrintArrayVals(arr)

arr = [1,23,43,57,46]
for(var i = 0; i<arr.length-4; i++){
  console.log(arr)
}

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element

  var arr = [1,23,43,57,46]
  var max= arr[0];
  for(var i = 0; i<arr.length; i++){
    if(max < arr[i]){
      max =arr[i]
    }
}
console.log("The maximum number in the array is",max);

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
var arr = [1,23,43,57,46]
var sum = 0
for(var i=0; i<arr.length; i++){
  sum = sum + arr[i];
}
var average=(sum/arr.length)
console.log("Average value is",average);

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1
// and 255 (inclusive).

var arr = [];
for(var i=1; i<=255; i++){
  if (i%2 !== 0){
    arr.push(i);
    }
}
console.log(arr)

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that
// same array with changed values.

function squareVal(arr) {
  var arr = [1,23,43,57,46]
  for(var i=0; i<arr.length; i++){
      arr[i] = arr[i] * arr[i]
      
  }
  return arr; 
}
console.log(squareVal())

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative
// values to zero.
var arr = [1,5,-14,-2]
for(var i=0; i<=arr.length-1; i++){
  if(arr[i]<0){
    arr[i]=0
  }
  console.log(arr);
}

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative
// values with the string 'Dojo'.

var arr = [1,5,-14,-2]
for(var i=0; i<=arr.length-1; i++){
  if(arr[i]<0){
    arr[i]= "Dojo"
  }
  console.log(arr);
}













