document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    document.getElementById('message').textContent = 'Lütfen tüm alanları doldurun.';
    return;
  }

  let users = JSON.parse(localStorage.getItem('demoUsers') || '{}');

  if (users[username]) {
    // Kayıtlı kullanıcı, şifre kontrolü demo amaçlı basit
    if (users[username].password === password) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('message').textContent = 'Şifre yanlış.';
    }
  } else {
    // Yeni kullanıcı oluştur
    users[username] = {
      password: password,
      balance: 10000 // Başlangıç demo bakiyesi
    };
    localStorage.setItem('demoUsers', JSON.stringify(users));
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'dashboard.html';
  }
});
