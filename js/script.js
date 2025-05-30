function goToRegister() {
  const amount = document.getElementById("amount").value;
  if (amount && amount > 0) {
    document.getElementById("deposit-screen").classList.add("hidden");
    document.getElementById("register-screen").classList.remove("hidden");
  } else {
    alert("Lütfen geçerli bir tutar girin.");
  }
}

const supportLink = document.getElementById("support-link");
const supportModal = document.getElementById("support-modal");
const closeModal = document.getElementById("close-modal");

supportLink.addEventListener("click", function(e) {
  e.preventDefault();
  supportModal.classList.remove("hidden");
});

closeModal.addEventListener("click", function() {
  supportModal.classList.add("hidden");
});

window.addEventListener("click", function(event) {
  if (event.target === supportModal) {
    supportModal.classList.add("hidden");
  }
});

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if(username && password) {
    alert(`Kayıt başarılı!\nKullanıcı Adı: ${username}`);
  } else {
    alert("Lütfen tüm alanları doldurun.");
  }
});
