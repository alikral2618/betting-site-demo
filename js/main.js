function depositMoney() {
  const bank = document.getElementById('bank').value;
  const amount = document.getElementById('amount').value;

  if (!bank || !amount || amount <= 0) {
    alert("Lütfen geçerli bir banka ve tutar seçin.");
    return;
  }

  alert(`₺${amount} tutarında para ${bank} bankasına yatırılmak üzere hazırlandı.`);
  // Gerçek işlem burada değil çünkü sistem sadece arayüz.
}
