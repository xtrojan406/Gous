function processFile() {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');
    const downloadLink = document.getElementById('downloadLink');
    const outputFileName = document.getElementById('outputFileName').value;
    const toggleButton = document.getElementById('toggleOutput');
    const cleanButton = document.getElementById('cleanButton');

    if (fileInput.files.length === 0) {
        alert('Pilih file .txt terlebih dahulu');
        return;
    }
    if (!outputFileName) {
        alert('Masukkan nama file output');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const lines = e.target.result.split('\n');
        let columns = lines.map(line => line.split(/\s+/));

        let combinedLines = [];
        for (let col = 0; col < columns[0].length; col++) {
            for (let row = 0; row < columns.length; row++) {
                if (columns[row][col] !== undefined && columns[row][col] !== '') {
                    combinedLines.push(columns[row][col]);
                }
            }
        }

        // Simpan hasil di local storage untuk penggunaan cleanOutput()
        localStorage.setItem('processedText', combinedLines.join('\n'));

        // Tampilkan hasil
        output.textContent = combinedLines.join('\n');
        output.style.display = 'block';

        // Buat file untuk diunduh
        const resultText = combinedLines.join('\n');
        const blob = new Blob([resultText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = outputFileName;
        downloadLink.textContent = 'Download File Gabungan';
        downloadLink.style.display = 'inline'; // Tampilkan link download

        toggleButton.textContent = 'Sembunyikan Hasil';
        cleanButton.style.display = 'inline'; // Tampilkan tombol hapus karakter
    };

    reader.readAsText(file);
}

function toggleOutput() {
    const output = document.getElementById('output');
    const toggleButton = document.getElementById('toggleOutput');

    if (output.style.display === 'none') {
        output.style.display = 'block';
        toggleButton.textContent = 'Sembunyikan Hasil';
    } else {
        output.style.display = 'none';
        toggleButton.textContent = 'Tampilkan Hasil';
    }
}

function cleanOutput() {
    const output = document.getElementById('output');
    const cleanButton = document.getElementById('cleanButton');

    // Ambil hasil yang sudah diproses dari local storage
    const processedText = localStorage.getItem('processedText');
    if (!processedText) {
        alert('Tidak ada hasil untuk dibersihkan');
        return;
    }

    // Hapus karakter '+' dan spasi
    const cleanedText = processedText.replace(/[+\s]/g, '');

    // Tampilkan hasil yang sudah dibersihkan
    output.textContent = cleanedText;

    // Update download link
    const blob = new Blob([cleanedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = document.getElementById('outputFileName').value;
    downloadLink.textContent = 'Download File Gabungan (Bersih)';
}
