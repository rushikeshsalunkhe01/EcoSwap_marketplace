// Elements
const loginSection = document.getElementById('login-section');
const resetSection = document.getElementById('reset-section');
const registrationSection = document.getElementById('registration-section');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const registerLink = document.getElementById('register-link');
const backToLogin = document.getElementById('back-to-login');
const backToLoginFromRegister = document.getElementById('back-to-login-from-register');
const resetForm = document.getElementById('reset-form');
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const regPasswordInput = document.getElementById('reg-password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Toggle Password Visibility
togglePassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
  }
});

// Show Reset Password Section
forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.style.display = 'none';
  resetSection.style.display = 'block';
});

// Show Registration Section
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.style.display = 'none';
  registrationSection.style.display = 'block';
});

// Back to Login Section
backToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  resetSection.style.display = 'none';
  loginSection.style.display = 'block';
});

backToLoginFromRegister.addEventListener('click', (e) => {
  e.preventDefault();
  registrationSection.style.display = 'none';
  loginSection.style.display = 'block';
});

// Handle Reset Password
resetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Password reset link sent to your email!');
  resetSection.style.display = 'none';
  loginSection.style.display = 'block';
});

// Handle Registration
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (regPasswordInput.value !== confirmPasswordInput.value) {
    alert("Passwords don't match.");
    return;
  }
  localStorage.setItem('userEmail', document.getElementById('reg-email').value.trim());
  localStorage.setItem('userPassword', regPasswordInput.value.trim());
  alert('Registration successful! You can now log in.');
  registrationSection.style.display = 'none';
  loginSection.style.display = 'block';
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = passwordInput.value.trim();
  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  if (email === storedEmail && password === storedPassword) {
    alert('Login successful!');
  } else {
    alert('Invalid email or password. Please try again.');
  }
});
