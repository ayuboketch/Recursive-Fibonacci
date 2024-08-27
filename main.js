function fibs(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        if (i < 2) {
            array.push(i);
        } else {
            array.push(array[i - 1] + array[i - 2]);
        }
        console.log("Normal Fibonacci");
    }
    return array;
}
console.log(fibs(8));

function fibsRecursive(number) {
    if (number === 0) return [0];
    if (number === 1) return [0, 1];

    let array = fibsRecursive(number - 1);

    array.push(array[array.length - 1] + array[array.length - 2]);
    console.log("This was printed recursively");
    return array;
}

console.log(fibsRecursive(8));
