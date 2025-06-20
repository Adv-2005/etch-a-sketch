function makeGrid(squares){
    let container = document.querySelector(".container")
    container.innerHTML = ""
    let rows = squares
    if(rows>100){
        rows=100
    }

    let columns = rows

    for(let i=0; i<rows; i++){
        const rowdivs = document.createElement("div")
        rowdivs.setAttribute("class", "row")

        for (let j=0; j<columns; j++){
            const columndivs = document.createElement("div")
            columndivs.setAttribute("class", "cell")
            columndivs.addEventListener("mouseover", ()=>{
                columndivs.style.backgroundColor=getRandomColor()
            })
            rowdivs.appendChild(columndivs)
        }
          container.appendChild(rowdivs)
    }
  
}

makeGrid(16)


function getRandomColor(){
    const r = Math.floor(Math.random()*256)
     const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)


    return `rgb(${r}, ${g}, ${b})`
}


let buttonContainer = document.createElement("div")
let removeButton = document.createElement("button")
removeButton.textContent= "Delete"
buttonContainer.appendChild(removeButton)
document.body.appendChild(buttonContainer)

removeButton.addEventListener("click", ()=>{
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell=>{
        cell.style.backgroundColor=""
    })
})

function newGrid(){
    let size = prompt("Enter size of grid")
    size = parseInt(size)
    if(!isNaN(size) && size>0 && size<=100){
        makeGrid(size)
    }else{
        alert("Please enter a valid number between 1 and 100")
    }
}

let newGridButton= document.createElement("button")
newGridButton.textContent= "New"
buttonContainer.appendChild(newGridButton)

newGridButton.addEventListener("click", newGrid )