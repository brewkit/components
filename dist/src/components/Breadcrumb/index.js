"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var clsx_1 = __importDefault(require("clsx"));
var Typography_1 = __importDefault(require("../Typography"));
function Breadcrumb(_a) {
    var className = _a.className, divider = _a.divider, crumbs = _a.crumbs;
    var crumbCount = crumbs.length - 1;
    var classes = clsx_1["default"]('brew-Breadcrumb', className);
    return (react_1["default"].createElement("div", { className: classes }, crumbs.map(function (crumb, index) {
        var notLast = crumbCount !== index;
        return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, { key: index },
            react_1["default"].createElement(Typography_1["default"], { variant: "body2" },
                crumb.url && notLast
                    ? (react_1["default"].createElement(react_router_dom_1.Link, { className: "brew-Breadcrumb__link", to: crumb.url }, crumb.title))
                    : (react_1["default"].createElement(Typography_1["default"], { variant: "body2" }, crumb.title)),
                react_1["default"].createElement("span", { className: "brew-Breadcrumb__separator" }, divider
                    ? notLast && divider
                    : notLast && '/'))));
    })));
}
exports["default"] = Breadcrumb;
