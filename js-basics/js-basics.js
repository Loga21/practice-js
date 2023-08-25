// to display current date& time
var now = new Date();
var day = now.getDay();
var dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday',
];
console.log('Today is : ' + dayList[day] + '.');
var hour = now.getHours();
console.log(hour);
var minute = now.getMinutes();
var second = now.getSeconds();
var prepand = hour >= 12 ? ' PM ' : ' AM ';
hour = hour >= 12 ? hour - 12 : hour; //to get the clk time
console.log(
  'Current Time : ' + hour + prepand + ' : ' + minute + ' : ' + second
);

// to print the current window contents
function print() {
  window.print();
}

// to get a current date in the form of dd/mm/yyyy
var today = new Date();
var monthArray = [
  'jan',
  'feb',
  'march',
  'april',
  'may',
  'june',
  'july',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var currentMonth = today.getMonth() + 1;
console.log(date + '/' + monthArray[month] + '/' + year);

//area of triangle when 3 sides r given
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);

//animate string
function animateString(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // assuming no other children
  var text = textNode.data;

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 160);
}

//to find leap year
function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapYear(2000));

// to get url
console.log(document.URL);

// to check the pair of nums, if any one of the num is equal to 50 or it's sum is 50
function test50(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(test50(50, 50));
console.log(test50(20, 30));

// to create a new string adding “Py” in front of a given string.
// If the given string begins with “Py” then return the original string.
function stringCheck(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
    return str1;
  }
  return 'Py' + str1;
}

console.log(stringCheck('Python'));
console.log(stringCheck('thon'));

// to interchange the first and last char of a given string
function interchange(str1) {
  if (str1.length <= 1) {
    return str1;
  }
  // console.log(str1.substring(0,1))
  mid_char = str1.substring(1, str1.length - 1);
  return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0);
}
console.log(interchange('a'));
console.log(interchange('ab'));
console.log(interchange('abc'));

//to check from three given numbers (non negative integers)
//that two or all of them have the same rightmost digit
function same_last_digit(p, q, r) {
  return p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
}

console.log(same_last_digit(22, 32, 42));
console.log(same_last_digit(102, 302, 2));
console.log(same_last_digit(20, 22, 45));

// to reverse a given string
function string_reverse(str) {
  return str.split('').reverse().join('');
}

console.log(string_reverse('w3resource'));
console.log(string_reverse('www'));
console.log(string_reverse('JavaScript'));

//to capitalize the first letter of each word in a given string
function capital_letter(str) {
  str = str.split(' ');
  // console.log(str);
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(' ');
}

console.log(
  capital_letter(
    'Write a JavaScript program to capitalize the first letter of each word of a given string.'
  )
);

// to replace every character in a given string with the character following it in the alphabet
function LetterChanges(text) {
  var s = text.split('');
  // console.log(s)
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ' ':
        break;
      case 'z':
        s[i] = 'a';
        break;
      case 'Z':
        s[i] = 'A';
        break;
      default:
        s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
      // String.fromCharCode() converts Unicode values to strings (like 'a')
      // charCodeAt() returns the Unicode of the character at a specified position in a string (like 72)
    }

    // Upper-case vowels
    switch (s[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        s[i] = s[i].toUpperCase();
    }
  }
  return s.join('');
}
console.log(LetterChanges('PYTHON'));
console.log(LetterChanges('W3R'));
console.log(LetterChanges('php'));

// to convert a given number to hours and minutes
function time_convert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ':' + minutes;
}

console.log(time_convert(71));
console.log(time_convert(450));

// to convert letters of a given string alphabetically
function alphabet_Soup(str) {
  return str.split('').sort().join('');
}

console.log(alphabet_Soup('Python'));
console.log(alphabet_Soup('Exercises'));

