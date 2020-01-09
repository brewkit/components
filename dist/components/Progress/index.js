"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
function Progress(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'horizontal' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'inherit' : _d, className = _a.className, otherProps = __rest(_a, ["variant", "color", "size", "className"]);
    var classes = clsx_1["default"]("brew-Progress--" + variant, "brew-Progress__color--" + color, "brew-Progress__size--" + size, className);
    return (react_1["default"].createElement("div", __assign({ className: classes }, otherProps)));
}
exports["default"] = Progress;
