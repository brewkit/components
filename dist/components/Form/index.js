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
var FormGroup_1 = __importDefault(require("./components/FormGroup"));
var FormLabel_1 = __importDefault(require("./components/FormLabel"));
var FormField_1 = __importDefault(require("./components/FormField"));
var FormHelperText_1 = __importDefault(require("./components/FormHelperText"));
var Form = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (react_1["default"].createElement("form", __assign({}, otherProps), children));
};
Form.Field = FormField_1["default"];
Form.Group = FormGroup_1["default"];
Form.HelperText = FormHelperText_1["default"];
Form.Label = FormLabel_1["default"];
exports["default"] = Form;
