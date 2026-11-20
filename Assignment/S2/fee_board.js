
const instituteName = "Bright Future Academy";

let studentName = "Aarav";

let monthlyFee = 1800;

let batchName = "Morning Batch";

let feePaid = true;

console.log("Institute Name:", instituteName);
console.log("Student Name:", studentName);
console.log("Monthly Fee:", monthlyFee);
console.log("Batch Name:", batchName);
console.log("Fee Paid:", feePaid);


{
    var batchCode = "M9";

    let seatNo = 12;
}

console.log("Batch Code:", batchCode);

console.log("Seat Number Type:", typeof seatNo);

monthlyFee = 2000;

console.log("Updated Monthly Fee:", monthlyFee);


let feeB = monthlyFee;

feeB = 2500;

console.log("Primitive Copy - feeB:", feeB);
console.log("Primitive Copy - monthlyFee:", monthlyFee);


const student1 = {
    name: "Aarav",
    fee: 1800
};

const student2 = student1;

student2.fee = 2200;

console.log("Reference Copy - student1:", student1.fee);
console.log("Reference Copy - student2:", student2.fee);


let feeStatus = 1800;

console.log(typeof feeStatus);

feeStatus = "1800";

console.log(typeof feeStatus);

feeStatus = false;

console.log(typeof feeStatus);
