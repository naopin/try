let array = [1,2,3,4,5];
console.log(array)
array = double_elm(array)
console.log(array)

function double_elm(array) {
    let ret = Array(array.length)
    for (let i = 0;i < array.length; i++) {
        ret[i] = array[i] * 2;
    }
    return ret;
}