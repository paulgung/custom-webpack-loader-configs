function getComponent(){
    return import('loadsh')
        .then(({default:_})=>{
            const element = document.createElement('div')
            element.innerHTML = _.join(['apple','banana','orange'],' ')
            return element
    })
}
getComponent().then((element)=>{
    document.body.append(element)
})
