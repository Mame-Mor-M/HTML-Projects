// for Ex2 to Ex6, change the Name of the following function properly

function largestOf3() {

    //precondition: a,b,c belong to all real numbers 
    //postcondition: Largest number of the three is outputted
  
    
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    var c=document.getElementById("number3").value;
    var x = x
    
    if (a> b && a > c){
         x= a;
    }

    else if (b > a &&  b> c){
        x = b;
    }

    else{
        x=c;
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
  
    document.getElementById("output").innerHTML="Largest: "+ x; 
  
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