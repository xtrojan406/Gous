function a() {
    const b = document.getElementById('fileInput');
    const c = document.getElementById('output');
    const d = document.getElementById('downloadLink');
    const e = document.getElementById('outputFileName').value;
    const f = document.getElementById('toggleOutput');

    if (b.files.length === 0) {
        alert('Pilih file .txt terlebih dahulu');
        return;
    }
    if (!e) {
        alert('Masukkan nama file ');
        return;
    }

    const g = b.files[0];
    const h = new FileReader();

    h.onload = function(i) {
        const j = i.target.result.split('\n');
        let k = j.map(l => l.split(/\s+/));

        let l = [];
        for (let m = 0; m < k[0].length; m++) {
            for (let n = 0; n < k.length; n++) {
                if (k[n][m] !== undefined && k[n][m] !== '') {
                    l.push(k[n][m]);
                }
            }
        }

        const o = l.join('\n');

        c.textContent = o;
        c.style.display = 'block';

        const p = new Blob([o], { type: 'text/plain' });
        const q = URL.createObjectURL(p);
        d.href = q;
        d.download = e;
        d.textContent = 'Download File Gabungan';

        f.textContent = 'Sembunyikan Hasil';
    };

    h.readAsText(g);
}

function r() {
    const s = document.getElementById('output');
    const t = document.getElementById('toggleOutput');

    if (s.style.display === 'none') {
        s.style.display = 'block';
        t.textContent = 'Sembunyikan Hasil';
    } else {
        s.style.display = 'none';
        t.textContent = 'Tampilkan Hasil';
    }
}
