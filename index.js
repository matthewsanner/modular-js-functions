//sum an array
function sumArray(ar) {
    return ar.reduce((a, b) => a + b);
}

//order ascending numerically
function sortAsc(ar) {
    ar.sort((a, b) => a - b);
}

//order descending numerically
function sortDes(ar) {
    ar.sort((a, b) => b - a);
}