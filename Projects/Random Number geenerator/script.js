
    document.getElementById('btn1').onclick = function() {
        const userNum = parseInt(document.getElementById('myNum').value);
        const randomNum = Math.floor(Math.random() * 100) + 1; // 1 to 100
        const displayrand = document.getElementById('displayrand');
        const greeting = document.querySelector('.greet h2');
        displayrand.value=randomNum;

        

        if (isNaN(userNum)) {
            greeting.textContent = "Please enter a valid number!";
        } else if (userNum === randomNum) {
            greeting.textContent = "🎉 Congratulations! You guessed it right!";
        } else {
            greeting.textContent = `Hard luck try again next time your guess was ${userNum} and the number to win was ${randomNum}`;
        }
    };

