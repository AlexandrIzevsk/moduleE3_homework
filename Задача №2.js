let result;
function sum(a) {
    if (a <= 1000) {
        if (a <= 1) {
            return result = 'число не является простым';
        }
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                return result = 'число не является простым';
            }
        }
        return result = 'число является простым';
    } else {
        result = 'данные не верны';
    }
    return result;
};

console.log(sum(5));