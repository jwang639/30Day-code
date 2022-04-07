// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
// }

// let over50 = new Array()
// let MERN = new Array()
// let userlist = Object.keys(users)
// for(let user of userlist){
//     if(users[user].points >= 50){
//         over50.push(user)
//     }
//     let skill = users[user].skills
//     if(skill.includes('MongoDB') && skill.includes('Express') 
//     && skill.includes('React')&& skill.includes('Node')){
//         MERN.push(user)
//     }
// }
// console.log(over50.length + ' users having greater than equal to 50 points');
// console.log(MERN.length + ' users are MERN stack developer');

// const jiahao = {
//     Jiahao:{
//       email: 'jiahao@jiahao.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 26,
//       isLoggedIn: false,
//       points: 50}
// }

// const copiedusers = Object.assign(jiahao, users)
// console.log(copiedusers);
// console.log(users);

//console.log(Object.keys(copiedusers));

//console.log(Object.values(copiedusers));

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    },
]


const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp(newUser){
    let flag = false
    for(let user of users){
        if(user.username == newUser.username || user._id == newUser._id){
            console.log('The account is existed');
            flag = true
            break
        }
    }
    if(flag == false) users.push(newUser)
}

function signIn(id, pw){
    for(let user of users){
        if(user._id === id && user.password === pw) console.log('SignIn successfully!');
    }
}

signUp({
    _id: 'djf2g1',
    username: 'Wayne',
    email: 'wayne@wayne.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
})

signIn('djf2g1', '123123')

function averageRating(){
    for(let product of products){ //iterate in products array
        if(product.ratings.length == 0) continue //if no rating, skip this
        else {
            let points = 0
            for(let userRate of product.ratings){ //iterate in ratings array
                points += userRate.rate //add each user's rate
            }
            let rates = points / product.ratings.length
            console.log('The rates of ' + product.name + ' is: ' + rates);
        }
    }
}
averageRating()

function rateProduct(productName, newRate){
    let productList = new Array()  //store the product name as array
    for(let product of products){
        productList.push(product.name)
    }
    if(productList.includes(productName)){  //if product exists
        products[productList.indexOf(productName)].ratings.push(newRate) //get the array of ratings and push new rates
    }
}

rateProduct('TV', {userId: 'daf223', rate: 5})
console.log(products);

