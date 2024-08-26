(function() {
    var _0x2e8b = [
        'users', 'getItem', 'setItem', 'stringify', 'parse', 'admin', 'anonymous',
        'password', 'expires', 'value', 'getElementById', 'textContent', 'style',
        'display', 'block', 'none', 'Akun ini telah kadaluarsa.', 'Password salah.',
        'Username tidak ditemukan.', 'Date', 'now', 'href', 'location', 'admin.html',
        'main.html'
    ];

    function _0x1a2c(_0x23b9, _0x1a2b) {
        return _0x2e8b[_0x23b9];
    }

    if (!localStorage[_0x1a2c(1)](_0x1a2c(0))) {
        localStorage[_0x1a2c(2)](_0x1a2c(0), JSON[_0x1a2c(3)]({
            [_0x1a2c(4)]: { [_0x1a2c(5)]: 'admin', [_0x1a2c(6)]: null },
            [_0x1a2c(7)]: { [_0x1a2c(5)]: 'anonymous', [_0x1a2c(6)]: null }
        }));
    }

    function _0x1a2c() {
        var _0x3b29 = document[_0x1a2c(8)]('username')[_0x1a2c(9)];
        var _0x2f7e = document[_0x1a2c(8)]('password')[_0x1a2c(9)];
        var _0x5c76 = document[_0x1a2c(8)]('loginError');
        
        var _0x5a8b = JSON[_0x1a2c(4)](localStorage[_0x1a2c(1)](_0x1a2c(0)));
        var _0x3d9e = _0x5a8b[_0x3b29];
        
        if (_0x3d9e) {
            var _0x3e9d = _0x3d9e[_0x1a2c(6)];
            var _0x5b0d = new Date();

            if (_0x3e9d && new Date(_0x3e9d) < _0x5b0d) {
                _0x5c76[_0x1a2c(9)] = _0x1a2c(10);
                _0x5c76[_0x1a2c(11)].display = _0x1a2c(12);
                return;
            }

            if (_0x3d9e[_0x1a2c(5)] === _0x2f7e) {
                window[_0x1a2c(13)][_0x1a2c(14)] = _0x1a2c(15);
            } else {
                _0x5c76[_0x1a2c(9)] = _0x1a2c(16);
                _0x5c76[_0x1a2c(11)].display = _0x1a2c(12);
            }
        } else {
            _0x5c76[_0x1a2c(9)] = _0x1a2c(16);
            _0x5c76[_0x1a2c(11)].display = _0x1a2c(12);
        }
    }

    window['login'] = _0x1a2c;
})();
