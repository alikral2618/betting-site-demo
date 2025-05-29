function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Kullanıcı adı boş olamaz.");
  localStorage.setItem("walletUser", username);
  if (!localStorage.getItem(`${username}_balance`)) {
    localStorage.setItem(`${username}_balance`, 0);
    localStorage.setItem(`${username}_history`, JSON.stringify([]));
  }
  loadWallet();
}

function logout() {
  localStorage.removeItem("walletUser");
  location.reload();
}

function loadWallet() {
  const username = localStorage.getItem("walletUser");
  if (!username) return;
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("wallet-screen").classList.remove("hidden");
  document.getElementById("user-name").textContent = username;

  updateBalance();
  loadHistory();
}

function updateBalance() {
  const username = localStorage.getItem("walletUser");
  const balance = parseFloat(localStorage.getItem(`${username}_balance`)) || 0;
  document.getElementById("balance").textContent = balance.toFixed(2);
}

function loadHistory() {
  const username = localStorage.getItem("walletUser");
  const history = JSON.parse(localStorage.getItem(`${username}_history`)) || [];
  const list = document.getElementById("history-list");
  list.innerHTML = "";
  history.slice().reverse().forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.type} - ₺${item.amount} (${item.bank}) [${item.date}]`;
    list.appendChild(li);
  });
}

function deposit() {
  const username = localStorage.getItem("walletUser");
  const bank = document.getElementById("bank").value;
  const amount = parseFloat(document.getElementById("amount").value);
  if (!bank || !amount || amount <= 0) return alert("Geçerli tutar ve banka girin.");

  let balance = parseFloat(localStorage.getItem(`${username}_balance`));
  balance += amount;
  localStorage.setItem(`${username}_balance`, balance.toFixed(2));

  saveHistory(username, "Yatırma", amount, bank);
  updateBalance();
  loadHistory();
}

function withdraw() {
  const username = localStorage.getItem("walletUser");
  const bank = document.getElementById("bank").value;
  const amount = parseFloat(document.getElementById("amount").value);
  let balance = parseFloat(localStorage.getItem(`${username}_balance`));
  if (!bank || !amount || amount <= 0) return alert("Geçerli tutar ve banka girin.");
  if (amount > balance) return alert("Yetersiz bakiye.");

  balance -= amount;
  localStorage.setItem(`${username}_balance`, balance.toFixed(2));

  saveHistory(username, "Çekme", amount, bank);
  updateBalance();
  loadHistory();
}

function saveHistory(user, type, amount, bank) {
  const history = JSON.parse(localStorage.getItem(`${user}_history`)) || [];
  history.push({
    type,
    amount,
    bank,
    date: new Date().toLocaleString()
  });
  localStorage.setItem(`${user}_history`, JSON.stringify(history));
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Sayfa yüklendiğinde otomatik giriş kontrolü
window.onload = () => {
  if (localStorage.getItem("walletUser")) {
    loadWallet();
  }
};
