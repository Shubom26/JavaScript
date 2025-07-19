const myText = document.getElementById(`myText`);
const mySubmit = document.getElementById(`mySubmit`);
const resultElement = document.getElementById(`resultElement`)

let age;

mySubmit.onclick = function () {

    age=myText.value;
    age=Number(age);

    if (age >= 100) {
        // console.log(`You are to old to Drive`)
        resultElement.textContent=`You are to old to Drive`;
    }
    else if (age <= 0) {
        // console.log(`Your age cant be 0 or less than 0`)
        resultElement.textContent=`Your age cant be 0 or less than 0`;
    }
    else if (age == 17) {
        // console.log(`Wait one more year`);
        resultElement.textContent=`Wait one more year`;
    }
    else if (age >= 18) {
        // console.log(`you are old enough to Drive`);
        resultElement.textContent=`you are old enough to Drive`;
    }
    else {
        // console.log(`You must be 18 to Drive`);
        resultElement.textContent=`You must be 18 to Drive`;
    }

}



