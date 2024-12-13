function validateForm() {
    document.querySelectorAll('small').forEach(function(errorElement) {
        errorElement.style.display = 'none';
    });

    let isValid = true;

    let nama = document.getElementById('nama').value;
    let namaError = document.getElementById('nama-error');
    if (nama === '' || nama.length > 30) {
        namaError.textContent = 'Nama Pelanggan harus diisi dan maksimal 30 karakter.';
        namaError.style.display = 'block';
        document.getElementById('nama').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('nama').style.borderColor = '';
    }

    let email = document.getElementById('email').value;
    let emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '' || !emailPattern.test(email)) {
        emailError.textContent = 'Email harus diisi dengan format yang valid.';
        emailError.style.display = 'block';
        document.getElementById('email').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('email').style.borderColor = '';
    }

    let jam = document.getElementById('jam').value;
    let jamError = document.getElementById('jam-error');
    const jamPattern = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;
    if (jam === '' || !jamPattern.test(jam)) {
        jamError.textContent = 'Jam Keberangkatan harus diisi dengan format HH:MM (00.00 - 23.59).';
        jamError.style.display = 'block';
        document.getElementById('jam').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('jam').style.borderColor = '';
    }

    let tujuan = document.getElementById('tujuan').value;
    let tujuanError = document.getElementById('tujuan-error');
    if (tujuan === '') {
        tujuanError.textContent = 'Tujuan Keberangkatan harus diisi.';
        tujuanError.style.display = 'block';
        document.getElementById('tujuan').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('tujuan').style.borderColor = '';
    }

    let jumlah = document.getElementById('jumlah').value;
    let jumlahError = document.getElementById('jumlah-error');
    if (jumlah === '' || jumlah < 1 || jumlah > 10 || !Number.isInteger(Number(jumlah))) {
        jumlahError.textContent = 'Jumlah Tiket harus diisi dengan angka bulat antara 1 dan 10.';
        jumlahError.style.display = 'block';
        document.getElementById('jumlah').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('jumlah').style.borderColor = '';
    }

    if (isValid) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>Data Pengisian Form</h2>
            <p><strong>Nama Pelanggan:</strong> ${nama}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Jam Keberangkatan:</strong> ${jam}</p>
            <p><strong>Tujuan Keberangkatan:</strong> ${tujuan}</p>
            <p><strong>Jumlah Tiket:</strong> ${jumlah}</p>
        `;
    }

    return isValid;
}
