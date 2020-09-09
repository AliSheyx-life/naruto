window.addEventListener('load', function () {

    let player1 = document.querySelector('.player1');
    let player2 = document.querySelector('.player2');
    let itachiDemage = document.querySelector('.demage-itachi');
    let jirayaDemage = document.querySelector('.demage-jiraya');
    let btn = document.querySelector('.btn');
    let reset = document.querySelector('.reset');
    

    function Monster(hp, power) {
        this.hp = hp;
        this.power = power;
        this.demage = function (x) {
            return this.hp -= x;
        };
        this.attack = function () {
            return Math.floor(Math.random() * this.power + 1);
        }
    }

    let itachi = new Monster(100, 10);
    let jiraya = new Monster(150, 5.5);
    

    btn.addEventListener('click', function () {
        
        itachi.demage(jiraya.attack());
        jiraya.demage(itachi.attack());

        player1.innerHTML = itachi.hp;
        player2.innerHTML = jiraya.hp;
        itachiDemage.innerHTML = 100 - itachi.hp;
        jirayaDemage.innerHTML = 150 - jiraya.hp;
        
        if (itachi.hp <= 0) {
            player1.innerHTML = 'DEAD';
            player2.innerHTML = 'Win';
            player2.style.color = 'white';
            player1.style.color = 'red';
            btn.style.display = 'none';
            reset.style.display = 'inline-block';
        }
        else if(jiraya.hp <= 0){
            player2.innerHTML = 'DEAD';
            player1.innerHTML = 'Win';
            player1.style.color = 'white';
            player2.style.color = 'red';
            btn.style.display = 'none';
            reset.style.display = 'inline-block';
        }
    })





})