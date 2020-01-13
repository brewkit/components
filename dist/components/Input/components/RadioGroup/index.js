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
function RadioGroup(_a) {
    var name = _a.name, value = _a.value, defaultValue = _a.defaultValue, _b = _a.onChange, onChange = _b === void 0 ? function () { return true; } : _b, className = _a.className, children = _a.children, otherProps = __rest(_a, ["name", "value", "defaultValue", "onChange", "className", "children"]);
    var classes = clsx_1["default"]('brew-Input--radioGroup', className);
    return (react_1["default"].createElement("div", __assign({ className: classes }, otherProps), react_1["default"].Children.map(children, function (child) { return react_1["default"].cloneElement(child, __assign({ checked: Boolean(value) && child.props.value === value ? true : undefined, defaultChecked: Boolean(defaultValue) && child.props.value === defaultValue ? true : undefined, name: name, onChange: function (event) { return onChange(event); } }, child.props)); })));
}
exports["default"] = RadioGroup;
