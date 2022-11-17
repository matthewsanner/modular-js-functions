//sum an array
function sumArray(ar) {
    return ar.reduce((a, b) => a + b);
}

//order ascending numerically
function sortAsc(ar) {
    return ar.sort((a, b) => a - b);
}

//order descending numerically
function sortDes(ar) {
    return ar.sort((a, b) => b - a);
}

//replaces character in string
function replaceAt(string, index, char) {
    let array = string.split('');
    array[index] = char;
    return array.join('');
}