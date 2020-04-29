

// 今回こいつを連想配列のリストとして扱う
const todos = [];
const inputBox = document.getElementById('input');
const addButton = document.getElementById('add-button');
const tBody = document.getElementById('todo-list');
// 追加するとtodoにテキスト格納
addButton.addEventListener('click', () => {
    const todo = inputBox.value;
    //  入力後にテキストを空にする
    inputBox.value = '';
    //  配列にテキスト格納
    todos.push(getTodoTdDict(todo));
    showTodos();
});

//配列を出力:テーブルに追加
function showTodos() {
    // tbodyの中身を空にする
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    // todoDictに連想配列が入る
    todos.forEach((todoDict, index) => {
        // IDは配列のindexをそのまま持ってくる
        const tr = document.createElement('tr');
        const tdIndex = document.createElement('td');
        tdIndex.textContent = index + 1;
        tr.appendChild(tdIndex);

        // 連想配列からkeyを順番に取り出してvalue(各td)をappend指定く
        for (key in todoDict) {
            tr.appendChild(todoDict[key]);          
        }

        tBody.appendChild(tr);
    });
}

// todoの連想配列を作って返す関数
function getTodoTdDict(todo) {
    const tdTodo = document.createElement('td');
    tdTodo.textContent = todo;

    const tdProgressButton = document.createElement('td');
    const progressButton = document.createElement('button');
    progressButton.textContent = '作業中';
    tdProgressButton.appendChild(progressButton);

    const tdDeleteButton = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    tdDeleteButton.appendChild(deleteButton);

    const todoDict = {todo:tdTodo, progressButton:tdProgressButton, deleteButton:tdDeleteButton};
    return todoDict;
}