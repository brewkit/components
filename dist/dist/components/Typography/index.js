"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
function Typography(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'inherit' : _b, _c = _a.color, color = _c === void 0 ? 'initial' : _c, _d = _a.align, align = _d === void 0 ? 'inherit' : _d, _e = _a.display, display = _e === void 0 ? 'initial' : _e, _f = _a.shouldTruncate, shouldTruncate = _f === void 0 ? false : _f, _g = _a.as, as = _g === void 0 ? null : _g, children = _a.children, className = _a.className, otherProps = __rest(_a, ["variant", "color", "align", "display", "shouldTruncate", "as", "children", "className"]);
    var classes = clsx_1["default"]('brew-Typography', ["brew-Typography--variant-" + variant], ["brew-Typography--color-" + color], ["brew-Typography--align-" + align], ["brew-Typography--display-" + display], { 'brew-Typography--shouldTruncate': shouldTruncate }, className);
    var TextElement = 'span';
    if (as)
        TextElement = as;
    else if (variant === 'h1' || variant === 'h2' || variant === 'h3')
        TextElement = variant;
    return (react_1["default"].createElement(TextElement, __assign({ className: classes }, otherProps), children));
}
exports["default"] = Typography;
