(function(){
    function _0x3a0c(_0x293f,_0x303e){return _0x293f[_0x303e];}
    const _0x262a=['getElementById','value','files','length','shift','push','textContent','display','block','none','createObjectURL','download','href','text','split','FileReader','alert','readAsText','join','map','forEach','push','onclick'];(function(_0x4517,_0x3e8a){while(--_0x3e8a){_0x4517['push'](_0x4517['shift']());}}(_0x262a,0x1b3));function processFile(){const _0x2e2d=document[_0x3a0c(0x0)]('fileInput');const _0x349d=document[_0x3a0c(0x0)]('output');const _0x18ef=document[_0x3a0c(0x0)]('downloadLink');const _0x5c89=document[_0x3a0c(0x0)]('outputFileName')[_0x3a0c(0x1)];const _0x7e1e=document[_0x3a0c(0x0)]('toggleOutput');if(_0x2e2d[_0x3a0c(0x2)][_0x3a0c(0x3)]===0){alert('Pilih file .txt terlebih dahulu');return;}if(!_0x5c89){alert('Masukkan nama file output');return;}const _0x2b8f=_0x2e2d[_0x3a0c(0x2)][0x0];const _0x1b5d=new FileReader();_0x1b5d[_0x3a0c(0x4)](_0x2b8f);_0x1b5d[_0x3a0c(0x5)]=function(_0x1d4b){const _0x258b=_0x1d4b['target']['result'][_0x3a0c(0x6)]('\n');const _0x2042=_0x258b[_0x3a0c(0x7)](_0x33ea=>_0x33ea[_0x3a0c(0x8)](/\s+/));let _0x2d6b=[];_0x2042[_0x3a0c(0x9)](_0x28aa=>{for(let _0x6b34=0;_0x6b34<_0x28aa[_0x3a0c(0x2)];_0x6b34++){if(_0x28aa[_0x6b34]){_0x2d6b[_0x3a0c(0xa)](_0x28aa[_0x6b34]);}}});const _0x4a93=_0x2d6b[_0x3a0c(0xb)]('\n');_0x349d[_0x3a0c(0xc)]=_0x4a93;_0x349d[_0x3a0c(0x9)]='block';const _0x3d90=new Blob([_0x4a93],{type:'text/plain'});const _0x5e44=URL[_0x3a0c(0xd)](_0x3d90);_0x18ef[_0x3a0c(0xe)]=_0x5e44;_0x18ef[_0x3a0c(0xf)]=_0x5c89;_0x18ef[_0x3a0c(0x10)]=_0x262a[0x1c];_0x7e1e[_0x3a0c(0xc)]=_0x262a[0x12];};function toggleOutput(){const _0x5f07=document[_0x3a0c(0x0)]('output');const _0x4b8a=document[_0x3a0c(0x0)]('toggleOutput');if(_0x5f07[_0x3a0c(0x9)]==='none'){_0x5f07[_0x3a0c(0x9)]='block';_0x4b8a[_0x3a0c(0xc)]=_0x262a[0x12];}else{_0x5f07[_0x3a0c(0x9)]='none';_0x4b8a[_0x3a0c(0xc)]=_0x262a[0x13];}})();
