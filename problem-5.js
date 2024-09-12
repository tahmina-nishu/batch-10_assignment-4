function  waitingTime(waitingTimes  , serialNumber)
{
    if(!Array.isArray(waitingTimes) || typeof(serialNumber) != 'number' )
        return 'Invalid Input';

    var n = waitingTimes.length;
    var sum = 0;

    for(var time of waitingTimes)
    {
        sum += time;
    }

    var avg = Math.round(sum / n);
    var timeLeft = (serialNumber - (n + 1)) * avg;
    return timeLeft;
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));