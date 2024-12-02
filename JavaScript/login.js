// Password toggle functionality
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  togglePassword.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});

// Google Login Integration
function handleGoogleLogin(response) {
  const user = jwt_decode(response.credential);
  alert(`Welcome, ${user.name}. Your email is ${user.email}`);
}

// Initialize Facebook SDK
window.fbAsyncInit = function () {
  FB.init({
    appId: 'YOUR_FACEBOOK_APP_ID', // Replace with your App ID
    cookie: true,
    xfbml: true,
    version: 'v12.0',
  });
};

document.getElementById('facebook-login').addEventListener('click', () => {
  FB.login(
    function (response) {
      if (response.status === 'connected') {
        FB.api('/me', { fields: 'name,email' }, function (userData) {
          alert(`Welcome, ${userData.name}. Your email is ${userData.email}`);
        });
      } else {
        alert('Facebook login failed or was canceled.');
      }
    },
    { scope: 'public_profile,email' }
  );
});
  