var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var num = new Array(21, 43, 54, 12, 24, 45, 3, 4);
function QuickSort(num) {
    if (num.length <= 0) {
        return [];
    }
    var pivot = num[0];
    var left = new Array();
    var right = new Array();
    var equal = new Array();
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var element = num_1[_i];
        if (pivot > element) {
            left.push(element);
        }
        else if (pivot < element) {
            right.push(element);
        }
        else {
            equal.push(element);
        }
    }
    var a = QuickSort(left);
    var b = QuickSort(right);
    return __spreadArray(__spreadArray(__spreadArray([], a, true), equal, true), b, true);
}
console.log(QuickSort(num));
