(function(_0x2f5a,_0x59ea){const _0x3b80=function(_0x48da){while(--_0x48da){_0x2f5a['push'](_0x2f5a['shift']());}};_0x3b80(++_0x59ea);}(_0x1c5f,0x1b3));const _0x42f2=function(_0x5705,_0x239b){const _0x1e6f=_0x1c5f[_0x5705];return _0x1e6f;};function processFile(){const _0x1b59=document[_0x42f2(0x0)]('fileInput');const _0x3c11=document[_0x42f2(0x0)]('output');const _0x3ad2=document[_0x42f2(0x0)]('downloadLink');const _0x2200=document[_0x42f2(0x0)]('outputFileName')[_0x42f2(0x1)];const _0x2691=document[_0x42f2(0x0)]('toggleOutput');if(_0x1b59[_0x42f2(0x2)]===0){alert('Pilih file .txt terlebih dahulu');return;}if(!_0x2200){alert('Masukkan nama file output');return;}const _0x2040=_0x1b59[_0x42f2(0x2)][0];const _0x5a9a=new FileReader();_0x5a9a.onload=function(_0x37d4){const _0x3e8b=_0x37d4['target']['result'][_0x42f2(0x3)]('\n');let _0x4882=_0x3e8b[_0x42f2(0x4)](_0x27e3=>_0x27e3[_0x42f2(0x5)](/\s+/));let _0x12eb=[];for(let _0x10ef=0;_0x10ef<_0x4882[0x0][_0x42f2(0x2)];_0x10ef++){for(let _0x2f2a=0;_0x2f2a<_0x4882[_0x42f2(0x4)];_0x2f2a++){if(_0x4882[_0x2f2a][_0x10ef]!==undefined&&_0x4882[_0x2f2a][_0x10ef]!==''){_0x12eb[_0x42f2(0x6)](_0x4882[_0x2f2a][_0x10ef]);}}}const _0x5639=_0x12eb[_0x42f2(0x7)]('\n');_0x3c11[_0x42f2(0x8)]=_0x5639;_0x3c11[_0x42f2(0x9)]='block';const _0x368e=new Blob([_0x5639],{type:'text/plain'});const _0x20b8=URL[_0x42f2(0xa)](_0x368e);_0x3ad2[_0x42f2(0xb)]=_0x20b8;_0x3ad2[_0x42f2(0xc)]=_0x2200;_0x3ad2[_0x42f2(0x8)]='Download File Gabungan';_0x2691[_0x42f2(0x8)]='Sembunyikan Hasil';};_0x5a9a[_0x42f2(0xd)](_0x2040);}function toggleOutput(){const _0x2d2b=document[_0x42f2(0x0)]('output');const _0x379b=document[_0x42f2(0x0)]('toggleOutput');if(_0x2d2b[_0x42f2(0x9)]==='none'){_0x2d2b[_0x42f2(0x9)]='block';_0x379b[_0x42f2(0x8)]='Sembunyikan Hasil';}else{_0x2d2b[_0x42f2(0x9)]='none';_0x379b[_0x42f2(0x8)]='Tampilkan Hasil';}}
