let result = document.getElementById('result');

const ul = document.createElement("ul");
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
        result.appendChild(ul);
        for (let i = 1; i <= 100; i++) {
            let fizz = fizzNumber;
            let buzz = buzzNumber;
            const li = document.createElement('li');
            ul.appendChild(li);
            if (i % fizz === 0 && i % buzz === 0) {
                li.textContent = ("FizzBuzz" + i);
            } else if (i % fizz === 0) {
                li.textContent = ("Fizz" + i);
            } else if (i % buzz === 0) {
                li.textContent = ("Buzz" + i);
            }
        }
        console.log(ul);
    } else {
        result.innerText = "整数値を入力してください";
    }
}

