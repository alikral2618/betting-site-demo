document.getElementById('authForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');
  
  if (!username || !password) {
    message.textContent = "Lütfen tüm alanları doldurun.";
    return;
  }
  
  let users = JSON.parse(localStorage.getItem('demoUsers') || '{}');
  
  if (users[username]) {
    // Kullanıcı varsa şifre kontrolü
    if (users[username].password === password) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'dashboard.html';
    } else {
      message.textContent = "Şifre yanlış!";
    }
  } else {
    // Yeni kullanıcı oluştur, demo bakiye 10.000₺
    users[username] = { password, balance: 10000 };
    localStorage.setItem('demoUsers', JSON.stringify(users));
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'dashboard.html';
  }
});
