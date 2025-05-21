let userBalance = 1000;  // Kullanıcının başlangıç bakiyesi

// Kullanıcı bilgilerini güncelleme
function updateUserInfo() {
    document.getElementById('userBalance').textContent = userBalance;
}

// Slot makinesi bahisi yapma
function placeSlotBet() {
    if (userBalance < 100) {
        alert('Slot makinesine bahis yapmak için yeterli bakiyeniz yok!');
        return;
    }

    userBalance -= 100;
    updateUserInfo();

    // Slot makinesi sonucu
    let slotResult = Math.random();
    let resultMessage = (slotResult > 0.7) ? "Kazandınız! 300 TL kazandınız!" : "Kaybettiniz! 100 TL kaybettiniz.";
    displayBetResult(resultMessage);
}

// Rastgele bahis yapma
function placeRandomBet() {
    if (userBalance < 50) {
        alert('Rastgele bahis yapmak için yeterli bakiyeniz yok!');
        return;
    }

    userBalance -= 50;
    updateUserInfo();

    // Rastgele bahis sonucu
    let randomResult = Math.random();
    let resultMessage = (randomResult > 0.5) ? "Kazandınız! 100 TL kazandınız!" : "Kaybettiniz! 50 TL kaybettiniz.";
    displayBetResult(resultMessage);
}

// Bahis sonucunu gösterme
function displayBetResult(resultMessage) {
    document.getElementById('betOutcome').textContent = resultMessage;
    document.getElementById('bettingSection').style.display = 'none';
    document.getElementById('betResult').style.display = 'block';
}

// Oyunu sıfırlama
function resetGame() {
    document.getElementById('bettingSection').style.display = 'block';
    document.getElementById('betResult').style.display = 'none';
}
