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
var react_dom_1 = __importDefault(require("react-dom"));
var clsx_1 = __importDefault(require("clsx"));
var Button_1 = __importDefault(require("../Button"));
var Icon_1 = __importDefault(require("../Icon"));
var Typography_1 = __importDefault(require("../Typography"));
function Dialog(_a) {
    var _b, _c;
    var _d = _a.cancelText, cancelText = _d === void 0 ? 'Cancel' : _d, children = _a.children, className = _a.className, closeIcon = _a.closeIcon, _e = _a.color, color = _e === void 0 ? 'info' : _e, _f = _a.confirmText, confirmText = _f === void 0 ? 'Confirm' : _f, customFooter = _a.customFooter, _g = _a.hasIcon, hasIcon = _g === void 0 ? true : _g, hideFooter = _a.hideFooter, icon = _a.icon, _h = _a.isOpen, isOpen = _h === void 0 ? false : _h, onBackgroundClick = _a.onBackgroundClick, onConfirm = _a.onConfirm, onCancel = _a.onCancel, title = _a.title, _j = _a.variant, variant = _j === void 0 ? 'confirm' : _j, otherProps = __rest(_a, ["cancelText", "children", "className", "closeIcon", "color", "confirmText", "customFooter", "hasIcon", "hideFooter", "icon", "isOpen", "onBackgroundClick", "onConfirm", "onCancel", "title", "variant"]);
    var classes = clsx_1["default"]('brew-Dialog', { 'brew-Dialog--isOpen': Boolean(open) }, (_b = {}, _b["brew-Dialog--" + variant] = Boolean(variant), _b), (_c = {}, _c["brew-Dialog--color-" + color] = Boolean(color), _c), className);
    var handleConfirmClick = function (event) {
        if (onConfirm)
            onConfirm(event);
    };
    var handleCancelClick = function (event) {
        if (onCancel)
            onCancel(event);
    };
    var handleBackgroundClick = function (event) {
        if (onBackgroundClick)
            onBackgroundClick(event);
    };
    var getIconVariant = function () {
        switch (color) {
            case 'success':
                return 'check_circle';
            case 'warning':
                return 'error_outline';
            case 'danger':
                return 'highlight_off';
            default:
                return 'info';
        }
    };
    if (!isOpen)
        return null;
    return react_dom_1["default"].createPortal(react_1["default"].createElement("div", __assign({ className: classes }, otherProps),
        react_1["default"].createElement("div", { className: "brew-Dialog__background", onClick: handleBackgroundClick }),
        react_1["default"].createElement("div", { className: "brew-Dialog__content" },
            react_1["default"].createElement("div", { className: "brew-Dialog__header" },
                hasIcon && (icon ? icon : (react_1["default"].createElement(Icon_1["default"], { className: "brew-Dialog__icon" }, getIconVariant()))),
                title && (react_1["default"].createElement(Typography_1["default"], { as: "h2", className: "brew-Dialog__title" }, title)),
                closeIcon ? closeIcon : (react_1["default"].createElement(Icon_1["default"], { className: "brew-Dialog__closeIcon" }, "close"))),
            react_1["default"].createElement("div", { className: "brew-Dialog__body" }, children),
            !hideFooter && (react_1["default"].createElement("div", { className: "brew-Dialog__footer" }, customFooter ? customFooter : (react_1["default"].createElement(react_1["default"].Fragment, null,
                variant !== 'alert' && (react_1["default"].createElement("div", { className: "bregit staw-Dialog__actionButton brew-Dialog__actionButton--cancel" },
                    react_1["default"].createElement(Button_1["default"], { onClick: handleCancelClick }, cancelText))),
                react_1["default"].createElement("div", { className: "brew-Dialog__actionButton brew-Dialog__actionButton--confirm" },
                    react_1["default"].createElement(Button_1["default"], { onClick: handleConfirmClick }, confirmText)))))))), document.body);
}
exports["default"] = Dialog;
