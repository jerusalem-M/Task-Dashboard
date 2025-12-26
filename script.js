// Clock
function showTime() {
  const now = new Date();
  document.getElementById('time').textContent =
    now.getHours().toString().padStart(2, '0') + ':' +
    now.getMinutes().toString().padStart(2, '0') + ':' +
    now.getSeconds().toString().padStart(2, '0');
}
setInterval(showTime, 1000);
showTime();

// Notes save/load
const notesArea = document.getElementById('daily-notes');
notesArea.value = localStorage.getItem('dailyNotes') || '';
document.getElementById('save-notes').addEventListener('click', () => {
  localStorage.setItem('dailyNotes', notesArea.value);
  alert('Notes saved!');
});

// Tasks
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

document.getElementById('add-task').onclick = () => {
  if (taskInput.value === "") return;

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  li.onclick = () => li.classList.toggle('done');

  taskList.appendChild(li);
  taskInput.value = "";
};
const toggle = document.getElementById('theme-toggle');
toggle.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme',
    document.body.classList.contains('dark') ? 'dark' : 'light');
};

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
