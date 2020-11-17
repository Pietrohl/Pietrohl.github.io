import $ from 'jquery'; 
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import Rellax from 'rellax';

//Implementação Lazy Scroll por JQuery
(function(){
     $('a')?.click(function(){

        let element = <JQuery<HTMLElement>>$(this);
        let refString: string = <string>element.attr('href')
        let documentTop: number =<number>$(<Document>document).scrollTop();
        let scrollPosition: number = <number>$(refString).offset()?.top;
        

        $('html, body').animate(
            {scrollTop: scrollPosition}
            , Math.abs(scrollPosition-documentTop)+500);
        return false;
    })
}());


//implementação do Carousel automático
(function(){
    let $target = $('.carousel-activator');
    let arr = $target.map(function() {
        return this.id;
    });
    let i: number = 0;

    setInterval(function () {
        i++;
        $(`#${arr[i%arr.length]}`).prop( "checked", true );
    }, 6000)

})();



//implementação link para projects
(function () {
    $('#slider-track').click(function() {
        console.log('redirecionando para Projects.html')
        window.location.href='projects.html';
    })
})();





//Implementação de funções vinculadas ao Scroll
(function(){
    
    let documentTop: number;

    //Fade-in borda do menu de navegação
    function navBorderShow() {

        let navbarBorder: HTMLElement = <HTMLElement>document.getElementById("navbar-boder")
        
        if(navbarBorder.style.marginTop != '0px') {
            navbarBorder.style.marginTop = '0px';
            navbarBorder.animate([ 
                {marginTop: '-60px', easing: 'ease-out'}, 
                {marginTop: '0px'}], 
                {
                duration: 750,
                iterations: 1
            });
        }

    }

    //Fade-out Borda de Navegação
    function navBorderHide() {

        let navbarBorder: HTMLElement = <HTMLElement>document.getElementById("navbar-boder")
        if(navbarBorder.style.marginTop != '-60px') {
            navbarBorder.style.marginTop = '-60px';
            navbarBorder.animate([ 
                {marginTop: '0px', easing: 'ease-out'}, 
                {marginTop: '-60px'}], 
                {
                duration: 1500,
                iterations: 1
            });
        }
    }


    function navBorderAnimate() {
        documentTop = <number>$(<Document>document)?.scrollTop();
        
        if(documentTop<=0) 
            navBorderHide();
            
        if(documentTop>0)
            navBorderShow();

    }
    

    //Fade-out do título Hero Banner
    function AnimateFadeout() {
        
        documentTop = <number>$(<Document>document)?.scrollTop();
        let opacityLimit: number = window.innerHeight/2;
        let opacityLevel: number = documentTop<=(opacityLimit) ? ((opacityLimit-documentTop)/opacityLimit) : 0;        
        let navbarAnimate: HTMLElement = <HTMLElement>document.getElementById("fadeout-animate")
        
        if(documentTop==0) {            
            navbarAnimate.classList.add('animate-pulse','visible');
            navbarAnimate.classList.remove('invisible');
            navbarAnimate.setAttribute("style",`opacity: 1`);            

        } else {            
            navbarAnimate.classList.remove('animate-pulse');
            navbarAnimate.setAttribute("style",`opacity: ${opacityLevel};`);

            if(opacityLevel<=0) {
                navbarAnimate.classList.add('invisible');
                navbarAnimate.classList.remove('visible');
 
            } else {
                navbarAnimate.classList.add('visible');
                navbarAnimate.classList.remove('invisible');
            }
        }
    }


    //Fade-in Lateral do conteúdo
    let $target = $('.anime-left, .anime-right'),
    animationClass = 'anime-final'; 
    let offset: number = <number>$(window).height()*(3/4);

    function AnimateScroll(): any  {

        documentTop =<number>$(<Document>document).scrollTop();

        $target.each(function(){
            let itemTop = <number>$(this).offset()?.top;
            
            if(documentTop > (itemTop-offset)) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })       
    }


    $(document).scroll(debounce(function(){
        navBorderAnimate();
    },500, {leading: true}));

    $(document).scroll(debounce(function(){
        AnimateFadeout();
    },10, {leading: true}));

    $(document).scroll(throttle(function(){
        AnimateScroll();
    },300));

   

    window.addEventListener('load', function(){
        AnimateScroll();
        AnimateFadeout();

    })
}());