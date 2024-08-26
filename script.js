(function(){
    var _0x1a2b = ['fileInput', 'output', 'downloadLink', 'outputFileName', 'toggleOutput', 'length', 'value', 'Pilih file .txt terlebih dahulu', 'Masukkan nama file output', 'result', 'split', '\n', 'map', 'split', /\s+/, 'undefined', '', 'push', 'join', 'text/plain', 'createObjectURL', 'Blob', 'href', 'download', 'Download File Gabungan', 'Sembunyikan Hasil', 'block', 'none', 'display', 'Tampilkan Hasil', 'textContent', 'onload', 'FileReader', 'files', 'alert', 'getElementById'];
    
    function _0x12a4(_0x4a36) {
        return _0x1a2b[_0x4a36];
    }
    
    function _0x29c4() {
        var _0x5797 = document[_0x12a4(0)](_0x12a4(0));
        var _0x42bd = document[_0x12a4(0)](_0x12a4(1));
        var _0x4732 = document[_0x12a4(0)](_0x12a4(2));
        var _0x3a61 = document[_0x12a4(0)](_0x12a4(3))[_0x12a4(4)];
        var _0x5f43 = document[_0x12a4(0)](_0x12a4(4));

        if (_0x5797[_0x12a4(5)] === 0) {
            alert(_0x12a4(6));
            return;
        }
        if (!_0x3a61) {
            alert(_0x12a4(7));
            return;
        }

        var _0x1d57 = _0x5797[_0x12a4(8)][0];
        var _0x3e65 = new FileReader();

        _0x3e65[_0x12a4(15)] = function(_0x3e5f) {
            var _0x420e = _0x3e5f[_0x12a4(16)][_0x12a4(17)](_0x12a4(18));
            var _0x338b = _0x420e[_0x12a4(19)](function(_0x59f6) {
                return _0x59f6[_0x12a4(20)](_0x12a4(21));
            });

            var _0x212f = [];
            for (var _0x4a88 = 0; _0x4a88 < _0x338b[0][_0x12a4(5)]; _0x4a88++) {
                for (var _0x39d2 = 0; _0x39d2 < _0x338b[_0x12a4(5)]; _0x39d2++) {
                    if (_0x338b[_0x39d2][_0x4a88] !== _0x12a4(22) && _0x338b[_0x39d2][_0x4a88] !== _0x12a4(23)) {
                        _0x212f[_0x12a4(24)](_0x338b[_0x39d2][_0x4a88]);
                    }
                }
            }

            var _0x1b53 = _0x212f[_0x12a4(25)](_0x12a4(18));

            _0x42bd[_0x12a4(26)] = _0x1b53;
            _0x42bd[_0x12a4(27)] = _0x12a4(28);

            var _0x25a2 = new Blob([_0x1b53], { type: _0x12a4(29) });
            var _0x4b32 = URL[_0x12a4(30)](_0x25a2);
            _0x4732[_0x12a4(31)] = _0x4b32;
            _0x4732[_0x12a4(32)] = _0x3a61;
            _0x4732[_0x12a4(33)] = _0x12a4(34);

            _0x5f43[_0x12a4(26)] = _0x12a4(35);
        };

        _0x3e65[_0x12a4(36)](_0x1d57);
    }

    function _0x6d5b() {
        var _0x339a = document[_0x12a4(0)](_0x12a4(1));
        var _0x596a = document[_0x12a4(0)](_0x12a4(4));

        if (_0x339a[_0x12a4(27)] === _0x12a4(22)) {
            _0x339a[_0x12a4(27)] = _0x12a4(28);
            _0x596a[_0x12a4(26)] = _0x12a4(35);
        } else {
            _0x339a[_0x12a4(27)] = _0x12a4(22);
            _0x596a[_0x12a4(26)] = _0x12a4(37);
        }
    }

    window[_0x12a4(38)] = _0x29c4;
    window[_0x12a4(39)] = _0x6d5b;
})();
