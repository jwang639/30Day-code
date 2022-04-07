let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.15       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

const randNum = Math.random()
console.log(randNum)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b + 1}`) // injecting the data dynamically


let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

console.log(typeof NaN) 

let challenge = '30 Days Of JavaScript'
console.log(challenge)

let length = challenge.length
console.log(length) 

challenge = challenge.toUpperCase()
console.log(challenge)

challenge = challenge.toLowerCase()
console.log(challenge)

console.log(challenge.substr(3, 4))

console.log(challenge.substr(3, 18))

console.log(challenge.includes('script'))

let string2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(string2.split(","))

console.log(challenge.replace('javascript', 'Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt('J'))

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

console.log(typeof('10') == typeof(toString(10)))

console.log(Math.ceil(parseFloat('9.8')) == 10)

console.log('jargon'.includes('on'))

console.log('I hope this course is not full of jargon'.includes('jargon'));

console.log(Math.ceil(Math.random() * 100));

console.log("1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125") 

console.log('You cannot end a sentence with because because because is a conjunction'.substr(31, 23))

// let love= /love/gi
console.log(('Love is the best thing in this world. Some found their love and some are still looking for their love.').match(/love/gi).length)

let string3= 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

console.log(parseInt(string3.match(/\d+/g)[0] * 12) + parseInt(string3.match(/\d+/g)[1]) + parseInt(string3.match(/\d+/g)[2] *12))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace((/[%$#@;&?!]/g), ''))
