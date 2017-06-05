(function() {
  'use strict';

  function sum(num1, num2) {
    return num1 + num2;
  }

  function avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
  }

  function greaterThan(num1, num2) {
    return num2 > num1;
  }

  function secondLargest(an_array) {
    an_array.sort();
    return an_array[an_array.length - 2];
  }

  function containsVowel(a_string) {
    let vowels = /^[aeiouAEIOU]+$/;
    for (let i = 0; i < a_string.length - 1; i++) {
      if (a_string.charAt(i).match(vowels) !== null) {
        return true;
      }
    } //end of for loop
    return false; //therefore, no vowels
  }

  function pigLatin(a_string) {
    //convert a string to an array
    let vowels = /^[aeiouAEIOU]+$/;
    let my_array = a_string.split(" ");
    let my_string = "";
    let rtn_string = "";
    //for each word in the array
    for (let i = 0; i < my_array.length; i++) {
      //add a space after the first word
      if (i > 0) {
        rtn_string = rtn_string + " ";
      }
      my_string = my_array[i];
      //find the location of the first vowel
      for (let j = 0; j < my_string.length; j++) {
        if (my_string.charAt(j).match(vowels) !== null) {
          //new word = (vowel to end) + (leading chars + ay)
          rtn_string = rtn_string + my_string.slice(j) + my_string.slice(0, j) + "ay";
          break;
        } //end of if
      } //end of string for loop
    } //end of array for loop
    return rtn_string;
  } //end of piglatin function

  function longestWord(a_string) {
    let my_array = a_string.split(" ");
    let index = 0;
    for (let i = 0; i < my_array.length; i++) {
      if (my_array[i].length > my_array[index].length) {
        console.log(my_array[i] + " length = " + my_array[i].length);
        index = i;
      }
    } //end for loop
    return "The longest word is --> " + my_array[index];
  } //end of longestWord


  // -----------------------------------------------
  // Hard mode
  // -----------------------------------------------

  // 08 | weave
  // Write a function called weave that accepts an input string and number.
  // The function should return the string with every xth character replaced with an 'x'.
  function weave(a_string, a_num) {
    let new_string = "";
    for (let i = 0; i < a_string.length; i++) {
      //take into account zero index and treat as one index
      if ((i + 1) % a_num === 0) {
        new_string = new_string + 'x';
      } else {
        new_string = new_string + a_string.charAt(i);
      }
    } //end of for loop
    return new_string;
  }

  // 09 | bonus
  // Jeb eats out at restaurants all the time but is horrible at math.
  // He decides to write a function called bonus that accepts a single parameter
  // (the cost of the meal), and should return the tip Jeb should give his waiter.
  // Jeb uses two rules to calculate tips:
  // First he always tips 20% on the original bill.
  // He then rounds up to the nearest dollar. For example,
  // if the total with tip is $22.78, he'd round up to $23.00.
  //
  function bonus(meal_cost) {
    return Math.floor(meal_cost * .2) + 1;
  }

  // 10 | multiples
  // Write a function called multiples that accepts two numbers and returns
  // an array of all numbers from 1 - 100 that are evenly divisible by both.
  function multiples(num1, num2) {
    let new_array = [];
    for (let i = 1; i <= 100; i++) {
      if (i % num1 === 0 && i % num2 === 0) {
        new_array.push(i);
      }
    } //end of for
    return new_array;
  } //end of multiples

  // 11 | blackjack
  // Write a function called blackjack that accepts an array containing a
  // hand of cards represented by the digits 2 - 9 and the values J, Q, K, and A.
  // Return true if the hand busts (the value of the cards is > 21) or false if it hasn't busted.
  //
  // According to the rules of blackjack, an ace can be worth either 1 or 11.
  // You should make it 11 unless that causes the hand to bust, in which case
  // it should be 1 (just like if you play in person).

  function blackjack(card_array) {
    let card_count = 0;
    let numAces = 0;
    let s = "";
    for (let i = 0; i < card_array.length; i++) {
      s = card_array[i].toString().toUpperCase();
      // console.log("Card is " + s);
      if (s === "J" || s === "Q" || s === "K" || s === "10") {
        card_count = card_count + 10;
      } else if (s === "2" || s === "3" || s === "4" || s === "5" || s === "6" || s === "7" || s === "8" || s === "9") {
        card_count = card_count + card_array[i];
      } else if (s === "A" && card_count <= 10) {
        card_count = card_count + 11;
        numAces = numAces++;
      } else if (s === "A" && numAces === 1) {
        card_count = card_count - 11 + 1;
      } else if (s === "A") {
        card_count = card_count + 1;
      } else {
        // console.log("Invalid Input");
      }
      // console.log("Card Count = " + card_count);
    } //end of for loop
    if (card_count > 21) {
      return true;
    } else {
      return false;
    }
  } //end of blackjack

  // 12 | divisors
  //Write a function called divisors that accepts a number
  //and returns an array of all of the numbers that divide evnely into it.
  function divisors(some_num) {
    let some_array = [];
    for (let i = 1; i <= some_num; i++) {
      if (some_num % i === 0 && some_array.indexOf(i) < 0) {
        some_array.push(i);
      }
    } //end of for loop
    return some_array.sort(function(a, b) {
      return a - b
    });
  }

  // 13 | hamming
  //Write a function called hamming that accepts two strings.
  //If the lengths of the strings are not equal, the function should return zero.
  //Otherwise, return the number of letters that are in the same position in both words.

  function hamming(string_1, string_2) {
    if (string_1.length !== string_2.length) {
      return 0;
    } else {
      let num_common = 0;
      for (let i = 0; i < string_1.length; i++) {
        if (string_1.charAt(i) === string_2.charAt(i)) {
          num_common++;
        }
      } //end of for loop
      return num_common;
    } //end of else
  } //end of hamming

  // 14 | pokemon
  //Write a function called pokemon that accepts an array of numbers.
  //Each element in the array represents a day, and the number represents the
  //number of Pokemon caught on that day. i
  //Return an array of the same length that contains the number of total Pokemon caught up to that day.
  function pokemon(num_array) {
    let num_pokemon = 0;
    let array_pokemon = [];
    for (let i = 0; i < num_array.length; i++) {
      num_pokemon = num_pokemon + num_array[i];
      array_pokemon.push(num_pokemon);
    }
    return array_pokemon;
  }

  // 15 | find
  //Write a function called find that accepts two parameters:
  //the first is an array of numbers and the second is a single number. i
  //Return the index of the first time you find the second parameter in the first parameter.
  function find(num_array, a_num) {
    return num_array.indexOf(a_num);
  }
  // -----------------------------------------------------
  // Nightmare mode
  // -----------------------------------------------------

  // 16 | map
  // Write a function called map that accepts an array and a function as arguments.
  // You should return an array containing the values of the array after the function has been applied to each one.
  // Note: there is a built-in function called map. You can't use that ;-)
  function map(an_array, a_function) {
    return a_function(an_array);
  }

  function squareIt(an_array) {
    for (let i = 0; i < an_array.length; i++) {
      an_array[i] = an_array[i] * an_array[i];
    }
    return an_array;
  }

  // 17 | filter
  // Write a function called filter that accepts an array and a function as arguments.
  // You should return an array containing the values of the array that return true after the function is applied.
  function filter(an_array, a_function) {
    return a_function(an_array);
  }

  function r_u_a_square(an_array) {
    let a_true_array = [];
    for (let i = 0; i < an_array.length; i++) {
      if (Math.sqrt(an_array[i]) === Math.floor(Math.sqrt(an_array[i]))) {
        a_true_array.push(an_array[i]);
      }
    } //end of for loop
    return a_true_array;
  }


  // 18 | sprint
  // Write a function called sprint that accepts a single array of objects
  // representing Olympic sprinters, each which has a name (string) and
  // time (in seconds, so a number). Return the name of the athlete with the fastest time.
  function sprint(an_array_of_objects) {
    let index_num = 0;
    for (let i = 1; i < an_array_of_objects.length; i++) {
      if (an_array_of_objects[i].time < an_array_of_objects[index_num].time) {
        index_num = i;
      }
    } //end of for loop
    return an_array_of_objects[index_num].name;
  }

  //http://www.rankings.com/sports-track-sprinters/


  // 19 | scrabble
  // Write a function called scrabble that accepts a string and an object containing
  // a property for each letter and a value representing the number of scrabble points its worth.
  // Return the number of points that the whole word is worth.
  // Hint: strings have a split() function that might be useful.
  function scrabble(a_string, obj_values) {
    let word_value = 0;
    a_string = a_string.toUpperCase();
    // let lookup = "";

    for (let i = 0; i < a_string.length; i++) {
      word_value = word_value + eval("obj_values." + a_string.charAt(i));
      // console.log(a_string.charAt(i) + " is worth " + obj_values.a_string.charAt(i));
      // console.log(obj_values.eval(a_string.charAt(i)));
      // lookup = "obj_values." + a_string.charAt(i);
      // console.log(eval(lookup));
      // console.log(eval("obj_values." + a_string.charAt(i)));

      // console.log(a_char);
    } // end of for loop
    return word_value;
  }



  // console.log("------------------------------");
  // console.log("sum(3,5) = " + sum(3,5));
  // console.log("------------------------------");
  // console.log("avg(3,4,5) = " + avg(3,4,5));
  // console.log("------------------------------");
  // console.log("greaterThan(9,5) = " + greaterThan(9,5));
  // console.log("greaterThan(5,9) = " + greaterThan(5,9));
  // console.log("------------------------------");
  // let my_array = [8,1,7,3,6,2];
  // console.log("my_array = [8,1,7,3,6,2]");
  // console.log("secondLargest(my_array) = " + secondLargest(my_array));
  // console.log("------------------------------");
  // console.log("containsVowel('rad') is " + containsVowel('rad'));
  // console.log("containsVowel('red') is " + containsVowel('red'));
  // console.log("containsVowel('rid') is " + containsVowel('rid'));
  // console.log("containsVowel('rod') is " + containsVowel('rod'));
  // console.log("containsVowel('rud') is " + containsVowel('rud'));
  // console.log("containsVowel('rwd') is " + containsVowel('rwd'));
  // console.log("pigLatin 'this is a fun school day at IronYard' = " + pigLatin('this is a fun school day at IronYard'));
  // console.log("longestWord('this is an exceptionally fun school day at IronYard') = " + longestWord('this is an exceptionally fun school day at IronYard'));
  // console.log("longestWord('dhjkasdkjhasdkjlh this is an exceptionally fun school day at IronYard') = " + longestWord('dhjkasdkjhasdkjlh this is an exceptionally fun school day at IronYard'));
  // console.log("weave('this_is_very_long_string', 1) --> " + weave('this_is_very_long_string', 1));
  // console.log("weave('this_is_very_long_string', 2) --> " + weave('this_is_very_long_string', 2));
  // console.log("weave('this_is_very_long_string', 3) --> " + weave('this_is_very_long_string', 3));
  // console.log("weave('s', 1) --> " + weave('s', 1));
  // console.log("weave('s', 2) --> " + weave('s', 2));
  // console.log("bonus(111.89) = " + bonus(111.89));
  // console.log("bonus(111.09) = " + bonus(111.09));
  // console.log("bonus(1.89) = " + bonus(1.89));
  // console.log("bonus(.09) = " + bonus(.09));
  // console.log("bonus(20.39) = " + bonus(20.39));
  // console.log("multiples(2,3) --> " + multiples(2,3));
  // console.log("multiples(3,5) --> " + multiples(3,5));
  // console.log("blackjack([A,A,A]) busted = " + blackjack(['A', 'A', 'A']));
  // console.log("----------------------");
  // console.log("blackjack([9,9,7]) busted = " + blackjack([9,9,7]));
  // console.log("----------------------");
  // console.log("blackjack([2,J,A]) busted = " + blackjack([2, 'J', 'A']));
  // console.log("----------------------");
  // console.log("blackjack([A,J,A]) busted = " + blackjack(['A', 'J', 'A']));
  // console.log("----------------------");
  // console.log("blackjack([3,J,A,K]) busted = " + blackjack([3, 'J', 'A', 'K']));
  // console.log("divors(99) = " + divisors(99));
  // console.log("divors(34782) = " + divisors(34782));
  // console.log("hamming('This is a short string', 'This is a silly string')");
  // console.log(hamming('This is a short string', 'This is a silly string'));
  // console.log("hamming('This is a short string', 'This is a longer silly string')");
  // console.log(hamming('This is a short string', 'This is a longer silly string'));
  // console.log("hamming('This is a short string', 'This is a short string')");
  // console.log(hamming('This is a short string', 'This is a short string'));
  // console.log("pokemon ([1, 2, 5, 1, 3]) = " + pokemon([1, 2, 5, 1, 3]));
  // console.log("find([1,2,3,4,5,6,7], 3) = " + find([1,2,3,4,5,6,7],3));
  // console.log("find([1,2,3,4,5,6,8], 3) = " + find([1,2,3,4,5,6,7],8));
  // console.log("map([3,5,8,12], squareIt) = " + map([3, 5, 8, 12], squareIt));
  // console.log("filter([3,5,9,12,25], r_u_a_square) = " + filter([3, 5, 9, 12, 25], r_u_a_square));
  // let sprinters = [{
  //     name: "Maurice Greene",
  //     time: 9.79
  //   },
  //   {
  //     name: "Justin Gatlin",
  //     time: 9.85
  //   },
  //   {
  //     name: "Carl Lewis",
  //     time: 9.86
  //   },
  //   {
  //     name: "Usain Bolt",
  //     time: 9.58
  //   },
  //   {
  //     name: "Bruny Surin",
  //     time: 9.84
  //   },
  //   {
  //     name: "Olusoji Fasuba",
  //     time: 9.85
  //   },
  //   {
  //     name: "Donovan Bailey",
  //     time: 9.84
  //   },
  //   {
  //     name: "Asafa Powell",
  //     time: 9.72
  //   },
  //   {
  //     name: "Tyson Gay",
  //     time: 9.69
  //   },
  //   {
  //     name: "Leroy Burrell",
  //     time: 9.85
  //   }
  // ];
  //
  // console.log("sprint(sprinters) fastest = " + sprint(sprinters));
  //
  // let scrabble_char_values = {
  //   A: 1,
  //   B: 3,
  //   C: 3,
  //   D: 2,
  //   E: 1,
  //   F: 4,
  //   G: 2,
  //   H: 4,
  //   I: 1,
  //   J: 8,
  //   K: 5,
  //   L: 1,
  //   M: 3,
  //   N: 1,
  //   O: 1,
  //   P: 3,
  //   Q: 10,
  //   R: 1,
  //   S: 1,
  //   T: 1,
  //   U: 1,
  //   V: 4,
  //   W: 4,
  //   X: 8,
  //   Y: 4,
  //   Z: 10
  // };
  //
  // console.log("scrabble('Oxyphenbutazone',scrabble_char_values) = " + scrabble('Oxyphenbutazone', scrabble_char_values));



})();
