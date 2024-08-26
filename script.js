(function(){
    const _0x1a2b = ['getElementById', 'value', 'files', 'length', 'push', 'textContent', 'display', 'block', 'none', 'createObjectURL', 'download', 'href', 'text', 'split', 'FileReader', 'alert', 'readAsText', 'join', 'map'];
    function _0x3a0c(_0x293f, _0x303e) { return _0x293f[_0x303e]; }
    
    function processFile() {
        const _0x2e2d = document[_0x3a0c(0)]('fileInput');
        const _0x349d = document[_0x3a0c(0)]('output');
        const _0x18ef = document[_0x3a0c(0)]('downloadLink');
        const _0x5c89 = document[_0x3a0c(0)]('outputFileName')[_0x3a0c(1)];
        const _0x7e1e = document[_0x3a0c(0)]('toggleOutput');

        if (_0x2e2d[_0x3a0c(2)][_0x3a0c(3)] === 0) {
            alert('Pilih file .txt terlebih dahulu');
            return;
        }
        if (!_0x5c89) {
            alert('Masukkan nama file output');
            return;
        }

        const _0x2b8f = _0x2e2d[_0x3a0c(2)][0];
        const _0x1b5d = new FileReader();
        _0x1b5d[_0x3a0c(4)] = function(e) {
            const _0x258b = e.target.result[_0x3a0c(5)]('\n');
            const _0x2042 = _0x258b[_0x3a0c(6)](line => line[_0x3a0c(5)](/\s+/));

            let _0x2d6b = [];
            _0x2042.forEach(row => {
                for (let col = 0; col < row.length; col++) {
                    if (row[col]) {
                        _0x2d6b.push(row[col]);
                    }
                }
            });

            const _0x4a93 = _0x2d6b.join('\n');

            _0x349d.textContent = _0x4a93;
            _0x349d.style.display = _0x1a2b[8];

            const _0x3d90 = new Blob([_0x4a93], { type: 'text/plain' });
            const _0x5e44 = URL[_0x1a2b[9]](_0x3d90);
            _0x18ef.href = _0x5e44;
            _0x18ef.download = _0x5c89;
            _0x18ef.textContent = 'Download File Gabungan';

            _0x7e1e.textContent = 'Sembunyikan Hasil';
        };
        _0x1b5d.readAsText(_0x2b8f);
    }

    function toggleOutput() {
        const _0x5f07 = document[_0x3a0c(0)]('output');
        const _0x4b8a = document[_0x3a0c(0)]('toggleOutput');

        if (_0x5f07.style.display === 'none') {
            _0x5f07.style.display = 'block';
            _0x4b8a.textContent = 'Sembunyikan Hasil';
        } else {
            _0x5f07.style.display = 'none';
            _0x4b8a.textContent = 'Tampilkan Hasil';
        }
    }

    window.processFile = processFile;
    window.toggleOutput = toggleOutput;
})();
