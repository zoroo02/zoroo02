function login() {
  // Simulate login process (replace with actual login logic)
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  
  // Example: Validate credentials (replace with backend authentication)
  if (username === 'admin' && password === 'password') {
    alert('Login successful! Redirecting...');
    // Replace with actual redirection logic after successful login
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}
