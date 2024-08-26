(function() {
    function _0x4f2e(_0x535f, _0x4316) {
        const _0x5a1e = _0x4316 - 0x0;
        return _0x535f[_0x5a1e];
    }
    const _0x5e9f = ['getItem', 'setItem', 'users', 'admin', 'anonymous', 'password', 'expires', 'null', 'textContent', 'style', 'display', 'block', 'value', 'loginError', 'block', 'currentDate', 'Date', 'getItem', 'location', 'href', 'admin.html', 'main.html', 'Password salah.', 'Username tidak ditemukan.'];

    if (!localStorage[_0x5e9f[0]](_0x5e9f[2])) {
        localStorage[_0x5e9f[1]](_0x5e9f[2], JSON.stringify({
            [_0x5e9f[3]]: { [_0x5e9f[5]]: "admin", [_0x5e9f[6]]: _0x5e9f[7] },
            [_0x5e9f[4]]: { [_0x5e9f[5]]: "anonymous", [_0x5e9f[6]]: _0x5e9f[7] }
        }));
    }

    function _0x2c68() {
        const _0x3c4d = document.getElementById('username')[_0x5e9f[8]];
        const _0x3e44 = document.getElementById('password')[_0x5e9f[8]];
        const _0x379e = document.getElementById(_0x5e9f[9]);

        const _0x2a9f = JSON.parse(localStorage[_0x5e9f[0]](_0x5e9f[2]));

        if (_0x2a9f[_0x3c4d]) {
            const _0x4c5a = _0x2a9f[_0x3c4d][_0x5e9f[6]];
            const _0x29e7 = new Date();

            if (_0x4c5a && new Date(_0x4c5a) < _0x29e7) {
                _0x379e[_0x5e9f[10]] = 'Akun ini telah kadaluarsa.';
                _0x379e[_0x5e9f[11]][_0x5e9f[12]] = _0x5e9f[13];
                return;
            }

            if (_0x2a9f[_0x3c4d][_0x5e9f[5]] === _0x3e44) {
                if (_0x3c4d === _0x5e9f[3]) {
                    window[_0x5e9f[14]][_0x5e9f[15]] = _0x5e9f[16];
                } else {
                    window[_0x5e9f[14]][_0x5e9f[15]] = _0x5e9f[17];
                }
            } else {
                _0x379e[_0x5e9f[10]] = _0x5e9f[18];
                _0x379e[_0x5e9f[11]][_0x5e9f[12]] = _0x5e9f[13];
            }
        } else {
            _0x379e[_0x5e9f[10]] = _0x5e9f[19];
            _0x379e[_0x5e9f[11]][_0x5e9f[12]] = _0x5e9f[13];
        }
    }

    window[_0x5e9f[20]] = _0x2c68;
})();
