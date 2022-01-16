/*declaring variables*/
var lottoPicks = [];
var x = 0;
var lotto;
/*this is where the user enters a number and it gives the user an output*/
function myFunction(){
    lotto = document.getElementById("textbox").value
        if (lotto > 0){
                for (i = 0; i < lotto; i++){
                    x = Math.ceil(Math.random() * 99);
                        if (x > x){
                            lottoPicks[i] = x;
                        }else{
                                while (x < x){
                                    x = Math.ceil(Math.random() * 99);
                                }
                            lottoPicks[i] = x;
                        }
                }
                /*this is where the out put gets put on the the page itself*/
                for(i = 0; i <lotto; i++){
                        if (i > 0) document.getElementById("prompt").innerText = document.getElementById("prompt").innerText + " - " + lottoPicks[i];
                        else document.getElementById("prompt").innerText = lottoPicks[i];
                }
                /*this is the comment*/
            document.getElementById("comment").innerText = "Maybe you could use these numbers to win the powerball!!!";
        }
        /*if user enters anything other than a number this promt will come up*/
        else alert("Please introduce a valid number");
}
/*buttons*/
function eraser(){
    document.getElementById("textbox").value = ""
    document.getElementById("prompt").innerText = ""
    document.getElementById("comment").innerText = ""
}
