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
var Typography_1 = __importDefault(require("../../../Typography"));
var InputBase = function (_a) {
    var after = _a.after, _b = _a.as, as = _b === void 0 ? 'input' : _b, before = _a.before, checked = _a.checked, children = _a.children, className = _a.className, cols = _a.cols, customControl = _a.customControl, defaultChecked = _a.defaultChecked, defaultValue = _a.defaultValue, disabled = _a.disabled, error = _a.error, fullWidth = _a.fullWidth, id = _a.id, inputClassName = _a.inputClassName, inputLabel = _a.inputLabel, inputLabelClassName = _a.inputLabelClassName, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, readOnly = _a.readOnly, required = _a.required, rows = _a.rows, _c = _a.type, type = _c === void 0 ? 'text' : _c, value = _a.value, otherProps = __rest(_a, ["after", "as", "before", "checked", "children", "className", "cols", "customControl", "defaultChecked", "defaultValue", "disabled", "error", "fullWidth", "id", "inputClassName", "inputLabel", "inputLabelClassName", "name", "onChange", "placeholder", "readOnly", "required", "rows", "type", "value"]);
    var classes = clsx_1["default"]('brew-Input', { 'brew-Input--isDisabled': Boolean(disabled) }, { 'brew-Input--hasError': Boolean(error) }, { 'brew-Input--isFullWidth': Boolean(fullWidth) }, { 'brew-Input--hasBefore': Boolean(before) }, { 'brew-Input--hasAfter': Boolean(after) || (!disabled && error) }, className);
    var Element = as;
    return (react_1["default"].createElement(Typography_1["default"], __assign({ as: "label", className: classes }, otherProps),
        before,
        react_1["default"].createElement(Element, { checked: checked, className: clsx_1["default"]('brew-Input__element', inputClassName), cols: cols, defaultChecked: defaultChecked, defaultValue: defaultValue, disabled: disabled, id: id, name: name, onChange: onChange, placeholder: placeholder, readOnly: readOnly, required: required, rows: rows, type: type, value: value }, children),
        after,
        Boolean(customControl) && customControl,
        inputLabel && (type === 'checkbox' || type === 'radio') && (react_1["default"].createElement("span", { className: clsx_1["default"]('brew-Input__label', inputLabelClassName) }, inputLabel))));
};
exports["default"] = InputBase;
