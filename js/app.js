/**
 * filename: app.cs
 * author: Gebre H. Gebreegziyabher
 * Id Number: 610799
 * 
 * Note: these JavaScript codes are solutions to W1D5 homework exercises
 */

 /**
  * Q1: Define a function max() that takes two numbers as arguments and 
  *             returns the largest of them. Use the if-then-else construct available in Javascript
  */

  function max(x, y){
      if(x>y){
        return x;        
      } else{
       return y;         
      }     

  }
  console.log(max(40,45)); // Output: 45

  /**
   * Q2:  Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
   */

  function maxOfThree(x, y, z){
    if(x>y && x>z){
      return x;        
    } else if (y>x && y> z){
     return y;         
    } else if (z>x && z> y){
        return z;         
       }          

}
console.log(maxOfThree(40,45,30)); // Output:  45

/**
 * Q3: Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 */

 function isVowel(ch){
     let vowels = ['a','i','e','o','u','A','I','E','O','U'];
     return vowels.includes(ch);
 }
 console.log(isVowel('a')); //  Output: true

 /**
  * Q4: Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers.
  *         For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach 
  *         (i.e. for…loop or while…loop)
  */

  function sum(numbers){
      let sum=0;
      for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
      }
      return sum;
  }


  function multiply(numbers){
    let prod=1;
    for (let i = 0; i < numbers.length; i++) {
        prod *= numbers[i];
    }
    return prod;
}

  let nums = [1,2,3,4];
  console.log(sum(nums)) // Output: 10
  console.log(multiply(nums)) // Output: 24

  /**
   * Q5: Define a function reverse() that computes the reversal of a string. 
   *      For example, reverse("jag testar") should return the string "ratset gaj".
   */

  function reverse(str){
    return str.split('').reverse().join('') 
   }
 
   console.log(reverse("jag testar")) //  Output: ratset gaj

   /**
    * Q6: Write a function findLongestWord() that takes an 
    *     array of words and returns the length of the longest one.
    */

    function findLongestWord(str){
            var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
             return longestWord[0];
    }
    
    console.log(reverse("Write a function")) //Output: function

    /**
     * Q7: Write a function filterLongWords() that takes an array of words and an integer i and 
     *      returns a new array containing only those words that were longer than i characters.
     */
   
    function filterLongWords(str, len){
        let strs = [];
        for (let i = 0; i < str.length; i++) {
            if(str[i].length > len)  
            strs.push(str[i]);              
        }
        return strs;
    }
 
    let words =["the", "quick", "brown", "fox" ,"jumps", "over", "the", "lazy", "dog" ];
    console.log(filterLongWords(words,3)) // output: ["quick", "brown", "jumps", "over", "lazy"]


    
