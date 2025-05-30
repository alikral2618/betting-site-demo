document.addEventListener('DOMContentLoaded', () => {
  const supportLink = document.getElementById('support-link');
  const modal = document.getElementById('support-modal');
  const closeModal = document.getElementById('close-modal');
  const registerForm = document.getElementById('register-form');

  supportLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    // Buraya kayıt işlemi için API çağrısı veya başka işlem ekleyebilirsin
    alert(`Kayıt başarılı!\nKullanıcı Adı: ${username}`);
    registerForm.reset();
  });
});
