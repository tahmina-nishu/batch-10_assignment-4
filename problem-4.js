function calculateFinalScore(obj)
{
    if(typeof(obj) != 'object')
        return 'Invalid Input';
    var score = obj.testScore + obj.schoolGrade;

    if(obj.isFFamily)
        score += 20;

    if(score >= 80)
        return true;
    else
        return false;
}

var student = { 
    name: "Rajib", 
    testScore: 45,  
    schoolGrade: 25, 
    isFFamily : true  
}

var student2 = { 
    name: "Rajib", 
    testScore: 45,  
    schoolGrade: 25, 
    isFFamily : false 
}

var student3 = "hello";

var student4 = { 
    name: "Rajib", 
    testScore: 15,  
    schoolGrade: 25, 
    isFFamily : true  
}

console.log(calculateFinalScore(student));
console.log(calculateFinalScore(student2));
console.log(calculateFinalScore(student3));
console.log(calculateFinalScore(student4));