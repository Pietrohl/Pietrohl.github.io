"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
//Implementação Lazy Scroll por JQuery
(function () {
    var _a;
    (_a = jquery_1.default('a')) === null || _a === void 0 ? void 0 : _a.click(function () {
        var _a;
        var element = jquery_1.default(this);
        var refString = element.attr('href');
        jquery_1.default('html, body').animate({
            scrollTop: (_a = jquery_1.default(refString).offset()) === null || _a === void 0 ? void 0 : _a.top
        }, 800);
        return false;
    });
}());
//Implementação de funções vinculadas ao Scroll
(function () {
    //Fade-in borda do menu de navegação
    function navBorderShow() {
        var navbarBorder = document.getElementById("navbar-boder");
        console.log("Top is: " + navbarBorder.style.marginTop);
        if (navbarBorder.style.marginTop != '0px') {
            navbarBorder.style.marginTop = '0px';
            navbarBorder.animate([
                { marginTop: '-60px', easing: 'ease-out' },
                { marginTop: '0px' }
            ], {
                duration: 750,
                iterations: 1
            });
        }
    }
    //Fade-out Borda de Navegação
    function navBorderHide() {
        var navbarBorder = document.getElementById("navbar-boder");
        if (navbarBorder.style.marginTop != '-60px') {
            navbarBorder.style.marginTop = '-60px';
            navbarBorder.animate([
                { marginTop: '0px', easing: 'ease-out' },
                { marginTop: '-60px' }
            ], {
                duration: 1500,
                iterations: 1
            });
        }
    }
    //Fade-out do título Hero Banner
    function AnimateFadeout() {
        var _a;
        var documentTop = (_a = jquery_1.default(document)) === null || _a === void 0 ? void 0 : _a.scrollTop();
        var opacityLimit = window.innerHeight / 2;
        var opacityLevel = documentTop <= (opacityLimit) ? ((opacityLimit - documentTop) / opacityLimit) : 0;
        console.log("estou no animateTest, meu opacityLevel \u00E9: " + opacityLevel + " " + documentTop);
        var navbarAnimate = document.getElementById("fadeout-animate");
        if (documentTop > 0) {
            navBorderShow();
            navbarAnimate.setAttribute("style", "opacity: " + opacityLevel);
            navbarAnimate.classList.remove('animate-pulse');
        }
        else {
            navBorderHide();
            navbarAnimate.classList.add('animate-pulse');
        }
    }
    //Fade-in Lateral do conteúdo
    var $target = jquery_1.default('.anime-left, .anime-right'), animationClass = 'anime-final';
    var offset = jquery_1.default(window).height() * (3 / 4);
    function animateScroll() {
        var documentTop = jquery_1.default(document).scrollTop();
        $target.each(function () {
            var _a;
            var itemTop = (_a = jquery_1.default(this).offset()) === null || _a === void 0 ? void 0 : _a.top;
            console.log("Offset is " + offset + "\n documentTop is " + documentTop + "\n itemTop is " + itemTop);
            if (documentTop > (itemTop - offset)) {
                console.log('Adicionando anime-final');
                jquery_1.default(this).addClass(animationClass);
            }
            else {
                jquery_1.default(this).removeClass(animationClass);
            }
        });
    }
    jquery_1.default(document).scroll(function () {
        AnimateFadeout();
        animateScroll();
    });
}());
