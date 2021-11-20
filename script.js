const imags=document.getElementById("images")

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


const img = document.querySelectorAll('#images img')


let index=0

let interval = setInterval(run,2000)

rightBtn.addEventListener('click',()=>{
    index++
    ImageChange()
    resetInterval()
})

leftBtn.addEventListener('click',()=>{
    index--
    ImageChange()
    resetInterval()
})

function ImageChange(){
      if( index > img.length-1 ){
          index=0
      }else if(index < 0) {
          index =  img.length-1
      }
    imags.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
     interval = setInterval(run,2000)
}


function run() {
    index++
    ImageChange()
}