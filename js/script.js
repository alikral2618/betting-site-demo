document.addEventListener('DOMContentLoaded', () => {
  const depositSection = document.getElementById('deposit-section');
  const registerSection = document.getElementById('register-section');
  const goToRegisterBtn = document.getElementById('go-to-register');
  const registerForm = document.getElementById('register-form');

  // "Para Yüklemeye Başla" butonuna basınca kayıt formunu göster
  goToRegisterBtn.addEventListener('click', () => {
    depositSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });

  // Form gönderildiğinde basit doğrulama ve alert
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
