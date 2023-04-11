import { helloWorld } from './app.js';


helloWorld()

let body = document.body

let div = document.createElement('div')

div.style.padding='10px'

let h1 = document.createElement('h1')
h1.innerText = "I am Course"

div.append(h1)



let para = document.createElement('p')

para.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis at similique impedit eos ab nihil modi incidunt assumenda neque nesciunt voluptatibus deserunt repellendus error optio commodi numquam, odit ipsam officia.'

para.className = 'abc bbb'
para.id = 'para'

div.append(para)

let courseList = ['English', 'Urdu', 'Math', 'Islamiyat']

let ul = document.createElement('ul')

courseList.forEach(e => {
    let li = document.createElement('li')
    li.innerText = e
    ul.append(li)

})

div.dataset.tempFile='this is temp file'

div.append(ul)


body.append(div)