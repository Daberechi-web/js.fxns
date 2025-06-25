

function checkCondition(score) {
    if (score >= 90) {
        console.log("Excellent")
    } else if (score >= 75 && score <= 89) {
        console.log("Very Good")
    } else if (score >= 50 && score <= 74) {
        console.log("Average")
    } else {
        console.log("Poor")
    }
}

checkCondition(40)


// const b = 51
// b > 90 ? console.log("Excellent") :
//     b <= 90 && b <= 71 ? console.log("Perfect") :
//         b < 70 ? console.log("Carryover")



// const logIn = (a,b)=>{
//     const bb = 2025 - a 
//     if (b<18){
//         return "Acess denied"
//     }
//     age(bb)
// }
// const age =(smthg)=>{
//     console.log(smthg)
// }
// logIn(2010)


const logIn = (age)=>{
   return age < 18 ?  "acess denied" : "acess granted"
}
console.log(logIn(12))

const signIn = (age)=>{
    const dd = age < 18 ? "acess denied":"acess granted"
    logger (dd)
}
const logger = (age)=>{
    console.log(age)
}
signIn (12)