
// Галерея
$('.card img').click(function() {
    let src = $(this).attr('src');
    $('.modal img').attr('src',src);
    $('.modal').fadeIn();    
});
$('.close').click(function() {
    $('.modal').fadeOut();
});

