// script.js
let userBalance = 1000;  // Kullanıcının başlangıç bakiyesi

// Kullanıcı bilgilerini güncelleme
function updateUserInfo() {
    document.getElementById('userBalance').textContent = userBalance;
}

// Bahis yapma işlemi
function placeBet() {
    let betAmount = parseInt(document.getElementById('betAmount').value);

    if (isNaN(betAmount) || betAmount <= 0) {
        alert('Lütfen geçerli bir bahis tutarı girin.');
        return;
    }

    if (betAmount > userBalance) {
        alert('Yetersiz bakiye.');
        return;
    }

    // Kullanıcının bakiyesinden bahis miktarını düşme
    userBalance -= betAmount;
    updateUserInfo();

    // Bahis sonucu simülasyonu
    let result = Math.random() > 0.5 ? 'Kazandınız!' : 'Kaybettiniz!';
    displayBetResult(result, betAmount);
}

// Bahis sonucunu gösterme
function displayBetResult(result, betAmount) {
    let outcomeText = result === 'Kazandınız!' ? `Tebrikler, ${betAmount * 2} TL kazandınız!` : `Üzgünüm, ${betAmount} TL kaybettiniz.`;
    
    document.getElementById('betOutcome').textContent = outcomeText;
    document.getElementById('bettingSection').style.display = 'none';
    document.getElementById('betResult').style.display = 'block';
}

// Oyunu sıfırlama
function resetGame() {
    document.getElementById('betAmount').value = '';
    document.getElementById('bettingSection').style.display = 'block';
    document.getElementById('betResult').style.display = 'none';
}
