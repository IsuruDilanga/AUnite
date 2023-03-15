const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");
noticeAlert = document.querySelector(".notice");
wonNotice1 = document.querySelector(".won-notice-1star");
wonNotice2 = document.querySelector(".won-notice-2star");
wonNotice3 = document.querySelector(".won-notice-3star");

let maxTime = 60;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard(e) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    } 
    if (timeLeft == 0){
        noticeAlert.style.display = "block";
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 6 && timeLeft > 0) {
             
            if(timeLeft >= 40 && timeLeft <= 60){
                wonNotice3.style.display = "block";
            } else if(timeLeft >= 20 && timeLeft <= 40){
                wonNotice2.style.display = "block";
            } else{
                wonNotice1.style.display = "block";
            }
            return clearInterval(timer);
            
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `/static/styles/images/img-${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
    noticeAlert.style.display = "none";
    wonNotice1.style.display = "none";
    wonNotice2.style.display = "none";
    wonNotice3.style.display = "none";
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});