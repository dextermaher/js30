window.onload = function() {
    main();
  }
  
  function main() {
    let clockElement = document.querySelector('.clock');
    let clock = new Clock(clockElement);
    window.extClock = clock;
  }

  class Clock {
    constructor(element){
    
      this.faceElem;
      this.secondHandElem;
      this.minuteHandElem;
      this.hourHandElem;
      
      
      this.element      = element;
      
      this._setup();
      
      this.start();
    }
    _setup(){
      this.faceElem         = this.element.querySelector('.clock__face');
      this.secondHandElem   = this.element.querySelector('.clock__hand--sec');
      this.minuteHandElem   = this.element.querySelector('.clock__hand--min');
      this.hourHandElem     = this.element.querySelector('.clock__hand--hour');
    }
    
    _update(){
      let date = new Date();
      
      let seconds = date.getSeconds();
      let degreesSec = (360/60) * seconds + 90;
      this.secondHandElem.style.transform = `rotate(${degreesSec}deg)`;

      let minute = date.getMinutes();
      let degreesMin = (360/60) * minute + 90;
      this.minuteHandElem.style.transform = `rotate(${degreesMin}deg)`;

      let hour = date.getHours();
      let degreesHour = (360/12) * hour + 90;
      this.hourHandElem.style.transform = `rotate(${degreesHour}deg)`;

    }
    
    

    start(){
     this._updateInterval = setInterval(this._update.bind(this), 1000);
    }

    stop(){
      clearInterval(this._updateInterval);
    }

  }