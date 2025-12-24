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
