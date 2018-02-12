var n = Number(prompt('Enter natural number N(0<N<=20)'));
var pyramid_str = '';

if (!isNaN(n) && (n > 0 && n <= 20) && (n % 1 === 0)) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < (n + i); j++)  {
            if (j < (n-i-1)) {
                pyramid_str+= '   ';
            } else {
                pyramid_str+= '[~]';
            }
        }
        pyramid_str+= '\n';
    }
    console.log(pyramid_str);
} else {
    console.log('Incorrect data!');
}
