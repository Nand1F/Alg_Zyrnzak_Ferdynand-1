let task = '';
let sizeResult = '';


function sizeValue() {
    const values = task.split(', ');
    if (values[0] === '') {
        sizeResult = 'Size: 0';
    } else {
        sizeResult = 'Size: ' + values.length;
    }
    updateResult();
}
function Front() {
    const values = task.split(', ');
    if (values[0] === '') {
        sizeResult = 'Front: error';
    } else {
        sizeResult = 'Front: ' + values[0];
    }
    updateResult();
}

function popValue() {
    const values = task.split(', ');
    if (values.length > 0 && values[0].trim() !== '') {
        const lastValue = values.pop();
        sizeResult = 'Pop: ' + lastValue;
        task = values.join(', ');
    } else {
        sizeResult = 'Pop: error';
    }
    updateResult();
}

function pushValue() {
    const value = document.getElementById('data').value;
    if (value.trim() !== '') {
        if (task !== '') {
            task += ', ' + value;
        } else {
            task = value;
        }
        document.getElementById('data').value = '';
        sizeResult = 'Push: ok';
        updateResult();
    }
}


function clearValue() {
    task = '';
    sizeResult = 'Clear: ok';
    updateResult();
}
function exitValue() {
    sizeResult = 'Exit: bye bye;)';
    updateResult();
}

function updateResult() {
    document.getElementById('task').value = task;
    document.getElementById('sizeResult').value = sizeResult;
}


document.getElementById('size').addEventListener('click', sizeValue);
document.getElementById('clear').addEventListener('click', clearValue);
document.getElementById('front').addEventListener('click', Front);
document.getElementById('exit').addEventListener('click', exitValue);
document.getElementById('push').addEventListener('click', pushValue);
document.getElementById('pop').addEventListener('click', popValue);