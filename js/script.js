/* Genel body ve tam ekran merkezi hizalama */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Ana container: formu ortalar */
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  flex-direction: column; /* Dikey hizalama */
  gap: 2rem; /* Bölümler arasında boşluk */
}

/* Para Yükleme Bölümü */
.deposit-section {
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  width: 360px;
  max-width: 90%;
  text-align: center;
}

.deposit-section h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.deposit-section button {
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  background-color: #764ba2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.deposit-section button:hover {
  background-color: #5a3580;
}

/* Kayıt Formu Bölümü */
.register-section {
  background-color: white;
  padding: 2.5rem 3rem;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  width: 360px;
  max-width: 90%;
  text-align: center;
}

.register-section h2 {
  margin-bottom: 1.8rem;
  color: #333;
  font-weight: 700;
  font-size: 1.8rem;
}

.register-section input {
  width: 100%;
  padding: 0.75rem;
  margin: 0.6rem 0 1.3rem 0;
  border: 1.8px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.register-section input:focus {
  border-color: #764ba2;
  outline: none;
}

.register-section button {
  width: 100%;
  padding: 0.85rem;
  background: #764ba2;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.register-section button:hover {
  background: #5a3580;
}

.forgot-password {
  margin-top: 1.3rem;
  font-size: 0.95rem;
  color: #666;
}

.forgot-password a {
  color: #764ba2;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.forgot-password a:hover {
  color: #5a3580;
  text-decoration: underline;
}

/* Gizli sınıf */
.hidden {
  display: none !important;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal.hidden {
  display: none;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.close {
  position: absolute;
  top: 12px;
  right: 18px;
  font-size: 1.6rem;
  cursor: pointer;
}
