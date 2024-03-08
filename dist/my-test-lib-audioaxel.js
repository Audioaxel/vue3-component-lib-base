import { defineComponent as a, ref as p, openBlock as l, createElementBlock as m, Fragment as u, createElementVNode as s, toDisplayString as c } from "vue";
const _ = { class: "card" }, i = /* @__PURE__ */ a({
  __name: "TestComponent",
  props: {
    msg: { type: String }
  },
  setup(t) {
    const e = p(0);
    return (o, n) => (l(), m(u, null, [
      s("h1", null, c(t.msg), 1),
      s("div", _, [
        s("button", {
          type: "button",
          onClick: n[0] || (n[0] = (r) => e.value++)
        }, "count is " + c(e.value), 1)
      ])
    ], 64));
  }
}), d = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, r] of e)
    o[n] = r;
  return o;
}, f = /* @__PURE__ */ d(i, [["__scopeId", "data-v-7a98a74e"]]);
export {
  f as TestComponent
};
