"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
function ClickAwayListener(_a) {
    var onClickAway = _a.onClickAway, children = _a.children;
    var ref = react_1["default"].useRef(null);
    function handleClick(event) {
        var _a, _b, _c;
        var target = (_c = (_b = (_a = ref) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.firstChild;
        var isContained = target.contains(event.target);
        if (!isContained)
            onClickAway();
    }
    react_1["default"].useEffect(function () {
        document.addEventListener('click', handleClick);
        return (function () {
            document.removeEventListener('click', handleClick);
        });
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        children,
        react_1["default"].createElement("div", { ref: ref, style: { display: 'none' } })));
}
exports["default"] = ClickAwayListener;
