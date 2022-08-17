document.getElementById('getList').addEventListener('click', () => {
  fetch('/usage').then(function () {
    window.location = '/usage';
  });
});

document.getElementById('update').addEventListener('click', () => {
  fetch('/write').then(function () {
    window.location = '/write';
  });
});
