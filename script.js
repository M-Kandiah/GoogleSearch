const buttongs = document.getElementById('buttongs')

buttongs.addEventListener('click',searchgs)

const buttonfl = document.getElementById('buttonfl')

buttonfl.addEventListener('click',searchfl)



function searchgs(e) {
    e.preventDefault()
    fetch('http://localhost:3000/results')
    .then(resp => resp.json())
    .then(resp = createList)
} 

function searchfl(e) {
    e.preventDefault()
    fetch('http://localhost:3000/results/random')
    .then(resp => resp.json())
    .then(resp = openWebpage)
}

const openWebpage = resp => {
    let randLink = resp.hlink
    window.location.assign(randLink)

}

function createList(resp) { // resp is an array of objects here
    let anyList = document.getElementById("newList")
    if (anyList === null ) {
     listGenerator(resp)
        
    } else {
        anyList.remove()
        listGenerator(resp)   
    }                           
 }

const listGenerator = (resp) => {

    const searchRequest = document.getElementById("searchbar").value
    let list = document.createElement('ul')
    list.id = "newList"
    document.getElementById('googlesearches').appendChild(list)
    list.setAttribute("class","list-group")
    for(let i=0; i< resp.length; i++) {
        
        if (searchRequest === resp[i].maintag) {
        let listItem = document.createElement("li");            
        let text = resp[i].headline
        console.log(text)
        let link = document.createElement("a") 
        
        list.appendChild(listItem)
        listItem.append(link)
        listItem.setAttribute("class","list-group-item text-center bg-dark")
        link.id = `link${i}`
        link.setAttribute("href",`${resp[i].hlink}`)
        link.setAttribute("class","text-light")
        link.setAttribute("style","text-decoration:none")

        document.getElementById(`link${i}`).innerText = text
    } else {
        console.log("no searches found")
    }
    }
}



//  const createList = resp => { // resp is an array of objects here
//     let anyList = document.getElementById("newList")
//     if (anyList === null ) {
//     const searchRequest = document.getElementById("searchbar").value
//     let list = document.createElement('ul')
//     list.id = "newList"
//     document.getElementById('googlesearches').appendChild(list)
//     list.setAttribute("class","list-group")
//     for(let i=0; i< resp.length; i++) {
        
//         if (searchRequest === resp[i].maintag) {
//         let listItem = document.createElement("li");            
//         let text = resp[i].headline
//         console.log(text)
//         let link = document.createElement("a") 
        
//         list.appendChild(listItem)
//         listItem.append(link)
//         listItem.setAttribute("class","list-group-item text-center bg-dark")
//         link.id = `link${i}`
//         link.setAttribute("href",`${resp[i].hlink}`)
//         link.setAttribute("class","text-light")
//         link.setAttribute("style","text-decoration:none")

//         document.getElementById(`link${i}`).innerText = text
//     } else {
//         console.log("no searches found")
//     }
//     }
        
//     } else {
//         anyList.remove()

    
        
          
//     }
                              
//  }

// const createList = (resp) => {
//     for(let i=0; i< resp.length; i++) {
//         let listItem = document.createElement("li");            
//         let text = document.createTextNode(resp[i]);         
//         listItem.appendChild(text);                           
//         document.getElementById("newList").appendChild(listItem);   
//     }
                              
//  }





// const googlesearch = document.getElementById('googlesearch')

// googlesearch.addEventListener('click',search)

// function search(e) {
//   e.preventDefault()
//   fetch('http://localhost:3000/results')
//     .then(resp => resp.text())
//     .then(resp => document.getElementById('googlesearch').innerHTML = resp)
    

// } 