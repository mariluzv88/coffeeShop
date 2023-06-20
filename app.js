let menuDeatz = {
    coffee: " Coffee:$5",
    tea: " Tea:$5",
    choco: "Hot Chocolate:$5",
    boba: " Boba:$5",
    juice: " Orange juice:$5",
    candy: " Candy:$5",
    cookie: " Cookie:$5",
    cupCake: " CupCake:$5",
    
}


let isClicked = true

const showMenu = (item) =>{
    if(item === 'coffee' && isClicked){
        showText = document.querySelector('.text')
        showText.style.display = 'block'
        isClicked =false
    }else if(item === 'tea' && isClicked){
         showText = document.querySelector('.text1')
        showText.style.display = 'block'
        isClicked =false
    }else if(item === 'choco' && isClicked){
        showText = document.querySelector('.text2')
        showText.style.display = 'block'
        isClicked =false
    }else if(item === 'boba' && isClicked){
        showText = document.querySelector('.text3')
        showText.style.display = 'block'
        isClicked =false
    }else if(item === 'juice' && isClicked){
        showText = document.querySelector('.text4')
        showText.style.display = 'block'
        isClicked =false
    }else if(item === 'candy' && isClicked){
        showText = document.querySelector('.text5')
        showText.style.display = 'block'
        isClicked =false
    }else if (item === 'cookie' && isClicked){
        showText = document.querySelector('.text6')
        showText.style.display = 'block'
        isClicked =false
    }else if(item === 'cupCake' && isClicked){
        showText = document.querySelector('.text7')
        showText.style.display = 'block'
        isClicked =false
    }else{
        showText.style.display = 'none'
        isClicked =true
    }

        
    
}

// const menuInfo=(item)=>{
// let menuDescription = document.querySelector('.menuItem')  
     
// let Minfo = document.createElement('div')
// Minfo.setAttribute('class','mInfo') 
//     if(item === 'coffee'){
//     Minfo.innerHTML = menuDeatz.coffee  
//     menuDescription.append(Minfo)
   
   
    
// }else if(item === 'tea'){
//     Minfo.innerHTML = menuDeatz.tea
//     menuDescription.append(Minfo)
// }
// else if(item === 'choco'){
//     Minfo.innerHTML = menuDeatz.choco
//     menuDescription.append(Minfo)
// }
// else if(item === 'boba'){
//     Minfo.innerHTML = menuDeatz.boba
//     menuDescription.append(Minfo) 
// }
// else if(item === 'juice'){
//     Minfo.innerHTML = menuDeatz.juice
//     menuDescription.append(Minfo)
// }
// else if(item === 'candy'){
//     Minfo.innerHTML = menuDeatz.candy
//     menuDescription.append(Minfo) 
// }
// else if(item === 'cookie'){
//     Minfo.innerHTML = menuDeatz.cookie
//     menuDescription.append(Minfo)
// }else if(item === 'cupCake'){
//     Minfo.innerHTML = menuDeatz.cupCake
//     menuDescription.append(Minfo) 
// }
// }

// const showHideMenu = ()=>{
   
//    menuDescription.replaceWith('.menuItem')
       
// }
// const showAll = (item)=>{
//     if(item ==='coffee'){
//         menuInfo('coffee')
//         showHideMenu('coffee')
//     }
// }

