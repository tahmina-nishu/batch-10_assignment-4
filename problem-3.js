function checkDigitsInName(name)
{
    if(typeof(name) != 'string')
        return 'Invalid Input';

    for(let letter of name)
    {
        if (!isNaN(letter) && letter !== ' ')
        {
            return true;
        }
    }
    return false;
}

console.log(checkDigitsInName('Suman asd1'));
console.log(checkDigitsInName('Suman asd'));