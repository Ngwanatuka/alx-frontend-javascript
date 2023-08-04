function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCreditsSum'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCreditsSum'
    };
}
// Test the functions
var subjectA = { credits: 3, brand: 'SubjectA' };
var subjectB = { credits: 4, brand: 'SubjectB' };
var majorCreditsSum = sumMajorCredits(subjectA, subjectB);
console.log(majorCreditsSum);
var subjectX = { credits: 1, brand: 'SubjectX' };
var subjectY = { credits: 2, brand: 'SubjectY' };
var minorCreditsSum = sumMinorCredits(subjectX, subjectY);
console.log(minorCreditsSum);
