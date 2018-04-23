//1. zadatak
for (var i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

//2.zadatak
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);

//3.zadatak
var a = [1, 2, 3, 4, 5];
var sum = 0;
var prod = 1;

for (var i = 0; i < a.length; i++) {
    sum = sum + a[i];
    prod = prod * a[i];
}
console.log(sum);
console.log(prod);

//4. zadatak
var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var niz = '';
for (var i = 0; i < x.length; i++) {
    niz = niz + x[i];

}
console.log(niz);

//5. zadatak
var a = [[1, 2, 1, 24], [8, 11, 12, 9, 4], [7, 0, 7, 27]];

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}

//6. zadatak
var sum = 0;

for (var i = 1; i <= 20; i++) {
    sum += i * i;
}
console.log(sum);

// 7. zadatak

var a = [80, 77, 88, 95, 68];
var average;
var sum = 0;
for (var i = 0; i < a.length; i++) {
    sum += a[i];
}
average = sum / a.length;
console.log(average);


/* for (i = 0; i < a.length; i++) {
    switch (a[i]) {
        case (a[i] < (0.6 * average)):
            console.log('Ucenik je dobio ocenu F');
            break;
        case (a[i] < (0.7 * average)):
            console.log('Ucenik je dobio ocenu D');
            break;
        case (a[i] < (0.8 * average)):
            console.log('Ucenik je dobio ocenu C');
            break;
        case (a[i] < (0.9 * average)):
            console.log('Ucenik je dobio ocenu B');
            break;
        case (a[i] < (1 * average)):
            console.log('Ucenik je dobio ocenu A');
            break;
        default:
            console.log('Ucenik je dobio ocenu A++');
            break;
    }
} */
/*
cond1 = (a[i] < (0.6 * average));
cond2 = ((a[i] < (0.7 * average)) && (a[i] > (0.6 * average)));
cond3 = ((a[i] < (0.8 * average)) && (a[i] > (0.7 * average)));
cond4 = ((a[i] < (0.9 * average)) && (a[i] > (0.8 * average)));
cond5 = ((a[i] < average) && (a[i] > (0.9 * average))); */

for (i = 0; i < a.length; i++) {
    cond1 = (a[i] < (0.6 * average));
    cond2 = ((a[i] < (0.7 * average)) && (a[i] > (0.6 * average)));
    cond3 = ((a[i] < (0.8 * average)) && (a[i] > (0.7 * average)));
    cond4 = ((a[i] < (0.9 * average)) && (a[i] > (0.8 * average)));
    cond5 = ((a[i] < average) && (a[i] > (0.9 * average)));
    cond1 ? console.log('Ucenik je dobio ocenu F') : (cond2 ? console.log('Ucenik je dobio ocenu D') : (cond3 ? console.log('Ucenik je dobio ocenu C') : cond4 ? console.log('Ucenik je dobio ocenu B') : cond5 ? console.log('Ucenik je dobio ocenu A') : console.log('Ucenik je dobio ocenu A++')));
}

//* 8. zadatak
/*
for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 !== 0)) {
        console.log('Fizz');
    }
    if ((i % 5 == 0) && (i % 3 !== 0)) {
        console.log('Buzz');
    }
    if ((i % 3 !== 0) && (i % 5 !== 0)) {
        console.log(i);
    }

} */

for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 !== 0)) {
        console.log('Fizz');
    }
    if ((i % 5 == 0) && (i % 3 !== 0)) {
        console.log('Buzz');
    }
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    }
    if ((i % 3 !== 0) && (i % 5 !== 0)) {
        console.log(i);
    }
}
