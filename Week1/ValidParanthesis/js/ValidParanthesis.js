var isValid = function (bracketString) {
  const stack = [];
  for (let i = 0; i < bracketString.length; i++) {
    stack.push(bracketString[i]);

    if (
      (stack[stack.length - 2] === "{" && stack[stack.length - 1] === "}") ||
      (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") ||
      (stack[stack.length - 2] === "[" && stack[stack.length - 1] === "]")
    ) {
      stack.pop();
      stack.pop();
    }
  }

  if (stack.length === 0) return true;
  else return false;
};

let s = "{}([{}])";

stack = ["{"];

console.log(isValid(s));
