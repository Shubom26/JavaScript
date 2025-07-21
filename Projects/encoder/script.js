// secureEncoder.js

// === LAYER 1: Base64 ===
function base64Encode(str) {
    return Buffer.from(str, 'utf-8').toString('base64');
}
function base64Decode(str) {
    return Buffer.from(str, 'base64').toString('utf-8');
}

// === LAYER 2: Caesar Cipher (Shift +5) ===
function caesarEncrypt(str, shift = 5) {
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + shift)).join('');
}
function caesarDecrypt(str, shift = 5) {
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) - shift)).join('');
}

// === LAYER 3: Hex Encoding ===
function hexEncode(str) {
    return Buffer.from(str, 'utf-8').toString('hex');
}
function hexDecode(str) {
    return Buffer.from(str, 'hex').toString('utf-8');
}

// === LAYER 4: Reverse String ===
function reverseString(str) {
    return str.split('').reverse().join('');
}

// === LAYER 5: URI Encoding ===
function uriEncode(str) {
    return encodeURIComponent(str);
}
function uriDecode(str) {
    return decodeURIComponent(str);
}

// === Master Encoding/Decoding ===
function encode5Layers(input) {
    let result = input;
    result = base64Encode(result);
    result = caesarEncrypt(result);
    result = hexEncode(result);
    result = reverseString(result);
    result = uriEncode(result);
    return result;
}

function decode5Layers(input) {
    let result = input;
    result = uriDecode(result);
    result = reverseString(result);
    result = hexDecode(result);
    result = caesarDecrypt(result);
    result = base64Decode(result);
    return result;
}

// === SET PHRASE HERE ===
const phrase = "I burn in the snow, I drown in fire. My name you chant, but never hear. Decode me before Brahmos sleeps, or secrets turn to ash.";

// === ENCODE AT COMPILE TIME ===
const encoded = encode5Layers(phrase);
const decoded = decode5Layers(encoded);

// === OUTPUT ===
console.log("Original Phrase:\n", phrase);
console.log("\nEncoded (5-Layer):\n", encoded);
console.log("\nDecoded:\n", decoded);
