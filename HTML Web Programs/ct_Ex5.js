// for Ex2 to Ex6, change the Name of the following function properly

function divisibleBy6() {

    //precondition: n belongs to all real numbers
    //postcondition: Output if n is divisible by 6 and if it is equal to zero
  
    
    var n=document.getElementById("number1").value;
    var t = t;
    if (n % 2 == 0 && n % 3 == 0){
         t = "Divisible by 6" ;
         if(n==0) {
             t = "Divisible by 6" + "<br>" + "Program Ended"
             document.getElementById("butn").disabled = true;
         }
    }

    else{
        t = "Not divisible by 6";
    }
    
      
    /* in Ex2 to Ex6A, you need to rename "perimeter" to make it appropriate
       for those problems, you may also need to rename p to a better 
       variable that you might have in your formulas above */ 
  
    /* in Ex6A mappingA() do sth like
    var a = ...;
    if(a >= 90)
      answer = "A+";
    else if (a>=80)
      answer = "A";
    else if ....
    */
  
    document.getElementById("output").innerHTML= t;
  
  }

  
  
  /* in Ex6B for mappingB() , 
  function mappingB(){
  
    uncomment and complete this block
    var a = ...
    switch (true){
      case (a>=90): 
          answer="A+";
          break;
      case (a>=80): 
          answer="A";
          break;
          // you need to add more cases for other letter grades
      default:
          answer="F";
    }
    
  }*/   