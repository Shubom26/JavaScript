// const names = ["Ram", "Shyam", "Jodhu", "Modhu", "Chodu"];

// const person = {
//     "name": "Ram",
//     "age": "21",
//     "isEmployed": true,
//     "hobbies": ["sleeping", "eating", "watching reels", "disapointing parents", "sleeping"]
// };

// const people = [
//     {
//         "name": "Ram",
//         "age": "21",
//         "isEmployed": true
//     },
//     {
//         "name": "Shyam",
//         "age": "25",
//         "isEmployed": true
//     },
//     {
//         "name": "Jodhu",
//         "age": "29",
//         "isEmployed": true
//     }
// ];

// const jsonstring = JSON.stringify(people);

// console.log(names)
// console.log(jsonstring)

// const JSONnames = `["Ram", "Shyam", "Jodhu", "Modhu", "Chodu"]`;

// const JSONperson = `{
//     "name": "Ram",
//     "age": "21",
//     "isEmployed": true,
//     "hobbies": ["sleeping", "eating", "watching reels", "disapointing parents", "sleeping"]
// }`;

// const JSONpeople = `[
//     {
//         "name": "Ram",
//         "age": "21",
//         "isEmployed": true
//     },
//     {
//         "name": "Shyam",
//         "age": "25",
//         "isEmployed": true
//     },
//     {
//         "name": "Jodhu",
//         "age": "29",
//         "isEmployed": true
//     }
// ]`;

// const jsonParse = JSON.parse(JSONpeople)

// console.log(JSONnames);
// console.log(jsonParse);


fetch("/JSON/names.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));