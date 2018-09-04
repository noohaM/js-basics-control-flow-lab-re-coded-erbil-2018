// Write your code in this file!


function scuberGreetingForFeet(amo){
  if( amo <= 400){
    return "This one is on me!"
     }else if(amo >= 2000 && amo < 2500){
   	return "I will gladly take your thirty bucks."
   }else{
   	return 'No can do.'
   }
 }  
   function ternaryCheckCity(city){
    if(city == "NYC"){
      return "Ok, sounds good."
    }
    else{
      return "No go."
    }
   }
   function switchOnCharmFromTip(tip){
      switch(tip){
        case"generous":return "Thank you so much.";
        case"not as generous":return "Thank you.";
        default: return "Bye."
      }
   }
   
