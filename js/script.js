// Sayfa yüklendiğinde para yükleme bölümü görünür, kayıt formu gizlidir
document.addEventListener('DOMContentLoaded', () => {
  const depositSection = document.getElementById('deposit-section');
  const registerSection = document.getElementById('register-section');
  const goToRegisterBtn = document.getElementById('go-to-register');
  const supportLink = document.getElementById('support-link');
  const modal = document.getElementById('support-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const registerForm = document.getElementById('register-form');

  // "Para Yüklemeye Başla" butonuna basınca kayıt formunu göster
  goToRegisterBtn.addEventListener('click', () => {
    depositSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });

  // Destek linkine tıklayınca modal açılır
  supportLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });

  // Modal kapatma butonu
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Modal dışında tıklanınca modal kapanır
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Form gönderildiğinde alert göster
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert('Lütfen kullanıcı adı ve şifrenizi girin.');
      return;
    }

    alert(`Kayıt başarılı!\nKullanıcı Adı: ${username}`);
    registerForm.reset();
  });
});
