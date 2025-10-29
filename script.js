function login() {
  const role = document.getElementById('role').value;
  if (role === 'locador') {
    window.location.href = 'manage.html';
  } else {
    window.location.href = 'payment.html';
  }
}

function logout() {
  window.location.href = 'index.html';
}

function confirmPayment() {
  alert('Pagamento efetuado com sucesso!');
}

function editAd() {
  alert('Função de edição simbólica acionada.');
}

function deleteAd() {
  alert('Anúncio excluído com sucesso!');
}

function newAd() {
  alert('Novo anúncio criado simbolicamente!');
}
