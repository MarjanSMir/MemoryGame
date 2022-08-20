let cardArray = [{
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }
]
cardArray.sort(() => Math.random() - 0.5)
let grid = document.getElementById('grid')

function pictureBoard(){
    for (var i = 0; i < cardArray.length; i++){
        let card = document.createElement("img");
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i);
        grid.style.display = 'flex'
        grid.style.flexWrap = 'wrap'
        grid.style.justifyContent ="center"
        grid.style.alignItems = 'center'
        grid.style.marginTop = '1rem'
        grid.style.width = "70%"
        card.style.margin = '0.5rem'
        grid.append(card)
    }

}
pictureBoard()
