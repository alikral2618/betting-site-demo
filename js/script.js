const depositSection = document.getElementById('deposit-section');
const registerSection = document.getElementById('register-section');
const btnDeposit = document.getElementById('btn-deposit');
const registerForm = document.getElementById('register-form');

btnDeposit.addEventListener('click', () => {
  depositSection.classList.add('hidden');
  registerSection.classList.remove('hidden');
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Lütfen kullanıcı adı ve şifrenizi girin.');
    return;
  }

  // Burada kayıt işlemi yapılabilir (backend veya localStorage)

  alert(`Kayıt başarılı! Kullanıcı adı: ${username}`);

  // Formu sıfırla
  registerForm.reset();

  // Kayıt ekranını gizle, para yükleme ekranını göster
  registerSection.classList.add('hidden');
  depositSection.classList.remove('hidden');
});
