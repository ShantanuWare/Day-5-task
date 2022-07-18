//Question1

//A]  Print odd numbers in an array

//*****using anonymous functions
let odd = []
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let num = function (a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 1) {
            odd.push(a[i]);
        }

    }
    return odd
}
num(arr)
console.log(odd)//[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]

    //*****using IIFE functions
    (function () {
        let odd = []
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 1) {
                odd.push(arr[i]);
            }

        }
        console.log(odd)
    })()//[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]

//B] Convert all the strings to title caps in a string array
//*****using anonymous functions
let result = []
let titleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

        result.push(str[i])
    }
    return result
}
console.log(titleCase("welcome to ZEN"));//[ 'Welcome', 'To', 'Zen' ]

//***** using IIFE functions
(function () {
    let result = []
    let str = "welcome to ZEN"
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

        result.push(str[i])
    }
    console.log(result)
})()//[ 'Welcome', 'To', 'Zen' ]

//c] Sum of all numbers in an array
//*****using anonymous functions
let arr1 = [10, 11, 12, 13, 14, 15, 16, 17, 18]
let getSum = function (a) {
    let sum = 0

    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    console.log(sum)
}

getSum(arr1)//126

    //***** using IIFE functions
    (function () {
        let arr2 = [10, 11, 12, 13, 14, 15, 16, 17, 18]
        let sum = 0
        for (let i = 0; i < arr2.length; i++) {
            sum += arr2[i]
        }
        console.log(sum)
    })()//126

// D] Return all the prime numbers in an array
//*****using anonymous functions
let array = [-5, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let primeNum = function (num) {
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(array.filter(primeNum))     //[ 2, 3, 5, 7, 11 ]            


    //***** using IIFE functions
    (function () {
        let array = [-5, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
        let primeNum = function (num) {
            for (let start = 2; num > start; start++) {
                if (num % start == 0) {
                    return false;
                }
            }
            return num > 1;
        }
        console.log(array.filter(primeNum))
    })()//[ 2, 3, 5, 7, 11 ]


//E] Return all the palindromes in an array
//*****using anonymous functions
let str = ["nope", "civic", "kayak", "even"]
let str1 = []
let palindrom = function (words) {
    var p = words.split("").reverse().join("");

    if (p === words) {
        return words
    }
    else {
        return false
    }

}
for (let i = 0; i < str.length; i++) {
    str1.push(palindrom(str[i]))
}
console.log(str1)

    //***** using IIFE functions
    (function () {
        let str = ["nope", "civic", "kayak", "even"]
        let str1 = []
        let palindrom = function (words) {
            var p = words.split("").reverse().join("");

            if (p === words) {
                return words
            }
            else {
                return false
            }

        }
        for (let i = 0; i < str.length; i++) {
            str1.push(palindrom(str[i]))
        }
        console.log(str1)

    })()


//F] Return median of two sorted arrays of the same size
//*****using anonymous functions
let check = function (array1, array2) {
    var n1 = array1.length;
    var n2 = array2.length;
    var n = n1;
    var i = 0;
    var j = 0;
    var num;
    var m1 = -1, m2 = -1;
    for (num = 0; num <= n; num++) {
        if (i == n) {
            m1 = m2;
            m2 = array2[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = array1[0];
            break;
        }

        if (array1[i] <= array2[j]) {
            m1 = m2;
            m2 = array1[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = array2[j];
            j++;
        }
    }


    console.log((m1 + m2) / 2);
};
check([10, 20, 30, 40, 50], [60, 70, 80, 90, 100]);//55

//***** using IIFE functions
(function () {
    var ar1 = [10, 20, 30, 40, 50];
    var ar2 = [60, 70, 80, 90, 100];
    var n1 = ar1.length;
    var n2 = ar2.length;
    var n = n1;
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }


    console.log((m1 + m2) / 2);
})();//55


//G] Remove duplicates from an array
//*****using anonymous functions
let string1 = ["toyota", "suzuki", "toyota", "bmw", "suzuki", "suzuki"];
let result11 = function (a) {
    let uniqueChars = [...new Set(a)];
    return uniqueChars
}
console.log(result11(string1))//[ 'toyota', 'suzuki', 'bmw' ]

    //***** using IIFE functions
    (function () {
        var arr = ["toyota", "suzuki", "toyota", "bmw", "suzuki", "suzuki"];
        let uniqueChars = [...new Set(arr)];
        console.log(uniqueChars)
    })()


//Rotate an array by k times    
//*****using anonymous functions
let arra = [1, 2, 3, 4, 5]
let rotateArray = function (nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }

    return nums;
}
console.log(rotateArray(arra, 3))//[ 3, 4, 5, 1, 2 ]
    //***** using IIFE functions
    (function () {
        let arr = [1, 2, 3, 4, 5]
        let k = 3
        for (let i = 0; i < k; i++) {
            arr.unshift(arr.pop());
        }

        console.log(arr);
    })()//[ 3, 4, 5, 1, 2 ]


//Question2 Arrow Functions
//A] Print odd numbers in an array
let odd1= []
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let num1 =(a)=> {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 1) {
            odd.push(a[i]);
        }

    }
    return odd1
}
num1(arr2)
console.log(odd)

//B] Convert all the strings to title caps in a string array
let result22 = []
let titleCase22 =(str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

        result22.push(str[i])
    }
    return result22
}
console.log(titleCase22("welcome to ZEN"))//[ 'Welcome', 'To', 'Zen' ]

//C] Sum of all numbers in an array
let arr33 = [10, 11, 12, 13, 14, 15, 16, 17, 18]
let getSum33 = (a) =>{
    let sum = 0

    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    console.log(sum)
}

getSum33(arr33)//126

//D] Return all the prime numbers in an array
let array44 = [-5, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let primeNum44 = (num) =>{
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(array44.filter(primeNum44) //[ 2, 3, 5, 7, 11 ]            


//E] Return all the palindromes in an array
let string22 = ["nope", "civic", "kayak", "even"]
let str12 = []
let palindrom = (words)=> {
    var p = words.split("").reverse().join("");

    if (p === words) {
        return words
    }
    else {
        return false
    }

}
for (let i = 0; i < string22.length; i++) {
    str12.push(palindrom(string22[i]))
}
console.log(str12)//[ false, 'civic', 'kayak', false ]
