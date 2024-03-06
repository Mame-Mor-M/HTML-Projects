// for Ex2 to Ex6, change the Name of the following function properly

function volumn() {

    //precondition: a,b,c belong to all real numbers greater than or equal to 1
    //postcondition: volume of ellipsoid is calculated and outputted
  
    
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    var c=document.getElementById("number3").value;
    
    
    
    /* in Ex2 to Ex6, you need to replace the following line 
        with some other formulas */
    var v = (4/3)*Math.PI*(parseInt(a)*parseInt(b)*parseInt(c));
    v = v.toFixed(2);
    
      
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
  
    document.getElementById("output").innerHTML="Volume: "+ v; 
  
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