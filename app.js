const container = document.querySelector(".container")
const rows = 2
const cols = 3
function randomNumber(){
    return Math.floor(Math.random()*500)
}
for(let i=0;i<rows*cols;i++){
    //link
    const url = `https://source.unsplash.com/random/${randomNumber()}`
    //พื้นที่เเสดงภาพ
    const imageEl = document.createElement("img")
    imageEl.src=url
    container.appendChild(imageEl)
}
