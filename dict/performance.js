const { performance } = require('perf_hooks');

/*
極端だけど、連想配列が強い例。
たくさんの人の名前、身長、体重を保存しておいて、後から特定の人(今回はtanaka)の身長、体重を取り出したい
*/

// 適当に配列に保存
let sampleList = [];
for (let i = 0; i < 10000; i++) {
    sampleList.push(["yamada", 180, 62]);
}
sampleList.push(["tanaka", 170, 70]);

let listStart = performance.now();
// tanakaの身長と体重を知りたい
// 配列ループしてif文でtanakaを探し出す必要がある
for (let i = 0; i < sampleList.length; i++) {
    if (sampleList[i][0] === "tanaka") {
        console.log("tanaka: " + sampleList[i][1] + " " + sampleList[i][2]);
        break;
    }
}
let listEnd = performance.now();
console.log(listEnd - listStart);

// 適当に連想配列に保存
let sampleDict = {};
for (let i = 0; i < 10000; i++) {
    key = "yamada" + String(i);
    sampleDict[key] = [180, 62];
}
sampleDict["tanaka"] = [170, 70]

let dictStart = performance.now();
// tanakaの身長と体重を知りたい
// "tanaka"のkeyを指定すれば一発でデータを取ってこれる
console.log("tanaka: " + sampleDict["tanaka"][0] + " " + sampleDict["tanaka"][1]);
let dictEnd = performance.now();
console.log(dictEnd - dictStart);
