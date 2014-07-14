$(document).ready(function () {
    if($(this).find('.retireactive').filter(":hidden"))
        $('#space').css('margin-right', 365);

    if($(this).find('.more').filter(":hidden"))
        $('#space').css('margin-right', 365);
    
    if($(this).find('.retirebackground_1').length)
        $('#space').css('margin-right', 250);

    if($(this).find('.resultsbackground_1').length)
        $('#space').css('margin-right', 304);

    if($(this).find('.action_1').length)
        $('#space').css('margin-right', 268);


    //active
     if($(this).find('.action_1').length)
    $('#action').width(240);

    if($(this).find('.retirebackground_1').length)
    $('#retire').width(240);
    
    if($(this).find('.resultsbackground_1').length)
    $('#results').width(184);
    
    $(".main-item").click(function() {
        $(".main-item").width(125);
    });
    //finish
    if ($(this).find('.action').length)
        $('.actionactive').hide();
    if ($(this).find('.action').length)
        $('.atext').hide();

    //more
    if ($(this).find('.more').length)
        $('.moreactive').hide();
    if ($(this).find('.more').length)
        $('.mtext').hide();
    
    //retire
    if ($(this).find('.retirebackground').length)
        $('.retireactive').hide();
    if ($(this).find('.retirebackground').length)
        $('.retire').hide();
    
    //results
    if ($(this).find('.resultsbackground').length)
        $('.resultsactive').hide();
    if ($(this).find('.resultsbackground').length)
        $('.results').hide();

    $("#retire").click(function() {
        //retire
        $('.retire').show();
        $('.retirebackground_2').removeClass('retirebackground_2').addClass('retirebackground_1').fadeIn();
        $('.retirebackground').hide();
        $('.retireactive').fadeIn('fast');
        //results
        $('.results').hide();
        $('.results_steps').fadeIn();
        $('.resultsbackground').fadeIn();
        $('.resultsactive').hide();
        //action
        $('.actionactive').hide();
        $('.atext').hide();
        $('.action').show();
        //more
        $('.mtext').hide();
        $('.more').show();
        $('.moreactive').hide();
        //space
        $('#space').css('margin-right', 250);
        //other

    
        if ($(this).find('.retireactive').length)
            $(this).width(240);

        //results
        if ($("#nav").find('.resultsbackground_1').length)
            $('.resultsbackground_1').removeClass('resultsbackground_1').addClass('resultsbackground_2').fadeIn();
        //action
         if ($("#nav").find('.action_1').length)
            $('.action_1').removeClass('action_1').addClass('action_2').fadeIn();
        //more
        if ($("#more").find('.more_1').length)
            $('.more_1').removeClass('more_1').addClass('more_2').fadeIn();
    });


    $("#results").click(function() {
       //retire
       $('.retire').hide();
       $('.retire_steps').fadeIn();
        $('.retirebackground').fadeIn();
        $('.retireactive').hide();
       //results
        $('.results').show();
        $('.resultsbackground_2').removeClass('resultsbackground_2').addClass('resultsbackground_1').fadeIn();
        $('.resultsbackground').hide();
        $('.resultsactive').fadeIn('fast');
       //action
        $('.actionactive').hide();
        $('.atext').hide();
        $('.action').show();
        //more
        $('.mtext').hide();
        $('.more').show();
        $('.moreactive').hide();
       //space
        $('#space').css('margin-right', 304);
       //other

        if ($(this).find('.resultsactive').length)
            $(this).width(184);
        //retire
        if ($("#nav").find('.retirebackground_1').length)
            $('.retirebackground_1').removeClass('retirebackground_1').addClass('retirebackground_2').fadeIn();

        //action
         if ($("#nav").find('.action_1').length)
            $('.action_1').removeClass('action_1').addClass('action_2').fadeIn();

        //more
         if ($("#more").find('.more_1').length)
            $('.more_1').removeClass('more_1').addClass('more_2').fadeIn();



    });
     $("#action").click(function() {
        //retire
        $('.retire').hide();
       $('.retire_steps').fadeIn();
        $('.retirebackground').fadeIn();
        $('.retireactive').hide();
        //results
        $('.resultsactive').hide();
        $('.resultsbackground').fadeIn();
        $('.results').hide();
        //action
        $('.action_2').removeClass('action_2').addClass('action_1').fadeIn();
        $('.atext').show();
        $('.action').hide();
        $('.actionactive').fadeIn('fast');
        //more
        $('.mtext').hide();
        $('.more').show();
        $('.moreactive').hide();
        //space
        $('#space').css('margin-right', 268);
        //other
    
        if ($(this).find('.actionactive').length)
            $(this).width(240);


         //retire
        if ($("#nav").find('.retirebackground_1').length)
            $('.retirebackground_1').removeClass('retirebackground_1').addClass('retirebackground_2').fadeIn();
        //results
        if ($("#nav").find('.resultsbackground_1').length)
            $('.resultsbackground_1').removeClass('resultsbackground_1').addClass('resultsbackground_2').fadeIn();
        //more
         if ($("#more").find('.more_1').length)
            $('.more_1').removeClass('more_1').addClass('more_2').fadeIn();
    });

        

    $("#more").click(function() {
        //retire
        $('.retire').hide();
       $('.retire_steps').fadeIn();
        $('.retirebackground').fadeIn();
        $('.retireactive').hide();
        //results
        $('.resultsactive').hide();
        $('.resultsbackground').fadeIn();
        $('.results').hide();
        //action
        $('.actionactive').hide();
        $('.atext').hide();
        $('.action').show();
        //more
        $('.mtext').show();
        $('.more').hide();
        $('.moreactive').fadeIn('fast');
        $('.more_2').removeClass('more_2').addClass('more_1').fadeIn();

        
        //other
        $(".main-item").width(125);
        $('#space').css('margin-right', 365);


         //retire
        if ($("#nav").find('.retirebackground_1').length)
            $('.retirebackground_1').removeClass('retirebackground_1').addClass('retirebackground_2').fadeIn();
        //results
        if ($("#nav").find('.resultsbackground_1').length)
            $('.resultsbackground_1').removeClass('resultsbackground_1').addClass('resultsbackground_2').fadeIn();
        //action
          if ($("#nav").find('.action_1').length)
            $('.action_1').removeClass('action_1').addClass('action_2').fadeIn();
    });
});