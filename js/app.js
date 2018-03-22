/////////////////////////zadanie 1:
console.group('Menu');

function init1() {

    var mainList = document.querySelectorAll("nav.headerMenu>ul>li");

    for(var i = 0; i < mainList.length; i++) {
        mainList[i].addEventListener('mouseover', move1);
        mainList[i].addEventListener('mouseout', move2);
    }

    function move1(event) {
        var uList = this.querySelector('ul');
        if (uList !== null) {
            uList.style.display = 'block';
        }
    }
    function move2(event) {
        var uList = this.querySelector('ul');
        if (uList !== null) {
            uList.style.display = 'none';
        }
    }
}
document.addEventListener('DOMContentLoaded', init1);

console.groupEnd();
/////////////////////////zadanie 2:
console.group('Block');

function init2() {

    var article1 = document.querySelector("article.col-third1");

    article1.addEventListener('mouseover', move_article11);
    article1.addEventListener('mouseout', move_article12);

    function move_article11(event) {
        var object = this.querySelector('header');
        object.style.display = 'none';
    }
    function move_article12(event) {
        var object = this.querySelector('header');
        object.style.display = 'block';
    }

    var article2 = document.querySelector("article.col-third2");

    article2.addEventListener('mouseover', move_article21);
    article2.addEventListener('mouseout', move_article22);

    function move_article21(event) {
        var object = this.querySelector('header');
        object.style.display = 'none';
    }
    function move_article22(event) {
        var object = this.querySelector('header');
        object.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', init2);

console.groupEnd();

/////////////////////////zadanie 3:
console.group("Slider");

function init3() {

    var guzikNext = document.querySelector('.arrows2');
    // console.log(guzikNext);
    var guzikPrev = document.querySelector('.arrows1');
    // console.log(guzikPrev);
    var elementList = document.querySelectorAll('aside.col-half > ul li');
    // console.log(elementList);

    var counter = 0;

    elementList[counter].classList.add('visible');

    console.log(elementList);

    guzikNext.addEventListener('click', klik1);
    guzikPrev.addEventListener('click', klik2);

    function klik1() {
        var ele = elementList[counter].classList.remove('visible');
        counter++;
        if (counter === 7) {
            counter = 0;
        }
        var ele1 = elementList[counter].classList.add('visible');
    }
    function klik2() {
        var ele = elementList[counter].classList.remove('visible');
        counter--;
        if (counter === -1) {
            counter = 6;
        }
        var ele1 = elementList[counter].classList.add('visible');
    }
}
document.addEventListener('DOMContentLoaded', init3);

console.groupEnd();

/////////////////////////kalkulator:
console.group("Calculator");

function init4() {

    var chairName = document.querySelector('span.listArrow.chairName');
    var price = document.querySelector('.totalPrice');
    var chairColor = document.querySelector('span.listArrow.chairColor');
    var chairPattern = document.querySelector('span.listArrow.chairPattern');
    var transport = document.querySelector('.checkbox.check-box > input');
    var chairPrice = 0;
    var colorPrice = 0;
    var patternPrice = 0;
    var transportPrice = 0;

    chairName.addEventListener('click', klik1);
    chairColor.addEventListener('click', klik2);
    chairPattern.addEventListener('click', klik3);
    transport.addEventListener('click', klik4);

    function klik1() {
        this.nextElementSibling.classList.toggle('showList');

        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', chairChoice);
            function chairChoice() {
                document.querySelector('span.listLabel.chairName').innerHTML = this.innerHTML;
                document.querySelector('.panelLeft > .title').innerHTML = this.innerHTML;
                document.querySelector('.panelRight > .title').innerHTML = this.dataset.chairPrice;
                chairPrice = 0;
                chairPrice = chairPrice + parseInt(this.dataset.chairPrice);
                price.innerHTML = chairPrice + colorPrice + patternPrice + transportPrice;
                this.parentElement.classList.add('showList');
            }
        }
    }
    function klik2() {
        this.nextElementSibling.classList.toggle('showList');

        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', colorChoice);
            function colorChoice() {
                document.querySelector('span.listLabel.chairColor').innerHTML = this.innerHTML;
                document.querySelector('.panelLeft > .color').innerHTML = this.innerHTML;
                document.querySelector('.panelRight > .color').innerHTML = this.dataset.colorPrice;
                colorPrice = 0;
                colorPrice = colorPrice + parseInt(this.dataset.colorPrice);
                price.innerHTML = chairPrice + colorPrice + patternPrice + transportPrice;
                this.parentElement.classList.add('showList');
            }
        }
    }
    function klik3() {
        this.nextElementSibling.classList.toggle('showList');

        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', patternChoice);
            function patternChoice() {
                document.querySelector('span.listLabel.chairPattern').innerHTML = this.innerHTML;
                document.querySelector('.panelLeft > .pattern').innerHTML = this.innerHTML;
                document.querySelector('.panelRight > .pattern').innerHTML = this.dataset.patternPrice;
                patternPrice = 0;
                patternPrice = patternPrice + parseInt(this.dataset.patternPrice);
                price.innerHTML = chairPrice + colorPrice + patternPrice + transportPrice;
                this.parentElement.classList.add('showList');
            }
        }
    }
    function klik4() {
        if (this.checked) {
            document.querySelector('.panelLeft > .transport').innerHTML = document.querySelector('.checkbox.check-box > label').innerHTML;
            document.querySelector('.panelRight > .transport').innerHTML = this.dataset.transportPrice;
            transportPrice = 0;
            transportPrice = transportPrice + parseInt(this.dataset.transportPrice);
            price.innerHTML = chairPrice + colorPrice + patternPrice + transportPrice;
        }
        else {
            document.querySelector('.panelLeft > .transport').innerHTML = '';
            document.querySelector('.panelRight > .transport').innerHTML = '';
            transportPrice = 0;
            price.innerHTML = chairPrice + colorPrice + patternPrice + transportPrice;
        }
    }
}

document.addEventListener('DOMContentLoaded', init4);

console.groupEnd();