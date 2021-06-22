/*!
 * Aksun
 * (c) 2021 Rizki Nugraha <nugrha07rizki@gmail.com>
 * GNU Public Lisence
 */

'use strict';

let UNISUNDA = new Array();

// panungtung
UNISUNDA['+ng'] = '\u1B80';
UNISUNDA['+r'] = '\u1B81';
UNISUNDA['+h'] = '\u1B82';
UNISUNDA['+O'] = '\u1BAA';
// vokal mandiri
UNISUNDA['A'] = '\u1B83';
UNISUNDA['I'] = '\u1B84';
UNISUNDA['U'] = '\u1B85';
//'É'] = '\u1B86';
UNISUNDA['\u00C9'] = '\u1B86';
UNISUNDA['O'] = '\u1B87';
UNISUNDA['E'] = '\u1B88';
UNISUNDA['EU'] = '\u1B89';
// konsonan ngalagena
UNISUNDA['k'] = '\u1B8A';
UNISUNDA['q'] = '\u1B8B';
UNISUNDA['g'] = '\u1B8C';
UNISUNDA['ng'] = '\u1B8D';
UNISUNDA['c'] = '\u1B8E';
UNISUNDA['j'] = '\u1B8F';
UNISUNDA['z'] = '\u1B90';
UNISUNDA['ny'] = '\u1B91';
UNISUNDA['t'] = '\u1B92';
UNISUNDA['d'] = '\u1B93';
UNISUNDA['n'] = '\u1B94';
UNISUNDA['p'] = '\u1B95';
UNISUNDA['f'] = '\u1B96';
UNISUNDA['v'] = '\u1B97';
UNISUNDA['b'] = '\u1B98';
UNISUNDA['m'] = '\u1B99';
UNISUNDA['y'] = '\u1B9A';
UNISUNDA['r'] = '\u1B9B';
UNISUNDA['l'] = '\u1B9C';
UNISUNDA['w'] = '\u1B9D';
UNISUNDA['s'] = '\u1B9E';
UNISUNDA['x'] = '\u1B9F';
UNISUNDA['h'] = '\u1BA0';
UNISUNDA['kh'] = '\u1BAE';
UNISUNDA['sy'] = '\u1BAF';
// konsonan sisip
UNISUNDA['+ya'] = '\u1BA1';
UNISUNDA['+ra'] = '\u1BA2';
UNISUNDA['+la'] = '\u1BA3';
// suara vokal
UNISUNDA['a'] = '';
UNISUNDA['i'] = '\u1BA4';
UNISUNDA['u'] = '\u1BA5';
//'é'] = '\u1BA6';
UNISUNDA['\u00E9'] = '\u1BA6';
UNISUNDA['o'] = '\u1BA7';
UNISUNDA['e'] = '\u1BA8';
UNISUNDA['eu'] = '\u1BA9';
// angka
UNISUNDA['0'] = '\u1BB0';
UNISUNDA['1'] = '\u1BB1';
UNISUNDA['2'] = '\u1BB2';
UNISUNDA['3'] = '\u1BB3';
UNISUNDA['4'] = '\u1BB4';
UNISUNDA['5'] = '\u1BB5';
UNISUNDA['6'] = '\u1BB6';
UNISUNDA['7'] = '\u1BB7';
UNISUNDA['8'] = '\u1BB8';
UNISUNDA['9'] = '\u1BB9';

function sundaahir (huruf)
{
	var retval = ''

	if (huruf == 'h' || huruf == 'r' || huruf == 'ng') {
		retval = UNISUNDA['+' + huruf]
	} else {
		retval = UNISUNDA[huruf] + UNISUNDA['+O']
	}

	return retval
}

let PAT_V     ='1';
let PAT_VK    ='2';
let PAT_KV    ='3';
let PAT_KVK   ='4';
let PAT_KRV   ='5';
let PAT_KRVK  ='6';

