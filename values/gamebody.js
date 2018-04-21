// Concentration Memory Game with Images - Body Script
// copyright Stephen Chapman, 28th February 2006, 24th December 2009
// you may copy this script provided that you retain the copyright notice

document.write('<div align="center">');

document.write('<table cellpadding="0" cellspacing="0" border ="0">');

for (var a = 0; a <= 5; a++) {
    document.write('<tr>');
    for (var b = 0; b <= 4; b++) {
        document.write('<td align="center" class="blk" id = "t' + ((5 * a) + b) + '"></td>');
    } document.write('<\/tr>');
}

document.write('<\/table>');

document.write('<form name = "foot"> <input type="button" id="next" value="Next" onclick="window.start()"\/> <\/form>');

document.write('<\/div>');