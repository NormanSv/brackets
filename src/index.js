module.exports = function check(str, bracketsConfig) {
  let MapBrackets = new Map(bracketsConfig),
   stack = [];
   for (let i = 0; i< str.length; i++)
   {
     str[i] === MapBrackets.get(stack[stack.length-1]) ? stack.pop() : stack.push(str[i]);
   }
   return stack.length === 0;
}
