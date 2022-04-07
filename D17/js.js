// const skills = ['HTML', 'CSS', 'JS', 'React']
// //Skills array has to be stringified first to keep the format.
// const skillsJSON = JSON.stringify(skills, undefined, 1)
// localStorage.setItem('skills', skillsJSON)
// console.log(localStorage)

// let skills1 = [
//     { tech: 'HTML', level: 10 },
//     { tech: 'CSS', level: 9 },
//     { tech: 'JS', level: 8 },
//     { tech: 'React', level: 9 },
//     { tech: 'Redux', level: 10 },
//     { tech: 'Node', level: 8 },
//     { tech: 'MongoDB', level: 8 }
//   ]
  
//   let skillJSON = JSON.stringify(skills)
//   localStorage.setItem('skills1', skillJSON)

//   const user = {
//     firstName: 'Asabeneh',
//     age: 250,
//     skills: ['HTML', 'CSS', 'JS', 'React']
//   }
  
//   const userText = JSON.stringify(user, undefined, 4)
//   localStorage.setItem('user', userText)

// const student = {
//     firstName: 'Wayne',
//     lastName: 'Wang',
//     age: 26,
//     skills: 'everything',
//     country: 'China'
// }
// const studentObject = JSON.stringify(student)
// localStorage.setItem('student', studentObject)

const personAccount = {
    firstName: 'Wayne',
    lastName: 'Wang',
    incomes: 80000,
    outcome: 10000,
    accountBalance: function(){
        return this.incomes - this.outcome
    }
}
const personAccountObject = JSON.stringify(personAccount)
localStorage.setItem('person', personAccountObject)
console.log(personAccount.accountBalance());