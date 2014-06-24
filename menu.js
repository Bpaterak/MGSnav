
$(document).ready(function () {        
 if($(this).find('.retirebackground').length)
    $('.retireactive').hide();
   

            
            $("#retire").click(function () {
               //$("#button2").css({"left": "602px"});
                $('.results_steps').show();
                
                $('.retirebackground').hide();
                //$('#button').removeClass('retirebackground');
                $('.retireactive').show();

                //$("#button").toggleClass(function(){
                    //$("#button").css({"left": "330px"});
                   // $("#retire").css("overflow");
                    
                            //if($(this).is(".retirebackground")){return 'retireactive';}
                                //else
                                   // if($(this).is(".retirebackground retireactive")){return "retiresultsbackground";}
                                        
                   

                   // });
                //$('.retireactive').animate({"left":""}, 'fast');   
                    $('.retire_steps').show();

                  if($(this).find('.retireactive').length)
                        $('.retire_steps').hide();
                        
            
});
});


            $("#results").click(function () {
               // $("#button").css({"left": "330px"});
               $('.retirebackground').show();
               $('.retireactive').hide();
              $('.retire_steps').show();
              $('.retireactive').removeClass('retireactive');
              $("#button2").addClass('resultsactive');        

                //$("#button2").toggleClass(function(){
                    //$("#button2").css({"left": "602px"});
                   // $("#results").css("overflow");
                           // if($(this).is(".resultsbackground")){return "resultsactive";} 
                               // else
                                    //if($(this).is(".resultsbackground resultsactive")){return "resultsbackground";}
                                        
                             
                   // });

                //$('.resultsactive').animate({"left":""}, 'fast');
               // $('.resultsactive').css("overflow","hidden");
                    $('.results_steps').show();

                  if($(this).find('.resultsactive').length)
                        $('.results_steps').hide();

                  


          
});
  
