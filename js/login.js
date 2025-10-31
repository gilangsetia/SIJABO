document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    Swal.fire({
      icon: 'error',
      title: 'Login Gagal',
      text: 'Email dan password wajib diisi.',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Simulasi login berhasil
  Swal.fire({
    icon: 'success',
    title: 'Login Berhasil!',
    text: 'Selamat datang di Sistem Informasi Geografis.',
    confirmButtonColor: '#A50000'
  }).then(() => {
    window.location.href = 'index.html';
  });
});

document.querySelectorAll('.hideo__input').forEach(input => {
  input.addEventListener('blur', function() {
    if (!this.value) {
      this.classList.add('hideo__input--error');
    } else {
      this.classList.remove('hideo__input--error');
    }
  });
});