function converter(iStr)
{
    iStr = iStr.toLowerCase()

    var iLength = iStr.length
    var idx = 0
    // var jump = 0

    var tStr = ''
    var oStr = ''
    var r
    var silaba
    var suku
    var polasuku = '0'

    // Pola V, VK, K, KV, KVK, KRV, KRVK:
    var KONS = 'kh|sy|[b-df-hj-mp-tv-z]|ng|ny|n'
    var VOK  = "[aiuo\u00E9]|eu|e"
    //VOK  = '[aiuoé]|eu|e'
    var REP  = '[yrl]'
    var SILABA = '^'
    SILABA += '('+KONS+')?'             // group(1), K
    SILABA += '('+REP+')?'              // group(2), R
    SILABA += '('+VOK+')'               // group(3), V
    SILABA += '('+KONS+')?'              // group(4), K
    SILABA += '('+VOK+'|'+REP+')?'       // group(5), V|R
    let KONSONAN = '^('+KONS+')'
    var DIGIT = '^([0-9]+)'

    while (idx < iLength) {
        suku = ''
        r = iStr.match(SILABA)
        if (r != null) {
            // cari pola:
            if (r[1] != undefined) {
                if (r[4] != undefined) {
                    if (r[2] != undefined) {
                        if (r[5] != undefined) {
                            polasuku = PAT_KRV
                        } else {
                            polasuku = PAT_KRVK
                        }
                    } else {
                        if (r[5] != undefined) {
                            polasuku = PAT_KV
                        } else {
                            polasuku = PAT_KVK
                        }
                    }
                } else {
                    if (r[2] != undefined) {
                        polasuku = PAT_KRV
                    } else {
                        polasuku = PAT_KV
                    }
                }
            } else {
                if (r[4] != undefined) {
                    if (r[5] != undefined) {
                        polasuku = PAT_V
                    } else {
                        polasuku = PAT_VK
                    }
                } else {
                    polasuku = PAT_V
                }
            }

            // bentuk:
            if (polasuku == PAT_KRVK) {
                suku = r[1] + r[2] + r[3] + r[4]
                silaba  = UNISUNDA[r[1]]
                silaba += UNISUNDA['+' + r[2] + 'a']
                silaba += UNISUNDA[r[3]]
                silaba += sundaahir(r[4])
            } else if (polasuku == PAT_KRV) {
                suku = r[1] + r[2] + r[3]
                silaba  = UNISUNDA[r[1]]
                silaba += UNISUNDA['+' + r[2] + 'a']
                silaba += UNISUNDA[r[3]]
            } else if (polasuku == PAT_KVK) {
                suku = r[1] + r[3] + r[4]
                silaba  = UNISUNDA[r[1]]
                silaba += UNISUNDA[r[3]]
                silaba += sundaahir(r[4])
            } else if (polasuku == PAT_KV) {
                suku = r[1] + r[3]
                silaba  = UNISUNDA[r[1]]
                silaba += UNISUNDA[r[3]]
            } else if (polasuku == PAT_VK) {
                suku = r[3] + r[4]
                silaba  = UNISUNDA[r[3].toUpperCase()]
                silaba += sundaahir(r[4])
            } else {
                suku = r[3]
                silaba = UNISUNDA[suku.toUpperCase()]
            } // end if
            oStr += silaba //+ ':'
            tStr += suku + '(' + polasuku + '):'
        } else {
            r = iStr.match(KONSONAN)
            if (r != null) {
                suku   = r[1]
                silaba = sundaahir(suku)
                oStr += silaba
                tStr += suku + ";"
            } else {
                r = iStr.match(DIGIT)
                if (r != null) {
                    silaba = '|'
                    suku = r[1]
                    l = suku.length
                    i = 0
                    while (i<l) {
                        silaba += UNISUNDA[suku.substr(i,1)]
                        i += 1
                    } //end while
                    silaba += '|'
                    oStr += silaba
                } else {
                    suku = iStr.substr(0,1)
                    silaba = suku
                    oStr += suku
                }
                //end if
                tStr += suku + '(?)'
            } // end if
        }// end if
        iStr = iStr.substr(suku.length)
        idx += suku.length

    }// end while

    //return tStr + '&&' + oStr
    return oStr
    //return tStr
}

module.exports = {
	converter
}
