"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
function FormHelperText(_a) {
    var _b;
    var color = _a.color, className = _a.className, children = _a.children;
    var classes = clsx_1["default"]('brew-FormHelperText', (_b = {}, _b["brew-FormHelperText--color-" + color] = Boolean(color), _b), className);
    return (react_1["default"].createElement("div", { className: classes }, children));
}
exports["default"] = FormHelperText;
