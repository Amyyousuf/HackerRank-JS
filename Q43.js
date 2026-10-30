function minimumNumber(n, password) {
    let special_characters = "!@#$%^&*()-+";
    let hasDigit = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++){
        let ch = password[i];
        if (ch >= '0' && ch <= '9')
            hasDigit = true;
        else if (ch >= 'a' && ch <= 'z')
            hasLower = true;
        else if (ch >= 'A' && ch <= 'Z')
            hasUpper = true;
        else if (special_characters.includes(ch))
            hasSpecial = true;
    }

    let missing = 0;
    if(!hasDigit) missing++;
    if(!hasLower) missing++;
    if(!hasUpper) missing++;
    if(!hasSpecial) missing++;

    return Math.max(missing, 6 - n);
}
console.log(minimumNumber(11, '#HackerRank'));