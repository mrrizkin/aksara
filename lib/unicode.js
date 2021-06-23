'use strict'

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
// UNISUNDA['É']   = '\u1B86';
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

let SUNDAUNI = new Array()

// konsonan ngalagena
SUNDAUNI['\u1B8A'] = 'k';
SUNDAUNI['\u1B8B'] = 'q';
SUNDAUNI['\u1B8C'] = 'g';
SUNDAUNI['\u1B8D'] = 'ng';
SUNDAUNI['\u1B8E'] = 'c';
SUNDAUNI['\u1B8F'] = 'j';
SUNDAUNI['\u1B90'] = 'z';
SUNDAUNI['\u1B91'] = 'ny';
SUNDAUNI['\u1B92'] = 't';
SUNDAUNI['\u1B93'] = 'd';
SUNDAUNI['\u1B94'] = 'n';
SUNDAUNI['\u1B95'] = 'p';
SUNDAUNI['\u1B96'] = 'f';
SUNDAUNI['\u1B97'] = 'v';
SUNDAUNI['\u1B98'] = 'b';
SUNDAUNI['\u1B99'] = 'm';
SUNDAUNI['\u1B9A'] = 'y';
SUNDAUNI['\u1B9B'] = 'r';
SUNDAUNI['\u1B9C'] = 'l';
SUNDAUNI['\u1B9D'] = 'w';
SUNDAUNI['\u1B9E'] = 's';
SUNDAUNI['\u1B9F'] = 'x';
SUNDAUNI['\u1BA0'] = 'h';
SUNDAUNI['\u1BAE'] = 'kh';
SUNDAUNI['\u1BAF'] = 'sy';

// sora vokal
SUNDAUNI['\u1BA4'] = 'i';
SUNDAUNI['\u1BA5'] = 'u';
// u'\u1BA6'] =
SUNDAUNI['\u1BA6'] = '\u00E9';
SUNDAUNI['\u1BA7'] = 'o';
SUNDAUNI['\u1BA8'] = 'e';
SUNDAUNI['\u1BA9'] = 'eu';
SUNDAUNI['\u1BAA'] = '';

// vokal mandiri
SUNDAUNI['\u1B83'] = 'a';
SUNDAUNI['\u1B84'] = 'i';
SUNDAUNI['\u1B85'] = 'u';
// u'\u1B86'] =        'É';
SUNDAUNI['\u1B86'] = '\u00E9';
SUNDAUNI['\u1B87'] = 'o';
SUNDAUNI['\u1B88'] = 'e';
SUNDAUNI['\u1B89'] = 'eu';

// konsonan sisip
SUNDAUNI['\u1BA1'] = 'y';
SUNDAUNI['\u1BA2'] = 'r';
SUNDAUNI['\u1BA3'] = 'l';

// panungtung
SUNDAUNI['\u1B80'] = 'ng';
SUNDAUNI['\u1B81'] = 'r';
SUNDAUNI['\u1B82'] = 'h';

// angka
SUNDAUNI['\u1BB0'] = '0';
SUNDAUNI['\u1BB1'] = '1';
SUNDAUNI['\u1BB2'] = '2';
SUNDAUNI['\u1BB3'] = '3';
SUNDAUNI['\u1BB4'] = '4';
SUNDAUNI['\u1BB5'] = '5';
SUNDAUNI['\u1BB6'] = '6';
SUNDAUNI['\u1BB7'] = '7';
SUNDAUNI['\u1BB8'] = '8';
SUNDAUNI['\u1BB9'] = '9';

module.exports = {
	UNISUNDA,
	SUNDAUNI
}
