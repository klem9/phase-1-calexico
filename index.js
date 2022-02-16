// Challenge #4
// The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.

// For example, if there are currently 2 burritos in the cart, and the user adds 2 more, the total should be 4.

let currentItem;
let fullMenu = [];


fetch("http://localhost:3000/menu")
.then(resp => resp.json())
.then(menuData => {
    fullMenu = menuData
    renderMenuItems(fullMenu)
    menuCard(fullMenu[0])
    addToCart()
})

function renderMenuItems(items){
    items.forEach((item)=>{
        newItem = document.createElement("span")
        newItem.innerText = item.name

        menuContainer = document.querySelector("#menu-items")
        menuContainer.appendChild(newItem)

        newItem.addEventListener("click",()=>{
            menuCard(item)

        })
    })
}
    
function menuCard(item){   
    currentItem = item

    dishImage = document.getElementById("dish-image")
    dishDesc = document.getElementById("dish-description")
    dishName = document.getElementById("dish-name")
    dishPrice = document.getElementById("dish-price")
    cartQuant = document.getElementById("number-in-cart")

    dishImage.src = item.image 
    dishDesc.textContent = item.description 
    dishName.textContent = item.name
    dishPrice.textContent = item.price
    cartQuant.textContent = item.number_in_bag
}

function addToCart(){
    formContainer = document.querySelector("#cart-form")
    formInput = document.querySelector("#cart-amount")

    formContainer.addEventListener("submit",(e)=>{
        e.preventDefault()
        added = parseInt(formInput.value)
        currentItem.number_in_bag += added
        cartQuant.textContent = currentItem.number_in_bag
        e.target.reset()
    })
}