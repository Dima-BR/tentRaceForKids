let imageQ1 = ['images/qustions/4.png','images/qustions/3.png','images/qustions/2.png','images/qustions/1.png'];

let imageQ2 = ['images/qustions/8.png','images/qustions/7.png','images/qustions/6.png','images/qustions/5.png'];

let imageQ3 = ['images/qustions/12.png','images/qustions/11.png','images/qustions/10.png','images/qustions/9.png'];

let imageQ4 = ['images/qustions/16.png','images/qustions/15.png','images/qustions/14.png','images/qustions/13.png'];



function dice2(){
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    //  dice show one
    if(randomNumber2 === 1){
        if( imageQ1.length === 4){
            document.getElementById("changeDice").src ="/images/dice/dice1-blue.png";
            document.getElementById("q1-1").focus();
            imageQ1.pop();
            for (let index = 0; index < imageQ1.length; index++) {
                console.log(imageQ1[index]);
            }
            document.querySelector('#q1-1').addEventListener('keypress', function (e) {
                let numValue = document.getElementById("q1-1").value;
                if (e.key === 'Enter') {
                    localStorage.setItem("numValue", numValue);

                    console.log("numValue inside If", numValue);
                    if(numValue == 91){
                        document.getElementById("changeImageQustion").src ="/images/qustions/blueM.png"; 
                    }else{
                        document.getElementById("changeImageQustion").src ="/images/qustions/redM.png";
                    }
                }
            });                    
        }else if( imageQ1.length === 3){
            document.getElementById("changeDice").src ="/images/dice/dice1-blue.png";
            document.getElementById("q1-2").focus();
            imageQ1.pop();
            for (let index = 0; index < imageQ1.length; index++) {
                console.log(imageQ1[index]);
            }
            document.querySelector('#q1-2').addEventListener('keypress', function (e) {
                let numValue = document.getElementById("q1-2").value;
                if (e.key === 'Enter') {
                    localStorage.setItem("numValue", numValue);

                    console.log("numValue inside If", numValue);
                    if(numValue == 43){
                        document.getElementById("changeImageQustion2").src ="/images/qustions/blueM.png"; 
                    }else{
                        document.getElementById("changeImageQustion2").src ="/images/qustions/redM.png";
                    }
                }
            });         
        }else if( imageQ1.length === 2){
            document.getElementById("changeDice").src ="/images/dice/dice1-blue.png";
            document.getElementById("q1-3").focus();
            imageQ1.pop();
            for (let index = 0; index < imageQ1.length; index++) {
                console.log(imageQ1[index]);
            }
            document.querySelector('#q1-3').addEventListener('keypress', function (e) {
                let numValue = document.getElementById("q1-3").value;
                if (e.key === 'Enter') {
                    localStorage.setItem("numValue", numValue);

                    console.log("numValue inside If", numValue);
                    if(numValue == 73){
                        document.getElementById("changeImageQustion3").src ="/images/qustions/blueM.png"; 
                    }else{
                        document.getElementById("changeImageQustion3").src ="/images/qustions/redM.png";
                    }
                }
            });         
        }else if( imageQ1.length === 1){
            document.getElementById("changeDice").src ="/images/dice/dice1-blue.png";
            document.getElementById("q1-4").focus();
            imageQ1.pop();
            for (let index = 0; index < imageQ1.length; index++) {
                console.log(imageQ1[index]);
            }
            document.querySelector('#q1-4').addEventListener('keypress', function (e) {
                let numValue = document.getElementById("q1-4").value;
                if (e.key === 'Enter') {
                    localStorage.setItem("numValue", numValue);

                    console.log("numValue inside If", numValue);
                    if(numValue == 95){
                        document.getElementById("changeImageQustion4").src ="/images/qustions/blueM.png"; 
                    }else{
                        document.getElementById("changeImageQustion4").src ="/images/qustions/redM.png";
                    }
                }
            });         
        }
    }

// dice show three
if(randomNumber2 === 3){
    if( imageQ2.length === 4){
        document.getElementById("changeDiceRow2").src ="/images/dice/dice3-blue.png";
        document.getElementById("q2-1").focus();
        imageQ2.pop();
        for (let index = 0; index < imageQ2.length; index++) {
            console.log(imageQ2[index]);
        }
        document.querySelector('#q2-1').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q2-1").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 89){
                    document.getElementById("changeImageQustion5").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion5").src ="/images/qustions/redM.png";
                }
            }
        });                    
    }else if( imageQ2.length === 3){
        document.getElementById("changeDiceRow2").src ="/images/dice/dice3-blue.png";
        document.getElementById("q2-2").focus();
        imageQ2.pop();
        for (let index = 0; index < imageQ2.length; index++) {
            console.log(imageQ2[index]);
        }
        document.querySelector('#q2-2').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q2-2").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 88){
                    document.getElementById("changeImageQustion6").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion6").src ="/images/qustions/redM.png";
                }
            }
        });         
    }else if( imageQ2.length === 2){
        document.getElementById("changeDiceRow2").src ="/images/dice/dice3-blue.png";
        document.getElementById("q2-3").focus();
        imageQ2.pop();
        for (let index = 0; index < imageQ2.length; index++) {
            console.log(imageQ2[index]);
        }
        document.querySelector('#q2-3').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q2-3").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 99){
                    document.getElementById("changeImageQustion7").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion7").src ="/images/qustions/redM.png";
                }
            }
        });         
    }else if( imageQ2.length === 1){
        document.getElementById("changeDiceRow2").src ="/images/dice/dice3-blue.png";
        document.getElementById("q2-4").focus();
        imageQ2.pop();
        for (let index = 0; index < imageQ2.length; index++) {
            console.log(imageQ2[index]);
        }
        document.querySelector('#q2-4').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q2-4").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 79){
                    document.getElementById("changeImageQustion8").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion8").src ="/images/qustions/redM.png";
                }
            }
        });         
    }
}

