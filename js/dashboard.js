window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUser');
  if (!username) {
    window.location.href = 'index.html'; // Giriş yapılmamışsa login sayfasına gönder
    return;
  }

  let users = JSON.parse(localStorage.getItem('demoUsers') || '{}');
  let user = users[username];

  // Kullanıcı adı ve bakiye göster
  document.getElementById('usernameDisplay').textContent = username;
  document.getElementById('balanceDisplay').textContent = user.balance.toFixed(2);

  // Logout butonuna tıklandığında:
  document.getElementById('logoutBtn').onclick = () => {
    localStorage.removeItem('loggedInUser');  // Oturum bilgisini temizle
    window.location.href = 'index.html';       // Login sayfasına yönlendir
  };
});
