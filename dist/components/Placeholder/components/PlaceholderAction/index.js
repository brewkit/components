"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Button_1 = __importDefault(require("../../../Button"));
function PlaceholderAction(_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, onClick = _a.onClick, children = _a.children;
    var placeholderClasses = clsx_1["default"]("brew-Placeholder__" + variant + "Action", className);
    return (react_1["default"].createElement(Button_1["default"], { variant: variant === 'secondary' ? 'text' : undefined, className: placeholderClasses, onClick: onClick, isFluid: variant === 'primary' ? true : undefined }, children));
}
exports["default"] = PlaceholderAction;
