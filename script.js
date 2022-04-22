
let main = document.querySelector('main')
let section1 = main.children[0]





const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  let name = e.target.classList[1];

  
  let newDiv = document.createElement('div');
  section1.appendChild(newDiv);
  
  
 
  newDiv.className='displayedsquare';
  newDiv.classList.add(name)
 newDiv.style.display ="inline-block"
  newDiv.style.backgroundColor = name;
  let ul = document.querySelector('ul')
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML= getElapsedTime() + " created a new " + name + " square" 
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

let body = document.querySelector('body')

function generateRandomColorRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}


body.addEventListener('keyup',event =>{
if(event.code ==='Space'){
  body.style.backgroundColor=generateRandomColorRgb();
  let log = event.target.style.backgroundColor;
  let ul = document.querySelector('ul')
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML= getElapsedTime() + " created a new " +log + " square" 
}
})


ul.addEventListener("keyup"){
  ul.remove
}










