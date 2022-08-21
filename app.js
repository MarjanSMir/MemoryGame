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
let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];
let j = 0;

function pictureBoard() {
    for (var i = 0; i < cardArray.length; i++) {
        let card = document.createElement("img");
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flip)
        grid.style.display = 'flex'
        grid.style.flexWrap = 'wrap'
        grid.style.justifyContent = "center"
        grid.style.alignItems = 'center'
        grid.style.marginTop = '1rem'
        grid.style.width = "50%"
        card.style.margin = '0.5rem'
        grid.append(card)
    }

}
pictureBoard()

function checkmatch() {
    const cards = document.querySelectorAll('img')
    if(cardChosenId[0] == cardChosenId[1]){
        console.log('click same image')
        cards[cardChosenId[0]].setAttribute('src', 'images/blank.png')
        cards[cardChosenId[1]].setAttribute('src', 'images/blank.png')
        cardChosen=[]
        cardChosenId= []
    }
    if (cardChosen[0] == cardChosen[1]) {
        console.log('mached');
        cards[cardChosenId[0]].setAttribute('src', 'images/white.png')
        cards[cardChosenId[1]].setAttribute('src', 'images/white.png')
        cards[cardChosenId[0]].removeEventListener('click', flip)
        cards[cardChosenId[1]].removeEventListener('click', flip)
        let result = document.getElementById('result');

    } else {
        console.log('did not matched')
        cards[cardChosenId[0]].setAttribute('src', 'images/blank.png')
        cards[cardChosenId[1]].setAttribute('src', 'images/blank.png')
    }
    cardsWon.push(cardChosen)
    cardChosen=[]
    cardChosenId= []
    console.log(cardsWon.length)

    if(cardsWon.length == cardArray.length/2){
        let result = document.getElementById('result');
        result.innerHTML = j+1;
    }
}

function flip() {
    console.log(cardArray)
    let cardId = this.getAttribute('data-id')
    let arrayCard = cardArray[cardId].name
    cardChosen.push(arrayCard)
    cardChosenId.push(cardId)
    console.log(arrayCard)
    console.log(cardChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkmatch, 1000)
    } else if (cardChosen.length > 2) {
    }




}