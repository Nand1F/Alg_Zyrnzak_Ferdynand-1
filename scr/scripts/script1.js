let tempData = '';
let result = '';

function sizeClick() {
    const values = tempData.split(', ');
    if (values[0] === '') {
        result = 'Size: 0';
    } else {
        result = 'Size: ' + values.length;
    }
    updateResult();
}
function popClick() {
    const values = tempData.split(', ');
    if (values.length > 0 && values[0].trim() !== '') {
        const lastValue = values.pop();
        result = 'Pop: ' + lastValue;
        tempData = values.join(', ');
    } else {
        result = 'Pop: error';
    }
    updateResult();
}






function clearClick() {
    tempData = '';
    result = 'Clear: ok';
    updateResult();
}


function pushClick() {
    const value = document.getElementById('inputText').value;
    if (value.trim() !== '') {
        if (tempData !== '') {
            tempData += ', ' + value;
        } else {
            tempData = value;
        }
        document.getElementById('inputText').value = '';
        result = 'Push: ok';
        updateResult();
    }
}
function exitClick() {
    result = 'bye';
    updateResult();
}
function backClick() {
    const values = tempData.split(', ');
    if (values.length > 0 && values[values.length - 1].trim() !== '') {
        const lastValue = values[values.length - 1];
        result = 'Back: ' + lastValue;
    } else {
        result = 'Back: error';
    }
    updateResult();
}

function updateResult() {
    document.getElementById('displayInput').value = tempData;
    document.getElementById('resultText').value = result;
}

document.getElementById('exitButton').addEventListener('click', exitClick);
document.getElementById('sizeButton').addEventListener('click', sizeClick);
document.getElementById('clearButton').addEventListener('click', clearClick);
document.getElementById('pushButton').addEventListener('click', pushClick);
document.getElementById('popButton').addEventListener('click', popClick);
document.getElementById('backButton').addEventListener('click', backClick);

