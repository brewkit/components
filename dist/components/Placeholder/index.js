"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Icon_1 = __importDefault(require("../Icon"));
var Typography_1 = __importDefault(require("../Typography"));
var styles_scss_1 = __importDefault(require("./styles.scss"));
function Placeholder(_a) {
    var className = _a.className, graphic = _a.graphic, title = _a.title, description = _a.description, children = _a.children;
    var placeholderClasses = clsx_1["default"](styles_scss_1["default"].wrapper, className);
    return (react_1["default"].createElement("div", { className: placeholderClasses }, (react_1["default"].createElement("div", { className: styles_scss_1["default"].content },
        graphic &&
            react_1["default"].createElement(Typography_1["default"], { className: styles_scss_1["default"].graphic, as: "p", variant: "body1" },
                react_1["default"].createElement(Icon_1["default"], { children: graphic })),
        title &&
            react_1["default"].createElement(Typography_1["default"], { shouldTruncate: true, variant: "h1", color: "tertiary" }, title),
        description &&
            react_1["default"].createElement(Typography_1["default"], { as: "p", variant: "body1" }, description),
        children)) ||
        children));
}
exports["default"] = Placeholder;
