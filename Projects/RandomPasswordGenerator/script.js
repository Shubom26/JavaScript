function toGeneratePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const lowercaseChars=`abcdefghijklmnopqrstuvwxyz`;
    const upperCaseChars=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberChars=`0123456789`;
    const symbolChars=`~!@#$%^&*()_+-=[]{};:'",<.>/?|`;

    let allowedChar=``;
    let password=``;

    allowedChar +=includeLowerCase? lowercaseChars:``;
    allowedChar +=includeUpperCase? upperCaseChars:``;
    allowedChar +=includeNumbers? numberChars:``;
    allowedChar +=includeSymbols? symbolChars:``;

    if(length==0){
        return `(password lenght must be atleast 1)`;
    }
    if(allowedChar.length ===0){
        return `(Atleast one set of characthers need to be selected)`;
    }

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChar.length);
        password +=allowedChar[randomIndex];
    }

    return password;
}

const passwordLenght=124;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;

const password = toGeneratePassword(passwordLenght,
                                    includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
console.log(`Generated Password: ${password}`)