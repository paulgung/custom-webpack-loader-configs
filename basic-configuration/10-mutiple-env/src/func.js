function getString(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ASYNC hello world!')
        },2000)
    })
}


async function helloworld(){
    const string = await getString()
    console.log(string)
}

export default helloworld
