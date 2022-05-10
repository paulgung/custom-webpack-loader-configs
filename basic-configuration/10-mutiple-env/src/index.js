import helloworld from './func.js'
import myImage from './assets/1.png'
import myImage2 from './assets/2.jpg'
import myImage3 from './assets/123.txt'
import myImage4 from './assets/aperture.svg'
import './style1.css'
import './style2.less'
import _ from "loadsh";
import(/* webpackChunkName: 'async-module'*/'./async-module')
helloworld()
console.log(_.join(['inde  x','module','loaded!'],' '))

const Image = document.createElement('img')
Image.style.cssText = 'width:300px;height:200px;display:inline-block'
Image.src = myImage
document.body.append(Image)

const Image2 = document.createElement('img')
Image2.style.cssText = 'width:300px;height:200px;display:inline-block'
Image2.src = myImage2
document.body.append(Image2)

const Image3 = document.createElement('div')
Image3.style.cssText = 'width:1000px;height:200px'
Image3.textContent = myImage3
Image3.classList.add('myClass')
Image3.classList.add('myClass-bg')
Image3.classList.add('icon')
document.body.append(Image3)

const Image4 = document.createElement('img')
Image4.style.cssText = 'width:300px;height:200px;display:inline-block'
Image4.src = myImage4
document.body.append(Image4)

document.body.classList.add('myStyle2')

const btn = document.createElement('button')
btn.textContent = '点击执行加法运算--lazy loading'
btn.addEventListener('click',()=>{
    import(/* webpackChunkName: 'math', webpackPrefetch: true */'./math-lazy').then(({add})=>{
        console.log(add(4,5))
    })
})
document.body.append(btn)
