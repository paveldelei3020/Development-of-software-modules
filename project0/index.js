//задание 1
const capitalizeFirstLetter=(str)=>{
    console.log(str.charAt(0).toUpperCase()+str.slice(1))
}

capitalizeFirstLetter("hello")


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

// Задания на работу с циклами

//  Задание 1 
const printNumbers = (n) =>{
    let res = ' '
    for(i = 0; i < n; i++){
        res = n - i + " " + res 
    }
    console.log(res)
}

printNumbers(100)

//  Задание 2 

const calculateFactorial = (n) =>{
    let res = 1
    for(i = 0; i < n; i++){
        res = i * res
    }
    console.log(res)
}

calculateFactorial(5)