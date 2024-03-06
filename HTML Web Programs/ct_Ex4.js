// for Ex2 to Ex6, change the Name of the following function properly

function isEquation() {

    //precondition: d,a,b,c belong to all real numbers
    //postcondition: output how many roots the coefficient of a quadratic equation has
  
    
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    var c=document.getElementById("number3").value;
    var d = ((parseInt(b)*parseInt(b))-(4*parseInt(a)*parseInt(c)));
    
    if (d > 0){
         d = "It has 2 distinct roots";
    }

    else if (d < 0){
        d = "It has no real roots";
    }

    else{
        d = "Its roots are identical";
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
  
    document.getElementById("output").innerHTML= d; 
  
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