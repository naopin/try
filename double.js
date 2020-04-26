//           0 1 2 3 4 <-index(要素番号)
let array = [1,2,3,4,5];

console.log(array)
console.log("-----")

console.log(double_elm3_2(array))
console.log("-----")

array = double_elm3_3(array)
console.log("-----")

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

function double_elm3_2(array) {
    // for (let i = 0;i < array.length; i++) {
        // 最初に見せてもらったコードのfor文展開するとこんな感じ(ifは省略)
        // vscodeとかで開くと40行目以降が暗くなっててデッドコードになっていることが分かる
        return array[0] * 2;
        return array[1] * 2;
        return array[2] * 2;
        return array[3] * 2;
        return array[4] * 2;
    // 
}

function double_elm3_3(array) {
    for (let i = 0;i < array.length; i++) {
        console.log(array[i]);  // iには0~array.length(4)が順番に入り、配列の要素を順番に取り出せる
    }
    console.log(array); // 配列を丸ごと指定したい時はindexを付けない
    return array;
}

