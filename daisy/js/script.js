// function sheLovesMe() {
//     for (var i = 0; i < 25; i++) {
//         var love;
//         var ranNum = Math.floor(25 * Math.random());
//         if (ranNum % 2 == 0) {
//             love = 'She Loves Me' + '<br>';
//         } else love = 'She Loves Me Not' + '<br>';
//         document.write(love);
//     }
// }

function sheLovesMe(number) {
    for (var i = 0; i < number; i++) {
        var love;
        var ranNum = Math.floor(25 * Math.random());
        if (ranNum % 2 == 0) {
            love = 'She Loves Me' + "<br>"
        } else love = "She Loves Me Not" + "<br>";
        document.write(love);
    }
}
