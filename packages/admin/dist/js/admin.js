/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rf = ([a, l, s]) => {
    const d = document.createElementNS("http://www.w3.org/2000/svg", a);
    return (
      Object.keys(l).forEach((p) => {
        d.setAttribute(p, String(l[p]));
      }),
      s != null &&
        s.length &&
        s.forEach((p) => {
          const m = rf(p);
          d.appendChild(m);
        }),
      d
    );
  },
  bd = (a, l = {}) => {
    const d = { ...tf, ...l };
    return rf(["svg", d, a]);
  };
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dd = (a) =>
    Array.from(a.attributes).reduce((l, s) => ((l[s.name] = s.value), l), {}),
  wd = (a) =>
    typeof a == "string"
      ? a
      : !a || !a.class
        ? ""
        : a.class && typeof a.class == "string"
          ? a.class.split(" ")
          : a.class && Array.isArray(a.class)
            ? a.class
            : "",
  Cd = (a) =>
    a
      .flatMap(wd)
      .map((s) => s.trim())
      .filter(Boolean)
      .filter((s, d, p) => p.indexOf(s) === d)
      .join(" "),
  kd = (a) =>
    a.replace(
      /(\w)(\w*)(_|-|\s*)/g,
      (l, s, d) => s.toUpperCase() + d.toLowerCase(),
    ),
  fu = (a, { nameAttr: l, icons: s, attrs: d }) => {
    var $;
    const p = a.getAttribute(l);
    if (p == null) return;
    const m = kd(p),
      y = s[m];
    if (!y)
      return console.warn(
        `${a.outerHTML} icon name was not found in the provided icons object.`,
      );
    const w = Dd(a),
      C = { ...tf, "data-lucide": p, ...d, ...w },
      L = Cd(["lucide", `lucide-${p}`, w, d]);
    L && Object.assign(C, { class: L });
    const K = bd(y, C);
    return ($ = a.parentNode) == null ? void 0 : $.replaceChild(K, a);
  };
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sd = [
  ["path", { d: "m12 19-7-7 7-7" }],
  ["path", { d: "M19 12H5" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ad = [["path", { d: "m9 18 6-6-6-6" }]];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ed = [
  ["path", { d: "M15 3h6v6" }],
  ["path", { d: "M10 14 21 3" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fd = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
  ["path", { d: "M10 9H8" }],
  ["path", { d: "M16 13H8" }],
  ["path", { d: "M16 17H8" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ld = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Td = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["circle", { cx: "9", cy: "9", r: "2" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _d = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Md = [
  [
    "path",
    { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" },
  ],
  [
    "path",
    { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" },
  ],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bd = [
  ["path", { d: "M4 12h16" }],
  ["path", { d: "M4 18h16" }],
  ["path", { d: "M4 6h16" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Id = [
  ["path", { d: "M5 12h14" }],
  ["path", { d: "M12 5v14" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nd = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
    },
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rd = [
  ["path", { d: "m21 21-4.34-4.34" }],
  ["circle", { cx: "11", cy: "11", r: "8" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hd = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pd = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zd = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wd = [
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "m4.93 4.93 1.41 1.41" }],
  ["path", { d: "m17.66 17.66 1.41 1.41" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "m6.34 17.66-1.41 1.41" }],
  ["path", { d: "m19.07 4.93-1.41 1.41" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qd = [
  ["path", { d: "M3 6h18" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ud = [
  ["path", { d: "M18 6 6 18" }],
  ["path", { d: "m6 6 12 12" }],
];
/**
 * @license lucide v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nf = ({
  icons: a = {},
  nameAttr: l = "data-lucide",
  attrs: s = {},
} = {}) => {
  if (!Object.values(a).length)
    throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);
  if (typeof document > "u")
    throw new Error("`createIcons()` only works in a browser environment.");
  const d = document.querySelectorAll(`[${l}]`);
  if (
    (Array.from(d).forEach((p) => fu(p, { nameAttr: l, icons: a, attrs: s })),
    l === "data-lucide")
  ) {
    const p = document.querySelectorAll("[icon-name]");
    p.length > 0 &&
      (console.warn(
        "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide",
      ),
      Array.from(p).forEach((m) =>
        fu(m, { nameAttr: "icon-name", icons: a, attrs: s }),
      ));
  }
};
var Ao = !1,
  Eo = !1,
  Gr = [],
  Fo = -1;
function jd(a) {
  Gd(a);
}
function Gd(a) {
  (Gr.includes(a) || Gr.push(a), $d());
}
function Kd(a) {
  let l = Gr.indexOf(a);
  l !== -1 && l > Fo && Gr.splice(l, 1);
}
function $d() {
  !Eo && !Ao && ((Ao = !0), queueMicrotask(Xd));
}
function Xd() {
  ((Ao = !1), (Eo = !0));
  for (let a = 0; a < Gr.length; a++) (Gr[a](), (Fo = a));
  ((Gr.length = 0), (Fo = -1), (Eo = !1));
}
var Sn,
  Zr,
  An,
  af,
  Lo = !0;
function Yd(a) {
  ((Lo = !1), a(), (Lo = !0));
}
function Zd(a) {
  ((Sn = a.reactive),
    (An = a.release),
    (Zr = (l) =>
      a.effect(l, {
        scheduler: (s) => {
          Lo ? jd(s) : s();
        },
      })),
    (af = a.raw));
}
function cu(a) {
  Zr = a;
}
function Jd(a) {
  let l = () => {};
  return [
    (d) => {
      let p = Zr(d);
      return (
        a._x_effects ||
          ((a._x_effects = new Set()),
          (a._x_runEffects = () => {
            a._x_effects.forEach((m) => m());
          })),
        a._x_effects.add(p),
        (l = () => {
          p !== void 0 && (a._x_effects.delete(p), An(p));
        }),
        p
      );
    },
    () => {
      l();
    },
  ];
}
function of(a, l) {
  let s = !0,
    d,
    p = Zr(() => {
      let m = a();
      (JSON.stringify(m),
        s
          ? (d = m)
          : queueMicrotask(() => {
              (l(m, d), (d = m));
            }),
        (s = !1));
    });
  return () => An(p);
}
var lf = [],
  sf = [],
  uf = [];
function Qd(a) {
  uf.push(a);
}
function Uo(a, l) {
  typeof l == "function"
    ? (a._x_cleanups || (a._x_cleanups = []), a._x_cleanups.push(l))
    : ((l = a), sf.push(l));
}
function ff(a) {
  lf.push(a);
}
function cf(a, l, s) {
  (a._x_attributeCleanups || (a._x_attributeCleanups = {}),
    a._x_attributeCleanups[l] || (a._x_attributeCleanups[l] = []),
    a._x_attributeCleanups[l].push(s));
}
function hf(a, l) {
  a._x_attributeCleanups &&
    Object.entries(a._x_attributeCleanups).forEach(([s, d]) => {
      (l === void 0 || l.includes(s)) &&
        (d.forEach((p) => p()), delete a._x_attributeCleanups[s]);
    });
}
function Vd(a) {
  var l, s;
  for (
    (l = a._x_effects) == null || l.forEach(Kd);
    (s = a._x_cleanups) != null && s.length;
  )
    a._x_cleanups.pop()();
}
var jo = new MutationObserver(Xo),
  Go = !1;
function Ko() {
  (jo.observe(document, {
    subtree: !0,
    childList: !0,
    attributes: !0,
    attributeOldValue: !0,
  }),
    (Go = !0));
}
function df() {
  (ep(), jo.disconnect(), (Go = !1));
}
var li = [];
function ep() {
  let a = jo.takeRecords();
  li.push(() => a.length > 0 && Xo(a));
  let l = li.length;
  queueMicrotask(() => {
    if (li.length === l) for (; li.length > 0; ) li.shift()();
  });
}
function ot(a) {
  if (!Go) return a();
  df();
  let l = a();
  return (Ko(), l);
}
var $o = !1,
  aa = [];
function tp() {
  $o = !0;
}
function rp() {
  (($o = !1), Xo(aa), (aa = []));
}
function Xo(a) {
  if ($o) {
    aa = aa.concat(a);
    return;
  }
  let l = [],
    s = new Set(),
    d = new Map(),
    p = new Map();
  for (let m = 0; m < a.length; m++)
    if (
      !a[m].target._x_ignoreMutationObserver &&
      (a[m].type === "childList" &&
        (a[m].removedNodes.forEach((y) => {
          y.nodeType === 1 && y._x_marker && s.add(y);
        }),
        a[m].addedNodes.forEach((y) => {
          if (y.nodeType === 1) {
            if (s.has(y)) {
              s.delete(y);
              return;
            }
            y._x_marker || l.push(y);
          }
        })),
      a[m].type === "attributes")
    ) {
      let y = a[m].target,
        w = a[m].attributeName,
        C = a[m].oldValue,
        L = () => {
          (d.has(y) || d.set(y, []),
            d.get(y).push({ name: w, value: y.getAttribute(w) }));
        },
        K = () => {
          (p.has(y) || p.set(y, []), p.get(y).push(w));
        };
      y.hasAttribute(w) && C === null
        ? L()
        : y.hasAttribute(w)
          ? (K(), L())
          : K();
    }
  (p.forEach((m, y) => {
    hf(y, m);
  }),
    d.forEach((m, y) => {
      lf.forEach((w) => w(y, m));
    }));
  for (let m of s) l.some((y) => y.contains(m)) || sf.forEach((y) => y(m));
  for (let m of l) m.isConnected && uf.forEach((y) => y(m));
  ((l = null), (s = null), (d = null), (p = null));
}
function pf(a) {
  return gi(Cn(a));
}
function pi(a, l, s) {
  return (
    (a._x_dataStack = [l, ...Cn(s || a)]),
    () => {
      a._x_dataStack = a._x_dataStack.filter((d) => d !== l);
    }
  );
}
function Cn(a) {
  return a._x_dataStack
    ? a._x_dataStack
    : typeof ShadowRoot == "function" && a instanceof ShadowRoot
      ? Cn(a.host)
      : a.parentNode
        ? Cn(a.parentNode)
        : [];
}
function gi(a) {
  return new Proxy({ objects: a }, np);
}
var np = {
  ownKeys({ objects: a }) {
    return Array.from(new Set(a.flatMap((l) => Object.keys(l))));
  },
  has({ objects: a }, l) {
    return l == Symbol.unscopables
      ? !1
      : a.some(
          (s) =>
            Object.prototype.hasOwnProperty.call(s, l) || Reflect.has(s, l),
        );
  },
  get({ objects: a }, l, s) {
    return l == "toJSON"
      ? ip
      : Reflect.get(a.find((d) => Reflect.has(d, l)) || {}, l, s);
  },
  set({ objects: a }, l, s, d) {
    const p =
        a.find((y) => Object.prototype.hasOwnProperty.call(y, l)) ||
        a[a.length - 1],
      m = Object.getOwnPropertyDescriptor(p, l);
    return m != null && m.set && m != null && m.get
      ? m.set.call(d, s) || !0
      : Reflect.set(p, l, s);
  },
};
function ip() {
  return Reflect.ownKeys(this).reduce(
    (l, s) => ((l[s] = Reflect.get(this, s)), l),
    {},
  );
}
function gf(a) {
  let l = (d) => typeof d == "object" && !Array.isArray(d) && d !== null,
    s = (d, p = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(d)).forEach(
        ([m, { value: y, enumerable: w }]) => {
          if (
            w === !1 ||
            y === void 0 ||
            (typeof y == "object" && y !== null && y.__v_skip)
          )
            return;
          let C = p === "" ? m : `${p}.${m}`;
          typeof y == "object" && y !== null && y._x_interceptor
            ? (d[m] = y.initialize(a, C, m))
            : l(y) && y !== d && !(y instanceof Element) && s(y, C);
        },
      );
    };
  return s(a);
}
function vf(a, l = () => {}) {
  let s = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(d, p, m) {
      return a(
        this.initialValue,
        () => ap(d, p),
        (y) => To(d, p, y),
        p,
        m,
      );
    },
  };
  return (
    l(s),
    (d) => {
      if (typeof d == "object" && d !== null && d._x_interceptor) {
        let p = s.initialize.bind(s);
        s.initialize = (m, y, w) => {
          let C = d.initialize(m, y, w);
          return ((s.initialValue = C), p(m, y, w));
        };
      } else s.initialValue = d;
      return s;
    }
  );
}
function ap(a, l) {
  return l.split(".").reduce((s, d) => s[d], a);
}
function To(a, l, s) {
  if ((typeof l == "string" && (l = l.split(".")), l.length === 1)) a[l[0]] = s;
  else {
    if (l.length === 0) throw error;
    return (a[l[0]] || (a[l[0]] = {}), To(a[l[0]], l.slice(1), s));
  }
}
var mf = {};
function Vt(a, l) {
  mf[a] = l;
}
function _o(a, l) {
  let s = op(l);
  return (
    Object.entries(mf).forEach(([d, p]) => {
      Object.defineProperty(a, `$${d}`, {
        get() {
          return p(l, s);
        },
        enumerable: !1,
      });
    }),
    a
  );
}
function op(a) {
  let [l, s] = Cf(a),
    d = { interceptor: vf, ...l };
  return (Uo(a, s), d);
}
function lp(a, l, s, ...d) {
  try {
    return s(...d);
  } catch (p) {
    di(p, a, l);
  }
}
function di(a, l, s = void 0) {
  ((a = Object.assign(a ?? { message: "No error message given." }, {
    el: l,
    expression: s,
  })),
    console.warn(
      `Alpine Expression Error: ${a.message}

${
  s
    ? 'Expression: "' +
      s +
      `"

`
    : ""
}`,
      l,
    ),
    setTimeout(() => {
      throw a;
    }, 0));
}
var ra = !0;
function xf(a) {
  let l = ra;
  ra = !1;
  let s = a();
  return ((ra = l), s);
}
function Kr(a, l, s = {}) {
  let d;
  return (Nt(a, l)((p) => (d = p), s), d);
}
function Nt(...a) {
  return yf(...a);
}
var yf = bf;
function sp(a) {
  yf = a;
}
function bf(a, l) {
  let s = {};
  _o(s, a);
  let d = [s, ...Cn(a)],
    p = typeof l == "function" ? up(d, l) : cp(d, l, a);
  return lp.bind(null, a, l, p);
}
function up(a, l) {
  return (s = () => {}, { scope: d = {}, params: p = [] } = {}) => {
    let m = l.apply(gi([d, ...a]), p);
    oa(s, m);
  };
}
var vo = {};
function fp(a, l) {
  if (vo[a]) return vo[a];
  let s = Object.getPrototypeOf(async function () {}).constructor,
    d =
      /^[\n\s]*if.*\(.*\)/.test(a.trim()) || /^(let|const)\s/.test(a.trim())
        ? `(async()=>{ ${a} })()`
        : a,
    m = (() => {
      try {
        let y = new s(
          ["__self", "scope"],
          `with (scope) { __self.result = ${d} }; __self.finished = true; return __self.result;`,
        );
        return (
          Object.defineProperty(y, "name", { value: `[Alpine] ${a}` }),
          y
        );
      } catch (y) {
        return (di(y, l, a), Promise.resolve());
      }
    })();
  return ((vo[a] = m), m);
}
function cp(a, l, s) {
  let d = fp(l, s);
  return (p = () => {}, { scope: m = {}, params: y = [] } = {}) => {
    ((d.result = void 0), (d.finished = !1));
    let w = gi([m, ...a]);
    if (typeof d == "function") {
      let C = d(d, w).catch((L) => di(L, s, l));
      d.finished
        ? (oa(p, d.result, w, y, s), (d.result = void 0))
        : C.then((L) => {
            oa(p, L, w, y, s);
          })
            .catch((L) => di(L, s, l))
            .finally(() => (d.result = void 0));
    }
  };
}
function oa(a, l, s, d, p) {
  if (ra && typeof l == "function") {
    let m = l.apply(s, d);
    m instanceof Promise
      ? m.then((y) => oa(a, y, s, d)).catch((y) => di(y, p, l))
      : a(m);
  } else
    typeof l == "object" && l instanceof Promise ? l.then((m) => a(m)) : a(l);
}
var Yo = "x-";
function En(a = "") {
  return Yo + a;
}
function hp(a) {
  Yo = a;
}
var la = {};
function gt(a, l) {
  return (
    (la[a] = l),
    {
      before(s) {
        if (!la[s]) {
          console.warn(
            String.raw`Cannot find directive \`${s}\`. \`${a}\` will use the default order of execution`,
          );
          return;
        }
        const d = jr.indexOf(s);
        jr.splice(d >= 0 ? d : jr.indexOf("DEFAULT"), 0, a);
      },
    }
  );
}
function dp(a) {
  return Object.keys(la).includes(a);
}
function Zo(a, l, s) {
  if (((l = Array.from(l)), a._x_virtualDirectives)) {
    let m = Object.entries(a._x_virtualDirectives).map(([w, C]) => ({
        name: w,
        value: C,
      })),
      y = Df(m);
    ((m = m.map((w) =>
      y.find((C) => C.name === w.name)
        ? { name: `x-bind:${w.name}`, value: `"${w.value}"` }
        : w,
    )),
      (l = l.concat(m)));
  }
  let d = {};
  return l
    .map(Af((m, y) => (d[m] = y)))
    .filter(Ff)
    .map(vp(d, s))
    .sort(mp)
    .map((m) => gp(a, m));
}
function Df(a) {
  return Array.from(a)
    .map(Af())
    .filter((l) => !Ff(l));
}
var Mo = !1,
  fi = new Map(),
  wf = Symbol();
function pp(a) {
  Mo = !0;
  let l = Symbol();
  ((wf = l), fi.set(l, []));
  let s = () => {
      for (; fi.get(l).length; ) fi.get(l).shift()();
      fi.delete(l);
    },
    d = () => {
      ((Mo = !1), s());
    };
  (a(s), d());
}
function Cf(a) {
  let l = [],
    s = (w) => l.push(w),
    [d, p] = Jd(a);
  return (
    l.push(p),
    [
      {
        Alpine: vi,
        effect: d,
        cleanup: s,
        evaluateLater: Nt.bind(Nt, a),
        evaluate: Kr.bind(Kr, a),
      },
      () => l.forEach((w) => w()),
    ]
  );
}
function gp(a, l) {
  let s = () => {},
    d = la[l.type] || s,
    [p, m] = Cf(a);
  cf(a, l.original, m);
  let y = () => {
    a._x_ignore ||
      a._x_ignoreSelf ||
      (d.inline && d.inline(a, l, p),
      (d = d.bind(d, a, l, p)),
      Mo ? fi.get(wf).push(d) : d());
  };
  return ((y.runCleanups = m), y);
}
var kf =
    (a, l) =>
    ({ name: s, value: d }) => (
      s.startsWith(a) && (s = s.replace(a, l)),
      { name: s, value: d }
    ),
  Sf = (a) => a;
function Af(a = () => {}) {
  return ({ name: l, value: s }) => {
    let { name: d, value: p } = Ef.reduce((m, y) => y(m), {
      name: l,
      value: s,
    });
    return (d !== l && a(d, l), { name: d, value: p });
  };
}
var Ef = [];
function Jo(a) {
  Ef.push(a);
}
function Ff({ name: a }) {
  return Lf().test(a);
}
var Lf = () => new RegExp(`^${Yo}([^:^.]+)\\b`);
function vp(a, l) {
  return ({ name: s, value: d }) => {
    let p = s.match(Lf()),
      m = s.match(/:([a-zA-Z0-9\-_:]+)/),
      y = s.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
      w = l || a[s] || s;
    return {
      type: p ? p[1] : null,
      value: m ? m[1] : null,
      modifiers: y.map((C) => C.replace(".", "")),
      expression: d,
      original: w,
    };
  };
}
var Bo = "DEFAULT",
  jr = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    Bo,
    "teleport",
  ];
function mp(a, l) {
  let s = jr.indexOf(a.type) === -1 ? Bo : a.type,
    d = jr.indexOf(l.type) === -1 ? Bo : l.type;
  return jr.indexOf(s) - jr.indexOf(d);
}
function ci(a, l, s = {}) {
  a.dispatchEvent(
    new CustomEvent(l, {
      detail: s,
      bubbles: !0,
      composed: !0,
      cancelable: !0,
    }),
  );
}
function Yr(a, l) {
  if (typeof ShadowRoot == "function" && a instanceof ShadowRoot) {
    Array.from(a.children).forEach((p) => Yr(p, l));
    return;
  }
  let s = !1;
  if ((l(a, () => (s = !0)), s)) return;
  let d = a.firstElementChild;
  for (; d; ) (Yr(d, l), (d = d.nextElementSibling));
}
function Gt(a, ...l) {
  console.warn(`Alpine Warning: ${a}`, ...l);
}
var hu = !1;
function xp() {
  (hu &&
    Gt(
      "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.",
    ),
    (hu = !0),
    document.body ||
      Gt(
        "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?",
      ),
    ci(document, "alpine:init"),
    ci(document, "alpine:initializing"),
    Ko(),
    Qd((l) => dr(l, Yr)),
    Uo((l) => Ln(l)),
    ff((l, s) => {
      Zo(l, s).forEach((d) => d());
    }));
  let a = (l) => !ua(l.parentElement, !0);
  (Array.from(document.querySelectorAll(Mf().join(",")))
    .filter(a)
    .forEach((l) => {
      dr(l);
    }),
    ci(document, "alpine:initialized"),
    setTimeout(() => {
      wp();
    }));
}
var Qo = [],
  Tf = [];
function _f() {
  return Qo.map((a) => a());
}
function Mf() {
  return Qo.concat(Tf).map((a) => a());
}
function Bf(a) {
  Qo.push(a);
}
function Of(a) {
  Tf.push(a);
}
function ua(a, l = !1) {
  return Fn(a, (s) => {
    if ((l ? Mf() : _f()).some((p) => s.matches(p))) return !0;
  });
}
function Fn(a, l) {
  if (a) {
    if (l(a)) return a;
    if ((a._x_teleportBack && (a = a._x_teleportBack), !!a.parentElement))
      return Fn(a.parentElement, l);
  }
}
function yp(a) {
  return _f().some((l) => a.matches(l));
}
var If = [];
function bp(a) {
  If.push(a);
}
var Dp = 1;
function dr(a, l = Yr, s = () => {}) {
  Fn(a, (d) => d._x_ignore) ||
    pp(() => {
      l(a, (d, p) => {
        d._x_marker ||
          (s(d, p),
          If.forEach((m) => m(d, p)),
          Zo(d, d.attributes).forEach((m) => m()),
          d._x_ignore || (d._x_marker = Dp++),
          d._x_ignore && p());
      });
    });
}
function Ln(a, l = Yr) {
  l(a, (s) => {
    (Vd(s), hf(s), delete s._x_marker);
  });
}
function wp() {
  [
    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
    ["anchor", "anchor", ["[x-anchor]"]],
    ["sort", "sort", ["[x-sort]"]],
  ].forEach(([l, s, d]) => {
    dp(s) ||
      d.some((p) => {
        if (document.querySelector(p))
          return (Gt(`found "${p}", but missing ${l} plugin`), !0);
      });
  });
}
var Oo = [],
  Vo = !1;
function el(a = () => {}) {
  return (
    queueMicrotask(() => {
      Vo ||
        setTimeout(() => {
          Io();
        });
    }),
    new Promise((l) => {
      Oo.push(() => {
        (a(), l());
      });
    })
  );
}
function Io() {
  for (Vo = !1; Oo.length; ) Oo.shift()();
}
function Cp() {
  Vo = !0;
}
function tl(a, l) {
  return Array.isArray(l)
    ? du(a, l.join(" "))
    : typeof l == "object" && l !== null
      ? kp(a, l)
      : typeof l == "function"
        ? tl(a, l())
        : du(a, l);
}
function du(a, l) {
  let s = (p) =>
      p
        .split(" ")
        .filter((m) => !a.classList.contains(m))
        .filter(Boolean),
    d = (p) => (
      a.classList.add(...p),
      () => {
        a.classList.remove(...p);
      }
    );
  return ((l = l === !0 ? (l = "") : l || ""), d(s(l)));
}
function kp(a, l) {
  let s = (w) => w.split(" ").filter(Boolean),
    d = Object.entries(l)
      .flatMap(([w, C]) => (C ? s(w) : !1))
      .filter(Boolean),
    p = Object.entries(l)
      .flatMap(([w, C]) => (C ? !1 : s(w)))
      .filter(Boolean),
    m = [],
    y = [];
  return (
    p.forEach((w) => {
      a.classList.contains(w) && (a.classList.remove(w), y.push(w));
    }),
    d.forEach((w) => {
      a.classList.contains(w) || (a.classList.add(w), m.push(w));
    }),
    () => {
      (y.forEach((w) => a.classList.add(w)),
        m.forEach((w) => a.classList.remove(w)));
    }
  );
}
function fa(a, l) {
  return typeof l == "object" && l !== null ? Sp(a, l) : Ap(a, l);
}
function Sp(a, l) {
  let s = {};
  return (
    Object.entries(l).forEach(([d, p]) => {
      ((s[d] = a.style[d]),
        d.startsWith("--") || (d = Ep(d)),
        a.style.setProperty(d, p));
    }),
    setTimeout(() => {
      a.style.length === 0 && a.removeAttribute("style");
    }),
    () => {
      fa(a, s);
    }
  );
}
function Ap(a, l) {
  let s = a.getAttribute("style", l);
  return (
    a.setAttribute("style", l),
    () => {
      a.setAttribute("style", s || "");
    }
  );
}
function Ep(a) {
  return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function No(a, l = () => {}) {
  let s = !1;
  return function () {
    s ? l.apply(this, arguments) : ((s = !0), a.apply(this, arguments));
  };
}
gt(
  "transition",
  (a, { value: l, modifiers: s, expression: d }, { evaluate: p }) => {
    (typeof d == "function" && (d = p(d)),
      d !== !1 && (!d || typeof d == "boolean" ? Lp(a, s, l) : Fp(a, d, l)));
  },
);
function Fp(a, l, s) {
  (Nf(a, tl, ""),
    {
      enter: (p) => {
        a._x_transition.enter.during = p;
      },
      "enter-start": (p) => {
        a._x_transition.enter.start = p;
      },
      "enter-end": (p) => {
        a._x_transition.enter.end = p;
      },
      leave: (p) => {
        a._x_transition.leave.during = p;
      },
      "leave-start": (p) => {
        a._x_transition.leave.start = p;
      },
      "leave-end": (p) => {
        a._x_transition.leave.end = p;
      },
    }[s](l));
}
function Lp(a, l, s) {
  Nf(a, fa);
  let d = !l.includes("in") && !l.includes("out") && !s,
    p = d || l.includes("in") || ["enter"].includes(s),
    m = d || l.includes("out") || ["leave"].includes(s);
  (l.includes("in") && !d && (l = l.filter((te, W) => W < l.indexOf("out"))),
    l.includes("out") && !d && (l = l.filter((te, W) => W > l.indexOf("out"))));
  let y = !l.includes("opacity") && !l.includes("scale"),
    w = y || l.includes("opacity"),
    C = y || l.includes("scale"),
    L = w ? 0 : 1,
    K = C ? si(l, "scale", 95) / 100 : 1,
    $ = si(l, "delay", 0) / 1e3,
    j = si(l, "origin", "center"),
    ne = "opacity, transform",
    ae = si(l, "duration", 150) / 1e3,
    we = si(l, "duration", 75) / 1e3,
    Q = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  (p &&
    ((a._x_transition.enter.during = {
      transformOrigin: j,
      transitionDelay: `${$}s`,
      transitionProperty: ne,
      transitionDuration: `${ae}s`,
      transitionTimingFunction: Q,
    }),
    (a._x_transition.enter.start = { opacity: L, transform: `scale(${K})` }),
    (a._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
    m &&
      ((a._x_transition.leave.during = {
        transformOrigin: j,
        transitionDelay: `${$}s`,
        transitionProperty: ne,
        transitionDuration: `${we}s`,
        transitionTimingFunction: Q,
      }),
      (a._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
      (a._x_transition.leave.end = { opacity: L, transform: `scale(${K})` })));
}
function Nf(a, l, s = {}) {
  a._x_transition ||
    (a._x_transition = {
      enter: { during: s, start: s, end: s },
      leave: { during: s, start: s, end: s },
      in(d = () => {}, p = () => {}) {
        Ro(
          a,
          l,
          {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end,
          },
          d,
          p,
        );
      },
      out(d = () => {}, p = () => {}) {
        Ro(
          a,
          l,
          {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end,
          },
          d,
          p,
        );
      },
    });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
  a,
  l,
  s,
  d,
) {
  const p =
    document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let m = () => p(s);
  if (l) {
    a._x_transition && (a._x_transition.enter || a._x_transition.leave)
      ? a._x_transition.enter &&
        (Object.entries(a._x_transition.enter.during).length ||
          Object.entries(a._x_transition.enter.start).length ||
          Object.entries(a._x_transition.enter.end).length)
        ? a._x_transition.in(s)
        : m()
      : a._x_transition
        ? a._x_transition.in(s)
        : m();
    return;
  }
  ((a._x_hidePromise = a._x_transition
    ? new Promise((y, w) => {
        (a._x_transition.out(
          () => {},
          () => y(d),
        ),
          a._x_transitioning &&
            a._x_transitioning.beforeCancel(() =>
              w({ isFromCancelledTransition: !0 }),
            ));
      })
    : Promise.resolve(d)),
    queueMicrotask(() => {
      let y = Rf(a);
      y
        ? (y._x_hideChildren || (y._x_hideChildren = []),
          y._x_hideChildren.push(a))
        : p(() => {
            let w = (C) => {
              let L = Promise.all([
                C._x_hidePromise,
                ...(C._x_hideChildren || []).map(w),
              ]).then(([K]) => (K == null ? void 0 : K()));
              return (delete C._x_hidePromise, delete C._x_hideChildren, L);
            };
            w(a).catch((C) => {
              if (!C.isFromCancelledTransition) throw C;
            });
          });
    }));
};
function Rf(a) {
  let l = a.parentNode;
  if (l) return l._x_hidePromise ? l : Rf(l);
}
function Ro(
  a,
  l,
  { during: s, start: d, end: p } = {},
  m = () => {},
  y = () => {},
) {
  if (
    (a._x_transitioning && a._x_transitioning.cancel(),
    Object.keys(s).length === 0 &&
      Object.keys(d).length === 0 &&
      Object.keys(p).length === 0)
  ) {
    (m(), y());
    return;
  }
  let w, C, L;
  Tp(a, {
    start() {
      w = l(a, d);
    },
    during() {
      C = l(a, s);
    },
    before: m,
    end() {
      (w(), (L = l(a, p)));
    },
    after: y,
    cleanup() {
      (C(), L());
    },
  });
}
function Tp(a, l) {
  let s,
    d,
    p,
    m = No(() => {
      ot(() => {
        ((s = !0),
          d || l.before(),
          p || (l.end(), Io()),
          l.after(),
          a.isConnected && l.cleanup(),
          delete a._x_transitioning);
      });
    });
  ((a._x_transitioning = {
    beforeCancels: [],
    beforeCancel(y) {
      this.beforeCancels.push(y);
    },
    cancel: No(function () {
      for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
      m();
    }),
    finish: m,
  }),
    ot(() => {
      (l.start(), l.during());
    }),
    Cp(),
    requestAnimationFrame(() => {
      if (s) return;
      let y =
          Number(
            getComputedStyle(a)
              .transitionDuration.replace(/,.*/, "")
              .replace("s", ""),
          ) * 1e3,
        w =
          Number(
            getComputedStyle(a)
              .transitionDelay.replace(/,.*/, "")
              .replace("s", ""),
          ) * 1e3;
      (y === 0 &&
        (y =
          Number(getComputedStyle(a).animationDuration.replace("s", "")) * 1e3),
        ot(() => {
          l.before();
        }),
        (d = !0),
        requestAnimationFrame(() => {
          s ||
            (ot(() => {
              l.end();
            }),
            Io(),
            setTimeout(a._x_transitioning.finish, y + w),
            (p = !0));
        }));
    }));
}
function si(a, l, s) {
  if (a.indexOf(l) === -1) return s;
  const d = a[a.indexOf(l) + 1];
  if (!d || (l === "scale" && isNaN(d))) return s;
  if (l === "duration" || l === "delay") {
    let p = d.match(/([0-9]+)ms/);
    if (p) return p[1];
  }
  return l === "origin" &&
    ["top", "right", "left", "center", "bottom"].includes(a[a.indexOf(l) + 2])
    ? [d, a[a.indexOf(l) + 2]].join(" ")
    : d;
}
var Sr = !1;
function Er(a, l = () => {}) {
  return (...s) => (Sr ? l(...s) : a(...s));
}
function _p(a) {
  return (...l) => Sr && a(...l);
}
var Hf = [];
function ca(a) {
  Hf.push(a);
}
function Mp(a, l) {
  (Hf.forEach((s) => s(a, l)),
    (Sr = !0),
    Pf(() => {
      dr(l, (s, d) => {
        d(s, () => {});
      });
    }),
    (Sr = !1));
}
var Ho = !1;
function Bp(a, l) {
  (l._x_dataStack || (l._x_dataStack = a._x_dataStack),
    (Sr = !0),
    (Ho = !0),
    Pf(() => {
      Op(l);
    }),
    (Sr = !1),
    (Ho = !1));
}
function Op(a) {
  let l = !1;
  dr(a, (d, p) => {
    Yr(d, (m, y) => {
      if (l && yp(m)) return y();
      ((l = !0), p(m, y));
    });
  });
}
function Pf(a) {
  let l = Zr;
  (cu((s, d) => {
    let p = l(s);
    return (An(p), () => {});
  }),
    a(),
    cu(l));
}
function zf(a, l, s, d = []) {
  switch (
    (a._x_bindings || (a._x_bindings = Sn({})),
    (a._x_bindings[l] = s),
    (l = d.includes("camel") ? qp(l) : l),
    l)
  ) {
    case "value":
      Ip(a, s);
      break;
    case "style":
      Rp(a, s);
      break;
    case "class":
      Np(a, s);
      break;
    case "selected":
    case "checked":
      Hp(a, l, s);
      break;
    default:
      Wf(a, l, s);
      break;
  }
}
function Ip(a, l) {
  if (jf(a))
    (a.attributes.value === void 0 && (a.value = l),
      window.fromModel &&
        (typeof l == "boolean"
          ? (a.checked = na(a.value) === l)
          : (a.checked = pu(a.value, l))));
  else if (rl(a))
    Number.isInteger(l)
      ? (a.value = l)
      : !Array.isArray(l) &&
          typeof l != "boolean" &&
          ![null, void 0].includes(l)
        ? (a.value = String(l))
        : Array.isArray(l)
          ? (a.checked = l.some((s) => pu(s, a.value)))
          : (a.checked = !!l);
  else if (a.tagName === "SELECT") Wp(a, l);
  else {
    if (a.value === l) return;
    a.value = l === void 0 ? "" : l;
  }
}
function Np(a, l) {
  (a._x_undoAddedClasses && a._x_undoAddedClasses(),
    (a._x_undoAddedClasses = tl(a, l)));
}
function Rp(a, l) {
  (a._x_undoAddedStyles && a._x_undoAddedStyles(),
    (a._x_undoAddedStyles = fa(a, l)));
}
function Hp(a, l, s) {
  (Wf(a, l, s), zp(a, l, s));
}
function Wf(a, l, s) {
  [null, void 0, !1].includes(s) && jp(l)
    ? a.removeAttribute(l)
    : (qf(l) && (s = l), Pp(a, l, s));
}
function Pp(a, l, s) {
  a.getAttribute(l) != s && a.setAttribute(l, s);
}
function zp(a, l, s) {
  a[l] !== s && (a[l] = s);
}
function Wp(a, l) {
  const s = [].concat(l).map((d) => d + "");
  Array.from(a.options).forEach((d) => {
    d.selected = s.includes(d.value);
  });
}
function qp(a) {
  return a.toLowerCase().replace(/-(\w)/g, (l, s) => s.toUpperCase());
}
function pu(a, l) {
  return a == l;
}
function na(a) {
  return [1, "1", "true", "on", "yes", !0].includes(a)
    ? !0
    : [0, "0", "false", "off", "no", !1].includes(a)
      ? !1
      : a
        ? !!a
        : null;
}
var Up = new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "shadowrootclonable",
  "shadowrootdelegatesfocus",
  "shadowrootserializable",
]);
function qf(a) {
  return Up.has(a);
}
function jp(a) {
  return ![
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected",
  ].includes(a);
}
function Gp(a, l, s) {
  return a._x_bindings && a._x_bindings[l] !== void 0
    ? a._x_bindings[l]
    : Uf(a, l, s);
}
function Kp(a, l, s, d = !0) {
  if (a._x_bindings && a._x_bindings[l] !== void 0) return a._x_bindings[l];
  if (a._x_inlineBindings && a._x_inlineBindings[l] !== void 0) {
    let p = a._x_inlineBindings[l];
    return ((p.extract = d), xf(() => Kr(a, p.expression)));
  }
  return Uf(a, l, s);
}
function Uf(a, l, s) {
  let d = a.getAttribute(l);
  return d === null
    ? typeof s == "function"
      ? s()
      : s
    : d === ""
      ? !0
      : qf(l)
        ? !![l, "true"].includes(d)
        : d;
}
function rl(a) {
  return (
    a.type === "checkbox" ||
    a.localName === "ui-checkbox" ||
    a.localName === "ui-switch"
  );
}
function jf(a) {
  return a.type === "radio" || a.localName === "ui-radio";
}
function Gf(a, l) {
  var s;
  return function () {
    var d = this,
      p = arguments,
      m = function () {
        ((s = null), a.apply(d, p));
      };
    (clearTimeout(s), (s = setTimeout(m, l)));
  };
}
function Kf(a, l) {
  let s;
  return function () {
    let d = this,
      p = arguments;
    s || (a.apply(d, p), (s = !0), setTimeout(() => (s = !1), l));
  };
}
function $f({ get: a, set: l }, { get: s, set: d }) {
  let p = !0,
    m,
    y = Zr(() => {
      let w = a(),
        C = s();
      if (p) (d(mo(w)), (p = !1));
      else {
        let L = JSON.stringify(w),
          K = JSON.stringify(C);
        L !== m ? d(mo(w)) : L !== K && l(mo(C));
      }
      ((m = JSON.stringify(a())), JSON.stringify(s()));
    });
  return () => {
    An(y);
  };
}
function mo(a) {
  return typeof a == "object" ? JSON.parse(JSON.stringify(a)) : a;
}
function $p(a) {
  (Array.isArray(a) ? a : [a]).forEach((s) => s(vi));
}
var qr = {},
  gu = !1;
function Xp(a, l) {
  if ((gu || ((qr = Sn(qr)), (gu = !0)), l === void 0)) return qr[a];
  ((qr[a] = l),
    gf(qr[a]),
    typeof l == "object" &&
      l !== null &&
      l.hasOwnProperty("init") &&
      typeof l.init == "function" &&
      qr[a].init());
}
function Yp() {
  return qr;
}
var Xf = {};
function Zp(a, l) {
  let s = typeof l != "function" ? () => l : l;
  return a instanceof Element ? Yf(a, s()) : ((Xf[a] = s), () => {});
}
function Jp(a) {
  return (
    Object.entries(Xf).forEach(([l, s]) => {
      Object.defineProperty(a, l, {
        get() {
          return (...d) => s(...d);
        },
      });
    }),
    a
  );
}
function Yf(a, l, s) {
  let d = [];
  for (; d.length; ) d.pop()();
  let p = Object.entries(l).map(([y, w]) => ({ name: y, value: w })),
    m = Df(p);
  return (
    (p = p.map((y) =>
      m.find((w) => w.name === y.name)
        ? { name: `x-bind:${y.name}`, value: `"${y.value}"` }
        : y,
    )),
    Zo(a, p, s).map((y) => {
      (d.push(y.runCleanups), y());
    }),
    () => {
      for (; d.length; ) d.pop()();
    }
  );
}
var Zf = {};
function Qp(a, l) {
  Zf[a] = l;
}
function Vp(a, l) {
  return (
    Object.entries(Zf).forEach(([s, d]) => {
      Object.defineProperty(a, s, {
        get() {
          return (...p) => d.bind(l)(...p);
        },
        enumerable: !1,
      });
    }),
    a
  );
}
var eg = {
    get reactive() {
      return Sn;
    },
    get release() {
      return An;
    },
    get effect() {
      return Zr;
    },
    get raw() {
      return af;
    },
    version: "3.14.9",
    flushAndStopDeferringMutations: rp,
    dontAutoEvaluateFunctions: xf,
    disableEffectScheduling: Yd,
    startObservingMutations: Ko,
    stopObservingMutations: df,
    setReactivityEngine: Zd,
    onAttributeRemoved: cf,
    onAttributesAdded: ff,
    closestDataStack: Cn,
    skipDuringClone: Er,
    onlyDuringClone: _p,
    addRootSelector: Bf,
    addInitSelector: Of,
    interceptClone: ca,
    addScopeToNode: pi,
    deferMutations: tp,
    mapAttributes: Jo,
    evaluateLater: Nt,
    interceptInit: bp,
    setEvaluator: sp,
    mergeProxies: gi,
    extractProp: Kp,
    findClosest: Fn,
    onElRemoved: Uo,
    closestRoot: ua,
    destroyTree: Ln,
    interceptor: vf,
    transition: Ro,
    setStyles: fa,
    mutateDom: ot,
    directive: gt,
    entangle: $f,
    throttle: Kf,
    debounce: Gf,
    evaluate: Kr,
    initTree: dr,
    nextTick: el,
    prefixed: En,
    prefix: hp,
    plugin: $p,
    magic: Vt,
    store: Xp,
    start: xp,
    clone: Bp,
    cloneNode: Mp,
    bound: Gp,
    $data: pf,
    watch: of,
    walk: Yr,
    data: Qp,
    bind: Zp,
  },
  vi = eg;
function tg(a, l) {
  const s = Object.create(null),
    d = a.split(",");
  for (let p = 0; p < d.length; p++) s[d[p]] = !0;
  return (p) => !!s[p];
}
var rg = Object.freeze({}),
  ng = Object.prototype.hasOwnProperty,
  ha = (a, l) => ng.call(a, l),
  $r = Array.isArray,
  hi = (a) => Jf(a) === "[object Map]",
  ig = (a) => typeof a == "string",
  nl = (a) => typeof a == "symbol",
  da = (a) => a !== null && typeof a == "object",
  ag = Object.prototype.toString,
  Jf = (a) => ag.call(a),
  Qf = (a) => Jf(a).slice(8, -1),
  il = (a) =>
    ig(a) && a !== "NaN" && a[0] !== "-" && "" + parseInt(a, 10) === a,
  og = (a) => {
    const l = Object.create(null);
    return (s) => l[s] || (l[s] = a(s));
  },
  lg = og((a) => a.charAt(0).toUpperCase() + a.slice(1)),
  Vf = (a, l) => a !== l && (a === a || l === l),
  Po = new WeakMap(),
  ui = [],
  or,
  Xr = Symbol("iterate"),
  zo = Symbol("Map key iterate");
function sg(a) {
  return a && a._isEffect === !0;
}
function ug(a, l = rg) {
  sg(a) && (a = a.raw);
  const s = hg(a, l);
  return (l.lazy || s(), s);
}
function fg(a) {
  a.active && (ec(a), a.options.onStop && a.options.onStop(), (a.active = !1));
}
var cg = 0;
function hg(a, l) {
  const s = function () {
    if (!s.active) return a();
    if (!ui.includes(s)) {
      ec(s);
      try {
        return (pg(), ui.push(s), (or = s), a());
      } finally {
        (ui.pop(), tc(), (or = ui[ui.length - 1]));
      }
    }
  };
  return (
    (s.id = cg++),
    (s.allowRecurse = !!l.allowRecurse),
    (s._isEffect = !0),
    (s.active = !0),
    (s.raw = a),
    (s.deps = []),
    (s.options = l),
    s
  );
}
function ec(a) {
  const { deps: l } = a;
  if (l.length) {
    for (let s = 0; s < l.length; s++) l[s].delete(a);
    l.length = 0;
  }
}
var kn = !0,
  al = [];
function dg() {
  (al.push(kn), (kn = !1));
}
function pg() {
  (al.push(kn), (kn = !0));
}
function tc() {
  const a = al.pop();
  kn = a === void 0 ? !0 : a;
}
function Qt(a, l, s) {
  if (!kn || or === void 0) return;
  let d = Po.get(a);
  d || Po.set(a, (d = new Map()));
  let p = d.get(s);
  (p || d.set(s, (p = new Set())),
    p.has(or) ||
      (p.add(or),
      or.deps.push(p),
      or.options.onTrack &&
        or.options.onTrack({ effect: or, target: a, type: l, key: s })));
}
function Ar(a, l, s, d, p, m) {
  const y = Po.get(a);
  if (!y) return;
  const w = new Set(),
    C = (K) => {
      K &&
        K.forEach(($) => {
          ($ !== or || $.allowRecurse) && w.add($);
        });
    };
  if (l === "clear") y.forEach(C);
  else if (s === "length" && $r(a))
    y.forEach((K, $) => {
      ($ === "length" || $ >= d) && C(K);
    });
  else
    switch ((s !== void 0 && C(y.get(s)), l)) {
      case "add":
        $r(a)
          ? il(s) && C(y.get("length"))
          : (C(y.get(Xr)), hi(a) && C(y.get(zo)));
        break;
      case "delete":
        $r(a) || (C(y.get(Xr)), hi(a) && C(y.get(zo)));
        break;
      case "set":
        hi(a) && C(y.get(Xr));
        break;
    }
  const L = (K) => {
    (K.options.onTrigger &&
      K.options.onTrigger({
        effect: K,
        target: a,
        key: s,
        type: l,
        newValue: d,
        oldValue: p,
        oldTarget: m,
      }),
      K.options.scheduler ? K.options.scheduler(K) : K());
  };
  w.forEach(L);
}
var gg = tg("__proto__,__v_isRef,__isVue"),
  rc = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((a) => Symbol[a])
      .filter(nl),
  ),
  vg = nc(),
  mg = nc(!0),
  vu = xg();
function xg() {
  const a = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((l) => {
      a[l] = function (...s) {
        const d = tt(this);
        for (let m = 0, y = this.length; m < y; m++) Qt(d, "get", m + "");
        const p = d[l](...s);
        return p === -1 || p === !1 ? d[l](...s.map(tt)) : p;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((l) => {
      a[l] = function (...s) {
        dg();
        const d = tt(this)[l].apply(this, s);
        return (tc(), d);
      };
    }),
    a
  );
}
function nc(a = !1, l = !1) {
  return function (d, p, m) {
    if (p === "__v_isReactive") return !a;
    if (p === "__v_isReadonly") return a;
    if (p === "__v_raw" && m === (a ? (l ? Mg : lc) : l ? _g : oc).get(d))
      return d;
    const y = $r(d);
    if (!a && y && ha(vu, p)) return Reflect.get(vu, p, m);
    const w = Reflect.get(d, p, m);
    return (nl(p) ? rc.has(p) : gg(p)) || (a || Qt(d, "get", p), l)
      ? w
      : Wo(w)
        ? !y || !il(p)
          ? w.value
          : w
        : da(w)
          ? a
            ? sc(w)
            : ul(w)
          : w;
  };
}
var yg = bg();
function bg(a = !1) {
  return function (s, d, p, m) {
    let y = s[d];
    if (!a && ((p = tt(p)), (y = tt(y)), !$r(s) && Wo(y) && !Wo(p)))
      return ((y.value = p), !0);
    const w = $r(s) && il(d) ? Number(d) < s.length : ha(s, d),
      C = Reflect.set(s, d, p, m);
    return (
      s === tt(m) &&
        (w ? Vf(p, y) && Ar(s, "set", d, p, y) : Ar(s, "add", d, p)),
      C
    );
  };
}
function Dg(a, l) {
  const s = ha(a, l),
    d = a[l],
    p = Reflect.deleteProperty(a, l);
  return (p && s && Ar(a, "delete", l, void 0, d), p);
}
function wg(a, l) {
  const s = Reflect.has(a, l);
  return ((!nl(l) || !rc.has(l)) && Qt(a, "has", l), s);
}
function Cg(a) {
  return (Qt(a, "iterate", $r(a) ? "length" : Xr), Reflect.ownKeys(a));
}
var kg = { get: vg, set: yg, deleteProperty: Dg, has: wg, ownKeys: Cg },
  Sg = {
    get: mg,
    set(a, l) {
      return (
        console.warn(
          `Set operation on key "${String(l)}" failed: target is readonly.`,
          a,
        ),
        !0
      );
    },
    deleteProperty(a, l) {
      return (
        console.warn(
          `Delete operation on key "${String(l)}" failed: target is readonly.`,
          a,
        ),
        !0
      );
    },
  },
  ol = (a) => (da(a) ? ul(a) : a),
  ll = (a) => (da(a) ? sc(a) : a),
  sl = (a) => a,
  pa = (a) => Reflect.getPrototypeOf(a);
function Ji(a, l, s = !1, d = !1) {
  a = a.__v_raw;
  const p = tt(a),
    m = tt(l);
  (l !== m && !s && Qt(p, "get", l), !s && Qt(p, "get", m));
  const { has: y } = pa(p),
    w = d ? sl : s ? ll : ol;
  if (y.call(p, l)) return w(a.get(l));
  if (y.call(p, m)) return w(a.get(m));
  a !== p && a.get(l);
}
function Qi(a, l = !1) {
  const s = this.__v_raw,
    d = tt(s),
    p = tt(a);
  return (
    a !== p && !l && Qt(d, "has", a),
    !l && Qt(d, "has", p),
    a === p ? s.has(a) : s.has(a) || s.has(p)
  );
}
function Vi(a, l = !1) {
  return (
    (a = a.__v_raw),
    !l && Qt(tt(a), "iterate", Xr),
    Reflect.get(a, "size", a)
  );
}
function mu(a) {
  a = tt(a);
  const l = tt(this);
  return (pa(l).has.call(l, a) || (l.add(a), Ar(l, "add", a, a)), this);
}
function xu(a, l) {
  l = tt(l);
  const s = tt(this),
    { has: d, get: p } = pa(s);
  let m = d.call(s, a);
  m ? ac(s, d, a) : ((a = tt(a)), (m = d.call(s, a)));
  const y = p.call(s, a);
  return (
    s.set(a, l),
    m ? Vf(l, y) && Ar(s, "set", a, l, y) : Ar(s, "add", a, l),
    this
  );
}
function yu(a) {
  const l = tt(this),
    { has: s, get: d } = pa(l);
  let p = s.call(l, a);
  p ? ac(l, s, a) : ((a = tt(a)), (p = s.call(l, a)));
  const m = d ? d.call(l, a) : void 0,
    y = l.delete(a);
  return (p && Ar(l, "delete", a, void 0, m), y);
}
function bu() {
  const a = tt(this),
    l = a.size !== 0,
    s = hi(a) ? new Map(a) : new Set(a),
    d = a.clear();
  return (l && Ar(a, "clear", void 0, void 0, s), d);
}
function ea(a, l) {
  return function (d, p) {
    const m = this,
      y = m.__v_raw,
      w = tt(y),
      C = l ? sl : a ? ll : ol;
    return (
      !a && Qt(w, "iterate", Xr),
      y.forEach((L, K) => d.call(p, C(L), C(K), m))
    );
  };
}
function ta(a, l, s) {
  return function (...d) {
    const p = this.__v_raw,
      m = tt(p),
      y = hi(m),
      w = a === "entries" || (a === Symbol.iterator && y),
      C = a === "keys" && y,
      L = p[a](...d),
      K = s ? sl : l ? ll : ol;
    return (
      !l && Qt(m, "iterate", C ? zo : Xr),
      {
        next() {
          const { value: $, done: j } = L.next();
          return j
            ? { value: $, done: j }
            : { value: w ? [K($[0]), K($[1])] : K($), done: j };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function kr(a) {
  return function (...l) {
    {
      const s = l[0] ? `on key "${l[0]}" ` : "";
      console.warn(
        `${lg(a)} operation ${s}failed: target is readonly.`,
        tt(this),
      );
    }
    return a === "delete" ? !1 : this;
  };
}
function Ag() {
  const a = {
      get(m) {
        return Ji(this, m);
      },
      get size() {
        return Vi(this);
      },
      has: Qi,
      add: mu,
      set: xu,
      delete: yu,
      clear: bu,
      forEach: ea(!1, !1),
    },
    l = {
      get(m) {
        return Ji(this, m, !1, !0);
      },
      get size() {
        return Vi(this);
      },
      has: Qi,
      add: mu,
      set: xu,
      delete: yu,
      clear: bu,
      forEach: ea(!1, !0),
    },
    s = {
      get(m) {
        return Ji(this, m, !0);
      },
      get size() {
        return Vi(this, !0);
      },
      has(m) {
        return Qi.call(this, m, !0);
      },
      add: kr("add"),
      set: kr("set"),
      delete: kr("delete"),
      clear: kr("clear"),
      forEach: ea(!0, !1),
    },
    d = {
      get(m) {
        return Ji(this, m, !0, !0);
      },
      get size() {
        return Vi(this, !0);
      },
      has(m) {
        return Qi.call(this, m, !0);
      },
      add: kr("add"),
      set: kr("set"),
      delete: kr("delete"),
      clear: kr("clear"),
      forEach: ea(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((m) => {
      ((a[m] = ta(m, !1, !1)),
        (s[m] = ta(m, !0, !1)),
        (l[m] = ta(m, !1, !0)),
        (d[m] = ta(m, !0, !0)));
    }),
    [a, s, l, d]
  );
}
var [Eg, Fg] = Ag();
function ic(a, l) {
  const s = a ? Fg : Eg;
  return (d, p, m) =>
    p === "__v_isReactive"
      ? !a
      : p === "__v_isReadonly"
        ? a
        : p === "__v_raw"
          ? d
          : Reflect.get(ha(s, p) && p in d ? s : d, p, m);
}
var Lg = { get: ic(!1) },
  Tg = { get: ic(!0) };
function ac(a, l, s) {
  const d = tt(s);
  if (d !== s && l.call(a, d)) {
    const p = Qf(a);
    console.warn(
      `Reactive ${p} contains both the raw and reactive versions of the same object${p === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`,
    );
  }
}
var oc = new WeakMap(),
  _g = new WeakMap(),
  lc = new WeakMap(),
  Mg = new WeakMap();
function Bg(a) {
  switch (a) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Og(a) {
  return a.__v_skip || !Object.isExtensible(a) ? 0 : Bg(Qf(a));
}
function ul(a) {
  return a && a.__v_isReadonly ? a : uc(a, !1, kg, Lg, oc);
}
function sc(a) {
  return uc(a, !0, Sg, Tg, lc);
}
function uc(a, l, s, d, p) {
  if (!da(a))
    return (console.warn(`value cannot be made reactive: ${String(a)}`), a);
  if (a.__v_raw && !(l && a.__v_isReactive)) return a;
  const m = p.get(a);
  if (m) return m;
  const y = Og(a);
  if (y === 0) return a;
  const w = new Proxy(a, y === 2 ? d : s);
  return (p.set(a, w), w);
}
function tt(a) {
  return (a && tt(a.__v_raw)) || a;
}
function Wo(a) {
  return !!(a && a.__v_isRef === !0);
}
Vt("nextTick", () => el);
Vt("dispatch", (a) => ci.bind(ci, a));
Vt("watch", (a, { evaluateLater: l, cleanup: s }) => (d, p) => {
  let m = l(d),
    w = of(() => {
      let C;
      return (m((L) => (C = L)), C);
    }, p);
  s(w);
});
Vt("store", Yp);
Vt("data", (a) => pf(a));
Vt("root", (a) => ua(a));
Vt(
  "refs",
  (a) => (a._x_refs_proxy || (a._x_refs_proxy = gi(Ig(a))), a._x_refs_proxy),
);
function Ig(a) {
  let l = [];
  return (
    Fn(a, (s) => {
      s._x_refs && l.push(s._x_refs);
    }),
    l
  );
}
var xo = {};
function fc(a) {
  return (xo[a] || (xo[a] = 0), ++xo[a]);
}
function Ng(a, l) {
  return Fn(a, (s) => {
    if (s._x_ids && s._x_ids[l]) return !0;
  });
}
function Rg(a, l) {
  (a._x_ids || (a._x_ids = {}), a._x_ids[l] || (a._x_ids[l] = fc(l)));
}
Vt("id", (a, { cleanup: l }) => (s, d = null) => {
  let p = `${s}${d ? `-${d}` : ""}`;
  return Hg(a, p, l, () => {
    let m = Ng(a, s),
      y = m ? m._x_ids[s] : fc(s);
    return d ? `${s}-${y}-${d}` : `${s}-${y}`;
  });
});
ca((a, l) => {
  a._x_id && (l._x_id = a._x_id);
});
function Hg(a, l, s, d) {
  if ((a._x_id || (a._x_id = {}), a._x_id[l])) return a._x_id[l];
  let p = d();
  return (
    (a._x_id[l] = p),
    s(() => {
      delete a._x_id[l];
    }),
    p
  );
}
Vt("el", (a) => a);
cc("Focus", "focus", "focus");
cc("Persist", "persist", "persist");
function cc(a, l, s) {
  Vt(l, (d) =>
    Gt(
      `You can't use [$${l}] without first installing the "${a}" plugin here: https://alpinejs.dev/plugins/${s}`,
      d,
    ),
  );
}
gt(
  "modelable",
  (a, { expression: l }, { effect: s, evaluateLater: d, cleanup: p }) => {
    let m = d(l),
      y = () => {
        let K;
        return (m(($) => (K = $)), K);
      },
      w = d(`${l} = __placeholder`),
      C = (K) => w(() => {}, { scope: { __placeholder: K } }),
      L = y();
    (C(L),
      queueMicrotask(() => {
        if (!a._x_model) return;
        a._x_removeModelListeners.default();
        let K = a._x_model.get,
          $ = a._x_model.set,
          j = $f(
            {
              get() {
                return K();
              },
              set(ne) {
                $(ne);
              },
            },
            {
              get() {
                return y();
              },
              set(ne) {
                C(ne);
              },
            },
          );
        p(j);
      }));
  },
);
gt("teleport", (a, { modifiers: l, expression: s }, { cleanup: d }) => {
  a.tagName.toLowerCase() !== "template" &&
    Gt("x-teleport can only be used on a <template> tag", a);
  let p = Du(s),
    m = a.content.cloneNode(!0).firstElementChild;
  ((a._x_teleport = m),
    (m._x_teleportBack = a),
    a.setAttribute("data-teleport-template", !0),
    m.setAttribute("data-teleport-target", !0),
    a._x_forwardEvents &&
      a._x_forwardEvents.forEach((w) => {
        m.addEventListener(w, (C) => {
          (C.stopPropagation(), a.dispatchEvent(new C.constructor(C.type, C)));
        });
      }),
    pi(m, {}, a));
  let y = (w, C, L) => {
    L.includes("prepend")
      ? C.parentNode.insertBefore(w, C)
      : L.includes("append")
        ? C.parentNode.insertBefore(w, C.nextSibling)
        : C.appendChild(w);
  };
  (ot(() => {
    (y(m, p, l),
      Er(() => {
        dr(m);
      })());
  }),
    (a._x_teleportPutBack = () => {
      let w = Du(s);
      ot(() => {
        y(a._x_teleport, w, l);
      });
    }),
    d(() =>
      ot(() => {
        (m.remove(), Ln(m));
      }),
    ));
});
var Pg = document.createElement("div");
function Du(a) {
  let l = Er(
    () => document.querySelector(a),
    () => Pg,
  )();
  return (l || Gt(`Cannot find x-teleport element for selector: "${a}"`), l);
}
var hc = () => {};
hc.inline = (a, { modifiers: l }, { cleanup: s }) => {
  (l.includes("self") ? (a._x_ignoreSelf = !0) : (a._x_ignore = !0),
    s(() => {
      l.includes("self") ? delete a._x_ignoreSelf : delete a._x_ignore;
    }));
};
gt("ignore", hc);
gt(
  "effect",
  Er((a, { expression: l }, { effect: s }) => {
    s(Nt(a, l));
  }),
);
function qo(a, l, s, d) {
  let p = a,
    m = (C) => d(C),
    y = {},
    w = (C, L) => (K) => L(C, K);
  if (
    (s.includes("dot") && (l = zg(l)),
    s.includes("camel") && (l = Wg(l)),
    s.includes("passive") && (y.passive = !0),
    s.includes("capture") && (y.capture = !0),
    s.includes("window") && (p = window),
    s.includes("document") && (p = document),
    s.includes("debounce"))
  ) {
    let C = s[s.indexOf("debounce") + 1] || "invalid-wait",
      L = sa(C.split("ms")[0]) ? Number(C.split("ms")[0]) : 250;
    m = Gf(m, L);
  }
  if (s.includes("throttle")) {
    let C = s[s.indexOf("throttle") + 1] || "invalid-wait",
      L = sa(C.split("ms")[0]) ? Number(C.split("ms")[0]) : 250;
    m = Kf(m, L);
  }
  return (
    s.includes("prevent") &&
      (m = w(m, (C, L) => {
        (L.preventDefault(), C(L));
      })),
    s.includes("stop") &&
      (m = w(m, (C, L) => {
        (L.stopPropagation(), C(L));
      })),
    s.includes("once") &&
      (m = w(m, (C, L) => {
        (C(L), p.removeEventListener(l, m, y));
      })),
    (s.includes("away") || s.includes("outside")) &&
      ((p = document),
      (m = w(m, (C, L) => {
        a.contains(L.target) ||
          (L.target.isConnected !== !1 &&
            ((a.offsetWidth < 1 && a.offsetHeight < 1) ||
              (a._x_isShown !== !1 && C(L))));
      }))),
    s.includes("self") &&
      (m = w(m, (C, L) => {
        L.target === a && C(L);
      })),
    (Ug(l) || dc(l)) &&
      (m = w(m, (C, L) => {
        jg(L, s) || C(L);
      })),
    p.addEventListener(l, m, y),
    () => {
      p.removeEventListener(l, m, y);
    }
  );
}
function zg(a) {
  return a.replace(/-/g, ".");
}
function Wg(a) {
  return a.toLowerCase().replace(/-(\w)/g, (l, s) => s.toUpperCase());
}
function sa(a) {
  return !Array.isArray(a) && !isNaN(a);
}
function qg(a) {
  return [" ", "_"].includes(a)
    ? a
    : a
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[_\s]/, "-")
        .toLowerCase();
}
function Ug(a) {
  return ["keydown", "keyup"].includes(a);
}
function dc(a) {
  return ["contextmenu", "click", "mouse"].some((l) => a.includes(l));
}
function jg(a, l) {
  let s = l.filter(
    (m) =>
      ![
        "window",
        "document",
        "prevent",
        "stop",
        "once",
        "capture",
        "self",
        "away",
        "outside",
        "passive",
      ].includes(m),
  );
  if (s.includes("debounce")) {
    let m = s.indexOf("debounce");
    s.splice(m, sa((s[m + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (s.includes("throttle")) {
    let m = s.indexOf("throttle");
    s.splice(m, sa((s[m + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (s.length === 0 || (s.length === 1 && wu(a.key).includes(s[0]))) return !1;
  const p = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((m) =>
    s.includes(m),
  );
  return (
    (s = s.filter((m) => !p.includes(m))),
    !(
      p.length > 0 &&
      p.filter(
        (y) => ((y === "cmd" || y === "super") && (y = "meta"), a[`${y}Key`]),
      ).length === p.length &&
      (dc(a.type) || wu(a.key).includes(s[0]))
    )
  );
}
function wu(a) {
  if (!a) return [];
  a = qg(a);
  let l = {
    ctrl: "control",
    slash: "/",
    space: " ",
    spacebar: " ",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    comma: ",",
    equal: "=",
    minus: "-",
    underscore: "_",
  };
  return (
    (l[a] = a),
    Object.keys(l)
      .map((s) => {
        if (l[s] === a) return s;
      })
      .filter((s) => s)
  );
}
gt("model", (a, { modifiers: l, expression: s }, { effect: d, cleanup: p }) => {
  let m = a;
  l.includes("parent") && (m = a.parentNode);
  let y = Nt(m, s),
    w;
  typeof s == "string"
    ? (w = Nt(m, `${s} = __placeholder`))
    : typeof s == "function" && typeof s() == "string"
      ? (w = Nt(m, `${s()} = __placeholder`))
      : (w = () => {});
  let C = () => {
      let j;
      return (y((ne) => (j = ne)), Cu(j) ? j.get() : j);
    },
    L = (j) => {
      let ne;
      (y((ae) => (ne = ae)),
        Cu(ne) ? ne.set(j) : w(() => {}, { scope: { __placeholder: j } }));
    };
  typeof s == "string" &&
    a.type === "radio" &&
    ot(() => {
      a.hasAttribute("name") || a.setAttribute("name", s);
    });
  var K =
    a.tagName.toLowerCase() === "select" ||
    ["checkbox", "radio"].includes(a.type) ||
    l.includes("lazy")
      ? "change"
      : "input";
  let $ = Sr
    ? () => {}
    : qo(a, K, l, (j) => {
        L(yo(a, l, j, C()));
      });
  if (
    (l.includes("fill") &&
      ([void 0, null, ""].includes(C()) ||
        (rl(a) && Array.isArray(C())) ||
        (a.tagName.toLowerCase() === "select" && a.multiple)) &&
      L(yo(a, l, { target: a }, C())),
    a._x_removeModelListeners || (a._x_removeModelListeners = {}),
    (a._x_removeModelListeners.default = $),
    p(() => a._x_removeModelListeners.default()),
    a.form)
  ) {
    let j = qo(a.form, "reset", [], (ne) => {
      el(() => a._x_model && a._x_model.set(yo(a, l, { target: a }, C())));
    });
    p(() => j());
  }
  ((a._x_model = {
    get() {
      return C();
    },
    set(j) {
      L(j);
    },
  }),
    (a._x_forceModelUpdate = (j) => {
      (j === void 0 && typeof s == "string" && s.match(/\./) && (j = ""),
        (window.fromModel = !0),
        ot(() => zf(a, "value", j)),
        delete window.fromModel);
    }),
    d(() => {
      let j = C();
      (l.includes("unintrusive") && document.activeElement.isSameNode(a)) ||
        a._x_forceModelUpdate(j);
    }));
});
function yo(a, l, s, d) {
  return ot(() => {
    if (s instanceof CustomEvent && s.detail !== void 0)
      return s.detail !== null && s.detail !== void 0
        ? s.detail
        : s.target.value;
    if (rl(a))
      if (Array.isArray(d)) {
        let p = null;
        return (
          l.includes("number")
            ? (p = bo(s.target.value))
            : l.includes("boolean")
              ? (p = na(s.target.value))
              : (p = s.target.value),
          s.target.checked
            ? d.includes(p)
              ? d
              : d.concat([p])
            : d.filter((m) => !Gg(m, p))
        );
      } else return s.target.checked;
    else {
      if (a.tagName.toLowerCase() === "select" && a.multiple)
        return l.includes("number")
          ? Array.from(s.target.selectedOptions).map((p) => {
              let m = p.value || p.text;
              return bo(m);
            })
          : l.includes("boolean")
            ? Array.from(s.target.selectedOptions).map((p) => {
                let m = p.value || p.text;
                return na(m);
              })
            : Array.from(s.target.selectedOptions).map(
                (p) => p.value || p.text,
              );
      {
        let p;
        return (
          jf(a)
            ? s.target.checked
              ? (p = s.target.value)
              : (p = d)
            : (p = s.target.value),
          l.includes("number")
            ? bo(p)
            : l.includes("boolean")
              ? na(p)
              : l.includes("trim")
                ? p.trim()
                : p
        );
      }
    }
  });
}
function bo(a) {
  let l = a ? parseFloat(a) : null;
  return Kg(l) ? l : a;
}
function Gg(a, l) {
  return a == l;
}
function Kg(a) {
  return !Array.isArray(a) && !isNaN(a);
}
function Cu(a) {
  return (
    a !== null &&
    typeof a == "object" &&
    typeof a.get == "function" &&
    typeof a.set == "function"
  );
}
gt("cloak", (a) =>
  queueMicrotask(() => ot(() => a.removeAttribute(En("cloak")))),
);
Of(() => `[${En("init")}]`);
gt(
  "init",
  Er((a, { expression: l }, { evaluate: s }) =>
    typeof l == "string" ? !!l.trim() && s(l, {}, !1) : s(l, {}, !1),
  ),
);
gt("text", (a, { expression: l }, { effect: s, evaluateLater: d }) => {
  let p = d(l);
  s(() => {
    p((m) => {
      ot(() => {
        a.textContent = m;
      });
    });
  });
});
gt("html", (a, { expression: l }, { effect: s, evaluateLater: d }) => {
  let p = d(l);
  s(() => {
    p((m) => {
      ot(() => {
        ((a.innerHTML = m),
          (a._x_ignoreSelf = !0),
          dr(a),
          delete a._x_ignoreSelf);
      });
    });
  });
});
Jo(kf(":", Sf(En("bind:"))));
var pc = (
  a,
  { value: l, modifiers: s, expression: d, original: p },
  { effect: m, cleanup: y },
) => {
  if (!l) {
    let C = {};
    (Jp(C),
      Nt(a, d)(
        (K) => {
          Yf(a, K, p);
        },
        { scope: C },
      ));
    return;
  }
  if (l === "key") return $g(a, d);
  if (
    a._x_inlineBindings &&
    a._x_inlineBindings[l] &&
    a._x_inlineBindings[l].extract
  )
    return;
  let w = Nt(a, d);
  (m(() =>
    w((C) => {
      (C === void 0 && typeof d == "string" && d.match(/\./) && (C = ""),
        ot(() => zf(a, l, C, s)));
    }),
  ),
    y(() => {
      (a._x_undoAddedClasses && a._x_undoAddedClasses(),
        a._x_undoAddedStyles && a._x_undoAddedStyles());
    }));
};
pc.inline = (a, { value: l, modifiers: s, expression: d }) => {
  l &&
    (a._x_inlineBindings || (a._x_inlineBindings = {}),
    (a._x_inlineBindings[l] = { expression: d, extract: !1 }));
};
gt("bind", pc);
function $g(a, l) {
  a._x_keyExpression = l;
}
Bf(() => `[${En("data")}]`);
gt("data", (a, { expression: l }, { cleanup: s }) => {
  if (Xg(a)) return;
  l = l === "" ? "{}" : l;
  let d = {};
  _o(d, a);
  let p = {};
  Vp(p, d);
  let m = Kr(a, l, { scope: p });
  ((m === void 0 || m === !0) && (m = {}), _o(m, a));
  let y = Sn(m);
  gf(y);
  let w = pi(a, y);
  (y.init && Kr(a, y.init),
    s(() => {
      (y.destroy && Kr(a, y.destroy), w());
    }));
});
ca((a, l) => {
  a._x_dataStack &&
    ((l._x_dataStack = a._x_dataStack),
    l.setAttribute("data-has-alpine-state", !0));
});
function Xg(a) {
  return Sr ? (Ho ? !0 : a.hasAttribute("data-has-alpine-state")) : !1;
}
gt("show", (a, { modifiers: l, expression: s }, { effect: d }) => {
  let p = Nt(a, s);
  (a._x_doHide ||
    (a._x_doHide = () => {
      ot(() => {
        a.style.setProperty(
          "display",
          "none",
          l.includes("important") ? "important" : void 0,
        );
      });
    }),
    a._x_doShow ||
      (a._x_doShow = () => {
        ot(() => {
          a.style.length === 1 && a.style.display === "none"
            ? a.removeAttribute("style")
            : a.style.removeProperty("display");
        });
      }));
  let m = () => {
      (a._x_doHide(), (a._x_isShown = !1));
    },
    y = () => {
      (a._x_doShow(), (a._x_isShown = !0));
    },
    w = () => setTimeout(y),
    C = No(
      ($) => ($ ? y() : m()),
      ($) => {
        typeof a._x_toggleAndCascadeWithTransitions == "function"
          ? a._x_toggleAndCascadeWithTransitions(a, $, y, m)
          : $
            ? w()
            : m();
      },
    ),
    L,
    K = !0;
  d(() =>
    p(($) => {
      (!K && $ === L) ||
        (l.includes("immediate") && ($ ? w() : m()), C($), (L = $), (K = !1));
    }),
  );
});
gt("for", (a, { expression: l }, { effect: s, cleanup: d }) => {
  let p = Zg(l),
    m = Nt(a, p.items),
    y = Nt(a, a._x_keyExpression || "index");
  ((a._x_prevKeys = []),
    (a._x_lookup = {}),
    s(() => Yg(a, p, m, y)),
    d(() => {
      (Object.values(a._x_lookup).forEach((w) =>
        ot(() => {
          (Ln(w), w.remove());
        }),
      ),
        delete a._x_prevKeys,
        delete a._x_lookup);
    }));
});
function Yg(a, l, s, d) {
  let p = (y) => typeof y == "object" && !Array.isArray(y),
    m = a;
  s((y) => {
    (Jg(y) && y >= 0 && (y = Array.from(Array(y).keys(), (Q) => Q + 1)),
      y === void 0 && (y = []));
    let w = a._x_lookup,
      C = a._x_prevKeys,
      L = [],
      K = [];
    if (p(y))
      y = Object.entries(y).map(([Q, te]) => {
        let W = ku(l, te, Q, y);
        (d(
          (Z) => {
            (K.includes(Z) && Gt("Duplicate key on x-for", a), K.push(Z));
          },
          { scope: { index: Q, ...W } },
        ),
          L.push(W));
      });
    else
      for (let Q = 0; Q < y.length; Q++) {
        let te = ku(l, y[Q], Q, y);
        (d(
          (W) => {
            (K.includes(W) && Gt("Duplicate key on x-for", a), K.push(W));
          },
          { scope: { index: Q, ...te } },
        ),
          L.push(te));
      }
    let $ = [],
      j = [],
      ne = [],
      ae = [];
    for (let Q = 0; Q < C.length; Q++) {
      let te = C[Q];
      K.indexOf(te) === -1 && ne.push(te);
    }
    C = C.filter((Q) => !ne.includes(Q));
    let we = "template";
    for (let Q = 0; Q < K.length; Q++) {
      let te = K[Q],
        W = C.indexOf(te);
      if (W === -1) (C.splice(Q, 0, te), $.push([we, Q]));
      else if (W !== Q) {
        let Z = C.splice(Q, 1)[0],
          G = C.splice(W - 1, 1)[0];
        (C.splice(Q, 0, G), C.splice(W, 0, Z), j.push([Z, G]));
      } else ae.push(te);
      we = te;
    }
    for (let Q = 0; Q < ne.length; Q++) {
      let te = ne[Q];
      te in w &&
        (ot(() => {
          (Ln(w[te]), w[te].remove());
        }),
        delete w[te]);
    }
    for (let Q = 0; Q < j.length; Q++) {
      let [te, W] = j[Q],
        Z = w[te],
        G = w[W],
        X = document.createElement("div");
      (ot(() => {
        (G || Gt('x-for ":key" is undefined or invalid', m, W, w),
          G.after(X),
          Z.after(G),
          G._x_currentIfEl && G.after(G._x_currentIfEl),
          X.before(Z),
          Z._x_currentIfEl && Z.after(Z._x_currentIfEl),
          X.remove());
      }),
        G._x_refreshXForScope(L[K.indexOf(W)]));
    }
    for (let Q = 0; Q < $.length; Q++) {
      let [te, W] = $[Q],
        Z = te === "template" ? m : w[te];
      Z._x_currentIfEl && (Z = Z._x_currentIfEl);
      let G = L[W],
        X = K[W],
        ue = document.importNode(m.content, !0).firstElementChild,
        ee = Sn(G);
      (pi(ue, ee, m),
        (ue._x_refreshXForScope = (ce) => {
          Object.entries(ce).forEach(([ve, qe]) => {
            ee[ve] = qe;
          });
        }),
        ot(() => {
          (Z.after(ue), Er(() => dr(ue))());
        }),
        typeof X == "object" &&
          Gt(
            "x-for key cannot be an object, it must be a string or an integer",
            m,
          ),
        (w[X] = ue));
    }
    for (let Q = 0; Q < ae.length; Q++)
      w[ae[Q]]._x_refreshXForScope(L[K.indexOf(ae[Q])]);
    m._x_prevKeys = K;
  });
}
function Zg(a) {
  let l = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    s = /^\s*\(|\)\s*$/g,
    d = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    p = a.match(d);
  if (!p) return;
  let m = {};
  m.items = p[2].trim();
  let y = p[1].replace(s, "").trim(),
    w = y.match(l);
  return (
    w
      ? ((m.item = y.replace(l, "").trim()),
        (m.index = w[1].trim()),
        w[2] && (m.collection = w[2].trim()))
      : (m.item = y),
    m
  );
}
function ku(a, l, s, d) {
  let p = {};
  return (
    /^\[.*\]$/.test(a.item) && Array.isArray(l)
      ? a.item
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map((y) => y.trim())
          .forEach((y, w) => {
            p[y] = l[w];
          })
      : /^\{.*\}$/.test(a.item) && !Array.isArray(l) && typeof l == "object"
        ? a.item
            .replace("{", "")
            .replace("}", "")
            .split(",")
            .map((y) => y.trim())
            .forEach((y) => {
              p[y] = l[y];
            })
        : (p[a.item] = l),
    a.index && (p[a.index] = s),
    a.collection && (p[a.collection] = d),
    p
  );
}
function Jg(a) {
  return !Array.isArray(a) && !isNaN(a);
}
function gc() {}
gc.inline = (a, { expression: l }, { cleanup: s }) => {
  let d = ua(a);
  (d._x_refs || (d._x_refs = {}),
    (d._x_refs[l] = a),
    s(() => delete d._x_refs[l]));
};
gt("ref", gc);
gt("if", (a, { expression: l }, { effect: s, cleanup: d }) => {
  a.tagName.toLowerCase() !== "template" &&
    Gt("x-if can only be used on a <template> tag", a);
  let p = Nt(a, l),
    m = () => {
      if (a._x_currentIfEl) return a._x_currentIfEl;
      let w = a.content.cloneNode(!0).firstElementChild;
      return (
        pi(w, {}, a),
        ot(() => {
          (a.after(w), Er(() => dr(w))());
        }),
        (a._x_currentIfEl = w),
        (a._x_undoIf = () => {
          (ot(() => {
            (Ln(w), w.remove());
          }),
            delete a._x_currentIfEl);
        }),
        w
      );
    },
    y = () => {
      a._x_undoIf && (a._x_undoIf(), delete a._x_undoIf);
    };
  (s(() =>
    p((w) => {
      w ? m() : y();
    }),
  ),
    d(() => a._x_undoIf && a._x_undoIf()));
});
gt("id", (a, { expression: l }, { evaluate: s }) => {
  s(l).forEach((p) => Rg(a, p));
});
ca((a, l) => {
  a._x_ids && (l._x_ids = a._x_ids);
});
Jo(kf("@", Sf(En("on:"))));
gt(
  "on",
  Er((a, { value: l, modifiers: s, expression: d }, { cleanup: p }) => {
    let m = d ? Nt(a, d) : () => {};
    a.tagName.toLowerCase() === "template" &&
      (a._x_forwardEvents || (a._x_forwardEvents = []),
      a._x_forwardEvents.includes(l) || a._x_forwardEvents.push(l));
    let y = qo(a, l, s, (w) => {
      m(() => {}, { scope: { $event: w }, params: [w] });
    });
    p(() => y());
  }),
);
ga("Collapse", "collapse", "collapse");
ga("Intersect", "intersect", "intersect");
ga("Focus", "trap", "focus");
ga("Mask", "mask", "mask");
function ga(a, l, s) {
  gt(l, (d) =>
    Gt(
      `You can't use [x-${l}] without first installing the "${a}" plugin here: https://alpinejs.dev/plugins/${s}`,
      d,
    ),
  );
}
vi.setEvaluator(bf);
vi.setReactivityEngine({ reactive: ul, effect: ug, release: fg, raw: tt });
var Qg = vi,
  Jr = Qg;
function Vg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
function ev(a) {
  if (Object.prototype.hasOwnProperty.call(a, "__esModule")) return a;
  var l = a.default;
  if (typeof l == "function") {
    var s = function d() {
      return this instanceof d
        ? Reflect.construct(l, arguments, this.constructor)
        : l.apply(this, arguments);
    };
    s.prototype = l.prototype;
  } else s = {};
  return (
    Object.defineProperty(s, "__esModule", { value: !0 }),
    Object.keys(a).forEach(function (d) {
      var p = Object.getOwnPropertyDescriptor(a, d);
      Object.defineProperty(
        s,
        d,
        p.get
          ? p
          : {
              enumerable: !0,
              get: function () {
                return a[d];
              },
            },
      );
    }),
    s
  );
}
var ia = { exports: {} },
  tv = ia.exports,
  Su;
function Ut() {
  return (
    Su ||
      ((Su = 1),
      (function (a, l) {
        (function (s, d) {
          a.exports = d();
        })(tv, function () {
          var s = navigator.userAgent,
            d = navigator.platform,
            p = /gecko\/\d/i.test(s),
            m = /MSIE \d/.test(s),
            y = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(s),
            w = /Edge\/(\d+)/.exec(s),
            C = m || y || w,
            L = C && (m ? document.documentMode || 6 : +(w || y)[1]),
            K = !w && /WebKit\//.test(s),
            $ = K && /Qt\/\d+\.\d+/.test(s),
            j = !w && /Chrome\/(\d+)/.exec(s),
            ne = j && +j[1],
            ae = /Opera\//.test(s),
            we = /Apple Computer/.test(navigator.vendor),
            Q = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(s),
            te = /PhantomJS/.test(s),
            W = we && (/Mobile\/\w+/.test(s) || navigator.maxTouchPoints > 2),
            Z = /Android/.test(s),
            G =
              W ||
              Z ||
              /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(s),
            X = W || /Mac/.test(d),
            ue = /\bCrOS\b/.test(s),
            ee = /win/i.test(d),
            ce = ae && s.match(/Version\/(\d*\.\d*)/);
          (ce && (ce = Number(ce[1])), ce && ce >= 15 && ((ae = !1), (K = !0)));
          var ve = X && ($ || (ae && (ce == null || ce < 12.11))),
            qe = p || (C && L >= 9);
          function he(e) {
            return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
          }
          var Le = function (e, t) {
            var n = e.className,
              r = he(t).exec(n);
            if (r) {
              var i = n.slice(r.index + r[0].length);
              e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
            }
          };
          function Fe(e) {
            for (var t = e.childNodes.length; t > 0; --t)
              e.removeChild(e.firstChild);
            return e;
          }
          function Ne(e, t) {
            return Fe(e).appendChild(t);
          }
          function R(e, t, n, r) {
            var i = document.createElement(e);
            if (
              (n && (i.className = n),
              r && (i.style.cssText = r),
              typeof t == "string")
            )
              i.appendChild(document.createTextNode(t));
            else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
            return i;
          }
          function le(e, t, n, r) {
            var i = R(e, t, n, r);
            return (i.setAttribute("role", "presentation"), i);
          }
          var re;
          document.createRange
            ? (re = function (e, t, n, r) {
                var i = document.createRange();
                return (i.setEnd(r || e, n), i.setStart(e, t), i);
              })
            : (re = function (e, t, n) {
                var r = document.body.createTextRange();
                try {
                  r.moveToElementText(e.parentNode);
                } catch {
                  return r;
                }
                return (
                  r.collapse(!0),
                  r.moveEnd("character", n),
                  r.moveStart("character", t),
                  r
                );
              });
          function De(e, t) {
            if ((t.nodeType == 3 && (t = t.parentNode), e.contains))
              return e.contains(t);
            do if ((t.nodeType == 11 && (t = t.host), t == e)) return !0;
            while ((t = t.parentNode));
          }
          function ze(e) {
            var t = e.ownerDocument || e,
              n;
            try {
              n = e.activeElement;
            } catch {
              n = t.body || null;
            }
            for (; n && n.shadowRoot && n.shadowRoot.activeElement; )
              n = n.shadowRoot.activeElement;
            return n;
          }
          function nt(e, t) {
            var n = e.className;
            he(t).test(n) || (e.className += (n ? " " : "") + t);
          }
          function Kt(e, t) {
            for (var n = e.split(" "), r = 0; r < n.length; r++)
              n[r] && !he(n[r]).test(t) && (t += " " + n[r]);
            return t;
          }
          var T = function (e) {
            e.select();
          };
          W
            ? (T = function (e) {
                ((e.selectionStart = 0), (e.selectionEnd = e.value.length));
              })
            : C &&
              (T = function (e) {
                try {
                  e.select();
                } catch {}
              });
          function D(e) {
            return e.display.wrapper.ownerDocument;
          }
          function J(e) {
            return Pe(e.display.wrapper);
          }
          function Pe(e) {
            return e.getRootNode ? e.getRootNode() : e.ownerDocument;
          }
          function Te(e) {
            return D(e).defaultView;
          }
          function Je(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function () {
              return e.apply(null, t);
            };
          }
          function Qe(e, t, n) {
            t || (t = {});
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                (n !== !1 || !Object.prototype.hasOwnProperty.call(t, r)) &&
                (t[r] = e[r]);
            return t;
          }
          function Ke(e, t, n, r, i) {
            t == null &&
              ((t = e.search(/[^\s\u00a0]/)), t == -1 && (t = e.length));
            for (var o = r || 0, u = i || 0; ; ) {
              var c = e.indexOf("	", o);
              if (c < 0 || c >= t) return u + (t - o);
              ((u += c - o), (u += n - (u % n)), (o = c + 1));
            }
          }
          var Xe = function () {
            ((this.id = null),
              (this.f = null),
              (this.time = 0),
              (this.handler = Je(this.onTimeout, this)));
          };
          ((Xe.prototype.onTimeout = function (e) {
            ((e.id = 0),
              e.time <= +new Date()
                ? e.f()
                : setTimeout(e.handler, e.time - +new Date()));
          }),
            (Xe.prototype.set = function (e, t) {
              this.f = t;
              var n = +new Date() + e;
              (!this.id || n < this.time) &&
                (clearTimeout(this.id),
                (this.id = setTimeout(this.handler, e)),
                (this.time = n));
            }));
          function He(e, t) {
            for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
            return -1;
          }
          var We = 50,
            Ve = {
              toString: function () {
                return "CodeMirror.Pass";
              },
            },
            lt = { scroll: !1 },
            ke = { origin: "*mouse" },
            Ct = { origin: "+move" };
          function Tt(e, t, n) {
            for (var r = 0, i = 0; ; ) {
              var o = e.indexOf("	", r);
              o == -1 && (o = e.length);
              var u = o - r;
              if (o == e.length || i + u >= t) return r + Math.min(u, t - i);
              if (((i += o - r), (i += n - (i % n)), (r = o + 1), i >= t))
                return r;
            }
          }
          var it = [""];
          function zt(e) {
            for (; it.length <= e; ) it.push(be(it) + " ");
            return it[e];
          }
          function be(e) {
            return e[e.length - 1];
          }
          function ut(e, t) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
            return n;
          }
          function jt(e, t, n) {
            for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
            e.splice(r, 0, t);
          }
          function pr() {}
          function q(e, t) {
            var n;
            return (
              Object.create
                ? (n = Object.create(e))
                : ((pr.prototype = e), (n = new pr())),
              t && Qe(t, n),
              n
            );
          }
          var U =
            /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
          function I(e) {
            return (
              /\w/.test(e) ||
              (e > "" && (e.toUpperCase() != e.toLowerCase() || U.test(e)))
            );
          }
          function b(e, t) {
            return t
              ? t.source.indexOf("\\w") > -1 && I(e)
                ? !0
                : t.test(e)
              : I(e);
          }
          function x(e) {
            for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
            return !0;
          }
          var M =
            /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
          function f(e) {
            return e.charCodeAt(0) >= 768 && M.test(e);
          }
          function g(e, t, n) {
            for (; (n < 0 ? t > 0 : t < e.length) && f(e.charAt(t)); ) t += n;
            return t;
          }
          function S(e, t, n) {
            for (var r = t > n ? -1 : 1; ; ) {
              if (t == n) return t;
              var i = (t + n) / 2,
                o = r < 0 ? Math.ceil(i) : Math.floor(i);
              if (o == t) return e(o) ? t : n;
              e(o) ? (n = o) : (t = o + r);
            }
          }
          function E(e, t, n, r) {
            if (!e) return r(t, n, "ltr", 0);
            for (var i = !1, o = 0; o < e.length; ++o) {
              var u = e[o];
              ((u.from < n && u.to > t) || (t == n && u.to == t)) &&
                (r(
                  Math.max(u.from, t),
                  Math.min(u.to, n),
                  u.level == 1 ? "rtl" : "ltr",
                  o,
                ),
                (i = !0));
            }
            i || r(t, n, "ltr");
          }
          var _ = null;
          function z(e, t, n) {
            var r;
            _ = null;
            for (var i = 0; i < e.length; ++i) {
              var o = e[i];
              if (o.from < t && o.to > t) return i;
              (o.to == t &&
                (o.from != o.to && n == "before" ? (r = i) : (_ = i)),
                o.from == t &&
                  (o.from != o.to && n != "before" ? (r = i) : (_ = i)));
            }
            return r ?? _;
          }
          var B = (function () {
            var e =
                "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
              t =
                "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
            function n(v) {
              return v <= 247
                ? e.charAt(v)
                : 1424 <= v && v <= 1524
                  ? "R"
                  : 1536 <= v && v <= 1785
                    ? t.charAt(v - 1536)
                    : 1774 <= v && v <= 2220
                      ? "r"
                      : 8192 <= v && v <= 8203
                        ? "w"
                        : v == 8204
                          ? "b"
                          : "L";
            }
            var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
              i = /[stwN]/,
              o = /[LRr]/,
              u = /[Lb1n]/,
              c = /[1n]/;
            function h(v, k, A) {
              ((this.level = v), (this.from = k), (this.to = A));
            }
            return function (v, k) {
              var A = k == "ltr" ? "L" : "R";
              if (v.length == 0 || (k == "ltr" && !r.test(v))) return !1;
              for (var H = v.length, O = [], Y = 0; Y < H; ++Y)
                O.push(n(v.charCodeAt(Y)));
              for (var V = 0, oe = A; V < H; ++V) {
                var de = O[V];
                de == "m" ? (O[V] = oe) : (oe = de);
              }
              for (var ge = 0, pe = A; ge < H; ++ge) {
                var me = O[ge];
                me == "1" && pe == "r"
                  ? (O[ge] = "n")
                  : o.test(me) && ((pe = me), me == "r" && (O[ge] = "R"));
              }
              for (var Ae = 1, Se = O[0]; Ae < H - 1; ++Ae) {
                var Re = O[Ae];
                (Re == "+" && Se == "1" && O[Ae + 1] == "1"
                  ? (O[Ae] = "1")
                  : Re == "," &&
                    Se == O[Ae + 1] &&
                    (Se == "1" || Se == "n") &&
                    (O[Ae] = Se),
                  (Se = Re));
              }
              for (var Ze = 0; Ze < H; ++Ze) {
                var yt = O[Ze];
                if (yt == ",") O[Ze] = "N";
                else if (yt == "%") {
                  var rt = void 0;
                  for (rt = Ze + 1; rt < H && O[rt] == "%"; ++rt);
                  for (
                    var Pt =
                        (Ze && O[Ze - 1] == "!") || (rt < H && O[rt] == "1")
                          ? "1"
                          : "N",
                      Bt = Ze;
                    Bt < rt;
                    ++Bt
                  )
                    O[Bt] = Pt;
                  Ze = rt - 1;
                }
              }
              for (var ht = 0, Ot = A; ht < H; ++ht) {
                var wt = O[ht];
                Ot == "L" && wt == "1"
                  ? (O[ht] = "L")
                  : o.test(wt) && (Ot = wt);
              }
              for (var pt = 0; pt < H; ++pt)
                if (i.test(O[pt])) {
                  var dt = void 0;
                  for (dt = pt + 1; dt < H && i.test(O[dt]); ++dt);
                  for (
                    var at = (pt ? O[pt - 1] : A) == "L",
                      It = (dt < H ? O[dt] : A) == "L",
                      Dn = at == It ? (at ? "L" : "R") : A,
                      Cr = pt;
                    Cr < dt;
                    ++Cr
                  )
                    O[Cr] = Dn;
                  pt = dt - 1;
                }
              for (var At = [], ar, bt = 0; bt < H; )
                if (u.test(O[bt])) {
                  var po = bt;
                  for (++bt; bt < H && u.test(O[bt]); ++bt);
                  At.push(new h(0, po, bt));
                } else {
                  var hr = bt,
                    zr = At.length,
                    Wr = k == "rtl" ? 1 : 0;
                  for (++bt; bt < H && O[bt] != "L"; ++bt);
                  for (var Lt = hr; Lt < bt; )
                    if (c.test(O[Lt])) {
                      hr < Lt &&
                        (At.splice(zr, 0, new h(1, hr, Lt)), (zr += Wr));
                      var wn = Lt;
                      for (++Lt; Lt < bt && c.test(O[Lt]); ++Lt);
                      (At.splice(zr, 0, new h(2, wn, Lt)),
                        (zr += Wr),
                        (hr = Lt));
                    } else ++Lt;
                  hr < bt && At.splice(zr, 0, new h(1, hr, bt));
                }
              return (
                k == "ltr" &&
                  (At[0].level == 1 &&
                    (ar = v.match(/^\s+/)) &&
                    ((At[0].from = ar[0].length),
                    At.unshift(new h(0, 0, ar[0].length))),
                  be(At).level == 1 &&
                    (ar = v.match(/\s+$/)) &&
                    ((be(At).to -= ar[0].length),
                    At.push(new h(0, H - ar[0].length, H)))),
                k == "rtl" ? At.reverse() : At
              );
            };
          })();
          function F(e, t) {
            var n = e.order;
            return (n == null && (n = e.order = B(e.text, t)), n);
          }
          var P = [],
            N = function (e, t, n) {
              if (e.addEventListener) e.addEventListener(t, n, !1);
              else if (e.attachEvent) e.attachEvent("on" + t, n);
              else {
                var r = e._handlers || (e._handlers = {});
                r[t] = (r[t] || P).concat(n);
              }
            };
          function fe(e, t) {
            return (e._handlers && e._handlers[t]) || P;
          }
          function xe(e, t, n) {
            if (e.removeEventListener) e.removeEventListener(t, n, !1);
            else if (e.detachEvent) e.detachEvent("on" + t, n);
            else {
              var r = e._handlers,
                i = r && r[t];
              if (i) {
                var o = He(i, n);
                o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
              }
            }
          }
          function ye(e, t) {
            var n = fe(e, t);
            if (n.length)
              for (
                var r = Array.prototype.slice.call(arguments, 2), i = 0;
                i < n.length;
                ++i
              )
                n[i].apply(null, r);
          }
          function se(e, t, n) {
            return (
              typeof t == "string" &&
                (t = {
                  type: t,
                  preventDefault: function () {
                    this.defaultPrevented = !0;
                  },
                }),
              ye(e, n || t.type, e, t),
              Ye(t) || t.codemirrorIgnore
            );
          }
          function _e(e) {
            var t = e._handlers && e._handlers.cursorActivity;
            if (t)
              for (
                var n =
                    e.curOp.cursorActivityHandlers ||
                    (e.curOp.cursorActivityHandlers = []),
                  r = 0;
                r < t.length;
                ++r
              )
                He(n, t[r]) == -1 && n.push(t[r]);
          }
          function Me(e, t) {
            return fe(e, t).length > 0;
          }
          function Ie(e) {
            ((e.prototype.on = function (t, n) {
              N(this, t, n);
            }),
              (e.prototype.off = function (t, n) {
                xe(this, t, n);
              }));
          }
          function Ee(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
          }
          function $e(e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
          }
          function Ye(e) {
            return e.defaultPrevented != null
              ? e.defaultPrevented
              : e.returnValue == !1;
          }
          function ft(e) {
            (Ee(e), $e(e));
          }
          function Et(e) {
            return e.target || e.srcElement;
          }
          function kt(e) {
            var t = e.which;
            return (
              t == null &&
                (e.button & 1
                  ? (t = 1)
                  : e.button & 2
                    ? (t = 3)
                    : e.button & 4 && (t = 2)),
              X && e.ctrlKey && t == 1 && (t = 3),
              t
            );
          }
          var Qr = (function () {
              if (C && L < 9) return !1;
              var e = R("div");
              return "draggable" in e || "dragDrop" in e;
            })(),
            Vr;
          function mi(e) {
            if (Vr == null) {
              var t = R("span", "​");
              (Ne(e, R("span", [t, document.createTextNode("x")])),
                e.firstChild.offsetHeight != 0 &&
                  (Vr =
                    t.offsetWidth <= 1 && t.offsetHeight > 2 && !(C && L < 8)));
            }
            var n = Vr
              ? R("span", "​")
              : R(
                  "span",
                  " ",
                  null,
                  "display: inline-block; width: 1px; margin-right: -1px",
                );
            return (n.setAttribute("cm-text", ""), n);
          }
          var Tn;
          function _n(e) {
            if (Tn != null) return Tn;
            var t = Ne(e, document.createTextNode("AخA")),
              n = re(t, 0, 1).getBoundingClientRect(),
              r = re(t, 1, 2).getBoundingClientRect();
            return (
              Fe(e),
              !n || n.left == n.right ? !1 : (Tn = r.right - n.right < 3)
            );
          }
          var Mn =
              `

b`.split(/\n/).length != 3
                ? function (e) {
                    for (var t = 0, n = [], r = e.length; t <= r; ) {
                      var i = e.indexOf(
                        `
`,
                        t,
                      );
                      i == -1 && (i = e.length);
                      var o = e.slice(t, e.charAt(i - 1) == "\r" ? i - 1 : i),
                        u = o.indexOf("\r");
                      u != -1
                        ? (n.push(o.slice(0, u)), (t += u + 1))
                        : (n.push(o), (t = i + 1));
                    }
                    return n;
                  }
                : function (e) {
                    return e.split(/\r\n?|\n/);
                  },
            va = window.getSelection
              ? function (e) {
                  try {
                    return e.selectionStart != e.selectionEnd;
                  } catch {
                    return !1;
                  }
                }
              : function (e) {
                  var t;
                  try {
                    t = e.ownerDocument.selection.createRange();
                  } catch {}
                  return !t || t.parentElement() != e
                    ? !1
                    : t.compareEndPoints("StartToEnd", t) != 0;
                },
            Dt = (function () {
              var e = R("div");
              return "oncopy" in e
                ? !0
                : (e.setAttribute("oncopy", "return;"),
                  typeof e.oncopy == "function");
            })(),
            er = null;
          function $t(e) {
            if (er != null) return er;
            var t = Ne(e, R("span", "x")),
              n = t.getBoundingClientRect(),
              r = re(t, 0, 1).getBoundingClientRect();
            return (er = Math.abs(n.left - r.left) > 1);
          }
          var Wt = {},
            Rt = {};
          function Fr(e, t) {
            (arguments.length > 2 &&
              (t.dependencies = Array.prototype.slice.call(arguments, 2)),
              (Wt[e] = t));
          }
          function xi(e, t) {
            Rt[e] = t;
          }
          function en(e) {
            if (typeof e == "string" && Rt.hasOwnProperty(e)) e = Rt[e];
            else if (
              e &&
              typeof e.name == "string" &&
              Rt.hasOwnProperty(e.name)
            ) {
              var t = Rt[e.name];
              (typeof t == "string" && (t = { name: t }),
                (e = q(t, e)),
                (e.name = t.name));
            } else {
              if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                return en("application/xml");
              if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                return en("application/json");
            }
            return typeof e == "string" ? { name: e } : e || { name: "null" };
          }
          function tn(e, t) {
            t = en(t);
            var n = Wt[t.name];
            if (!n) return tn(e, "text/plain");
            var r = n(e, t);
            if (rn.hasOwnProperty(t.name)) {
              var i = rn[t.name];
              for (var o in i)
                i.hasOwnProperty(o) &&
                  (r.hasOwnProperty(o) && (r["_" + o] = r[o]), (r[o] = i[o]));
            }
            if (
              ((r.name = t.name),
              t.helperType && (r.helperType = t.helperType),
              t.modeProps)
            )
              for (var u in t.modeProps) r[u] = t.modeProps[u];
            return r;
          }
          var rn = {};
          function bc(e, t) {
            var n = rn.hasOwnProperty(e) ? rn[e] : (rn[e] = {});
            Qe(t, n);
          }
          function Lr(e, t) {
            if (t === !0) return t;
            if (e.copyState) return e.copyState(t);
            var n = {};
            for (var r in t) {
              var i = t[r];
              (i instanceof Array && (i = i.concat([])), (n[r] = i));
            }
            return n;
          }
          function ma(e, t) {
            for (
              var n;
              e.innerMode && ((n = e.innerMode(t)), !(!n || n.mode == e));
            )
              ((t = n.state), (e = n.mode));
            return n || { mode: e, state: t };
          }
          function fl(e, t, n) {
            return e.startState ? e.startState(t, n) : !0;
          }
          var ct = function (e, t, n) {
            ((this.pos = this.start = 0),
              (this.string = e),
              (this.tabSize = t || 8),
              (this.lastColumnPos = this.lastColumnValue = 0),
              (this.lineStart = 0),
              (this.lineOracle = n));
          };
          ((ct.prototype.eol = function () {
            return this.pos >= this.string.length;
          }),
            (ct.prototype.sol = function () {
              return this.pos == this.lineStart;
            }),
            (ct.prototype.peek = function () {
              return this.string.charAt(this.pos) || void 0;
            }),
            (ct.prototype.next = function () {
              if (this.pos < this.string.length)
                return this.string.charAt(this.pos++);
            }),
            (ct.prototype.eat = function (e) {
              var t = this.string.charAt(this.pos),
                n;
              if (
                (typeof e == "string"
                  ? (n = t == e)
                  : (n = t && (e.test ? e.test(t) : e(t))),
                n)
              )
                return (++this.pos, t);
            }),
            (ct.prototype.eatWhile = function (e) {
              for (var t = this.pos; this.eat(e); );
              return this.pos > t;
            }),
            (ct.prototype.eatSpace = function () {
              for (
                var e = this.pos;
                /[\s\u00a0]/.test(this.string.charAt(this.pos));
              )
                ++this.pos;
              return this.pos > e;
            }),
            (ct.prototype.skipToEnd = function () {
              this.pos = this.string.length;
            }),
            (ct.prototype.skipTo = function (e) {
              var t = this.string.indexOf(e, this.pos);
              if (t > -1) return ((this.pos = t), !0);
            }),
            (ct.prototype.backUp = function (e) {
              this.pos -= e;
            }),
            (ct.prototype.column = function () {
              return (
                this.lastColumnPos < this.start &&
                  ((this.lastColumnValue = Ke(
                    this.string,
                    this.start,
                    this.tabSize,
                    this.lastColumnPos,
                    this.lastColumnValue,
                  )),
                  (this.lastColumnPos = this.start)),
                this.lastColumnValue -
                  (this.lineStart
                    ? Ke(this.string, this.lineStart, this.tabSize)
                    : 0)
              );
            }),
            (ct.prototype.indentation = function () {
              return (
                Ke(this.string, null, this.tabSize) -
                (this.lineStart
                  ? Ke(this.string, this.lineStart, this.tabSize)
                  : 0)
              );
            }),
            (ct.prototype.match = function (e, t, n) {
              if (typeof e == "string") {
                var r = function (u) {
                    return n ? u.toLowerCase() : u;
                  },
                  i = this.string.substr(this.pos, e.length);
                if (r(i) == r(e))
                  return (t !== !1 && (this.pos += e.length), !0);
              } else {
                var o = this.string.slice(this.pos).match(e);
                return o && o.index > 0
                  ? null
                  : (o && t !== !1 && (this.pos += o[0].length), o);
              }
            }),
            (ct.prototype.current = function () {
              return this.string.slice(this.start, this.pos);
            }),
            (ct.prototype.hideFirstChars = function (e, t) {
              this.lineStart += e;
              try {
                return t();
              } finally {
                this.lineStart -= e;
              }
            }),
            (ct.prototype.lookAhead = function (e) {
              var t = this.lineOracle;
              return t && t.lookAhead(e);
            }),
            (ct.prototype.baseToken = function () {
              var e = this.lineOracle;
              return e && e.baseToken(this.pos);
            }));
          function Ce(e, t) {
            if (((t -= e.first), t < 0 || t >= e.size))
              throw new Error(
                "There is no line " + (t + e.first) + " in the document.",
              );
            for (var n = e; !n.lines; )
              for (var r = 0; ; ++r) {
                var i = n.children[r],
                  o = i.chunkSize();
                if (t < o) {
                  n = i;
                  break;
                }
                t -= o;
              }
            return n.lines[t];
          }
          function Tr(e, t, n) {
            var r = [],
              i = t.line;
            return (
              e.iter(t.line, n.line + 1, function (o) {
                var u = o.text;
                (i == n.line && (u = u.slice(0, n.ch)),
                  i == t.line && (u = u.slice(t.ch)),
                  r.push(u),
                  ++i);
              }),
              r
            );
          }
          function xa(e, t, n) {
            var r = [];
            return (
              e.iter(t, n, function (i) {
                r.push(i.text);
              }),
              r
            );
          }
          function tr(e, t) {
            var n = t - e.height;
            if (n) for (var r = e; r; r = r.parent) r.height += n;
          }
          function je(e) {
            if (e.parent == null) return null;
            for (
              var t = e.parent, n = He(t.lines, e), r = t.parent;
              r;
              t = r, r = r.parent
            )
              for (var i = 0; r.children[i] != t; ++i)
                n += r.children[i].chunkSize();
            return n + t.first;
          }
          function _r(e, t) {
            var n = e.first;
            e: do {
              for (var r = 0; r < e.children.length; ++r) {
                var i = e.children[r],
                  o = i.height;
                if (t < o) {
                  e = i;
                  continue e;
                }
                ((t -= o), (n += i.chunkSize()));
              }
              return n;
            } while (!e.lines);
            for (var u = 0; u < e.lines.length; ++u) {
              var c = e.lines[u],
                h = c.height;
              if (t < h) break;
              t -= h;
            }
            return n + u;
          }
          function Bn(e, t) {
            return t >= e.first && t < e.first + e.size;
          }
          function ya(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber));
          }
          function ie(e, t, n) {
            if ((n === void 0 && (n = null), !(this instanceof ie)))
              return new ie(e, t, n);
            ((this.line = e), (this.ch = t), (this.sticky = n));
          }
          function Be(e, t) {
            return e.line - t.line || e.ch - t.ch;
          }
          function ba(e, t) {
            return e.sticky == t.sticky && Be(e, t) == 0;
          }
          function Da(e) {
            return ie(e.line, e.ch);
          }
          function yi(e, t) {
            return Be(e, t) < 0 ? t : e;
          }
          function bi(e, t) {
            return Be(e, t) < 0 ? e : t;
          }
          function cl(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1));
          }
          function Oe(e, t) {
            if (t.line < e.first) return ie(e.first, 0);
            var n = e.first + e.size - 1;
            return t.line > n
              ? ie(n, Ce(e, n).text.length)
              : Dc(t, Ce(e, t.line).text.length);
          }
          function Dc(e, t) {
            var n = e.ch;
            return n == null || n > t
              ? ie(e.line, t)
              : n < 0
                ? ie(e.line, 0)
                : e;
          }
          function hl(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = Oe(e, t[r]);
            return n;
          }
          var Di = function (e, t) {
              ((this.state = e), (this.lookAhead = t));
            },
            rr = function (e, t, n, r) {
              ((this.state = t),
                (this.doc = e),
                (this.line = n),
                (this.maxLookAhead = r || 0),
                (this.baseTokens = null),
                (this.baseTokenPos = 1));
            };
          ((rr.prototype.lookAhead = function (e) {
            var t = this.doc.getLine(this.line + e);
            return (
              t != null && e > this.maxLookAhead && (this.maxLookAhead = e),
              t
            );
          }),
            (rr.prototype.baseToken = function (e) {
              if (!this.baseTokens) return null;
              for (; this.baseTokens[this.baseTokenPos] <= e; )
                this.baseTokenPos += 2;
              var t = this.baseTokens[this.baseTokenPos + 1];
              return {
                type: t && t.replace(/( |^)overlay .*/, ""),
                size: this.baseTokens[this.baseTokenPos] - e,
              };
            }),
            (rr.prototype.nextLine = function () {
              (this.line++, this.maxLookAhead > 0 && this.maxLookAhead--);
            }),
            (rr.fromSaved = function (e, t, n) {
              return t instanceof Di
                ? new rr(e, Lr(e.mode, t.state), n, t.lookAhead)
                : new rr(e, Lr(e.mode, t), n);
            }),
            (rr.prototype.save = function (e) {
              var t = e !== !1 ? Lr(this.doc.mode, this.state) : this.state;
              return this.maxLookAhead > 0 ? new Di(t, this.maxLookAhead) : t;
            }));
          function dl(e, t, n, r) {
            var i = [e.state.modeGen],
              o = {};
            yl(
              e,
              t.text,
              e.doc.mode,
              n,
              function (v, k) {
                return i.push(v, k);
              },
              o,
              r,
            );
            for (
              var u = n.state,
                c = function (v) {
                  n.baseTokens = i;
                  var k = e.state.overlays[v],
                    A = 1,
                    H = 0;
                  ((n.state = !0),
                    yl(
                      e,
                      t.text,
                      k.mode,
                      n,
                      function (O, Y) {
                        for (var V = A; H < O; ) {
                          var oe = i[A];
                          (oe > O && i.splice(A, 1, O, i[A + 1], oe),
                            (A += 2),
                            (H = Math.min(O, oe)));
                        }
                        if (Y)
                          if (k.opaque)
                            (i.splice(V, A - V, O, "overlay " + Y),
                              (A = V + 2));
                          else
                            for (; V < A; V += 2) {
                              var de = i[V + 1];
                              i[V + 1] = (de ? de + " " : "") + "overlay " + Y;
                            }
                      },
                      o,
                    ),
                    (n.state = u),
                    (n.baseTokens = null),
                    (n.baseTokenPos = 1));
                },
                h = 0;
              h < e.state.overlays.length;
              ++h
            )
              c(h);
            return { styles: i, classes: o.bgClass || o.textClass ? o : null };
          }
          function pl(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
              var r = On(e, je(t)),
                i =
                  t.text.length > e.options.maxHighlightLength &&
                  Lr(e.doc.mode, r.state),
                o = dl(e, t, r);
              (i && (r.state = i),
                (t.stateAfter = r.save(!i)),
                (t.styles = o.styles),
                o.classes
                  ? (t.styleClasses = o.classes)
                  : t.styleClasses && (t.styleClasses = null),
                n === e.doc.highlightFrontier &&
                  (e.doc.modeFrontier = Math.max(
                    e.doc.modeFrontier,
                    ++e.doc.highlightFrontier,
                  )));
            }
            return t.styles;
          }
          function On(e, t, n) {
            var r = e.doc,
              i = e.display;
            if (!r.mode.startState) return new rr(r, !0, t);
            var o = wc(e, t, n),
              u = o > r.first && Ce(r, o - 1).stateAfter,
              c = u ? rr.fromSaved(r, u, o) : new rr(r, fl(r.mode), o);
            return (
              r.iter(o, t, function (h) {
                wa(e, h.text, c);
                var v = c.line;
                ((h.stateAfter =
                  v == t - 1 || v % 5 == 0 || (v >= i.viewFrom && v < i.viewTo)
                    ? c.save()
                    : null),
                  c.nextLine());
              }),
              n && (r.modeFrontier = c.line),
              c
            );
          }
          function wa(e, t, n, r) {
            var i = e.doc.mode,
              o = new ct(t, e.options.tabSize, n);
            for (
              o.start = o.pos = r || 0, t == "" && gl(i, n.state);
              !o.eol();
            )
              (Ca(i, o, n.state), (o.start = o.pos));
          }
          function gl(e, t) {
            if (e.blankLine) return e.blankLine(t);
            if (e.innerMode) {
              var n = ma(e, t);
              if (n.mode.blankLine) return n.mode.blankLine(n.state);
            }
          }
          function Ca(e, t, n, r) {
            for (var i = 0; i < 10; i++) {
              r && (r[0] = ma(e, n).mode);
              var o = e.token(t, n);
              if (t.pos > t.start) return o;
            }
            throw new Error("Mode " + e.name + " failed to advance stream.");
          }
          var vl = function (e, t, n) {
            ((this.start = e.start),
              (this.end = e.pos),
              (this.string = e.current()),
              (this.type = t || null),
              (this.state = n));
          };
          function ml(e, t, n, r) {
            var i = e.doc,
              o = i.mode,
              u;
            t = Oe(i, t);
            var c = Ce(i, t.line),
              h = On(e, t.line, n),
              v = new ct(c.text, e.options.tabSize, h),
              k;
            for (r && (k = []); (r || v.pos < t.ch) && !v.eol(); )
              ((v.start = v.pos),
                (u = Ca(o, v, h.state)),
                r && k.push(new vl(v, u, Lr(i.mode, h.state))));
            return r ? k : new vl(v, u, h.state);
          }
          function xl(e, t) {
            if (e)
              for (;;) {
                var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n) break;
                e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                var r = n[1] ? "bgClass" : "textClass";
                t[r] == null
                  ? (t[r] = n[2])
                  : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) ||
                    (t[r] += " " + n[2]);
              }
            return e;
          }
          function yl(e, t, n, r, i, o, u) {
            var c = n.flattenSpans;
            c == null && (c = e.options.flattenSpans);
            var h = 0,
              v = null,
              k = new ct(t, e.options.tabSize, r),
              A,
              H = e.options.addModeClass && [null];
            for (t == "" && xl(gl(n, r.state), o); !k.eol(); ) {
              if (
                (k.pos > e.options.maxHighlightLength
                  ? ((c = !1),
                    u && wa(e, t, r, k.pos),
                    (k.pos = t.length),
                    (A = null))
                  : (A = xl(Ca(n, k, r.state, H), o)),
                H)
              ) {
                var O = H[0].name;
                O && (A = "m-" + (A ? O + " " + A : O));
              }
              if (!c || v != A) {
                for (; h < k.start; )
                  ((h = Math.min(k.start, h + 5e3)), i(h, v));
                v = A;
              }
              k.start = k.pos;
            }
            for (; h < k.pos; ) {
              var Y = Math.min(k.pos, h + 5e3);
              (i(Y, v), (h = Y));
            }
          }
          function wc(e, t, n) {
            for (
              var r,
                i,
                o = e.doc,
                u = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                c = t;
              c > u;
              --c
            ) {
              if (c <= o.first) return o.first;
              var h = Ce(o, c - 1),
                v = h.stateAfter;
              if (
                v &&
                (!n ||
                  c + (v instanceof Di ? v.lookAhead : 0) <= o.modeFrontier)
              )
                return c;
              var k = Ke(h.text, null, e.options.tabSize);
              (i == null || r > k) && ((i = c - 1), (r = k));
            }
            return i;
          }
          function Cc(e, t) {
            if (
              ((e.modeFrontier = Math.min(e.modeFrontier, t)),
              !(e.highlightFrontier < t - 10))
            ) {
              for (var n = e.first, r = t - 1; r > n; r--) {
                var i = Ce(e, r).stateAfter;
                if (i && (!(i instanceof Di) || r + i.lookAhead < t)) {
                  n = r + 1;
                  break;
                }
              }
              e.highlightFrontier = Math.min(e.highlightFrontier, n);
            }
          }
          var bl = !1,
            lr = !1;
          function kc() {
            bl = !0;
          }
          function Sc() {
            lr = !0;
          }
          function wi(e, t, n) {
            ((this.marker = e), (this.from = t), (this.to = n));
          }
          function In(e, t) {
            if (e)
              for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t) return r;
              }
          }
          function Ac(e, t) {
            for (var n, r = 0; r < e.length; ++r)
              e[r] != t && (n || (n = [])).push(e[r]);
            return n;
          }
          function Ec(e, t, n) {
            var r =
              n &&
              window.WeakSet &&
              (n.markedSpans || (n.markedSpans = new WeakSet()));
            (r && e.markedSpans && r.has(e.markedSpans)
              ? e.markedSpans.push(t)
              : ((e.markedSpans = e.markedSpans
                  ? e.markedSpans.concat([t])
                  : [t]),
                r && r.add(e.markedSpans)),
              t.marker.attachLine(e));
          }
          function Fc(e, t, n) {
            var r;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  u = o.marker,
                  c =
                    o.from == null ||
                    (u.inclusiveLeft ? o.from <= t : o.from < t);
                if (
                  c ||
                  (o.from == t &&
                    u.type == "bookmark" &&
                    (!n || !o.marker.insertLeft))
                ) {
                  var h =
                    o.to == null || (u.inclusiveRight ? o.to >= t : o.to > t);
                  (r || (r = [])).push(new wi(u, o.from, h ? null : o.to));
                }
              }
            return r;
          }
          function Lc(e, t, n) {
            var r;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  u = o.marker,
                  c = o.to == null || (u.inclusiveRight ? o.to >= t : o.to > t);
                if (
                  c ||
                  (o.from == t &&
                    u.type == "bookmark" &&
                    (!n || o.marker.insertLeft))
                ) {
                  var h =
                    o.from == null ||
                    (u.inclusiveLeft ? o.from <= t : o.from < t);
                  (r || (r = [])).push(
                    new wi(
                      u,
                      h ? null : o.from - t,
                      o.to == null ? null : o.to - t,
                    ),
                  );
                }
              }
            return r;
          }
          function ka(e, t) {
            if (t.full) return null;
            var n = Bn(e, t.from.line) && Ce(e, t.from.line).markedSpans,
              r = Bn(e, t.to.line) && Ce(e, t.to.line).markedSpans;
            if (!n && !r) return null;
            var i = t.from.ch,
              o = t.to.ch,
              u = Be(t.from, t.to) == 0,
              c = Fc(n, i, u),
              h = Lc(r, o, u),
              v = t.text.length == 1,
              k = be(t.text).length + (v ? i : 0);
            if (c)
              for (var A = 0; A < c.length; ++A) {
                var H = c[A];
                if (H.to == null) {
                  var O = In(h, H.marker);
                  O ? v && (H.to = O.to == null ? null : O.to + k) : (H.to = i);
                }
              }
            if (h)
              for (var Y = 0; Y < h.length; ++Y) {
                var V = h[Y];
                if ((V.to != null && (V.to += k), V.from == null)) {
                  var oe = In(c, V.marker);
                  oe || ((V.from = k), v && (c || (c = [])).push(V));
                } else ((V.from += k), v && (c || (c = [])).push(V));
              }
            (c && (c = Dl(c)), h && h != c && (h = Dl(h)));
            var de = [c];
            if (!v) {
              var ge = t.text.length - 2,
                pe;
              if (ge > 0 && c)
                for (var me = 0; me < c.length; ++me)
                  c[me].to == null &&
                    (pe || (pe = [])).push(new wi(c[me].marker, null, null));
              for (var Ae = 0; Ae < ge; ++Ae) de.push(pe);
              de.push(h);
            }
            return de;
          }
          function Dl(e) {
            for (var t = 0; t < e.length; ++t) {
              var n = e[t];
              n.from != null &&
                n.from == n.to &&
                n.marker.clearWhenEmpty !== !1 &&
                e.splice(t--, 1);
            }
            return e.length ? e : null;
          }
          function Tc(e, t, n) {
            var r = null;
            if (
              (e.iter(t.line, n.line + 1, function (O) {
                if (O.markedSpans)
                  for (var Y = 0; Y < O.markedSpans.length; ++Y) {
                    var V = O.markedSpans[Y].marker;
                    V.readOnly &&
                      (!r || He(r, V) == -1) &&
                      (r || (r = [])).push(V);
                  }
              }),
              !r)
            )
              return null;
            for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
              for (var u = r[o], c = u.find(0), h = 0; h < i.length; ++h) {
                var v = i[h];
                if (!(Be(v.to, c.from) < 0 || Be(v.from, c.to) > 0)) {
                  var k = [h, 1],
                    A = Be(v.from, c.from),
                    H = Be(v.to, c.to);
                  ((A < 0 || (!u.inclusiveLeft && !A)) &&
                    k.push({ from: v.from, to: c.from }),
                    (H > 0 || (!u.inclusiveRight && !H)) &&
                      k.push({ from: c.to, to: v.to }),
                    i.splice.apply(i, k),
                    (h += k.length - 3));
                }
              }
            return i;
          }
          function wl(e) {
            var t = e.markedSpans;
            if (t) {
              for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
              e.markedSpans = null;
            }
          }
          function Cl(e, t) {
            if (t) {
              for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
              e.markedSpans = t;
            }
          }
          function Ci(e) {
            return e.inclusiveLeft ? -1 : 0;
          }
          function ki(e) {
            return e.inclusiveRight ? 1 : 0;
          }
          function Sa(e, t) {
            var n = e.lines.length - t.lines.length;
            if (n != 0) return n;
            var r = e.find(),
              i = t.find(),
              o = Be(r.from, i.from) || Ci(e) - Ci(t);
            if (o) return -o;
            var u = Be(r.to, i.to) || ki(e) - ki(t);
            return u || t.id - e.id;
          }
          function kl(e, t) {
            var n = lr && e.markedSpans,
              r;
            if (n)
              for (var i = void 0, o = 0; o < n.length; ++o)
                ((i = n[o]),
                  i.marker.collapsed &&
                    (t ? i.from : i.to) == null &&
                    (!r || Sa(r, i.marker) < 0) &&
                    (r = i.marker));
            return r;
          }
          function Sl(e) {
            return kl(e, !0);
          }
          function Si(e) {
            return kl(e, !1);
          }
          function _c(e, t) {
            var n = lr && e.markedSpans,
              r;
            if (n)
              for (var i = 0; i < n.length; ++i) {
                var o = n[i];
                o.marker.collapsed &&
                  (o.from == null || o.from < t) &&
                  (o.to == null || o.to > t) &&
                  (!r || Sa(r, o.marker) < 0) &&
                  (r = o.marker);
              }
            return r;
          }
          function Al(e, t, n, r, i) {
            var o = Ce(e, t),
              u = lr && o.markedSpans;
            if (u)
              for (var c = 0; c < u.length; ++c) {
                var h = u[c];
                if (h.marker.collapsed) {
                  var v = h.marker.find(0),
                    k = Be(v.from, n) || Ci(h.marker) - Ci(i),
                    A = Be(v.to, r) || ki(h.marker) - ki(i);
                  if (
                    !((k >= 0 && A <= 0) || (k <= 0 && A >= 0)) &&
                    ((k <= 0 &&
                      (h.marker.inclusiveRight && i.inclusiveLeft
                        ? Be(v.to, n) >= 0
                        : Be(v.to, n) > 0)) ||
                      (k >= 0 &&
                        (h.marker.inclusiveRight && i.inclusiveLeft
                          ? Be(v.from, r) <= 0
                          : Be(v.from, r) < 0)))
                  )
                    return !0;
                }
              }
          }
          function Xt(e) {
            for (var t; (t = Sl(e)); ) e = t.find(-1, !0).line;
            return e;
          }
          function Mc(e) {
            for (var t; (t = Si(e)); ) e = t.find(1, !0).line;
            return e;
          }
          function Bc(e) {
            for (var t, n; (t = Si(e)); )
              ((e = t.find(1, !0).line), (n || (n = [])).push(e));
            return n;
          }
          function Aa(e, t) {
            var n = Ce(e, t),
              r = Xt(n);
            return n == r ? t : je(r);
          }
          function El(e, t) {
            if (t > e.lastLine()) return t;
            var n = Ce(e, t),
              r;
            if (!gr(e, n)) return t;
            for (; (r = Si(n)); ) n = r.find(1, !0).line;
            return je(n) + 1;
          }
          function gr(e, t) {
            var n = lr && t.markedSpans;
            if (n) {
              for (var r = void 0, i = 0; i < n.length; ++i)
                if (((r = n[i]), !!r.marker.collapsed)) {
                  if (r.from == null) return !0;
                  if (
                    !r.marker.widgetNode &&
                    r.from == 0 &&
                    r.marker.inclusiveLeft &&
                    Ea(e, t, r)
                  )
                    return !0;
                }
            }
          }
          function Ea(e, t, n) {
            if (n.to == null) {
              var r = n.marker.find(1, !0);
              return Ea(e, r.line, In(r.line.markedSpans, n.marker));
            }
            if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
            for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
              if (
                ((i = t.markedSpans[o]),
                i.marker.collapsed &&
                  !i.marker.widgetNode &&
                  i.from == n.to &&
                  (i.to == null || i.to != n.from) &&
                  (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
                  Ea(e, t, i))
              )
                return !0;
          }
          function sr(e) {
            e = Xt(e);
            for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
              var i = n.lines[r];
              if (i == e) break;
              t += i.height;
            }
            for (var o = n.parent; o; n = o, o = n.parent)
              for (var u = 0; u < o.children.length; ++u) {
                var c = o.children[u];
                if (c == n) break;
                t += c.height;
              }
            return t;
          }
          function Ai(e) {
            if (e.height == 0) return 0;
            for (var t = e.text.length, n, r = e; (n = Sl(r)); ) {
              var i = n.find(0, !0);
              ((r = i.from.line), (t += i.from.ch - i.to.ch));
            }
            for (r = e; (n = Si(r)); ) {
              var o = n.find(0, !0);
              ((t -= r.text.length - o.from.ch),
                (r = o.to.line),
                (t += r.text.length - o.to.ch));
            }
            return t;
          }
          function Fa(e) {
            var t = e.display,
              n = e.doc;
            ((t.maxLine = Ce(n, n.first)),
              (t.maxLineLength = Ai(t.maxLine)),
              (t.maxLineChanged = !0),
              n.iter(function (r) {
                var i = Ai(r);
                i > t.maxLineLength && ((t.maxLineLength = i), (t.maxLine = r));
              }));
          }
          var nn = function (e, t, n) {
            ((this.text = e), Cl(this, t), (this.height = n ? n(this) : 1));
          };
          ((nn.prototype.lineNo = function () {
            return je(this);
          }),
            Ie(nn));
          function Oc(e, t, n, r) {
            ((e.text = t),
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              e.order != null && (e.order = null),
              wl(e),
              Cl(e, n));
            var i = r ? r(e) : 1;
            i != e.height && tr(e, i);
          }
          function Ic(e) {
            ((e.parent = null), wl(e));
          }
          var Nc = {},
            Rc = {};
          function Fl(e, t) {
            if (!e || /^\s*$/.test(e)) return null;
            var n = t.addModeClass ? Rc : Nc;
            return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
          }
          function Ll(e, t) {
            var n = le("span", null, null, K ? "padding-right: .1px" : null),
              r = {
                pre: le("pre", [n], "CodeMirror-line"),
                content: n,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: e.getOption("lineWrapping"),
              };
            t.measure = {};
            for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
              var o = i ? t.rest[i - 1] : t.line,
                u = void 0;
              ((r.pos = 0),
                (r.addToken = Pc),
                _n(e.display.measure) &&
                  (u = F(o, e.doc.direction)) &&
                  (r.addToken = Wc(r.addToken, u)),
                (r.map = []));
              var c = t != e.display.externalMeasured && je(o);
              (qc(o, r, pl(e, o, c)),
                o.styleClasses &&
                  (o.styleClasses.bgClass &&
                    (r.bgClass = Kt(o.styleClasses.bgClass, r.bgClass || "")),
                  o.styleClasses.textClass &&
                    (r.textClass = Kt(
                      o.styleClasses.textClass,
                      r.textClass || "",
                    ))),
                r.map.length == 0 &&
                  r.map.push(
                    0,
                    0,
                    r.content.appendChild(mi(e.display.measure)),
                  ),
                i == 0
                  ? ((t.measure.map = r.map), (t.measure.cache = {}))
                  : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                    (t.measure.caches || (t.measure.caches = [])).push({})));
            }
            if (K) {
              var h = r.content.lastChild;
              (/\bcm-tab\b/.test(h.className) ||
                (h.querySelector && h.querySelector(".cm-tab"))) &&
                (r.content.className = "cm-tab-wrap-hack");
            }
            return (
              ye(e, "renderLine", e, t.line, r.pre),
              r.pre.className &&
                (r.textClass = Kt(r.pre.className, r.textClass || "")),
              r
            );
          }
          function Hc(e) {
            var t = R("span", "•", "cm-invalidchar");
            return (
              (t.title = "\\u" + e.charCodeAt(0).toString(16)),
              t.setAttribute("aria-label", t.title),
              t
            );
          }
          function Pc(e, t, n, r, i, o, u) {
            if (t) {
              var c = e.splitSpaces ? zc(t, e.trailingSpace) : t,
                h = e.cm.state.specialChars,
                v = !1,
                k;
              if (!h.test(t))
                ((e.col += t.length),
                  (k = document.createTextNode(c)),
                  e.map.push(e.pos, e.pos + t.length, k),
                  C && L < 9 && (v = !0),
                  (e.pos += t.length));
              else {
                k = document.createDocumentFragment();
                for (var A = 0; ; ) {
                  h.lastIndex = A;
                  var H = h.exec(t),
                    O = H ? H.index - A : t.length - A;
                  if (O) {
                    var Y = document.createTextNode(c.slice(A, A + O));
                    (C && L < 9
                      ? k.appendChild(R("span", [Y]))
                      : k.appendChild(Y),
                      e.map.push(e.pos, e.pos + O, Y),
                      (e.col += O),
                      (e.pos += O));
                  }
                  if (!H) break;
                  A += O + 1;
                  var V = void 0;
                  if (H[0] == "	") {
                    var oe = e.cm.options.tabSize,
                      de = oe - (e.col % oe);
                    ((V = k.appendChild(R("span", zt(de), "cm-tab"))),
                      V.setAttribute("role", "presentation"),
                      V.setAttribute("cm-text", "	"),
                      (e.col += de));
                  } else
                    H[0] == "\r" ||
                    H[0] ==
                      `
`
                      ? ((V = k.appendChild(
                          R("span", H[0] == "\r" ? "␍" : "␤", "cm-invalidchar"),
                        )),
                        V.setAttribute("cm-text", H[0]),
                        (e.col += 1))
                      : ((V = e.cm.options.specialCharPlaceholder(H[0])),
                        V.setAttribute("cm-text", H[0]),
                        C && L < 9
                          ? k.appendChild(R("span", [V]))
                          : k.appendChild(V),
                        (e.col += 1));
                  (e.map.push(e.pos, e.pos + 1, V), e.pos++);
                }
              }
              if (
                ((e.trailingSpace = c.charCodeAt(t.length - 1) == 32),
                n || r || i || v || o || u)
              ) {
                var ge = n || "";
                (r && (ge += r), i && (ge += i));
                var pe = R("span", [k], ge, o);
                if (u)
                  for (var me in u)
                    u.hasOwnProperty(me) &&
                      me != "style" &&
                      me != "class" &&
                      pe.setAttribute(me, u[me]);
                return e.content.appendChild(pe);
              }
              e.content.appendChild(k);
            }
          }
          function zc(e, t) {
            if (e.length > 1 && !/  /.test(e)) return e;
            for (var n = t, r = "", i = 0; i < e.length; i++) {
              var o = e.charAt(i);
              (o == " " &&
                n &&
                (i == e.length - 1 || e.charCodeAt(i + 1) == 32) &&
                (o = " "),
                (r += o),
                (n = o == " "));
            }
            return r;
          }
          function Wc(e, t) {
            return function (n, r, i, o, u, c, h) {
              i = i ? i + " cm-force-border" : "cm-force-border";
              for (var v = n.pos, k = v + r.length; ; ) {
                for (
                  var A = void 0, H = 0;
                  H < t.length && ((A = t[H]), !(A.to > v && A.from <= v));
                  H++
                );
                if (A.to >= k) return e(n, r, i, o, u, c, h);
                (e(n, r.slice(0, A.to - v), i, o, null, c, h),
                  (o = null),
                  (r = r.slice(A.to - v)),
                  (v = A.to));
              }
            };
          }
          function Tl(e, t, n, r) {
            var i = !r && n.widgetNode;
            (i && e.map.push(e.pos, e.pos + t, i),
              !r &&
                e.cm.display.input.needsContentAttribute &&
                (i ||
                  (i = e.content.appendChild(document.createElement("span"))),
                i.setAttribute("cm-marker", n.id)),
              i &&
                (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
              (e.pos += t),
              (e.trailingSpace = !1));
          }
          function qc(e, t, n) {
            var r = e.markedSpans,
              i = e.text,
              o = 0;
            if (!r) {
              for (var u = 1; u < n.length; u += 2)
                t.addToken(
                  t,
                  i.slice(o, (o = n[u])),
                  Fl(n[u + 1], t.cm.options),
                );
              return;
            }
            for (
              var c = i.length,
                h = 0,
                v = 1,
                k = "",
                A,
                H,
                O = 0,
                Y,
                V,
                oe,
                de,
                ge;
              ;
            ) {
              if (O == h) {
                ((Y = V = oe = H = ""), (ge = null), (de = null), (O = 1 / 0));
                for (var pe = [], me = void 0, Ae = 0; Ae < r.length; ++Ae) {
                  var Se = r[Ae],
                    Re = Se.marker;
                  if (Re.type == "bookmark" && Se.from == h && Re.widgetNode)
                    pe.push(Re);
                  else if (
                    Se.from <= h &&
                    (Se.to == null ||
                      Se.to > h ||
                      (Re.collapsed && Se.to == h && Se.from == h))
                  ) {
                    if (
                      (Se.to != null &&
                        Se.to != h &&
                        O > Se.to &&
                        ((O = Se.to), (V = "")),
                      Re.className && (Y += " " + Re.className),
                      Re.css && (H = (H ? H + ";" : "") + Re.css),
                      Re.startStyle &&
                        Se.from == h &&
                        (oe += " " + Re.startStyle),
                      Re.endStyle &&
                        Se.to == O &&
                        (me || (me = [])).push(Re.endStyle, Se.to),
                      Re.title && ((ge || (ge = {})).title = Re.title),
                      Re.attributes)
                    )
                      for (var Ze in Re.attributes)
                        (ge || (ge = {}))[Ze] = Re.attributes[Ze];
                    Re.collapsed && (!de || Sa(de.marker, Re) < 0) && (de = Se);
                  } else Se.from > h && O > Se.from && (O = Se.from);
                }
                if (me)
                  for (var yt = 0; yt < me.length; yt += 2)
                    me[yt + 1] == O && (V += " " + me[yt]);
                if (!de || de.from == h)
                  for (var rt = 0; rt < pe.length; ++rt) Tl(t, 0, pe[rt]);
                if (de && (de.from || 0) == h) {
                  if (
                    (Tl(
                      t,
                      (de.to == null ? c + 1 : de.to) - h,
                      de.marker,
                      de.from == null,
                    ),
                    de.to == null)
                  )
                    return;
                  de.to == h && (de = !1);
                }
              }
              if (h >= c) break;
              for (var Pt = Math.min(c, O); ; ) {
                if (k) {
                  var Bt = h + k.length;
                  if (!de) {
                    var ht = Bt > Pt ? k.slice(0, Pt - h) : k;
                    t.addToken(
                      t,
                      ht,
                      A ? A + Y : Y,
                      oe,
                      h + ht.length == O ? V : "",
                      H,
                      ge,
                    );
                  }
                  if (Bt >= Pt) {
                    ((k = k.slice(Pt - h)), (h = Pt));
                    break;
                  }
                  ((h = Bt), (oe = ""));
                }
                ((k = i.slice(o, (o = n[v++]))),
                  (A = Fl(n[v++], t.cm.options)));
              }
            }
          }
          function _l(e, t, n) {
            ((this.line = t),
              (this.rest = Bc(t)),
              (this.size = this.rest ? je(be(this.rest)) - n + 1 : 1),
              (this.node = this.text = null),
              (this.hidden = gr(e, t)));
          }
          function Ei(e, t, n) {
            for (var r = [], i, o = t; o < n; o = i) {
              var u = new _l(e.doc, Ce(e.doc, o), o);
              ((i = o + u.size), r.push(u));
            }
            return r;
          }
          var an = null;
          function Uc(e) {
            an
              ? an.ops.push(e)
              : (e.ownsGroup = an = { ops: [e], delayedCallbacks: [] });
          }
          function jc(e) {
            var t = e.delayedCallbacks,
              n = 0;
            do {
              for (; n < t.length; n++) t[n].call(null);
              for (var r = 0; r < e.ops.length; r++) {
                var i = e.ops[r];
                if (i.cursorActivityHandlers)
                  for (
                    ;
                    i.cursorActivityCalled < i.cursorActivityHandlers.length;
                  )
                    i.cursorActivityHandlers[i.cursorActivityCalled++].call(
                      null,
                      i.cm,
                    );
              }
            } while (n < t.length);
          }
          function Gc(e, t) {
            var n = e.ownsGroup;
            if (n)
              try {
                jc(n);
              } finally {
                ((an = null), t(n));
              }
          }
          var Nn = null;
          function vt(e, t) {
            var n = fe(e, t);
            if (n.length) {
              var r = Array.prototype.slice.call(arguments, 2),
                i;
              an
                ? (i = an.delayedCallbacks)
                : Nn
                  ? (i = Nn)
                  : ((i = Nn = []), setTimeout(Kc, 0));
              for (
                var o = function (c) {
                    i.push(function () {
                      return n[c].apply(null, r);
                    });
                  },
                  u = 0;
                u < n.length;
                ++u
              )
                o(u);
            }
          }
          function Kc() {
            var e = Nn;
            Nn = null;
            for (var t = 0; t < e.length; ++t) e[t]();
          }
          function Ml(e, t, n, r) {
            for (var i = 0; i < t.changes.length; i++) {
              var o = t.changes[i];
              o == "text"
                ? Xc(e, t)
                : o == "gutter"
                  ? Ol(e, t, n, r)
                  : o == "class"
                    ? La(e, t)
                    : o == "widget" && Yc(e, t, r);
            }
            t.changes = null;
          }
          function Rn(e) {
            return (
              e.node == e.text &&
                ((e.node = R("div", null, null, "position: relative")),
                e.text.parentNode &&
                  e.text.parentNode.replaceChild(e.node, e.text),
                e.node.appendChild(e.text),
                C && L < 8 && (e.node.style.zIndex = 2)),
              e.node
            );
          }
          function $c(e, t) {
            var n = t.bgClass
              ? t.bgClass + " " + (t.line.bgClass || "")
              : t.line.bgClass;
            if ((n && (n += " CodeMirror-linebackground"), t.background))
              n
                ? (t.background.className = n)
                : (t.background.parentNode.removeChild(t.background),
                  (t.background = null));
            else if (n) {
              var r = Rn(t);
              ((t.background = r.insertBefore(R("div", null, n), r.firstChild)),
                e.display.input.setUneditable(t.background));
            }
          }
          function Bl(e, t) {
            var n = e.display.externalMeasured;
            return n && n.line == t.line
              ? ((e.display.externalMeasured = null),
                (t.measure = n.measure),
                n.built)
              : Ll(e, t);
          }
          function Xc(e, t) {
            var n = t.text.className,
              r = Bl(e, t);
            (t.text == t.node && (t.node = r.pre),
              t.text.parentNode.replaceChild(r.pre, t.text),
              (t.text = r.pre),
              r.bgClass != t.bgClass || r.textClass != t.textClass
                ? ((t.bgClass = r.bgClass),
                  (t.textClass = r.textClass),
                  La(e, t))
                : n && (t.text.className = n));
          }
          function La(e, t) {
            ($c(e, t),
              t.line.wrapClass
                ? (Rn(t).className = t.line.wrapClass)
                : t.node != t.text && (t.node.className = ""));
            var n = t.textClass
              ? t.textClass + " " + (t.line.textClass || "")
              : t.line.textClass;
            t.text.className = n || "";
          }
          function Ol(e, t, n, r) {
            if (
              (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
              t.gutterBackground &&
                (t.node.removeChild(t.gutterBackground),
                (t.gutterBackground = null)),
              t.line.gutterClass)
            ) {
              var i = Rn(t);
              ((t.gutterBackground = R(
                "div",
                null,
                "CodeMirror-gutter-background " + t.line.gutterClass,
                "left: " +
                  (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                  "px; width: " +
                  r.gutterTotalWidth +
                  "px",
              )),
                e.display.input.setUneditable(t.gutterBackground),
                i.insertBefore(t.gutterBackground, t.text));
            }
            var o = t.line.gutterMarkers;
            if (e.options.lineNumbers || o) {
              var u = Rn(t),
                c = (t.gutter = R(
                  "div",
                  null,
                  "CodeMirror-gutter-wrapper",
                  "left: " +
                    (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                    "px",
                ));
              if (
                (c.setAttribute("aria-hidden", "true"),
                e.display.input.setUneditable(c),
                u.insertBefore(c, t.text),
                t.line.gutterClass && (c.className += " " + t.line.gutterClass),
                e.options.lineNumbers &&
                  (!o || !o["CodeMirror-linenumbers"]) &&
                  (t.lineNumber = c.appendChild(
                    R(
                      "div",
                      ya(e.options, n),
                      "CodeMirror-linenumber CodeMirror-gutter-elt",
                      "left: " +
                        r.gutterLeft["CodeMirror-linenumbers"] +
                        "px; width: " +
                        e.display.lineNumInnerWidth +
                        "px",
                    ),
                  )),
                o)
              )
                for (var h = 0; h < e.display.gutterSpecs.length; ++h) {
                  var v = e.display.gutterSpecs[h].className,
                    k = o.hasOwnProperty(v) && o[v];
                  k &&
                    c.appendChild(
                      R(
                        "div",
                        [k],
                        "CodeMirror-gutter-elt",
                        "left: " +
                          r.gutterLeft[v] +
                          "px; width: " +
                          r.gutterWidth[v] +
                          "px",
                      ),
                    );
                }
            }
          }
          function Yc(e, t, n) {
            t.alignable && (t.alignable = null);
            for (
              var r = he("CodeMirror-linewidget"),
                i = t.node.firstChild,
                o = void 0;
              i;
              i = o
            )
              ((o = i.nextSibling),
                r.test(i.className) && t.node.removeChild(i));
            Il(e, t, n);
          }
          function Zc(e, t, n, r) {
            var i = Bl(e, t);
            return (
              (t.text = t.node = i.pre),
              i.bgClass && (t.bgClass = i.bgClass),
              i.textClass && (t.textClass = i.textClass),
              La(e, t),
              Ol(e, t, n, r),
              Il(e, t, r),
              t.node
            );
          }
          function Il(e, t, n) {
            if ((Nl(e, t.line, t, n, !0), t.rest))
              for (var r = 0; r < t.rest.length; r++)
                Nl(e, t.rest[r], t, n, !1);
          }
          function Nl(e, t, n, r, i) {
            if (t.widgets)
              for (var o = Rn(n), u = 0, c = t.widgets; u < c.length; ++u) {
                var h = c[u],
                  v = R(
                    "div",
                    [h.node],
                    "CodeMirror-linewidget" +
                      (h.className ? " " + h.className : ""),
                  );
                (h.handleMouseEvents ||
                  v.setAttribute("cm-ignore-events", "true"),
                  Jc(h, v, n, r),
                  e.display.input.setUneditable(v),
                  i && h.above
                    ? o.insertBefore(v, n.gutter || n.text)
                    : o.appendChild(v),
                  vt(h, "redraw"));
              }
          }
          function Jc(e, t, n, r) {
            if (e.noHScroll) {
              (n.alignable || (n.alignable = [])).push(t);
              var i = r.wrapperWidth;
              ((t.style.left = r.fixedPos + "px"),
                e.coverGutter ||
                  ((i -= r.gutterTotalWidth),
                  (t.style.paddingLeft = r.gutterTotalWidth + "px")),
                (t.style.width = i + "px"));
            }
            e.coverGutter &&
              ((t.style.zIndex = 5),
              (t.style.position = "relative"),
              e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
          }
          function Hn(e) {
            if (e.height != null) return e.height;
            var t = e.doc.cm;
            if (!t) return 0;
            if (!De(document.body, e.node)) {
              var n = "position: relative;";
              (e.coverGutter &&
                (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
                e.noHScroll &&
                  (n += "width: " + t.display.wrapper.clientWidth + "px;"),
                Ne(t.display.measure, R("div", [e.node], null, n)));
            }
            return (e.height = e.node.parentNode.offsetHeight);
          }
          function ur(e, t) {
            for (var n = Et(t); n != e.wrapper; n = n.parentNode)
              if (
                !n ||
                (n.nodeType == 1 &&
                  n.getAttribute("cm-ignore-events") == "true") ||
                (n.parentNode == e.sizer && n != e.mover)
              )
                return !0;
          }
          function Fi(e) {
            return e.lineSpace.offsetTop;
          }
          function Ta(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight;
          }
          function Rl(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH;
            var t = Ne(e.measure, R("pre", "x", "CodeMirror-line-like")),
              n = window.getComputedStyle
                ? window.getComputedStyle(t)
                : t.currentStyle,
              r = {
                left: parseInt(n.paddingLeft),
                right: parseInt(n.paddingRight),
              };
            return (
              !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r),
              r
            );
          }
          function nr(e) {
            return We - e.display.nativeBarWidth;
          }
          function Mr(e) {
            return e.display.scroller.clientWidth - nr(e) - e.display.barWidth;
          }
          function _a(e) {
            return (
              e.display.scroller.clientHeight - nr(e) - e.display.barHeight
            );
          }
          function Qc(e, t, n) {
            var r = e.options.lineWrapping,
              i = r && Mr(e);
            if (!t.measure.heights || (r && t.measure.width != i)) {
              var o = (t.measure.heights = []);
              if (r) {
                t.measure.width = i;
                for (
                  var u = t.text.firstChild.getClientRects(), c = 0;
                  c < u.length - 1;
                  c++
                ) {
                  var h = u[c],
                    v = u[c + 1];
                  Math.abs(h.bottom - v.bottom) > 2 &&
                    o.push((h.bottom + v.top) / 2 - n.top);
                }
              }
              o.push(n.bottom - n.top);
            }
          }
          function Hl(e, t, n) {
            if (e.line == t)
              return { map: e.measure.map, cache: e.measure.cache };
            if (e.rest) {
              for (var r = 0; r < e.rest.length; r++)
                if (e.rest[r] == t)
                  return { map: e.measure.maps[r], cache: e.measure.caches[r] };
              for (var i = 0; i < e.rest.length; i++)
                if (je(e.rest[i]) > n)
                  return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i],
                    before: !0,
                  };
            }
          }
          function Vc(e, t) {
            t = Xt(t);
            var n = je(t),
              r = (e.display.externalMeasured = new _l(e.doc, t, n));
            r.lineN = n;
            var i = (r.built = Ll(e, r));
            return ((r.text = i.pre), Ne(e.display.lineMeasure, i.pre), r);
          }
          function Pl(e, t, n, r) {
            return ir(e, on(e, t), n, r);
          }
          function Ma(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo)
              return e.display.view[Ir(e, t)];
            var n = e.display.externalMeasured;
            if (n && t >= n.lineN && t < n.lineN + n.size) return n;
          }
          function on(e, t) {
            var n = je(t),
              r = Ma(e, n);
            (r && !r.text
              ? (r = null)
              : r &&
                r.changes &&
                (Ml(e, r, n, Ra(e)), (e.curOp.forceUpdate = !0)),
              r || (r = Vc(e, t)));
            var i = Hl(r, t, n);
            return {
              line: t,
              view: r,
              rect: null,
              map: i.map,
              cache: i.cache,
              before: i.before,
              hasHeights: !1,
            };
          }
          function ir(e, t, n, r, i) {
            t.before && (n = -1);
            var o = n + (r || ""),
              u;
            return (
              t.cache.hasOwnProperty(o)
                ? (u = t.cache[o])
                : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                  t.hasHeights || (Qc(e, t.view, t.rect), (t.hasHeights = !0)),
                  (u = th(e, t, n, r)),
                  u.bogus || (t.cache[o] = u)),
              {
                left: u.left,
                right: u.right,
                top: i ? u.rtop : u.top,
                bottom: i ? u.rbottom : u.bottom,
              }
            );
          }
          var zl = { left: 0, right: 0, top: 0, bottom: 0 };
          function Wl(e, t, n) {
            for (var r, i, o, u, c, h, v = 0; v < e.length; v += 3)
              if (
                ((c = e[v]),
                (h = e[v + 1]),
                t < c
                  ? ((i = 0), (o = 1), (u = "left"))
                  : t < h
                    ? ((i = t - c), (o = i + 1))
                    : (v == e.length - 3 || (t == h && e[v + 3] > t)) &&
                      ((o = h - c), (i = o - 1), t >= h && (u = "right")),
                i != null)
              ) {
                if (
                  ((r = e[v + 2]),
                  c == h && n == (r.insertLeft ? "left" : "right") && (u = n),
                  n == "left" && i == 0)
                )
                  for (; v && e[v - 2] == e[v - 3] && e[v - 1].insertLeft; )
                    ((r = e[(v -= 3) + 2]), (u = "left"));
                if (n == "right" && i == h - c)
                  for (
                    ;
                    v < e.length - 3 &&
                    e[v + 3] == e[v + 4] &&
                    !e[v + 5].insertLeft;
                  )
                    ((r = e[(v += 3) + 2]), (u = "right"));
                break;
              }
            return {
              node: r,
              start: i,
              end: o,
              collapse: u,
              coverStart: c,
              coverEnd: h,
            };
          }
          function eh(e, t) {
            var n = zl;
            if (t == "left")
              for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
            else
              for (
                var i = e.length - 1;
                i >= 0 && (n = e[i]).left == n.right;
                i--
              );
            return n;
          }
          function th(e, t, n, r) {
            var i = Wl(t.map, n, r),
              o = i.node,
              u = i.start,
              c = i.end,
              h = i.collapse,
              v;
            if (o.nodeType == 3) {
              for (var k = 0; k < 4; k++) {
                for (; u && f(t.line.text.charAt(i.coverStart + u)); ) --u;
                for (
                  ;
                  i.coverStart + c < i.coverEnd &&
                  f(t.line.text.charAt(i.coverStart + c));
                )
                  ++c;
                if (
                  (C && L < 9 && u == 0 && c == i.coverEnd - i.coverStart
                    ? (v = o.parentNode.getBoundingClientRect())
                    : (v = eh(re(o, u, c).getClientRects(), r)),
                  v.left || v.right || u == 0)
                )
                  break;
                ((c = u), (u = u - 1), (h = "right"));
              }
              C && L < 11 && (v = rh(e.display.measure, v));
            } else {
              u > 0 && (h = r = "right");
              var A;
              e.options.lineWrapping && (A = o.getClientRects()).length > 1
                ? (v = A[r == "right" ? A.length - 1 : 0])
                : (v = o.getBoundingClientRect());
            }
            if (C && L < 9 && !u && (!v || (!v.left && !v.right))) {
              var H = o.parentNode.getClientRects()[0];
              H
                ? (v = {
                    left: H.left,
                    right: H.left + sn(e.display),
                    top: H.top,
                    bottom: H.bottom,
                  })
                : (v = zl);
            }
            for (
              var O = v.top - t.rect.top,
                Y = v.bottom - t.rect.top,
                V = (O + Y) / 2,
                oe = t.view.measure.heights,
                de = 0;
              de < oe.length - 1 && !(V < oe[de]);
              de++
            );
            var ge = de ? oe[de - 1] : 0,
              pe = oe[de],
              me = {
                left: (h == "right" ? v.right : v.left) - t.rect.left,
                right: (h == "left" ? v.left : v.right) - t.rect.left,
                top: ge,
                bottom: pe,
              };
            return (
              !v.left && !v.right && (me.bogus = !0),
              e.options.singleCursorHeightPerLine ||
                ((me.rtop = O), (me.rbottom = Y)),
              me
            );
          }
          function rh(e, t) {
            if (
              !window.screen ||
              screen.logicalXDPI == null ||
              screen.logicalXDPI == screen.deviceXDPI ||
              !$t(e)
            )
              return t;
            var n = screen.logicalXDPI / screen.deviceXDPI,
              r = screen.logicalYDPI / screen.deviceYDPI;
            return {
              left: t.left * n,
              right: t.right * n,
              top: t.top * r,
              bottom: t.bottom * r,
            };
          }
          function ql(e) {
            if (
              e.measure &&
              ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
            )
              for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
          }
          function Ul(e) {
            ((e.display.externalMeasure = null), Fe(e.display.lineMeasure));
            for (var t = 0; t < e.display.view.length; t++)
              ql(e.display.view[t]);
          }
          function Pn(e) {
            (Ul(e),
              (e.display.cachedCharWidth =
                e.display.cachedTextHeight =
                e.display.cachedPaddingH =
                  null),
              e.options.lineWrapping || (e.display.maxLineChanged = !0),
              (e.display.lineNumChars = null));
          }
          function jl(e) {
            return j && Z
              ? -(
                  e.body.getBoundingClientRect().left -
                  parseInt(getComputedStyle(e.body).marginLeft)
                )
              : e.defaultView.pageXOffset ||
                  (e.documentElement || e.body).scrollLeft;
          }
          function Gl(e) {
            return j && Z
              ? -(
                  e.body.getBoundingClientRect().top -
                  parseInt(getComputedStyle(e.body).marginTop)
                )
              : e.defaultView.pageYOffset ||
                  (e.documentElement || e.body).scrollTop;
          }
          function Ba(e) {
            var t = Xt(e),
              n = t.widgets,
              r = 0;
            if (n)
              for (var i = 0; i < n.length; ++i) n[i].above && (r += Hn(n[i]));
            return r;
          }
          function Li(e, t, n, r, i) {
            if (!i) {
              var o = Ba(t);
              ((n.top += o), (n.bottom += o));
            }
            if (r == "line") return n;
            r || (r = "local");
            var u = sr(t);
            if (
              (r == "local"
                ? (u += Fi(e.display))
                : (u -= e.display.viewOffset),
              r == "page" || r == "window")
            ) {
              var c = e.display.lineSpace.getBoundingClientRect();
              u += c.top + (r == "window" ? 0 : Gl(D(e)));
              var h = c.left + (r == "window" ? 0 : jl(D(e)));
              ((n.left += h), (n.right += h));
            }
            return ((n.top += u), (n.bottom += u), n);
          }
          function Kl(e, t, n) {
            if (n == "div") return t;
            var r = t.left,
              i = t.top;
            if (n == "page") ((r -= jl(D(e))), (i -= Gl(D(e))));
            else if (n == "local" || !n) {
              var o = e.display.sizer.getBoundingClientRect();
              ((r += o.left), (i += o.top));
            }
            var u = e.display.lineSpace.getBoundingClientRect();
            return { left: r - u.left, top: i - u.top };
          }
          function Ti(e, t, n, r, i) {
            return (
              r || (r = Ce(e.doc, t.line)),
              Li(e, r, Pl(e, r, t.ch, i), n)
            );
          }
          function Yt(e, t, n, r, i, o) {
            ((r = r || Ce(e.doc, t.line)), i || (i = on(e, r)));
            function u(Y, V) {
              var oe = ir(e, i, Y, V ? "right" : "left", o);
              return (
                V ? (oe.left = oe.right) : (oe.right = oe.left),
                Li(e, r, oe, n)
              );
            }
            var c = F(r, e.doc.direction),
              h = t.ch,
              v = t.sticky;
            if (
              (h >= r.text.length
                ? ((h = r.text.length), (v = "before"))
                : h <= 0 && ((h = 0), (v = "after")),
              !c)
            )
              return u(v == "before" ? h - 1 : h, v == "before");
            function k(Y, V, oe) {
              var de = c[V],
                ge = de.level == 1;
              return u(oe ? Y - 1 : Y, ge != oe);
            }
            var A = z(c, h, v),
              H = _,
              O = k(h, A, v == "before");
            return (H != null && (O.other = k(h, H, v != "before")), O);
          }
          function $l(e, t) {
            var n = 0;
            ((t = Oe(e.doc, t)),
              e.options.lineWrapping || (n = sn(e.display) * t.ch));
            var r = Ce(e.doc, t.line),
              i = sr(r) + Fi(e.display);
            return { left: n, right: n, top: i, bottom: i + r.height };
          }
          function Oa(e, t, n, r, i) {
            var o = ie(e, t, n);
            return ((o.xRel = i), r && (o.outside = r), o);
          }
          function Ia(e, t, n) {
            var r = e.doc;
            if (((n += e.display.viewOffset), n < 0))
              return Oa(r.first, 0, null, -1, -1);
            var i = _r(r, n),
              o = r.first + r.size - 1;
            if (i > o)
              return Oa(r.first + r.size - 1, Ce(r, o).text.length, null, 1, 1);
            t < 0 && (t = 0);
            for (var u = Ce(r, i); ; ) {
              var c = nh(e, u, i, t, n),
                h = _c(u, c.ch + (c.xRel > 0 || c.outside > 0 ? 1 : 0));
              if (!h) return c;
              var v = h.find(1);
              if (v.line == i) return v;
              u = Ce(r, (i = v.line));
            }
          }
          function Xl(e, t, n, r) {
            r -= Ba(t);
            var i = t.text.length,
              o = S(
                function (u) {
                  return ir(e, n, u - 1).bottom <= r;
                },
                i,
                0,
              );
            return (
              (i = S(
                function (u) {
                  return ir(e, n, u).top > r;
                },
                o,
                i,
              )),
              { begin: o, end: i }
            );
          }
          function Yl(e, t, n, r) {
            n || (n = on(e, t));
            var i = Li(e, t, ir(e, n, r), "line").top;
            return Xl(e, t, n, i);
          }
          function Na(e, t, n, r) {
            return e.bottom <= n
              ? !1
              : e.top > n
                ? !0
                : (r ? e.left : e.right) > t;
          }
          function nh(e, t, n, r, i) {
            i -= sr(t);
            var o = on(e, t),
              u = Ba(t),
              c = 0,
              h = t.text.length,
              v = !0,
              k = F(t, e.doc.direction);
            if (k) {
              var A = (e.options.lineWrapping ? ah : ih)(e, t, n, o, k, r, i);
              ((v = A.level != 1),
                (c = v ? A.from : A.to - 1),
                (h = v ? A.to : A.from - 1));
            }
            var H = null,
              O = null,
              Y = S(
                function (Ae) {
                  var Se = ir(e, o, Ae);
                  return (
                    (Se.top += u),
                    (Se.bottom += u),
                    Na(Se, r, i, !1)
                      ? (Se.top <= i && Se.left <= r && ((H = Ae), (O = Se)),
                        !0)
                      : !1
                  );
                },
                c,
                h,
              ),
              V,
              oe,
              de = !1;
            if (O) {
              var ge = r - O.left < O.right - r,
                pe = ge == v;
              ((Y = H + (pe ? 0 : 1)),
                (oe = pe ? "after" : "before"),
                (V = ge ? O.left : O.right));
            } else {
              (!v && (Y == h || Y == c) && Y++,
                (oe =
                  Y == 0
                    ? "after"
                    : Y == t.text.length
                      ? "before"
                      : ir(e, o, Y - (v ? 1 : 0)).bottom + u <= i == v
                        ? "after"
                        : "before"));
              var me = Yt(e, ie(n, Y, oe), "line", t, o);
              ((V = me.left), (de = i < me.top ? -1 : i >= me.bottom ? 1 : 0));
            }
            return ((Y = g(t.text, Y, 1)), Oa(n, Y, oe, de, r - V));
          }
          function ih(e, t, n, r, i, o, u) {
            var c = S(
                function (A) {
                  var H = i[A],
                    O = H.level != 1;
                  return Na(
                    Yt(
                      e,
                      ie(n, O ? H.to : H.from, O ? "before" : "after"),
                      "line",
                      t,
                      r,
                    ),
                    o,
                    u,
                    !0,
                  );
                },
                0,
                i.length - 1,
              ),
              h = i[c];
            if (c > 0) {
              var v = h.level != 1,
                k = Yt(
                  e,
                  ie(n, v ? h.from : h.to, v ? "after" : "before"),
                  "line",
                  t,
                  r,
                );
              Na(k, o, u, !0) && k.top > u && (h = i[c - 1]);
            }
            return h;
          }
          function ah(e, t, n, r, i, o, u) {
            var c = Xl(e, t, r, u),
              h = c.begin,
              v = c.end;
            /\s/.test(t.text.charAt(v - 1)) && v--;
            for (var k = null, A = null, H = 0; H < i.length; H++) {
              var O = i[H];
              if (!(O.from >= v || O.to <= h)) {
                var Y = O.level != 1,
                  V = ir(
                    e,
                    r,
                    Y ? Math.min(v, O.to) - 1 : Math.max(h, O.from),
                  ).right,
                  oe = V < o ? o - V + 1e9 : V - o;
                (!k || A > oe) && ((k = O), (A = oe));
              }
            }
            return (
              k || (k = i[i.length - 1]),
              k.from < h && (k = { from: h, to: k.to, level: k.level }),
              k.to > v && (k = { from: k.from, to: v, level: k.level }),
              k
            );
          }
          var Br;
          function ln(e) {
            if (e.cachedTextHeight != null) return e.cachedTextHeight;
            if (Br == null) {
              Br = R("pre", null, "CodeMirror-line-like");
              for (var t = 0; t < 49; ++t)
                (Br.appendChild(document.createTextNode("x")),
                  Br.appendChild(R("br")));
              Br.appendChild(document.createTextNode("x"));
            }
            Ne(e.measure, Br);
            var n = Br.offsetHeight / 50;
            return (n > 3 && (e.cachedTextHeight = n), Fe(e.measure), n || 1);
          }
          function sn(e) {
            if (e.cachedCharWidth != null) return e.cachedCharWidth;
            var t = R("span", "xxxxxxxxxx"),
              n = R("pre", [t], "CodeMirror-line-like");
            Ne(e.measure, n);
            var r = t.getBoundingClientRect(),
              i = (r.right - r.left) / 10;
            return (i > 2 && (e.cachedCharWidth = i), i || 10);
          }
          function Ra(e) {
            for (
              var t = e.display,
                n = {},
                r = {},
                i = t.gutters.clientLeft,
                o = t.gutters.firstChild,
                u = 0;
              o;
              o = o.nextSibling, ++u
            ) {
              var c = e.display.gutterSpecs[u].className;
              ((n[c] = o.offsetLeft + o.clientLeft + i),
                (r[c] = o.clientWidth));
            }
            return {
              fixedPos: Ha(t),
              gutterTotalWidth: t.gutters.offsetWidth,
              gutterLeft: n,
              gutterWidth: r,
              wrapperWidth: t.wrapper.clientWidth,
            };
          }
          function Ha(e) {
            return (
              e.scroller.getBoundingClientRect().left -
              e.sizer.getBoundingClientRect().left
            );
          }
          function Zl(e) {
            var t = ln(e.display),
              n = e.options.lineWrapping,
              r =
                n &&
                Math.max(5, e.display.scroller.clientWidth / sn(e.display) - 3);
            return function (i) {
              if (gr(e.doc, i)) return 0;
              var o = 0;
              if (i.widgets)
                for (var u = 0; u < i.widgets.length; u++)
                  i.widgets[u].height && (o += i.widgets[u].height);
              return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
            };
          }
          function Pa(e) {
            var t = e.doc,
              n = Zl(e);
            t.iter(function (r) {
              var i = n(r);
              i != r.height && tr(r, i);
            });
          }
          function Or(e, t, n, r) {
            var i = e.display;
            if (!n && Et(t).getAttribute("cm-not-content") == "true")
              return null;
            var o,
              u,
              c = i.lineSpace.getBoundingClientRect();
            try {
              ((o = t.clientX - c.left), (u = t.clientY - c.top));
            } catch {
              return null;
            }
            var h = Ia(e, o, u),
              v;
            if (
              r &&
              h.xRel > 0 &&
              (v = Ce(e.doc, h.line).text).length == h.ch
            ) {
              var k = Ke(v, v.length, e.options.tabSize) - v.length;
              h = ie(
                h.line,
                Math.max(
                  0,
                  Math.round((o - Rl(e.display).left) / sn(e.display)) - k,
                ),
              );
            }
            return h;
          }
          function Ir(e, t) {
            if (t >= e.display.viewTo || ((t -= e.display.viewFrom), t < 0))
              return null;
            for (var n = e.display.view, r = 0; r < n.length; r++)
              if (((t -= n[r].size), t < 0)) return r;
          }
          function _t(e, t, n, r) {
            (t == null && (t = e.doc.first),
              n == null && (n = e.doc.first + e.doc.size),
              r || (r = 0));
            var i = e.display;
            if (
              (r &&
                n < i.viewTo &&
                (i.updateLineNumbers == null || i.updateLineNumbers > t) &&
                (i.updateLineNumbers = t),
              (e.curOp.viewChanged = !0),
              t >= i.viewTo)
            )
              lr && Aa(e.doc, t) < i.viewTo && mr(e);
            else if (n <= i.viewFrom)
              lr && El(e.doc, n + r) > i.viewFrom
                ? mr(e)
                : ((i.viewFrom += r), (i.viewTo += r));
            else if (t <= i.viewFrom && n >= i.viewTo) mr(e);
            else if (t <= i.viewFrom) {
              var o = _i(e, n, n + r, 1);
              o
                ? ((i.view = i.view.slice(o.index)),
                  (i.viewFrom = o.lineN),
                  (i.viewTo += r))
                : mr(e);
            } else if (n >= i.viewTo) {
              var u = _i(e, t, t, -1);
              u
                ? ((i.view = i.view.slice(0, u.index)), (i.viewTo = u.lineN))
                : mr(e);
            } else {
              var c = _i(e, t, t, -1),
                h = _i(e, n, n + r, 1);
              c && h
                ? ((i.view = i.view
                    .slice(0, c.index)
                    .concat(Ei(e, c.lineN, h.lineN))
                    .concat(i.view.slice(h.index))),
                  (i.viewTo += r))
                : mr(e);
            }
            var v = i.externalMeasured;
            v &&
              (n < v.lineN
                ? (v.lineN += r)
                : t < v.lineN + v.size && (i.externalMeasured = null));
          }
          function vr(e, t, n) {
            e.curOp.viewChanged = !0;
            var r = e.display,
              i = e.display.externalMeasured;
            if (
              (i &&
                t >= i.lineN &&
                t < i.lineN + i.size &&
                (r.externalMeasured = null),
              !(t < r.viewFrom || t >= r.viewTo))
            ) {
              var o = r.view[Ir(e, t)];
              if (o.node != null) {
                var u = o.changes || (o.changes = []);
                He(u, n) == -1 && u.push(n);
              }
            }
          }
          function mr(e) {
            ((e.display.viewFrom = e.display.viewTo = e.doc.first),
              (e.display.view = []),
              (e.display.viewOffset = 0));
          }
          function _i(e, t, n, r) {
            var i = Ir(e, t),
              o,
              u = e.display.view;
            if (!lr || n == e.doc.first + e.doc.size)
              return { index: i, lineN: n };
            for (var c = e.display.viewFrom, h = 0; h < i; h++) c += u[h].size;
            if (c != t) {
              if (r > 0) {
                if (i == u.length - 1) return null;
                ((o = c + u[i].size - t), i++);
              } else o = c - t;
              ((t += o), (n += o));
            }
            for (; Aa(e.doc, n) != n; ) {
              if (i == (r < 0 ? 0 : u.length - 1)) return null;
              ((n += r * u[i - (r < 0 ? 1 : 0)].size), (i += r));
            }
            return { index: i, lineN: n };
          }
          function oh(e, t, n) {
            var r = e.display,
              i = r.view;
            (i.length == 0 || t >= r.viewTo || n <= r.viewFrom
              ? ((r.view = Ei(e, t, n)), (r.viewFrom = t))
              : (r.viewFrom > t
                  ? (r.view = Ei(e, t, r.viewFrom).concat(r.view))
                  : r.viewFrom < t && (r.view = r.view.slice(Ir(e, t))),
                (r.viewFrom = t),
                r.viewTo < n
                  ? (r.view = r.view.concat(Ei(e, r.viewTo, n)))
                  : r.viewTo > n && (r.view = r.view.slice(0, Ir(e, n)))),
              (r.viewTo = n));
          }
          function Jl(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
              var i = t[r];
              !i.hidden && (!i.node || i.changes) && ++n;
            }
            return n;
          }
          function zn(e) {
            e.display.input.showSelection(e.display.input.prepareSelection());
          }
          function Ql(e, t) {
            t === void 0 && (t = !0);
            var n = e.doc,
              r = {},
              i = (r.cursors = document.createDocumentFragment()),
              o = (r.selection = document.createDocumentFragment()),
              u = e.options.$customCursor;
            u && (t = !0);
            for (var c = 0; c < n.sel.ranges.length; c++)
              if (!(!t && c == n.sel.primIndex)) {
                var h = n.sel.ranges[c];
                if (
                  !(
                    h.from().line >= e.display.viewTo ||
                    h.to().line < e.display.viewFrom
                  )
                ) {
                  var v = h.empty();
                  if (u) {
                    var k = u(e, h);
                    k && za(e, k, i);
                  } else
                    (v || e.options.showCursorWhenSelecting) &&
                      za(e, h.head, i);
                  v || lh(e, h, o);
                }
              }
            return r;
          }
          function za(e, t, n) {
            var r = Yt(
                e,
                t,
                "div",
                null,
                null,
                !e.options.singleCursorHeightPerLine,
              ),
              i = n.appendChild(R("div", " ", "CodeMirror-cursor"));
            if (
              ((i.style.left = r.left + "px"),
              (i.style.top = r.top + "px"),
              (i.style.height =
                Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"),
              /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
            ) {
              var o = Ti(e, t, "div", null, null),
                u = o.right - o.left;
              i.style.width = (u > 0 ? u : e.defaultCharWidth()) + "px";
            }
            if (r.other) {
              var c = n.appendChild(
                R("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"),
              );
              ((c.style.display = ""),
                (c.style.left = r.other.left + "px"),
                (c.style.top = r.other.top + "px"),
                (c.style.height =
                  (r.other.bottom - r.other.top) * 0.85 + "px"));
            }
          }
          function Mi(e, t) {
            return e.top - t.top || e.left - t.left;
          }
          function lh(e, t, n) {
            var r = e.display,
              i = e.doc,
              o = document.createDocumentFragment(),
              u = Rl(e.display),
              c = u.left,
              h = Math.max(r.sizerWidth, Mr(e) - r.sizer.offsetLeft) - u.right,
              v = i.direction == "ltr";
            function k(pe, me, Ae, Se) {
              (me < 0 && (me = 0),
                (me = Math.round(me)),
                (Se = Math.round(Se)),
                o.appendChild(
                  R(
                    "div",
                    null,
                    "CodeMirror-selected",
                    "position: absolute; left: " +
                      pe +
                      `px;
                             top: ` +
                      me +
                      "px; width: " +
                      (Ae ?? h - pe) +
                      `px;
                             height: ` +
                      (Se - me) +
                      "px",
                  ),
                ));
            }
            function A(pe, me, Ae) {
              var Se = Ce(i, pe),
                Re = Se.text.length,
                Ze,
                yt;
              function rt(ht, Ot) {
                return Ti(e, ie(pe, ht), "div", Se, Ot);
              }
              function Pt(ht, Ot, wt) {
                var pt = Yl(e, Se, null, ht),
                  dt = (Ot == "ltr") == (wt == "after") ? "left" : "right",
                  at =
                    wt == "after"
                      ? pt.begin
                      : pt.end -
                        (/\s/.test(Se.text.charAt(pt.end - 1)) ? 2 : 1);
                return rt(at, dt)[dt];
              }
              var Bt = F(Se, i.direction);
              return (
                E(Bt, me || 0, Ae ?? Re, function (ht, Ot, wt, pt) {
                  var dt = wt == "ltr",
                    at = rt(ht, dt ? "left" : "right"),
                    It = rt(Ot - 1, dt ? "right" : "left"),
                    Dn = me == null && ht == 0,
                    Cr = Ae == null && Ot == Re,
                    At = pt == 0,
                    ar = !Bt || pt == Bt.length - 1;
                  if (It.top - at.top <= 3) {
                    var bt = (v ? Dn : Cr) && At,
                      po = (v ? Cr : Dn) && ar,
                      hr = bt ? c : (dt ? at : It).left,
                      zr = po ? h : (dt ? It : at).right;
                    k(hr, at.top, zr - hr, at.bottom);
                  } else {
                    var Wr, Lt, wn, go;
                    (dt
                      ? ((Wr = v && Dn && At ? c : at.left),
                        (Lt = v ? h : Pt(ht, wt, "before")),
                        (wn = v ? c : Pt(Ot, wt, "after")),
                        (go = v && Cr && ar ? h : It.right))
                      : ((Wr = v ? Pt(ht, wt, "before") : c),
                        (Lt = !v && Dn && At ? h : at.right),
                        (wn = !v && Cr && ar ? c : It.left),
                        (go = v ? Pt(Ot, wt, "after") : h)),
                      k(Wr, at.top, Lt - Wr, at.bottom),
                      at.bottom < It.top && k(c, at.bottom, null, It.top),
                      k(wn, It.top, go - wn, It.bottom));
                  }
                  ((!Ze || Mi(at, Ze) < 0) && (Ze = at),
                    Mi(It, Ze) < 0 && (Ze = It),
                    (!yt || Mi(at, yt) < 0) && (yt = at),
                    Mi(It, yt) < 0 && (yt = It));
                }),
                { start: Ze, end: yt }
              );
            }
            var H = t.from(),
              O = t.to();
            if (H.line == O.line) A(H.line, H.ch, O.ch);
            else {
              var Y = Ce(i, H.line),
                V = Ce(i, O.line),
                oe = Xt(Y) == Xt(V),
                de = A(H.line, H.ch, oe ? Y.text.length + 1 : null).end,
                ge = A(O.line, oe ? 0 : null, O.ch).start;
              (oe &&
                (de.top < ge.top - 2
                  ? (k(de.right, de.top, null, de.bottom),
                    k(c, ge.top, ge.left, ge.bottom))
                  : k(de.right, de.top, ge.left - de.right, de.bottom)),
                de.bottom < ge.top && k(c, de.bottom, null, ge.top));
            }
            n.appendChild(o);
          }
          function Wa(e) {
            if (e.state.focused) {
              var t = e.display;
              clearInterval(t.blinker);
              var n = !0;
              ((t.cursorDiv.style.visibility = ""),
                e.options.cursorBlinkRate > 0
                  ? (t.blinker = setInterval(function () {
                      (e.hasFocus() || un(e),
                        (t.cursorDiv.style.visibility = (n = !n)
                          ? ""
                          : "hidden"));
                    }, e.options.cursorBlinkRate))
                  : e.options.cursorBlinkRate < 0 &&
                    (t.cursorDiv.style.visibility = "hidden"));
            }
          }
          function Vl(e) {
            e.hasFocus() || (e.display.input.focus(), e.state.focused || Ua(e));
          }
          function qa(e) {
            ((e.state.delayingBlurEvent = !0),
              setTimeout(function () {
                e.state.delayingBlurEvent &&
                  ((e.state.delayingBlurEvent = !1), e.state.focused && un(e));
              }, 100));
          }
          function Ua(e, t) {
            (e.state.delayingBlurEvent &&
              !e.state.draggingText &&
              (e.state.delayingBlurEvent = !1),
              e.options.readOnly != "nocursor" &&
                (e.state.focused ||
                  (ye(e, "focus", e, t),
                  (e.state.focused = !0),
                  nt(e.display.wrapper, "CodeMirror-focused"),
                  !e.curOp &&
                    e.display.selForContextMenu != e.doc.sel &&
                    (e.display.input.reset(),
                    K &&
                      setTimeout(function () {
                        return e.display.input.reset(!0);
                      }, 20)),
                  e.display.input.receivedFocus()),
                Wa(e)));
          }
          function un(e, t) {
            e.state.delayingBlurEvent ||
              (e.state.focused &&
                (ye(e, "blur", e, t),
                (e.state.focused = !1),
                Le(e.display.wrapper, "CodeMirror-focused")),
              clearInterval(e.display.blinker),
              setTimeout(function () {
                e.state.focused || (e.display.shift = !1);
              }, 150));
          }
          function Bi(e) {
            for (
              var t = e.display,
                n = t.lineDiv.offsetTop,
                r = Math.max(0, t.scroller.getBoundingClientRect().top),
                i = t.lineDiv.getBoundingClientRect().top,
                o = 0,
                u = 0;
              u < t.view.length;
              u++
            ) {
              var c = t.view[u],
                h = e.options.lineWrapping,
                v = void 0,
                k = 0;
              if (!c.hidden) {
                if (((i += c.line.height), C && L < 8)) {
                  var A = c.node.offsetTop + c.node.offsetHeight;
                  ((v = A - n), (n = A));
                } else {
                  var H = c.node.getBoundingClientRect();
                  ((v = H.bottom - H.top),
                    !h &&
                      c.text.firstChild &&
                      (k =
                        c.text.firstChild.getBoundingClientRect().right -
                        H.left -
                        1));
                }
                var O = c.line.height - v;
                if (
                  (O > 0.005 || O < -0.005) &&
                  (i < r && (o -= O), tr(c.line, v), es(c.line), c.rest)
                )
                  for (var Y = 0; Y < c.rest.length; Y++) es(c.rest[Y]);
                if (k > e.display.sizerWidth) {
                  var V = Math.ceil(k / sn(e.display));
                  V > e.display.maxLineLength &&
                    ((e.display.maxLineLength = V),
                    (e.display.maxLine = c.line),
                    (e.display.maxLineChanged = !0));
                }
              }
            }
            Math.abs(o) > 2 && (t.scroller.scrollTop += o);
          }
          function es(e) {
            if (e.widgets)
              for (var t = 0; t < e.widgets.length; ++t) {
                var n = e.widgets[t],
                  r = n.node.parentNode;
                r && (n.height = r.offsetHeight);
              }
          }
          function Oi(e, t, n) {
            var r =
              n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
            r = Math.floor(r - Fi(e));
            var i =
                n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight,
              o = _r(t, r),
              u = _r(t, i);
            if (n && n.ensure) {
              var c = n.ensure.from.line,
                h = n.ensure.to.line;
              c < o
                ? ((o = c), (u = _r(t, sr(Ce(t, c)) + e.wrapper.clientHeight)))
                : Math.min(h, t.lastLine()) >= u &&
                  ((o = _r(t, sr(Ce(t, h)) - e.wrapper.clientHeight)), (u = h));
            }
            return { from: o, to: Math.max(u, o + 1) };
          }
          function sh(e, t) {
            if (!se(e, "scrollCursorIntoView")) {
              var n = e.display,
                r = n.sizer.getBoundingClientRect(),
                i = null,
                o = n.wrapper.ownerDocument;
              if (
                (t.top + r.top < 0
                  ? (i = !0)
                  : t.bottom + r.top >
                      (o.defaultView.innerHeight ||
                        o.documentElement.clientHeight) && (i = !1),
                i != null && !te)
              ) {
                var u = R(
                  "div",
                  "​",
                  null,
                  `position: absolute;
                         top: ` +
                    (t.top - n.viewOffset - Fi(e.display)) +
                    `px;
                         height: ` +
                    (t.bottom - t.top + nr(e) + n.barHeight) +
                    `px;
                         left: ` +
                    t.left +
                    "px; width: " +
                    Math.max(2, t.right - t.left) +
                    "px;",
                );
                (e.display.lineSpace.appendChild(u),
                  u.scrollIntoView(i),
                  e.display.lineSpace.removeChild(u));
              }
            }
          }
          function uh(e, t, n, r) {
            r == null && (r = 0);
            var i;
            !e.options.lineWrapping &&
              t == n &&
              ((n = t.sticky == "before" ? ie(t.line, t.ch + 1, "before") : t),
              (t = t.ch
                ? ie(t.line, t.sticky == "before" ? t.ch - 1 : t.ch, "after")
                : t));
            for (var o = 0; o < 5; o++) {
              var u = !1,
                c = Yt(e, t),
                h = !n || n == t ? c : Yt(e, n);
              i = {
                left: Math.min(c.left, h.left),
                top: Math.min(c.top, h.top) - r,
                right: Math.max(c.left, h.left),
                bottom: Math.max(c.bottom, h.bottom) + r,
              };
              var v = ja(e, i),
                k = e.doc.scrollTop,
                A = e.doc.scrollLeft;
              if (
                (v.scrollTop != null &&
                  (qn(e, v.scrollTop),
                  Math.abs(e.doc.scrollTop - k) > 1 && (u = !0)),
                v.scrollLeft != null &&
                  (Nr(e, v.scrollLeft),
                  Math.abs(e.doc.scrollLeft - A) > 1 && (u = !0)),
                !u)
              )
                break;
            }
            return i;
          }
          function fh(e, t) {
            var n = ja(e, t);
            (n.scrollTop != null && qn(e, n.scrollTop),
              n.scrollLeft != null && Nr(e, n.scrollLeft));
          }
          function ja(e, t) {
            var n = e.display,
              r = ln(e.display);
            t.top < 0 && (t.top = 0);
            var i =
                e.curOp && e.curOp.scrollTop != null
                  ? e.curOp.scrollTop
                  : n.scroller.scrollTop,
              o = _a(e),
              u = {};
            t.bottom - t.top > o && (t.bottom = t.top + o);
            var c = e.doc.height + Ta(n),
              h = t.top < r,
              v = t.bottom > c - r;
            if (t.top < i) u.scrollTop = h ? 0 : t.top;
            else if (t.bottom > i + o) {
              var k = Math.min(t.top, (v ? c : t.bottom) - o);
              k != i && (u.scrollTop = k);
            }
            var A = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
              H =
                e.curOp && e.curOp.scrollLeft != null
                  ? e.curOp.scrollLeft
                  : n.scroller.scrollLeft - A,
              O = Mr(e) - n.gutters.offsetWidth,
              Y = t.right - t.left > O;
            return (
              Y && (t.right = t.left + O),
              t.left < 10
                ? (u.scrollLeft = 0)
                : t.left < H
                  ? (u.scrollLeft = Math.max(0, t.left + A - (Y ? 0 : 10)))
                  : t.right > O + H - 3 &&
                    (u.scrollLeft = t.right + (Y ? 0 : 10) - O),
              u
            );
          }
          function Ga(e, t) {
            t != null &&
              (Ii(e),
              (e.curOp.scrollTop =
                (e.curOp.scrollTop == null
                  ? e.doc.scrollTop
                  : e.curOp.scrollTop) + t));
          }
          function fn(e) {
            Ii(e);
            var t = e.getCursor();
            e.curOp.scrollToPos = {
              from: t,
              to: t,
              margin: e.options.cursorScrollMargin,
            };
          }
          function Wn(e, t, n) {
            ((t != null || n != null) && Ii(e),
              t != null && (e.curOp.scrollLeft = t),
              n != null && (e.curOp.scrollTop = n));
          }
          function ch(e, t) {
            (Ii(e), (e.curOp.scrollToPos = t));
          }
          function Ii(e) {
            var t = e.curOp.scrollToPos;
            if (t) {
              e.curOp.scrollToPos = null;
              var n = $l(e, t.from),
                r = $l(e, t.to);
              ts(e, n, r, t.margin);
            }
          }
          function ts(e, t, n, r) {
            var i = ja(e, {
              left: Math.min(t.left, n.left),
              top: Math.min(t.top, n.top) - r,
              right: Math.max(t.right, n.right),
              bottom: Math.max(t.bottom, n.bottom) + r,
            });
            Wn(e, i.scrollLeft, i.scrollTop);
          }
          function qn(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 ||
              (p || $a(e, { top: t }), rs(e, t, !0), p && $a(e), Gn(e, 100));
          }
          function rs(e, t, n) {
            ((t = Math.max(
              0,
              Math.min(
                e.display.scroller.scrollHeight -
                  e.display.scroller.clientHeight,
                t,
              ),
            )),
              !(e.display.scroller.scrollTop == t && !n) &&
                ((e.doc.scrollTop = t),
                e.display.scrollbars.setScrollTop(t),
                e.display.scroller.scrollTop != t &&
                  (e.display.scroller.scrollTop = t)));
          }
          function Nr(e, t, n, r) {
            ((t = Math.max(
              0,
              Math.min(
                t,
                e.display.scroller.scrollWidth - e.display.scroller.clientWidth,
              ),
            )),
              !(
                (n
                  ? t == e.doc.scrollLeft
                  : Math.abs(e.doc.scrollLeft - t) < 2) && !r
              ) &&
                ((e.doc.scrollLeft = t),
                ls(e),
                e.display.scroller.scrollLeft != t &&
                  (e.display.scroller.scrollLeft = t),
                e.display.scrollbars.setScrollLeft(t)));
          }
          function Un(e) {
            var t = e.display,
              n = t.gutters.offsetWidth,
              r = Math.round(e.doc.height + Ta(e.display));
            return {
              clientHeight: t.scroller.clientHeight,
              viewHeight: t.wrapper.clientHeight,
              scrollWidth: t.scroller.scrollWidth,
              clientWidth: t.scroller.clientWidth,
              viewWidth: t.wrapper.clientWidth,
              barLeft: e.options.fixedGutter ? n : 0,
              docHeight: r,
              scrollHeight: r + nr(e) + t.barHeight,
              nativeBarWidth: t.nativeBarWidth,
              gutterWidth: n,
            };
          }
          var Rr = function (e, t, n) {
            this.cm = n;
            var r = (this.vert = R(
                "div",
                [R("div", null, null, "min-width: 1px")],
                "CodeMirror-vscrollbar",
              )),
              i = (this.horiz = R(
                "div",
                [R("div", null, null, "height: 100%; min-height: 1px")],
                "CodeMirror-hscrollbar",
              ));
            ((r.tabIndex = i.tabIndex = -1),
              e(r),
              e(i),
              N(r, "scroll", function () {
                r.clientHeight && t(r.scrollTop, "vertical");
              }),
              N(i, "scroll", function () {
                i.clientWidth && t(i.scrollLeft, "horizontal");
              }),
              (this.checkedZeroWidth = !1),
              C &&
                L < 8 &&
                (this.horiz.style.minHeight = this.vert.style.minWidth =
                  "18px"));
          };
          ((Rr.prototype.update = function (e) {
            var t = e.scrollWidth > e.clientWidth + 1,
              n = e.scrollHeight > e.clientHeight + 1,
              r = e.nativeBarWidth;
            if (n) {
              ((this.vert.style.display = "block"),
                (this.vert.style.bottom = t ? r + "px" : "0"));
              var i = e.viewHeight - (t ? r : 0);
              this.vert.firstChild.style.height =
                Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
            } else
              ((this.vert.scrollTop = 0),
                (this.vert.style.display = ""),
                (this.vert.firstChild.style.height = "0"));
            if (t) {
              ((this.horiz.style.display = "block"),
                (this.horiz.style.right = n ? r + "px" : "0"),
                (this.horiz.style.left = e.barLeft + "px"));
              var o = e.viewWidth - e.barLeft - (n ? r : 0);
              this.horiz.firstChild.style.width =
                Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
            } else
              ((this.horiz.style.display = ""),
                (this.horiz.firstChild.style.width = "0"));
            return (
              !this.checkedZeroWidth &&
                e.clientHeight > 0 &&
                (r == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
              { right: n ? r : 0, bottom: t ? r : 0 }
            );
          }),
            (Rr.prototype.setScrollLeft = function (e) {
              (this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                this.disableHoriz &&
                  this.enableZeroWidthBar(
                    this.horiz,
                    this.disableHoriz,
                    "horiz",
                  ));
            }),
            (Rr.prototype.setScrollTop = function (e) {
              (this.vert.scrollTop != e && (this.vert.scrollTop = e),
                this.disableVert &&
                  this.enableZeroWidthBar(this.vert, this.disableVert, "vert"));
            }),
            (Rr.prototype.zeroWidthHack = function () {
              var e = X && !Q ? "12px" : "18px";
              ((this.horiz.style.height = this.vert.style.width = e),
                (this.horiz.style.visibility = this.vert.style.visibility =
                  "hidden"),
                (this.disableHoriz = new Xe()),
                (this.disableVert = new Xe()));
            }),
            (Rr.prototype.enableZeroWidthBar = function (e, t, n) {
              e.style.visibility = "";
              function r() {
                var i = e.getBoundingClientRect(),
                  o =
                    n == "vert"
                      ? document.elementFromPoint(
                          i.right - 1,
                          (i.top + i.bottom) / 2,
                        )
                      : document.elementFromPoint(
                          (i.right + i.left) / 2,
                          i.bottom - 1,
                        );
                o != e ? (e.style.visibility = "hidden") : t.set(1e3, r);
              }
              t.set(1e3, r);
            }),
            (Rr.prototype.clear = function () {
              var e = this.horiz.parentNode;
              (e.removeChild(this.horiz), e.removeChild(this.vert));
            }));
          var jn = function () {};
          ((jn.prototype.update = function () {
            return { bottom: 0, right: 0 };
          }),
            (jn.prototype.setScrollLeft = function () {}),
            (jn.prototype.setScrollTop = function () {}),
            (jn.prototype.clear = function () {}));
          function cn(e, t) {
            t || (t = Un(e));
            var n = e.display.barWidth,
              r = e.display.barHeight;
            ns(e, t);
            for (
              var i = 0;
              (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
              i++
            )
              (n != e.display.barWidth && e.options.lineWrapping && Bi(e),
                ns(e, Un(e)),
                (n = e.display.barWidth),
                (r = e.display.barHeight));
          }
          function ns(e, t) {
            var n = e.display,
              r = n.scrollbars.update(t);
            ((n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
              (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
              (n.heightForcer.style.borderBottom =
                r.bottom + "px solid transparent"),
              r.right && r.bottom
                ? ((n.scrollbarFiller.style.display = "block"),
                  (n.scrollbarFiller.style.height = r.bottom + "px"),
                  (n.scrollbarFiller.style.width = r.right + "px"))
                : (n.scrollbarFiller.style.display = ""),
              r.bottom &&
              e.options.coverGutterNextToScrollbar &&
              e.options.fixedGutter
                ? ((n.gutterFiller.style.display = "block"),
                  (n.gutterFiller.style.height = r.bottom + "px"),
                  (n.gutterFiller.style.width = t.gutterWidth + "px"))
                : (n.gutterFiller.style.display = ""));
          }
          var is = { native: Rr, null: jn };
          function as(e) {
            (e.display.scrollbars &&
              (e.display.scrollbars.clear(),
              e.display.scrollbars.addClass &&
                Le(e.display.wrapper, e.display.scrollbars.addClass)),
              (e.display.scrollbars = new is[e.options.scrollbarStyle](
                function (t) {
                  (e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                    N(t, "mousedown", function () {
                      e.state.focused &&
                        setTimeout(function () {
                          return e.display.input.focus();
                        }, 0);
                    }),
                    t.setAttribute("cm-not-content", "true"));
                },
                function (t, n) {
                  n == "horizontal" ? Nr(e, t) : qn(e, t);
                },
                e,
              )),
              e.display.scrollbars.addClass &&
                nt(e.display.wrapper, e.display.scrollbars.addClass));
          }
          var hh = 0;
          function Hr(e) {
            ((e.curOp = {
              cm: e,
              viewChanged: !1,
              startHeight: e.doc.height,
              forceUpdate: !1,
              updateInput: 0,
              typing: !1,
              changeObjs: null,
              cursorActivityHandlers: null,
              cursorActivityCalled: 0,
              selectionChanged: !1,
              updateMaxLine: !1,
              scrollLeft: null,
              scrollTop: null,
              scrollToPos: null,
              focus: !1,
              id: ++hh,
              markArrays: null,
            }),
              Uc(e.curOp));
          }
          function Pr(e) {
            var t = e.curOp;
            t &&
              Gc(t, function (n) {
                for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null;
                dh(n);
              });
          }
          function dh(e) {
            for (var t = e.ops, n = 0; n < t.length; n++) ph(t[n]);
            for (var r = 0; r < t.length; r++) gh(t[r]);
            for (var i = 0; i < t.length; i++) vh(t[i]);
            for (var o = 0; o < t.length; o++) mh(t[o]);
            for (var u = 0; u < t.length; u++) xh(t[u]);
          }
          function ph(e) {
            var t = e.cm,
              n = t.display;
            (bh(t),
              e.updateMaxLine && Fa(t),
              (e.mustUpdate =
                e.viewChanged ||
                e.forceUpdate ||
                e.scrollTop != null ||
                (e.scrollToPos &&
                  (e.scrollToPos.from.line < n.viewFrom ||
                    e.scrollToPos.to.line >= n.viewTo)) ||
                (n.maxLineChanged && t.options.lineWrapping)),
              (e.update =
                e.mustUpdate &&
                new Ni(
                  t,
                  e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                  e.forceUpdate,
                )));
          }
          function gh(e) {
            e.updatedDisplay = e.mustUpdate && Ka(e.cm, e.update);
          }
          function vh(e) {
            var t = e.cm,
              n = t.display;
            (e.updatedDisplay && Bi(t),
              (e.barMeasure = Un(t)),
              n.maxLineChanged &&
                !t.options.lineWrapping &&
                ((e.adjustWidthTo =
                  Pl(t, n.maxLine, n.maxLine.text.length).left + 3),
                (t.display.sizerWidth = e.adjustWidthTo),
                (e.barMeasure.scrollWidth = Math.max(
                  n.scroller.clientWidth,
                  n.sizer.offsetLeft +
                    e.adjustWidthTo +
                    nr(t) +
                    t.display.barWidth,
                )),
                (e.maxScrollLeft = Math.max(
                  0,
                  n.sizer.offsetLeft + e.adjustWidthTo - Mr(t),
                ))),
              (e.updatedDisplay || e.selectionChanged) &&
                (e.preparedSelection = n.input.prepareSelection()));
          }
          function mh(e) {
            var t = e.cm;
            e.adjustWidthTo != null &&
              ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
              e.maxScrollLeft < t.doc.scrollLeft &&
                Nr(
                  t,
                  Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
                  !0,
                ),
              (t.display.maxLineChanged = !1));
            var n = e.focus && e.focus == ze(J(t));
            (e.preparedSelection &&
              t.display.input.showSelection(e.preparedSelection, n),
              (e.updatedDisplay || e.startHeight != t.doc.height) &&
                cn(t, e.barMeasure),
              e.updatedDisplay && Ya(t, e.barMeasure),
              e.selectionChanged && Wa(t),
              t.state.focused &&
                e.updateInput &&
                t.display.input.reset(e.typing),
              n && Vl(e.cm));
          }
          function xh(e) {
            var t = e.cm,
              n = t.display,
              r = t.doc;
            if (
              (e.updatedDisplay && os(t, e.update),
              n.wheelStartX != null &&
                (e.scrollTop != null ||
                  e.scrollLeft != null ||
                  e.scrollToPos) &&
                (n.wheelStartX = n.wheelStartY = null),
              e.scrollTop != null && rs(t, e.scrollTop, e.forceScroll),
              e.scrollLeft != null && Nr(t, e.scrollLeft, !0, !0),
              e.scrollToPos)
            ) {
              var i = uh(
                t,
                Oe(r, e.scrollToPos.from),
                Oe(r, e.scrollToPos.to),
                e.scrollToPos.margin,
              );
              sh(t, i);
            }
            var o = e.maybeHiddenMarkers,
              u = e.maybeUnhiddenMarkers;
            if (o)
              for (var c = 0; c < o.length; ++c)
                o[c].lines.length || ye(o[c], "hide");
            if (u)
              for (var h = 0; h < u.length; ++h)
                u[h].lines.length && ye(u[h], "unhide");
            (n.wrapper.offsetHeight &&
              (r.scrollTop = t.display.scroller.scrollTop),
              e.changeObjs && ye(t, "changes", t, e.changeObjs),
              e.update && e.update.finish());
          }
          function Ht(e, t) {
            if (e.curOp) return t();
            Hr(e);
            try {
              return t();
            } finally {
              Pr(e);
            }
          }
          function mt(e, t) {
            return function () {
              if (e.curOp) return t.apply(e, arguments);
              Hr(e);
              try {
                return t.apply(e, arguments);
              } finally {
                Pr(e);
              }
            };
          }
          function Ft(e) {
            return function () {
              if (this.curOp) return e.apply(this, arguments);
              Hr(this);
              try {
                return e.apply(this, arguments);
              } finally {
                Pr(this);
              }
            };
          }
          function xt(e) {
            return function () {
              var t = this.cm;
              if (!t || t.curOp) return e.apply(this, arguments);
              Hr(t);
              try {
                return e.apply(this, arguments);
              } finally {
                Pr(t);
              }
            };
          }
          function Gn(e, t) {
            e.doc.highlightFrontier < e.display.viewTo &&
              e.state.highlight.set(t, Je(yh, e));
          }
          function yh(e) {
            var t = e.doc;
            if (!(t.highlightFrontier >= e.display.viewTo)) {
              var n = +new Date() + e.options.workTime,
                r = On(e, t.highlightFrontier),
                i = [];
              (t.iter(
                r.line,
                Math.min(t.first + t.size, e.display.viewTo + 500),
                function (o) {
                  if (r.line >= e.display.viewFrom) {
                    var u = o.styles,
                      c =
                        o.text.length > e.options.maxHighlightLength
                          ? Lr(t.mode, r.state)
                          : null,
                      h = dl(e, o, r, !0);
                    (c && (r.state = c), (o.styles = h.styles));
                    var v = o.styleClasses,
                      k = h.classes;
                    k ? (o.styleClasses = k) : v && (o.styleClasses = null);
                    for (
                      var A =
                          !u ||
                          u.length != o.styles.length ||
                          (v != k &&
                            (!v ||
                              !k ||
                              v.bgClass != k.bgClass ||
                              v.textClass != k.textClass)),
                        H = 0;
                      !A && H < u.length;
                      ++H
                    )
                      A = u[H] != o.styles[H];
                    (A && i.push(r.line),
                      (o.stateAfter = r.save()),
                      r.nextLine());
                  } else
                    (o.text.length <= e.options.maxHighlightLength &&
                      wa(e, o.text, r),
                      (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                      r.nextLine());
                  if (+new Date() > n) return (Gn(e, e.options.workDelay), !0);
                },
              ),
                (t.highlightFrontier = r.line),
                (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
                i.length &&
                  Ht(e, function () {
                    for (var o = 0; o < i.length; o++) vr(e, i[o], "text");
                  }));
            }
          }
          var Ni = function (e, t, n) {
            var r = e.display;
            ((this.viewport = t),
              (this.visible = Oi(r, e.doc, t)),
              (this.editorIsHidden = !r.wrapper.offsetWidth),
              (this.wrapperHeight = r.wrapper.clientHeight),
              (this.wrapperWidth = r.wrapper.clientWidth),
              (this.oldDisplayWidth = Mr(e)),
              (this.force = n),
              (this.dims = Ra(e)),
              (this.events = []));
          };
          ((Ni.prototype.signal = function (e, t) {
            Me(e, t) && this.events.push(arguments);
          }),
            (Ni.prototype.finish = function () {
              for (var e = 0; e < this.events.length; e++)
                ye.apply(null, this.events[e]);
            }));
          function bh(e) {
            var t = e.display;
            !t.scrollbarsClipped &&
              t.scroller.offsetWidth &&
              ((t.nativeBarWidth =
                t.scroller.offsetWidth - t.scroller.clientWidth),
              (t.heightForcer.style.height = nr(e) + "px"),
              (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
              (t.sizer.style.borderRightWidth = nr(e) + "px"),
              (t.scrollbarsClipped = !0));
          }
          function Dh(e) {
            if (e.hasFocus()) return null;
            var t = ze(J(e));
            if (!t || !De(e.display.lineDiv, t)) return null;
            var n = { activeElt: t };
            if (window.getSelection) {
              var r = Te(e).getSelection();
              r.anchorNode &&
                r.extend &&
                De(e.display.lineDiv, r.anchorNode) &&
                ((n.anchorNode = r.anchorNode),
                (n.anchorOffset = r.anchorOffset),
                (n.focusNode = r.focusNode),
                (n.focusOffset = r.focusOffset));
            }
            return n;
          }
          function wh(e) {
            if (
              !(!e || !e.activeElt || e.activeElt == ze(Pe(e.activeElt))) &&
              (e.activeElt.focus(),
              !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                e.anchorNode &&
                De(document.body, e.anchorNode) &&
                De(document.body, e.focusNode))
            ) {
              var t = e.activeElt.ownerDocument,
                n = t.defaultView.getSelection(),
                r = t.createRange();
              (r.setEnd(e.anchorNode, e.anchorOffset),
                r.collapse(!1),
                n.removeAllRanges(),
                n.addRange(r),
                n.extend(e.focusNode, e.focusOffset));
            }
          }
          function Ka(e, t) {
            var n = e.display,
              r = e.doc;
            if (t.editorIsHidden) return (mr(e), !1);
            if (
              !t.force &&
              t.visible.from >= n.viewFrom &&
              t.visible.to <= n.viewTo &&
              (n.updateLineNumbers == null ||
                n.updateLineNumbers >= n.viewTo) &&
              n.renderedView == n.view &&
              Jl(e) == 0
            )
              return !1;
            ss(e) && (mr(e), (t.dims = Ra(e)));
            var i = r.first + r.size,
              o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
              u = Math.min(i, t.visible.to + e.options.viewportMargin);
            (n.viewFrom < o &&
              o - n.viewFrom < 20 &&
              (o = Math.max(r.first, n.viewFrom)),
              n.viewTo > u && n.viewTo - u < 20 && (u = Math.min(i, n.viewTo)),
              lr && ((o = Aa(e.doc, o)), (u = El(e.doc, u))));
            var c =
              o != n.viewFrom ||
              u != n.viewTo ||
              n.lastWrapHeight != t.wrapperHeight ||
              n.lastWrapWidth != t.wrapperWidth;
            (oh(e, o, u),
              (n.viewOffset = sr(Ce(e.doc, n.viewFrom))),
              (e.display.mover.style.top = n.viewOffset + "px"));
            var h = Jl(e);
            if (
              !c &&
              h == 0 &&
              !t.force &&
              n.renderedView == n.view &&
              (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo)
            )
              return !1;
            var v = Dh(e);
            return (
              h > 4 && (n.lineDiv.style.display = "none"),
              Ch(e, n.updateLineNumbers, t.dims),
              h > 4 && (n.lineDiv.style.display = ""),
              (n.renderedView = n.view),
              wh(v),
              Fe(n.cursorDiv),
              Fe(n.selectionDiv),
              (n.gutters.style.height = n.sizer.style.minHeight = 0),
              c &&
                ((n.lastWrapHeight = t.wrapperHeight),
                (n.lastWrapWidth = t.wrapperWidth),
                Gn(e, 400)),
              (n.updateLineNumbers = null),
              !0
            );
          }
          function os(e, t) {
            for (var n = t.viewport, r = !0; ; r = !1) {
              if (!r || !e.options.lineWrapping || t.oldDisplayWidth == Mr(e)) {
                if (
                  (n &&
                    n.top != null &&
                    (n = {
                      top: Math.min(
                        e.doc.height + Ta(e.display) - _a(e),
                        n.top,
                      ),
                    }),
                  (t.visible = Oi(e.display, e.doc, n)),
                  t.visible.from >= e.display.viewFrom &&
                    t.visible.to <= e.display.viewTo)
                )
                  break;
              } else r && (t.visible = Oi(e.display, e.doc, n));
              if (!Ka(e, t)) break;
              Bi(e);
              var i = Un(e);
              (zn(e), cn(e, i), Ya(e, i), (t.force = !1));
            }
            (t.signal(e, "update", e),
              (e.display.viewFrom != e.display.reportedViewFrom ||
                e.display.viewTo != e.display.reportedViewTo) &&
                (t.signal(
                  e,
                  "viewportChange",
                  e,
                  e.display.viewFrom,
                  e.display.viewTo,
                ),
                (e.display.reportedViewFrom = e.display.viewFrom),
                (e.display.reportedViewTo = e.display.viewTo)));
          }
          function $a(e, t) {
            var n = new Ni(e, t);
            if (Ka(e, n)) {
              (Bi(e), os(e, n));
              var r = Un(e);
              (zn(e), cn(e, r), Ya(e, r), n.finish());
            }
          }
          function Ch(e, t, n) {
            var r = e.display,
              i = e.options.lineNumbers,
              o = r.lineDiv,
              u = o.firstChild;
            function c(Y) {
              var V = Y.nextSibling;
              return (
                K && X && e.display.currentWheelTarget == Y
                  ? (Y.style.display = "none")
                  : Y.parentNode.removeChild(Y),
                V
              );
            }
            for (var h = r.view, v = r.viewFrom, k = 0; k < h.length; k++) {
              var A = h[k];
              if (!A.hidden)
                if (!A.node || A.node.parentNode != o) {
                  var H = Zc(e, A, v, n);
                  o.insertBefore(H, u);
                } else {
                  for (; u != A.node; ) u = c(u);
                  var O = i && t != null && t <= v && A.lineNumber;
                  (A.changes &&
                    (He(A.changes, "gutter") > -1 && (O = !1), Ml(e, A, v, n)),
                    O &&
                      (Fe(A.lineNumber),
                      A.lineNumber.appendChild(
                        document.createTextNode(ya(e.options, v)),
                      )),
                    (u = A.node.nextSibling));
                }
              v += A.size;
            }
            for (; u; ) u = c(u);
          }
          function Xa(e) {
            var t = e.gutters.offsetWidth;
            ((e.sizer.style.marginLeft = t + "px"), vt(e, "gutterChanged", e));
          }
          function Ya(e, t) {
            ((e.display.sizer.style.minHeight = t.docHeight + "px"),
              (e.display.heightForcer.style.top = t.docHeight + "px"),
              (e.display.gutters.style.height =
                t.docHeight + e.display.barHeight + nr(e) + "px"));
          }
          function ls(e) {
            var t = e.display,
              n = t.view;
            if (
              !(
                !t.alignWidgets &&
                (!t.gutters.firstChild || !e.options.fixedGutter)
              )
            ) {
              for (
                var r = Ha(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                  i = t.gutters.offsetWidth,
                  o = r + "px",
                  u = 0;
                u < n.length;
                u++
              )
                if (!n[u].hidden) {
                  e.options.fixedGutter &&
                    (n[u].gutter && (n[u].gutter.style.left = o),
                    n[u].gutterBackground &&
                      (n[u].gutterBackground.style.left = o));
                  var c = n[u].alignable;
                  if (c) for (var h = 0; h < c.length; h++) c[h].style.left = o;
                }
              e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
            }
          }
          function ss(e) {
            if (!e.options.lineNumbers) return !1;
            var t = e.doc,
              n = ya(e.options, t.first + t.size - 1),
              r = e.display;
            if (n.length != r.lineNumChars) {
              var i = r.measure.appendChild(
                  R(
                    "div",
                    [R("div", n)],
                    "CodeMirror-linenumber CodeMirror-gutter-elt",
                  ),
                ),
                o = i.firstChild.offsetWidth,
                u = i.offsetWidth - o;
              return (
                (r.lineGutter.style.width = ""),
                (r.lineNumInnerWidth =
                  Math.max(o, r.lineGutter.offsetWidth - u) + 1),
                (r.lineNumWidth = r.lineNumInnerWidth + u),
                (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
                (r.lineGutter.style.width = r.lineNumWidth + "px"),
                Xa(e.display),
                !0
              );
            }
            return !1;
          }
          function Za(e, t) {
            for (var n = [], r = !1, i = 0; i < e.length; i++) {
              var o = e[i],
                u = null;
              if (
                (typeof o != "string" && ((u = o.style), (o = o.className)),
                o == "CodeMirror-linenumbers")
              )
                if (t) r = !0;
                else continue;
              n.push({ className: o, style: u });
            }
            return (
              t &&
                !r &&
                n.push({ className: "CodeMirror-linenumbers", style: null }),
              n
            );
          }
          function us(e) {
            var t = e.gutters,
              n = e.gutterSpecs;
            (Fe(t), (e.lineGutter = null));
            for (var r = 0; r < n.length; ++r) {
              var i = n[r],
                o = i.className,
                u = i.style,
                c = t.appendChild(R("div", null, "CodeMirror-gutter " + o));
              (u && (c.style.cssText = u),
                o == "CodeMirror-linenumbers" &&
                  ((e.lineGutter = c),
                  (c.style.width = (e.lineNumWidth || 1) + "px")));
            }
            ((t.style.display = n.length ? "" : "none"), Xa(e));
          }
          function Kn(e) {
            (us(e.display), _t(e), ls(e));
          }
          function kh(e, t, n, r) {
            var i = this;
            ((this.input = n),
              (i.scrollbarFiller = R(
                "div",
                null,
                "CodeMirror-scrollbar-filler",
              )),
              i.scrollbarFiller.setAttribute("cm-not-content", "true"),
              (i.gutterFiller = R("div", null, "CodeMirror-gutter-filler")),
              i.gutterFiller.setAttribute("cm-not-content", "true"),
              (i.lineDiv = le("div", null, "CodeMirror-code")),
              (i.selectionDiv = R(
                "div",
                null,
                null,
                "position: relative; z-index: 1",
              )),
              (i.cursorDiv = R("div", null, "CodeMirror-cursors")),
              (i.measure = R("div", null, "CodeMirror-measure")),
              (i.lineMeasure = R("div", null, "CodeMirror-measure")),
              (i.lineSpace = le(
                "div",
                [
                  i.measure,
                  i.lineMeasure,
                  i.selectionDiv,
                  i.cursorDiv,
                  i.lineDiv,
                ],
                null,
                "position: relative; outline: none",
              )));
            var o = le("div", [i.lineSpace], "CodeMirror-lines");
            ((i.mover = R("div", [o], null, "position: relative")),
              (i.sizer = R("div", [i.mover], "CodeMirror-sizer")),
              (i.sizerWidth = null),
              (i.heightForcer = R(
                "div",
                null,
                null,
                "position: absolute; height: " + We + "px; width: 1px;",
              )),
              (i.gutters = R("div", null, "CodeMirror-gutters")),
              (i.lineGutter = null),
              (i.scroller = R(
                "div",
                [i.sizer, i.heightForcer, i.gutters],
                "CodeMirror-scroll",
              )),
              i.scroller.setAttribute("tabIndex", "-1"),
              (i.wrapper = R(
                "div",
                [i.scrollbarFiller, i.gutterFiller, i.scroller],
                "CodeMirror",
              )),
              j && ne === 105 && (i.wrapper.style.clipPath = "inset(0px)"),
              i.wrapper.setAttribute("translate", "no"),
              C &&
                L < 8 &&
                ((i.gutters.style.zIndex = -1),
                (i.scroller.style.paddingRight = 0)),
              !K && !(p && G) && (i.scroller.draggable = !0),
              e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
              (i.viewFrom = i.viewTo = t.first),
              (i.reportedViewFrom = i.reportedViewTo = t.first),
              (i.view = []),
              (i.renderedView = null),
              (i.externalMeasured = null),
              (i.viewOffset = 0),
              (i.lastWrapHeight = i.lastWrapWidth = 0),
              (i.updateLineNumbers = null),
              (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
              (i.scrollbarsClipped = !1),
              (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
              (i.alignWidgets = !1),
              (i.cachedCharWidth =
                i.cachedTextHeight =
                i.cachedPaddingH =
                  null),
              (i.maxLine = null),
              (i.maxLineLength = 0),
              (i.maxLineChanged = !1),
              (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
              (i.shift = !1),
              (i.selForContextMenu = null),
              (i.activeTouch = null),
              (i.gutterSpecs = Za(r.gutters, r.lineNumbers)),
              us(i),
              n.init(i));
          }
          var Ri = 0,
            fr = null;
          C
            ? (fr = -0.53)
            : p
              ? (fr = 15)
              : j
                ? (fr = -0.7)
                : we && (fr = -1 / 3);
          function fs(e) {
            var t = e.wheelDeltaX,
              n = e.wheelDeltaY;
            return (
              t == null &&
                e.detail &&
                e.axis == e.HORIZONTAL_AXIS &&
                (t = e.detail),
              n == null && e.detail && e.axis == e.VERTICAL_AXIS
                ? (n = e.detail)
                : n == null && (n = e.wheelDelta),
              { x: t, y: n }
            );
          }
          function Sh(e) {
            var t = fs(e);
            return ((t.x *= fr), (t.y *= fr), t);
          }
          function cs(e, t) {
            j &&
              ne == 102 &&
              (e.display.chromeScrollHack == null
                ? (e.display.sizer.style.pointerEvents = "none")
                : clearTimeout(e.display.chromeScrollHack),
              (e.display.chromeScrollHack = setTimeout(function () {
                ((e.display.chromeScrollHack = null),
                  (e.display.sizer.style.pointerEvents = ""));
              }, 100)));
            var n = fs(t),
              r = n.x,
              i = n.y,
              o = fr;
            t.deltaMode === 0 && ((r = t.deltaX), (i = t.deltaY), (o = 1));
            var u = e.display,
              c = u.scroller,
              h = c.scrollWidth > c.clientWidth,
              v = c.scrollHeight > c.clientHeight;
            if ((r && h) || (i && v)) {
              if (i && X && K) {
                e: for (var k = t.target, A = u.view; k != c; k = k.parentNode)
                  for (var H = 0; H < A.length; H++)
                    if (A[H].node == k) {
                      e.display.currentWheelTarget = k;
                      break e;
                    }
              }
              if (r && !p && !ae && o != null) {
                (i && v && qn(e, Math.max(0, c.scrollTop + i * o)),
                  Nr(e, Math.max(0, c.scrollLeft + r * o)),
                  (!i || (i && v)) && Ee(t),
                  (u.wheelStartX = null));
                return;
              }
              if (i && o != null) {
                var O = i * o,
                  Y = e.doc.scrollTop,
                  V = Y + u.wrapper.clientHeight;
                (O < 0
                  ? (Y = Math.max(0, Y + O - 50))
                  : (V = Math.min(e.doc.height, V + O + 50)),
                  $a(e, { top: Y, bottom: V }));
              }
              Ri < 20 &&
                t.deltaMode !== 0 &&
                (u.wheelStartX == null
                  ? ((u.wheelStartX = c.scrollLeft),
                    (u.wheelStartY = c.scrollTop),
                    (u.wheelDX = r),
                    (u.wheelDY = i),
                    setTimeout(function () {
                      if (u.wheelStartX != null) {
                        var oe = c.scrollLeft - u.wheelStartX,
                          de = c.scrollTop - u.wheelStartY,
                          ge =
                            (de && u.wheelDY && de / u.wheelDY) ||
                            (oe && u.wheelDX && oe / u.wheelDX);
                        ((u.wheelStartX = u.wheelStartY = null),
                          ge && ((fr = (fr * Ri + ge) / (Ri + 1)), ++Ri));
                      }
                    }, 200))
                  : ((u.wheelDX += r), (u.wheelDY += i)));
            }
          }
          var qt = function (e, t) {
            ((this.ranges = e), (this.primIndex = t));
          };
          ((qt.prototype.primary = function () {
            return this.ranges[this.primIndex];
          }),
            (qt.prototype.equals = function (e) {
              if (e == this) return !0;
              if (
                e.primIndex != this.primIndex ||
                e.ranges.length != this.ranges.length
              )
                return !1;
              for (var t = 0; t < this.ranges.length; t++) {
                var n = this.ranges[t],
                  r = e.ranges[t];
                if (!ba(n.anchor, r.anchor) || !ba(n.head, r.head)) return !1;
              }
              return !0;
            }),
            (qt.prototype.deepCopy = function () {
              for (var e = [], t = 0; t < this.ranges.length; t++)
                e[t] = new Ue(
                  Da(this.ranges[t].anchor),
                  Da(this.ranges[t].head),
                );
              return new qt(e, this.primIndex);
            }),
            (qt.prototype.somethingSelected = function () {
              for (var e = 0; e < this.ranges.length; e++)
                if (!this.ranges[e].empty()) return !0;
              return !1;
            }),
            (qt.prototype.contains = function (e, t) {
              t || (t = e);
              for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (Be(t, r.from()) >= 0 && Be(e, r.to()) <= 0) return n;
              }
              return -1;
            }));
          var Ue = function (e, t) {
            ((this.anchor = e), (this.head = t));
          };
          ((Ue.prototype.from = function () {
            return bi(this.anchor, this.head);
          }),
            (Ue.prototype.to = function () {
              return yi(this.anchor, this.head);
            }),
            (Ue.prototype.empty = function () {
              return (
                this.head.line == this.anchor.line &&
                this.head.ch == this.anchor.ch
              );
            }));
          function Zt(e, t, n) {
            var r = e && e.options.selectionsMayTouch,
              i = t[n];
            (t.sort(function (H, O) {
              return Be(H.from(), O.from());
            }),
              (n = He(t, i)));
            for (var o = 1; o < t.length; o++) {
              var u = t[o],
                c = t[o - 1],
                h = Be(c.to(), u.from());
              if (r && !u.empty() ? h > 0 : h >= 0) {
                var v = bi(c.from(), u.from()),
                  k = yi(c.to(), u.to()),
                  A = c.empty() ? u.from() == u.head : c.from() == c.head;
                (o <= n && --n, t.splice(--o, 2, new Ue(A ? k : v, A ? v : k)));
              }
            }
            return new qt(t, n);
          }
          function xr(e, t) {
            return new qt([new Ue(e, t || e)], 0);
          }
          function yr(e) {
            return e.text
              ? ie(
                  e.from.line + e.text.length - 1,
                  be(e.text).length + (e.text.length == 1 ? e.from.ch : 0),
                )
              : e.to;
          }
          function hs(e, t) {
            if (Be(e, t.from) < 0) return e;
            if (Be(e, t.to) <= 0) return yr(t);
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
              r = e.ch;
            return (e.line == t.to.line && (r += yr(t).ch - t.to.ch), ie(n, r));
          }
          function Ja(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
              var i = e.sel.ranges[r];
              n.push(new Ue(hs(i.anchor, t), hs(i.head, t)));
            }
            return Zt(e.cm, n, e.sel.primIndex);
          }
          function ds(e, t, n) {
            return e.line == t.line
              ? ie(n.line, e.ch - t.ch + n.ch)
              : ie(n.line + (e.line - t.line), e.ch);
          }
          function Ah(e, t, n) {
            for (
              var r = [], i = ie(e.first, 0), o = i, u = 0;
              u < t.length;
              u++
            ) {
              var c = t[u],
                h = ds(c.from, i, o),
                v = ds(yr(c), i, o);
              if (((i = c.to), (o = v), n == "around")) {
                var k = e.sel.ranges[u],
                  A = Be(k.head, k.anchor) < 0;
                r[u] = new Ue(A ? v : h, A ? h : v);
              } else r[u] = new Ue(h, h);
            }
            return new qt(r, e.sel.primIndex);
          }
          function Qa(e) {
            ((e.doc.mode = tn(e.options, e.doc.modeOption)), $n(e));
          }
          function $n(e) {
            (e.doc.iter(function (t) {
              (t.stateAfter && (t.stateAfter = null),
                t.styles && (t.styles = null));
            }),
              (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
              Gn(e, 100),
              e.state.modeGen++,
              e.curOp && _t(e));
          }
          function ps(e, t) {
            return (
              t.from.ch == 0 &&
              t.to.ch == 0 &&
              be(t.text) == "" &&
              (!e.cm || e.cm.options.wholeLineUpdateBefore)
            );
          }
          function Va(e, t, n, r) {
            function i(ge) {
              return n ? n[ge] : null;
            }
            function o(ge, pe, me) {
              (Oc(ge, pe, me, r), vt(ge, "change", ge, t));
            }
            function u(ge, pe) {
              for (var me = [], Ae = ge; Ae < pe; ++Ae)
                me.push(new nn(v[Ae], i(Ae), r));
              return me;
            }
            var c = t.from,
              h = t.to,
              v = t.text,
              k = Ce(e, c.line),
              A = Ce(e, h.line),
              H = be(v),
              O = i(v.length - 1),
              Y = h.line - c.line;
            if (t.full)
              (e.insert(0, u(0, v.length)),
                e.remove(v.length, e.size - v.length));
            else if (ps(e, t)) {
              var V = u(0, v.length - 1);
              (o(A, A.text, O),
                Y && e.remove(c.line, Y),
                V.length && e.insert(c.line, V));
            } else if (k == A)
              if (v.length == 1)
                o(k, k.text.slice(0, c.ch) + H + k.text.slice(h.ch), O);
              else {
                var oe = u(1, v.length - 1);
                (oe.push(new nn(H + k.text.slice(h.ch), O, r)),
                  o(k, k.text.slice(0, c.ch) + v[0], i(0)),
                  e.insert(c.line + 1, oe));
              }
            else if (v.length == 1)
              (o(k, k.text.slice(0, c.ch) + v[0] + A.text.slice(h.ch), i(0)),
                e.remove(c.line + 1, Y));
            else {
              (o(k, k.text.slice(0, c.ch) + v[0], i(0)),
                o(A, H + A.text.slice(h.ch), O));
              var de = u(1, v.length - 1);
              (Y > 1 && e.remove(c.line + 1, Y - 1), e.insert(c.line + 1, de));
            }
            vt(e, "change", e, t);
          }
          function br(e, t, n) {
            function r(i, o, u) {
              if (i.linked)
                for (var c = 0; c < i.linked.length; ++c) {
                  var h = i.linked[c];
                  if (h.doc != o) {
                    var v = u && h.sharedHist;
                    (n && !v) || (t(h.doc, v), r(h.doc, i, v));
                  }
                }
            }
            r(e, null, !0);
          }
          function gs(e, t) {
            if (t.cm) throw new Error("This document is already in use.");
            ((e.doc = t),
              (t.cm = e),
              Pa(e),
              Qa(e),
              vs(e),
              (e.options.direction = t.direction),
              e.options.lineWrapping || Fa(e),
              (e.options.mode = t.modeOption),
              _t(e));
          }
          function vs(e) {
            (e.doc.direction == "rtl" ? nt : Le)(
              e.display.lineDiv,
              "CodeMirror-rtl",
            );
          }
          function Eh(e) {
            Ht(e, function () {
              (vs(e), _t(e));
            });
          }
          function Hi(e) {
            ((this.done = []),
              (this.undone = []),
              (this.undoDepth = e ? e.undoDepth : 1 / 0),
              (this.lastModTime = this.lastSelTime = 0),
              (this.lastOp = this.lastSelOp = null),
              (this.lastOrigin = this.lastSelOrigin = null),
              (this.generation = this.maxGeneration = e ? e.maxGeneration : 1));
          }
          function eo(e, t) {
            var n = { from: Da(t.from), to: yr(t), text: Tr(e, t.from, t.to) };
            return (
              ys(e, n, t.from.line, t.to.line + 1),
              br(
                e,
                function (r) {
                  return ys(r, n, t.from.line, t.to.line + 1);
                },
                !0,
              ),
              n
            );
          }
          function ms(e) {
            for (; e.length; ) {
              var t = be(e);
              if (t.ranges) e.pop();
              else break;
            }
          }
          function Fh(e, t) {
            if (t) return (ms(e.done), be(e.done));
            if (e.done.length && !be(e.done).ranges) return be(e.done);
            if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
              return (e.done.pop(), be(e.done));
          }
          function xs(e, t, n, r) {
            var i = e.history;
            i.undone.length = 0;
            var o = +new Date(),
              u,
              c;
            if (
              (i.lastOp == r ||
                (i.lastOrigin == t.origin &&
                  t.origin &&
                  ((t.origin.charAt(0) == "+" &&
                    i.lastModTime >
                      o - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                    t.origin.charAt(0) == "*"))) &&
              (u = Fh(i, i.lastOp == r))
            )
              ((c = be(u.changes)),
                Be(t.from, t.to) == 0 && Be(t.from, c.to) == 0
                  ? (c.to = yr(t))
                  : u.changes.push(eo(e, t)));
            else {
              var h = be(i.done);
              for (
                (!h || !h.ranges) && Pi(e.sel, i.done),
                  u = { changes: [eo(e, t)], generation: i.generation },
                  i.done.push(u);
                i.done.length > i.undoDepth;
              )
                (i.done.shift(), i.done[0].ranges || i.done.shift());
            }
            (i.done.push(n),
              (i.generation = ++i.maxGeneration),
              (i.lastModTime = i.lastSelTime = o),
              (i.lastOp = i.lastSelOp = r),
              (i.lastOrigin = i.lastSelOrigin = t.origin),
              c || ye(e, "historyAdded"));
          }
          function Lh(e, t, n, r) {
            var i = t.charAt(0);
            return (
              i == "*" ||
              (i == "+" &&
                n.ranges.length == r.ranges.length &&
                n.somethingSelected() == r.somethingSelected() &&
                new Date() - e.history.lastSelTime <=
                  (e.cm ? e.cm.options.historyEventDelay : 500))
            );
          }
          function Th(e, t, n, r) {
            var i = e.history,
              o = r && r.origin;
            (n == i.lastSelOp ||
            (o &&
              i.lastSelOrigin == o &&
              ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
                Lh(e, o, be(i.done), t)))
              ? (i.done[i.done.length - 1] = t)
              : Pi(t, i.done),
              (i.lastSelTime = +new Date()),
              (i.lastSelOrigin = o),
              (i.lastSelOp = n),
              r && r.clearRedo !== !1 && ms(i.undone));
          }
          function Pi(e, t) {
            var n = be(t);
            (n && n.ranges && n.equals(e)) || t.push(e);
          }
          function ys(e, t, n, r) {
            var i = t["spans_" + e.id],
              o = 0;
            e.iter(
              Math.max(e.first, n),
              Math.min(e.first + e.size, r),
              function (u) {
                (u.markedSpans &&
                  ((i || (i = t["spans_" + e.id] = {}))[o] = u.markedSpans),
                  ++o);
              },
            );
          }
          function _h(e) {
            if (!e) return null;
            for (var t, n = 0; n < e.length; ++n)
              e[n].marker.explicitlyCleared
                ? t || (t = e.slice(0, n))
                : t && t.push(e[n]);
            return t ? (t.length ? t : null) : e;
          }
          function Mh(e, t) {
            var n = t["spans_" + e.id];
            if (!n) return null;
            for (var r = [], i = 0; i < t.text.length; ++i) r.push(_h(n[i]));
            return r;
          }
          function bs(e, t) {
            var n = Mh(e, t),
              r = ka(e, t);
            if (!n) return r;
            if (!r) return n;
            for (var i = 0; i < n.length; ++i) {
              var o = n[i],
                u = r[i];
              if (o && u)
                e: for (var c = 0; c < u.length; ++c) {
                  for (var h = u[c], v = 0; v < o.length; ++v)
                    if (o[v].marker == h.marker) continue e;
                  o.push(h);
                }
              else u && (n[i] = u);
            }
            return n;
          }
          function hn(e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i) {
              var o = e[i];
              if (o.ranges) {
                r.push(n ? qt.prototype.deepCopy.call(o) : o);
                continue;
              }
              var u = o.changes,
                c = [];
              r.push({ changes: c });
              for (var h = 0; h < u.length; ++h) {
                var v = u[h],
                  k = void 0;
                if ((c.push({ from: v.from, to: v.to, text: v.text }), t))
                  for (var A in v)
                    (k = A.match(/^spans_(\d+)$/)) &&
                      He(t, Number(k[1])) > -1 &&
                      ((be(c)[A] = v[A]), delete v[A]);
              }
            }
            return r;
          }
          function to(e, t, n, r) {
            if (r) {
              var i = e.anchor;
              if (n) {
                var o = Be(t, i) < 0;
                o != Be(n, i) < 0
                  ? ((i = t), (t = n))
                  : o != Be(t, n) < 0 && (t = n);
              }
              return new Ue(i, t);
            } else return new Ue(n || t, t);
          }
          function zi(e, t, n, r, i) {
            (i == null && (i = e.cm && (e.cm.display.shift || e.extend)),
              St(e, new qt([to(e.sel.primary(), t, n, i)], 0), r));
          }
          function Ds(e, t, n) {
            for (
              var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
              o < e.sel.ranges.length;
              o++
            )
              r[o] = to(e.sel.ranges[o], t[o], null, i);
            var u = Zt(e.cm, r, e.sel.primIndex);
            St(e, u, n);
          }
          function ro(e, t, n, r) {
            var i = e.sel.ranges.slice(0);
            ((i[t] = n), St(e, Zt(e.cm, i, e.sel.primIndex), r));
          }
          function ws(e, t, n, r) {
            St(e, xr(t, n), r);
          }
          function Bh(e, t, n) {
            var r = {
              ranges: t.ranges,
              update: function (i) {
                this.ranges = [];
                for (var o = 0; o < i.length; o++)
                  this.ranges[o] = new Ue(Oe(e, i[o].anchor), Oe(e, i[o].head));
              },
              origin: n && n.origin,
            };
            return (
              ye(e, "beforeSelectionChange", e, r),
              e.cm && ye(e.cm, "beforeSelectionChange", e.cm, r),
              r.ranges != t.ranges ? Zt(e.cm, r.ranges, r.ranges.length - 1) : t
            );
          }
          function Cs(e, t, n) {
            var r = e.history.done,
              i = be(r);
            i && i.ranges ? ((r[r.length - 1] = t), Wi(e, t, n)) : St(e, t, n);
          }
          function St(e, t, n) {
            (Wi(e, t, n), Th(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n));
          }
          function Wi(e, t, n) {
            (Me(e, "beforeSelectionChange") ||
              (e.cm && Me(e.cm, "beforeSelectionChange"))) &&
              (t = Bh(e, t, n));
            var r =
              (n && n.bias) ||
              (Be(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
            (ks(e, As(e, t, r, !0)),
              !(n && n.scroll === !1) &&
                e.cm &&
                e.cm.getOption("readOnly") != "nocursor" &&
                fn(e.cm));
          }
          function ks(e, t) {
            t.equals(e.sel) ||
              ((e.sel = t),
              e.cm &&
                ((e.cm.curOp.updateInput = 1),
                (e.cm.curOp.selectionChanged = !0),
                _e(e.cm)),
              vt(e, "cursorActivity", e));
          }
          function Ss(e) {
            ks(e, As(e, e.sel, null, !1));
          }
          function As(e, t, n, r) {
            for (var i, o = 0; o < t.ranges.length; o++) {
              var u = t.ranges[o],
                c = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                h = qi(e, u.anchor, c && c.anchor, n, r),
                v = u.head == u.anchor ? h : qi(e, u.head, c && c.head, n, r);
              (i || h != u.anchor || v != u.head) &&
                (i || (i = t.ranges.slice(0, o)), (i[o] = new Ue(h, v)));
            }
            return i ? Zt(e.cm, i, t.primIndex) : t;
          }
          function dn(e, t, n, r, i) {
            var o = Ce(e, t.line);
            if (o.markedSpans)
              for (var u = 0; u < o.markedSpans.length; ++u) {
                var c = o.markedSpans[u],
                  h = c.marker,
                  v = "selectLeft" in h ? !h.selectLeft : h.inclusiveLeft,
                  k = "selectRight" in h ? !h.selectRight : h.inclusiveRight;
                if (
                  (c.from == null || (v ? c.from <= t.ch : c.from < t.ch)) &&
                  (c.to == null || (k ? c.to >= t.ch : c.to > t.ch))
                ) {
                  if (i && (ye(h, "beforeCursorEnter"), h.explicitlyCleared))
                    if (o.markedSpans) {
                      --u;
                      continue;
                    } else break;
                  if (!h.atomic) continue;
                  if (n) {
                    var A = h.find(r < 0 ? 1 : -1),
                      H = void 0;
                    if (
                      ((r < 0 ? k : v) &&
                        (A = Es(e, A, -r, A && A.line == t.line ? o : null)),
                      A &&
                        A.line == t.line &&
                        (H = Be(A, n)) &&
                        (r < 0 ? H < 0 : H > 0))
                    )
                      return dn(e, A, t, r, i);
                  }
                  var O = h.find(r < 0 ? -1 : 1);
                  return (
                    (r < 0 ? v : k) &&
                      (O = Es(e, O, r, O.line == t.line ? o : null)),
                    O ? dn(e, O, t, r, i) : null
                  );
                }
              }
            return t;
          }
          function qi(e, t, n, r, i) {
            var o = r || 1,
              u =
                dn(e, t, n, o, i) ||
                (!i && dn(e, t, n, o, !0)) ||
                dn(e, t, n, -o, i) ||
                (!i && dn(e, t, n, -o, !0));
            return u || ((e.cantEdit = !0), ie(e.first, 0));
          }
          function Es(e, t, n, r) {
            return n < 0 && t.ch == 0
              ? t.line > e.first
                ? Oe(e, ie(t.line - 1))
                : null
              : n > 0 && t.ch == (r || Ce(e, t.line)).text.length
                ? t.line < e.first + e.size - 1
                  ? ie(t.line + 1, 0)
                  : null
                : new ie(t.line, t.ch + n);
          }
          function Fs(e) {
            e.setSelection(ie(e.firstLine(), 0), ie(e.lastLine()), lt);
          }
          function Ls(e, t, n) {
            var r = {
              canceled: !1,
              from: t.from,
              to: t.to,
              text: t.text,
              origin: t.origin,
              cancel: function () {
                return (r.canceled = !0);
              },
            };
            return (
              n &&
                (r.update = function (i, o, u, c) {
                  (i && (r.from = Oe(e, i)),
                    o && (r.to = Oe(e, o)),
                    u && (r.text = u),
                    c !== void 0 && (r.origin = c));
                }),
              ye(e, "beforeChange", e, r),
              e.cm && ye(e.cm, "beforeChange", e.cm, r),
              r.canceled
                ? (e.cm && (e.cm.curOp.updateInput = 2), null)
                : { from: r.from, to: r.to, text: r.text, origin: r.origin }
            );
          }
          function pn(e, t, n) {
            if (e.cm) {
              if (!e.cm.curOp) return mt(e.cm, pn)(e, t, n);
              if (e.cm.state.suppressEdits) return;
            }
            if (
              !(
                (Me(e, "beforeChange") || (e.cm && Me(e.cm, "beforeChange"))) &&
                ((t = Ls(e, t, !0)), !t)
              )
            ) {
              var r = bl && !n && Tc(e, t.from, t.to);
              if (r)
                for (var i = r.length - 1; i >= 0; --i)
                  Ts(e, {
                    from: r[i].from,
                    to: r[i].to,
                    text: i ? [""] : t.text,
                    origin: t.origin,
                  });
              else Ts(e, t);
            }
          }
          function Ts(e, t) {
            if (
              !(t.text.length == 1 && t.text[0] == "" && Be(t.from, t.to) == 0)
            ) {
              var n = Ja(e, t);
              (xs(e, t, n, e.cm ? e.cm.curOp.id : NaN), Xn(e, t, n, ka(e, t)));
              var r = [];
              br(e, function (i, o) {
                (!o &&
                  He(r, i.history) == -1 &&
                  (Os(i.history, t), r.push(i.history)),
                  Xn(i, t, null, ka(i, t)));
              });
            }
          }
          function Ui(e, t, n) {
            var r = e.cm && e.cm.state.suppressEdits;
            if (!(r && !n)) {
              for (
                var i = e.history,
                  o,
                  u = e.sel,
                  c = t == "undo" ? i.done : i.undone,
                  h = t == "undo" ? i.undone : i.done,
                  v = 0;
                v < c.length &&
                ((o = c[v]), !(n ? o.ranges && !o.equals(e.sel) : !o.ranges));
                v++
              );
              if (v != c.length) {
                for (i.lastOrigin = i.lastSelOrigin = null; ; )
                  if (((o = c.pop()), o.ranges)) {
                    if ((Pi(o, h), n && !o.equals(e.sel))) {
                      St(e, o, { clearRedo: !1 });
                      return;
                    }
                    u = o;
                  } else if (r) {
                    c.push(o);
                    return;
                  } else break;
                var k = [];
                (Pi(u, h),
                  h.push({ changes: k, generation: i.generation }),
                  (i.generation = o.generation || ++i.maxGeneration));
                for (
                  var A =
                      Me(e, "beforeChange") ||
                      (e.cm && Me(e.cm, "beforeChange")),
                    H = function (V) {
                      var oe = o.changes[V];
                      if (((oe.origin = t), A && !Ls(e, oe, !1)))
                        return ((c.length = 0), {});
                      k.push(eo(e, oe));
                      var de = V ? Ja(e, oe) : be(c);
                      (Xn(e, oe, de, bs(e, oe)),
                        !V &&
                          e.cm &&
                          e.cm.scrollIntoView({ from: oe.from, to: yr(oe) }));
                      var ge = [];
                      br(e, function (pe, me) {
                        (!me &&
                          He(ge, pe.history) == -1 &&
                          (Os(pe.history, oe), ge.push(pe.history)),
                          Xn(pe, oe, null, bs(pe, oe)));
                      });
                    },
                    O = o.changes.length - 1;
                  O >= 0;
                  --O
                ) {
                  var Y = H(O);
                  if (Y) return Y.v;
                }
              }
            }
          }
          function _s(e, t) {
            if (
              t != 0 &&
              ((e.first += t),
              (e.sel = new qt(
                ut(e.sel.ranges, function (i) {
                  return new Ue(
                    ie(i.anchor.line + t, i.anchor.ch),
                    ie(i.head.line + t, i.head.ch),
                  );
                }),
                e.sel.primIndex,
              )),
              e.cm)
            ) {
              _t(e.cm, e.first, e.first - t, t);
              for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                vr(e.cm, r, "gutter");
            }
          }
          function Xn(e, t, n, r) {
            if (e.cm && !e.cm.curOp) return mt(e.cm, Xn)(e, t, n, r);
            if (t.to.line < e.first) {
              _s(e, t.text.length - 1 - (t.to.line - t.from.line));
              return;
            }
            if (!(t.from.line > e.lastLine())) {
              if (t.from.line < e.first) {
                var i = t.text.length - 1 - (e.first - t.from.line);
                (_s(e, i),
                  (t = {
                    from: ie(e.first, 0),
                    to: ie(t.to.line + i, t.to.ch),
                    text: [be(t.text)],
                    origin: t.origin,
                  }));
              }
              var o = e.lastLine();
              (t.to.line > o &&
                (t = {
                  from: t.from,
                  to: ie(o, Ce(e, o).text.length),
                  text: [t.text[0]],
                  origin: t.origin,
                }),
                (t.removed = Tr(e, t.from, t.to)),
                n || (n = Ja(e, t)),
                e.cm ? Oh(e.cm, t, r) : Va(e, t, r),
                Wi(e, n, lt),
                e.cantEdit && qi(e, ie(e.firstLine(), 0)) && (e.cantEdit = !1));
            }
          }
          function Oh(e, t, n) {
            var r = e.doc,
              i = e.display,
              o = t.from,
              u = t.to,
              c = !1,
              h = o.line;
            (e.options.lineWrapping ||
              ((h = je(Xt(Ce(r, o.line)))),
              r.iter(h, u.line + 1, function (O) {
                if (O == i.maxLine) return ((c = !0), !0);
              })),
              r.sel.contains(t.from, t.to) > -1 && _e(e),
              Va(r, t, n, Zl(e)),
              e.options.lineWrapping ||
                (r.iter(h, o.line + t.text.length, function (O) {
                  var Y = Ai(O);
                  Y > i.maxLineLength &&
                    ((i.maxLine = O),
                    (i.maxLineLength = Y),
                    (i.maxLineChanged = !0),
                    (c = !1));
                }),
                c && (e.curOp.updateMaxLine = !0)),
              Cc(r, o.line),
              Gn(e, 400));
            var v = t.text.length - (u.line - o.line) - 1;
            t.full
              ? _t(e)
              : o.line == u.line && t.text.length == 1 && !ps(e.doc, t)
                ? vr(e, o.line, "text")
                : _t(e, o.line, u.line + 1, v);
            var k = Me(e, "changes"),
              A = Me(e, "change");
            if (A || k) {
              var H = {
                from: o,
                to: u,
                text: t.text,
                removed: t.removed,
                origin: t.origin,
              };
              (A && vt(e, "change", e, H),
                k && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(H));
            }
            e.display.selForContextMenu = null;
          }
          function gn(e, t, n, r, i) {
            var o;
            (r || (r = n),
              Be(r, n) < 0 && ((o = [r, n]), (n = o[0]), (r = o[1])),
              typeof t == "string" && (t = e.splitLines(t)),
              pn(e, { from: n, to: r, text: t, origin: i }));
          }
          function Ms(e, t, n, r) {
            n < e.line
              ? (e.line += r)
              : t < e.line && ((e.line = t), (e.ch = 0));
          }
          function Bs(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                u = !0;
              if (o.ranges) {
                o.copied || ((o = e[i] = o.deepCopy()), (o.copied = !0));
                for (var c = 0; c < o.ranges.length; c++)
                  (Ms(o.ranges[c].anchor, t, n, r),
                    Ms(o.ranges[c].head, t, n, r));
                continue;
              }
              for (var h = 0; h < o.changes.length; ++h) {
                var v = o.changes[h];
                if (n < v.from.line)
                  ((v.from = ie(v.from.line + r, v.from.ch)),
                    (v.to = ie(v.to.line + r, v.to.ch)));
                else if (t <= v.to.line) {
                  u = !1;
                  break;
                }
              }
              u || (e.splice(0, i + 1), (i = 0));
            }
          }
          function Os(e, t) {
            var n = t.from.line,
              r = t.to.line,
              i = t.text.length - (r - n) - 1;
            (Bs(e.done, n, r, i), Bs(e.undone, n, r, i));
          }
          function Yn(e, t, n, r) {
            var i = t,
              o = t;
            return (
              typeof t == "number" ? (o = Ce(e, cl(e, t))) : (i = je(t)),
              i == null ? null : (r(o, i) && e.cm && vr(e.cm, i, n), o)
            );
          }
          function Zn(e) {
            ((this.lines = e), (this.parent = null));
            for (var t = 0, n = 0; n < e.length; ++n)
              ((e[n].parent = this), (t += e[n].height));
            this.height = t;
          }
          Zn.prototype = {
            chunkSize: function () {
              return this.lines.length;
            },
            removeInner: function (e, t) {
              for (var n = e, r = e + t; n < r; ++n) {
                var i = this.lines[n];
                ((this.height -= i.height), Ic(i), vt(i, "delete"));
              }
              this.lines.splice(e, t);
            },
            collapse: function (e) {
              e.push.apply(e, this.lines);
            },
            insertInner: function (e, t, n) {
              ((this.height += n),
                (this.lines = this.lines
                  .slice(0, e)
                  .concat(t)
                  .concat(this.lines.slice(e))));
              for (var r = 0; r < t.length; ++r) t[r].parent = this;
            },
            iterN: function (e, t, n) {
              for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
            },
          };
          function Jn(e) {
            this.children = e;
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
              var i = e[r];
              ((t += i.chunkSize()), (n += i.height), (i.parent = this));
            }
            ((this.size = t), (this.height = n), (this.parent = null));
          }
          Jn.prototype = {
            chunkSize: function () {
              return this.size;
            },
            removeInner: function (e, t) {
              this.size -= t;
              for (var n = 0; n < this.children.length; ++n) {
                var r = this.children[n],
                  i = r.chunkSize();
                if (e < i) {
                  var o = Math.min(t, i - e),
                    u = r.height;
                  if (
                    (r.removeInner(e, o),
                    (this.height -= u - r.height),
                    i == o && (this.children.splice(n--, 1), (r.parent = null)),
                    (t -= o) == 0)
                  )
                    break;
                  e = 0;
                } else e -= i;
              }
              if (
                this.size - t < 25 &&
                (this.children.length > 1 || !(this.children[0] instanceof Zn))
              ) {
                var c = [];
                (this.collapse(c),
                  (this.children = [new Zn(c)]),
                  (this.children[0].parent = this));
              }
            },
            collapse: function (e) {
              for (var t = 0; t < this.children.length; ++t)
                this.children[t].collapse(e);
            },
            insertInner: function (e, t, n) {
              ((this.size += t.length), (this.height += n));
              for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r],
                  o = i.chunkSize();
                if (e <= o) {
                  if (
                    (i.insertInner(e, t, n), i.lines && i.lines.length > 50)
                  ) {
                    for (
                      var u = (i.lines.length % 25) + 25, c = u;
                      c < i.lines.length;
                    ) {
                      var h = new Zn(i.lines.slice(c, (c += 25)));
                      ((i.height -= h.height),
                        this.children.splice(++r, 0, h),
                        (h.parent = this));
                    }
                    ((i.lines = i.lines.slice(0, u)), this.maybeSpill());
                  }
                  break;
                }
                e -= o;
              }
            },
            maybeSpill: function () {
              if (!(this.children.length <= 10)) {
                var e = this;
                do {
                  var t = e.children.splice(e.children.length - 5, 5),
                    n = new Jn(t);
                  if (e.parent) {
                    ((e.size -= n.size), (e.height -= n.height));
                    var i = He(e.parent.children, e);
                    e.parent.children.splice(i + 1, 0, n);
                  } else {
                    var r = new Jn(e.children);
                    ((r.parent = e), (e.children = [r, n]), (e = r));
                  }
                  n.parent = e.parent;
                } while (e.children.length > 10);
                e.parent.maybeSpill();
              }
            },
            iterN: function (e, t, n) {
              for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r],
                  o = i.chunkSize();
                if (e < o) {
                  var u = Math.min(t, o - e);
                  if (i.iterN(e, u, n)) return !0;
                  if ((t -= u) == 0) break;
                  e = 0;
                } else e -= o;
              }
            },
          };
          var Qn = function (e, t, n) {
            if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
            ((this.doc = e), (this.node = t));
          };
          ((Qn.prototype.clear = function () {
            var e = this.doc.cm,
              t = this.line.widgets,
              n = this.line,
              r = je(n);
            if (!(r == null || !t)) {
              for (var i = 0; i < t.length; ++i)
                t[i] == this && t.splice(i--, 1);
              t.length || (n.widgets = null);
              var o = Hn(this);
              (tr(n, Math.max(0, n.height - o)),
                e &&
                  (Ht(e, function () {
                    (Is(e, n, -o), vr(e, r, "widget"));
                  }),
                  vt(e, "lineWidgetCleared", e, this, r)));
            }
          }),
            (Qn.prototype.changed = function () {
              var e = this,
                t = this.height,
                n = this.doc.cm,
                r = this.line;
              this.height = null;
              var i = Hn(this) - t;
              i &&
                (gr(this.doc, r) || tr(r, r.height + i),
                n &&
                  Ht(n, function () {
                    ((n.curOp.forceUpdate = !0),
                      Is(n, r, i),
                      vt(n, "lineWidgetChanged", n, e, je(r)));
                  }));
            }),
            Ie(Qn));
          function Is(e, t, n) {
            sr(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
              Ga(e, n);
          }
          function Ih(e, t, n, r) {
            var i = new Qn(e, n, r),
              o = e.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              Yn(e, t, "widget", function (u) {
                var c = u.widgets || (u.widgets = []);
                if (
                  (i.insertAt == null
                    ? c.push(i)
                    : c.splice(
                        Math.min(c.length, Math.max(0, i.insertAt)),
                        0,
                        i,
                      ),
                  (i.line = u),
                  o && !gr(e, u))
                ) {
                  var h = sr(u) < e.scrollTop;
                  (tr(u, u.height + Hn(i)),
                    h && Ga(o, i.height),
                    (o.curOp.forceUpdate = !0));
                }
                return !0;
              }),
              o &&
                vt(
                  o,
                  "lineWidgetAdded",
                  o,
                  i,
                  typeof t == "number" ? t : je(t),
                ),
              i
            );
          }
          var Ns = 0,
            Dr = function (e, t) {
              ((this.lines = []),
                (this.type = t),
                (this.doc = e),
                (this.id = ++Ns));
            };
          ((Dr.prototype.clear = function () {
            if (!this.explicitlyCleared) {
              var e = this.doc.cm,
                t = e && !e.curOp;
              if ((t && Hr(e), Me(this, "clear"))) {
                var n = this.find();
                n && vt(this, "clear", n.from, n.to);
              }
              for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                var u = this.lines[o],
                  c = In(u.markedSpans, this);
                (e && !this.collapsed
                  ? vr(e, je(u), "text")
                  : e &&
                    (c.to != null && (i = je(u)),
                    c.from != null && (r = je(u))),
                  (u.markedSpans = Ac(u.markedSpans, c)),
                  c.from == null &&
                    this.collapsed &&
                    !gr(this.doc, u) &&
                    e &&
                    tr(u, ln(e.display)));
              }
              if (e && this.collapsed && !e.options.lineWrapping)
                for (var h = 0; h < this.lines.length; ++h) {
                  var v = Xt(this.lines[h]),
                    k = Ai(v);
                  k > e.display.maxLineLength &&
                    ((e.display.maxLine = v),
                    (e.display.maxLineLength = k),
                    (e.display.maxLineChanged = !0));
                }
              (r != null && e && this.collapsed && _t(e, r, i + 1),
                (this.lines.length = 0),
                (this.explicitlyCleared = !0),
                this.atomic &&
                  this.doc.cantEdit &&
                  ((this.doc.cantEdit = !1), e && Ss(e.doc)),
                e && vt(e, "markerCleared", e, this, r, i),
                t && Pr(e),
                this.parent && this.parent.clear());
            }
          }),
            (Dr.prototype.find = function (e, t) {
              e == null && this.type == "bookmark" && (e = 1);
              for (var n, r, i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i],
                  u = In(o.markedSpans, this);
                if (
                  u.from != null &&
                  ((n = ie(t ? o : je(o), u.from)), e == -1)
                )
                  return n;
                if (u.to != null && ((r = ie(t ? o : je(o), u.to)), e == 1))
                  return r;
              }
              return n && { from: n, to: r };
            }),
            (Dr.prototype.changed = function () {
              var e = this,
                t = this.find(-1, !0),
                n = this,
                r = this.doc.cm;
              !t ||
                !r ||
                Ht(r, function () {
                  var i = t.line,
                    o = je(t.line),
                    u = Ma(r, o);
                  if (
                    (u &&
                      (ql(u),
                      (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                    (r.curOp.updateMaxLine = !0),
                    !gr(n.doc, i) && n.height != null)
                  ) {
                    var c = n.height;
                    n.height = null;
                    var h = Hn(n) - c;
                    h && tr(i, i.height + h);
                  }
                  vt(r, "markerChanged", r, e);
                });
            }),
            (Dr.prototype.attachLine = function (e) {
              if (!this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (!t.maybeHiddenMarkers ||
                  He(t.maybeHiddenMarkers, this) == -1) &&
                  (
                    t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])
                  ).push(this);
              }
              this.lines.push(e);
            }),
            (Dr.prototype.detachLine = function (e) {
              if (
                (this.lines.splice(He(this.lines, e), 1),
                !this.lines.length && this.doc.cm)
              ) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(
                  this,
                );
              }
            }),
            Ie(Dr));
          function vn(e, t, n, r, i) {
            if (r && r.shared) return Nh(e, t, n, r, i);
            if (e.cm && !e.cm.curOp) return mt(e.cm, vn)(e, t, n, r, i);
            var o = new Dr(e, i),
              u = Be(t, n);
            if (
              (r && Qe(r, o, !1), u > 0 || (u == 0 && o.clearWhenEmpty !== !1))
            )
              return o;
            if (
              (o.replacedWith &&
                ((o.collapsed = !0),
                (o.widgetNode = le(
                  "span",
                  [o.replacedWith],
                  "CodeMirror-widget",
                )),
                r.handleMouseEvents ||
                  o.widgetNode.setAttribute("cm-ignore-events", "true"),
                r.insertLeft && (o.widgetNode.insertLeft = !0)),
              o.collapsed)
            ) {
              if (
                Al(e, t.line, t, n, o) ||
                (t.line != n.line && Al(e, n.line, t, n, o))
              )
                throw new Error(
                  "Inserting collapsed marker partially overlapping an existing one",
                );
              Sc();
            }
            o.addToHistory &&
              xs(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
            var c = t.line,
              h = e.cm,
              v;
            if (
              (e.iter(c, n.line + 1, function (A) {
                (h &&
                  o.collapsed &&
                  !h.options.lineWrapping &&
                  Xt(A) == h.display.maxLine &&
                  (v = !0),
                  o.collapsed && c != t.line && tr(A, 0),
                  Ec(
                    A,
                    new wi(
                      o,
                      c == t.line ? t.ch : null,
                      c == n.line ? n.ch : null,
                    ),
                    e.cm && e.cm.curOp,
                  ),
                  ++c);
              }),
              o.collapsed &&
                e.iter(t.line, n.line + 1, function (A) {
                  gr(e, A) && tr(A, 0);
                }),
              o.clearOnEnter &&
                N(o, "beforeCursorEnter", function () {
                  return o.clear();
                }),
              o.readOnly &&
                (kc(),
                (e.history.done.length || e.history.undone.length) &&
                  e.clearHistory()),
              o.collapsed && ((o.id = ++Ns), (o.atomic = !0)),
              h)
            ) {
              if ((v && (h.curOp.updateMaxLine = !0), o.collapsed))
                _t(h, t.line, n.line + 1);
              else if (
                o.className ||
                o.startStyle ||
                o.endStyle ||
                o.css ||
                o.attributes ||
                o.title
              )
                for (var k = t.line; k <= n.line; k++) vr(h, k, "text");
              (o.atomic && Ss(h.doc), vt(h, "markerAdded", h, o));
            }
            return o;
          }
          var Vn = function (e, t) {
            ((this.markers = e), (this.primary = t));
            for (var n = 0; n < e.length; ++n) e[n].parent = this;
          };
          ((Vn.prototype.clear = function () {
            if (!this.explicitlyCleared) {
              this.explicitlyCleared = !0;
              for (var e = 0; e < this.markers.length; ++e)
                this.markers[e].clear();
              vt(this, "clear");
            }
          }),
            (Vn.prototype.find = function (e, t) {
              return this.primary.find(e, t);
            }),
            Ie(Vn));
          function Nh(e, t, n, r, i) {
            ((r = Qe(r)), (r.shared = !1));
            var o = [vn(e, t, n, r, i)],
              u = o[0],
              c = r.widgetNode;
            return (
              br(e, function (h) {
                (c && (r.widgetNode = c.cloneNode(!0)),
                  o.push(vn(h, Oe(h, t), Oe(h, n), r, i)));
                for (var v = 0; v < h.linked.length; ++v)
                  if (h.linked[v].isParent) return;
                u = be(o);
              }),
              new Vn(o, u)
            );
          }
          function Rs(e) {
            return e.findMarks(
              ie(e.first, 0),
              e.clipPos(ie(e.lastLine())),
              function (t) {
                return t.parent;
              },
            );
          }
          function Rh(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n],
                i = r.find(),
                o = e.clipPos(i.from),
                u = e.clipPos(i.to);
              if (Be(o, u)) {
                var c = vn(e, o, u, r.primary, r.primary.type);
                (r.markers.push(c), (c.parent = r));
              }
            }
          }
          function Hh(e) {
            for (
              var t = function (r) {
                  var i = e[r],
                    o = [i.primary.doc];
                  br(i.primary.doc, function (h) {
                    return o.push(h);
                  });
                  for (var u = 0; u < i.markers.length; u++) {
                    var c = i.markers[u];
                    He(o, c.doc) == -1 &&
                      ((c.parent = null), i.markers.splice(u--, 1));
                  }
                },
                n = 0;
              n < e.length;
              n++
            )
              t(n);
          }
          var Ph = 0,
            Mt = function (e, t, n, r, i) {
              if (!(this instanceof Mt)) return new Mt(e, t, n, r, i);
              (n == null && (n = 0),
                Jn.call(this, [new Zn([new nn("", null)])]),
                (this.first = n),
                (this.scrollTop = this.scrollLeft = 0),
                (this.cantEdit = !1),
                (this.cleanGeneration = 1),
                (this.modeFrontier = this.highlightFrontier = n));
              var o = ie(n, 0);
              ((this.sel = xr(o)),
                (this.history = new Hi(null)),
                (this.id = ++Ph),
                (this.modeOption = t),
                (this.lineSep = r),
                (this.direction = i == "rtl" ? "rtl" : "ltr"),
                (this.extend = !1),
                typeof e == "string" && (e = this.splitLines(e)),
                Va(this, { from: o, to: o, text: e }),
                St(this, xr(o), lt));
            };
          ((Mt.prototype = q(Jn.prototype, {
            constructor: Mt,
            iter: function (e, t, n) {
              n
                ? this.iterN(e - this.first, t - e, n)
                : this.iterN(this.first, this.first + this.size, e);
            },
            insert: function (e, t) {
              for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
              this.insertInner(e - this.first, t, n);
            },
            remove: function (e, t) {
              this.removeInner(e - this.first, t);
            },
            getValue: function (e) {
              var t = xa(this, this.first, this.first + this.size);
              return e === !1 ? t : t.join(e || this.lineSeparator());
            },
            setValue: xt(function (e) {
              var t = ie(this.first, 0),
                n = this.first + this.size - 1;
              (pn(
                this,
                {
                  from: t,
                  to: ie(n, Ce(this, n).text.length),
                  text: this.splitLines(e),
                  origin: "setValue",
                  full: !0,
                },
                !0,
              ),
                this.cm && Wn(this.cm, 0, 0),
                St(this, xr(t), lt));
            }),
            replaceRange: function (e, t, n, r) {
              ((t = Oe(this, t)),
                (n = n ? Oe(this, n) : t),
                gn(this, e, t, n, r));
            },
            getRange: function (e, t, n) {
              var r = Tr(this, Oe(this, e), Oe(this, t));
              return n === !1
                ? r
                : n === ""
                  ? r.join("")
                  : r.join(n || this.lineSeparator());
            },
            getLine: function (e) {
              var t = this.getLineHandle(e);
              return t && t.text;
            },
            getLineHandle: function (e) {
              if (Bn(this, e)) return Ce(this, e);
            },
            getLineNumber: function (e) {
              return je(e);
            },
            getLineHandleVisualStart: function (e) {
              return (typeof e == "number" && (e = Ce(this, e)), Xt(e));
            },
            lineCount: function () {
              return this.size;
            },
            firstLine: function () {
              return this.first;
            },
            lastLine: function () {
              return this.first + this.size - 1;
            },
            clipPos: function (e) {
              return Oe(this, e);
            },
            getCursor: function (e) {
              var t = this.sel.primary(),
                n;
              return (
                e == null || e == "head"
                  ? (n = t.head)
                  : e == "anchor"
                    ? (n = t.anchor)
                    : e == "end" || e == "to" || e === !1
                      ? (n = t.to())
                      : (n = t.from()),
                n
              );
            },
            listSelections: function () {
              return this.sel.ranges;
            },
            somethingSelected: function () {
              return this.sel.somethingSelected();
            },
            setCursor: xt(function (e, t, n) {
              ws(
                this,
                Oe(this, typeof e == "number" ? ie(e, t || 0) : e),
                null,
                n,
              );
            }),
            setSelection: xt(function (e, t, n) {
              ws(this, Oe(this, e), Oe(this, t || e), n);
            }),
            extendSelection: xt(function (e, t, n) {
              zi(this, Oe(this, e), t && Oe(this, t), n);
            }),
            extendSelections: xt(function (e, t) {
              Ds(this, hl(this, e), t);
            }),
            extendSelectionsBy: xt(function (e, t) {
              var n = ut(this.sel.ranges, e);
              Ds(this, hl(this, n), t);
            }),
            setSelections: xt(function (e, t, n) {
              if (e.length) {
                for (var r = [], i = 0; i < e.length; i++)
                  r[i] = new Ue(
                    Oe(this, e[i].anchor),
                    Oe(this, e[i].head || e[i].anchor),
                  );
                (t == null && (t = Math.min(e.length - 1, this.sel.primIndex)),
                  St(this, Zt(this.cm, r, t), n));
              }
            }),
            addSelection: xt(function (e, t, n) {
              var r = this.sel.ranges.slice(0);
              (r.push(new Ue(Oe(this, e), Oe(this, t || e))),
                St(this, Zt(this.cm, r, r.length - 1), n));
            }),
            getSelection: function (e) {
              for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
                var i = Tr(this, t[r].from(), t[r].to());
                n = n ? n.concat(i) : i;
              }
              return e === !1 ? n : n.join(e || this.lineSeparator());
            },
            getSelections: function (e) {
              for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                var i = Tr(this, n[r].from(), n[r].to());
                (e !== !1 && (i = i.join(e || this.lineSeparator())),
                  (t[r] = i));
              }
              return t;
            },
            replaceSelection: function (e, t, n) {
              for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
              this.replaceSelections(r, t, n || "+input");
            },
            replaceSelections: xt(function (e, t, n) {
              for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                var u = i.ranges[o];
                r[o] = {
                  from: u.from(),
                  to: u.to(),
                  text: this.splitLines(e[o]),
                  origin: n,
                };
              }
              for (
                var c = t && t != "end" && Ah(this, r, t), h = r.length - 1;
                h >= 0;
                h--
              )
                pn(this, r[h]);
              c ? Cs(this, c) : this.cm && fn(this.cm);
            }),
            undo: xt(function () {
              Ui(this, "undo");
            }),
            redo: xt(function () {
              Ui(this, "redo");
            }),
            undoSelection: xt(function () {
              Ui(this, "undo", !0);
            }),
            redoSelection: xt(function () {
              Ui(this, "redo", !0);
            }),
            setExtending: function (e) {
              this.extend = e;
            },
            getExtending: function () {
              return this.extend;
            },
            historySize: function () {
              for (
                var e = this.history, t = 0, n = 0, r = 0;
                r < e.done.length;
                r++
              )
                e.done[r].ranges || ++t;
              for (var i = 0; i < e.undone.length; i++)
                e.undone[i].ranges || ++n;
              return { undo: t, redo: n };
            },
            clearHistory: function () {
              var e = this;
              ((this.history = new Hi(this.history)),
                br(
                  this,
                  function (t) {
                    return (t.history = e.history);
                  },
                  !0,
                ));
            },
            markClean: function () {
              this.cleanGeneration = this.changeGeneration(!0);
            },
            changeGeneration: function (e) {
              return (
                e &&
                  (this.history.lastOp =
                    this.history.lastSelOp =
                    this.history.lastOrigin =
                      null),
                this.history.generation
              );
            },
            isClean: function (e) {
              return this.history.generation == (e || this.cleanGeneration);
            },
            getHistory: function () {
              return {
                done: hn(this.history.done),
                undone: hn(this.history.undone),
              };
            },
            setHistory: function (e) {
              var t = (this.history = new Hi(this.history));
              ((t.done = hn(e.done.slice(0), null, !0)),
                (t.undone = hn(e.undone.slice(0), null, !0)));
            },
            setGutterMarker: xt(function (e, t, n) {
              return Yn(this, e, "gutter", function (r) {
                var i = r.gutterMarkers || (r.gutterMarkers = {});
                return ((i[t] = n), !n && x(i) && (r.gutterMarkers = null), !0);
              });
            }),
            clearGutter: xt(function (e) {
              var t = this;
              this.iter(function (n) {
                n.gutterMarkers &&
                  n.gutterMarkers[e] &&
                  Yn(t, n, "gutter", function () {
                    return (
                      (n.gutterMarkers[e] = null),
                      x(n.gutterMarkers) && (n.gutterMarkers = null),
                      !0
                    );
                  });
              });
            }),
            lineInfo: function (e) {
              var t;
              if (typeof e == "number") {
                if (!Bn(this, e) || ((t = e), (e = Ce(this, e)), !e))
                  return null;
              } else if (((t = je(e)), t == null)) return null;
              return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets,
              };
            },
            addLineClass: xt(function (e, t, n) {
              return Yn(
                this,
                e,
                t == "gutter" ? "gutter" : "class",
                function (r) {
                  var i =
                    t == "text"
                      ? "textClass"
                      : t == "background"
                        ? "bgClass"
                        : t == "gutter"
                          ? "gutterClass"
                          : "wrapClass";
                  if (!r[i]) r[i] = n;
                  else {
                    if (he(n).test(r[i])) return !1;
                    r[i] += " " + n;
                  }
                  return !0;
                },
              );
            }),
            removeLineClass: xt(function (e, t, n) {
              return Yn(
                this,
                e,
                t == "gutter" ? "gutter" : "class",
                function (r) {
                  var i =
                      t == "text"
                        ? "textClass"
                        : t == "background"
                          ? "bgClass"
                          : t == "gutter"
                            ? "gutterClass"
                            : "wrapClass",
                    o = r[i];
                  if (o)
                    if (n == null) r[i] = null;
                    else {
                      var u = o.match(he(n));
                      if (!u) return !1;
                      var c = u.index + u[0].length;
                      r[i] =
                        o.slice(0, u.index) +
                          (!u.index || c == o.length ? "" : " ") +
                          o.slice(c) || null;
                    }
                  else return !1;
                  return !0;
                },
              );
            }),
            addLineWidget: xt(function (e, t, n) {
              return Ih(this, e, t, n);
            }),
            removeLineWidget: function (e) {
              e.clear();
            },
            markText: function (e, t, n) {
              return vn(
                this,
                Oe(this, e),
                Oe(this, t),
                n,
                (n && n.type) || "range",
              );
            },
            setBookmark: function (e, t) {
              var n = {
                replacedWith: t && (t.nodeType == null ? t.widget : t),
                insertLeft: t && t.insertLeft,
                clearWhenEmpty: !1,
                shared: t && t.shared,
                handleMouseEvents: t && t.handleMouseEvents,
              };
              return ((e = Oe(this, e)), vn(this, e, e, n, "bookmark"));
            },
            findMarksAt: function (e) {
              e = Oe(this, e);
              var t = [],
                n = Ce(this, e.line).markedSpans;
              if (n)
                for (var r = 0; r < n.length; ++r) {
                  var i = n[r];
                  (i.from == null || i.from <= e.ch) &&
                    (i.to == null || i.to >= e.ch) &&
                    t.push(i.marker.parent || i.marker);
                }
              return t;
            },
            findMarks: function (e, t, n) {
              ((e = Oe(this, e)), (t = Oe(this, t)));
              var r = [],
                i = e.line;
              return (
                this.iter(e.line, t.line + 1, function (o) {
                  var u = o.markedSpans;
                  if (u)
                    for (var c = 0; c < u.length; c++) {
                      var h = u[c];
                      !(
                        (h.to != null && i == e.line && e.ch >= h.to) ||
                        (h.from == null && i != e.line) ||
                        (h.from != null && i == t.line && h.from >= t.ch)
                      ) &&
                        (!n || n(h.marker)) &&
                        r.push(h.marker.parent || h.marker);
                    }
                  ++i;
                }),
                r
              );
            },
            getAllMarks: function () {
              var e = [];
              return (
                this.iter(function (t) {
                  var n = t.markedSpans;
                  if (n)
                    for (var r = 0; r < n.length; ++r)
                      n[r].from != null && e.push(n[r].marker);
                }),
                e
              );
            },
            posFromIndex: function (e) {
              var t,
                n = this.first,
                r = this.lineSeparator().length;
              return (
                this.iter(function (i) {
                  var o = i.text.length + r;
                  if (o > e) return ((t = e), !0);
                  ((e -= o), ++n);
                }),
                Oe(this, ie(n, t))
              );
            },
            indexFromPos: function (e) {
              e = Oe(this, e);
              var t = e.ch;
              if (e.line < this.first || e.ch < 0) return 0;
              var n = this.lineSeparator().length;
              return (
                this.iter(this.first, e.line, function (r) {
                  t += r.text.length + n;
                }),
                t
              );
            },
            copy: function (e) {
              var t = new Mt(
                xa(this, this.first, this.first + this.size),
                this.modeOption,
                this.first,
                this.lineSep,
                this.direction,
              );
              return (
                (t.scrollTop = this.scrollTop),
                (t.scrollLeft = this.scrollLeft),
                (t.sel = this.sel),
                (t.extend = !1),
                e &&
                  ((t.history.undoDepth = this.history.undoDepth),
                  t.setHistory(this.getHistory())),
                t
              );
            },
            linkedDoc: function (e) {
              e || (e = {});
              var t = this.first,
                n = this.first + this.size;
              (e.from != null && e.from > t && (t = e.from),
                e.to != null && e.to < n && (n = e.to));
              var r = new Mt(
                xa(this, t, n),
                e.mode || this.modeOption,
                t,
                this.lineSep,
                this.direction,
              );
              return (
                e.sharedHist && (r.history = this.history),
                (this.linked || (this.linked = [])).push({
                  doc: r,
                  sharedHist: e.sharedHist,
                }),
                (r.linked = [
                  { doc: this, isParent: !0, sharedHist: e.sharedHist },
                ]),
                Rh(r, Rs(this)),
                r
              );
            },
            unlinkDoc: function (e) {
              if ((e instanceof et && (e = e.doc), this.linked))
                for (var t = 0; t < this.linked.length; ++t) {
                  var n = this.linked[t];
                  if (n.doc == e) {
                    (this.linked.splice(t, 1), e.unlinkDoc(this), Hh(Rs(this)));
                    break;
                  }
                }
              if (e.history == this.history) {
                var r = [e.id];
                (br(
                  e,
                  function (i) {
                    return r.push(i.id);
                  },
                  !0,
                ),
                  (e.history = new Hi(null)),
                  (e.history.done = hn(this.history.done, r)),
                  (e.history.undone = hn(this.history.undone, r)));
              }
            },
            iterLinkedDocs: function (e) {
              br(this, e);
            },
            getMode: function () {
              return this.mode;
            },
            getEditor: function () {
              return this.cm;
            },
            splitLines: function (e) {
              return this.lineSep ? e.split(this.lineSep) : Mn(e);
            },
            lineSeparator: function () {
              return (
                this.lineSep ||
                `
`
              );
            },
            setDirection: xt(function (e) {
              (e != "rtl" && (e = "ltr"),
                e != this.direction &&
                  ((this.direction = e),
                  this.iter(function (t) {
                    return (t.order = null);
                  }),
                  this.cm && Eh(this.cm)));
            }),
          })),
            (Mt.prototype.eachLine = Mt.prototype.iter));
          var Hs = 0;
          function zh(e) {
            var t = this;
            if ((Ps(t), !(se(t, e) || ur(t.display, e)))) {
              (Ee(e), C && (Hs = +new Date()));
              var n = Or(t, e, !0),
                r = e.dataTransfer.files;
              if (!(!n || t.isReadOnly()))
                if (r && r.length && window.FileReader && window.File)
                  for (
                    var i = r.length,
                      o = Array(i),
                      u = 0,
                      c = function () {
                        ++u == i &&
                          mt(t, function () {
                            n = Oe(t.doc, n);
                            var O = {
                              from: n,
                              to: n,
                              text: t.doc.splitLines(
                                o
                                  .filter(function (Y) {
                                    return Y != null;
                                  })
                                  .join(t.doc.lineSeparator()),
                              ),
                              origin: "paste",
                            };
                            (pn(t.doc, O),
                              Cs(t.doc, xr(Oe(t.doc, n), Oe(t.doc, yr(O)))));
                          })();
                      },
                      h = function (O, Y) {
                        if (
                          t.options.allowDropFileTypes &&
                          He(t.options.allowDropFileTypes, O.type) == -1
                        ) {
                          c();
                          return;
                        }
                        var V = new FileReader();
                        ((V.onerror = function () {
                          return c();
                        }),
                          (V.onload = function () {
                            var oe = V.result;
                            if (/[\x00-\x08\x0e-\x1f]{2}/.test(oe)) {
                              c();
                              return;
                            }
                            ((o[Y] = oe), c());
                          }),
                          V.readAsText(O));
                      },
                      v = 0;
                    v < r.length;
                    v++
                  )
                    h(r[v], v);
                else {
                  if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
                    (t.state.draggingText(e),
                      setTimeout(function () {
                        return t.display.input.focus();
                      }, 20));
                    return;
                  }
                  try {
                    var k = e.dataTransfer.getData("Text");
                    if (k) {
                      var A;
                      if (
                        (t.state.draggingText &&
                          !t.state.draggingText.copy &&
                          (A = t.listSelections()),
                        Wi(t.doc, xr(n, n)),
                        A)
                      )
                        for (var H = 0; H < A.length; ++H)
                          gn(t.doc, "", A[H].anchor, A[H].head, "drag");
                      (t.replaceSelection(k, "around", "paste"),
                        t.display.input.focus());
                    }
                  } catch {}
                }
            }
          }
          function Wh(e, t) {
            if (C && (!e.state.draggingText || +new Date() - Hs < 100)) {
              ft(t);
              return;
            }
            if (
              !(se(e, t) || ur(e.display, t)) &&
              (t.dataTransfer.setData("Text", e.getSelection()),
              (t.dataTransfer.effectAllowed = "copyMove"),
              t.dataTransfer.setDragImage && !we)
            ) {
              var n = R("img", null, null, "position: fixed; left: 0; top: 0;");
              ((n.src =
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                ae &&
                  ((n.width = n.height = 1),
                  e.display.wrapper.appendChild(n),
                  (n._top = n.offsetTop)),
                t.dataTransfer.setDragImage(n, 0, 0),
                ae && n.parentNode.removeChild(n));
            }
          }
          function qh(e, t) {
            var n = Or(e, t);
            if (n) {
              var r = document.createDocumentFragment();
              (za(e, n, r),
                e.display.dragCursor ||
                  ((e.display.dragCursor = R(
                    "div",
                    null,
                    "CodeMirror-cursors CodeMirror-dragcursors",
                  )),
                  e.display.lineSpace.insertBefore(
                    e.display.dragCursor,
                    e.display.cursorDiv,
                  )),
                Ne(e.display.dragCursor, r));
            }
          }
          function Ps(e) {
            e.display.dragCursor &&
              (e.display.lineSpace.removeChild(e.display.dragCursor),
              (e.display.dragCursor = null));
          }
          function zs(e) {
            if (document.getElementsByClassName) {
              for (
                var t = document.getElementsByClassName("CodeMirror"),
                  n = [],
                  r = 0;
                r < t.length;
                r++
              ) {
                var i = t[r].CodeMirror;
                i && n.push(i);
              }
              n.length &&
                n[0].operation(function () {
                  for (var o = 0; o < n.length; o++) e(n[o]);
                });
            }
          }
          var Ws = !1;
          function Uh() {
            Ws || (jh(), (Ws = !0));
          }
          function jh() {
            var e;
            (N(window, "resize", function () {
              e == null &&
                (e = setTimeout(function () {
                  ((e = null), zs(Gh));
                }, 100));
            }),
              N(window, "blur", function () {
                return zs(un);
              }));
          }
          function Gh(e) {
            var t = e.display;
            ((t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
              (t.scrollbarsClipped = !1),
              e.setSize());
          }
          for (
            var wr = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert",
              },
              ei = 0;
            ei < 10;
            ei++
          )
            wr[ei + 48] = wr[ei + 96] = String(ei);
          for (var ji = 65; ji <= 90; ji++) wr[ji] = String.fromCharCode(ji);
          for (var ti = 1; ti <= 12; ti++)
            wr[ti + 111] = wr[ti + 63235] = "F" + ti;
          var cr = {};
          ((cr.basic = {
            Left: "goCharLeft",
            Right: "goCharRight",
            Up: "goLineUp",
            Down: "goLineDown",
            End: "goLineEnd",
            Home: "goLineStartSmart",
            PageUp: "goPageUp",
            PageDown: "goPageDown",
            Delete: "delCharAfter",
            Backspace: "delCharBefore",
            "Shift-Backspace": "delCharBefore",
            Tab: "defaultTab",
            "Shift-Tab": "indentAuto",
            Enter: "newlineAndIndent",
            Insert: "toggleOverwrite",
            Esc: "singleSelection",
          }),
            (cr.pcDefault = {
              "Ctrl-A": "selectAll",
              "Ctrl-D": "deleteLine",
              "Ctrl-Z": "undo",
              "Shift-Ctrl-Z": "redo",
              "Ctrl-Y": "redo",
              "Ctrl-Home": "goDocStart",
              "Ctrl-End": "goDocEnd",
              "Ctrl-Up": "goLineUp",
              "Ctrl-Down": "goLineDown",
              "Ctrl-Left": "goGroupLeft",
              "Ctrl-Right": "goGroupRight",
              "Alt-Left": "goLineStart",
              "Alt-Right": "goLineEnd",
              "Ctrl-Backspace": "delGroupBefore",
              "Ctrl-Delete": "delGroupAfter",
              "Ctrl-S": "save",
              "Ctrl-F": "find",
              "Ctrl-G": "findNext",
              "Shift-Ctrl-G": "findPrev",
              "Shift-Ctrl-F": "replace",
              "Shift-Ctrl-R": "replaceAll",
              "Ctrl-[": "indentLess",
              "Ctrl-]": "indentMore",
              "Ctrl-U": "undoSelection",
              "Shift-Ctrl-U": "redoSelection",
              "Alt-U": "redoSelection",
              fallthrough: "basic",
            }),
            (cr.emacsy = {
              "Ctrl-F": "goCharRight",
              "Ctrl-B": "goCharLeft",
              "Ctrl-P": "goLineUp",
              "Ctrl-N": "goLineDown",
              "Ctrl-A": "goLineStart",
              "Ctrl-E": "goLineEnd",
              "Ctrl-V": "goPageDown",
              "Shift-Ctrl-V": "goPageUp",
              "Ctrl-D": "delCharAfter",
              "Ctrl-H": "delCharBefore",
              "Alt-Backspace": "delWordBefore",
              "Ctrl-K": "killLine",
              "Ctrl-T": "transposeChars",
              "Ctrl-O": "openLine",
            }),
            (cr.macDefault = {
              "Cmd-A": "selectAll",
              "Cmd-D": "deleteLine",
              "Cmd-Z": "undo",
              "Shift-Cmd-Z": "redo",
              "Cmd-Y": "redo",
              "Cmd-Home": "goDocStart",
              "Cmd-Up": "goDocStart",
              "Cmd-End": "goDocEnd",
              "Cmd-Down": "goDocEnd",
              "Alt-Left": "goGroupLeft",
              "Alt-Right": "goGroupRight",
              "Cmd-Left": "goLineLeft",
              "Cmd-Right": "goLineRight",
              "Alt-Backspace": "delGroupBefore",
              "Ctrl-Alt-Backspace": "delGroupAfter",
              "Alt-Delete": "delGroupAfter",
              "Cmd-S": "save",
              "Cmd-F": "find",
              "Cmd-G": "findNext",
              "Shift-Cmd-G": "findPrev",
              "Cmd-Alt-F": "replace",
              "Shift-Cmd-Alt-F": "replaceAll",
              "Cmd-[": "indentLess",
              "Cmd-]": "indentMore",
              "Cmd-Backspace": "delWrappedLineLeft",
              "Cmd-Delete": "delWrappedLineRight",
              "Cmd-U": "undoSelection",
              "Shift-Cmd-U": "redoSelection",
              "Ctrl-Up": "goDocStart",
              "Ctrl-Down": "goDocEnd",
              fallthrough: ["basic", "emacsy"],
            }),
            (cr.default = X ? cr.macDefault : cr.pcDefault));
          function Kh(e) {
            var t = e.split(/-(?!$)/);
            e = t[t.length - 1];
            for (var n, r, i, o, u = 0; u < t.length - 1; u++) {
              var c = t[u];
              if (/^(cmd|meta|m)$/i.test(c)) o = !0;
              else if (/^a(lt)?$/i.test(c)) n = !0;
              else if (/^(c|ctrl|control)$/i.test(c)) r = !0;
              else if (/^s(hift)?$/i.test(c)) i = !0;
              else throw new Error("Unrecognized modifier name: " + c);
            }
            return (
              n && (e = "Alt-" + e),
              r && (e = "Ctrl-" + e),
              o && (e = "Cmd-" + e),
              i && (e = "Shift-" + e),
              e
            );
          }
          function $h(e) {
            var t = {};
            for (var n in e)
              if (e.hasOwnProperty(n)) {
                var r = e[n];
                if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                if (r == "...") {
                  delete e[n];
                  continue;
                }
                for (var i = ut(n.split(" "), Kh), o = 0; o < i.length; o++) {
                  var u = void 0,
                    c = void 0;
                  o == i.length - 1
                    ? ((c = i.join(" ")), (u = r))
                    : ((c = i.slice(0, o + 1).join(" ")), (u = "..."));
                  var h = t[c];
                  if (!h) t[c] = u;
                  else if (h != u)
                    throw new Error("Inconsistent bindings for " + c);
                }
                delete e[n];
              }
            for (var v in t) e[v] = t[v];
            return e;
          }
          function mn(e, t, n, r) {
            t = Gi(t);
            var i = t.call ? t.call(e, r) : t[e];
            if (i === !1) return "nothing";
            if (i === "...") return "multi";
            if (i != null && n(i)) return "handled";
            if (t.fallthrough) {
              if (
                Object.prototype.toString.call(t.fallthrough) !=
                "[object Array]"
              )
                return mn(e, t.fallthrough, n, r);
              for (var o = 0; o < t.fallthrough.length; o++) {
                var u = mn(e, t.fallthrough[o], n, r);
                if (u) return u;
              }
            }
          }
          function qs(e) {
            var t = typeof e == "string" ? e : wr[e.keyCode];
            return t == "Ctrl" || t == "Alt" || t == "Shift" || t == "Mod";
          }
          function Us(e, t, n) {
            var r = e;
            return (
              t.altKey && r != "Alt" && (e = "Alt-" + e),
              (ve ? t.metaKey : t.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e),
              (ve ? t.ctrlKey : t.metaKey) && r != "Mod" && (e = "Cmd-" + e),
              !n && t.shiftKey && r != "Shift" && (e = "Shift-" + e),
              e
            );
          }
          function js(e, t) {
            if (ae && e.keyCode == 34 && e.char) return !1;
            var n = wr[e.keyCode];
            return n == null || e.altGraphKey
              ? !1
              : (e.keyCode == 3 && e.code && (n = e.code), Us(n, e, t));
          }
          function Gi(e) {
            return typeof e == "string" ? cr[e] : e;
          }
          function xn(e, t) {
            for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
              for (var o = t(n[i]); r.length && Be(o.from, be(r).to) <= 0; ) {
                var u = r.pop();
                if (Be(u.from, o.from) < 0) {
                  o.from = u.from;
                  break;
                }
              }
              r.push(o);
            }
            Ht(e, function () {
              for (var c = r.length - 1; c >= 0; c--)
                gn(e.doc, "", r[c].from, r[c].to, "+delete");
              fn(e);
            });
          }
          function no(e, t, n) {
            var r = g(e.text, t + n, n);
            return r < 0 || r > e.text.length ? null : r;
          }
          function io(e, t, n) {
            var r = no(e, t.ch, n);
            return r == null
              ? null
              : new ie(t.line, r, n < 0 ? "after" : "before");
          }
          function ao(e, t, n, r, i) {
            if (e) {
              t.doc.direction == "rtl" && (i = -i);
              var o = F(n, t.doc.direction);
              if (o) {
                var u = i < 0 ? be(o) : o[0],
                  c = i < 0 == (u.level == 1),
                  h = c ? "after" : "before",
                  v;
                if (u.level > 0 || t.doc.direction == "rtl") {
                  var k = on(t, n);
                  v = i < 0 ? n.text.length - 1 : 0;
                  var A = ir(t, k, v).top;
                  ((v = S(
                    function (H) {
                      return ir(t, k, H).top == A;
                    },
                    i < 0 == (u.level == 1) ? u.from : u.to - 1,
                    v,
                  )),
                    h == "before" && (v = no(n, v, 1)));
                } else v = i < 0 ? u.to : u.from;
                return new ie(r, v, h);
              }
            }
            return new ie(
              r,
              i < 0 ? n.text.length : 0,
              i < 0 ? "before" : "after",
            );
          }
          function Xh(e, t, n, r) {
            var i = F(t, e.doc.direction);
            if (!i) return io(t, n, r);
            n.ch >= t.text.length
              ? ((n.ch = t.text.length), (n.sticky = "before"))
              : n.ch <= 0 && ((n.ch = 0), (n.sticky = "after"));
            var o = z(i, n.ch, n.sticky),
              u = i[o];
            if (
              e.doc.direction == "ltr" &&
              u.level % 2 == 0 &&
              (r > 0 ? u.to > n.ch : u.from < n.ch)
            )
              return io(t, n, r);
            var c = function (de, ge) {
                return no(t, de instanceof ie ? de.ch : de, ge);
              },
              h,
              v = function (de) {
                return e.options.lineWrapping
                  ? ((h = h || on(e, t)), Yl(e, t, h, de))
                  : { begin: 0, end: t.text.length };
              },
              k = v(n.sticky == "before" ? c(n, -1) : n.ch);
            if (e.doc.direction == "rtl" || u.level == 1) {
              var A = (u.level == 1) == r < 0,
                H = c(n, A ? 1 : -1);
              if (
                H != null &&
                (A ? H <= u.to && H <= k.end : H >= u.from && H >= k.begin)
              ) {
                var O = A ? "before" : "after";
                return new ie(n.line, H, O);
              }
            }
            var Y = function (de, ge, pe) {
                for (
                  var me = function (Ze, yt) {
                    return yt
                      ? new ie(n.line, c(Ze, 1), "before")
                      : new ie(n.line, Ze, "after");
                  };
                  de >= 0 && de < i.length;
                  de += ge
                ) {
                  var Ae = i[de],
                    Se = ge > 0 == (Ae.level != 1),
                    Re = Se ? pe.begin : c(pe.end, -1);
                  if (
                    (Ae.from <= Re && Re < Ae.to) ||
                    ((Re = Se ? Ae.from : c(Ae.to, -1)),
                    pe.begin <= Re && Re < pe.end)
                  )
                    return me(Re, Se);
                }
              },
              V = Y(o + r, r, k);
            if (V) return V;
            var oe = r > 0 ? k.end : c(k.begin, -1);
            return oe != null &&
              !(r > 0 && oe == t.text.length) &&
              ((V = Y(r > 0 ? 0 : i.length - 1, r, v(oe))), V)
              ? V
              : null;
          }
          var ri = {
            selectAll: Fs,
            singleSelection: function (e) {
              return e.setSelection(
                e.getCursor("anchor"),
                e.getCursor("head"),
                lt,
              );
            },
            killLine: function (e) {
              return xn(e, function (t) {
                if (t.empty()) {
                  var n = Ce(e.doc, t.head.line).text.length;
                  return t.head.ch == n && t.head.line < e.lastLine()
                    ? { from: t.head, to: ie(t.head.line + 1, 0) }
                    : { from: t.head, to: ie(t.head.line, n) };
                } else return { from: t.from(), to: t.to() };
              });
            },
            deleteLine: function (e) {
              return xn(e, function (t) {
                return {
                  from: ie(t.from().line, 0),
                  to: Oe(e.doc, ie(t.to().line + 1, 0)),
                };
              });
            },
            delLineLeft: function (e) {
              return xn(e, function (t) {
                return { from: ie(t.from().line, 0), to: t.from() };
              });
            },
            delWrappedLineLeft: function (e) {
              return xn(e, function (t) {
                var n = e.charCoords(t.head, "div").top + 5,
                  r = e.coordsChar({ left: 0, top: n }, "div");
                return { from: r, to: t.from() };
              });
            },
            delWrappedLineRight: function (e) {
              return xn(e, function (t) {
                var n = e.charCoords(t.head, "div").top + 5,
                  r = e.coordsChar(
                    { left: e.display.lineDiv.offsetWidth + 100, top: n },
                    "div",
                  );
                return { from: t.from(), to: r };
              });
            },
            undo: function (e) {
              return e.undo();
            },
            redo: function (e) {
              return e.redo();
            },
            undoSelection: function (e) {
              return e.undoSelection();
            },
            redoSelection: function (e) {
              return e.redoSelection();
            },
            goDocStart: function (e) {
              return e.extendSelection(ie(e.firstLine(), 0));
            },
            goDocEnd: function (e) {
              return e.extendSelection(ie(e.lastLine()));
            },
            goLineStart: function (e) {
              return e.extendSelectionsBy(
                function (t) {
                  return Gs(e, t.head.line);
                },
                { origin: "+move", bias: 1 },
              );
            },
            goLineStartSmart: function (e) {
              return e.extendSelectionsBy(
                function (t) {
                  return Ks(e, t.head);
                },
                { origin: "+move", bias: 1 },
              );
            },
            goLineEnd: function (e) {
              return e.extendSelectionsBy(
                function (t) {
                  return Yh(e, t.head.line);
                },
                { origin: "+move", bias: -1 },
              );
            },
            goLineRight: function (e) {
              return e.extendSelectionsBy(function (t) {
                var n = e.cursorCoords(t.head, "div").top + 5;
                return e.coordsChar(
                  { left: e.display.lineDiv.offsetWidth + 100, top: n },
                  "div",
                );
              }, Ct);
            },
            goLineLeft: function (e) {
              return e.extendSelectionsBy(function (t) {
                var n = e.cursorCoords(t.head, "div").top + 5;
                return e.coordsChar({ left: 0, top: n }, "div");
              }, Ct);
            },
            goLineLeftSmart: function (e) {
              return e.extendSelectionsBy(function (t) {
                var n = e.cursorCoords(t.head, "div").top + 5,
                  r = e.coordsChar({ left: 0, top: n }, "div");
                return r.ch < e.getLine(r.line).search(/\S/)
                  ? Ks(e, t.head)
                  : r;
              }, Ct);
            },
            goLineUp: function (e) {
              return e.moveV(-1, "line");
            },
            goLineDown: function (e) {
              return e.moveV(1, "line");
            },
            goPageUp: function (e) {
              return e.moveV(-1, "page");
            },
            goPageDown: function (e) {
              return e.moveV(1, "page");
            },
            goCharLeft: function (e) {
              return e.moveH(-1, "char");
            },
            goCharRight: function (e) {
              return e.moveH(1, "char");
            },
            goColumnLeft: function (e) {
              return e.moveH(-1, "column");
            },
            goColumnRight: function (e) {
              return e.moveH(1, "column");
            },
            goWordLeft: function (e) {
              return e.moveH(-1, "word");
            },
            goGroupRight: function (e) {
              return e.moveH(1, "group");
            },
            goGroupLeft: function (e) {
              return e.moveH(-1, "group");
            },
            goWordRight: function (e) {
              return e.moveH(1, "word");
            },
            delCharBefore: function (e) {
              return e.deleteH(-1, "codepoint");
            },
            delCharAfter: function (e) {
              return e.deleteH(1, "char");
            },
            delWordBefore: function (e) {
              return e.deleteH(-1, "word");
            },
            delWordAfter: function (e) {
              return e.deleteH(1, "word");
            },
            delGroupBefore: function (e) {
              return e.deleteH(-1, "group");
            },
            delGroupAfter: function (e) {
              return e.deleteH(1, "group");
            },
            indentAuto: function (e) {
              return e.indentSelection("smart");
            },
            indentMore: function (e) {
              return e.indentSelection("add");
            },
            indentLess: function (e) {
              return e.indentSelection("subtract");
            },
            insertTab: function (e) {
              return e.replaceSelection("	");
            },
            insertSoftTab: function (e) {
              for (
                var t = [],
                  n = e.listSelections(),
                  r = e.options.tabSize,
                  i = 0;
                i < n.length;
                i++
              ) {
                var o = n[i].from(),
                  u = Ke(e.getLine(o.line), o.ch, r);
                t.push(zt(r - (u % r)));
              }
              e.replaceSelections(t);
            },
            defaultTab: function (e) {
              e.somethingSelected()
                ? e.indentSelection("add")
                : e.execCommand("insertTab");
            },
            transposeChars: function (e) {
              return Ht(e, function () {
                for (
                  var t = e.listSelections(), n = [], r = 0;
                  r < t.length;
                  r++
                )
                  if (t[r].empty()) {
                    var i = t[r].head,
                      o = Ce(e.doc, i.line).text;
                    if (o) {
                      if (
                        (i.ch == o.length && (i = new ie(i.line, i.ch - 1)),
                        i.ch > 0)
                      )
                        ((i = new ie(i.line, i.ch + 1)),
                          e.replaceRange(
                            o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                            ie(i.line, i.ch - 2),
                            i,
                            "+transpose",
                          ));
                      else if (i.line > e.doc.first) {
                        var u = Ce(e.doc, i.line - 1).text;
                        u &&
                          ((i = new ie(i.line, 1)),
                          e.replaceRange(
                            o.charAt(0) +
                              e.doc.lineSeparator() +
                              u.charAt(u.length - 1),
                            ie(i.line - 1, u.length - 1),
                            i,
                            "+transpose",
                          ));
                      }
                    }
                    n.push(new Ue(i, i));
                  }
                e.setSelections(n);
              });
            },
            newlineAndIndent: function (e) {
              return Ht(e, function () {
                for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                  e.replaceRange(
                    e.doc.lineSeparator(),
                    t[n].anchor,
                    t[n].head,
                    "+input",
                  );
                t = e.listSelections();
                for (var r = 0; r < t.length; r++)
                  e.indentLine(t[r].from().line, null, !0);
                fn(e);
              });
            },
            openLine: function (e) {
              return e.replaceSelection(
                `
`,
                "start",
              );
            },
            toggleOverwrite: function (e) {
              return e.toggleOverwrite();
            },
          };
          function Gs(e, t) {
            var n = Ce(e.doc, t),
              r = Xt(n);
            return (r != n && (t = je(r)), ao(!0, e, r, t, 1));
          }
          function Yh(e, t) {
            var n = Ce(e.doc, t),
              r = Mc(n);
            return (r != n && (t = je(r)), ao(!0, e, n, t, -1));
          }
          function Ks(e, t) {
            var n = Gs(e, t.line),
              r = Ce(e.doc, n.line),
              i = F(r, e.doc.direction);
            if (!i || i[0].level == 0) {
              var o = Math.max(n.ch, r.text.search(/\S/)),
                u = t.line == n.line && t.ch <= o && t.ch;
              return ie(n.line, u ? 0 : o, n.sticky);
            }
            return n;
          }
          function Ki(e, t, n) {
            if (typeof t == "string" && ((t = ri[t]), !t)) return !1;
            e.display.input.ensurePolled();
            var r = e.display.shift,
              i = !1;
            try {
              (e.isReadOnly() && (e.state.suppressEdits = !0),
                n && (e.display.shift = !1),
                (i = t(e) != Ve));
            } finally {
              ((e.display.shift = r), (e.state.suppressEdits = !1));
            }
            return i;
          }
          function Zh(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
              var i = mn(t, e.state.keyMaps[r], n, e);
              if (i) return i;
            }
            return (
              (e.options.extraKeys && mn(t, e.options.extraKeys, n, e)) ||
              mn(t, e.options.keyMap, n, e)
            );
          }
          var Jh = new Xe();
          function ni(e, t, n, r) {
            var i = e.state.keySeq;
            if (i) {
              if (qs(t)) return "handled";
              if (
                (/\'$/.test(t)
                  ? (e.state.keySeq = null)
                  : Jh.set(50, function () {
                      e.state.keySeq == i &&
                        ((e.state.keySeq = null), e.display.input.reset());
                    }),
                $s(e, i + " " + t, n, r))
              )
                return !0;
            }
            return $s(e, t, n, r);
          }
          function $s(e, t, n, r) {
            var i = Zh(e, t, r);
            return (
              i == "multi" && (e.state.keySeq = t),
              i == "handled" && vt(e, "keyHandled", e, t, n),
              (i == "handled" || i == "multi") && (Ee(n), Wa(e)),
              !!i
            );
          }
          function Xs(e, t) {
            var n = js(t, !0);
            return n
              ? t.shiftKey && !e.state.keySeq
                ? ni(e, "Shift-" + n, t, function (r) {
                    return Ki(e, r, !0);
                  }) ||
                  ni(e, n, t, function (r) {
                    if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
                      return Ki(e, r);
                  })
                : ni(e, n, t, function (r) {
                    return Ki(e, r);
                  })
              : !1;
          }
          function Qh(e, t, n) {
            return ni(e, "'" + n + "'", t, function (r) {
              return Ki(e, r, !0);
            });
          }
          var oo = null;
          function Ys(e) {
            var t = this;
            if (
              !(e.target && e.target != t.display.input.getField()) &&
              ((t.curOp.focus = ze(J(t))), !se(t, e))
            ) {
              C && L < 11 && e.keyCode == 27 && (e.returnValue = !1);
              var n = e.keyCode;
              t.display.shift = n == 16 || e.shiftKey;
              var r = Xs(t, e);
              (ae &&
                ((oo = r ? n : null),
                !r &&
                  n == 88 &&
                  !Dt &&
                  (X ? e.metaKey : e.ctrlKey) &&
                  t.replaceSelection("", null, "cut")),
                p &&
                  !X &&
                  !r &&
                  n == 46 &&
                  e.shiftKey &&
                  !e.ctrlKey &&
                  document.execCommand &&
                  document.execCommand("cut"),
                n == 18 &&
                  !/\bCodeMirror-crosshair\b/.test(
                    t.display.lineDiv.className,
                  ) &&
                  Vh(t));
            }
          }
          function Vh(e) {
            var t = e.display.lineDiv;
            nt(t, "CodeMirror-crosshair");
            function n(r) {
              (r.keyCode == 18 || !r.altKey) &&
                (Le(t, "CodeMirror-crosshair"),
                xe(document, "keyup", n),
                xe(document, "mouseover", n));
            }
            (N(document, "keyup", n), N(document, "mouseover", n));
          }
          function Zs(e) {
            (e.keyCode == 16 && (this.doc.sel.shift = !1), se(this, e));
          }
          function Js(e) {
            var t = this;
            if (
              !(e.target && e.target != t.display.input.getField()) &&
              !(
                ur(t.display, e) ||
                se(t, e) ||
                (e.ctrlKey && !e.altKey) ||
                (X && e.metaKey)
              )
            ) {
              var n = e.keyCode,
                r = e.charCode;
              if (ae && n == oo) {
                ((oo = null), Ee(e));
                return;
              }
              if (!(ae && (!e.which || e.which < 10) && Xs(t, e))) {
                var i = String.fromCharCode(r ?? n);
                i != "\b" && (Qh(t, e, i) || t.display.input.onKeyPress(e));
              }
            }
          }
          var ed = 400,
            lo = function (e, t, n) {
              ((this.time = e), (this.pos = t), (this.button = n));
            };
          lo.prototype.compare = function (e, t, n) {
            return (
              this.time + ed > e && Be(t, this.pos) == 0 && n == this.button
            );
          };
          var ii, ai;
          function td(e, t) {
            var n = +new Date();
            return ai && ai.compare(n, e, t)
              ? ((ii = ai = null), "triple")
              : ii && ii.compare(n, e, t)
                ? ((ai = new lo(n, e, t)), (ii = null), "double")
                : ((ii = new lo(n, e, t)), (ai = null), "single");
          }
          function Qs(e) {
            var t = this,
              n = t.display;
            if (!(se(t, e) || (n.activeTouch && n.input.supportsTouch()))) {
              if ((n.input.ensurePolled(), (n.shift = e.shiftKey), ur(n, e))) {
                K ||
                  ((n.scroller.draggable = !1),
                  setTimeout(function () {
                    return (n.scroller.draggable = !0);
                  }, 100));
                return;
              }
              if (!so(t, e)) {
                var r = Or(t, e),
                  i = kt(e),
                  o = r ? td(r, i) : "single";
                (Te(t).focus(),
                  i == 1 && t.state.selectingText && t.state.selectingText(e),
                  !(r && rd(t, i, r, o, e)) &&
                    (i == 1
                      ? r
                        ? id(t, r, o, e)
                        : Et(e) == n.scroller && Ee(e)
                      : i == 2
                        ? (r && zi(t.doc, r),
                          setTimeout(function () {
                            return n.input.focus();
                          }, 20))
                        : i == 3 &&
                          (qe ? t.display.input.onContextMenu(e) : qa(t))));
              }
            }
          }
          function rd(e, t, n, r, i) {
            var o = "Click";
            return (
              r == "double"
                ? (o = "Double" + o)
                : r == "triple" && (o = "Triple" + o),
              (o = (t == 1 ? "Left" : t == 2 ? "Middle" : "Right") + o),
              ni(e, Us(o, i), i, function (u) {
                if ((typeof u == "string" && (u = ri[u]), !u)) return !1;
                var c = !1;
                try {
                  (e.isReadOnly() && (e.state.suppressEdits = !0),
                    (c = u(e, n) != Ve));
                } finally {
                  e.state.suppressEdits = !1;
                }
                return c;
              })
            );
          }
          function nd(e, t, n) {
            var r = e.getOption("configureMouse"),
              i = r ? r(e, t, n) : {};
            if (i.unit == null) {
              var o = ue ? n.shiftKey && n.metaKey : n.altKey;
              i.unit = o
                ? "rectangle"
                : t == "single"
                  ? "char"
                  : t == "double"
                    ? "word"
                    : "line";
            }
            return (
              (i.extend == null || e.doc.extend) &&
                (i.extend = e.doc.extend || n.shiftKey),
              i.addNew == null && (i.addNew = X ? n.metaKey : n.ctrlKey),
              i.moveOnDrag == null &&
                (i.moveOnDrag = !(X ? n.altKey : n.ctrlKey)),
              i
            );
          }
          function id(e, t, n, r) {
            C ? setTimeout(Je(Vl, e), 0) : (e.curOp.focus = ze(J(e)));
            var i = nd(e, n, r),
              o = e.doc.sel,
              u;
            e.options.dragDrop &&
            Qr &&
            !e.isReadOnly() &&
            n == "single" &&
            (u = o.contains(t)) > -1 &&
            (Be((u = o.ranges[u]).from(), t) < 0 || t.xRel > 0) &&
            (Be(u.to(), t) > 0 || t.xRel < 0)
              ? ad(e, r, t, i)
              : od(e, r, t, i);
          }
          function ad(e, t, n, r) {
            var i = e.display,
              o = !1,
              u = mt(e, function (v) {
                (K && (i.scroller.draggable = !1),
                  (e.state.draggingText = !1),
                  e.state.delayingBlurEvent &&
                    (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : qa(e)),
                  xe(i.wrapper.ownerDocument, "mouseup", u),
                  xe(i.wrapper.ownerDocument, "mousemove", c),
                  xe(i.scroller, "dragstart", h),
                  xe(i.scroller, "drop", u),
                  o ||
                    (Ee(v),
                    r.addNew || zi(e.doc, n, null, null, r.extend),
                    (K && !we) || (C && L == 9)
                      ? setTimeout(function () {
                          (i.wrapper.ownerDocument.body.focus({
                            preventScroll: !0,
                          }),
                            i.input.focus());
                        }, 20)
                      : i.input.focus()));
              }),
              c = function (v) {
                o =
                  o ||
                  Math.abs(t.clientX - v.clientX) +
                    Math.abs(t.clientY - v.clientY) >=
                    10;
              },
              h = function () {
                return (o = !0);
              };
            (K && (i.scroller.draggable = !0),
              (e.state.draggingText = u),
              (u.copy = !r.moveOnDrag),
              N(i.wrapper.ownerDocument, "mouseup", u),
              N(i.wrapper.ownerDocument, "mousemove", c),
              N(i.scroller, "dragstart", h),
              N(i.scroller, "drop", u),
              (e.state.delayingBlurEvent = !0),
              setTimeout(function () {
                return i.input.focus();
              }, 20),
              i.scroller.dragDrop && i.scroller.dragDrop());
          }
          function Vs(e, t, n) {
            if (n == "char") return new Ue(t, t);
            if (n == "word") return e.findWordAt(t);
            if (n == "line")
              return new Ue(ie(t.line, 0), Oe(e.doc, ie(t.line + 1, 0)));
            var r = n(e, t);
            return new Ue(r.from, r.to);
          }
          function od(e, t, n, r) {
            C && qa(e);
            var i = e.display,
              o = e.doc;
            Ee(t);
            var u,
              c,
              h = o.sel,
              v = h.ranges;
            if (
              (r.addNew && !r.extend
                ? ((c = o.sel.contains(n)),
                  c > -1 ? (u = v[c]) : (u = new Ue(n, n)))
                : ((u = o.sel.primary()), (c = o.sel.primIndex)),
              r.unit == "rectangle")
            )
              (r.addNew || (u = new Ue(n, n)),
                (n = Or(e, t, !0, !0)),
                (c = -1));
            else {
              var k = Vs(e, n, r.unit);
              r.extend ? (u = to(u, k.anchor, k.head, r.extend)) : (u = k);
            }
            r.addNew
              ? c == -1
                ? ((c = v.length),
                  St(o, Zt(e, v.concat([u]), c), {
                    scroll: !1,
                    origin: "*mouse",
                  }))
                : v.length > 1 && v[c].empty() && r.unit == "char" && !r.extend
                  ? (St(o, Zt(e, v.slice(0, c).concat(v.slice(c + 1)), 0), {
                      scroll: !1,
                      origin: "*mouse",
                    }),
                    (h = o.sel))
                  : ro(o, c, u, ke)
              : ((c = 0), St(o, new qt([u], 0), ke), (h = o.sel));
            var A = n;
            function H(pe) {
              if (Be(A, pe) != 0)
                if (((A = pe), r.unit == "rectangle")) {
                  for (
                    var me = [],
                      Ae = e.options.tabSize,
                      Se = Ke(Ce(o, n.line).text, n.ch, Ae),
                      Re = Ke(Ce(o, pe.line).text, pe.ch, Ae),
                      Ze = Math.min(Se, Re),
                      yt = Math.max(Se, Re),
                      rt = Math.min(n.line, pe.line),
                      Pt = Math.min(e.lastLine(), Math.max(n.line, pe.line));
                    rt <= Pt;
                    rt++
                  ) {
                    var Bt = Ce(o, rt).text,
                      ht = Tt(Bt, Ze, Ae);
                    Ze == yt
                      ? me.push(new Ue(ie(rt, ht), ie(rt, ht)))
                      : Bt.length > ht &&
                        me.push(new Ue(ie(rt, ht), ie(rt, Tt(Bt, yt, Ae))));
                  }
                  (me.length || me.push(new Ue(n, n)),
                    St(o, Zt(e, h.ranges.slice(0, c).concat(me), c), {
                      origin: "*mouse",
                      scroll: !1,
                    }),
                    e.scrollIntoView(pe));
                } else {
                  var Ot = u,
                    wt = Vs(e, pe, r.unit),
                    pt = Ot.anchor,
                    dt;
                  Be(wt.anchor, pt) > 0
                    ? ((dt = wt.head), (pt = bi(Ot.from(), wt.anchor)))
                    : ((dt = wt.anchor), (pt = yi(Ot.to(), wt.head)));
                  var at = h.ranges.slice(0);
                  ((at[c] = ld(e, new Ue(Oe(o, pt), dt))),
                    St(o, Zt(e, at, c), ke));
                }
            }
            var O = i.wrapper.getBoundingClientRect(),
              Y = 0;
            function V(pe) {
              var me = ++Y,
                Ae = Or(e, pe, !0, r.unit == "rectangle");
              if (Ae)
                if (Be(Ae, A) != 0) {
                  ((e.curOp.focus = ze(J(e))), H(Ae));
                  var Se = Oi(i, o);
                  (Ae.line >= Se.to || Ae.line < Se.from) &&
                    setTimeout(
                      mt(e, function () {
                        Y == me && V(pe);
                      }),
                      150,
                    );
                } else {
                  var Re =
                    pe.clientY < O.top ? -20 : pe.clientY > O.bottom ? 20 : 0;
                  Re &&
                    setTimeout(
                      mt(e, function () {
                        Y == me && ((i.scroller.scrollTop += Re), V(pe));
                      }),
                      50,
                    );
                }
            }
            function oe(pe) {
              ((e.state.selectingText = !1),
                (Y = 1 / 0),
                pe && (Ee(pe), i.input.focus()),
                xe(i.wrapper.ownerDocument, "mousemove", de),
                xe(i.wrapper.ownerDocument, "mouseup", ge),
                (o.history.lastSelOrigin = null));
            }
            var de = mt(e, function (pe) {
                pe.buttons === 0 || !kt(pe) ? oe(pe) : V(pe);
              }),
              ge = mt(e, oe);
            ((e.state.selectingText = ge),
              N(i.wrapper.ownerDocument, "mousemove", de),
              N(i.wrapper.ownerDocument, "mouseup", ge));
          }
          function ld(e, t) {
            var n = t.anchor,
              r = t.head,
              i = Ce(e.doc, n.line);
            if (Be(n, r) == 0 && n.sticky == r.sticky) return t;
            var o = F(i);
            if (!o) return t;
            var u = z(o, n.ch, n.sticky),
              c = o[u];
            if (c.from != n.ch && c.to != n.ch) return t;
            var h = u + ((c.from == n.ch) == (c.level != 1) ? 0 : 1);
            if (h == 0 || h == o.length) return t;
            var v;
            if (r.line != n.line)
              v = (r.line - n.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
            else {
              var k = z(o, r.ch, r.sticky),
                A = k - u || (r.ch - n.ch) * (c.level == 1 ? -1 : 1);
              k == h - 1 || k == h ? (v = A < 0) : (v = A > 0);
            }
            var H = o[h + (v ? -1 : 0)],
              O = v == (H.level == 1),
              Y = O ? H.from : H.to,
              V = O ? "after" : "before";
            return n.ch == Y && n.sticky == V
              ? t
              : new Ue(new ie(n.line, Y, V), r);
          }
          function eu(e, t, n, r) {
            var i, o;
            if (t.touches)
              ((i = t.touches[0].clientX), (o = t.touches[0].clientY));
            else
              try {
                ((i = t.clientX), (o = t.clientY));
              } catch {
                return !1;
              }
            if (
              i >= Math.floor(e.display.gutters.getBoundingClientRect().right)
            )
              return !1;
            r && Ee(t);
            var u = e.display,
              c = u.lineDiv.getBoundingClientRect();
            if (o > c.bottom || !Me(e, n)) return Ye(t);
            o -= c.top - u.viewOffset;
            for (var h = 0; h < e.display.gutterSpecs.length; ++h) {
              var v = u.gutters.childNodes[h];
              if (v && v.getBoundingClientRect().right >= i) {
                var k = _r(e.doc, o),
                  A = e.display.gutterSpecs[h];
                return (ye(e, n, e, k, A.className, t), Ye(t));
              }
            }
          }
          function so(e, t) {
            return eu(e, t, "gutterClick", !0);
          }
          function tu(e, t) {
            ur(e.display, t) ||
              sd(e, t) ||
              se(e, t, "contextmenu") ||
              qe ||
              e.display.input.onContextMenu(t);
          }
          function sd(e, t) {
            return Me(e, "gutterContextMenu")
              ? eu(e, t, "gutterContextMenu", !1)
              : !1;
          }
          function ru(e) {
            ((e.display.wrapper.className =
              e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
              e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
              Pn(e));
          }
          var yn = {
              toString: function () {
                return "CodeMirror.Init";
              },
            },
            nu = {},
            $i = {};
          function ud(e) {
            var t = e.optionHandlers;
            function n(r, i, o, u) {
              ((e.defaults[r] = i),
                o &&
                  (t[r] = u
                    ? function (c, h, v) {
                        v != yn && o(c, h, v);
                      }
                    : o));
            }
            ((e.defineOption = n),
              (e.Init = yn),
              n(
                "value",
                "",
                function (r, i) {
                  return r.setValue(i);
                },
                !0,
              ),
              n(
                "mode",
                null,
                function (r, i) {
                  ((r.doc.modeOption = i), Qa(r));
                },
                !0,
              ),
              n("indentUnit", 2, Qa, !0),
              n("indentWithTabs", !1),
              n("smartIndent", !0),
              n(
                "tabSize",
                4,
                function (r) {
                  ($n(r), Pn(r), _t(r));
                },
                !0,
              ),
              n("lineSeparator", null, function (r, i) {
                if (((r.doc.lineSep = i), !!i)) {
                  var o = [],
                    u = r.doc.first;
                  r.doc.iter(function (h) {
                    for (var v = 0; ; ) {
                      var k = h.text.indexOf(i, v);
                      if (k == -1) break;
                      ((v = k + i.length), o.push(ie(u, k)));
                    }
                    u++;
                  });
                  for (var c = o.length - 1; c >= 0; c--)
                    gn(r.doc, i, o[c], ie(o[c].line, o[c].ch + i.length));
                }
              }),
              n(
                "specialChars",
                /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
                function (r, i, o) {
                  ((r.state.specialChars = new RegExp(
                    i.source + (i.test("	") ? "" : "|	"),
                    "g",
                  )),
                    o != yn && r.refresh());
                },
              ),
              n(
                "specialCharPlaceholder",
                Hc,
                function (r) {
                  return r.refresh();
                },
                !0,
              ),
              n("electricChars", !0),
              n(
                "inputStyle",
                G ? "contenteditable" : "textarea",
                function () {
                  throw new Error(
                    "inputStyle can not (yet) be changed in a running editor",
                  );
                },
                !0,
              ),
              n(
                "spellcheck",
                !1,
                function (r, i) {
                  return (r.getInputField().spellcheck = i);
                },
                !0,
              ),
              n(
                "autocorrect",
                !1,
                function (r, i) {
                  return (r.getInputField().autocorrect = i);
                },
                !0,
              ),
              n(
                "autocapitalize",
                !1,
                function (r, i) {
                  return (r.getInputField().autocapitalize = i);
                },
                !0,
              ),
              n("rtlMoveVisually", !ee),
              n("wholeLineUpdateBefore", !0),
              n(
                "theme",
                "default",
                function (r) {
                  (ru(r), Kn(r));
                },
                !0,
              ),
              n("keyMap", "default", function (r, i, o) {
                var u = Gi(i),
                  c = o != yn && Gi(o);
                (c && c.detach && c.detach(r, u),
                  u.attach && u.attach(r, c || null));
              }),
              n("extraKeys", null),
              n("configureMouse", null),
              n("lineWrapping", !1, cd, !0),
              n(
                "gutters",
                [],
                function (r, i) {
                  ((r.display.gutterSpecs = Za(i, r.options.lineNumbers)),
                    Kn(r));
                },
                !0,
              ),
              n(
                "fixedGutter",
                !0,
                function (r, i) {
                  ((r.display.gutters.style.left = i
                    ? Ha(r.display) + "px"
                    : "0"),
                    r.refresh());
                },
                !0,
              ),
              n(
                "coverGutterNextToScrollbar",
                !1,
                function (r) {
                  return cn(r);
                },
                !0,
              ),
              n(
                "scrollbarStyle",
                "native",
                function (r) {
                  (as(r),
                    cn(r),
                    r.display.scrollbars.setScrollTop(r.doc.scrollTop),
                    r.display.scrollbars.setScrollLeft(r.doc.scrollLeft));
                },
                !0,
              ),
              n(
                "lineNumbers",
                !1,
                function (r, i) {
                  ((r.display.gutterSpecs = Za(r.options.gutters, i)), Kn(r));
                },
                !0,
              ),
              n("firstLineNumber", 1, Kn, !0),
              n(
                "lineNumberFormatter",
                function (r) {
                  return r;
                },
                Kn,
                !0,
              ),
              n("showCursorWhenSelecting", !1, zn, !0),
              n("resetSelectionOnContextMenu", !0),
              n("lineWiseCopyCut", !0),
              n("pasteLinesPerSelection", !0),
              n("selectionsMayTouch", !1),
              n("readOnly", !1, function (r, i) {
                (i == "nocursor" && (un(r), r.display.input.blur()),
                  r.display.input.readOnlyChanged(i));
              }),
              n("screenReaderLabel", null, function (r, i) {
                ((i = i === "" ? null : i),
                  r.display.input.screenReaderLabelChanged(i));
              }),
              n(
                "disableInput",
                !1,
                function (r, i) {
                  i || r.display.input.reset();
                },
                !0,
              ),
              n("dragDrop", !0, fd),
              n("allowDropFileTypes", null),
              n("cursorBlinkRate", 530),
              n("cursorScrollMargin", 0),
              n("cursorHeight", 1, zn, !0),
              n("singleCursorHeightPerLine", !0, zn, !0),
              n("workTime", 100),
              n("workDelay", 100),
              n("flattenSpans", !0, $n, !0),
              n("addModeClass", !1, $n, !0),
              n("pollInterval", 100),
              n("undoDepth", 200, function (r, i) {
                return (r.doc.history.undoDepth = i);
              }),
              n("historyEventDelay", 1250),
              n(
                "viewportMargin",
                10,
                function (r) {
                  return r.refresh();
                },
                !0,
              ),
              n("maxHighlightLength", 1e4, $n, !0),
              n("moveInputWithCursor", !0, function (r, i) {
                i || r.display.input.resetPosition();
              }),
              n("tabindex", null, function (r, i) {
                return (r.display.input.getField().tabIndex = i || "");
              }),
              n("autofocus", null),
              n(
                "direction",
                "ltr",
                function (r, i) {
                  return r.doc.setDirection(i);
                },
                !0,
              ),
              n("phrases", null));
          }
          function fd(e, t, n) {
            var r = n && n != yn;
            if (!t != !r) {
              var i = e.display.dragFunctions,
                o = t ? N : xe;
              (o(e.display.scroller, "dragstart", i.start),
                o(e.display.scroller, "dragenter", i.enter),
                o(e.display.scroller, "dragover", i.over),
                o(e.display.scroller, "dragleave", i.leave),
                o(e.display.scroller, "drop", i.drop));
            }
          }
          function cd(e) {
            (e.options.lineWrapping
              ? (nt(e.display.wrapper, "CodeMirror-wrap"),
                (e.display.sizer.style.minWidth = ""),
                (e.display.sizerWidth = null))
              : (Le(e.display.wrapper, "CodeMirror-wrap"), Fa(e)),
              Pa(e),
              _t(e),
              Pn(e),
              setTimeout(function () {
                return cn(e);
              }, 100));
          }
          function et(e, t) {
            var n = this;
            if (!(this instanceof et)) return new et(e, t);
            ((this.options = t = t ? Qe(t) : {}), Qe(nu, t, !1));
            var r = t.value;
            (typeof r == "string"
              ? (r = new Mt(r, t.mode, null, t.lineSeparator, t.direction))
              : t.mode && (r.modeOption = t.mode),
              (this.doc = r));
            var i = new et.inputStyles[t.inputStyle](this),
              o = (this.display = new kh(e, r, i, t));
            ((o.wrapper.CodeMirror = this),
              ru(this),
              t.lineWrapping &&
                (this.display.wrapper.className += " CodeMirror-wrap"),
              as(this),
              (this.state = {
                keyMaps: [],
                overlays: [],
                modeGen: 0,
                overwrite: !1,
                delayingBlurEvent: !1,
                focused: !1,
                suppressEdits: !1,
                pasteIncoming: -1,
                cutIncoming: -1,
                selectingText: !1,
                draggingText: !1,
                highlight: new Xe(),
                keySeq: null,
                specialChars: null,
              }),
              t.autofocus && !G && o.input.focus(),
              C &&
                L < 11 &&
                setTimeout(function () {
                  return n.display.input.reset(!0);
                }, 20),
              hd(this),
              Uh(),
              Hr(this),
              (this.curOp.forceUpdate = !0),
              gs(this, r),
              (t.autofocus && !G) || this.hasFocus()
                ? setTimeout(function () {
                    n.hasFocus() && !n.state.focused && Ua(n);
                  }, 20)
                : un(this));
            for (var u in $i) $i.hasOwnProperty(u) && $i[u](this, t[u], yn);
            (ss(this), t.finishInit && t.finishInit(this));
            for (var c = 0; c < uo.length; ++c) uo[c](this);
            (Pr(this),
              K &&
                t.lineWrapping &&
                getComputedStyle(o.lineDiv).textRendering ==
                  "optimizelegibility" &&
                (o.lineDiv.style.textRendering = "auto"));
          }
          ((et.defaults = nu), (et.optionHandlers = $i));
          function hd(e) {
            var t = e.display;
            (N(t.scroller, "mousedown", mt(e, Qs)),
              C && L < 11
                ? N(
                    t.scroller,
                    "dblclick",
                    mt(e, function (h) {
                      if (!se(e, h)) {
                        var v = Or(e, h);
                        if (!(!v || so(e, h) || ur(e.display, h))) {
                          Ee(h);
                          var k = e.findWordAt(v);
                          zi(e.doc, k.anchor, k.head);
                        }
                      }
                    }),
                  )
                : N(t.scroller, "dblclick", function (h) {
                    return se(e, h) || Ee(h);
                  }),
              N(t.scroller, "contextmenu", function (h) {
                return tu(e, h);
              }),
              N(t.input.getField(), "contextmenu", function (h) {
                t.scroller.contains(h.target) || tu(e, h);
              }));
            var n,
              r = { end: 0 };
            function i() {
              t.activeTouch &&
                ((n = setTimeout(function () {
                  return (t.activeTouch = null);
                }, 1e3)),
                (r = t.activeTouch),
                (r.end = +new Date()));
            }
            function o(h) {
              if (h.touches.length != 1) return !1;
              var v = h.touches[0];
              return v.radiusX <= 1 && v.radiusY <= 1;
            }
            function u(h, v) {
              if (v.left == null) return !0;
              var k = v.left - h.left,
                A = v.top - h.top;
              return k * k + A * A > 400;
            }
            (N(t.scroller, "touchstart", function (h) {
              if (!se(e, h) && !o(h) && !so(e, h)) {
                (t.input.ensurePolled(), clearTimeout(n));
                var v = +new Date();
                ((t.activeTouch = {
                  start: v,
                  moved: !1,
                  prev: v - r.end <= 300 ? r : null,
                }),
                  h.touches.length == 1 &&
                    ((t.activeTouch.left = h.touches[0].pageX),
                    (t.activeTouch.top = h.touches[0].pageY)));
              }
            }),
              N(t.scroller, "touchmove", function () {
                t.activeTouch && (t.activeTouch.moved = !0);
              }),
              N(t.scroller, "touchend", function (h) {
                var v = t.activeTouch;
                if (
                  v &&
                  !ur(t, h) &&
                  v.left != null &&
                  !v.moved &&
                  new Date() - v.start < 300
                ) {
                  var k = e.coordsChar(t.activeTouch, "page"),
                    A;
                  (!v.prev || u(v, v.prev)
                    ? (A = new Ue(k, k))
                    : !v.prev.prev || u(v, v.prev.prev)
                      ? (A = e.findWordAt(k))
                      : (A = new Ue(
                          ie(k.line, 0),
                          Oe(e.doc, ie(k.line + 1, 0)),
                        )),
                    e.setSelection(A.anchor, A.head),
                    e.focus(),
                    Ee(h));
                }
                i();
              }),
              N(t.scroller, "touchcancel", i),
              N(t.scroller, "scroll", function () {
                t.scroller.clientHeight &&
                  (qn(e, t.scroller.scrollTop),
                  Nr(e, t.scroller.scrollLeft, !0),
                  ye(e, "scroll", e));
              }),
              N(t.scroller, "mousewheel", function (h) {
                return cs(e, h);
              }),
              N(t.scroller, "DOMMouseScroll", function (h) {
                return cs(e, h);
              }),
              N(t.wrapper, "scroll", function () {
                return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
              }),
              (t.dragFunctions = {
                enter: function (h) {
                  se(e, h) || ft(h);
                },
                over: function (h) {
                  se(e, h) || (qh(e, h), ft(h));
                },
                start: function (h) {
                  return Wh(e, h);
                },
                drop: mt(e, zh),
                leave: function (h) {
                  se(e, h) || Ps(e);
                },
              }));
            var c = t.input.getField();
            (N(c, "keyup", function (h) {
              return Zs.call(e, h);
            }),
              N(c, "keydown", mt(e, Ys)),
              N(c, "keypress", mt(e, Js)),
              N(c, "focus", function (h) {
                return Ua(e, h);
              }),
              N(c, "blur", function (h) {
                return un(e, h);
              }));
          }
          var uo = [];
          et.defineInitHook = function (e) {
            return uo.push(e);
          };
          function oi(e, t, n, r) {
            var i = e.doc,
              o;
            (n == null && (n = "add"),
              n == "smart" &&
                (i.mode.indent ? (o = On(e, t).state) : (n = "prev")));
            var u = e.options.tabSize,
              c = Ce(i, t),
              h = Ke(c.text, null, u);
            c.stateAfter && (c.stateAfter = null);
            var v = c.text.match(/^\s*/)[0],
              k;
            if (!r && !/\S/.test(c.text)) ((k = 0), (n = "not"));
            else if (
              n == "smart" &&
              ((k = i.mode.indent(o, c.text.slice(v.length), c.text)),
              k == Ve || k > 150)
            ) {
              if (!r) return;
              n = "prev";
            }
            (n == "prev"
              ? t > i.first
                ? (k = Ke(Ce(i, t - 1).text, null, u))
                : (k = 0)
              : n == "add"
                ? (k = h + e.options.indentUnit)
                : n == "subtract"
                  ? (k = h - e.options.indentUnit)
                  : typeof n == "number" && (k = h + n),
              (k = Math.max(0, k)));
            var A = "",
              H = 0;
            if (e.options.indentWithTabs)
              for (var O = Math.floor(k / u); O; --O) ((H += u), (A += "	"));
            if ((H < k && (A += zt(k - H)), A != v))
              return (
                gn(i, A, ie(t, 0), ie(t, v.length), "+input"),
                (c.stateAfter = null),
                !0
              );
            for (var Y = 0; Y < i.sel.ranges.length; Y++) {
              var V = i.sel.ranges[Y];
              if (V.head.line == t && V.head.ch < v.length) {
                var oe = ie(t, v.length);
                ro(i, Y, new Ue(oe, oe));
                break;
              }
            }
          }
          var Jt = null;
          function Xi(e) {
            Jt = e;
          }
          function fo(e, t, n, r, i) {
            var o = e.doc;
            ((e.display.shift = !1), r || (r = o.sel));
            var u = +new Date() - 200,
              c = i == "paste" || e.state.pasteIncoming > u,
              h = Mn(t),
              v = null;
            if (c && r.ranges.length > 1)
              if (
                Jt &&
                Jt.text.join(`
`) == t
              ) {
                if (r.ranges.length % Jt.text.length == 0) {
                  v = [];
                  for (var k = 0; k < Jt.text.length; k++)
                    v.push(o.splitLines(Jt.text[k]));
                }
              } else
                h.length == r.ranges.length &&
                  e.options.pasteLinesPerSelection &&
                  (v = ut(h, function (de) {
                    return [de];
                  }));
            for (
              var A = e.curOp.updateInput, H = r.ranges.length - 1;
              H >= 0;
              H--
            ) {
              var O = r.ranges[H],
                Y = O.from(),
                V = O.to();
              O.empty() &&
                (n && n > 0
                  ? (Y = ie(Y.line, Y.ch - n))
                  : e.state.overwrite && !c
                    ? (V = ie(
                        V.line,
                        Math.min(
                          Ce(o, V.line).text.length,
                          V.ch + be(h).length,
                        ),
                      ))
                    : c &&
                      Jt &&
                      Jt.lineWise &&
                      Jt.text.join(`
`) ==
                        h.join(`
`) &&
                      (Y = V = ie(Y.line, 0)));
              var oe = {
                from: Y,
                to: V,
                text: v ? v[H % v.length] : h,
                origin:
                  i ||
                  (c ? "paste" : e.state.cutIncoming > u ? "cut" : "+input"),
              };
              (pn(e.doc, oe), vt(e, "inputRead", e, oe));
            }
            (t && !c && au(e, t),
              fn(e),
              e.curOp.updateInput < 2 && (e.curOp.updateInput = A),
              (e.curOp.typing = !0),
              (e.state.pasteIncoming = e.state.cutIncoming = -1));
          }
          function iu(e, t) {
            var n = e.clipboardData && e.clipboardData.getData("Text");
            if (n)
              return (
                e.preventDefault(),
                !t.isReadOnly() &&
                  !t.options.disableInput &&
                  t.hasFocus() &&
                  Ht(t, function () {
                    return fo(t, n, 0, null, "paste");
                  }),
                !0
              );
          }
          function au(e, t) {
            if (!(!e.options.electricChars || !e.options.smartIndent))
              for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                var i = n.ranges[r];
                if (
                  !(
                    i.head.ch > 100 ||
                    (r && n.ranges[r - 1].head.line == i.head.line)
                  )
                ) {
                  var o = e.getModeAt(i.head),
                    u = !1;
                  if (o.electricChars) {
                    for (var c = 0; c < o.electricChars.length; c++)
                      if (t.indexOf(o.electricChars.charAt(c)) > -1) {
                        u = oi(e, i.head.line, "smart");
                        break;
                      }
                  } else
                    o.electricInput &&
                      o.electricInput.test(
                        Ce(e.doc, i.head.line).text.slice(0, i.head.ch),
                      ) &&
                      (u = oi(e, i.head.line, "smart"));
                  u && vt(e, "electricInput", e, i.head.line);
                }
              }
          }
          function ou(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
              var i = e.doc.sel.ranges[r].head.line,
                o = { anchor: ie(i, 0), head: ie(i + 1, 0) };
              (n.push(o), t.push(e.getRange(o.anchor, o.head)));
            }
            return { text: t, ranges: n };
          }
          function co(e, t, n, r) {
            (e.setAttribute("autocorrect", n ? "on" : "off"),
              e.setAttribute("autocapitalize", r ? "on" : "off"),
              e.setAttribute("spellcheck", !!t));
          }
          function lu() {
            var e = R(
                "textarea",
                null,
                null,
                "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none",
              ),
              t = R(
                "div",
                [e],
                null,
                "overflow: hidden; position: relative; width: 3px; height: 0px;",
              );
            return (
              K ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
              W && (e.style.border = "1px solid black"),
              t
            );
          }
          function dd(e) {
            var t = e.optionHandlers,
              n = (e.helpers = {});
            ((e.prototype = {
              constructor: e,
              focus: function () {
                (Te(this).focus(), this.display.input.focus());
              },
              setOption: function (r, i) {
                var o = this.options,
                  u = o[r];
                (o[r] == i && r != "mode") ||
                  ((o[r] = i),
                  t.hasOwnProperty(r) && mt(this, t[r])(this, i, u),
                  ye(this, "optionChange", this, r));
              },
              getOption: function (r) {
                return this.options[r];
              },
              getDoc: function () {
                return this.doc;
              },
              addKeyMap: function (r, i) {
                this.state.keyMaps[i ? "push" : "unshift"](Gi(r));
              },
              removeKeyMap: function (r) {
                for (var i = this.state.keyMaps, o = 0; o < i.length; ++o)
                  if (i[o] == r || i[o].name == r) return (i.splice(o, 1), !0);
              },
              addOverlay: Ft(function (r, i) {
                var o = r.token ? r : e.getMode(this.options, r);
                if (o.startState)
                  throw new Error("Overlays may not be stateful.");
                (jt(
                  this.state.overlays,
                  {
                    mode: o,
                    modeSpec: r,
                    opaque: i && i.opaque,
                    priority: (i && i.priority) || 0,
                  },
                  function (u) {
                    return u.priority;
                  },
                ),
                  this.state.modeGen++,
                  _t(this));
              }),
              removeOverlay: Ft(function (r) {
                for (var i = this.state.overlays, o = 0; o < i.length; ++o) {
                  var u = i[o].modeSpec;
                  if (u == r || (typeof r == "string" && u.name == r)) {
                    (i.splice(o, 1), this.state.modeGen++, _t(this));
                    return;
                  }
                }
              }),
              indentLine: Ft(function (r, i, o) {
                (typeof i != "string" &&
                  typeof i != "number" &&
                  (i == null
                    ? (i = this.options.smartIndent ? "smart" : "prev")
                    : (i = i ? "add" : "subtract")),
                  Bn(this.doc, r) && oi(this, r, i, o));
              }),
              indentSelection: Ft(function (r) {
                for (
                  var i = this.doc.sel.ranges, o = -1, u = 0;
                  u < i.length;
                  u++
                ) {
                  var c = i[u];
                  if (c.empty())
                    c.head.line > o &&
                      (oi(this, c.head.line, r, !0),
                      (o = c.head.line),
                      u == this.doc.sel.primIndex && fn(this));
                  else {
                    var h = c.from(),
                      v = c.to(),
                      k = Math.max(o, h.line);
                    o = Math.min(this.lastLine(), v.line - (v.ch ? 0 : 1)) + 1;
                    for (var A = k; A < o; ++A) oi(this, A, r);
                    var H = this.doc.sel.ranges;
                    h.ch == 0 &&
                      i.length == H.length &&
                      H[u].from().ch > 0 &&
                      ro(this.doc, u, new Ue(h, H[u].to()), lt);
                  }
                }
              }),
              getTokenAt: function (r, i) {
                return ml(this, r, i);
              },
              getLineTokens: function (r, i) {
                return ml(this, ie(r), i, !0);
              },
              getTokenTypeAt: function (r) {
                r = Oe(this.doc, r);
                var i = pl(this, Ce(this.doc, r.line)),
                  o = 0,
                  u = (i.length - 1) / 2,
                  c = r.ch,
                  h;
                if (c == 0) h = i[2];
                else
                  for (;;) {
                    var v = (o + u) >> 1;
                    if ((v ? i[v * 2 - 1] : 0) >= c) u = v;
                    else if (i[v * 2 + 1] < c) o = v + 1;
                    else {
                      h = i[v * 2 + 2];
                      break;
                    }
                  }
                var k = h ? h.indexOf("overlay ") : -1;
                return k < 0 ? h : k == 0 ? null : h.slice(0, k - 1);
              },
              getModeAt: function (r) {
                var i = this.doc.mode;
                return i.innerMode
                  ? e.innerMode(i, this.getTokenAt(r).state).mode
                  : i;
              },
              getHelper: function (r, i) {
                return this.getHelpers(r, i)[0];
              },
              getHelpers: function (r, i) {
                var o = [];
                if (!n.hasOwnProperty(i)) return o;
                var u = n[i],
                  c = this.getModeAt(r);
                if (typeof c[i] == "string") u[c[i]] && o.push(u[c[i]]);
                else if (c[i])
                  for (var h = 0; h < c[i].length; h++) {
                    var v = u[c[i][h]];
                    v && o.push(v);
                  }
                else
                  c.helperType && u[c.helperType]
                    ? o.push(u[c.helperType])
                    : u[c.name] && o.push(u[c.name]);
                for (var k = 0; k < u._global.length; k++) {
                  var A = u._global[k];
                  A.pred(c, this) && He(o, A.val) == -1 && o.push(A.val);
                }
                return o;
              },
              getStateAfter: function (r, i) {
                var o = this.doc;
                return (
                  (r = cl(o, r ?? o.first + o.size - 1)),
                  On(this, r + 1, i).state
                );
              },
              cursorCoords: function (r, i) {
                var o,
                  u = this.doc.sel.primary();
                return (
                  r == null
                    ? (o = u.head)
                    : typeof r == "object"
                      ? (o = Oe(this.doc, r))
                      : (o = r ? u.from() : u.to()),
                  Yt(this, o, i || "page")
                );
              },
              charCoords: function (r, i) {
                return Ti(this, Oe(this.doc, r), i || "page");
              },
              coordsChar: function (r, i) {
                return (
                  (r = Kl(this, r, i || "page")),
                  Ia(this, r.left, r.top)
                );
              },
              lineAtHeight: function (r, i) {
                return (
                  (r = Kl(this, { top: r, left: 0 }, i || "page").top),
                  _r(this.doc, r + this.display.viewOffset)
                );
              },
              heightAtLine: function (r, i, o) {
                var u = !1,
                  c;
                if (typeof r == "number") {
                  var h = this.doc.first + this.doc.size - 1;
                  (r < this.doc.first
                    ? (r = this.doc.first)
                    : r > h && ((r = h), (u = !0)),
                    (c = Ce(this.doc, r)));
                } else c = r;
                return (
                  Li(this, c, { top: 0, left: 0 }, i || "page", o || u).top +
                  (u ? this.doc.height - sr(c) : 0)
                );
              },
              defaultTextHeight: function () {
                return ln(this.display);
              },
              defaultCharWidth: function () {
                return sn(this.display);
              },
              getViewport: function () {
                return { from: this.display.viewFrom, to: this.display.viewTo };
              },
              addWidget: function (r, i, o, u, c) {
                var h = this.display;
                r = Yt(this, Oe(this.doc, r));
                var v = r.bottom,
                  k = r.left;
                if (
                  ((i.style.position = "absolute"),
                  i.setAttribute("cm-ignore-events", "true"),
                  this.display.input.setUneditable(i),
                  h.sizer.appendChild(i),
                  u == "over")
                )
                  v = r.top;
                else if (u == "above" || u == "near") {
                  var A = Math.max(h.wrapper.clientHeight, this.doc.height),
                    H = Math.max(h.sizer.clientWidth, h.lineSpace.clientWidth);
                  ((u == "above" || r.bottom + i.offsetHeight > A) &&
                  r.top > i.offsetHeight
                    ? (v = r.top - i.offsetHeight)
                    : r.bottom + i.offsetHeight <= A && (v = r.bottom),
                    k + i.offsetWidth > H && (k = H - i.offsetWidth));
                }
                ((i.style.top = v + "px"),
                  (i.style.left = i.style.right = ""),
                  c == "right"
                    ? ((k = h.sizer.clientWidth - i.offsetWidth),
                      (i.style.right = "0px"))
                    : (c == "left"
                        ? (k = 0)
                        : c == "middle" &&
                          (k = (h.sizer.clientWidth - i.offsetWidth) / 2),
                      (i.style.left = k + "px")),
                  o &&
                    fh(this, {
                      left: k,
                      top: v,
                      right: k + i.offsetWidth,
                      bottom: v + i.offsetHeight,
                    }));
              },
              triggerOnKeyDown: Ft(Ys),
              triggerOnKeyPress: Ft(Js),
              triggerOnKeyUp: Zs,
              triggerOnMouseDown: Ft(Qs),
              execCommand: function (r) {
                if (ri.hasOwnProperty(r)) return ri[r].call(null, this);
              },
              triggerElectric: Ft(function (r) {
                au(this, r);
              }),
              findPosH: function (r, i, o, u) {
                var c = 1;
                i < 0 && ((c = -1), (i = -i));
                for (
                  var h = Oe(this.doc, r), v = 0;
                  v < i && ((h = ho(this.doc, h, c, o, u)), !h.hitSide);
                  ++v
                );
                return h;
              },
              moveH: Ft(function (r, i) {
                var o = this;
                this.extendSelectionsBy(function (u) {
                  return o.display.shift || o.doc.extend || u.empty()
                    ? ho(o.doc, u.head, r, i, o.options.rtlMoveVisually)
                    : r < 0
                      ? u.from()
                      : u.to();
                }, Ct);
              }),
              deleteH: Ft(function (r, i) {
                var o = this.doc.sel,
                  u = this.doc;
                o.somethingSelected()
                  ? u.replaceSelection("", null, "+delete")
                  : xn(this, function (c) {
                      var h = ho(u, c.head, r, i, !1);
                      return r < 0
                        ? { from: h, to: c.head }
                        : { from: c.head, to: h };
                    });
              }),
              findPosV: function (r, i, o, u) {
                var c = 1,
                  h = u;
                i < 0 && ((c = -1), (i = -i));
                for (var v = Oe(this.doc, r), k = 0; k < i; ++k) {
                  var A = Yt(this, v, "div");
                  if (
                    (h == null ? (h = A.left) : (A.left = h),
                    (v = su(this, A, c, o)),
                    v.hitSide)
                  )
                    break;
                }
                return v;
              },
              moveV: Ft(function (r, i) {
                var o = this,
                  u = this.doc,
                  c = [],
                  h =
                    !this.display.shift &&
                    !u.extend &&
                    u.sel.somethingSelected();
                if (
                  (u.extendSelectionsBy(function (k) {
                    if (h) return r < 0 ? k.from() : k.to();
                    var A = Yt(o, k.head, "div");
                    (k.goalColumn != null && (A.left = k.goalColumn),
                      c.push(A.left));
                    var H = su(o, A, r, i);
                    return (
                      i == "page" &&
                        k == u.sel.primary() &&
                        Ga(o, Ti(o, H, "div").top - A.top),
                      H
                    );
                  }, Ct),
                  c.length)
                )
                  for (var v = 0; v < u.sel.ranges.length; v++)
                    u.sel.ranges[v].goalColumn = c[v];
              }),
              findWordAt: function (r) {
                var i = this.doc,
                  o = Ce(i, r.line).text,
                  u = r.ch,
                  c = r.ch;
                if (o) {
                  var h = this.getHelper(r, "wordChars");
                  (r.sticky == "before" || c == o.length) && u ? --u : ++c;
                  for (
                    var v = o.charAt(u),
                      k = b(v, h)
                        ? function (A) {
                            return b(A, h);
                          }
                        : /\s/.test(v)
                          ? function (A) {
                              return /\s/.test(A);
                            }
                          : function (A) {
                              return !/\s/.test(A) && !b(A);
                            };
                    u > 0 && k(o.charAt(u - 1));
                  )
                    --u;
                  for (; c < o.length && k(o.charAt(c)); ) ++c;
                }
                return new Ue(ie(r.line, u), ie(r.line, c));
              },
              toggleOverwrite: function (r) {
                (r != null && r == this.state.overwrite) ||
                  ((this.state.overwrite = !this.state.overwrite)
                    ? nt(this.display.cursorDiv, "CodeMirror-overwrite")
                    : Le(this.display.cursorDiv, "CodeMirror-overwrite"),
                  ye(this, "overwriteToggle", this, this.state.overwrite));
              },
              hasFocus: function () {
                return this.display.input.getField() == ze(J(this));
              },
              isReadOnly: function () {
                return !!(this.options.readOnly || this.doc.cantEdit);
              },
              scrollTo: Ft(function (r, i) {
                Wn(this, r, i);
              }),
              getScrollInfo: function () {
                var r = this.display.scroller;
                return {
                  left: r.scrollLeft,
                  top: r.scrollTop,
                  height: r.scrollHeight - nr(this) - this.display.barHeight,
                  width: r.scrollWidth - nr(this) - this.display.barWidth,
                  clientHeight: _a(this),
                  clientWidth: Mr(this),
                };
              },
              scrollIntoView: Ft(function (r, i) {
                (r == null
                  ? ((r = { from: this.doc.sel.primary().head, to: null }),
                    i == null && (i = this.options.cursorScrollMargin))
                  : typeof r == "number"
                    ? (r = { from: ie(r, 0), to: null })
                    : r.from == null && (r = { from: r, to: null }),
                  r.to || (r.to = r.from),
                  (r.margin = i || 0),
                  r.from.line != null
                    ? ch(this, r)
                    : ts(this, r.from, r.to, r.margin));
              }),
              setSize: Ft(function (r, i) {
                var o = this,
                  u = function (h) {
                    return typeof h == "number" || /^\d+$/.test(String(h))
                      ? h + "px"
                      : h;
                  };
                (r != null && (this.display.wrapper.style.width = u(r)),
                  i != null && (this.display.wrapper.style.height = u(i)),
                  this.options.lineWrapping && Ul(this));
                var c = this.display.viewFrom;
                (this.doc.iter(c, this.display.viewTo, function (h) {
                  if (h.widgets) {
                    for (var v = 0; v < h.widgets.length; v++)
                      if (h.widgets[v].noHScroll) {
                        vr(o, c, "widget");
                        break;
                      }
                  }
                  ++c;
                }),
                  (this.curOp.forceUpdate = !0),
                  ye(this, "refresh", this));
              }),
              operation: function (r) {
                return Ht(this, r);
              },
              startOperation: function () {
                return Hr(this);
              },
              endOperation: function () {
                return Pr(this);
              },
              refresh: Ft(function () {
                var r = this.display.cachedTextHeight;
                (_t(this),
                  (this.curOp.forceUpdate = !0),
                  Pn(this),
                  Wn(this, this.doc.scrollLeft, this.doc.scrollTop),
                  Xa(this.display),
                  (r == null ||
                    Math.abs(r - ln(this.display)) > 0.5 ||
                    this.options.lineWrapping) &&
                    Pa(this),
                  ye(this, "refresh", this));
              }),
              swapDoc: Ft(function (r) {
                var i = this.doc;
                return (
                  (i.cm = null),
                  this.state.selectingText && this.state.selectingText(),
                  gs(this, r),
                  Pn(this),
                  this.display.input.reset(),
                  Wn(this, r.scrollLeft, r.scrollTop),
                  (this.curOp.forceScroll = !0),
                  vt(this, "swapDoc", this, i),
                  i
                );
              }),
              phrase: function (r) {
                var i = this.options.phrases;
                return i && Object.prototype.hasOwnProperty.call(i, r)
                  ? i[r]
                  : r;
              },
              getInputField: function () {
                return this.display.input.getField();
              },
              getWrapperElement: function () {
                return this.display.wrapper;
              },
              getScrollerElement: function () {
                return this.display.scroller;
              },
              getGutterElement: function () {
                return this.display.gutters;
              },
            }),
              Ie(e),
              (e.registerHelper = function (r, i, o) {
                (n.hasOwnProperty(r) || (n[r] = e[r] = { _global: [] }),
                  (n[r][i] = o));
              }),
              (e.registerGlobalHelper = function (r, i, o, u) {
                (e.registerHelper(r, i, u),
                  n[r]._global.push({ pred: o, val: u }));
              }));
          }
          function ho(e, t, n, r, i) {
            var o = t,
              u = n,
              c = Ce(e, t.line),
              h = i && e.direction == "rtl" ? -n : n;
            function v() {
              var ge = t.line + h;
              return ge < e.first || ge >= e.first + e.size
                ? !1
                : ((t = new ie(ge, t.ch, t.sticky)), (c = Ce(e, ge)));
            }
            function k(ge) {
              var pe;
              if (r == "codepoint") {
                var me = c.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
                if (isNaN(me)) pe = null;
                else {
                  var Ae =
                    n > 0
                      ? me >= 55296 && me < 56320
                      : me >= 56320 && me < 57343;
                  pe = new ie(
                    t.line,
                    Math.max(
                      0,
                      Math.min(c.text.length, t.ch + n * (Ae ? 2 : 1)),
                    ),
                    -n,
                  );
                }
              } else i ? (pe = Xh(e.cm, c, t, n)) : (pe = io(c, t, n));
              if (pe == null)
                if (!ge && v()) t = ao(i, e.cm, c, t.line, h);
                else return !1;
              else t = pe;
              return !0;
            }
            if (r == "char" || r == "codepoint") k();
            else if (r == "column") k(!0);
            else if (r == "word" || r == "group")
              for (
                var A = null,
                  H = r == "group",
                  O = e.cm && e.cm.getHelper(t, "wordChars"),
                  Y = !0;
                !(n < 0 && !k(!Y));
                Y = !1
              ) {
                var V =
                    c.text.charAt(t.ch) ||
                    `
`,
                  oe = b(V, O)
                    ? "w"
                    : H &&
                        V ==
                          `
`
                      ? "n"
                      : !H || /\s/.test(V)
                        ? null
                        : "p";
                if ((H && !Y && !oe && (oe = "s"), A && A != oe)) {
                  n < 0 && ((n = 1), k(), (t.sticky = "after"));
                  break;
                }
                if ((oe && (A = oe), n > 0 && !k(!Y))) break;
              }
            var de = qi(e, t, o, u, !0);
            return (ba(o, de) && (de.hitSide = !0), de);
          }
          function su(e, t, n, r) {
            var i = e.doc,
              o = t.left,
              u;
            if (r == "page") {
              var c = Math.min(
                  e.display.wrapper.clientHeight,
                  Te(e).innerHeight || i(e).documentElement.clientHeight,
                ),
                h = Math.max(c - 0.5 * ln(e.display), 3);
              u = (n > 0 ? t.bottom : t.top) + n * h;
            } else r == "line" && (u = n > 0 ? t.bottom + 3 : t.top - 3);
            for (var v; (v = Ia(e, o, u)), !!v.outside; ) {
              if (n < 0 ? u <= 0 : u >= i.height) {
                v.hitSide = !0;
                break;
              }
              u += n * 5;
            }
            return v;
          }
          var Ge = function (e) {
            ((this.cm = e),
              (this.lastAnchorNode =
                this.lastAnchorOffset =
                this.lastFocusNode =
                this.lastFocusOffset =
                  null),
              (this.polling = new Xe()),
              (this.composing = null),
              (this.gracePeriod = !1),
              (this.readDOMTimeout = null));
          };
          ((Ge.prototype.init = function (e) {
            var t = this,
              n = this,
              r = n.cm,
              i = (n.div = e.lineDiv);
            ((i.contentEditable = !0),
              co(
                i,
                r.options.spellcheck,
                r.options.autocorrect,
                r.options.autocapitalize,
              ));
            function o(c) {
              for (var h = c.target; h; h = h.parentNode) {
                if (h == i) return !0;
                if (/\bCodeMirror-(?:line)?widget\b/.test(h.className)) break;
              }
              return !1;
            }
            (N(i, "paste", function (c) {
              !o(c) ||
                se(r, c) ||
                iu(c, r) ||
                (L <= 11 &&
                  setTimeout(
                    mt(r, function () {
                      return t.updateFromDOM();
                    }),
                    20,
                  ));
            }),
              N(i, "compositionstart", function (c) {
                t.composing = { data: c.data, done: !1 };
              }),
              N(i, "compositionupdate", function (c) {
                t.composing || (t.composing = { data: c.data, done: !1 });
              }),
              N(i, "compositionend", function (c) {
                t.composing &&
                  (c.data != t.composing.data && t.readFromDOMSoon(),
                  (t.composing.done = !0));
              }),
              N(i, "touchstart", function () {
                return n.forceCompositionEnd();
              }),
              N(i, "input", function () {
                t.composing || t.readFromDOMSoon();
              }));
            function u(c) {
              if (!(!o(c) || se(r, c))) {
                if (r.somethingSelected())
                  (Xi({ lineWise: !1, text: r.getSelections() }),
                    c.type == "cut" && r.replaceSelection("", null, "cut"));
                else if (r.options.lineWiseCopyCut) {
                  var h = ou(r);
                  (Xi({ lineWise: !0, text: h.text }),
                    c.type == "cut" &&
                      r.operation(function () {
                        (r.setSelections(h.ranges, 0, lt),
                          r.replaceSelection("", null, "cut"));
                      }));
                } else return;
                if (c.clipboardData) {
                  c.clipboardData.clearData();
                  var v = Jt.text.join(`
`);
                  if (
                    (c.clipboardData.setData("Text", v),
                    c.clipboardData.getData("Text") == v)
                  ) {
                    c.preventDefault();
                    return;
                  }
                }
                var k = lu(),
                  A = k.firstChild;
                (co(A),
                  r.display.lineSpace.insertBefore(
                    k,
                    r.display.lineSpace.firstChild,
                  ),
                  (A.value = Jt.text.join(`
`)));
                var H = ze(Pe(i));
                (T(A),
                  setTimeout(function () {
                    (r.display.lineSpace.removeChild(k),
                      H.focus(),
                      H == i && n.showPrimarySelection());
                  }, 50));
              }
            }
            (N(i, "copy", u), N(i, "cut", u));
          }),
            (Ge.prototype.screenReaderLabelChanged = function (e) {
              e
                ? this.div.setAttribute("aria-label", e)
                : this.div.removeAttribute("aria-label");
            }),
            (Ge.prototype.prepareSelection = function () {
              var e = Ql(this.cm, !1);
              return ((e.focus = ze(Pe(this.div)) == this.div), e);
            }),
            (Ge.prototype.showSelection = function (e, t) {
              !e ||
                !this.cm.display.view.length ||
                ((e.focus || t) && this.showPrimarySelection(),
                this.showMultipleSelections(e));
            }),
            (Ge.prototype.getSelection = function () {
              return this.cm.display.wrapper.ownerDocument.getSelection();
            }),
            (Ge.prototype.showPrimarySelection = function () {
              var e = this.getSelection(),
                t = this.cm,
                n = t.doc.sel.primary(),
                r = n.from(),
                i = n.to();
              if (
                t.display.viewTo == t.display.viewFrom ||
                r.line >= t.display.viewTo ||
                i.line < t.display.viewFrom
              ) {
                e.removeAllRanges();
                return;
              }
              var o = Yi(t, e.anchorNode, e.anchorOffset),
                u = Yi(t, e.focusNode, e.focusOffset);
              if (
                !(
                  o &&
                  !o.bad &&
                  u &&
                  !u.bad &&
                  Be(bi(o, u), r) == 0 &&
                  Be(yi(o, u), i) == 0
                )
              ) {
                var c = t.display.view,
                  h = (r.line >= t.display.viewFrom && uu(t, r)) || {
                    node: c[0].measure.map[2],
                    offset: 0,
                  },
                  v = i.line < t.display.viewTo && uu(t, i);
                if (!v) {
                  var k = c[c.length - 1].measure,
                    A = k.maps ? k.maps[k.maps.length - 1] : k.map;
                  v = {
                    node: A[A.length - 1],
                    offset: A[A.length - 2] - A[A.length - 3],
                  };
                }
                if (!h || !v) {
                  e.removeAllRanges();
                  return;
                }
                var H = e.rangeCount && e.getRangeAt(0),
                  O;
                try {
                  O = re(h.node, h.offset, v.offset, v.node);
                } catch {}
                (O &&
                  (!p && t.state.focused
                    ? (e.collapse(h.node, h.offset),
                      O.collapsed || (e.removeAllRanges(), e.addRange(O)))
                    : (e.removeAllRanges(), e.addRange(O)),
                  H && e.anchorNode == null
                    ? e.addRange(H)
                    : p && this.startGracePeriod()),
                  this.rememberSelection());
              }
            }),
            (Ge.prototype.startGracePeriod = function () {
              var e = this;
              (clearTimeout(this.gracePeriod),
                (this.gracePeriod = setTimeout(function () {
                  ((e.gracePeriod = !1),
                    e.selectionChanged() &&
                      e.cm.operation(function () {
                        return (e.cm.curOp.selectionChanged = !0);
                      }));
                }, 20)));
            }),
            (Ge.prototype.showMultipleSelections = function (e) {
              (Ne(this.cm.display.cursorDiv, e.cursors),
                Ne(this.cm.display.selectionDiv, e.selection));
            }),
            (Ge.prototype.rememberSelection = function () {
              var e = this.getSelection();
              ((this.lastAnchorNode = e.anchorNode),
                (this.lastAnchorOffset = e.anchorOffset),
                (this.lastFocusNode = e.focusNode),
                (this.lastFocusOffset = e.focusOffset));
            }),
            (Ge.prototype.selectionInEditor = function () {
              var e = this.getSelection();
              if (!e.rangeCount) return !1;
              var t = e.getRangeAt(0).commonAncestorContainer;
              return De(this.div, t);
            }),
            (Ge.prototype.focus = function () {
              this.cm.options.readOnly != "nocursor" &&
                ((!this.selectionInEditor() || ze(Pe(this.div)) != this.div) &&
                  this.showSelection(this.prepareSelection(), !0),
                this.div.focus());
            }),
            (Ge.prototype.blur = function () {
              this.div.blur();
            }),
            (Ge.prototype.getField = function () {
              return this.div;
            }),
            (Ge.prototype.supportsTouch = function () {
              return !0;
            }),
            (Ge.prototype.receivedFocus = function () {
              var e = this,
                t = this;
              this.selectionInEditor()
                ? setTimeout(function () {
                    return e.pollSelection();
                  }, 20)
                : Ht(this.cm, function () {
                    return (t.cm.curOp.selectionChanged = !0);
                  });
              function n() {
                t.cm.state.focused &&
                  (t.pollSelection(),
                  t.polling.set(t.cm.options.pollInterval, n));
              }
              this.polling.set(this.cm.options.pollInterval, n);
            }),
            (Ge.prototype.selectionChanged = function () {
              var e = this.getSelection();
              return (
                e.anchorNode != this.lastAnchorNode ||
                e.anchorOffset != this.lastAnchorOffset ||
                e.focusNode != this.lastFocusNode ||
                e.focusOffset != this.lastFocusOffset
              );
            }),
            (Ge.prototype.pollSelection = function () {
              if (
                !(
                  this.readDOMTimeout != null ||
                  this.gracePeriod ||
                  !this.selectionChanged()
                )
              ) {
                var e = this.getSelection(),
                  t = this.cm;
                if (
                  Z &&
                  j &&
                  this.cm.display.gutterSpecs.length &&
                  pd(e.anchorNode)
                ) {
                  (this.cm.triggerOnKeyDown({
                    type: "keydown",
                    keyCode: 8,
                    preventDefault: Math.abs,
                  }),
                    this.blur(),
                    this.focus());
                  return;
                }
                if (!this.composing) {
                  this.rememberSelection();
                  var n = Yi(t, e.anchorNode, e.anchorOffset),
                    r = Yi(t, e.focusNode, e.focusOffset);
                  n &&
                    r &&
                    Ht(t, function () {
                      (St(t.doc, xr(n, r), lt),
                        (n.bad || r.bad) && (t.curOp.selectionChanged = !0));
                    });
                }
              }
            }),
            (Ge.prototype.pollContent = function () {
              this.readDOMTimeout != null &&
                (clearTimeout(this.readDOMTimeout),
                (this.readDOMTimeout = null));
              var e = this.cm,
                t = e.display,
                n = e.doc.sel.primary(),
                r = n.from(),
                i = n.to();
              if (
                (r.ch == 0 &&
                  r.line > e.firstLine() &&
                  (r = ie(r.line - 1, Ce(e.doc, r.line - 1).length)),
                i.ch == Ce(e.doc, i.line).text.length &&
                  i.line < e.lastLine() &&
                  (i = ie(i.line + 1, 0)),
                r.line < t.viewFrom || i.line > t.viewTo - 1)
              )
                return !1;
              var o, u, c;
              r.line == t.viewFrom || (o = Ir(e, r.line)) == 0
                ? ((u = je(t.view[0].line)), (c = t.view[0].node))
                : ((u = je(t.view[o].line)),
                  (c = t.view[o - 1].node.nextSibling));
              var h = Ir(e, i.line),
                v,
                k;
              if (
                (h == t.view.length - 1
                  ? ((v = t.viewTo - 1), (k = t.lineDiv.lastChild))
                  : ((v = je(t.view[h + 1].line) - 1),
                    (k = t.view[h + 1].node.previousSibling)),
                !c)
              )
                return !1;
              for (
                var A = e.doc.splitLines(gd(e, c, k, u, v)),
                  H = Tr(e.doc, ie(u, 0), ie(v, Ce(e.doc, v).text.length));
                A.length > 1 && H.length > 1;
              )
                if (be(A) == be(H)) (A.pop(), H.pop(), v--);
                else if (A[0] == H[0]) (A.shift(), H.shift(), u++);
                else break;
              for (
                var O = 0,
                  Y = 0,
                  V = A[0],
                  oe = H[0],
                  de = Math.min(V.length, oe.length);
                O < de && V.charCodeAt(O) == oe.charCodeAt(O);
              )
                ++O;
              for (
                var ge = be(A),
                  pe = be(H),
                  me = Math.min(
                    ge.length - (A.length == 1 ? O : 0),
                    pe.length - (H.length == 1 ? O : 0),
                  );
                Y < me &&
                ge.charCodeAt(ge.length - Y - 1) ==
                  pe.charCodeAt(pe.length - Y - 1);
              )
                ++Y;
              if (A.length == 1 && H.length == 1 && u == r.line)
                for (
                  ;
                  O &&
                  O > r.ch &&
                  ge.charCodeAt(ge.length - Y - 1) ==
                    pe.charCodeAt(pe.length - Y - 1);
                )
                  (O--, Y++);
              ((A[A.length - 1] = ge
                .slice(0, ge.length - Y)
                .replace(/^\u200b+/, "")),
                (A[0] = A[0].slice(O).replace(/\u200b+$/, "")));
              var Ae = ie(u, O),
                Se = ie(v, H.length ? be(H).length - Y : 0);
              if (A.length > 1 || A[0] || Be(Ae, Se))
                return (gn(e.doc, A, Ae, Se, "+input"), !0);
            }),
            (Ge.prototype.ensurePolled = function () {
              this.forceCompositionEnd();
            }),
            (Ge.prototype.reset = function () {
              this.forceCompositionEnd();
            }),
            (Ge.prototype.forceCompositionEnd = function () {
              this.composing &&
                (clearTimeout(this.readDOMTimeout),
                (this.composing = null),
                this.updateFromDOM(),
                this.div.blur(),
                this.div.focus());
            }),
            (Ge.prototype.readFromDOMSoon = function () {
              var e = this;
              this.readDOMTimeout == null &&
                (this.readDOMTimeout = setTimeout(function () {
                  if (((e.readDOMTimeout = null), e.composing))
                    if (e.composing.done) e.composing = null;
                    else return;
                  e.updateFromDOM();
                }, 80));
            }),
            (Ge.prototype.updateFromDOM = function () {
              var e = this;
              (this.cm.isReadOnly() || !this.pollContent()) &&
                Ht(this.cm, function () {
                  return _t(e.cm);
                });
            }),
            (Ge.prototype.setUneditable = function (e) {
              e.contentEditable = "false";
            }),
            (Ge.prototype.onKeyPress = function (e) {
              e.charCode == 0 ||
                this.composing ||
                (e.preventDefault(),
                this.cm.isReadOnly() ||
                  mt(this.cm, fo)(
                    this.cm,
                    String.fromCharCode(
                      e.charCode == null ? e.keyCode : e.charCode,
                    ),
                    0,
                  ));
            }),
            (Ge.prototype.readOnlyChanged = function (e) {
              this.div.contentEditable = String(e != "nocursor");
            }),
            (Ge.prototype.onContextMenu = function () {}),
            (Ge.prototype.resetPosition = function () {}),
            (Ge.prototype.needsContentAttribute = !0));
          function uu(e, t) {
            var n = Ma(e, t.line);
            if (!n || n.hidden) return null;
            var r = Ce(e.doc, t.line),
              i = Hl(n, r, t.line),
              o = F(r, e.doc.direction),
              u = "left";
            if (o) {
              var c = z(o, t.ch);
              u = c % 2 ? "right" : "left";
            }
            var h = Wl(i.map, t.ch, u);
            return ((h.offset = h.collapse == "right" ? h.end : h.start), h);
          }
          function pd(e) {
            for (var t = e; t; t = t.parentNode)
              if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
            return !1;
          }
          function bn(e, t) {
            return (t && (e.bad = !0), e);
          }
          function gd(e, t, n, r, i) {
            var o = "",
              u = !1,
              c = e.doc.lineSeparator(),
              h = !1;
            function v(O) {
              return function (Y) {
                return Y.id == O;
              };
            }
            function k() {
              u && ((o += c), h && (o += c), (u = h = !1));
            }
            function A(O) {
              O && (k(), (o += O));
            }
            function H(O) {
              if (O.nodeType == 1) {
                var Y = O.getAttribute("cm-text");
                if (Y) {
                  A(Y);
                  return;
                }
                var V = O.getAttribute("cm-marker"),
                  oe;
                if (V) {
                  var de = e.findMarks(ie(r, 0), ie(i + 1, 0), v(+V));
                  de.length &&
                    (oe = de[0].find(0)) &&
                    A(Tr(e.doc, oe.from, oe.to).join(c));
                  return;
                }
                if (O.getAttribute("contenteditable") == "false") return;
                var ge = /^(pre|div|p|li|table|br)$/i.test(O.nodeName);
                if (!/^br$/i.test(O.nodeName) && O.textContent.length == 0)
                  return;
                ge && k();
                for (var pe = 0; pe < O.childNodes.length; pe++)
                  H(O.childNodes[pe]);
                (/^(pre|p)$/i.test(O.nodeName) && (h = !0), ge && (u = !0));
              } else
                O.nodeType == 3 &&
                  A(O.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
            }
            for (; H(t), t != n; ) ((t = t.nextSibling), (h = !1));
            return o;
          }
          function Yi(e, t, n) {
            var r;
            if (t == e.display.lineDiv) {
              if (((r = e.display.lineDiv.childNodes[n]), !r))
                return bn(e.clipPos(ie(e.display.viewTo - 1)), !0);
              ((t = null), (n = 0));
            } else
              for (r = t; ; r = r.parentNode) {
                if (!r || r == e.display.lineDiv) return null;
                if (r.parentNode && r.parentNode == e.display.lineDiv) break;
              }
            for (var i = 0; i < e.display.view.length; i++) {
              var o = e.display.view[i];
              if (o.node == r) return vd(o, t, n);
            }
          }
          function vd(e, t, n) {
            var r = e.text.firstChild,
              i = !1;
            if (!t || !De(r, t)) return bn(ie(je(e.line), 0), !0);
            if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
              var o = e.rest ? be(e.rest) : e.line;
              return bn(ie(je(o), o.text.length), i);
            }
            var u = t.nodeType == 3 ? t : null,
              c = t;
            for (
              !u &&
              t.childNodes.length == 1 &&
              t.firstChild.nodeType == 3 &&
              ((u = t.firstChild), n && (n = u.nodeValue.length));
              c.parentNode != r;
            )
              c = c.parentNode;
            var h = e.measure,
              v = h.maps;
            function k(oe, de, ge) {
              for (var pe = -1; pe < (v ? v.length : 0); pe++)
                for (
                  var me = pe < 0 ? h.map : v[pe], Ae = 0;
                  Ae < me.length;
                  Ae += 3
                ) {
                  var Se = me[Ae + 2];
                  if (Se == oe || Se == de) {
                    var Re = je(pe < 0 ? e.line : e.rest[pe]),
                      Ze = me[Ae] + ge;
                    return (
                      (ge < 0 || Se != oe) && (Ze = me[Ae + (ge ? 1 : 0)]),
                      ie(Re, Ze)
                    );
                  }
                }
            }
            var A = k(u, c, n);
            if (A) return bn(A, i);
            for (
              var H = c.nextSibling, O = u ? u.nodeValue.length - n : 0;
              H;
              H = H.nextSibling
            ) {
              if (((A = k(H, H.firstChild, 0)), A))
                return bn(ie(A.line, A.ch - O), i);
              O += H.textContent.length;
            }
            for (var Y = c.previousSibling, V = n; Y; Y = Y.previousSibling) {
              if (((A = k(Y, Y.firstChild, -1)), A))
                return bn(ie(A.line, A.ch + V), i);
              V += Y.textContent.length;
            }
          }
          var st = function (e) {
            ((this.cm = e),
              (this.prevInput = ""),
              (this.pollingFast = !1),
              (this.polling = new Xe()),
              (this.hasSelection = !1),
              (this.composing = null),
              (this.resetting = !1));
          };
          ((st.prototype.init = function (e) {
            var t = this,
              n = this,
              r = this.cm;
            this.createField(e);
            var i = this.textarea;
            (e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
              W && (i.style.width = "0px"),
              N(i, "input", function () {
                (C && L >= 9 && t.hasSelection && (t.hasSelection = null),
                  n.poll());
              }),
              N(i, "paste", function (u) {
                se(r, u) ||
                  iu(u, r) ||
                  ((r.state.pasteIncoming = +new Date()), n.fastPoll());
              }));
            function o(u) {
              if (!se(r, u)) {
                if (r.somethingSelected())
                  Xi({ lineWise: !1, text: r.getSelections() });
                else if (r.options.lineWiseCopyCut) {
                  var c = ou(r);
                  (Xi({ lineWise: !0, text: c.text }),
                    u.type == "cut"
                      ? r.setSelections(c.ranges, null, lt)
                      : ((n.prevInput = ""),
                        (i.value = c.text.join(`
`)),
                        T(i)));
                } else return;
                u.type == "cut" && (r.state.cutIncoming = +new Date());
              }
            }
            (N(i, "cut", o),
              N(i, "copy", o),
              N(e.scroller, "paste", function (u) {
                if (!(ur(e, u) || se(r, u))) {
                  if (!i.dispatchEvent) {
                    ((r.state.pasteIncoming = +new Date()), n.focus());
                    return;
                  }
                  var c = new Event("paste");
                  ((c.clipboardData = u.clipboardData), i.dispatchEvent(c));
                }
              }),
              N(e.lineSpace, "selectstart", function (u) {
                ur(e, u) || Ee(u);
              }),
              N(i, "compositionstart", function () {
                var u = r.getCursor("from");
                (n.composing && n.composing.range.clear(),
                  (n.composing = {
                    start: u,
                    range: r.markText(u, r.getCursor("to"), {
                      className: "CodeMirror-composing",
                    }),
                  }));
              }),
              N(i, "compositionend", function () {
                n.composing &&
                  (n.poll(), n.composing.range.clear(), (n.composing = null));
              }));
          }),
            (st.prototype.createField = function (e) {
              ((this.wrapper = lu()),
                (this.textarea = this.wrapper.firstChild));
              var t = this.cm.options;
              co(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize);
            }),
            (st.prototype.screenReaderLabelChanged = function (e) {
              e
                ? this.textarea.setAttribute("aria-label", e)
                : this.textarea.removeAttribute("aria-label");
            }),
            (st.prototype.prepareSelection = function () {
              var e = this.cm,
                t = e.display,
                n = e.doc,
                r = Ql(e);
              if (e.options.moveInputWithCursor) {
                var i = Yt(e, n.sel.primary().head, "div"),
                  o = t.wrapper.getBoundingClientRect(),
                  u = t.lineDiv.getBoundingClientRect();
                ((r.teTop = Math.max(
                  0,
                  Math.min(t.wrapper.clientHeight - 10, i.top + u.top - o.top),
                )),
                  (r.teLeft = Math.max(
                    0,
                    Math.min(
                      t.wrapper.clientWidth - 10,
                      i.left + u.left - o.left,
                    ),
                  )));
              }
              return r;
            }),
            (st.prototype.showSelection = function (e) {
              var t = this.cm,
                n = t.display;
              (Ne(n.cursorDiv, e.cursors),
                Ne(n.selectionDiv, e.selection),
                e.teTop != null &&
                  ((this.wrapper.style.top = e.teTop + "px"),
                  (this.wrapper.style.left = e.teLeft + "px")));
            }),
            (st.prototype.reset = function (e) {
              if (!(this.contextMenuPending || (this.composing && e))) {
                var t = this.cm;
                if (((this.resetting = !0), t.somethingSelected())) {
                  this.prevInput = "";
                  var n = t.getSelection();
                  ((this.textarea.value = n),
                    t.state.focused && T(this.textarea),
                    C && L >= 9 && (this.hasSelection = n));
                } else
                  e ||
                    ((this.prevInput = this.textarea.value = ""),
                    C && L >= 9 && (this.hasSelection = null));
                this.resetting = !1;
              }
            }),
            (st.prototype.getField = function () {
              return this.textarea;
            }),
            (st.prototype.supportsTouch = function () {
              return !1;
            }),
            (st.prototype.focus = function () {
              if (
                this.cm.options.readOnly != "nocursor" &&
                (!G || ze(Pe(this.textarea)) != this.textarea)
              )
                try {
                  this.textarea.focus();
                } catch {}
            }),
            (st.prototype.blur = function () {
              this.textarea.blur();
            }),
            (st.prototype.resetPosition = function () {
              this.wrapper.style.top = this.wrapper.style.left = 0;
            }),
            (st.prototype.receivedFocus = function () {
              this.slowPoll();
            }),
            (st.prototype.slowPoll = function () {
              var e = this;
              this.pollingFast ||
                this.polling.set(this.cm.options.pollInterval, function () {
                  (e.poll(), e.cm.state.focused && e.slowPoll());
                });
            }),
            (st.prototype.fastPoll = function () {
              var e = !1,
                t = this;
              t.pollingFast = !0;
              function n() {
                var r = t.poll();
                !r && !e
                  ? ((e = !0), t.polling.set(60, n))
                  : ((t.pollingFast = !1), t.slowPoll());
              }
              t.polling.set(20, n);
            }),
            (st.prototype.poll = function () {
              var e = this,
                t = this.cm,
                n = this.textarea,
                r = this.prevInput;
              if (
                this.contextMenuPending ||
                this.resetting ||
                !t.state.focused ||
                (va(n) && !r && !this.composing) ||
                t.isReadOnly() ||
                t.options.disableInput ||
                t.state.keySeq
              )
                return !1;
              var i = n.value;
              if (i == r && !t.somethingSelected()) return !1;
              if (
                (C && L >= 9 && this.hasSelection === i) ||
                (X && /[\uf700-\uf7ff]/.test(i))
              )
                return (t.display.input.reset(), !1);
              if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if ((o == 8203 && !r && (r = "​"), o == 8666))
                  return (this.reset(), this.cm.execCommand("undo"));
              }
              for (
                var u = 0, c = Math.min(r.length, i.length);
                u < c && r.charCodeAt(u) == i.charCodeAt(u);
              )
                ++u;
              return (
                Ht(t, function () {
                  (fo(
                    t,
                    i.slice(u),
                    r.length - u,
                    null,
                    e.composing ? "*compose" : null,
                  ),
                    i.length > 1e3 ||
                    i.indexOf(`
`) > -1
                      ? (n.value = e.prevInput = "")
                      : (e.prevInput = i),
                    e.composing &&
                      (e.composing.range.clear(),
                      (e.composing.range = t.markText(
                        e.composing.start,
                        t.getCursor("to"),
                        { className: "CodeMirror-composing" },
                      ))));
                }),
                !0
              );
            }),
            (st.prototype.ensurePolled = function () {
              this.pollingFast && this.poll() && (this.pollingFast = !1);
            }),
            (st.prototype.onKeyPress = function () {
              (C && L >= 9 && (this.hasSelection = null), this.fastPoll());
            }),
            (st.prototype.onContextMenu = function (e) {
              var t = this,
                n = t.cm,
                r = n.display,
                i = t.textarea;
              t.contextMenuPending && t.contextMenuPending();
              var o = Or(n, e),
                u = r.scroller.scrollTop;
              if (!o || ae) return;
              var c = n.options.resetSelectionOnContextMenu;
              c && n.doc.sel.contains(o) == -1 && mt(n, St)(n.doc, xr(o), lt);
              var h = i.style.cssText,
                v = t.wrapper.style.cssText,
                k = t.wrapper.offsetParent.getBoundingClientRect();
              ((t.wrapper.style.cssText = "position: static"),
                (i.style.cssText =
                  `position: absolute; width: 30px; height: 30px;
      top: ` +
                  (e.clientY - k.top - 5) +
                  "px; left: " +
                  (e.clientX - k.left - 5) +
                  `px;
      z-index: 1000; background: ` +
                  (C ? "rgba(255, 255, 255, .05)" : "transparent") +
                  `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`));
              var A;
              (K && (A = i.ownerDocument.defaultView.scrollY),
                r.input.focus(),
                K && i.ownerDocument.defaultView.scrollTo(null, A),
                r.input.reset(),
                n.somethingSelected() || (i.value = t.prevInput = " "),
                (t.contextMenuPending = O),
                (r.selForContextMenu = n.doc.sel),
                clearTimeout(r.detectingSelectAll));
              function H() {
                if (i.selectionStart != null) {
                  var V = n.somethingSelected(),
                    oe = "​" + (V ? i.value : "");
                  ((i.value = "⇚"),
                    (i.value = oe),
                    (t.prevInput = V ? "" : "​"),
                    (i.selectionStart = 1),
                    (i.selectionEnd = oe.length),
                    (r.selForContextMenu = n.doc.sel));
                }
              }
              function O() {
                if (
                  t.contextMenuPending == O &&
                  ((t.contextMenuPending = !1),
                  (t.wrapper.style.cssText = v),
                  (i.style.cssText = h),
                  C &&
                    L < 9 &&
                    r.scrollbars.setScrollTop((r.scroller.scrollTop = u)),
                  i.selectionStart != null)
                ) {
                  (!C || (C && L < 9)) && H();
                  var V = 0,
                    oe = function () {
                      r.selForContextMenu == n.doc.sel &&
                      i.selectionStart == 0 &&
                      i.selectionEnd > 0 &&
                      t.prevInput == "​"
                        ? mt(n, Fs)(n)
                        : V++ < 10
                          ? (r.detectingSelectAll = setTimeout(oe, 500))
                          : ((r.selForContextMenu = null), r.input.reset());
                    };
                  r.detectingSelectAll = setTimeout(oe, 200);
                }
              }
              if ((C && L >= 9 && H(), qe)) {
                ft(e);
                var Y = function () {
                  (xe(window, "mouseup", Y), setTimeout(O, 20));
                };
                N(window, "mouseup", Y);
              } else setTimeout(O, 50);
            }),
            (st.prototype.readOnlyChanged = function (e) {
              (e || this.reset(),
                (this.textarea.disabled = e == "nocursor"),
                (this.textarea.readOnly = !!e));
            }),
            (st.prototype.setUneditable = function () {}),
            (st.prototype.needsContentAttribute = !1));
          function md(e, t) {
            if (
              ((t = t ? Qe(t) : {}),
              (t.value = e.value),
              !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
              !t.placeholder &&
                e.placeholder &&
                (t.placeholder = e.placeholder),
              t.autofocus == null)
            ) {
              var n = ze(Pe(e));
              t.autofocus =
                n == e ||
                (e.getAttribute("autofocus") != null && n == document.body);
            }
            function r() {
              e.value = c.getValue();
            }
            var i;
            if (e.form && (N(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
              var o = e.form;
              i = o.submit;
              try {
                var u = (o.submit = function () {
                  (r(), (o.submit = i), o.submit(), (o.submit = u));
                });
              } catch {}
            }
            ((t.finishInit = function (h) {
              ((h.save = r),
                (h.getTextArea = function () {
                  return e;
                }),
                (h.toTextArea = function () {
                  ((h.toTextArea = isNaN),
                    r(),
                    e.parentNode.removeChild(h.getWrapperElement()),
                    (e.style.display = ""),
                    e.form &&
                      (xe(e.form, "submit", r),
                      !t.leaveSubmitMethodAlone &&
                        typeof e.form.submit == "function" &&
                        (e.form.submit = i)));
                }));
            }),
              (e.style.display = "none"));
            var c = et(function (h) {
              return e.parentNode.insertBefore(h, e.nextSibling);
            }, t);
            return c;
          }
          function xd(e) {
            ((e.off = xe),
              (e.on = N),
              (e.wheelEventPixels = Sh),
              (e.Doc = Mt),
              (e.splitLines = Mn),
              (e.countColumn = Ke),
              (e.findColumn = Tt),
              (e.isWordChar = I),
              (e.Pass = Ve),
              (e.signal = ye),
              (e.Line = nn),
              (e.changeEnd = yr),
              (e.scrollbarModel = is),
              (e.Pos = ie),
              (e.cmpPos = Be),
              (e.modes = Wt),
              (e.mimeModes = Rt),
              (e.resolveMode = en),
              (e.getMode = tn),
              (e.modeExtensions = rn),
              (e.extendMode = bc),
              (e.copyState = Lr),
              (e.startState = fl),
              (e.innerMode = ma),
              (e.commands = ri),
              (e.keyMap = cr),
              (e.keyName = js),
              (e.isModifierKey = qs),
              (e.lookupKey = mn),
              (e.normalizeKeyMap = $h),
              (e.StringStream = ct),
              (e.SharedTextMarker = Vn),
              (e.TextMarker = Dr),
              (e.LineWidget = Qn),
              (e.e_preventDefault = Ee),
              (e.e_stopPropagation = $e),
              (e.e_stop = ft),
              (e.addClass = nt),
              (e.contains = De),
              (e.rmClass = Le),
              (e.keyNames = wr));
          }
          (ud(et), dd(et));
          var yd = "iter insert remove copy getEditor constructor".split(" ");
          for (var Zi in Mt.prototype)
            Mt.prototype.hasOwnProperty(Zi) &&
              He(yd, Zi) < 0 &&
              (et.prototype[Zi] = (function (e) {
                return function () {
                  return e.apply(this.doc, arguments);
                };
              })(Mt.prototype[Zi]));
          return (
            Ie(Mt),
            (et.inputStyles = { textarea: st, contenteditable: Ge }),
            (et.defineMode = function (e) {
              (!et.defaults.mode && e != "null" && (et.defaults.mode = e),
                Fr.apply(this, arguments));
            }),
            (et.defineMIME = xi),
            et.defineMode("null", function () {
              return {
                token: function (e) {
                  return e.skipToEnd();
                },
              };
            }),
            et.defineMIME("text/plain", "null"),
            (et.defineExtension = function (e, t) {
              et.prototype[e] = t;
            }),
            (et.defineDocExtension = function (e, t) {
              Mt.prototype[e] = t;
            }),
            (et.fromTextArea = md),
            xd(et),
            (et.version = "5.65.21"),
            et
          );
        });
      })(ia)),
    ia.exports
  );
}
var Au = { exports: {} },
  Eu;
function rv() {
  return (
    Eu ||
      ((Eu = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          var d = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
            p = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
            m = /[*+-]\s/;
          s.commands.newlineAndIndentContinueMarkdownList = function (w) {
            if (w.getOption("disableInput")) return s.Pass;
            for (var C = w.listSelections(), L = [], K = 0; K < C.length; K++) {
              var $ = C[K].head,
                j = w.getStateAfter($.line),
                ne = s.innerMode(w.getMode(), j);
              if (
                ne.mode.name !== "markdown" &&
                ne.mode.helperType !== "markdown"
              ) {
                w.execCommand("newlineAndIndent");
                return;
              } else j = ne.state;
              var ae = j.list !== !1,
                we = j.quote !== 0,
                Q = w.getLine($.line),
                te = d.exec(Q),
                W = /^\s*$/.test(Q.slice(0, $.ch));
              if (!C[K].empty() || (!ae && !we) || !te || W) {
                w.execCommand("newlineAndIndent");
                return;
              }
              if (p.test(Q)) {
                var Z = we && />\s*$/.test(Q),
                  G = !/>\s*$/.test(Q);
                ((Z || G) &&
                  w.replaceRange(
                    "",
                    { line: $.line, ch: 0 },
                    { line: $.line, ch: $.ch + 1 },
                  ),
                  (L[K] = `
`));
              } else {
                var X = te[1],
                  ue = te[5],
                  ee = !(m.test(te[2]) || te[2].indexOf(">") >= 0),
                  ce = ee
                    ? parseInt(te[3], 10) + 1 + te[4]
                    : te[2].replace("x", " ");
                ((L[K] =
                  `
` +
                  X +
                  ce +
                  ue),
                  ee && y(w, $));
              }
            }
            w.replaceSelections(L);
          };
          function y(w, C) {
            var L = C.line,
              K = 0,
              $ = 0,
              j = d.exec(w.getLine(L)),
              ne = j[1];
            do {
              K += 1;
              var ae = L + K,
                we = w.getLine(ae),
                Q = d.exec(we);
              if (Q) {
                var te = Q[1],
                  W = parseInt(j[3], 10) + K - $,
                  Z = parseInt(Q[3], 10),
                  G = Z;
                if (ne === te && !isNaN(Z))
                  (W === Z && (G = Z + 1),
                    W > Z && (G = W + 1),
                    w.replaceRange(
                      we.replace(d, te + G + Q[4] + Q[5]),
                      { line: ae, ch: 0 },
                      { line: ae, ch: we.length },
                    ));
                else {
                  if (
                    ne.length > te.length ||
                    (ne.length < te.length && K === 1)
                  )
                    return;
                  $ += 1;
                }
              }
            } while (Q);
          }
        });
      })()),
    Au.exports
  );
}
var Fu = {},
  Lu;
function nv() {
  if (Lu) return Fu;
  Lu = 1;
  var a = Ut();
  return (
    (a.commands.tabAndIndentMarkdownList = function (l) {
      var s = l.listSelections(),
        d = s[0].head,
        p = l.getStateAfter(d.line),
        m = p.list !== !1;
      if (m) {
        l.execCommand("indentMore");
        return;
      }
      if (l.options.indentWithTabs) l.execCommand("insertTab");
      else {
        var y = Array(l.options.tabSize + 1).join(" ");
        l.replaceSelection(y);
      }
    }),
    (a.commands.shiftTabAndUnindentMarkdownList = function (l) {
      var s = l.listSelections(),
        d = s[0].head,
        p = l.getStateAfter(d.line),
        m = p.list !== !1;
      if (m) {
        l.execCommand("indentLess");
        return;
      }
      if (l.options.indentWithTabs) l.execCommand("insertTab");
      else {
        var y = Array(l.options.tabSize + 1).join(" ");
        l.replaceSelection(y);
      }
    }),
    Fu
  );
}
var Tu = { exports: {} },
  _u;
function iv() {
  return (
    _u ||
      ((_u = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          s.defineOption("fullScreen", !1, function (m, y, w) {
            (w == s.Init && (w = !1), !w != !y && (y ? d(m) : p(m)));
          });
          function d(m) {
            var y = m.getWrapperElement();
            ((m.state.fullScreenRestore = {
              scrollTop: window.pageYOffset,
              scrollLeft: window.pageXOffset,
              width: y.style.width,
              height: y.style.height,
            }),
              (y.style.width = ""),
              (y.style.height = "auto"),
              (y.className += " CodeMirror-fullscreen"),
              (document.documentElement.style.overflow = "hidden"),
              m.refresh());
          }
          function p(m) {
            var y = m.getWrapperElement();
            ((y.className = y.className.replace(
              /\s*CodeMirror-fullscreen\b/,
              "",
            )),
              (document.documentElement.style.overflow = ""));
            var w = m.state.fullScreenRestore;
            ((y.style.width = w.width),
              (y.style.height = w.height),
              window.scrollTo(w.scrollLeft, w.scrollTop),
              m.refresh());
          }
        });
      })()),
    Tu.exports
  );
}
var Mu = { exports: {} },
  Bu = { exports: {} },
  Ou;
function vc() {
  return (
    Ou ||
      ((Ou = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          var d = {
              autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
                menuitem: !0,
              },
              implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0,
              },
              contextGrabbers: {
                dd: { dd: !0, dt: !0 },
                dt: { dd: !0, dt: !0 },
                li: { li: !0 },
                option: { option: !0, optgroup: !0 },
                optgroup: { optgroup: !0 },
                p: {
                  address: !0,
                  article: !0,
                  aside: !0,
                  blockquote: !0,
                  dir: !0,
                  div: !0,
                  dl: !0,
                  fieldset: !0,
                  footer: !0,
                  form: !0,
                  h1: !0,
                  h2: !0,
                  h3: !0,
                  h4: !0,
                  h5: !0,
                  h6: !0,
                  header: !0,
                  hgroup: !0,
                  hr: !0,
                  menu: !0,
                  nav: !0,
                  ol: !0,
                  p: !0,
                  pre: !0,
                  section: !0,
                  table: !0,
                  ul: !0,
                },
                rp: { rp: !0, rt: !0 },
                rt: { rp: !0, rt: !0 },
                tbody: { tbody: !0, tfoot: !0 },
                td: { td: !0, th: !0 },
                tfoot: { tbody: !0 },
                th: { td: !0, th: !0 },
                thead: { tbody: !0, tfoot: !0 },
                tr: { tr: !0 },
              },
              doNotIndent: { pre: !0 },
              allowUnquoted: !0,
              allowMissing: !0,
              caseFold: !0,
            },
            p = {
              autoSelfClosers: {},
              implicitlyClosed: {},
              contextGrabbers: {},
              doNotIndent: {},
              allowUnquoted: !1,
              allowMissing: !1,
              allowMissingTagName: !1,
              caseFold: !1,
            };
          (s.defineMode("xml", function (m, y) {
            var w = m.indentUnit,
              C = {},
              L = y.htmlMode ? d : p;
            for (var K in L) C[K] = L[K];
            for (var K in y) C[K] = y[K];
            var $, j;
            function ne(R, le) {
              function re(nt) {
                return ((le.tokenize = nt), nt(R, le));
              }
              var De = R.next();
              if (De == "<")
                return R.eat("!")
                  ? R.eat("[")
                    ? R.match("CDATA[")
                      ? re(Q("atom", "]]>"))
                      : null
                    : R.match("--")
                      ? re(Q("comment", "-->"))
                      : R.match("DOCTYPE", !0, !0)
                        ? (R.eatWhile(/[\w\._\-]/), re(te(1)))
                        : null
                  : R.eat("?")
                    ? (R.eatWhile(/[\w\._\-]/),
                      (le.tokenize = Q("meta", "?>")),
                      "meta")
                    : (($ = R.eat("/") ? "closeTag" : "openTag"),
                      (le.tokenize = ae),
                      "tag bracket");
              if (De == "&") {
                var ze;
                return (
                  R.eat("#")
                    ? R.eat("x")
                      ? (ze = R.eatWhile(/[a-fA-F\d]/) && R.eat(";"))
                      : (ze = R.eatWhile(/[\d]/) && R.eat(";"))
                    : (ze = R.eatWhile(/[\w\.\-:]/) && R.eat(";")),
                  ze ? "atom" : "error"
                );
              } else return (R.eatWhile(/[^&<]/), null);
            }
            ne.isInText = !0;
            function ae(R, le) {
              var re = R.next();
              if (re == ">" || (re == "/" && R.eat(">")))
                return (
                  (le.tokenize = ne),
                  ($ = re == ">" ? "endTag" : "selfcloseTag"),
                  "tag bracket"
                );
              if (re == "=") return (($ = "equals"), null);
              if (re == "<") {
                ((le.tokenize = ne),
                  (le.state = ue),
                  (le.tagName = le.tagStart = null));
                var De = le.tokenize(R, le);
                return De ? De + " tag error" : "tag error";
              } else
                return /[\'\"]/.test(re)
                  ? ((le.tokenize = we(re)),
                    (le.stringStartCol = R.column()),
                    le.tokenize(R, le))
                  : (R.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),
                    "word");
            }
            function we(R) {
              var le = function (re, De) {
                for (; !re.eol(); )
                  if (re.next() == R) {
                    De.tokenize = ae;
                    break;
                  }
                return "string";
              };
              return ((le.isInAttribute = !0), le);
            }
            function Q(R, le) {
              return function (re, De) {
                for (; !re.eol(); ) {
                  if (re.match(le)) {
                    De.tokenize = ne;
                    break;
                  }
                  re.next();
                }
                return R;
              };
            }
            function te(R) {
              return function (le, re) {
                for (var De; (De = le.next()) != null; ) {
                  if (De == "<")
                    return ((re.tokenize = te(R + 1)), re.tokenize(le, re));
                  if (De == ">")
                    if (R == 1) {
                      re.tokenize = ne;
                      break;
                    } else
                      return ((re.tokenize = te(R - 1)), re.tokenize(le, re));
                }
                return "meta";
              };
            }
            function W(R) {
              return R && R.toLowerCase();
            }
            function Z(R, le, re) {
              ((this.prev = R.context),
                (this.tagName = le || ""),
                (this.indent = R.indented),
                (this.startOfLine = re),
                (C.doNotIndent.hasOwnProperty(le) ||
                  (R.context && R.context.noIndent)) &&
                  (this.noIndent = !0));
            }
            function G(R) {
              R.context && (R.context = R.context.prev);
            }
            function X(R, le) {
              for (var re; ; ) {
                if (
                  !R.context ||
                  ((re = R.context.tagName),
                  !C.contextGrabbers.hasOwnProperty(W(re)) ||
                    !C.contextGrabbers[W(re)].hasOwnProperty(W(le)))
                )
                  return;
                G(R);
              }
            }
            function ue(R, le, re) {
              return R == "openTag"
                ? ((re.tagStart = le.column()), ee)
                : R == "closeTag"
                  ? ce
                  : ue;
            }
            function ee(R, le, re) {
              return R == "word"
                ? ((re.tagName = le.current()), (j = "tag"), he)
                : C.allowMissingTagName && R == "endTag"
                  ? ((j = "tag bracket"), he(R, le, re))
                  : ((j = "error"), ee);
            }
            function ce(R, le, re) {
              if (R == "word") {
                var De = le.current();
                return (
                  re.context &&
                    re.context.tagName != De &&
                    C.implicitlyClosed.hasOwnProperty(W(re.context.tagName)) &&
                    G(re),
                  (re.context && re.context.tagName == De) ||
                  C.matchClosing === !1
                    ? ((j = "tag"), ve)
                    : ((j = "tag error"), qe)
                );
              } else
                return C.allowMissingTagName && R == "endTag"
                  ? ((j = "tag bracket"), ve(R, le, re))
                  : ((j = "error"), qe);
            }
            function ve(R, le, re) {
              return R != "endTag" ? ((j = "error"), ve) : (G(re), ue);
            }
            function qe(R, le, re) {
              return ((j = "error"), ve(R, le, re));
            }
            function he(R, le, re) {
              if (R == "word") return ((j = "attribute"), Le);
              if (R == "endTag" || R == "selfcloseTag") {
                var De = re.tagName,
                  ze = re.tagStart;
                return (
                  (re.tagName = re.tagStart = null),
                  R == "selfcloseTag" || C.autoSelfClosers.hasOwnProperty(W(De))
                    ? X(re, De)
                    : (X(re, De),
                      (re.context = new Z(re, De, ze == re.indented))),
                  ue
                );
              }
              return ((j = "error"), he);
            }
            function Le(R, le, re) {
              return R == "equals"
                ? Fe
                : (C.allowMissing || (j = "error"), he(R, le, re));
            }
            function Fe(R, le, re) {
              return R == "string"
                ? Ne
                : R == "word" && C.allowUnquoted
                  ? ((j = "string"), he)
                  : ((j = "error"), he(R, le, re));
            }
            function Ne(R, le, re) {
              return R == "string" ? Ne : he(R, le, re);
            }
            return {
              startState: function (R) {
                var le = {
                  tokenize: ne,
                  state: ue,
                  indented: R || 0,
                  tagName: null,
                  tagStart: null,
                  context: null,
                };
                return (R != null && (le.baseIndent = R), le);
              },
              token: function (R, le) {
                if (
                  (!le.tagName && R.sol() && (le.indented = R.indentation()),
                  R.eatSpace())
                )
                  return null;
                $ = null;
                var re = le.tokenize(R, le);
                return (
                  (re || $) &&
                    re != "comment" &&
                    ((j = null),
                    (le.state = le.state($ || re, R, le)),
                    j && (re = j == "error" ? re + " error" : j)),
                  re
                );
              },
              indent: function (R, le, re) {
                var De = R.context;
                if (R.tokenize.isInAttribute)
                  return R.tagStart == R.indented
                    ? R.stringStartCol + 1
                    : R.indented + w;
                if (De && De.noIndent) return s.Pass;
                if (R.tokenize != ae && R.tokenize != ne)
                  return re ? re.match(/^(\s*)/)[0].length : 0;
                if (R.tagName)
                  return C.multilineTagIndentPastTag !== !1
                    ? R.tagStart + R.tagName.length + 2
                    : R.tagStart + w * (C.multilineTagIndentFactor || 1);
                if (C.alignCDATA && /<!\[CDATA\[/.test(le)) return 0;
                var ze = le && /^<(\/)?([\w_:\.-]*)/.exec(le);
                if (ze && ze[1])
                  for (; De; )
                    if (De.tagName == ze[2]) {
                      De = De.prev;
                      break;
                    } else if (C.implicitlyClosed.hasOwnProperty(W(De.tagName)))
                      De = De.prev;
                    else break;
                else if (ze)
                  for (; De; ) {
                    var nt = C.contextGrabbers[W(De.tagName)];
                    if (nt && nt.hasOwnProperty(W(ze[2]))) De = De.prev;
                    else break;
                  }
                for (; De && De.prev && !De.startOfLine; ) De = De.prev;
                return De ? De.indent + w : R.baseIndent || 0;
              },
              electricInput: /<\/[\s\w:]+>$/,
              blockCommentStart: "<!--",
              blockCommentEnd: "-->",
              configuration: C.htmlMode ? "html" : "xml",
              helperType: C.htmlMode ? "html" : "xml",
              skipAttribute: function (R) {
                R.state == Fe && (R.state = he);
              },
              xmlCurrentTag: function (R) {
                return R.tagName
                  ? { name: R.tagName, close: R.type == "closeTag" }
                  : null;
              },
              xmlCurrentContext: function (R) {
                for (var le = [], re = R.context; re; re = re.prev)
                  le.push(re.tagName);
                return le.reverse();
              },
            };
          }),
            s.defineMIME("text/xml", "xml"),
            s.defineMIME("application/xml", "xml"),
            s.mimeModes.hasOwnProperty("text/html") ||
              s.defineMIME("text/html", { name: "xml", htmlMode: !0 }));
        });
      })()),
    Bu.exports
  );
}
var Iu = { exports: {} },
  Nu;
function av() {
  return (
    Nu ||
      ((Nu = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          s.modeInfo = [
            {
              name: "APL",
              mime: "text/apl",
              mode: "apl",
              ext: ["dyalog", "apl"],
            },
            {
              name: "PGP",
              mimes: [
                "application/pgp",
                "application/pgp-encrypted",
                "application/pgp-keys",
                "application/pgp-signature",
              ],
              mode: "asciiarmor",
              ext: ["asc", "pgp", "sig"],
            },
            {
              name: "ASN.1",
              mime: "text/x-ttcn-asn",
              mode: "asn.1",
              ext: ["asn", "asn1"],
            },
            {
              name: "Asterisk",
              mime: "text/x-asterisk",
              mode: "asterisk",
              file: /^extensions\.conf$/i,
            },
            {
              name: "Brainfuck",
              mime: "text/x-brainfuck",
              mode: "brainfuck",
              ext: ["b", "bf"],
            },
            {
              name: "C",
              mime: "text/x-csrc",
              mode: "clike",
              ext: ["c", "h", "ino"],
            },
            {
              name: "C++",
              mime: "text/x-c++src",
              mode: "clike",
              ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
              alias: ["cpp"],
            },
            {
              name: "Cobol",
              mime: "text/x-cobol",
              mode: "cobol",
              ext: ["cob", "cpy", "cbl"],
            },
            {
              name: "C#",
              mime: "text/x-csharp",
              mode: "clike",
              ext: ["cs"],
              alias: ["csharp", "cs"],
            },
            {
              name: "Clojure",
              mime: "text/x-clojure",
              mode: "clojure",
              ext: ["clj", "cljc", "cljx"],
            },
            {
              name: "ClojureScript",
              mime: "text/x-clojurescript",
              mode: "clojure",
              ext: ["cljs"],
            },
            {
              name: "Closure Stylesheets (GSS)",
              mime: "text/x-gss",
              mode: "css",
              ext: ["gss"],
            },
            {
              name: "CMake",
              mime: "text/x-cmake",
              mode: "cmake",
              ext: ["cmake", "cmake.in"],
              file: /^CMakeLists\.txt$/,
            },
            {
              name: "CoffeeScript",
              mimes: [
                "application/vnd.coffeescript",
                "text/coffeescript",
                "text/x-coffeescript",
              ],
              mode: "coffeescript",
              ext: ["coffee"],
              alias: ["coffee", "coffee-script"],
            },
            {
              name: "Common Lisp",
              mime: "text/x-common-lisp",
              mode: "commonlisp",
              ext: ["cl", "lisp", "el"],
              alias: ["lisp"],
            },
            {
              name: "Cypher",
              mime: "application/x-cypher-query",
              mode: "cypher",
              ext: ["cyp", "cypher"],
            },
            {
              name: "Cython",
              mime: "text/x-cython",
              mode: "python",
              ext: ["pyx", "pxd", "pxi"],
            },
            {
              name: "Crystal",
              mime: "text/x-crystal",
              mode: "crystal",
              ext: ["cr"],
            },
            { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] },
            {
              name: "CQL",
              mime: "text/x-cassandra",
              mode: "sql",
              ext: ["cql"],
            },
            { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] },
            {
              name: "Dart",
              mimes: ["application/dart", "text/x-dart"],
              mode: "dart",
              ext: ["dart"],
            },
            {
              name: "diff",
              mime: "text/x-diff",
              mode: "diff",
              ext: ["diff", "patch"],
            },
            { name: "Django", mime: "text/x-django", mode: "django" },
            {
              name: "Dockerfile",
              mime: "text/x-dockerfile",
              mode: "dockerfile",
              file: /^Dockerfile$/,
            },
            {
              name: "DTD",
              mime: "application/xml-dtd",
              mode: "dtd",
              ext: ["dtd"],
            },
            {
              name: "Dylan",
              mime: "text/x-dylan",
              mode: "dylan",
              ext: ["dylan", "dyl", "intr"],
            },
            { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" },
            { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] },
            {
              name: "edn",
              mime: "application/edn",
              mode: "clojure",
              ext: ["edn"],
            },
            {
              name: "Eiffel",
              mime: "text/x-eiffel",
              mode: "eiffel",
              ext: ["e"],
            },
            { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] },
            {
              name: "Embedded JavaScript",
              mime: "application/x-ejs",
              mode: "htmlembedded",
              ext: ["ejs"],
            },
            {
              name: "Embedded Ruby",
              mime: "application/x-erb",
              mode: "htmlembedded",
              ext: ["erb"],
            },
            {
              name: "Erlang",
              mime: "text/x-erlang",
              mode: "erlang",
              ext: ["erl"],
            },
            { name: "Esper", mime: "text/x-esper", mode: "sql" },
            {
              name: "Factor",
              mime: "text/x-factor",
              mode: "factor",
              ext: ["factor"],
            },
            { name: "FCL", mime: "text/x-fcl", mode: "fcl" },
            {
              name: "Forth",
              mime: "text/x-forth",
              mode: "forth",
              ext: ["forth", "fth", "4th"],
            },
            {
              name: "Fortran",
              mime: "text/x-fortran",
              mode: "fortran",
              ext: ["f", "for", "f77", "f90", "f95"],
            },
            {
              name: "F#",
              mime: "text/x-fsharp",
              mode: "mllike",
              ext: ["fs"],
              alias: ["fsharp"],
            },
            { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] },
            {
              name: "Gherkin",
              mime: "text/x-feature",
              mode: "gherkin",
              ext: ["feature"],
            },
            {
              name: "GitHub Flavored Markdown",
              mime: "text/x-gfm",
              mode: "gfm",
              file: /^(readme|contributing|history)\.md$/i,
            },
            { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] },
            {
              name: "Groovy",
              mime: "text/x-groovy",
              mode: "groovy",
              ext: ["groovy", "gradle"],
              file: /^Jenkinsfile$/,
            },
            { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] },
            {
              name: "Haskell",
              mime: "text/x-haskell",
              mode: "haskell",
              ext: ["hs"],
            },
            {
              name: "Haskell (Literate)",
              mime: "text/x-literate-haskell",
              mode: "haskell-literate",
              ext: ["lhs"],
            },
            { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] },
            { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] },
            {
              name: "ASP.NET",
              mime: "application/x-aspx",
              mode: "htmlembedded",
              ext: ["aspx"],
              alias: ["asp", "aspx"],
            },
            {
              name: "HTML",
              mime: "text/html",
              mode: "htmlmixed",
              ext: ["html", "htm", "handlebars", "hbs"],
              alias: ["xhtml"],
            },
            { name: "HTTP", mime: "message/http", mode: "http" },
            { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] },
            {
              name: "Pug",
              mime: "text/x-pug",
              mode: "pug",
              ext: ["jade", "pug"],
              alias: ["jade"],
            },
            { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] },
            {
              name: "Java Server Pages",
              mime: "application/x-jsp",
              mode: "htmlembedded",
              ext: ["jsp"],
              alias: ["jsp"],
            },
            {
              name: "JavaScript",
              mimes: [
                "text/javascript",
                "text/ecmascript",
                "application/javascript",
                "application/x-javascript",
                "application/ecmascript",
              ],
              mode: "javascript",
              ext: ["js"],
              alias: ["ecmascript", "js", "node"],
            },
            {
              name: "JSON",
              mimes: ["application/json", "application/x-json"],
              mode: "javascript",
              ext: ["json", "map"],
              alias: ["json5"],
            },
            {
              name: "JSON-LD",
              mime: "application/ld+json",
              mode: "javascript",
              ext: ["jsonld"],
              alias: ["jsonld"],
            },
            { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] },
            {
              name: "Jinja2",
              mime: "text/jinja2",
              mode: "jinja2",
              ext: ["j2", "jinja", "jinja2"],
            },
            {
              name: "Julia",
              mime: "text/x-julia",
              mode: "julia",
              ext: ["jl"],
              alias: ["jl"],
            },
            {
              name: "Kotlin",
              mime: "text/x-kotlin",
              mode: "clike",
              ext: ["kt"],
            },
            { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] },
            {
              name: "LiveScript",
              mime: "text/x-livescript",
              mode: "livescript",
              ext: ["ls"],
              alias: ["ls"],
            },
            { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] },
            {
              name: "Markdown",
              mime: "text/x-markdown",
              mode: "markdown",
              ext: ["markdown", "md", "mkd"],
            },
            { name: "mIRC", mime: "text/mirc", mode: "mirc" },
            { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" },
            {
              name: "Mathematica",
              mime: "text/x-mathematica",
              mode: "mathematica",
              ext: ["m", "nb", "wl", "wls"],
            },
            {
              name: "Modelica",
              mime: "text/x-modelica",
              mode: "modelica",
              ext: ["mo"],
            },
            {
              name: "MUMPS",
              mime: "text/x-mumps",
              mode: "mumps",
              ext: ["mps"],
            },
            { name: "MS SQL", mime: "text/x-mssql", mode: "sql" },
            {
              name: "mbox",
              mime: "application/mbox",
              mode: "mbox",
              ext: ["mbox"],
            },
            { name: "MySQL", mime: "text/x-mysql", mode: "sql" },
            {
              name: "Nginx",
              mime: "text/x-nginx-conf",
              mode: "nginx",
              file: /nginx.*\.conf$/i,
            },
            {
              name: "NSIS",
              mime: "text/x-nsis",
              mode: "nsis",
              ext: ["nsh", "nsi"],
            },
            {
              name: "NTriples",
              mimes: [
                "application/n-triples",
                "application/n-quads",
                "text/n-triples",
              ],
              mode: "ntriples",
              ext: ["nt", "nq"],
            },
            {
              name: "Objective-C",
              mime: "text/x-objectivec",
              mode: "clike",
              ext: ["m"],
              alias: ["objective-c", "objc"],
            },
            {
              name: "Objective-C++",
              mime: "text/x-objectivec++",
              mode: "clike",
              ext: ["mm"],
              alias: ["objective-c++", "objc++"],
            },
            {
              name: "OCaml",
              mime: "text/x-ocaml",
              mode: "mllike",
              ext: ["ml", "mli", "mll", "mly"],
            },
            {
              name: "Octave",
              mime: "text/x-octave",
              mode: "octave",
              ext: ["m"],
            },
            { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] },
            {
              name: "Pascal",
              mime: "text/x-pascal",
              mode: "pascal",
              ext: ["p", "pas"],
            },
            { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] },
            {
              name: "Perl",
              mime: "text/x-perl",
              mode: "perl",
              ext: ["pl", "pm"],
            },
            {
              name: "PHP",
              mimes: [
                "text/x-php",
                "application/x-httpd-php",
                "application/x-httpd-php-open",
              ],
              mode: "php",
              ext: ["php", "php3", "php4", "php5", "php7", "phtml"],
            },
            { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] },
            {
              name: "Plain Text",
              mime: "text/plain",
              mode: "null",
              ext: ["txt", "text", "conf", "def", "list", "log"],
            },
            { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] },
            { name: "PostgreSQL", mime: "text/x-pgsql", mode: "sql" },
            {
              name: "PowerShell",
              mime: "application/x-powershell",
              mode: "powershell",
              ext: ["ps1", "psd1", "psm1"],
            },
            {
              name: "Properties files",
              mime: "text/x-properties",
              mode: "properties",
              ext: ["properties", "ini", "in"],
              alias: ["ini", "properties"],
            },
            {
              name: "ProtoBuf",
              mime: "text/x-protobuf",
              mode: "protobuf",
              ext: ["proto"],
            },
            {
              name: "Python",
              mime: "text/x-python",
              mode: "python",
              ext: ["BUILD", "bzl", "py", "pyw"],
              file: /^(BUCK|BUILD)$/,
            },
            {
              name: "Puppet",
              mime: "text/x-puppet",
              mode: "puppet",
              ext: ["pp"],
            },
            { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] },
            {
              name: "R",
              mime: "text/x-rsrc",
              mode: "r",
              ext: ["r", "R"],
              alias: ["rscript"],
            },
            {
              name: "reStructuredText",
              mime: "text/x-rst",
              mode: "rst",
              ext: ["rst"],
              alias: ["rst"],
            },
            { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" },
            {
              name: "RPM Spec",
              mime: "text/x-rpm-spec",
              mode: "rpm",
              ext: ["spec"],
            },
            {
              name: "Ruby",
              mime: "text/x-ruby",
              mode: "ruby",
              ext: ["rb"],
              alias: ["jruby", "macruby", "rake", "rb", "rbx"],
            },
            { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] },
            { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] },
            { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] },
            {
              name: "Scala",
              mime: "text/x-scala",
              mode: "clike",
              ext: ["scala"],
            },
            {
              name: "Scheme",
              mime: "text/x-scheme",
              mode: "scheme",
              ext: ["scm", "ss"],
            },
            { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] },
            {
              name: "Shell",
              mimes: ["text/x-sh", "application/x-sh"],
              mode: "shell",
              ext: ["sh", "ksh", "bash"],
              alias: ["bash", "sh", "zsh"],
              file: /^PKGBUILD$/,
            },
            {
              name: "Sieve",
              mime: "application/sieve",
              mode: "sieve",
              ext: ["siv", "sieve"],
            },
            {
              name: "Slim",
              mimes: ["text/x-slim", "application/x-slim"],
              mode: "slim",
              ext: ["slim"],
            },
            {
              name: "Smalltalk",
              mime: "text/x-stsrc",
              mode: "smalltalk",
              ext: ["st"],
            },
            {
              name: "Smarty",
              mime: "text/x-smarty",
              mode: "smarty",
              ext: ["tpl"],
            },
            { name: "Solr", mime: "text/x-solr", mode: "solr" },
            {
              name: "SML",
              mime: "text/x-sml",
              mode: "mllike",
              ext: ["sml", "sig", "fun", "smackspec"],
            },
            {
              name: "Soy",
              mime: "text/x-soy",
              mode: "soy",
              ext: ["soy"],
              alias: ["closure template"],
            },
            {
              name: "SPARQL",
              mime: "application/sparql-query",
              mode: "sparql",
              ext: ["rq", "sparql"],
              alias: ["sparul"],
            },
            {
              name: "Spreadsheet",
              mime: "text/x-spreadsheet",
              mode: "spreadsheet",
              alias: ["excel", "formula"],
            },
            { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] },
            { name: "SQLite", mime: "text/x-sqlite", mode: "sql" },
            {
              name: "Squirrel",
              mime: "text/x-squirrel",
              mode: "clike",
              ext: ["nut"],
            },
            {
              name: "Stylus",
              mime: "text/x-styl",
              mode: "stylus",
              ext: ["styl"],
            },
            {
              name: "Swift",
              mime: "text/x-swift",
              mode: "swift",
              ext: ["swift"],
            },
            { name: "sTeX", mime: "text/x-stex", mode: "stex" },
            {
              name: "LaTeX",
              mime: "text/x-latex",
              mode: "stex",
              ext: ["text", "ltx", "tex"],
              alias: ["tex"],
            },
            {
              name: "SystemVerilog",
              mime: "text/x-systemverilog",
              mode: "verilog",
              ext: ["v", "sv", "svh"],
            },
            { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] },
            {
              name: "Textile",
              mime: "text/x-textile",
              mode: "textile",
              ext: ["textile"],
            },
            {
              name: "TiddlyWiki",
              mime: "text/x-tiddlywiki",
              mode: "tiddlywiki",
            },
            { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" },
            { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] },
            { name: "Tornado", mime: "text/x-tornado", mode: "tornado" },
            {
              name: "troff",
              mime: "text/troff",
              mode: "troff",
              ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            },
            {
              name: "TTCN",
              mime: "text/x-ttcn",
              mode: "ttcn",
              ext: ["ttcn", "ttcn3", "ttcnpp"],
            },
            {
              name: "TTCN_CFG",
              mime: "text/x-ttcn-cfg",
              mode: "ttcn-cfg",
              ext: ["cfg"],
            },
            {
              name: "Turtle",
              mime: "text/turtle",
              mode: "turtle",
              ext: ["ttl"],
            },
            {
              name: "TypeScript",
              mime: "application/typescript",
              mode: "javascript",
              ext: ["ts"],
              alias: ["ts"],
            },
            {
              name: "TypeScript-JSX",
              mime: "text/typescript-jsx",
              mode: "jsx",
              ext: ["tsx"],
              alias: ["tsx"],
            },
            { name: "Twig", mime: "text/x-twig", mode: "twig" },
            {
              name: "Web IDL",
              mime: "text/x-webidl",
              mode: "webidl",
              ext: ["webidl"],
            },
            { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] },
            {
              name: "VBScript",
              mime: "text/vbscript",
              mode: "vbscript",
              ext: ["vbs"],
            },
            {
              name: "Velocity",
              mime: "text/velocity",
              mode: "velocity",
              ext: ["vtl"],
            },
            {
              name: "Verilog",
              mime: "text/x-verilog",
              mode: "verilog",
              ext: ["v"],
            },
            {
              name: "VHDL",
              mime: "text/x-vhdl",
              mode: "vhdl",
              ext: ["vhd", "vhdl"],
            },
            {
              name: "Vue.js Component",
              mimes: ["script/x-vue", "text/x-vue"],
              mode: "vue",
              ext: ["vue"],
            },
            {
              name: "XML",
              mimes: ["application/xml", "text/xml"],
              mode: "xml",
              ext: ["xml", "xsl", "xsd", "svg"],
              alias: ["rss", "wsdl", "xsd"],
            },
            {
              name: "XQuery",
              mime: "application/xquery",
              mode: "xquery",
              ext: ["xy", "xquery"],
            },
            { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] },
            {
              name: "YAML",
              mimes: ["text/x-yaml", "text/yaml"],
              mode: "yaml",
              ext: ["yaml", "yml"],
              alias: ["yml"],
            },
            { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] },
            {
              name: "mscgen",
              mime: "text/x-mscgen",
              mode: "mscgen",
              ext: ["mscgen", "mscin", "msc"],
            },
            { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] },
            {
              name: "msgenny",
              mime: "text/x-msgenny",
              mode: "mscgen",
              ext: ["msgenny"],
            },
            {
              name: "WebAssembly",
              mime: "text/webassembly",
              mode: "wast",
              ext: ["wat", "wast"],
            },
          ];
          for (var d = 0; d < s.modeInfo.length; d++) {
            var p = s.modeInfo[d];
            p.mimes && (p.mime = p.mimes[0]);
          }
          ((s.findModeByMIME = function (m) {
            m = m.toLowerCase();
            for (var y = 0; y < s.modeInfo.length; y++) {
              var w = s.modeInfo[y];
              if (w.mime == m) return w;
              if (w.mimes) {
                for (var C = 0; C < w.mimes.length; C++)
                  if (w.mimes[C] == m) return w;
              }
            }
            if (/\+xml$/.test(m)) return s.findModeByMIME("application/xml");
            if (/\+json$/.test(m)) return s.findModeByMIME("application/json");
          }),
            (s.findModeByExtension = function (m) {
              m = m.toLowerCase();
              for (var y = 0; y < s.modeInfo.length; y++) {
                var w = s.modeInfo[y];
                if (w.ext) {
                  for (var C = 0; C < w.ext.length; C++)
                    if (w.ext[C] == m) return w;
                }
              }
            }),
            (s.findModeByFileName = function (m) {
              for (var y = 0; y < s.modeInfo.length; y++) {
                var w = s.modeInfo[y];
                if (w.file && w.file.test(m)) return w;
              }
              var C = m.lastIndexOf("."),
                L = C > -1 && m.substring(C + 1, m.length);
              if (L) return s.findModeByExtension(L);
            }),
            (s.findModeByName = function (m) {
              m = m.toLowerCase();
              for (var y = 0; y < s.modeInfo.length; y++) {
                var w = s.modeInfo[y];
                if (w.name.toLowerCase() == m) return w;
                if (w.alias) {
                  for (var C = 0; C < w.alias.length; C++)
                    if (w.alias[C].toLowerCase() == m) return w;
                }
              }
            }));
        });
      })()),
    Iu.exports
  );
}
var Ru;
function mc() {
  return (
    Ru ||
      ((Ru = 1),
      (function (a, l) {
        (function (s) {
          s(Ut(), vc(), av());
        })(function (s) {
          (s.defineMode(
            "markdown",
            function (d, p) {
              var m = s.getMode(d, "text/html"),
                y = m.name == "null";
              function w(T) {
                if (s.findModeByName) {
                  var D = s.findModeByName(T);
                  D && (T = D.mime || D.mimes[0]);
                }
                var J = s.getMode(d, T);
                return J.name == "null" ? null : J;
              }
              (p.highlightFormatting === void 0 && (p.highlightFormatting = !1),
                p.maxBlockquoteDepth === void 0 && (p.maxBlockquoteDepth = 0),
                p.taskLists === void 0 && (p.taskLists = !1),
                p.strikethrough === void 0 && (p.strikethrough = !1),
                p.emoji === void 0 && (p.emoji = !1),
                p.fencedCodeBlockHighlighting === void 0 &&
                  (p.fencedCodeBlockHighlighting = !0),
                p.fencedCodeBlockDefaultMode === void 0 &&
                  (p.fencedCodeBlockDefaultMode = "text/plain"),
                p.xml === void 0 && (p.xml = !0),
                p.tokenTypeOverrides === void 0 && (p.tokenTypeOverrides = {}));
              var C = {
                header: "header",
                code: "comment",
                quote: "quote",
                list1: "variable-2",
                list2: "variable-3",
                list3: "keyword",
                hr: "hr",
                image: "image",
                imageAltText: "image-alt-text",
                imageMarker: "image-marker",
                formatting: "formatting",
                linkInline: "link",
                linkEmail: "link",
                linkText: "link",
                linkHref: "string",
                em: "em",
                strong: "strong",
                strikethrough: "strikethrough",
                emoji: "builtin",
              };
              for (var L in C)
                C.hasOwnProperty(L) &&
                  p.tokenTypeOverrides[L] &&
                  (C[L] = p.tokenTypeOverrides[L]);
              var K = /^([*\-_])(?:\s*\1){2,}\s*$/,
                $ = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
                j = /^\[(x| )\](?=\s)/i,
                ne = p.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
                ae = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
                we = /^[^#!\[\]*_\\<>` "'(~:]+/,
                Q = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
                te = /^\s*\[[^\]]+?\]:.*$/,
                W =
                  /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
                Z = "    ";
              function G(T, D, J) {
                return ((D.f = D.inline = J), J(T, D));
              }
              function X(T, D, J) {
                return ((D.f = D.block = J), J(T, D));
              }
              function ue(T) {
                return !T || !/\S/.test(T.string);
              }
              function ee(T) {
                if (
                  ((T.linkTitle = !1),
                  (T.linkHref = !1),
                  (T.linkText = !1),
                  (T.em = !1),
                  (T.strong = !1),
                  (T.strikethrough = !1),
                  (T.quote = 0),
                  (T.indentedCode = !1),
                  T.f == ve)
                ) {
                  var D = y;
                  if (!D) {
                    var J = s.innerMode(m, T.htmlState);
                    D =
                      J.mode.name == "xml" &&
                      J.state.tagStart === null &&
                      !J.state.context &&
                      J.state.tokenize.isInText;
                  }
                  D && ((T.f = Fe), (T.block = ce), (T.htmlState = null));
                }
                return (
                  (T.trailingSpace = 0),
                  (T.trailingSpaceNewLine = !1),
                  (T.prevLine = T.thisLine),
                  (T.thisLine = { stream: null }),
                  null
                );
              }
              function ce(T, D) {
                var J = T.column() === D.indentation,
                  Pe = ue(D.prevLine.stream),
                  Te = D.indentedCode,
                  Je = D.prevLine.hr,
                  Qe = D.list !== !1,
                  Ke = (D.listStack[D.listStack.length - 1] || 0) + 3;
                D.indentedCode = !1;
                var Xe = D.indentation;
                if (
                  D.indentationDiff === null &&
                  ((D.indentationDiff = D.indentation), Qe)
                ) {
                  for (
                    D.list = null;
                    Xe < D.listStack[D.listStack.length - 1];
                  )
                    (D.listStack.pop(),
                      D.listStack.length
                        ? (D.indentation = D.listStack[D.listStack.length - 1])
                        : (D.list = !1));
                  D.list !== !1 &&
                    (D.indentationDiff =
                      Xe - D.listStack[D.listStack.length - 1]);
                }
                var He =
                    !Pe &&
                    !Je &&
                    !D.prevLine.header &&
                    (!Qe || !Te) &&
                    !D.prevLine.fencedCodeEnd,
                  We =
                    (D.list === !1 || Je || Pe) &&
                    D.indentation <= Ke &&
                    T.match(K),
                  Ve = null;
                if (
                  D.indentationDiff >= 4 &&
                  (Te || D.prevLine.fencedCodeEnd || D.prevLine.header || Pe)
                )
                  return (T.skipToEnd(), (D.indentedCode = !0), C.code);
                if (T.eatSpace()) return null;
                if (
                  J &&
                  D.indentation <= Ke &&
                  (Ve = T.match(ne)) &&
                  Ve[1].length <= 6
                )
                  return (
                    (D.quote = 0),
                    (D.header = Ve[1].length),
                    (D.thisLine.header = !0),
                    p.highlightFormatting && (D.formatting = "header"),
                    (D.f = D.inline),
                    he(D)
                  );
                if (D.indentation <= Ke && T.eat(">"))
                  return (
                    (D.quote = J ? 1 : D.quote + 1),
                    p.highlightFormatting && (D.formatting = "quote"),
                    T.eatSpace(),
                    he(D)
                  );
                if (
                  !We &&
                  !D.setext &&
                  J &&
                  D.indentation <= Ke &&
                  (Ve = T.match($))
                ) {
                  var lt = Ve[1] ? "ol" : "ul";
                  return (
                    (D.indentation = Xe + T.current().length),
                    (D.list = !0),
                    (D.quote = 0),
                    D.listStack.push(D.indentation),
                    (D.em = !1),
                    (D.strong = !1),
                    (D.code = !1),
                    (D.strikethrough = !1),
                    p.taskLists && T.match(j, !1) && (D.taskList = !0),
                    (D.f = D.inline),
                    p.highlightFormatting &&
                      (D.formatting = ["list", "list-" + lt]),
                    he(D)
                  );
                } else {
                  if (J && D.indentation <= Ke && (Ve = T.match(Q, !0)))
                    return (
                      (D.quote = 0),
                      (D.fencedEndRE = new RegExp(Ve[1] + "+ *$")),
                      (D.localMode =
                        p.fencedCodeBlockHighlighting &&
                        w(Ve[2] || p.fencedCodeBlockDefaultMode)),
                      D.localMode && (D.localState = s.startState(D.localMode)),
                      (D.f = D.block = qe),
                      p.highlightFormatting && (D.formatting = "code-block"),
                      (D.code = -1),
                      he(D)
                    );
                  if (
                    D.setext ||
                    ((!He || !Qe) &&
                      !D.quote &&
                      D.list === !1 &&
                      !D.code &&
                      !We &&
                      !te.test(T.string) &&
                      (Ve = T.lookAhead(1)) &&
                      (Ve = Ve.match(ae)))
                  )
                    return (
                      D.setext
                        ? ((D.header = D.setext),
                          (D.setext = 0),
                          T.skipToEnd(),
                          p.highlightFormatting && (D.formatting = "header"))
                        : ((D.header = Ve[0].charAt(0) == "=" ? 1 : 2),
                          (D.setext = D.header)),
                      (D.thisLine.header = !0),
                      (D.f = D.inline),
                      he(D)
                    );
                  if (We)
                    return (
                      T.skipToEnd(),
                      (D.hr = !0),
                      (D.thisLine.hr = !0),
                      C.hr
                    );
                  if (T.peek() === "[") return G(T, D, De);
                }
                return G(T, D, D.inline);
              }
              function ve(T, D) {
                var J = m.token(T, D.htmlState);
                if (!y) {
                  var Pe = s.innerMode(m, D.htmlState);
                  ((Pe.mode.name == "xml" &&
                    Pe.state.tagStart === null &&
                    !Pe.state.context &&
                    Pe.state.tokenize.isInText) ||
                    (D.md_inside && T.current().indexOf(">") > -1)) &&
                    ((D.f = Fe), (D.block = ce), (D.htmlState = null));
                }
                return J;
              }
              function qe(T, D) {
                var J = D.listStack[D.listStack.length - 1] || 0,
                  Pe = D.indentation < J,
                  Te = J + 3;
                if (
                  D.fencedEndRE &&
                  D.indentation <= Te &&
                  (Pe || T.match(D.fencedEndRE))
                ) {
                  p.highlightFormatting && (D.formatting = "code-block");
                  var Je;
                  return (
                    Pe || (Je = he(D)),
                    (D.localMode = D.localState = null),
                    (D.block = ce),
                    (D.f = Fe),
                    (D.fencedEndRE = null),
                    (D.code = 0),
                    (D.thisLine.fencedCodeEnd = !0),
                    Pe ? X(T, D, D.block) : Je
                  );
                } else
                  return D.localMode
                    ? D.localMode.token(T, D.localState)
                    : (T.skipToEnd(), C.code);
              }
              function he(T) {
                var D = [];
                if (T.formatting) {
                  (D.push(C.formatting),
                    typeof T.formatting == "string" &&
                      (T.formatting = [T.formatting]));
                  for (var J = 0; J < T.formatting.length; J++)
                    (D.push(C.formatting + "-" + T.formatting[J]),
                      T.formatting[J] === "header" &&
                        D.push(
                          C.formatting + "-" + T.formatting[J] + "-" + T.header,
                        ),
                      T.formatting[J] === "quote" &&
                        (!p.maxBlockquoteDepth ||
                        p.maxBlockquoteDepth >= T.quote
                          ? D.push(
                              C.formatting +
                                "-" +
                                T.formatting[J] +
                                "-" +
                                T.quote,
                            )
                          : D.push("error")));
                }
                if (T.taskOpen)
                  return (D.push("meta"), D.length ? D.join(" ") : null);
                if (T.taskClosed)
                  return (D.push("property"), D.length ? D.join(" ") : null);
                if (
                  (T.linkHref
                    ? D.push(C.linkHref, "url")
                    : (T.strong && D.push(C.strong),
                      T.em && D.push(C.em),
                      T.strikethrough && D.push(C.strikethrough),
                      T.emoji && D.push(C.emoji),
                      T.linkText && D.push(C.linkText),
                      T.code && D.push(C.code),
                      T.image && D.push(C.image),
                      T.imageAltText && D.push(C.imageAltText, "link"),
                      T.imageMarker && D.push(C.imageMarker)),
                  T.header && D.push(C.header, C.header + "-" + T.header),
                  T.quote &&
                    (D.push(C.quote),
                    !p.maxBlockquoteDepth || p.maxBlockquoteDepth >= T.quote
                      ? D.push(C.quote + "-" + T.quote)
                      : D.push(C.quote + "-" + p.maxBlockquoteDepth)),
                  T.list !== !1)
                ) {
                  var Pe = (T.listStack.length - 1) % 3;
                  Pe
                    ? Pe === 1
                      ? D.push(C.list2)
                      : D.push(C.list3)
                    : D.push(C.list1);
                }
                return (
                  T.trailingSpaceNewLine
                    ? D.push("trailing-space-new-line")
                    : T.trailingSpace &&
                      D.push(
                        "trailing-space-" + (T.trailingSpace % 2 ? "a" : "b"),
                      ),
                  D.length ? D.join(" ") : null
                );
              }
              function Le(T, D) {
                if (T.match(we, !0)) return he(D);
              }
              function Fe(T, D) {
                var J = D.text(T, D);
                if (typeof J < "u") return J;
                if (D.list) return ((D.list = null), he(D));
                if (D.taskList) {
                  var Pe = T.match(j, !0)[1] === " ";
                  return (
                    Pe ? (D.taskOpen = !0) : (D.taskClosed = !0),
                    p.highlightFormatting && (D.formatting = "task"),
                    (D.taskList = !1),
                    he(D)
                  );
                }
                if (
                  ((D.taskOpen = !1),
                  (D.taskClosed = !1),
                  D.header && T.match(/^#+$/, !0))
                )
                  return (
                    p.highlightFormatting && (D.formatting = "header"),
                    he(D)
                  );
                var Te = T.next();
                if (D.linkTitle) {
                  D.linkTitle = !1;
                  var Je = Te;
                  (Te === "(" && (Je = ")"),
                    (Je = (Je + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")));
                  var Qe = "^\\s*(?:[^" + Je + "\\\\]+|\\\\\\\\|\\\\.)" + Je;
                  if (T.match(new RegExp(Qe), !0)) return C.linkHref;
                }
                if (Te === "`") {
                  var Ke = D.formatting;
                  (p.highlightFormatting && (D.formatting = "code"),
                    T.eatWhile("`"));
                  var Xe = T.current().length;
                  if (D.code == 0 && (!D.quote || Xe == 1))
                    return ((D.code = Xe), he(D));
                  if (Xe == D.code) {
                    var He = he(D);
                    return ((D.code = 0), He);
                  } else return ((D.formatting = Ke), he(D));
                } else if (D.code) return he(D);
                if (Te === "\\" && (T.next(), p.highlightFormatting)) {
                  var We = he(D),
                    Ve = C.formatting + "-escape";
                  return We ? We + " " + Ve : Ve;
                }
                if (Te === "!" && T.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                  return (
                    (D.imageMarker = !0),
                    (D.image = !0),
                    p.highlightFormatting && (D.formatting = "image"),
                    he(D)
                  );
                if (
                  Te === "[" &&
                  D.imageMarker &&
                  T.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)
                )
                  return (
                    (D.imageMarker = !1),
                    (D.imageAltText = !0),
                    p.highlightFormatting && (D.formatting = "image"),
                    he(D)
                  );
                if (Te === "]" && D.imageAltText) {
                  p.highlightFormatting && (D.formatting = "image");
                  var We = he(D);
                  return (
                    (D.imageAltText = !1),
                    (D.image = !1),
                    (D.inline = D.f = R),
                    We
                  );
                }
                if (Te === "[" && !D.image)
                  return (
                    (D.linkText && T.match(/^.*?\]/)) ||
                      ((D.linkText = !0),
                      p.highlightFormatting && (D.formatting = "link")),
                    he(D)
                  );
                if (Te === "]" && D.linkText) {
                  p.highlightFormatting && (D.formatting = "link");
                  var We = he(D);
                  return (
                    (D.linkText = !1),
                    (D.inline = D.f =
                      T.match(/\(.*?\)| ?\[.*?\]/, !1) ? R : Fe),
                    We
                  );
                }
                if (
                  Te === "<" &&
                  T.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)
                ) {
                  ((D.f = D.inline = Ne),
                    p.highlightFormatting && (D.formatting = "link"));
                  var We = he(D);
                  return (We ? (We += " ") : (We = ""), We + C.linkInline);
                }
                if (Te === "<" && T.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
                  ((D.f = D.inline = Ne),
                    p.highlightFormatting && (D.formatting = "link"));
                  var We = he(D);
                  return (We ? (We += " ") : (We = ""), We + C.linkEmail);
                }
                if (
                  p.xml &&
                  Te === "<" &&
                  T.match(
                    /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                    !1,
                  )
                ) {
                  var lt = T.string.indexOf(">", T.pos);
                  if (lt != -1) {
                    var ke = T.string.substring(T.start, lt);
                    /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(ke) &&
                      (D.md_inside = !0);
                  }
                  return (
                    T.backUp(1),
                    (D.htmlState = s.startState(m)),
                    X(T, D, ve)
                  );
                }
                if (p.xml && Te === "<" && T.match(/^\/\w*?>/))
                  return ((D.md_inside = !1), "tag");
                if (Te === "*" || Te === "_") {
                  for (
                    var Ct = 1,
                      Tt = T.pos == 1 ? " " : T.string.charAt(T.pos - 2);
                    Ct < 3 && T.eat(Te);
                  )
                    Ct++;
                  var it = T.peek() || " ",
                    zt =
                      !/\s/.test(it) &&
                      (!W.test(it) || /\s/.test(Tt) || W.test(Tt)),
                    be =
                      !/\s/.test(Tt) &&
                      (!W.test(Tt) || /\s/.test(it) || W.test(it)),
                    ut = null,
                    jt = null;
                  if (
                    (Ct % 2 &&
                      (!D.em && zt && (Te === "*" || !be || W.test(Tt))
                        ? (ut = !0)
                        : D.em == Te &&
                          be &&
                          (Te === "*" || !zt || W.test(it)) &&
                          (ut = !1)),
                    Ct > 1 &&
                      (!D.strong && zt && (Te === "*" || !be || W.test(Tt))
                        ? (jt = !0)
                        : D.strong == Te &&
                          be &&
                          (Te === "*" || !zt || W.test(it)) &&
                          (jt = !1)),
                    jt != null || ut != null)
                  ) {
                    (p.highlightFormatting &&
                      (D.formatting =
                        ut == null
                          ? "strong"
                          : jt == null
                            ? "em"
                            : "strong em"),
                      ut === !0 && (D.em = Te),
                      jt === !0 && (D.strong = Te));
                    var He = he(D);
                    return (
                      ut === !1 && (D.em = !1),
                      jt === !1 && (D.strong = !1),
                      He
                    );
                  }
                } else if (Te === " " && (T.eat("*") || T.eat("_"))) {
                  if (T.peek() === " ") return he(D);
                  T.backUp(1);
                }
                if (p.strikethrough) {
                  if (Te === "~" && T.eatWhile(Te)) {
                    if (D.strikethrough) {
                      p.highlightFormatting && (D.formatting = "strikethrough");
                      var He = he(D);
                      return ((D.strikethrough = !1), He);
                    } else if (T.match(/^[^\s]/, !1))
                      return (
                        (D.strikethrough = !0),
                        p.highlightFormatting &&
                          (D.formatting = "strikethrough"),
                        he(D)
                      );
                  } else if (Te === " " && T.match("~~", !0)) {
                    if (T.peek() === " ") return he(D);
                    T.backUp(2);
                  }
                }
                if (
                  p.emoji &&
                  Te === ":" &&
                  T.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
                ) {
                  ((D.emoji = !0),
                    p.highlightFormatting && (D.formatting = "emoji"));
                  var pr = he(D);
                  return ((D.emoji = !1), pr);
                }
                return (
                  Te === " " &&
                    (T.match(/^ +$/, !1)
                      ? D.trailingSpace++
                      : D.trailingSpace && (D.trailingSpaceNewLine = !0)),
                  he(D)
                );
              }
              function Ne(T, D) {
                var J = T.next();
                if (J === ">") {
                  ((D.f = D.inline = Fe),
                    p.highlightFormatting && (D.formatting = "link"));
                  var Pe = he(D);
                  return (Pe ? (Pe += " ") : (Pe = ""), Pe + C.linkInline);
                }
                return (T.match(/^[^>]+/, !0), C.linkInline);
              }
              function R(T, D) {
                if (T.eatSpace()) return null;
                var J = T.next();
                return J === "(" || J === "["
                  ? ((D.f = D.inline = re(J === "(" ? ")" : "]")),
                    p.highlightFormatting && (D.formatting = "link-string"),
                    (D.linkHref = !0),
                    he(D))
                  : "error";
              }
              var le = {
                ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
                "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
              };
              function re(T) {
                return function (D, J) {
                  var Pe = D.next();
                  if (Pe === T) {
                    ((J.f = J.inline = Fe),
                      p.highlightFormatting && (J.formatting = "link-string"));
                    var Te = he(J);
                    return ((J.linkHref = !1), Te);
                  }
                  return (D.match(le[T]), (J.linkHref = !0), he(J));
                };
              }
              function De(T, D) {
                return T.match(/^([^\]\\]|\\.)*\]:/, !1)
                  ? ((D.f = ze),
                    T.next(),
                    p.highlightFormatting && (D.formatting = "link"),
                    (D.linkText = !0),
                    he(D))
                  : G(T, D, Fe);
              }
              function ze(T, D) {
                if (T.match("]:", !0)) {
                  ((D.f = D.inline = nt),
                    p.highlightFormatting && (D.formatting = "link"));
                  var J = he(D);
                  return ((D.linkText = !1), J);
                }
                return (T.match(/^([^\]\\]|\\.)+/, !0), C.linkText);
              }
              function nt(T, D) {
                return T.eatSpace()
                  ? null
                  : (T.match(/^[^\s]+/, !0),
                    T.peek() === void 0
                      ? (D.linkTitle = !0)
                      : T.match(
                          /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                          !0,
                        ),
                    (D.f = D.inline = Fe),
                    C.linkHref + " url");
              }
              var Kt = {
                startState: function () {
                  return {
                    f: ce,
                    prevLine: { stream: null },
                    thisLine: { stream: null },
                    block: ce,
                    htmlState: null,
                    indentation: 0,
                    inline: Fe,
                    text: Le,
                    formatting: !1,
                    linkText: !1,
                    linkHref: !1,
                    linkTitle: !1,
                    code: 0,
                    em: !1,
                    strong: !1,
                    header: 0,
                    setext: 0,
                    hr: !1,
                    taskList: !1,
                    list: !1,
                    listStack: [],
                    quote: 0,
                    trailingSpace: 0,
                    trailingSpaceNewLine: !1,
                    strikethrough: !1,
                    emoji: !1,
                    fencedEndRE: null,
                  };
                },
                copyState: function (T) {
                  return {
                    f: T.f,
                    prevLine: T.prevLine,
                    thisLine: T.thisLine,
                    block: T.block,
                    htmlState: T.htmlState && s.copyState(m, T.htmlState),
                    indentation: T.indentation,
                    localMode: T.localMode,
                    localState: T.localMode
                      ? s.copyState(T.localMode, T.localState)
                      : null,
                    inline: T.inline,
                    text: T.text,
                    formatting: !1,
                    linkText: T.linkText,
                    linkTitle: T.linkTitle,
                    linkHref: T.linkHref,
                    code: T.code,
                    em: T.em,
                    strong: T.strong,
                    strikethrough: T.strikethrough,
                    emoji: T.emoji,
                    header: T.header,
                    setext: T.setext,
                    hr: T.hr,
                    taskList: T.taskList,
                    list: T.list,
                    listStack: T.listStack.slice(0),
                    quote: T.quote,
                    indentedCode: T.indentedCode,
                    trailingSpace: T.trailingSpace,
                    trailingSpaceNewLine: T.trailingSpaceNewLine,
                    md_inside: T.md_inside,
                    fencedEndRE: T.fencedEndRE,
                  };
                },
                token: function (T, D) {
                  if (((D.formatting = !1), T != D.thisLine.stream)) {
                    if (((D.header = 0), (D.hr = !1), T.match(/^\s*$/, !0)))
                      return (ee(D), null);
                    if (
                      ((D.prevLine = D.thisLine),
                      (D.thisLine = { stream: T }),
                      (D.taskList = !1),
                      (D.trailingSpace = 0),
                      (D.trailingSpaceNewLine = !1),
                      !D.localState && ((D.f = D.block), D.f != ve))
                    ) {
                      var J = T.match(/^\s*/, !0)[0].replace(/\t/g, Z).length;
                      if (
                        ((D.indentation = J), (D.indentationDiff = null), J > 0)
                      )
                        return null;
                    }
                  }
                  return D.f(T, D);
                },
                innerMode: function (T) {
                  return T.block == ve
                    ? { state: T.htmlState, mode: m }
                    : T.localState
                      ? { state: T.localState, mode: T.localMode }
                      : { state: T, mode: Kt };
                },
                indent: function (T, D, J) {
                  return T.block == ve && m.indent
                    ? m.indent(T.htmlState, D, J)
                    : T.localState && T.localMode.indent
                      ? T.localMode.indent(T.localState, D, J)
                      : s.Pass;
                },
                blankLine: ee,
                getType: he,
                blockCommentStart: "<!--",
                blockCommentEnd: "-->",
                closeBrackets: "()[]{}''\"\"``",
                fold: "markdown",
              };
              return Kt;
            },
            "xml",
          ),
            s.defineMIME("text/markdown", "markdown"),
            s.defineMIME("text/x-markdown", "markdown"));
        });
      })()),
    Mu.exports
  );
}
var Hu = { exports: {} },
  Pu;
function xc() {
  return (
    Pu ||
      ((Pu = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          s.overlayMode = function (d, p, m) {
            return {
              startState: function () {
                return {
                  base: s.startState(d),
                  overlay: s.startState(p),
                  basePos: 0,
                  baseCur: null,
                  overlayPos: 0,
                  overlayCur: null,
                  streamSeen: null,
                };
              },
              copyState: function (y) {
                return {
                  base: s.copyState(d, y.base),
                  overlay: s.copyState(p, y.overlay),
                  basePos: y.basePos,
                  baseCur: null,
                  overlayPos: y.overlayPos,
                  overlayCur: null,
                };
              },
              token: function (y, w) {
                return (
                  (y != w.streamSeen ||
                    Math.min(w.basePos, w.overlayPos) < y.start) &&
                    ((w.streamSeen = y), (w.basePos = w.overlayPos = y.start)),
                  y.start == w.basePos &&
                    ((w.baseCur = d.token(y, w.base)), (w.basePos = y.pos)),
                  y.start == w.overlayPos &&
                    ((y.pos = y.start),
                    (w.overlayCur = p.token(y, w.overlay)),
                    (w.overlayPos = y.pos)),
                  (y.pos = Math.min(w.basePos, w.overlayPos)),
                  w.overlayCur == null
                    ? w.baseCur
                    : (w.baseCur != null && w.overlay.combineTokens) ||
                        (m && w.overlay.combineTokens == null)
                      ? w.baseCur + " " + w.overlayCur
                      : w.overlayCur
                );
              },
              indent:
                d.indent &&
                function (y, w, C) {
                  return d.indent(y.base, w, C);
                },
              electricChars: d.electricChars,
              innerMode: function (y) {
                return { state: y.base, mode: d };
              },
              blankLine: function (y) {
                var w, C;
                return (
                  d.blankLine && (w = d.blankLine(y.base)),
                  p.blankLine && (C = p.blankLine(y.overlay)),
                  C == null ? w : m && w != null ? w + " " + C : C
                );
              },
            };
          };
        });
      })()),
    Hu.exports
  );
}
var zu = { exports: {} },
  Wu;
function ov() {
  return (
    Wu ||
      ((Wu = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          s.defineOption("placeholder", "", function (L, K, $) {
            var j = $ && $ != s.Init;
            if (K && !j)
              (L.on("blur", y),
                L.on("change", w),
                L.on("swapDoc", w),
                s.on(
                  L.getInputField(),
                  "compositionupdate",
                  (L.state.placeholderCompose = function () {
                    m(L);
                  }),
                ),
                w(L));
            else if (!K && j) {
              (L.off("blur", y),
                L.off("change", w),
                L.off("swapDoc", w),
                s.off(
                  L.getInputField(),
                  "compositionupdate",
                  L.state.placeholderCompose,
                ),
                d(L));
              var ne = L.getWrapperElement();
              ne.className = ne.className.replace(" CodeMirror-empty", "");
            }
            K && !L.hasFocus() && y(L);
          });
          function d(L) {
            L.state.placeholder &&
              (L.state.placeholder.parentNode.removeChild(L.state.placeholder),
              (L.state.placeholder = null));
          }
          function p(L) {
            d(L);
            var K = (L.state.placeholder = document.createElement("pre"));
            ((K.style.cssText = "height: 0; overflow: visible"),
              (K.style.direction = L.getOption("direction")),
              (K.className = "CodeMirror-placeholder CodeMirror-line-like"));
            var $ = L.getOption("placeholder");
            (typeof $ == "string" && ($ = document.createTextNode($)),
              K.appendChild($),
              L.display.lineSpace.insertBefore(
                K,
                L.display.lineSpace.firstChild,
              ));
          }
          function m(L) {
            setTimeout(function () {
              var K = !1;
              if (L.lineCount() == 1) {
                var $ = L.getInputField();
                K =
                  $.nodeName == "TEXTAREA"
                    ? !L.getLine(0).length
                    : !/[^\u200b]/.test(
                        $.querySelector(".CodeMirror-line").textContent,
                      );
              }
              K ? p(L) : d(L);
            }, 20);
          }
          function y(L) {
            C(L) && p(L);
          }
          function w(L) {
            var K = L.getWrapperElement(),
              $ = C(L);
            ((K.className =
              K.className.replace(" CodeMirror-empty", "") +
              ($ ? " CodeMirror-empty" : "")),
              $ ? p(L) : d(L));
          }
          function C(L) {
            return L.lineCount() === 1 && L.getLine(0) === "";
          }
        });
      })()),
    zu.exports
  );
}
var qu = { exports: {} },
  Uu;
function lv() {
  return (
    Uu ||
      ((Uu = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          s.defineOption("autoRefresh", !1, function (m, y) {
            (m.state.autoRefresh &&
              (p(m, m.state.autoRefresh), (m.state.autoRefresh = null)),
              y &&
                m.display.wrapper.offsetHeight == 0 &&
                d(m, (m.state.autoRefresh = { delay: y.delay || 250 })));
          });
          function d(m, y) {
            function w() {
              m.display.wrapper.offsetHeight
                ? (p(m, y),
                  m.display.lastWrapHeight != m.display.wrapper.clientHeight &&
                    m.refresh())
                : (y.timeout = setTimeout(w, y.delay));
            }
            ((y.timeout = setTimeout(w, y.delay)),
              (y.hurry = function () {
                (clearTimeout(y.timeout), (y.timeout = setTimeout(w, 50)));
              }),
              s.on(window, "mouseup", y.hurry),
              s.on(window, "keyup", y.hurry));
          }
          function p(m, y) {
            (clearTimeout(y.timeout),
              s.off(window, "mouseup", y.hurry),
              s.off(window, "keyup", y.hurry));
          }
        });
      })()),
    qu.exports
  );
}
var ju = { exports: {} },
  Gu;
function sv() {
  return (
    Gu ||
      ((Gu = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          s.defineOption("styleSelectedText", !1, function (j, ne, ae) {
            var we = ae && ae != s.Init;
            ne && !we
              ? ((j.state.markedSelection = []),
                (j.state.markedSelectionStyle =
                  typeof ne == "string" ? ne : "CodeMirror-selectedtext"),
                K(j),
                j.on("cursorActivity", d),
                j.on("change", p))
              : !ne &&
                we &&
                (j.off("cursorActivity", d),
                j.off("change", p),
                L(j),
                (j.state.markedSelection = j.state.markedSelectionStyle =
                  null));
          });
          function d(j) {
            j.state.markedSelection &&
              j.operation(function () {
                $(j);
              });
          }
          function p(j) {
            j.state.markedSelection &&
              j.state.markedSelection.length &&
              j.operation(function () {
                L(j);
              });
          }
          var m = 8,
            y = s.Pos,
            w = s.cmpPos;
          function C(j, ne, ae, we) {
            if (w(ne, ae) != 0)
              for (
                var Q = j.state.markedSelection,
                  te = j.state.markedSelectionStyle,
                  W = ne.line;
                ;
              ) {
                var Z = W == ne.line ? ne : y(W, 0),
                  G = W + m,
                  X = G >= ae.line,
                  ue = X ? ae : y(G, 0),
                  ee = j.markText(Z, ue, { className: te });
                if ((we == null ? Q.push(ee) : Q.splice(we++, 0, ee), X)) break;
                W = G;
              }
          }
          function L(j) {
            for (var ne = j.state.markedSelection, ae = 0; ae < ne.length; ++ae)
              ne[ae].clear();
            ne.length = 0;
          }
          function K(j) {
            L(j);
            for (var ne = j.listSelections(), ae = 0; ae < ne.length; ae++)
              C(j, ne[ae].from(), ne[ae].to());
          }
          function $(j) {
            if (!j.somethingSelected()) return L(j);
            if (j.listSelections().length > 1) return K(j);
            var ne = j.getCursor("start"),
              ae = j.getCursor("end"),
              we = j.state.markedSelection;
            if (!we.length) return C(j, ne, ae);
            var Q = we[0].find(),
              te = we[we.length - 1].find();
            if (
              !Q ||
              !te ||
              ae.line - ne.line <= m ||
              w(ne, te.to) >= 0 ||
              w(ae, Q.from) <= 0
            )
              return K(j);
            for (; w(ne, Q.from) > 0; )
              (we.shift().clear(), (Q = we[0].find()));
            for (
              w(ne, Q.from) < 0 &&
              (Q.to.line - ne.line < m
                ? (we.shift().clear(), C(j, ne, Q.to, 0))
                : C(j, ne, Q.from, 0));
              w(ae, te.to) < 0;
            )
              (we.pop().clear(), (te = we[we.length - 1].find()));
            w(ae, te.to) > 0 &&
              (ae.line - te.from.line < m
                ? (we.pop().clear(), C(j, te.from, ae))
                : C(j, te.to, ae));
          }
        });
      })()),
    ju.exports
  );
}
var Ku = { exports: {} },
  $u;
function uv() {
  return (
    $u ||
      (($u = 1),
      (function (a, l) {
        (function (s) {
          s(Ut());
        })(function (s) {
          var d = s.Pos;
          function p(W) {
            var Z = W.flags;
            return (
              Z ??
              (W.ignoreCase ? "i" : "") +
                (W.global ? "g" : "") +
                (W.multiline ? "m" : "")
            );
          }
          function m(W, Z) {
            for (var G = p(W), X = G, ue = 0; ue < Z.length; ue++)
              X.indexOf(Z.charAt(ue)) == -1 && (X += Z.charAt(ue));
            return G == X ? W : new RegExp(W.source, X);
          }
          function y(W) {
            return /\\s|\\n|\n|\\W|\\D|\[\^/.test(W.source);
          }
          function w(W, Z, G) {
            Z = m(Z, "g");
            for (
              var X = G.line, ue = G.ch, ee = W.lastLine();
              X <= ee;
              X++, ue = 0
            ) {
              Z.lastIndex = ue;
              var ce = W.getLine(X),
                ve = Z.exec(ce);
              if (ve)
                return {
                  from: d(X, ve.index),
                  to: d(X, ve.index + ve[0].length),
                  match: ve,
                };
            }
          }
          function C(W, Z, G) {
            if (!y(Z)) return w(W, Z, G);
            Z = m(Z, "gm");
            for (var X, ue = 1, ee = G.line, ce = W.lastLine(); ee <= ce; ) {
              for (var ve = 0; ve < ue && !(ee > ce); ve++) {
                var qe = W.getLine(ee++);
                X =
                  X == null
                    ? qe
                    : X +
                      `
` +
                      qe;
              }
              ((ue = ue * 2), (Z.lastIndex = G.ch));
              var he = Z.exec(X);
              if (he) {
                var Le = X.slice(0, he.index).split(`
`),
                  Fe = he[0].split(`
`),
                  Ne = G.line + Le.length - 1,
                  R = Le[Le.length - 1].length;
                return {
                  from: d(Ne, R),
                  to: d(
                    Ne + Fe.length - 1,
                    Fe.length == 1
                      ? R + Fe[0].length
                      : Fe[Fe.length - 1].length,
                  ),
                  match: he,
                };
              }
            }
          }
          function L(W, Z, G) {
            for (var X, ue = 0; ue <= W.length; ) {
              Z.lastIndex = ue;
              var ee = Z.exec(W);
              if (!ee) break;
              var ce = ee.index + ee[0].length;
              if (ce > W.length - G) break;
              ((!X || ce > X.index + X[0].length) && (X = ee),
                (ue = ee.index + 1));
            }
            return X;
          }
          function K(W, Z, G) {
            Z = m(Z, "g");
            for (
              var X = G.line, ue = G.ch, ee = W.firstLine();
              X >= ee;
              X--, ue = -1
            ) {
              var ce = W.getLine(X),
                ve = L(ce, Z, ue < 0 ? 0 : ce.length - ue);
              if (ve)
                return {
                  from: d(X, ve.index),
                  to: d(X, ve.index + ve[0].length),
                  match: ve,
                };
            }
          }
          function $(W, Z, G) {
            if (!y(Z)) return K(W, Z, G);
            Z = m(Z, "gm");
            for (
              var X,
                ue = 1,
                ee = W.getLine(G.line).length - G.ch,
                ce = G.line,
                ve = W.firstLine();
              ce >= ve;
            ) {
              for (var qe = 0; qe < ue && ce >= ve; qe++) {
                var he = W.getLine(ce--);
                X =
                  X == null
                    ? he
                    : he +
                      `
` +
                      X;
              }
              ue *= 2;
              var Le = L(X, Z, ee);
              if (Le) {
                var Fe = X.slice(0, Le.index).split(`
`),
                  Ne = Le[0].split(`
`),
                  R = ce + Fe.length,
                  le = Fe[Fe.length - 1].length;
                return {
                  from: d(R, le),
                  to: d(
                    R + Ne.length - 1,
                    Ne.length == 1
                      ? le + Ne[0].length
                      : Ne[Ne.length - 1].length,
                  ),
                  match: Le,
                };
              }
            }
          }
          var j, ne;
          String.prototype.normalize
            ? ((j = function (W) {
                return W.normalize("NFD").toLowerCase();
              }),
              (ne = function (W) {
                return W.normalize("NFD");
              }))
            : ((j = function (W) {
                return W.toLowerCase();
              }),
              (ne = function (W) {
                return W;
              }));
          function ae(W, Z, G, X) {
            if (W.length == Z.length) return G;
            for (var ue = 0, ee = G + Math.max(0, W.length - Z.length); ; ) {
              if (ue == ee) return ue;
              var ce = (ue + ee) >> 1,
                ve = X(W.slice(0, ce)).length;
              if (ve == G) return ce;
              ve > G ? (ee = ce) : (ue = ce + 1);
            }
          }
          function we(W, Z, G, X) {
            if (!Z.length) return null;
            var ue = X ? j : ne,
              ee = ue(Z).split(/\r|\n\r?/);
            e: for (
              var ce = G.line, ve = G.ch, qe = W.lastLine() + 1 - ee.length;
              ce <= qe;
              ce++, ve = 0
            ) {
              var he = W.getLine(ce).slice(ve),
                Le = ue(he);
              if (ee.length == 1) {
                var Fe = Le.indexOf(ee[0]);
                if (Fe == -1) continue e;
                var G = ae(he, Le, Fe, ue) + ve;
                return {
                  from: d(ce, ae(he, Le, Fe, ue) + ve),
                  to: d(ce, ae(he, Le, Fe + ee[0].length, ue) + ve),
                };
              } else {
                var Ne = Le.length - ee[0].length;
                if (Le.slice(Ne) != ee[0]) continue e;
                for (var R = 1; R < ee.length - 1; R++)
                  if (ue(W.getLine(ce + R)) != ee[R]) continue e;
                var le = W.getLine(ce + ee.length - 1),
                  re = ue(le),
                  De = ee[ee.length - 1];
                if (re.slice(0, De.length) != De) continue e;
                return {
                  from: d(ce, ae(he, Le, Ne, ue) + ve),
                  to: d(ce + ee.length - 1, ae(le, re, De.length, ue)),
                };
              }
            }
          }
          function Q(W, Z, G, X) {
            if (!Z.length) return null;
            var ue = X ? j : ne,
              ee = ue(Z).split(/\r|\n\r?/);
            e: for (
              var ce = G.line, ve = G.ch, qe = W.firstLine() - 1 + ee.length;
              ce >= qe;
              ce--, ve = -1
            ) {
              var he = W.getLine(ce);
              ve > -1 && (he = he.slice(0, ve));
              var Le = ue(he);
              if (ee.length == 1) {
                var Fe = Le.lastIndexOf(ee[0]);
                if (Fe == -1) continue e;
                return {
                  from: d(ce, ae(he, Le, Fe, ue)),
                  to: d(ce, ae(he, Le, Fe + ee[0].length, ue)),
                };
              } else {
                var Ne = ee[ee.length - 1];
                if (Le.slice(0, Ne.length) != Ne) continue e;
                for (var R = 1, G = ce - ee.length + 1; R < ee.length - 1; R++)
                  if (ue(W.getLine(G + R)) != ee[R]) continue e;
                var le = W.getLine(ce + 1 - ee.length),
                  re = ue(le);
                if (re.slice(re.length - ee[0].length) != ee[0]) continue e;
                return {
                  from: d(
                    ce + 1 - ee.length,
                    ae(le, re, le.length - ee[0].length, ue),
                  ),
                  to: d(ce, ae(he, Le, Ne.length, ue)),
                };
              }
            }
          }
          function te(W, Z, G, X) {
            ((this.atOccurrence = !1),
              (this.afterEmptyMatch = !1),
              (this.doc = W),
              (G = G ? W.clipPos(G) : d(0, 0)),
              (this.pos = { from: G, to: G }));
            var ue;
            (typeof X == "object" ? (ue = X.caseFold) : ((ue = X), (X = null)),
              typeof Z == "string"
                ? (ue == null && (ue = !1),
                  (this.matches = function (ee, ce) {
                    return (ee ? Q : we)(W, Z, ce, ue);
                  }))
                : ((Z = m(Z, "gm")),
                  !X || X.multiline !== !1
                    ? (this.matches = function (ee, ce) {
                        return (ee ? $ : C)(W, Z, ce);
                      })
                    : (this.matches = function (ee, ce) {
                        return (ee ? K : w)(W, Z, ce);
                      })));
          }
          ((te.prototype = {
            findNext: function () {
              return this.find(!1);
            },
            findPrevious: function () {
              return this.find(!0);
            },
            find: function (W) {
              var Z = this.doc.clipPos(W ? this.pos.from : this.pos.to);
              if (
                this.afterEmptyMatch &&
                this.atOccurrence &&
                ((Z = d(Z.line, Z.ch)),
                W
                  ? (Z.ch--,
                    Z.ch < 0 &&
                      (Z.line--,
                      (Z.ch = (this.doc.getLine(Z.line) || "").length)))
                  : (Z.ch++,
                    Z.ch > (this.doc.getLine(Z.line) || "").length &&
                      ((Z.ch = 0), Z.line++)),
                s.cmpPos(Z, this.doc.clipPos(Z)) != 0)
              )
                return (this.atOccurrence = !1);
              var G = this.matches(W, Z);
              if (
                ((this.afterEmptyMatch = G && s.cmpPos(G.from, G.to) == 0), G)
              )
                return (
                  (this.pos = G),
                  (this.atOccurrence = !0),
                  this.pos.match || !0
                );
              var X = d(W ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
              return (
                (this.pos = { from: X, to: X }),
                (this.atOccurrence = !1)
              );
            },
            from: function () {
              if (this.atOccurrence) return this.pos.from;
            },
            to: function () {
              if (this.atOccurrence) return this.pos.to;
            },
            replace: function (W, Z) {
              if (this.atOccurrence) {
                var G = s.splitLines(W);
                (this.doc.replaceRange(G, this.pos.from, this.pos.to, Z),
                  (this.pos.to = d(
                    this.pos.from.line + G.length - 1,
                    G[G.length - 1].length +
                      (G.length == 1 ? this.pos.from.ch : 0),
                  )));
              }
            },
          }),
            s.defineExtension("getSearchCursor", function (W, Z, G) {
              return new te(this.doc, W, Z, G);
            }),
            s.defineDocExtension("getSearchCursor", function (W, Z, G) {
              return new te(this, W, Z, G);
            }),
            s.defineExtension("selectMatches", function (W, Z) {
              for (
                var G = [],
                  X = this.getSearchCursor(W, this.getCursor("from"), Z);
                X.findNext() && !(s.cmpPos(X.to(), this.getCursor("to")) > 0);
              )
                G.push({ anchor: X.from(), head: X.to() });
              G.length && this.setSelections(G, 0);
            }));
        });
      })()),
    Ku.exports
  );
}
var Xu = { exports: {} },
  Yu;
function fv() {
  return (
    Yu ||
      ((Yu = 1),
      (function (a, l) {
        (function (s) {
          s(Ut(), mc(), xc());
        })(function (s) {
          var d =
            /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
          (s.defineMode(
            "gfm",
            function (p, m) {
              var y = 0;
              function w($) {
                return (($.code = !1), null);
              }
              var C = {
                  startState: function () {
                    return { code: !1, codeBlock: !1, ateSpace: !1 };
                  },
                  copyState: function ($) {
                    return {
                      code: $.code,
                      codeBlock: $.codeBlock,
                      ateSpace: $.ateSpace,
                    };
                  },
                  token: function ($, j) {
                    if (((j.combineTokens = null), j.codeBlock))
                      return $.match(/^```+/)
                        ? ((j.codeBlock = !1), null)
                        : ($.skipToEnd(), null);
                    if (($.sol() && (j.code = !1), $.sol() && $.match(/^```+/)))
                      return ($.skipToEnd(), (j.codeBlock = !0), null);
                    if ($.peek() === "`") {
                      $.next();
                      var ne = $.pos;
                      $.eatWhile("`");
                      var ae = 1 + $.pos - ne;
                      return (
                        j.code
                          ? ae === y && (j.code = !1)
                          : ((y = ae), (j.code = !0)),
                        null
                      );
                    } else if (j.code) return ($.next(), null);
                    if ($.eatSpace()) return ((j.ateSpace = !0), null);
                    if (
                      ($.sol() || j.ateSpace) &&
                      ((j.ateSpace = !1), m.gitHubSpice !== !1)
                    ) {
                      if (
                        $.match(
                          /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/,
                        )
                      )
                        return ((j.combineTokens = !0), "link");
                      if (
                        $.match(
                          /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/,
                        )
                      )
                        return ((j.combineTokens = !0), "link");
                    }
                    return $.match(d) &&
                      $.string.slice($.start - 2, $.start) != "](" &&
                      ($.start == 0 || /\W/.test($.string.charAt($.start - 1)))
                      ? ((j.combineTokens = !0), "link")
                      : ($.next(), null);
                  },
                  blankLine: w,
                },
                L = { taskLists: !0, strikethrough: !0, emoji: !0 };
              for (var K in m) L[K] = m[K];
              return ((L.name = "markdown"), s.overlayMode(s.getMode(p, L), C));
            },
            "markdown",
          ),
            s.defineMIME("text/x-gfm", "gfm"));
        });
      })()),
    Xu.exports
  );
}
function cv(a) {
  throw new Error(
    'Could not dynamically require "' +
      a +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var Do = { exports: {} };
const hv = {},
  dv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hv },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  pv = ev(dv);
var Zu;
function gv() {
  return (
    Zu ||
      ((Zu = 1),
      (function (a) {
        var l;
        ((function () {
          ((l = function (s, d, p, m) {
            ((m = m || {}),
              (this.dictionary = null),
              (this.rules = {}),
              (this.dictionaryTable = {}),
              (this.compoundRules = []),
              (this.compoundRuleCodes = {}),
              (this.replacementTable = []),
              (this.flags = m.flags || {}),
              (this.memoized = {}),
              (this.loaded = !1));
            var y = this,
              w,
              C,
              L,
              K,
              $;
            if (s)
              if (((y.dictionary = s), d && p)) Q();
              else if (
                typeof window < "u" &&
                ((window.chrome && window.chrome.runtime) ||
                  (window.browser && window.browser.runtime))
              ) {
                var j =
                  window.chrome && window.chrome.runtime
                    ? window.chrome.runtime
                    : window.browser.runtime;
                (m.dictionaryPath
                  ? (w = m.dictionaryPath)
                  : (w = "typo/dictionaries"),
                  d || ne(j.getURL(w + "/" + s + "/" + s + ".aff"), ae),
                  p || ne(j.getURL(w + "/" + s + "/" + s + ".dic"), we));
              } else
                (m.dictionaryPath
                  ? (w = m.dictionaryPath)
                  : typeof __dirname < "u"
                    ? (w = __dirname + "/dictionaries")
                    : (w = "./dictionaries"),
                  d || ne(w + "/" + s + "/" + s + ".aff", ae),
                  p || ne(w + "/" + s + "/" + s + ".dic", we));
            function ne(te, W) {
              var Z = y._readFile(te, null, m == null ? void 0 : m.asyncLoad);
              m != null && m.asyncLoad
                ? Z.then(function (G) {
                    W(G);
                  })
                : W(Z);
            }
            function ae(te) {
              ((d = te), p && Q());
            }
            function we(te) {
              ((p = te), d && Q());
            }
            function Q() {
              for (
                y.rules = y._parseAFF(d),
                  y.compoundRuleCodes = {},
                  C = 0,
                  K = y.compoundRules.length;
                C < K;
                C++
              ) {
                var te = y.compoundRules[C];
                for (L = 0, $ = te.length; L < $; L++)
                  y.compoundRuleCodes[te[L]] = [];
              }
              ("ONLYINCOMPOUND" in y.flags &&
                (y.compoundRuleCodes[y.flags.ONLYINCOMPOUND] = []),
                (y.dictionaryTable = y._parseDIC(p)));
              for (C in y.compoundRuleCodes)
                y.compoundRuleCodes[C].length === 0 &&
                  delete y.compoundRuleCodes[C];
              for (C = 0, K = y.compoundRules.length; C < K; C++) {
                var W = y.compoundRules[C],
                  Z = "";
                for (L = 0, $ = W.length; L < $; L++) {
                  var G = W[L];
                  G in y.compoundRuleCodes
                    ? (Z += "(" + y.compoundRuleCodes[G].join("|") + ")")
                    : (Z += G);
                }
                y.compoundRules[C] = new RegExp("^" + Z + "$", "i");
              }
              ((y.loaded = !0),
                m != null &&
                  m.asyncLoad &&
                  m != null &&
                  m.loadedCallback &&
                  m.loadedCallback(y));
            }
            return this;
          }),
            (l.prototype = {
              load: function (s) {
                for (var d in s) s.hasOwnProperty(d) && (this[d] = s[d]);
                return this;
              },
              _readFile: function (s, d, p) {
                var m;
                if (((d = d || "utf8"), typeof XMLHttpRequest < "u")) {
                  var y = new XMLHttpRequest();
                  if (
                    (y.open("GET", s, !!p),
                    (m = y.overrideMimeType) === null ||
                      m === void 0 ||
                      m.call(y, "text/plain; charset=" + d),
                    p)
                  ) {
                    var w = new Promise(function (L, K) {
                      ((y.onload = function () {
                        y.status === 200 ? L(y.responseText) : K(y.statusText);
                      }),
                        (y.onerror = function () {
                          K(y.statusText);
                        }));
                    });
                    return (y.send(null), w);
                  } else return (y.send(null), y.responseText);
                } else if (typeof cv < "u") {
                  var C = pv;
                  try {
                    if (C.existsSync(s)) return C.readFileSync(s, d);
                    console.log("Path " + s + " does not exist.");
                  } catch (L) {
                    console.log(L);
                  }
                  return "";
                }
                return "";
              },
              _parseAFF: function (s) {
                var d = {},
                  p,
                  m,
                  y,
                  w,
                  C,
                  L,
                  K,
                  $,
                  j = s.split(/\r?\n/);
                for (C = 0, K = j.length; C < K; C++)
                  if (
                    ((p = this._removeAffixComments(j[C])), (p = p.trim()), !!p)
                  ) {
                    var ne = p.split(/\s+/),
                      ae = ne[0];
                    if (ae === "PFX" || ae === "SFX") {
                      var we = ne[1],
                        Q = ne[2];
                      y = parseInt(ne[3], 10);
                      var te = [];
                      for (L = C + 1, $ = C + 1 + y; L < $; L++) {
                        ((m = j[L]), (w = m.split(/\s+/)));
                        var W = w[2],
                          Z = w[3].split("/"),
                          G = Z[0];
                        G === "0" && (G = "");
                        var X = this.parseRuleCodes(Z[1]),
                          ue = w[4],
                          ee = { add: G };
                        (X.length > 0 && (ee.continuationClasses = X),
                          ue !== "." &&
                            (ae === "SFX"
                              ? (ee.match = new RegExp(ue + "$"))
                              : (ee.match = new RegExp("^" + ue))),
                          W != "0" &&
                            (ae === "SFX"
                              ? (ee.remove = new RegExp(W + "$"))
                              : (ee.remove = W)),
                          te.push(ee));
                      }
                      ((d[we] = {
                        type: ae,
                        combineable: Q === "Y",
                        entries: te,
                      }),
                        (C += y));
                    } else if (ae === "COMPOUNDRULE") {
                      for (
                        y = parseInt(ne[1], 10), L = C + 1, $ = C + 1 + y;
                        L < $;
                        L++
                      )
                        ((p = j[L]),
                          (w = p.split(/\s+/)),
                          this.compoundRules.push(w[1]));
                      C += y;
                    } else
                      ae === "REP"
                        ? ((w = p.split(/\s+/)),
                          w.length === 3 &&
                            this.replacementTable.push([w[1], w[2]]))
                        : (this.flags[ae] = ne[1]);
                  }
                return d;
              },
              _removeAffixComments: function (s) {
                return s.match(/^\s*#/) ? "" : s;
              },
              _parseDIC: function (s) {
                s = this._removeDicComments(s);
                var d = s.split(/\r?\n/),
                  p = {};
                function m(Le, Fe) {
                  (p.hasOwnProperty(Le) || (p[Le] = null),
                    Fe.length > 0 &&
                      (p[Le] === null && (p[Le] = []), p[Le].push(Fe)));
                }
                for (var y = 1, w = d.length; y < w; y++) {
                  var C = d[y];
                  if (C) {
                    var L = C.replace(/\s.*$/, ""),
                      K = L.split("/", 2),
                      $ = K[0];
                    if (K.length > 1) {
                      var j = this.parseRuleCodes(K[1]);
                      (!("NEEDAFFIX" in this.flags) ||
                        j.indexOf(this.flags.NEEDAFFIX) === -1) &&
                        m($, j);
                      for (var ne = 0, ae = j.length; ne < ae; ne++) {
                        var we = j[ne],
                          Q = this.rules[we];
                        if (Q)
                          for (
                            var te = this._applyRule($, Q),
                              W = 0,
                              Z = te.length;
                            W < Z;
                            W++
                          ) {
                            var G = te[W];
                            if ((m(G, []), Q.combineable))
                              for (var X = ne + 1; X < ae; X++) {
                                var ue = j[X],
                                  ee = this.rules[ue];
                                if (ee && ee.combineable && Q.type != ee.type)
                                  for (
                                    var ce = this._applyRule(G, ee),
                                      ve = 0,
                                      qe = ce.length;
                                    ve < qe;
                                    ve++
                                  ) {
                                    var he = ce[ve];
                                    m(he, []);
                                  }
                              }
                          }
                        we in this.compoundRuleCodes &&
                          this.compoundRuleCodes[we].push($);
                      }
                    } else m($.trim(), []);
                  }
                }
                return p;
              },
              _removeDicComments: function (s) {
                return ((s = s.replace(/^\t.*$/gm, "")), s);
              },
              parseRuleCodes: function (s) {
                if (s)
                  if ("FLAG" in this.flags)
                    if (this.flags.FLAG === "long") {
                      for (var d = [], p = 0, m = s.length; p < m; p += 2)
                        d.push(s.substr(p, 2));
                      return d;
                    } else
                      return this.flags.FLAG === "num"
                        ? s.split(",")
                        : this.flags.FLAG === "UTF-8"
                          ? Array.from(s)
                          : s.split("");
                  else return s.split("");
                else return [];
              },
              _applyRule: function (s, d) {
                for (
                  var p = d.entries, m = [], y = 0, w = p.length;
                  y < w;
                  y++
                ) {
                  var C = p[y];
                  if (!C.match || s.match(C.match)) {
                    var L = s;
                    if (
                      (C.remove && (L = L.replace(C.remove, "")),
                      d.type === "SFX" ? (L = L + C.add) : (L = C.add + L),
                      m.push(L),
                      "continuationClasses" in C)
                    )
                      for (
                        var K = 0, $ = C.continuationClasses.length;
                        K < $;
                        K++
                      ) {
                        var j = this.rules[C.continuationClasses[K]];
                        j && (m = m.concat(this._applyRule(L, j)));
                      }
                  }
                }
                return m;
              },
              check: function (s) {
                if (!this.loaded) throw "Dictionary not loaded.";
                if (!s) return !1;
                var d = s.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                if (this.checkExact(d)) return !0;
                if (d.toUpperCase() === d) {
                  var p = d[0] + d.substring(1).toLowerCase();
                  if (this.hasFlag(p, "KEEPCASE")) return !1;
                  if (this.checkExact(p) || this.checkExact(d.toLowerCase()))
                    return !0;
                }
                var m = d[0].toLowerCase() + d.substring(1);
                if (m !== d) {
                  if (this.hasFlag(m, "KEEPCASE")) return !1;
                  if (this.checkExact(m)) return !0;
                }
                return !1;
              },
              checkExact: function (s) {
                if (!this.loaded) throw "Dictionary not loaded.";
                var d = this.dictionaryTable[s],
                  p,
                  m;
                if (typeof d > "u") {
                  if (
                    "COMPOUNDMIN" in this.flags &&
                    s.length >= this.flags.COMPOUNDMIN
                  ) {
                    for (p = 0, m = this.compoundRules.length; p < m; p++)
                      if (s.match(this.compoundRules[p])) return !0;
                  }
                } else {
                  if (d === null) return !0;
                  if (typeof d == "object") {
                    for (p = 0, m = d.length; p < m; p++)
                      if (!this.hasFlag(s, "ONLYINCOMPOUND", d[p])) return !0;
                  }
                }
                return !1;
              },
              hasFlag: function (s, d, p) {
                if (!this.loaded) throw "Dictionary not loaded.";
                return !!(
                  d in this.flags &&
                  (typeof p > "u" &&
                    (p = Array.prototype.concat.apply(
                      [],
                      this.dictionaryTable[s],
                    )),
                  p && p.indexOf(this.flags[d]) !== -1)
                );
              },
              alphabet: "",
              suggest: function (s, d) {
                if (!this.loaded) throw "Dictionary not loaded.";
                if (((d = d || 5), this.memoized.hasOwnProperty(s))) {
                  var p = this.memoized[s].limit;
                  if (d <= p || this.memoized[s].suggestions.length < p)
                    return this.memoized[s].suggestions.slice(0, d);
                }
                if (this.check(s)) return [];
                for (var m = 0, y = this.replacementTable.length; m < y; m++) {
                  var w = this.replacementTable[m];
                  if (s.indexOf(w[0]) !== -1) {
                    var C = s.replace(w[0], w[1]);
                    if (this.check(C)) return [C];
                  }
                }
                if (!this.alphabet) {
                  ((this.alphabet =
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
                    "TRY" in this.flags && (this.alphabet += this.flags.TRY),
                    "WORDCHARS" in this.flags &&
                      (this.alphabet += this.flags.WORDCHARS));
                  var L = this.alphabet.split("");
                  L.sort();
                  for (var K = {}, m = 0; m < L.length; m++) K[L[m]] = !0;
                  this.alphabet = "";
                  for (var m in K) this.alphabet += m;
                }
                var $ = this;
                function j(ae, we) {
                  var Q = {},
                    te,
                    W,
                    Z,
                    G,
                    X = $.alphabet.length;
                  for (var ue in ae)
                    for (te = 0, Z = ue.length + 1; te < Z; te++) {
                      var ee = [ue.substring(0, te), ue.substring(te)];
                      if (
                        (ee[1] &&
                          ((G = ee[0] + ee[1].substring(1)),
                          (!we || $.check(G)) &&
                            (G in Q ? (Q[G] += 1) : (Q[G] = 1))),
                        ee[1].length > 1 &&
                          ee[1][1] !== ee[1][0] &&
                          ((G =
                            ee[0] + ee[1][1] + ee[1][0] + ee[1].substring(2)),
                          (!we || $.check(G)) &&
                            (G in Q ? (Q[G] += 1) : (Q[G] = 1))),
                        ee[1])
                      ) {
                        var ce =
                          ee[1].substring(0, 1).toUpperCase() ===
                          ee[1].substring(0, 1)
                            ? "uppercase"
                            : "lowercase";
                        for (W = 0; W < X; W++) {
                          var ve = $.alphabet[W];
                          (ce === "uppercase" && (ve = ve.toUpperCase()),
                            ve != ee[1].substring(0, 1) &&
                              ((G = ee[0] + ve + ee[1].substring(1)),
                              (!we || $.check(G)) &&
                                (G in Q ? (Q[G] += 1) : (Q[G] = 1))));
                        }
                      }
                      if (ee[1])
                        for (W = 0; W < X; W++) {
                          var ce =
                              ee[0].substring(-1).toUpperCase() ===
                                ee[0].substring(-1) &&
                              ee[1].substring(0, 1).toUpperCase() ===
                                ee[1].substring(0, 1)
                                ? "uppercase"
                                : "lowercase",
                            ve = $.alphabet[W];
                          (ce === "uppercase" && (ve = ve.toUpperCase()),
                            (G = ee[0] + ve + ee[1]),
                            (!we || $.check(G)) &&
                              (G in Q ? (Q[G] += 1) : (Q[G] = 1)));
                        }
                    }
                  return Q;
                }
                function ne(ae) {
                  var we,
                    Q = j(((we = {}), (we[ae] = !0), we)),
                    te = j(Q, !0),
                    W = te;
                  for (var Z in Q)
                    $.check(Z) && (Z in W ? (W[Z] += Q[Z]) : (W[Z] = Q[Z]));
                  var G,
                    X = [];
                  for (G in W)
                    W.hasOwnProperty(G) &&
                      ($.hasFlag(G, "PRIORITYSUGGEST") && (W[G] += 1e3),
                      X.push([G, W[G]]));
                  function ue(qe, he) {
                    var Le = qe[1],
                      Fe = he[1];
                    return Le < Fe
                      ? -1
                      : Le > Fe
                        ? 1
                        : he[0].localeCompare(qe[0]);
                  }
                  X.sort(ue).reverse();
                  var ee = [],
                    ce = "lowercase";
                  ae.toUpperCase() === ae
                    ? (ce = "uppercase")
                    : ae.substr(0, 1).toUpperCase() +
                        ae.substr(1).toLowerCase() ===
                        ae && (ce = "capitalized");
                  var ve = d;
                  for (G = 0; G < Math.min(ve, X.length); G++)
                    (ce === "uppercase"
                      ? (X[G][0] = X[G][0].toUpperCase())
                      : ce === "capitalized" &&
                        (X[G][0] =
                          X[G][0].substr(0, 1).toUpperCase() +
                          X[G][0].substr(1)),
                      !$.hasFlag(X[G][0], "NOSUGGEST") &&
                      ee.indexOf(X[G][0]) === -1
                        ? ee.push(X[G][0])
                        : ve++);
                  return ee;
                }
                return (
                  (this.memoized[s] = { suggestions: ne(s), limit: d }),
                  this.memoized[s].suggestions
                );
              },
            }));
        })(),
          (a.exports = l));
      })(Do)),
    Do.exports
  );
}
var wo, Ju;
function vv() {
  if (Ju) return wo;
  Ju = 1;
  var a = gv();
  function l(s) {
    if (
      ((s = s || {}),
      typeof s.codeMirrorInstance != "function" ||
        typeof s.codeMirrorInstance.defineMode != "function")
    ) {
      console.log(
        "CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`",
      );
      return;
    }
    (String.prototype.includes ||
      (String.prototype.includes = function () {
        return String.prototype.indexOf.apply(this, arguments) !== -1;
      }),
      s.codeMirrorInstance.defineMode("spell-checker", function (d) {
        if (!l.aff_loading) {
          l.aff_loading = !0;
          var p = new XMLHttpRequest();
          (p.open(
            "GET",
            "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff",
            !0,
          ),
            (p.onload = function () {
              p.readyState === 4 &&
                p.status === 200 &&
                ((l.aff_data = p.responseText),
                l.num_loaded++,
                l.num_loaded == 2 &&
                  (l.typo = new a("en_US", l.aff_data, l.dic_data, {
                    platform: "any",
                  })));
            }),
            p.send(null));
        }
        if (!l.dic_loading) {
          l.dic_loading = !0;
          var m = new XMLHttpRequest();
          (m.open(
            "GET",
            "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic",
            !0,
          ),
            (m.onload = function () {
              m.readyState === 4 &&
                m.status === 200 &&
                ((l.dic_data = m.responseText),
                l.num_loaded++,
                l.num_loaded == 2 &&
                  (l.typo = new a("en_US", l.aff_data, l.dic_data, {
                    platform: "any",
                  })));
            }),
            m.send(null));
        }
        var y = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
          w = {
            token: function (L) {
              var K = L.peek(),
                $ = "";
              if (y.includes(K)) return (L.next(), null);
              for (; (K = L.peek()) != null && !y.includes(K); )
                (($ += K), L.next());
              return l.typo && !l.typo.check($) ? "spell-error" : null;
            },
          },
          C = s.codeMirrorInstance.getMode(d, d.backdrop || "text/plain");
        return s.codeMirrorInstance.overlayMode(C, w, !0);
      }));
  }
  return (
    (l.num_loaded = 0),
    (l.aff_loading = !1),
    (l.dic_loading = !1),
    (l.aff_data = ""),
    (l.dic_data = ""),
    l.typo,
    (wo = l),
    wo
  );
}
var Co = {},
  Qu;
function mv() {
  return (
    Qu ||
      ((Qu = 1),
      (function (a) {
        function l(q, U) {
          for (var I = 0; I < U.length; I++) {
            var b = U[I];
            ((b.enumerable = b.enumerable || !1),
              (b.configurable = !0),
              "value" in b && (b.writable = !0),
              Object.defineProperty(q, C(b.key), b));
          }
        }
        function s(q, U, I) {
          return (
            I && l(q, I),
            Object.defineProperty(q, "prototype", { writable: !1 }),
            q
          );
        }
        function d() {
          return (
            (d = Object.assign
              ? Object.assign.bind()
              : function (q) {
                  for (var U = 1; U < arguments.length; U++) {
                    var I = arguments[U];
                    for (var b in I)
                      Object.prototype.hasOwnProperty.call(I, b) &&
                        (q[b] = I[b]);
                  }
                  return q;
                }),
            d.apply(this, arguments)
          );
        }
        function p(q, U) {
          if (q) {
            if (typeof q == "string") return m(q, U);
            var I = Object.prototype.toString.call(q).slice(8, -1);
            if (
              (I === "Object" && q.constructor && (I = q.constructor.name),
              I === "Map" || I === "Set")
            )
              return Array.from(q);
            if (
              I === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)
            )
              return m(q, U);
          }
        }
        function m(q, U) {
          (U == null || U > q.length) && (U = q.length);
          for (var I = 0, b = new Array(U); I < U; I++) b[I] = q[I];
          return b;
        }
        function y(q, U) {
          var I =
            (typeof Symbol < "u" && q[Symbol.iterator]) || q["@@iterator"];
          if (I) return (I = I.call(q)).next.bind(I);
          if (Array.isArray(q) || (I = p(q)) || U) {
            I && (q = I);
            var b = 0;
            return function () {
              return b >= q.length ? { done: !0 } : { done: !1, value: q[b++] };
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function w(q, U) {
          if (typeof q != "object" || q === null) return q;
          var I = q[Symbol.toPrimitive];
          if (I !== void 0) {
            var b = I.call(q, U);
            if (typeof b != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(q);
        }
        function C(q) {
          var U = w(q, "string");
          return typeof U == "symbol" ? U : String(U);
        }
        function L() {
          return {
            async: !1,
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            hooks: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1,
          };
        }
        a.defaults = L();
        function K(q) {
          a.defaults = q;
        }
        var $ = /[&<>"']/,
          j = new RegExp($.source, "g"),
          ne = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
          ae = new RegExp(ne.source, "g"),
          we = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          },
          Q = function (U) {
            return we[U];
          };
        function te(q, U) {
          if (U) {
            if ($.test(q)) return q.replace(j, Q);
          } else if (ne.test(q)) return q.replace(ae, Q);
          return q;
        }
        var W = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
        function Z(q) {
          return q.replace(W, function (U, I) {
            return (
              (I = I.toLowerCase()),
              I === "colon"
                ? ":"
                : I.charAt(0) === "#"
                  ? I.charAt(1) === "x"
                    ? String.fromCharCode(parseInt(I.substring(2), 16))
                    : String.fromCharCode(+I.substring(1))
                  : ""
            );
          });
        }
        var G = /(^|[^\[])\^/g;
        function X(q, U) {
          ((q = typeof q == "string" ? q : q.source), (U = U || ""));
          var I = {
            replace: function (x, M) {
              return (
                (M = M.source || M),
                (M = M.replace(G, "$1")),
                (q = q.replace(x, M)),
                I
              );
            },
            getRegex: function () {
              return new RegExp(q, U);
            },
          };
          return I;
        }
        var ue = /[^\w:]/g,
          ee = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function ce(q, U, I) {
          if (q) {
            var b;
            try {
              b = decodeURIComponent(Z(I)).replace(ue, "").toLowerCase();
            } catch {
              return null;
            }
            if (
              b.indexOf("javascript:") === 0 ||
              b.indexOf("vbscript:") === 0 ||
              b.indexOf("data:") === 0
            )
              return null;
          }
          U && !ee.test(I) && (I = Fe(U, I));
          try {
            I = encodeURI(I).replace(/%25/g, "%");
          } catch {
            return null;
          }
          return I;
        }
        var ve = {},
          qe = /^[^:]+:\/*[^/]*$/,
          he = /^([^:]+:)[\s\S]*$/,
          Le = /^([^:]+:\/*[^/]*)[\s\S]*$/;
        function Fe(q, U) {
          (ve[" " + q] ||
            (qe.test(q)
              ? (ve[" " + q] = q + "/")
              : (ve[" " + q] = le(q, "/", !0))),
            (q = ve[" " + q]));
          var I = q.indexOf(":") === -1;
          return U.substring(0, 2) === "//"
            ? I
              ? U
              : q.replace(he, "$1") + U
            : U.charAt(0) === "/"
              ? I
                ? U
                : q.replace(Le, "$1") + U
              : q + U;
        }
        var Ne = { exec: function () {} };
        function R(q, U) {
          var I = q.replace(/\|/g, function (M, f, g) {
              for (var S = !1, E = f; --E >= 0 && g[E] === "\\"; ) S = !S;
              return S ? "|" : " |";
            }),
            b = I.split(/ \|/),
            x = 0;
          if (
            (b[0].trim() || b.shift(),
            b.length > 0 && !b[b.length - 1].trim() && b.pop(),
            b.length > U)
          )
            b.splice(U);
          else for (; b.length < U; ) b.push("");
          for (; x < b.length; x++) b[x] = b[x].trim().replace(/\\\|/g, "|");
          return b;
        }
        function le(q, U, I) {
          var b = q.length;
          if (b === 0) return "";
          for (var x = 0; x < b; ) {
            var M = q.charAt(b - x - 1);
            if (M === U && !I) x++;
            else if (M !== U && I) x++;
            else break;
          }
          return q.slice(0, b - x);
        }
        function re(q, U) {
          if (q.indexOf(U[1]) === -1) return -1;
          for (var I = q.length, b = 0, x = 0; x < I; x++)
            if (q[x] === "\\") x++;
            else if (q[x] === U[0]) b++;
            else if (q[x] === U[1] && (b--, b < 0)) return x;
          return -1;
        }
        function De(q) {
          q &&
            q.sanitize &&
            !q.silent &&
            console.warn(
              "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options",
            );
        }
        function ze(q, U) {
          if (U < 1) return "";
          for (var I = ""; U > 1; ) (U & 1 && (I += q), (U >>= 1), (q += q));
          return I + q;
        }
        function nt(q, U, I, b) {
          var x = U.href,
            M = U.title ? te(U.title) : null,
            f = q[1].replace(/\\([\[\]])/g, "$1");
          if (q[0].charAt(0) !== "!") {
            b.state.inLink = !0;
            var g = {
              type: "link",
              raw: I,
              href: x,
              title: M,
              text: f,
              tokens: b.inlineTokens(f),
            };
            return ((b.state.inLink = !1), g);
          }
          return { type: "image", raw: I, href: x, title: M, text: te(f) };
        }
        function Kt(q, U) {
          var I = q.match(/^(\s+)(?:```)/);
          if (I === null) return U;
          var b = I[1];
          return U.split(
            `
`,
          ).map(function (x) {
            var M = x.match(/^\s+/);
            if (M === null) return x;
            var f = M[0];
            return f.length >= b.length ? x.slice(b.length) : x;
          }).join(`
`);
        }
        var T = (function () {
            function q(I) {
              this.options = I || a.defaults;
            }
            var U = q.prototype;
            return (
              (U.space = function (b) {
                var x = this.rules.block.newline.exec(b);
                if (x && x[0].length > 0) return { type: "space", raw: x[0] };
              }),
              (U.code = function (b) {
                var x = this.rules.block.code.exec(b);
                if (x) {
                  var M = x[0].replace(/^ {1,4}/gm, "");
                  return {
                    type: "code",
                    raw: x[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic
                      ? M
                      : le(
                          M,
                          `
`,
                        ),
                  };
                }
              }),
              (U.fences = function (b) {
                var x = this.rules.block.fences.exec(b);
                if (x) {
                  var M = x[0],
                    f = Kt(M, x[3] || "");
                  return {
                    type: "code",
                    raw: M,
                    lang: x[2]
                      ? x[2].trim().replace(this.rules.inline._escapes, "$1")
                      : x[2],
                    text: f,
                  };
                }
              }),
              (U.heading = function (b) {
                var x = this.rules.block.heading.exec(b);
                if (x) {
                  var M = x[2].trim();
                  if (/#$/.test(M)) {
                    var f = le(M, "#");
                    (this.options.pedantic || !f || / $/.test(f)) &&
                      (M = f.trim());
                  }
                  return {
                    type: "heading",
                    raw: x[0],
                    depth: x[1].length,
                    text: M,
                    tokens: this.lexer.inline(M),
                  };
                }
              }),
              (U.hr = function (b) {
                var x = this.rules.block.hr.exec(b);
                if (x) return { type: "hr", raw: x[0] };
              }),
              (U.blockquote = function (b) {
                var x = this.rules.block.blockquote.exec(b);
                if (x) {
                  var M = x[0].replace(/^ *>[ \t]?/gm, ""),
                    f = this.lexer.state.top;
                  this.lexer.state.top = !0;
                  var g = this.lexer.blockTokens(M);
                  return (
                    (this.lexer.state.top = f),
                    { type: "blockquote", raw: x[0], tokens: g, text: M }
                  );
                }
              }),
              (U.list = function (b) {
                var x = this.rules.block.list.exec(b);
                if (x) {
                  var M,
                    f,
                    g,
                    S,
                    E,
                    _,
                    z,
                    B,
                    F,
                    P,
                    N,
                    fe,
                    xe = x[1].trim(),
                    ye = xe.length > 1,
                    se = {
                      type: "list",
                      raw: "",
                      ordered: ye,
                      start: ye ? +xe.slice(0, -1) : "",
                      loose: !1,
                      items: [],
                    };
                  ((xe = ye ? "\\d{1,9}\\" + xe.slice(-1) : "\\" + xe),
                    this.options.pedantic && (xe = ye ? xe : "[*+-]"));
                  for (
                    var _e = new RegExp(
                      "^( {0,3}" + xe + ")((?:[	 ][^\\n]*)?(?:\\n|$))",
                    );
                    b &&
                    ((fe = !1),
                    !(!(x = _e.exec(b)) || this.rules.block.hr.test(b)));
                  ) {
                    if (
                      ((M = x[0]),
                      (b = b.substring(M.length)),
                      (B = x[2]
                        .split(
                          `
`,
                          1,
                        )[0]
                        .replace(/^\t+/, function (kt) {
                          return " ".repeat(3 * kt.length);
                        })),
                      (F = b.split(
                        `
`,
                        1,
                      )[0]),
                      this.options.pedantic
                        ? ((S = 2), (N = B.trimLeft()))
                        : ((S = x[2].search(/[^ ]/)),
                          (S = S > 4 ? 1 : S),
                          (N = B.slice(S)),
                          (S += x[1].length)),
                      (_ = !1),
                      !B &&
                        /^ *$/.test(F) &&
                        ((M +=
                          F +
                          `
`),
                        (b = b.substring(F.length + 1)),
                        (fe = !0)),
                      !fe)
                    )
                      for (
                        var Me = new RegExp(
                            "^ {0," +
                              Math.min(3, S - 1) +
                              "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))",
                          ),
                          Ie = new RegExp(
                            "^ {0," +
                              Math.min(3, S - 1) +
                              "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)",
                          ),
                          Ee = new RegExp(
                            "^ {0," + Math.min(3, S - 1) + "}(?:```|~~~)",
                          ),
                          $e = new RegExp("^ {0," + Math.min(3, S - 1) + "}#");
                        b &&
                        ((P = b.split(
                          `
`,
                          1,
                        )[0]),
                        (F = P),
                        this.options.pedantic &&
                          (F = F.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                        !(
                          Ee.test(F) ||
                          $e.test(F) ||
                          Me.test(F) ||
                          Ie.test(b)
                        ));
                      ) {
                        if (F.search(/[^ ]/) >= S || !F.trim())
                          N +=
                            `
` + F.slice(S);
                        else {
                          if (
                            _ ||
                            B.search(/[^ ]/) >= 4 ||
                            Ee.test(B) ||
                            $e.test(B) ||
                            Ie.test(B)
                          )
                            break;
                          N +=
                            `
` + F;
                        }
                        (!_ && !F.trim() && (_ = !0),
                          (M +=
                            P +
                            `
`),
                          (b = b.substring(P.length + 1)),
                          (B = F.slice(S)));
                      }
                    (se.loose ||
                      (z ? (se.loose = !0) : /\n *\n *$/.test(M) && (z = !0)),
                      this.options.gfm &&
                        ((f = /^\[[ xX]\] /.exec(N)),
                        f &&
                          ((g = f[0] !== "[ ] "),
                          (N = N.replace(/^\[[ xX]\] +/, "")))),
                      se.items.push({
                        type: "list_item",
                        raw: M,
                        task: !!f,
                        checked: g,
                        loose: !1,
                        text: N,
                      }),
                      (se.raw += M));
                  }
                  ((se.items[se.items.length - 1].raw = M.trimRight()),
                    (se.items[se.items.length - 1].text = N.trimRight()),
                    (se.raw = se.raw.trimRight()));
                  var Ye = se.items.length;
                  for (E = 0; E < Ye; E++)
                    if (
                      ((this.lexer.state.top = !1),
                      (se.items[E].tokens = this.lexer.blockTokens(
                        se.items[E].text,
                        [],
                      )),
                      !se.loose)
                    ) {
                      var ft = se.items[E].tokens.filter(function (kt) {
                          return kt.type === "space";
                        }),
                        Et =
                          ft.length > 0 &&
                          ft.some(function (kt) {
                            return /\n.*\n/.test(kt.raw);
                          });
                      se.loose = Et;
                    }
                  if (se.loose) for (E = 0; E < Ye; E++) se.items[E].loose = !0;
                  return se;
                }
              }),
              (U.html = function (b) {
                var x = this.rules.block.html.exec(b);
                if (x) {
                  var M = {
                    type: "html",
                    raw: x[0],
                    pre:
                      !this.options.sanitizer &&
                      (x[1] === "pre" || x[1] === "script" || x[1] === "style"),
                    text: x[0],
                  };
                  if (this.options.sanitize) {
                    var f = this.options.sanitizer
                      ? this.options.sanitizer(x[0])
                      : te(x[0]);
                    ((M.type = "paragraph"),
                      (M.text = f),
                      (M.tokens = this.lexer.inline(f)));
                  }
                  return M;
                }
              }),
              (U.def = function (b) {
                var x = this.rules.block.def.exec(b);
                if (x) {
                  var M = x[1].toLowerCase().replace(/\s+/g, " "),
                    f = x[2]
                      ? x[2]
                          .replace(/^<(.*)>$/, "$1")
                          .replace(this.rules.inline._escapes, "$1")
                      : "",
                    g = x[3]
                      ? x[3]
                          .substring(1, x[3].length - 1)
                          .replace(this.rules.inline._escapes, "$1")
                      : x[3];
                  return { type: "def", tag: M, raw: x[0], href: f, title: g };
                }
              }),
              (U.table = function (b) {
                var x = this.rules.block.table.exec(b);
                if (x) {
                  var M = {
                    type: "table",
                    header: R(x[1]).map(function (z) {
                      return { text: z };
                    }),
                    align: x[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    rows:
                      x[3] && x[3].trim()
                        ? x[3].replace(/\n[ \t]*$/, "").split(`
`)
                        : [],
                  };
                  if (M.header.length === M.align.length) {
                    M.raw = x[0];
                    var f = M.align.length,
                      g,
                      S,
                      E,
                      _;
                    for (g = 0; g < f; g++)
                      /^ *-+: *$/.test(M.align[g])
                        ? (M.align[g] = "right")
                        : /^ *:-+: *$/.test(M.align[g])
                          ? (M.align[g] = "center")
                          : /^ *:-+ *$/.test(M.align[g])
                            ? (M.align[g] = "left")
                            : (M.align[g] = null);
                    for (f = M.rows.length, g = 0; g < f; g++)
                      M.rows[g] = R(M.rows[g], M.header.length).map(
                        function (z) {
                          return { text: z };
                        },
                      );
                    for (f = M.header.length, S = 0; S < f; S++)
                      M.header[S].tokens = this.lexer.inline(M.header[S].text);
                    for (f = M.rows.length, S = 0; S < f; S++)
                      for (_ = M.rows[S], E = 0; E < _.length; E++)
                        _[E].tokens = this.lexer.inline(_[E].text);
                    return M;
                  }
                }
              }),
              (U.lheading = function (b) {
                var x = this.rules.block.lheading.exec(b);
                if (x)
                  return {
                    type: "heading",
                    raw: x[0],
                    depth: x[2].charAt(0) === "=" ? 1 : 2,
                    text: x[1],
                    tokens: this.lexer.inline(x[1]),
                  };
              }),
              (U.paragraph = function (b) {
                var x = this.rules.block.paragraph.exec(b);
                if (x) {
                  var M =
                    x[1].charAt(x[1].length - 1) ===
                    `
`
                      ? x[1].slice(0, -1)
                      : x[1];
                  return {
                    type: "paragraph",
                    raw: x[0],
                    text: M,
                    tokens: this.lexer.inline(M),
                  };
                }
              }),
              (U.text = function (b) {
                var x = this.rules.block.text.exec(b);
                if (x)
                  return {
                    type: "text",
                    raw: x[0],
                    text: x[0],
                    tokens: this.lexer.inline(x[0]),
                  };
              }),
              (U.escape = function (b) {
                var x = this.rules.inline.escape.exec(b);
                if (x) return { type: "escape", raw: x[0], text: te(x[1]) };
              }),
              (U.tag = function (b) {
                var x = this.rules.inline.tag.exec(b);
                if (x)
                  return (
                    !this.lexer.state.inLink && /^<a /i.test(x[0])
                      ? (this.lexer.state.inLink = !0)
                      : this.lexer.state.inLink &&
                        /^<\/a>/i.test(x[0]) &&
                        (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock &&
                    /^<(pre|code|kbd|script)(\s|>)/i.test(x[0])
                      ? (this.lexer.state.inRawBlock = !0)
                      : this.lexer.state.inRawBlock &&
                        /^<\/(pre|code|kbd|script)(\s|>)/i.test(x[0]) &&
                        (this.lexer.state.inRawBlock = !1),
                    {
                      type: this.options.sanitize ? "text" : "html",
                      raw: x[0],
                      inLink: this.lexer.state.inLink,
                      inRawBlock: this.lexer.state.inRawBlock,
                      text: this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(x[0])
                          : te(x[0])
                        : x[0],
                    }
                  );
              }),
              (U.link = function (b) {
                var x = this.rules.inline.link.exec(b);
                if (x) {
                  var M = x[2].trim();
                  if (!this.options.pedantic && /^</.test(M)) {
                    if (!/>$/.test(M)) return;
                    var f = le(M.slice(0, -1), "\\");
                    if ((M.length - f.length) % 2 === 0) return;
                  } else {
                    var g = re(x[2], "()");
                    if (g > -1) {
                      var S = x[0].indexOf("!") === 0 ? 5 : 4,
                        E = S + x[1].length + g;
                      ((x[2] = x[2].substring(0, g)),
                        (x[0] = x[0].substring(0, E).trim()),
                        (x[3] = ""));
                    }
                  }
                  var _ = x[2],
                    z = "";
                  if (this.options.pedantic) {
                    var B = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(_);
                    B && ((_ = B[1]), (z = B[3]));
                  } else z = x[3] ? x[3].slice(1, -1) : "";
                  return (
                    (_ = _.trim()),
                    /^</.test(_) &&
                      (this.options.pedantic && !/>$/.test(M)
                        ? (_ = _.slice(1))
                        : (_ = _.slice(1, -1))),
                    nt(
                      x,
                      {
                        href: _ && _.replace(this.rules.inline._escapes, "$1"),
                        title: z && z.replace(this.rules.inline._escapes, "$1"),
                      },
                      x[0],
                      this.lexer,
                    )
                  );
                }
              }),
              (U.reflink = function (b, x) {
                var M;
                if (
                  (M = this.rules.inline.reflink.exec(b)) ||
                  (M = this.rules.inline.nolink.exec(b))
                ) {
                  var f = (M[2] || M[1]).replace(/\s+/g, " ");
                  if (((f = x[f.toLowerCase()]), !f)) {
                    var g = M[0].charAt(0);
                    return { type: "text", raw: g, text: g };
                  }
                  return nt(M, f, M[0], this.lexer);
                }
              }),
              (U.emStrong = function (b, x, M) {
                M === void 0 && (M = "");
                var f = this.rules.inline.emStrong.lDelim.exec(b);
                if (
                  f &&
                  !(
                    f[3] &&
                    M.match(
                      /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,
                    )
                  )
                ) {
                  var g = f[1] || f[2] || "";
                  if (
                    !g ||
                    (g && (M === "" || this.rules.inline.punctuation.exec(M)))
                  ) {
                    var S = f[0].length - 1,
                      E,
                      _,
                      z = S,
                      B = 0,
                      F =
                        f[0][0] === "*"
                          ? this.rules.inline.emStrong.rDelimAst
                          : this.rules.inline.emStrong.rDelimUnd;
                    for (
                      F.lastIndex = 0, x = x.slice(-1 * b.length + S);
                      (f = F.exec(x)) != null;
                    )
                      if (
                        ((E = f[1] || f[2] || f[3] || f[4] || f[5] || f[6]),
                        !!E)
                      ) {
                        if (((_ = E.length), f[3] || f[4])) {
                          z += _;
                          continue;
                        } else if ((f[5] || f[6]) && S % 3 && !((S + _) % 3)) {
                          B += _;
                          continue;
                        }
                        if (((z -= _), !(z > 0))) {
                          _ = Math.min(_, _ + z + B);
                          var P = b.slice(
                            0,
                            S + f.index + (f[0].length - E.length) + _,
                          );
                          if (Math.min(S, _) % 2) {
                            var N = P.slice(1, -1);
                            return {
                              type: "em",
                              raw: P,
                              text: N,
                              tokens: this.lexer.inlineTokens(N),
                            };
                          }
                          var fe = P.slice(2, -2);
                          return {
                            type: "strong",
                            raw: P,
                            text: fe,
                            tokens: this.lexer.inlineTokens(fe),
                          };
                        }
                      }
                  }
                }
              }),
              (U.codespan = function (b) {
                var x = this.rules.inline.code.exec(b);
                if (x) {
                  var M = x[2].replace(/\n/g, " "),
                    f = /[^ ]/.test(M),
                    g = /^ /.test(M) && / $/.test(M);
                  return (
                    f && g && (M = M.substring(1, M.length - 1)),
                    (M = te(M, !0)),
                    { type: "codespan", raw: x[0], text: M }
                  );
                }
              }),
              (U.br = function (b) {
                var x = this.rules.inline.br.exec(b);
                if (x) return { type: "br", raw: x[0] };
              }),
              (U.del = function (b) {
                var x = this.rules.inline.del.exec(b);
                if (x)
                  return {
                    type: "del",
                    raw: x[0],
                    text: x[2],
                    tokens: this.lexer.inlineTokens(x[2]),
                  };
              }),
              (U.autolink = function (b, x) {
                var M = this.rules.inline.autolink.exec(b);
                if (M) {
                  var f, g;
                  return (
                    M[2] === "@"
                      ? ((f = te(this.options.mangle ? x(M[1]) : M[1])),
                        (g = "mailto:" + f))
                      : ((f = te(M[1])), (g = f)),
                    {
                      type: "link",
                      raw: M[0],
                      text: f,
                      href: g,
                      tokens: [{ type: "text", raw: f, text: f }],
                    }
                  );
                }
              }),
              (U.url = function (b, x) {
                var M;
                if ((M = this.rules.inline.url.exec(b))) {
                  var f, g;
                  if (M[2] === "@")
                    ((f = te(this.options.mangle ? x(M[0]) : M[0])),
                      (g = "mailto:" + f));
                  else {
                    var S;
                    do
                      ((S = M[0]),
                        (M[0] = this.rules.inline._backpedal.exec(M[0])[0]));
                    while (S !== M[0]);
                    ((f = te(M[0])),
                      M[1] === "www." ? (g = "http://" + M[0]) : (g = M[0]));
                  }
                  return {
                    type: "link",
                    raw: M[0],
                    text: f,
                    href: g,
                    tokens: [{ type: "text", raw: f, text: f }],
                  };
                }
              }),
              (U.inlineText = function (b, x) {
                var M = this.rules.inline.text.exec(b);
                if (M) {
                  var f;
                  return (
                    this.lexer.state.inRawBlock
                      ? (f = this.options.sanitize
                          ? this.options.sanitizer
                            ? this.options.sanitizer(M[0])
                            : te(M[0])
                          : M[0])
                      : (f = te(this.options.smartypants ? x(M[0]) : M[0])),
                    { type: "text", raw: M[0], text: f }
                  );
                }
              }),
              q
            );
          })(),
          D = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences:
              /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
            html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
            def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
            table: Ne,
            lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph:
              /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
          };
        ((D._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/),
          (D._title =
            /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
          (D.def = X(D.def)
            .replace("label", D._label)
            .replace("title", D._title)
            .getRegex()),
          (D.bullet = /(?:[*+-]|\d{1,9}[.)])/),
          (D.listItemStart = X(/^( *)(bull) */)
            .replace("bull", D.bullet)
            .getRegex()),
          (D.list = X(D.list)
            .replace(/bull/g, D.bullet)
            .replace(
              "hr",
              "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))",
            )
            .replace("def", "\\n+(?=" + D.def.source + ")")
            .getRegex()),
          (D._tag =
            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
          (D._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
          (D.html = X(D.html, "i")
            .replace("comment", D._comment)
            .replace("tag", D._tag)
            .replace(
              "attribute",
              / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
            )
            .getRegex()),
          (D.paragraph = X(D._paragraph)
            .replace("hr", D.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("|lheading", "")
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
            )
            .replace("tag", D._tag)
            .getRegex()),
          (D.blockquote = X(D.blockquote)
            .replace("paragraph", D.paragraph)
            .getRegex()),
          (D.normal = d({}, D)),
          (D.gfm = d({}, D.normal, {
            table:
              "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
          })),
          (D.gfm.table = X(D.gfm.table)
            .replace("hr", D.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("blockquote", " {0,3}>")
            .replace("code", " {4}[^\\n]")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
            )
            .replace("tag", D._tag)
            .getRegex()),
          (D.gfm.paragraph = X(D._paragraph)
            .replace("hr", D.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("|lheading", "")
            .replace("table", D.gfm.table)
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
            )
            .replace("tag", D._tag)
            .getRegex()),
          (D.pedantic = d({}, D.normal, {
            html: X(
              `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
            )
              .replace("comment", D._comment)
              .replace(
                /tag/g,
                "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
              )
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: Ne,
            lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            paragraph: X(D.normal._paragraph)
              .replace("hr", D.hr)
              .replace(
                "heading",
                ` *#{1,6} *[^
]`,
              )
              .replace("lheading", D.lheading)
              .replace("blockquote", " {0,3}>")
              .replace("|fences", "")
              .replace("|list", "")
              .replace("|html", "")
              .getRegex(),
          })));
        var J = {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: Ne,
          tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(ref)\]/,
          nolink: /^!?\[(ref)\](?:\[\])?/,
          reflinkSearch: "reflink|nolink(?!\\()",
          emStrong: {
            lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
            rDelimAst:
              /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
            rDelimUnd:
              /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
          },
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: Ne,
          text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
          punctuation: /^([\spunctuation])/,
        };
        ((J._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
          (J.punctuation = X(J.punctuation)
            .replace(/punctuation/g, J._punctuation)
            .getRegex()),
          (J.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
          (J.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
          (J._comment = X(D._comment).replace("(?:-->|$)", "-->").getRegex()),
          (J.emStrong.lDelim = X(J.emStrong.lDelim)
            .replace(/punct/g, J._punctuation)
            .getRegex()),
          (J.emStrong.rDelimAst = X(J.emStrong.rDelimAst, "g")
            .replace(/punct/g, J._punctuation)
            .getRegex()),
          (J.emStrong.rDelimUnd = X(J.emStrong.rDelimUnd, "g")
            .replace(/punct/g, J._punctuation)
            .getRegex()),
          (J._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
          (J._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
          (J._email =
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
          (J.autolink = X(J.autolink)
            .replace("scheme", J._scheme)
            .replace("email", J._email)
            .getRegex()),
          (J._attribute =
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
          (J.tag = X(J.tag)
            .replace("comment", J._comment)
            .replace("attribute", J._attribute)
            .getRegex()),
          (J._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
          (J._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
          (J._title =
            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
          (J.link = X(J.link)
            .replace("label", J._label)
            .replace("href", J._href)
            .replace("title", J._title)
            .getRegex()),
          (J.reflink = X(J.reflink)
            .replace("label", J._label)
            .replace("ref", D._label)
            .getRegex()),
          (J.nolink = X(J.nolink).replace("ref", D._label).getRegex()),
          (J.reflinkSearch = X(J.reflinkSearch, "g")
            .replace("reflink", J.reflink)
            .replace("nolink", J.nolink)
            .getRegex()),
          (J.normal = d({}, J)),
          (J.pedantic = d({}, J.normal, {
            strong: {
              start: /^__|\*\*/,
              middle:
                /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              endAst: /\*\*(?!\*)/g,
              endUnd: /__(?!_)/g,
            },
            em: {
              start: /^_|\*/,
              middle:
                /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
              endAst: /\*(?!\*)/g,
              endUnd: /_(?!_)/g,
            },
            link: X(/^!?\[(label)\]\((.*?)\)/)
              .replace("label", J._label)
              .getRegex(),
            reflink: X(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace("label", J._label)
              .getRegex(),
          })),
          (J.gfm = d({}, J.normal, {
            escape: X(J.escape).replace("])", "~|])").getRegex(),
            _extended_email:
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal:
              /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
            text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
          })),
          (J.gfm.url = X(J.gfm.url, "i")
            .replace("email", J.gfm._extended_email)
            .getRegex()),
          (J.breaks = d({}, J.gfm, {
            br: X(J.br).replace("{2,}", "*").getRegex(),
            text: X(J.gfm.text)
              .replace("\\b_", "\\b_| {2,}\\n")
              .replace(/\{2,\}/g, "*")
              .getRegex(),
          })));
        function Pe(q) {
          return q
            .replace(/---/g, "—")
            .replace(/--/g, "–")
            .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
            .replace(/'/g, "’")
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
            .replace(/"/g, "”")
            .replace(/\.{3}/g, "…");
        }
        function Te(q) {
          var U = "",
            I,
            b,
            x = q.length;
          for (I = 0; I < x; I++)
            ((b = q.charCodeAt(I)),
              Math.random() > 0.5 && (b = "x" + b.toString(16)),
              (U += "&#" + b + ";"));
          return U;
        }
        var Je = (function () {
            function q(I) {
              ((this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = I || a.defaults),
                (this.options.tokenizer = this.options.tokenizer || new T()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
              var b = { block: D.normal, inline: J.normal };
              (this.options.pedantic
                ? ((b.block = D.pedantic), (b.inline = J.pedantic))
                : this.options.gfm &&
                  ((b.block = D.gfm),
                  this.options.breaks
                    ? (b.inline = J.breaks)
                    : (b.inline = J.gfm)),
                (this.tokenizer.rules = b));
            }
            ((q.lex = function (b, x) {
              var M = new q(x);
              return M.lex(b);
            }),
              (q.lexInline = function (b, x) {
                var M = new q(x);
                return M.inlineTokens(b);
              }));
            var U = q.prototype;
            return (
              (U.lex = function (b) {
                ((b = b.replace(
                  /\r\n|\r/g,
                  `
`,
                )),
                  this.blockTokens(b, this.tokens));
                for (var x; (x = this.inlineQueue.shift()); )
                  this.inlineTokens(x.src, x.tokens);
                return this.tokens;
              }),
              (U.blockTokens = function (b, x) {
                var M = this;
                (x === void 0 && (x = []),
                  this.options.pedantic
                    ? (b = b.replace(/\t/g, "    ").replace(/^ +$/gm, ""))
                    : (b = b.replace(/^( *)(\t+)/gm, function (z, B, F) {
                        return B + "    ".repeat(F.length);
                      })));
                for (var f, g, S, E; b; )
                  if (
                    !(
                      this.options.extensions &&
                      this.options.extensions.block &&
                      this.options.extensions.block.some(function (z) {
                        return (f = z.call({ lexer: M }, b, x))
                          ? ((b = b.substring(f.raw.length)), x.push(f), !0)
                          : !1;
                      })
                    )
                  ) {
                    if ((f = this.tokenizer.space(b))) {
                      ((b = b.substring(f.raw.length)),
                        f.raw.length === 1 && x.length > 0
                          ? (x[x.length - 1].raw += `
`)
                          : x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.code(b))) {
                      ((b = b.substring(f.raw.length)),
                        (g = x[x.length - 1]),
                        g && (g.type === "paragraph" || g.type === "text")
                          ? ((g.raw +=
                              `
` + f.raw),
                            (g.text +=
                              `
` + f.text),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              g.text))
                          : x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.fences(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.heading(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.hr(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.blockquote(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.list(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.html(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.def(b))) {
                      ((b = b.substring(f.raw.length)),
                        (g = x[x.length - 1]),
                        g && (g.type === "paragraph" || g.type === "text")
                          ? ((g.raw +=
                              `
` + f.raw),
                            (g.text +=
                              `
` + f.raw),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              g.text))
                          : this.tokens.links[f.tag] ||
                            (this.tokens.links[f.tag] = {
                              href: f.href,
                              title: f.title,
                            }));
                      continue;
                    }
                    if ((f = this.tokenizer.table(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.lheading(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if (
                      ((S = b),
                      this.options.extensions &&
                        this.options.extensions.startBlock &&
                        (function () {
                          var z = 1 / 0,
                            B = b.slice(1),
                            F = void 0;
                          (M.options.extensions.startBlock.forEach(
                            function (P) {
                              ((F = P.call({ lexer: this }, B)),
                                typeof F == "number" &&
                                  F >= 0 &&
                                  (z = Math.min(z, F)));
                            },
                          ),
                            z < 1 / 0 && z >= 0 && (S = b.substring(0, z + 1)));
                        })(),
                      this.state.top && (f = this.tokenizer.paragraph(S)))
                    ) {
                      ((g = x[x.length - 1]),
                        E && g.type === "paragraph"
                          ? ((g.raw +=
                              `
` + f.raw),
                            (g.text +=
                              `
` + f.text),
                            this.inlineQueue.pop(),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              g.text))
                          : x.push(f),
                        (E = S.length !== b.length),
                        (b = b.substring(f.raw.length)));
                      continue;
                    }
                    if ((f = this.tokenizer.text(b))) {
                      ((b = b.substring(f.raw.length)),
                        (g = x[x.length - 1]),
                        g && g.type === "text"
                          ? ((g.raw +=
                              `
` + f.raw),
                            (g.text +=
                              `
` + f.text),
                            this.inlineQueue.pop(),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              g.text))
                          : x.push(f));
                      continue;
                    }
                    if (b) {
                      var _ = "Infinite loop on byte: " + b.charCodeAt(0);
                      if (this.options.silent) {
                        console.error(_);
                        break;
                      } else throw new Error(_);
                    }
                  }
                return ((this.state.top = !0), x);
              }),
              (U.inline = function (b, x) {
                return (
                  x === void 0 && (x = []),
                  this.inlineQueue.push({ src: b, tokens: x }),
                  x
                );
              }),
              (U.inlineTokens = function (b, x) {
                var M = this;
                x === void 0 && (x = []);
                var f,
                  g,
                  S,
                  E = b,
                  _,
                  z,
                  B;
                if (this.tokens.links) {
                  var F = Object.keys(this.tokens.links);
                  if (F.length > 0)
                    for (
                      ;
                      (_ = this.tokenizer.rules.inline.reflinkSearch.exec(E)) !=
                      null;
                    )
                      F.includes(_[0].slice(_[0].lastIndexOf("[") + 1, -1)) &&
                        (E =
                          E.slice(0, _.index) +
                          "[" +
                          ze("a", _[0].length - 2) +
                          "]" +
                          E.slice(
                            this.tokenizer.rules.inline.reflinkSearch.lastIndex,
                          ));
                }
                for (
                  ;
                  (_ = this.tokenizer.rules.inline.blockSkip.exec(E)) != null;
                )
                  E =
                    E.slice(0, _.index) +
                    "[" +
                    ze("a", _[0].length - 2) +
                    "]" +
                    E.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (
                  ;
                  (_ = this.tokenizer.rules.inline.escapedEmSt.exec(E)) != null;
                )
                  ((E =
                    E.slice(0, _.index + _[0].length - 2) +
                    "++" +
                    E.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
                    this.tokenizer.rules.inline.escapedEmSt.lastIndex--);
                for (; b; )
                  if (
                    (z || (B = ""),
                    (z = !1),
                    !(
                      this.options.extensions &&
                      this.options.extensions.inline &&
                      this.options.extensions.inline.some(function (N) {
                        return (f = N.call({ lexer: M }, b, x))
                          ? ((b = b.substring(f.raw.length)), x.push(f), !0)
                          : !1;
                      })
                    ))
                  ) {
                    if ((f = this.tokenizer.escape(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.tag(b))) {
                      ((b = b.substring(f.raw.length)),
                        (g = x[x.length - 1]),
                        g && f.type === "text" && g.type === "text"
                          ? ((g.raw += f.raw), (g.text += f.text))
                          : x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.link(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.reflink(b, this.tokens.links))) {
                      ((b = b.substring(f.raw.length)),
                        (g = x[x.length - 1]),
                        g && f.type === "text" && g.type === "text"
                          ? ((g.raw += f.raw), (g.text += f.text))
                          : x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.emStrong(b, E, B))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.codespan(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.br(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.del(b))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if ((f = this.tokenizer.autolink(b, Te))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if (!this.state.inLink && (f = this.tokenizer.url(b, Te))) {
                      ((b = b.substring(f.raw.length)), x.push(f));
                      continue;
                    }
                    if (
                      ((S = b),
                      this.options.extensions &&
                        this.options.extensions.startInline &&
                        (function () {
                          var N = 1 / 0,
                            fe = b.slice(1),
                            xe = void 0;
                          (M.options.extensions.startInline.forEach(
                            function (ye) {
                              ((xe = ye.call({ lexer: this }, fe)),
                                typeof xe == "number" &&
                                  xe >= 0 &&
                                  (N = Math.min(N, xe)));
                            },
                          ),
                            N < 1 / 0 && N >= 0 && (S = b.substring(0, N + 1)));
                        })(),
                      (f = this.tokenizer.inlineText(S, Pe)))
                    ) {
                      ((b = b.substring(f.raw.length)),
                        f.raw.slice(-1) !== "_" && (B = f.raw.slice(-1)),
                        (z = !0),
                        (g = x[x.length - 1]),
                        g && g.type === "text"
                          ? ((g.raw += f.raw), (g.text += f.text))
                          : x.push(f));
                      continue;
                    }
                    if (b) {
                      var P = "Infinite loop on byte: " + b.charCodeAt(0);
                      if (this.options.silent) {
                        console.error(P);
                        break;
                      } else throw new Error(P);
                    }
                  }
                return x;
              }),
              s(q, null, [
                {
                  key: "rules",
                  get: function () {
                    return { block: D, inline: J };
                  },
                },
              ]),
              q
            );
          })(),
          Qe = (function () {
            function q(I) {
              this.options = I || a.defaults;
            }
            var U = q.prototype;
            return (
              (U.code = function (b, x, M) {
                var f = (x || "").match(/\S*/)[0];
                if (this.options.highlight) {
                  var g = this.options.highlight(b, f);
                  g != null && g !== b && ((M = !0), (b = g));
                }
                return (
                  (b =
                    b.replace(/\n$/, "") +
                    `
`),
                  f
                    ? '<pre><code class="' +
                      this.options.langPrefix +
                      te(f) +
                      '">' +
                      (M ? b : te(b, !0)) +
                      `</code></pre>
`
                    : "<pre><code>" +
                      (M ? b : te(b, !0)) +
                      `</code></pre>
`
                );
              }),
              (U.blockquote = function (b) {
                return (
                  `<blockquote>
` +
                  b +
                  `</blockquote>
`
                );
              }),
              (U.html = function (b) {
                return b;
              }),
              (U.heading = function (b, x, M, f) {
                if (this.options.headerIds) {
                  var g = this.options.headerPrefix + f.slug(M);
                  return (
                    "<h" +
                    x +
                    ' id="' +
                    g +
                    '">' +
                    b +
                    "</h" +
                    x +
                    `>
`
                  );
                }
                return (
                  "<h" +
                  x +
                  ">" +
                  b +
                  "</h" +
                  x +
                  `>
`
                );
              }),
              (U.hr = function () {
                return this.options.xhtml
                  ? `<hr/>
`
                  : `<hr>
`;
              }),
              (U.list = function (b, x, M) {
                var f = x ? "ol" : "ul",
                  g = x && M !== 1 ? ' start="' + M + '"' : "";
                return (
                  "<" +
                  f +
                  g +
                  `>
` +
                  b +
                  "</" +
                  f +
                  `>
`
                );
              }),
              (U.listitem = function (b) {
                return (
                  "<li>" +
                  b +
                  `</li>
`
                );
              }),
              (U.checkbox = function (b) {
                return (
                  "<input " +
                  (b ? 'checked="" ' : "") +
                  'disabled="" type="checkbox"' +
                  (this.options.xhtml ? " /" : "") +
                  "> "
                );
              }),
              (U.paragraph = function (b) {
                return (
                  "<p>" +
                  b +
                  `</p>
`
                );
              }),
              (U.table = function (b, x) {
                return (
                  x && (x = "<tbody>" + x + "</tbody>"),
                  `<table>
<thead>
` +
                    b +
                    `</thead>
` +
                    x +
                    `</table>
`
                );
              }),
              (U.tablerow = function (b) {
                return (
                  `<tr>
` +
                  b +
                  `</tr>
`
                );
              }),
              (U.tablecell = function (b, x) {
                var M = x.header ? "th" : "td",
                  f = x.align
                    ? "<" + M + ' align="' + x.align + '">'
                    : "<" + M + ">";
                return (
                  f +
                  b +
                  ("</" +
                    M +
                    `>
`)
                );
              }),
              (U.strong = function (b) {
                return "<strong>" + b + "</strong>";
              }),
              (U.em = function (b) {
                return "<em>" + b + "</em>";
              }),
              (U.codespan = function (b) {
                return "<code>" + b + "</code>";
              }),
              (U.br = function () {
                return this.options.xhtml ? "<br/>" : "<br>";
              }),
              (U.del = function (b) {
                return "<del>" + b + "</del>";
              }),
              (U.link = function (b, x, M) {
                if (
                  ((b = ce(this.options.sanitize, this.options.baseUrl, b)),
                  b === null)
                )
                  return M;
                var f = '<a href="' + b + '"';
                return (
                  x && (f += ' title="' + x + '"'),
                  (f += ">" + M + "</a>"),
                  f
                );
              }),
              (U.image = function (b, x, M) {
                if (
                  ((b = ce(this.options.sanitize, this.options.baseUrl, b)),
                  b === null)
                )
                  return M;
                var f = '<img src="' + b + '" alt="' + M + '"';
                return (
                  x && (f += ' title="' + x + '"'),
                  (f += this.options.xhtml ? "/>" : ">"),
                  f
                );
              }),
              (U.text = function (b) {
                return b;
              }),
              q
            );
          })(),
          Ke = (function () {
            function q() {}
            var U = q.prototype;
            return (
              (U.strong = function (b) {
                return b;
              }),
              (U.em = function (b) {
                return b;
              }),
              (U.codespan = function (b) {
                return b;
              }),
              (U.del = function (b) {
                return b;
              }),
              (U.html = function (b) {
                return b;
              }),
              (U.text = function (b) {
                return b;
              }),
              (U.link = function (b, x, M) {
                return "" + M;
              }),
              (U.image = function (b, x, M) {
                return "" + M;
              }),
              (U.br = function () {
                return "";
              }),
              q
            );
          })(),
          Xe = (function () {
            function q() {
              this.seen = {};
            }
            var U = q.prototype;
            return (
              (U.serialize = function (b) {
                return b
                  .toLowerCase()
                  .trim()
                  .replace(/<[!\/a-z].*?>/gi, "")
                  .replace(
                    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                    "",
                  )
                  .replace(/\s/g, "-");
              }),
              (U.getNextSafeSlug = function (b, x) {
                var M = b,
                  f = 0;
                if (this.seen.hasOwnProperty(M)) {
                  f = this.seen[b];
                  do (f++, (M = b + "-" + f));
                  while (this.seen.hasOwnProperty(M));
                }
                return (x || ((this.seen[b] = f), (this.seen[M] = 0)), M);
              }),
              (U.slug = function (b, x) {
                x === void 0 && (x = {});
                var M = this.serialize(b);
                return this.getNextSafeSlug(M, x.dryrun);
              }),
              q
            );
          })(),
          He = (function () {
            function q(I) {
              ((this.options = I || a.defaults),
                (this.options.renderer = this.options.renderer || new Qe()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.textRenderer = new Ke()),
                (this.slugger = new Xe()));
            }
            ((q.parse = function (b, x) {
              var M = new q(x);
              return M.parse(b);
            }),
              (q.parseInline = function (b, x) {
                var M = new q(x);
                return M.parseInline(b);
              }));
            var U = q.prototype;
            return (
              (U.parse = function (b, x) {
                x === void 0 && (x = !0);
                var M = "",
                  f,
                  g,
                  S,
                  E,
                  _,
                  z,
                  B,
                  F,
                  P,
                  N,
                  fe,
                  xe,
                  ye,
                  se,
                  _e,
                  Me,
                  Ie,
                  Ee,
                  $e,
                  Ye = b.length;
                for (f = 0; f < Ye; f++) {
                  if (
                    ((N = b[f]),
                    this.options.extensions &&
                      this.options.extensions.renderers &&
                      this.options.extensions.renderers[N.type] &&
                      (($e = this.options.extensions.renderers[N.type].call(
                        { parser: this },
                        N,
                      )),
                      $e !== !1 ||
                        ![
                          "space",
                          "hr",
                          "heading",
                          "code",
                          "table",
                          "blockquote",
                          "list",
                          "html",
                          "paragraph",
                          "text",
                        ].includes(N.type)))
                  ) {
                    M += $e || "";
                    continue;
                  }
                  switch (N.type) {
                    case "space":
                      continue;
                    case "hr": {
                      M += this.renderer.hr();
                      continue;
                    }
                    case "heading": {
                      M += this.renderer.heading(
                        this.parseInline(N.tokens),
                        N.depth,
                        Z(this.parseInline(N.tokens, this.textRenderer)),
                        this.slugger,
                      );
                      continue;
                    }
                    case "code": {
                      M += this.renderer.code(N.text, N.lang, N.escaped);
                      continue;
                    }
                    case "table": {
                      for (
                        F = "", B = "", E = N.header.length, g = 0;
                        g < E;
                        g++
                      )
                        B += this.renderer.tablecell(
                          this.parseInline(N.header[g].tokens),
                          { header: !0, align: N.align[g] },
                        );
                      for (
                        F += this.renderer.tablerow(B),
                          P = "",
                          E = N.rows.length,
                          g = 0;
                        g < E;
                        g++
                      ) {
                        for (
                          z = N.rows[g], B = "", _ = z.length, S = 0;
                          S < _;
                          S++
                        )
                          B += this.renderer.tablecell(
                            this.parseInline(z[S].tokens),
                            { header: !1, align: N.align[S] },
                          );
                        P += this.renderer.tablerow(B);
                      }
                      M += this.renderer.table(F, P);
                      continue;
                    }
                    case "blockquote": {
                      ((P = this.parse(N.tokens)),
                        (M += this.renderer.blockquote(P)));
                      continue;
                    }
                    case "list": {
                      for (
                        fe = N.ordered,
                          xe = N.start,
                          ye = N.loose,
                          E = N.items.length,
                          P = "",
                          g = 0;
                        g < E;
                        g++
                      )
                        ((_e = N.items[g]),
                          (Me = _e.checked),
                          (Ie = _e.task),
                          (se = ""),
                          _e.task &&
                            ((Ee = this.renderer.checkbox(Me)),
                            ye
                              ? _e.tokens.length > 0 &&
                                _e.tokens[0].type === "paragraph"
                                ? ((_e.tokens[0].text =
                                    Ee + " " + _e.tokens[0].text),
                                  _e.tokens[0].tokens &&
                                    _e.tokens[0].tokens.length > 0 &&
                                    _e.tokens[0].tokens[0].type === "text" &&
                                    (_e.tokens[0].tokens[0].text =
                                      Ee + " " + _e.tokens[0].tokens[0].text))
                                : _e.tokens.unshift({ type: "text", text: Ee })
                              : (se += Ee)),
                          (se += this.parse(_e.tokens, ye)),
                          (P += this.renderer.listitem(se, Ie, Me)));
                      M += this.renderer.list(P, fe, xe);
                      continue;
                    }
                    case "html": {
                      M += this.renderer.html(N.text);
                      continue;
                    }
                    case "paragraph": {
                      M += this.renderer.paragraph(this.parseInline(N.tokens));
                      continue;
                    }
                    case "text": {
                      for (
                        P = N.tokens ? this.parseInline(N.tokens) : N.text;
                        f + 1 < Ye && b[f + 1].type === "text";
                      )
                        ((N = b[++f]),
                          (P +=
                            `
` + (N.tokens ? this.parseInline(N.tokens) : N.text)));
                      M += x ? this.renderer.paragraph(P) : P;
                      continue;
                    }
                    default: {
                      var ft =
                        'Token with "' + N.type + '" type was not found.';
                      if (this.options.silent) {
                        console.error(ft);
                        return;
                      } else throw new Error(ft);
                    }
                  }
                }
                return M;
              }),
              (U.parseInline = function (b, x) {
                x = x || this.renderer;
                var M = "",
                  f,
                  g,
                  S,
                  E = b.length;
                for (f = 0; f < E; f++) {
                  if (
                    ((g = b[f]),
                    this.options.extensions &&
                      this.options.extensions.renderers &&
                      this.options.extensions.renderers[g.type] &&
                      ((S = this.options.extensions.renderers[g.type].call(
                        { parser: this },
                        g,
                      )),
                      S !== !1 ||
                        ![
                          "escape",
                          "html",
                          "link",
                          "image",
                          "strong",
                          "em",
                          "codespan",
                          "br",
                          "del",
                          "text",
                        ].includes(g.type)))
                  ) {
                    M += S || "";
                    continue;
                  }
                  switch (g.type) {
                    case "escape": {
                      M += x.text(g.text);
                      break;
                    }
                    case "html": {
                      M += x.html(g.text);
                      break;
                    }
                    case "link": {
                      M += x.link(
                        g.href,
                        g.title,
                        this.parseInline(g.tokens, x),
                      );
                      break;
                    }
                    case "image": {
                      M += x.image(g.href, g.title, g.text);
                      break;
                    }
                    case "strong": {
                      M += x.strong(this.parseInline(g.tokens, x));
                      break;
                    }
                    case "em": {
                      M += x.em(this.parseInline(g.tokens, x));
                      break;
                    }
                    case "codespan": {
                      M += x.codespan(g.text);
                      break;
                    }
                    case "br": {
                      M += x.br();
                      break;
                    }
                    case "del": {
                      M += x.del(this.parseInline(g.tokens, x));
                      break;
                    }
                    case "text": {
                      M += x.text(g.text);
                      break;
                    }
                    default: {
                      var _ = 'Token with "' + g.type + '" type was not found.';
                      if (this.options.silent) {
                        console.error(_);
                        return;
                      } else throw new Error(_);
                    }
                  }
                }
                return M;
              }),
              q
            );
          })(),
          We = (function () {
            function q(I) {
              this.options = I || a.defaults;
            }
            var U = q.prototype;
            return (
              (U.preprocess = function (b) {
                return b;
              }),
              (U.postprocess = function (b) {
                return b;
              }),
              q
            );
          })();
        We.passThroughHooks = new Set(["preprocess", "postprocess"]);
        function Ve(q, U, I) {
          return function (b) {
            if (
              ((b.message += `
Please report this to https://github.com/markedjs/marked.`),
              q)
            ) {
              var x =
                "<p>An error occurred:</p><pre>" +
                te(b.message + "", !0) +
                "</pre>";
              if (U) return Promise.resolve(x);
              if (I) {
                I(null, x);
                return;
              }
              return x;
            }
            if (U) return Promise.reject(b);
            if (I) {
              I(b);
              return;
            }
            throw b;
          };
        }
        function lt(q, U) {
          return function (I, b, x) {
            typeof b == "function" && ((x = b), (b = null));
            var M = d({}, b);
            b = d({}, ke.defaults, M);
            var f = Ve(b.silent, b.async, x);
            if (typeof I > "u" || I === null)
              return f(
                new Error("marked(): input parameter is undefined or null"),
              );
            if (typeof I != "string")
              return f(
                new Error(
                  "marked(): input parameter is of type " +
                    Object.prototype.toString.call(I) +
                    ", string expected",
                ),
              );
            if ((De(b), b.hooks && (b.hooks.options = b), x)) {
              var g = b.highlight,
                S;
              try {
                (b.hooks && (I = b.hooks.preprocess(I)), (S = q(I, b)));
              } catch (F) {
                return f(F);
              }
              var E = function (P) {
                var N;
                if (!P)
                  try {
                    (b.walkTokens && ke.walkTokens(S, b.walkTokens),
                      (N = U(S, b)),
                      b.hooks && (N = b.hooks.postprocess(N)));
                  } catch (fe) {
                    P = fe;
                  }
                return ((b.highlight = g), P ? f(P) : x(null, N));
              };
              if (!g || g.length < 3 || (delete b.highlight, !S.length))
                return E();
              var _ = 0;
              (ke.walkTokens(S, function (F) {
                F.type === "code" &&
                  (_++,
                  setTimeout(function () {
                    g(F.text, F.lang, function (P, N) {
                      if (P) return E(P);
                      (N != null &&
                        N !== F.text &&
                        ((F.text = N), (F.escaped = !0)),
                        _--,
                        _ === 0 && E());
                    });
                  }, 0));
              }),
                _ === 0 && E());
              return;
            }
            if (b.async)
              return Promise.resolve(b.hooks ? b.hooks.preprocess(I) : I)
                .then(function (F) {
                  return q(F, b);
                })
                .then(function (F) {
                  return b.walkTokens
                    ? Promise.all(ke.walkTokens(F, b.walkTokens)).then(
                        function () {
                          return F;
                        },
                      )
                    : F;
                })
                .then(function (F) {
                  return U(F, b);
                })
                .then(function (F) {
                  return b.hooks ? b.hooks.postprocess(F) : F;
                })
                .catch(f);
            try {
              b.hooks && (I = b.hooks.preprocess(I));
              var z = q(I, b);
              b.walkTokens && ke.walkTokens(z, b.walkTokens);
              var B = U(z, b);
              return (b.hooks && (B = b.hooks.postprocess(B)), B);
            } catch (F) {
              return f(F);
            }
          };
        }
        function ke(q, U, I) {
          return lt(Je.lex, He.parse)(q, U, I);
        }
        ((ke.options = ke.setOptions =
          function (q) {
            return ((ke.defaults = d({}, ke.defaults, q)), K(ke.defaults), ke);
          }),
          (ke.getDefaults = L),
          (ke.defaults = a.defaults),
          (ke.use = function () {
            for (
              var q = ke.defaults.extensions || {
                  renderers: {},
                  childTokens: {},
                },
                U = arguments.length,
                I = new Array(U),
                b = 0;
              b < U;
              b++
            )
              I[b] = arguments[b];
            I.forEach(function (x) {
              var M = d({}, x);
              if (
                ((M.async = ke.defaults.async || M.async || !1),
                x.extensions &&
                  (x.extensions.forEach(function (g) {
                    if (!g.name) throw new Error("extension name required");
                    if (g.renderer) {
                      var S = q.renderers[g.name];
                      S
                        ? (q.renderers[g.name] = function () {
                            for (
                              var E = arguments.length, _ = new Array(E), z = 0;
                              z < E;
                              z++
                            )
                              _[z] = arguments[z];
                            var B = g.renderer.apply(this, _);
                            return (B === !1 && (B = S.apply(this, _)), B);
                          })
                        : (q.renderers[g.name] = g.renderer);
                    }
                    if (g.tokenizer) {
                      if (
                        !g.level ||
                        (g.level !== "block" && g.level !== "inline")
                      )
                        throw new Error(
                          "extension level must be 'block' or 'inline'",
                        );
                      (q[g.level]
                        ? q[g.level].unshift(g.tokenizer)
                        : (q[g.level] = [g.tokenizer]),
                        g.start &&
                          (g.level === "block"
                            ? q.startBlock
                              ? q.startBlock.push(g.start)
                              : (q.startBlock = [g.start])
                            : g.level === "inline" &&
                              (q.startInline
                                ? q.startInline.push(g.start)
                                : (q.startInline = [g.start]))));
                    }
                    g.childTokens && (q.childTokens[g.name] = g.childTokens);
                  }),
                  (M.extensions = q)),
                x.renderer &&
                  (function () {
                    var g = ke.defaults.renderer || new Qe(),
                      S = function (z) {
                        var B = g[z];
                        g[z] = function () {
                          for (
                            var F = arguments.length, P = new Array(F), N = 0;
                            N < F;
                            N++
                          )
                            P[N] = arguments[N];
                          var fe = x.renderer[z].apply(g, P);
                          return (fe === !1 && (fe = B.apply(g, P)), fe);
                        };
                      };
                    for (var E in x.renderer) S(E);
                    M.renderer = g;
                  })(),
                x.tokenizer &&
                  (function () {
                    var g = ke.defaults.tokenizer || new T(),
                      S = function (z) {
                        var B = g[z];
                        g[z] = function () {
                          for (
                            var F = arguments.length, P = new Array(F), N = 0;
                            N < F;
                            N++
                          )
                            P[N] = arguments[N];
                          var fe = x.tokenizer[z].apply(g, P);
                          return (fe === !1 && (fe = B.apply(g, P)), fe);
                        };
                      };
                    for (var E in x.tokenizer) S(E);
                    M.tokenizer = g;
                  })(),
                x.hooks &&
                  (function () {
                    var g = ke.defaults.hooks || new We(),
                      S = function (z) {
                        var B = g[z];
                        We.passThroughHooks.has(z)
                          ? (g[z] = function (F) {
                              if (ke.defaults.async)
                                return Promise.resolve(
                                  x.hooks[z].call(g, F),
                                ).then(function (N) {
                                  return B.call(g, N);
                                });
                              var P = x.hooks[z].call(g, F);
                              return B.call(g, P);
                            })
                          : (g[z] = function () {
                              for (
                                var F = arguments.length,
                                  P = new Array(F),
                                  N = 0;
                                N < F;
                                N++
                              )
                                P[N] = arguments[N];
                              var fe = x.hooks[z].apply(g, P);
                              return (fe === !1 && (fe = B.apply(g, P)), fe);
                            });
                      };
                    for (var E in x.hooks) S(E);
                    M.hooks = g;
                  })(),
                x.walkTokens)
              ) {
                var f = ke.defaults.walkTokens;
                M.walkTokens = function (g) {
                  var S = [];
                  return (
                    S.push(x.walkTokens.call(this, g)),
                    f && (S = S.concat(f.call(this, g))),
                    S
                  );
                };
              }
              ke.setOptions(M);
            });
          }),
          (ke.walkTokens = function (q, U) {
            for (
              var I = [],
                b = function () {
                  var g = M.value;
                  switch (((I = I.concat(U.call(ke, g))), g.type)) {
                    case "table": {
                      for (var S = y(g.header), E; !(E = S()).done; ) {
                        var _ = E.value;
                        I = I.concat(ke.walkTokens(_.tokens, U));
                      }
                      for (var z = y(g.rows), B; !(B = z()).done; )
                        for (var F = B.value, P = y(F), N; !(N = P()).done; ) {
                          var fe = N.value;
                          I = I.concat(ke.walkTokens(fe.tokens, U));
                        }
                      break;
                    }
                    case "list": {
                      I = I.concat(ke.walkTokens(g.items, U));
                      break;
                    }
                    default:
                      ke.defaults.extensions &&
                      ke.defaults.extensions.childTokens &&
                      ke.defaults.extensions.childTokens[g.type]
                        ? ke.defaults.extensions.childTokens[g.type].forEach(
                            function (xe) {
                              I = I.concat(ke.walkTokens(g[xe], U));
                            },
                          )
                        : g.tokens &&
                          (I = I.concat(ke.walkTokens(g.tokens, U)));
                  }
                },
                x = y(q),
                M;
              !(M = x()).done;
            )
              b();
            return I;
          }),
          (ke.parseInline = lt(Je.lexInline, He.parseInline)),
          (ke.Parser = He),
          (ke.parser = He.parse),
          (ke.Renderer = Qe),
          (ke.TextRenderer = Ke),
          (ke.Lexer = Je),
          (ke.lexer = Je.lex),
          (ke.Tokenizer = T),
          (ke.Slugger = Xe),
          (ke.Hooks = We),
          (ke.parse = ke));
        var Ct = ke.options,
          Tt = ke.setOptions,
          it = ke.use,
          zt = ke.walkTokens,
          be = ke.parseInline,
          ut = ke,
          jt = He.parse,
          pr = Je.lex;
        ((a.Hooks = We),
          (a.Lexer = Je),
          (a.Parser = He),
          (a.Renderer = Qe),
          (a.Slugger = Xe),
          (a.TextRenderer = Ke),
          (a.Tokenizer = T),
          (a.getDefaults = L),
          (a.lexer = pr),
          (a.marked = ke),
          (a.options = Ct),
          (a.parse = ut),
          (a.parseInline = be),
          (a.parser = jt),
          (a.setOptions = Tt),
          (a.use = it),
          (a.walkTokens = zt));
      })(Co)),
    Co
  );
}
var ko, Vu;
function xv() {
  if (Vu) return ko;
  Vu = 1;
  var a = Ut();
  (rv(), nv(), iv(), mc(), xc(), ov(), lv(), sv(), uv(), fv(), vc());
  var l = vv(),
    s = mv().marked,
    d = /Mac/.test(navigator.platform),
    p = new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g),
    m = {
      toggleBold: Z,
      toggleItalic: G,
      drawLink: ze,
      toggleHeadingSmaller: ce,
      toggleHeadingBigger: ve,
      drawImage: nt,
      toggleBlockquote: ee,
      toggleOrderedList: re,
      toggleUnorderedList: le,
      toggleCodeBlock: ue,
      togglePreview: Ke,
      toggleStrikethrough: X,
      toggleHeading1: qe,
      toggleHeading2: he,
      toggleHeading3: Le,
      toggleHeading4: Fe,
      toggleHeading5: Ne,
      toggleHeading6: R,
      cleanBlock: De,
      drawTable: J,
      drawHorizontalRule: Pe,
      undo: Te,
      redo: Je,
      toggleSideBySide: Qe,
      toggleFullScreen: W,
    },
    y = {
      toggleBold: "Cmd-B",
      toggleItalic: "Cmd-I",
      drawLink: "Cmd-K",
      toggleHeadingSmaller: "Cmd-H",
      toggleHeadingBigger: "Shift-Cmd-H",
      toggleHeading1: "Ctrl+Alt+1",
      toggleHeading2: "Ctrl+Alt+2",
      toggleHeading3: "Ctrl+Alt+3",
      toggleHeading4: "Ctrl+Alt+4",
      toggleHeading5: "Ctrl+Alt+5",
      toggleHeading6: "Ctrl+Alt+6",
      cleanBlock: "Cmd-E",
      drawImage: "Cmd-Alt-I",
      toggleBlockquote: "Cmd-'",
      toggleOrderedList: "Cmd-Alt-L",
      toggleUnorderedList: "Cmd-L",
      toggleCodeBlock: "Cmd-Alt-C",
      togglePreview: "Cmd-P",
      toggleSideBySide: "F9",
      toggleFullScreen: "F11",
    },
    w = function (f) {
      for (var g in m) if (m[g] === f) return g;
      return null;
    },
    C = function () {
      var f = !1;
      return (
        (function (g) {
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            g,
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
              g.substr(0, 4),
            )) &&
            (f = !0);
        })(navigator.userAgent || navigator.vendor || window.opera),
        f
      );
    };
  function L(f) {
    for (var g; (g = p.exec(f)) !== null; ) {
      var S = g[0];
      if (S.indexOf("target=") === -1) {
        var E = S.replace(/>$/, ' target="_blank">');
        f = f.replace(S, E);
      }
    }
    return f;
  }
  function K(f) {
    for (
      var g = new DOMParser(),
        S = g.parseFromString(f, "text/html"),
        E = S.getElementsByTagName("li"),
        _ = 0;
      _ < E.length;
      _++
    )
      for (var z = E[_], B = 0; B < z.children.length; B++) {
        var F = z.children[B];
        F instanceof HTMLInputElement &&
          F.type === "checkbox" &&
          ((z.style.marginLeft = "-1.5em"), (z.style.listStyleType = "none"));
      }
    return S.documentElement.innerHTML;
  }
  function $(f) {
    return (
      d ? (f = f.replace("Ctrl", "Cmd")) : (f = f.replace("Cmd", "Ctrl")),
      f
    );
  }
  function j(f, g, S, E) {
    var _ = ne(f, !1, g, S, "button", E);
    (_.classList.add("easymde-dropdown"),
      (_.onclick = function () {
        _.focus();
      }));
    var z = document.createElement("div");
    z.className = "easymde-dropdown-content";
    for (var B = 0; B < f.children.length; B++) {
      var F = f.children[B],
        P;
      (typeof F == "string" && F in ut
        ? (P = ne(ut[F], !0, g, S, "button", E))
        : (P = ne(F, !0, g, S, "button", E)),
        P.addEventListener(
          "click",
          function (N) {
            N.stopPropagation();
          },
          !1,
        ),
        z.appendChild(P));
    }
    return (_.appendChild(z), _);
  }
  function ne(f, g, S, E, _, z) {
    f = f || {};
    var B = document.createElement(_);
    if (f.attributes)
      for (var F in f.attributes)
        Object.prototype.hasOwnProperty.call(f.attributes, F) &&
          B.setAttribute(F, f.attributes[F]);
    var P = z.options.toolbarButtonClassPrefix
      ? z.options.toolbarButtonClassPrefix + "-"
      : "";
    ((B.className = P + f.name),
      B.setAttribute("type", _),
      (S = S ?? !0),
      f.text && (B.innerText = f.text),
      f.name && f.name in E && (m[f.name] = f.action),
      f.title &&
        S &&
        ((B.title = we(f.title, f.action, E)),
        d &&
          ((B.title = B.title.replace("Ctrl", "⌘")),
          (B.title = B.title.replace("Alt", "⌥")))),
      f.title && B.setAttribute("aria-label", f.title),
      f.noDisable && B.classList.add("no-disable"),
      f.noMobile && B.classList.add("no-mobile"));
    var N = [];
    typeof f.className < "u" && (N = f.className.split(" "));
    for (var fe = [], xe = 0; xe < N.length; xe++) {
      var ye = N[xe];
      ye.match(/^fa([srlb]|(-[\w-]*)|$)/) ? fe.push(ye) : B.classList.add(ye);
    }
    if (((B.tabIndex = -1), fe.length > 0)) {
      for (var se = document.createElement("i"), _e = 0; _e < fe.length; _e++) {
        var Me = fe[_e];
        se.classList.add(Me);
      }
      B.appendChild(se);
    }
    return (
      typeof f.icon < "u" && (B.innerHTML = f.icon),
      f.action &&
        g &&
        (typeof f.action == "function"
          ? (B.onclick = function (Ie) {
              (Ie.preventDefault(), f.action(z));
            })
          : typeof f.action == "string" &&
            (B.onclick = function (Ie) {
              (Ie.preventDefault(), window.open(f.action, "_blank"));
            })),
      B
    );
  }
  function ae() {
    var f = document.createElement("i");
    return ((f.className = "separator"), (f.innerHTML = "|"), f);
  }
  function we(f, g, S) {
    var E,
      _ = f;
    return (g && ((E = w(g)), S[E] && (_ += " (" + $(S[E]) + ")")), _);
  }
  function Q(f, g) {
    g = g || f.getCursor("start");
    var S = f.getTokenAt(g);
    if (!S.type) return {};
    for (var E = S.type.split(" "), _ = {}, z, B, F = 0; F < E.length; F++)
      ((z = E[F]),
        z === "strong"
          ? (_.bold = !0)
          : z === "variable-2"
            ? ((B = f.getLine(g.line)),
              /^\s*\d+\.\s/.test(B)
                ? (_["ordered-list"] = !0)
                : (_["unordered-list"] = !0))
            : z === "atom"
              ? (_.quote = !0)
              : z === "em"
                ? (_.italic = !0)
                : z === "quote"
                  ? (_.quote = !0)
                  : z === "strikethrough"
                    ? (_.strikethrough = !0)
                    : z === "comment"
                      ? (_.code = !0)
                      : z === "link" && !_.image
                        ? (_.link = !0)
                        : z === "image"
                          ? (_.image = !0)
                          : z.match(/^header(-[1-6])?$/) &&
                            (_[z.replace("header", "heading")] = !0));
    return _;
  }
  var te = "";
  function W(f) {
    var g = f.codemirror;
    (g.setOption("fullScreen", !g.getOption("fullScreen")),
      g.getOption("fullScreen")
        ? ((te = document.body.style.overflow),
          (document.body.style.overflow = "hidden"))
        : (document.body.style.overflow = te));
    var S = g.getWrapperElement(),
      E = S.nextSibling;
    if (E.classList.contains("editor-preview-active-side"))
      if (f.options.sideBySideFullscreen === !1) {
        var _ = S.parentNode;
        g.getOption("fullScreen")
          ? _.classList.remove("sided--no-fullscreen")
          : _.classList.add("sided--no-fullscreen");
      } else Qe(f);
    if (
      (f.options.onToggleFullScreen &&
        f.options.onToggleFullScreen(g.getOption("fullScreen") || !1),
      typeof f.options.maxHeight < "u" &&
        (g.getOption("fullScreen")
          ? (g.getScrollerElement().style.removeProperty("height"),
            E.style.removeProperty("height"))
          : ((g.getScrollerElement().style.height = f.options.maxHeight),
            f.setPreviewMaxHeight())),
      f.toolbar_div.classList.toggle("fullscreen"),
      f.toolbarElements && f.toolbarElements.fullscreen)
    ) {
      var z = f.toolbarElements.fullscreen;
      z.classList.toggle("active");
    }
  }
  function Z(f) {
    lt(f, "bold", f.options.blockStyles.bold);
  }
  function G(f) {
    lt(f, "italic", f.options.blockStyles.italic);
  }
  function X(f) {
    lt(f, "strikethrough", "~~");
  }
  function ue(f) {
    var g = f.options.blockStyles.code;
    function S(Dt) {
      if (typeof Dt != "object")
        throw (
          "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " +
          typeof Dt +
          ": " +
          Dt
        );
      return (
        Dt.styles &&
        Dt.styles[2] &&
        Dt.styles[2].indexOf("formatting-code-block") !== -1
      );
    }
    function E(Dt) {
      return Dt.state.base.base || Dt.state.base;
    }
    function _(Dt, er, $t, Wt, Rt) {
      (($t = $t || Dt.getLineHandle(er)),
        (Wt = Wt || Dt.getTokenAt({ line: er, ch: 1 })),
        (Rt =
          Rt ||
          (!!$t.text && Dt.getTokenAt({ line: er, ch: $t.text.length - 1 }))));
      var Fr = Wt.type ? Wt.type.split(" ") : [];
      return Rt && E(Rt).indentedCode
        ? "indented"
        : Fr.indexOf("comment") === -1
          ? !1
          : E(Wt).fencedChars || E(Rt).fencedChars || S($t)
            ? "fenced"
            : "single";
    }
    function z(Dt, er, $t, Wt) {
      var Rt = er.line + 1,
        Fr = $t.line + 1,
        xi = er.line !== $t.line,
        en =
          Wt +
          `
`,
        tn =
          `
` + Wt;
      (xi && Fr++,
        xi &&
          $t.ch === 0 &&
          ((tn =
            Wt +
            `
`),
          Fr--),
        Xe(Dt, !1, [en, tn]),
        Dt.setSelection({ line: Rt, ch: 0 }, { line: Fr, ch: 0 }));
    }
    var B = f.codemirror,
      F = B.getCursor("start"),
      P = B.getCursor("end"),
      N = B.getTokenAt({ line: F.line, ch: F.ch || 1 }),
      fe = B.getLineHandle(F.line),
      xe = _(B, F.line, fe, N),
      ye,
      se,
      _e;
    if (xe === "single") {
      var Me = fe.text.slice(0, F.ch).replace("`", ""),
        Ie = fe.text.slice(F.ch).replace("`", "");
      (B.replaceRange(
        Me + Ie,
        { line: F.line, ch: 0 },
        { line: F.line, ch: 99999999999999 },
      ),
        F.ch--,
        F !== P && P.ch--,
        B.setSelection(F, P),
        B.focus());
    } else if (xe === "fenced")
      if (F.line !== P.line || F.ch !== P.ch) {
        for (
          ye = F.line;
          ye >= 0 && ((fe = B.getLineHandle(ye)), !S(fe));
          ye--
        );
        var Ee = B.getTokenAt({ line: ye, ch: 1 }),
          $e = E(Ee).fencedChars,
          Ye,
          ft,
          Et,
          kt;
        (S(B.getLineHandle(F.line))
          ? ((Ye = ""), (ft = F.line))
          : S(B.getLineHandle(F.line - 1))
            ? ((Ye = ""), (ft = F.line - 1))
            : ((Ye =
                $e +
                `
`),
              (ft = F.line)),
          S(B.getLineHandle(P.line))
            ? ((Et = ""), (kt = P.line), P.ch === 0 && (kt += 1))
            : P.ch !== 0 && S(B.getLineHandle(P.line + 1))
              ? ((Et = ""), (kt = P.line + 1))
              : ((Et =
                  $e +
                  `
`),
                (kt = P.line + 1)),
          P.ch === 0 && (kt -= 1),
          B.operation(function () {
            (B.replaceRange(
              Et,
              { line: kt, ch: 0 },
              { line: kt + (Et ? 0 : 1), ch: 0 },
            ),
              B.replaceRange(
                Ye,
                { line: ft, ch: 0 },
                { line: ft + (Ye ? 0 : 1), ch: 0 },
              ));
          }),
          B.setSelection(
            { line: ft + (Ye ? 1 : 0), ch: 0 },
            { line: kt + (Ye ? 1 : -1), ch: 0 },
          ),
          B.focus());
      } else {
        var Qr = F.line;
        if (
          (S(B.getLineHandle(F.line)) &&
            (_(B, F.line + 1) === "fenced"
              ? ((ye = F.line), (Qr = F.line + 1))
              : ((se = F.line), (Qr = F.line - 1))),
          ye === void 0)
        )
          for (ye = Qr; ye >= 0 && ((fe = B.getLineHandle(ye)), !S(fe)); ye--);
        if (se === void 0)
          for (
            _e = B.lineCount(), se = Qr;
            se < _e && ((fe = B.getLineHandle(se)), !S(fe));
            se++
          );
        (B.operation(function () {
          (B.replaceRange("", { line: ye, ch: 0 }, { line: ye + 1, ch: 0 }),
            B.replaceRange("", { line: se - 1, ch: 0 }, { line: se, ch: 0 }));
        }),
          B.focus());
      }
    else if (xe === "indented") {
      if (F.line !== P.line || F.ch !== P.ch)
        ((ye = F.line), (se = P.line), P.ch === 0 && se--);
      else {
        for (ye = F.line; ye >= 0; ye--)
          if (
            ((fe = B.getLineHandle(ye)),
            !fe.text.match(/^\s*$/) && _(B, ye, fe) !== "indented")
          ) {
            ye += 1;
            break;
          }
        for (_e = B.lineCount(), se = F.line; se < _e; se++)
          if (
            ((fe = B.getLineHandle(se)),
            !fe.text.match(/^\s*$/) && _(B, se, fe) !== "indented")
          ) {
            se -= 1;
            break;
          }
      }
      var Vr = B.getLineHandle(se + 1),
        mi = Vr && B.getTokenAt({ line: se + 1, ch: Vr.text.length - 1 }),
        Tn = mi && E(mi).indentedCode;
      Tn &&
        B.replaceRange(
          `
`,
          { line: se + 1, ch: 0 },
        );
      for (var _n = ye; _n <= se; _n++) B.indentLine(_n, "subtract");
      B.focus();
    } else {
      var Mn = F.line === P.line && F.ch === P.ch && F.ch === 0,
        va = F.line !== P.line;
      Mn || va ? z(B, F, P, g) : Xe(B, !1, ["`", "`"]);
    }
  }
  function ee(f) {
    We(f.codemirror, "quote");
  }
  function ce(f) {
    He(f.codemirror, "smaller");
  }
  function ve(f) {
    He(f.codemirror, "bigger");
  }
  function qe(f) {
    He(f.codemirror, void 0, 1);
  }
  function he(f) {
    He(f.codemirror, void 0, 2);
  }
  function Le(f) {
    He(f.codemirror, void 0, 3);
  }
  function Fe(f) {
    He(f.codemirror, void 0, 4);
  }
  function Ne(f) {
    He(f.codemirror, void 0, 5);
  }
  function R(f) {
    He(f.codemirror, void 0, 6);
  }
  function le(f) {
    var g = f.codemirror,
      S = "*";
    (["-", "+", "*"].includes(f.options.unorderedListStyle) &&
      (S = f.options.unorderedListStyle),
      We(g, "unordered-list", S));
  }
  function re(f) {
    We(f.codemirror, "ordered-list");
  }
  function De(f) {
    ke(f.codemirror);
  }
  function ze(f) {
    var g = f.options,
      S = "https://";
    if (g.promptURLs) {
      var E = prompt(g.promptTexts.link, S);
      if (!E) return !1;
      S = Kt(E);
    }
    Ve(f, "link", g.insertTexts.link, S);
  }
  function nt(f) {
    var g = f.options,
      S = "https://";
    if (g.promptURLs) {
      var E = prompt(g.promptTexts.image, S);
      if (!E) return !1;
      S = Kt(E);
    }
    Ve(f, "image", g.insertTexts.image, S);
  }
  function Kt(f) {
    return encodeURI(f).replace(/([\\()])/g, "\\$1");
  }
  function T(f) {
    f.openBrowseFileWindow();
  }
  function D(f, g) {
    var S = f.codemirror,
      E = Q(S),
      _ = f.options,
      z = g.substr(g.lastIndexOf("/") + 1),
      B = z
        .substring(z.lastIndexOf(".") + 1)
        .replace(/\?.*$/, "")
        .toLowerCase();
    if (
      ["png", "jpg", "jpeg", "gif", "svg", "apng", "avif", "webp"].includes(B)
    )
      Xe(S, E.image, _.insertTexts.uploadedImage, g);
    else {
      var F = _.insertTexts.link;
      ((F[0] = "[" + z), Xe(S, E.link, F, g));
    }
    (f.updateStatusBar(
      "upload-image",
      f.options.imageTexts.sbOnUploaded.replace("#image_name#", z),
    ),
      setTimeout(function () {
        f.updateStatusBar("upload-image", f.options.imageTexts.sbInit);
      }, 1e3));
  }
  function J(f) {
    var g = f.codemirror,
      S = Q(g),
      E = f.options;
    Xe(g, S.table, E.insertTexts.table);
  }
  function Pe(f) {
    var g = f.codemirror,
      S = Q(g),
      E = f.options;
    Xe(g, S.image, E.insertTexts.horizontalRule);
  }
  function Te(f) {
    var g = f.codemirror;
    (g.undo(), g.focus());
  }
  function Je(f) {
    var g = f.codemirror;
    (g.redo(), g.focus());
  }
  function Qe(f) {
    var g = f.codemirror,
      S = g.getWrapperElement(),
      E = S.nextSibling,
      _ = f.toolbarElements && f.toolbarElements["side-by-side"],
      z = !1,
      B = S.parentNode;
    E.classList.contains("editor-preview-active-side")
      ? (f.options.sideBySideFullscreen === !1 &&
          B.classList.remove("sided--no-fullscreen"),
        E.classList.remove("editor-preview-active-side"),
        _ && _.classList.remove("active"),
        S.classList.remove("CodeMirror-sided"))
      : (setTimeout(function () {
          (g.getOption("fullScreen") ||
            (f.options.sideBySideFullscreen === !1
              ? B.classList.add("sided--no-fullscreen")
              : W(f)),
            E.classList.add("editor-preview-active-side"));
        }, 1),
        _ && _.classList.add("active"),
        S.classList.add("CodeMirror-sided"),
        (z = !0));
    var F = S.lastChild;
    if (F.classList.contains("editor-preview-active")) {
      F.classList.remove("editor-preview-active");
      var P = f.toolbarElements.preview,
        N = f.toolbar_div;
      (P.classList.remove("active"),
        N.classList.remove("disabled-for-preview"));
    }
    var fe = function () {
      var ye = f.options.previewRender(f.value(), E);
      ye != null && (E.innerHTML = ye);
    };
    if (
      (g.sideBySideRenderingFunction || (g.sideBySideRenderingFunction = fe), z)
    ) {
      var xe = f.options.previewRender(f.value(), E);
      (xe != null && (E.innerHTML = xe),
        g.on("update", g.sideBySideRenderingFunction));
    } else g.off("update", g.sideBySideRenderingFunction);
    g.refresh();
  }
  function Ke(f) {
    var g = f.codemirror,
      S = g.getWrapperElement(),
      E = f.toolbar_div,
      _ = f.options.toolbar ? f.toolbarElements.preview : !1,
      z = S.lastChild,
      B = g.getWrapperElement().nextSibling;
    if (
      (B.classList.contains("editor-preview-active-side") && Qe(f),
      !z || !z.classList.contains("editor-preview-full"))
    ) {
      if (
        ((z = document.createElement("div")),
        (z.className = "editor-preview-full"),
        f.options.previewClass)
      )
        if (Array.isArray(f.options.previewClass))
          for (var F = 0; F < f.options.previewClass.length; F++)
            z.classList.add(f.options.previewClass[F]);
        else
          typeof f.options.previewClass == "string" &&
            z.classList.add(f.options.previewClass);
      S.appendChild(z);
    }
    z.classList.contains("editor-preview-active")
      ? (z.classList.remove("editor-preview-active"),
        _ &&
          (_.classList.remove("active"),
          E.classList.remove("disabled-for-preview")))
      : (setTimeout(function () {
          z.classList.add("editor-preview-active");
        }, 1),
        _ &&
          (_.classList.add("active"), E.classList.add("disabled-for-preview")));
    var P = f.options.previewRender(f.value(), z);
    P !== null && (z.innerHTML = P);
  }
  function Xe(f, g, S, E) {
    if (
      !f
        .getWrapperElement()
        .lastChild.classList.contains("editor-preview-active")
    ) {
      var _,
        z = S[0],
        B = S[1],
        F = {},
        P = {};
      (Object.assign(F, f.getCursor("start")),
        Object.assign(P, f.getCursor("end")),
        E && ((z = z.replace("#url#", E)), (B = B.replace("#url#", E))),
        g
          ? ((_ = f.getLine(F.line)),
            (z = _.slice(0, F.ch)),
            (B = _.slice(F.ch)),
            f.replaceRange(z + B, { line: F.line, ch: 0 }))
          : ((_ = f.getSelection()),
            f.replaceSelection(z + _ + B),
            (F.ch += z.length),
            F !== P && (P.ch += z.length)),
        f.setSelection(F, P),
        f.focus());
    }
  }
  function He(f, g, S) {
    if (
      !f
        .getWrapperElement()
        .lastChild.classList.contains("editor-preview-active")
    ) {
      for (
        var E = f.getCursor("start"), _ = f.getCursor("end"), z = E.line;
        z <= _.line;
        z++
      )
        (function (B) {
          var F = f.getLine(B),
            P = F.search(/[^#]/);
          (g !== void 0
            ? P <= 0
              ? g == "bigger"
                ? (F = "###### " + F)
                : (F = "# " + F)
              : P == 6 && g == "smaller"
                ? (F = F.substr(7))
                : P == 1 && g == "bigger"
                  ? (F = F.substr(2))
                  : g == "bigger"
                    ? (F = F.substr(1))
                    : (F = "#" + F)
            : P <= 0
              ? (F = "#".repeat(S) + " " + F)
              : P == S
                ? (F = F.substr(P + 1))
                : (F = "#".repeat(S) + " " + F.substr(P + 1)),
            f.replaceRange(
              F,
              { line: B, ch: 0 },
              { line: B, ch: 99999999999999 },
            ));
        })(z);
      f.focus();
    }
  }
  function We(f, g, S) {
    if (
      !f
        .getWrapperElement()
        .lastChild.classList.contains("editor-preview-active")
    ) {
      for (
        var E = /^(\s*)(\*|-|\+|\d*\.)(\s+)/,
          _ = /^\s*/,
          z = Q(f),
          B = f.getCursor("start"),
          F = f.getCursor("end"),
          P = { quote: /^(\s*)>\s+/, "unordered-list": E, "ordered-list": E },
          N = function (_e, Me) {
            var Ie = {
              quote: ">",
              "unordered-list": S,
              "ordered-list": "%%i.",
            };
            return Ie[_e].replace("%%i", Me);
          },
          fe = function (_e, Me) {
            var Ie = {
                quote: ">",
                "unordered-list": "\\" + S,
                "ordered-list": "\\d+.",
              },
              Ee = new RegExp(Ie[_e]);
            return Me && Ee.test(Me);
          },
          xe = function (_e, Me, Ie) {
            var Ee = E.exec(Me),
              $e = N(_e, ye);
            return (
              Ee !== null
                ? (fe(_e, Ee[2]) && ($e = ""),
                  (Me =
                    Ee[1] +
                    $e +
                    Ee[3] +
                    Me.replace(_, "").replace(P[_e], "$1")))
                : Ie == !1 && (Me = $e + " " + Me),
              Me
            );
          },
          ye = 1,
          se = B.line;
        se <= F.line;
        se++
      )
        (function (_e) {
          var Me = f.getLine(_e);
          (z[g]
            ? (Me = Me.replace(P[g], "$1"))
            : (g == "unordered-list" && (Me = xe("ordered-list", Me, !0)),
              (Me = xe(g, Me, !1)),
              (ye += 1)),
            f.replaceRange(
              Me,
              { line: _e, ch: 0 },
              { line: _e, ch: 99999999999999 },
            ));
        })(se);
      f.focus();
    }
  }
  function Ve(f, g, S, E) {
    if (!(!f.codemirror || f.isPreviewActive())) {
      var _ = f.codemirror,
        z = Q(_),
        B = z[g];
      if (!B) {
        Xe(_, B, S, E);
        return;
      }
      var F = _.getCursor("start"),
        P = _.getCursor("end"),
        N = _.getLine(F.line),
        fe = N.slice(0, F.ch),
        xe = N.slice(F.ch);
      (g == "link"
        ? (fe = fe.replace(/(.*)[^!]\[/, "$1"))
        : g == "image" && (fe = fe.replace(/(.*)!\[$/, "$1")),
        (xe = xe.replace(/]\(.*?\)/, "")),
        _.replaceRange(
          fe + xe,
          { line: F.line, ch: 0 },
          { line: F.line, ch: 99999999999999 },
        ),
        (F.ch -= S[0].length),
        F !== P && (P.ch -= S[0].length),
        _.setSelection(F, P),
        _.focus());
    }
  }
  function lt(f, g, S, E) {
    if (!(!f.codemirror || f.isPreviewActive())) {
      E = typeof E > "u" ? S : E;
      var _ = f.codemirror,
        z = Q(_),
        B,
        F = S,
        P = E,
        N = _.getCursor("start"),
        fe = _.getCursor("end");
      (z[g]
        ? ((B = _.getLine(N.line)),
          (F = B.slice(0, N.ch)),
          (P = B.slice(N.ch)),
          g == "bold"
            ? ((F = F.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, "")),
              (P = P.replace(/(\*\*|__)/, "")))
            : g == "italic"
              ? ((F = F.replace(/(\*|_)(?![\s\S]*(\*|_))/, "")),
                (P = P.replace(/(\*|_)/, "")))
              : g == "strikethrough" &&
                ((F = F.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, "")),
                (P = P.replace(/(\*\*|~~)/, ""))),
          _.replaceRange(
            F + P,
            { line: N.line, ch: 0 },
            { line: N.line, ch: 99999999999999 },
          ),
          g == "bold" || g == "strikethrough"
            ? ((N.ch -= 2), N !== fe && (fe.ch -= 2))
            : g == "italic" && ((N.ch -= 1), N !== fe && (fe.ch -= 1)))
        : ((B = _.getSelection()),
          g == "bold"
            ? ((B = B.split("**").join("")), (B = B.split("__").join("")))
            : g == "italic"
              ? ((B = B.split("*").join("")), (B = B.split("_").join("")))
              : g == "strikethrough" && (B = B.split("~~").join("")),
          _.replaceSelection(F + B + P),
          (N.ch += S.length),
          (fe.ch = N.ch + B.length)),
        _.setSelection(N, fe),
        _.focus());
    }
  }
  function ke(f) {
    if (
      !f
        .getWrapperElement()
        .lastChild.classList.contains("editor-preview-active")
    )
      for (
        var g = f.getCursor("start"), S = f.getCursor("end"), E, _ = g.line;
        _ <= S.line;
        _++
      )
        ((E = f.getLine(_)),
          (E = E.replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/, "")),
          f.replaceRange(
            E,
            { line: _, ch: 0 },
            { line: _, ch: 99999999999999 },
          ));
  }
  function Ct(f, g) {
    if (Math.abs(f) < 1024) return "" + f + g[0];
    var S = 0;
    do ((f /= 1024), ++S);
    while (Math.abs(f) >= 1024 && S < g.length);
    return "" + f.toFixed(1) + g[S];
  }
  function Tt(f, g) {
    for (var S in g)
      Object.prototype.hasOwnProperty.call(g, S) &&
        (g[S] instanceof Array
          ? (f[S] = g[S].concat(f[S] instanceof Array ? f[S] : []))
          : g[S] !== null &&
              typeof g[S] == "object" &&
              g[S].constructor === Object
            ? (f[S] = Tt(f[S] || {}, g[S]))
            : (f[S] = g[S]));
    return f;
  }
  function it(f) {
    for (var g = 1; g < arguments.length; g++) f = Tt(f, arguments[g]);
    return f;
  }
  function zt(f) {
    var g =
        /[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
      S = f.match(g),
      E = 0;
    if (S === null) return E;
    for (var _ = 0; _ < S.length; _++)
      S[_].charCodeAt(0) >= 19968 ? (E += S[_].length) : (E += 1);
    return E;
  }
  var be = {
      bold: "fa fa-bold",
      italic: "fa fa-italic",
      strikethrough: "fa fa-strikethrough",
      heading: "fa fa-header fa-heading",
      "heading-smaller": "fa fa-header fa-heading header-smaller",
      "heading-bigger": "fa fa-header fa-heading header-bigger",
      "heading-1": "fa fa-header fa-heading header-1",
      "heading-2": "fa fa-header fa-heading header-2",
      "heading-3": "fa fa-header fa-heading header-3",
      code: "fa fa-code",
      quote: "fa fa-quote-left",
      "ordered-list": "fa fa-list-ol",
      "unordered-list": "fa fa-list-ul",
      "clean-block": "fa fa-eraser",
      link: "fa fa-link",
      image: "fa fa-image",
      "upload-image": "fa fa-image",
      table: "fa fa-table",
      "horizontal-rule": "fa fa-minus",
      preview: "fa fa-eye",
      "side-by-side": "fa fa-columns",
      fullscreen: "fa fa-arrows-alt",
      guide: "fa fa-question-circle",
      undo: "fa fa-undo",
      redo: "fa fa-repeat fa-redo",
    },
    ut = {
      bold: {
        name: "bold",
        action: Z,
        className: be.bold,
        title: "Bold",
        default: !0,
      },
      italic: {
        name: "italic",
        action: G,
        className: be.italic,
        title: "Italic",
        default: !0,
      },
      strikethrough: {
        name: "strikethrough",
        action: X,
        className: be.strikethrough,
        title: "Strikethrough",
      },
      heading: {
        name: "heading",
        action: ce,
        className: be.heading,
        title: "Heading",
        default: !0,
      },
      "heading-smaller": {
        name: "heading-smaller",
        action: ce,
        className: be["heading-smaller"],
        title: "Smaller Heading",
      },
      "heading-bigger": {
        name: "heading-bigger",
        action: ve,
        className: be["heading-bigger"],
        title: "Bigger Heading",
      },
      "heading-1": {
        name: "heading-1",
        action: qe,
        className: be["heading-1"],
        title: "Big Heading",
      },
      "heading-2": {
        name: "heading-2",
        action: he,
        className: be["heading-2"],
        title: "Medium Heading",
      },
      "heading-3": {
        name: "heading-3",
        action: Le,
        className: be["heading-3"],
        title: "Small Heading",
      },
      "separator-1": { name: "separator-1" },
      code: { name: "code", action: ue, className: be.code, title: "Code" },
      quote: {
        name: "quote",
        action: ee,
        className: be.quote,
        title: "Quote",
        default: !0,
      },
      "unordered-list": {
        name: "unordered-list",
        action: le,
        className: be["unordered-list"],
        title: "Generic List",
        default: !0,
      },
      "ordered-list": {
        name: "ordered-list",
        action: re,
        className: be["ordered-list"],
        title: "Numbered List",
        default: !0,
      },
      "clean-block": {
        name: "clean-block",
        action: De,
        className: be["clean-block"],
        title: "Clean block",
      },
      "separator-2": { name: "separator-2" },
      link: {
        name: "link",
        action: ze,
        className: be.link,
        title: "Create Link",
        default: !0,
      },
      image: {
        name: "image",
        action: nt,
        className: be.image,
        title: "Insert Image",
        default: !0,
      },
      "upload-image": {
        name: "upload-image",
        action: T,
        className: be["upload-image"],
        title: "Import an image",
      },
      table: {
        name: "table",
        action: J,
        className: be.table,
        title: "Insert Table",
      },
      "horizontal-rule": {
        name: "horizontal-rule",
        action: Pe,
        className: be["horizontal-rule"],
        title: "Insert Horizontal Line",
      },
      "separator-3": { name: "separator-3" },
      preview: {
        name: "preview",
        action: Ke,
        className: be.preview,
        noDisable: !0,
        title: "Toggle Preview",
        default: !0,
      },
      "side-by-side": {
        name: "side-by-side",
        action: Qe,
        className: be["side-by-side"],
        noDisable: !0,
        noMobile: !0,
        title: "Toggle Side by Side",
        default: !0,
      },
      fullscreen: {
        name: "fullscreen",
        action: W,
        className: be.fullscreen,
        noDisable: !0,
        noMobile: !0,
        title: "Toggle Fullscreen",
        default: !0,
      },
      "separator-4": { name: "separator-4" },
      guide: {
        name: "guide",
        action: "https://www.markdownguide.org/basic-syntax/",
        className: be.guide,
        noDisable: !0,
        title: "Markdown Guide",
        default: !0,
      },
      "separator-5": { name: "separator-5" },
      undo: {
        name: "undo",
        action: Te,
        className: be.undo,
        noDisable: !0,
        title: "Undo",
      },
      redo: {
        name: "redo",
        action: Je,
        className: be.redo,
        noDisable: !0,
        title: "Redo",
      },
    },
    jt = {
      link: ["[", "](#url#)"],
      image: ["![", "](#url#)"],
      uploadedImage: ["![](#url#)", ""],
      table: [
        "",
        `

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Text     | Text     | Text     |

`,
      ],
      horizontalRule: [
        "",
        `

-----

`,
      ],
    },
    pr = { link: "URL for the link:", image: "URL of the image:" },
    q = { locale: "en-US", format: { hour: "2-digit", minute: "2-digit" } },
    U = { bold: "**", code: "```", italic: "*" },
    I = {
      sbInit: "Attach files by drag and dropping or pasting from clipboard.",
      sbOnDragEnter: "Drop image to upload it.",
      sbOnDrop: "Uploading image #images_names#...",
      sbProgress: "Uploading #file_name#: #progress#%",
      sbOnUploaded: "Uploaded #image_name#",
      sizeUnits: " B, KB, MB",
    },
    b = {
      noFileGiven: "You must select a file.",
      typeNotAllowed: "This image type is not allowed.",
      fileTooLarge: `Image #image_name# is too big (#image_size#).
Maximum file size is #image_max_size#.`,
      importError:
        "Something went wrong when uploading the image #image_name#.",
    };
  function x(f) {
    ((f = f || {}), (f.parent = this));
    var g = !0;
    if (
      (f.autoDownloadFontAwesome === !1 && (g = !1),
      f.autoDownloadFontAwesome !== !0)
    )
      for (var S = document.styleSheets, E = 0; E < S.length; E++)
        S[E].href &&
          S[E].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 &&
          (g = !1);
    if (g) {
      var _ = document.createElement("link");
      ((_.rel = "stylesheet"),
        (_.href =
          "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"),
        document.getElementsByTagName("head")[0].appendChild(_));
    }
    if (f.element) this.element = f.element;
    else if (f.element === null) {
      console.log("EasyMDE: Error. No element was found.");
      return;
    }
    if (f.toolbar === void 0) {
      f.toolbar = [];
      for (var z in ut)
        Object.prototype.hasOwnProperty.call(ut, z) &&
          (z.indexOf("separator-") != -1 && f.toolbar.push("|"),
          (ut[z].default === !0 ||
            (f.showIcons &&
              f.showIcons.constructor === Array &&
              f.showIcons.indexOf(z) != -1)) &&
            f.toolbar.push(z));
    }
    if (
      (Object.prototype.hasOwnProperty.call(f, "previewClass") ||
        (f.previewClass = "editor-preview"),
      Object.prototype.hasOwnProperty.call(f, "status") ||
        ((f.status = ["autosave", "lines", "words", "cursor"]),
        f.uploadImage && f.status.unshift("upload-image")),
      f.previewRender ||
        (f.previewRender = function (F) {
          return this.parent.markdown(F);
        }),
      (f.parsingConfig = it(
        { highlightFormatting: !0 },
        f.parsingConfig || {},
      )),
      (f.insertTexts = it({}, jt, f.insertTexts || {})),
      (f.promptTexts = it({}, pr, f.promptTexts || {})),
      (f.blockStyles = it({}, U, f.blockStyles || {})),
      f.autosave != null &&
        (f.autosave.timeFormat = it({}, q, f.autosave.timeFormat || {})),
      (f.iconClassMap = it({}, be, f.iconClassMap || {})),
      (f.shortcuts = it({}, y, f.shortcuts || {})),
      (f.maxHeight = f.maxHeight || void 0),
      (f.direction = f.direction || "ltr"),
      typeof f.maxHeight < "u"
        ? (f.minHeight = f.maxHeight)
        : (f.minHeight = f.minHeight || "300px"),
      (f.errorCallback =
        f.errorCallback ||
        function (F) {
          alert(F);
        }),
      (f.uploadImage = f.uploadImage || !1),
      (f.imageMaxSize = f.imageMaxSize || 2097152),
      (f.imageAccept =
        f.imageAccept || "image/png, image/jpeg, image/gif, image/avif"),
      (f.imageTexts = it({}, I, f.imageTexts || {})),
      (f.errorMessages = it({}, b, f.errorMessages || {})),
      (f.imagePathAbsolute = f.imagePathAbsolute || !1),
      (f.imageCSRFName = f.imageCSRFName || "csrfmiddlewaretoken"),
      (f.imageCSRFHeader = f.imageCSRFHeader || !1),
      (f.imageInputName = f.imageInputName || "image"),
      f.autosave != null &&
        f.autosave.unique_id != null &&
        f.autosave.unique_id != "" &&
        (f.autosave.uniqueId = f.autosave.unique_id),
      f.overlayMode &&
        f.overlayMode.combine === void 0 &&
        (f.overlayMode.combine = !0),
      (this.options = f),
      this.render(),
      f.initialValue &&
        (!this.options.autosave ||
          this.options.autosave.foundSavedValue !== !0) &&
        this.value(f.initialValue),
      f.uploadImage)
    ) {
      var B = this;
      (this.codemirror.on("dragenter", function (F, P) {
        (B.updateStatusBar("upload-image", B.options.imageTexts.sbOnDragEnter),
          P.stopPropagation(),
          P.preventDefault());
      }),
        this.codemirror.on("dragend", function (F, P) {
          (B.updateStatusBar("upload-image", B.options.imageTexts.sbInit),
            P.stopPropagation(),
            P.preventDefault());
        }),
        this.codemirror.on("dragleave", function (F, P) {
          (B.updateStatusBar("upload-image", B.options.imageTexts.sbInit),
            P.stopPropagation(),
            P.preventDefault());
        }),
        this.codemirror.on("dragover", function (F, P) {
          (B.updateStatusBar(
            "upload-image",
            B.options.imageTexts.sbOnDragEnter,
          ),
            P.stopPropagation(),
            P.preventDefault());
        }),
        this.codemirror.on("drop", function (F, P) {
          (P.stopPropagation(),
            P.preventDefault(),
            f.imageUploadFunction
              ? B.uploadImagesUsingCustomFunction(
                  f.imageUploadFunction,
                  P.dataTransfer.files,
                )
              : B.uploadImages(P.dataTransfer.files));
        }),
        this.codemirror.on("paste", function (F, P) {
          f.imageUploadFunction
            ? B.uploadImagesUsingCustomFunction(
                f.imageUploadFunction,
                P.clipboardData.files,
              )
            : B.uploadImages(P.clipboardData.files);
        }));
    }
  }
  ((x.prototype.uploadImages = function (f, g, S) {
    if (f.length !== 0) {
      for (var E = [], _ = 0; _ < f.length; _++)
        (E.push(f[_].name), this.uploadImage(f[_], g, S));
      this.updateStatusBar(
        "upload-image",
        this.options.imageTexts.sbOnDrop.replace(
          "#images_names#",
          E.join(", "),
        ),
      );
    }
  }),
    (x.prototype.uploadImagesUsingCustomFunction = function (f, g) {
      if (g.length !== 0) {
        for (var S = [], E = 0; E < g.length; E++)
          (S.push(g[E].name), this.uploadImageUsingCustomFunction(f, g[E]));
        this.updateStatusBar(
          "upload-image",
          this.options.imageTexts.sbOnDrop.replace(
            "#images_names#",
            S.join(", "),
          ),
        );
      }
    }),
    (x.prototype.updateStatusBar = function (f, g) {
      if (this.gui.statusbar) {
        var S = this.gui.statusbar.getElementsByClassName(f);
        S.length === 1
          ? (this.gui.statusbar.getElementsByClassName(f)[0].textContent = g)
          : S.length === 0
            ? console.log("EasyMDE: status bar item " + f + " was not found.")
            : console.log(
                "EasyMDE: Several status bar items named " + f + " was found.",
              );
      }
    }),
    (x.prototype.markdown = function (f) {
      if (s) {
        var g;
        if (
          (this.options &&
          this.options.renderingConfig &&
          this.options.renderingConfig.markedOptions
            ? (g = this.options.renderingConfig.markedOptions)
            : (g = {}),
          this.options &&
          this.options.renderingConfig &&
          this.options.renderingConfig.singleLineBreaks === !1
            ? (g.breaks = !1)
            : (g.breaks = !0),
          this.options &&
            this.options.renderingConfig &&
            this.options.renderingConfig.codeSyntaxHighlighting === !0)
        ) {
          var S = this.options.renderingConfig.hljs || window.hljs;
          S &&
            (g.highlight = function (_, z) {
              return z && S.getLanguage(z)
                ? S.highlight(z, _).value
                : S.highlightAuto(_).value;
            });
        }
        s.use(g);
        var E = s.parse(f);
        return (
          this.options.renderingConfig &&
            typeof this.options.renderingConfig.sanitizerFunction ==
              "function" &&
            (E = this.options.renderingConfig.sanitizerFunction.call(this, E)),
          (E = L(E)),
          (E = K(E)),
          E
        );
      }
    }),
    (x.prototype.render = function (f) {
      if (
        (f ||
          (f = this.element || document.getElementsByTagName("textarea")[0]),
        this._rendered && this._rendered === f)
      )
        return;
      this.element = f;
      var g = this.options,
        S = this,
        E = {};
      for (var _ in g.shortcuts)
        g.shortcuts[_] !== null &&
          m[_] !== null &&
          (function (Ie) {
            E[$(g.shortcuts[Ie])] = function () {
              var Ee = m[Ie];
              typeof Ee == "function"
                ? Ee(S)
                : typeof Ee == "string" && window.open(Ee, "_blank");
            };
          })(_);
      ((E.Enter = "newlineAndIndentContinueMarkdownList"),
        (E.Tab = "tabAndIndentMarkdownList"),
        (E["Shift-Tab"] = "shiftTabAndUnindentMarkdownList"),
        (E.Esc = function (Ie) {
          Ie.getOption("fullScreen") && W(S);
        }),
        (this.documentOnKeyDown = function (Ie) {
          ((Ie = Ie || window.event),
            Ie.keyCode == 27 && S.codemirror.getOption("fullScreen") && W(S));
        }),
        document.addEventListener("keydown", this.documentOnKeyDown, !1));
      var z, B;
      (g.overlayMode
        ? (a.defineMode("overlay-mode", function (Ie) {
            return a.overlayMode(
              a.getMode(Ie, g.spellChecker !== !1 ? "spell-checker" : "gfm"),
              g.overlayMode.mode,
              g.overlayMode.combine,
            );
          }),
          (z = "overlay-mode"),
          (B = g.parsingConfig),
          (B.gitHubSpice = !1))
        : ((z = g.parsingConfig), (z.name = "gfm"), (z.gitHubSpice = !1)),
        g.spellChecker !== !1 &&
          ((z = "spell-checker"),
          (B = g.parsingConfig),
          (B.name = "gfm"),
          (B.gitHubSpice = !1),
          typeof g.spellChecker == "function"
            ? g.spellChecker({ codeMirrorInstance: a })
            : l({ codeMirrorInstance: a })));
      function F(Ie, Ee, $e) {
        return { addNew: !1 };
      }
      if (
        ((this.codemirror = a.fromTextArea(f, {
          mode: z,
          backdrop: B,
          theme: g.theme != null ? g.theme : "easymde",
          tabSize: g.tabSize != null ? g.tabSize : 2,
          indentUnit: g.tabSize != null ? g.tabSize : 2,
          indentWithTabs: g.indentWithTabs !== !1,
          lineNumbers: g.lineNumbers === !0,
          autofocus: g.autofocus === !0,
          extraKeys: E,
          direction: g.direction,
          lineWrapping: g.lineWrapping !== !1,
          allowDropFileTypes: ["text/plain"],
          placeholder: g.placeholder || f.getAttribute("placeholder") || "",
          styleSelectedText:
            g.styleSelectedText != null ? g.styleSelectedText : !C(),
          scrollbarStyle:
            g.scrollbarStyle != null ? g.scrollbarStyle : "native",
          configureMouse: F,
          inputStyle:
            g.inputStyle != null
              ? g.inputStyle
              : C()
                ? "contenteditable"
                : "textarea",
          spellcheck: g.nativeSpellcheck != null ? g.nativeSpellcheck : !0,
          autoRefresh: g.autoRefresh != null ? g.autoRefresh : !1,
        })),
        (this.codemirror.getScrollerElement().style.minHeight = g.minHeight),
        typeof g.maxHeight < "u" &&
          (this.codemirror.getScrollerElement().style.height = g.maxHeight),
        g.forceSync === !0)
      ) {
        var P = this.codemirror;
        P.on("change", function () {
          P.save();
        });
      }
      this.gui = {};
      var N = document.createElement("div");
      (N.classList.add("EasyMDEContainer"),
        N.setAttribute("role", "application"));
      var fe = this.codemirror.getWrapperElement();
      (fe.parentNode.insertBefore(N, fe),
        N.appendChild(fe),
        g.toolbar !== !1 && (this.gui.toolbar = this.createToolbar()),
        g.status !== !1 && (this.gui.statusbar = this.createStatusbar()),
        g.autosave != null &&
          g.autosave.enabled === !0 &&
          (this.autosave(),
          this.codemirror.on("change", function () {
            (clearTimeout(S._autosave_timeout),
              (S._autosave_timeout = setTimeout(
                function () {
                  S.autosave();
                },
                S.options.autosave.submit_delay ||
                  S.options.autosave.delay ||
                  1e3,
              )));
          })));
      function xe(Ie, Ee) {
        var $e,
          Ye = window
            .getComputedStyle(document.querySelector(".CodeMirror-sizer"))
            .width.replace("px", "");
        return (Ie < Ye ? ($e = Ee + "px") : ($e = (Ee / Ie) * 100 + "%"), $e);
      }
      var ye = this;
      function se(Ie, Ee) {
        var $e = new URL(Ee.url, document.baseURI).href;
        (Ie.setAttribute("data-img-src", $e),
          Ie.setAttribute(
            "style",
            "--bg-image:url(" +
              $e +
              ");--width:" +
              Ee.naturalWidth +
              "px;--height:" +
              xe(Ee.naturalWidth, Ee.naturalHeight),
          ),
          ye.codemirror.setSize());
      }
      function _e() {
        g.previewImagesInEditor &&
          N.querySelectorAll(".cm-image-marker").forEach(function (Ie) {
            var Ee = Ie.parentElement;
            if (
              Ee.innerText.match(/^!\[.*?\]\(.*\)/g) &&
              !Ee.hasAttribute("data-img-src")
            ) {
              var $e = Ee.innerText.match(/!\[.*?\]\((.*?)\)/);
              if (
                (window.EMDEimagesCache || (window.EMDEimagesCache = {}),
                $e && $e.length >= 2)
              ) {
                var Ye = $e[1];
                if (g.imagesPreviewHandler) {
                  var ft = g.imagesPreviewHandler($e[1]);
                  typeof ft == "string" && (Ye = ft);
                }
                if (window.EMDEimagesCache[Ye])
                  se(Ee, window.EMDEimagesCache[Ye]);
                else {
                  window.EMDEimagesCache[Ye] = {};
                  var Et = document.createElement("img");
                  ((Et.onload = function () {
                    ((window.EMDEimagesCache[Ye] = {
                      naturalWidth: Et.naturalWidth,
                      naturalHeight: Et.naturalHeight,
                      url: Ye,
                    }),
                      se(Ee, window.EMDEimagesCache[Ye]));
                  }),
                    (Et.src = Ye));
                }
              }
            }
          });
      }
      (this.codemirror.on("update", function () {
        _e();
      }),
        (this.gui.sideBySide = this.createSideBySide()),
        (this._rendered = this.element),
        (g.autofocus === !0 || f.autofocus) && this.codemirror.focus());
      var Me = this.codemirror;
      setTimeout(
        function () {
          Me.refresh();
        }.bind(Me),
        0,
      );
    }),
    (x.prototype.cleanup = function () {
      document.removeEventListener("keydown", this.documentOnKeyDown);
    }));
  function M() {
    if (typeof localStorage == "object")
      try {
        (localStorage.setItem("smde_localStorage", 1),
          localStorage.removeItem("smde_localStorage"));
      } catch {
        return !1;
      }
    else return !1;
    return !0;
  }
  return (
    (x.prototype.autosave = function () {
      if (M()) {
        var f = this;
        if (
          this.options.autosave.uniqueId == null ||
          this.options.autosave.uniqueId == ""
        ) {
          console.log(
            "EasyMDE: You must set a uniqueId to use the autosave feature",
          );
          return;
        }
        (this.options.autosave.binded !== !0 &&
          (f.element.form != null &&
            f.element.form != null &&
            f.element.form.addEventListener("submit", function () {
              (clearTimeout(f.autosaveTimeoutId),
                (f.autosaveTimeoutId = void 0),
                localStorage.removeItem("smde_" + f.options.autosave.uniqueId));
            }),
          (this.options.autosave.binded = !0)),
          this.options.autosave.loaded !== !0 &&
            (typeof localStorage.getItem(
              "smde_" + this.options.autosave.uniqueId,
            ) == "string" &&
              localStorage.getItem("smde_" + this.options.autosave.uniqueId) !=
                "" &&
              (this.codemirror.setValue(
                localStorage.getItem("smde_" + this.options.autosave.uniqueId),
              ),
              (this.options.autosave.foundSavedValue = !0)),
            (this.options.autosave.loaded = !0)));
        var g = f.value();
        g !== ""
          ? localStorage.setItem("smde_" + this.options.autosave.uniqueId, g)
          : localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
        var S = document.getElementById("autosaved");
        if (S != null && S != null && S != "") {
          var E = new Date(),
            _ = new Intl.DateTimeFormat(
              [this.options.autosave.timeFormat.locale, "en-US"],
              this.options.autosave.timeFormat.format,
            ).format(E),
            z =
              this.options.autosave.text == null
                ? "Autosaved: "
                : this.options.autosave.text;
          S.innerHTML = z + _;
        }
      } else
        console.log("EasyMDE: localStorage not available, cannot autosave");
    }),
    (x.prototype.clearAutosavedValue = function () {
      if (M()) {
        if (
          this.options.autosave == null ||
          this.options.autosave.uniqueId == null ||
          this.options.autosave.uniqueId == ""
        ) {
          console.log(
            "EasyMDE: You must set a uniqueId to clear the autosave value",
          );
          return;
        }
        localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
      } else
        console.log("EasyMDE: localStorage not available, cannot autosave");
    }),
    (x.prototype.openBrowseFileWindow = function (f, g) {
      var S = this,
        E = this.gui.toolbar.getElementsByClassName("imageInput")[0];
      E.click();
      function _(z) {
        (S.options.imageUploadFunction
          ? S.uploadImagesUsingCustomFunction(
              S.options.imageUploadFunction,
              z.target.files,
            )
          : S.uploadImages(z.target.files, f, g),
          E.removeEventListener("change", _));
      }
      E.addEventListener("change", _);
    }),
    (x.prototype.uploadImage = function (f, g, S) {
      var E = this;
      g =
        g ||
        function (N) {
          D(E, N);
        };
      function _(P) {
        (E.updateStatusBar("upload-image", P),
          setTimeout(function () {
            E.updateStatusBar("upload-image", E.options.imageTexts.sbInit);
          }, 1e4),
          S && typeof S == "function" && S(P),
          E.options.errorCallback(P));
      }
      function z(P) {
        var N = E.options.imageTexts.sizeUnits.split(",");
        return P.replace("#image_name#", f.name)
          .replace("#image_size#", Ct(f.size, N))
          .replace("#image_max_size#", Ct(E.options.imageMaxSize, N));
      }
      if (f.size > this.options.imageMaxSize) {
        _(z(this.options.errorMessages.fileTooLarge));
        return;
      }
      var B = new FormData();
      (B.append("image", f),
        E.options.imageCSRFToken &&
          !E.options.imageCSRFHeader &&
          B.append(E.options.imageCSRFName, E.options.imageCSRFToken));
      var F = new XMLHttpRequest();
      ((F.upload.onprogress = function (P) {
        if (P.lengthComputable) {
          var N = "" + Math.round((P.loaded * 100) / P.total);
          E.updateStatusBar(
            "upload-image",
            E.options.imageTexts.sbProgress
              .replace("#file_name#", f.name)
              .replace("#progress#", N),
          );
        }
      }),
        F.open("POST", this.options.imageUploadEndpoint),
        E.options.imageCSRFToken &&
          E.options.imageCSRFHeader &&
          F.setRequestHeader(E.options.imageCSRFName, E.options.imageCSRFToken),
        (F.onload = function () {
          try {
            var P = JSON.parse(this.responseText);
          } catch {
            (console.error("EasyMDE: The server did not return a valid json."),
              _(z(E.options.errorMessages.importError)));
            return;
          }
          this.status === 200 && P && !P.error && P.data && P.data.filePath
            ? g(
                (E.options.imagePathAbsolute
                  ? ""
                  : window.location.origin + "/") + P.data.filePath,
              )
            : P.error && P.error in E.options.errorMessages
              ? _(z(E.options.errorMessages[P.error]))
              : P.error
                ? _(z(P.error))
                : (console.error(
                    "EasyMDE: Received an unexpected response after uploading the image." +
                      this.status +
                      " (" +
                      this.statusText +
                      ")",
                  ),
                  _(z(E.options.errorMessages.importError)));
        }),
        (F.onerror = function (P) {
          (console.error(
            "EasyMDE: An unexpected error occurred when trying to upload the image." +
              P.target.status +
              " (" +
              P.target.statusText +
              ")",
          ),
            _(E.options.errorMessages.importError));
        }),
        F.send(B));
    }),
    (x.prototype.uploadImageUsingCustomFunction = function (f, g) {
      var S = this;
      function E(B) {
        D(S, B);
      }
      function _(B) {
        var F = z(B);
        (S.updateStatusBar("upload-image", F),
          setTimeout(function () {
            S.updateStatusBar("upload-image", S.options.imageTexts.sbInit);
          }, 1e4),
          S.options.errorCallback(F));
      }
      function z(B) {
        var F = S.options.imageTexts.sizeUnits.split(",");
        return B.replace("#image_name#", g.name)
          .replace("#image_size#", Ct(g.size, F))
          .replace("#image_max_size#", Ct(S.options.imageMaxSize, F));
      }
      f.apply(this, [g, E, _]);
    }),
    (x.prototype.setPreviewMaxHeight = function () {
      var f = this.codemirror,
        g = f.getWrapperElement(),
        S = g.nextSibling,
        E = parseInt(window.getComputedStyle(g).paddingTop),
        _ = parseInt(window.getComputedStyle(g).borderTopWidth),
        z = parseInt(this.options.maxHeight),
        B = z + E * 2 + _ * 2,
        F = B.toString() + "px";
      S.style.height = F;
    }),
    (x.prototype.createSideBySide = function () {
      var f = this.codemirror,
        g = f.getWrapperElement(),
        S = g.nextSibling;
      if (!S || !S.classList.contains("editor-preview-side")) {
        if (
          ((S = document.createElement("div")),
          (S.className = "editor-preview-side"),
          this.options.previewClass)
        )
          if (Array.isArray(this.options.previewClass))
            for (var E = 0; E < this.options.previewClass.length; E++)
              S.classList.add(this.options.previewClass[E]);
          else
            typeof this.options.previewClass == "string" &&
              S.classList.add(this.options.previewClass);
        g.parentNode.insertBefore(S, g.nextSibling);
      }
      if (
        (typeof this.options.maxHeight < "u" && this.setPreviewMaxHeight(),
        this.options.syncSideBySidePreviewScroll === !1)
      )
        return S;
      var _ = !1,
        z = !1;
      return (
        f.on("scroll", function (B) {
          if (_) {
            _ = !1;
            return;
          }
          z = !0;
          var F = B.getScrollInfo().height - B.getScrollInfo().clientHeight,
            P = parseFloat(B.getScrollInfo().top) / F,
            N = (S.scrollHeight - S.clientHeight) * P;
          S.scrollTop = N;
        }),
        (S.onscroll = function () {
          if (z) {
            z = !1;
            return;
          }
          _ = !0;
          var B = S.scrollHeight - S.clientHeight,
            F = parseFloat(S.scrollTop) / B,
            P = (f.getScrollInfo().height - f.getScrollInfo().clientHeight) * F;
          f.scrollTo(0, P);
        }),
        S
      );
    }),
    (x.prototype.createToolbar = function (f) {
      if (((f = f || this.options.toolbar), !(!f || f.length === 0))) {
        var g;
        for (g = 0; g < f.length; g++) ut[f[g]] != null && (f[g] = ut[f[g]]);
        var S = document.createElement("div");
        ((S.className = "editor-toolbar"), S.setAttribute("role", "toolbar"));
        var E = this,
          _ = {};
        for (E.toolbar = f, g = 0; g < f.length; g++)
          if (
            !(f[g].name == "guide" && E.options.toolbarGuideIcon === !1) &&
            !(
              E.options.hideIcons &&
              E.options.hideIcons.indexOf(f[g].name) != -1
            ) &&
            !((f[g].name == "fullscreen" || f[g].name == "side-by-side") && C())
          ) {
            if (f[g] === "|") {
              for (var z = !1, B = g + 1; B < f.length; B++)
                f[B] !== "|" &&
                  (!E.options.hideIcons ||
                    E.options.hideIcons.indexOf(f[B].name) == -1) &&
                  (z = !0);
              if (!z) continue;
            }
            (function (N) {
              var fe;
              if (
                (N === "|"
                  ? (fe = ae())
                  : N.children
                    ? (fe = j(N, E.options.toolbarTips, E.options.shortcuts, E))
                    : (fe = ne(
                        N,
                        !0,
                        E.options.toolbarTips,
                        E.options.shortcuts,
                        "button",
                        E,
                      )),
                (_[N.name || N] = fe),
                S.appendChild(fe),
                N.name === "upload-image")
              ) {
                var xe = document.createElement("input");
                ((xe.className = "imageInput"),
                  (xe.type = "file"),
                  (xe.multiple = !0),
                  (xe.name = E.options.imageInputName),
                  (xe.accept = E.options.imageAccept),
                  (xe.style.display = "none"),
                  (xe.style.opacity = 0),
                  S.appendChild(xe));
              }
            })(f[g]);
          }
        ((E.toolbar_div = S), (E.toolbarElements = _));
        var F = this.codemirror;
        F.on("cursorActivity", function () {
          var N = Q(F);
          for (var fe in _)
            (function (xe) {
              var ye = _[xe];
              N[xe]
                ? ye.classList.add("active")
                : xe != "fullscreen" &&
                  xe != "side-by-side" &&
                  ye.classList.remove("active");
            })(fe);
        });
        var P = F.getWrapperElement();
        return (P.parentNode.insertBefore(S, P), S);
      }
    }),
    (x.prototype.createStatusbar = function (f) {
      f = f || this.options.status;
      var g = this.options,
        S = this.codemirror;
      if (!(!f || f.length === 0)) {
        var E = [],
          _,
          z,
          B,
          F;
        for (_ = 0; _ < f.length; _++)
          if (
            ((z = void 0), (B = void 0), (F = void 0), typeof f[_] == "object")
          )
            E.push({
              className: f[_].className,
              defaultValue: f[_].defaultValue,
              onUpdate: f[_].onUpdate,
              onActivity: f[_].onActivity,
            });
          else {
            var P = f[_];
            (P === "words"
              ? ((F = function (se) {
                  se.innerHTML = zt(S.getValue());
                }),
                (z = function (se) {
                  se.innerHTML = zt(S.getValue());
                }))
              : P === "lines"
                ? ((F = function (se) {
                    se.innerHTML = S.lineCount();
                  }),
                  (z = function (se) {
                    se.innerHTML = S.lineCount();
                  }))
                : P === "cursor"
                  ? ((F = function (se) {
                      se.innerHTML = "1:1";
                    }),
                    (B = function (se) {
                      var _e = S.getCursor(),
                        Me = _e.line + 1,
                        Ie = _e.ch + 1;
                      se.innerHTML = Me + ":" + Ie;
                    }))
                  : P === "autosave"
                    ? (F = function (se) {
                        g.autosave != null &&
                          g.autosave.enabled === !0 &&
                          se.setAttribute("id", "autosaved");
                      })
                    : P === "upload-image" &&
                      (F = function (se) {
                        se.innerHTML = g.imageTexts.sbInit;
                      }),
              E.push({
                className: P,
                defaultValue: F,
                onUpdate: z,
                onActivity: B,
              }));
          }
        var N = document.createElement("div");
        for (N.className = "editor-statusbar", _ = 0; _ < E.length; _++) {
          var fe = E[_],
            xe = document.createElement("span");
          ((xe.className = fe.className),
            typeof fe.defaultValue == "function" && fe.defaultValue(xe),
            typeof fe.onUpdate == "function" &&
              this.codemirror.on(
                "update",
                (function (se, _e) {
                  return function () {
                    _e.onUpdate(se);
                  };
                })(xe, fe),
              ),
            typeof fe.onActivity == "function" &&
              this.codemirror.on(
                "cursorActivity",
                (function (se, _e) {
                  return function () {
                    _e.onActivity(se);
                  };
                })(xe, fe),
              ),
            N.appendChild(xe));
        }
        var ye = this.codemirror.getWrapperElement();
        return (ye.parentNode.insertBefore(N, ye.nextSibling), N);
      }
    }),
    (x.prototype.value = function (f) {
      var g = this.codemirror;
      if (f === void 0) return g.getValue();
      if ((g.getDoc().setValue(f), this.isPreviewActive())) {
        var S = g.getWrapperElement(),
          E = S.lastChild,
          _ = this.options.previewRender(f, E);
        _ !== null && (E.innerHTML = _);
      }
      return this;
    }),
    (x.toggleBold = Z),
    (x.toggleItalic = G),
    (x.toggleStrikethrough = X),
    (x.toggleBlockquote = ee),
    (x.toggleHeadingSmaller = ce),
    (x.toggleHeadingBigger = ve),
    (x.toggleHeading1 = qe),
    (x.toggleHeading2 = he),
    (x.toggleHeading3 = Le),
    (x.toggleHeading4 = Fe),
    (x.toggleHeading5 = Ne),
    (x.toggleHeading6 = R),
    (x.toggleCodeBlock = ue),
    (x.toggleUnorderedList = le),
    (x.toggleOrderedList = re),
    (x.cleanBlock = De),
    (x.drawLink = ze),
    (x.drawImage = nt),
    (x.drawUploadedImage = T),
    (x.drawTable = J),
    (x.drawHorizontalRule = Pe),
    (x.undo = Te),
    (x.redo = Je),
    (x.togglePreview = Ke),
    (x.toggleSideBySide = Qe),
    (x.toggleFullScreen = W),
    (x.prototype.toggleBold = function () {
      Z(this);
    }),
    (x.prototype.toggleItalic = function () {
      G(this);
    }),
    (x.prototype.toggleStrikethrough = function () {
      X(this);
    }),
    (x.prototype.toggleBlockquote = function () {
      ee(this);
    }),
    (x.prototype.toggleHeadingSmaller = function () {
      ce(this);
    }),
    (x.prototype.toggleHeadingBigger = function () {
      ve(this);
    }),
    (x.prototype.toggleHeading1 = function () {
      qe(this);
    }),
    (x.prototype.toggleHeading2 = function () {
      he(this);
    }),
    (x.prototype.toggleHeading3 = function () {
      Le(this);
    }),
    (x.prototype.toggleHeading4 = function () {
      Fe(this);
    }),
    (x.prototype.toggleHeading5 = function () {
      Ne(this);
    }),
    (x.prototype.toggleHeading6 = function () {
      R(this);
    }),
    (x.prototype.toggleCodeBlock = function () {
      ue(this);
    }),
    (x.prototype.toggleUnorderedList = function () {
      le(this);
    }),
    (x.prototype.toggleOrderedList = function () {
      re(this);
    }),
    (x.prototype.cleanBlock = function () {
      De(this);
    }),
    (x.prototype.drawLink = function () {
      ze(this);
    }),
    (x.prototype.drawImage = function () {
      nt(this);
    }),
    (x.prototype.drawUploadedImage = function () {
      T(this);
    }),
    (x.prototype.drawTable = function () {
      J(this);
    }),
    (x.prototype.drawHorizontalRule = function () {
      Pe(this);
    }),
    (x.prototype.undo = function () {
      Te(this);
    }),
    (x.prototype.redo = function () {
      Je(this);
    }),
    (x.prototype.togglePreview = function () {
      Ke(this);
    }),
    (x.prototype.toggleSideBySide = function () {
      Qe(this);
    }),
    (x.prototype.toggleFullScreen = function () {
      W(this);
    }),
    (x.prototype.isPreviewActive = function () {
      var f = this.codemirror,
        g = f.getWrapperElement(),
        S = g.lastChild;
      return S.classList.contains("editor-preview-active");
    }),
    (x.prototype.isSideBySideActive = function () {
      var f = this.codemirror,
        g = f.getWrapperElement(),
        S = g.nextSibling;
      return S.classList.contains("editor-preview-active-side");
    }),
    (x.prototype.isFullscreenActive = function () {
      var f = this.codemirror;
      return f.getOption("fullScreen");
    }),
    (x.prototype.getState = function () {
      var f = this.codemirror;
      return Q(f);
    }),
    (x.prototype.toTextArea = function () {
      var f = this.codemirror,
        g = f.getWrapperElement(),
        S = g.parentNode;
      (S &&
        (this.gui.toolbar && S.removeChild(this.gui.toolbar),
        this.gui.statusbar && S.removeChild(this.gui.statusbar),
        this.gui.sideBySide && S.removeChild(this.gui.sideBySide)),
        S.parentNode.insertBefore(g, S),
        S.remove(),
        f.toTextArea(),
        this.autosaveTimeoutId &&
          (clearTimeout(this.autosaveTimeoutId),
          (this.autosaveTimeoutId = void 0),
          this.clearAutosavedValue()));
    }),
    (ko = x),
    ko
  );
}
var yv = xv();
const bv = Vg(yv),
  yc = {
    FileText: Fd,
    File: Ld,
    SlidersHorizontal: zd,
    ExternalLink: Ed,
    Settings: Pd,
    Sun: Wd,
    Moon: Od,
    Plus: Id,
    Trash2: qd,
    Menu: Bd,
    LayoutTemplate: _d,
    Save: Nd,
    Search: Rd,
    X: Ud,
    ArrowLeft: Sd,
    ChevronRight: Ad,
    Image: Td,
    Link: Md,
    Send: Hd,
  };
nf({ icons: yc });
function So() {
  return (
    localStorage.adminTheme === "dark" ||
    (!("adminTheme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}
Jr.data("postFilter", () => ({
  posts: [],
  activeCategory: "",
  activeTag: "",
  get filtered() {
    return this.posts.filter((a) => {
      const l =
          this.activeCategory === "" || a.category === this.activeCategory,
        s =
          this.activeTag === "" ||
          (Array.isArray(a.tags) && a.tags.includes(this.activeTag));
      return l && s;
    });
  },
  init() {
    ((this.posts = JSON.parse(this.$el.dataset.posts || "[]")),
      this.$watch("filtered", () => {
        this.$nextTick(() => window.lucide.createIcons());
      }),
      this.$nextTick(() => window.lucide.createIcons()));
  },
}));
Jr.store("adminTheme", {
  init() {
    (document.documentElement.setAttribute(
      "admin-data-theme",
      So() ? "dark" : "light",
    ),
      (this.dark = So()));
  },
  dark: So(),
  darkTheme() {
    ((this.dark = !0),
      (localStorage.adminTheme = "dark"),
      document.documentElement.setAttribute("admin-data-theme", "dark"));
  },
  lightTheme() {
    ((this.dark = !1),
      (localStorage.adminTheme = "light"),
      document.documentElement.setAttribute("admin-data-theme", "light"));
  },
});
let Dv = 0,
  ef = !1;
Jr.data("alertComponent", () => ({
  alerts: [],
  init() {
    const a = sessionStorage.getItem("flash_alert");
    if (a) {
      sessionStorage.removeItem("flash_alert");
      const { type: l, message: s } = JSON.parse(a);
      this.show(l, s);
    }
    ef ||
      ((ef = !0),
      document.addEventListener("show-alert", (l) => {
        this.show(l.detail.type, l.detail.message);
      }));
  },
  show(a, l) {
    const s = ++Dv;
    (this.alerts.push({ id: s, type: a, message: l, visible: !0 }),
      this.$nextTick(() => lucide.createIcons()),
      a !== "warning" && setTimeout(() => this.dismiss(s), 4e3));
  },
  dismiss(a) {
    const l = this.alerts.find((s) => s.id === a);
    (l && (l.visible = !1),
      setTimeout(() => {
        this.alerts = this.alerts.filter((s) => s.id !== a);
      }, 300));
  },
}));
let Ur = null;
Jr.store("confirm", {
  open: !1,
  message: "",
  show(a) {
    ((this.message = a), (this.open = !0));
  },
  accept() {
    ((this.open = !1), Ur && Ur(!0), (Ur = null));
  },
  cancel() {
    ((this.open = !1), Ur && Ur(!1), (Ur = null));
  },
});
window.flashAlert = function (a, l) {
  sessionStorage.setItem(
    "flash_alert",
    JSON.stringify({ type: a, message: l }),
  );
};
window.showAlert = function (a, l) {
  document.dispatchEvent(
    new CustomEvent("show-alert", { detail: { type: a, message: l } }),
  );
};
window.showConfirm = function (a) {
  return new Promise((l) => {
    ((Ur = l), Jr.store("confirm").show(a));
  });
};
window.lucide = { createIcons: () => nf({ icons: yc }) };
window.Alpine = Jr;
window.EasyMDE = bv;
Jr.start();
