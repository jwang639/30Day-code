let tmp = [2.2, 3.14, 36, 100]
let [e, pi, human, water] = tmp
console.log(tmp);

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries
console.log(countries);

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

let {width, height, area, per} = rectangle
console.log(rectangle);


const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }]


// let [name, scores, skills, age] = users
// console.log(users);

// for(const {name, scores, skills, age} of users){
//     if(skills.length < 2)
//     console.log(name, scores, skills, age); //find what you want during iteration with destructing
// } 

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name, skills, , jsScore= 90, reactScore= 95] = student //remember to use '=' to assign value
// console.log(name, skills, jsScore, reactScore)

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (array, key) => {
  const initialValue = {}; //use reduce to convert array array to object object
  return array.reduce((obj, item) => {
    return {...obj, [item[key]]: item, };
  }, initialValue);
};