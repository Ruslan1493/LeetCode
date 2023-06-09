var isValid = function (s) {
    const stack = [];
    let isCorrect = true;
    if (s.length % 2 !== 0) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        if (!isCorrect) {
            break;
        }
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            switch (s[i]) {
                case ')':
                    if (stack[stack.length - 1] === '(') {
                        stack.pop();
                        continue;
                    }
                    return false;
                case '}':
                    if (stack[stack.length - 1] === '{') {
                        stack.pop();
                        continue;
                    }
                    return false;
                case ']':
                    if (stack[stack.length - 1] === '[') {
                        stack.pop();
                        continue;
                    }
                    return false;
                default:
                    break;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return isCorrect;
};

console.log(isValid('()'))