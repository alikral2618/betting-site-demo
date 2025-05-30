function goToRegister() {
  const amount = document.getElementById("amount").value;
  if (amount && amount > 0) {
    document.getElementById("deposit-screen").classList.add("hidden");
    document.getElementById("register-screen").classList.remove("hidden");
  } else {
    alert("Lütfen geçerli bir tutar girin.");
  }
}
