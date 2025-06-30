document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح!');
    this.reset();
});
