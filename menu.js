$(document).ready(function () {
    if($(this).find('.retirebackground_1').length)
    $('#retire').width(250);
    
    if($(this).find('.resultsbackground_1').length)
    $('#results').width(220);
    
    $(".main-item").click(function() {
        $(".main-item").width(168);
    });

    if ($(this).find('.retirebackground').length)
        $('.retireactive').hide();

    if ($(this).find('.resultsbackground').length)
        $('.resultsactive').hide();

         if ($(this).find('.retirebackground').length)
        $('.retire').hide();

    if ($(this).find('.resultsbackground').length)
        $('.results').hide();

    $("#retire").click(function() {

        $('.results').hide();
        $('.retire').show();
        $('.retirebackground_2').removeClass('retirebackground_2').addClass('retirebackground_1').fadeIn();
        $('.results_steps').fadeIn();
        $('.resultsbackground').fadeIn();
        $('.resultsactive').hide();
        $('.retirebackground').hide();
        $('.retireactive').fadeIn('fast');

    
        if ($(this).find('.retireactive').length)
            $(this).width(250);


        if ($("#nav").find('.resultsbackground_1').length)
            $('.resultsbackground_1').removeClass('resultsbackground_1').addClass('resultsbackground_2').fadeIn();
    });


    $("#results").click(function() {
        $('.retire').hide();
        $('.results').show();
        $('.resultsbackground_2').removeClass('resultsbackground_2').addClass('resultsbackground_1').fadeIn();
        $('.retire_steps').fadeIn();
        $('.retirebackground').fadeIn();
        $('.retireactive').hide();
        $('.resultsbackground').hide();
        $('.resultsactive').fadeIn('fast');

        if ($(this).find('.resultsactive').length)
            $(this).width(220);

        if ($("#nav").find('.retirebackground_1').length)
            $('.retirebackground_1').removeClass('retirebackground_1').addClass('retirebackground_2').fadeIn();





    });
});