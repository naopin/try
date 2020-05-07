const todos = [];
const inputBox = document.getElementById('input');
const addButton = document.getElementById('add-button');
const tBody = document.getElementById('todo-list');
const formRadio = document.getElementById("check");
const defRadioStatus = {
    "": "すべて",
    "all": "すべて",
    "active": "作業中",
    "complete": "完了"
}
formRadio.addEventListener('change', showTodos);

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
    const radioStatus = formRadio.status.value;
    // console.log(radioState);

    // tbodyの中身を空にする
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    todos.forEach((todoDict, index) => {
        let isVisible = false;
        if(defRadioStatus[radioStatus] === "すべて" || defRadioStatus[radioStatus] === todoDict.progressButton.textContent) {
            isVisible = true;
        }

        if(isVisible) {
            const tr = document.createElement('tr');
            const tdNum = document.createElement('td');
            tdNum.textContent = index + 1;
            tr.appendChild(tdNum);
            for (key in todoDict) {
                tr.appendChild(todoDict[key]);
            }
            tBody.appendChild(tr);
        }
    });
}
// todoの連想配列を作って返す関数
function getTodoTdDict(todo) {
    const tdComment = document.createElement('td');
    tdComment.textContent = todo;
    const tdProgress = document.createElement('td');
    const progressButton = document.createElement('button');
    progressButton.textContent = '作業中';
    tdProgress.appendChild(progressButton);
    const tdDelete = document.createElement('td');
    const deleteButton = createDeleteBtn();

    tdDelete.appendChild(deleteButton);
    // todoDict["todo"](or todoDict.todo)でtodoの値=tdTodoにアクセスできる
    const todoDict = {todo: tdComment, progressButton: tdProgress, deleteButton: tdDelete};
    return todoDict;
}
function createDeleteBtn() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', todoDict => {
        todos.splice(todoDict, 1);
        showTodos();
    });
    return deleteButton;
}