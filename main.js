let result = document.getElementById('result');

const ul = document.createElement("ul");
const li = document.createElement('li');
result.appendChild(ul);

function clickSubmit() {
    let array = "";

    let fizzNumber = document.getElementById('input1').value;
    let buzzNumber = document.getElementById('input2').value;

    if (!fizzNumber || !buzzNumber) {
        result.innerText = "整数値を入力してください";
        return;
    } else {
        fizzNumber = Number(fizzNumber);
        buzzNumber = Number(buzzNumber);
    }
    if (isNaN(fizzNumber) || isNaN(buzzNumber)) {
        result.innerText = "整数値を入力してください"
        return;
    }

    if (Number.isInteger(fizzNumber) === true && Number.isInteger(buzzNumber) === true) {
        for (let i = 1; i <= 100; i++) {
            let fizz = fizzNumber;
            let buzz = buzzNumber;
            if (i % fizz === 0 && i % buzz === 0) {
                array += "<li>" + "FizzBuzz" + i + "</li>";
            } else if (i % fizz === 0) {
                array += "<li>" + "Fizz" + i + "</li>";
            } else if (i % buzz === 0) {
                array += "<li>" + "Buzz" + i + "</li>";
            }
        }
        result.appendChild(ul);
        ul.innerHTML = array ;
    } else {
        result.innerText = "整数値を入力してください";
    }
}

