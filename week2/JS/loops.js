var start = 1;
var end = 5;

var i = 2;

for (; i <= 10; i = i + 2) {

    console.log(i);

}

var sum = 0;

for (number = 1; number <= 100; number++) {
    sum = sum + number;

}
console.log(sum);

var pun = '';

for (var i = 0; i < 100; i++) {
    pun += 'I will never..\t';
}
console.log(pun);

var res = '\n';

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        res += '*\t';
    }
    res += '\n';
}

console.log(res);