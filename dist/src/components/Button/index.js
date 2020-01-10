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
var react_flip_toolkit_1 = require("react-flip-toolkit");
var Typography_1 = __importDefault(require("../Typography"));
var Icon_1 = __importDefault(require("../Icon"));
var Progress_1 = __importDefault(require("../Progress"));
function Button(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'standard' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e, _f = _a.isCompact, isCompact = _f === void 0 ? false : _f, _g = _a.isCircular, isCircular = _g === void 0 ? false : _g, _h = _a.isFluid, isFluid = _h === void 0 ? false : _h, _j = _a.isDisabled, isDisabled = _j === void 0 ? false : _j, children = _a.children, className = _a.className, otherProps = __rest(_a, ["variant", "color", "size", "isLoading", "isCompact", "isCircular", "isFluid", "isDisabled", "children", "className"]);
    var buttonClasses = clsx_1["default"]('brew-Button', "brew-Button--variant-" + variant, "brew-Button--color-" + color, "brew-Button--size-" + size, { 'brew-Button--isLoading': isLoading }, { 'brew-Button--isDisabled': isDisabled || isLoading }, { 'brew-Button--isCompact': isCompact }, { 'brew-Button--isCircular': isCircular && !isFluid }, { 'brew-Button--isFluid': isFluid }, className);
    return (react_1["default"].createElement(react_flip_toolkit_1.Flipper, { flipKey: JSON.stringify([isLoading, variant, color, size]) },
        react_1["default"].createElement(react_flip_toolkit_1.Flipped, { flipId: "wrapper" },
            react_1["default"].createElement("button", __assign({ "aria-label": (variant === 'icon' && typeof children === 'string') ? children : undefined, className: buttonClasses, disabled: isDisabled || isLoading, type: "button" }, otherProps),
                react_1["default"].createElement(react_flip_toolkit_1.Flipped, { flipId: "content" },
                    react_1["default"].createElement("div", { className: "brew-Button__content" },
                        react_1["default"].createElement(Typography_1["default"], { className: "brew-Button__text" }, children),
                        variant === 'icon' && typeof children === 'string' &&
                            react_1["default"].createElement(Icon_1["default"], { className: "brew-Button__icon", color: "inherit" }, children))),
                react_1["default"].createElement(react_flip_toolkit_1.Flipped, { flipId: "loader" },
                    react_1["default"].createElement("div", { className: "brew-Button__loadingIndicator" },
                        react_1["default"].createElement(Progress_1["default"], { color: color, variant: "circular" })))))));
}
exports["default"] = Button;
