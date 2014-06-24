
$(document).ready(function () { 

       
 if($(this).find('.retirebackground').length)
    $('.retireactive').hide();

 if($(this).find('.resultsbackground').length)
    $('.resultsactive').hide();
            
            $("#retire").click(function () {
                $('.retirebackground_2').removeClass('retirebackground_2').addClass('retirebackground_1');
                $('.results_steps').show();
                $('.resultsbackground').show();
                $('.resultsactive').hide();
                $('.retirebackground').hide();
                $('.retireactive').show();
  
                    

            if($(this).find('.retireactive').length)
                $('.retire_steps').hide();
                        
            if($("#nav").find('.resultsbackground_1').length)
                        $('.resultsbackground_1').removeClass('resultsbackground_1').addClass('resultsbackground_2');
});


            $("#results").click(function () {
                $('.resultsbackground_2').removeClass('resultsbackground_2').addClass('resultsbackground_1');
                $('.retire_steps').show();
                $('.retirebackground').show();
                $('.retireactive').hide();
                $('.resultsbackground').hide(); 
                $('.resultsactive').show();
           

                  if($(this).find('.resultsactive').length)
                        $('.results_steps').hide();

                    if($("#nav").find('.retirebackground_1').length)
                        $('.retirebackground_1').removeClass('retirebackground_1').addClass('retirebackground_2');
                        



          
});
});  
