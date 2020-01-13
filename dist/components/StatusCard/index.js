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
var Standard_1 = __importDefault(require("./components/Standard"));
var Compact_1 = __importDefault(require("./components/Compact"));
var components = {
    compact: Compact_1["default"],
    standard: Standard_1["default"]
};
var StatusCard = function (_a) {
    var className = _a.className, variant = _a.variant, color = _a.color, header = _a.header, body = _a.body, otherProps = __rest(_a, ["className", "variant", "color", "header", "body"]);
    var Element = components[variant] || Compact_1["default"];
    return react_1["default"].createElement(Element, __assign({ body: body, className: className, color: color, header: header }, otherProps));
};
exports["default"] = StatusCard;
