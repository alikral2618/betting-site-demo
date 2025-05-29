function loadBalance() {
  const balance = localStorage.getItem('walletBalance') || 0;
  document.getElementById('balance').textContent = `₺ ${balance}`;
}

function depositMoney() {
  const bank = document.getElementById('bank').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (!bank || !amount || amount <= 0) {
    alert("Lütfen geçerli bir banka ve tutar seçin.");
    return;
  }

  let currentBalance = parseFloat(localStorage.getItem('walletBalance')) || 0;
  currentBalance += amount;
  localStorage.setItem('walletBalance', currentBalance.toFixed(2));

  loadBalance();

  alert(`₺${amount} tutarında para ${bank} bankasına yatırılmış gibi gösterildi.`);
}

// Sayfa açıldığında sahte bakiye yüklensin
window.onload = loadBalance;
