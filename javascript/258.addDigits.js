// Add Digits
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?
// 看题目的意思就是，给你一个数字，然后每个位数上面的数字相加，返回结果小于 10 的就直接返回，大于 10 的就继续把返回的结果相加，直到返回小于10的结果为止。
// 一开始很容易想到循环遍历嘛，就这样
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var str = num.toString(), res = 0, tmp1, tmp2;
       for(var i = 0; i < str.length; i++){
            res = parseInt(str[i]) + res;
            if(res >= 10){
                tmp1 = parseInt(res / 10);
                   tmp2 = res % 10;
                  res = tmp1 + tmp2;
            }
        }
    return res;
};

// 但是看到上面人家说了 Could you do it without any loop/recursion in O(1) runtime? 不要用循环呀，这下麻烦了。
// 但是发现规律还是能想到办法的
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
};
