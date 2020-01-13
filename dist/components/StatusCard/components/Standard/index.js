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
var Icon_1 = __importDefault(require("../../../Icon"));
var Typography_1 = __importDefault(require("../../../Typography"));
var StandardStatusCard = function (_a) {
    var className = _a.className, color = _a.color, icon = _a.icon, header = _a.header, body = _a.body, isDisabled = _a.isDisabled, isFilled = _a.isFilled, otherProps = __rest(_a, ["className", "color", "icon", "header", "body", "isDisabled", "isFilled"]);
    var standardClasses = clsx_1["default"]('brew-StatusCard', 'brew-StatusCard--standard', "brew-StatusCard--color-" + color, { 'brew-StatusCard--isDisabled': isDisabled }, { 'brew-StatusCard--isFilled': isFilled }, className);
    return (react_1["default"].createElement("div", __assign({ className: standardClasses }, otherProps),
        react_1["default"].createElement("section", { className: "icon" },
            react_1["default"].createElement(Icon_1["default"], { color: color }, icon)),
        react_1["default"].createElement("section", null,
            react_1["default"].createElement(Typography_1["default"], { color: color, variant: "h1" }, header),
            react_1["default"].createElement(Typography_1["default"], { color: color, variant: "body1" }, body))));
};
exports["default"] = StandardStatusCard;
