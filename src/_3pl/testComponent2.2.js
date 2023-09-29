import * as React from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
function MyComponent({
  useState,
  confetti,
  className
}) {
  const [count, setCount] = useState(0);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsxs("button", {
        onClick: () => setCount(count => count + 1),
        className: className,
        children: ["Dynamic Component is ", count]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "",
      children: /*#__PURE__*/_jsx("button", {
        onClick: () => confetti(),
        className: className,
        children: "Also Do Confetti"
      })
    })]
  });
}
export default MyComponent;
