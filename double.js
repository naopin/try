let array = [1,2,3,4,5];
console.log(array)
array = double_elm3(array)
console.log(array)

function double_elm(array) {
    let ret = Array(array.length)
    for (let i = 0;i < array.length; i++) {
        ret[i] = array[i] * 2;
    }
    return ret;
}

function double_elm2(array) {
    for (let i of array) {
        i = i * 2;
        console.log(i);
    }
}

function double_elm3(array) {
    for (let i = 0;i < array.length; i++) {
        array[i] = array[i] * 2;
    }
    return array;
}
