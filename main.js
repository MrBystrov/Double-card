import {Card, AmazingCard} from './class.js'

  // Функция создания заголовка
  function createTitle(title) {
    const gameTitle = document.createElement('h1')
    gameTitle.textContent = title;
    return gameTitle;
  }
  // Функция создания заголовка
  function createNewGameButton() {
    const newGameButton = document.createElement('button')
    newGameButton.textContent = "New Game";
    newGameButton.classList.add('btn', 'btn-dark', 'mb-3')
    return newGameButton;
  }
  // Функция создания поля для карт
  function createPlayField() {
    const playField = document.createElement('div')
    playField.setAttribute('style', 'gap: 25px')
    playField.classList.add('border', 'border-dark', 'p-3', 'd-flex', 'flex-wrap', 'justify-content-center', 'playfield')
    return playField;
  }
 
  let cardsPairs = prompt("Сколько пар карт вы бы хотели?", 2);

  //Функция создания массива с цифрами по одной каждой
  function createDoubleNumArr() {
    let orderedArr = [];
    while (orderedArr.length !== cardsPairs * 2) {
      let a = Math.floor(Math.random() * cardsPairs);
      if (!orderedArr.includes(a)) {
        orderedArr.push(a, a);
      }
    }

    return orderedArr;
  }


//   // Тасование Фишера — Йетса.
  function createShuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

// //   // Функция создания игры
  function createDoubleCardGame(container, title) {
    const gameTitle = createTitle(title);
    const newGameButton = createNewGameButton();
    const playField = createPlayField();
    let doubleArr = createDoubleNumArr();
    let shuffleArr = createShuffleArr(doubleArr);

    // Добавляем статические элементы
    container.append(gameTitle);
    container.append(newGameButton);
    container.append(playField);
    



// //     // Карты для сравнения
    let firstCard = null;
    let secondCard = null;

    // Функция начала новой игры
    function newGameStart() {
      playField.innerHTML = '';
      newGameButton.disabled = true;

     
      function flip(card) {
        if(firstCard !== null && secondCard !== null) {
          if(firstCard.cardNumber != secondCard.cardNumber) {
            firstCard.open = false;
            secondCard.open = false;
            firstCard = null;
            secondCard = null;
          }
        }

        if (firstCard === null) {
          firstCard = card;
        } else {
          if(secondCard === null)
          secondCard = card;
        }
       
        if(firstCard !== null && secondCard !== null) {
          if(firstCard.cardNumber === secondCard.cardNumber) {
            firstCard.success = true;
            secondCard.success = true;
            firstCard = null;
            secondCard = null;
          }
        }
        if (shuffleArr.length === document.querySelectorAll('.success').length) {
          setTimeout(function () {
            alert("Вы победили!")

            // Запрос о начале новой игры
            let oneMoreTime = confirm('Хотите сыграть еще?')
            if (oneMoreTime) {
              newGameStart()
            } else {
              newGameButton.disabled = false;
            }
          }, 300)
        }
      }

//       // Добавляем карты в поле
      for (let i = 0; i < shuffleArr.length; i++) {
        
        const cardObj = new AmazingCard(playField, shuffleArr[i], flip)
        console.log(cardObj)
        
       
      }
    }
    
    // ПРослушка кнопки начала игры
    
    
    newGameButton.addEventListener('click', function () {
      newGameStart()
    })
  }

export {createDoubleCardGame};




















