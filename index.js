function hasTargetSum(array, target) {
  let seenNumbers = new Set();

  for(let num of array){
      if(seenNumbers.has(target - num)){
          return true;
      }
      seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

  We're iterating through the array once so the time complexity is O(n).
  The set operations 'has' and 'add' have an avg time complexity of O(1).
  There time complexity is O(n * 1) = O(n)

  We're using seenNumbers to store all n numbers in the worst-case scenario. 
  Therefore, worst case is n and Space Complexity is O(n)

*/

/* 
  Add your pseudocode here
  Create a set we will push nums in the array to. 
  If seenNumbers contains target - num, then return true.
  Otherwise, add the current num in the array to seenNumbers. 
  Return false if seenNumbers never contains target - num result in array
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
