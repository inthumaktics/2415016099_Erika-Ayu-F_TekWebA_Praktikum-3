function addTask() {

}
function deleteTask(element) {
}
function editTask(element) {
}

//CHANGE BACKGROUND

const backgroundselector = document.getElementById('backgroundSelector');

backgroundselector.addEventListener('change', changeBackground);

function changeBackground() {
    const selectedValue = backgroundselector.value;
    document.body.classList.remove(
        'bg-default',
        'bg-blue',
        'bg-green',
        'bg-purple',
        'bg-gradient',
        'bg-pattern'
    );
    document.body.classList.add(selectedValue);
}
