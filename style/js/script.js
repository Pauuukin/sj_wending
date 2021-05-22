
// Галерея
$('.card img').click(function() {
    let src = $(this).attr('src');
    $('.modalCustom img').attr('src',src);
    $('.modalCustom').fadeIn();    
});
$('.close').click(function() {
    $('.modalCustom').fadeOut();
});

