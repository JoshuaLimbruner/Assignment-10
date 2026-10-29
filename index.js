const popUp=document.getElementById('pop')
const view=document.getElementById('view')
const left=document.getElementById('left')
const right=document.getElementById('right')
let index=0
const list=[ //did Claude also write the captions?
  {"src": "https://picsum.photos/id/10/500/350","caption": "Mountain lake at dawn"},
  {"src": "https://picsum.photos/id/29/500/350","caption": "Forest trail in autumn"},
  {"src": "https://picsum.photos/id/33/500/350","caption": "City skyline at night"},
  {"src": "https://picsum.photos/id/42/500/350","caption": "Desert dunes"},
  {"src": "https://picsum.photos/id/48/500/350","caption": "Old stone bridge"},
  {"src": "https://picsum.photos/id/54/500/350","caption": "Coastline cliffs"},
  {"src": "https://picsum.photos/id/64/500/350","caption": "Snowy pine forest"},
  {"src": "https://picsum.photos/id/76/500/350","caption": "Rolling green hills"},
  {"src": "https://picsum.photos/id/96/500/350","caption": "Foggy harbor"}
]

const elements=list.map(itm=>{
    const ele=document.createElement("img")
    ele.src=itm.src
    ele.alt=itm.caption
    console.log(itm.caption)
    return ele})

function popUpPopUp(idx){
    if(idx>-1){
        popUp.style.display="flex"
        view.innerHTML=""
        index=idx
        const image=document.createElement('img')
        image.src=list[idx].src
        const cap=document.createElement("p")
        cap.innerHTML=list[idx].caption
        view.appendChild(image)
        view.appendChild(cap)}}

popUp.addEventListener("click",(event)=>{
    if(event.target.id==="left"){
        index=index-1
        if(index<0){index=list.length-1}
        popUpPopUp(index)}
    else if(event.target.id==="right"){
        index=index+1
        if(index>=list.length){index=0}
        popUpPopUp(index)}
    else if(event.target.id==="exit"||event.target.id==="pop"){popUp.style.display="none"}})

document.getElementById("wrapper").addEventListener("click",(event)=>{popUpPopUp(elements.indexOf(event.target))})
elements.forEach(itm=>{document.getElementById("wrapper").appendChild(itm)})