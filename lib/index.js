"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var lodash_throttle_1 = __importDefault(require("lodash.throttle"));
//Implementação Lazy Scroll por JQuery
(function () {
    var _a;
    (_a = jquery_1.default('a')) === null || _a === void 0 ? void 0 : _a.click(function () {
        var _a;
        var element = jquery_1.default(this);
        var refString = element.attr('href');
        var documentTop = jquery_1.default(document).scrollTop();
        var scrollPosition = (_a = jquery_1.default(refString).offset()) === null || _a === void 0 ? void 0 : _a.top;
        jquery_1.default('html, body').animate({ scrollTop: scrollPosition }, Math.abs(scrollPosition - documentTop) + 500);
        return false;
    });
}());
//Implementação de funções vinculadas ao Scroll
(function () {
    //Fade-in borda do menu de navegação
    function navBorderShow() {
        var navbarBorder = document.getElementById("navbar-boder");
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
        var navbarAnimate = document.getElementById("fadeout-animate");
        if (documentTop == 0) {
            navBorderHide();
            navbarAnimate.classList.add('animate-pulse', 'visible');
            navbarAnimate.setAttribute("style", "opacity: '1'");
        }
        else {
            navbarAnimate.classList.remove('animate-pulse');
            navBorderShow();
            navbarAnimate.setAttribute("style", "opacity: " + opacityLevel + ";");
            if (opacityLevel == 0) {
                navbarAnimate.classList.add('visible');
            }
            else {
                navbarAnimate.classList.add('in visible');
            }
        }
    }
    //Fade-in Lateral do conteúdo
    var $target = jquery_1.default('.anime-left, .anime-right'), animationClass = 'anime-final';
    var offset = jquery_1.default(window).height() * (3 / 4);
    function AnimateScroll() {
        var documentTop = jquery_1.default(document).scrollTop();
        $target.each(function () {
            var _a;
            var itemTop = (_a = jquery_1.default(this).offset()) === null || _a === void 0 ? void 0 : _a.top;
            if (documentTop > (itemTop - offset)) {
                jquery_1.default(this).addClass(animationClass);
            }
            else {
                jquery_1.default(this).removeClass(animationClass);
            }
        });
    }
    jquery_1.default(document).scroll(lodash_debounce_1.default(function () {
        AnimateFadeout();
    }, 10));
    jquery_1.default(document).scroll(lodash_throttle_1.default(function () {
        AnimateScroll();
    }, 200));
    window.addEventListener('load', function () {
        AnimateScroll();
        AnimateFadeout();
    });
}());
