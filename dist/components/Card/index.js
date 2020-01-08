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
var CardBody_1 = __importDefault(require("./components/CardBody"));
var CardHeader_1 = __importDefault(require("./components/CardHeader"));
var CardTitle_1 = __importDefault(require("./components/CardTitle"));
function Card(_a) {
    var _b = _a.hasBorder, hasBorder = _b === void 0 ? true : _b, className = _a.className, children = _a.children, otherProps = __rest(_a, ["hasBorder", "className", "children"]);
    var classes = clsx_1["default"]('brew-Card', { 'brew-Card--hasBorder': hasBorder }, className);
    return (react_1["default"].createElement("div", __assign({ className: classes }, otherProps), children));
}
Card.Body = CardBody_1["default"];
Card.Header = CardHeader_1["default"];
Card.Title = CardTitle_1["default"];
exports["default"] = Card;
