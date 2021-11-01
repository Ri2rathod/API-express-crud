document.querySelector("#liveToastBtn").onclick = function() {
    new bootstrap.Toast(document.querySelector('#liveToast')).show();
}