function sendNotification(email)
{
    if(email.indexOf('@') === -1)
        return 'Invalid Email';
    
    let splitedEmail = email.split('@');

    var userName = splitedEmail[0];
    var domainName = splitedEmail[1];
    var notification = userName + ' sent you an email from ' + domainName;
    return notification;
}

let str = 'zihad@gmail.com';
console.log(sendNotification(str));