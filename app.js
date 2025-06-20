function makeGrid(squares){
    let container = document.querySelector(".container")
    let rows = squares
    if(rows>100){
        rows=100
    }

    let columns = rows

    for(let i=0; i<=rows; i++){
        const rowdivs = document.createElement("div")
        rowdivs.setAttribute("class", "row")

        for (let j=0; j<=columns; j++){
            const columndivs = document.createElement("div")
            columndivs.setAttribute("class", "cell")
            rowdivs.appendChild(columndivs)
        }
          container.appendChild(rowdivs)
    }
  
}

makeGrid(16)