// to check whether the characters a and b are separated by exactly 3 places anywhere (at least once)
// in a given string
function ab_Check(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

console.log(ab_Check('Chainsbreak'));
console.log(ab_Check('abCheck'));

// to count the number of vowels in a given string
function vowel_Count(str) {
  return str.replace(/[^aeiou]/g, '').length;
  // "[aeiou]" tells the replace function to look for any of these characters
  // The gi modifier is used to do a case insensitive search of all occurrences of a regular expression in a string.
  // "g" modifier specifies a global match
}

console.log(vowel_Count('Python'));
console.log(vowel_Count('w3resource.com'));

// to check whether a given string contains an equal number of p's and t's
function equal_pt(str) {
  var str_p = str.replace(/[^p]/g, '');

  var str_t = str.replace(/[^t]/g, '');

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
}
console.log(equal_pt('paattpss'));
console.log(equal_pt('paatps'));

// to create one string of specified copies (positive numbers) of a given string
function string_copies(str, n) {
  if (n < 0) return false;
  else return str.repeat(n);
}
console.log(string_copies('abc', 5));
console.log(string_copies('abc', 0));
console.log(string_copies('abc', -2));

// to extract the first half of a even string
function first_half(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(first_half('Python'));
console.log(first_half('JavaScript'));
console.log(first_half('PHP'));

// to create a string using the middle three characters of a given string of odd length
// The string length must be greater than or equal to three
function middle_three(str) {
  if (str.length % 2 != 0) {
    mid = (str.length + 1) / 2; // 10/2=5
    return str.slice(mid - 2, mid + 1); // 5-2=3, 5+1=6 =>(3,6)
  }
  return str;
}
console.log(middle_three('Exercises'));
console.log(middle_three('abcdefg'));

//  to create a new string using the first and last n characters from a given string.
// The string length must be larger than or equal to n
function two_string(str, n) {
  first_part = str.substring(0, n);
  last_part = str.substring(str.length - n);
  // console.log(last_part)
  return first_part + last_part;
}

console.log(two_string('JavaScript', 2));
console.log(two_string('JavaScript', 3));

// to rotate the elements left in a given array of integers of length 3
function rotate_elements_left(array) {
  return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));
console.log(rotate_elements_left([0, -1, 2]));
console.log(rotate_elements_left([7, 6, 5]));

// to find the largest value between the first and last elements and set all the other elements to that value.
// Display the updated array
function all_max(nums) {
  var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

  nums[0] = max_val;
  nums[1] = max_val;
  nums[2] = max_val;

  return nums;
}
console.log(all_max([20, 30, 40]));
console.log(all_max([12, 10, 3]));

// to create an array taking the middle elements of the two arrays of integer and each length 3
function middle_elements(a, b) {
  var new_array = [];
  new_array.push(a[1], b[1]);

  return new_array;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));
console.log(middle_elements([4, 2, 7], [2, 4, 5]));

// to swap the first and last elements of a given array of integers.
// The array length should be at least 1
function swap(arra) {
  [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
  return arra;
}
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));

// to add two digits to a given positive integer of length two
function add_two_digits(n) {
  return (n % 10) + Math.floor(n / 10);
}
console.log(add_two_digits(25));
console.log(add_two_digits(50));

// to find the longest string from a given array of strings
function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map((v) => (max = Math.max(max, v.length)));
  result = str_ara.filter((v) => v.length == max);
  return result;
}

console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));

// to divide a given array of positive integers into two parts. First element belongs to the first part,
// second element belongs to the second part, and third element belongs to the first part and so on.
// Now compute the sum of two parts and store it in an array of size two
function alternate_Sums(arr) {
  var result = [0, 0];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2) result[1] += arr[i];
    else result[0] += arr[i];
  }
  return result;
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10]));

// to compute the sum of the absolute differences of consecutive numbers in a given array of integers
function sum_adjacent_difference(arr) {
  var result = 0;
  for (var i = 1; i < arr.length; i++) {
    result += Math.abs(arr[i] - arr[i - 1]);
  }
  return result;
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));

// to replace all numbers with a specified number in an array of integers
function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log('Original Array: ' + num);
console.log(array_element_replace(num, 2, 5));

// to change the case of the minimum number of letters to make a given string written in upper case or lower case
function change_case(new_str) {
  var x = 0;
  var y = 0;

  for (var i = 0; i < new_str.length; i++) {
    if (/[A-Z]/.test(new_str[i])) {
      x++;
    } else y++;
  }

  if (y > x) return new_str.toLowerCase();
  return new_str.toUpperCase();
}

console.log(change_case('Write'));
console.log(change_case('PHp'));

// to check whether it is possible to rearrange the characters of a given string.
// This is in such a way that it will become equal to another given string
function rearrangement_characters(str1, str2) {
  var first_set = str1.split(''),
    second_set = str2.split(''),
    result = true;

  first_set.sort();
  second_set.sort();

  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] !== second_set[i]) {
      result = false;
    }
  }

  return result;
}

console.log(rearrangement_characters('xyz', 'zyx'));
console.log(rearrangement_characters('xyz', 'zyp'));

// to check if there is at least one element in two given sorted arrays of integers
function check_common_element(arra1, arra2) {
  for (var i = 0; i < arra1.length; i++) {
    if (arra2.indexOf(arra1[i]) != -1) return true;
  }
  return false;
}
console.log(check_common_element([1, 2, 3], [3, 4, 5]));
console.log(check_common_element([1, 2, 3], [5, 6, 7]));

// to find the number of inversions of a given array of integers
// stored at positions i and j form an inversion if a[i] > a[j] and i < j
function number_of_InversionsNaive(arr) {
  var ctr = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) ctr++;
    }
  }
  return ctr;
}

console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));
console.log(number_of_InversionsNaive([1, 5, 4, 3]));
console.log(number_of_InversionsNaive([10, 30, 20, -10]));

// to find the maximum number of a given positive integer by deleting exactly one digit of the given number
function digit_delete(num) {
  var result = 0,
    num_digits = [];
  while (num) {
    num_digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (var index_num = 0; index_num < num_digits.length; index_num++) {
    var n = 0;
    for (var i = num_digits.length - 1; i >= 0; i--) {
      if (i !== index_num) {
        n = n * 10 + num_digits[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245));

//
