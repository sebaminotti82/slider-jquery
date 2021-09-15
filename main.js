$(document).ready(function(){
/*
Mi rendo dinamico ed inserisco le foto direttamente da j-Query con il metodo append
e le inserisco nel nio div (.centro) 
*/
$('.centro').append(
['<img src="img/foto1.jpeg" alt="">'],
['<img src="img/foto2.jpeg" alt="">'],
['<img src="img/foto3.jpeg" alt="">'],
['<img src="img/foto4.jpeg" alt="">'],
['<img src="img/foto5.jpeg" alt="">'],
['<img src="img/foto6.jpg" alt="">'],
['<img src="img/foto7.jpg" alt="">'],
['<img src="img/foto8.jpeg" alt="">'],
['<img src="img/foto9.jpeg" alt="">'],
['<img src="img/foto10.jpeg" alt="">'],
['<img src="img/foto11.jpg" alt="">'],
)
/* 
istanzio una variabile  che sarà il nostro contenuto del div centro (cioe le nostre fotografie del carosello)
dopo di che do' alla prima foto classe first e active

ed all'ultima classe last
*/
var foto = $('.centro > *')
foto.first().addClass(['active','first'])
foto.last().addClass('last')


//FINE SEZIONE DEDICATA ALLE FOTO INSERITE DA JQUERY DIRETTAMENTE 

/*
mi rendo dinamico anche per i pallini del nav e tramite ciclo for li inserisco dicendo 
quante sono le foto inseriscimi i pallini
*/
for(var i = 0; i  < foto.length; i++){
$('.box_circle').append('<i class="fas fa-circle"></i>')
var circleContainer =$('.box_circle *')
}
//do classe active first al primo pallino e poi last all'ultimo
circleContainer.first().addClass(['active','first'])
circleContainer.last().addClass('last')
$('.indietro >i').click(function(){

    indietro()
    
})

$('.avanti >i').click(function(){

avanti();

    
})



var boxCircle = $('.box_circle')
boxCircle.children().click( function () {
    
    if($('.box_circle i').hasClass('active')){
          $('.box_circle i').removeClass('active')
    }
    var box =$('.box.active')
  var imgActive = $('img.active');
    $(this).addClass(['active']);
   
    var i = $(this).index();
    
    if(imgActive.hasClass('active')){

        imgActive.removeClass('active')
    } 
    if(box.hasClass('active')){

        box.removeClass('active')
    } 
    
    $('img')[i].classList += ' active';
    $('.box')[i].classList += ' active';

});
  

})













//FUNZIONE PER ANDARE AVANTI NELLE FOTO
function avanti(){
    var imgActive = $('img.active')
    var activeCircle =$('i.active')
    var box =$('.box.active')
    
    imgActive.removeClass('active')
    activeCircle.removeClass('active')
    box.removeClass('active')
    if(imgActive.hasClass('last')){
        $('img.first').addClass('active')
         $('i.first').addClass('active')
         $('.box.first').addClass('active')
 
    } else {

        imgActive.next('img').addClass('active')
         activeCircle.next('i').addClass('active')
         box.next('.box').addClass('active')
    }
}





//FUNZIONE PER ANDARE INDIETRO NELLE FOTO 
function indietro(){
    var box =$('.box.active')
    var imgActive = $('img.active')
    var activeCircle =$('i.active')

    imgActive.removeClass('active')
    activeCircle.removeClass('active')
    box.removeClass('active')

    if(imgActive.hasClass('first')){

        $('img.last').addClass('active')
        $('i.last').addClass('active')
        $('.box.last').addClass('active')

    } 
    
    else {

        imgActive.prev('img').addClass('active')
        activeCircle.prev('i').addClass('active')
        box.prev('.box').addClass('active')
    }

}




