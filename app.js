// A promise that resolves after 1 second
let pro = new Promise((resolve, reject) => {
setTimeout(()=>{
resolve("ok")
}, 1000)
})

pro.then((val)=>{
console.log(val)
}).catch((val)=> {
console.log(val)
})

// Promise.all implementation
const promise1 = new Promise((resolve,reject)=> {
setTimeout(()=>{
resolve("Yes!")
}, 1000)
reject("No! 1")
})

const promise2 = new Promise((resolve,reject)=> {
setTimeout(()=>{
resolve("Yes! 2")
}, 1000)
})

const promise3 = new Promise((resolve,reject)=> {
setTimeout(()=>{
resolve("Yes! 3")
}, 1000)
reject("No!")
})

Promise.all([promise1, promise2, promise3]).then((values)=> {
console.log(values)
}).catch((err)=> {
console.log(err) // Consoles No! 1
})
