"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../../../Icon"));
var Typography_1 = __importDefault(require("../../../Typography"));
var clsx_1 = __importDefault(require("clsx"));
function PlaceholderGraphic(_a) {
    var className = _a.className, graphic = _a.graphic;
    var placeholderClasses = clsx_1["default"]('brew-Placeholder__graphic', className);
    return (react_1["default"].createElement(Typography_1["default"], { as: "p", className: placeholderClasses, variant: "body1" },
        react_1["default"].createElement(Icon_1["default"], { children: graphic })));
}
exports["default"] = PlaceholderGraphic;
