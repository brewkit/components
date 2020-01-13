"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var PlaceholderGraphic_1 = __importDefault(require("./components/PlaceholderGraphic"));
var PlaceholderTitle_1 = __importDefault(require("./components/PlaceholderTitle"));
var PlaceholderContent_1 = __importDefault(require("./components/PlaceholderContent"));
var PlaceholderAction_1 = __importDefault(require("./components/PlaceholderAction"));
function Placeholder(_a) {
    var className = _a.className, children = _a.children;
    var placeholderClasses = clsx_1["default"]('brew-Placeholder', className);
    return (react_1["default"].createElement("div", { className: placeholderClasses }, children));
}
Placeholder.Graphic = PlaceholderGraphic_1["default"];
Placeholder.Title = PlaceholderTitle_1["default"];
Placeholder.Content = PlaceholderContent_1["default"];
Placeholder.Action = PlaceholderAction_1["default"];
exports["default"] = Placeholder;
