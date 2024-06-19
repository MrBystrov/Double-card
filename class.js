export class Card {
    _open = false;
    _success = false;
    _cardNumber = this.cardNumber;
    constructor(container, cardNumber, flip) {
      this._cardNumber = cardNumber;
      this.card = this.createElement(this.cardNumber);
      console.log(this.card)
      this.card.textContent = cardNumber;
      this.card.addEventListener('click', () => {
        if(this.open == false && this.success == false) {
          this.open = true;
          flip(this)
        }
      })
      container.append(this.card)
    }

    createElement() {
      const playCard = document.createElement('div')
      playCard.setAttribute('class', 'play-card')
      playCard.setAttribute('style', ' flex-basis: 23%;')
      playCard.classList.add('d-flex', 'justify-content-center', 'pt-3', 'pb-3')
      return playCard
    }

    set cardNumber(num) {
       this._cardNumber = num; 

    }
    get cardNumber() {
       return this._cardNumber;
    }
    set open(boolean) {
       this._open = boolean; 
       boolean ? this.card.classList.add('opened') : this.card.classList.remove('opened')
        
       
    }
    get open() {
       return this._open;
    }
    
    set success(boolean) {
       this._success = boolean;
       boolean ? this.card.classList.add('success') : this.card.classList.remove('success') 
    }
    get success() {
       return this._success;
    }
  }


export class AmazingCard extends Card {
    constructor(container, cardNumber, flip){
      super(container, cardNumber, flip)
      this.cardNumber = cardNumber;
      console.log(this)
      
    }

    set cardNumber(value) {
      const cardImgArray = [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg'
      ]
      
      const img = document.createElement('img')
      img.src = cardImgArray[value]
      img.classList.add('card-image')
      this.card.innerHTML = '';
      this.card.append(img)

      img.onerror = () => {
        img.src = './img/error.jpg'
        this.card.append(img)
        throw new Error('Ошибка загрузки изображения')
      }
    }
    
    get cardNumber() {
      return this._cardNumber;
    }
    
  }
 