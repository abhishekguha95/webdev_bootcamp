// fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json()
//         .then((data) => {
//             console.log('data1: ', data)
//             fetch("https://swapi.dev/api/people/2")
//                 .then((res) => {
//                     return res.json()
//                         .then((data) => {
//                             console.log('data2: ', data)

//                         })
//                 })
//         })
// }).catch((err) => {
//     console.log('err: ', err)
// }).finally(() => {
//     console.log('finally')
// })

// async function getSWPeople() {
//     try {
//         const response1 = await fetch("https://swapi.dev/api/people/1")
//         console.log('req 1')
//         const data1 = await response1.json()
//         console.log('req data1: ', data1)

//         const response2 = await fetch("https://swapi.dev/api/people/2")
//         console.log('req 2')
//         const data2 = await response2.json()
//         console.log('req data2: ', data2)

//     } catch (err) {
//         console.log('err: ', err)
//     }
// }

// console.log('start')
// // getSWPeople()
// // console.log('end')


// async function reqResAPI() {
//     try {
//         const response1 = await fetch("https://reqres.in/api/users", {
//             method: 'POST', // *GET, POST, PUT, DELETE, etc.

//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({

//                 // "email": "george.bluth@reqres.in",
//                 // "password": "abcd1234"
//                 'name': 'name123',
//                 'job':'job123'


//             })
//         });
//         console.log('req 1')
//         const data1 = await response1.json()
//         console.log('req data1: ', data1)



//     } catch (err) {
//         console.log('err: ', err)
//     }
// }

// reqResAPI()


const func1 = () => {
    console.log('func 1')
}

function func2(){
    console.log('func 2')
}


console.log(typeof(func1))
console.log(func1)

console.log(typeof(func2))
console.log(func2)