/*let js = "amazing";
if (js = "amazing ") alert("JavaScrip is fun !")
console.log(5 + 5 - 5);
console.log("Jonas");
console.log(23);

let firstname = "Saurabh";
console.log(firstname);

let javaScriptIsFun = 'true';
console.log(javaScriptIsFun);

console.log(typeof true);
javaScriptIsFun = 'Yes';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = '2022';
console.log(year);

const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);
console.log(ageJones * 2, ageJones / 2, 2 ** 3);

const firstName = 'Johns';
const lastName = 'Bru';
console.log(firstName + " " + lastName);


let x = 5 + 10;
x += 10;
console.log(x);

console.log(ageJones > ageSarah);

const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);
console.log(now - 1991 > now - 2018);
console.log((ageJones + ageSarah) / 2);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHighBMI = BMIMark > BMIJohn;
console.log(markHighBMI);
console.log(BMIJohn, BMIMark);

const firstName = 'Johns';
const job = 'teacher';
const birthYear = 1991;
const year = 2022;

const johns = "I'm " + firstName + ' , a ' + (year - birthYear)
    + ' years old ' + job + ' !';
console.log(johns);

const jonasNew = `I'm ${firstName}, a 
${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log('I am a student.\n\I am from Maharashtra');
console.log(`I am girl
I am from pune.`);

const age = 17;
if (age >= 18) {
    console.log('Saraha can start driving. ');
} else {
    const yearLeft = 18 - age;
    console.log('Saraha can not start drive. ' + 'Wait ' + yearLeft + ' more years.');
}

const birthY = 2999;
let century;
if (birthY <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
if (BMIJohn > BMIMark) {
    console.log(`Johns BMI index is ${BMIJohn}, which is more than BMI of Marks.`)
} else {
    console.log(`Marks BMI index is ${BMIMark}, which is more than BMI of Johns.`)

}

const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);
console.log(String(11), 11);
//type coecion  if string comes with number number is converted in string
console.log('I am ' + 28 + ' years old');
// - converts numberstring to number
console.log('10' - '5' + 2);

// falsy value null,'',undefined,NaN,0
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('johns'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Dont spend ist all.")
} else {
    console.log("You should get a job.")
}

const age = '18';
if (age == 18) {
    console.log('You are allowed to vote.');
}
if (age === 18) {
    console.log('You are allowed to vote.');
} else {
    console.log(12);
}

const favourite = prompt('What is your favourite number?');
if (favourite == 23) {
    console.log(favourite);
    console.log(typeof favourite);
} else {
    console.log('Number is other than 23');
}


const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
    console.log('Saraha should drive.');
} else {
    console.log('Someone else should drive.');
}

const scoreDolphin = (11 + 108 + 109) / 3;
const scoreKoalas = (11 + 110 + 110) / 3;
console.log(scoreDolphin, scoreKoalas);
if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
    console.log('Dolphins win trophy');
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
    console.log('Koalas win trophy');
} else if (scoreDolphin == scoreKoalas && scoreDolphin >= 100 && scoreKoalas >= 100) {
    console.log('Both wins trophy')
} else {
    console.log("Both looses trophy");
}
const day = 'wednesday';
switch (day) {
    case 'monday':
        console.log('Today is monday');
        console.log('Go to school');
        break;

    case 'tuseday':
        console.log('Today is tusday');
        console.log('Go to school');
        break;
    case 'wednesday':
    case 'thursday':

        console.log('Go to code');
        break;
    default:
        console.log("Not a valid day ")

}


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

const age = 23;
// age >= 18 ? console.log('I can drink wine') : ("I can not drink wine");
const drink = age >= 18 ? 'wine' : "water";
console.log(drink);

const bill = 430;
const tip = bill <= 300 && bill >= 50 ?
    bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, 
the tip was ${tip}, and the total value ${bill + tip}`);
*/