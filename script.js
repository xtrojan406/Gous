(function() {
    const _0x4c4b = ['getElementById', 'value', 'files', 'length', 'push', 'textContent', 'display', 'block', 'none', 'createObjectURL', 'download', 'href', 'split', 'FileReader', 'alert', 'readAsText', 'join', 'map'];
    
    function _0x2e6f(_0x1a3f, _0x2c5e) { return _0x1a3f[_0x2c5e]; }

    function processFile() {
        const _0x2d88 = document[_0x2e6f(0)]('fileInput');
        const _0x2bb5 = document[_0x2e6f(0)]('output');
        const _0x1c0a = document[_0x2e6f(0)]('downloadLink');
        const _0x2e76 = document[_0x2e6f(0)]('outputFileName')[_0x2e6f(1)];
        const _0x2a4e = document[_0x2e6f(0)]('toggleOutput');

        if (_0x2d88[_0x2e6f(2)][_0x2e6f(3)] === 0) {
            alert('Pilih file .txt terlebih dahulu');
            return;
        }
        if (!_0x2e76) {
            alert('Masukkan nama file output');
            return;
        }

        const _0x2c5e = _0x2d88[_0x2e6f(2)][0];
        const _0x1c5b = new FileReader();
        _0x1c5b.onload = function(e) {
            const _0x2a23 = e.target.result[_0x2e6f(4)]('\n');
            const _0x2e6b = _0x2a23[_0x2e6f(5)](line => line[_0x2e6f(4)](/\s+/));

            let _0x2d69 = [];
            for (let _0x2d6b = 0; _0x2d6b < _0x2e6b[0].length; _0x2d6b++) {
                for (let _0x2bb5 = 0; _0x2bb5 < _0x2e6b.length; _0x2bb5++) {
                    if (_0x2e6b[_0x2bb5][_0x2d6b] !== undefined && _0x2e6b[_0x2bb5][_0x2d6b] !== '') {
                        _0x2d69[_0x2e6f(6)](_0x2e6b[_0x2bb5][_0x2d6b]);
                    }
                }
            }

            const _0x1b3c = _0x2d69[_0x2e6f(7)]('\n');

            _0x2bb5[_0x2e6f(8)] = _0x1b3c;
            _0x2bb5.style[_0x2e6f(9)] = 'block';

            const _0x2c2d = new Blob([_0x1b3c], { type: 'text/plain' });
            const _0x2a68 = URL[_0x2e6f(10)](_0x2c2d);
            _0x1c0a.href = _0x2a68;
            _0x1c0a[_0x2e6f(11)] = _0x2e76;
            _0x1c0a.textContent = 'Download File Gabungan';

            _0x2a4e.textContent = 'Sembunyikan Hasil';
        };
        _0x1c5b[_0x2e6f(12)](_0x2c5e);
    }

    function toggleOutput() {
        const _0x2a4e = document[_0x2e6f(0)]('output');
        const _0x1c5b = document[_0x2e6f(0)]('toggleOutput');

        if (_0x2a4e.style[_0x2e6f(9)] === 'none') {
            _0x2a4e.style[_0x2e6f(9)] = 'block';
            _0x1c5b.textContent = 'Sembunyikan Hasil';
        } else {
            _0x2a4e.style[_0x2e6f(9)] = 'none';
            _0x1c5b.textContent = 'Tampilkan Hasil';
        }
    }

    window.processFile = processFile;
    window.toggleOutput = toggleOutput;
})();
