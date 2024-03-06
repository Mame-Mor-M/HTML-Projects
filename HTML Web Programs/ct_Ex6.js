// for Ex2 to Ex6, change the Name of the following function properly

    
      
    //precondition: a belongs to all real numbers between 0 and 100
    //postcondition: Output the letter grade based on the inputted number
  
    function mappingA() {
        var a = document.getElementById("number1").value;
        if(a >= 90){
            answer = "A+";
        }
          
        else if (a>=80){
            answer = "A";
        }
        else if (a>=75){
            answer = "B+";
        }
        else if (a>=70){
            answer = "B";
        }
        else if (a>=65){
            answer = "C+";
        }
        else if (a>=60){
            answer = "C";
        }
        else if (a>=55){
            answer = "D+";
        }
        else if (a>=50){
            answer = "D";
        }
        else{
            answer = "F";
        }
        document.getElementById("output").innerHTML= answer;
    }
    
  

  
  
  function mappingB(){
  
 
    var a = document.getElementById("number1").value;
    switch (true){
        case (a>=90): 
          answer="A+";
          break;
        case (a>=80): 
          answer="A";
          break;
        case (a>=75): 
          answer="B+";
          break;
        case (a>=70): 
          answer="B";
          break;
        case (a>=65): 
          answer="C+";
          break;
        case (a>=60): 
          answer="C";
          break;
        case (a>=55): 
          answer="D+";
          break;
        case (a>=50): 
          answer="D";
          break;
          
    
          // you need to add more cases for other letter grades
      default:
          answer="F";
    }
    document.getElementById("output2").innerHTML= answer;
    
  }