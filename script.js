(function(){
    function pF() {
        var a = document.getElementById('fileInput');
        var b = document.getElementById('output');
        var c = document.getElementById('downloadLink');
        var d = document.getElementById('outputFileName').value;
        var e = document.getElementById('toggleOutput');

        if (a.files.length === 0) {
            alert('Pilih file .txt terlebih dahulu');
            return;
        }
        if (!d) {
            alert('Masukkan nama file output');
            return;
        }

        var f = a.files[0];
        var g = new FileReader();

        g.onload = function(h) {
            var i = h.target.result.split('\n');
            var j = i.map(function(k) {
                return k.split(/\s+/);
            });

            var l = [];
            for (var m = 0; m < j[0].length; m++) {
                for (var n = 0; n < j.length; n++) {
                    if (j[n][m] !== undefined && j[n][m] !== '') {
                        l.push(j[n][m]);
                    }
                }
            }

            var o = l.join('\n');

            b.textContent = o;
            b.style.display = 'block';

            var p = new Blob([o], { type: 'text/plain' });
            var q = URL.createObjectURL(p);
            c.href = q;
            c.download = d;
            c.textContent = 'Download File Gabungan';

            e.textContent = 'Sembunyikan Hasil';
        };

        g.readAsText(f);
    }

    function tO() {
        var a = document.getElementById('output');
        var b = document.getElementById('toggleOutput');

        if (a.style.display === 'none') {
            a.style.display = 'block';
            b.textContent = 'Sembunyikan Hasil';
        } else {
            a.style.display = 'none';
            b.textContent = 'Tampilkan Hasil';
        }
    }

    window.processFile = pF;
    window.toggleOutput = tO;
})();
