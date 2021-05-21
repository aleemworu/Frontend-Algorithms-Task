Git init

function  convertFahrToCelsuis(f); {
    let inputtype = Object.prototype.toString.call(f);

        
    if  (inputtype == '[object Number]' || (inputtype == '[object String]' && !isNaN(f)) && f != "") {

                 return  ((f - 32) *  5 / 9).toFixed(4);         } else {

             return  `${JSON.stringify(f)} is not valid number but a/an ${inputtype.substring(7, inputtype.length - 1)}`;         }
}



function checkYuGiOh(n) {
    var arr = [];

    // if input is not a number
    if (isNaN(n)) {
        return `${n} is not a valid number.`;
    }
    //if input is a negative number
    if (!(parseInt(n) > 0)) {
        return `${n} is a negative number.`;
    }

    for (let i = 1; i <= n; i++) {
        let lres = [];

        if (i % 5 === 0) {
            lres.push('yu');
        }

        if (i % 3 === 0) {
            lres.push('gi');
        }

        if (i % 2 === 0) {
            lres.push('oh');
        }

        if (lres.length > 0)
            arr.push(lres.join("-"));
        else
            arr.push(i);
    }

    return arr;
}