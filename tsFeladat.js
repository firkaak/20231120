console.log("helloWorld");
function osszesOszto(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }
    return result;
}
;
function parosDarab(arr) {
    //   let resultNum : number = 0;
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter += 1;
        }
    }
    return counter;
}
;
function fuggvenyhivasPalindrom(pali) {
    var palistr = pali();
    var revpali = palistr.split("").reverse().join("");
    ;
    console.log(palistr);
    console.log(revpali);
    return (revpali === palistr);
}
