//  Задания на работу со строками

//задание 1
console.log('Задания на работу со строками\n')

const capitalizeFirstLetter=(str)=>{
    console.log(str.charAt(0).toUpperCase()+str.slice(1))
}

capitalizeFirstLetter("привет")


// задание 2
const reverseString=(str)=>{
    console.log(str.split('').reverse().join(''))
}

reverseString('привет')

// задание 3 

const countVowels=(str)=>{
    let res = ''
    res = str.toLowerCase().replace(/[^aeiou]/g, '').length
    console.log(res)
}

countVowels("eRaergRrt")

// задание 4

const truncateText=(str, maxLength)=>{
    if(str.length>maxLength){
        console.log(str.slice(0 , maxLength)+'...')
    }else{
        console.log(str)
    }
}

truncateText("Очень длинная строка", 10)

// задание 5 

const removeSpaces=(str)=>{
    let result = str.replace(/ /g, '')
    console.log(result)
}

removeSpaces('r r r ')

// Задания на работу с массивами
console.log('Задания на работу с массивами\n')
// задание 1
const sumArray = (arr) =>{
    let res = 0
    for(i = 0; i < arr.length; i++){
        res += arr[1]
    }
    console.log(res)
}

sumArray([1,1,1])

// задание 2

const filterEvenNumbers = (arr) =>{
    const filter = arr.filter(n => n % 2 === 0);
    console.log(filter)
}

filterEvenNumbers([ 1, 2, 3, 4, 5, 6])

// задание 3

const findMax = (arr) => {
    console.log(Math.max(...arr))
}

findMax([ 1, 2, 3, 4])

// задание 4

function flattenArray(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray([[1, 2], [3, [4]]])); 

// задание 5

function uniqueValues(arr) {
  return [...new Set(arr)];
}

console.log(uniqueValues([1, 2, 2, 3, 1])); 


// Задания на работу с циклами
console.log('Задания на работу с циклами\n')

//  Задание 1 
const printNumbers = (n) =>{
    let res = ' '
    for(i = 0; i < n; i++){
        res = n - i + " " + res 
    }
    console.log(res)
}

printNumbers(8)

//  Задание 2 

const calculateFactorial = (n) =>{
    let res = 1
    for(i = 1; i <= n; i++){
        res = i * res
    }
    console.log(res)
}

calculateFactorial(5)

//  Задание 3

const generateMultiplicationTable = (n) =>{
    let res =''
    let sum = ''
    for(i = 1; i <= 10 ; i++){
        sum = n * i + "\n"
        res += `${n} * ${i} = ${sum}`
    }
    console.log(res)
}

generateMultiplicationTable(8)

//  Задание 4

const sumOfDigits = (n) =>{
    const str = String(Math.abs(n))
    let res = 0
    for(i = 0 ; i < str.length ; i++){
        res += Number(str[i]) 
    }
    console.log(res)
}

sumOfDigits(123)

//  Задание 5

const repeatString = (str, n) =>{
    let res = ''
    for(i = 0; i < n; i++){
        res = res + str
    }
    console.log(res)
}

repeatString('rer', 3)