// dice show 4
if(randomNumber2 === 4){
    if( imageQ3.length === 4){
        document.getElementById("changeDiceRow3").src ="/images/dice/dice4-blue.png";
        document.getElementById("q3-1").focus();
        imageQ3.pop();
        for (let index = 0; index < imageQ3.length; index++) {
            console.log(imageQ3[index]);
        }
        document.querySelector('#q3-1').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q3-1").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 52){
                    document.getElementById("changeImageQustion9").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion9").src ="/images/qustions/redM.png";
                }
            }
        });                    
    }else if( imageQ3.length === 3){
        document.getElementById("changeDiceRow3").src ="/images/dice/dice4-blue.png";
        document.getElementById("q3-2").focus();
        imageQ3.pop();
        for (let index = 0; index < imageQ3.length; index++) {
            console.log(imageQ3[index]);
        }
        document.querySelector('#q3-2').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q3-2").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 82){
                    document.getElementById("changeImageQustion10").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion10").src ="/images/qustions/redM.png";
                }
            }
        });         
    }else if( imageQ3.length === 2){
        document.getElementById("changeDiceRow3").src ="/images/dice/dice4-blue.png";
        document.getElementById("q3-3").focus();
        imageQ3.pop();
        for (let index = 0; index < imageQ3.length; index++) {
            console.log(imageQ3[index]);
        }
        document.querySelector('#q3-3').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q3-3").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 88){
                    document.getElementById("changeImageQustion11").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion11").src ="/images/qustions/redM.png";
                }
            }
        });         
    }else if( imageQ3.length === 1){
        document.getElementById("changeDiceRow3").src ="/images/dice/dice4-blue.png";
        document.getElementById("q3-4").focus();
        imageQ3.pop();
        for (let index = 0; index < imageQ3.length; index++) {
            console.log(imageQ3[index]);
        }
        document.querySelector('#q3-4').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q3-4").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 34){
                    document.getElementById("changeImageQustion12").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion12").src ="/images/qustions/redM.png";
                }
            }
        });         
    }
}

// dice show 6
if(randomNumber2 === 6){
    if( imageQ4.length === 4){
        document.getElementById("changeDiceRow4").src ="/images/dice/dice6-blue.png";
        document.getElementById("q4-1").focus();
        imageQ4.pop();
        for (let index = 0; index < imageQ4.length; index++) {
            console.log(imageQ4[index]);
        }
        document.querySelector('#q4-1').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q4-1").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 68){
                    document.getElementById("changeImageQustion13").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion13").src ="/images/qustions/redM.png";
                }
            }
        });                    
    }else if( imageQ4.length === 3){
        document.getElementById("changeDiceRow4").src ="/images/dice/dice6-blue.png";
        document.getElementById("q4-2").focus();
        imageQ4.pop();
        for (let index = 0; index < imageQ4.length; index++) {
            console.log(imageQ4[index]);
        }
        document.querySelector('#q4-2').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q4-2").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 84){
                    document.getElementById("changeImageQustion14").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion14").src ="/images/qustions/redM.png";
                }
            }
        });         
    }else if( imageQ4.length === 2){
        document.getElementById("changeDiceRow4").src ="/images/dice/dice6-blue.png";
        document.getElementById("q4-3").focus();
        imageQ4.pop();
        for (let index = 0; index < imageQ4.length; index++) {
            console.log(imageQ4[index]);
        }
        document.querySelector('#q4-3').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q4-3").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 75){
                    document.getElementById("changeImageQustion15").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion15").src ="/images/qustions/redM.png";
                }
            }
        });         
    }else if( imageQ4.length === 1){
        document.getElementById("changeDiceRow4").src ="/images/dice/dice6-blue.png";
        document.getElementById("q4-4").focus();
        imageQ4.pop();
        for (let index = 0; index < imageQ4.length; index++) {
            console.log(imageQ4[index]);
        }
        document.querySelector('#q4-4').addEventListener('keypress', function (e) {
            let numValue = document.getElementById("q4-4").value;
            if (e.key === 'Enter') {
                localStorage.setItem("numValue", numValue);

                console.log("numValue inside If", numValue);
                if(numValue == 25){
                    document.getElementById("changeImageQustion16").src ="/images/qustions/blueM.png"; 
                }else{
                    document.getElementById("changeImageQustion16").src ="/images/qustions/redM.png";
                }
            }
        });         
    }
}

}

function getName() {
    return localStorage.getItem("answer");
  }
function myFunction() {
    // Gets input value
    var name = document.getElementById("q1-1").value;
    // Saves data to retrieve later
    localStorage.setItem("userName", name);
      if(name == 91){
             document.getElementById("changeImageQustion").src ="/images/qustions/blueM.png";  
      }else{
         document.getElementById("changeImageQustion").src ="/images/qustions/redM.png";
      }
}



