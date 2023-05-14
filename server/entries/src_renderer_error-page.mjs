import { a as jsxs, F as Fragment, j as jsx } from "../chunks/chunk-ac9dafa4.js";
import "react/jsx-runtime";
function Page({ is404 }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: is404 ? "404 Page Not Found" : "500 Internal Error" }),
    /* @__PURE__ */ jsx("p", { children: is404 ? "This page could not be found." : "Something went wrong." })
  ] });
}
export {
  Page
};
