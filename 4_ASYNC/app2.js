console.log('start')

async function fakeRequest(url) {
    const num = Math.random();
    console.log('num: ', num)
    return new Promise(function (resolve, reject) {
        if (num > 0.50) {
            //some logic
            resolve(`data from ${url}`)
        } else {
            reject('rejected arg')
        }
    })
}

async function handlingFunc() {
    try {
        const data1 = await fakeRequest('/abc')
        console.log('data1: ', data1)
        const data2 = await fakeRequest('/abc/1')
        console.log('data2: ', data2)
    } catch (err) {
        console.log('inside catch')
        console.log(err)
    }
}

const response = handlingFunc()


// await fakeRequest('/abc')
//     .then(function (data) {
//         console.log('inside then 1')
//         console.log(data)
//         fakeRequest('/abc/1')
//             .then(function (data) {
//                 console.log('inside then 2')
//                 console.log(data)
//             }).catch((err) => {
//                 console.log('inside catch 2')
//                 console.log(err)
//             })
//     }).catch((err) => {
//         console.log('inside catch 1')
//         console.log(err)
//     })