// Basit SPA sayfa yönetimi
const content = document.getElementById('content');
const navItems = document.querySelectorAll('#nav-menu li');

let walletData = {
  balance: 500.00,
  history: [
    { id: 1, type: 'Yatırma', amount: 300, method: 'Paypal', date: new Date('2025-04-01T12:00') },
    { id: 2, type: 'Çekme', amount: -100, method: 'EFT', date: new Date('2025-04-05T16:30') },
    { id: 3, type: 'Yatırma', amount: 300, method: 'Kripto', date: new Date('2025-04-20T10:15') }
  ]
};

function formatCurrency(num) {
  return num.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
}

function loadHome() {
  content.innerHTML = `
    <h2>Ana Sayfa</h2>
    <p>Demo bahis ve finans sitesi. Gerçek para sistemleri demo olarak entegre edilmiştir.</p>
    <ul>
      <li>Kredi kartı, EFT, Kripto, Paypal demo para yatırma</li>
      <li>Geniş arayüz ve sayfa yönetimi</li>
      <li>Canlı destek widget'ı</li>
      <li>Sosyal medya bağlantıları</li>
    </ul>
  `;
}

function loadWallet() {
  let historyItems = walletData.history.map(item => `
    <div class="wallet-history-item">
      <strong>${item.type}</strong> - ${formatCurrency(item.amount)} via ${item.method} 
      <br><small>${item.date.toLocaleString()}</small>
    </div>
  `).join('');

  content.innerHTML = `
    <h2>Cüzdan</h2>
    <div class="wallet-balance">Bakiye: <strong>${formatCurrency(walletData.balance)}</strong></div>
    <div class="wallet-history">${historyItems}</div>
    <div class="wallet-load-form">
      <h3>Para Yükle</h3>
      <input type="number" id="load-amount" min="1" max="10000" placeholder="Miktar (₺)" />
      <select id="load-method">
        <option value="Paypal">Paypal</option>
        <option value="EFT">EFT</option>
        <option value="Kripto">Kripto</option>
      </select>
      <button id="load-btn">Yükle</button>
      <p id="load-msg" style="color:green;"></p>
    </div>
  `;

  document.getElementById('load-btn').addEventListener('click', () => {
    const amountInput = document.getElementById('load-amount');
    const methodSelect = document.getElementById('load-method');
    const msg = document.getElementById('load-msg');

    let amount = parseFloat(amountInput.value);
    let method = methodSelect.value;

    if (isNaN(amount) || amount <= 0) {
      msg.style.color = 'red';
      msg.textContent = 'Lütfen geçerli bir miktar girin.';
      return;
    }
    if(amount > 10000) {
      msg.style.color = 'red';
      msg.textContent = 'Maksimum yükleme miktarı 10.000₺';
      return;
    }

    // Demo olarak bakiye artır
    walletData.balance += amount;
    walletData.history.unshift({
      id: walletData.history.length + 1,
      type: 'Yatırma',
      amount: amount,
      method: method,
      date: new Date()
    });
    msg.style.color = 'green';
    msg.textContent = `${formatCurrency(amount)} başarıyla yüklendi via ${method}.`;
    amountInput.value = '';

    // Güncel sayfayı yeniden yükle
    loadWallet();
  });
}

function loadAbout() {
  content.innerHTML = `
    <h2>Hakkımda</h2>
    <p>Bu demo bahis sitesi, modern web teknolojileri kullanılarak oluşturulmuştur.</p>
    <p>Geliştirici: Senin İsmin</p>
    <p>İletişim: mail@ornek.com</p>
  `;
}

function loadSocial() {
  content.innerHTML = `
    <h2>Sosyal Ajans</h2>
    <div class="social-links">
      <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
      <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
      <a href="mailto:ornek@gmail.com" target="_blank" rel="noopener">Gmail</a>
    </div>
  `;
}

// Nav linkleri tıklandığında sayfa yükle
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    const page = item.getAttribute('data-page');
    switch(page) {
      case 'home': loadHome(); break;
      case 'wallet': loadWallet(); break;
      case 'about': loadAbout(); break;
      case 'social': loadSocial(); break;
      default: loadHome();
    }
  });
});

// Sayfa ilk açıldığında Ana Sayfa yüklensin
loadHome();

// Canlı destek widget kontrol
const liveChat = document.getElementById('live-chat');
const chatCloseBtn = document.getElementById('chat-close');
const chatSendBtn = document.getElementById('chat-send');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatCloseBtn.addEventListener('click', () => {
  liveChat.style.display = 'none';
});

chatSendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = chatInput.value.trim();
  if(!msg) return;
  appendMessage('Sen', msg);
  chatInput.value = '';

  // Basit demo otomatik cevap
  setTimeout(() => {
    appendMessage('Destek', 'Mesajınız alındı, en kısa sürede dönüş yapacağız.');
  }, 1000);
}

function appendMessage(sender, text) {
  const div = document.createElement('div');
  div.textContent = `${sender}: ${text}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
