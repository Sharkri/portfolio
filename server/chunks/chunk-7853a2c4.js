import { j as jsx } from "./chunk-ac9dafa4.js";
import React, { useContext } from "react";
const Context = React.createContext(
  void 0
);
function PageContextProvider({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
const all_min = "";
export {
  PageContextProvider as P,
  usePageContext as u
};
