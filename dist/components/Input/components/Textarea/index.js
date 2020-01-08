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
var InputBase_1 = __importDefault(require("../InputBase"));
var InputIcon_1 = __importDefault(require("../InputIcon"));
function Textarea(_a) {
    var _b = _a.after, after = _b === void 0 ? undefined : _b, _c = _a.before, before = _c === void 0 ? undefined : _c, _d = _a.className, className = _d === void 0 ? undefined : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.error, error = _f === void 0 ? false : _f, _g = _a.rows, rows = _g === void 0 ? 4 : _g, otherProps = __rest(_a, ["after", "before", "className", "disabled", "error", "rows"]);
    var classes = clsx_1["default"]('brew-Input--textarea', className);
    var Before = function () { return (react_1["default"].createElement("div", { className: "brew-Input__before" }, before)); };
    var After = function () { return (react_1["default"].createElement("div", { className: "brew-Input__after" }, !disabled && error ? (react_1["default"].createElement(InputIcon_1["default"], { className: "brew-Input__afterIcon", color: "danger", variant: "error_outline" })) : after)); };
    return (react_1["default"].createElement(InputBase_1["default"], __assign({ after: ((!disabled && error) || Boolean(after)) && react_1["default"].createElement(After, null), as: "textarea", before: Boolean(before) && react_1["default"].createElement(Before, null), className: classes, disabled: disabled, error: error, rows: rows }, otherProps)));
}
exports["default"] = Textarea;
