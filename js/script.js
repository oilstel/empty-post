$("#post-empty").submit(function(event){
    event.preventDefault(); 
    $('textarea').animate({color:'white'},1500, function() {
        $('textarea').val('').css('color','black');
    });
});

$(".power").click(function() {
    $('textarea').val('');

    var xSeconds = 200;

    $('html').addClass('universe');
    setTimeout(function() {
        $('html').removeClass('universe');
     }, xSeconds);
});

