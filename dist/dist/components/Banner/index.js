"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
var BannerIcon_1 = __importDefault(require("./components/BannerIcon"));
var BannerBody_1 = __importDefault(require("./components/BannerBody"));
var BannerButton_1 = __importDefault(require("./components/BannerButton"));
var BannerInfo_1 = __importDefault(require("./components/BannerInfo"));
var BannerTitle_1 = __importDefault(require("./components/BannerTitle"));
function Banner(_a) {
    var children = _a.children, className = _a.className, color = _a.color, iconName = _a.iconName, description = _a.description, isLoading = _a.isLoading, title = _a.title, variant = _a.variant, otherProps = __rest(_a, ["children", "className", "color", "iconName", "description", "isLoading", "title", "variant"]);
    var bannerClasses = clsx_1["default"]('brew-Banner', "brew-Banner--color-" + color, "brew-Banner--" + variant, className);
    return (react_1["default"].createElement("div", __assign({ className: bannerClasses }, otherProps), iconName && (react_1["default"].createElement(BannerIcon_1["default"], { iconName: iconName, isLoading: isLoading })), (title || description) && (react_1["default"].createElement(BannerBody_1["default"], null, title && (react_1["default"].createElement(BannerTitle_1["default"], null, title)), description && (react_1["default"].createElement(BannerInfo_1["default"], null, description)))), children && (react_1["default"].createElement("div", { className: "brew-Banner__content" }, children))));
}
Banner.Button = BannerButton_1["default"];
exports["default"] = Banner;
