let deque = '';
let task = '';
let operationResult = '';
let size = 0;


function clearDeque() {
    deque = '';
    size = 0;
    updateResult('Clear: ok');
}
function pushBack() {
    const dataBack = document.getElementById('data_back').value;
    if (dataBack.trim() !== '') {
        if (size > 0) {
            deque += ', ' + dataBack;
        } else {
            deque = dataBack;
        }
        document.getElementById('data_back').value = '';
        size++;
        updateResult('Push Back: ok');
    }
}

function popFront() {
    if (size > 0) {
        const values = deque.split(', ');
        const poppedValue = values.shift();
        size--;
        if (values.length > 0) {
            deque = values.join(', ');
        } else {
            deque = '';
        }
        updateResult('Pop_Front: ' + poppedValue);
    } else {
        updateResult('Pop_Front: error');
    }
}
function pushFront() {
    const dataFront = document.getElementById('data_front').value;
    if (dataFront.trim() !== '') {
        if (size > 0) {
            deque = dataFront + ', ' + deque;
        } else {
            deque = dataFront;
        }
        document.getElementById('data_front').value = '';
        size++;
        updateResult('Push Front: ok');
    }
}
function popBack() {
    if (size > 0) {
        const values = deque.split(', ');
        const poppedValue = values.pop();
        size--;
        if (values.length > 0) {
            deque = values.join(', ');
        } else {
            deque = '';
        }
        updateResult('Pop_Back: ' + poppedValue);
    } else {
        updateResult('Pop_back: error');
    }
}



function getSize() {
    document.getElementById('sizeResult').value = 'Size: ' + size;
}

function getFront() {
    if (size > 0) {
        const values = deque.split(', ');
        document.getElementById('sizeResult').value = 'Front: ' + values[0];
    } else {
        updateResult('Front: error');
    }
}

function getBack() {
    if (size > 0) {
        const values = deque.split(', ');
        const lastIndex = values.length - 1;
        document.getElementById('sizeResult').value = 'Back: ' + values[lastIndex];
    } else {
        updateResult('Back: error');
    }
}

function exitValue() {
    sizeResult = 'Exit: bye bye;)';
    updateResult(sizeResult);
}

function updateResult(result) {
    document.getElementById('task').value = deque;
    if (result) {
        operationResult = result;
        document.getElementById('sizeResult').value = operationResult;
    }
}

document.getElementById('push_front').addEventListener('click', pushFront);
document.getElementById('size').addEventListener('click', getSize);
document.getElementById('pop_front').addEventListener('click', popFront);
document.getElementById('pop_back').addEventListener('click', popBack);
document.getElementById('front').addEventListener('click', getFront);
document.getElementById('back').addEventListener('click', getBack);
document.getElementById('exit').addEventListener('click', exitValue);
document.getElementById('push_back').addEventListener('click', pushBack);
document.getElementById('clear').addEventListener('click', clearDeque);

