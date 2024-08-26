(function() {
    var _0x2b4c = [
        'users', 'admin', 'anonymous', 'password', 'expires', 'getItem', 'setItem',
        'JSON', 'parse', 'stringify', 'value', 'getElementById', 'textContent',
        'style', 'display', 'block', 'none', 'Akun ini telah kadaluarsa.',
        'Password salah.', 'Username tidak ditemukan.', 'href', 'window',
        'location', 'admin.html', 'main.html', 'Date', 'new', 'if', 'else',
        'return'
    ];
    
    function _0x1b1e(_0x1234, _0x5678) {
        return _0x2b4c[_0x1234];
    }
    
    function _0x3d3a() {
        if (!localStorage[_0x1b1e(0)](_0x1b1e(1))) {
            localStorage[_0x1b1e(2)](_0x1b1e(1), JSON[_0x1b1e(3)]({
                [_0x1b1e(4)]: { [_0x1b1e(5)]: 'admin', [_0x1b1e(6)]: null },
                [_0x1b1e(7)]: { [_0x1b1e(5)]: 'anonymous', [_0x1b1e(6)]: null }
            }));
        }
    }

    function _0x5b7c() {
        var _0x72bc = document[_0x1b1e(8)]('username')[_0x1b1e(9)];
        var _0x8cfa = document[_0x1b1e(8)]('password')[_0x1b1e(9)];
        var _0x4cda = document[_0x1b1e(8)]('loginError');

        var _0x4bfa = JSON[_0x1b1e(10)](localStorage[_0x1b1e(0)](_0x1b1e(1)));

        if (_0x4bfa[_0x72bc]) {
            var _0x6d3e = _0x4bfa[_0x72bc][_0x1b1e(6)];
            var _0x72b5 = new Date();

            if (_0x6d3e && new Date(_0x6d3e) < _0x72b5) {
                _0x4cda[_0x1b1e(9)] = _0x1b1e(11);
                _0x4cda[_0x1b1e(12)].display = 'block';
                return;
            }

            if (_0x4bfa[_0x72bc][_0x1b1e(5)] === _0x8cfa) {
                if (_0x72bc === _0x1b1e(4)) {
                    window[_0x1b1e(13)][_0x1b1e(14)] = _0x1b1e(15);
                } else {
                    window[_0x1b1e(13)][_0x1b1e(14)] = _0x1b1e(16);
                }
            } else {
                _0x4cda[_0x1b1e(9)] = _0x1b1e(17);
                _0x4cda[_0x1b1e(12)].display = 'block';
            }
        } else {
            _0x4cda[_0x1b1e(9)] = _0x1b1e(17);
            _0x4cda[_0x1b1e(12)].display = 'block';
        }
    }

    _0x3d3a();
    window['login'] = _0x5b7c;
})();
