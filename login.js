(function() {
    var _0x1c2a = ['users', 'admin', 'anonymous', 'password', 'expires', 'getItem', 'setItem', 'JSON', 'parse', 'stringify', 'value', 'getElementById', 'textContent', 'style', 'display', 'block', 'none', 'Akun ini telah kadaluarsa.', 'Password salah.', 'Username tidak ditemukan.', 'href', 'window', 'location', 'admin.html', 'main.html', 'Date', 'new', 'if', 'else', 'return', 'alert', 'function', 'loginError', 'currentDate', 'now', 'parseInt', 'console', 'log', 'alert', 'empty', 'split', 'join'];
    
    function _0x1b25(_0x2e9c, _0x3b18) {
        return _0x1c2a[_0x2e9c];
    }
    
    function _0x12c0() {
        if (!localStorage[_0x1b25(0)](_0x1b25(1))) {
            localStorage[_0x1b25(2)](_0x1b25(1), JSON[_0x1b25(3)]({
                [_0x1b25(4)]: { [_0x1b25(5)]: _0x1b25(6), [_0x1b25(7)]: null },
                [_0x1b25(8)]: { [_0x1b25(5)]: _0x1b25(9), [_0x1b25(7)]: null }
            }));
        }
    }

    function _0x1dc4() {
        var _0x41d6 = document[_0x1b25(10)](_0x1b25(11))[_0x1b25(12)];
        var _0x54e2 = document[_0x1b25(10)](_0x1b25(13))[_0x1b25(12)];
        var _0x5d2a = document[_0x1b25(10)](_0x1b25(14));

        var _0x31f0 = JSON[_0x1b25(15)](localStorage[_0x1b25(0)](_0x1b25(1)));

        if (_0x31f0[_0x41d6]) {
            var _0x5b5d = _0x31f0[_0x41d6][_0x1b25(7)];
            var _0x29c5 = new Date();

            if (_0x5b5d && new Date(_0x5b5d) < _0x29c5) {
                _0x5d2a[_0x1b25(12)] = _0x1b25(16);
                _0x5d2a[_0x1b25(17)][_0x1b25(18)] = _0x1b25(19);
                return;
            }

            if (_0x31f0[_0x41d6][_0x1b25(5)] === _0x54e2) {
                if (_0x41d6 === _0x1b25(4)) {
                    window[_0x1b25(20)][_0x1b25(21)] = _0x1b25(22);
                } else {
                    window[_0x1b25(20)][_0x1b25(21)] = _0x1b25(23);
                }
            } else {
                _0x5d2a[_0x1b25(12)] = _0x1b25(24);
                _0x5d2a[_0x1b25(17)][_0x1b25(18)] = _0x1b25(25);
            }
        } else {
            _0x5d2a[_0x1b25(12)] = _0x1b25(24);
            _0x5d2a[_0x1b25(17)][_0x1b25(18)] = _0x1b25(26);
        }
    }

    _0x12c0();
    window[_0x1b25(27)] = _0x1dc4;
})();
