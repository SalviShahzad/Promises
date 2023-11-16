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
