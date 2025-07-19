const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum- minNum + 1)+minNum);
console.log(answer)

let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess a number between ${minNum} & ${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`Enter a valid Number`);
    }
    else if(guess<minNum || guess>maxNum){
        window.alert(`Enter a vaild Number`);
    }
    else{
        attempt++;
        if(guess < answer){
            window.alert(`Too low Try Again`);
        }
        else if(guess > answer){
            window.alert(`Too high Try Again`);
        }
        else{
            window.alert(`Congratulations you won Your guess was ${guess} & the result was ${answer}. It took you ${attempt} attempts to guess it correct`);
            running=false;
        }
    }
}
