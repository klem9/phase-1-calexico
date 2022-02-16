

// Challenge #3
// When the user clicks on the menu items on the left, they should see all the details for that specific menu item.

// Challenge #4
// The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.

// For example, if there are currently 2 burritos in the cart, and the user adds 2 more, the total should be 4.

let currentItem;

fetch("http://localhost:3000/menu")
.then(resp => resp.json())
.then(menuData => {
    renderMenuItems(menuData)
    menuCard(menuData[0])
})

function renderMenuItems(menu){
    menu.forEach((menuItem)=>{
        item = document.createElement("span")
        item.textContent = menuItem.name

        menuContainer = document.querySelector("#menu")
        menuContainer.appendChild(item)

    })
}
    

function menuCard(items){   
    currentItem = menu

    dishImage = document.getElementById("dish-image")
    dishDesc = document.getElementById("dish-description")
    dishName = document.getElementById("dish-name")
    dishPrice = document.getElementById("dish-price")
    cartQuant = document.getElementById("number-in-cart")

    dishImage.src = items.image 
    dishDesc.innerText = items.description 
    dishName.innerText = items.name
    dishPrice.innerText = items.price
    cartQuant.innerText = items.number_in_bag
}

