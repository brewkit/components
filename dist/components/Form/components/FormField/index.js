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
var FormGroup_1 = __importDefault(require("../FormGroup"));
var FormLabel_1 = __importDefault(require("../FormLabel"));
var FormHelperText_1 = __importDefault(require("../FormHelperText"));
var Input_1 = __importDefault(require("../../../Input"));
function FormField(_a) {
    var className = _a.className, inputClassName = _a.inputClassName, error = _a.error, helperText = _a.helperText, label = _a.label, variant = _a.variant, otherProps = __rest(_a, ["className", "inputClassName", "error", "helperText", "label", "variant"]);
    var classes = clsx_1["default"]('brew-FormField', { 'brew-FormField--hasError': Boolean(error) }, className);
    return (react_1["default"].createElement(FormGroup_1["default"], { className: classes },
        label && (react_1["default"].createElement(FormLabel_1["default"], null, label)),
        react_1["default"].createElement(Input_1["default"], __assign({ className: inputClassName, variant: variant }, otherProps)),
        helperText && (react_1["default"].createElement(FormHelperText_1["default"], null, helperText))));
}
exports["default"] = FormField;
