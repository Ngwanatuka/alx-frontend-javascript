interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCreditsSum'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCreditsSum'
    };
}

// Test the functions
const subjectA: MajorCredits = { credits: 3, brand: 'SubjectA' };
const subjectB: MajorCredits = { credits: 4, brand: 'SubjectB' };
const majorCreditsSum = sumMajorCredits(subjectA, subjectB);
console.log(majorCreditsSum);

const subjectX: MinorCredits = { credits: 1, brand: 'SubjectX' };
type NewType = MinorCredits;

const subjectY: NewType = { credits: 2, brand: 'SubjectY' };
const minorCreditsSum = sumMinorCredits(subjectX, subjectY);
console.log(minorCreditsSum);
