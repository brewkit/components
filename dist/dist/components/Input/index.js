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
var Checkbox_1 = __importDefault(require("./components/Checkbox"));
var Radio_1 = __importDefault(require("./components/Radio"));
var TextInput_1 = __importDefault(require("./components/TextInput"));
var Textarea_1 = __importDefault(require("./components/Textarea"));
var Select_1 = __importDefault(require("./components/Select"));
var InputIcon_1 = __importDefault(require("./components/InputIcon"));
function Input(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'text' : _b, otherProps = __rest(_a, ["variant"]);
    var components = {
        checkbox: Checkbox_1["default"],
        radio: Radio_1["default"],
        select: Select_1["default"],
        text: TextInput_1["default"],
        textarea: Textarea_1["default"]
    };
    var Element = components[variant] || TextInput_1["default"];
    return react_1["default"].createElement(Element, __assign({}, otherProps));
}
Input.Icon = InputIcon_1["default"];
exports["default"] = Input;
