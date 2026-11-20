
console.log("===== SESSION 3: OPERATORS & CONDITIONS =====");

// TASK 1: ARITHMETIC OPERATORS

let monthlyFee = 1800;
let months = 6;
let siblingDiscount = 10;
let lateDays = 4;
let lateFee = 50;

let grossFee = monthlyFee * months;
let discountAmount = grossFee * siblingDiscount / 100;
let totalLateFee = lateDays * lateFee;

let netPayable = grossFee - discountAmount + totalLateFee;

console.log("Task 1: Net Payable:", netPayable);


// TASK 2: LOGICAL AND COMPARISON OPERATORS

let attendancePercent;
let feePaid;
let hasPermission;
let canWriteTest;

// Student 1
attendancePercent = 80;
feePaid = true;
hasPermission = false;

canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission;

console.log("Student 1:", canWriteTest);

// Student 2
attendancePercent = 70;
feePaid = false;
hasPermission = true;

canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission;

console.log("Student 2:", canWriteTest);

// Student 3
attendancePercent = 60;
feePaid = true;
hasPermission = false;

canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission;

console.log("Student 3:", canWriteTest);


// TASK 3: IF / ELSE IF / ELSE AND TERNARY

function checkFee(fee, isPaid) {

    let category;

    if (fee < 1500) {
        category = "Basic";
    }
    else if (fee <= 2500) {
        category = "Standard";
    }
    else {
        category = "Premium";
    }

    let status = isPaid ? "Paid" : "Due";

    console.log(
        "Fee:", fee,
        "| Category:", category,
        "| Status:", status
    );
}

checkFee(1200, true);
checkFee(1800, false);
checkFee(2500, true);
checkFee(3000, false);


// TASK 4: TRUTHY AND FALSY VALUES

console.log(0 ? "truthy" : "falsy");

console.log("" ? "truthy" : "falsy");

console.log("0" ? "truthy" : "falsy");

console.log(null ? "truthy" : "falsy");

console.log(undefined ? "truthy" : "falsy");

console.log(NaN ? "truthy" : "falsy");

console.log([] ? "truthy" : "falsy");

console.log("Aarav" ? "truthy" : "falsy");

console.log("===== ASSIGNMENT COMPLETED =====");
