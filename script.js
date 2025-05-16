function openModal(title, content) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerText = content;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}