(function() {
    function _0x4d0a(_0x10d3a0, _0x1fbe29) {
        const _0x5750 = _0x1fbe29 - 0x0;
        return _0x10d3a0[_0x5750];
    }
    const _0x55e3 = ['display', 'style', 'block', 'textContent', 'fileInput', 'output', 'downloadLink', 'outputFileName', 'value', 'alert', 'length', 'files', 'readAsText', 'text/plain', 'createObjectURL', 'Blob', 'href', 'download', 'Sembunyikan Hasil', 'Tampilkan Hasil', 'none', 'display', 'addEventListener', 'DOMContentLoaded', 'loadUserList'];

    function _0x5c4b(_0x5cc19f) {
        const _0x347a89 = document[_0x55e3[4]];
        const _0x182e7b = document[_0x55e3[5]];
        const _0x1f428b = document[_0x55e3[6]];
        const _0x2d5ac5 = document[_0x55e3[7]][_0x55e3[8]];
        const _0x40743b = document[_0x55e3[9]];

        if (_0x347a89[_0x55e3[10]] === 0x0) {
            window[_0x55e3[11]]('Pilih file .txt terlebih dahulu');
            return;
        }
        if (!_0x2d5ac5) {
            window[_0x55e3[11]]('Masukkan nama file output');
            return;
        }

        const _0x3ecb4f = _0x347a89[_0x55e3[12]][0x0];
        const _0x13e1ae = new FileReader();

        _0x13e1ae[_0x55e3[14]] = function(_0x2687b2) {
            const _0x21e930 = _0x2687b2[_0x55e3[15]]['split']('\n');
            let _0x250e42 = _0x21e930[_0x55e3[16]](function(_0x168e4d) {
                return _0x168e4d['split'](/\s+/);
            });

            let _0x2b9b2a = [];
            for (let _0x19112e = 0x0; _0x19112e < _0x250e42[0x0][_0x55e3[17]]; _0x19112e++) {
                for (let _0x2936d0 = 0x0; _0x2936d0 < _0x250e42[_0x55e3[17]]; _0x2936d0++) {
                    if (_0x250e42[_0x2936d0][_0x19112e] !== undefined && _0x250e42[_0x2936d0][_0x19112e] !== '') {
                        _0x2b9b2a['push'](_0x250e42[_0x2936d0][_0x19112e]);
                    }
                }
            }

            const _0x3e34a5 = _0x2b9b2a['join']('\n');

            _0x182e7b[_0x55e3[18]] = _0x3e34a5;
            _0x182e7b[_0x55e3[19]] = _0x55e3[20];

            const _0x5e855f = new Blob([_0x3e34a5], { type: _0x55e3[21] });
            const _0x5b3e5f = URL[_0x55e3[22]](_0x5e855f);
            _0x1f428b[_0x55e3[23]] = _0x5b3e5f;
            _0x1f428b[_0x55e3[24]] = _0x2d5ac5;
            _0x1f428b[_0x55e3[25]] = _0x55e3[26];

            _0x40743b[_0x55e3[18]] = _0x55e3[27];
        };

        _0x13e1ae[_0x55e3[28]](_0x3ecb4f);
    }

    function _0x1b0f() {
        const _0x3096f1 = document[_0x55e3[5]];
        const _0x2b06e2 = document[_0x55e3[29]];

        if (_0x3096f1[_0x55e3[30]] === _0x55e3[31]) {
            _0x3096f1[_0x55e3[19]] = _0x55e3[20];
            _0x2b06e2[_0x55e3[18]] = _0x55e3[27];
        } else {
            _0x3096f1[_0x55e3[19]] = _0x55e3[31];
            _0x2b06e2[_0x55e3[18]] = _0x55e3[32];
        }
    }

    document[_0x55e3[33]](_0x55e3[34], function() {
        _0x5c4b();
        loadUserList();
    });

    window[_0x55e3[35]] = _0x5c4b;
    window[_0x55e3[36]] = _0x1b0f;
})();
