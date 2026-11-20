
console.log("===== SESSION 4: LOOPS & ITERATION =====");

// TASK 1: FOR LOOP

let fees = [1800, 2200, 1500, 2500, 1800, 3000, 1200, 2000];

let total = 0;

console.log("TASK 1: STUDENT FEES");

for (let i = 0; i < fees.length; i++) {

    console.log("Student " + (i + 1) + ": ₹" + fees[i]);

    total = total + fees[i];
}

console.log("Total Fees: ₹" + total);


// TASK 2: WHILE LOOP

console.log("TASK 2: YEARLY FEE INSTALMENTS");

let due = 16000;
let instalment = 3000;

while (due > 0) {

    due = Math.max(due - instalment, 0);

    console.log("Remaining Due: ₹" + due);
}


// TASK 3: DO...WHILE LOOP

console.log("TASK 3: PAYMENT RETRIES");

let attempt = 1;
let paymentSuccessAt = 3;

do {

    if (attempt === paymentSuccessAt) {
        console.log("Attempt " + attempt + ": paid");
        break;
    }
    else {
        console.log("Attempt " + attempt + ": failed");
    }

    attempt++;

} while (attempt <= 5);


// TASK 3: TEST WHEN PAYMENT NEVER SUCCEEDS

console.log("PAYMENT FAILURE TEST");

attempt = 1;
paymentSuccessAt = 7;

do {

    if (attempt === paymentSuccessAt) {
        console.log("Attempt " + attempt + ": paid");
        break;
    }
    else {
        console.log("Attempt " + attempt + ": failed");
    }

    attempt++;

} while (attempt <= 5);


// TASK 4: FOR...OF LOOP

console.log("TASK 4: FOR...OF LOOP");

for (let fee of fees) {

    if (fee < 1500) {
        continue;
    }

    console.log("Fee: ₹" + fee);
}


// TASK 4: FOREACH LOOP

console.log("TASK 4: FOREACH LOOP");

fees.forEach(function(fee) {

    if (fee < 1500) {
        return;
    }

    console.log("Fee: ₹" + fee);

});

console.log("===== ASSIGNMENT COMPLETED =====");
