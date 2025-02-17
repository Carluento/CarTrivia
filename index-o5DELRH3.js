(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function _u(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var wu = {
    exports: {}
}
  , Ii = {}
  , Su = {
    exports: {}
}
  , B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr = Symbol.for("react.element")
  , _f = Symbol.for("react.portal")
  , wf = Symbol.for("react.fragment")
  , Sf = Symbol.for("react.strict_mode")
  , kf = Symbol.for("react.profiler")
  , xf = Symbol.for("react.provider")
  , Ef = Symbol.for("react.context")
  , Cf = Symbol.for("react.forward_ref")
  , Nf = Symbol.for("react.suspense")
  , Tf = Symbol.for("react.memo")
  , Of = Symbol.for("react.lazy")
  , Hs = Symbol.iterator;
function Pf(e) {
    return e === null || typeof e != "object" ? null : (e = Hs && e[Hs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ku = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , xu = Object.assign
  , Eu = {};
function Rn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Eu,
    this.updater = n || ku
}
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Rn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Cu() {}
Cu.prototype = Rn.prototype;
function Dl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Eu,
    this.updater = n || ku
}
var Ul = Dl.prototype = new Cu;
Ul.constructor = Dl;
xu(Ul, Rn.prototype);
Ul.isPureReactComponent = !0;
var Ws = Array.isArray
  , Nu = Object.prototype.hasOwnProperty
  , $l = {
    current: null
}
  , Tu = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ou(e, t, n) {
    var r, i = {}, o = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Nu.call(t, r) && !Tu.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        i.children = n;
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            i[r] === void 0 && (i[r] = s[r]);
    return {
        $$typeof: xr,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: $l.current
    }
}
function Rf(e, t) {
    return {
        $$typeof: xr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Vl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === xr
}
function jf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Qs = /\/+/g;
function oo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? jf("" + e.key) : t.toString(36)
}
function qr(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case xr:
            case _f:
                l = !0
            }
        }
    if (l)
        return l = e,
        i = i(l),
        e = r === "" ? "." + oo(l, 0) : r,
        Ws(i) ? (n = "",
        e != null && (n = e.replace(Qs, "$&/") + "/"),
        qr(i, t, n, "", function(u) {
            return u
        })) : i != null && (Vl(i) && (i = Rf(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Qs, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    Ws(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var a = r + oo(o, s);
            l += qr(o, t, n, a, i)
        }
    else if (a = Pf(e),
    typeof a == "function")
        for (e = a.call(e),
        s = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + oo(o, s++),
            l += qr(o, t, n, a, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function Rr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return qr(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Af(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Se = {
    current: null
}
  , Kr = {
    transition: null
}
  , Ff = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Kr,
    ReactCurrentOwner: $l
};
function Pu() {
    throw Error("act(...) is not supported in production builds of React.")
}
B.Children = {
    map: Rr,
    forEach: function(e, t, n) {
        Rr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Rr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Rr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Vl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
B.Component = Rn;
B.Fragment = wf;
B.Profiler = kf;
B.PureComponent = Dl;
B.StrictMode = Sf;
B.Suspense = Nf;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff;
B.act = Pu;
B.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = xu({}, e.props)
      , i = e.key
      , o = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        l = $l.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (a in t)
            Nu.call(t, a) && !Tu.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: xr,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
}
;
B.createContext = function(e) {
    return e = {
        $$typeof: Ef,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: xf,
        _context: e
    },
    e.Consumer = e
}
;
B.createElement = Ou;
B.createFactory = function(e) {
    var t = Ou.bind(null, e);
    return t.type = e,
    t
}
;
B.createRef = function() {
    return {
        current: null
    }
}
;
B.forwardRef = function(e) {
    return {
        $$typeof: Cf,
        render: e
    }
}
;
B.isValidElement = Vl;
B.lazy = function(e) {
    return {
        $$typeof: Of,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Af
    }
}
;
B.memo = function(e, t) {
    return {
        $$typeof: Tf,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
B.startTransition = function(e) {
    var t = Kr.transition;
    Kr.transition = {};
    try {
        e()
    } finally {
        Kr.transition = t
    }
}
;
B.unstable_act = Pu;
B.useCallback = function(e, t) {
    return Se.current.useCallback(e, t)
}
;
B.useContext = function(e) {
    return Se.current.useContext(e)
}
;
B.useDebugValue = function() {}
;
B.useDeferredValue = function(e) {
    return Se.current.useDeferredValue(e)
}
;
B.useEffect = function(e, t) {
    return Se.current.useEffect(e, t)
}
;
B.useId = function() {
    return Se.current.useId()
}
;
B.useImperativeHandle = function(e, t, n) {
    return Se.current.useImperativeHandle(e, t, n)
}
;
B.useInsertionEffect = function(e, t) {
    return Se.current.useInsertionEffect(e, t)
}
;
B.useLayoutEffect = function(e, t) {
    return Se.current.useLayoutEffect(e, t)
}
;
B.useMemo = function(e, t) {
    return Se.current.useMemo(e, t)
}
;
B.useReducer = function(e, t, n) {
    return Se.current.useReducer(e, t, n)
}
;
B.useRef = function(e) {
    return Se.current.useRef(e)
}
;
B.useState = function(e) {
    return Se.current.useState(e)
}
;
B.useSyncExternalStore = function(e, t, n) {
    return Se.current.useSyncExternalStore(e, t, n)
}
;
B.useTransition = function() {
    return Se.current.useTransition()
}
;
B.version = "18.3.1";
Su.exports = B;
var $ = Su.exports;
const Lf = _u($);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var If = $
  , zf = Symbol.for("react.element")
  , Mf = Symbol.for("react.fragment")
  , Df = Object.prototype.hasOwnProperty
  , Uf = If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , $f = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ru(e, t, n) {
    var r, i = {}, o = null, l = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        Df.call(t, r) && !$f.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: zf,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: Uf.current
    }
}
Ii.Fragment = Mf;
Ii.jsx = Ru;
Ii.jsxs = Ru;
wu.exports = Ii;
var h = wu.exports
  , Mo = {}
  , ju = {
    exports: {}
}
  , ze = {}
  , Au = {
    exports: {}
}
  , Fu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(w, N) {
        var F = w.length;
        w.push(N);
        e: for (; 0 < F; ) {
            var z = F - 1 >>> 1
              , D = w[z];
            if (0 < i(D, N))
                w[z] = N,
                w[F] = D,
                F = z;
            else
                break e
        }
    }
    function n(w) {
        return w.length === 0 ? null : w[0]
    }
    function r(w) {
        if (w.length === 0)
            return null;
        var N = w[0]
          , F = w.pop();
        if (F !== N) {
            w[0] = F;
            e: for (var z = 0, D = w.length, Q = D >>> 1; z < Q; ) {
                var H = 2 * (z + 1) - 1
                  , xe = w[H]
                  , ue = H + 1
                  , ve = w[ue];
                if (0 > i(xe, F))
                    ue < D && 0 > i(ve, xe) ? (w[z] = ve,
                    w[ue] = F,
                    z = ue) : (w[z] = xe,
                    w[H] = F,
                    z = H);
                else if (ue < D && 0 > i(ve, F))
                    w[z] = ve,
                    w[ue] = F,
                    z = ue;
                else
                    break e
            }
        }
        return N
    }
    function i(w, N) {
        var F = w.sortIndex - N.sortIndex;
        return F !== 0 ? F : w.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date
          , s = l.now();
        e.unstable_now = function() {
            return l.now() - s
        }
    }
    var a = []
      , u = []
      , c = 1
      , m = null
      , g = 3
      , x = !1
      , v = !1
      , S = !1
      , T = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(w) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null)
                r(u);
            else if (N.startTime <= w)
                r(u),
                N.sortIndex = N.expirationTime,
                t(a, N);
            else
                break;
            N = n(u)
        }
    }
    function C(w) {
        if (S = !1,
        p(w),
        !v)
            if (n(a) !== null)
                v = !0,
                y(R);
            else {
                var N = n(u);
                N !== null && _(C, N.startTime - w)
            }
    }
    function R(w, N) {
        v = !1,
        S && (S = !1,
        f(L),
        L = -1),
        x = !0;
        var F = g;
        try {
            for (p(N),
            m = n(a); m !== null && (!(m.expirationTime > N) || w && !le()); ) {
                var z = m.callback;
                if (typeof z == "function") {
                    m.callback = null,
                    g = m.priorityLevel;
                    var D = z(m.expirationTime <= N);
                    N = e.unstable_now(),
                    typeof D == "function" ? m.callback = D : m === n(a) && r(a),
                    p(N)
                } else
                    r(a);
                m = n(a)
            }
            if (m !== null)
                var Q = !0;
            else {
                var H = n(u);
                H !== null && _(C, H.startTime - N),
                Q = !1
            }
            return Q
        } finally {
            m = null,
            g = F,
            x = !1
        }
    }
    var j = !1
      , A = null
      , L = -1
      , M = 5
      , U = -1;
    function le() {
        return !(e.unstable_now() - U < M)
    }
    function Ze() {
        if (A !== null) {
            var w = e.unstable_now();
            U = w;
            var N = !0;
            try {
                N = A(!0, w)
            } finally {
                N ? lt() : (j = !1,
                A = null)
            }
        } else
            j = !1
    }
    var lt;
    if (typeof d == "function")
        lt = function() {
            d(Ze)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel
          , k = O.port2;
        O.port1.onmessage = Ze,
        lt = function() {
            k.postMessage(null)
        }
    } else
        lt = function() {
            T(Ze, 0)
        }
        ;
    function y(w) {
        A = w,
        j || (j = !0,
        lt())
    }
    function _(w, N) {
        L = T(function() {
            w(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(w) {
        w.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || x || (v = !0,
        y(R))
    }
    ,
    e.unstable_forceFrameRate = function(w) {
        0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < w ? Math.floor(1e3 / w) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(w) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var N = 3;
            break;
        default:
            N = g
        }
        var F = g;
        g = N;
        try {
            return w()
        } finally {
            g = F
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(w, N) {
        switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            w = 3
        }
        var F = g;
        g = w;
        try {
            return N()
        } finally {
            g = F
        }
    }
    ,
    e.unstable_scheduleCallback = function(w, N, F) {
        var z = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay,
        F = typeof F == "number" && 0 < F ? z + F : z) : F = z,
        w) {
        case 1:
            var D = -1;
            break;
        case 2:
            D = 250;
            break;
        case 5:
            D = 1073741823;
            break;
        case 4:
            D = 1e4;
            break;
        default:
            D = 5e3
        }
        return D = F + D,
        w = {
            id: c++,
            callback: N,
            priorityLevel: w,
            startTime: F,
            expirationTime: D,
            sortIndex: -1
        },
        F > z ? (w.sortIndex = F,
        t(u, w),
        n(a) === null && w === n(u) && (S ? (f(L),
        L = -1) : S = !0,
        _(C, F - z))) : (w.sortIndex = D,
        t(a, w),
        v || x || (v = !0,
        y(R))),
        w
    }
    ,
    e.unstable_shouldYield = le,
    e.unstable_wrapCallback = function(w) {
        var N = g;
        return function() {
            var F = g;
            g = N;
            try {
                return w.apply(this, arguments)
            } finally {
                g = F
            }
        }
    }
}
)(Fu);
Au.exports = Fu;
var Vf = Au.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bf = $
  , Ie = Vf;
function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Lu = new Set
  , or = {};
function Zt(e, t) {
    xn(e, t),
    xn(e + "Capture", t)
}
function xn(e, t) {
    for (or[e] = t,
    e = 0; e < t.length; e++)
        Lu.add(t[e])
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Do = Object.prototype.hasOwnProperty
  , Hf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Gs = {}
  , qs = {};
function Wf(e) {
    return Do.call(qs, e) ? !0 : Do.call(Gs, e) ? !1 : Hf.test(e) ? qs[e] = !0 : (Gs[e] = !0,
    !1)
}
function Qf(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Gf(e, t, n, r) {
    if (t === null || typeof t > "u" || Qf(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ke(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = l
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new ke(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    fe[t] = new ke(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new ke(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new ke(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new ke(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new ke(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new ke(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new ke(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new ke(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Bl = /[\-:]([a-z])/g;
function Hl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Bl, Hl);
    fe[t] = new ke(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Bl, Hl);
    fe[t] = new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Bl, Hl);
    fe[t] = new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new ke(e,1,!1,e.toLowerCase(),null,!1,!1)
});
fe.xlinkHref = new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new ke(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Wl(e, t, n, r) {
    var i = fe.hasOwnProperty(t) ? fe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gf(t, n, i, r) && (n = null),
    r || i === null ? Wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var gt = Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , jr = Symbol.for("react.element")
  , on = Symbol.for("react.portal")
  , ln = Symbol.for("react.fragment")
  , Ql = Symbol.for("react.strict_mode")
  , Uo = Symbol.for("react.profiler")
  , Iu = Symbol.for("react.provider")
  , zu = Symbol.for("react.context")
  , Gl = Symbol.for("react.forward_ref")
  , $o = Symbol.for("react.suspense")
  , Vo = Symbol.for("react.suspense_list")
  , ql = Symbol.for("react.memo")
  , _t = Symbol.for("react.lazy")
  , Mu = Symbol.for("react.offscreen")
  , Ks = Symbol.iterator;
function In(e) {
    return e === null || typeof e != "object" ? null : (e = Ks && e[Ks] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Z = Object.assign, lo;
function Gn(e) {
    if (lo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            lo = t && t[1] || ""
        }
    return `
` + lo + e
}
var so = !1;
function ao(e, t) {
    if (!e || so)
        return "";
    so = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, s = o.length - 1; 1 <= l && 0 <= s && i[l] !== o[s]; )
                s--;
            for (; 1 <= l && 0 <= s; l--,
            s--)
                if (i[l] !== o[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--,
                            s--,
                            0 > s || i[l] !== o[s]) {
                                var a = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= l && 0 <= s);
                    break
                }
        }
    } finally {
        so = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Gn(e) : ""
}
function qf(e) {
    switch (e.tag) {
    case 5:
        return Gn(e.type);
    case 16:
        return Gn("Lazy");
    case 13:
        return Gn("Suspense");
    case 19:
        return Gn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ao(e.type, !1),
        e;
    case 11:
        return e = ao(e.type.render, !1),
        e;
    case 1:
        return e = ao(e.type, !0),
        e;
    default:
        return ""
    }
}
function Bo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case ln:
        return "Fragment";
    case on:
        return "Portal";
    case Uo:
        return "Profiler";
    case Ql:
        return "StrictMode";
    case $o:
        return "Suspense";
    case Vo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case zu:
            return (e.displayName || "Context") + ".Consumer";
        case Iu:
            return (e._context.displayName || "Context") + ".Provider";
        case Gl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ql:
            return t = e.displayName || null,
            t !== null ? t : Bo(e.type) || "Memo";
        case _t:
            t = e._payload,
            e = e._init;
            try {
                return Bo(e(t))
            } catch {}
        }
    return null
}
function Kf(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Bo(t);
    case 8:
        return t === Ql ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Ft(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Du(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Yf(e) {
    var t = Du(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l,
                o.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ar(e) {
    e._valueTracker || (e._valueTracker = Yf(e))
}
function Uu(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Du(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function si(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ho(e, t) {
    var n = t.checked;
    return Z({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ys(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ft(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function $u(e, t) {
    t = t.checked,
    t != null && Wl(e, "checked", t, !1)
}
function Wo(e, t) {
    $u(e, t);
    var n = Ft(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Qo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qo(e, t.type, Ft(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Js(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Qo(e, t, n) {
    (t !== "number" || si(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var qn = Array.isArray;
function yn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ft(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Go(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(P(91));
    return Z({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function bs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(P(92));
            if (qn(n)) {
                if (1 < n.length)
                    throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Ft(n)
    }
}
function Vu(e, t) {
    var n = Ft(t.value)
      , r = Ft(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Xs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Bu(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function qo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Fr, Hu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Fr = Fr || document.createElement("div"),
        Fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Fr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function lr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Jf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function(e) {
    Jf.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Jn[t] = Jn[e]
    })
});
function Wu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + t).trim() : t + "px"
}
function Qu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Wu(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var bf = Z({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ko(e, t) {
    if (t) {
        if (bf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(P(62))
    }
}
function Yo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Jo = null;
function Kl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var bo = null
  , vn = null
  , _n = null;
function Zs(e) {
    if (e = Nr(e)) {
        if (typeof bo != "function")
            throw Error(P(280));
        var t = e.stateNode;
        t && (t = $i(t),
        bo(e.stateNode, e.type, t))
    }
}
function Gu(e) {
    vn ? _n ? _n.push(e) : _n = [e] : vn = e
}
function qu() {
    if (vn) {
        var e = vn
          , t = _n;
        if (_n = vn = null,
        Zs(e),
        t)
            for (e = 0; e < t.length; e++)
                Zs(t[e])
    }
}
function Ku(e, t) {
    return e(t)
}
function Yu() {}
var uo = !1;
function Ju(e, t, n) {
    if (uo)
        return e(t, n);
    uo = !0;
    try {
        return Ku(e, t, n)
    } finally {
        uo = !1,
        (vn !== null || _n !== null) && (Yu(),
        qu())
    }
}
function sr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = $i(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(P(231, t, typeof n));
    return n
}
var Xo = !1;
if (ft)
    try {
        var zn = {};
        Object.defineProperty(zn, "passive", {
            get: function() {
                Xo = !0
            }
        }),
        window.addEventListener("test", zn, zn),
        window.removeEventListener("test", zn, zn)
    } catch {
        Xo = !1
    }
function Xf(e, t, n, r, i, o, l, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var bn = !1
  , ai = null
  , ui = !1
  , Zo = null
  , Zf = {
    onError: function(e) {
        bn = !0,
        ai = e
    }
};
function ep(e, t, n, r, i, o, l, s, a) {
    bn = !1,
    ai = null,
    Xf.apply(Zf, arguments)
}
function tp(e, t, n, r, i, o, l, s, a) {
    if (ep.apply(this, arguments),
    bn) {
        if (bn) {
            var u = ai;
            bn = !1,
            ai = null
        } else
            throw Error(P(198));
        ui || (ui = !0,
        Zo = u)
    }
}
function en(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function bu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ea(e) {
    if (en(e) !== e)
        throw Error(P(188))
}
function np(e) {
    var t = e.alternate;
    if (!t) {
        if (t = en(e),
        t === null)
            throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return ea(i),
                    e;
                if (o === r)
                    return ea(i),
                    t;
                o = o.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var l = !1, s = i.child; s; ) {
                if (s === n) {
                    l = !0,
                    n = i,
                    r = o;
                    break
                }
                if (s === r) {
                    l = !0,
                    r = i,
                    n = o;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        l = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (s === r) {
                        l = !0,
                        r = o,
                        n = i;
                        break
                    }
                    s = s.sibling
                }
                if (!l)
                    throw Error(P(189))
            }
        }
        if (n.alternate !== r)
            throw Error(P(190))
    }
    if (n.tag !== 3)
        throw Error(P(188));
    return n.stateNode.current === n ? e : t
}
function Xu(e) {
    return e = np(e),
    e !== null ? Zu(e) : null
}
function Zu(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Zu(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ec = Ie.unstable_scheduleCallback
  , ta = Ie.unstable_cancelCallback
  , rp = Ie.unstable_shouldYield
  , ip = Ie.unstable_requestPaint
  , ne = Ie.unstable_now
  , op = Ie.unstable_getCurrentPriorityLevel
  , Yl = Ie.unstable_ImmediatePriority
  , tc = Ie.unstable_UserBlockingPriority
  , ci = Ie.unstable_NormalPriority
  , lp = Ie.unstable_LowPriority
  , nc = Ie.unstable_IdlePriority
  , zi = null
  , rt = null;
function sp(e) {
    if (rt && typeof rt.onCommitFiberRoot == "function")
        try {
            rt.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : cp
  , ap = Math.log
  , up = Math.LN2;
function cp(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (ap(e) / up | 0) | 0
}
var Lr = 64
  , Ir = 4194304;
function Kn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function di(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var s = l & ~i;
        s !== 0 ? r = Kn(s) : (o &= l,
        o !== 0 && (r = Kn(o)))
    } else
        l = n & ~i,
        l !== 0 ? r = Kn(l) : o !== 0 && (r = Kn(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ye(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function dp(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function fp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var l = 31 - Ye(o)
          , s = 1 << l
          , a = i[l];
        a === -1 ? (!(s & n) || s & r) && (i[l] = dp(s, t)) : a <= t && (e.expiredLanes |= s),
        o &= ~s
    }
}
function el(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function rc() {
    var e = Lr;
    return Lr <<= 1,
    !(Lr & 4194240) && (Lr = 64),
    e
}
function co(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Er(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ye(t),
    e[t] = n
}
function pp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ye(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Jl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ye(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var G = 0;
function ic(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var oc, bl, lc, sc, ac, tl = !1, zr = [], Ct = null, Nt = null, Tt = null, ar = new Map, ur = new Map, St = [], mp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function na(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ct = null;
        break;
    case "dragenter":
    case "dragleave":
        Nt = null;
        break;
    case "mouseover":
    case "mouseout":
        Tt = null;
        break;
    case "pointerover":
    case "pointerout":
        ar.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ur.delete(t.pointerId)
    }
}
function Mn(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = Nr(t),
    t !== null && bl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function hp(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ct = Mn(Ct, e, t, n, r, i),
        !0;
    case "dragenter":
        return Nt = Mn(Nt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Tt = Mn(Tt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return ar.set(o, Mn(ar.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        ur.set(o, Mn(ur.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function uc(e) {
    var t = $t(e.target);
    if (t !== null) {
        var n = en(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = bu(n),
                t !== null) {
                    e.blockedOn = t,
                    ac(e.priority, function() {
                        lc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Yr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = nl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Jo = r,
            n.target.dispatchEvent(r),
            Jo = null
        } else
            return t = Nr(n),
            t !== null && bl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ra(e, t, n) {
    Yr(e) && n.delete(t)
}
function gp() {
    tl = !1,
    Ct !== null && Yr(Ct) && (Ct = null),
    Nt !== null && Yr(Nt) && (Nt = null),
    Tt !== null && Yr(Tt) && (Tt = null),
    ar.forEach(ra),
    ur.forEach(ra)
}
function Dn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    tl || (tl = !0,
    Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, gp)))
}
function cr(e) {
    function t(i) {
        return Dn(i, e)
    }
    if (0 < zr.length) {
        Dn(zr[0], e);
        for (var n = 1; n < zr.length; n++) {
            var r = zr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ct !== null && Dn(Ct, e),
    Nt !== null && Dn(Nt, e),
    Tt !== null && Dn(Tt, e),
    ar.forEach(t),
    ur.forEach(t),
    n = 0; n < St.length; n++)
        r = St[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < St.length && (n = St[0],
    n.blockedOn === null); )
        uc(n),
        n.blockedOn === null && St.shift()
}
var wn = gt.ReactCurrentBatchConfig
  , fi = !0;
function yp(e, t, n, r) {
    var i = G
      , o = wn.transition;
    wn.transition = null;
    try {
        G = 1,
        Xl(e, t, n, r)
    } finally {
        G = i,
        wn.transition = o
    }
}
function vp(e, t, n, r) {
    var i = G
      , o = wn.transition;
    wn.transition = null;
    try {
        G = 4,
        Xl(e, t, n, r)
    } finally {
        G = i,
        wn.transition = o
    }
}
function Xl(e, t, n, r) {
    if (fi) {
        var i = nl(e, t, n, r);
        if (i === null)
            So(e, t, r, pi, n),
            na(e, r);
        else if (hp(i, e, t, n, r))
            r.stopPropagation();
        else if (na(e, r),
        t & 4 && -1 < mp.indexOf(e)) {
            for (; i !== null; ) {
                var o = Nr(i);
                if (o !== null && oc(o),
                o = nl(e, t, n, r),
                o === null && So(e, t, r, pi, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            So(e, t, r, null, n)
    }
}
var pi = null;
function nl(e, t, n, r) {
    if (pi = null,
    e = Kl(r),
    e = $t(e),
    e !== null)
        if (t = en(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = bu(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return pi = e,
    null
}
function cc(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (op()) {
        case Yl:
            return 1;
        case tc:
            return 4;
        case ci:
        case lp:
            return 16;
        case nc:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var xt = null
  , Zl = null
  , Jr = null;
function dc() {
    if (Jr)
        return Jr;
    var e, t = Zl, n = t.length, r, i = "value"in xt ? xt.value : xt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
        ;
    return Jr = i.slice(e, 1 < r ? 1 - r : void 0)
}
function br(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Mr() {
    return !0
}
function ia() {
    return !1
}
function Me(e) {
    function t(n, r, i, o, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = l,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Mr : ia,
        this.isPropagationStopped = ia,
        this
    }
    return Z(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Mr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Mr)
        },
        persist: function() {},
        isPersistent: Mr
    }),
    t
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, es = Me(jn), Cr = Z({}, jn, {
    view: 0,
    detail: 0
}), _p = Me(Cr), fo, po, Un, Mi = Z({}, Cr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ts,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Un && (Un && e.type === "mousemove" ? (fo = e.screenX - Un.screenX,
        po = e.screenY - Un.screenY) : po = fo = 0,
        Un = e),
        fo)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : po
    }
}), oa = Me(Mi), wp = Z({}, Mi, {
    dataTransfer: 0
}), Sp = Me(wp), kp = Z({}, Cr, {
    relatedTarget: 0
}), mo = Me(kp), xp = Z({}, jn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Ep = Me(xp), Cp = Z({}, jn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Np = Me(Cp), Tp = Z({}, jn, {
    data: 0
}), la = Me(Tp), Op = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Pp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Rp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function jp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Rp[e]) ? !!t[e] : !1
}
function ts() {
    return jp
}
var Ap = Z({}, Cr, {
    key: function(e) {
        if (e.key) {
            var t = Op[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = br(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pp[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ts,
    charCode: function(e) {
        return e.type === "keypress" ? br(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Fp = Me(Ap)
  , Lp = Z({}, Mi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , sa = Me(Lp)
  , Ip = Z({}, Cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ts
})
  , zp = Me(Ip)
  , Mp = Z({}, jn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Dp = Me(Mp)
  , Up = Z({}, Mi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , $p = Me(Up)
  , Vp = [9, 13, 27, 32]
  , ns = ft && "CompositionEvent"in window
  , Xn = null;
ft && "documentMode"in document && (Xn = document.documentMode);
var Bp = ft && "TextEvent"in window && !Xn
  , fc = ft && (!ns || Xn && 8 < Xn && 11 >= Xn)
  , aa = " "
  , ua = !1;
function pc(e, t) {
    switch (e) {
    case "keyup":
        return Vp.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function mc(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var sn = !1;
function Hp(e, t) {
    switch (e) {
    case "compositionend":
        return mc(t);
    case "keypress":
        return t.which !== 32 ? null : (ua = !0,
        aa);
    case "textInput":
        return e = t.data,
        e === aa && ua ? null : e;
    default:
        return null
    }
}
function Wp(e, t) {
    if (sn)
        return e === "compositionend" || !ns && pc(e, t) ? (e = dc(),
        Jr = Zl = xt = null,
        sn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return fc && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Qp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function ca(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qp[e.type] : t === "textarea"
}
function hc(e, t, n, r) {
    Gu(r),
    t = mi(t, "onChange"),
    0 < t.length && (n = new es("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Zn = null
  , dr = null;
function Gp(e) {
    Nc(e, 0)
}
function Di(e) {
    var t = cn(e);
    if (Uu(t))
        return e
}
function qp(e, t) {
    if (e === "change")
        return t
}
var gc = !1;
if (ft) {
    var ho;
    if (ft) {
        var go = "oninput"in document;
        if (!go) {
            var da = document.createElement("div");
            da.setAttribute("oninput", "return;"),
            go = typeof da.oninput == "function"
        }
        ho = go
    } else
        ho = !1;
    gc = ho && (!document.documentMode || 9 < document.documentMode)
}
function fa() {
    Zn && (Zn.detachEvent("onpropertychange", yc),
    dr = Zn = null)
}
function yc(e) {
    if (e.propertyName === "value" && Di(dr)) {
        var t = [];
        hc(t, dr, e, Kl(e)),
        Ju(Gp, t)
    }
}
function Kp(e, t, n) {
    e === "focusin" ? (fa(),
    Zn = t,
    dr = n,
    Zn.attachEvent("onpropertychange", yc)) : e === "focusout" && fa()
}
function Yp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Di(dr)
}
function Jp(e, t) {
    if (e === "click")
        return Di(t)
}
function bp(e, t) {
    if (e === "input" || e === "change")
        return Di(t)
}
function Xp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var be = typeof Object.is == "function" ? Object.is : Xp;
function fr(e, t) {
    if (be(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Do.call(t, i) || !be(e[i], t[i]))
            return !1
    }
    return !0
}
function pa(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function ma(e, t) {
    var n = pa(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = pa(n)
    }
}
function vc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function _c() {
    for (var e = window, t = si(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = si(e.document)
    }
    return t
}
function rs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Zp(e) {
    var t = _c()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && vc(n.ownerDocument.documentElement, n)) {
        if (r !== null && rs(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = ma(n, o);
                var l = ma(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var em = ft && "documentMode"in document && 11 >= document.documentMode
  , an = null
  , rl = null
  , er = null
  , il = !1;
function ha(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    il || an == null || an !== si(r) || (r = an,
    "selectionStart"in r && rs(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    er && fr(er, r) || (er = r,
    r = mi(rl, "onSelect"),
    0 < r.length && (t = new es("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = an)))
}
function Dr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var un = {
    animationend: Dr("Animation", "AnimationEnd"),
    animationiteration: Dr("Animation", "AnimationIteration"),
    animationstart: Dr("Animation", "AnimationStart"),
    transitionend: Dr("Transition", "TransitionEnd")
}
  , yo = {}
  , wc = {};
ft && (wc = document.createElement("div").style,
"AnimationEvent"in window || (delete un.animationend.animation,
delete un.animationiteration.animation,
delete un.animationstart.animation),
"TransitionEvent"in window || delete un.transitionend.transition);
function Ui(e) {
    if (yo[e])
        return yo[e];
    if (!un[e])
        return e;
    var t = un[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in wc)
            return yo[e] = t[n];
    return e
}
var Sc = Ui("animationend")
  , kc = Ui("animationiteration")
  , xc = Ui("animationstart")
  , Ec = Ui("transitionend")
  , Cc = new Map
  , ga = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function It(e, t) {
    Cc.set(e, t),
    Zt(t, [e])
}
for (var vo = 0; vo < ga.length; vo++) {
    var _o = ga[vo]
      , tm = _o.toLowerCase()
      , nm = _o[0].toUpperCase() + _o.slice(1);
    It(tm, "on" + nm)
}
It(Sc, "onAnimationEnd");
It(kc, "onAnimationIteration");
It(xc, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(Ec, "onTransitionEnd");
xn("onMouseEnter", ["mouseout", "mouseover"]);
xn("onMouseLeave", ["mouseout", "mouseover"]);
xn("onPointerEnter", ["pointerout", "pointerover"]);
xn("onPointerLeave", ["pointerout", "pointerover"]);
Zt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , rm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function ya(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    tp(r, t, void 0, e),
    e.currentTarget = null
}
function Nc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l]
                      , a = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    ya(i, s, u),
                    o = a
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (s = r[l],
                    a = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    ya(i, s, u),
                    o = a
                }
        }
    }
    if (ui)
        throw e = Zo,
        ui = !1,
        Zo = null,
        e
}
function K(e, t) {
    var n = t[ul];
    n === void 0 && (n = t[ul] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Tc(t, e, 2, !1),
    n.add(r))
}
function wo(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Tc(n, e, r, t)
}
var Ur = "_reactListening" + Math.random().toString(36).slice(2);
function pr(e) {
    if (!e[Ur]) {
        e[Ur] = !0,
        Lu.forEach(function(n) {
            n !== "selectionchange" && (rm.has(n) || wo(n, !1, e),
            wo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ur] || (t[Ur] = !0,
        wo("selectionchange", !1, t))
    }
}
function Tc(e, t, n, r) {
    switch (cc(t)) {
    case 1:
        var i = yp;
        break;
    case 4:
        i = vp;
        break;
    default:
        i = Xl
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Xo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function So(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var s = r.stateNode.containerInfo;
                if (s === i || s.nodeType === 8 && s.parentNode === i)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var a = l.tag;
                        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        l = l.return
                    }
                for (; s !== null; ) {
                    if (l = $t(s),
                    l === null)
                        return;
                    if (a = l.tag,
                    a === 5 || a === 6) {
                        r = o = l;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Ju(function() {
        var u = o
          , c = Kl(n)
          , m = [];
        e: {
            var g = Cc.get(e);
            if (g !== void 0) {
                var x = es
                  , v = e;
                switch (e) {
                case "keypress":
                    if (br(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = Fp;
                    break;
                case "focusin":
                    v = "focus",
                    x = mo;
                    break;
                case "focusout":
                    v = "blur",
                    x = mo;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = mo;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = oa;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = Sp;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = zp;
                    break;
                case Sc:
                case kc:
                case xc:
                    x = Ep;
                    break;
                case Ec:
                    x = Dp;
                    break;
                case "scroll":
                    x = _p;
                    break;
                case "wheel":
                    x = $p;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = Np;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = sa
                }
                var S = (t & 4) !== 0
                  , T = !S && e === "scroll"
                  , f = S ? g !== null ? g + "Capture" : null : g;
                S = [];
                for (var d = u, p; d !== null; ) {
                    p = d;
                    var C = p.stateNode;
                    if (p.tag === 5 && C !== null && (p = C,
                    f !== null && (C = sr(d, f),
                    C != null && S.push(mr(d, C, p)))),
                    T)
                        break;
                    d = d.return
                }
                0 < S.length && (g = new x(g,v,null,n,c),
                m.push({
                    event: g,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                g && n !== Jo && (v = n.relatedTarget || n.fromElement) && ($t(v) || v[pt]))
                    break e;
                if ((x || g) && (g = c.window === c ? c : (g = c.ownerDocument) ? g.defaultView || g.parentWindow : window,
                x ? (v = n.relatedTarget || n.toElement,
                x = u,
                v = v ? $t(v) : null,
                v !== null && (T = en(v),
                v !== T || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null,
                v = u),
                x !== v)) {
                    if (S = oa,
                    C = "onMouseLeave",
                    f = "onMouseEnter",
                    d = "mouse",
                    (e === "pointerout" || e === "pointerover") && (S = sa,
                    C = "onPointerLeave",
                    f = "onPointerEnter",
                    d = "pointer"),
                    T = x == null ? g : cn(x),
                    p = v == null ? g : cn(v),
                    g = new S(C,d + "leave",x,n,c),
                    g.target = T,
                    g.relatedTarget = p,
                    C = null,
                    $t(c) === u && (S = new S(f,d + "enter",v,n,c),
                    S.target = p,
                    S.relatedTarget = T,
                    C = S),
                    T = C,
                    x && v)
                        t: {
                            for (S = x,
                            f = v,
                            d = 0,
                            p = S; p; p = rn(p))
                                d++;
                            for (p = 0,
                            C = f; C; C = rn(C))
                                p++;
                            for (; 0 < d - p; )
                                S = rn(S),
                                d--;
                            for (; 0 < p - d; )
                                f = rn(f),
                                p--;
                            for (; d--; ) {
                                if (S === f || f !== null && S === f.alternate)
                                    break t;
                                S = rn(S),
                                f = rn(f)
                            }
                            S = null
                        }
                    else
                        S = null;
                    x !== null && va(m, g, x, S, !1),
                    v !== null && T !== null && va(m, T, v, S, !0)
                }
            }
            e: {
                if (g = u ? cn(u) : window,
                x = g.nodeName && g.nodeName.toLowerCase(),
                x === "select" || x === "input" && g.type === "file")
                    var R = qp;
                else if (ca(g))
                    if (gc)
                        R = bp;
                    else {
                        R = Yp;
                        var j = Kp
                    }
                else
                    (x = g.nodeName) && x.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (R = Jp);
                if (R && (R = R(e, u))) {
                    hc(m, R, n, c);
                    break e
                }
                j && j(e, g, u),
                e === "focusout" && (j = g._wrapperState) && j.controlled && g.type === "number" && Qo(g, "number", g.value)
            }
            switch (j = u ? cn(u) : window,
            e) {
            case "focusin":
                (ca(j) || j.contentEditable === "true") && (an = j,
                rl = u,
                er = null);
                break;
            case "focusout":
                er = rl = an = null;
                break;
            case "mousedown":
                il = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                il = !1,
                ha(m, n, c);
                break;
            case "selectionchange":
                if (em)
                    break;
            case "keydown":
            case "keyup":
                ha(m, n, c)
            }
            var A;
            if (ns)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                    }
                    L = void 0
                }
            else
                sn ? pc(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
            L && (fc && n.locale !== "ko" && (sn || L !== "onCompositionStart" ? L === "onCompositionEnd" && sn && (A = dc()) : (xt = c,
            Zl = "value"in xt ? xt.value : xt.textContent,
            sn = !0)),
            j = mi(u, L),
            0 < j.length && (L = new la(L,e,null,n,c),
            m.push({
                event: L,
                listeners: j
            }),
            A ? L.data = A : (A = mc(n),
            A !== null && (L.data = A)))),
            (A = Bp ? Hp(e, n) : Wp(e, n)) && (u = mi(u, "onBeforeInput"),
            0 < u.length && (c = new la("onBeforeInput","beforeinput",null,n,c),
            m.push({
                event: c,
                listeners: u
            }),
            c.data = A))
        }
        Nc(m, t)
    })
}
function mr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function mi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = sr(e, n),
        o != null && r.unshift(mr(e, o, i)),
        o = sr(e, t),
        o != null && r.push(mr(e, o, i))),
        e = e.return
    }
    return r
}
function rn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function va(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
        var s = n
          , a = s.alternate
          , u = s.stateNode;
        if (a !== null && a === r)
            break;
        s.tag === 5 && u !== null && (s = u,
        i ? (a = sr(n, o),
        a != null && l.unshift(mr(n, a, s))) : i || (a = sr(n, o),
        a != null && l.push(mr(n, a, s)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var im = /\r\n?/g
  , om = /\u0000|\uFFFD/g;
function _a(e) {
    return (typeof e == "string" ? e : "" + e).replace(im, `
`).replace(om, "")
}
function $r(e, t, n) {
    if (t = _a(t),
    _a(e) !== t && n)
        throw Error(P(425))
}
function hi() {}
var ol = null
  , ll = null;
function sl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var al = typeof setTimeout == "function" ? setTimeout : void 0
  , lm = typeof clearTimeout == "function" ? clearTimeout : void 0
  , wa = typeof Promise == "function" ? Promise : void 0
  , sm = typeof queueMicrotask == "function" ? queueMicrotask : typeof wa < "u" ? function(e) {
    return wa.resolve(null).then(e).catch(am)
}
: al;
function am(e) {
    setTimeout(function() {
        throw e
    })
}
function ko(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    cr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    cr(t)
}
function Ot(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Sa(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var An = Math.random().toString(36).slice(2)
  , nt = "__reactFiber$" + An
  , hr = "__reactProps$" + An
  , pt = "__reactContainer$" + An
  , ul = "__reactEvents$" + An
  , um = "__reactListeners$" + An
  , cm = "__reactHandles$" + An;
function $t(e) {
    var t = e[nt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[pt] || n[nt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Sa(e); e !== null; ) {
                    if (n = e[nt])
                        return n;
                    e = Sa(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Nr(e) {
    return e = e[nt] || e[pt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function cn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(P(33))
}
function $i(e) {
    return e[hr] || null
}
var cl = []
  , dn = -1;
function zt(e) {
    return {
        current: e
    }
}
function Y(e) {
    0 > dn || (e.current = cl[dn],
    cl[dn] = null,
    dn--)
}
function q(e, t) {
    dn++,
    cl[dn] = e.current,
    e.current = t
}
var Lt = {}
  , ye = zt(Lt)
  , Ne = zt(!1)
  , qt = Lt;
function En(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Lt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Te(e) {
    return e = e.childContextTypes,
    e != null
}
function gi() {
    Y(Ne),
    Y(ye)
}
function ka(e, t, n) {
    if (ye.current !== Lt)
        throw Error(P(168));
    q(ye, t),
    q(Ne, n)
}
function Oc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(P(108, Kf(e) || "Unknown", i));
    return Z({}, n, r)
}
function yi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lt,
    qt = ye.current,
    q(ye, e),
    q(Ne, Ne.current),
    !0
}
function xa(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(P(169));
    n ? (e = Oc(e, t, qt),
    r.__reactInternalMemoizedMergedChildContext = e,
    Y(Ne),
    Y(ye),
    q(ye, e)) : Y(Ne),
    q(Ne, n)
}
var at = null
  , Vi = !1
  , xo = !1;
function Pc(e) {
    at === null ? at = [e] : at.push(e)
}
function dm(e) {
    Vi = !0,
    Pc(e)
}
function Mt() {
    if (!xo && at !== null) {
        xo = !0;
        var e = 0
          , t = G;
        try {
            var n = at;
            for (G = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            at = null,
            Vi = !1
        } catch (i) {
            throw at !== null && (at = at.slice(e + 1)),
            ec(Yl, Mt),
            i
        } finally {
            G = t,
            xo = !1
        }
    }
    return null
}
var fn = []
  , pn = 0
  , vi = null
  , _i = 0
  , De = []
  , Ue = 0
  , Kt = null
  , ut = 1
  , ct = "";
function Dt(e, t) {
    fn[pn++] = _i,
    fn[pn++] = vi,
    vi = e,
    _i = t
}
function Rc(e, t, n) {
    De[Ue++] = ut,
    De[Ue++] = ct,
    De[Ue++] = Kt,
    Kt = e;
    var r = ut;
    e = ct;
    var i = 32 - Ye(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Ye(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32),
        r >>= l,
        i -= l,
        ut = 1 << 32 - Ye(t) + i | n << i | r,
        ct = o + e
    } else
        ut = 1 << o | n << i | r,
        ct = e
}
function is(e) {
    e.return !== null && (Dt(e, 1),
    Rc(e, 1, 0))
}
function os(e) {
    for (; e === vi; )
        vi = fn[--pn],
        fn[pn] = null,
        _i = fn[--pn],
        fn[pn] = null;
    for (; e === Kt; )
        Kt = De[--Ue],
        De[Ue] = null,
        ct = De[--Ue],
        De[Ue] = null,
        ut = De[--Ue],
        De[Ue] = null
}
var Ae = null
  , je = null
  , J = !1
  , Ke = null;
function jc(e, t) {
    var n = $e(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ea(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ae = e,
        je = Ot(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ae = e,
        je = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Kt !== null ? {
            id: ut,
            overflow: ct
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = $e(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ae = e,
        je = null,
        !0) : !1;
    default:
        return !1
    }
}
function dl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function fl(e) {
    if (J) {
        var t = je;
        if (t) {
            var n = t;
            if (!Ea(e, t)) {
                if (dl(e))
                    throw Error(P(418));
                t = Ot(n.nextSibling);
                var r = Ae;
                t && Ea(e, t) ? jc(r, n) : (e.flags = e.flags & -4097 | 2,
                J = !1,
                Ae = e)
            }
        } else {
            if (dl(e))
                throw Error(P(418));
            e.flags = e.flags & -4097 | 2,
            J = !1,
            Ae = e
        }
    }
}
function Ca(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ae = e
}
function Vr(e) {
    if (e !== Ae)
        return !1;
    if (!J)
        return Ca(e),
        J = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps)),
    t && (t = je)) {
        if (dl(e))
            throw Ac(),
            Error(P(418));
        for (; t; )
            jc(e, t),
            t = Ot(t.nextSibling)
    }
    if (Ca(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(P(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            je = Ot(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            je = null
        }
    } else
        je = Ae ? Ot(e.stateNode.nextSibling) : null;
    return !0
}
function Ac() {
    for (var e = je; e; )
        e = Ot(e.nextSibling)
}
function Cn() {
    je = Ae = null,
    J = !1
}
function ls(e) {
    Ke === null ? Ke = [e] : Ke.push(e)
}
var fm = gt.ReactCurrentBatchConfig;
function $n(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(P(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(P(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var s = i.refs;
                l === null ? delete s[o] : s[o] = l
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(P(284));
        if (!n._owner)
            throw Error(P(290, e))
    }
    return e
}
function Br(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Na(e) {
    var t = e._init;
    return t(e._payload)
}
function Fc(e) {
    function t(f, d) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [d],
            f.flags |= 16) : p.push(d)
        }
    }
    function n(f, d) {
        if (!e)
            return null;
        for (; d !== null; )
            t(f, d),
            d = d.sibling;
        return null
    }
    function r(f, d) {
        for (f = new Map; d !== null; )
            d.key !== null ? f.set(d.key, d) : f.set(d.index, d),
            d = d.sibling;
        return f
    }
    function i(f, d) {
        return f = At(f, d),
        f.index = 0,
        f.sibling = null,
        f
    }
    function o(f, d, p) {
        return f.index = p,
        e ? (p = f.alternate,
        p !== null ? (p = p.index,
        p < d ? (f.flags |= 2,
        d) : p) : (f.flags |= 2,
        d)) : (f.flags |= 1048576,
        d)
    }
    function l(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function s(f, d, p, C) {
        return d === null || d.tag !== 6 ? (d = Ro(p, f.mode, C),
        d.return = f,
        d) : (d = i(d, p),
        d.return = f,
        d)
    }
    function a(f, d, p, C) {
        var R = p.type;
        return R === ln ? c(f, d, p.props.children, C, p.key) : d !== null && (d.elementType === R || typeof R == "object" && R !== null && R.$$typeof === _t && Na(R) === d.type) ? (C = i(d, p.props),
        C.ref = $n(f, d, p),
        C.return = f,
        C) : (C = ii(p.type, p.key, p.props, null, f.mode, C),
        C.ref = $n(f, d, p),
        C.return = f,
        C)
    }
    function u(f, d, p, C) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = jo(p, f.mode, C),
        d.return = f,
        d) : (d = i(d, p.children || []),
        d.return = f,
        d)
    }
    function c(f, d, p, C, R) {
        return d === null || d.tag !== 7 ? (d = Qt(p, f.mode, C, R),
        d.return = f,
        d) : (d = i(d, p),
        d.return = f,
        d)
    }
    function m(f, d, p) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return d = Ro("" + d, f.mode, p),
            d.return = f,
            d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case jr:
                return p = ii(d.type, d.key, d.props, null, f.mode, p),
                p.ref = $n(f, null, d),
                p.return = f,
                p;
            case on:
                return d = jo(d, f.mode, p),
                d.return = f,
                d;
            case _t:
                var C = d._init;
                return m(f, C(d._payload), p)
            }
            if (qn(d) || In(d))
                return d = Qt(d, f.mode, p, null),
                d.return = f,
                d;
            Br(f, d)
        }
        return null
    }
    function g(f, d, p, C) {
        var R = d !== null ? d.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return R !== null ? null : s(f, d, "" + p, C);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case jr:
                return p.key === R ? a(f, d, p, C) : null;
            case on:
                return p.key === R ? u(f, d, p, C) : null;
            case _t:
                return R = p._init,
                g(f, d, R(p._payload), C)
            }
            if (qn(p) || In(p))
                return R !== null ? null : c(f, d, p, C, null);
            Br(f, p)
        }
        return null
    }
    function x(f, d, p, C, R) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return f = f.get(p) || null,
            s(d, f, "" + C, R);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case jr:
                return f = f.get(C.key === null ? p : C.key) || null,
                a(d, f, C, R);
            case on:
                return f = f.get(C.key === null ? p : C.key) || null,
                u(d, f, C, R);
            case _t:
                var j = C._init;
                return x(f, d, p, j(C._payload), R)
            }
            if (qn(C) || In(C))
                return f = f.get(p) || null,
                c(d, f, C, R, null);
            Br(d, C)
        }
        return null
    }
    function v(f, d, p, C) {
        for (var R = null, j = null, A = d, L = d = 0, M = null; A !== null && L < p.length; L++) {
            A.index > L ? (M = A,
            A = null) : M = A.sibling;
            var U = g(f, A, p[L], C);
            if (U === null) {
                A === null && (A = M);
                break
            }
            e && A && U.alternate === null && t(f, A),
            d = o(U, d, L),
            j === null ? R = U : j.sibling = U,
            j = U,
            A = M
        }
        if (L === p.length)
            return n(f, A),
            J && Dt(f, L),
            R;
        if (A === null) {
            for (; L < p.length; L++)
                A = m(f, p[L], C),
                A !== null && (d = o(A, d, L),
                j === null ? R = A : j.sibling = A,
                j = A);
            return J && Dt(f, L),
            R
        }
        for (A = r(f, A); L < p.length; L++)
            M = x(A, f, L, p[L], C),
            M !== null && (e && M.alternate !== null && A.delete(M.key === null ? L : M.key),
            d = o(M, d, L),
            j === null ? R = M : j.sibling = M,
            j = M);
        return e && A.forEach(function(le) {
            return t(f, le)
        }),
        J && Dt(f, L),
        R
    }
    function S(f, d, p, C) {
        var R = In(p);
        if (typeof R != "function")
            throw Error(P(150));
        if (p = R.call(p),
        p == null)
            throw Error(P(151));
        for (var j = R = null, A = d, L = d = 0, M = null, U = p.next(); A !== null && !U.done; L++,
        U = p.next()) {
            A.index > L ? (M = A,
            A = null) : M = A.sibling;
            var le = g(f, A, U.value, C);
            if (le === null) {
                A === null && (A = M);
                break
            }
            e && A && le.alternate === null && t(f, A),
            d = o(le, d, L),
            j === null ? R = le : j.sibling = le,
            j = le,
            A = M
        }
        if (U.done)
            return n(f, A),
            J && Dt(f, L),
            R;
        if (A === null) {
            for (; !U.done; L++,
            U = p.next())
                U = m(f, U.value, C),
                U !== null && (d = o(U, d, L),
                j === null ? R = U : j.sibling = U,
                j = U);
            return J && Dt(f, L),
            R
        }
        for (A = r(f, A); !U.done; L++,
        U = p.next())
            U = x(A, f, L, U.value, C),
            U !== null && (e && U.alternate !== null && A.delete(U.key === null ? L : U.key),
            d = o(U, d, L),
            j === null ? R = U : j.sibling = U,
            j = U);
        return e && A.forEach(function(Ze) {
            return t(f, Ze)
        }),
        J && Dt(f, L),
        R
    }
    function T(f, d, p, C) {
        if (typeof p == "object" && p !== null && p.type === ln && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case jr:
                e: {
                    for (var R = p.key, j = d; j !== null; ) {
                        if (j.key === R) {
                            if (R = p.type,
                            R === ln) {
                                if (j.tag === 7) {
                                    n(f, j.sibling),
                                    d = i(j, p.props.children),
                                    d.return = f,
                                    f = d;
                                    break e
                                }
                            } else if (j.elementType === R || typeof R == "object" && R !== null && R.$$typeof === _t && Na(R) === j.type) {
                                n(f, j.sibling),
                                d = i(j, p.props),
                                d.ref = $n(f, j, p),
                                d.return = f,
                                f = d;
                                break e
                            }
                            n(f, j);
                            break
                        } else
                            t(f, j);
                        j = j.sibling
                    }
                    p.type === ln ? (d = Qt(p.props.children, f.mode, C, p.key),
                    d.return = f,
                    f = d) : (C = ii(p.type, p.key, p.props, null, f.mode, C),
                    C.ref = $n(f, d, p),
                    C.return = f,
                    f = C)
                }
                return l(f);
            case on:
                e: {
                    for (j = p.key; d !== null; ) {
                        if (d.key === j)
                            if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                                n(f, d.sibling),
                                d = i(d, p.children || []),
                                d.return = f,
                                f = d;
                                break e
                            } else {
                                n(f, d);
                                break
                            }
                        else
                            t(f, d);
                        d = d.sibling
                    }
                    d = jo(p, f.mode, C),
                    d.return = f,
                    f = d
                }
                return l(f);
            case _t:
                return j = p._init,
                T(f, d, j(p._payload), C)
            }
            if (qn(p))
                return v(f, d, p, C);
            if (In(p))
                return S(f, d, p, C);
            Br(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        d !== null && d.tag === 6 ? (n(f, d.sibling),
        d = i(d, p),
        d.return = f,
        f = d) : (n(f, d),
        d = Ro(p, f.mode, C),
        d.return = f,
        f = d),
        l(f)) : n(f, d)
    }
    return T
}
var Nn = Fc(!0)
  , Lc = Fc(!1)
  , wi = zt(null)
  , Si = null
  , mn = null
  , ss = null;
function as() {
    ss = mn = Si = null
}
function us(e) {
    var t = wi.current;
    Y(wi),
    e._currentValue = t
}
function pl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Sn(e, t) {
    Si = e,
    ss = mn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0),
    e.firstContext = null)
}
function He(e) {
    var t = e._currentValue;
    if (ss !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        mn === null) {
            if (Si === null)
                throw Error(P(308));
            mn = e,
            Si.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            mn = mn.next = e;
    return t
}
var Vt = null;
function cs(e) {
    Vt === null ? Vt = [e] : Vt.push(e)
}
function Ic(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    cs(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    mt(e, r)
}
function mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var wt = !1;
function ds(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function zc(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function dt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Pt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    W & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        mt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    cs(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    mt(e, n)
}
function Xr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Jl(e, n)
    }
}
function Ta(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ki(e, t, n, r) {
    var i = e.updateQueue;
    wt = !1;
    var o = i.firstBaseUpdate
      , l = i.lastBaseUpdate
      , s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var a = s
          , u = a.next;
        a.next = null,
        l === null ? o = u : l.next = u,
        l = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        s = c.lastBaseUpdate,
        s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var m = i.baseState;
        l = 0,
        c = u = a = null,
        s = o;
        do {
            var g = s.lane
              , x = s.eventTime;
            if ((r & g) === g) {
                c !== null && (c = c.next = {
                    eventTime: x,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var v = e
                      , S = s;
                    switch (g = t,
                    x = n,
                    S.tag) {
                    case 1:
                        if (v = S.payload,
                        typeof v == "function") {
                            m = v.call(x, m, g);
                            break e
                        }
                        m = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = S.payload,
                        g = typeof v == "function" ? v.call(x, m, g) : v,
                        g == null)
                            break e;
                        m = Z({}, m, g);
                        break e;
                    case 2:
                        wt = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                g = i.effects,
                g === null ? i.effects = [s] : g.push(s))
            } else
                x = {
                    eventTime: x,
                    lane: g,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                c === null ? (u = c = x,
                a = m) : c = c.next = x,
                l |= g;
            if (s = s.next,
            s === null) {
                if (s = i.shared.pending,
                s === null)
                    break;
                g = s,
                s = g.next,
                g.next = null,
                i.lastBaseUpdate = g,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = m),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                l |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        Jt |= l,
        e.lanes = l,
        e.memoizedState = m
    }
}
function Oa(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(P(191, i));
                i.call(r)
            }
        }
}
var Tr = {}
  , it = zt(Tr)
  , gr = zt(Tr)
  , yr = zt(Tr);
function Bt(e) {
    if (e === Tr)
        throw Error(P(174));
    return e
}
function fs(e, t) {
    switch (q(yr, t),
    q(gr, e),
    q(it, Tr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = qo(t, e)
    }
    Y(it),
    q(it, t)
}
function Tn() {
    Y(it),
    Y(gr),
    Y(yr)
}
function Mc(e) {
    Bt(yr.current);
    var t = Bt(it.current)
      , n = qo(t, e.type);
    t !== n && (q(gr, e),
    q(it, n))
}
function ps(e) {
    gr.current === e && (Y(it),
    Y(gr))
}
var b = zt(0);
function xi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Eo = [];
function ms() {
    for (var e = 0; e < Eo.length; e++)
        Eo[e]._workInProgressVersionPrimary = null;
    Eo.length = 0
}
var Zr = gt.ReactCurrentDispatcher
  , Co = gt.ReactCurrentBatchConfig
  , Yt = 0
  , X = null
  , ie = null
  , se = null
  , Ei = !1
  , tr = !1
  , vr = 0
  , pm = 0;
function pe() {
    throw Error(P(321))
}
function hs(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!be(e[n], t[n]))
            return !1;
    return !0
}
function gs(e, t, n, r, i, o) {
    if (Yt = o,
    X = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Zr.current = e === null || e.memoizedState === null ? ym : vm,
    e = n(r, i),
    tr) {
        o = 0;
        do {
            if (tr = !1,
            vr = 0,
            25 <= o)
                throw Error(P(301));
            o += 1,
            se = ie = null,
            t.updateQueue = null,
            Zr.current = _m,
            e = n(r, i)
        } while (tr)
    }
    if (Zr.current = Ci,
    t = ie !== null && ie.next !== null,
    Yt = 0,
    se = ie = X = null,
    Ei = !1,
    t)
        throw Error(P(300));
    return e
}
function ys() {
    var e = vr !== 0;
    return vr = 0,
    e
}
function tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return se === null ? X.memoizedState = se = e : se = se.next = e,
    se
}
function We() {
    if (ie === null) {
        var e = X.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ie.next;
    var t = se === null ? X.memoizedState : se.next;
    if (t !== null)
        se = t,
        ie = e;
    else {
        if (e === null)
            throw Error(P(310));
        ie = e,
        e = {
            memoizedState: ie.memoizedState,
            baseState: ie.baseState,
            baseQueue: ie.baseQueue,
            queue: ie.queue,
            next: null
        },
        se === null ? X.memoizedState = se = e : se = se.next = e
    }
    return se
}
function _r(e, t) {
    return typeof t == "function" ? t(e) : t
}
function No(e) {
    var t = We()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = ie
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next,
            o.next = l
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var s = l = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((Yt & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var m = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (s = a = m,
                l = r) : a = a.next = m,
                X.lanes |= c,
                Jt |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? l = r : a.next = s,
        be(r, t.memoizedState) || (Ce = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            X.lanes |= o,
            Jt |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function To(e) {
    var t = We()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do
            o = e(o, l.action),
            l = l.next;
        while (l !== i);
        be(o, t.memoizedState) || (Ce = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Dc() {}
function Uc(e, t) {
    var n = X
      , r = We()
      , i = t()
      , o = !be(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Ce = !0),
    r = r.queue,
    vs(Bc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || se !== null && se.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        wr(9, Vc.bind(null, n, r, i, t), void 0, null),
        ae === null)
            throw Error(P(349));
        Yt & 30 || $c(n, t, i)
    }
    return i
}
function $c(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = X.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    X.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Vc(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Hc(t) && Wc(e)
}
function Bc(e, t, n) {
    return n(function() {
        Hc(t) && Wc(e)
    })
}
function Hc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !be(e, n)
    } catch {
        return !0
    }
}
function Wc(e) {
    var t = mt(e, 1);
    t !== null && Je(t, e, 1, -1)
}
function Pa(e) {
    var t = tt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _r,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = gm.bind(null, X, e),
    [t.memoizedState, e]
}
function wr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = X.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    X.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Qc() {
    return We().memoizedState
}
function ei(e, t, n, r) {
    var i = tt();
    X.flags |= e,
    i.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Bi(e, t, n, r) {
    var i = We();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ie !== null) {
        var l = ie.memoizedState;
        if (o = l.destroy,
        r !== null && hs(r, l.deps)) {
            i.memoizedState = wr(t, n, o, r);
            return
        }
    }
    X.flags |= e,
    i.memoizedState = wr(1 | t, n, o, r)
}
function Ra(e, t) {
    return ei(8390656, 8, e, t)
}
function vs(e, t) {
    return Bi(2048, 8, e, t)
}
function Gc(e, t) {
    return Bi(4, 2, e, t)
}
function qc(e, t) {
    return Bi(4, 4, e, t)
}
function Kc(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Yc(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Bi(4, 4, Kc.bind(null, t, e), n)
}
function _s() {}
function Jc(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hs(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function bc(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hs(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Xc(e, t, n) {
    return Yt & 21 ? (be(n, t) || (n = rc(),
    X.lanes |= n,
    Jt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ce = !0),
    e.memoizedState = n)
}
function mm(e, t) {
    var n = G;
    G = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Co.transition;
    Co.transition = {};
    try {
        e(!1),
        t()
    } finally {
        G = n,
        Co.transition = r
    }
}
function Zc() {
    return We().memoizedState
}
function hm(e, t, n) {
    var r = jt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    ed(e))
        td(t, n);
    else if (n = Ic(e, t, n, r),
    n !== null) {
        var i = we();
        Je(n, e, r, i),
        nd(n, t, r)
    }
}
function gm(e, t, n) {
    var r = jt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (ed(e))
        td(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var l = t.lastRenderedState
                  , s = o(l, n);
                if (i.hasEagerState = !0,
                i.eagerState = s,
                be(s, l)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    cs(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Ic(e, t, i, r),
        n !== null && (i = we(),
        Je(n, e, r, i),
        nd(n, t, r))
    }
}
function ed(e) {
    var t = e.alternate;
    return e === X || t !== null && t === X
}
function td(e, t) {
    tr = Ei = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function nd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Jl(e, n)
    }
}
var Ci = {
    readContext: He,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1
}
  , ym = {
    readContext: He,
    useCallback: function(e, t) {
        return tt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: He,
    useEffect: Ra,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ei(4194308, 4, Kc.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ei(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ei(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = tt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = tt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = hm.bind(null, X, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = tt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Pa,
    useDebugValue: _s,
    useDeferredValue: function(e) {
        return tt().memoizedState = e
    },
    useTransition: function() {
        var e = Pa(!1)
          , t = e[0];
        return e = mm.bind(null, e[1]),
        tt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = X
          , i = tt();
        if (J) {
            if (n === void 0)
                throw Error(P(407));
            n = n()
        } else {
            if (n = t(),
            ae === null)
                throw Error(P(349));
            Yt & 30 || $c(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Ra(Bc.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        wr(9, Vc.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = tt()
          , t = ae.identifierPrefix;
        if (J) {
            var n = ct
              , r = ut;
            n = (r & ~(1 << 32 - Ye(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = vr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = pm++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , vm = {
    readContext: He,
    useCallback: Jc,
    useContext: He,
    useEffect: vs,
    useImperativeHandle: Yc,
    useInsertionEffect: Gc,
    useLayoutEffect: qc,
    useMemo: bc,
    useReducer: No,
    useRef: Qc,
    useState: function() {
        return No(_r)
    },
    useDebugValue: _s,
    useDeferredValue: function(e) {
        var t = We();
        return Xc(t, ie.memoizedState, e)
    },
    useTransition: function() {
        var e = No(_r)[0]
          , t = We().memoizedState;
        return [e, t]
    },
    useMutableSource: Dc,
    useSyncExternalStore: Uc,
    useId: Zc,
    unstable_isNewReconciler: !1
}
  , _m = {
    readContext: He,
    useCallback: Jc,
    useContext: He,
    useEffect: vs,
    useImperativeHandle: Yc,
    useInsertionEffect: Gc,
    useLayoutEffect: qc,
    useMemo: bc,
    useReducer: To,
    useRef: Qc,
    useState: function() {
        return To(_r)
    },
    useDebugValue: _s,
    useDeferredValue: function(e) {
        var t = We();
        return ie === null ? t.memoizedState = e : Xc(t, ie.memoizedState, e)
    },
    useTransition: function() {
        var e = To(_r)[0]
          , t = We().memoizedState;
        return [e, t]
    },
    useMutableSource: Dc,
    useSyncExternalStore: Uc,
    useId: Zc,
    unstable_isNewReconciler: !1
};
function Ge(e, t) {
    if (e && e.defaultProps) {
        t = Z({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ml(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Z({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Hi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? en(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = we()
          , i = jt(e)
          , o = dt(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Pt(e, o, i),
        t !== null && (Je(t, e, i, r),
        Xr(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = we()
          , i = jt(e)
          , o = dt(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Pt(e, o, i),
        t !== null && (Je(t, e, i, r),
        Xr(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = we()
          , r = jt(e)
          , i = dt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Pt(e, i, r),
        t !== null && (Je(t, e, r, n),
        Xr(t, e, r))
    }
};
function ja(e, t, n, r, i, o, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !fr(n, r) || !fr(i, o) : !0
}
function rd(e, t, n) {
    var r = !1
      , i = Lt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = He(o) : (i = Te(t) ? qt : ye.current,
    r = t.contextTypes,
    o = (r = r != null) ? En(e, i) : Lt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Hi,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Aa(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hi.enqueueReplaceState(t, t.state, null)
}
function hl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    ds(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = He(o) : (o = Te(t) ? qt : ye.current,
    i.context = En(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (ml(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Hi.enqueueReplaceState(i, i.state, null),
    ki(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function On(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += qf(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Oo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function gl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var wm = typeof WeakMap == "function" ? WeakMap : Map;
function id(e, t, n) {
    n = dt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ti || (Ti = !0,
        Nl = r),
        gl(e, t)
    }
    ,
    n
}
function od(e, t, n) {
    n = dt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            gl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        gl(e, t),
        typeof r != "function" && (Rt === null ? Rt = new Set([this]) : Rt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function Fa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new wm;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = Lm.bind(null, e, t, n),
    t.then(e, e))
}
function La(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ia(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1),
    t.tag = 2,
    Pt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Sm = gt.ReactCurrentOwner
  , Ce = !1;
function _e(e, t, n, r) {
    t.child = e === null ? Lc(t, null, n, r) : Nn(t, e.child, n, r)
}
function za(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Sn(t, i),
    r = gs(e, t, n, r, o, i),
    n = ys(),
    e !== null && !Ce ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    ht(e, t, i)) : (J && n && is(t),
    t.flags |= 1,
    _e(e, t, r, i),
    t.child)
}
function Ma(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Ts(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        ld(e, t, o, r, i)) : (e = ii(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : fr,
        n(l, r) && e.ref === t.ref)
            return ht(e, t, i)
    }
    return t.flags |= 1,
    e = At(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function ld(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (fr(o, r) && e.ref === t.ref)
            if (Ce = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Ce = !0);
            else
                return t.lanes = e.lanes,
                ht(e, t, i)
    }
    return yl(e, t, n, r, i)
}
function sd(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            q(gn, Re),
            Re |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                q(gn, Re),
                Re |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            q(gn, Re),
            Re |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        q(gn, Re),
        Re |= r;
    return _e(e, t, i, n),
    t.child
}
function ad(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function yl(e, t, n, r, i) {
    var o = Te(n) ? qt : ye.current;
    return o = En(t, o),
    Sn(t, i),
    n = gs(e, t, n, r, o, i),
    r = ys(),
    e !== null && !Ce ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    ht(e, t, i)) : (J && r && is(t),
    t.flags |= 1,
    _e(e, t, n, i),
    t.child)
}
function Da(e, t, n, r, i) {
    if (Te(n)) {
        var o = !0;
        yi(t)
    } else
        o = !1;
    if (Sn(t, i),
    t.stateNode === null)
        ti(e, t),
        rd(t, n, r),
        hl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , s = t.memoizedProps;
        l.props = s;
        var a = l.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = He(u) : (u = Te(n) ? qt : ye.current,
        u = En(t, u));
        var c = n.getDerivedStateFromProps
          , m = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && Aa(t, l, r, u),
        wt = !1;
        var g = t.memoizedState;
        l.state = g,
        ki(t, r, l, i),
        a = t.memoizedState,
        s !== r || g !== a || Ne.current || wt ? (typeof c == "function" && (ml(t, n, c, r),
        a = t.memoizedState),
        (s = wt || ja(t, n, s, r, g, a, u)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        l.props = r,
        l.state = a,
        l.context = u,
        r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        zc(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : Ge(t.type, s),
        l.props = u,
        m = t.pendingProps,
        g = l.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = He(a) : (a = Te(n) ? qt : ye.current,
        a = En(t, a));
        var x = n.getDerivedStateFromProps;
        (c = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== m || g !== a) && Aa(t, l, r, a),
        wt = !1,
        g = t.memoizedState,
        l.state = g,
        ki(t, r, l, i);
        var v = t.memoizedState;
        s !== m || g !== v || Ne.current || wt ? (typeof x == "function" && (ml(t, n, x, r),
        v = t.memoizedState),
        (u = wt || ja(t, n, u, r, g, v, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        l.props = r,
        l.state = v,
        l.context = a,
        r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return vl(e, t, n, r, o, i)
}
function vl(e, t, n, r, i, o) {
    ad(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return i && xa(t, n, !1),
        ht(e, t, o);
    r = t.stateNode,
    Sm.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Nn(t, e.child, null, o),
    t.child = Nn(t, null, s, o)) : _e(e, t, s, o),
    t.memoizedState = r.state,
    i && xa(t, n, !0),
    t.child
}
function ud(e) {
    var t = e.stateNode;
    t.pendingContext ? ka(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ka(e, t.context, !1),
    fs(e, t.containerInfo)
}
function Ua(e, t, n, r, i) {
    return Cn(),
    ls(i),
    t.flags |= 256,
    _e(e, t, n, r),
    t.child
}
var _l = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function wl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function cd(e, t, n) {
    var r = t.pendingProps, i = b.current, o = !1, l = (t.flags & 128) !== 0, s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    q(b, i & 1),
    e === null)
        return fl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = l) : o = Gi(l, r, 0, null),
        e = Qt(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = wl(n),
        t.memoizedState = _l,
        e) : ws(t, l));
    if (i = e.memoizedState,
    i !== null && (s = i.dehydrated,
    s !== null))
        return km(e, t, l, r, s, i, n);
    if (o) {
        o = r.fallback,
        l = t.mode,
        i = e.child,
        s = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = At(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        s !== null ? o = At(s, o) : (o = Qt(o, l, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        l = e.child.memoizedState,
        l = l === null ? wl(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        o.memoizedState = l,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = _l,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = At(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ws(e, t) {
    return t = Gi({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Hr(e, t, n, r) {
    return r !== null && ls(r),
    Nn(t, e.child, null, n),
    e = ws(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function km(e, t, n, r, i, o, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Oo(Error(P(422))),
        Hr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Gi({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = Qt(o, i, l, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Nn(t, e.child, null, l),
        t.child.memoizedState = wl(l),
        t.memoizedState = _l,
        o);
    if (!(t.mode & 1))
        return Hr(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        o = Error(P(419)),
        r = Oo(o, r, void 0),
        Hr(e, t, l, r)
    }
    if (s = (l & e.childLanes) !== 0,
    Ce || s) {
        if (r = ae,
        r !== null) {
            switch (l & -l) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            mt(e, i),
            Je(r, e, i, -1))
        }
        return Ns(),
        r = Oo(Error(P(421))),
        Hr(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Im.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    je = Ot(i.nextSibling),
    Ae = t,
    J = !0,
    Ke = null,
    e !== null && (De[Ue++] = ut,
    De[Ue++] = ct,
    De[Ue++] = Kt,
    ut = e.id,
    ct = e.overflow,
    Kt = t),
    t = ws(t, r.children),
    t.flags |= 4096,
    t)
}
function $a(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    pl(e.return, t, n)
}
function Po(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function dd(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (_e(e, t, r.children, n),
    r = b.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && $a(e, n, t);
                else if (e.tag === 19)
                    $a(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (q(b, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && xi(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Po(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && xi(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Po(t, !0, n, null, o);
            break;
        case "together":
            Po(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ti(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Jt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child,
        n = At(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = At(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function xm(e, t, n) {
    switch (t.tag) {
    case 3:
        ud(t),
        Cn();
        break;
    case 5:
        Mc(t);
        break;
    case 1:
        Te(t.type) && yi(t);
        break;
    case 4:
        fs(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        q(wi, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (q(b, b.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? cd(e, t, n) : (q(b, b.current & 1),
            e = ht(e, t, n),
            e !== null ? e.sibling : null);
        q(b, b.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return dd(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        q(b, b.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        sd(e, t, n)
    }
    return ht(e, t, n)
}
var fd, Sl, pd, md;
fd = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Sl = function() {}
;
pd = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Bt(it.current);
        var o = null;
        switch (n) {
        case "input":
            i = Ho(e, i),
            r = Ho(e, r),
            o = [];
            break;
        case "select":
            i = Z({}, i, {
                value: void 0
            }),
            r = Z({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Go(e, i),
            r = Go(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = hi)
        }
        Ko(n, r);
        var l;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var s = i[u];
                    for (l in s)
                        s.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (or.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== s && (a != null || s != null))
                if (u === "style")
                    if (s) {
                        for (l in s)
                            !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in a)
                            a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}),
                            n[l] = a[l])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    s = s ? s.__html : void 0,
                    a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (or.hasOwnProperty(u) ? (a != null && u === "onScroll" && K("scroll", e),
                    o || s === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
md = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Vn(e, t) {
    if (!J)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Em(e, t, n) {
    var r = t.pendingProps;
    switch (os(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return me(t),
        null;
    case 1:
        return Te(t.type) && gi(),
        me(t),
        null;
    case 3:
        return r = t.stateNode,
        Tn(),
        Y(Ne),
        Y(ye),
        ms(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ke !== null && (Pl(Ke),
        Ke = null))),
        Sl(e, t),
        me(t),
        null;
    case 5:
        ps(t);
        var i = Bt(yr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            pd(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(P(166));
                return me(t),
                null
            }
            if (e = Bt(it.current),
            Vr(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[nt] = t,
                r[hr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    K("cancel", r),
                    K("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    K("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Yn.length; i++)
                        K(Yn[i], r);
                    break;
                case "source":
                    K("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    K("error", r),
                    K("load", r);
                    break;
                case "details":
                    K("toggle", r);
                    break;
                case "input":
                    Ys(r, o),
                    K("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    K("invalid", r);
                    break;
                case "textarea":
                    bs(r, o),
                    K("invalid", r)
                }
                Ko(n, o),
                i = null;
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var s = o[l];
                        l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && $r(r.textContent, s, e),
                        i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && $r(r.textContent, s, e),
                        i = ["children", "" + s]) : or.hasOwnProperty(l) && s != null && l === "onScroll" && K("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ar(r),
                    Js(r, o, !0);
                    break;
                case "textarea":
                    Ar(r),
                    Xs(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = hi)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Bu(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[nt] = t,
                e[hr] = r,
                fd(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = Yo(n, r),
                    n) {
                    case "dialog":
                        K("cancel", e),
                        K("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        K("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Yn.length; i++)
                            K(Yn[i], e);
                        i = r;
                        break;
                    case "source":
                        K("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        K("error", e),
                        K("load", e),
                        i = r;
                        break;
                    case "details":
                        K("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Ys(e, r),
                        i = Ho(e, r),
                        K("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Z({}, r, {
                            value: void 0
                        }),
                        K("invalid", e);
                        break;
                    case "textarea":
                        bs(e, r),
                        i = Go(e, r),
                        K("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Ko(n, i),
                    s = i;
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "style" ? Qu(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Hu(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && lr(e, a) : typeof a == "number" && lr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (or.hasOwnProperty(o) ? a != null && o === "onScroll" && K("scroll", e) : a != null && Wl(e, o, a, l))
                        }
                    switch (n) {
                    case "input":
                        Ar(e),
                        Js(e, r, !1);
                        break;
                    case "textarea":
                        Ar(e),
                        Xs(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Ft(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? yn(e, !!r.multiple, o, !1) : r.defaultValue != null && yn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = hi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return me(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            md(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(P(166));
            if (n = Bt(yr.current),
            Bt(it.current),
            Vr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[nt] = t,
                (o = r.nodeValue !== n) && (e = Ae,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        $r(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && $r(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[nt] = t,
                t.stateNode = r
        }
        return me(t),
        null;
    case 13:
        if (Y(b),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (J && je !== null && t.mode & 1 && !(t.flags & 128))
                Ac(),
                Cn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Vr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(P(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(P(317));
                    o[nt] = t
                } else
                    Cn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                me(t),
                o = !1
            } else
                Ke !== null && (Pl(Ke),
                Ke = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || b.current & 1 ? oe === 0 && (oe = 3) : Ns())),
        t.updateQueue !== null && (t.flags |= 4),
        me(t),
        null);
    case 4:
        return Tn(),
        Sl(e, t),
        e === null && pr(t.stateNode.containerInfo),
        me(t),
        null;
    case 10:
        return us(t.type._context),
        me(t),
        null;
    case 17:
        return Te(t.type) && gi(),
        me(t),
        null;
    case 19:
        if (Y(b),
        o = t.memoizedState,
        o === null)
            return me(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = o.rendering,
        l === null)
            if (r)
                Vn(o, !1);
            else {
                if (oe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = xi(e),
                        l !== null) {
                            for (t.flags |= 128,
                            Vn(o, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                l = o.alternate,
                                l === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = l.childLanes,
                                o.lanes = l.lanes,
                                o.child = l.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = l.memoizedProps,
                                o.memoizedState = l.memoizedState,
                                o.updateQueue = l.updateQueue,
                                o.type = l.type,
                                e = l.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return q(b, b.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && ne() > Pn && (t.flags |= 128,
                r = !0,
                Vn(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = xi(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Vn(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !l.alternate && !J)
                        return me(t),
                        null
                } else
                    2 * ne() - o.renderingStartTime > Pn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Vn(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = o.last,
            n !== null ? n.sibling = l : t.child = l,
            o.last = l)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = ne(),
        t.sibling = null,
        n = b.current,
        q(b, r ? n & 1 | 2 : n & 1),
        t) : (me(t),
        null);
    case 22:
    case 23:
        return Cs(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Re & 1073741824 && (me(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(P(156, t.tag))
}
function Cm(e, t) {
    switch (os(t),
    t.tag) {
    case 1:
        return Te(t.type) && gi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Tn(),
        Y(Ne),
        Y(ye),
        ms(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ps(t),
        null;
    case 13:
        if (Y(b),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(P(340));
            Cn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Y(b),
        null;
    case 4:
        return Tn(),
        null;
    case 10:
        return us(t.type._context),
        null;
    case 22:
    case 23:
        return Cs(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Wr = !1
  , he = !1
  , Nm = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function hn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                te(e, t, r)
            }
        else
            n.current = null
}
function kl(e, t, n) {
    try {
        n()
    } catch (r) {
        te(e, t, r)
    }
}
var Va = !1;
function Tm(e, t) {
    if (ol = fi,
    e = _c(),
    rs(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , s = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , m = e
                      , g = null;
                    t: for (; ; ) {
                        for (var x; m !== n || i !== 0 && m.nodeType !== 3 || (s = l + i),
                        m !== o || r !== 0 && m.nodeType !== 3 || (a = l + r),
                        m.nodeType === 3 && (l += m.nodeValue.length),
                        (x = m.firstChild) !== null; )
                            g = m,
                            m = x;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (g === n && ++u === i && (s = l),
                            g === o && ++c === r && (a = l),
                            (x = m.nextSibling) !== null)
                                break;
                            m = g,
                            g = m.parentNode
                        }
                        m = x
                    }
                    n = s === -1 || a === -1 ? null : {
                        start: s,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ll = {
        focusedElem: e,
        selectionRange: n
    },
    fi = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var S = v.memoizedProps
                                  , T = v.memoizedState
                                  , f = t.stateNode
                                  , d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Ge(t.type, S), T);
                                f.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                        }
                } catch (C) {
                    te(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return v = Va,
    Va = !1,
    v
}
function nr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && kl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Wi(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function xl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function hd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    hd(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[nt],
    delete t[hr],
    delete t[ul],
    delete t[um],
    delete t[cm])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function gd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ba(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || gd(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function El(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = hi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (El(e, t, n),
        e = e.sibling; e !== null; )
            El(e, t, n),
            e = e.sibling
}
function Cl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Cl(e, t, n),
        e = e.sibling; e !== null; )
            Cl(e, t, n),
            e = e.sibling
}
var ce = null
  , qe = !1;
function yt(e, t, n) {
    for (n = n.child; n !== null; )
        yd(e, t, n),
        n = n.sibling
}
function yd(e, t, n) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
        try {
            rt.onCommitFiberUnmount(zi, n)
        } catch {}
    switch (n.tag) {
    case 5:
        he || hn(n, t);
    case 6:
        var r = ce
          , i = qe;
        ce = null,
        yt(e, t, n),
        ce = r,
        qe = i,
        ce !== null && (qe ? (e = ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
        break;
    case 18:
        ce !== null && (qe ? (e = ce,
        n = n.stateNode,
        e.nodeType === 8 ? ko(e.parentNode, n) : e.nodeType === 1 && ko(e, n),
        cr(e)) : ko(ce, n.stateNode));
        break;
    case 4:
        r = ce,
        i = qe,
        ce = n.stateNode.containerInfo,
        qe = !0,
        yt(e, t, n),
        ce = r,
        qe = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!he && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , l = o.destroy;
                o = o.tag,
                l !== void 0 && (o & 2 || o & 4) && kl(n, t, l),
                i = i.next
            } while (i !== r)
        }
        yt(e, t, n);
        break;
    case 1:
        if (!he && (hn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                te(n, t, s)
            }
        yt(e, t, n);
        break;
    case 21:
        yt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (he = (r = he) || n.memoizedState !== null,
        yt(e, t, n),
        he = r) : yt(e, t, n);
        break;
    default:
        yt(e, t, n)
    }
}
function Ha(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Nm),
        t.forEach(function(r) {
            var i = zm.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Qe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , l = t
                  , s = l;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        ce = s.stateNode,
                        qe = !1;
                        break e;
                    case 3:
                        ce = s.stateNode.containerInfo,
                        qe = !0;
                        break e;
                    case 4:
                        ce = s.stateNode.containerInfo,
                        qe = !0;
                        break e
                    }
                    s = s.return
                }
                if (ce === null)
                    throw Error(P(160));
                yd(o, l, i),
                ce = null,
                qe = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                te(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            vd(t, e),
            t = t.sibling
}
function vd(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Qe(t, e),
        et(e),
        r & 4) {
            try {
                nr(3, e, e.return),
                Wi(3, e)
            } catch (S) {
                te(e, e.return, S)
            }
            try {
                nr(5, e, e.return)
            } catch (S) {
                te(e, e.return, S)
            }
        }
        break;
    case 1:
        Qe(t, e),
        et(e),
        r & 512 && n !== null && hn(n, n.return);
        break;
    case 5:
        if (Qe(t, e),
        et(e),
        r & 512 && n !== null && hn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                lr(i, "")
            } catch (S) {
                te(e, e.return, S)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , l = n !== null ? n.memoizedProps : o
              , s = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    s === "input" && o.type === "radio" && o.name != null && $u(i, o),
                    Yo(s, l);
                    var u = Yo(s, o);
                    for (l = 0; l < a.length; l += 2) {
                        var c = a[l]
                          , m = a[l + 1];
                        c === "style" ? Qu(i, m) : c === "dangerouslySetInnerHTML" ? Hu(i, m) : c === "children" ? lr(i, m) : Wl(i, c, m, u)
                    }
                    switch (s) {
                    case "input":
                        Wo(i, o);
                        break;
                    case "textarea":
                        Vu(i, o);
                        break;
                    case "select":
                        var g = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var x = o.value;
                        x != null ? yn(i, !!o.multiple, x, !1) : g !== !!o.multiple && (o.defaultValue != null ? yn(i, !!o.multiple, o.defaultValue, !0) : yn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[hr] = o
                } catch (S) {
                    te(e, e.return, S)
                }
        }
        break;
    case 6:
        if (Qe(t, e),
        et(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(P(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (S) {
                te(e, e.return, S)
            }
        }
        break;
    case 3:
        if (Qe(t, e),
        et(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                cr(t.containerInfo)
            } catch (S) {
                te(e, e.return, S)
            }
        break;
    case 4:
        Qe(t, e),
        et(e);
        break;
    case 13:
        Qe(t, e),
        et(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (xs = ne())),
        r & 4 && Ha(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (he = (u = he) || c,
        Qe(t, e),
        he = u) : Qe(t, e),
        et(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (I = e,
                c = e.child; c !== null; ) {
                    for (m = I = c; I !== null; ) {
                        switch (g = I,
                        x = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            nr(4, g, g.return);
                            break;
                        case 1:
                            hn(g, g.return);
                            var v = g.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (S) {
                                    te(r, n, S)
                                }
                            }
                            break;
                        case 5:
                            hn(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                Qa(m);
                                continue
                            }
                        }
                        x !== null ? (x.return = g,
                        I = x) : Qa(m)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (c === null) {
                        c = m;
                        try {
                            i = m.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = m.stateNode,
                            a = m.memoizedProps.style,
                            l = a != null && a.hasOwnProperty("display") ? a.display : null,
                            s.style.display = Wu("display", l))
                        } catch (S) {
                            te(e, e.return, S)
                        }
                    }
                } else if (m.tag === 6) {
                    if (c === null)
                        try {
                            m.stateNode.nodeValue = u ? "" : m.memoizedProps
                        } catch (S) {
                            te(e, e.return, S)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    c === m && (c = null),
                    m = m.return
                }
                c === m && (c = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        Qe(t, e),
        et(e),
        r & 4 && Ha(e);
        break;
    case 21:
        break;
    default:
        Qe(t, e),
        et(e)
    }
}
function et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (gd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (lr(i, ""),
                r.flags &= -33);
                var o = Ba(e);
                Cl(e, o, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , s = Ba(e);
                El(e, s, l);
                break;
            default:
                throw Error(P(161))
            }
        } catch (a) {
            te(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Om(e, t, n) {
    I = e,
    _d(e)
}
function _d(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var i = I
          , o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Wr;
            if (!l) {
                var s = i.alternate
                  , a = s !== null && s.memoizedState !== null || he;
                s = Wr;
                var u = he;
                if (Wr = l,
                (he = a) && !u)
                    for (I = i; I !== null; )
                        l = I,
                        a = l.child,
                        l.tag === 22 && l.memoizedState !== null ? Ga(i) : a !== null ? (a.return = l,
                        I = a) : Ga(i);
                for (; o !== null; )
                    I = o,
                    _d(o),
                    o = o.sibling;
                I = i,
                Wr = s,
                he = u
            }
            Wa(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            I = o) : Wa(e)
    }
}
function Wa(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        he || Wi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !he)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Oa(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Oa(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var m = c.dehydrated;
                                    m !== null && cr(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                    }
                he || t.flags & 512 && xl(t)
            } catch (g) {
                te(t, t.return, g)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Qa(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Ga(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Wi(4, t)
                } catch (a) {
                    te(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        te(t, i, a)
                    }
                }
                var o = t.return;
                try {
                    xl(t)
                } catch (a) {
                    te(t, o, a)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    xl(t)
                } catch (a) {
                    te(t, l, a)
                }
            }
        } catch (a) {
            te(t, t.return, a)
        }
        if (t === e) {
            I = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            I = s;
            break
        }
        I = t.return
    }
}
var Pm = Math.ceil
  , Ni = gt.ReactCurrentDispatcher
  , Ss = gt.ReactCurrentOwner
  , Ve = gt.ReactCurrentBatchConfig
  , W = 0
  , ae = null
  , re = null
  , de = 0
  , Re = 0
  , gn = zt(0)
  , oe = 0
  , Sr = null
  , Jt = 0
  , Qi = 0
  , ks = 0
  , rr = null
  , Ee = null
  , xs = 0
  , Pn = 1 / 0
  , st = null
  , Ti = !1
  , Nl = null
  , Rt = null
  , Qr = !1
  , Et = null
  , Oi = 0
  , ir = 0
  , Tl = null
  , ni = -1
  , ri = 0;
function we() {
    return W & 6 ? ne() : ni !== -1 ? ni : ni = ne()
}
function jt(e) {
    return e.mode & 1 ? W & 2 && de !== 0 ? de & -de : fm.transition !== null ? (ri === 0 && (ri = rc()),
    ri) : (e = G,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : cc(e.type)),
    e) : 1
}
function Je(e, t, n, r) {
    if (50 < ir)
        throw ir = 0,
        Tl = null,
        Error(P(185));
    Er(e, n, r),
    (!(W & 2) || e !== ae) && (e === ae && (!(W & 2) && (Qi |= n),
    oe === 4 && kt(e, de)),
    Oe(e, r),
    n === 1 && W === 0 && !(t.mode & 1) && (Pn = ne() + 500,
    Vi && Mt()))
}
function Oe(e, t) {
    var n = e.callbackNode;
    fp(e, t);
    var r = di(e, e === ae ? de : 0);
    if (r === 0)
        n !== null && ta(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ta(n),
        t === 1)
            e.tag === 0 ? dm(qa.bind(null, e)) : Pc(qa.bind(null, e)),
            sm(function() {
                !(W & 6) && Mt()
            }),
            n = null;
        else {
            switch (ic(r)) {
            case 1:
                n = Yl;
                break;
            case 4:
                n = tc;
                break;
            case 16:
                n = ci;
                break;
            case 536870912:
                n = nc;
                break;
            default:
                n = ci
            }
            n = Td(n, wd.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function wd(e, t) {
    if (ni = -1,
    ri = 0,
    W & 6)
        throw Error(P(327));
    var n = e.callbackNode;
    if (kn() && e.callbackNode !== n)
        return null;
    var r = di(e, e === ae ? de : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Pi(e, r);
    else {
        t = r;
        var i = W;
        W |= 2;
        var o = kd();
        (ae !== e || de !== t) && (st = null,
        Pn = ne() + 500,
        Wt(e, t));
        do
            try {
                Am();
                break
            } catch (s) {
                Sd(e, s)
            }
        while (!0);
        as(),
        Ni.current = o,
        W = i,
        re !== null ? t = 0 : (ae = null,
        de = 0,
        t = oe)
    }
    if (t !== 0) {
        if (t === 2 && (i = el(e),
        i !== 0 && (r = i,
        t = Ol(e, i))),
        t === 1)
            throw n = Sr,
            Wt(e, 0),
            kt(e, r),
            Oe(e, ne()),
            n;
        if (t === 6)
            kt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Rm(i) && (t = Pi(e, r),
            t === 2 && (o = el(e),
            o !== 0 && (r = o,
            t = Ol(e, o))),
            t === 1))
                throw n = Sr,
                Wt(e, 0),
                kt(e, r),
                Oe(e, ne()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(P(345));
            case 2:
                Ut(e, Ee, st);
                break;
            case 3:
                if (kt(e, r),
                (r & 130023424) === r && (t = xs + 500 - ne(),
                10 < t)) {
                    if (di(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        we(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = al(Ut.bind(null, e, Ee, st), t);
                    break
                }
                Ut(e, Ee, st);
                break;
            case 4:
                if (kt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var l = 31 - Ye(r);
                    o = 1 << l,
                    l = t[l],
                    l > i && (i = l),
                    r &= ~o
                }
                if (r = i,
                r = ne() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pm(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = al(Ut.bind(null, e, Ee, st), r);
                    break
                }
                Ut(e, Ee, st);
                break;
            case 5:
                Ut(e, Ee, st);
                break;
            default:
                throw Error(P(329))
            }
        }
    }
    return Oe(e, ne()),
    e.callbackNode === n ? wd.bind(null, e) : null
}
function Ol(e, t) {
    var n = rr;
    return e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    e = Pi(e, t),
    e !== 2 && (t = Ee,
    Ee = n,
    t !== null && Pl(t)),
    e
}
function Pl(e) {
    Ee === null ? Ee = e : Ee.push.apply(Ee, e)
}
function Rm(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!be(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function kt(e, t) {
    for (t &= ~ks,
    t &= ~Qi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ye(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function qa(e) {
    if (W & 6)
        throw Error(P(327));
    kn();
    var t = di(e, 0);
    if (!(t & 1))
        return Oe(e, ne()),
        null;
    var n = Pi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = el(e);
        r !== 0 && (t = r,
        n = Ol(e, r))
    }
    if (n === 1)
        throw n = Sr,
        Wt(e, 0),
        kt(e, t),
        Oe(e, ne()),
        n;
    if (n === 6)
        throw Error(P(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ut(e, Ee, st),
    Oe(e, ne()),
    null
}
function Es(e, t) {
    var n = W;
    W |= 1;
    try {
        return e(t)
    } finally {
        W = n,
        W === 0 && (Pn = ne() + 500,
        Vi && Mt())
    }
}
function bt(e) {
    Et !== null && Et.tag === 0 && !(W & 6) && kn();
    var t = W;
    W |= 1;
    var n = Ve.transition
      , r = G;
    try {
        if (Ve.transition = null,
        G = 1,
        e)
            return e()
    } finally {
        G = r,
        Ve.transition = n,
        W = t,
        !(W & 6) && Mt()
    }
}
function Cs() {
    Re = gn.current,
    Y(gn)
}
function Wt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    lm(n)),
    re !== null)
        for (n = re.return; n !== null; ) {
            var r = n;
            switch (os(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && gi();
                break;
            case 3:
                Tn(),
                Y(Ne),
                Y(ye),
                ms();
                break;
            case 5:
                ps(r);
                break;
            case 4:
                Tn();
                break;
            case 13:
                Y(b);
                break;
            case 19:
                Y(b);
                break;
            case 10:
                us(r.type._context);
                break;
            case 22:
            case 23:
                Cs()
            }
            n = n.return
        }
    if (ae = e,
    re = e = At(e.current, null),
    de = Re = t,
    oe = 0,
    Sr = null,
    ks = Qi = Jt = 0,
    Ee = rr = null,
    Vt !== null) {
        for (t = 0; t < Vt.length; t++)
            if (n = Vt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i,
                    r.next = l
                }
                n.pending = r
            }
        Vt = null
    }
    return e
}
function Sd(e, t) {
    do {
        var n = re;
        try {
            if (as(),
            Zr.current = Ci,
            Ei) {
                for (var r = X.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ei = !1
            }
            if (Yt = 0,
            se = ie = X = null,
            tr = !1,
            vr = 0,
            Ss.current = null,
            n === null || n.return === null) {
                oe = 1,
                Sr = t,
                re = null;
                break
            }
            e: {
                var o = e
                  , l = n.return
                  , s = n
                  , a = t;
                if (t = de,
                s.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = s
                      , m = c.tag;
                    if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var g = c.alternate;
                        g ? (c.updateQueue = g.updateQueue,
                        c.memoizedState = g.memoizedState,
                        c.lanes = g.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var x = La(l);
                    if (x !== null) {
                        x.flags &= -257,
                        Ia(x, l, s, o, t),
                        x.mode & 1 && Fa(o, u, t),
                        t = x,
                        a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var S = new Set;
                            S.add(a),
                            t.updateQueue = S
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Fa(o, u, t),
                            Ns();
                            break e
                        }
                        a = Error(P(426))
                    }
                } else if (J && s.mode & 1) {
                    var T = La(l);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                        Ia(T, l, s, o, t),
                        ls(On(a, s));
                        break e
                    }
                }
                o = a = On(a, s),
                oe !== 4 && (oe = 2),
                rr === null ? rr = [o] : rr.push(o),
                o = l;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var f = id(o, a, t);
                        Ta(o, f);
                        break e;
                    case 1:
                        s = a;
                        var d = o.type
                          , p = o.stateNode;
                        if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Rt === null || !Rt.has(p)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var C = od(o, s, t);
                            Ta(o, C);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Ed(n)
        } catch (R) {
            t = R,
            re === n && n !== null && (re = n = n.return);
            continue
        }
        break
    } while (!0)
}
function kd() {
    var e = Ni.current;
    return Ni.current = Ci,
    e === null ? Ci : e
}
function Ns() {
    (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ae === null || !(Jt & 268435455) && !(Qi & 268435455) || kt(ae, de)
}
function Pi(e, t) {
    var n = W;
    W |= 2;
    var r = kd();
    (ae !== e || de !== t) && (st = null,
    Wt(e, t));
    do
        try {
            jm();
            break
        } catch (i) {
            Sd(e, i)
        }
    while (!0);
    if (as(),
    W = n,
    Ni.current = r,
    re !== null)
        throw Error(P(261));
    return ae = null,
    de = 0,
    oe
}
function jm() {
    for (; re !== null; )
        xd(re)
}
function Am() {
    for (; re !== null && !rp(); )
        xd(re)
}
function xd(e) {
    var t = Nd(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps,
    t === null ? Ed(e) : re = t,
    Ss.current = null
}
function Ed(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Cm(n, t),
            n !== null) {
                n.flags &= 32767,
                re = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                oe = 6,
                re = null;
                return
            }
        } else if (n = Em(n, t, Re),
        n !== null) {
            re = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            re = t;
            return
        }
        re = t = e
    } while (t !== null);
    oe === 0 && (oe = 5)
}
function Ut(e, t, n) {
    var r = G
      , i = Ve.transition;
    try {
        Ve.transition = null,
        G = 1,
        Fm(e, t, n, r)
    } finally {
        Ve.transition = i,
        G = r
    }
    return null
}
function Fm(e, t, n, r) {
    do
        kn();
    while (Et !== null);
    if (W & 6)
        throw Error(P(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(P(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (pp(e, o),
    e === ae && (re = ae = null,
    de = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qr || (Qr = !0,
    Td(ci, function() {
        return kn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Ve.transition,
        Ve.transition = null;
        var l = G;
        G = 1;
        var s = W;
        W |= 4,
        Ss.current = null,
        Tm(e, n),
        vd(n, e),
        Zp(ll),
        fi = !!ol,
        ll = ol = null,
        e.current = n,
        Om(n),
        ip(),
        W = s,
        G = l,
        Ve.transition = o
    } else
        e.current = n;
    if (Qr && (Qr = !1,
    Et = e,
    Oi = i),
    o = e.pendingLanes,
    o === 0 && (Rt = null),
    sp(n.stateNode),
    Oe(e, ne()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Ti)
        throw Ti = !1,
        e = Nl,
        Nl = null,
        e;
    return Oi & 1 && e.tag !== 0 && kn(),
    o = e.pendingLanes,
    o & 1 ? e === Tl ? ir++ : (ir = 0,
    Tl = e) : ir = 0,
    Mt(),
    null
}
function kn() {
    if (Et !== null) {
        var e = ic(Oi)
          , t = Ve.transition
          , n = G;
        try {
            if (Ve.transition = null,
            G = 16 > e ? 16 : e,
            Et === null)
                var r = !1;
            else {
                if (e = Et,
                Et = null,
                Oi = 0,
                W & 6)
                    throw Error(P(331));
                var i = W;
                for (W |= 4,
                I = e.current; I !== null; ) {
                    var o = I
                      , l = o.child;
                    if (I.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (I = u; I !== null; ) {
                                    var c = I;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        nr(8, c, o)
                                    }
                                    var m = c.child;
                                    if (m !== null)
                                        m.return = c,
                                        I = m;
                                    else
                                        for (; I !== null; ) {
                                            c = I;
                                            var g = c.sibling
                                              , x = c.return;
                                            if (hd(c),
                                            c === u) {
                                                I = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = x,
                                                I = g;
                                                break
                                            }
                                            I = x
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var S = v.child;
                                if (S !== null) {
                                    v.child = null;
                                    do {
                                        var T = S.sibling;
                                        S.sibling = null,
                                        S = T
                                    } while (S !== null)
                                }
                            }
                            I = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        l.return = o,
                        I = l;
                    else
                        e: for (; I !== null; ) {
                            if (o = I,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    nr(9, o, o.return)
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                f.return = o.return,
                                I = f;
                                break e
                            }
                            I = o.return
                        }
                }
                var d = e.current;
                for (I = d; I !== null; ) {
                    l = I;
                    var p = l.child;
                    if (l.subtreeFlags & 2064 && p !== null)
                        p.return = l,
                        I = p;
                    else
                        e: for (l = d; I !== null; ) {
                            if (s = I,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Wi(9, s)
                                    }
                                } catch (R) {
                                    te(s, s.return, R)
                                }
                            if (s === l) {
                                I = null;
                                break e
                            }
                            var C = s.sibling;
                            if (C !== null) {
                                C.return = s.return,
                                I = C;
                                break e
                            }
                            I = s.return
                        }
                }
                if (W = i,
                Mt(),
                rt && typeof rt.onPostCommitFiberRoot == "function")
                    try {
                        rt.onPostCommitFiberRoot(zi, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            G = n,
            Ve.transition = t
        }
    }
    return !1
}
function Ka(e, t, n) {
    t = On(n, t),
    t = id(e, t, 1),
    e = Pt(e, t, 1),
    t = we(),
    e !== null && (Er(e, 1, t),
    Oe(e, t))
}
function te(e, t, n) {
    if (e.tag === 3)
        Ka(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ka(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
                    e = On(n, e),
                    e = od(t, e, 1),
                    t = Pt(t, e, 1),
                    e = we(),
                    t !== null && (Er(t, 1, e),
                    Oe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Lm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = we(),
    e.pingedLanes |= e.suspendedLanes & n,
    ae === e && (de & n) === n && (oe === 4 || oe === 3 && (de & 130023424) === de && 500 > ne() - xs ? Wt(e, 0) : ks |= n),
    Oe(e, t)
}
function Cd(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ir,
    Ir <<= 1,
    !(Ir & 130023424) && (Ir = 4194304)) : t = 1);
    var n = we();
    e = mt(e, t),
    e !== null && (Er(e, t, n),
    Oe(e, n))
}
function Im(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Cd(e, n)
}
function zm(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(P(314))
    }
    r !== null && r.delete(t),
    Cd(e, n)
}
var Nd;
Nd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ne.current)
            Ce = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ce = !1,
                xm(e, t, n);
            Ce = !!(e.flags & 131072)
        }
    else
        Ce = !1,
        J && t.flags & 1048576 && Rc(t, _i, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ti(e, t),
        e = t.pendingProps;
        var i = En(t, ye.current);
        Sn(t, n),
        i = gs(null, t, r, e, i, n);
        var o = ys();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Te(r) ? (o = !0,
        yi(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ds(t),
        i.updater = Hi,
        t.stateNode = i,
        i._reactInternals = t,
        hl(t, r, e, n),
        t = vl(null, t, r, !0, o, n)) : (t.tag = 0,
        J && o && is(t),
        _e(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ti(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = Dm(r),
            e = Ge(r, e),
            i) {
            case 0:
                t = yl(null, t, r, e, n);
                break e;
            case 1:
                t = Da(null, t, r, e, n);
                break e;
            case 11:
                t = za(null, t, r, e, n);
                break e;
            case 14:
                t = Ma(null, t, r, Ge(r.type, e), n);
                break e
            }
            throw Error(P(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ge(r, i),
        yl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ge(r, i),
        Da(e, t, r, i, n);
    case 3:
        e: {
            if (ud(t),
            e === null)
                throw Error(P(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            zc(e, t),
            ki(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = On(Error(P(423)), t),
                    t = Ua(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = On(Error(P(424)), t),
                    t = Ua(e, t, r, n, i);
                    break e
                } else
                    for (je = Ot(t.stateNode.containerInfo.firstChild),
                    Ae = t,
                    J = !0,
                    Ke = null,
                    n = Lc(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Cn(),
                r === i) {
                    t = ht(e, t, n);
                    break e
                }
                _e(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Mc(t),
        e === null && fl(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        l = i.children,
        sl(r, i) ? l = null : o !== null && sl(r, o) && (t.flags |= 32),
        ad(e, t),
        _e(e, t, l, n),
        t.child;
    case 6:
        return e === null && fl(t),
        null;
    case 13:
        return cd(e, t, n);
    case 4:
        return fs(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Nn(t, null, r, n) : _e(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ge(r, i),
        za(e, t, r, i, n);
    case 7:
        return _e(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return _e(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return _e(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            l = i.value,
            q(wi, r._currentValue),
            r._currentValue = l,
            o !== null)
                if (be(o.value, l)) {
                    if (o.children === i.children && !Ne.current) {
                        t = ht(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var s = o.dependencies;
                        if (s !== null) {
                            l = o.child;
                            for (var a = s.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = dt(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    pl(o.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            l = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (l = o.return,
                            l === null)
                                throw Error(P(341));
                            l.lanes |= n,
                            s = l.alternate,
                            s !== null && (s.lanes |= n),
                            pl(l, n, t),
                            l = o.sibling
                        } else
                            l = o.child;
                        if (l !== null)
                            l.return = o;
                        else
                            for (l = o; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (o = l.sibling,
                                o !== null) {
                                    o.return = l.return,
                                    l = o;
                                    break
                                }
                                l = l.return
                            }
                        o = l
                    }
            _e(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Sn(t, n),
        i = He(i),
        r = r(i),
        t.flags |= 1,
        _e(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ge(r, t.pendingProps),
        i = Ge(r.type, i),
        Ma(e, t, r, i, n);
    case 15:
        return ld(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ge(r, i),
        ti(e, t),
        t.tag = 1,
        Te(r) ? (e = !0,
        yi(t)) : e = !1,
        Sn(t, n),
        rd(t, r, i),
        hl(t, r, i, n),
        vl(null, t, r, !0, e, n);
    case 19:
        return dd(e, t, n);
    case 22:
        return sd(e, t, n)
    }
    throw Error(P(156, t.tag))
}
;
function Td(e, t) {
    return ec(e, t)
}
function Mm(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function $e(e, t, n, r) {
    return new Mm(e,t,n,r)
}
function Ts(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Dm(e) {
    if (typeof e == "function")
        return Ts(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Gl)
            return 11;
        if (e === ql)
            return 14
    }
    return 2
}
function At(e, t) {
    var n = e.alternate;
    return n === null ? (n = $e(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ii(e, t, n, r, i, o) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        Ts(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case ln:
            return Qt(n.children, i, o, t);
        case Ql:
            l = 8,
            i |= 8;
            break;
        case Uo:
            return e = $e(12, n, t, i | 2),
            e.elementType = Uo,
            e.lanes = o,
            e;
        case $o:
            return e = $e(13, n, t, i),
            e.elementType = $o,
            e.lanes = o,
            e;
        case Vo:
            return e = $e(19, n, t, i),
            e.elementType = Vo,
            e.lanes = o,
            e;
        case Mu:
            return Gi(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Iu:
                    l = 10;
                    break e;
                case zu:
                    l = 9;
                    break e;
                case Gl:
                    l = 11;
                    break e;
                case ql:
                    l = 14;
                    break e;
                case _t:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(P(130, e == null ? e : typeof e, ""))
        }
    return t = $e(l, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Qt(e, t, n, r) {
    return e = $e(7, e, r, t),
    e.lanes = n,
    e
}
function Gi(e, t, n, r) {
    return e = $e(22, e, r, t),
    e.elementType = Mu,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ro(e, t, n) {
    return e = $e(6, e, null, t),
    e.lanes = n,
    e
}
function jo(e, t, n) {
    return t = $e(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Um(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = co(0),
    this.expirationTimes = co(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = co(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Os(e, t, n, r, i, o, l, s, a) {
    return e = new Um(e,t,n,s,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = $e(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ds(o),
    e
}
function $m(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: on,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Od(e) {
    if (!e)
        return Lt;
    e = e._reactInternals;
    e: {
        if (en(e) !== e || e.tag !== 1)
            throw Error(P(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Te(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n))
            return Oc(e, n, t)
    }
    return t
}
function Pd(e, t, n, r, i, o, l, s, a) {
    return e = Os(n, r, !0, e, i, o, l, s, a),
    e.context = Od(null),
    n = e.current,
    r = we(),
    i = jt(n),
    o = dt(r, i),
    o.callback = t ?? null,
    Pt(n, o, i),
    e.current.lanes = i,
    Er(e, i, r),
    Oe(e, r),
    e
}
function qi(e, t, n, r) {
    var i = t.current
      , o = we()
      , l = jt(i);
    return n = Od(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = dt(o, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Pt(i, t, l),
    e !== null && (Je(e, i, l, o),
    Xr(e, i, l)),
    l
}
function Ri(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Ya(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Ps(e, t) {
    Ya(e, t),
    (e = e.alternate) && Ya(e, t)
}
function Vm() {
    return null
}
var Rd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Rs(e) {
    this._internalRoot = e
}
Ki.prototype.render = Rs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(P(409));
    qi(e, t, null, null)
}
;
Ki.prototype.unmount = Rs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bt(function() {
            qi(null, e, null, null)
        }),
        t[pt] = null
    }
}
;
function Ki(e) {
    this._internalRoot = e
}
Ki.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = sc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++)
            ;
        St.splice(n, 0, e),
        n === 0 && uc(e)
    }
}
;
function js(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Yi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ja() {}
function Bm(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Ri(l);
                o.call(u)
            }
        }
        var l = Pd(t, r, e, 0, null, !1, !1, "", Ja);
        return e._reactRootContainer = l,
        e[pt] = l.current,
        pr(e.nodeType === 8 ? e.parentNode : e),
        bt(),
        l
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = Ri(a);
            s.call(u)
        }
    }
    var a = Os(e, 0, !1, null, null, !1, !1, "", Ja);
    return e._reactRootContainer = a,
    e[pt] = a.current,
    pr(e.nodeType === 8 ? e.parentNode : e),
    bt(function() {
        qi(t, a, n, r)
    }),
    a
}
function Ji(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var a = Ri(l);
                s.call(a)
            }
        }
        qi(t, l, e, i)
    } else
        l = Bm(n, t, e, i, r);
    return Ri(l)
}
oc = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Kn(t.pendingLanes);
            n !== 0 && (Jl(t, n | 1),
            Oe(t, ne()),
            !(W & 6) && (Pn = ne() + 500,
            Mt()))
        }
        break;
    case 13:
        bt(function() {
            var r = mt(e, 1);
            if (r !== null) {
                var i = we();
                Je(r, e, 1, i)
            }
        }),
        Ps(e, 1)
    }
}
;
bl = function(e) {
    if (e.tag === 13) {
        var t = mt(e, 134217728);
        if (t !== null) {
            var n = we();
            Je(t, e, 134217728, n)
        }
        Ps(e, 134217728)
    }
}
;
lc = function(e) {
    if (e.tag === 13) {
        var t = jt(e)
          , n = mt(e, t);
        if (n !== null) {
            var r = we();
            Je(n, e, t, r)
        }
        Ps(e, t)
    }
}
;
sc = function() {
    return G
}
;
ac = function(e, t) {
    var n = G;
    try {
        return G = e,
        t()
    } finally {
        G = n
    }
}
;
bo = function(e, t, n) {
    switch (t) {
    case "input":
        if (Wo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = $i(r);
                    if (!i)
                        throw Error(P(90));
                    Uu(r),
                    Wo(r, i)
                }
            }
        }
        break;
    case "textarea":
        Vu(e, n);
        break;
    case "select":
        t = n.value,
        t != null && yn(e, !!n.multiple, t, !1)
    }
}
;
Ku = Es;
Yu = bt;
var Hm = {
    usingClientEntryPoint: !1,
    Events: [Nr, cn, $i, Gu, qu, Es]
}
  , Bn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Wm = {
    bundleType: Bn.bundleType,
    version: Bn.version,
    rendererPackageName: Bn.rendererPackageName,
    rendererConfig: Bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Xu(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Bn.findFiberByHostInstance || Vm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gr.isDisabled && Gr.supportsFiber)
        try {
            zi = Gr.inject(Wm),
            rt = Gr
        } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!js(t))
        throw Error(P(200));
    return $m(e, t, null, n)
}
;
ze.createRoot = function(e, t) {
    if (!js(e))
        throw Error(P(299));
    var n = !1
      , r = ""
      , i = Rd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Os(e, 1, !1, null, null, n, !1, r, i),
    e[pt] = t.current,
    pr(e.nodeType === 8 ? e.parentNode : e),
    new Rs(t)
}
;
ze.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","),
        Error(P(268, e)));
    return e = Xu(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ze.flushSync = function(e) {
    return bt(e)
}
;
ze.hydrate = function(e, t, n) {
    if (!Yi(t))
        throw Error(P(200));
    return Ji(null, e, t, !0, n)
}
;
ze.hydrateRoot = function(e, t, n) {
    if (!js(e))
        throw Error(P(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , l = Rd;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = Pd(t, null, e, 1, n ?? null, i, !1, o, l),
    e[pt] = t.current,
    pr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ki(t)
}
;
ze.render = function(e, t, n) {
    if (!Yi(t))
        throw Error(P(200));
    return Ji(null, e, t, !1, n)
}
;
ze.unmountComponentAtNode = function(e) {
    if (!Yi(e))
        throw Error(P(40));
    return e._reactRootContainer ? (bt(function() {
        Ji(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[pt] = null
        })
    }),
    !0) : !1
}
;
ze.unstable_batchedUpdates = Es;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Yi(n))
        throw Error(P(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(P(38));
    return Ji(e, t, n, !1, r)
}
;
ze.version = "18.3.1-next-f1338f8080-20240426";
function jd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)
        } catch (e) {
            console.error(e)
        }
}
jd(),
ju.exports = ze;
var Qm = ju.exports
  , ba = Qm;
Mo.createRoot = ba.createRoot,
Mo.hydrateRoot = ba.hydrateRoot;
function Ad(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Gm} = Object.prototype
  , {getPrototypeOf: As} = Object
  , bi = (e => t => {
    const n = Gm.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Xe = e => (e = e.toLowerCase(),
t => bi(t) === e)
  , Xi = e => t => typeof t === e
  , {isArray: Fn} = Array
  , kr = Xi("undefined");
function qm(e) {
    return e !== null && !kr(e) && e.constructor !== null && !kr(e.constructor) && Fe(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Fd = Xe("ArrayBuffer");
function Km(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Fd(e.buffer),
    t
}
const Ym = Xi("string")
  , Fe = Xi("function")
  , Ld = Xi("number")
  , Zi = e => e !== null && typeof e == "object"
  , Jm = e => e === !0 || e === !1
  , oi = e => {
    if (bi(e) !== "object")
        return !1;
    const t = As(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , bm = Xe("Date")
  , Xm = Xe("File")
  , Zm = Xe("Blob")
  , eh = Xe("FileList")
  , th = e => Zi(e) && Fe(e.pipe)
  , nh = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || Fe(e.append) && ((t = bi(e)) === "formdata" || t === "object" && Fe(e.toString) && e.toString() === "[object FormData]"))
}
  , rh = Xe("URLSearchParams")
  , [ih,oh,lh,sh] = ["ReadableStream", "Request", "Response", "Headers"].map(Xe)
  , ah = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Or(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, i;
    if (typeof e != "object" && (e = [e]),
    Fn(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , l = o.length;
        let s;
        for (r = 0; r < l; r++)
            s = o[r],
            t.call(null, e[s], s, e)
    }
}
function Id(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
const Ht = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , zd = e => !kr(e) && e !== Ht;
function Rl() {
    const {caseless: e} = zd(this) && this || {}
      , t = {}
      , n = (r, i) => {
        const o = e && Id(t, i) || i;
        oi(t[o]) && oi(r) ? t[o] = Rl(t[o], r) : oi(r) ? t[o] = Rl({}, r) : Fn(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && Or(arguments[r], n);
    return t
}
const uh = (e, t, n, {allOwnKeys: r}={}) => (Or(t, (i, o) => {
    n && Fe(i) ? e[o] = Ad(i, n) : e[o] = i
}
, {
    allOwnKeys: r
}),
e)
  , ch = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , dh = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , fh = (e, t, n, r) => {
    let i, o, l;
    const s = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        o = i.length; o-- > 0; )
            l = i[o],
            (!r || r(l, e, t)) && !s[l] && (t[l] = e[l],
            s[l] = !0);
        e = n !== !1 && As(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , ph = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , mh = e => {
    if (!e)
        return null;
    if (Fn(e))
        return e;
    let t = e.length;
    if (!Ld(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , hh = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && As(Uint8Array))
  , gh = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1])
    }
}
  , yh = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , vh = Xe("HTMLFormElement")
  , _h = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
    return r.toUpperCase() + i
})
  , Xa = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , wh = Xe("RegExp")
  , Md = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Or(n, (i, o) => {
        let l;
        (l = t(i, o, e)) !== !1 && (r[o] = l || i)
    }
    ),
    Object.defineProperties(e, r)
}
  , Sh = e => {
    Md(e, (t, n) => {
        if (Fe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (Fe(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , kh = (e, t) => {
    const n = {}
      , r = i => {
        i.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return Fn(e) ? r(e) : r(String(e).split(t)),
    n
}
  , xh = () => {}
  , Eh = (e, t) => e != null && Number.isFinite(e = +e) ? e : t
  , Ao = "abcdefghijklmnopqrstuvwxyz"
  , Za = "0123456789"
  , Dd = {
    DIGIT: Za,
    ALPHA: Ao,
    ALPHA_DIGIT: Ao + Ao.toUpperCase() + Za
}
  , Ch = (e=16, t=Dd.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function Nh(e) {
    return !!(e && Fe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Th = e => {
    const t = new Array(10)
      , n = (r, i) => {
        if (Zi(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[i] = r;
                const o = Fn(r) ? [] : {};
                return Or(r, (l, s) => {
                    const a = n(l, i + 1);
                    !kr(a) && (o[s] = a)
                }
                ),
                t[i] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , Oh = Xe("AsyncFunction")
  , Ph = e => e && (Zi(e) || Fe(e)) && Fe(e.then) && Fe(e.catch)
  , Ud = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (Ht.addEventListener("message", ({source: i, data: o}) => {
    i === Ht && o === n && r.length && r.shift()()
}
, !1),
i => {
    r.push(i),
    Ht.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Fe(Ht.postMessage))
  , Rh = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ht) : typeof process < "u" && process.nextTick || Ud
  , E = {
    isArray: Fn,
    isArrayBuffer: Fd,
    isBuffer: qm,
    isFormData: nh,
    isArrayBufferView: Km,
    isString: Ym,
    isNumber: Ld,
    isBoolean: Jm,
    isObject: Zi,
    isPlainObject: oi,
    isReadableStream: ih,
    isRequest: oh,
    isResponse: lh,
    isHeaders: sh,
    isUndefined: kr,
    isDate: bm,
    isFile: Xm,
    isBlob: Zm,
    isRegExp: wh,
    isFunction: Fe,
    isStream: th,
    isURLSearchParams: rh,
    isTypedArray: hh,
    isFileList: eh,
    forEach: Or,
    merge: Rl,
    extend: uh,
    trim: ah,
    stripBOM: ch,
    inherits: dh,
    toFlatObject: fh,
    kindOf: bi,
    kindOfTest: Xe,
    endsWith: ph,
    toArray: mh,
    forEachEntry: gh,
    matchAll: yh,
    isHTMLForm: vh,
    hasOwnProperty: Xa,
    hasOwnProp: Xa,
    reduceDescriptors: Md,
    freezeMethods: Sh,
    toObjectSet: kh,
    toCamelCase: _h,
    noop: xh,
    toFiniteNumber: Eh,
    findKey: Id,
    global: Ht,
    isContextDefined: zd,
    ALPHABET: Dd,
    generateString: Ch,
    isSpecCompliantForm: Nh,
    toJSONObject: Th,
    isAsyncFn: Oh,
    isThenable: Ph,
    setImmediate: Ud,
    asap: Rh
};
function V(e, t, n, r, i) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i,
    this.status = i.status ? i.status : null)
}
E.inherits(V, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: E.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const $d = V.prototype
  , Vd = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Vd[e] = {
        value: e
    }
}
);
Object.defineProperties(V, Vd);
Object.defineProperty($d, "isAxiosError", {
    value: !0
});
V.from = (e, t, n, r, i, o) => {
    const l = Object.create($d);
    return E.toFlatObject(e, l, function(a) {
        return a !== Error.prototype
    }, s => s !== "isAxiosError"),
    V.call(l, e.message, t, n, r, i),
    l.cause = e,
    l.name = e.name,
    o && Object.assign(l, o),
    l
}
;
const jh = null;
function jl(e) {
    return E.isPlainObject(e) || E.isArray(e)
}
function Bd(e) {
    return E.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function eu(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = Bd(i),
        !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}
function Ah(e) {
    return E.isArray(e) && !e.some(jl)
}
const Fh = E.toFlatObject(E, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function eo(e, t, n) {
    if (!E.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = E.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(S, T) {
        return !E.isUndefined(T[S])
    });
    const r = n.metaTokens
      , i = n.visitor || c
      , o = n.dots
      , l = n.indexes
      , a = (n.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(t);
    if (!E.isFunction(i))
        throw new TypeError("visitor must be a function");
    function u(v) {
        if (v === null)
            return "";
        if (E.isDate(v))
            return v.toISOString();
        if (!a && E.isBlob(v))
            throw new V("Blob is not supported. Use a Buffer instead.");
        return E.isArrayBuffer(v) || E.isTypedArray(v) ? a && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v
    }
    function c(v, S, T) {
        let f = v;
        if (v && !T && typeof v == "object") {
            if (E.endsWith(S, "{}"))
                S = r ? S : S.slice(0, -2),
                v = JSON.stringify(v);
            else if (E.isArray(v) && Ah(v) || (E.isFileList(v) || E.endsWith(S, "[]")) && (f = E.toArray(v)))
                return S = Bd(S),
                f.forEach(function(p, C) {
                    !(E.isUndefined(p) || p === null) && t.append(l === !0 ? eu([S], C, o) : l === null ? S : S + "[]", u(p))
                }),
                !1
        }
        return jl(v) ? !0 : (t.append(eu(T, S, o), u(v)),
        !1)
    }
    const m = []
      , g = Object.assign(Fh, {
        defaultVisitor: c,
        convertValue: u,
        isVisitable: jl
    });
    function x(v, S) {
        if (!E.isUndefined(v)) {
            if (m.indexOf(v) !== -1)
                throw Error("Circular reference detected in " + S.join("."));
            m.push(v),
            E.forEach(v, function(f, d) {
                (!(E.isUndefined(f) || f === null) && i.call(t, f, E.isString(d) ? d.trim() : d, S, g)) === !0 && x(f, S ? S.concat(d) : [d])
            }),
            m.pop()
        }
    }
    if (!E.isObject(e))
        throw new TypeError("data must be an object");
    return x(e),
    t
}
function tu(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Fs(e, t) {
    this._pairs = [],
    e && eo(e, this, t)
}
const Hd = Fs.prototype;
Hd.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Hd.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, tu)
    }
    : tu;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
;
function Lh(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Wd(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Lh
      , i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = E.isURLSearchParams(t) ? t.toString() : new Fs(t,n).toString(r),
    o) {
        const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class nu {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        E.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Qd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Ih = typeof URLSearchParams < "u" ? URLSearchParams : Fs
  , zh = typeof FormData < "u" ? FormData : null
  , Mh = typeof Blob < "u" ? Blob : null
  , Dh = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Ih,
        FormData: zh,
        Blob: Mh
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Ls = typeof window < "u" && typeof document < "u"
  , Al = typeof navigator == "object" && navigator || void 0
  , Uh = Ls && (!Al || ["ReactNative", "NativeScript", "NS"].indexOf(Al.product) < 0)
  , $h = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , Vh = Ls && window.location.href || "http://localhost"
  , Bh = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Ls,
    hasStandardBrowserEnv: Uh,
    hasStandardBrowserWebWorkerEnv: $h,
    navigator: Al,
    origin: Vh
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Le = {
    ...Bh,
    ...Dh
};
function Hh(e, t) {
    return eo(e, new Le.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return Le.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function Wh(e) {
    return E.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function Qh(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function Gd(e) {
    function t(n, r, i, o) {
        let l = n[o++];
        if (l === "__proto__")
            return !0;
        const s = Number.isFinite(+l)
          , a = o >= n.length;
        return l = !l && E.isArray(i) ? i.length : l,
        a ? (E.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r,
        !s) : ((!i[l] || !E.isObject(i[l])) && (i[l] = []),
        t(n, r, i[l], o) && E.isArray(i[l]) && (i[l] = Qh(i[l])),
        !s)
    }
    if (E.isFormData(e) && E.isFunction(e.entries)) {
        const n = {};
        return E.forEachEntry(e, (r, i) => {
            t(Wh(r), i, n, 0)
        }
        ),
        n
    }
    return null
}
function Gh(e, t, n) {
    if (E.isString(e))
        try {
            return (t || JSON.parse)(e),
            E.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Pr = {
    transitional: Qd,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , i = r.indexOf("application/json") > -1
          , o = E.isObject(t);
        if (o && E.isHTMLForm(t) && (t = new FormData(t)),
        E.isFormData(t))
            return i ? JSON.stringify(Gd(t)) : t;
        if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t) || E.isReadableStream(t))
            return t;
        if (E.isArrayBufferView(t))
            return t.buffer;
        if (E.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let s;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Hh(t, this.formSerializer).toString();
            if ((s = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return eo(s ? {
                    "files[]": t
                } : t, a && new a, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1),
        Gh(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Pr.transitional
          , r = n && n.forcedJSONParsing
          , i = this.responseType === "json";
        if (E.isResponse(t) || E.isReadableStream(t))
            return t;
        if (t && E.isString(t) && (r && !this.responseType || i)) {
            const l = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (l)
                    throw s.name === "SyntaxError" ? V.from(s, V.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Le.classes.FormData,
        Blob: Le.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Pr.headers[e] = {}
}
);
const qh = E.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Kh = e => {
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function(l) {
        i = l.indexOf(":"),
        n = l.substring(0, i).trim().toLowerCase(),
        r = l.substring(i + 1).trim(),
        !(!n || t[n] && qh[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , ru = Symbol("internals");
function Hn(e) {
    return e && String(e).trim().toLowerCase()
}
function li(e) {
    return e === !1 || e == null ? e : E.isArray(e) ? e.map(li) : String(e)
}
function Yh(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const Jh = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fo(e, t, n, r, i) {
    if (E.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    !!E.isString(t)) {
        if (E.isString(r))
            return t.indexOf(r) !== -1;
        if (E.isRegExp(r))
            return r.test(t)
    }
}
function bh(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Xh(e, t) {
    const n = E.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, l) {
                return this[r].call(this, t, i, o, l)
            },
            configurable: !0
        })
    }
    )
}
class Pe {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;
        function o(s, a, u) {
            const c = Hn(a);
            if (!c)
                throw new Error("header name must be a non-empty string");
            const m = E.findKey(i, c);
            (!m || i[m] === void 0 || u === !0 || u === void 0 && i[m] !== !1) && (i[m || a] = li(s))
        }
        const l = (s, a) => E.forEach(s, (u, c) => o(u, c, a));
        if (E.isPlainObject(t) || t instanceof this.constructor)
            l(t, n);
        else if (E.isString(t) && (t = t.trim()) && !Jh(t))
            l(Kh(t), n);
        else if (E.isHeaders(t))
            for (const [s,a] of t.entries())
                o(a, s, r);
        else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = Hn(t),
        t) {
            const r = E.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return Yh(i);
                if (E.isFunction(n))
                    return n.call(this, i, r);
                if (E.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Hn(t),
        t) {
            const r = E.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Fo(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function o(l) {
            if (l = Hn(l),
            l) {
                const s = E.findKey(r, l);
                s && (!n || Fo(r, r[s], s, n)) && (delete r[s],
                i = !0)
            }
        }
        return E.isArray(t) ? t.forEach(o) : o(t),
        i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , i = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || Fo(this, this[o], o, t, !0)) && (delete this[o],
            i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this
          , r = {};
        return E.forEach(this, (i, o) => {
            const l = E.findKey(r, o);
            if (l) {
                n[l] = li(i),
                delete n[o];
                return
            }
            const s = t ? bh(o) : String(o).trim();
            s !== o && delete n[o],
            n[s] = li(i),
            r[s] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return E.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && E.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)),
        r
    }
    static accessor(t) {
        const r = (this[ru] = this[ru] = {
            accessors: {}
        }).accessors
          , i = this.prototype;
        function o(l) {
            const s = Hn(l);
            r[s] || (Xh(i, l),
            r[s] = !0)
        }
        return E.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Pe.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
E.freezeMethods(Pe);
function Lo(e, t) {
    const n = this || Pr
      , r = t || n
      , i = Pe.from(r.headers);
    let o = r.data;
    return E.forEach(e, function(s) {
        o = s.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
}
function qd(e) {
    return !!(e && e.__CANCEL__)
}
function Ln(e, t, n) {
    V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
E.inherits(Ln, V, {
    __CANCEL__: !0
});
function Kd(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new V("Request failed with status code " + n.status,[V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function Zh(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function e0(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let i = 0, o = 0, l;
    return t = t !== void 0 ? t : 1e3,
    function(a) {
        const u = Date.now()
          , c = r[o];
        l || (l = u),
        n[i] = a,
        r[i] = u;
        let m = o
          , g = 0;
        for (; m !== i; )
            g += n[m++],
            m = m % e;
        if (i = (i + 1) % e,
        i === o && (o = (o + 1) % e),
        u - l < t)
            return;
        const x = c && u - c;
        return x ? Math.round(g * 1e3 / x) : void 0
    }
}
function t0(e, t) {
    let n = 0, r = 1e3 / t, i, o;
    const l = (u, c=Date.now()) => {
        n = c,
        i = null,
        o && (clearTimeout(o),
        o = null),
        e.apply(null, u)
    }
    ;
    return [ (...u) => {
        const c = Date.now()
          , m = c - n;
        m >= r ? l(u, c) : (i = u,
        o || (o = setTimeout( () => {
            o = null,
            l(i)
        }
        , r - m)))
    }
    , () => i && l(i)]
}
const ji = (e, t, n=3) => {
    let r = 0;
    const i = e0(50, 250);
    return t0(o => {
        const l = o.loaded
          , s = o.lengthComputable ? o.total : void 0
          , a = l - r
          , u = i(a)
          , c = l <= s;
        r = l;
        const m = {
            loaded: l,
            total: s,
            progress: s ? l / s : void 0,
            bytes: a,
            rate: u || void 0,
            estimated: u && s && c ? (s - l) / u : void 0,
            event: o,
            lengthComputable: s != null,
            [t ? "download" : "upload"]: !0
        };
        e(m)
    }
    , n)
}
  , iu = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , ou = e => (...t) => E.asap( () => e(...t))
  , n0 = Le.hasStandardBrowserEnv ? function() {
    const t = Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function i(o) {
        let l = o;
        return t && (n.setAttribute("href", l),
        l = n.href),
        n.setAttribute("href", l),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = i(window.location.href),
    function(l) {
        const s = E.isString(l) ? i(l) : l;
        return s.protocol === r.protocol && s.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , r0 = Le.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, o) {
        const l = [e + "=" + encodeURIComponent(t)];
        E.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
        E.isString(r) && l.push("path=" + r),
        E.isString(i) && l.push("domain=" + i),
        o === !0 && l.push("secure"),
        document.cookie = l.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function i0(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function o0(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Yd(e, t) {
    return e && !i0(t) ? o0(e, t) : t
}
const lu = e => e instanceof Pe ? {
    ...e
} : e;
function Xt(e, t) {
    t = t || {};
    const n = {};
    function r(u, c, m) {
        return E.isPlainObject(u) && E.isPlainObject(c) ? E.merge.call({
            caseless: m
        }, u, c) : E.isPlainObject(c) ? E.merge({}, c) : E.isArray(c) ? c.slice() : c
    }
    function i(u, c, m) {
        if (E.isUndefined(c)) {
            if (!E.isUndefined(u))
                return r(void 0, u, m)
        } else
            return r(u, c, m)
    }
    function o(u, c) {
        if (!E.isUndefined(c))
            return r(void 0, c)
    }
    function l(u, c) {
        if (E.isUndefined(c)) {
            if (!E.isUndefined(u))
                return r(void 0, u)
        } else
            return r(void 0, c)
    }
    function s(u, c, m) {
        if (m in t)
            return r(u, c);
        if (m in e)
            return r(void 0, u)
    }
    const a = {
        url: o,
        method: o,
        data: o,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        withXSRFToken: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: s,
        headers: (u, c) => i(lu(u), lu(c), !0)
    };
    return E.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
        const m = a[c] || i
          , g = m(e[c], t[c], c);
        E.isUndefined(g) && m !== s || (n[c] = g)
    }),
    n
}
const Jd = e => {
    const t = Xt({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: l, auth: s} = t;
    t.headers = l = Pe.from(l),
    t.url = Wd(Yd(t.baseURL, t.url), e.params, e.paramsSerializer),
    s && l.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")));
    let a;
    if (E.isFormData(n)) {
        if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
            l.setContentType(void 0);
        else if ((a = l.getContentType()) !== !1) {
            const [u,...c] = a ? a.split(";").map(m => m.trim()).filter(Boolean) : [];
            l.setContentType([u || "multipart/form-data", ...c].join("; "))
        }
    }
    if (Le.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(t)),
    r || r !== !1 && n0(t.url))) {
        const u = i && o && r0.read(o);
        u && l.set(i, u)
    }
    return t
}
  , l0 = typeof XMLHttpRequest < "u"
  , s0 = l0 && function(e) {
    return new Promise(function(n, r) {
        const i = Jd(e);
        let o = i.data;
        const l = Pe.from(i.headers).normalize();
        let {responseType: s, onUploadProgress: a, onDownloadProgress: u} = i, c, m, g, x, v;
        function S() {
            x && x(),
            v && v(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c)
        }
        let T = new XMLHttpRequest;
        T.open(i.method.toUpperCase(), i.url, !0),
        T.timeout = i.timeout;
        function f() {
            if (!T)
                return;
            const p = Pe.from("getAllResponseHeaders"in T && T.getAllResponseHeaders())
              , R = {
                data: !s || s === "text" || s === "json" ? T.responseText : T.response,
                status: T.status,
                statusText: T.statusText,
                headers: p,
                config: e,
                request: T
            };
            Kd(function(A) {
                n(A),
                S()
            }, function(A) {
                r(A),
                S()
            }, R),
            T = null
        }
        "onloadend"in T ? T.onloadend = f : T.onreadystatechange = function() {
            !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(f)
        }
        ,
        T.onabort = function() {
            T && (r(new V("Request aborted",V.ECONNABORTED,e,T)),
            T = null)
        }
        ,
        T.onerror = function() {
            r(new V("Network Error",V.ERR_NETWORK,e,T)),
            T = null
        }
        ,
        T.ontimeout = function() {
            let C = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
            const R = i.transitional || Qd;
            i.timeoutErrorMessage && (C = i.timeoutErrorMessage),
            r(new V(C,R.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,e,T)),
            T = null
        }
        ,
        o === void 0 && l.setContentType(null),
        "setRequestHeader"in T && E.forEach(l.toJSON(), function(C, R) {
            T.setRequestHeader(R, C)
        }),
        E.isUndefined(i.withCredentials) || (T.withCredentials = !!i.withCredentials),
        s && s !== "json" && (T.responseType = i.responseType),
        u && ([g,v] = ji(u, !0),
        T.addEventListener("progress", g)),
        a && T.upload && ([m,x] = ji(a),
        T.upload.addEventListener("progress", m),
        T.upload.addEventListener("loadend", x)),
        (i.cancelToken || i.signal) && (c = p => {
            T && (r(!p || p.type ? new Ln(null,e,T) : p),
            T.abort(),
            T = null)
        }
        ,
        i.cancelToken && i.cancelToken.subscribe(c),
        i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
        const d = Zh(i.url);
        if (d && Le.protocols.indexOf(d) === -1) {
            r(new V("Unsupported protocol " + d + ":",V.ERR_BAD_REQUEST,e));
            return
        }
        T.send(o || null)
    }
    )
}
  , a0 = (e, t) => {
    let n = new AbortController, r;
    const i = function(a) {
        if (!r) {
            r = !0,
            l();
            const u = a instanceof Error ? a : this.reason;
            n.abort(u instanceof V ? u : new Ln(u instanceof Error ? u.message : u))
        }
    };
    let o = t && setTimeout( () => {
        i(new V(`timeout ${t} of ms exceeded`,V.ETIMEDOUT))
    }
    , t);
    const l = () => {
        e && (o && clearTimeout(o),
        o = null,
        e.forEach(a => {
            a && (a.removeEventListener ? a.removeEventListener("abort", i) : a.unsubscribe(i))
        }
        ),
        e = null)
    }
    ;
    e.forEach(a => a && a.addEventListener && a.addEventListener("abort", i));
    const {signal: s} = n;
    return s.unsubscribe = l,
    [s, () => {
        o && clearTimeout(o),
        o = null
    }
    ]
}
  , u0 = function*(e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
        yield e;
        return
    }
    let r = 0, i;
    for (; r < n; )
        i = r + t,
        yield e.slice(r, i),
        r = i
}
  , c0 = async function*(e, t, n) {
    for await(const r of e)
        yield*u0(ArrayBuffer.isView(r) ? r : await n(String(r)), t)
}
  , su = (e, t, n, r, i) => {
    const o = c0(e, t, i);
    let l = 0, s, a = u => {
        s || (s = !0,
        r && r(u))
    }
    ;
    return new ReadableStream({
        async pull(u) {
            try {
                const {done: c, value: m} = await o.next();
                if (c) {
                    a(),
                    u.close();
                    return
                }
                let g = m.byteLength;
                if (n) {
                    let x = l += g;
                    n(x)
                }
                u.enqueue(new Uint8Array(m))
            } catch (c) {
                throw a(c),
                c
            }
        },
        cancel(u) {
            return a(u),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , to = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , bd = to && typeof ReadableStream == "function"
  , Fl = to && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , Xd = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , d0 = bd && Xd( () => {
    let e = !1;
    const t = new Request(Le.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , au = 64 * 1024
  , Ll = bd && Xd( () => E.isReadableStream(new Response("").body))
  , Ai = {
    stream: Ll && (e => e.body)
};
to && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Ai[t] && (Ai[t] = E.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new V(`Response type '${t}' is not supported`,V.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const f0 = async e => {
    if (e == null)
        return 0;
    if (E.isBlob(e))
        return e.size;
    if (E.isSpecCompliantForm(e))
        return (await new Request(e).arrayBuffer()).byteLength;
    if (E.isArrayBufferView(e) || E.isArrayBuffer(e))
        return e.byteLength;
    if (E.isURLSearchParams(e) && (e = e + ""),
    E.isString(e))
        return (await Fl(e)).byteLength
}
  , p0 = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? f0(t)
}
  , m0 = to && (async e => {
    let {url: t, method: n, data: r, signal: i, cancelToken: o, timeout: l, onDownloadProgress: s, onUploadProgress: a, responseType: u, headers: c, withCredentials: m="same-origin", fetchOptions: g} = Jd(e);
    u = u ? (u + "").toLowerCase() : "text";
    let[x,v] = i || o || l ? a0([i, o], l) : [], S, T;
    const f = () => {
        !S && setTimeout( () => {
            x && x.unsubscribe()
        }
        ),
        S = !0
    }
    ;
    let d;
    try {
        if (a && d0 && n !== "get" && n !== "head" && (d = await p0(c, r)) !== 0) {
            let A = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), L;
            if (E.isFormData(r) && (L = A.headers.get("content-type")) && c.setContentType(L),
            A.body) {
                const [M,U] = iu(d, ji(ou(a)));
                r = su(A.body, au, M, U, Fl)
            }
        }
        E.isString(m) || (m = m ? "include" : "omit");
        const p = "credentials"in Request.prototype;
        T = new Request(t,{
            ...g,
            signal: x,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: p ? m : void 0
        });
        let C = await fetch(T);
        const R = Ll && (u === "stream" || u === "response");
        if (Ll && (s || R)) {
            const A = {};
            ["status", "statusText", "headers"].forEach(le => {
                A[le] = C[le]
            }
            );
            const L = E.toFiniteNumber(C.headers.get("content-length"))
              , [M,U] = s && iu(L, ji(ou(s), !0)) || [];
            C = new Response(su(C.body, au, M, () => {
                U && U(),
                R && f()
            }
            , Fl),A)
        }
        u = u || "text";
        let j = await Ai[E.findKey(Ai, u) || "text"](C, e);
        return !R && f(),
        v && v(),
        await new Promise( (A, L) => {
            Kd(A, L, {
                data: j,
                headers: Pe.from(C.headers),
                status: C.status,
                statusText: C.statusText,
                config: e,
                request: T
            })
        }
        )
    } catch (p) {
        throw f(),
        p && p.name === "TypeError" && /fetch/i.test(p.message) ? Object.assign(new V("Network Error",V.ERR_NETWORK,e,T), {
            cause: p.cause || p
        }) : V.from(p, p && p.code, e, T)
    }
}
)
  , Il = {
    http: jh,
    xhr: s0,
    fetch: m0
};
E.forEach(Il, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const uu = e => `- ${e}`
  , h0 = e => E.isFunction(e) || e === null || e === !1
  , Zd = {
    getAdapter: e => {
        e = E.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const i = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let l;
            if (r = n,
            !h0(n) && (r = Il[(l = String(n)).toLowerCase()],
            r === void 0))
                throw new V(`Unknown adapter '${l}'`);
            if (r)
                break;
            i[l || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(i).map( ([s,a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
            let l = t ? o.length > 1 ? `since :
` + o.map(uu).join(`
`) : " " + uu(o[0]) : "as no adapter specified";
            throw new V("There is no suitable adapter to dispatch the request " + l,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: Il
};
function Io(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Ln(null,e)
}
function cu(e) {
    return Io(e),
    e.headers = Pe.from(e.headers),
    e.data = Lo.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Zd.getAdapter(e.adapter || Pr.adapter)(e).then(function(r) {
        return Io(e),
        r.data = Lo.call(e, e.transformResponse, r),
        r.headers = Pe.from(r.headers),
        r
    }, function(r) {
        return qd(r) || (Io(e),
        r && r.response && (r.response.data = Lo.call(e, e.transformResponse, r.response),
        r.response.headers = Pe.from(r.response.headers))),
        Promise.reject(r)
    })
}
const ef = "1.7.5"
  , Is = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    Is[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const du = {};
Is.transitional = function(t, n, r) {
    function i(o, l) {
        return "[Axios v" + ef + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "")
    }
    return (o, l, s) => {
        if (t === !1)
            throw new V(i(l, " has been removed" + (n ? " in " + n : "")),V.ERR_DEPRECATED);
        return n && !du[l] && (du[l] = !0,
        console.warn(i(l, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, l, s) : !0
    }
}
;
function g0(e, t, n) {
    if (typeof e != "object")
        throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const o = r[i]
          , l = t[o];
        if (l) {
            const s = e[o]
              , a = s === void 0 || l(s, o, e);
            if (a !== !0)
                throw new V("option " + o + " must be " + a,V.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new V("Unknown option " + o,V.ERR_BAD_OPTION)
    }
}
const zl = {
    assertOptions: g0,
    validators: Is
}
  , vt = zl.validators;
class Gt {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new nu,
            response: new nu
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Xt(this.defaults, n);
        const {transitional: r, paramsSerializer: i, headers: o} = n;
        r !== void 0 && zl.assertOptions(r, {
            silentJSONParsing: vt.transitional(vt.boolean),
            forcedJSONParsing: vt.transitional(vt.boolean),
            clarifyTimeoutError: vt.transitional(vt.boolean)
        }, !1),
        i != null && (E.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : zl.assertOptions(i, {
            encode: vt.function,
            serialize: vt.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let l = o && E.merge(o.common, o[n.method]);
        o && E.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v => {
            delete o[v]
        }
        ),
        n.headers = Pe.concat(l, o);
        const s = [];
        let a = !0;
        this.interceptors.request.forEach(function(S) {
            typeof S.runWhen == "function" && S.runWhen(n) === !1 || (a = a && S.synchronous,
            s.unshift(S.fulfilled, S.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(S) {
            u.push(S.fulfilled, S.rejected)
        });
        let c, m = 0, g;
        if (!a) {
            const v = [cu.bind(this), void 0];
            for (v.unshift.apply(v, s),
            v.push.apply(v, u),
            g = v.length,
            c = Promise.resolve(n); m < g; )
                c = c.then(v[m++], v[m++]);
            return c
        }
        g = s.length;
        let x = n;
        for (m = 0; m < g; ) {
            const v = s[m++]
              , S = s[m++];
            try {
                x = v(x)
            } catch (T) {
                S.call(this, T);
                break
            }
        }
        try {
            c = cu.call(this, x)
        } catch (v) {
            return Promise.reject(v)
        }
        for (m = 0,
        g = u.length; m < g; )
            c = c.then(u[m++], u[m++]);
        return c
    }
    getUri(t) {
        t = Xt(this.defaults, t);
        const n = Yd(t.baseURL, t.url);
        return Wd(n, t.params, t.paramsSerializer)
    }
}
E.forEach(["delete", "get", "head", "options"], function(t) {
    Gt.prototype[t] = function(n, r) {
        return this.request(Xt(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
E.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, l, s) {
            return this.request(Xt(s || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: l
            }))
        }
    }
    Gt.prototype[t] = n(),
    Gt.prototype[t + "Form"] = n(!0)
});
class zs {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(i => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](i);
            r._listeners = null
        }
        ),
        this.promise.then = i => {
            let o;
            const l = new Promise(s => {
                r.subscribe(s),
                o = s
            }
            ).then(i);
            return l.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            l
        }
        ,
        t(function(o, l, s) {
            r.reason || (r.reason = new Ln(o,l,s),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new zs(function(i) {
                t = i
            }
            ),
            cancel: t
        }
    }
}
function y0(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function v0(e) {
    return E.isObject(e) && e.isAxiosError === !0
}
const Ml = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Ml).forEach( ([e,t]) => {
    Ml[t] = e
}
);
function tf(e) {
    const t = new Gt(e)
      , n = Ad(Gt.prototype.request, t);
    return E.extend(n, Gt.prototype, t, {
        allOwnKeys: !0
    }),
    E.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(i) {
        return tf(Xt(e, i))
    }
    ,
    n
}
const ee = tf(Pr);
ee.Axios = Gt;
ee.CanceledError = Ln;
ee.CancelToken = zs;
ee.isCancel = qd;
ee.VERSION = ef;
ee.toFormData = eo;
ee.AxiosError = V;
ee.Cancel = ee.CanceledError;
ee.all = function(t) {
    return Promise.all(t)
}
;
ee.spread = y0;
ee.isAxiosError = v0;
ee.mergeConfig = Xt;
ee.AxiosHeaders = Pe;
ee.formToJSON = e => Gd(E.isHTMLForm(e) ? new FormData(e) : e);
ee.getAdapter = Zd.getAdapter;
ee.HttpStatusCode = Ml;
ee.default = ee;
const _0 = "/assets/cardle-logo-CFmEPmF4.png"
  , w0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%230f0a10}%3c/style%3e%3cpath%20d='M224.1%20141c-63.6%200-114.9%2051.3-114.9%20114.9s51.3%20114.9%20114.9%20114.9S339%20319.5%20339%20255.9%20287.7%20141%20224.1%20141zm0%20189.6c-41.1%200-74.7-33.5-74.7-74.7s33.5-74.7%2074.7-74.7%2074.7%2033.5%2074.7%2074.7-33.6%2074.7-74.7%2074.7zm146.4-194.3c0%2014.9-12%2026.8-26.8%2026.8-14.9%200-26.8-12-26.8-26.8s12-26.8%2026.8-26.8%2026.8%2012%2026.8%2026.8zm76.1%2027.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9%200-35.8%201.7-67.6%209.9-93.9%2036.1s-34.4%2058-36.2%2093.9c-2.1%2037-2.1%20147.9%200%20184.9%201.7%2035.9%209.9%2067.7%2036.2%2093.9s58%2034.4%2093.9%2036.2c37%202.1%20147.9%202.1%20184.9%200%2035.9-1.7%2067.7-9.9%2093.9-36.2%2026.2-26.2%2034.4-58%2036.2-93.9%202.1-37%202.1-147.8%200-184.8zM398.8%20388c-7.8%2019.6-22.9%2034.7-42.6%2042.6-29.5%2011.7-99.5%209-132.1%209s-102.7%202.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7%209-132.1c7.8-19.6%2022.9-34.7%2042.6-42.6%2029.5-11.7%2099.5-9%20132.1-9s102.7-2.6%20132.1%209c19.6%207.8%2034.7%2022.9%2042.6%2042.6%2011.7%2029.5%209%2099.5%209%20132.1s2.7%20102.7-9%20132.1z'/%3e%3c/svg%3e"
  , nf = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20320%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%230f0a10}%3c/style%3e%3cpath%20d='M80%20160c0-35.3%2028.7-64%2064-64h32c35.3%200%2064%2028.7%2064%2064v3.6c0%2021.8-11.1%2042.1-29.4%2053.8l-42.2%2027.1c-25.2%2016.2-40.4%2044.1-40.4%2074V320c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32v-1.4c0-8.2%204.2-15.8%2011-20.2l42.2-27.1c36.6-23.6%2058.8-64.1%2058.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3%2032%2016%2089.3%2016%20160c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32zm80%20320a40%2040%200%201%200%200-80%2040%2040%200%201%200%200%2080z'/%3e%3c/svg%3e";
function S0({handleClick: e}) {
    return h.jsxs("nav", {
        className: "nav",
        children: [h.jsx("a", {
            href: "https://boxbox.autos/",
            target: "blank",
            className: "nav__header--link",
            children: h.jsx("img", {
                className: "nav__header ",
                src: _0,
                alt: "cardle"
            })
        }), h.jsxs("div", {
            className: "nav__links",
            children: [h.jsx("a", {
                href: "https://www.instagram.com/play_cardle",
                target: "blank",
                className: "nav__link",
                children: h.jsx("img", {
                    src: w0,
                    alt: "instagram icon",
                    className: "nav__icon"
                })
            }), h.jsx("div", {
                className: "nav__link",
                onClick: () => e(!0),
                children: h.jsx("img", {
                    src: nf,
                    alt: "question icon",
                    className: "nav__icon"
                })
            })]
        })]
    })
}
const rf = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20384%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%230f0a10}%3c/style%3e%3cpath%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e";
function k0({handleClick: e}) {
    return h.jsx("div", {
        className: "modal",
        onClick: () => e(!1),
        children: h.jsxs("section", {
            className: "modal__info",
            children: [h.jsxs("div", {
                className: "modal__header",
                children: [h.jsx("img", {
                    src: nf,
                    alt: "question mark",
                    className: "modal__icon",
                    onClick: () => e(!1)
                }), h.jsx("h1", {
                    className: "modal__header-text",
                    children: "Welcome to Cardle!"
                }), h.jsx("img", {
                    src: rf,
                    alt: "question mark",
                    className: "modal__icon",
                    onClick: () => e(!1)
                })]
            }), h.jsxs("section", {
                className: "modal__instructions",
                children: [h.jsx("h2", {
                    className: "modal__subheading",
                    children: "How to Play"
                }), h.jsxs("ul", {
                    children: [h.jsx("li", {
                        children: "You have 5 tries to correctly identify the pictured car’s make, model, and year Each category (make, model, and year) is worth 1 point"
                    }), h.jsx("li", {
                        children: "After each guess, the picture will zoom out, revealing more of the car"
                    }), h.jsxs("li", {
                        children: ["Your current score is multiplied by the score multiplier, and the multiplier goes down by 1 after each incorrect guess", h.jsx("ul", {
                            children: h.jsx("li", {
                                children: "For example, if you guess the make, model, and year correctly on your first attempt you will score 15 points total (1 for each make, model, and year multiplied by 5). If you guess the make, model, and year correctly on your second attempt you will score 12 points, and so on"
                            })
                        })]
                    }), h.jsxs("li", {
                        children: ["The Year input counts a correct score as one that is within +/- 2 of the pictured car’s year", h.jsx("ul", {
                            children: h.jsx("li", {
                                children: "For example, if the pictured car’s year is 2000, any guess from 1998 - 2002 will be considered correct"
                            })
                        })]
                    }), h.jsx("li", {
                        children: "You may enlarge the picture by tapping it"
                    })]
                }), h.jsx("h2", {
                    className: "modal__subheading",
                    children: "User Stats"
                }), h.jsx("ul", {
                    children: h.jsx("li", {
                        children: "Play Cardle on the same device & browser each day to keep your streak and increase your total points from all previous games. Soon, we’ll add a leaderboard for all users to see how they stack up!"
                    })
                }), h.jsx("h2", {
                    className: "modal__subheading",
                    children: "Contact Us"
                }), h.jsx("ul", {
                    children: h.jsx("li", {
                        children: "If you have feedback, questions, or concerns, please contact us at cardle.game@gmail.com"
                    })
                })]
            })]
        })
    })
}
const x0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%230f0a10}%3c/style%3e%3cpath%20d='M246.6%209.4c-12.5-12.5-32.8-12.5-45.3%200l-128%20128c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20109.3V320c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32V109.3l73.4%2073.4c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3l-128-128zM64%20352c0-17.7-14.3-32-32-32s-32%2014.3-32%2032v64c0%2053%2043%2096%2096%2096H352c53%200%2096-43%2096-96V352c0-17.7-14.3-32-32-32s-32%2014.3-32%2032v64c0%2017.7-14.3%2032-32%2032H96c-17.7%200-32-14.3-32-32V352z'/%3e%3c/svg%3e"
  , E0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2020%2024'%3e%3cpath%20fill='%23000000'%20d='M18.535%208.998a16.637%2016.637%200%200%200-2.513-2.734l-.02-.017a.383.383%200%200%200-.477-.077l.002-.001a.332.332%200%200%200-.174.374v-.002l-.014-.009c.499.919.796%202.012.804%203.173v.002c.008.71-.037%201.207-.038%201.216a4.32%204.32%200%200%201-.058.289c-.059.289-.453%201.141-1.011.907s-.592-1.129-.592-1.129h-.008a13.76%2013.76%200%200%200-4.468-9.452l-.011-.01l-.005-.005l-.005-.005A10.687%2010.687%200%200%200%208.306.324l-.05-.027a1.292%201.292%200%200%201-.145-.082l.006.003a1.424%201.424%200%200%200-.224-.115L7.882.099c-.05-.026-.102-.046-.156-.07a.421.421%200%200%200-.579.231l-.001.003a2.47%202.47%200%200%200%20.196%201.16l-.006-.016C7.995%203.072%208.378%205%208.378%207.018c0%201.202-.136%202.372-.392%203.496l.02-.105a1.53%201.53%200%200%201-.942%201.054l-.01.003a1.272%201.272%200%200%201-1.317-.837l-.003-.009c-.026-.072-.058-.139-.078-.217v-.014c-.482-1.718.109-4.291.522-5.725c.277-1.061-1.025%200-1.025%200h-.005c-.256.216-.532.46-.822.73v-.01c-.367.336-.852.802-1.351%201.335c-.27.289-3.869%204.249-2.747%209.658c1.113%204.406%205.042%207.615%209.72%207.615c5.081%200%209.278-3.786%209.924-8.69l.005-.051c.024-.199.046-.397.056-.594c.005-.062.006-.127.009-.192a10.271%2010.271%200%200%200-1.43-5.515l.026.048z'%3e%3c/path%3e%3c/svg%3e";
function C0({result: e, round: t, score: n, total: r, allTimeScore: i, streak: o, imageFull: l, answer: s, closeModal: a}) {
    const [u,c] = $.useState(!1);
    function m() {
        if (n[5].make !== null && n[5].model !== null && n[5].year !== null)
            return !0
    }
    function g(S) {
        let T = `Cardle ${m() ? 5 : t - 1}/5
${o > 0 ? "Streak " + o + `🔥
` : ""}${i > 0 ? "Total Score " + i : ""}
`;
        for (const f in S)
            if (S.hasOwnProperty(f)) {
                const {make: d, model: p, year: C} = S[f];
                d !== null && p !== null && C !== null && (T += `${d ? "🟢" : "🔴"} ${p ? "🟢" : "🔴"} ${C ? "🟢" : "🔴"}
`)
            }
        return T += "https://cardle.boxbox.autos",
        T
    }
    function x(S) {
        if (n[S].make !== null && n[S].model !== null && n[S].year !== null)
            return !0
    }
    function v() {
        const S = {
            text: g(n)
        };
        navigator.share ? navigator.share(S).then( () => {
            console.log(`thanks for sharing 
${S.text} `)
        }
        ).catch(T => {
            console.error(T)
        }
        ) : navigator.clipboard ? navigator.clipboard.writeText(S.text).then( () => {
            console.log(`copied to clipboard 

 ${S.text} `),
            c(!0),
            setTimeout( () => {
                c(!1)
            }
            , 2e3)
        }
        ).catch(T => {
            console.error(T)
        }
        ) : console.error(`score not shared
`, S.text)
    }
    return h.jsx("div", {
        className: "result",
        children: h.jsxs("div", {
            className: "result__modal",
            children: [h.jsx("img", {
                src: rf,
                alt: "exit button",
                className: "result__exit",
                onClick: a
            }), h.jsx("h1", {
                className: "result__title",
                children: e === "win" ? "WINNER!" : "BETTER LUCK NEXT TIME"
            }), h.jsx("p", {
                className: "result__answer",
                children: `${s.make} ${s.model} ${s.answerYear ? s.answerYear : ""}`
            }), h.jsxs("div", {
                className: "result__photo-container",
                children: [h.jsx("img", {
                    src: l && l.url,
                    alt: "full car ",
                    className: "result__image"
                }), s.photoCredit && h.jsx("a", {
                    href: s.photoCredit,
                    target: "_blank",
                    className: "result__photoCredit",
                    children: "photo cred"
                })]
            }), h.jsxs("div", {
                className: "result__headings",
                children: [h.jsx("h2", {
                    className: "result__heading",
                    children: "Make"
                }), h.jsx("h2", {
                    className: "result__heading",
                    children: "Model"
                }), h.jsx("h2", {
                    className: "result__heading",
                    children: "Year"
                })]
            }), h.jsxs("section", {
                className: "result__light-container ",
                children: [h.jsxs("div", {
                    className: x(1) ? "result__row" : "",
                    children: [h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[1].make ? "result__light result__light--green" : n[1].make === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[1].model ? "result__light result__light--green" : n[1].model === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[1].year ? "result__light result__light--green" : n[1].year === null ? "" : "result__light result__light--red"
                        })
                    })]
                }), h.jsxs("div", {
                    className: x(2) ? "result__row" : "",
                    children: [h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[2].make ? "result__light result__light--green" : n[2].make === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[2].model ? "result__light result__light--green" : n[2].model === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[2].year ? "result__light result__light--green" : n[2].year === null ? "" : "result__light result__light--red"
                        })
                    })]
                }), h.jsxs("div", {
                    className: x(3) ? "result__row" : "",
                    children: [h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[3].make ? "result__light result__light--green" : n[3].make === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[3].model ? "result__light result__light--green" : n[3].model === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[3].year ? "result__light result__light--green" : n[3].year === null ? "" : "result__light result__light--red"
                        })
                    })]
                }), h.jsxs("div", {
                    className: x(4) ? "result__row" : "",
                    children: [h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[4].make ? "result__light result__light--green" : n[4].make === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[4].model ? "result__light result__light--green" : n[4].model === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[4].year ? "result__light result__light--green" : n[4].year === null ? "" : "result__light result__light--red"
                        })
                    })]
                }), h.jsxs("div", {
                    className: x(5) ? "result__row" : "",
                    children: [h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[5].make ? "result__light result__light--green" : n[5].make === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[5].model ? "result__light result__light--green" : n[5].model === null ? "" : "result__light result__light--red"
                        })
                    }), h.jsx("div", {
                        className: "result__light__container",
                        children: h.jsx("div", {
                            className: n[5].year ? "result__light result__light--green" : n[5].year === null ? "" : "result__light result__light--red"
                        })
                    })]
                })]
            }), h.jsxs("div", {
                className: "result__summary",
                children: [h.jsxs("div", {
                    className: "result__summary__heading",
                    children: [h.jsx("h2", {
                        className: "result__summary__heading--text",
                        children: "Points Summary"
                    }), o > 0 && h.jsxs("div", {
                        className: "result__summary__heading--streak",
                        children: [h.jsx("p", {
                            className: "result__summary__heading--value",
                            children: "Streak:  "
                        }), h.jsx("img", {
                            src: E0,
                            className: "result__summary__heading--icon",
                            alt: "fire icon"
                        }), h.jsxs("p", {
                            className: "result__summary__heading--value",
                            children: ["  ", o]
                        })]
                    })]
                }), h.jsxs("div", {
                    className: "result__value",
                    children: [h.jsx("p", {
                        className: "result__value--text",
                        children: "This round: "
                    }), h.jsx("p", {
                        className: "result__value--value",
                        children: r
                    })]
                }), h.jsxs("div", {
                    className: "result__value",
                    children: [h.jsx("p", {
                        className: "result__value--text",
                        children: "All-time:"
                    }), h.jsx("p", {
                        className: "result__value--value",
                        children: i
                    })]
                })]
            }), h.jsx("p", {
                className: `result__copied ${u ? "result__copied--visible" : ""}`,
                children: "coppied to clipboard 📋"
            }), h.jsxs("div", {
                className: "result__share",
                onClick: () => v(),
                children: [h.jsx("p", {
                    className: "result__share-text",
                    children: "share"
                }), h.jsx("img", {
                    src: x0,
                    alt: "share button",
                    className: "result__share-icon"
                })]
            })]
        })
    })
}
function N0(e) {
    return !(typeof e != "object" || e instanceof Array)
}
class T0 {
    filterOutNonSupportedKeys(t, n) {
        const r = Object.create({});
        return N0(t) ? (Object.keys(t).forEach(i => {
            n.indexOf(i) >= 0 ? r[i] = t[i] : console.warn("Warning - unsupported key provided to configuration: ", i)
        }
        ),
        r) : Object.create({})
    }
}
const fu = ["cname", "secureDistribution", "privateCdn", "signUrl", "longUrlSignature", "shorten", "useRootPath", "secure", "forceVersion", "analytics", "queryParams"];
class Ms extends T0 {
    constructor(t) {
        super();
        const n = this.filterOutNonSupportedKeys(t, fu);
        Object.assign(this, {
            secure: !0
        }, n)
    }
    extend(t) {
        const n = this.filterOutNonSupportedKeys(t, fu);
        return new Ms(Object.assign({}, this, n))
    }
    setCname(t) {
        return this.cname = t,
        this
    }
    setSecureDistribution(t) {
        return this.secureDistribution = t,
        this
    }
    setPrivateCdn(t) {
        return this.privateCdn = t,
        this
    }
    setSignUrl(t) {
        return this.signUrl = t,
        this
    }
    setLongUrlSignature(t) {
        return this.longUrlSignature = t,
        this
    }
    setShorten(t) {
        return this.shorten = t,
        this
    }
    setUseRootPath(t) {
        return this.useRootPath = t,
        this
    }
    setSecure(t) {
        return this.secure = t,
        this
    }
    setForceVersion(t) {
        return this.forceVersion = t,
        this
    }
    setQueryParams(t) {
        return this.queryParams = t,
        this
    }
}
class ot {
    constructor(t) {
        this.values = [],
        this.delimiter = ":",
        this.hasValue(t) && this.addValue(t)
    }
    toString() {
        return this.values.join(this.delimiter)
    }
    hasValue(t) {
        return typeof t < "u" && t !== null && t !== ""
    }
    addValue(t) {
        return Array.isArray(t) ? this.values = this.values.concat(t) : this.values.push(t),
        this.values = this.values.filter(n => this.hasValue(n)),
        this
    }
    setDelimiter(t) {
        return this.delimiter = t,
        this
    }
}
class O0 extends Error {
    constructor(t="Unsupported") {
        super(t)
    }
}
function Ds(e) {
    return new O0(e)
}
function P0() {
    return this._qualifierModel || {
        error: Ds(`unsupported qualifier ${this.constructor.name}`)
    }
}
class R0 {
    constructor() {
        this._qualifierModel = {}
    }
    toJson() {
        return P0.apply(this)
    }
}
class ge extends R0 {
    constructor(t, n) {
        super(),
        this.delimiter = "_",
        this.key = t,
        n instanceof ot ? this.qualifierValue = n : (this.qualifierValue = new ot,
        this.qualifierValue.addValue(n))
    }
    toString() {
        const {key: t, delimiter: n, qualifierValue: r} = this;
        return `${t}${n}${r.toString()}`
    }
    addValue(t) {
        return this.qualifierValue.addValue(t),
        this
    }
}
class Be extends ge {
    constructor(t, n) {
        let r;
        n ? r = new ot([t, `${n}`]).setDelimiter(":") : r = t,
        super("fl", r),
        this.flagValue = n
    }
    toString() {
        return super.toString().replace(/\./g, "%2E")
    }
    getFlagValue() {
        return this.flagValue
    }
}
function j0(e, t) {
    const n = Array.from(e.entries());
    return t.forEach(r => {
        n.push(["fl", r])
    }
    ),
    n.sort().map(r => r[1])
}
function A0() {
    var e, t, n;
    const r = this._actionModel && Object.keys(this._actionModel).length
      , i = (n = (t = (e = this._actionModel) === null || e === void 0 ? void 0 : e.source) === null || t === void 0 ? void 0 : t.transformation) === null || n === void 0 ? void 0 : n.error;
    return i && i instanceof Error ? {
        error: i
    } : r ? this._actionModel : {
        error: Ds(`unsupported action ${this.constructor.name}`)
    }
}
class F0 {
    constructor() {
        this._actionModel = {}
    }
    toJson() {
        return A0.apply(this)
    }
}
class no extends F0 {
    constructor() {
        super(...arguments),
        this.qualifiers = new Map,
        this.flags = [],
        this.delimiter = ",",
        this.actionTag = ""
    }
    prepareQualifiers() {}
    getActionTag() {
        return this.actionTag
    }
    setActionTag(t) {
        return this.actionTag = t,
        this
    }
    toString() {
        return this.prepareQualifiers(),
        j0(this.qualifiers, this.flags).join(this.delimiter)
    }
    addQualifier(t) {
        if (typeof t == "string") {
            const [n,r] = t.toLowerCase().split("_");
            n === "fl" ? this.flags.push(new Be(r)) : this.qualifiers.set(n, new ge(n,r))
        } else
            this.qualifiers.set(t.key, t);
        return this
    }
    addFlag(t) {
        return typeof t == "string" ? this.flags.push(new Be(t)) : t instanceof Be && this.flags.push(t),
        this
    }
    addValueToQualifier(t, n) {
        return this.qualifiers.get(t).addValue(n),
        this
    }
}
function L0(e) {
    return e && (e.match(/^#/) ? `rgb:${e.substr(1)}` : e)
}
class I0 extends no {
    constructor(t) {
        super(),
        this._actionModel = {},
        this.addQualifier(new ge("b",new ot(L0(t)).setDelimiter("_"))),
        this._actionModel.color = t,
        this._actionModel.actionType = "backgroundColor"
    }
    static fromJson(t) {
        const {color: n} = t;
        return new this(n)
    }
}
class pu {
    constructor(t) {
        this.raw = t
    }
    toString() {
        return this.raw
    }
    toJson() {
        return {
            error: Ds(`unsupported action ${this.constructor.name}`)
        }
    }
}
function z0(e) {
    const t = e;
    return "error"in t && !!t.error
}
function M0() {
    return new Be("ignore_aspect_ratio")
}
function D0() {
    return new Be("lossy")
}
function U0() {
    return new Be("preserve_transparency")
}
function $0(e) {
    return new Be("progressive",e)
}
function V0() {
    return new Be("region_relative")
}
function B0() {
    return new Be("relative")
}
class H0 extends ot {
    constructor(t) {
        super(t),
        this.val = t
    }
    getValue() {
        return this.val
    }
}
function tn(e) {
    const t = {};
    return Object.keys(e).forEach(n => {
        t[e[n]] = n
    }
    ),
    t
}
const of = {
    limitFit: "limit",
    limitFill: "lfill",
    minimumFit: "mfit",
    thumbnail: "thumb",
    limitPad: "lpad",
    minimumPad: "mpad",
    autoPad: "auto_pad"
}
  , W0 = {
    colorSpace: "cs",
    dpr: "dpr",
    density: "dn",
    defaultImage: "d",
    format: "f",
    quality: "q"
}
  , Q0 = {
    redEye: "redeye",
    advancedRedEye: "adv_redeye",
    oilPaint: "oil_paint",
    unsharpMask: "unsharp_mask",
    makeTransparent: "make_transparent",
    generativeRestore: "gen_restore",
    upscale: "upscale"
}
  , G0 = {
    autoBest: "auto:best",
    autoEco: "auto:eco",
    autoGood: "auto:good",
    autoLow: "auto:low",
    jpegminiHigh: "jpegmini:1",
    jpegminiMedium: "jpegmini:2",
    jpegminiBest: "jpegmini:0"
}
  , q0 = {
    fullHd: "full_hd",
    fullHdWifi: "full_hd_wifi",
    fullHdLean: "full_hd_lean",
    hdLean: "hd_lean"
}
  , K0 = {
    444: "CHROMA_444",
    420: "CHROMA_420"
}
  , Y0 = {
    noCmyk: "no_cmyk",
    keepCmyk: "keep_cmyk",
    tinySrgb: "tinysrgb",
    srgbTrueColor: "srgb:truecolor"
};
tn(K0);
tn(Y0);
const J0 = tn(of)
  , b0 = tn(W0);
tn(Q0);
tn(G0);
tn(q0);
class X0 extends no {
    constructor(t, n, r) {
        super(),
        this._actionModel = {};
        let i;
        n instanceof H0 ? i = n.getValue() : i = n,
        this._actionModel.actionType = b0[t],
        this._actionModel[r] = i,
        this.addQualifier(new ge(t,n))
    }
}
class Z0 extends Be {
    constructor(t) {
        super("progressive", t)
    }
}
class Fi extends X0 {
    constructor(t, n) {
        super(t, n, "formatType")
    }
    lossy() {
        return this._actionModel.lossy = !0,
        this.addFlag(D0()),
        this
    }
    progressive(t) {
        return t instanceof Z0 ? (this._actionModel.progressive = {
            mode: t.getFlagValue()
        },
        this.addFlag(t)) : (this._actionModel.progressive = {
            mode: t
        },
        this.addFlag($0(t))),
        this
    }
    preserveTransparency() {
        return this._actionModel.preserveTransparency = !0,
        this.addFlag(U0()),
        this
    }
    static fromJson(t) {
        const {formatType: n, lossy: r, progressive: i, preserveTransparency: o} = t;
        let l;
        return n ? l = new this("f",n) : l = new this("f"),
        i && (i.mode ? l.progressive(i.mode) : l.progressive()),
        r && l.lossy(),
        o && l.preserveTransparency(),
        l
    }
}
class ro {
    constructor() {
        this.actions = []
    }
    addAction(t) {
        let n;
        if (typeof t == "string") {
            if (t.indexOf("/") >= 0)
                throw "addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";
            n = new pu(t)
        } else
            n = t;
        return this.actions.push(n),
        this
    }
    addTransformation(t) {
        return t instanceof ro ? this.actions = this.actions.concat(t.actions) : this.actions.push(new pu(t)),
        this
    }
    toString() {
        return this.actions.map(t => t.toString()).filter(t => t).join("/")
    }
    animated(t) {
        return this.addAction(t)
    }
    border(t) {
        return this.addAction(t)
    }
    reshape(t) {
        return this.addAction(t)
    }
    resize(t) {
        return this.addAction(t)
    }
    quality(t) {
        return this.addAction(new Fi("q",t)),
        this
    }
    format(t) {
        return this.addAction(new Fi("f",t)),
        this
    }
    roundCorners(t) {
        return this.addAction(t)
    }
    overlay(t) {
        return this.addAction(t)
    }
    underlay(t) {
        return t.setLayerType("u"),
        this.addAction(t)
    }
    addVariable(t) {
        return this.addAction(t)
    }
    conditional(t) {
        return this.addAction(t)
    }
    effect(t) {
        return this.addAction(t)
    }
    adjust(t) {
        return this.addAction(t)
    }
    rotate(t) {
        return this.addAction(t)
    }
    namedTransformation(t) {
        return this.addAction(t)
    }
    delivery(t) {
        return this.addAction(t)
    }
    backgroundColor(t) {
        return this.addAction(new I0(t))
    }
    psdTools(t) {
        return this.addAction(t)
    }
    extract(t) {
        return this.addAction(t)
    }
    addFlag(t) {
        const n = new no;
        let r = t;
        return typeof t == "string" && (r = new Be(t)),
        n.addQualifier(r),
        this.addAction(n)
    }
    customFunction(t) {
        return this.addAction(t)
    }
    transcode(t) {
        return this.addAction(t)
    }
    videoEdit(t) {
        return this.addAction(t)
    }
    toJson() {
        const t = [];
        for (const n of this.actions) {
            const r = n.toJson();
            if (z0(r))
                return r;
            t.push(r)
        }
        return {
            actions: t
        }
    }
}
class eg extends ro {
}
class tg extends ro {
}
function mu(e) {
    const t = e.toString();
    return t.match(/[A-Z]/gi) || t.length > 1 && t[0] === "0" ? t : !isNaN(parseFloat(t)) && t.indexOf(":") === -1 && t.indexOf(".") === -1 ? `${t}.0` : t
}
class ng extends ot {
}
class rg extends no {
    constructor(t, n, r) {
        super(),
        this._actionModel = {
            dimensions: {}
        },
        this._actionModel.actionType = J0[t] || t,
        this.addQualifier(new ge("c",t)),
        n && this.width(n),
        r && this.height(r)
    }
    height(t) {
        return this._actionModel.dimensions.height = t,
        this.addQualifier(new ge("h",t))
    }
    width(t) {
        return this._actionModel.dimensions.width = t,
        this.addQualifier(new ge("w",t))
    }
    aspectRatio(t) {
        if (t instanceof ng)
            return this._actionModel.dimensions.aspectRatio = `${t}`,
            this.addQualifier(new ge("ar",t));
        if (typeof t == "number" || typeof t == "string")
            return this._actionModel.dimensions.aspectRatio = mu(t),
            this.addQualifier(new ge("ar",mu(t)));
        if (t instanceof Be)
            return this._actionModel.dimensions.aspectRatio = `${t.qualifierValue}`,
            this.addFlag(t)
    }
    relative() {
        return this._actionModel.relative = !0,
        this.addFlag(B0())
    }
    regionRelative() {
        return this._actionModel.regionRelative = !0,
        this.addFlag(V0())
    }
    static fromJson(t) {
        const {actionType: n, dimensions: r, relative: i, regionRelative: o} = t
          , {aspectRatio: l, width: s, height: a} = r
          , u = of[n] || n
          , c = new this(u,s,a);
        return l && c.aspectRatio(l === "ignore_aspect_ratio" ? M0() : l),
        i && c.relative(),
        o && c.regionRelative(),
        c
    }
}
class Us extends ge {
    constructor(t) {
        super("g", new ot(t))
    }
}
class lf extends Us {
    constructor() {
        super("auto")
    }
    autoFocus(...t) {
        return this.addValue(t),
        this
    }
}
class sf extends Us {
    constructor(t) {
        super(t)
    }
    fallbackGravity(t) {
        return this.addValue(t.qualifierValue),
        this
    }
}
class ig extends Us {
    constructor(t) {
        super(t)
    }
}
function af(...e) {
    const t = [...e];
    return new sf(t)
}
function uf() {
    return new lf
}
class io extends ot {
    constructor(t) {
        super(),
        this.name = t
    }
    toString() {
        return this.name
    }
}
function og() {
    return new io("ocr_text")
}
function lg(e) {
    return e && `${e}`.split(":")[0] === "auto"
}
function sg(e) {
    const t = $s(e);
    return ["north", "center", "east", "west", "south", "north_west", "south_east", "south_west", "north_east"].includes(t)
}
function $s(e) {
    return `${e}`.replace("g_", "")
}
function ag(e) {
    return {
        compass: $s(e),
        gravityType: "direction"
    }
}
function ug(e) {
    return $s(e) === "ocr_text"
}
function cg() {
    return {
        gravityType: "ocr"
    }
}
function dg(e) {
    return `${e.qualifierValue}`.split(":")[0] === "auto"
}
function fg(e) {
    const n = e.toString().split("_")
      , r = {
        object: n[0]
    };
    return n.length > 1 && (n[1] === "avoid" ? r.avoid = !0 : r.weight = +n[1]),
    r
}
function cf(e) {
    let t;
    const n = e === "auto" ? new lf : e;
    return `${e}`.startsWith("auto:") ? t = `${e}`.split(":").filter(i => i !== "auto") : t = n.qualifierValue.values.filter(i => i !== "auto"),
    {
        gravityType: "auto",
        autoFocus: t.map(fg)
    }
}
function pg(e) {
    const t = `${e}`.split(":").includes("auto")
      , n = e.qualifierValue.values
      , i = {
        gravityType: "object",
        focusOnObjects: (t ? n.slice(0, n.length - 1) : n).map(o => `${o}`)
    };
    if (t) {
        const o = n[n.length - 1].values.slice(1)
          , l = uf().autoFocus(...o);
        i.fallbackGravity = cf(l)
    }
    return i
}
function mg(e) {
    const n = e.split(":").map(r => new io(r));
    return new sf(n)
}
function hg(e) {
    return sg(e) ? ag(e) : ug(e) ? cg() : lg(e) || dg(e) ? cf(e) : pg(typeof e == "string" ? mg(e) : e)
}
class Vs extends ot {
    constructor(t, n) {
        super(),
        this._weight = n,
        this.focusOn = t,
        this.shouldAvoid = !1
    }
    static focusOn(t, n) {
        return new Vs(t,n)
    }
    shouldAddWeight() {
        return typeof this._weight == "number" || typeof this._weight == "string" || this.shouldAvoid
    }
    getName() {
        return this.focusOn.name
    }
    getWeight() {
        return this.shouldAvoid ? "avoid" : this._weight
    }
    toString() {
        return this.shouldAddWeight() ? `${this.getName()}_${this.getWeight()}` : `${this.getName()}`
    }
    weight(t) {
        return this._weight = t,
        this
    }
    avoid() {
        return this.shouldAvoid = !0,
        this
    }
}
class gg extends ot {
    constructor(t) {
        super(),
        this.val = t
    }
    toString() {
        return this.val
    }
}
function yg(e) {
    return e.gravityType === "direction"
}
function vg(e) {
    return e.gravityType === "ocr"
}
function _g(e) {
    return e.gravityType === "auto"
}
function wg(e) {
    const {object: t, weight: n, avoid: r} = e
      , i = new Vs(new io(t));
    return (n || n === 0) && i.weight(n),
    r && i.avoid(),
    i
}
function df(e) {
    const n = (e.autoFocus || []).map(wg);
    return uf().autoFocus(...n)
}
function Sg(e) {
    const t = (e.focusOnObjects || []).map(r => new io(r))
      , n = af(...t);
    if (e.fallbackGravity) {
        const r = df(e.fallbackGravity);
        n.fallbackGravity(r)
    }
    return n
}
function kg(e) {
    return yg(e) ? new ig(new gg(e.compass)) : vg(e) ? af(og()) : _g(e) ? df(e) : Sg(e)
}
class ff extends rg {
    gravity(t) {
        this._actionModel.gravity = hg(t);
        const n = typeof t == "string" ? new ge("g",t) : t;
        return this.addQualifier(n)
    }
    static fromJson(t) {
        const n = super.fromJson.apply(this, [t]);
        return t.gravity && n.gravity(kg(t.gravity)),
        n
    }
}
class xg extends ff {
    x(t) {
        return this._actionModel.x = t,
        this.addQualifier(new ge("x",t))
    }
    y(t) {
        return this._actionModel.y = t,
        this.addQualifier(new ge("y",t))
    }
    zoom(t) {
        return this._actionModel.zoom = t,
        this.addQualifier(new ge("z",t))
    }
    static fromJson(t) {
        const n = super.fromJson.apply(this, [t]);
        return t.x && n.x(t.x),
        t.y && n.y(t.y),
        t.zoom && n.zoom(t.zoom),
        n
    }
}
class Eg extends ff {
    x(t) {
        return this._actionModel.x = t,
        this.addQualifier(new ge("x",t))
    }
    y(t) {
        return this._actionModel.y = t,
        this.addQualifier(new ge("y",t))
    }
    static fromJson(t) {
        const n = super.fromJson.apply(this, [t]);
        return t.x && n.x(t.x),
        t.y && n.y(t.y),
        n
    }
}
function Wn(e, t) {
    return new xg("crop",e,t)
}
function Qn(e, t) {
    return new Eg("fill",e,t)
}
function Cg(e) {
    return e.match(/^https?:\//)
}
function Ng(e) {
    return e.indexOf("/") < 0
}
function Tg(e) {
    return e.match(/^v[0-9]+/)
}
function Og(e, t) {
    const n = t.secure
      , r = t.privateCdn
      , i = t.cname
      , o = t.secureDistribution;
    return !n && !i ? `http://res.cloudinary.com/${e}` : n && !o && r ? `https://${e}-res.cloudinary.com` : n && !o ? `https://res.cloudinary.com/${e}` : n && o && r ? `https://${o}` : n && o ? `https://${o}/${e}` : !n && i ? `http://${i}/${e}` : "ERROR"
}
function Pg(e) {
    return e || "image"
}
function Rg(e) {
    return e || "upload"
}
function jg(e, t, n) {
    const r = n !== !1;
    return t ? `v${t}` : Tg(e) || Cg(e) || Ng(e) ? "" : r ? "v1" : ""
}
function Bs(e, t, n) {
    let r = t >> 0
      , i = String(n);
    return e.length > r ? String(e) : (r = r - e.length,
    r > i.length && (i += Ag(i, r / i.length)),
    i.slice(0, r) + String(e))
}
function Ag(e, t) {
    let n = t
      , r = "";
    for (; n > 0; )
        r += e,
        n--;
    return r
}
const Fg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Li = {};
let hu = 0;
Fg.split("").forEach(e => {
    let t = hu.toString(2);
    t = Bs(t, 6, "0"),
    Li[t] = e,
    hu++
}
);
function Lg(e) {
    if (e.split(".").length < 2)
        throw new Error("invalid semVer, must have at least two segments");
    return e.split(".").reverse().join(".")
}
function Ig(e) {
    if (e.split(".").length < 2)
        throw new Error("invalid semVer, must have at least two segments");
    return e.split(".").map(t => {
        const n = +t;
        if (isNaN(n) || n < 0)
            throw "Invalid version number provided";
        return Bs(t, 2, "0")
    }
    ).join(".")
}
function gu(e) {
    let t = "";
    const r = e.split(".").length * 6
      , i = Lg(e)
      , o = Ig(i);
    let s = parseInt(o.split(".").join("")).toString(2);
    if (s = Bs(s, r, "0"),
    s.length % 6 !== 0)
        throw "Version must be smaller than 43.21.26)";
    return s.match(/.{1,6}/g).forEach(a => {
        t += Li[a]
    }
    ),
    t
}
function zg(e) {
    const t = {
        sdkSemver: e.sdkSemver,
        techVersion: e.techVersion,
        sdkCode: e.sdkCode,
        product: e.product,
        feature: "0",
        osType: e.osType,
        osVersion: e.osVersion
    };
    return e.accessibility && (t.feature = "D"),
    e.lazyload && (t.feature = "C"),
    e.responsive && (t.feature = "A"),
    e.placeholder && (t.feature = "B"),
    t
}
const Mg = "1.20.0";
function Dg(e) {
    const [t,n] = e.split(".")
      , r = parseInt(t).toString(2)
      , i = parseInt(n).toString(2)
      , o = r.padStart(6, "0")
      , l = i.padStart(6, "0");
    return Li[o] + Li[l]
}
function Ug() {
    const e = "0.0.0";
    if (typeof window < "u")
        return e;
    try {
        return process.versions.node || e
    } catch {
        return e
    }
}
function $g(e) {
    const t = {
        techVersion: Ug(),
        sdkCode: "T",
        sdkSemver: Mg.split("-")[0],
        product: "A",
        osType: "Z",
        osVersion: "0.0",
        responsive: !1,
        placeholder: !1,
        lazyload: !1,
        accessibility: !1
    };
    return e ? Object.assign(Object.assign({}, t), e) : t
}
function yu(e) {
    const t = $g(e)
      , n = zg(t);
    try {
        const r = Vg(n.techVersion)
          , i = gu(n.sdkSemver)
          , o = gu(r)
          , l = Dg(n.osVersion)
          , s = n.feature
          , a = n.sdkCode
          , {product: u, osType: c} = n;
        return `D${u}${a}${i}${o}${c}${l}${s}`
    } catch {
        return "E"
    }
}
function Vg(e) {
    const t = e.split(".");
    return `${t[0]}.${t[1]}`
}
const vu = {
    "image/upload": "images",
    "image/private": "private_images",
    "image/authenticated": "authenticated_images",
    "raw/upload": "files",
    "video/upload": "videos"
};
class Bg {
    constructor(t, n={}, r) {
        this.setPublicID(t),
        this.setCloudConfig(n),
        this.setURLConfig(r)
    }
    setURLConfig(t) {
        return this.urlConfig = new Ms(t),
        this
    }
    setCloudConfig(t) {
        return this.cloudName = t.cloudName,
        this.apiKey = t.apiKey,
        this.apiSecret = t.apiSecret,
        this.authToken = t.authToken,
        this
    }
    setPublicID(t) {
        return this.publicID = t ? t.toString() : "",
        this
    }
    setDeliveryType(t) {
        return this.deliveryType = t,
        this
    }
    setSuffix(t) {
        return this.suffix = t,
        this
    }
    setSignature(t) {
        return this.signature = t,
        this
    }
    setVersion(t) {
        return t && (this.version = t),
        this
    }
    setAssetType(t) {
        return t && (this.assetType = t),
        this
    }
    sign() {
        return this
    }
    toURL(t={}) {
        return this.createCloudinaryURL(null, t.trackedAnalytics)
    }
    validateAssetForURLCreation() {
        if (typeof this.cloudName > "u")
            throw "You must supply a cloudName when initializing the asset";
        const t = this.suffix && this.suffix.indexOf(".") >= 0
          , n = this.suffix && this.suffix.indexOf("/") >= 0;
        if (t || n)
            throw "`suffix`` should not include . or /"
    }
    getResourceType() {
        const t = Pg(this.assetType)
          , n = Rg(this.deliveryType)
          , r = !!this.suffix
          , i = `${t}/${n}`
          , o = vu[`${t}/${n}`]
          , l = this.urlConfig.useRootPath
          , s = this.urlConfig.shorten;
        if (l) {
            if (i === "image/upload")
                return "";
            throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${i} instead`)
        }
        if (s && i === "image/upload")
            return "iu";
        if (r) {
            if (o)
                return o;
            throw new Error(`URL Suffix only supported for ${Object.keys(vu).join(", ")}, Provided: ${i} instead`)
        }
        return i
    }
    getSignature() {
        return this.signature ? `s--${this.signature}--` : ""
    }
    createCloudinaryURL(t, n) {
        if (!this.publicID)
            return "";
        this.validateAssetForURLCreation();
        const r = Og(this.cloudName, this.urlConfig)
          , i = t ? t.toString() : ""
          , o = jg(this.publicID, this.version, this.urlConfig.forceVersion)
          , l = this.publicID;
        if (typeof t == "string")
            return [r, this.getResourceType(), this.getSignature(), i, o, l.replace(/,/g, "%2C"), this.suffix].filter(a => a).join("/");
        {
            const s = [encodeURI(r), this.getResourceType(), this.getSignature(), encodeURI(i), o, encodeURI(l).replace(/,/g, "%2C"), this.suffix && encodeURI(this.suffix)].filter(c => c).join("/").replace(/\?/g, "%3F").replace(/=/g, "%3D")
              , a = this.urlConfig.analytics !== !1 && !l.includes("?");
            let u = "";
            if (typeof this.urlConfig.queryParams == "object")
                try {
                    const c = new URLSearchParams(this.urlConfig.queryParams);
                    a && c.set("_a", yu(n)),
                    u = c.toString()
                } catch {
                    console.error("Error: URLSearchParams is not available so the queryParams object cannot be parsed, please try passing as an already parsed string")
                }
            else
                u = this.urlConfig.queryParams || "",
                a && (u += `${u.length > 0 ? "&" : ""}_a=${yu(n)}`);
            return u ? `${s}?${u}` : s
        }
    }
}
class pf extends Bg {
    constructor(t, n, r, i) {
        super(t, n, r),
        this.transformation = i
    }
    animated(t) {
        return this.transformation.animated(t),
        this
    }
    border(t) {
        return this.transformation.border(t),
        this
    }
    reshape(t) {
        return this.transformation.reshape(t),
        this
    }
    resize(t) {
        return this.transformation.resize(t),
        this
    }
    quality(t) {
        return this.addAction(new Fi("q",t)),
        this
    }
    format(t) {
        return this.addAction(new Fi("f",t)),
        this
    }
    roundCorners(t) {
        return this.transformation.roundCorners(t),
        this
    }
    overlay(t) {
        return this.transformation.overlay(t),
        this
    }
    addVariable(t) {
        return this.transformation.addVariable(t),
        this
    }
    conditional(t) {
        return this.transformation.conditional(t),
        this
    }
    effect(t) {
        return this.transformation.effect(t),
        this
    }
    adjust(t) {
        return this.transformation.adjust(t),
        this
    }
    rotate(t) {
        return this.transformation.rotate(t),
        this
    }
    namedTransformation(t) {
        return this.transformation.namedTransformation(t),
        this
    }
    delivery(t) {
        return this.transformation.delivery(t),
        this
    }
    backgroundColor(t) {
        return this.transformation.backgroundColor(t),
        this
    }
    psdTools(t) {
        return this.transformation.psdTools(t),
        this
    }
    extract(t) {
        return this.transformation.extract(t),
        this
    }
    addFlag(t) {
        return this.transformation.addFlag(t),
        this
    }
    customFunction(t) {
        return this.transformation.customFunction(t),
        this
    }
    addAction(t) {
        return this.transformation.addAction(t),
        this
    }
    addTransformation(t) {
        return this.transformation.addTransformation(t),
        this
    }
    toString() {
        return this.transformation.toString()
    }
    underlay(t) {
        return this.transformation.underlay(t),
        this
    }
    toURL(t={}) {
        return this.createCloudinaryURL(this.transformation, t == null ? void 0 : t.trackedAnalytics)
    }
}
class Hg extends pf {
    constructor(t, n, r) {
        super(t, n, r, new eg)
    }
}
class Wg extends pf {
    constructor(t, n, r) {
        super(t, n, r, new tg),
        this.assetType = "video"
    }
    transcode(t) {
        return this.transformation.transcode(t),
        this
    }
    videoEdit(t) {
        return this.transformation.videoEdit(t),
        this
    }
}
class Qg {
    constructor(t) {
        t && (this.cloudinaryConfig = t)
    }
    image(t) {
        return new Hg(t,this.cloudinaryConfig.cloud,this.cloudinaryConfig.url)
    }
    video(t) {
        return new Wg(t,this.cloudinaryConfig.cloud,this.cloudinaryConfig.url)
    }
    setConfig(t) {
        return this.cloudinaryConfig = t,
        this
    }
    getConfig() {
        return this.cloudinaryConfig
    }
    extendConfig() {}
}
function Gg({round: e, images: t, coordinates: n}) {
    const [r,i] = $.useState(!1)
      , [o,l] = $.useState({
        1: "",
        2: "image--next",
        3: "image--next",
        4: "image--next",
        5: "image--next"
    })
      , [s,a] = $.useState("")
      , [u,c] = $.useState({
        cldImageOne: "",
        cldImageTwo: "",
        cldImageThree: "",
        cldImageFour: "",
        cldImageFive: ""
    })
      , m = $.useRef(new Qg({
        cloud: {
            cloudName: "dcahxcb9j"
        }
    })).current;
    let g = n.x / 1800
      , x = n.y / 1200;
    return $.useEffect( () => {
        t.imageFull && a(t.imageFull.provider_metadata.public_id);
        const v = m.image(s).resize(Wn().width(.2).height(.2).aspectRatio("3:2").gravity("xy_center").x(g).y(x)).resize(Qn().width("iw").height("ih")).toURL()
          , S = m.image(s).resize(Wn().width(.25).height(.25).aspectRatio("3:2").gravity("xy_center").x(g).y(x)).resize(Qn().width("iw").height("ih")).toURL()
          , T = m.image(s).resize(Wn().width(.3).height(.3).aspectRatio("3:2").gravity("xy_center").x(g).y(x)).resize(Qn().width("iw").height("ih")).toURL()
          , f = m.image(s).resize(Wn().width(.35).height(.35).aspectRatio("3:2").gravity("xy_center").x(g).y(x)).resize(Qn().width("iw").height("ih")).toURL()
          , d = m.image(s).resize(Wn().width(.4).height(.4).aspectRatio("3:2").gravity("xy_center").x(g).y(x)).resize(Qn().width("iw").height("ih")).toURL();
        c({
            cldImageOne: v,
            cldImageTwo: S,
            cldImageThree: T,
            cldImageFour: f,
            cldImageFive: d
        })
    }
    , [t, t.imageFull, m, s, g, x]),
    $.useEffect( () => {
        e !== 1 && o[1] === "" && l({
            ...o,
            1: "image--slide-out"
        })
    }
    ),
    $.useEffect( () => {
        e !== 1 && l({
            ...o,
            [e - 1]: "image--slide-out",
            [e]: "image--slide-in"
        })
    }
    , [e]),
    h.jsxs("div", {
        className: "image-container",
        children: [h.jsxs("div", {
            className: "image__slider",
            children: [h.jsx("img", {
                src: g && x ? u.cldImageOne : t.imageOne,
                alt: "car one",
                className: `image image--one ${o[1]}`,
                onClick: () => i(!0)
            }), e >= 1 && h.jsx("img", {
                src: g && x ? u.cldImageTwo : t.imageTwo,
                alt: "car two",
                className: `image ${o[2]}`,
                onClick: () => i(!0)
            }), e >= 2 && h.jsx("img", {
                src: g && x ? u.cldImageThree : t.imageThree,
                alt: "car three",
                className: `image ${o[3]}`,
                onClick: () => i(!0),
                loading: "lazy"
            }), e >= 3 && h.jsx("img", {
                src: g && x ? u.cldImageFour : t.imageFour,
                alt: "car four",
                className: `image ${o[4]}`,
                onClick: () => i(!0),
                loading: "lazy"
            }), e >= 4 && h.jsx("img", {
                src: g && x ? u.cldImageFive : t.imageFive,
                alt: "car five",
                className: `image ${o[5]}`,
                onClick: () => i(!0),
                loading: "lazy"
            }), e === 1 && h.jsx("p", {
                className: "image__enlarge-message",
                children: "tap to enlarge"
            })]
        }), r && h.jsx("div", {
            className: "image--modal",
            onClick: () => i(!1),
            children: h.jsx("img", {
                src: e === 1 ? g && x ? u.cldImageOne : t.imageOne : e === 2 ? g && x ? u.cldImageTwo : t.imageTwo : e === 3 ? g && x ? u.cldImageThree : t.imageThree : e === 4 ? g && x ? u.cldImageFour : t.imageFour : e === 5 ? g && x ? u.cldImageFive : t.imageFive : "",
                alt: "car full",
                className: "image--modal-content"
            })
        })]
    })
}
function qg({multiplier: e, currentPoints: t, score: n}) {
    const [r,i] = $.useState({
        animation: !1,
        valueOut: 5,
        valueIn: 4
    })
      , [o,l] = $.useState({
        animation: !1,
        valueOut: 0,
        valueIn: 0
    });
    return $.useEffect( () => {
        t !== o.valueOut && (l(s => ({
            ...s,
            valueIn: t
        })),
        l(s => ({
            ...s,
            animation: !0
        })),
        setTimeout( () => {
            l(s => ({
                ...s,
                animation: !1,
                valueOut: s.valueIn
            }))
        }
        , 450)),
        !(e === 5 || e === 0 || t === 3) && (i(s => ({
            ...s,
            animation: !0
        })),
        setTimeout( () => {
            i(s => ({
                ...s,
                animation: !1,
                valueOut: e,
                valueIn: e - 1
            }))
        }
        , 450))
    }
    , [e]),
    h.jsxs("section", {
        className: "scoreboard",
        children: [h.jsxs("div", {
            className: "scoreboard__headings",
            children: [h.jsx("h2", {
                className: "scoreboard__heading",
                children: "Make"
            }), h.jsx("h2", {
                className: "scoreboard__heading",
                children: "Model"
            }), h.jsx("h2", {
                className: "scoreboard__heading",
                children: "Year"
            })]
        }), h.jsxs("section", {
            className: "scoreboard__light-container ",
            children: [h.jsxs("div", {
                className: "scoreboard__row",
                children: [h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--make ${n[1].make ? "scoreboard__light--make--green" : n[1].make === null ? "" : "scoreboard__light--make--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--model ${n[1].model ? "scoreboard__light--model--green" : n[1].model === null ? "" : "scoreboard__light--model--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--year ${n[1].year ? "scoreboard__light--year--green" : n[1].year === null ? "" : "scoreboard__light--year--red"}`
                    })
                })]
            }), h.jsxs("div", {
                className: "scoreboard__row",
                children: [h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--make ${n[2].make ? "scoreboard__light--make--green" : n[2].make === null ? "" : "scoreboard__light--make--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--model ${n[2].model ? "scoreboard__light--model--green" : n[2].model === null ? "" : "scoreboard__light--model--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--year ${n[2].year ? "scoreboard__light--year--green" : n[2].year === null ? "" : "scoreboard__light--year--red"}`
                    })
                })]
            }), h.jsxs("div", {
                className: "scoreboard__row",
                children: [h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--make ${n[3].make ? "scoreboard__light--make--green" : n[3].make === null ? "" : "scoreboard__light--make--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--model ${n[3].model ? "scoreboard__light--model--green" : n[3].model === null ? "" : "scoreboard__light--model--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--year ${n[3].year ? "scoreboard__light--year--green" : n[3].year === null ? "" : "scoreboard__light--year--red"}`
                    })
                })]
            }), h.jsxs("div", {
                className: "scoreboard__row",
                children: [h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--make ${n[4].make ? "scoreboard__light--make--green" : n[4].make === null ? "" : "scoreboard__light--make--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--model ${n[4].model ? "scoreboard__light--model--green" : n[4].model === null ? "" : "scoreboard__light--model--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--year ${n[4].year ? "scoreboard__light--year--green" : n[4].year === null ? "" : "scoreboard__light--year--red"}`
                    })
                })]
            }), h.jsxs("div", {
                className: "scoreboard__row",
                children: [h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--make ${n[5].make ? "scoreboard__light--make--green" : n[5].make === null ? "" : "scoreboard__light--make--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--model ${n[5].model ? "scoreboard__light--model--green" : n[5].model === null ? "" : "scoreboard__light--model--red"}`
                    })
                }), h.jsx("div", {
                    className: "scoreboard__light__container",
                    children: h.jsx("div", {
                        className: `scoreboard__light scoreboard__light--year ${n[5].year ? "scoreboard__light--year--green" : n[5].year === null ? "" : "scoreboard__light--year--red"}`
                    })
                })]
            })]
        }), h.jsxs("section", {
            className: "scoreboard__tally",
            children: [h.jsxs("div", {
                className: "scoreboard__tally-row",
                children: [h.jsx("p", {
                    className: "scoreboard__text scoreboard__text--current",
                    children: "Current Score:"
                }), h.jsxs("div", {
                    className: "scoreboard__current-score-scroll",
                    children: [h.jsx("p", {
                        className: `scoreboard__current-score-scroll--value scoreboard__multiplier-scroll--value-next ${o.animation ? "scoreboard__current-score-scroll--value-in" : "scoreboard__current-score-scroll--value-next"}`,
                        children: o.valueIn
                    }), h.jsx("p", {
                        className: `scoreboard__current-score-scroll--value ${o.animation ? "scoreboard__current-score-scroll--value-out" : ""}`,
                        children: o.valueOut
                    })]
                })]
            }), h.jsxs("div", {
                className: "scoreboard__tally-row",
                children: [h.jsx("p", {
                    className: "scoreboard__text",
                    children: "Final Score Multiplier:"
                }), h.jsxs("div", {
                    className: "scoreboard__multiplier-container",
                    children: [h.jsx("p", {
                        className: "scoreboard__text",
                        children: "x"
                    }), h.jsxs("div", {
                        className: "scoreboard__multiplier-scroll",
                        children: [h.jsx("p", {
                            className: `scoreboard__multiplier-scroll--value scoreboard__multiplier-scroll--value-next ${r.animation ? "scoreboard__multiplier-scroll--value-in" : "scoreboard__multiplier-scroll--value-next"}`,
                            children: r.valueIn
                        }), h.jsx("p", {
                            className: `scoreboard__multiplier-scroll--value ${r.animation ? "scoreboard__multiplier-scroll--value-out" : ""}`,
                            children: r.valueOut
                        })]
                    })]
                })]
            })]
        })]
    })
}
function zo({data: e, name: t, localFormVal: n, updateForm: r, selType: i, round: o, roundBool: l, isPlayed: s, errorState: a, setErrorState: u}) {
    const [c,m] = $.useState({
        make: !1,
        model: !1,
        year: !1
    })
      , [g,x] = $.useState("")
      , [v,S] = $.useState(!1)
      , [T,f] = $.useState("")
      , d = $.useRef(null);
    $.useEffect( () => {
        f(n || ""),
        !l && o !== 1 && u(j => ({
            ...j,
            [i]: !0
        }))
    }
    , [o]),
    $.useEffect( () => {
        m({
            ...c,
            [i]: !0
        })
    }
    , []),
    $.useEffect( () => {
        const j = A => {
            d.current && !d.current.contains(A.target) && S(!1)
        }
        ;
        return window.addEventListener("click", j),
        () => {
            window.removeEventListener("click", j)
        }
    }
    , []);
    const p = e.filter(j => j.toString().toLowerCase().includes(g.toLowerCase()));
    function C(j) {
        f(j.target.value),
        x(j.target.value),
        u(A => ({
            ...A,
            [i]: !1
        })),
        i === "year" && r("year", j.target.value)
    }
    function R(j) {
        const L = j.target.getAttribute("data-value");
        L && (f(L),
        x(""),
        S(!1),
        r(`${i}`, L),
        u(M => ({
            ...M,
            [i]: !1
        })))
    }
    return h.jsxs("div", {
        className: "select",
        ref: d,
        children: [h.jsx("input", {
            type: "text",
            id: `cardle-select-${i}`,
            className: `select__input  ${a && "select__input--error"}`,
            placeholder: v ? "" : i === "year" ? "Year (YYYY, guess within +-2 years)" : t,
            autoComplete: "off",
            onChange: C,
            onFocus: () => {
                S(!0),
                a && f("")
            }
            ,
            value: T,
            disabled: s
        }), v && (i === "make" || i === "model") && h.jsx("ul", {
            className: "select__data",
            children: p.map( (j, A) => h.jsx("li", {
                className: "select__value",
                "data-value": j,
                onClick: R,
                children: j
            }, A))
        })]
    })
}
function Kg({formValues: e, updateForm: t, updateRound: n, isPlayed: r, round: i}) {
    const [o,l] = $.useState([])
      , [s,a] = $.useState([])
      , [u,c] = $.useState([])
      , [m,g] = $.useState({
        make: !1,
        model: !1,
        year: !1
    })
      , x = "https://cardle-strapi-api-0030dbf64eee.herokuapp.com/api";
    return $.useEffect( () => {
        ee.get(`${x}/makes/?fields[0]=id&fields[1]=make&sort[1]=make&pagination[start]=0&pagination[limit]=200`).then(v => {
            let T = v.data.data.map(f => f.attributes.make);
            l(T)
        }
        ).catch(v => {
            console.error(v)
        }
        )
    }
    , []),
    $.useEffect( () => {
        const v = e.make ? e.make : "";
        ee.get(`${x}/models?fields[0]=model&sort[0]=model&populate[make][fields][0]=make&filters[make][make][$eqi]=${v}&pagination[limit]=200`).then(S => {
            const T = S.data.data;
            let f = [];
            T.map(d => {
                f.push(d.attributes.model)
            }
            ),
            a(f)
        }
        ).catch(S => {
            console.error(S)
        }
        )
    }
    , [e.make]),
    $.useEffect( () => {
        const v = new Date().getFullYear()
          , S = 1950
          , T = [];
        for (let f = S; f <= v; f++)
            T.push(f.toString());
        c(T)
    }
    , []),
    h.jsxs("form", {
        action: "",
        className: "form",
        children: [h.jsx(zo, {
            name: "Make",
            data: o,
            updateForm: t,
            selType: "make",
            localFormVal: e.make,
            round: i.currentRound,
            roundBool: i.make,
            isPlayed: r,
            errorState: m.make,
            setErrorState: g
        }), h.jsx(zo, {
            name: "Model",
            data: s,
            updateForm: t,
            selType: "model",
            localFormVal: e.model,
            round: i.currentRound,
            roundBool: i.model,
            isPlayed: r,
            errorState: m.model,
            setErrorState: g
        }), h.jsx(zo, {
            name: "Year",
            data: u,
            updateForm: t,
            selType: "year",
            localFormVal: e.year,
            round: i.currentRound,
            roundBool: i.year,
            isPlayed: r,
            errorState: m.year,
            setErrorState: g
        }), h.jsx("button", {
            type: "submit",
            className: "form__submit",
            onClick: v => {
                v.preventDefault(),
                n()
            }
            ,
            disabled: !!(!(e.make && e.model && e.year) || m.make || m.model || m.year || e.year.length !== 4),
            children: "submit"
        })]
    })
}
function Yg() {
    const [e,t] = $.useState(!1)
      , [n,r] = $.useState(!1)
      , [i,o] = $.useState("")
      , [l,s] = $.useState(Number)
      , [a,u] = $.useState(Number)
      , [c,m] = $.useState({
        currentRound: 1,
        multiplier: 5,
        currentPoints: 0,
        make: !1,
        model: !1,
        year: !1
    })
      , [g,x] = $.useState({
        1: {
            make: null,
            model: null,
            year: null
        },
        2: {
            make: null,
            model: null,
            year: null
        },
        3: {
            make: null,
            model: null,
            year: null
        },
        4: {
            make: null,
            model: null,
            year: null
        },
        5: {
            make: null,
            model: null,
            year: null
        }
    })
      , [v,S] = $.useState({
        make: "",
        model: "",
        year: ""
    })
      , [T,f] = $.useState({
        make: "",
        model: "",
        answerYear: "",
        photoCredit: ""
    })
      , [d,p] = $.useState({
        imageFull: "",
        imageOne: "",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
        imageFive: ""
    })
      , [C,R] = $.useState({
        x: 0,
        y: 0
    });
    function j(k) {
        const _ = k.toLocaleDateString("en-GB").split("/");
        return `${_[2]}-${_[1]}-${_[0]}`
    }
    const L = j(new Date)
      , M = "https://cardle-strapi-api-0030dbf64eee.herokuapp.com/api"
      , U = c.currentPoints * (c.multiplier === 5 ? 5 : c.multiplier === 0 ? 1 : c.multiplier + 1);
    $.useEffect( () => {
        ee.get(`${M}/answers?populate=*&filters[date][$eq]=${L}`).then(k => {
            if (k.data.data.length) {
                const y = k.data.data[0].attributes
                  , _ = y.make.data.attributes.make
                  , w = y.model.data.attributes.model
                  , N = y.answerYear
                  , F = y.xCoordinate
                  , z = y.yCoordinate
                  , D = y.photoCredit ? y.photoCredit : ""
                  , Q = y.imageFull ? y.imageFull.data.attributes : y.imageFull.data.attributes.formats.hasOwnProperty("large") ? y.imageFull.data.attributes.formats.large : y.imageFull.data.attributes.formats.medium
                  , H = y.imageOne.data ? y.imageOne.data.attributes.formats.hasOwnProperty("small") ? y.imageOne.data.attributes.formats.small.url : y.imageOne.data.attributes.formats.thumbnail.url : ""
                  , xe = y.imageTwo.data ? y.imageTwo.data.attributes.formats.hasOwnProperty("small") ? y.imageTwo.data.attributes.formats.small.url : y.imageTwo.data.attributes.formats.thumbnail.url : ""
                  , ue = y.imageThree.data ? y.imageThree.data.attributes.formats.hasOwnProperty("small") ? y.imageThree.data.attributes.formats.small.url : y.imageThree.data.attributes.formats.thumbnail.url : ""
                  , ve = y.imageFour.data ? y.imageFour.data.attributes.formats.hasOwnProperty("small") ? y.imageFour.data.attributes.formats.small.url : y.imageFour.data.attributes.formats.thumbnail.url : ""
                  , nn = y.imageFive.data ? y.imageFive.data.attributes.formats.hasOwnProperty("small") ? y.imageFive.data.attributes.formats.small.url : y.imageFive.data.attributes.formats.thumbnail.url : "";
                f({
                    make: _,
                    model: w,
                    answerYear: N,
                    photoCredit: D
                }),
                p({
                    imageFull: Q,
                    imageOne: H,
                    imageTwo: xe,
                    imageThree: ue,
                    imageFour: ve,
                    imageFive: nn
                }),
                R({
                    x: F,
                    y: z
                })
            } else
                ee.get(`${M}/answers/?populate=*`).then(y => {
                    if (y.data.data.length) {
                        const _ = y.data.data[0].attributes
                          , w = _.make.data.attributes.make
                          , N = _.model.data.attributes.model
                          , F = _.answerYear
                          , z = _.xCoordinate
                          , D = _.yCoordinate
                          , Q = _.photoCredit ? _.photoCredit : ""
                          , H = _.imageFull ? _.imageFull.data.attributes : _.imageFull.data.attributes.formats.hasOwnProperty("large") ? _.imageFull.data.attributes.formats.large : _.imageFull.data.attributes.formats.medium
                          , xe = _.imageOne.data ? _.imageOne.data.attributes.formats.hasOwnProperty("small") ? _.imageOne.data.attributes.formats.small.url : _.imageOne.data.attributes.formats.thumbnail.url : ""
                          , ue = _.imageTwo.data ? _.imageTwo.data.attributes.formats.hasOwnProperty("small") ? _.imageTwo.data.attributes.formats.small.url : _.imageTwo.data.attributes.formats.thumbnail.url : ""
                          , ve = _.imageThree.data ? _.imageThree.data.attributes.formats.hasOwnProperty("small") ? _.imageThree.data.attributes.formats.small.url : _.imageThree.data.attributes.formats.thumbnail.url : ""
                          , nn = _.imageFour.data ? _.imageFour.data.attributes.formats.hasOwnProperty("small") ? _.imageFour.data.attributes.formats.small.url : _.imageFour.data.attributes.formats.thumbnail.url : ""
                          , vf = _.imageFive.data ? _.imageFive.data.attributes.formats.hasOwnProperty("small") ? _.imageFive.data.attributes.formats.small.url : _.imageFive.data.attributes.formats.thumbnail.url : "";
                        f({
                            make: w,
                            model: N,
                            answerYear: F,
                            photoCredit: Q
                        }),
                        p({
                            imageFull: H,
                            imageOne: xe,
                            imageTwo: ue,
                            imageThree: ve,
                            imageFour: nn,
                            imageFive: vf
                        }),
                        R({
                            x: z,
                            y: D
                        })
                    } else {
                        const _ = ""
                          , w = ""
                          , N = ""
                          , F = ""
                          , z = "https://placehold.jp/0f0a10/ffffff/300x200.png?text=%F0%9F%8F%8E"
                          , D = z
                          , Q = z
                          , H = z
                          , xe = z
                          , ue = z
                          , ve = z;
                        f({
                            make: _,
                            model: w,
                            answerYear: N,
                            photoCredit: F
                        }),
                        p({
                            imageFull: D,
                            imageOne: Q,
                            imageTwo: H,
                            imageThree: xe,
                            imageFour: ue,
                            imageFive: ve
                        }),
                        R({
                            x: Math.random() * 899 + 1,
                            y: Math.random() * 599 + 1
                        })
                    }
                }
                ).catch(y => {
                    console.error(y)
                }
                )
        }
        ).catch(k => {
            console.error(k)
        }
        )
    }
    , []),
    $.useEffect( () => {
        let k = localStorage.getItem("gamePlayed");
        const y = localStorage.getItem("lastPlayed");
        if (y === null && t(!0),
        y !== L)
            localStorage.setItem("gamePlayed", "false"),
            k = "false",
            localStorage.removeItem("gameScore"),
            localStorage.removeItem("gameRound"),
            localStorage.removeItem("gameFormVals");
        else {
            const z = localStorage.getItem("gameScore");
            z && x(JSON.parse(z));
            const D = localStorage.getItem("gameRound");
            D && m(JSON.parse(D));
            const Q = localStorage.getItem("gameFormVals");
            Q && S(JSON.parse(Q))
        }
        k === "true" && r(!0);
        const _ = localStorage.getItem("answerStreak")
          , w = _ ? parseInt(_) : 0;
        s(w);
        const N = localStorage.getItem("allTimeScore")
          , F = N ? parseInt(N) : 0;
        u(F)
    }
    , [T, L]);
    function le(k, y) {
        let _ = c.currentRound
          , w = c.currentPoints
          , N = {
            make: !1,
            model: !1,
            year: !1
        }
          , F = {
            make: v.make,
            model: v.model,
            year: v.year
        };
        T.make && v.make === T.make && (N.make = !0,
        c.make || (w += 1)),
        T.model && v.model === T.model && (N.model = !0,
        c.model || (w += 1)),
        parseInt(v.year) >= parseInt(T.answerYear) - 2 && parseInt(v.year) <= parseInt(T.answerYear) + 2 && (N.year = !0,
        c.year || (w += 1)),
        x({
            ...g,
            [_]: N
        }),
        localStorage.setItem("gameScore", JSON.stringify({
            ...g,
            [_]: N
        })),
        setTimeout( () => {
            localStorage.setItem("gameRound", JSON.stringify({
                ...c,
                currentPoints: w,
                currentRound: c.currentPoints === 3 ? c.currentRound : c.currentRound === 5 ? 5 : k,
                multiplier: c.currentPoints === 3 ? c.multiplier : c.multiplier === 0 ? 1 : y,
                make: N.make,
                model: N.model,
                year: N.year
            })),
            m({
                ...c,
                currentPoints: w,
                currentRound: c.currentPoints === 3 ? c.currentRound : c.currentRound === 5 ? 5 : k,
                multiplier: c.currentPoints === 3 ? c.multiplier : c.multiplier === 0 ? 1 : y,
                make: N.make,
                model: N.model,
                year: N.year
            })
        }
        , 1750),
        S(F),
        localStorage.setItem("gameFormVals", JSON.stringify(F)),
        w === 3 && (( () => {
            var D = new Date;
            let H = new Date(D.setDate(new Date().getDate() - 1)).toLocaleDateString("en-GB").split("/")
              , xe = `${H[2]}-${H[1]}-${H[0]}`;
            return localStorage.getItem("lastPlayed") === xe
        }
        )() ? (localStorage.setItem("answerStreak", `${l + 1}`),
        s(l + 1)) : (localStorage.setItem("answerStreak", "0"),
        s(0)),
        localStorage.setItem("lastPlayed", L),
        localStorage.setItem("allTimeScore", `${a + (6 - _) * w}`),
        u(a + (6 - _) * w),
        localStorage.setItem("gamePlayed", "true"),
        r(!0),
        setTimeout( () => o("win"), 2500)),
        _ === 5 && w !== 3 && (localStorage.setItem("answerStreak", "0"),
        s(0),
        localStorage.setItem("lastPlayed", L),
        localStorage.setItem("allTimeScore", `${a + (6 - _) * w}`),
        localStorage.setItem("gamePlayed", "true"),
        u(a + (6 - _) * w),
        r(!0),
        setTimeout( () => o("lose"), 2500))
    }
    function Ze() {
        if (c.currentPoints === 3 && n) {
            o("win"),
            localStorage.setItem("lastPlayed", L);
            return
        }
        if (c.currentPoints !== 3 && n) {
            o("lose");
            return
        }
        const k = c.currentRound + 1
          , y = c.multiplier - 1;
        le(k, y)
    }
    function lt(k, y) {
        S({
            ...v,
            [k]: y
        })
    }
    const O = k => {
        t(k)
    }
    ;
    return h.jsx("div", {
        className: "App",
        children: h.jsxs("section", {
            className: "cardle-content",
            children: [h.jsx("header", {
                className: "header",
                children: h.jsx(S0, {
                    handleClick: O
                })
            }), h.jsxs("main", {
                className: "main",
                children: [h.jsx(Gg, {
                    round: c.currentRound,
                    images: d,
                    coordinates: C
                }), h.jsx(qg, {
                    multiplier: c.multiplier,
                    currentPoints: c.currentPoints,
                    score: g
                }), h.jsx(Kg, {
                    formValues: v,
                    updateForm: lt,
                    updateRound: Ze,
                    isPlayed: n,
                    round: c
                }), e && h.jsx(k0, {
                    handleClick: O
                }), i && h.jsx(C0, {
                    score: g,
                    result: i,
                    round: c.currentRound,
                    total: U,
                    allTimeScore: a,
                    streak: l,
                    closeModal: () => o(""),
                    answer: T,
                    imageFull: d.imageFull
                })]
            })]
        })
    })
}
var mf = {}
  , hf = {}
  , gf = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = function() {
        for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
            o[l] = arguments[l];
        if (typeof window < "u") {
            var s;
            typeof window.gtag > "u" && (window.dataLayer = window.dataLayer || [],
            window.gtag = function() {
                window.dataLayer.push(arguments)
            }
            ),
            (s = window).gtag.apply(s, o)
        }
    }
      , n = t;
    e.default = n
}
)(gf);
var yf = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = l;
    var t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
    function n(s) {
        return s.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(a, u, c) {
            return u > 0 && u + a.length !== c.length && a.search(t) > -1 && c.charAt(u - 2) !== ":" && (c.charAt(u + a.length) !== "-" || c.charAt(u - 1) === "-") && c.charAt(u - 1).search(/[^\s-]/) < 0 ? a.toLowerCase() : a.substr(1).search(/[A-Z]|\../) > -1 ? a : a.charAt(0).toUpperCase() + a.substr(1)
        })
    }
    function r(s) {
        return typeof s == "string" && s.indexOf("@") !== -1
    }
    var i = "REDACTED (Potential Email Address)";
    function o(s) {
        return r(s) ? (console.warn("This arg looks like an email address, redacting."),
        i) : s
    }
    function l() {
        var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
          , a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
          , u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
          , c = s || "";
        return a && (c = n(s)),
        u && (c = o(c)),
        c
    }
}
)(yf);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = e.GA4 = void 0;
    var t = l(gf)
      , n = l(yf)
      , r = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"]
      , i = ["title", "location"]
      , o = ["page", "hitType"];
    function l(O) {
        return O && O.__esModule ? O : {
            default: O
        }
    }
    function s(O, k) {
        if (O == null)
            return {};
        var y = a(O, k), _, w;
        if (Object.getOwnPropertySymbols) {
            var N = Object.getOwnPropertySymbols(O);
            for (w = 0; w < N.length; w++)
                _ = N[w],
                !(k.indexOf(_) >= 0) && Object.prototype.propertyIsEnumerable.call(O, _) && (y[_] = O[_])
        }
        return y
    }
    function a(O, k) {
        if (O == null)
            return {};
        var y = {}, _ = Object.keys(O), w, N;
        for (N = 0; N < _.length; N++)
            w = _[N],
            !(k.indexOf(w) >= 0) && (y[w] = O[w]);
        return y
    }
    function u(O) {
        "@babel/helpers - typeof";
        return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(k) {
            return typeof k
        }
        : function(k) {
            return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k
        }
        ,
        u(O)
    }
    function c(O) {
        return x(O) || g(O) || d(O) || m()
    }
    function m() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function g(O) {
        if (typeof Symbol < "u" && O[Symbol.iterator] != null || O["@@iterator"] != null)
            return Array.from(O)
    }
    function x(O) {
        if (Array.isArray(O))
            return p(O)
    }
    function v(O, k) {
        var y = Object.keys(O);
        if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(O);
            k && (_ = _.filter(function(w) {
                return Object.getOwnPropertyDescriptor(O, w).enumerable
            })),
            y.push.apply(y, _)
        }
        return y
    }
    function S(O) {
        for (var k = 1; k < arguments.length; k++) {
            var y = arguments[k] != null ? arguments[k] : {};
            k % 2 ? v(Object(y), !0).forEach(function(_) {
                M(O, _, y[_])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(y)) : v(Object(y)).forEach(function(_) {
                Object.defineProperty(O, _, Object.getOwnPropertyDescriptor(y, _))
            })
        }
        return O
    }
    function T(O, k) {
        return R(O) || C(O, k) || d(O, k) || f()
    }
    function f() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function d(O, k) {
        if (O) {
            if (typeof O == "string")
                return p(O, k);
            var y = Object.prototype.toString.call(O).slice(8, -1);
            if (y === "Object" && O.constructor && (y = O.constructor.name),
            y === "Map" || y === "Set")
                return Array.from(O);
            if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
                return p(O, k)
        }
    }
    function p(O, k) {
        (k == null || k > O.length) && (k = O.length);
        for (var y = 0, _ = new Array(k); y < k; y++)
            _[y] = O[y];
        return _
    }
    function C(O, k) {
        var y = O == null ? null : typeof Symbol < "u" && O[Symbol.iterator] || O["@@iterator"];
        if (y != null) {
            var _, w, N, F, z = [], D = !0, Q = !1;
            try {
                if (N = (y = y.call(O)).next,
                k !== 0)
                    for (; !(D = (_ = N.call(y)).done) && (z.push(_.value),
                    z.length !== k); D = !0)
                        ;
            } catch (H) {
                Q = !0,
                w = H
            } finally {
                try {
                    if (!D && y.return != null && (F = y.return(),
                    Object(F) !== F))
                        return
                } finally {
                    if (Q)
                        throw w
                }
            }
            return z
        }
    }
    function R(O) {
        if (Array.isArray(O))
            return O
    }
    function j(O, k) {
        if (!(O instanceof k))
            throw new TypeError("Cannot call a class as a function")
    }
    function A(O, k) {
        for (var y = 0; y < k.length; y++) {
            var _ = k[y];
            _.enumerable = _.enumerable || !1,
            _.configurable = !0,
            "value"in _ && (_.writable = !0),
            Object.defineProperty(O, U(_.key), _)
        }
    }
    function L(O, k, y) {
        return k && A(O.prototype, k),
        Object.defineProperty(O, "prototype", {
            writable: !1
        }),
        O
    }
    function M(O, k, y) {
        return k = U(k),
        k in O ? Object.defineProperty(O, k, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : O[k] = y,
        O
    }
    function U(O) {
        var k = le(O, "string");
        return u(k) === "symbol" ? k : String(k)
    }
    function le(O, k) {
        if (u(O) !== "object" || O === null)
            return O;
        var y = O[Symbol.toPrimitive];
        if (y !== void 0) {
            var _ = y.call(O, k || "default");
            if (u(_) !== "object")
                return _;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (k === "string" ? String : Number)(O)
    }
    var Ze = function() {
        function O() {
            var k = this;
            j(this, O),
            M(this, "reset", function() {
                k.isInitialized = !1,
                k._testMode = !1,
                k._currentMeasurementId,
                k._hasLoadedGA = !1,
                k._isQueuing = !1,
                k._queueGtag = []
            }),
            M(this, "_gtag", function() {
                for (var y = arguments.length, _ = new Array(y), w = 0; w < y; w++)
                    _[w] = arguments[w];
                k._testMode || k._isQueuing ? k._queueGtag.push(_) : t.default.apply(void 0, _)
            }),
            M(this, "_loadGA", function(y, _) {
                var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
                if (!(typeof window > "u" || typeof document > "u") && !k._hasLoadedGA) {
                    var N = document.createElement("script");
                    N.async = !0,
                    N.src = "".concat(w, "?id=").concat(y),
                    _ && N.setAttribute("nonce", _),
                    document.body.appendChild(N),
                    window.dataLayer = window.dataLayer || [],
                    window.gtag = function() {
                        window.dataLayer.push(arguments)
                    }
                    ,
                    k._hasLoadedGA = !0
                }
            }),
            M(this, "_toGtagOptions", function(y) {
                if (y) {
                    var _ = {
                        cookieUpdate: "cookie_update",
                        cookieExpires: "cookie_expires",
                        cookieDomain: "cookie_domain",
                        cookieFlags: "cookie_flags",
                        userId: "user_id",
                        clientId: "client_id",
                        anonymizeIp: "anonymize_ip",
                        contentGroup1: "content_group1",
                        contentGroup2: "content_group2",
                        contentGroup3: "content_group3",
                        contentGroup4: "content_group4",
                        contentGroup5: "content_group5",
                        allowAdFeatures: "allow_google_signals",
                        allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                        nonInteraction: "non_interaction",
                        page: "page_path",
                        hitCallback: "event_callback"
                    }
                      , w = Object.entries(y).reduce(function(N, F) {
                        var z = T(F, 2)
                          , D = z[0]
                          , Q = z[1];
                        return _[D] ? N[_[D]] = Q : N[D] = Q,
                        N
                    }, {});
                    return w
                }
            }),
            M(this, "initialize", function(y) {
                var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!y)
                    throw new Error("Require GA_MEASUREMENT_ID");
                var w = typeof y == "string" ? [{
                    trackingId: y
                }] : y;
                k._currentMeasurementId = w[0].trackingId;
                var N = _.gaOptions
                  , F = _.gtagOptions
                  , z = _.nonce
                  , D = _.testMode
                  , Q = D === void 0 ? !1 : D
                  , H = _.gtagUrl;
                if (k._testMode = Q,
                Q || k._loadGA(k._currentMeasurementId, z, H),
                k.isInitialized || (k._gtag("js", new Date),
                w.forEach(function(ve) {
                    var nn = S(S(S({}, k._toGtagOptions(S(S({}, N), ve.gaOptions))), F), ve.gtagOptions);
                    Object.keys(nn).length ? k._gtag("config", ve.trackingId, nn) : k._gtag("config", ve.trackingId)
                })),
                k.isInitialized = !0,
                !Q) {
                    var xe = c(k._queueGtag);
                    for (k._queueGtag = [],
                    k._isQueuing = !1; xe.length; ) {
                        var ue = xe.shift();
                        k._gtag.apply(k, c(ue)),
                        ue[0] === "get" && (k._isQueuing = !0)
                    }
                }
            }),
            M(this, "set", function(y) {
                if (!y) {
                    console.warn("`fieldsObject` is required in .set()");
                    return
                }
                if (u(y) !== "object") {
                    console.warn("Expected `fieldsObject` arg to be an Object");
                    return
                }
                Object.keys(y).length === 0 && console.warn("empty `fieldsObject` given to .set()"),
                k._gaCommand("set", y)
            }),
            M(this, "_gaCommandSendEvent", function(y, _, w, N, F) {
                k._gtag("event", _, S(S({
                    event_category: y,
                    event_label: w,
                    value: N
                }, F && {
                    non_interaction: F.nonInteraction
                }), k._toGtagOptions(F)))
            }),
            M(this, "_gaCommandSendEventParameters", function() {
                for (var y = arguments.length, _ = new Array(y), w = 0; w < y; w++)
                    _[w] = arguments[w];
                if (typeof _[0] == "string")
                    k._gaCommandSendEvent.apply(k, c(_.slice(1)));
                else {
                    var N = _[0]
                      , F = N.eventCategory
                      , z = N.eventAction
                      , D = N.eventLabel
                      , Q = N.eventValue;
                    N.hitType;
                    var H = s(N, r);
                    k._gaCommandSendEvent(F, z, D, Q, H)
                }
            }),
            M(this, "_gaCommandSendTiming", function(y, _, w, N) {
                k._gtag("event", "timing_complete", {
                    name: _,
                    value: w,
                    event_category: y,
                    event_label: N
                })
            }),
            M(this, "_gaCommandSendPageview", function(y, _) {
                if (_ && Object.keys(_).length) {
                    var w = k._toGtagOptions(_)
                      , N = w.title
                      , F = w.location
                      , z = s(w, i);
                    k._gtag("event", "page_view", S(S(S(S({}, y && {
                        page_path: y
                    }), N && {
                        page_title: N
                    }), F && {
                        page_location: F
                    }), z))
                } else
                    y ? k._gtag("event", "page_view", {
                        page_path: y
                    }) : k._gtag("event", "page_view")
            }),
            M(this, "_gaCommandSendPageviewParameters", function() {
                for (var y = arguments.length, _ = new Array(y), w = 0; w < y; w++)
                    _[w] = arguments[w];
                if (typeof _[0] == "string")
                    k._gaCommandSendPageview.apply(k, c(_.slice(1)));
                else {
                    var N = _[0]
                      , F = N.page;
                    N.hitType;
                    var z = s(N, o);
                    k._gaCommandSendPageview(F, z)
                }
            }),
            M(this, "_gaCommandSend", function() {
                for (var y = arguments.length, _ = new Array(y), w = 0; w < y; w++)
                    _[w] = arguments[w];
                var N = typeof _[0] == "string" ? _[0] : _[0].hitType;
                switch (N) {
                case "event":
                    k._gaCommandSendEventParameters.apply(k, _);
                    break;
                case "pageview":
                    k._gaCommandSendPageviewParameters.apply(k, _);
                    break;
                case "timing":
                    k._gaCommandSendTiming.apply(k, c(_.slice(1)));
                    break;
                case "screenview":
                case "transaction":
                case "item":
                case "social":
                case "exception":
                    console.warn("Unsupported send command: ".concat(N));
                    break;
                default:
                    console.warn("Send command doesn't exist: ".concat(N))
                }
            }),
            M(this, "_gaCommandSet", function() {
                for (var y = arguments.length, _ = new Array(y), w = 0; w < y; w++)
                    _[w] = arguments[w];
                typeof _[0] == "string" && (_[0] = M({}, _[0], _[1])),
                k._gtag("set", k._toGtagOptions(_[0]))
            }),
            M(this, "_gaCommand", function(y) {
                for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), N = 1; N < _; N++)
                    w[N - 1] = arguments[N];
                switch (y) {
                case "send":
                    k._gaCommandSend.apply(k, w);
                    break;
                case "set":
                    k._gaCommandSet.apply(k, w);
                    break;
                default:
                    console.warn("Command doesn't exist: ".concat(y))
                }
            }),
            M(this, "ga", function() {
                for (var y = arguments.length, _ = new Array(y), w = 0; w < y; w++)
                    _[w] = arguments[w];
                if (typeof _[0] == "string")
                    k._gaCommand.apply(k, _);
                else {
                    var N = _[0];
                    k._gtag("get", k._currentMeasurementId, "client_id", function(F) {
                        k._isQueuing = !1;
                        var z = k._queueGtag;
                        for (N({
                            get: function(H) {
                                return H === "clientId" ? F : H === "trackingId" ? k._currentMeasurementId : H === "apiVersion" ? "1" : void 0
                            }
                        }); z.length; ) {
                            var D = z.shift();
                            k._gtag.apply(k, c(D))
                        }
                    }),
                    k._isQueuing = !0
                }
                return k.ga
            }),
            M(this, "event", function(y, _) {
                if (typeof y == "string")
                    k._gtag("event", y, k._toGtagOptions(_));
                else {
                    var w = y.action
                      , N = y.category
                      , F = y.label
                      , z = y.value
                      , D = y.nonInteraction
                      , Q = y.transport;
                    if (!N || !w) {
                        console.warn("args.category AND args.action are required in event()");
                        return
                    }
                    var H = {
                        hitType: "event",
                        eventCategory: (0,
                        n.default)(N),
                        eventAction: (0,
                        n.default)(w)
                    };
                    F && (H.eventLabel = (0,
                    n.default)(F)),
                    typeof z < "u" && (typeof z != "number" ? console.warn("Expected `args.value` arg to be a Number.") : H.eventValue = z),
                    typeof D < "u" && (typeof D != "boolean" ? console.warn("`args.nonInteraction` must be a boolean.") : H.nonInteraction = D),
                    typeof Q < "u" && (typeof Q != "string" ? console.warn("`args.transport` must be a string.") : (["beacon", "xhr", "image"].indexOf(Q) === -1 && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),
                    H.transport = Q)),
                    k._gaCommand("send", H)
                }
            }),
            M(this, "send", function(y) {
                k._gaCommand("send", y)
            }),
            this.reset()
        }
        return L(O, [{
            key: "gtag",
            value: function() {
                this._gtag.apply(this, arguments)
            }
        }]),
        O
    }();
    e.GA4 = Ze;
    var lt = new Ze;
    e.default = lt
}
)(hf);
(function(e) {
    function t(s) {
        "@babel/helpers - typeof";
        return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }
        ,
        t(s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = e.ReactGAImplementation = void 0;
    var n = i(hf);
    function r(s) {
        if (typeof WeakMap != "function")
            return null;
        var a = new WeakMap
          , u = new WeakMap;
        return (r = function(m) {
            return m ? u : a
        }
        )(s)
    }
    function i(s, a) {
        if (s && s.__esModule)
            return s;
        if (s === null || t(s) !== "object" && typeof s != "function")
            return {
                default: s
            };
        var u = r(a);
        if (u && u.has(s))
            return u.get(s);
        var c = {}
          , m = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var g in s)
            if (g !== "default" && Object.prototype.hasOwnProperty.call(s, g)) {
                var x = m ? Object.getOwnPropertyDescriptor(s, g) : null;
                x && (x.get || x.set) ? Object.defineProperty(c, g, x) : c[g] = s[g]
            }
        return c.default = s,
        u && u.set(s, c),
        c
    }
    var o = n.GA4;
    e.ReactGAImplementation = o;
    var l = n.default;
    e.default = l
}
)(mf);
const Jg = _u(mf)
  , bg = "G-42ZGN92SDT";
Jg.initialize(`${bg}`);
const Xg = Mo.createRoot(document.getElementById("root"));
Xg.render(h.jsx(Lf.StrictMode, {
    children: h.jsx(Yg, {})
}));
