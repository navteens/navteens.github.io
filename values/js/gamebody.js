
document.write('<div align="center">');

document.write('<table cellpadding="0" cellspacing="0" border ="0">');

gridWidth = 4;

// Create x grid of cards
for (var x = 0; x < gridWidth; x++) {
    document.write('<tr>');
    for (var y = 0; y < gridWidth; y++) {
        document.write('<td align="center" class="blk" id = "' + cards[x * gridWith + y] + '"></td>');
    }
    document.write('<\/tr>');
}

// Create x grid of cards
// for (var x = 0; x < gridWidth; x++) {
//     document.write('<tr>');
//     for (var y = 0; y < gridWidth; y++) {
//         document.write('<td align="center" class="blk" id = "' + selected[(gridWidth * x) + y] + '"></td>');
//     } document.write('<\/tr>');
// }


document.write('<\/table>');

document.write('<form name = "foot"> <input type="button" id="next" value="Next" onclick="window.start()"\/> <\/form>');

document.write('<\/div>');