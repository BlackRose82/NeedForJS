const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea');
    car = document.createElement('div');
    car.classList.add('car');
    start.addEventListener('click', startGame); 
    document.addEventListener('keydown', startRun);  //событие срабатывает при нажатии любой клавиши
    document.addEventListener('keyup', stopRun);  // событие срабатывает при отпускании клавиши

    const keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowRight: false,
        ArrowLeft: false
    };
    const setting = {
        start: false,
        score: 0,
        speed: 3
    };
    function startGame(){
        start.classList.add('hide'); //скрыть блок при нажатии клика start
        setting.start = true;
        gameArea.appendChild(car);
        requestAnimationFrame(playGame);  //запуск без остановки
    }

    function playGame(){
        console.log('Play game!');
        if(setting.start === true){
            requestAnimationFrame(playGame);
        }
    }
    function startRun(event){
        event.preventDefault();
        keys[event.key] = true;
    }

    function stopRun(event){
        event.preventDefault();
        keys[event.key] = false;
    }




