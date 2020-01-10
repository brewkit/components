"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Typography_1 = __importDefault(require("../../../Typography"));
function PlaceholderContent(_a) {
    var className = _a.className, children = _a.children;
    var placeholderClasses = clsx_1["default"]('brew-Placeholder__content', className);
    return (react_1["default"].createElement(Typography_1["default"], { className: placeholderClasses, as: "p", variant: "body1" }, children));
}
exports["default"] = PlaceholderContent;
