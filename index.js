// problem-1
function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || expenses > income){
        return "invalid input"
    }

    let savings = income - expenses
    let tax = savings * 0.2
    return tax
}
// console.log(calculateTax(10000,3000));
// console.log(calculateTax(34000, 1753));

// problem-2
function sendNotification(email) {
   // system-1
//    if(email.split('').indexof('@') === -1){
//        return 'invalid email'
//    } 
   // system-2
   if(email.split('').includes('@') === false){
    return 'invalid email'
} 
  let emailArr = email.split('@')
  let notification = `${emailArr[0]} sent you an email from ${emailArr[1]}`
  return notification
}
// console.log(sendNotification('zihad@gmail.com'));
// console.log(sendNotification('fahim234.hotmail.com'));

// problem-3
function checkDigitsInName(name) {
   if(typeof name !== 'string'){
    return 'invalid input'
   }

    let nameArr = name.split('')
    for(let char of nameArr){
       if(!isNaN(char)){
          return true
       }
    }
    return false
}
// console.log(checkDigitsInName('Raj123'));
// console.log(checkDigitsInName('!@#'));
// console.log(checkDigitsInName(["Raj"]));

// problem-4
function calculateFinalScore(obj) {
    if(typeof obj != 'object' || Array.isArray(obj)){
        return 'invalid input'
    }
    let totalScore = obj.testScore + obj.schoolGrade 
    if(obj.isFFamily){
        totalScore += 20
    }
    return totalScore >= 80 ? true : false
}
// console.log(calculateFinalScore({ 
//     name: "Rajib", 
//     testScore: 45,  
//     schoolGrade: 25, 
//     isFFamily : true
// })
// );
// console.log(calculateFinalScore("hello" ));

// problem-5
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'invalid input'
    }
    // calculate average time 
    let sum = 0
    for (let time of waitingTimes){
        sum += time
    }
    let averageTime = Math.round(sum/waitingTimes.length)
    let personLeft = serialNumber - 1 - waitingTimes.length
    let waitingTime = averageTime * personLeft
    return waitingTime
}
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime( 7 , 10));