(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa = '" style="background-image:url(',
        ba = "-disabled",
        ca = "-document.getElementById('",
        da = "/translate_a/t",
        ea = "/translate_suggestion?client=",
        fa = '</button></div></div></td></tr><tr id="',
        ha = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        ia = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
        ja = "Component already rendered",
        g = "DIV",
        ka = "Edge",
        la = "Google Website Translator",
        ma = "IFRAME",
        na = "INPUT",
        oa = "INTERNAL_SERVER_ERROR",
        pa = "Not available",
        qa = "POST",
        ra = "SPAN",
        sa = "Symbol.iterator",
        ta = "TEXTAREA",
        ua = "Unable to set parent component",
        va = "[goog.net.IframeIo] Unable to send, already active.",
        wa = "about:invalid#zClosurez",
        xa = "about:invalid#zSoyz",
        ya = "absolute",
        za = "action",
        Aa = "activedescendant",
        Ba = "activity-form-container",
        Ca = "alt-edited",
        Da = "array",
        Ea = "auto",
        Fa = "backgroundImage",
        Ga = "backgroundPosition",
        Ha = "blur",
        Ia = "border-box",
        Ja = "button",
        Ka = "callback",
        La = "cancelled",
        Ma = "change",
        Na = "checked",
        Oa = "chg_tgt_lang",
        Pa = "click",
        Qa = "clk_no_ap_site",
        Ra = "complete",
        Sa = "container",
        Ta = "contextmenu",
        Ua = "dblclick",
        Va = "direction",
        Wa = "div",
        Xa = "finish",
        Ya = "finishSourceLang",
        Za = "finishTargetLang",
        $a = "focus",
        ab = "focusin",
        bb = "focusout",
        p = "function",
        cb = "goog-float-bottom",
        db = "goog-float-top",
        eb = "goog-inline-block ",
        fb = "goog-menuheader",
        gb = "goog-menuseparator",
        hb = "goog-option",
        jb = "goog-option-selected",
        kb = "goog-te-menu-value",
        lb = "goog-te-menu2-item-selected",
        mb = "goog-te-spinner-animation-show",
        nb = "goog-te-spinner-pos-show",
        ob = "hidden",
        pb = "hide",
        qb = "horizontal",
        rb = "https://translate.google.com",
        sb = "",
        tb = "",
        ub = "javascript:void(0)",
        vb = "keydown",
        wb = "keypress",
        xb = "load",
        yb = "mousedown",
        zb = "mousemove",
        Ab = "mouseout",
        Bb = "mouseover",
        Cb = "move_offscreen",
        r = "none",
        Db = "number",
        u = "object",
        Eb = "opacity 1s linear",
        Fb = "paddingLeft",
        Gb = "paddingRight",
        Hb = "position",
        Ib = "progressSection",
        Jb = "promptSourceLang",
        Kb = "promptTargetLang",
        Lb = "ready",
        Mb = "readystatechange",
        Nb = "rtl",
        Ob = "selected",
        Pb = "skiptranslate",
        Qb = "status-message",
        v = "string",
        Rb = "submitted",
        Sb = "targetLanguage",
        Tb = "textarea-placeholder-input",
        Ub = "toggle_display",
        Vb = "trans-target-empty",
        Wb = "trans-target-highlight",
        Xb = "transition",
        Yb = "translate",
        Zb = "vertical",
        $b = "visible",
        ac = "withCredentials",
        w;

    function bc(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }
    var cc = typeof Object.defineProperties == p ? Object.defineProperty : function(a, b, c) { if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value; return a };

    function dc(a) { a = [u == typeof globalThis && globalThis, a, u == typeof window && window, u == typeof self && self, u == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }
    var ec = dc(this);

    function fc(a, b) { if (b) a: { var c = ec;a = a.split("."); for (var d = 0; d < a.length - 1; d++) { var e = a[d]; if (!(e in c)) break a;
                c = c[e] } a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && cc(c, a, { configurable: !0, writable: !0, value: b }) } }
    fc("Symbol", function(a) {
        function b(f) { if (this instanceof b) throw new TypeError("Symbol is not a constructor"); return new c(d + (f || "") + "_" + e++, f) }

        function c(f, h) { this.g = f;
            cc(this, "description", { configurable: !0, writable: !0, value: h }) } if (a) return a;
        c.prototype.toString = function() { return this.g }; var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0; return b });
    fc(sa, function(a) { if (a) return a;
        a = Symbol(sa); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = ec[b[c]];
            typeof d === p && typeof d.prototype[a] != p && cc(d.prototype, a, { configurable: !0, writable: !0, value: function() { return gc(bc(this)) } }) } return a });

    function gc(a) { a = { next: a };
        a[Symbol.iterator] = function() { return this }; return a }

    function hc(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: bc(a) } }
    var ic = typeof Object.create == p ? Object.create : function(a) {
            function b() {} b.prototype = a; return new b },
        jc;
    if (typeof Object.setPrototypeOf == p) jc = Object.setPrototypeOf;
    else { var kc;
        a: { var lc = { a: !0 },
                mc = {}; try { mc.__proto__ = lc;
                kc = mc.a; break a } catch (a) {} kc = !1 } jc = kc ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var nc = jc;

    function x(a, b) { a.prototype = ic(b.prototype);
        a.prototype.constructor = a; if (nc) nc(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d) } else a[c] = b[c];
        a.G = b.prototype }

    function oc(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }
    fc("WeakMap", function(a) {
        function b(l) { this.g = (k += Math.random() + 1).toString(); if (l) { l = hc(l); for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1]) } }

        function c() {}

        function d(l) { var m = typeof l; return m === u && null !== l || m === p }

        function e(l) { if (!oc(l, h)) { var m = new c;
                cc(l, h, { value: m }) } }

        function f(l) { var m = Object[l];
            m && (Object[l] = function(n) { if (n instanceof c) return n;
                Object.isExtensible(n) && e(n); return m(n) }) }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [l,
                                2
                            ],
                            [m, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(m)) return !1;
                    n.delete(l);
                    n.set(m, 4);
                    return !n.has(l) && 4 == n.get(m)
                } catch (q) { return !1 }
            }()) return a;
        var h = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var k = 0;
        b.prototype.set = function(l, m) { if (!d(l)) throw Error("Invalid WeakMap key");
            e(l); if (!oc(l, h)) throw Error("WeakMap key fail: " + l);
            l[h][this.g] = m; return this };
        b.prototype.get = function(l) { return d(l) && oc(l, h) ? l[h][this.g] : void 0 };
        b.prototype.has = function(l) {
            return d(l) && oc(l, h) && oc(l[h],
                this.g)
        };
        b.prototype.delete = function(l) { return d(l) && oc(l, h) && oc(l[h], this.g) ? delete l[h][this.g] : !1 };
        return b
    });
    fc("Map", function(a) {
        function b() { var k = {}; return k.qb = k.next = k.head = k }

        function c(k, l) { var m = k.g; return gc(function() { if (m) { for (; m.head != k.g;) m = m.qb; for (; m.next != m.head;) return m = m.next, { done: !1, value: l(m) };
                    m = null } return { done: !0, value: void 0 } }) }

        function d(k, l) {
            var m = l && typeof l;
            m == u || m == p ? f.has(l) ? m = f.get(l) : (m = "" + ++h, f.set(l, m)) : m = "p_" + l;
            var n = k.h[m];
            if (n && oc(k.h, m))
                for (k = 0; k < n.length; k++) { var q = n[k]; if (l !== l && q.key !== q.key || l === q.key) return { id: m, list: n, index: k, Da: q } }
            return {
                id: m,
                list: n,
                index: -1,
                Da: void 0
            }
        }

        function e(k) { this.h = {};
            this.g = b();
            this.size = 0; if (k) { k = hc(k); for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1]) } }
        if (function() {
                if (!a || typeof a != p || !a.prototype.entries || typeof Object.seal != p) return !1;
                try {
                    var k = Object.seal({ x: 4 }),
                        l = new a(hc([
                            [k, "s"]
                        ]));
                    if ("s" != l.get(k) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ?
                        !1 : !0
                } catch (q) { return !1 }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(k, l) { k = 0 === k ? 0 : k; var m = d(this, k);
            m.list || (m.list = this.h[m.id] = []);
            m.Da ? m.Da.value = l : (m.Da = { next: this.g, qb: this.g.qb, head: this.g, key: k, value: l }, m.list.push(m.Da), this.g.qb.next = m.Da, this.g.qb = m.Da, this.size++); return this };
        e.prototype.delete = function(k) {
            k = d(this, k);
            return k.Da && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.h[k.id], k.Da.qb.next = k.Da.next, k.Da.next.qb = k.Da.qb, k.Da.head = null, this.size--, !0) :
                !1
        };
        e.prototype.clear = function() { this.h = {};
            this.g = this.g.qb = b();
            this.size = 0 };
        e.prototype.has = function(k) { return !!d(this, k).Da };
        e.prototype.get = function(k) { return (k = d(this, k).Da) && k.value };
        e.prototype.entries = function() { return c(this, function(k) { return [k.key, k.value] }) };
        e.prototype.keys = function() { return c(this, function(k) { return k.key }) };
        e.prototype.values = function() { return c(this, function(k) { return k.value }) };
        e.prototype.forEach = function(k, l) {
            for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value,
                k.call(l, n[1], n[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var h = 0;
        return e
    });
    fc("Array.prototype.find", function(a) { return a ? a : function(b, c) { a: { var d = this;d instanceof String && (d = String(d)); for (var e = d.length, f = 0; f < e; f++) { var h = d[f]; if (b.call(c, h, f, d)) { b = h; break a } } b = void 0 } return b } });

    function pc(a, b) { a instanceof String && (a += ""); var c = 0,
            d = !1,
            e = { next: function() { if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } } d = !0; return { done: !0, value: void 0 } } };
        e[Symbol.iterator] = function() { return e }; return e } fc("Array.prototype.values", function(a) { return a ? a : function() { return pc(this, function(b, c) { return c }) } });
    fc("Array.prototype.keys", function(a) { return a ? a : function() { return pc(this, function(b) { return b }) } });
    fc("Array.from", function(a) { return a ? a : function(b, c, d) { c = null != c ? c : function(k) { return k }; var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator]; if (typeof f == p) { b = f.call(b); for (var h = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, h++)) } else
                for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h)); return e } });
    var qc = qc || {},
        z = this || self;

    function rc(a) { a.Mb = void 0;
        a.ka = function() { return a.Mb ? a.Mb : a.Mb = new a } }

    function sc(a) { var b = typeof a; return b != u ? b : a ? Array.isArray(a) ? Da : b : "null" }

    function tc(a) { var b = sc(a); return b == Da || b == u && typeof a.length == Db }

    function uc(a) { var b = typeof a; return b == u && null != a || b == p }

    function vc(a) { return Object.prototype.hasOwnProperty.call(a, wc) && a[wc] || (a[wc] = ++xc) }
    var wc = "closure_uid_" + (1E9 * Math.random() >>> 0),
        xc = 0;

    function yc(a, b, c) { return a.call.apply(a.bind, arguments) }

    function zc(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d); return a.apply(b, e) } } return function() { return a.apply(b, arguments) } }

    function A(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? A = yc : A = zc; return A.apply(null, arguments) }

    function Ac(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var d = c.slice();
            d.push.apply(d, arguments); return a.apply(this, d) } }

    function Bc() { return Date.now() }

    function Cc(a, b) { a = a.split("."); var c = z;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b }

    function B(a, b) {
        function c() {} c.prototype = b.prototype;
        a.G = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.dk = function(d, e, f) { for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k]; return b.prototype[e].apply(d, h) } }

    function Dc(a) { return a };

    function Ec(a, b) { if (Error.captureStackTrace) Error.captureStackTrace(this, Ec);
        else { var c = Error().stack;
            c && (this.stack = c) } a && (this.message = String(a));
        void 0 !== b && (this.cause = b) } B(Ec, Error);
    Ec.prototype.name = "CustomError";
    var Fc, Gc = {};

    function Hc(a, b) { a = a.split("%s"); for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ec.call(this, c + a[d]) } B(Hc, Ec);
    Hc.prototype.name = "AssertionError";
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Ic(a) { return a[a.length - 1] }
    var Jc = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) { if (typeof a === v) return typeof b !== v || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c; return -1 },
        Kc = Array.prototype.forEach ? function(a, b) { Array.prototype.forEach.call(a, b, void 0) } : function(a, b) { for (var c = a.length, d = typeof a === v ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a) },
        Lc = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a,
                b, void 0)
        } : function(a, b) { for (var c = a.length, d = Array(c), e = typeof a === v ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a)); return d },
        Mc = Array.prototype.some ? function(a, b) { return Array.prototype.some.call(a, b, void 0) } : function(a, b) { for (var c = a.length, d = typeof a === v ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0; return !1 },
        Nc = Array.prototype.every ? function(a, b) { return Array.prototype.every.call(a, b, void 0) } : function(a, b) {
            for (var c = a.length, d = typeof a === v ? a.split("") :
                    a, e = 0; e < c; e++)
                if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0
        };

    function Oc(a, b) { return 0 <= Jc(a, b) }

    function Pc(a, b) { b = Jc(a, b); var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1); return c }

    function Qc(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] }

    function Rc(a, b, c, d) { Array.prototype.splice.apply(a, Sc(arguments, 1)) }

    function Sc(a, b, c) { return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c) };

    function Uc(a, b) { for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0; return !1 }

    function Vc(a) { var b = [],
            c = 0,
            d; for (d in a) b[c++] = d; return b }

    function Wc() { var a = Xc,
            b; for (b in a) return !1; return !0 }

    function Yc(a, b, c) { if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c }

    function Zc(a) { var b = {},
            c; for (c in a) b[c] = a[c]; return b }
    var $c = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ad(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < $c.length; f++) c = $c[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } }

    function bd(a, b, c) { for (var d in a) b.call(c, a[d], d, a) };
    var cd = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };
    var dd;

    function ed() { if (void 0 === dd) { var a = null,
                b = z.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: Dc, createScript: Dc, createScriptURL: Dc }) } catch (c) { z.console && z.console.error(c.message) } dd = a } else dd = a } return dd };

    function fd(a, b) { this.g = a === gd && b || "";
        this.h = hd } fd.prototype.Ta = !0;
    fd.prototype.Ja = function() { return this.g };

    function id(a) { return a instanceof fd && a.constructor === fd && a.h === hd ? a.g : "type_error:Const" }
    var hd = {},
        gd = {};
    var jd = {};

    function kd(a, b) { this.g = b === jd ? a : "";
        this.Ta = !0 } kd.prototype.toString = function() { return this.g.toString() };
    kd.prototype.Ja = function() { return this.g.toString() };

    function ld(a, b) { this.g = b === md ? a : "" } ld.prototype.toString = function() { return this.g + "" };
    ld.prototype.Ta = !0;
    ld.prototype.Ja = function() { return this.g.toString() };

    function nd(a) { return a instanceof ld && a.constructor === ld ? a.g : "type_error:TrustedResourceUrl" }
    var md = {};

    function od(a) { var b = ed();
        a = b ? b.createScriptURL(a) : a; return new ld(a, md) };
    var pd = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

    function qd(a) { return a.replace(/(\r\n|\r|\n)/g, "<br>") }

    function rd(a) { if (!sd.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(td, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ud, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(vd, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(wd, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(xd, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(yd, "&#0;")); return a }
    var td = /&/g,
        ud = /</g,
        vd = />/g,
        wd = /"/g,
        xd = /'/g,
        yd = /\x00/g,
        sd = /[\x00&<>"']/;

    function zd(a, b) { var c = 0;
        a = pd(String(a)).split(".");
        b = pd(String(b)).split("."); for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) { var f = a[e] || "",
                h = b[e] || "";
            do { f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""]; if (0 == f[0].length && 0 == h[0].length) break;
                c = Ad(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ad(0 == f[2].length, 0 == h[2].length) || Ad(f[2], h[2]);
                f = f[3];
                h = h[3] } while (0 == c) } return c }

    function Ad(a, b) { return a < b ? -1 : a > b ? 1 : 0 };

    function Bd(a, b) { this.g = b === Cd ? a : "" } Bd.prototype.toString = function() { return this.g.toString() };
    Bd.prototype.Ta = !0;
    Bd.prototype.Ja = function() { return this.g.toString() };

    function Dd(a) { return a instanceof Bd && a.constructor === Bd ? a.g : "type_error:SafeUrl" }
    var Ed = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Fd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Gd(a) { if (a instanceof Bd) return a;
        a = typeof a == u && a.Ta ? a.Ja() : String(a);
        Fd.test(a) ? a = Hd(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Ed) ? Hd(a) : null); return a }
    var Cd = {};

    function Hd(a) { return new Bd(a, Cd) }
    var Id = Hd(wa);
    var Jd = {};

    function Kd(a, b) { this.g = b === Jd ? a : "";
        this.Ta = !0 } Kd.prototype.Ja = function() { return this.g };
    Kd.prototype.toString = function() { return this.g.toString() };

    function Ld(a) { return a instanceof Kd && a.constructor === Kd ? a.g : "type_error:SafeStyle" }
    var Md = new Kd("", Jd);

    function Nd(a) { if (a instanceof Bd) return 'url("' + Dd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'; if (a instanceof fd) a = id(a);
        else { a = String(a); var b = a.replace(Od, "$1").replace(Od, "$1").replace(Pd, "url"); if (Qd.test(b)) { if (b = !Rd.test(a)) { for (var c = b = !0, d = 0; d < a.length; d++) { var e = a.charAt(d); "'" == e && c ? b = !b : '"' == e && b && (c = !c) } b = b && c && Sd(a) } a = b ? Td(a) : "zClosurez" } else a = "zClosurez" } if (/[{;}]/.test(a)) throw new Hc("Value does not allow [{;}], got: %s.", [a]); return a }

    function Sd(a) { for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) { var e = a.charAt(d); if ("]" == e) { if (b) return !1;
                b = !0 } else if ("[" == e) { if (!b) return !1;
                b = !1 } else if (!b && !c.test(e)) return !1 } return b }
    var Qd = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Pd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Od = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Rd = /\/\*/;

    function Td(a) { return a.replace(Pd, function(b, c, d, e) { var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) { f = k; return l });
            b = (Gd(d) || Id).Ja(); return c + f + b + f + e }) };
    var Ud = {};

    function Vd(a, b) { this.g = b === Ud ? a : "";
        this.Ta = !0 } Vd.prototype.toString = function() { return this.g.toString() };
    Vd.prototype.Ja = function() { return this.g };

    function Wd(a) { return a instanceof Vd && a.constructor === Vd ? a.g : "type_error:SafeStyleSheet" };

    function Xd() { var a = z.navigator; return a && (a = a.userAgent) ? a : "" }

    function C(a) { return -1 != Xd().indexOf(a) };

    function Yd() { return C("Firefox") || C("FxiOS") }

    function Zd() { return (C("Chrome") || C("CriOS")) && !C(ka) || C("Silk") };
    var $d = {};

    function ae(a, b) { this.g = b === $d ? a : "";
        this.Ta = !0 } ae.prototype.Ja = function() { return this.g.toString() };
    ae.prototype.toString = function() { return this.g.toString() };

    function be(a) { return a instanceof ae && a.constructor === ae ? a.g : "type_error:SafeHtml" }

    function ce(a) { return a instanceof ae ? a : de(rd(typeof a == u && a.Ta ? a.Ja() : String(a))) }

    function ee(a) { if (a instanceof ae) return a;
        a = ce(a);
        a = qd(be(a).toString().replace(/  /g, " &#160;")); return de(a) }

    function fe(a, b, c) { ge(String(a));
        a = String(a);
        b = "<" + a + he(b);
        null == c ? c = [] : Array.isArray(c) || (c = [c]);!0 === cd[a.toLowerCase()] ? b += ">" : (c = ie(c), b += ">" + be(c).toString() + "</" + a + ">"); return de(b) }

    function ge(a) { if (!je.test(a)) throw Error(""); if (a.toUpperCase() in ke) throw Error(""); }

    function le(a) {
        function b(e) { Array.isArray(e) ? e.forEach(b) : (e = ce(e), d.push(be(e).toString())) } var c = ce(me),
            d = [];
        a.forEach(b); return de(d.join(be(c).toString())) }

    function ie(a) { return le(Array.prototype.slice.call(arguments)) }

    function de(a) { var b = ed();
        a = b ? b.createHTML(a) : a; return new ae(a, $d) }

    function he(a) {
        var b = "";
        if (a)
            for (var c in a)
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                    if (!je.test(c)) throw Error("");
                    var d = a[c];
                    if (null != d) {
                        var e = c;
                        var f = d;
                        if (f instanceof fd) f = id(f);
                        else if ("style" == e.toLowerCase()) {
                            d = void 0;
                            if (!uc(f)) throw Error("");
                            if (!(f instanceof Kd)) {
                                var h = "";
                                for (d in f)
                                    if (Object.prototype.hasOwnProperty.call(f, d)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
                                        var k = f[d];
                                        null != k && (k = Array.isArray(k) ? k.map(Nd).join(" ") : Nd(k), h += d +
                                            ":" + k + ";")
                                    } f = h ? new Kd(h, Jd) : Md
                            }
                            f = Ld(f)
                        } else { if (/^on/i.test(e)) throw Error(""); if (e.toLowerCase() in ne)
                                if (f instanceof ld) f = nd(f).toString();
                                else if (f instanceof Bd) f = Dd(f);
                            else if (typeof f === v) f = (Gd(f) || Id).Ja();
                            else throw Error(""); } f.Ta && (f = f.Ja());
                        e = e + '="' + rd(String(f)) + '"';
                        b += " " + e
                    }
                } return b
    }
    var je = /^[a-zA-Z0-9-]+$/,
        ne = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
        ke = { APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
        oe = de("<!DOCTYPE html>"),
        me = new ae(z.trustedTypes && z.trustedTypes.emptyHTML || "", $d),
        pe = de("<br>");

    function qe(a) { var b = { nonce: re("script[nonce]") };
        b = void 0 === b ? {} : b;
        a = (a instanceof kd && a.constructor === kd ? a.g : "type_error:SafeScript").toString(); var c = "<script";
        b.id && (c += ' id="' + se(b.id) + '"');
        b.nonce && (c += ' nonce="' + se(b.nonce) + '"');
        b.type && (c += ' type="' + se(b.type) + '"'); return de(c + (">" + a + "\x3c/script>")) }

    function se(a) { return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") };
    var te = RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");

    function ue() {}

    function ve(a) { var b = !1,
            c; return function() { b || (c = a(), b = !0); return c } };
    var we = ve(function() { var a = document.createElement(Wa),
            b = document.createElement(Wa);
        b.appendChild(document.createElement(Wa));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = be(me); return !b.parentElement });

    function xe(a, b) { if (we())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = be(b) }

    function ye(a, b) { b instanceof Bd || b instanceof Bd || (b = typeof b == u && b.Ta ? b.Ja() : String(b), Fd.test(b) || (b = wa), b = Hd(b));
        a.action = Dd(b) }
    var ze = /^[\w+/_-]+[=]{0,2}$/;

    function re(a) { var b = z.document; return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && ze.test(a) ? a : "" : "" };

    function Ae(a) { return a.replace(/\xa0|[ \t]+/g, " ") }

    function Be(a) { return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") }

    function Ce(a) { return a.replace(/^[\s\xa0]+/, "") }

    function De(a) { return a.replace(/[\s\xa0]+$/, "") }

    function Ee(a) { return encodeURIComponent(String(a)) }

    function Fe(a) { return decodeURIComponent(a.replace(/\+/g, " ")) }

    function Ge(a) { return a = rd(a) }

    function He(a) { return -1 != a.indexOf("&") ? "document" in z ? Ie(a) : Je(a) : a }

    function Ie(a) { var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' }; var c = z.document.createElement(Wa); return a.replace(Ke, function(d, e) { var f = b[d]; if (f) return f; "#" == e.charAt(0) && (e = Number("0" + e.slice(1)), isNaN(e) || (f = String.fromCharCode(e)));
            f || (f = de(d + " "), xe(c, f), f = c.firstChild.nodeValue.slice(0, -1)); return b[d] = f }) }

    function Je(a) { return a.replace(/&([^;]+);/g, function(b, c) { switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c) } }) }
    var Ke = /&([^;\s<&]+);?/g;

    function Le() { return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Bc()).toString(36) }

    function Me(a) { return String(a).replace(/\-([a-z])/g, function(b, c) { return c.toUpperCase() }) }

    function Ne(a) { return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) { return c + d.toUpperCase() }) };

    function Pe(a) { if (a.Pa && typeof a.Pa == p) return a.Pa(); if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values()); if (typeof a === v) return a.split(""); if (tc(a)) { for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]); return b } b = [];
        c = 0; for (d in a) b[c++] = a[d]; return b }

    function Qe(a) { if (a.wb && typeof a.wb == p) return a.wb(); if (!a.Pa || typeof a.Pa != p) { if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys()); if (!("undefined" !== typeof Set && a instanceof Set)) { if (tc(a) || typeof a === v) { var b = [];
                    a = a.length; for (var c = 0; c < a; c++) b.push(c); return b } return Vc(a) } } }

    function Se(a, b, c) { if (a.forEach && typeof a.forEach == p) a.forEach(b, c);
        else if (tc(a) || typeof a === v) Array.prototype.forEach.call(a, b, c);
        else
            for (var d = Qe(a), e = Pe(a), f = e.length, h = 0; h < f; h++) b.call(c, e[h], d && d[h], a) };
    var Te = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ue(a) { return a ? decodeURI(a) : a }

    function Ve(a, b) { if (a) { a = a.split("&"); for (var c = 0; c < a.length; c++) { var d = a[c].indexOf("="),
                    e = null; if (0 <= d) { var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1) } else f = a[c];
                b(f, e ? Fe(e) : "") } } };

    function We(a) { this.j = this.A = this.l = "";
        this.C = null;
        this.o = this.h = "";
        this.m = !1; var b;
        a instanceof We ? (this.m = a.m, Xe(this, a.l), this.A = a.A, this.j = a.j, Ye(this, a.C), this.h = a.h, Ze(this, $e(a.g)), this.o = a.o) : a && (b = String(a).match(Te)) ? (this.m = !1, Xe(this, b[1] || "", !0), this.A = af(b[2] || ""), this.j = af(b[3] || "", !0), Ye(this, b[4]), this.h = af(b[5] || "", !0), Ze(this, b[6] || "", !0), this.o = af(b[7] || "")) : (this.m = !1, this.g = new bf(null, this.m)) }
    We.prototype.toString = function() { var a = [],
            b = this.l;
        b && a.push(cf(b, df, !0), ":"); var c = this.j; if (c || "file" == b) a.push("//"), (b = this.A) && a.push(cf(b, df, !0), "@"), a.push(Ee(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.C, null != c && a.push(":", String(c)); if (c = this.h) this.j && "/" != c.charAt(0) && a.push("/"), a.push(cf(c, "/" == c.charAt(0) ? ef : ff, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.o) && a.push("#", cf(c, gf)); return a.join("") };
    We.prototype.resolve = function(a) {
        var b = new We(this),
            c = !!a.l;
        c ? Xe(b, a.l) : c = !!a.A;
        c ? b.A = a.A : c = !!a.j;
        c ? b.j = a.j : c = null != a.C;
        var d = a.h;
        if (c) Ye(b, a.C);
        else if (c = !!a.h) {
            if ("/" != d.charAt(0))
                if (this.j && !this.h) d = "/" + d;
                else { var e = b.h.lastIndexOf("/"); - 1 != e && (d = b.h.slice(0, e + 1) + d) } e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], h = 0; h < e.length;) {
                    var k = e[h++];
                    "." == k ? d && h == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length &&
                        "" != f[0]) && f.pop(), d && h == e.length && f.push("")) : (f.push(k), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.h = d : c = "" !== a.g.toString();
        c ? Ze(b, $e(a.g)) : c = !!a.o;
        c && (b.o = a.o);
        return b
    };

    function Xe(a, b, c) { a.l = c ? af(b, !0) : b;
        a.l && (a.l = a.l.replace(/:$/, "")) }

    function Ye(a, b) { if (b) { b = Number(b); if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.C = b } else a.C = null }

    function Ze(a, b, c) { b instanceof bf ? (a.g = b, hf(a.g, a.m)) : (c || (b = cf(b, jf)), a.g = new bf(b, a.m)) }

    function af(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" }

    function cf(a, b, c) { return typeof a === v ? (a = encodeURI(a).replace(b, kf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null }

    function kf(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) }
    var df = /[#\/\?@]/g,
        ff = /[#\?:]/g,
        ef = /[#\?]/g,
        jf = /[#\?@]/g,
        gf = /#/g;

    function bf(a, b) { this.h = this.g = null;
        this.j = a || null;
        this.l = !!b }

    function lf(a) { a.g || (a.g = new Map, a.h = 0, a.j && Ve(a.j, function(b, c) { a.add(Fe(b), c) })) }

    function mf(a) { var b = Qe(a); if ("undefined" == typeof b) throw Error("Keys are undefined"); var c = new bf(null);
        a = Pe(a); for (var d = 0; d < b.length; d++) { var e = b[d],
                f = a[d];
            Array.isArray(f) ? nf(c, e, f) : c.add(e, f) } return c } w = bf.prototype;
    w.add = function(a, b) { lf(this);
        this.j = null;
        a = of (this, a); var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h = this.h + 1; return this };
    w.remove = function(a) { lf(this);
        a = of (this, a); return this.g.has(a) ? (this.j = null, this.h = this.h - this.g.get(a).length, this.g.delete(a)) : !1 };
    w.cc = function() { lf(this); return 0 == this.h };

    function pf(a, b) { lf(a);
        b = of (a, b); return a.g.has(b) } w.forEach = function(a, b) { lf(this);
        this.g.forEach(function(c, d) { c.forEach(function(e) { a.call(b, e, d, this) }, this) }, this) };
    w.wb = function() { lf(this); for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]); return c };
    w.Pa = function(a) { lf(this); var b = []; if (typeof a === v) pf(this, a) && (b = b.concat(this.g.get( of (this, a))));
        else { a = Array.from(this.g.values()); for (var c = 0; c < a.length; c++) b = b.concat(a[c]) } return b };
    w.set = function(a, b) { lf(this);
        this.j = null;
        a = of (this, a);
        pf(this, a) && (this.h = this.h - this.g.get(a).length);
        this.g.set(a, [b]);
        this.h = this.h + 1; return this };
    w.get = function(a, b) { if (!a) return b;
        a = this.Pa(a); return 0 < a.length ? String(a[0]) : b };

    function nf(a, b, c) { a.remove(b);
        0 < c.length && (a.j = null, a.g.set( of (a, b), Qc(c)), a.h = a.h + c.length) } w.toString = function() { if (this.j) return this.j; if (!this.g) return ""; for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) { var d = b[c],
                e = Ee(d);
            d = this.Pa(d); for (var f = 0; f < d.length; f++) { var h = e; "" !== d[f] && (h += "=" + Ee(d[f]));
                a.push(h) } } return this.j = a.join("&") };

    function $e(a) { var b = new bf;
        b.j = a.j;
        a.g && (b.g = new Map(a.g), b.h = a.h); return b }

    function of (a, b) { b = String(b);
        a.l && (b = b.toLowerCase()); return b }

    function hf(a, b) { b && !a.l && (lf(a), a.j = null, a.g.forEach(function(c, d) { var e = d.toLowerCase();
            d != e && (this.remove(d), nf(this, e, c)) }, a));
        a.l = b } w.Yd = function(a) { for (var b = 0; b < arguments.length; b++) Se(arguments[b], function(c, d) { this.add(d, c) }, this) };
    var qf = {},
        rf = {},
        sf = {},
        tf = {};

    function uf() { throw Error("Do not instantiate directly"); } uf.prototype.ue = null;
    uf.prototype.ja = function() { return this.g };
    uf.prototype.toString = function() { return this.g };

    function vf(a) { if (a.Hb !== qf) throw Error("Sanitized content was not of kind HTML."); return de(a.toString()) }

    function wf() { uf.call(this) } B(wf, uf);
    wf.prototype.Hb = qf;

    function xf() { uf.call(this) } B(xf, uf);
    xf.prototype.Hb = tf;
    xf.prototype.ue = 1;

    function yf(a, b) { return null != a && a.Hb === b };

    function zf(a) {
        a: { var b = ["window", "location", "href"]; var c = z; for (var d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) { c = null; break a } } null == a && (a = 'Unknown Error of type "null/undefined"');
        if (typeof a === v) return { message: a, name: "Unknown error", lineNumber: pa, fileName: c, stack: pa };b = !1;
        try { var e = a.lineNumber || a.line || pa } catch (h) { e = pa, b = !0 }
        try { var f = a.fileName || a.filename || a.sourceURL || z.$googDebugFname || c } catch (h) { f = pa, b = !0 } c = Af(a);
        if (!(!b && a.lineNumber && a.fileName && a.stack && a.message && a.name)) return b = a.message,
        null == b && (b = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : Bf(a.constructor)) + '"' : "Unknown Error of unknown type", typeof a.toString === p && Object.prototype.toString !== a.toString && (b += ": " + a.toString())),
        { message: b, name: a.name || "UnknownError", lineNumber: e, fileName: f, stack: c || pa };a.stack = c;
        return { message: a.message, name: a.name, lineNumber: a.lineNumber, fileName: a.fileName, stack: a.stack }
    }

    function Af(a, b) { b || (b = {});
        b[Cf(a)] = !0; var c = a.stack || "";
        (a = a.cause) && !b[Cf(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += typeof a === v ? a : a.message + "\n"), c += Af(a, b)); return c }

    function Cf(a) { var b = "";
        typeof a.toString === p && (b = "" + a); return b + a.stack }

    function Df(a) { var b = Error(); if (Error.captureStackTrace) Error.captureStackTrace(b, a || Df), b = String(b.stack);
        else { try { throw b; } catch (c) { b = c } b = (b = b.stack) ? String(b) : null } b || (b = Ef(a || arguments.callee.caller, [])); return b }

    function Ef(a, b) {
        var c = [];
        if (Oc(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) { c.push(Bf(a) + "("); for (var d = a.arguments, e = 0; d && e < d.length; e++) { 0 < e && c.push(", "); var f = d[e]; switch (typeof f) {
                    case u:
                        f = f ? u : "null"; break;
                    case v:
                        break;
                    case Db:
                        f = String(f); break;
                    case "boolean":
                        f = f ? "true" : "false"; break;
                    case p:
                        f = (f = Bf(f)) ? f : "[fn]"; break;
                    default:
                        f = typeof f } 40 < f.length && (f = f.slice(0, 40) + "...");
                c.push(f) } b.push(a);
            c.push(")\n"); try { c.push(Ef(a.caller, b)) } catch (h) { c.push("[exception trying to get caller]\n") } } else a ?
            c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    }

    function Bf(a) { if (Ff[a]) return Ff[a];
        a = String(a); if (!Ff[a]) { var b = /function\s+([^\(]+)/m.exec(a);
            Ff[a] = b ? b[1] : "[Anonymous]" } return Ff[a] }
    var Ff = {};

    function Gf() { return C("iPhone") && !C("iPod") && !C("iPad") }

    function Hf() { return Gf() || C("iPad") || C("iPod") };

    function If(a) { If[" "](a); return a } If[" "] = function() {};

    function Jf(a, b) { try { return If(a[b]), !0 } catch (c) {} return !1 }

    function Kf(a, b, c) { return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b) };
    var Lf = C("Opera"),
        D = C("Trident") || C("MSIE"),
        Mf = C(ka),
        Nf = Mf || D,
        E = C("Gecko") && !(-1 != Xd().toLowerCase().indexOf("webkit") && !C(ka)) && !(C("Trident") || C("MSIE")) && !C(ka),
        G = -1 != Xd().toLowerCase().indexOf("webkit") && !C(ka),
        Of = G && C("Mobile"),
        Pf = C("Macintosh"),
        Qf = C("Windows"),
        Rf = C("Android"),
        Sf = Gf(),
        Tf = C("iPad"),
        Uf = C("iPod"),
        Vf = Hf();

    function Wf() { var a = z.document; return a ? a.documentMode : void 0 }
    var Xf;
    a: { var Yf = "",
            Zf = function() { var a = Xd(); if (E) return /rv:([^\);]+)(\)|;)/.exec(a); if (Mf) return /Edge\/([\d\.]+)/.exec(a); if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (G) return /WebKit\/(\S+)/.exec(a); if (Lf) return /(?:Version)[ \/]?(\S+)/.exec(a) }();Zf && (Yf = Zf ? Zf[1] : ""); if (D) { var $f = Wf(); if (null != $f && $f > parseFloat(Yf)) { Xf = String($f); break a } } Xf = Yf }
    var ag = Xf,
        bg = {};

    function cg(a) { return Kf(bg, a, function() { return 0 <= zd(ag, a) }) }
    var dg;
    if (z.document && D) { var eg = Wf();
        dg = eg ? eg : parseInt(ag, 10) || void 0 } else dg = void 0;
    var fg = dg;

    function gg(a) { if (null != a) switch (a.ue) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0 }
        return null }

    function hg(a) { return yf(a, qf) ? a : a instanceof ae ? ig(be(a).toString()) : a instanceof ae ? ig(be(a).toString()) : ig(String(String(a)).replace(jg, kg), gg(a)) }
    var ig = function(a) {
            function b(c) { this.g = c } b.prototype = a.prototype; return function(c, d) { c = new b(String(c));
                void 0 !== d && (c.ue = d); return c } }(wf),
        lg = function(a) {
            function b(c) { this.g = c } b.prototype = a.prototype; return function(c) { return new b(String(c)) } }(xf);

    function mg(a, b) { return a && b && a.Di && b.Di ? a.Hb !== b.Hb ? !1 : a.toString() === b.toString() : a instanceof uf && b instanceof uf ? a.Hb != b.Hb ? !1 : a.toString() == b.toString() : a == b }

    function ng(a) { return a instanceof uf ? !!a.ja() : !!a }

    function og(a) { return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>") }

    function H(a) { if (yf(a, qf)) { var b = String;
            a = String(a.ja()).replace(pg, "").replace(qg, "&lt;");
            b = b(a).replace(rg, kg) } else b = String(a).replace(jg, kg); return b }

    function sg(a) { yf(a, rf) || yf(a, sf) ? a = tg(a) : a instanceof Bd ? a = tg(Dd(a)) : a instanceof Bd ? a = tg(Dd(a)) : a instanceof ld ? a = tg(nd(a).toString()) : a instanceof ld ? a = tg(nd(a).toString()) : (a = String(a), a = ug.test(a) ? a.replace(vg, wg) : xa); return a }

    function xg(a) { yf(a, rf) || yf(a, sf) ? a = tg(a) : a instanceof Bd ? a = tg(Dd(a)) : a instanceof Bd ? a = tg(Dd(a)) : a instanceof ld ? a = tg(nd(a).toString()) : a instanceof ld ? a = tg(nd(a).toString()) : (a = String(a), a = yg.test(a) ? a.replace(vg, wg) : xa); return a }

    function zg(a) { return yf(a, sf) ? a.ja() : a instanceof ld ? nd(a).toString() : a instanceof ld ? tg(nd(a).toString()) : xa }

    function Ag(a) { yf(a, tf) ? a = og(a.ja()) : null == a ? a = "" : a instanceof Kd ? a = og(Ld(a)) : a instanceof Kd ? a = og(Ld(a)) : a instanceof Vd ? a = og(Wd(a)) : a instanceof Vd ? a = og(Wd(a)) : (a = String(a), a = Bg.test(a) ? a : "zSoyz"); return a }
    var Cg = { "\x00": "&#0;", "\t": "&#9;", "\n": "&#10;", "\v": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "-": "&#45;", "/": "&#47;", "<": "&lt;", "=": "&#61;", ">": "&gt;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" };

    function kg(a) { return Cg[a] }
    var Dg = { "\x00": "\\0 ", "\b": "\\8 ", "\t": "\\9 ", "\n": "\\a ", "\v": "\\b ", "\f": "\\c ", "\r": "\\d ", '"': "\\22 ", "&": "\\26 ", "'": "\\27 ", "(": "\\28 ", ")": "\\29 ", "*": "\\2a ", "/": "\\2f ", ":": "\\3a ", ";": "\\3b ", "<": "\\3c ", "=": "\\3d ", ">": "\\3e ", "@": "\\40 ", "\\": "\\5c ", "{": "\\7b ", "}": "\\7d ", "\u0085": "\\85 ", "\u00a0": "\\a0 ", "\u2028": "\\2028 ", "\u2029": "\\2029 " };

    function Eg(a) { return Dg[a] }
    var Fg = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function wg(a) { return Fg[a] }
    var jg = /[\x00\x22\x26\x27\x3c\x3e]/g,
        rg = /[\x00\x22\x27\x3c\x3e]/g,
        Gg = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        vg = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Bg = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        ug =
        /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i,
        yg = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function tg(a) { return String(a).replace(vg, wg) }
    var pg = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        qg = /</g;
    var Hg = D || G;

    function I(a, b) { this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0 }

    function Ig(a) { return new I(a.x, a.y) }

    function Jg(a, b) { return new I(a.x - b.x, a.y - b.y) } I.prototype.ceil = function() { this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y); return this };
    I.prototype.floor = function() { this.x = Math.floor(this.x);
        this.y = Math.floor(this.y); return this };
    I.prototype.round = function() { this.x = Math.round(this.x);
        this.y = Math.round(this.y); return this };
    I.prototype.translate = function(a, b) { a instanceof I ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), typeof b === Db && (this.y += b)); return this };

    function Kg(a, b) { this.width = a;
        this.height = b } w = Kg.prototype;
    w.aspectRatio = function() { return this.width / this.height };
    w.cc = function() { return !(this.width * this.height) };
    w.ceil = function() { this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height); return this };
    w.floor = function() { this.width = Math.floor(this.width);
        this.height = Math.floor(this.height); return this };
    w.round = function() { this.width = Math.round(this.width);
        this.height = Math.round(this.height); return this };

    function Lg(a) { return a ? new Mg(J(a)) : Fc || (Fc = new Mg) }

    function Ng(a, b) { return typeof b === v ? a.getElementById(b) : b }

    function Og(a, b) { return (b || document).getElementsByTagName(String(a)) }

    function Pg() { var a = document; return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : Qg(document, "*", Ca) }

    function Rg(a, b) { var c = b || document; if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else { c = document; var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Qg(c, "*", a, b)[0] || null } return a || null }

    function Qg(a, b, c, d) { a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : ""; if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : "")); if (c && a.getElementsByClassName) { a = a.getElementsByClassName(c); if (b) { d = {}; for (var e = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
                d.length = e; return d } return a } a = a.getElementsByTagName(b || "*"); if (c) { d = {}; for (f = e = 0; h = a[f]; f++) b = h.className, typeof b.split == p && Oc(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e; return d } return a }

    function Sg(a, b) { bd(b, function(c, d) { c && typeof c == u && c.Ta && (c = c.Ja()); "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Tg.hasOwnProperty(d) ? a.setAttribute(Tg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c }) }
    var Tg = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

    function Ug(a) { a = a.document;
        a = Vg(a) ? a.documentElement : a.body; return new Kg(a.clientWidth, a.clientHeight) }

    function Wg(a) { var b = Xg(a);
        a = a.parentWindow || a.defaultView; return D && cg("10") && a.pageYOffset != b.scrollTop ? new I(b.scrollLeft, b.scrollTop) : new I(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop) }

    function Xg(a) { return a.scrollingElement ? a.scrollingElement : !G && Vg(a) ? a.documentElement : a.body || a.documentElement }

    function Yg(a) { return a ? a.parentWindow || a.defaultView : window }

    function Zg(a, b, c) { return $g(document, arguments) }

    function $g(a, b) { var c = b[1],
            d = ah(a, String(b[0]));
        c && (typeof c === v ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : Sg(d, c));
        2 < b.length && bh(a, d, b, 2); return d }

    function bh(a, b, c, d) {
        function e(k) { k && b.appendChild(typeof k === v ? a.createTextNode(k) : k) } for (; d < c.length; d++) { var f = c[d]; if (!tc(f) || uc(f) && 0 < f.nodeType) e(f);
            else { a: { if (f && typeof f.length == Db) { if (uc(f)) { var h = typeof f.item == p || typeof f.item == v; break a } if (typeof f === p) { h = typeof f.item == p; break a } } h = !1 } Kc(h ? Qc(f) : f, e) } } }

    function ah(a, b) { b = String(b); "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()); return a.createElement(b) }

    function ch() { var a = fe("WBR"),
            b = document,
            c = ah(b, g);
        D ? (a = ie(pe, a), xe(c, a), c.removeChild(c.firstChild)) : xe(c, a); if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else { for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
            c = b } return c }

    function Vg(a) { return "CSS1Compat" == a.compatMode }

    function dh(a) { if (1 != a.nodeType) return !1; switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case na:
            case ma:
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1 } return !0 }

    function eh(a, b) { bh(J(a), a, arguments, 1) }

    function fh(a) { for (var b; b = a.firstChild;) a.removeChild(b) }

    function gh(a, b) { b.parentNode && b.parentNode.insertBefore(a, b) }

    function hh(a, b) { b.parentNode && b.parentNode.insertBefore(a, b.nextSibling) }

    function ih(a) { a && a.parentNode && a.parentNode.removeChild(a) }

    function jh(a) { return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function(b) { return 1 == b.nodeType }) }

    function kh(a) { return void 0 !== a.firstElementChild ? a.firstElementChild : lh(a.firstChild, !0) }

    function lh(a, b) { for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling; return a }

    function mh(a) { return uc(a) && 1 == a.nodeType }

    function nh(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a }

    function oh(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (D && !(9 <= Number(fg))) { if (9 == a.nodeType) return -1; if (9 == b.nodeType) return 1 }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) { var c = 1 == a.nodeType,
                d = 1 == b.nodeType; if (c && d) return a.sourceIndex - b.sourceIndex; var e = a.parentNode,
                f = b.parentNode; return e == f ? ph(a, b) : !c && nh(e, b) ? -1 * qh(a, b) : !d && nh(f, a) ? qh(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex) } d = J(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(z.Range.START_TO_END, a)
    }

    function qh(a, b) { var c = a.parentNode; if (c == b) return -1; for (; b.parentNode != c;) b = b.parentNode; return ph(b, a) }

    function ph(a, b) { for (; b = b.previousSibling;)
            if (b == a) return -1; return 1 }

    function rh(a) { var b, c = arguments.length; if (!c) return null; if (1 == c) return arguments[0]; var d = [],
            e = Infinity; for (b = 0; b < c; b++) { for (var f = [], h = arguments[b]; h;) f.unshift(h), h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length) } f = null; for (b = 0; b < e; b++) { h = d[0][b]; for (var k = 1; k < c; k++)
                if (h != d[k][b]) return f;
            f = h } return f }

    function J(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }

    function sh(a) { return a.contentDocument || a.contentWindow.document }

    function th(a) { try { return a.contentWindow || (a.contentDocument ? Yg(a.contentDocument) : null) } catch (b) {} return null }

    function uh(a, b) { if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b) } else fh(a), a.appendChild(J(a).createTextNode(String(b))) }
    var vh = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
        wh = { IMG: " ", BR: "\n" };

    function xh(a, b) { b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex")) }

    function yh(a) { return a.hasAttribute("tabindex") }

    function zh(a) { a = a.tabIndex; return typeof a === Db && 0 <= a && 32768 > a }

    function Ah(a) { var b = [];
        Bh(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " "); " " != a && (a = a.replace(/^\s*/, "")); return a }

    function Ch(a) { var b = [];
        Bh(a, b, !1); return b.join("") }

    function Bh(a, b, c) { if (!(a.nodeName in vh))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in wh) b.push(wh[a.nodeName]);
        else
            for (a = a.firstChild; a;) Bh(a, b, c), a = a.nextSibling }

    function Mg(a) { this.g = a || z.document || document } w = Mg.prototype;
    w.s = function(a) { return Ng(this.g, a) };
    w.I = function(a, b, c) { return $g(this.g, arguments) };

    function Dh(a, b) { return ah(a.g, b) }

    function Eh(a) { a = a.g; return a.parentWindow || a.defaultView }
    w.appendChild = function(a, b) { a.appendChild(b) };
    w.Nc = fh;
    w.Rh = jh;
    w.cg = kh;
    w.contains = nh;
    w.fb = uh;
    w.Bf = Ah;
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    function Fh(a, b) { b = a(b || Gh, void 0);
        a = Dh(Lg(), g);
        b = Hh(b);
        xe(a, b);
        1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b)); return a }

    function Hh(a) { return uc(a) ? a instanceof uf ? vf(a) : ce("zSoyz") : ce(String(a)) }
    var Gh = {};
    var Ih = Yd(),
        Jh = Gf() || C("iPod"),
        Kh = C("iPad"),
        Lh = C("Android") && !(Zd() || Yd() || C("Opera") || C("Silk")),
        Mh = Zd(),
        Nh = C("Safari") && !(Zd() || C("Coast") || C("Opera") || C(ka) || C("Edg/") || C("OPR") || Yd() || C("Silk") || C("Android")) && !Hf();
    var Oh = {},
        Ph = null,
        Qh = E || G || !Nh && !D && typeof z.atob == p;

    function Rh(a) { if (Qh) return z.atob(a); var b = "";
        Sh(a, function(c) { b += String.fromCharCode(c) }); return b }

    function Sh(a, b) {
        function c(l) { for (; d < a.length;) { var m = a.charAt(d++),
                    n = Ph[m]; if (null != n) return n; if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m); } return l } Th(); for (var d = 0;;) { var e = c(-1),
                f = c(0),
                h = c(64),
                k = c(64); if (64 === k && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2), 64 != k && b(h << 6 & 192 | k)) } }

    function Th() { if (!Ph) { Ph = {}; for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) { var d = a.concat(b[c].split(""));
                Oh[c] = d; for (var e = 0; e < d.length; e++) { var f = d[e];
                    void 0 === Ph[f] && (Ph[f] = e) } } } };
    var Uh = "undefined" !== typeof Uint8Array;
    var Vh = typeof Symbol === p && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

    function Wh(a) { Object.isFrozen(a) || (Vh ? a[Vh] |= 1 : void 0 !== a.Fd ? a.Fd |= 1 : Object.defineProperties(a, { Fd: { value: 1, configurable: !0, writable: !0, enumerable: !1 } })); return a };

    function Xh(a) { return null !== a && typeof a === u && !Array.isArray(a) && a.constructor === Object }
    var Yh = Object.freeze(Wh([])),
        Zh = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

    function $h(a) { return { value: a, configurable: !1, writable: !1, enumerable: !1 } };

    function ai(a) { var b = bi;
        b = void 0 === b ? ci : b; return di(a, b) }

    function ei(a, b) { if (null != a) { if (Array.isArray(a)) a = di(a, b);
            else if (Xh(a)) { var c = {},
                    d; for (d in a) c[d] = ei(a[d], b);
                a = c } else a = b(a); return a } }

    function di(a, b) { for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = ei(c[d], b); if (b = Array.isArray(a)) { var e;
            Vh ? e = a[Vh] : e = a.Fd;
            b = (null == e ? 0 : e) & 1 } b && Wh(c); return c }

    function bi(a) {
        if (a && typeof a == u && a.toJSON) return a.toJSON();
        a: switch (typeof a) {
            case Db:
                a = isFinite(a) ? a : String(a);
                break a;
            case u:
                if (a && !Array.isArray(a) && Uh && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    Th();
                    b = Oh[b];
                    for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) { var h = a[e],
                            k = a[e + 1],
                            l = a[e + 2],
                            m = b[h >> 2];
                        h = b[(h & 3) << 4 | k >> 4];
                        k = b[(k & 15) << 2 | l >> 6];
                        l = b[l & 63];
                        c[f++] = "" + m + h + k + l } m = 0;
                    l = d;
                    switch (a.length - e) {
                        case 2:
                            m = a[e + 1], l = b[(m & 15) << 2] || d;
                        case 1:
                            a = a[e], c[f] = "" + b[a >>
                                2] + b[(a & 3) << 4 | m >> 4] + l + d
                    }
                    a = c.join("")
                }
        }
        return Array.isArray(a) ? ai(a) : a
    }

    function ci(a) { return Uh && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a };

    function fi(a, b, c) { a || (a = gi);
        gi = null; var d = this.constructor.h;
        a || (a = d ? [d] : []);
        this.h = (d ? 0 : -1) - (this.constructor.g || 0);
        this.g = a;
        a: { d = this.g.length;a = d - 1; if (d && (d = this.g[a], Xh(d))) { this.l = a - this.h;
                this.j = d; break a } void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.h), this.j = void 0) : this.l = Number.MAX_VALUE }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.l) a += this.h, (d = this.g[a]) ? Array.isArray(d) && Wh(d) : this.g[a] = Yh;
                else { d = this.j || (this.j = this.g[this.l + this.h] = {}); var e = d[a];
                    e ? Array.isArray(e) && Wh(e) : d[a] = Yh } }
    fi.prototype.toJSON = function() { return ai(this.g) };
    fi.prototype.toString = function() { return this.g.toString() };
    var gi;

    function hi() { fi.apply(this, arguments) } x(hi, fi);
    if (Zh) { var ii = {};
        Object.defineProperties(hi, (ii[Symbol.hasInstance] = $h(function() { throw Error("Cannot perform instanceof checks for MutableMessage"); }), ii)) };

    function ji() { hi.apply(this, arguments) } x(ji, hi);
    if (Zh) { var ki = {};
        Object.defineProperties(ji, (ki[Symbol.hasInstance] = $h(Object[Symbol.hasInstance]), ki)) };

    function li(a) { return typeof a.className == v ? a.className : a.getAttribute && a.getAttribute("class") || "" }

    function mi(a) { return a.classList ? a.classList : li(a).match(/\S+/g) || [] }

    function ni(a, b) { typeof a.className == v ? a.className = b : a.setAttribute && a.setAttribute("class", b) }

    function oi(a, b) { return a.classList ? a.classList.contains(b) : Oc(mi(a), b) }

    function K(a, b) { if (a.classList) a.classList.add(b);
        else if (!oi(a, b)) { var c = li(a);
            ni(a, c + (0 < c.length ? " " + b : b)) } }

    function pi(a, b) { if (a.classList) Array.prototype.forEach.call(b, function(e) { K(a, e) });
        else { var c = {};
            Array.prototype.forEach.call(mi(a), function(e) { c[e] = !0 });
            Array.prototype.forEach.call(b, function(e) { c[e] = !0 });
            b = ""; for (var d in c) b += 0 < b.length ? " " + d : d;
            ni(a, b) } }

    function qi(a, b) { a.classList ? a.classList.remove(b) : oi(a, b) && ni(a, Array.prototype.filter.call(mi(a), function(c) { return c != b }).join(" ")) }

    function ri(a, b) { a.classList ? Array.prototype.forEach.call(b, function(c) { qi(a, c) }) : ni(a, Array.prototype.filter.call(mi(a), function(c) { return !Oc(b, c) }).join(" ")) };

    function si() {} si.prototype.h = function() {};

    function ti(a, b, c, d) { this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d } w = ti.prototype;
    w.contains = function(a) { return this && a ? a instanceof ti ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1 };
    w.ceil = function() { this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left); return this };
    w.floor = function() { this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left); return this };
    w.round = function() { this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left); return this };
    w.translate = function(a, b) { a instanceof I ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, typeof b === Db && (this.top += b, this.bottom += b)); return this };

    function ui(a, b, c, d) { this.left = a;
        this.top = b;
        this.width = c;
        this.height = d } w = ui.prototype;
    w.contains = function(a) { return a instanceof I ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height };
    w.ceil = function() { this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height); return this };
    w.floor = function() { this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height); return this };
    w.round = function() { this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height); return this };
    w.translate = function(a, b) { a instanceof I ? (this.left += a.x, this.top += a.y) : (this.left += a, typeof b === Db && (this.top += b)); return this };

    function L(a, b, c) { if (typeof b === v)(b = vi(a, b)) && (a.style[b] = c);
        else
            for (var d in b) { c = a; var e = b[d],
                    f = vi(c, d);
                f && (c.style[f] = e) } }
    var wi = {};

    function vi(a, b) { var c = wi[b]; if (!c) { var d = Me(b);
            c = d;
            void 0 === a.style[d] && (d = (G ? "Webkit" : E ? "Moz" : D ? "ms" : null) + Ne(d), void 0 !== a.style[d] && (c = d));
            wi[b] = c } return c }

    function xi(a, b) { var c = J(a); return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "" }

    function yi(a, b) { return xi(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b] }

    function zi(a, b, c) { if (b instanceof I) { var d = b.x;
            b = b.y } else d = b, b = c;
        a.style.left = Ai(d);
        a.style.top = Ai(b) }

    function Bi(a) { a = a ? J(a) : document; return !D || 9 <= Number(fg) || Vg(Lg(a).g) ? a.documentElement : a.body }

    function Ci(a) { try { return a.getBoundingClientRect() } catch (b) { return { left: 0, top: 0, right: 0, bottom: 0 } } }

    function Di(a) { if (D && !(8 <= Number(fg))) return a.offsetParent; var b = J(a),
            c = yi(a, Hb),
            d = "fixed" == c || c == ya; for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = yi(a, Hb), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == ya || "relative" == c)) return a; return null }

    function Ei(a) {
        for (var b = new ti(0, Infinity, Infinity, 0), c = Lg(a), d = c.g.body, e = c.g.documentElement, f = Xg(c.g); a = Di(a);)
            if (!(D && 0 == a.clientWidth || G && 0 == a.clientHeight && a == d) && a != d && a != e && yi(a, "overflow") != $b) { var h = Fi(a),
                    k = new I(a.clientLeft, a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x) } d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = Ug(Eh(c) ||
            window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }

    function Fi(a) { var b = J(a),
            c = new I(0, 0),
            d = Bi(b); if (a == d) return c;
        a = Ci(a);
        b = Wg(Lg(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y; return c }

    function Gi(a, b) { var c = new I(0, 0),
            d = Yg(J(a)); if (!Jf(d, "parent")) return c;
        do { if (d == b) var e = Fi(a);
            else e = Ci(a), e = new I(e.left, e.top);
            c.x += e.x;
            c.y += e.y } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent)); return c }

    function Ai(a) { typeof a == Db && (a += "px"); return a }

    function Hi(a) { var b = Ii; if (yi(a, "display") != r) return b(a); var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = ob;
        c.position = ya;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e; return a }

    function Ii(a) { var b = a.offsetWidth,
            c = a.offsetHeight,
            d = G && !b && !c; return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ci(a), new Kg(a.right - a.left, a.bottom - a.top)) : new Kg(b, c) }

    function M(a, b) { a.style.display = b ? "" : r }

    function Ji(a, b) { b = Lg(b); var c = b.g; if (D && c.createStyleSheet) b = c.createStyleSheet(), Ki(b, a);
        else { c = Qg(b.g, "HEAD")[0]; if (!c) { var d = Qg(b.g, "BODY")[0];
                c = b.I("HEAD");
                d.parentNode.insertBefore(c, d) } d = b.I("STYLE"); var e;
            (e = re('style[nonce],link[rel="stylesheet"][nonce]')) && d.setAttribute("nonce", e);
            Ki(d, a);
            b.appendChild(c, d) } }

    function Ki(a, b) { b = Wd(b);
        D && void 0 !== a.cssText ? a.cssText = b : z.trustedTypes ? uh(a, b) : a.innerHTML = b }

    function Li(a) { return Nb == yi(a, Va) }
    var Mi = E ? "MozUserSelect" : G || Mf ? "WebkitUserSelect" : null;

    function Ni(a, b, c) { c = c ? null : a.getElementsByTagName("*"); if (Mi) { if (b = b ? r : "", a.style && (a.style[Mi] = b), c) { a = 0; for (var d; d = c[a]; a++) d.style && (d.style[Mi] = b) } } else if (D && (b = b ? "on" : "", a.setAttribute("unselectable", b), c))
            for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b) }

    function Oi(a) { return new Kg(a.offsetWidth, a.offsetHeight) }

    function Pi(a, b) { var c = Vg(Lg(J(a)).g); if (!D || cg("10") || c) Qi(a, b, "content-box");
        else { var d = a.style;
            c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = Ri(a), a = Si(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom) } }

    function Qi(a, b, c) { a = a.style;
        E ? a.MozBoxSizing = c : G ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px" }

    function Ti(a, b, c, d) { if (/^\d+px?$/.test(b)) return parseInt(b, 10); var e = a.style[c],
            f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f; return +b }

    function Ui(a, b) { return (b = a.currentStyle ? a.currentStyle[b] : null) ? Ti(a, b, "left", "pixelLeft") : 0 }

    function Ri(a) { if (D) { var b = Ui(a, Fb),
                c = Ui(a, Gb),
                d = Ui(a, "paddingTop");
            a = Ui(a, "paddingBottom"); return new ti(d, c, a, b) } b = xi(a, Fb);
        c = xi(a, Gb);
        d = xi(a, "paddingTop");
        a = xi(a, "paddingBottom"); return new ti(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b)) }
    var Vi = { thin: 2, medium: 4, thick: 6 };

    function Wi(a, b) { if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == r) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null; return b in Vi ? Vi[b] : Ti(a, b, "left", "pixelLeft") }

    function Si(a) { if (D && !(9 <= Number(fg))) { var b = Wi(a, "borderLeft"),
                c = Wi(a, "borderRight"),
                d = Wi(a, "borderTop");
            a = Wi(a, "borderBottom"); return new ti(d, c, a, b) } b = xi(a, "borderLeftWidth");
        c = xi(a, "borderRightWidth");
        d = xi(a, "borderTopWidth");
        a = xi(a, "borderBottomWidth"); return new ti(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b)) };
    var Xi = function() { if (Qf) { var a = /Windows NT ([0-9.]+)/; return (a = a.exec(Xd())) ? a[1] : "0" } return Pf ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(Xd())) ? a[0].replace(/_/g, ".") : "10") : Rf ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(Xd())) ? a[1] : "") : Sf || Tf || Uf ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(Xd())) ? a[1].replace(/_/g, ".") : "") : "" }();

    function Yi(a) { return (a = a.exec(Xd())) ? a[1] : "" }
    var Zi = function() { if (Ih) return Yi(/Firefox\/([0-9.]+)/); if (D || Mf || Lf) return ag; if (Mh) { if (Hf() || C("Macintosh")) { var a = Yi(/CriOS\/([0-9.]+)/); if (a) return a } return Yi(/Chrome\/([0-9.]+)/) } if (Nh && !Hf()) return Yi(/Version\/([0-9.]+)/); if (Jh || Kh) { if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Xd())) return a[1] + "." + a[2] } else if (Lh) return (a = Yi(/Android\s+([0-9.]+)/)) ? a : Yi(/Version\/([0-9.]+)/); return "" }();

    function $i(a, b, c, d, e, f, h, k, l) {
        var m = aj(c);
        var n = Fi(a);
        var q = Hi(a);
        n = new ui(n.x, n.y, q.width, q.height);
        if (q = Ei(a)) { var t = new ui(q.left, q.top, q.right - q.left, q.bottom - q.top);
            q = Math.max(n.left, t.left); var y = Math.min(n.left + n.width, t.left + t.width); if (q <= y) { var F = Math.max(n.top, t.top);
                t = Math.min(n.top + n.height, t.top + t.height);
                F <= t && (n.left = q, n.top = F, n.width = y - q, n.height = t - F) } } q = Lg(a);
        F = Lg(c);
        q.g != F.g && (y = q.g.body, F = Gi(y, Eh(F)), F = Jg(F, Fi(y)), !D || 9 <= Number(fg) || Vg(q.g) || (F = Jg(F, Wg(q.g))), n.left += F.x, n.top +=
            F.y);
        a = bj(a, b);
        b = n.left;
        a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
        b = new I(b, n.top + (a & 1 ? n.height : 0));
        b = Jg(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
        if (h)
            if (l) var Q = l;
            else if (Q = Ei(c)) Q.top -= m.y, Q.right -= m.x, Q.bottom -= m.y, Q.left -= m.x;
        return cj(b, c, d, f, Q, h, k)
    }

    function aj(a) { if (a = a.offsetParent) { var b = "HTML" == a.tagName || "BODY" == a.tagName; if (!b || "static" != yi(a, Hb)) { var c = Fi(a); if (!b) { b = Li(a); var d; if (d = b) { d = Nh && 0 <= zd(Zi, 10); var e; if (e = Vf) e = 0 <= zd(Xi, 10); var f = Mh && 0 <= zd(Zi, 85);
                        d = E || d || e || f } b = d ? -a.scrollLeft : b && !Nf && yi(a, "overflowX") != $b ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft;
                    c = Jg(c, new I(b, a.scrollTop)) } } } return c || new I }

    function cj(a, b, c, d, e, f, h) {
        a = Ig(a);
        var k = bj(b, c);
        c = Hi(b);
        h = h ? new Kg(h.width, h.height) : new Kg(c.width, c.height);
        a = Ig(a);
        h = new Kg(h.width, h.height);
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        f && (e ? (d = h, k = 0, 65 == (f & 65) && (a.x < e.left || a.x >= e.right) && (f &= -2), 132 == (f & 132) && (a.y < e.top || a.y >= e.bottom) && (f &= -5), a.x < e.left && f & 1 && (a.x = e.left, k |= 1), f & 16 && (l = a.x, a.x < e.left && (a.x = e.left, k |= 4), a.x + d.width > e.right && (d.width =
            Math.min(e.right - a.x, l + d.width - e.left), d.width = Math.max(d.width, 0), k |= 4)), a.x + d.width > e.right && f & 1 && (a.x = Math.max(e.right - d.width, e.left), k |= 1), f & 2 && (k |= (a.x < e.left ? 16 : 0) | (a.x + d.width > e.right ? 32 : 0)), a.y < e.top && f & 4 && (a.y = e.top, k |= 2), f & 32 && (l = a.y, a.y < e.top && (a.y = e.top, k |= 8), a.y + d.height > e.bottom && (d.height = Math.min(e.bottom - a.y, l + d.height - e.top), d.height = Math.max(d.height, 0), k |= 8)), a.y + d.height > e.bottom && f & 4 && (a.y = Math.max(e.bottom - d.height, e.top), k |= 2), f & 8 && (k |= (a.y < e.top ? 64 : 0) | (a.y + d.height > e.bottom ?
            128 : 0)), e = k) : e = 256, l = e);
        f = new ui(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.y;
        f.width = h.width;
        f.height = h.height;
        e = l;
        if (e & 496) return e;
        zi(b, new I(f.left, f.top));
        h = new Kg(f.width, f.height);
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h, a = Vg(Lg(J(b)).g), !D || cg("10") || a ? Qi(b, c, Ia) : (h = b.style, a ? (a = Ri(b), b = Si(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
        return e
    }

    function bj(a, b) { return (b & 8 && Li(a) ? b ^ 4 : b) & -9 };
    var dj;

    function ej(a, b) { b ? a.setAttribute("role", b) : a.removeAttribute("role") }

    function fj(a, b, c) { Array.isArray(c) && (c = c.join(" ")); var d = "aria-" + b; "" === c || void 0 == c ? (dj || (c = {}, dj = (c.atomic = !1, c.autocomplete = r, c.dropeffect = r, c.haspopup = !1, c.live = "off", c.multiline = !1, c.multiselectable = !1, c.orientation = Zb, c.readonly = !1, c.relevant = "additions text", c.required = !1, c.sort = r, c.busy = !1, c.disabled = !1, c.hidden = !1, c.invalid = "false", c)), c = dj, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c) };

    function gj(a) { a && typeof a.R == p && a.R() };

    function N() { this.la = this.la;
        this.Aa = this.Aa } N.prototype.la = !1;
    N.prototype.R = function() { this.la || (this.la = !0, this.K()) };

    function hj(a, b) { a.la ? b() : (a.Aa || (a.Aa = []), a.Aa.push(b)) } N.prototype.K = function() { if (this.Aa)
            for (; this.Aa.length;) this.Aa.shift()() };

    function ij(a, b) { this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.j = !1 } ij.prototype.stopPropagation = function() { this.j = !0 };
    ij.prototype.g = function() { this.defaultPrevented = !0 };
    var jj = function() { if (!z.addEventListener || !Object.defineProperty) return !1; var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } }); try { z.addEventListener("test", function() {}, b), z.removeEventListener("test", function() {}, b) } catch (c) {} return a }();

    function kj(a, b) {
        ij.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.l = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? E && (Jf(b,
                "nodeName") || (b = null)): c == Bb ? b = a.fromElement : c == Ab && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.l = Pf ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = typeof a.pointerType === v ? a.pointerType : lj[a.pointerType] || "";
            this.state = a.state;
            this.h = a;
            a.defaultPrevented && kj.G.g.call(this)
        }
    }
    B(kj, ij);
    var lj = { 2: "touch", 3: "pen", 4: "mouse" };
    kj.prototype.stopPropagation = function() { kj.G.stopPropagation.call(this);
        this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0 };
    kj.prototype.g = function() { kj.G.g.call(this); var a = this.h;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1 };
    var mj = "closure_listenable_" + (1E6 * Math.random() | 0);

    function nj(a) { return !(!a || !a[mj]) };
    var oj = 0;

    function pj(a, b, c, d, e) { this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Cd = e;
        this.key = ++oj;
        this.mc = this.kd = !1 }

    function qj(a) { a.mc = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Cd = null };

    function rj(a) { this.src = a;
        this.g = {};
        this.h = 0 } rj.prototype.add = function(a, b, c, d, e) { var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++); var h = sj(a, b, d, e); - 1 < h ? (b = a[h], c || (b.kd = !1)) : (b = new pj(b, this.src, f, !!d, e), b.kd = c, a.push(b)); return b };
    rj.prototype.remove = function(a, b, c, d) { a = a.toString(); if (!(a in this.g)) return !1; var e = this.g[a];
        b = sj(e, b, c, d); return -1 < b ? (qj(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1 };

    function tj(a, b) { var c = b.type; if (!(c in a.g)) return !1; var d = Pc(a.g[c], b);
        d && (qj(b), 0 == a.g[c].length && (delete a.g[c], a.h--)); return d }

    function uj(a, b) { b = b && b.toString(); var c = 0,
            d; for (d in a.g)
            if (!b || d == b) { for (var e = a.g[d], f = 0; f < e.length; f++) ++c, qj(e[f]);
                delete a.g[d];
                a.h-- } return c } rj.prototype.Hc = function(a, b, c, d) { a = this.g[a.toString()]; var e = -1;
        a && (e = sj(a, b, c, d)); return -1 < e ? a[e] : null };
    rj.prototype.hasListener = function(a, b) { var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b; return Uc(this.g, function(f) { for (var h = 0; h < f.length; ++h)
                if (!(c && f[h].type != d || e && f[h].capture != b)) return !0; return !1 }) };

    function sj(a, b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.mc && f.listener == b && f.capture == !!c && f.Cd == d) return e } return -1 };
    var vj = "closure_lm_" + (1E6 * Math.random() | 0),
        wj = {},
        xj = 0;

    function O(a, b, c, d, e) { if (d && d.once) return yj(a, b, c, d, e); if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) O(a, b[f], c, d, e); return null } c = zj(c); return nj(a) ? a.D(b, c, uc(d) ? !!d.capture : !!d, e) : Aj(a, b, c, !1, d, e) }

    function Aj(a, b, c, d, e, f) { if (!b) throw Error("Invalid event type"); var h = uc(e) ? !!e.capture : !!e,
            k = Bj(a);
        k || (a[vj] = k = new rj(a));
        c = k.add(b, c, d, h, f); if (c.proxy) return c;
        d = Cj();
        c.proxy = d;
        d.src = a;
        d.listener = c; if (a.addEventListener) jj || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Dj(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        xj++; return c }

    function Cj() {
        function a(c) { return b.call(a.src, a.listener, c) } var b = Ej; return a }

    function yj(a, b, c, d, e) { if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) yj(a, b[f], c, d, e); return null } c = zj(c); return nj(a) ? a.xb(b, c, uc(d) ? !!d.capture : !!d, e) : Aj(a, b, c, !0, d, e) }

    function Fj(a, b, c, d, e) { if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Fj(a, b[f], c, d, e);
        else d = uc(d) ? !!d.capture : !!d, c = zj(c), nj(a) ? a.ha(b, c, d, e) : a && (a = Bj(a)) && (b = a.Hc(b, c, d, e)) && Gj(b) }

    function Gj(a) { if (typeof a === Db || !a || a.mc) return !1; var b = a.src; if (nj(b)) return tj(b.Oa, a); var c = a.type,
            d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Dj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        xj--;
        (c = Bj(b)) ? (tj(c, a), 0 == c.h && (c.src = null, b[vj] = null)) : qj(a); return !0 }

    function Hj(a, b) { if (!a) return 0; if (nj(a)) return a.Oa ? uj(a.Oa, b) : 0;
        a = Bj(a); if (!a) return 0; var c = 0;
        b = b && b.toString(); for (var d in a.g)
            if (!b || d == b)
                for (var e = a.g[d].concat(), f = 0; f < e.length; ++f) Gj(e[f]) && ++c; return c }

    function Dj(a) { return a in wj ? wj[a] : wj[a] = "on" + a }

    function Ij(a, b) { var c = a.listener,
            d = a.Cd || a.src;
        a.kd && Gj(a); return c.call(d, b) }

    function Ej(a, b) { return a.mc ? !0 : Ij(a, new kj(b, this)) }

    function Bj(a) { a = a[vj]; return a instanceof rj ? a : null }
    var Jj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function zj(a) { if (typeof a === p) return a;
        a[Jj] || (a[Jj] = function(b) { return a.handleEvent(b) }); return a[Jj] };

    function P() { N.call(this);
        this.Oa = new rj(this);
        this.Fh = this;
        this.df = null } B(P, N);
    P.prototype[mj] = !0;
    w = P.prototype;
    w.qd = function() { return this.df };
    w.mf = function(a) { this.df = a };
    w.addEventListener = function(a, b, c, d) { O(this, a, b, c, d) };
    w.removeEventListener = function(a, b, c, d) { Fj(this, a, b, c, d) };
    w.dispatchEvent = function(a) { var b = this.qd(); if (b) { var c = []; for (var d = 1; b; b = b.qd()) c.push(b), ++d } b = this.Fh;
        d = a.type || a; if (typeof a === v) a = new ij(a, b);
        else if (a instanceof ij) a.target = a.target || b;
        else { var e = a;
            a = new ij(d, b);
            ad(a, e) } e = !0; if (c)
            for (var f = c.length - 1; !a.j && 0 <= f; f--) { var h = a.currentTarget = c[f];
                e = Kj(h, d, !0, a) && e } a.j || (h = a.currentTarget = b, e = Kj(h, d, !0, a) && e, a.j || (e = Kj(h, d, !1, a) && e)); if (c)
            for (f = 0; !a.j && f < c.length; f++) h = a.currentTarget = c[f], e = Kj(h, d, !1, a) && e; return e };
    w.K = function() { P.G.K.call(this);
        this.Oa && uj(this.Oa);
        this.df = null };
    w.D = function(a, b, c, d) { return this.Oa.add(String(a), b, !1, c, d) };
    w.xb = function(a, b, c, d) { return this.Oa.add(String(a), b, !0, c, d) };
    w.ha = function(a, b, c, d) { return this.Oa.remove(String(a), b, c, d) };

    function Kj(a, b, c, d) { b = a.Oa.g[String(b)]; if (!b) return !0;
        b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) { var h = b[f]; if (h && !h.mc && h.capture == c) { var k = h.listener,
                    l = h.Cd || h.src;
                h.kd && tj(a.Oa, h);
                e = !1 !== k.call(l, d) && e } } return e && !d.defaultPrevented }
    w.Hc = function(a, b, c, d) { return this.Oa.Hc(String(a), b, c, d) };
    w.hasListener = function(a, b) { return this.Oa.hasListener(void 0 !== a ? String(a) : void 0, b) };

    function Lj(a, b) { this.l = a;
        this.j = b;
        this.h = 0;
        this.g = null } Lj.prototype.get = function() { if (0 < this.h) { this.h--; var a = this.g;
            this.g = a.next;
            a.next = null } else a = this.l(); return a };

    function Mj(a, b) { a.j(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b) };
    var Nj;

    function Oj() {
        var a = z.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
            var e = ah(document, ma);
            e.style.display = r;
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var h = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = A(function(l) { if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage() }, this);
            f.addEventListener("message", e,
                !1);
            this.port1 = {};
            this.port2 = { postMessage: function() { f.postMessage(h, k) } }
        });
        if ("undefined" !== typeof a && !C("Trident") && !C("MSIE")) { var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() { if (void 0 !== c.next) { c = c.next; var e = c.Rf;
                    c.Rf = null;
                    e() } }; return function(e) { d.next = { Rf: e };
                d = d.next;
                b.port2.postMessage(0) } }
        return function(e) { z.setTimeout(e, 0) }
    };

    function Pj(a) { z.setTimeout(function() { throw a; }, 0) };

    function Qj() { this.h = this.g = null } Qj.prototype.add = function(a, b) { var c = Rj.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c };
    Qj.prototype.remove = function() { var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null); return a };
    var Rj = new Lj(function() { return new Sj }, function(a) { return a.reset() });

    function Sj() { this.next = this.g = this.h = null } Sj.prototype.set = function(a, b) { this.h = a;
        this.g = b;
        this.next = null };
    Sj.prototype.reset = function() { this.next = this.g = this.h = null };
    var Tj, Uj = !1,
        Vj = new Qj;

    function Wj(a, b) { Tj || Xj();
        Uj || (Tj(), Uj = !0);
        Vj.add(a, b) }

    function Xj() { if (z.Promise && z.Promise.resolve) { var a = z.Promise.resolve(void 0);
            Tj = function() { a.then(Yj) } } else Tj = function() { var b = Yj;
            typeof z.setImmediate !== p || z.Window && z.Window.prototype && !C(ka) && z.Window.prototype.setImmediate == z.setImmediate ? (Nj || (Nj = Oj()), Nj(b)) : z.setImmediate(b) } }

    function Yj() { for (var a; a = Vj.remove();) { try { a.h.call(a.g) } catch (b) { Pj(b) } Mj(Rj, a) } Uj = !1 };

    function Zj(a, b) { this.g = 0;
        this.A = void 0;
        this.l = this.h = this.j = null;
        this.m = this.o = !1; if (a != ue) try { var c = this;
            a.call(b, function(d) { ak(c, 2, d) }, function(d) { ak(c, 3, d) }) } catch (d) { ak(this, 3, d) } }

    function bk() { this.next = this.j = this.h = this.l = this.g = null;
        this.m = !1 } bk.prototype.reset = function() { this.j = this.h = this.l = this.g = null;
        this.m = !1 };
    var ck = new Lj(function() { return new bk }, function(a) { a.reset() });

    function dk(a, b, c) { var d = ck.get();
        d.l = a;
        d.h = b;
        d.j = c; return d }

    function ek(a) { if (a instanceof Zj) return a; var b = new Zj(ue);
        ak(b, 2, a); return b }

    function fk() { var a = gk[5]; return new Zj(function(b, c) { c(a) }) }

    function hk() { var a, b, c = new Zj(function(d, e) { a = d;
            b = e }); return new ik(c, a, b) } Zj.prototype.then = function(a, b, c) { return jk(this, typeof a === p ? a : null, typeof b === p ? b : null, c) };
    Zj.prototype.$goog_Thenable = !0;
    Zj.prototype.cancel = function(a) { if (0 == this.g) { var b = new kk(a);
            Wj(function() { lk(this, b) }, this) } };

    function lk(a, b) { if (0 == a.g)
            if (a.j) { var c = a.j; if (c.h) { for (var d = 0, e = null, f = null, h = c.h; h && (h.m || (d++, h.g == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                    e && (0 == c.g && 1 == d ? lk(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : mk(c), nk(c, e, 3, b))) } a.j = null } else ak(a, 3, b) }

    function ok(a, b) { a.h || 2 != a.g && 3 != a.g || pk(a);
        a.l ? a.l.next = b : a.h = b;
        a.l = b }

    function jk(a, b, c, d) { var e = dk(null, null, null);
        e.g = new Zj(function(f, h) { e.l = b ? function(k) { try { var l = b.call(d, k);
                    f(l) } catch (m) { h(m) } } : f;
            e.h = c ? function(k) { try { var l = c.call(d, k);
                    void 0 === l && k instanceof kk ? h(k) : f(l) } catch (m) { h(m) } } : h });
        e.g.j = a;
        ok(a, e); return e.g } Zj.prototype.B = function(a) { this.g = 0;
        ak(this, 2, a) };
    Zj.prototype.J = function(a) { this.g = 0;
        ak(this, 3, a) };

    function ak(a, b, c) { if (0 == a.g) { a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: { var d = c,
                    e = a.B,
                    f = a.J; if (d instanceof Zj) { ok(d, dk(e || ue, f || null, a)); var h = !0 } else { if (d) try { var k = !!d.$goog_Thenable } catch (m) { k = !1 } else k = !1; if (k) d.then(e, f, a), h = !0;
                    else { if (uc(d)) try { var l = d.then; if (typeof l === p) { qk(d, l, e, f, a);
                                h = !0; break a } } catch (m) { f.call(a, m);
                            h = !0; break a } h = !1 } } } h || (a.A = c, a.g = b, a.j = null, pk(a), 3 != b || c instanceof kk || rk(a, c)) } }

    function qk(a, b, c, d, e) {
        function f(l) { k || (k = !0, d.call(e, l)) }

        function h(l) { k || (k = !0, c.call(e, l)) } var k = !1; try { b.call(a, h, f) } catch (l) { f(l) } }

    function pk(a) { a.o || (a.o = !0, Wj(a.C, a)) }

    function mk(a) { var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.l = null); return b } Zj.prototype.C = function() { for (var a; a = mk(this);) nk(this, a, this.g, this.A);
        this.o = !1 };

    function nk(a, b, c, d) { if (3 == c && b.h && !b.m)
            for (; a && a.m; a = a.j) a.m = !1; if (b.g) b.g.j = null, sk(b, c, d);
        else try { b.m ? b.l.call(b.j) : sk(b, c, d) } catch (e) { tk.call(null, e) } Mj(ck, b) }

    function sk(a, b, c) { 2 == b ? a.l.call(a.j, c) : a.h && a.h.call(a.j, c) }

    function rk(a, b) { a.m = !0;
        Wj(function() { a.m && tk.call(null, b) }) }
    var tk = Pj;

    function kk(a) { Ec.call(this, a) } B(kk, Ec);
    kk.prototype.name = "cancel";

    function ik(a, b, c) { this.promise = a;
        this.resolve = b;
        this.reject = c };

    function uk(a, b, c) { if (typeof a === p) c && (a = A(a, c));
        else if (a && typeof a.handleEvent == p) a = A(a.handleEvent, a);
        else throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : z.setTimeout(a, b || 0) }

    function vk(a) { z.clearTimeout(a) };

    function wk(a, b, c) { N.call(this);
        this.h = a;
        this.l = b || 0;
        this.j = c;
        this.g = A(this.eh, this) } B(wk, N);
    w = wk.prototype;
    w.Qb = 0;
    w.K = function() { wk.G.K.call(this);
        this.stop();
        delete this.h;
        delete this.j };
    w.start = function(a) { this.stop();
        this.Qb = uk(this.g, void 0 !== a ? a : this.l) };
    w.stop = function() { 0 != this.Qb && vk(this.Qb);
        this.Qb = 0 };
    w.eh = function() { this.Qb = 0;
        this.h && this.h.call(this.j) };

    function xk(a) { N.call(this);
        this.h = a;
        this.g = {} } B(xk, N);
    var yk = [];
    w = xk.prototype;
    w.D = function(a, b, c, d) { Array.isArray(b) || (b && (yk[0] = b.toString()), b = yk); for (var e = 0; e < b.length; e++) { var f = O(a, b[e], c || this.handleEvent, d || !1, this.h || this); if (!f) break;
            this.g[f.key] = f } return this };
    w.xb = function(a, b, c, d) { return zk(this, a, b, c, d) };

    function zk(a, b, c, d, e, f) { if (Array.isArray(c))
            for (var h = 0; h < c.length; h++) zk(a, b, c[h], d, e, f);
        else { b = yj(b, c, d || a.handleEvent, e, f || a.h || a); if (!b) return a;
            a.g[b.key] = b } return a }
    w.ha = function(a, b, c, d, e) { if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.ha(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = uc(d) ? !!d.capture : !!d, e = e || this.h || this, c = zj(c), d = !!d, b = nj(a) ? a.Hc(b, c, d, e) : a ? (a = Bj(a)) ? a.Hc(b, c, d, e) : null : null, b && (Gj(b), delete this.g[b.key]); return this };

    function Ak(a) { bd(a.g, function(b, c) { this.g.hasOwnProperty(c) && Gj(b) }, a);
        a.g = {} } w.K = function() { xk.G.K.call(this);
        Ak(this) };
    w.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };

    function Bk(a) { var b = "Mb"; if (a.Mb && a.hasOwnProperty(b)) return a.Mb; var c = new a;
        a.Mb = c;
        a.hasOwnProperty(b); return c };

    function Ck(a) { if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1; if (Dk(a.keyCode)) return !0; switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !E;
            default:
                return 166 > a.keyCode || 183 < a.keyCode } }

    function Ek(a, b, c, d, e, f) { if (Pf && e) return Dk(a); if (e && !d) return !1; if (!E) { typeof b === Db && (b = Fk(b)); var h = 17 == b || 18 == b || Pf && 91 == b; if ((!c || Pf) && h || Pf && 16 == b && (d || f)) return !1 } if ((G || Mf) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1 }
        if (D && d && b == a) return !1; switch (a) {
            case 13:
                return E ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(G || Mf || E) } return E && (d || e || f) ? !1 : Dk(a) }

    function Dk(a) { if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (G || Mf) && 0 == a) return !0; switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
                return E;
            default:
                return !1 } }

    function Fk(a) { if (E) a = Gk(a);
        else if (Pf && G) switch (a) {
            case 93:
                a = 91 }
        return a }

    function Gk(a) { switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a } };

    function Hk(a, b, c, d) { kj.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c } B(Hk, kj);

    function Ik(a, b) { P.call(this);
        a && Jk(this, a, b) } B(Ik, P);
    w = Ik.prototype;
    w.F = null;
    w.Gd = null;
    w.Oe = null;
    w.Hd = null;
    w.Ia = -1;
    w.pb = -1;
    w.oe = !1;
    var Kk = { 3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45 },
        Lk = { Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45 },
        Mk = Pf && E;
    w = Ik.prototype;
    w.ii = function(a) { if (G || Mf)
            if (17 == this.Ia && !a.ctrlKey || 18 == this.Ia && !a.altKey || Pf && 91 == this.Ia && !a.metaKey) this.pb = this.Ia = -1; - 1 == this.Ia && (a.ctrlKey && 17 != a.keyCode ? this.Ia = 17 : a.altKey && 18 != a.keyCode ? this.Ia = 18 : a.metaKey && 91 != a.keyCode && (this.Ia = 91));
        Ek(a.keyCode, this.Ia, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? (this.pb = Fk(a.keyCode), Mk && (this.oe = a.altKey)) : this.handleEvent(a) };
    w.ji = function(a) { this.pb = this.Ia = -1;
        this.oe = a.altKey };
    w.handleEvent = function(a) {
        var b = a.h,
            c = b.altKey;
        if (D && a.type == wb) { var d = this.pb; var e = 13 != d && 27 != d ? b.keyCode : 0 } else(G || Mf) && a.type == wb ? (d = this.pb, e = 0 <= b.charCode && 63232 > b.charCode && Dk(d) ? b.charCode : 0) : (a.type == wb ? (Mk && (c = this.oe), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.pb, e = b.charCode) : (d = b.keyCode || this.pb, e = b.charCode || 0)) : (d = b.keyCode || this.pb, e = b.charCode || 0), Pf && 63 == e && 224 == d && (d = 191));
        var f = d = Fk(d);
        d ? 63232 <= d && d in Kk ? f = Kk[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in
            Lk && (f = Lk[b.keyIdentifier]);
        if (!E || a.type != wb || Ek(f, this.Ia, a.shiftKey, a.ctrlKey, c, a.metaKey)) a = f == this.Ia, this.Ia = f, b = new Hk(f, e, a, b), b.altKey = c, this.dispatchEvent(b)
    };
    w.s = function() { return this.F };

    function Jk(a, b, c) { a.Hd && Nk(a);
        a.F = b;
        a.Gd = O(a.F, wb, a, c);
        a.Oe = O(a.F, vb, a.ii, c, a);
        a.Hd = O(a.F, "keyup", a.ji, c, a) }

    function Nk(a) { a.Gd && (Gj(a.Gd), Gj(a.Oe), Gj(a.Hd), a.Gd = null, a.Oe = null, a.Hd = null);
        a.F = null;
        a.Ia = -1;
        a.pb = -1 } w.K = function() { Ik.G.K.call(this);
        Nk(this) };

    function Ok() {} rc(Ok);
    Ok.prototype.g = 0;

    function R(a) { P.call(this);
        this.h = a || Lg();
        this.ra = Pk;
        this.T = null;
        this.Z = !1;
        this.F = null;
        this.O = void 0;
        this.L = this.C = this.J = this.Ra = null;
        this.kb = !1 } B(R, P);
    R.prototype.Fb = Ok.ka();
    var Pk = null;

    function Qk(a, b) { switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? $a : Ha;
            case 64:
                return b ? "open" : "close" } throw Error("Invalid component state"); }

    function Rk(a) { return a.T || (a.T = ":" + (a.Fb.g++).toString(36)) }

    function Sk(a, b) { if (a.J && a.J.L) { var c = a.J.L,
                d = a.T;
            d in c && delete c[d];
            Yc(a.J.L, b, a) } a.T = b } w = R.prototype;
    w.s = function() { return this.F };

    function Tk(a, b) { return a.F ? Rg(b, a.F || a.h.g) : null }

    function S(a) { a.O || (a.O = new xk(a)); return a.O }

    function Uk(a, b) { if (a == b) throw Error(ua); if (b && a.J && a.T && Vk(a.J, a.T) && a.J != b) throw Error(ua);
        a.J = b;
        R.G.mf.call(a, b) } w.sb = function() { return this.J };
    w.mf = function(a) { if (this.J && this.J != a) throw Error("Method not supported");
        R.G.mf.call(this, a) };
    w.I = function() { this.F = Dh(this.h, g) };
    w.ma = function(a) { Wk(this, a) };

    function Wk(a, b, c) { if (a.Z) throw Error(ja);
        a.F || a.I();
        b ? b.insertBefore(a.F, c || null) : a.h.g.body.appendChild(a.F);
        a.J && !a.J.Z || a.U() }

    function Xk(a, b) { if (a.Z) throw Error(ja); if (b && a.Zd(b)) { a.kb = !0; var c = J(b);
            a.h && a.h.g == c || (a.h = Lg(b));
            a.X(b);
            a.U() } else throw Error("Invalid element to decorate"); } w.Zd = function() { return !0 };
    w.X = function(a) { this.F = a };
    w.U = function() { this.Z = !0;
        Yk(this, function(a) {!a.Z && a.s() && a.U() }) };
    w.ea = function() { Yk(this, function(a) { a.Z && a.ea() });
        this.O && Ak(this.O);
        this.Z = !1 };
    w.K = function() { this.Z && this.ea();
        this.O && (this.O.R(), delete this.O);
        Yk(this, function(a) { a.R() });!this.kb && this.F && ih(this.F);
        this.J = this.Ra = this.F = this.L = this.C = null;
        R.G.K.call(this) };

    function T(a, b) { return Rk(a) + "." + b } w.wc = function(a, b) { this.le(a, Zk(this), b) };
    w.le = function(a, b, c) {
        if (a.Z && (c || !this.Z)) throw Error(ja);
        if (0 > b || b > Zk(this)) throw Error("Child component index out of bounds");
        this.L && this.C || (this.L = {}, this.C = []);
        if (a.sb() == this) { var d = Rk(a);
            this.L[d] = a;
            Pc(this.C, a) } else Yc(this.L, Rk(a), a);
        Uk(a, this);
        Rc(this.C, b, 0, a);
        a.Z && this.Z && a.sb() == this ? (c = this.Rc(), (c.childNodes[b] || null) != a.s() && (a.s().parentElement == c && c.removeChild(a.s()), b = c.childNodes[b] || null, c.insertBefore(a.s(), b))) : c ? (this.F || this.I(), b = $k(this, b + 1), Wk(a, this.Rc(), b ? b.F : null)) :
            this.Z && !a.Z && a.F && a.F.parentNode && 1 == a.F.parentNode.nodeType && a.U()
    };
    w.Rc = function() { return this.F };

    function al(a) { null == a.ra && (a.ra = Li(a.Z ? a.F : a.h.g.body)); return a.ra }

    function Zk(a) { return a.C ? a.C.length : 0 }

    function Vk(a, b) { a.L && b ? (a = a.L, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null; return b }

    function $k(a, b) { return a.C ? a.C[b] || null : null }

    function Yk(a, b, c) { a.C && a.C.forEach(b, c) }

    function bl(a, b) { return a.C && b ? a.C.indexOf(b) : -1 }
    w.ae = function(a, b) { if (a) { var c = typeof a === v ? a : Rk(a);
            a = Vk(this, c); if (c && a) { var d = this.L;
                c in d && delete d[c];
                Pc(this.C, a);
                b && (a.ea(), a.F && ih(a.F));
                Uk(a, null) } } if (!a) throw Error("Child is not in parent component"); return a };
    w.Nc = function(a) { for (var b = []; this.C && 0 != this.C.length;) { var c = b,
                d = c.push; var e = this.ae($k(this, 0), a);
            d.call(c, e) } return b };

    function cl() {}
    var dl;
    rc(cl);
    var el = { button: "pressed", checkbox: Na, menuitem: Ob, menuitemcheckbox: Na, menuitemradio: Na, radio: Na, tab: Ob, treeitem: Ob };
    w = cl.prototype;
    w.Rb = function() {};
    w.I = function(a) { return a.h.I(g, fl(this, a).join(" "), a.ja()) };
    w.tb = function(a) { return a };
    w.Sc = function() { return !0 };
    w.La = function(a, b) { b.id && Sk(a, b.id); var c = this.tb(b);
        c && c.firstChild ? gl(a, c.firstChild.nextSibling ? Qc(c.childNodes) : c.firstChild) : a.Cb = null; var d = 0,
            e = this.ia(),
            f = this.ia(),
            h = !1,
            k = !1,
            l = Qc(mi(b));
        l.forEach(function(m) { h || m != e ? k || m != f ? d |= this.sd(m) : k = !0 : (h = !0, f == e && (k = !0));
            1 == this.sd(m) && yh(c) && zh(c) && xh(c, !1) }, this);
        a.aa = d;
        h || (l.push(e), f == e && (k = !0));
        k || l.push(f);
        (a = a.Ae) && l.push.apply(l, a);
        h && k && !a || ni(b, l.join(" ")); return b };
    w.Cf = function(a) { al(a) && this.ce(a.s(), !0);
        a.isEnabled() && this.Sb(a, a.isVisible()) };

    function hl(a, b, c) { if (a = c || a.Rb()) c = b.getAttribute("role") || null, a != c && ej(b, a) }

    function il(a, b, c) { b.isVisible() || fj(c, ob, !b.isVisible());
        b.isEnabled() || a.Wa(c, 1, !b.isEnabled());
        b.ga & 8 && a.Wa(c, 8, !!(b.aa & 8));
        b.ga & 16 && a.Wa(c, 16, !!(b.aa & 16));
        b.ga & 64 && a.Wa(c, 64, !!(b.aa & 64)) } w.Tc = function(a, b) { Ni(a, !b, !D) };
    w.ce = function(a, b) { var c = this.ia() + "-rtl";
        (a = a.s ? a.s() : a) && (b ? pi : ri)(a, [c]) };
    w.be = function(a) { var b; return a.ga & 32 && (b = a.s()) ? yh(b) && zh(b) : !1 };
    w.Sb = function(a, b) { var c; if (a.ga & 32 && (c = a.s())) { if (!b && a.aa & 32) { try { c.blur() } catch (d) {} a.aa & 32 && a.Df(null) }(yh(c) && zh(c)) != b && xh(c, b) } };
    w.N = function(a, b) { M(a, b);
        a && fj(a, ob, !b) };
    w.pc = function(a, b, c) { var d = a.s(); if (d) { var e = this.Gc(b);
            e && (a = a.s ? a.s() : a) && (c ? pi : ri)(a, [e]);
            this.Wa(d, b, c) } };
    w.Wa = function(a, b, c) { dl || (dl = { 1: "disabled", 8: Ob, 16: Na, 64: "expanded" });
        b = dl[b]; var d = a.getAttribute("role") || null;
        d && (d = el[d] || b, b = b == Na || b == Ob ? d : b);
        b && fj(a, b, c) };
    w.oc = function(a, b) { var c = this.tb(a);
        c && (fh(c), b && (typeof b === v ? uh(c, b) : (a = function(d) { if (d) { var e = J(c);
                c.appendChild(typeof d === v ? e.createTextNode(d) : d) } }, Array.isArray(b) ? b.forEach(a) : !tc(b) || "nodeType" in b ? a(b) : Qc(b).forEach(a)))) };
    w.ia = function() { return "goog-control" };

    function fl(a, b) { var c = a.ia(),
            d = [c],
            e = a.ia();
        e != c && d.push(e);
        c = b.aa; for (e = []; c;) { var f = c & -c;
            e.push(a.Gc(f));
            c &= ~f } d.push.apply(d, e);
        (a = b.Ae) && d.push.apply(d, a); return d } w.Gc = function(a) { this.g || jl(this); return this.g[a] };
    w.sd = function(a) { if (!this.j) { this.g || jl(this); var b = this.g,
                c = {},
                d; for (d in b) c[b[d]] = d;
            this.j = c } a = parseInt(this.j[a], 10); return isNaN(a) ? 0 : a };

    function jl(a) { var b = a.ia();
        b.replace(/\xa0|\s/g, " ");
        a.g = { 1: b + ba, 2: b + "-hover", 4: b + "-active", 8: b + "-selected", 16: b + "-checked", 32: b + "-focused", 64: b + "-open" } };

    function kl() {} B(kl, cl);
    rc(kl);
    w = kl.prototype;
    w.Rb = function() { return Ja };
    w.Wa = function(a, b, c) { switch (b) {
            case 8:
            case 16:
                fj(a, "pressed", c); break;
            default:
            case 64:
            case 1:
                kl.G.Wa.call(this, a, b, c) } };
    w.I = function(a) { var b = kl.G.I.call(this, a);
        this.Rd(b, a.ba()); var c = a.Ea();
        c && this.Ba(b, c);
        a.ga & 16 && this.Wa(b, 16, !!(a.aa & 16)); return b };
    w.La = function(a, b) { b = kl.G.La.call(this, a, b); var c = this.Ea(b);
        a.m = c;
        a.A = this.ba(b);
        a.ga & 16 && this.Wa(b, 16, !!(a.aa & 16)); return b };
    w.Ea = function() {};
    w.Ba = function() {};
    w.ba = function(a) { return a.title };
    w.Rd = function(a, b) { a && (b ? a.title = b : a.removeAttribute("title")) };
    w.ia = function() { return "goog-button" };
    var ll = { Ub: yb, Vb: "mouseup", vc: "mousecancel", Ij: zb, Kj: Bb, Jj: Ab, Gj: "mouseenter", Hj: "mouseleave" };

    function ml(a, b) { if (!a) throw Error("Invalid class name " + a); if (typeof b !== p) throw Error("Invalid decorator function " + b);
        nl[a] = b }
    var ol = {},
        nl = {};

    function U(a, b, c) { R.call(this, c); if (!b) { for (b = this.constructor; b;) { var d = vc(b); if (d = ol[d]) break;
                b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor } b = d ? typeof d.ka === p ? d.ka() : new d : null } this.g = b;
        this.Cb = void 0 !== a ? a : null } B(U, R);
    w = U.prototype;
    w.Cb = null;
    w.aa = 0;
    w.ga = 39;
    w.re = 255;
    w.Qc = 0;
    w.na = !0;
    w.Ae = null;
    w.Ie = !0;
    w.dd = !1;

    function pl(a, b) { a.Z && b != a.Ie && ql(a, b);
        a.Ie = b } w.I = function() { var a = this.g.I(this);
        this.F = a;
        hl(this.g, a, this.Ic());
        this.dd || this.g.Tc(a, !1);
        this.isVisible() || this.g.N(a, !1) };
    w.Ic = function() { return null };
    w.Rc = function() { return this.g.tb(this.s()) };
    w.Zd = function(a) { return this.g.Sc(a) };
    w.X = function(a) { this.F = a = this.g.La(this, a);
        hl(this.g, a, this.Ic());
        this.dd || this.g.Tc(a, !1);
        this.na = a.style.display != r };
    w.U = function() { U.G.U.call(this);
        il(this.g, this, this.F);
        this.g.Cf(this); if (this.ga & -2 && (this.Ie && ql(this, !0), this.ga & 32)) { var a = this.s(); if (a) { var b = this.l || (this.l = new Ik);
                Jk(b, a);
                S(this).D(b, "key", this.Ka).D(a, $a, this.fh).D(a, Ha, this.Df) } } };

    function ql(a, b) { var c = S(a),
            d = a.s();
        b ? (c.D(d, ll.Ub, a.rc).D(d, [ll.Vb, ll.vc], a.ac).D(d, Bb, a.de).D(d, Ab, a.Je), a.Kc != ue && c.D(d, Ta, a.Kc), D && (cg(9) || c.D(d, Ua, a.fg), a.o || (a.o = new rl(a), hj(a, Ac(gj, a.o))))) : (c.ha(d, ll.Ub, a.rc).ha(d, [ll.Vb, ll.vc], a.ac).ha(d, Bb, a.de).ha(d, Ab, a.Je), a.Kc != ue && c.ha(d, Ta, a.Kc), D && (cg(9) || c.ha(d, Ua, a.fg), gj(a.o), a.o = null)) } w.ea = function() { U.G.ea.call(this);
        this.l && Nk(this.l);
        this.isVisible() && this.isEnabled() && this.g.Sb(this, !1) };
    w.K = function() { U.G.K.call(this);
        this.l && (this.l.R(), delete this.l);
        delete this.g;
        this.o = this.Ae = this.Cb = null };
    w.ja = function() { return this.Cb };
    w.Db = function(a) { this.g.oc(this.s(), a);
        this.Cb = a };

    function gl(a, b) { a.Cb = b } w.eb = function() { var a = this.ja(); if (!a) return "";
        a = typeof a === v ? a : Array.isArray(a) ? a.map(Ch).join("") : Ah(a); return Be(a) };
    w.Og = function(a) { this.Db(a) };
    w.isVisible = function() { return this.na };
    w.N = function(a, b) { return b || this.na != a && this.dispatchEvent(a ? "show" : pb) ? ((b = this.s()) && this.g.N(b, a), this.isEnabled() && this.g.Sb(this, a), this.na = a, !0) : !1 };
    w.isEnabled = function() { return !(this.aa & 1) };
    w.qa = function(a) { var b = this.sb();
        b && typeof b.isEnabled == p && !b.isEnabled() || !sl(this, 1, !a) || (a || (tl(this, !1), ul(this, !1)), this.isVisible() && this.g.Sb(this, a), vl(this, 1, !a, !0)) };

    function ul(a, b) { sl(a, 2, b) && vl(a, 2, b) }

    function tl(a, b) { sl(a, 4, b) && vl(a, 4, b) }

    function wl(a, b) { sl(a, 64, b) && vl(a, 64, b) }

    function vl(a, b, c, d) { d || 1 != b ? a.ga & b && c != !!(a.aa & b) && (a.g.pc(a, b, c), a.aa = c ? a.aa | b : a.aa & ~b) : a.qa(!c) } w.va = function(a, b) { if (this.Z && this.aa & a && !b) throw Error(ja);!b && this.aa & a && vl(this, a, !1);
        this.ga = b ? this.ga | a : this.ga & ~a };

    function xl(a, b) { return !!(a.re & b) && !!(a.ga & b) }

    function yl(a) { a.re &= -256 }

    function sl(a, b, c) { return !!(a.ga & b) && !!(a.aa & b) != c && (!(a.Qc & b) || a.dispatchEvent(Qk(b, c))) && !a.la } w.de = function(a) {!zl(a, this.s()) && this.dispatchEvent("enter") && this.isEnabled() && xl(this, 2) && ul(this, !0) };
    w.Je = function(a) {!zl(a, this.s()) && this.dispatchEvent("leave") && (xl(this, 4) && tl(this, !1), xl(this, 2) && ul(this, !1)) };
    w.Kc = ue;

    function zl(a, b) { return !!a.relatedTarget && nh(b, a.relatedTarget) } w.rc = function(a) { this.isEnabled() && (xl(this, 2) && ul(this, !0), 0 != a.h.button || Pf && a.ctrlKey || (xl(this, 4) && tl(this, !0), this.g && this.g.be(this) && this.s().focus()));
        this.dd || 0 != a.h.button || Pf && a.ctrlKey || a.g() };
    w.ac = function(a) { this.isEnabled() && (xl(this, 2) && ul(this, !0), this.aa & 4 && this.kc(a) && xl(this, 4) && tl(this, !1)) };
    w.fg = function(a) { this.isEnabled() && this.kc(a) };
    w.kc = function(a) { if (xl(this, 16)) { var b = !(this.aa & 16);
            sl(this, 16, b) && vl(this, 16, b) } xl(this, 8) && sl(this, 8, !0) && vl(this, 8, !0);
        xl(this, 64) && wl(this, !(this.aa & 64));
        b = new ij(za, this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.l = a.l); return this.dispatchEvent(b) };
    w.fh = function() { xl(this, 32) && sl(this, 32, !0) && vl(this, 32, !0) };
    w.Df = function() { xl(this, 4) && tl(this, !1);
        xl(this, 32) && sl(this, 32, !1) && vl(this, 32, !1) };
    w.Ka = function(a) { return this.isVisible() && this.isEnabled() && this.qc(a) ? (a.g(), a.stopPropagation(), !0) : !1 };
    w.qc = function(a) { return 13 == a.keyCode && this.kc(a) };
    if (typeof U !== p) throw Error("Invalid component class " + U);
    if (typeof cl !== p) throw Error("Invalid renderer class " + cl);
    var Al = vc(U);
    ol[Al] = cl;
    ml("goog-control", function() { return new U(null) });

    function rl(a) { N.call(this);
        this.h = a;
        this.g = !1;
        this.j = new xk(this);
        hj(this, Ac(gj, this.j));
        a = this.h.F;
        this.j.D(a, ll.Ub, this.m).D(a, ll.Vb, this.o).D(a, Pa, this.l) } B(rl, N);
    var Bl = !D || 9 <= Number(fg);
    rl.prototype.m = function() { this.g = !1 };
    rl.prototype.o = function() { this.g = !0 };

    function Cl(a, b) { if (!Bl) return a.button = 0, a.type = b, a; var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null); return c } rl.prototype.l = function(a) { if (this.g) this.g = !1;
        else { var b = a.h,
                c = b.button,
                d = b.type,
                e = Cl(b, yb);
            this.h.rc(new kj(e, a.currentTarget));
            e = Cl(b, "mouseup");
            this.h.ac(new kj(e, a.currentTarget));
            Bl || (b.button = c, b.type = d) } };
    rl.prototype.K = function() { this.h = null;
        rl.G.K.call(this) };

    function Dl() {} B(Dl, kl);
    rc(Dl);
    w = Dl.prototype;
    w.Rb = function() {};
    w.I = function(a) { pl(a, !1);
        yl(a);
        a.va(32, !1); return a.h.I("BUTTON", { "class": fl(this, a).join(" "), disabled: !a.isEnabled(), title: a.ba() || "", value: a.Ea() || "" }, a.eb() || "") };
    w.Sc = function(a) { return "BUTTON" == a.tagName || a.tagName == na && (a.type == Ja || "submit" == a.type || "reset" == a.type) };
    w.La = function(a, b) { pl(a, !1);
        yl(a);
        a.va(32, !1); if (b.disabled) { var c = this.Gc(1);
            K(b, c) } return Dl.G.La.call(this, a, b) };
    w.Cf = function(a) { S(a).D(a.s(), Pa, a.kc) };
    w.Tc = function() {};
    w.ce = function() {};
    w.be = function(a) { return a.isEnabled() };
    w.Sb = function() {};
    w.pc = function(a, b, c) { Dl.G.pc.call(this, a, b, c);
        (a = a.s()) && 1 == b && (a.disabled = c) };
    w.Ea = function(a) { return a.value };
    w.Ba = function(a, b) { a && (a.value = b) };
    w.Wa = function() {};

    function El(a, b, c) { U.call(this, a, b || Dl.ka(), c) } B(El, U);
    w = El.prototype;
    w.Ea = function() { return this.m };
    w.Ba = function(a) { this.m = a;
        this.g.Ba(this.s(), a) };
    w.ba = function() { return this.A };
    w.Rd = function(a) { this.A = a;
        this.g.Rd(this.s(), a) };
    w.K = function() { El.G.K.call(this);
        delete this.m;
        delete this.A };
    w.U = function() { El.G.U.call(this); if (this.ga & 32) { var a = this.s();
            a && S(this).D(a, "keyup", this.qc) } };
    w.qc = function(a) { return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.kc(a) : 32 == a.keyCode };
    ml("goog-button", function() { return new El(null) });

    function Fl() {} B(Fl, kl);
    rc(Fl);
    w = Fl.prototype;
    w.I = function(a) { var b = fl(this, a);
        b = a.h.I(g, eb + b.join(" "), Gl(this, a.ja(), a.h));
        this.Rd(b, a.ba()); return b };
    w.Rb = function() { return Ja };
    w.tb = function(a) { return a && a.firstChild && a.firstChild.firstChild };

    function Gl(a, b, c) { return c.I(g, eb + (a.ia() + "-outer-box"), c.I(g, eb + (a.ia() + "-inner-box"), b)) } w.Sc = function(a) { return a.tagName == g };
    w.La = function(a, b) { Hl(b, !0);
        Hl(b, !1);
        a: { var c = a.h.cg(b); var d = this.ia() + "-outer-box"; if (c && oi(c, d) && (c = a.h.cg(c), d = this.ia() + "-inner-box", c && oi(c, d))) { c = !0; break a } c = !1 } c || b.appendChild(Gl(this, b.childNodes, a.h));
        pi(b, ["goog-inline-block", this.ia()]); return Fl.G.La.call(this, a, b) };
    w.ia = function() { return "goog-custom-button" };

    function Hl(a, b) { if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) { d = b ? c.nextSibling : c.previousSibling; if (3 == c.nodeType) { var e = c.nodeValue; if ("" == pd(e)) a.removeChild(c);
                    else { c.nodeValue = b ? Ce(e) : De(e); break } } else break;
                c = d } };

    function Il(a, b, c) { El.call(this, a, b || Fl.ka(), c);
        this.va(16, !0) } B(Il, El);
    ml("goog-toggle-button", function() { return new Il(null) });

    function Jl() { this.h = [];
        this.g = {};
        this.l = !1;
        this.B = 1;
        this.m = {};
        this.j = null;
        O(window, "beforeunload", this.C, !1, this) }

    function Kl(a, b, c) { if (null == b) return "1"; switch (sc(b)) {
            case v:
                return a = b, 64 < a.length && (null == c || !c) && (a = a.substr(0, 64)), Ee(a);
            case Db:
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case Da:
                var d = [],
                    e; for (e in b) d.push(Kl(a, b[e], c)); return d.join(",");
            case u:
                d = []; for (e in b) d.push(Ll(a, e, b[e], c)); return d.join(",");
            default:
                return "" } }

    function Ll(a, b, c, d) { return [Ee(b), Kl(a, c, d || "smtalt" == b)].join("=") } Jl.prototype.log = function(a, b) { this.h.push([a, b]);
        this.l || (this.l = !0, uk(this.o, 0, this)) };
    Jl.prototype.o = function() { for (var a = 0; a < this.h.length; a++) { var b = this.h[a];
            Ml(this, b[0], b[1]) } this.h = [];
        this.l = !1 };

    function Ml(a, b, c) { Nl(a, "") }

    function Nl(a, b) { var c = new Image,
            d = a.B++;
        a.m[d] = c;
        c.onload = c.onerror = function() { delete Jl.ka().m[d] };
        c.src = b;
        c = null }

    function Ol(a, b) { var c = 0,
            d = null;
        b in a.g && (d = a.g[b], c = d[0], d = d[1]); if (sc(1) == u) { sc(d) != u && (d = {}); for (var e in 1) d[e] = Pl(e in d ? d[e] : null, 1[e]) } else d = Pl(d, 1);
        a.g[b] = [c, d];
        vk(a.g[b][0]);
        c = uk(A(a.A, a, b), 2E3);
        a.g[b][0] = c } Jl.prototype.A = function(a) { Ml(this, a, this.g[a][1]);
        a in this.g && (vk(this.g[a][0]), delete this.g[a]) };

    function Pl(a, b) { null == b && (b = 1);
        isNaN(a) && (a = parseInt(a, 10));
        isNaN(b) && (b = parseInt(b, 10)); return a + b } Jl.prototype.C = function() { this.o(); for (var a in this.g) 0 != this.g[a] && this.A(a) };
    Jl.ka = function() { return Bk(Jl) };

    function Ql() {} Ql.prototype.next = function() { return Rl };
    var Rl = { done: !0, value: void 0 };
    Ql.prototype.za = function() { return this };

    function Sl(a) { if (a instanceof Ql) return a; if (typeof a.za == p) return a.za(!1); if (tc(a)) { var b = 0,
                c = new Ql;
            c.next = function() { for (;;) { if (b >= a.length) return Rl; if (b in a) return { value: a[b++], done: !1 };
                    b++ } }; return c } throw Error("Not implemented"); }

    function Tl(a, b, c) { for (a = Sl(a);;) { var d = a.next(); if (d.done) break; if (!b.call(c, d.value, void 0, a)) break } };

    function Ul(a, b, c, d, e) { this.m = !!b;
        this.node = null;
        this.g = 0;
        this.Vd = !1;
        this.B = !c;
        a && Vl(this, a, d);
        this.j = void 0 != e ? e : this.g || 0;
        this.m && (this.j *= -1) } B(Ul, Ql);

    function Vl(a, b, c, d) { if (a.node = b) a.g = typeof c === Db ? c : 1 != a.node.nodeType ? 0 : a.m ? -1 : 1;
        typeof d === Db && (a.j = d) } Ul.prototype.Bb = function() { var a = this.m ? -1 : 1;
        this.g == a && (this.g = -1 * a, this.j += this.g * (this.m ? -1 : 1)) };
    Ul.prototype.next = function() { if (this.Vd) { if (!this.node || this.B && 0 == this.j) return Rl; var a = this.node; var b = this.m ? -1 : 1; if (this.g == b) { var c = this.m ? a.lastChild : a.firstChild;
                c ? Vl(this, c) : Vl(this, a, -1 * b) } else(c = this.m ? a.previousSibling : a.nextSibling) ? Vl(this, c) : Vl(this, a.parentNode, -1 * b);
            this.j += this.g * (this.m ? -1 : 1) } else this.Vd = !0; return (a = this.node) ? { value: a, done: !1 } : Rl };
    Ul.prototype.splice = function(a) { var b = this.node,
            c = this.m ? 1 : -1;
        this.g == c && (this.g = -1 * c, this.j += this.g * (this.m ? -1 : 1));
        this.m = !this.m;
        Ul.prototype.next.call(this);
        this.m = !this.m;
        c = tc(arguments[0]) ? arguments[0] : arguments; for (var d = c.length - 1; 0 <= d; d--) hh(c[d], b);
        ih(b) };

    function Wl() {}

    function Xl(a) { for (var b = [], c = 0, d = a.Jc(); c < d; c++) b.push(a.Yb(c)); return b }

    function Yl(a) { return a.Ne() ? a.Ma() : a.Ya() } Wl.prototype.Ne = function() { return !1 };

    function Zl(a, b) { Ul.call(this, a, b, !0) } B(Zl, Ul);

    function $l(a, b, c, d, e) { this.l = this.h = null;
        this.A = this.C = 0;
        this.o = !!e; if (a) { this.h = a;
            this.C = b;
            this.l = c;
            this.A = d; if (1 == a.nodeType && "BR" != a.tagName)
                if (a = a.childNodes, b = a[b]) this.h = b, this.C = 0;
                else { a.length && (this.h = Ic(a)); var f = !0 } 1 == c.nodeType && ((this.l = c.childNodes[d]) ? this.A = 0 : this.l = c) } Ul.call(this, this.o ? this.l : this.h, this.o, !0);
        f && this.next() } B($l, Zl);
    w = $l.prototype;
    w.sg = !1;
    w.Xc = function() { return this.h };
    w.Mc = function() { return this.Vd && (this.node != (this.o ? this.h : this.l) ? !1 : this.o ? this.C ? -1 != this.g : 1 == this.g : !this.A || 1 != this.g) };
    w.next = function() { return this.Mc() || this.sg ? Rl : $l.G.next.call(this) };
    w.Bb = function() { $l.G.Bb.apply(this);
        nh(this.node, this.o ? this.h : this.l) && (this.sg = !0) };

    function am() {} am.prototype.za = function() { return new $l(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset) };

    function bm(a) { this.g = a } B(bm, am);

    function cm(a) { var b = J(a).createRange(); if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
        else if (dh(a) || 3 == a.nodeType) { for (var c, d = a;
                (c = d.firstChild) && (dh(c) || 3 == c.nodeType);) d = c;
            b.setStart(d, 0); for (d = a;
                (c = d.lastChild) && (dh(c) || 3 == c.nodeType);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length) } else c = a.parentNode, a = Array.prototype.indexOf.call(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1); return b }

    function dm(a, b, c, d) { var e = J(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d); return e } bm.prototype.select = function(a) { this.h(Yg(J(this.g.startContainer)).getSelection(), a) };
    bm.prototype.h = function(a) { a.removeAllRanges();
        a.addRange(this.g) };

    function em(a) { this.g = a } B(em, bm);
    em.prototype.h = function(a, b) {!b || this.g.collapsed ? em.G.h.call(this, a, b) : (a.collapse(this.g.endContainer, this.g.endOffset), a.extend(this.g.startContainer, this.g.startOffset)) };

    function fm(a) { this.g = a } B(fm, bm);
    fm.prototype.h = function(a, b) { b ? a.setBaseAndExtent(this.g.endContainer, this.g.endOffset, this.g.startContainer, this.g.startOffset) : a.setBaseAndExtent(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset) };

    function gm(a) { return G ? new fm(a) : E ? new em(a) : new bm(a) }

    function hm(a) { return G ? new fm(cm(a)) : E ? new em(cm(a)) : new bm(cm(a)) };

    function im() { this.A = this.l = this.C = this.h = this.g = null;
        this.o = !1 } B(im, Wl);

    function jm(a, b) { var c = new im;
        c.g = a;
        c.o = !!b; return c } w = im.prototype;
    w.Ce = function() { return km(this).g };
    w.Jc = function() { return 1 };
    w.Yb = function() { return this };

    function km(a) { var b; if (!(b = a.g)) { b = a.Ma(); var c = a.Na(),
                d = a.Ya(),
                e = a.Za();
            b = G ? new fm(dm(b, c, d, e)) : E ? new em(dm(b, c, d, e)) : new bm(dm(b, c, d, e));
            b = a.g = b } return b } w.Uc = function() { return km(this).g.commonAncestorContainer };
    w.Ma = function() { return this.h || (this.h = km(this).g.startContainer) };
    w.Na = function() { return null != this.C ? this.C : this.C = km(this).g.startOffset };
    w.Ya = function() { return this.l || (this.l = km(this).g.endContainer) };
    w.Za = function() { return null != this.A ? this.A : this.A = km(this).g.endOffset };
    w.Ne = function() { return this.o };
    w.Wc = function() { return km(this).g.collapsed };
    w.Vc = function() { return km(this).g.toString() };
    w.za = function() { return new $l(this.Ma(), this.Na(), this.Ya(), this.Za()) };
    w.select = function() { km(this).select(this.o) };

    function lm() {} B(lm, Wl);

    function mm() { this.j = this.h = this.g = null } B(mm, lm);
    w = mm.prototype;
    w.Ce = function() { return this.g || document.body.createControlRange() };
    w.Jc = function() { return this.g ? this.g.length : 0 };
    w.Yb = function(a) { a = this.g.item(a); return jm(hm(a)) };
    w.Uc = function() { return rh.apply(null, this.Ee()) };
    w.Ma = function() { return nm(this)[0] };
    w.Na = function() { return 0 };
    w.Ya = function() { var a = nm(this),
            b = Ic(a); return a.find(function(c) { return nh(c, b) }) };
    w.Za = function() { return this.Ya().childNodes.length };
    w.Ee = function() { if (!this.h && (this.h = [], this.g))
            for (var a = 0; a < this.g.length; a++) this.h.push(this.g.item(a)); return this.h };

    function nm(a) { a.j || (a.j = a.Ee().concat(), a.j.sort(function(b, c) { return b.sourceIndex - c.sourceIndex })); return a.j } w.Wc = function() { return !this.g || !this.g.length };
    w.Vc = function() { return "" };
    w.za = function() { return new om(this) };
    w.select = function() { this.g && this.g.select() };

    function om(a) { this.o = this.l = this.h = null;
        a && (this.o = nm(a), this.h = this.o.shift(), this.l = Ic(this.o) || this.h);
        Ul.call(this, this.h, !1, !0) } B(om, Zl);
    om.prototype.Xc = function() { return this.h };
    om.prototype.Mc = function() { return !this.j && !this.o.length };
    om.prototype.next = function() { if (this.Mc()) return Rl; if (!this.j) { var a = this.o.shift();
            Vl(this, a, 1, 1); return { value: a, done: !1 } } return om.G.next.call(this) };

    function pm() { this.g = [];
        this.l = [];
        this.j = this.h = null } B(pm, lm);
    w = pm.prototype;
    w.Ce = function() { return this.g[0] };
    w.Jc = function() { return this.g.length };
    w.Yb = function(a) { this.l[a] || (this.l[a] = jm(gm(this.g[a]))); return this.l[a] };
    w.Uc = function() { if (!this.j) { for (var a = [], b = 0, c = this.Jc(); b < c; b++) a.push(this.Yb(b).Uc());
            this.j = rh.apply(null, a) } return this.j };

    function qm(a) { a.h || (a.h = Xl(a), a.h.sort(function(b, c) { var d = b.Ma();
            b = b.Na(); var e = c.Ma();
            c = c.Na(); return d == e && b == c ? 0 : rm(d, b, e, c) ? 1 : -1 })); return a.h } w.Ma = function() { return qm(this)[0].Ma() };
    w.Na = function() { return qm(this)[0].Na() };
    w.Ya = function() { return Ic(qm(this)).Ya() };
    w.Za = function() { return Ic(qm(this)).Za() };
    w.Wc = function() { return 0 == this.g.length || 1 == this.g.length && this.Yb(0).Wc() };
    w.Vc = function() { return Xl(this).map(function(a) { return a.Vc() }).join("") };
    w.za = function() { return new sm(this) };
    w.select = function() { var a = Yg(J(D ? this.Uc() : this.Ma())).getSelection();
        a.removeAllRanges(); for (var b = 0, c = this.Jc(); b < c; b++) a.addRange(this.Yb(b).Ce()) };

    function sm(a) { this.h = null;
        this.l = 0;
        a && (this.h = qm(a).map(function(b) { return Sl(b) }));
        Ul.call(this, a ? this.Xc() : null, !1, !0) } B(sm, Zl);
    sm.prototype.Xc = function() { return this.h[0].Xc() };
    sm.prototype.Mc = function() { return this.h[this.l].Mc() };
    sm.prototype.next = function() { for (; this.l < this.h.length;) { var a = this.h[this.l],
                b = a.next(); if (b.done) this.l++;
            else return Vl(this, a.node, a.g, a.j), b } return Rl };

    function tm() { var a = window.getSelection(); return a && um(a) }

    function um(a) { var b = !1; if (a.createRange) try { var c = a.createRange() } catch (e) { return null } else if (a.rangeCount) { if (1 < a.rangeCount) { b = new pm;
                c = 0; for (var d = a.rangeCount; c < d; c++) b.g.push(a.getRangeAt(c)); return b } c = a.getRangeAt(0);
            b = rm(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset) } else return null;
        (a = c) && a.addElement ? (b = new mm, b.g = a, a = b) : a = jm(gm(a), b); return a }

    function rm(a, b, c, d) { if (a == c) return d < b; var e; if (1 == a.nodeType && b)
            if (e = a.childNodes[b]) a = e, b = 0;
            else if (nh(a, c)) return !0; if (1 == c.nodeType && d)
            if (e = c.childNodes[d]) c = e, d = 0;
            else if (nh(c, a)) return !1; return 0 < (oh(a, c) || b - d) };

    function vm() { var a = tm(); return null != a && !a.Wc() && 0 < a.Vc().length };

    function wm(a) { return function() { return a } }

    function xm(a, b) { for (var c = 0; c < b.length - 2; c += 3) { var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d } return a }

    function ym(a, b) {
        var c = b.split(".");
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, f = 0; f < a.length; f++) { var h = a.charCodeAt(f);
            128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++f) & 1023), d[e++] = h >> 18 | 240, d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224, d[e++] = h >> 6 & 63 | 128), d[e++] = h & 63 | 128) } a = b;
        for (e = 0; e < d.length; e++) a += d[e], a = xm(a, "+-a^+6");
        a = xm(a, "+-3^+b+-f");
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1E6;
        return c.toString() +
            "." + (c ^ b)
    }
    var zm = null;

    function Am() { var a = wm(String.fromCharCode(116)),
            b = wm(String.fromCharCode(107));
        a = [a(), a()];
        a[1] = b(); return a.join("") };

    function Bm() {} Bm.prototype.g = null;

    function Cm(a) { var b;
        (b = a.g) || (b = {}, Dm(a) && (b[0] = !0, b[1] = !0), b = a.g = b); return b };
    var Em;

    function Fm() {} B(Fm, Bm);

    function Gm(a) { return (a = Dm(a)) ? new ActiveXObject(a) : new XMLHttpRequest }

    function Dm(a) { if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) { for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) { var d = b[c]; try { return new ActiveXObject(d), a.h = d } catch (e) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"); } return a.h } Em = new Fm;

    function Hm(a) { P.call(this);
        this.headers = new Map;
        this.J = a || null;
        this.h = !1;
        this.B = this.g = null;
        this.m = "";
        this.l = 0;
        this.j = this.H = this.o = this.L = !1;
        this.C = 0;
        this.A = null;
        this.M = "";
        this.O = this.T = !1 } B(Hm, P);
    var Im = /^https?$/i,
        Jm = [qa, "PUT"],
        Km = [];

    function Lm(a, b, c, d, e) { var f = new Hm;
        Km.push(f);
        b && f.D(Ra, b);
        f.xb(Lb, f.Ih);
        e && (f.C = Math.max(0, e));
        f.send(a, c, d, void 0) } w = Hm.prototype;
    w.Ih = function() { this.R();
        Pc(Km, this) };
    w.send = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.m + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.m = a;
        this.l = 0;
        this.L = !1;
        this.h = !0;
        this.g = this.J ? Gm(this.J) : Gm(Em);
        this.B = this.J ? Cm(this.J) : Cm(Em);
        this.g.onreadystatechange = A(this.Fg, this);
        try { this.H = !0, this.g.open(b, String(a), !0), this.H = !1 } catch (h) { Mm(this); return } a = c || "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d) c.set(e, d[e]);
            else if (typeof d.keys ===
            p && typeof d.get === p) { e = hc(d.keys()); for (var f = e.next(); !f.done; f = e.next()) f = f.value, c.set(f, d.get(f)) } else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find(function(h) { return "content-type" == h.toLowerCase() });
        e = z.FormData && a instanceof z.FormData;
        !Oc(Jm, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = hc(c);
        for (d = b.next(); !d.done; d = b.next()) c = hc(d.value), d = c.next().value, c = c.next().value, this.g.setRequestHeader(d, c);
        this.M &&
            (this.g.responseType = this.M);
        ac in this.g && this.g.withCredentials !== this.T && (this.g.withCredentials = this.T);
        try { Nm(this), 0 < this.C && ((this.O = Om(this.g)) ? (this.g.timeout = this.C, this.g.ontimeout = A(this.Yg, this)) : this.A = uk(this.Yg, this.C, this)), this.o = !0, this.g.send(a), this.o = !1 } catch (h) { Mm(this) }
    };

    function Om(a) { return D && cg(9) && typeof a.timeout === Db && void 0 !== a.ontimeout } w.Yg = function() { "undefined" != typeof qc && this.g && (this.l = 8, this.dispatchEvent("timeout"), this.abort(8)) };

    function Mm(a) { a.h = !1;
        a.g && (a.j = !0, a.g.abort(), a.j = !1);
        a.l = 5;
        Pm(a);
        Qm(a) }

    function Pm(a) { a.L || (a.L = !0, a.dispatchEvent(Ra), a.dispatchEvent("error")) } w.abort = function(a) { this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.l = a || 7, this.dispatchEvent(Ra), this.dispatchEvent("abort"), Qm(this)) };
    w.K = function() { this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Qm(this, !0));
        Hm.G.K.call(this) };
    w.Fg = function() { this.la || (this.H || this.o || this.j ? Rm(this) : this.Yi()) };
    w.Yi = function() { Rm(this) };

    function Rm(a) { if (a.h && "undefined" != typeof qc && (!a.B[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != Sm(a)))
            if (a.o && 4 == (a.g ? a.g.readyState : 0)) uk(a.Fg, 0, a);
            else if (a.dispatchEvent(Mb), 4 == (a.g ? a.g.readyState : 0)) { a.h = !1; try { Tm(a) ? (a.dispatchEvent(Ra), a.dispatchEvent("success")) : (a.l = 6, Pm(a)) } finally { Qm(a) } } }

    function Qm(a, b) { if (a.g) { Nm(a); var c = a.g,
                d = a.B[0] ? function() {} : null;
            a.g = null;
            a.B = null;
            b || a.dispatchEvent(Lb); try { c.onreadystatechange = d } catch (e) {} } }

    function Nm(a) { a.g && a.O && (a.g.ontimeout = null);
        a.A && (vk(a.A), a.A = null) }

    function Tm(a) { var b = Sm(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0; break a;
            default:
                c = !1 }
        if (!c) { if (b = 0 === b) a = String(a.m).match(Te)[1] || null, !a && z.self && z.self.location && (a = z.self.location.protocol.slice(0, -1)), b = !Im.test(a ? a.toLowerCase() : "");
            c = b } return c }

    function Sm(a) { try { return 2 < (a.g ? a.g.readyState : 0) ? a.g.status : -1 } catch (b) { return -1 } }

    function Um(a) { try { return a.g ? a.g.responseText : "" } catch (b) { return "" } };

    function Vm(a, b) { var c = a[b - 1]; if (null == c || Wm(c)) a = a[a.length - 1], Wm(a) && (c = a[b]); return c }

    function Wm(a) { return null != a && typeof a === u && !Array.isArray(a) && a.constructor === Object } Object.freeze([]);

    function Xm(a, b) { return a === b ? !0 : Nc(a, function(c, d) { if (Wm(c)) { d = c; for (var e in d)
                    if (c = d[e], !Ym(c, Vm(b, +e))) return !1; return !0 } return Ym(c, Vm(b, d + 1)) }) && Nc(b, function(c, d) { if (Wm(c)) { for (var e in c)
                    if (null == Vm(a, +e)) return !1; return !0 } return null == c == (null == Vm(a, d + 1)) }) }

    function Ym(a, b) { return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Array.isArray(a) && Array.isArray(b) ? Xm(a, b) : !1 };
    Object.create(null);

    function Zm() {}

    function $m(a, b, c) { a = a.g = b = b || []; if (a.length) { b = a.length - 1; var d = Wm(a[b]);
            b = d ? a[b] : {};
            d && a.length--;
            d = 0; for (var e in b) { var f = +e;
                f <= c ? (a[f - 1] = b[e], delete b[e]) : d++ } if (a.length > c) { e = d;
                d = c;
                f = a.length - c; for (var h = 0; 0 < f; --f, ++d) null != a[d] && (b[d + 1] = a[d], delete a[d], h++);
                d = e + h;
                a.length = c } d && (a[c] = b) } }

    function an(a, b, c) { a = a.g[b]; return null != a ? a : c }

    function bn(a, b) { return !!an(a, b) }

    function cn(a, b) { return +an(a, b, 0) }

    function dn(a, b) { return an(a, b, "") }

    function en(a, b, c) { a = a.g;
        a[b] || (a[b] = []); return a[b][c] }

    function V(a, b) { return (a = a.g[b]) ? a.length : 0 };

    function fn(a) { $m(this, a, 8) } B(fn, Zm);

    function gn(a) { $m(this, a, 2) } B(gn, Zm);

    function hn(a) { $m(this, a, 8) } B(hn, Zm);

    function jn(a, b) { return new fn(en(a, 2, b)) };

    function kn(a) { $m(this, a, 9) } B(kn, Zm);

    function ln(a) { $m(this, a, 21) } B(ln, Zm);

    function mn(a, b) { return new hn(en(a, 5, b)) };

    function nn() { this.g = 0 }

    function on(a) { a = a.Pa("q").join(""); if (null !== zm) var b = zm;
        else { var c = wm(String.fromCharCode(84));
            b = wm(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            b = (zm = window[c.join(b())] || "") || "" } return "&" + Am() + "=" + ym(a, b) }

    function pn(a, b, c, d, e) { c = c.toString();
        c += on(d);
        d = d.toString(); var f = qa;
        b += "?" + c;
        2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");++a.g;
        Lm(b, function(h) {--a.g;
            e(h) }, f, d) }
    nn.prototype.h = function(a, b, c) { c = c.target;!Tm(c) || "[" != Um(c)[0] && "{" != Um(c)[0] ? (qn(c), b && b(Sm(c))) : (b = rn(c, "handleSingleResult_"), Array.isArray(b) && (b = new ln(b)), a(b)) };
    nn.prototype.j = function(a, b, c) { c = c.target; if (Tm(c)) { c = rn(c, "handleTextResult_"); var d = []; if (a) d.push(Array.isArray(c) ? c[0] : c);
            else if (Array.isArray(c))
                for (a = 0; a < c.length; ++a) d.push(Array.isArray(c[a]) ? c[a][0] : c[a]);
            b(d) } else qn(c), b(null, c.l) };

    function rn(a, b) { var c = Um(a);
        a = { "class": "trans.common.TranslationAPI", func: b, url: String(a.m) }; try { var d = JSON.parse(c) } catch (e) { throw d = Jl.ka(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e; } return d }

    function qn(a) { var b = Jl.ka(),
            c = String(a.m);
        a = Um(a);
        b.log("invalidResponse", { q: c.substring(0, 500), ql: c.length, r: a.substring(0, 500), rl: a.length }) };

    function sn(a) { switch (a) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5;
            case 4:
                return 6;
            case 11:
                return 7;
            case 5:
                return 8;
            case 6:
                return 9;
            case 7:
                return 10;
            case 8:
                return 11;
            default:
                return 0 } };
    var tn = window.google && google.translate && google.translate._const;
    tn || (tn = { _cac: "", _cam: "", _cest: new Date, _cjlc: "", _cl: "", _cuc: "", _cnad: !1, _cnal: {}, bk: "", _pah: "", _pas: "", _pbi: "", _pci: "", _phf: "", _pli: "", _plla: "", _pmi: "", _ps: "", _pta: "", _puh: "" });
    var un = window.google && window.google.translate && window.google.translate.v || "",
        vn = tn._cl || "en",
        wn = tn._cuc,
        xn = tn._cnad,
        yn = tn._cest,
        zn = tn._cnal || {},
        An = "lib" == tn._cam ? 1 : 0,
        Bn = (tn._cac || "te") + (1 == An ? "_lib" : ""),
        Cn = function() {
            function a(d) { return function() { return d } } var b = String.fromCharCode(107),
                c = a(String.fromCharCode(116));
            b = a(b);
            c = [c(), c()];
            c[1] = b(); return tn["_c" + c.join(b())] || "" }(),
        Dn = tn._pah || "",
        En = tn._pas || "https://",
        Fn = tn._pbi || "",
        Gn = tn._pci || "",
        Hn = tn._plla || "",
        In = tn._pli || "",
        Jn = tn._ps || "",
        Kn = tn._puh ||
        "",
        Ln = "//" + Kn + ea + Bn,
        Mn = "https://www.google.com/support/translate" + ("en" == vn ? "" : "#googtrans/en/" + vn);

    function Nn(a) { for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0; return b }

    function On(a) { this.h = a ? [a] : [];
        this.g = [0];
        this.j = !1 } On.prototype.register = function(a) { if (this.j) return a || function() {};
        this.g.push(0); var b = this.g.length - 1; return A(function() { this.g[b]++;
            a && a.apply(null, arguments);
            Pn(this) }, this) };
    On.prototype.delay = function(a) { return this.j ? a : A(function() { if (this.j) a.apply(null, arguments);
            else { var b = arguments;
                this.h.push(function() { a.apply(null, b) }) } }, this) };
    On.prototype.finish = function() { this.g[0] = 1;
        Pn(this) };

    function Pn(a) { for (var b = 0; b < a.g.length; ++b)
            if (0 == a.g[b]) return;
        a.j = !0; for (b = 0; b < a.h.length; ++b) { var c = a.h[b];
            a.h[b] = null;
            c.call() } a.h = [];
        a.g = [] }

    function Qn(a) { this.j = a;
        this.h = this.g = !1 }

    function Rn(a, b) { return A(function() { b && b.apply(null, arguments);
            this.h ? this.g || (this.j.call(), this.g = !0) : this.g = !0 }, a) } Qn.prototype.finish = function() { this.h || (this.h = !0, this.g && this.j.call()) };

    function Sn(a, b, c) { this.g = b;
        this.A = a;
        this.o = c || 0;
        this.j = this.h = !1 }

    function Tn(a) { a.h || a.m() } Sn.prototype.m = function() {
        (this.h = (this.j = !!this.A.call()) || 0 >= --this.o) ? (this.g.call(null, this.j), this.l = 0) : this.l = window.setTimeout(A(this.m, this), 30) };
    Sn.prototype.cancel = function() { this.l && window.clearTimeout(this.l);
        this.h = !0;
        this.g.call(null, this.j) };

    function Un(a, b) { return function() { a.dispatchEvent(b) } }

    function Vn(a) { a = pd(a).toLowerCase().replace("_", "-"); if ("zh-cn" == a) return "zh-CN"; if ("zh-tw" == a) return "zh-TW"; var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a; return "zh" == a ? "zh-CN" : a }

    function Wn(a) { var b = [],
            c; for (c in a)
            if (a[c] !== Object.prototype[c]) { var d = Ee(c); if (sc(a[c]) == Da)
                    for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + Ee(a[c][e]));
                else b.push(d + "=" + Ee(a[c])) } return b.join("&") }

    function Xn(a, b) { b = b || {};
        b.nca = a;
        b.client = Bn;
        un && (b.logld = "v" + un); var c = new Image;
        c.src = "";
        c.onload = function() { c.onload = null } }

    function Yn(a, b) { if ((D || Lf) && window.location.hostname != document.domain) { Zn = Zn ? Zn + 1 : 1; var c = "f" + Zn + "_" + Bc().toString(36);
            window[c] = function() { window[c] = void 0;
                a.src = ub;
                b && window.setTimeout(function() { b() }, 0) };
            a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))" } else b && b() }
    var Zn;

    function $n() { var a = {}; try { for (var b in Object.prototype) { var c = Object.prototype[b];
                delete Object.prototype[b];
                a[b] = c } } catch (d) { return {} } return a }

    function ao(a) { for (var b in a) Object.prototype[b] = a[b] }

    function bo(a) { for (var b in a)
            if (a[b] !== Object.prototype[b]) return !1; return !0 }

    function co(a, b) { return a != Ea && "zh-CN" != a && a == b }

    function eo() { var a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/); return a && a[1] ? a[1] : null };
    var fo = null,
        go = null;

    function ho(a, b, c) { for (var d in c) c[d] !== Object.prototype[d] && (b[d] = typeof c[d] === p ? c[d] : Ac(io, a, Number(c[d]))) }

    function jo() { fo && ko();
        fo = [];
        go = O(window, "pagehide", function() { ko() }) }

    function ko() { go && (Gj(go), go = null);
        fo && fo.length && Xn(fo.join(""));
        fo = null }

    function io(a, b, c) { var d = Array.prototype.slice.call(arguments);
        d.splice(0, 2);
        d = "l" + a.toString(16) + "i" + b.toString(16) + (d.length ? "-" + d.join("_") : "");
        fo ? fo.push(d) : Xn(d) };

    function lo(a) { ji.call(this, a) } x(lo, ji);

    function mo() {
        var a = JSON.parse('[null,null,null,null,null,"(function(){/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nvar f\\u003dthis||self,h\\u003dfunction(a){var b\\u003dtypeof a;return\\"object\\"!\\u003db?b:a?Array.isArray(a)?\\"array\\":b:\\"null\\"},k\\u003dfunction(a,b){function c(){}c.prototype\\u003db.prototype;a.i\\u003db.prototype;a.prototype\\u003dnew c;a.prototype.constructor\\u003da;a.h\\u003dfunction(e,d,p){for(var q\\u003dArray(arguments.length-2),g\\u003d2;g\\u003carguments.length;g++)q[g-2]\\u003darguments[g];return b.prototype[d].apply(e,q)}},l\\u003dfunction(a){return a};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nfunction m(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,m);else{var c\\u003dError().stack;c\\u0026\\u0026(this.stack\\u003dc)}a\\u0026\\u0026(this.message\\u003dString(a));void 0!\\u003d\\u003db\\u0026\\u0026(this.cause\\u003db)}k(m,Error);m.prototype.name\\u003d\\"CustomError\\";function n(a,b){a\\u003da.split(\\"%s\\");for(var c\\u003d\\"\\",e\\u003da.length-1,d\\u003d0;d\\u003ce;d++)c+\\u003da[d]+(d\\u003cb.length?b[d]:\\"%s\\");m.call(this,c+a[e])}k(n,m);n.prototype.name\\u003d\\"AssertionError\\";var r\\u003dfunction(a,b){throw new n(\\"Failure\\"+(a?\\": \\"+a:\\"\\"),Array.prototype.slice.call(arguments,1));};var t;var v\\u003dfunction(a,b){this.g\\u003db\\u003d\\u003d\\u003du?a:\\"\\"};v.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var u\\u003d{},w\\u003dfunction(a){if(void 0\\u003d\\u003d\\u003dt){var b\\u003dnull;var c\\u003df.trustedTypes;if(c\\u0026\\u0026c.createPolicy)try{b\\u003dc.createPolicy(\\"goog#html\\",{createHTML:l,createScript:l,createScriptURL:l})}catch(e){f.console\\u0026\\u0026f.console.error(e.message)}t\\u003db}a\\u003d(b\\u003dt)?b.createScriptURL(a):a;return new v(a,u)};if(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var b\\u003da.ports[0];a\\u003da.data;var c\\u003da.callbackName.split(\\".\\"),e\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003dc[0]\\u0026\\u0026c.unshift();for(var d\\u003d0;d\\u003cc.length-1;d++)e[c[d]]\\u003d{},e\\u003de[c[d]];e[c[c.length-1]]\\u003dfunction(p){b.postMessage(JSON.stringify(p))};c\\u003ddocument.createElement(\\"script\\");a\\u003dw(a.url);a instanceof v\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dv?a\\u003da.g:(r(\\"expected object of type TrustedResourceUrl, got \'\\"+a+\\"\' of type \\"+h(a)),a\\u003d\\"type_error:TrustedResourceUrl\\");c.src\\u003da;document.body.appendChild(c)},!0);}).call(this);\\n"]');
        if (!Array.isArray(a)) throw Error("Expected to deserialize an Array but got " + sc(a) + ": " + a);
        gi = a;
        a = new lo(a);
        gi = null;
        if (!a) return null;
        a = 6 >= a.l ? a.j ? a.j[6] : void 0 : a.g[6 + a.h];
        if (null === a || void 0 === a) a = null;
        else { var b = ed();
            a = b ? b.createScript(a) : a;
            a = new kd(a, jd) }
        return a
    };

    function no(a) { this.url = a;
        this.timeout = -1;
        this.l = this.j = Ka;
        this.g = this.h = null }

    function oo(a, b) { b = void 0 === b ? {} : b;
        a.g = hk(); var c = new We(a.url),
            d = new Map;
        a.l && d.set(a.l, a.j);
        c.g.Yd(mf(b), d);
        po(a).then(function() { qo(a, c.toString()) }).then(function() { return a.g.promise }).then(function() { ro(a) }, function() { ro(a) });
        0 < a.timeout && (a.m = setTimeout(function() { a.g.reject("Timeout!") }, a.timeout)); return a.g.promise }

    function qo(a, b) { var c = new MessageChannel;
        a.h.contentWindow.postMessage({ url: b, callbackName: a.j }, "*", [c.port2]);
        c.port1.onmessage = function(d) { var e = {};
            void 0 !== a.m && (clearTimeout(a.m), a.m = void 0);
            void 0 === d.data && a.g.reject("Callback called, but no data received");
            typeof d.data !== v && a.g.reject("Exploitation attempt! Data is not a string!"); try { e = JSON.parse(d.data) } catch (f) { a.g.reject("Invalid Data received: " + f.message) } a.g.resolve(e) } }

    function po(a) { var b = hk(),
            c = ah(document, ma); if (!c.sandbox) throw Error("iframe sandboxes not supported");
        c.sandbox.value = "allow-scripts";
        c.style.display = r;
        a.h = c;
        a = mo();
        a = ie(oe, fe("body", {}, de(be(qe(a)).toString())));
        c.srcdoc = be(a);
        a = od("data:text/html;charset=UTF-8;base64," + btoa(be(a).toString()));
        c.src = nd(a).toString();
        c.addEventListener(xb, function() { return b.resolve(c) }, !1);
        c.addEventListener("error", function(d) { b.reject(d) }, !1);
        document.documentElement.appendChild(c); return b.promise }

    function ro(a) { null !== a.h && (document.documentElement.removeChild(a.h), a.h = null) };

    function so(a, b) { N.call(this);
        this.g = new We(a); if (b)
            for (var c in b) b[c] !== Object.prototype[c] && this.g.g.set(c, b[c]) } x(so, N);
    so.prototype.j = function() { return !0 };
    so.prototype.Ua = function() { return this.j() };
    so.prototype.send = function() { return null };
    so.prototype.cancel = function() {};

    function to(a, b, c, d) { so.call(this, a, b);
        this.l = null == d || !!d;
        a = this.h = new no(this.g);
        a.j = Ka;
        a.l = void 0 === c ? Ka : c } x(to, so);
    to.prototype.j = function() { return this.l };
    to.prototype.send = function(a, b) { a = oo(this.h, a);
        a.then(b); return a };
    to.prototype.cancel = function(a) { a.cancel() };

    function uo(a, b) { so.call(this, a, b);
        this.l = {};
        this.h = this.m = 0;
        window.XMLHttpRequest && ac in new XMLHttpRequest && (this.h = 1);!this.h && window.XDomainRequest && "file:" != window.location.protocol && (this.h = 2, this.g.g.set("u", window.location.href)) } x(uo, so);
    uo.prototype.j = function() { return !!this.h };
    uo.prototype.send = function(a, b) {
        var c = $n(),
            d = ++this.m,
            e = {},
            f = {};
        "q" in a && (f.q = a.q, delete a.q);
        a.mode = this.h;
        1 == this.h ? (e.rb = new Hm, O(e.rb, Ra, A(function() { e.yc || (Tm(e.rb) ? b(Um(e.rb)) : (this.yg(), b(null, Um(e.rb) || null)), vo(this, d)) }, this)), O(e.rb, "timeout", A(function() { e.yc || (this.zg(), vo(this, d)) }, this)), e.rb.send(this.g.toString() + "&" + Wn(a), qa, Wn(f), { "Content-Type": "application/x-www-form-urlencoded" })) : (e.Xa = new XDomainRequest, e.Xa.timeout = 2E4, e.Xa.onload = A(function() {
            e.yc || (b(e.Xa.responseText),
                vo(this, d))
        }, this), e.Xa.onerror = A(function() { e.yc || (this.yg(), b(null), vo(this, d)) }, this), e.Xa.ontimeout = A(function() { e.yc || (this.zg(), b(null), vo(this, d)) }, this), e.Xa.open(qa, this.g.toString() + "&" + Wn(a)), e.Xa.send(Wn(f)));
        this.l[d] = e;
        ao(c);
        return d
    };
    uo.prototype.cancel = function(a) { var b = this.l[a];
        b && (b.yc = !0, b.Xa && b.Xa.abort(), vo(this, a)) };

    function vo(a, b) { var c = a.l[b];
        c && (c.rb ? (c.rb.R(), c.rb = null) : c.Xa && (c.Xa = null), delete a.l[b]) } uo.prototype.K = function() { so.prototype.K.call(this); for (var a in this.l) this.cancel(a) };
    ho(17170, uo.prototype, { zg: 1, yg: 2 });

    function wo(a, b, c) { so.call(this, a, c);
        this.l = b.proxyIsSupported;
        this.m = b.proxySend;
        this.h = b.proxyCancel } x(wo, so);
    wo.prototype.j = function() { return this.l() };
    wo.prototype.send = function(a, b) { return this.m(this.g.toString(), a, b) };
    wo.prototype.cancel = function(a) { this.h(a) };

    function xo(a, b) { N.call(this);
        this.j = !0;
        this.h = a;
        this.g = b ? b : null } x(xo, N);

    function yo(a, b) { if (!a.j) return b; if (sc(b) != Da) a = [
            [b, 200]
        ];
        else if (2 == b.length && sc(b[0]) != Da && sc(b[1]) != Da) a = [
            [b[0], 200, b[1]],
            [b[1], 200, b[1]]
        ];
        else { a = []; for (var c = 0; c < b.length; ++c) a[c] = sc(b[c]) != Da ? [b[c], 200] : [b[c][0], 200, b[c][1]] } return a } xo.prototype.m = function(a) { var b = this; return function(c) { if (c) try { var d = c.indexOf("\x00");
                0 <= d && (c = c.substr(0, d)); var e = JSON.parse(c) } catch (f) { e = null, b.Hi() } e ? a(yo(b, e), 200) : a([], 500) } };
    xo.prototype.l = function(a) { var b = this; return function(c) { c ? a(yo(b, c), 200) : a([], 500) } };
    xo.prototype.K = function() { N.prototype.K.call(this) };
    ho(47504, xo.prototype, { Hi: function() { Xn("te_afbr") } });
    var gk = { 0: "NO_ERROR", 1: "UNKNOWN_ERROR", 2: "JWT_TOKEN_CANNOT_PARSE", 3: "JWT_TOKEN_MISS_PARAM", 4: "JWT_TOKEN_INVALID_ISS", 5: "JWT_TOKEN_INVALID", 6: oa, 7: "OUT_OF_QUOTA", 8: oa };

    function zo() {} zo.prototype.h = function() {};

    function Ao(a) { a = a.split("."); if (3 !== a.length) return !1;
        a = JSON.parse(Rh(a[1])); return null == a || !a.exp || 1E3 * a.exp < Bc() ? !1 : !0 }

    function Bo(a) { this.g = a } x(Bo, zo);
    Bo.prototype.h = function() { return Ao(this.g) ? ek(this.g) : fk() };

    function Co(a) { this.g = null;
        this.j = a } x(Co, zo);
    Co.prototype.h = function() { if (null != this.g && Ao(this.g)) return ek(this.g);
        this.g = null; return new Zj(function(a, b) { var c = this;
            this.j(function(d) { c.g = d;
                Ao(c.g) ? a(d) : b(gk[5]) }, b) }, this) };

    function Do(a, b, c, d, e, f) {
        N.call(this);
        var h;
        b ? h = { client: b } : h = { anno: 3, client: Bn, format: "html", v: "1.0" };
        c && (h.sp = c);
        h.key = a;
        un && (h.logld = "v" + un);
        this.o = d || null;
        this.Pb = e || null;
        this.g = null;
        this.h = { zc: A(this.vj, this), Bg: 300 };
        a = this.l = new xo(h, f);
        b = En + Hn;
        this.m = a.g ? new wo(b, a.g, { client: Bn }) : new to(b, { client: Bn }, "cb");
        a = this.l;
        if (a.g) { if (!a.g) throw Error("this.remoteApiProxyHandlers_ is null");
            a = [{ sa: new wo(En + Dn + da, a.g, a.h), zc: A(a.l, a), Kd: 1900, Ue: 4294967295, Te: -1, lf: 0, nd: !1 }] } else b = En + Dn, a = [{
            sa: new uo(b +
                da, a.h),
            zc: A(a.m, a),
            Kd: 30720,
            Ue: 4294967295,
            Te: -1,
            lf: 0,
            nd: !1
        }, { sa: new to(b + da, a.h, "cb", D && 7 >= ag), zc: A(a.l, a), Kd: 1900, Ue: 4294967295, Te: -1, lf: 3, nd: !0 }];
        this.A = new Eo(a);
        this.j = !1;
        for (b = 0; b < a.length; ++b) this.j = this.j || a[b].sa.j();
        this.j || this.Ii()
    }
    x(Do, N);
    w = Do.prototype;
    w.vj = function(a) { return function(b) { if (b) try { var c = JSON.parse(b) } catch (d) { c = null } a(c && c[1] || void 0) } };
    w.Ef = function(a) { this.C || (this.C = !0, this.A.start(A(function(b) { b && (this.g = b, this.h.sa = b.sa);
            a() }, this))) };
    w.Ua = function() { return null !== this.g && null !== this.g.sa && this.g.sa.Ua() };
    w.translate = function(a, b, c, d, e, f, h, k) { var l = this,
            m = this.g.zc(a),
            n = { q: b, sl: c, tl: d };
        n.tc = e;
        f && (n.ctt = 1);
        h && (n.dom = 1);
        k && (n.sr = 1);
        n[Am()] = ym(b.join(""), Cn); return this.o ? this.o.h().then(function(q) { null != q && (n.jwtt = q, n.rurl = location.hostname); return l.g.sa.send(n, A(Fo(m), l)) }, function(q) { q && l.Pb && l.Pb(q) }) : this.g.sa.send(n, m) };

    function Fo(a) { return function(b, c) { if (c && this.Pb) { try { var d = JSON.parse(c).error_code } catch (e) { d = null } c = gk[1];
                this.Pb(null == d ? c : gk[d] || c) } a(b) } }

    function Go(a, b) { b instanceof Zj ? b.then(function(c) { a.g.sa.cancel(c) }) : a.g.sa.cancel(b) }

    function Ho(a) { return a.g.nd ? a.g.Kd - (new We(a.g.sa.g)).toString().length : a.g.Kd } w.K = function() { N.prototype.K.call(this);
        this.g && (this.g.sa.R(), this.g.sa = null);
        this.h.sa = null;
        this.m.R();
        this.m = null };
    ho(7361, Do.prototype, { Ii: function() { Xn("te_au") } });

    function Eo(a) { this.h = a } Eo.prototype.start = function(a) { this.g = a;
        this.j = 0;
        Io(this) };

    function Io(a) { if (a.j >= a.h.length) a.g(null);
        else { var b = a.h[a.j++];
            b.ej ? Tn(new Sn(A(b.sa.Ua, b.sa), A(function(c) { c ? this.g(b) : Io(this) }, a), b.ej)) : b.sa.Ua() ? a.g(b) : Io(a) } };

    function Jo() { this.g = [] } Jo.prototype.add = function(a) { this.g.push(a) };

    function Ko() { this.g = [] } x(Ko, Jo);
    Ko.prototype.add = function(a) { if (a)
            for (; a();); };
    Ko.ka = function() { return Bk(Ko) };

    function Lo(a) { this.g = [];
        this.h = .5;
        Mo(this, a);
        this.l = 0;
        this.j = !0;
        this.m = A(this.o, this) } x(Lo, Jo);

    function Mo(a, b) { 1 < b ? a.h = 1 : .001 > b ? a.h = .001 : b && (a.h = b) } Lo.prototype.add = function(a) { Jo.prototype.add.call(this, a);
        this.j && No(this) };

    function No(a) { 
        let timer = null;
        a.j = !1;
        window.setTimeout(a.m, Math.min(a.l, 5E3))
    }

    Lo.prototype.o = function() { var a = (new Date).getTime();
        do { this.g.length && (this.g[0] && this.g[0]() || this.g.shift()); var b = !!this.g.length; var c = 95 * this.h + 5; var d = (new Date).getTime() - a } while (b && d < c);
        this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
        b ? No(this) : this.j = !0 };
    
    var Oo = Nn(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", na, "NOBR", "LABEL", "Q", "S", "SMALL", ra, "STRIKE", "STRONG", "SUB", "SUP", ta, "TT", "U", "VAR"]),
        Po = Nn(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", na, ta, "TITLE"]),
        Qo = Nn("BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")),
        Ro = Nn(["submit", Ja]);

    function So(a, b) { this.j = D ? [] : null;
        this.h = [];
        this.done = !1; for (this.g = new Ul(a, !1, b, 3 === a.nodeType ? 0 : 1, 1); a = a.parentNode;) To(this, a, !0);
        this.h.push(!1);
        this.h.reverse(); for (a = 1; a < this.h.length; ++a) null == this.h[a] && (this.h[a] = this.h[a - 1]) }

    function To(a, b, c) { c = void 0 === c ? !1 : c; var d = (b.style && b.style.whiteSpace || "").substring(0, 3); "pre" === d || !d && "PRE" === b.tagName ? a.h.push(!0) : d && "pre" !== d ? a.h.push(!1) : c ? a.h.push(null) : a.h.push(a.h[a.h.length - 1]) }

    function Uo(a) { return !!a.h[a.h.length - 1] }
    So.prototype.node = function() { return this.g.node };
    So.prototype.next = function() { try { this.j && 0 < this.j.length && -1 === this.g.g && this.j.length--; - 1 === this.g.g && this.h.length--; if (this.j && 0 < this.j.length && 1 !== this.g.g && !this.g.node.nextSibling) Vl(this.g, this.j[this.j.length - 1], -1, this.g.j - 1);
            else { if (this.g.next().done) { this.done = !0; return } this.j && 1 === this.g.g && this.j.push(this.g.node) } 1 === this.g.g && this.g.Vd && To(this, this.g.node) } catch (a) { this.Oi(a), this.done = !0 } };
    ho(52754, So.prototype, { Oi: 1 });

    function Vo() { return "[msg_undefined]" }
    var W = {};
    (function() {
        function a(b) { return function() { return b } } W = { Mf: a(0), yf: a(1), zf: a(2), Mj: a(3), yh: a(4), Af: a(5), ph: a(45), qh: a(6), th: a(7), cd: a(8), zh: a(9), Xj: a(10), Dh: a(11), uh: a(12), Tj: a(13), wh: a(14), Sj: a(15), vh: a(16), Zj: a(17), Ah: a(18), yj: a(19), Lj: a(20), dh: a(21), xh: a(22), Qj: a(23), Pj: a(24), Nj: a(25), Yj: a(26), Wj: a(27), Oj: a(28), rh: a(29), Bh: a(30), xj: a(32), wj: a(33), Ch: a(34), Dj: a(35), Bj: a(36), Cj: a(37), Lf: a(38), Fj: a(39), xf: a(40), sh: a(41), Kf: a(46) } })();

    function Wo() { P.call(this);
        this.g = 0;
        this.endTime = this.startTime = null } B(Wo, P);
    Wo.prototype.h = function() { this.Sa("begin") };
    Wo.prototype.j = function() { this.Sa("end") };
    Wo.prototype.yb = function() { this.Sa("stop") };
    Wo.prototype.Sa = function(a) { this.dispatchEvent(a) };

    function Xo(a, b) { Array.isArray(b) || (b = [b]);
        b = b.map(function(c) { return typeof c === v ? c : c.hk + " " + c.duration + "s " + c.timing + " " + c.delay + "s" });
        L(a, Xb, b.join(",")) }
    var Yo = ve(function() { if (D) return cg("10.0"); var a = ah(document, g),
            b = G ? "-webkit" : E ? "-moz" : D ? "-ms" : null,
            c = { transition: Eb };
        b && (c[b + "-transition"] = Eb);
        b = fe(Wa, { style: c });
        xe(a, b);
        a = a.firstChild;
        b = a.style[Me(Xb)]; return "" != ("undefined" !== typeof b ? b : a.style[vi(a, Xb)] || "") });

    function Zo(a, b, c, d, e) { Wo.call(this);
        this.F = a;
        this.o = b;
        this.A = c;
        this.l = d;
        this.C = Array.isArray(e) ? e : [e] } B(Zo, Wo);
    w = Zo.prototype;
    w.play = function() { if (1 == this.g) return !1;
        this.h();
        this.Sa("play");
        this.startTime = Bc();
        this.g = 1; if (Yo()) return L(this.F, this.A), this.m = uk(this.dj, void 0, this), !0;
        this.ee(!1); return !1 };
    w.dj = function() { Hi(this.F);
        Xo(this.F, this.C);
        L(this.F, this.l);
        this.m = uk(A(this.ee, this, !1), 1E3 * this.o) };
    w.stop = function() { 1 == this.g && this.ee(!0) };
    w.ee = function(a) { L(this.F, Xb, "");
        vk(this.m);
        L(this.F, this.l);
        this.endTime = Bc();
        this.g = 0;
        a ? this.yb() : this.Sa(Xa);
        this.j() };
    w.K = function() { this.stop();
        Zo.G.K.call(this) };

    function $o(a, b) { P.call(this);
        this.o = new xk(this);
        this.Tb(a || null);
        b && (this.nc = b) } B($o, P);
    w = $o.prototype;
    w.F = null;
    w.xc = !0;
    w.Pf = null;
    w.ec = !1;
    w.Pe = -1;
    w.nc = Ub;
    w.s = function() { return this.F };
    w.Tb = function(a) { ap(this);
        this.F = a };
    w.Oc = function(a) { ap(this);
        this.xc = a };

    function ap(a) { if (a.ec) throw Error("Can not change this state of the popup while showing."); } w.isVisible = function() { return this.ec };
    w.N = function(a) {
        this.ya && this.ya.stop();
        this.oa && this.oa.stop();
        if (a) {
            if (!this.ec && this.fe()) {
                if (!this.F) throw Error("Caller must call setElement before trying to show the popup");
                this.gb();
                a = J(this.F);
                if (this.xc)
                    if (this.o.D(a, yb, this.Ze, !0), D) { try { var b = a.activeElement } catch (d) {} for (; b && b.nodeName == ma;) { try { var c = sh(b) } catch (d) { break } a = c;
                            b = a.activeElement } this.o.D(a, yb, this.Ze, !0);
                        this.o.D(a, "deactivate", this.Eg) } else this.o.D(a, Ha, this.Eg);
                this.nc == Ub ? (this.F.style.visibility = $b, M(this.F, !0)) : this.nc ==
                    Cb && this.gb();
                this.ec = !0;
                this.Pe = Date.now();
                this.ya ? (yj(this.ya, "end", this.Gg, !1, this), this.ya.play()) : this.Gg()
            }
        } else bp(this)
    };
    w.gb = function() {};

    function bp(a, b) { a.ec && a.dispatchEvent({ type: "beforehide", target: b }) && (a.o && Ak(a.o), a.ec = !1, a.oa ? (yj(a.oa, "end", Ac(a.Sf, b), !1, a), a.oa.play()) : a.Sf(b)) } w.Sf = function(a) { this.nc == Ub ? this.Bi() : this.nc == Cb && (this.F.style.top = "-10000px");
        this.af(a) };
    w.Bi = function() { this.F.style.visibility = ob;
        M(this.F, !1) };
    w.fe = function() { return this.dispatchEvent("beforeshow") };
    w.Gg = function() { this.dispatchEvent("show") };
    w.af = function(a) { this.dispatchEvent({ type: pb, target: a }) };
    w.Ze = function(a) { a = a.target;
        nh(this.F, a) || cp(this, a) || 150 > Date.now() - this.Pe || bp(this, a) };
    w.Eg = function(a) { var b = J(this.F); if ("undefined" != typeof document.activeElement) { if (a = b.activeElement, !a || nh(this.F, a) || "BODY" == a.tagName || cp(this, a)) return } else if (a.target != b) return;
        150 > Date.now() - this.Pe || bp(this) };

    function cp(a, b) { return Mc(a.Pf || [], function(c) { return b === c || nh(c, b) }) }
    w.K = function() { $o.G.K.call(this);
        this.o.R();
        gj(this.ya);
        gj(this.oa);
        delete this.F;
        delete this.o;
        delete this.Pf };

    function dp(a, b) { this.C = b || void 0;
        $o.call(this, a) } B(dp, $o);
    dp.prototype.gb = function() { if (this.C) { var a = !this.isVisible() && this.nc != Cb,
                b = this.s();
            a && (b.style.visibility = ob, M(b, !0));
            this.C.h(b, 8, this.Se);
            a && M(b, !1) } };

    function ep(a, b) { dp.call(this, a);
        this.j = b;
        this.g = 0;
        this.h = null;
        this.l = 0;
        this.N(!0);
        this.N(!1);
        K(this.s(), "round-trip-popup");
        K(this.j, "round-trip-content") } x(ep, dp);
    ep.prototype.B = function() { vk(this.l);
        1 == this.g ? yj(this.h, Xa, A(this.B, this)) : 0 == this.g && (this.l = uk(A(this.A, this, -1), 200)) };
    ep.prototype.A = function(a) {
        if (this.g != a && (0 != this.g || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
            var b = this.isVisible();
            this.N(!0);
            var c = -Math.ceil(Hi(this.j).width);
            Li(this.s()) && (c = -c);
            var d = 1 == a ? c : 0;
            c = 1 == a ? 0 : c;
            this.N(b);
            if (Yo()) { b = .2; if (0 != this.g) { var e = parseInt(xi(this.j, "left"), 10);
                    this.m();
                    b *= (c - e) / (c - d);
                    d = e } this.g = a;
                this.h = new Zo(this.j, b, { left: d + "px" }, { left: c + "px" }, "left " + b + "s");
                this.h.play();
                yj(this.h, Xa, A(this.m, this)); - 1 == a ? yj(this.h, Xa, A(this.N, this, !1)) : this.N(!0) } else L(this.j,
                "left", c + "px"), this.N(1 == a ? !0 : !1)
        }
    };
    ep.prototype.m = function() { 0 != this.g && (this.h.stop(), uk(A(Hj, this, this.h)), this.g = 0, this.h = null) };

    function fp() { this.F = null;
        this.g = Zg(g, "gt-hl-layer", document.createTextNode(""));
        this.h = null;
        this.F && (gh(this.g, this.F), gp(this)) }

    function hp(a, b, c, d, e) { var f = d || "gt-hl-text";
        d = a.F && (a.F.value || Ah(a.F));
        gp(a);
        fh(a.g); if (b != c || e) { if (0 < b) { var h = d.substring(0, b);
                ip(a.g, h, 0, e) } b < c && (h = d.substring(b, c), f = Zg(ra, f), ip(f, h, b, e), a.g.appendChild(f));
            c < d.length && (h = d.substring(c), ip(a.g, h, c, e)) } }

    function gp(a) {
        var b = a.F;
        var c = J(b),
            d = D && b.currentStyle;
        d && Vg(Lg(c).g) && d.width != Ea && d.height != Ea && !d.boxSizing ? (c = Ti(b, d.width, "width", "pixelWidth"), b = Ti(b, d.height, "height", "pixelHeight"), b = new Kg(c, b)) : (d = Oi(b), c = Ri(b), b = Si(b), b = new Kg(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
        Pi(a.g, b);
        c = Fi(a.F);
        b = a.g;
        d = c.x;
        c = c.y;
        var e = Fi(b);
        d instanceof I && (c = d.y, d = d.x);
        zi(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = Ri(a.F);
        L(a.g, Fb, b.left + "px");
        L(a.g, Gb, b.right +
            "px");
        a.g.dir = a.F.dir
    }

    function ip(a, b, c, d) { d = d || []; for (var e = 0, f; f = d[e]; e++)
            if (!(0 > f.Ec - c)) { if (f.Ec - c >= b.length) break; if (0 < f.Ec - c) { var h = b.substring(0, f.Ec - c);
                    jp(a, h) } var k = f.className || "gt-hl-text";
                h = b.substring(f.Ec - c, f.uf - c); var l = Zg(ra);
                ni(l, k);
                jp(l, h);
                a.appendChild(l);
                b = b.substring(f.uf - c);
                c = f.uf } b && jp(a, b) }

    function jp(a, b) { b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n"); for (var c = 0, d = b.length; c < d; c++) { if (0 < c) { var e = Zg("BR");
                a.appendChild(e) } a.appendChild(document.createTextNode(String(b[c]))) } };

    function kp(a) { P.call(this);
        this.F = a;
        a = D ? bb : Ha;
        this.g = O(this.F, D ? ab : $a, this, !D);
        this.h = O(this.F, a, this, !D) } B(kp, P);
    kp.prototype.handleEvent = function(a) { var b = new kj(a.h);
        b.type = a.type == ab || a.type == $a ? ab : bb;
        this.dispatchEvent(b) };
    kp.prototype.K = function() { kp.G.K.call(this);
        Gj(this.g);
        Gj(this.h);
        delete this.F };

    function lp(a, b, c) { this.j = a;
        this.l = b;
        this.C = c } B(lp, si);
    lp.prototype.h = function(a, b, c) { $i(this.j, this.l, a, b, void 0, c, this.C) };

    function mp(a, b) { this.g = a instanceof I ? a : new I(a, b) } B(mp, si);
    mp.prototype.h = function(a, b, c) { $i(Bi(a), 0, a, b, this.g, c, null) };

    function np(a, b) { this.g = a[z.Symbol.iterator]();
        this.h = b } np.prototype[Symbol.iterator] = function() { return this };
    np.prototype.next = function() { var a = this.g.next(); return { value: a.done ? void 0 : this.h.call(void 0, a.value), done: a.done } };

    function op(a, b) { return new np(a, b) };

    function pp(a) { if (a instanceof qp || a instanceof rp || a instanceof sp) return a; if (typeof a.next == p) return new qp(function() { return a }); if (typeof a[Symbol.iterator] == p) return new qp(function() { return a[Symbol.iterator]() }); if (typeof a.za == p) return new qp(function() { return a.za() }); throw Error("Not an iterator or iterable."); }

    function qp(a) { this.g = a } qp.prototype.za = function() { return new rp(this.g()) };
    qp.prototype[Symbol.iterator] = function() { return new sp(this.g()) };
    qp.prototype.h = function() { return new sp(this.g()) };

    function rp(a) { this.g = a } x(rp, Ql);
    rp.prototype.next = function() { return this.g.next() };
    rp.prototype[Symbol.iterator] = function() { return new sp(this.g) };
    rp.prototype.h = function() { return new sp(this.g) };

    function sp(a) { qp.call(this, function() { return a });
        this.j = a } x(sp, qp);
    sp.prototype.next = function() { return this.j.next() };

    function tp(a, b) { this.h = {};
        this.g = [];
        this.j = this.size = 0; var c = arguments.length; if (1 < c) { if (c % 2) throw Error("Uneven number of arguments"); for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else if (a)
            if (a instanceof tp)
                for (c = a.wb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d]) } w = tp.prototype;
    w.Pa = function() { up(this); for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]); return a };
    w.wb = function() { up(this); return this.g.concat() };

    function vp(a, b) { return a.has(b) } w.has = function(a) { return wp(this.h, a) };
    w.cc = function() { return 0 == this.size };

    function xp(a) { a.h = {};
        a.g.length = 0;
        a.size = 0;
        a.j = 0 } w.remove = function(a) { wp(this.h, a) ? (delete this.h[a], --this.size, this.j++, this.g.length > 2 * this.size && up(this), a = !0) : a = !1; return a };

    function up(a) { if (a.size != a.g.length) { for (var b = 0, c = 0; b < a.g.length;) { var d = a.g[b];
                wp(a.h, d) && (a.g[c++] = d);
                b++ } a.g.length = c } if (a.size != a.g.length) { var e = {}; for (c = b = 0; b < a.g.length;) d = a.g[b], wp(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c } } w.get = function(a, b) { return wp(this.h, a) ? this.h[a] : b };
    w.set = function(a, b) { wp(this.h, a) || (this.size += 1, this.g.push(a), this.j++);
        this.h[a] = b };
    w.forEach = function(a, b) { for (var c = this.wb(), d = 0; d < c.length; d++) { var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this) } };
    w.keys = function() { return pp(this.za(!0)).h() };
    w.values = function() { return pp(this.za(!1)).h() };
    w.entries = function() { var a = this; return op(this.keys(), function(b) { return [b, a.get(b)] }) };
    w.za = function(a) { up(this); var b = 0,
            c = this.j,
            d = this,
            e = new Ql;
        e.next = function() { if (c != d.j) throw Error("The map has changed since the iterator was created"); if (b >= d.g.length) return Rl; var f = d.g[b++]; return { value: a ? f : d.h[f], done: !1 } }; return e };

    function wp(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };

    function yp() { this.g = new tp;
        this.size = 0 }

    function zp(a) { var b = typeof a; return b == u && a || b == p ? "o" + vc(a) : b.slice(0, 1) + a } w = yp.prototype;
    w.add = function(a) { this.g.set(zp(a), a);
        this.size = this.g.size };
    w.remove = function(a) { a = this.g.remove(zp(a));
        this.size = this.g.size; return a };
    w.cc = function() { return 0 === this.g.size };
    w.has = function(a) { return vp(this.g, zp(a)) };
    w.contains = function(a) { return vp(this.g, zp(a)) };
    w.Pa = function() { return this.g.Pa() };
    w.values = function() { return this.g.values() };
    w.za = function() { return this.g.za(!1) };
    yp.prototype[Symbol.iterator] = function() { return this.values() };

    function Ap(a, b, c) { this.S = c || (a ? Lg(Ng(document, a)) : Lg());
        dp.call(this, this.S.I(g, { style: "position:absolute;display:none;" }));
        this.Fb = new I(1, 1);
        this.B = new yp;
        this.L = null;
        a && Bp(this, a);
        null != b && this.Qa(b) } B(Ap, dp);
    var Cp = [];
    w = Ap.prototype;
    w.Ca = null;
    w.className = "goog-tooltip";
    w.Sg = 500;
    w.tg = 0;

    function Bp(a, b) { b = Ng(document, b);
        a.B.add(b);
        O(b, Bb, a.ge, !1, a);
        O(b, Ab, a.Zb, !1, a);
        O(b, zb, a.jg, !1, a);
        O(b, $a, a.Ff, !1, a);
        O(b, Ha, a.Zb, !1, a) }

    function Dp(a, b) { if (b) b = Ng(document, b), Ep(a, b), a.B.remove(b);
        else { for (var c = a.B.Pa(), d = 0; b = c[d]; d++) Ep(a, b);
            a = a.B;
            xp(a.g);
            a.size = 0 } }

    function Ep(a, b) { Fj(b, Bb, a.ge, !1, a);
        Fj(b, Ab, a.Zb, !1, a);
        Fj(b, zb, a.jg, !1, a);
        Fj(b, $a, a.Ff, !1, a);
        Fj(b, Ha, a.Zb, !1, a) } w.Qa = function(a) { uh(this.s(), a) };
    w.Tb = function(a) { var b = this.s();
        b && ih(b);
        Ap.G.Tb.call(this, a);
        a ? (b = this.S.g.body, b.insertBefore(a, b.lastChild), gj(this.L), this.L = new kp(this.s()), hj(this, Ac(gj, this.L)), O(this.L, ab, this.Xb, void 0, this), O(this.L, bb, this.Ud, void 0, this)) : (gj(this.L), this.L = null) };
    w.sc = function() { return Ah(this.s()) };

    function Fp(a) { return a.T ? a.isVisible() ? 4 : 1 : a.ra ? 3 : a.isVisible() ? 2 : 0 }
    w.fe = function() { if (!$o.prototype.fe.call(this)) return !1; if (this.h)
            for (var a, b = 0; a = Cp[b]; b++) nh(a.s(), this.h) || a.N(!1);
        Oc(Cp, this) || Cp.push(this);
        a = this.s();
        a.className = this.className;
        this.Xb();
        O(a, Bb, this.Bd, !1, this);
        O(a, Ab, this.Ad, !1, this);
        Gp(this); return !0 };
    w.af = function() { Pc(Cp, this); for (var a = this.s(), b, c = 0; b = Cp[c]; c++) b.h && nh(a, b.h) && b.N(!1);
        this.hd && this.hd.Ud();
        Fj(a, Bb, this.Bd, !1, this);
        Fj(a, Ab, this.Ad, !1, this);
        this.h = void 0;
        0 == Fp(this) && (this.Ra = !1);
        $o.prototype.af.call(this) };
    w.Ve = function(a, b) { this.h == a && this.B.contains(this.h) && (this.Ra || !this.Tf ? (this.N(!1), this.isVisible() || (this.h = a, this.C = b || new Hp(Ig(this.Fb)), this.isVisible() && this.gb(), this.N(!0))) : this.h = void 0);
        this.T = void 0 };
    w.Ee = function() { return this.B };
    w.Si = function(a) { this.ra = void 0; if (a == this.h) { a = this.S; var b = a.g; try { var c = b && b.activeElement; var d = c && c.nodeName ? c : null } catch (e) { d = null } d = d && this.s() && a.contains(this.s(), d);
            null != this.Ca && (this.Ca == this.s() || this.B.contains(this.Ca)) || d || this.gd && this.gd.Ca || this.N(!1) } };

    function Ip(a, b) { var c = Wg(a.S.g);
        a.Fb.x = b.clientX + c.x;
        a.Fb.y = b.clientY + c.y } w.ge = function(a) { var b = Jp(this, a.target);
        this.Ca = b;
        this.Xb();
        b != this.h && (this.h = b, Kp(this, b), Lp(this), Ip(this, a)) };

    function Jp(a, b) { try { for (; b && !a.B.contains(b);) b = b.parentNode; return b } catch (c) { return null } } w.jg = function(a) { Ip(this, a);
        this.Ra = !0 };
    w.Ff = function(a) { this.Ca = a = Jp(this, a.target);
        this.Ra = !0; if (this.h != a) { this.h = a; var b = new Mp(this.Ca);
            this.Xb();
            Kp(this, a, b);
            Lp(this) } };

    function Lp(a) { if (a.h)
            for (var b, c = 0; b = Cp[c]; c++) nh(b.s(), a.h) && (b.gd = a, a.hd = b) }
    w.Zb = function(a) { var b = Jp(this, a.target),
            c = Jp(this, a.relatedTarget);
        b != c && (b == this.Ca && (this.Ca = null), Gp(this), this.Ra = !1, !this.isVisible() || a.relatedTarget && nh(this.s(), a.relatedTarget) ? this.h = void 0 : this.Ud()) };
    w.Bd = function() { var a = this.s();
        this.Ca != a && (this.Xb(), this.Ca = a) };
    w.Ad = function(a) { var b = this.s();
        this.Ca != b || a.relatedTarget && nh(b, a.relatedTarget) || (this.Ca = null, this.Ud()) };

    function Kp(a, b, c) { a.T || (a.T = uk(A(a.Ve, a, b, c), a.Sg)) }

    function Gp(a) { a.T && (vk(a.T), a.T = void 0) }
    w.Ud = function() { 2 == Fp(this) && (this.ra = uk(A(this.Si, this, this.h), this.tg)) };
    w.Xb = function() { this.ra && (vk(this.ra), this.ra = void 0) };
    w.K = function() { this.N(!1);
        Gp(this);
        Dp(this);
        this.s() && ih(this.s());
        this.Ca = null;
        delete this.S;
        Ap.G.K.call(this) };

    function Hp(a, b) { mp.call(this, a, b) } B(Hp, mp);
    Hp.prototype.h = function(a, b, c) { b = Bi(a);
        b = Ei(b);
        c = c ? new ti(c.top + 10, c.right, c.bottom, c.left + 10) : new ti(10, 0, 0, 10);
        cj(this.g, a, 8, c, b, 9) & 496 && cj(this.g, a, 8, c, b, 5) };

    function Mp(a) { lp.call(this, a, 5) } B(Mp, lp);
    Mp.prototype.h = function(a, b, c) { var d = new I(10, 0);
        $i(this.j, this.l, a, b, d, c, 9) & 496 && $i(this.j, 4, a, 1, d, c, 5) };

    function Np() { this.h = [] } B(Np, cl);
    rc(Np);

    function Op(a, b) { var c = a.h[b]; if (!c) { switch (b) {
                case 0:
                    c = a.ia() + "-highlight"; break;
                case 1:
                    c = a.ia() + "-checkbox"; break;
                case 2:
                    c = a.ia() + "-content" } a.h[b] = c } return c } w = Np.prototype;
    w.Rb = function() { return "menuitem" };
    w.I = function(a) { var b = a.h.I(g, fl(this, a).join(" "), Pp(this, a.ja(), a.h));
        Qp(this, a, b, !!(a.ga & 8) || !!(a.ga & 16)); return b };
    w.tb = function(a) { return a && a.firstChild };
    w.La = function(a, b) { var c = kh(b),
            d = Op(this, 2);
        c && oi(c, d) || b.appendChild(Pp(this, b.childNodes, a.h));
        oi(b, hb) && (a.Pd(!0), this.Pd(a, b, !0)); return Np.G.La.call(this, a, b) };
    w.oc = function(a, b) { var c = this.tb(a),
            d = Rp(this, a) ? c.firstChild : null;
        Np.G.oc.call(this, a, b);
        d && !Rp(this, a) && c.insertBefore(d, c.firstChild || null) };

    function Pp(a, b, c) { a = Op(a, 2); return c.I(g, a, b) } w.Rg = function(a, b, c) { a && b && Qp(this, a, b, c) };
    w.Pd = function(a, b, c) { a && b && Qp(this, a, b, c) };

    function Rp(a, b) { return (b = a.tb(b)) ? (b = b.firstChild, a = Op(a, 1), !!b && mh(b) && oi(b, a)) : !1 }

    function Qp(a, b, c, d) { hl(a, c, b.Ic());
        il(a, b, c);
        d != Rp(a, c) && (d ? K(c, hb) : qi(c, hb), c = a.tb(c), d ? (a = Op(a, 1), c.insertBefore(b.h.I(g, a), c.firstChild || null)) : c.removeChild(c.firstChild)) } w.Gc = function(a) { switch (a) {
            case 2:
                return Op(this, 0);
            case 16:
            case 8:
                return jb;
            default:
                return Np.G.Gc.call(this, a) } };
    w.sd = function(a) { var b = Op(this, 0); switch (a) {
            case jb:
                return 16;
            case b:
                return 2;
            default:
                return Np.G.sd.call(this, a) } };
    w.ia = function() { return "goog-menuitem" };

    function Sp(a, b, c, d) { U.call(this, a, d || Np.ka(), c);
        this.Ba(b) } B(Sp, U);
    w = Sp.prototype;
    w.Ea = function() { var a = this.Ra; return null != a ? a : this.eb() };
    w.Ba = function(a) { this.Ra = a };
    w.va = function(a, b) { Sp.G.va.call(this, a, b); switch (a) {
            case 8:
                this.aa & 16 && !b && sl(this, 16, !1) && vl(this, 16, !1);
                (a = this.s()) && this.g.Rg(this, a, b); break;
            case 16:
                (a = this.s()) && this.g.Pd(this, a, b) } };
    w.Rg = function(a) { this.va(8, a) };
    w.Pd = function(a) { this.va(16, a) };
    w.eb = function() { var a = this.ja(); return Array.isArray(a) ? (a = Lc(a, function(b) { return mh(b) && (oi(b, "goog-menuitem-accel") || oi(b, "goog-menuitem-mnemonic-separator")) ? "" : Ch(b) }).join(""), Be(a)) : Sp.G.eb.call(this) };
    w.ac = function(a) { var b = this.sb(); if (b) { var c = b.S;
            b.S = null; if (b = c && typeof a.clientX === Db) b = new I(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1; if (b) return } Sp.G.ac.call(this, a) };
    w.qc = function(a) { return a.keyCode == this.Cg && this.kc(a) ? !0 : Sp.G.qc.call(this, a) };
    w.Sh = function() { return this.Cg };
    ml("goog-menuitem", function() { return new Sp(null) });
    Sp.prototype.Ic = function() { return this.ga & 16 ? "menuitemcheckbox" : this.ga & 8 ? "menuitemradio" : Sp.G.Ic.call(this) };
    Sp.prototype.sb = function() { return U.prototype.sb.call(this) };
    Sp.prototype.qd = function() { return U.prototype.qd.call(this) };

    function Tp(a) { this.g = a } rc(Tp);

    function Up(a, b) { a && (a.tabIndex = b ? 0 : -1) } w = Tp.prototype;
    w.I = function(a) { var b = a.h,
            c = b.I,
            d = this.Yc(),
            e = [d, a.Ob == qb ? d + "-horizontal" : d + "-vertical"];
        a.isEnabled() || e.push(d + ba); return c.call(b, g, e.join(" ")) };
    w.he = function(a) { return a.tagName == g };

    function Vp(a, b, c) { c.id && Sk(b, c.id); var d = a.Yc(),
            e = !1,
            f = mi(c);
        f && Array.prototype.forEach.call(f, function(h) { h == d ? e = !0 : h && (h == d + ba ? b.qa(!1) : h == d + "-horizontal" ? Wp(b, qb) : h == d + "-vertical" && Wp(b, Zb)) }, a);
        e || K(c, d);
        Xp(a, b, c); return c }

    function Xp(a, b, c) { if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c;) { e = d.nextSibling; if (1 == d.nodeType) { var f = a.De(d);
                    f && (f.F = d, b.isEnabled() || f.qa(!1), b.wc(f), Xk(f, d)) } else d.nodeValue && "" != pd(d.nodeValue) || c.removeChild(d);
                d = e } }
    w.De = function(a) { a: { a = mi(a); for (var b = 0, c = a.length; b < c; b++) { var d = a[b]; if (d = d in nl ? nl[d]() : null) { a = d; break a } } a = null } return a };
    w.ie = function(a) { a = a.s();
        Ni(a, !0, E);
        D && (a.hideFocus = !0); var b = this.g;
        b && ej(a, b) };
    w.Yc = function() { return "goog-container" };

    function Yp() {} B(Yp, cl);
    rc(Yp);
    Yp.prototype.I = function(a) { return a.h.I(g, this.ia()) };
    Yp.prototype.La = function(a, b) { b.id && Sk(a, b.id); if ("HR" == b.tagName) { var c = b;
            b = this.I(a);
            gh(b, c);
            ih(c) } else K(b, this.ia()); return b };
    Yp.prototype.oc = function() {};
    Yp.prototype.ia = function() { return gb };

    function Zp(a, b) { U.call(this, null, a || Yp.ka(), b);
        this.va(1, !1);
        this.va(2, !1);
        this.va(4, !1);
        this.va(32, !1);
        this.aa = 1 } B(Zp, U);
    Zp.prototype.U = function() { Zp.G.U.call(this); var a = this.s();
        ej(a, "separator") };
    ml(gb, function() { return new Zp });

    function $p(a) { this.g = a || "menu" } B($p, Tp);
    rc($p);
    w = $p.prototype;
    w.he = function(a) { return "UL" == a.tagName || $p.G.he.call(this, a) };
    w.De = function(a) { return "HR" == a.tagName ? new Zp : $p.G.De.call(this, a) };
    w.Ac = function(a, b) { return nh(a.s(), b) };
    w.Yc = function() { return "goog-menu" };
    w.ie = function(a) { $p.G.ie.call(this, a);
        a = a.s();
        fj(a, "haspopup", "true") };

    function aq(a, b, c, d) { lp.call(this, a, b);
        this.A = c ? 5 : 0;
        this.m = d || void 0 } B(aq, lp);
    aq.prototype.o = function(a) { this.A = a };
    aq.prototype.h = function(a, b, c) { var d = $i(this.j, this.l, a, b, null, c, 10, void 0, this.m); if (d & 496) { var e = bq(d, this.l);
            b = bq(d, b);
            d = $i(this.j, e, a, b, null, c, 10, void 0, this.m);
            d & 496 && (e = bq(d, e), b = bq(d, b), $i(this.j, e, a, b, null, c, this.A, void 0, this.m)) } };

    function bq(a, b) { a & 48 && (b ^= 4);
        a & 192 && (b ^= 1); return b };

    function cq(a, b) { this.g = a instanceof I ? a : new I(a, b) } B(cq, si);
    cq.prototype.h = function(a, b, c) { var d = J(a); var e = d.body;
        d = d.documentElement;
        d = new I(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
        e = this.g.x + d.x;
        d = this.g.y + d.y; var f = aj(a);
        e -= f.x;
        d -= f.y;
        cj(new I(e, d), a, b, c, null, null) };

    function dq(a, b) { cq.call(this, a, b) } B(dq, cq);
    dq.prototype.j = 0;
    dq.prototype.o = function(a) { this.j = a };
    dq.prototype.h = function(a, b, c) { var d = Bi(a);
        d = Ei(d); var e = Xg(Lg(a).g);
        e = new I(this.g.x + e.scrollLeft, this.g.y + e.scrollTop); var f = b,
            h = cj(e, a, f, c, d, 10); if (0 != (h & 496)) { if (h & 16 || h & 32) f ^= 4; if (h & 64 || h & 128) f ^= 1;
            h = cj(e, a, f, c, d, 10);
            0 != (h & 496) && cj(e, a, b, c, d, this.j) } };

    function eq(a, b, c) { R.call(this, c);
        this.vb = b || Tp.ka();
        this.Ob = a || Zb } B(eq, R);
    w = eq.prototype;
    w.fc = null;
    w.uc = null;
    w.vb = null;
    w.Ob = null;
    w.na = !0;
    w.ub = !0;
    w.Ib = !0;
    w.pa = -1;
    w.ua = null;
    w.hc = !1;
    w.lb = null;

    function X(a) { return a.fc || a.s() }

    function fq(a, b) { if (a.Ib) { var c = X(a),
                d = a.Z;
            a.fc = b; var e = X(a);
            d && (a.fc = c, gq(a, !1), a.fc = b, Jk(hq(a), e), gq(a, !0)) } else throw Error("Can't set key event target for container that doesn't support keyboard focus!"); }

    function hq(a) { return a.uc || (a.uc = new Ik(X(a))) }
    w.I = function() { this.F = this.vb.I(this) };
    w.Rc = function() { return this.s() };
    w.Zd = function(a) { return this.vb.he(a) };
    w.X = function(a) { this.F = Vp(this.vb, this, a);
        a.style.display == r && (this.na = !1) };
    w.U = function() { eq.G.U.call(this);
        Yk(this, function(b) { b.Z && iq(this, b) }, this); var a = this.s();
        this.vb.ie(this);
        this.N(this.na, !0);
        S(this).D(this, "enter", this.Ge).D(this, "highlight", this.Lc).D(this, "unhighlight", this.Ke).D(this, "open", this.mi).D(this, "close", this.ai).D(a, ll.Ub, this.gh).D(J(a), [ll.Vb, ll.vc], this.ci).D(a, [ll.Ub, ll.Vb, ll.vc, Bb, Ab, Ta], this.Yh);
        this.Ib && gq(this, !0) };

    function gq(a, b) { var c = S(a),
            d = X(a);
        b ? c.D(d, $a, a.Gf).D(d, Ha, a.Zc).D(hq(a), "key", a.Ka) : c.ha(d, $a, a.Gf).ha(d, Ha, a.Zc).ha(hq(a), "key", a.Ka) } w.ea = function() { this.zb(-1);
        this.ua && wl(this.ua, !1);
        this.hc = !1;
        eq.G.ea.call(this) };
    w.K = function() { eq.G.K.call(this);
        this.uc && (this.uc.R(), this.uc = null);
        this.vb = this.ua = this.lb = this.fc = null };
    w.Ge = function() { return !0 };
    w.Lc = function(a) { var b = bl(this, a.target); if (-1 < b && b != this.pa) { var c = jq(this);
            c && ul(c, !1);
            this.pa = b;
            c = jq(this);
            this.hc && tl(c, !0);
            this.ua && c != this.ua && (c.ga & 64 ? wl(c, !0) : wl(this.ua, !1)) } b = this.s();
        null != a.target.s() && fj(b, Aa, a.target.s().id) };
    w.Ke = function(a) { a.target == jq(this) && (this.pa = -1);
        this.s().removeAttribute("aria-activedescendant") };
    w.mi = function(a) {
        (a = a.target) && a != this.ua && a.sb() == this && (this.ua && wl(this.ua, !1), this.ua = a) };
    w.ai = function(a) { a.target == this.ua && (this.ua = null); var b = this.s(),
            c = a.target.s();
        b && a.target.aa & 2 && c && (a = "", c && (a = c.id), fj(b, Aa, a)) };
    w.gh = function(a) { this.ub && (this.hc = !0); var b = X(this);
        b && yh(b) && zh(b) ? b.focus() : a.g() };
    w.ci = function() { this.hc = !1 };
    w.Yh = function(a) { a: { var b = a.target; if (this.lb)
                for (var c = this.s(); b && b !== c;) { var d = b.id; if (d in this.lb) { b = this.lb[d]; break a } b = b.parentNode } b = null } if (b) switch (a.type) {
            case ll.Ub:
                b.rc(a); break;
            case ll.Vb:
            case ll.vc:
                b.ac(a); break;
            case Bb:
                b.de(a); break;
            case Ab:
                b.Je(a); break;
            case Ta:
                b.Kc(a) } };
    w.Gf = function() {};
    w.Zc = function() { this.zb(-1);
        this.hc = !1;
        this.ua && wl(this.ua, !1) };
    w.Ka = function(a) { return this.isEnabled() && this.isVisible() && (0 != Zk(this) || this.fc) && this.je(a) ? (a.g(), a.stopPropagation(), !0) : !1 };
    w.je = function(a) {
        var b = jq(this);
        if (b && typeof b.Ka == p && b.Ka(a) || this.ua && this.ua != b && typeof this.ua.Ka == p && this.ua.Ka(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
            case 27:
                if (this.Ib) X(this).blur();
                else return !1;
                break;
            case 36:
                kq(this);
                break;
            case 35:
                lq(this);
                break;
            case 38:
                if (this.Ob == Zb) mq(this);
                else return !1;
                break;
            case 37:
                if (this.Ob == qb) al(this) ? nq(this) : mq(this);
                else return !1;
                break;
            case 40:
                if (this.Ob == Zb) nq(this);
                else return !1;
                break;
            case 39:
                if (this.Ob == qb) al(this) ?
                    mq(this) : nq(this);
                else return !1;
                break;
            default:
                return !1
        }
        return !0
    };

    function iq(a, b) { var c = b.s();
        c = c.id || (c.id = Rk(b));
        a.lb || (a.lb = {});
        a.lb[c] = b } w.wc = function(a, b) { eq.G.wc.call(this, a, b) };
    w.le = function(a, b, c) { a.Qc |= 2;
        a.Qc |= 64;
        a.va(32, !1);
        pl(a, !1); var d = a.sb() == this ? bl(this, a) : -1;
        eq.G.le.call(this, a, b, c);
        a.Z && this.Z && iq(this, a);
        a = d; - 1 == a && (a = Zk(this));
        a == this.pa ? this.pa = Math.min(Zk(this) - 1, b) : a > this.pa && b <= this.pa ? this.pa++ : a < this.pa && b > this.pa && this.pa-- };
    w.ae = function(a, b) { if (a = typeof a === v ? Vk(this, a) : a) { var c = bl(this, a); - 1 != c && (c == this.pa ? (ul(a, !1), this.pa = -1) : c < this.pa && this.pa--); var d = a.s();
            d && d.id && this.lb && (c = this.lb, d = d.id, d in c && delete c[d]) } a = eq.G.ae.call(this, a, b);
        pl(a, !0); return a };

    function Wp(a, b) { if (a.s()) throw Error(ja);
        a.Ob = b } w.isVisible = function() { return this.na };
    w.N = function(a, b) { if (b || this.na != a && this.dispatchEvent(a ? "show" : pb)) { this.na = a; var c = this.s();
            c && (M(c, a), this.Ib && Up(X(this), this.ub && this.na), b || this.dispatchEvent(this.na ? "aftershow" : "afterhide")); return !0 } return !1 };
    w.isEnabled = function() { return this.ub };
    w.qa = function(a) { this.ub != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.ub = !0, Yk(this, function(b) { b.bh ? delete b.bh : b.qa(!0) })) : (Yk(this, function(b) { b.isEnabled() ? b.qa(!1) : b.bh = !0 }), this.hc = this.ub = !1), this.Ib && Up(X(this), a && this.na)) };

    function oq(a, b) { b != a.Ib && a.Z && gq(a, b);
        a.Ib = b;
        a.ub && a.na && Up(X(a), b) } w.zb = function(a) {
        (a = $k(this, a)) ? ul(a, !0): -1 < this.pa && ul(jq(this), !1) };

    function jq(a) { return $k(a, a.pa) }

    function kq(a) { pq(a, function(b, c) { return (b + 1) % c }, Zk(a) - 1) }

    function lq(a) { pq(a, function(b, c) { b--; return 0 > b ? c - 1 : b }, 0) }

    function nq(a) { pq(a, function(b, c) { return (b + 1) % c }, a.pa) }

    function mq(a) { pq(a, function(b, c) { b--; return 0 > b ? c - 1 : b }, a.pa) }

    function pq(a, b, c) { c = 0 > c ? bl(a, a.ua) : c; var d = Zk(a);
        c = b.call(a, c, d); for (var e = 0; e <= d;) { var f = $k(a, c); if (f && a.Qf(f)) { a.zb(c); break } e++;
            c = b.call(a, c, d) } } w.Qf = function(a) { return a.isVisible() && a.isEnabled() && !!(a.ga & 2) };

    function qq() {} B(qq, cl);
    rc(qq);
    qq.prototype.ia = function() { return fb };

    function rq(a, b, c) { U.call(this, a, c || qq.ka(), b);
        this.va(1, !1);
        this.va(2, !1);
        this.va(4, !1);
        this.va(32, !1);
        this.aa = 1 } B(rq, U);
    ml(fb, function() { return new rq(null) });
    ml(gb, function() { return new Zp });

    function sq(a, b) { eq.call(this, Zb, b || $p.ka(), a);
        oq(this, !1) } B(sq, eq);
    w = sq.prototype;
    w.me = !0;
    w.Ac = function(a) { if (this.vb.Ac(this, a)) return !0; for (var b = 0, c = Zk(this); b < c; b++) { var d = $k(this, b); if (typeof d.Ac == p && d.Ac(a)) return !0 } return !1 };
    w.N = function(a, b, c) {
        (b = sq.G.N.call(this, a, b)) && a && this.Z && this.me && X(this).focus();
        a && c && typeof c.clientX === Db ? this.S = new I(c.clientX, c.clientY) : this.S = null; return b };
    w.Ge = function(a) { this.me && X(this).focus(); return sq.G.Ge.call(this, a) };
    w.Qf = function(a) { return a.isEnabled() && a.isVisible() && !!(a.ga & 2) };
    w.X = function(a) { for (var b = this.vb, c = Qg(this.h.g, g, b.Yc() + "-content", a), d = c.length, e = 0; e < d; e++) Xp(b, this, c[e]);
        sq.G.X.call(this, a) };
    w.je = function(a) { var b = sq.G.je.call(this, a);
        b || Yk(this, function(c) {!b && c.Sh && c.Cg == a.keyCode && (this.isEnabled() && this.zb(bl(this, c)), b = c.Ka(a)) }, this); return b };
    w.zb = function(a) { sq.G.zb.call(this, a); if (a = $k(this, a)) { var b = a.s();
            a = this.s() || Xg(document); var c = a || Xg(document); var d = Fi(b),
                e = Fi(c),
                f = Si(c); if (c == Xg(document)) { var h = d.x - c.scrollLeft;
                d = d.y - c.scrollTop;!D || 10 <= Number(fg) || (h += f.left, d += f.top) } else h = d.x - e.x - f.left, d = d.y - e.y - f.top;
            b = Ii(b);
            f = c.clientHeight - b.height;
            e = c.scrollLeft; var k = c.scrollTop;
            e += Math.min(h, Math.max(h - (c.clientWidth - b.width), 0));
            k += Math.min(d, Math.max(d - f, 0));
            c = new I(e, k);
            a.scrollLeft = c.x;
            a.scrollTop = c.y } };

    function tq(a, b) { sq.call(this, a, b);
        this.me = !0;
        oq(this, !0);
        this.N(!1, !0);
        this.g = new tp } B(tq, sq);
    w = tq.prototype;
    w.Zg = !1;
    w.wg = 0;
    w.Ha = null;
    w.X = function(a) { tq.G.X.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && uq(this, this.h.s(a), 1) };
    w.U = function() { tq.G.U.call(this);
        this.g.forEach(this.ed, this); var a = S(this);
        a.D(this, za, this.Xe);
        a.D(this.h.g, yb, this.Wi, !0) };

    function uq(a, b, c, d, e, f) { b && vp(a.g, vc(b)) || (c = a.ve(b, c, d, e, f), a.Z && a.ed(c), b = Ac(a.Xi, b), a.s() && S(a).D(a.s(), vb, b)) }
    w.Xi = function(a, b) { if (27 == b.keyCode) a.focus();
        else if (a = $k(this, this.pa)) { var c = a.s();
            a = new kj(b.h, c);
            a.target = c; if (32 == b.keyCode || 13 == b.keyCode)
                if (nj(c)) Kj(c, vb, !1, a);
                else if (c = Bj(c))
                if (c = c.g[vb.toString()]) { c = c.concat(); for (var d = 0; d < c.length; d++) { var e = c[d];
                        e && 0 == e.capture && !e.mc && Ij(e, a) } } 32 == b.keyCode && this.hb() } };
    w.ve = function(a, b, c, d, e) { if (!a) return null;
        b = { F: a, Vg: b, Ti: c, Dc: d ? Ta : yb, Se: e };
        this.g.set(vc(a), b); return b };
    w.ed = function(a) { S(this).D(a.F, a.Dc, this.Nd);
        a.Dc != Ta && S(this).D(a.F, vb, this.aj) };
    w.md = function() { if (this.Z)
            for (var a = this.g.wb(), b = 0; b < a.length; b++) this.xe(this.g.get(a[b]));
        xp(this.g) };
    w.xe = function(a) { S(this).ha(a.F, a.Dc, this.Nd) };
    w.ad = function(a, b, c) { b = void 0 !== a.Vg ? new aq(a.F, a.Vg, !0) : new dq(b, c);
        b.o && b.o(5); var d = a.Ti;
        c = a.Se; var e = a.F;
        a = this.isVisible();
        (this.isVisible() || 150 > Date.now() - this.wg) && this.Zg ? this.hb() : (this.Ha = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.s().style.visibility = ob), M(this.s(), !0), b.h(this.s(), d, c), a || (this.s().style.visibility = $b), this.zb(-1), this.N(!0))) };
    w.hb = function() { this.isVisible() && (this.N(!1), this.isVisible() || (this.wg = Date.now(), this.Ha = null)) };
    w.Xe = function() { this.hb() };
    w.Nd = function(a) { vq(this, a) };
    w.aj = function(a) { 32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || vq(this, a);
        40 == a.keyCode && kq(this) };

    function vq(a, b) { for (var c = a.g.wb(), d = 0; d < c.length; d++) { var e = a.g.get(c[d]); if (e.F == b.currentTarget) { a.ad(e, b.clientX, b.clientY);
                b.g();
                b.stopPropagation(); break } } } w.Wi = function(a) { this.isVisible() && !this.Ac(a.target) && this.hb() };
    w.Zc = function(a) { tq.G.Zc.call(this, a);
        this.hb() };
    w.K = function() { tq.G.K.call(this);
        this.g && (xp(this.g), delete this.g) };

    function Y(a, b, c) { tq.call(this, b, c);
        this.o = new tp;
        this.l = a || 5;
        this.A = null;
        this.B = !1;
        this.m = Array(this.l);
        this.M = Array(this.l);
        this.H = Jl.ka();
        this.P = null;
        this.Zg = !0 } B(Y, tq);
    var wq = "";
    w = Y.prototype;
    w.I = function() { Y.G.I.call(this); for (var a = 0; a < this.l; ++a) this.wc(new Sp(""), !0) };
    w.ma = function(a) { Y.G.ma.call(this, a);
        K(this.s(), "alt-menu") };
    w.pf = function(a) { a = this.o.get(vc(a)); for (var b = 0; b < V(a, 2) && b < this.l; ++b) { var c = $k(this, b);
            c.Db(dn(jn(a, b), 0));
            c.Ba(b);
            c.N(!0, !0) } for (; b < this.l; ++b) $k(this, b).N(!1) };

    function xq(a, b, c) { a.o.set(vc(b), c);
        uq(a, b, 9, 8, !1, new ti(-2, 1, -2, 1)) } w.md = function() { Y.G.md.call(this);
        xp(this.o) };
    w.N = function(a, b) { var c = this.Ha;
        this.P = c;
        a && null != c ? (yq(this, c), Ol(this.H, "altshow")) : null != this.A && hp(this.A, 0, 0);
        null != c && (a ? this.we(c) : this.se(c));
        b = Y.G.N.call(this, a, b);
        a && null != this.s() && Ni(this.s(), !1); return b };
    w.eb = function() { if (null != this.P) { var a = Ah(this.P); if (null != a) return a } return "" };
    w.hb = function() { Y.G.hb.call(this); if (this.B)
            for (var a = 0; a < this.m.length; a++) { var b = this.m[a];
                vk(b.l);
                b.m();
                b.A(-1);
                b.m();
                b.N(!1) } };
    w.we = function(a) { K(a, "trans-target");
        a.title = "" };
    w.se = function(a) { qi(a, "trans-target");
        a.title = wq };
    w.Ka = function(a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
        var b = Y.G.Ka.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = Li(this.Ha.parentNode.parentNode),
                d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
            if (this.ne(d) && (c = this.Ha, (c = d ? void 0 !== c.nextElementSibling ? c.nextElementSibling : lh(c.nextSibling, !0) : void 0 !== c.previousElementSibling ? c.previousElementSibling : lh(c.previousSibling, !1)) && c != this.Ha)) return this.hb(),
                this.Qg(d), this.ad(c ? this.g.get(vc(c)) : null, 0, 0), zq(this), a.g(), a.stopPropagation(), !0
        }
        return b
    };
    w.ad = function(a, b, c) { Li((a.F || this.Ha).parentNode.parentNode) ? L(this.s(), Va, Nb) : L(this.s(), Va, ""); if (this.B)
            for (var d = 0; d < this.m.length; d++) Aq(this, d), uh(this.m[d].j, "...");
        this.pf(a.F);
        Y.G.ad.call(this, a, b, c) };

    function Bq(a, b, c) {!a.B || b >= a.l || "" == c || (uh(a.m[b].j, c), Aq(a, b)) }

    function Aq(a, b) { var c = a.m[b];
        $i($k(a, b).s(), 12, c.s(), 8, new I(1, 0)) }
    w.Lc = function(a) { Y.G.Lc.call(this, a); var b = this.Ha;
        null != b && (Ol(this.H, "altmenuhl"), yq(this, b), a = this.rd(a.target), -1 != a && a != this.l && (vk(this.M[a]), this.M[a] = uk(this.Qi, 300, this), this.B && (b = this.m[a], Li(this.Ha.parentNode.parentNode) ? (K(b.s(), Nb), L(b.s(), Va, Nb)) : (qi(b.s(), Nb), L(b.s(), Va, "")), Aq(this, a), vk(b.l), 0 == b.g ? b.l = uk(A(b.A, b, 1), 300) : b.A(1)))) };
    w.Qi = function() { Ol(this.H, "altmenuhold") };
    w.Ke = function(a) { Y.G.Ke.call(this, a);
        a = this.rd(a.target); - 1 != a && a != this.l && (vk(this.M[a]), this.B && this.m[a].B()) };
    w.rd = function(a) { return bl(this, a) };
    w.ne = function() { return !0 };
    w.Qg = function() {};
    w.ve = function(a, b, c, d, e) {
        (a = Y.G.ve.call(this, a, b, c, d, e)) && a.Dc == yb && (a.Dc = Pa); return a };
    w.ed = function(a) { Y.G.ed.call(this, a);
        S(this).D(a.F, Bb, this.og);
        S(this).D(a.F, Ab, this.yd);
        S(this).D(a.F, Ta, this.mg);
        S(this).D(a.F, zb, this.ng) };
    w.xe = function(a) { Y.G.xe.call(this, a);
        S(this).ha(a.F, Bb, this.og);
        S(this).ha(a.F, Ab, this.yd);
        S(this).ha(a.F, Ta, this.mg);
        S(this).ha(a.F, zb, this.ng) };

    function yq(a, b) { if (null != a.A && (b = a.o.get(vc(b))) && (a = a.A, a.h))
            for (var c = a.F && (a.F.value || Ah(a.F)), d = -1, e = -1, f = !1, h = 0; h < V(a.h, 5); h++) { var k = mn(a.h, h); if (0 != V(k, 2) && (0 == cn(k, 5) && (f = c.indexOf(dn(k, 4), e + 1), 0 <= f ? (d = f, e = d + dn(k, 4).length, f = !0) : f = !1), mn(a.h, h).g == b.g)) { if (f) { c = []; for (e = 0; e < V(b, 3); ++e) c.push({ Ec: d + cn(new gn(en(b, 3, e)), 0), uf: d + cn(new gn(en(b, 3, e)), 1) });
                        hp(a, 0, 0, void 0, c) } else d = c.indexOf(dn(b, 0)), 0 <= d && hp(a, d, d + dn(b, 0).length); break } } }

    function Cq(a, b) { b ? Tl(a.g.za(!1), function(c) { "" == this.h.Bf(c.F) && (K(c.F, Vb), this.h.fb(c.F, "_")); return !0 }, a) : Tl(a.g.za(!1), function(c) { oi(c.F, Vb) && (qi(c.F, Vb), this.h.fb(c.F, "")); return !0 }, a) } w.og = function(a) {!vm() && this.isEnabled() && (K(a.target, Wb), yq(this, a.target), Cq(this, !0), Ol(this.H, "althighlight")) };
    w.yd = function(a) { qi(a.target, Wb);
        null == this.A || this.isVisible() || hp(this.A, 0, 0);
        Cq(this, !1) };
    w.ng = function(a) { vm() && this.yd(a) };
    w.mg = function(a) { vm() || (this.yd(a), jm(hm(a.target)).select()) };

    function zq(a) { Tl(a.g.za(!1), function(b) { qi(b.F, Wb); return !0 }, a) } w.Xe = function(a) { a && a.currentTarget && a.currentTarget.Ha && (a.m = a.currentTarget.Ha);
        Y.G.Xe.call(this, a) };
    w.Nd = function(a) { vm() ? zq(this) : this.ub && Y.G.Nd.call(this, a) };

    function Dq(a, b, c) { this.V = this.j = null;
        Y.call(this, a, b, c) } B(Dq, Y);
    w = Dq.prototype;
    w.Qg = function(a) { this.j = a };
    w.N = function(a, b) { b = Dq.G.N.call(this, a, b);
        this.j = null;
        a ? this.V = this.eb() : null != this.V && this.V != this.eb() && this.dispatchEvent(new ij(za, this)); return b };
    w.we = function(a) {
        Dq.G.we.call(this, a);
        K(a, "trans-edit");
        a.contentEditable = !0;
        fq(this, a);
        X(this).focus();
        xh(X(this), !0);
        S(this).D(a, vb, this.gg);
        S(this).D(a, Ab, this.zd);
        S(this).D(a, Bb, this.zd);
        if (null != this.j) {
            a = jm(hm(a));
            var b = this.j ? a.Na() : a.Za(),
                c = Yl(a);
            a = c;
            var d = b,
                e = new im;
            e.o = rm(a, d, c, b);
            if (mh(a) && !dh(a)) { var f = a.parentNode;
                d = Array.prototype.indexOf.call(f.childNodes, a);
                a = f } mh(c) && !dh(c) && (f = c.parentNode, b = Array.prototype.indexOf.call(f.childNodes, c), c = f);
            e.o ? (e.h = c, e.C = b, e.l = a, e.A = d) : (e.h = a, e.C =
                d, e.l = c, e.A = b);
            e.select()
        }
    };
    w.se = function(a) { Dq.G.se.call(this, a);
        qi(a, "trans-edit");
        a.contentEditable = !1;
        X(this) && xh(X(this), !1);
        S(this).ha(a, vb, this.gg);
        S(this).ha(a, Ab, this.zd);
        S(this).ha(a, Bb, this.zd) };
    w.zd = function() { var a = tm();
        null == a || a.Ma() == a.Ya() && a.Na() == a.Za() || this.N(a.Ma() == a.Ya()) };
    w.gg = function(a) { for (var b = 0; b < this.l; ++b) $k(this, b).N(!1); if (13 == a.keyCode || 3 == a.keyCode) return null === jq(this) ? (this.hb(), a.stopPropagation(), a.g(), !0) : !1;
        null === jq(this) || !Ck(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Ha.focus(), this.zb(bl(this, null))); return !1 };
    w.ne = function(a) { var b = tm(); if (b.Ma() == b.Ya() && b.Na() == b.Za()) { var c = b.Ne() ? b.Na() : b.Za();
            b = jm(hm(Yl(b))); if (!a && c == b.Na() || a && c == b.Za()) return !0 } return !1 };

    function Eq(a, b, c) { Y.call(this, a, b, c);
        this.j = null } x(Eq, Y);
    w = Eq.prototype;
    w.ma = function(a) { Y.prototype.ma.call(this, a);
        this.j = new Fq("");
        this.wc(this.j, !0) };
    w.pf = function(a) { Y.prototype.pf.call(this, a);
        this.j.mb().value = this.h.Bf(a) };
    w.N = function(a, b) { b = Y.prototype.N.call(this, a, b);
        a && null != this.s() && (X(this) == this.j.mb() || X(this) == this.j.Fc()) && ul(this.j, !0); return b };
    w.Lc = function(a) { Y.prototype.Lc.call(this, a);
        a.target == this.j ? fq(this, this.j.mb()) : fq(this, this.s());
        X(this).focus();
        X(this).tabIndex = 0 };
    w.rd = function(a) { return a == this.j ? -1 : Y.prototype.rd.call(this, a) };
    w.Ka = function(a) { return 9 == a.keyCode ? (this.j.aa & 2 ? (X(this) == this.j.mb() ? fq(this, this.j.Fc()) : fq(this, this.j.mb()), X(this).focus(), X(this).tabIndex = 0) : ul(this.j, !0), a.g(), a.stopPropagation(), !0) : Y.prototype.Ka.call(this, a) };
    w.ne = function() { return null === jq(this) || !(jq(this) instanceof Fq) };

    function Fq(a, b, c) { U.call(this, a, c || Gq.ka(), b);
        this.va(4, !1) } x(Fq, U);
    w = Fq.prototype;
    w.rc = function(a) { a.target == this.Fc() && this.dispatchEvent(za) };
    w.U = function() { U.prototype.U.call(this);
        S(this).D(this.mb(), vb, function(a) { 32 == a.keyCode && a.stopPropagation() }) };
    w.mb = function() { return this.g.mb(this.s()) };
    w.Fc = function() { return this.g.Fc(this.s()) };
    w.eb = function() { return this.mb().value };

    function Gq() {} x(Gq, cl);
    Gq.prototype.I = function(a) { var b = a.h.I(na, { value: a.ja(), id: "alt-input-text", type: "text" }),
            c = a.h.I(na, { value: Hq, id: "alt-input-submit", "class": Iq, type: Ja }); return a.h.I(g, { id: "alt-input" }, b, c) };
    Gq.prototype.mb = function(a) { return a.firstChild };
    Gq.prototype.Fc = function(a) { return a.firstChild.nextSibling };
    Gq.ka = function() { return Bk(Gq) };
    var Hq = "",
        Iq = "";

    function Jq() {} B(Jq, cl);
    rc(Jq);
    w = Jq.prototype;
    w.Rb = function() {};
    w.La = function(a, b) { pl(a, !1);
        yl(a);
        a.va(32, !1);
        Jq.G.La.call(this, a, b);
        a.Db(b.value); return b };
    w.I = function(a) { pl(a, !1);
        yl(a);
        a.va(32, !1); return a.h.I(ta, { "class": fl(this, a).join(" "), disabled: !a.isEnabled() }, a.ja() || "") };
    w.Sc = function(a) { return a.tagName == ta };
    w.ce = function() {};
    w.be = function(a) { return a.isEnabled() };
    w.Sb = function() {};
    w.pc = function(a, b, c) { Jq.G.pc.call(this, a, b, c);
        (a = a.s()) && 1 == b && (a.disabled = c) };
    w.Wa = function() {};
    w.oc = function(a, b) { a && (a.value = b) };
    w.ia = function() { return "goog-textarea" };

    function Kq(a, b, c) { U.call(this, a, b || Jq.ka(), c);
        pl(this, !1);
        this.dd = !0;
        (b = this.s()) && this.g.Tc(b, !0);
        this.bc = "" != a;
        a || (this.Cb = "") } B(Kq, U);
    var Lq = !(D && !(11 <= Number(fg)));
    w = Kq.prototype;
    w.dc = !1;
    w.Dd = !1;
    w.bc = !1;
    w.ob = 0;
    w.Ag = 0;
    w.We = 0;
    w.rg = !1;
    w.Ld = !1;
    w.kf = !1;
    w.jf = !1;
    w.lc = "";

    function Mq(a) { return a.j.top + a.j.bottom + a.B.top + a.B.bottom }

    function Nq(a) { var b = a.We,
            c = a.s();
        b && c && a.Ld && (b -= Mq(a)); return b }

    function Oq(a) { a.We = 50;
        Pq(a) }

    function Qq(a) { a.Ag = 50;
        Pq(a) } w.Ba = function(a) { this.Db(String(a)) };
    w.Ea = function() { return this.s().value != this.lc || Rq(this) || this.bc ? this.s().value : "" };
    w.Db = function(a) { Kq.G.Db.call(this, a);
        this.bc = "" != a;
        Pq(this) };
    w.qa = function(a) { Kq.G.qa.call(this, a);
        this.s().disabled = !a };

    function Pq(a) { a.s() && a.ud() }

    function Rq(a) { a.s(); return "placeholder" in a.s() }

    function Sq(a) { a.lc && (Rq(a) ? a.s().placeholder = a.lc : !a.s() || a.bc || a.Dd || (K(a.s(), Tb), a.s().value = a.lc)) }
    w.U = function() { Kq.G.U.call(this); var a = this.s();
        L(a, { overflowY: ob, overflowX: Ea, boxSizing: Ia, MsBoxSizing: Ia, WebkitBoxSizing: Ia, MozBoxSizing: Ia });
        this.j = Ri(a);
        this.B = Si(a);
        S(this).D(a, "scroll", this.ud).D(a, $a, this.ud).D(a, "keyup", this.ud).D(a, "mouseup", this.Ui).D(a, Ha, this.Hh);
        Sq(this);
        Pq(this) };

    function Tq(a) {
        if (!a.rg) { var b = a.s().cloneNode(!1);
            L(b, { position: ya, height: Ea, top: "-9999px", margin: "0", padding: "1px", border: "1px solid #000", overflow: ob });
            a.h.g.body.appendChild(b); var c = b.scrollHeight;
            b.style.padding = "10px"; var d = b.scrollHeight;
            a.kf = d > c;
            b.style.borderWidth = "10px";
            a.jf = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Ld = !0);
            ih(b);
            a.rg = !0 } b = a.s();
        isNaN(a.j.top) && (a.j = Ri(b), a.B = Si(b));
        c = a.s().scrollHeight;
        var e = a.s();
        d = e.offsetHeight - e.clientHeight;
        if (!a.kf) {
            var f = a.j;
            d -= f.top + f.bottom
        }
        a.jf || (e = Si(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Ld ? c -= Mq(a) : (a.kf || (d = a.j, c += d.top + d.bottom), a.jf || (a = Si(b), c += a.top + a.bottom));
        return c
    }

    function Uq(a, b) { a.ob != b && (a.ob = b, a.s().style.height = b + "px") }

    function Vq(a) { var b = a.s();
        b.style.height = Ea; var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.ob = 0 } w.Hh = function() { Rq(this) || (this.Dd = !1, "" == this.s().value && (this.bc = !1, Sq(this))) };
    w.ud = function(a) {
        if (!this.dc) {
            var b = this.s();
            !Rq(this) && a && a.type == $a && (b.value == this.lc && this.lc && !this.Dd && (qi(b, Tb), b.value = ""), this.Dd = !0, this.bc = "" != b.value);
            var c = !1;
            this.dc = !0;
            a = this.ob;
            if (b.scrollHeight) { var d = !1,
                    e = !1,
                    f = Tq(this),
                    h = b.offsetHeight,
                    k = Nq(this); var l = this.Ag; var m = this.s();
                l && m && this.Ld && (l -= Mq(this));
                k && f < k ? (Uq(this, k), d = !0) : l && f > l ? (Uq(this, l), b.style.overflowY = "", e = !0) : h != f ? Uq(this, f) : this.ob || (this.ob = f);
                d || e || !Lq || (c = !0) } else Vq(this);
            this.dc = !1;
            c && (b = this.s(), this.dc || (this.dc = !0, (e = b.scrollHeight) ? (f = Tq(this), c = Nq(this), c && f <= c || (d = this.j, b.style.paddingTop = d.top + 1 + "px", Tq(this) == f && (b.style.paddingTop = d.top + e + "px", b.scrollTop = 0, e = Tq(this) - e, e >= c ? Uq(this, e) : Uq(this, c)), b.style.paddingTop = d.top + "px")) : Vq(this), this.dc = !1));
            a != this.ob && this.dispatchEvent("resize")
        }
    };
    w.Ui = function() { var a = this.s(),
            b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.ob && (this.ob = this.We = b) };

    function Wq(a, b) { this.h = b; for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) { var f = a[e] | 0;
            d && f == b || (c[e] = f, d = !1) } this.g = c }
    var Xq = {};

    function Yq(a) { return -128 <= a && 128 > a ? Kf(Xq, a, function(b) { return new Wq([b | 0], 0 > b ? -1 : 0) }) : new Wq([a | 0], 0 > a ? -1 : 0) }

    function Zq(a) { if (isNaN(a) || !isFinite(a)) return $q; if (0 > a) return ar(Zq(-a)); for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296; return new Wq(b, 0) }
    var $q = Yq(0),
        br = Yq(1),
        cr = Yq(16777216);

    function dr(a) { if (er(a)) return -dr(ar(a)); for (var b = 0, c = 1, d = 0; d < a.g.length; d++) { var e = Z(a, d);
            b += (0 <= e ? e : 4294967296 + e) * c;
            c *= 4294967296 } return b } w = Wq.prototype;
    w.toString = function(a) { a = a || 10; if (2 > a || 36 < a) throw Error("radix out of range: " + a); if (fr(this)) return "0"; if (er(this)) return "-" + ar(this).toString(a); for (var b = Zq(Math.pow(a, 6)), c = this, d = "";;) { var e = gr(c, b).g;
            c = hr(c, ir(e, b)); var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
            c = e; if (fr(c)) return f + d; for (; 6 > f.length;) f = "0" + f;
            d = "" + f + d } };

    function Z(a, b) { return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.h }

    function fr(a) { if (0 != a.h) return !1; for (var b = 0; b < a.g.length; b++)
            if (0 != a.g[b]) return !1; return !0 }

    function er(a) { return -1 == a.h }

    function jr(a, b) { a = hr(a, b); return er(a) ? -1 : fr(a) ? 0 : 1 }

    function ar(a) { for (var b = a.g.length, c = [], d = 0; d < b; d++) c[d] = ~a.g[d]; return (new Wq(c, ~a.h)).add(br) } w.abs = function() { return er(this) ? ar(this) : this };
    w.add = function(a) { for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b; e++) { var f = d + (Z(this, e) & 65535) + (Z(a, e) & 65535),
                h = (f >>> 16) + (Z(this, e) >>> 16) + (Z(a, e) >>> 16);
            d = h >>> 16;
            f &= 65535;
            h &= 65535;
            c[e] = h << 16 | f } return new Wq(c, c[c.length - 1] & -2147483648 ? -1 : 0) };

    function hr(a, b) { return a.add(ar(b)) }

    function ir(a, b) {
        if (fr(a) || fr(b)) return $q;
        if (er(a)) return er(b) ? ir(ar(a), ar(b)) : ar(ir(ar(a), b));
        if (er(b)) return ar(ir(a, ar(b)));
        if (0 > jr(a, cr) && 0 > jr(b, cr)) return Zq(dr(a) * dr(b));
        for (var c = a.g.length + b.g.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
        for (e = 0; e < a.g.length; e++)
            for (var f = 0; f < b.g.length; f++) { var h = Z(a, e) >>> 16,
                    k = Z(a, e) & 65535,
                    l = Z(b, f) >>> 16,
                    m = Z(b, f) & 65535;
                d[2 * e + 2 * f] += k * m;
                kr(d, 2 * e + 2 * f);
                d[2 * e + 2 * f + 1] += h * m;
                kr(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 1] += k * l;
                kr(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 2] += h * l;
                kr(d, 2 * e + 2 * f + 2) }
        for (e = 0; e < c; e++) d[e] =
            d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new Wq(d, 0)
    }

    function kr(a, b) { for (;
            (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++ }

    function lr(a, b) { this.g = a;
        this.h = b }

    function gr(a, b) {
        if (fr(b)) throw Error("division by zero");
        if (fr(a)) return new lr($q, $q);
        if (er(a)) return b = gr(ar(a), b), new lr(ar(b.g), ar(b.h));
        if (er(b)) return b = gr(a, ar(b)), new lr(ar(b.g), b.h);
        if (30 < a.g.length) { if (er(a) || er(b)) throw Error("slowDivide_ only works with positive integers."); for (var c = br, d = b; 0 >= jr(d, a);) c = mr(c, 1), d = mr(d, 1); var e = nr(c, 1),
                f = nr(d, 1);
            d = nr(d, 2); for (c = nr(c, 2); !fr(d);) { var h = f.add(d);
                0 >= jr(h, a) && (e = e.add(c), f = h);
                d = nr(d, 1);
                c = nr(c, 1) } b = hr(a, ir(e, b)); return new lr(e, b) }
        for (e = $q; 0 <=
            jr(a, b);) { c = Math.max(1, Math.floor(dr(a) / dr(b)));
            d = Math.ceil(Math.log(c) / Math.LN2);
            d = 48 >= d ? 1 : Math.pow(2, d - 48);
            f = Zq(c); for (h = ir(f, b); er(h) || 0 < jr(h, a);) c -= d, f = Zq(c), h = ir(f, b);
            fr(f) && (f = br);
            e = e.add(f);
            a = hr(a, h) }
        return new lr(e, a)
    }
    w.and = function(a) { for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Z(this, d) & Z(a, d); return new Wq(c, this.h & a.h) };
    w.or = function(a) { for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Z(this, d) | Z(a, d); return new Wq(c, this.h | a.h) };
    w.xor = function(a) { for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Z(this, d) ^ Z(a, d); return new Wq(c, this.h ^ a.h) };

    function mr(a, b) { var c = b >> 5;
        b %= 32; for (var d = a.g.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? Z(a, f - c) << b | Z(a, f - c - 1) >>> 32 - b : Z(a, f - c); return new Wq(e, a.h) }

    function nr(a, b) { var c = b >> 5;
        b %= 32; for (var d = a.g.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? Z(a, f + c) >>> b | Z(a, f + c + 1) << 32 - b : Z(a, f + c); return new Wq(e, a.h) };
    hr(mr(br, 32), br);
    hr(mr(br, 128), br);
    var or = D || G || Mf || !1;

    function pr(a, b, c, d, e, f, h, k, l) {
        R.call(this, a);
        this.l = h || null;
        null != this.l && this.l.A(A(this.di, this));
        this.A = null;
        this.g = Ea;
        this.xa = this.j = "";
        this.jb = new nn;
        this.Wb = !!b && or && !D;
        this.S = null != e ? e : 0;
        this.m = this.Wb ? new Dq : new Eq;
        l && this.m.qa(!1);
        if (0 < this.S)
            for (a = this.m, a.B = !0, b = 0; b < a.l; b++) h = Zg(g, "goog-menu", ""), e = Zg(g, null, h), h = new ep(e, h), a.m[b] = h, document.body.appendChild(e);
        this.m.ma(c);
        this.o = k || null;
        this.bb = null != d ? d : -1;
        this.M = Jl.ka();
        this.H = new tp;
        this.P = null;
        this.ab = "t";
        this.V = this.da = null;
        this.B =
            f || null;
        this.ya = !1;
        null != this.B && (this.B.l(A(this.jj, this)), this.B.j(A(this.Zh, this)));
        this.oa = null
    }
    x(pr, R);

    function qr(a, b) { a.oa = b;
        a.m.A = b }

    function rr(a) { var b = sr;
        a.M.j = b;
        a.ab = b }

    function tr(a, b) {
        null != a.B && a.B.g();
        b && (a.A = new ln(b), a.V = null);
        ur(a) && (a.l.h(), null != a.o && a.o.g(!1));
        if (a.A) {
            b = 0 != Pg().length;
            a.h.Nc(a.s());
            a.m.md();
            a.oa && (a.oa.h = a.A);
            for (var c = "", d = 0, e = 0; e < V(a.A, 5); e++) vr(a.A, e) && (c += " "), c += wr(a.A, e), d += V(mn(a.A, e), 2);
            if (0 != d) {
                c = [];
                d = !1;
                e = a.A;
                for (var f = "", h = 0; h < V(e, 5); h++) { var k = mn(e, h);
                    null != k.g[4] && 0 < dn(k, 4).length ? f = dn(k, 4) : (new hn(k.g)).g[4] = f }
                for (e = 0; e < V(a.A, 5); e++) {
                    f = mn(a.A, e);
                    h = jn(f, 0);
                    if (vr(a.A, e)) a.h.appendChild(a.s(), a.h.g.createTextNode(" "));
                    else if ("km" ==
                        a.j || "lo" == a.j) { k = a.h; var l = k.appendChild,
                            m = a.s(); var n = G ? ch() : Lf ? document.createTextNode("&shy;") : D ? document.createTextNode("&#8203;") : ch();
                        l.call(k, m, n) } null != f.g[4] && 0 < dn(f, 4).length && 0 == cn(f, 5) && c.push(dn(f, 4));
                    var q;
                    k = wr(a.A, e);
                    /^[\s\xa0]*$/.test(k) ? 0 == k.length || (q = xr(k)) : (q = a.h.I(ra, null, k), h = cn(h, 1), 0 <= a.bb && h < a.bb && K(q, "alt-low-conf"), a.H.has(a.g + "." + a.j + "." + dn(f, 0)) && (h = a.H.get(a.g + "." + a.j + "." + dn(f, 0)), h != yr(f, 0) && (a.h.fb(q, h), K(q, Ca), d = !0, zr(a, !0))), q.title = wq, xq(a.m, q, f));
                    q && a.h.appendChild(a.s(),
                        q)
                }
                if (null != a.l) { q = a.g + "." + a.j; for (e = 0; e < c.length; ++e) q += "." + c[e];
                    a.H.has(q) && (Ar(a, !1), d = !0, Br(a, a.H.get(q)), null != a.o && a.o.g(!1), zr(a, !0)) } d || (zr(a, !1), Ar(a, !1));
                (d || b) && a.dispatchEvent(za)
            }
        } else zr(a, !1), Ar(a, !1)
    }

    function xr(a) { a = qd(Ge(a)).split("<br>"); var b = document.createDocumentFragment(),
            c = 0;
        Kc(a, function(d) { 0 != c && b.appendChild(Zg("BR"));
            c++; "" != d && b.appendChild(document.createTextNode(String(He(d)))) }); return b }

    function Cr(a, b) { if (ur(a)) return a.l.g(); var c = []; if (a.s() && a.s().childNodes)
            for (var d = 0; d < a.s().childNodes.length; ++d) { var e = a.s().childNodes[d];
                c[d] = b && "BR" == e.tagName ? "\n" : Ah(e) }
        return c.join("") }

    function Dr(a, b, c) { if (a)
            for (var d = 0; d < V(a, 5); d++) { var e = mn(a, d); if ((e = e && e) && Xm(b.g, e.g)) { e = -1;
                    b = V(a, 5); for (var f = d; 0 <= f; f--)
                        if (0 == cn(mn(a, f), 5)) { e = f; break } for (f = d + 1; f <= V(a, 5); f++)
                        if (0 == cn(mn(a, f), 5)) { b = f; break } if (c) d = Er(a, e, b);
                    else if (c = a, a = e, c) { e = d + 1;
                        f = d; for (d = wr(c, d).length; 64 > d && (e != b || f != a);) e < b && (d += wr(c, e++).length + 1), 64 > d && f > a && (d += wr(c, --f).length + 1);
                        d = Er(c, f, e) } else d = ""; return d } }
        return "" }

    function Er(a, b, c) { var d = [];
        d.push(wr(a, b)); for (b += 1; b < c; b++) vr(a, b) && d.push(" "), d.push(wr(a, b)); return d.join("") }

    function vr(a, b) { if (0 == b) return !1; var c = mn(a, b),
            d = mn(a, b - 1); if (c = bn(jn(c, 0), 2) && !bn(jn(d, 0), 3)) a = wr(a, b - 1), b = a.length - 1, c = !(0 <= b && a.indexOf("\n", b) == b); return c } w = pr.prototype;
    w.nb = function() { return this.g };
    w.wa = function() { return this.j };
    w.I = function() { this.X(Dh(this.h, "span")) };
    w.X = function(a) { R.prototype.X.call(this, a);
        tr(this) };
    w.U = function() { R.prototype.U.call(this);
        S(this).D(this.m, za, this.pi);
        null != this.o && null != this.o.h && S(this).D(this.o.h, Pa, this.ui);
        S(this).D(this.m, "show", this.oi);
        this.s() && S(this).D(this.s(), vb, function(a) { 32 == a.keyCode && a.stopPropagation() }, !0) };
    w.K = function() { R.prototype.K.call(this);
        this.m.R() };
    w.di = function() { this.B.qa(this.l.j());
        zr(this, this.l.j()) };
    w.pi = function(a) {
        if (a.type != pb || a.target == this.m)
            if (null == a.target && null != this.l) this.M.log("editpopupclk"), null != this.o && this.o.g(!0), this.l.l(Cr(this)), this.ya = this.B.s().style.display != r, this.B.reset(), null != this.o ? this.B.qa(this.o.h.style.display != r) : this.B.qa(!1), zr(this, !1);
            else {
                var b = a.m;
                null == b && null != a.currentTarget && (b = a.currentTarget.Ha);
                var c = a.target.eb();
                if (null != b && null != a.target) {
                    var d = b,
                        e = this.m.o.get(vc(d));
                    this.h.fb(d, c);
                    c == yr(e, 0) ? (qi(d, Ca), 0 == Pg().length && (zr(this, !1), Ar(this,
                        !1))) : (K(d, Ca), zr(this, !0), Ar(this, !0));
                    null != this.H && this.H.set(this.g + "." + this.j + "." + dn(e, 0), c);
                    b = this.m.o.get(vc(b));
                    null != this.H && this.H.set(this.g + "." + this.j + "." + dn(b, 0), c);
                    e = yr(b, 0);
                    d = bl(this.m, a.target);
                    e = { sl: this.g, tl: this.j, utrans: c, gtrans: e, index: d, ophrase: dn(b, 0), osentence: dn(b, 4), tsentence: Dr(this.A, b) };
                    0 < V(b, 2) && (e.confidence = cn(jn(b, 0), 1));
                    if (a.target instanceof Fq || -1 == d) e.manual = 1;
                    for (var f in e) typeof e[f] === v && 64 < e[f].length && (e.tr = 1, e[f] = e[f].substr(0, 64));
                    this.M.log("usealt", e,
                        this.P);
                    a = new ij("usealt");
                    a.text = c;
                    this.dispatchEvent(a);
                    this.dispatchEvent(za)
                }
            }
    };

    function Br(a, b) { if (a.s()) { null == a.da && (a.V = Qc(a.h.Rh(a.s())));
            a.da = b; var c; if (c = a.s().childNodes && 0 < a.s().childNodes.length) c = (c = a.s().childNodes[0]) ? vp(a.m.g, vc(c)) : !1; if (c) a.h.Nc(a.s()), a.m.md(), b = a.h.I(ra, Ca, a.da), a.h.appendChild(a.s(), b), xq(a.m, b, new hn);
            else { fh(a.s());
                a = a.s();
                c = Ge(b);
                b = Zg(g);
                c = qd(c).split("<br>"); for (var d = 0; d < c.length; ++d) { var e = c[d];
                    e.length && (e = Zg(ra, Ca, e), b.appendChild(e));
                    d != c.length - 1 && (e = Zg("BR"), b.appendChild(e)) } a.appendChild(b) } } }
    w.ui = function() { null != this.l && ur(this) ? this.l.o() : Fr(this);
        this.M.log("clkundo", void 0, this.P) };
    w.Zh = function() { ur(this) && (this.l.j() && (Br(this, this.l.g()), this.ya = !0), this.l.h(), null != this.o && this.o.g(!1), this.l.j() && zr(this, !0), this.B.qa(!0), M(this.B.s(), this.ya), this.dispatchEvent(za));
        this.M.log("clkcancel", void 0, this.P) };
    w.oi = function() {
        var a = this.m.o.get(vc(this.m.Ha));
        if (a) {
            if (0 < this.S) {
                var b = new bf("source=baf");
                if (1 == this.S) { for (var c = [], d = 0, e = V(a, 2); d < e; d++) c.push(yr(a, d));
                    d = this.jb; var f = this.j,
                        h = this.g,
                        k = Gr(this),
                        l = A(this.lj, this);
                    e = new bf; var m = new bf;
                    e.set("client", "mt");
                    e.set("sl", f);
                    e.set("tl", h);
                    e.set("hl", k);
                    e.set("v", "1.0");
                    b && e.Yd(b);
                    (b = !Array.isArray(c) || Array.isArray(c) && 1 == c.length) ? m.set("q", c): nf(m, "q", c);
                    b = A(d.j, d, b, l);
                    pn(d, da, e, m, b) } else
                    for (d = 0, e = V(a, 2); d < e; d++) {
                        h = yr(a, d);
                        c = this.jb;
                        m = this.j;
                        l = this.g;
                        f = Gr(this);
                        k = A(this.mj, this, d);
                        var n = b,
                            q = new bf,
                            t = new bf;
                        q.set("client", "mt");
                        q.set("sl", m);
                        q.set("tl", l);
                        q.set("hl", f);
                        nf(q, "dt", ["at", "t"]);
                        n && q.Yd(n);
                        t.set("q", h);
                        pn(c, "/translate_a/single", q, t, A(c.h, c, k, void 0))
                    }
            }
            b = new ij(Pa);
            b.text = this.m.eb();
            b.o = V(this.A, 5);
            this.dispatchEvent(b);
            b = {};
            b.confidence = cn(jn(a, 0), 1);
            this.g && this.j && this.xa && (b.segments = V(this.A, 5), b.sl = this.g, b.tl = this.j, b.hl = this.xa);
            this.M.log("phrsclk", b, this.P)
        }
    };
    w.mj = function(a, b) { if (1 == this.S || 1 < V(b, 5)) { var c = dn(new kn(en(b, 0, 0)), 0); var d = 1; for (var e = V(b, 0); d < e; d++) c += " " + dn(new kn(en(b, 0, d)), 0);
            d = c } else if (1 == V(b, 5)) { c = [];
            b = mn(b, 0);
            d = 0; for (e = Math.min(this.S, V(b, 2)); d < e; d++) c.push(yr(b, d));
            d = c.join(", ") } else d = "...";
        Bq(this.m, a, d) };
    w.lj = function(a) { for (var b = 0; b < a.length; b++) Bq(this.m, b, a[b]) };

    function Fr(a) { ur(a) && (null != a.o && a.o.g(!1), a.l.h());
        xp(a.H);
        a.da = null;
        tr(a);
        a.dispatchEvent(za) }

    function zr(a, b) { null != a.o && null != a.o.h && M(a.o.h, b) }

    function Ar(a, b) { null != a.B && (b && a.B.reset(), M(a.B.s(), b)) }
    w.jj = function() {
        var a = [],
            b;
        null != this.V ? b = this.V : b = jh(this.s());
        for (var c = { segment: [] }, d = null, e = 0, f = 0; f < b.length; f++) {
            var h = mn(this.A, f);
            if (null != h) {
                var k = Ah(b[f]);
                a: { var l = k; var m = h; if (0 == V(m, 2)) l = 0;
                    else { for (var n = 0; n < V(m, 2); ++n)
                            if (l == yr(m, n)) { l = n; break a } l = -1 } } m = pd(dn(h, 4));
                n = Dr(this.A, h, !0);
                if (0 != m.length) {
                    if (0 == a.length || m != a[a.length - 1]) a.push(m), e = a.length - 1, d = null, e < V(this.A, 0) && (d = an(new kn(en(this.A, 0, e)), 4, 0)), d = sn(d), e = 0, d = { source: m, original_target: n, segment_source: d, phrase_correction: [] },
                        c.segment.push(d);
                    if (0 != l)
                        for (m = yr(h, 0).length, l = { alternative_index: l, edited_phrase: k, source_span: [], target_span: [{ start: e, end: e + m }] }, d.phrase_correction.push(l), m = 0; m < V(h, 3); ++m) n = new gn(en(h, 3, m)), l.source_span.push({ start: cn(n, 0), end: cn(n, 1) });
                    e += k.length;
                    bn(jn(h, 0), 2) && e++
                }
            }
        }
        if (ur(this)) {
            this.dispatchEvent(za);
            this.l.h();
            null != this.o && this.o.g(!1);
            zr(this, !0);
            this.l.g() != Cr(this) && Br(this, this.l.g());
            b = this.g + "." + this.j;
            for (f = 0; f < a.length; ++f) b += "." + a[f];
            a = this.l.g();
            this.H.set(b, a);
            c.contains_full_edit = !0
        }
        c.edited_target = Cr(this, !0);
        a = new bf;
        a.set("ue", JSON.stringify(c));
        a.set("sl", this.g);
        a.set("tl", this.j);
        Lm(ea + this.ab, void 0, qa, a.toString(), 1E4)
    };

    function ur(a) { return null != a.l && a.l.m() }

    function wr(a, b) { a = mn(a, b); return 0 == V(a, 2) ? dn(a, 0) : yr(a, 0) }

    function yr(a, b) { return dn(jn(a, b), 0) }

    function Gr(a) { a = a.xa;
        0 === a.length && null != Ng(document, "hl") && (a = Ng(document, "hl").value); return a };

    function Hr(a) { return ig('<span id="' + H(a.id) + '"></span>') }

    function Ir(a) { var b = a.id,
            c = a.Kg; return ig(hg(a.Lg) + '<div id="' + H(b) + '"></div>' + hg(c)) }

    function Jr(a) { var b = a.Ri,
            c = W.cd,
            d = W.sh; return ig('<div id="goog-gt-tt" class="skiptranslate" dir="' + H(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + H(xg(b)) + '" width="20" height="20" alt="Google ' + H(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + hg(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>') }

    function Kr(a) {
        var b = a.method,
            c = a.Qh,
            d = a.dir,
            e = W.xh,
            f = W.yf;
        a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + H(sg(a.Eh)) + '" method="' + H(b) + '"><div class="form-buttons" style="text-align:' + (mg(d, Nb) ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + H(e) + '"><input class="activity-cancel" type="button" value="' + H(f) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        b = c.length;
        for (d = 0; d < b; d++) a += '<input type="hidden" name="' + H(c[d]) + '"/>';
        return ig(a + "</div></form></div>")
    }

    function Lr() { return ig('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>') }

    function Mr(a) { return ig('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + hg(a.zi) + '</div><div class="activity-form-container"></div></div>') }

    function Nr() { return ig('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>') };

    function Or(a) { R.call(this);
        a = a || {};
        this.id = a.id || Rk(this);
        this.Qe = a.Qe || "";
        this.Id = a.Id || null;
        this.Jd = a.Jd || null;
        this.jd = a.jd || !1;
        this.className = a.className || null;
        this.A = null } B(Or, R);
    w = Or.prototype;
    w.jc = function(a) { this.A = a };
    w.Eb = function() { if (!this.Z) throw Error("Activity must be rendered before it can be resumed."); if (!this.A) throw Error("Activity must have a tooltip instance to be resumed"); };
    w.yb = function() {};
    w.R = function() { this.la || (Or.G.R.call(this), delete this.Jd) };
    w.ba = function() { return this.A };

    function Pr() { P.call(this);
        this.j = "closure_frame" + Qr++;
        this.h = [];
        Rr[this.j] = this }
    var Sr;
    B(Pr, P);
    var Rr = {},
        Qr = 0;

    function Tr(a, b) { var c = Lg(a);
        Se(b, function(d, e) { Array.isArray(d) || (d = [d]);
            Kc(d, function(f) { f = c.I(na, { type: ob, name: e, value: f });
                a.appendChild(f) }) }) } w = Pr.prototype;
    w.ca = null;
    w.ta = null;
    w.Lb = null;
    w.Vi = 0;
    w.ib = !1;
    w.Kb = null;
    w.send = function(a, b, c, d) { if (this.ib) throw Error(va);
        a = new We(a);
        b = b ? b.toUpperCase() : "GET";
        c && (c = Le(), a.g.set("zx", c));
        Sr || (Sr = Zg("FORM"), Sr.acceptCharset = "utf-8", c = Sr.style, c.position = ya, c.visibility = ob, c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = ob, document.body.appendChild(Sr));
        this.ca = Sr; "GET" == b && Tr(this.ca, a.g);
        d && Tr(this.ca, d);
        ye(this.ca, Hd(a.toString()));
        this.ca.method = b;
        Ur(this);
        Vr(this) };

    function Wr(a, b) { if (a.ib) throw Error(va); var c = new We(b.action);
        a.ca = b;
        ye(a.ca, c.toString());
        Ur(a) } w.abort = function() { if (this.ib) { var a = Xr(this);
            Hj(a);
            this.ib = !1;
            this.dispatchEvent("abort");
            Yr(this) } };
    w.K = function() { this.ib && this.abort();
        Pr.G.K.call(this);
        this.ta && Zr(this);
        Vr(this);
        delete this.l;
        this.ca = null;
        delete Rr[this.j] };

    function Ur(a) {
        a.ib = !0;
        a.Lb = a.j + "_" + (a.Vi++).toString(36);
        a.ta = Lg(a.ca).I(ma, { name: a.Lb, id: a.Lb });
        D && 7 > Number(ag) && ye(a.ta, Hd(id(new fd(gd, 'javascript:""'))));
        var b = a.ta.style;
        b.visibility = ob;
        b.width = b.height = "10px";
        b.display = r;
        G ? b.marginTop = b.marginLeft = "-10px" : (b.position = ya, b.top = b.left = "-10px");
        if (D && !cg("11")) { a.ca.target = a.Lb || "";
            Lg(a.ca).g.body.appendChild(a.ta);
            O(a.ta, Mb, a.bf, !1, a); try { a.g = !1, a.ca.submit() } catch (Oe) { Fj(a.ta, Mb, a.bf, !1, a), $r(a) } } else {
            Lg(a.ca).g.body.appendChild(a.ta);
            b = a.Lb +
                "_inner";
            var c = sh(a.ta);
            if (document.baseURI) { var d = Ge(b);
                d = de('<head><base href="' + Ge(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>') } else d = Ge(b), d = de('<body><iframe id="' + d + '" name="' + d + '"></iframe>');
            c.write(be(d));
            O(c.getElementById(b), xb, a.Md, !1, a);
            d = Og(ta, a.ca);
            for (var e = 0, f = d.length; e < f; e++) { var h = d[e].value;
                Ch(d[e]) != h && (uh(d[e], h), d[e].value = h) } d = c.importNode(a.ca, !0);
            d.target = b;
            d.action = a.ca.action;
            c.body.appendChild(d);
            e = Og("SELECT", a.ca);
            f = Og("SELECT", d);
            h = 0;
            for (var k = e.length; h < k; h++)
                for (var l = Og("OPTION", e[h]), m = Og("OPTION", f[h]), n = 0, q = l.length; n < q; n++) m[n].selected = l[n].selected;
            e = Og(na, a.ca);
            f = Og(na, d);
            h = 0;
            for (k = e.length; h < k; h++)
                if ("file" == e[h].type && e[h].value != f[h].value) { a.ca.target = b;
                    d = a.ca; break } try { a.g = !1, d.submit(), c.close(), E && uk(a.Wg, 250, a) } catch (Oe) {
                try {
                    var t = zf(Oe);
                    var y = t.fileName;
                    null == y && (y = "");
                    if (/^https?:\/\//i.test(y)) { var F = Gd(y) || Id; var Q = Hd("view-source:" + Dd(F)) } else Q = Hd(id(new fd(gd, "sanitizedviewsrc")));
                    ie(ee("Message: " +
                        t.message + "\nUrl: "), fe("a", { href: Q, target: "_new" }, t.fileName), ee("\nLine: " + t.lineNumber + "\n\nBrowser stack:\n" + t.stack + "-> [end]\n\nJS stack traversal:\n" + Df(void 0) + "-> "))
                } catch (Tc) { ee("Exception trying to expose exception! You win, we lose. " + Tc) } Fj(c.getElementById(b), xb, a.Md, !1, a);
                c.close();
                $r(a)
            }
        }
    }
    w.bf = function() { if (this.ta.readyState == Ra) { Fj(this.ta, Mb, this.bf, !1, this); try { var a = sh(this.ta); if (D && "about:blank" == a.location && !navigator.onLine) { $r(this); return } } catch (b) { $r(this); return } as(this, a) } };
    w.Md = function() { Fj(Xr(this), xb, this.Md, !1, this); try { as(this, this.ta ? sh(Xr(this)) : null) } catch (a) { $r(this) } };

    function as(a, b) { a.ib = !1; var c;
        c || typeof a.l != p || (b = a.l(b)) && (c = 4);
        c ? $r(a) : (a.dispatchEvent(Ra), a.dispatchEvent("success"), Yr(a)) }

    function $r(a) { a.g || (a.ib = !1, a.dispatchEvent(Ra), a.dispatchEvent("error"), Yr(a), a.g = !0) }

    function Yr(a) { Zr(a);
        Vr(a);
        a.ca = null;
        a.dispatchEvent(Lb) }

    function Zr(a) { var b = a.ta;
        b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.h.push(b));
        a.Kb && (vk(a.Kb), a.Kb = null);
        E ? a.Kb = uk(a.Vf, 2E3, a) : a.Vf();
        a.ta = null;
        a.Lb = null } w.Vf = function() { this.Kb && (vk(this.Kb), this.Kb = null); for (; 0 != this.h.length;) { var a = this.h.pop();
            ih(a) } };

    function Vr(a) { a.ca && a.ca == Sr && fh(a.ca) }

    function Xr(a) { return a.ta ? D && !cg("11") ? a.ta : sh(a.ta).getElementById(a.Lb + "_inner") : null } w.Wg = function() { if (this.ib) { var a = this.ta ? sh(Xr(this)) : null;
            a && !Jf(a, "documentUri") ? (Fj(Xr(this), xb, this.Md, !1, this), $r(this)) : uk(this.Wg, 250, this) } };

    function bs(a, b) { R.call(this);
        this.A = a || "";
        this.j = null;
        this.m = [];
        this.g = null;
        this.B = b || "GET";
        this.l = this.o = null } x(bs, R);
    w = bs.prototype;
    w.I = function() { var a = { Eh: this.A, method: this.B, Qh: this.m, dir: te.test(vn) ? Nb : "ltr" };
        this.X(Fh(Kr, a)) };
    w.X = function(a) { this.F = a;
        this.g = Tk(this, "activity-form");
        a = Tk(this, "activity-submit");
        this.l = new El("");
        Xk(this.l, a);
        a = Tk(this, "activity-cancel");
        this.j = new El("");
        Xk(this.j, a) };
    w.U = function() { var a = S(this);
        a.D(this.l, za, A(this.qj, this));
        a.D(this.j, za, this.dispatchEvent.bind(this, La)) };
    w.qj = function() { var a = !0;
        this.o && (a = this.o());
        a && (a = new Pr, O(a, "success", function() { this.dispatchEvent("successful") }), O(a, "error", function() { this.dispatchEvent("failed") }), Wr(a, this.g));
        this.dispatchEvent(Rb) };

    function cs(a, b) { for (var c in b) a.g[c] && (a.g[c].value = b[c]) }

    function ds(a, b) { return a.g[b] ? a.g[b].value : "" } w.K = function() { this.l = this.g = this.j = null;
        R.prototype.K.call(this) };

    function es(a, b) { a.o = b };

    function fs(a, b) { Or.call(this, a);
        this.j = null;
        this.B = b || {};
        this.m = new fp;
        this.o = this.g = null;
        this.l = new Do((a || {}).cb || "", sr);
        this.l.l.j = !1 } x(fs, Or);
    w = fs.prototype;
    w.jc = function(a) { Or.prototype.jc.call(this, a);
        this.l.Ef(A(this.Eb, this)) };
    w.Eb = function() { Or.prototype.Eb.call(this); var a = this.ba().P,
            b = this.ba().J; if (a && b) { uh(this.o, a); var c = this.m;
            c.F = b;
            gh(c.g, c.F);
            gp(c);
            M(this.m.g, !0);
            b = this.ba().nb();
            c = this.ba().wa(); if (this.l.Ua() && b && c) { var d = this.ba().sc(),
                    e = A(this.Zi, this);
                this.l && this.l.translate(e, [d], b, c, 0, !1);
                cs(this.g, { gtrans: a, text: this.ba().sc(), hl: vn, langpair: b + "|" + c });
                cs(this.g, this.B);
                cs(this.g, { client: sr }) } this.dispatchEvent(Lb) } };
    w.I = function() { this.X(Fh(Mr, { zi: W.xf })) };
    w.X = function(a) { this.F = a;
        this.o = Tk(this, "alt-translated-text"); var b = Tk(this, Ba);
        this.g = new bs(Ln, qa);
        this.g.m = Vc(this.B);
        es(this.g, A(function() { cs(this.g, { utrans: Cr(this.j) }); return ds(this.g, "utrans") != ds(this.g, "gtrans") }, this));
        this.g.ma(b);
        Hq = W.Ch;
        wq = W.xf;
        this.j = new pr(void 0, !0, a);
        qr(this.j, this.m);
        this.j.P = rb;
        rr(this.j);
        Xk(this.j, this.o) };
    w.U = function() { Or.prototype.U.call(this); var a = S(this);
        a.D(this.g, La, A(function() { Fr(this.j);
            this.dispatchEvent(La) }, this));
        a.D(this.g, Rb, A(function() { var b = Cr(this.j);
            this.ba().P = b && pd(b);
            this.dispatchEvent(Rb);
            b = W.Lf;
            uh(this.ba().m.s(), b) }, this)) };
    w.Zi = function(a) { a && tr(this.j, a) };
    w.yb = function() { M(this.m.g, !1) };
    w.K = function() { this.j && this.j.R();
        this.o = this.m = this.j = null;
        this.l && this.l.R();
        this.l = null;
        this.g && this.g.R();
        this.g = null;
        Or.prototype.K.call(this) };
    var sr = Bn.replace("_", "-") + "-alt";

    function gs(a, b) { Or.call(this, a);
        this.m = !1;
        this.l = b || {};
        this.j = null } x(gs, Or);
    w = gs.prototype;
    w.jc = function(a) { Or.prototype.jc.call(this, a);
        S(this).D(this.j.s(), vb, A(this.ba().Oc, this.ba(), !1));
        this.m = this.ba().xc;
        this.Eb() };
    w.Eb = function() { Or.prototype.Eb.call(this);
        this.j.Db(this.ba().P); var a = this.ba().nb(),
            b = this.ba().wa();
        a && b && (cs(this.g, { gtrans: this.ba().P, text: this.ba().sc(), hl: vn, langpair: a + "|" + b }), cs(this.g, this.l));
        this.dispatchEvent(Lb);
        this.j.s().focus() };
    w.yb = function() { this.ba().Oc(this.m) };
    w.I = function() { this.X(Fh(Lr)) };
    w.X = function(a) { this.F = a;
        a = Tk(this, "contribute-original-text");
        this.j = new Kq("");
        Xk(this.j, a);
        Qq(this.j);
        Oq(this.j);
        a = Tk(this, Ba);
        this.g = new bs(Ln, qa);
        this.g.m = Vc(this.l);
        es(this.g, A(function() { cs(this.g, { utrans: pd(this.j.Ea()) }); return ds(this.g, "utrans") != ds(this.g, "gtrans") }, this));
        this.g.ma(a) };
    w.U = function() { Or.prototype.U.call(this); var a = S(this);
        a.D(this.g, La, A(function() { this.dispatchEvent(La) }, this));
        a.D(this.g, Rb, A(function() { var b = this.j.Ea();
            this.ba().P = b && pd(b);
            this.dispatchEvent(Rb);
            b = W.Lf;
            uh(this.ba().m.s(), b) }, this)) };
    w.K = function() { this.j && this.j.R();
        this.j = null;
        this.g && this.g.R();
        this.g = null;
        Or.prototype.K.call(this) };

    function hs(a) { P.call(this);
        this.m = a;
        this.o = {};
        this.j = new xk(this);
        this.l = null } x(hs, P);
    hs.prototype.Hf = function() {};
    hs.prototype.If = function() {};
    hs.prototype.K = function() { this.j.R();
        this.j = null };

    function is(a, b, c) { if (b = a.m.j[b]) { c = c || "undefined" == typeof c; for (var d = 0; d < b.Fa.length; ++d) b.Fa[d] && a.ug(b.Fa[d], c) } } hs.prototype.ug = function(a, b) { L(a, "backgroundColor", b ? "#E6ECF9" : "");
        L(a, "color", b ? "#000" : "") };
    var Xc = {},
        js = null;

    function ks(a) { a = vc(a);
        delete Xc[a];
        Wc() && js && js.stop() }

    function ls() { js || (js = new wk(function() { ms() }, 20)); var a = js;
        0 != a.Qb || a.start() }

    function ms() { var a = Bc();
        bd(Xc, function(b) { ns(b, a) });
        Wc() || ls() };

    function os(a, b, c, d) { Wo.call(this); if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays"); if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.l = a;
        this.B = b;
        this.duration = c;
        this.C = d;
        this.coords = [];
        this.progress = 0 } B(os, Wo);
    w = os.prototype;
    w.play = function(a) { if (a || 0 == this.g) this.progress = 0, this.coords = this.l;
        else if (1 == this.g) return !1;
        ks(this);
        this.startTime = a = Bc(); - 1 == this.g && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.progress || this.h();
        this.Sa("play"); - 1 == this.g && this.Sa("resume");
        this.g = 1; var b = vc(this);
        b in Xc || (Xc[b] = this);
        ls();
        ns(this, a); return !0 };
    w.stop = function(a) { ks(this);
        this.g = 0;
        a && (this.progress = 1);
        ps(this, this.progress);
        this.yb();
        this.j() };
    w.nf = function(a) { this.progress = a;
        1 == this.g && (this.startTime = Bc() - this.duration * this.progress, this.endTime = this.startTime + this.duration) };
    w.K = function() { 0 == this.g || this.stop(!1);
        this.Sa("destroy");
        os.G.K.call(this) };

    function ns(a, b) { b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        ps(a, a.progress);
        1 == a.progress ? (a.g = 0, ks(a), a.Sa(Xa), a.j()) : 1 == a.g && a.Ye() }

    function ps(a, b) { typeof a.C === p && (b = a.C(b));
        a.coords = Array(a.l.length); for (var c = 0; c < a.l.length; c++) a.coords[c] = (a.B[c] - a.l[c]) * b + a.l[c] } w.Ye = function() { this.Sa("animate") };
    w.Sa = function(a) { this.dispatchEvent(new qs(a, this)) };

    function qs(a, b) { ij.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.g } B(qs, ij);

    function rs(a, b, c, d, e) { os.call(this, b, c, d, e);
        this.m = a } B(rs, os);
    rs.prototype.A = function() {};
    rs.prototype.Ye = function() { this.A();
        rs.G.Ye.call(this) };
    rs.prototype.j = function() { this.A();
        rs.G.j.call(this) };
    rs.prototype.h = function() { this.A();
        rs.G.h.call(this) };

    function ss(a, b, c, d, e) { typeof b === Db && (b = [b]);
        typeof c === Db && (c = [c]);
        rs.call(this, a, b, c, d, e); if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.o = -1 } B(ss, rs);
    var ts = 1 / 1024;
    ss.prototype.A = function() { var a = this.coords[0]; if (Math.abs(a - this.o) >= ts) { var b = this.m.style; "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
            this.o = a } };
    ss.prototype.h = function() { this.o = -1;
        ss.G.h.call(this) };
    ss.prototype.j = function() { this.o = -1;
        ss.G.j.call(this) };

    function us(a, b, c) { ss.call(this, a, 1, 0, b, c) } B(us, ss);
    us.prototype.h = function() { this.m.style.display = "";
        us.G.h.call(this) };
    us.prototype.j = function() { this.m.style.display = r;
        us.G.j.call(this) };

    function vs(a, b, c) { ss.call(this, a, 0, 1, b, c) } B(vs, ss);
    vs.prototype.h = function() { this.m.style.display = "";
        vs.G.h.call(this) };

    function ws() { R.call(this);
        this.g = null } x(ws, R);
    w = ws.prototype;
    w.I = function() { this.X(this.h.I(g, { "class": Qb })) };
    w.X = function(a) { this.F = a;
        a.style.display = r };

    function xs(a) { var b = c; var c = A(function() { uh(this.s(), "");
            b && b() }, a);
        c = A(a.Ai, a, 750, c);
        ys(a, c) }

    function zs(a) { a.g && (a.g.stop(!0), a.g = null);
        uh(a.s(), "");
        a.N(!1) }

    function ys(a, b) { a.g = new vs(a.s(), 750);
        S(a).xb(a.g, "begin", A(function() { this.s().style.display = "block" }, a));
        S(a).xb(a.g, Xa, A(function() { this.g = null;
            window.setTimeout(b, 2E3) }, a));
        a.g.play() } w.Ai = function(a, b) { this.isVisible() && (this.g = new us(this.s(), a), S(this).xb(this.g, Xa, A(function() { b && b() }, this)), this.g.play()) };
    w.N = function(a) { this.s().style.display = a ? "block" : r;
        this.s().style.opacity = a ? "1" : "0" };
    w.isVisible = function() { return this.s().style.display !== r && "0" !== this.s().style.opacity };

    function As() { Ap.call(this);
        this.V = {};
        this.jb = {};
        this.O = null;
        this.Wb = !1;
        this.kb = this.l = this.M = null;
        this.da = {};
        this.A = new xk(this);
        this.J = this.j = this.m = this.ab = this.g = this.P = this.xa = null;
        this.H = !0;
        this.bb = [] } x(As, Ap);
    w = As.prototype;
    w.ma = function() { this.H = !1; var a = te.test(vn) ? Nb : "ltr";
        this.Tb(Fh(Jr, { Ri: "", ek: sb, gk: Gn, dir: a }));
        this.className += " skiptranslate";
        this.s() && this.O && this.ab && this.m.s() && this.M && this.J && (this.A.D(window, "resize", A(this.gb, this)), this.A.D(this, pb, A(this.bj, this)), this.bb.length && (this.ke.apply(this, this.bb), this.bb = [])) };
    w.ke = function(a) { for (var b = [], c = 0; c < arguments.length; ++c) { var d = arguments[c]; if (d)
                if (this.O || d.Jd) { var e = d; var f = Zg(ra, { "class": e.className || "activity-link" });
                    uh(f, e.Qe || "");
                    e = f;
                    b.push(e);
                    eh(d.Jd || this.O, e);
                    d.jc && d.yb && (f = A(this.Th, this, d), this.A.D(e, Pa, f), d.Id && this.A.D(this.M, d.Id, f));
                    d.id = d.id || Rk(d);
                    this.V[d.id] && this.Mg(d);
                    this.V[d.id] = d;
                    this.jb[d.id] = e } else this.bb.push(d) } return b };
    w.Mg = function(a) { for (var b = 0; b < arguments.length; ++b) { var c = typeof arguments[b] === v || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
                d = this.V[c],
                e = this.jb[c];
            d && e && (this.l && this.l.id === c && this.te(), this.A.ha(d, [Rb, La]), d.R(), this.da[c] && delete this.da[c], delete this.V[c], delete this.jb[c], ih(e)) } };
    w.Th = function(a) { if (this.M) { a != this.l && this.l && (zs(this.m), this.l.yb.call(this.l), this.l.s() && (this.l.s().style.display = r), Bs(this, !1), this.l = null);
            Bs(this, !0);
            zs(this.m);
            this.l = a; if (this.da[a.id]) { var b = this.da[a.id]; var c = a.Eb } else a.ma(), b = a.s(), c = a.jc, this.A.D(a, [Rb, La], A(this.te, this)), a.jd && (this.da[a.id] = b);
            eh(this.M, b);
            c.call(a, this);
            a = new vs(b, 100);
            this.A.xb(a, Xa, A(this.gb, this, !0, !0));
            a.play() } };
    w.te = function() { if (this.l)
            if (zs(this.m), this.l.yb.call(this.l), this.l.s()) { var a = new us(this.l.s(), 100);
                this.A.xb(a, Xa, A(function() { ih(this.l.s());
                    this.l = null;
                    Bs(this, !1);
                    Ah(this.m.s()) && (xs(this.m), this.gb(!0, !0)) }, this));
                a.play() } else Bs(this, !1), this.l = null };
    w.Ve = function(a, b) { this.kb = a;
        Ap.prototype.Ve.call(this, a, b);
        this.s().style.display = "block" };
    w.ge = function(a) { if (!this.H) { var b = Jp(this, a.target);
            this.Ca = b;
            this.Xb();
            b != this.h ? (this.h = b, Kp(this, b), Lp(this), Ip(this, a)) : Kp(this, b) } };
    w.bj = function() { zs(this.m);
        this.Wb && this.te() };
    w.K = function() { for (var a in this.V) this.Mg(a);
        this.A && this.A.R();
        this.A = null;
        this.m && this.m.R();
        this.J = this.ab = this.kb = this.M = this.O = this.m = null;
        Ap.prototype.K.call(this) };

    function Bs(a, b) { a.Wb = b;
        a.H = b; if (a.H) { var c = a.s();
            a.xa = new I(c.offsetLeft, c.offsetTop) } else a.xa && (null != (a.C || null) && ((a.C || null).g = a.xa), zi(a.s(), a.xa), a.xa = null);
        a.O.style.display = b ? r : "inline-block";
        a.ab.style.display = b ? "inline-block" : r }
    w.Oc = function(a) { if (this.isVisible()) { a = (this.xc = a) ? this.o.D : this.o.ha; var b = J(this.s());
            a.call(this.o, b, yb, this.Ze, !0) } else Ap.prototype.Oc.call(this, a) };
    w.Tb = function(a) { Ap.prototype.Tb.call(this, a); if (a) { this.O = Rg("activity-links", a); var b = Rg(Qb, a);
            b && (this.m = new ws, Xk(this.m, b));
            this.ab = Rg("started-activity-container", a);
            this.M = Rg("activity-root", a);
            this.J = Rg("original-text", a) } };
    w.gb = function(a, b) { var c = Fi(document.body).y; if (this.C) {
            (this.C || null).g.y += c;
            Ap.prototype.gb.call(this); var d = parseInt(this.s().style.left, 10);
            a = parseInt(this.s().style.top, 10) - (a ? 0 : c);
            b && (b = this.Se || {}, a -= b.top || 10, d -= b.left || 10);
            a -= c;
            (this.C || null).g.y = a;
            (this.C || null).g.x = d;
            c = new I(d, a);
            zi(this.s(), c) } };
    w.N = function(a) { Ap.prototype.N.call(this, a) };
    w.Qd = function(a) { this.g = a };
    w.Ga = function(a) { this.j = a };
    w.Qa = function(a) { a = a ? pd(a) : "";
        this.J ? uh(this.J, a) : Ap.prototype.Qa.call(this, a) };
    w.nb = function() { return this.g };
    w.wa = function() { return this.j };
    w.sc = function() { return this.J ? Ah(this.J) : Ap.prototype.sc.call(this) };
    w.Zb = function(a) { this.H || Ap.prototype.Zb.call(this, a) };
    w.Bd = function(a) { this.H || Ap.prototype.Bd.call(this, a) };
    w.Ad = function(a) { this.H || Ap.prototype.Ad.call(this, a) };
    var Cs = {
        set: function(a, b) { a.className = b },
        get: function(a) { a = a.className; return typeof a === v && a.match(/\S+/g) || [] },
        add: function(a, b) { var c = Cs.get(a),
                d = Array.prototype.slice.call(arguments, 1),
                e = c.length + d.length;
            Cs.Nf(c, d);
            Cs.set(a, c.join(" ")); return c.length == e },
        remove: function(a, b) { var c = Cs.get(a),
                d = Array.prototype.slice.call(arguments, 1),
                e = Cs.bg(c, d);
            Cs.set(a, e.join(" ")); return e.length == c.length - d.length },
        Nf: function(a, b) { for (var c = 0; c < b.length; c++) Oc(a, b[c]) || a.push(b[c]) },
        bg: function(a, b) {
            return a.filter(function(c) {
                return !Oc(b,
                    c)
            })
        },
        kk: function(a, b, c) { for (var d = Cs.get(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (d.splice(f--, 1), e = !0);
            e && (d.push(c), Cs.set(a, d.join(" "))); return e },
        ck: function(a, b, c) { var d = Cs.get(a);
            typeof b === v ? Pc(d, b) : Array.isArray(b) && (d = Cs.bg(d, b));
            typeof c !== v || Oc(d, c) ? Array.isArray(c) && Cs.Nf(d, c) : d.push(c);
            Cs.set(a, d.join(" ")) },
        has: function(a, b) { return Oc(Cs.get(a), b) },
        enable: function(a, b, c) { c ? Cs.add(a, b) : Cs.remove(a, b) },
        toggle: function(a, b) { var c = !Cs.has(a, b);
            Cs.enable(a, b, c); return c }
    };

    function Ds(a, b) { hs.call(this, a);
        b = b || {};
        this.g = { cb: b.cb || "", Jb: b.Jb || 1 };
        this.h = null } x(Ds, hs);
    w = Ds.prototype;
    w.Hf = function(a, b) { b && (b.g = a, Bp(this.h, b)) };
    w.If = function(a) { a && Dp(this.h, a) };
    w.ih = function() { var a = this.h.kb; if (a && void 0 !== a.g) { var b = a.g;
            a = this.m.j[b];
            is(this, this.l, !1);
            this.l = b;
            is(this, b);
            this.h.Qd(a.pj);
            this.h.Ga(a.rj);
            b = a.Y;
            this.h.P = b && pd(b);
            this.h.Qa(a.text) } };
    w.hh = function() { is(this, this.l, !1) };
    w.Hg = function() { this.m.j[this.l].Ph.dispatchEvent("updating") };
    w.K = function() { this.h.R();
        this.h = null;
        hs.prototype.K.call(this) };
    w.ug = function(a, b) { Cs[b ? "add" : "remove"](a, "goog-text-highlight") };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Es = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

    function Fs(a) { this.o = a;
        this.l = this.h = this.m = this.j = -1;
        this.g = !1;
        this.C = 0;
        this.B = "";
        this.J = 0 } Fs.prototype.start = function() { if (!this.g) { this.g = !0; var a = [],
                b; for (b = 0; 15 > b; b++) a[b] = Es[0 | 62 * Math.random()];
            this.B = a.join("");
            this.C = 0;
            this.l = this.h = this.m = this.j = -1;
            this.J = Bc();
            uk(this.A, 1E4, this) } };
    Fs.prototype.stop = function() { this.g && (this.g = !1, Gs(this)) };
    Fs.prototype.A = function() { this.g && (Gs(this), uk(this.A, 1E3, this)) };

    function Gs(a) { var b = a.o.l,
            c = a.o.o,
            d = a.o.j,
            e = a.o.m; if (a.j != b || a.m != c || a.h != d || a.l != e) { var f = {};
            f.ct = b;
            f.cv = c;
            f.cts = d;
            f.cvs = e;
            f.sid = a.B;
            f.seq = a.C++;
            f.tat = Bc() - a.J; if (0 <= a.j || 0 <= a.m || 0 <= a.h || 0 <= a.l) f.pt = a.j, f.pv = a.m, f.pts = a.h, f.pvs = a.l;
            Xn("te_v", f);
            a.j = b;
            a.m = c;
            a.h = d;
            a.l = e } };

    function Hs() { this.m = this.j = this.o = this.l = 0;
        this.g = [];
        this.h = null != z.IntersectionObserver ? new IntersectionObserver(A(this.A, this)) : null } Hs.prototype.reset = function() { this.m = this.j = this.o = this.l = 0;
        this.g = [] };
    Hs.prototype.A = function(a) { for (var b = 0; b < a.length; b++) { var c = a[b]; if (0 < c.intersectionRatio && null != c.target[Is]) { this.o += Ah(c.target).length; var d = c.target[Is];
                this.m += this.g[d];
                this.g[d] = 0;
                c.target[Is] = void 0 } } };
    ho(36546, Hs.prototype, { xg: 1 });
    var Is = "_gt_" + Math.random().toString(36).substr(2);

    function Js(a, b) {
        N.call(this);
        a = a || {};
        this.g = Zc(a);
        this.g.Jb = a.Jb;
        this.g.rf = !!a.rf;
        this.g.Jh = parseInt(a.Jh, 10) || 300;
        this.g.fj = a.fj;
        this.g.trackVisibility = a.trackVisibility || !1;
        this.A = 0;
        this.j = {};
        this.o = new xk(this);
        this.l = new Ds(this, this.g);
        b && (this.l.o = b || {});
        a = this.l;
        a.h = new As({ oj: a.g.oj });
        a.h.tg = 300;
        a.h.Sg = 1E3;
        a.h.Oc(!0);
        a.j.D(a.h, "show", A(a.ih, a));
        a.j.D(a.h, pb, A(a.hh, a));
        b = new fs({ cb: a.g.cb, id: "alternate", Qe: W.dh, jd: !0 }, a.o);
        a.h.ke(b);
        a.j.D(b, Rb, A(a.Hg, a));
        a.g.Jb && (b = new gs({
            id: "contribute",
            Id: Ua,
            jd: !0
        }, a.o), a.h.ke(b), a.j.D(b, Rb, A(a.Hg, a)));
        a.h.ma();
        this.m = this.h = null;
        this.g.trackVisibility && null != z.IntersectionObserver && (this.h = new Hs, this.m = new Fs(this.h))
    }
    x(Js, N);

    function Ks(a) { a.m && a.m.stop(); for (var b in a.j) { var c = a,
                d = b,
                e = c.j[d]; if (e) { if (c.h)
                    for (var f = c.h, h = e.Fa, k = 0; k < h.length; ++k) { var l = f,
                            m = h[k];
                        mh(m) ? (m[Is] = void 0, l.h && l.h.unobserve(m)) : l.xg(m.nodeType) }
                for (f = 0; f < e.Fa.length; ++f) e.Fa[f] && c.l.If(e.Fa[f]);
                delete c.j[d] } } a.h && a.h.reset() }
    Js.prototype.K = function() { Ks(this);
        this.o.R();
        this.o = null;
        this.l.R();
        this.l = null };

    function Ls(a) { for (var b = 0; b < a.length; ++b)
            if (a[b] && a[b].node) return a[b].node; return null }

    function Ms(a) { var b = Ls(a); if (!b) return null; var c = [],
            d = [],
            e = [];
        b = new So(b, !0); var f = a[a.length - 1].node,
            h = 0,
            k = !1;
        do { b.next(); var l = b.node(); if (!l) break; var m = b.g.g,
                n = b.g.j; for (1 == m && --n; h < a.length && !a[h].node;) ++h;
            l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !Ns(Os(l))) ? (m = Ps(l), d.push({ node: m, Qa: function() {} }), e[d.length - 1] = n, gh(m, l), l == a[h].node && (c[h++] = d.length - 1, k = !0)) : k = !1 } while (l != f); return { wf: e, cj: c, Ci: d } }

    function Ns(a) { return null != a && Qo[a.tagName] }

    function Os(a) { if (null == a) return null; for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == pd(Ah(a));) a = a.previousSibling; return a }

    function Qs(a, b, c, d, e, f) { P.call(this);
        this.g = []; for (var h = 0; h < a.length; ++h) this.g.push("nodeType" in a[h] ? Rs(a[h]) : a[h]), Ss(a[h].node);
        this.j = b;
        this.L = d || 0;
        this.P = e || 0;
        this.C = c;
        this.A = f || null;
        this.O = this.J = this.M = !1;
        this.m = [];
        this.o = [];
        this.h = [];
        this.T = [];
        new xk(this);
        this.l = this.H = !1 }
    var Rs;
    x(Qs, P);

    function Ts(a) { if (!a) return !1; if (3 != a.nodeType || !D) return Us in a && !!a[Us]; if (!a.parentNode) return !0; if (!(Vs in a.parentNode)) return !1; var b = a.parentNode[Vs]; if (!b || !b[a.nodeValue]) return !1;
        b = b[a.nodeValue]; for (var c = 0; c < b.length; ++c)
            if (b[c] == a) return !0; return !1 }

    function Ws(a, b) { if (!a) return ""; if ("TITLE" == a.tagName) return String(document.title);
        3 == a.nodeType ? b = "nodeValue" : b || (b = "value"); return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : typeof a[b] === v ? String(a[b]) : "" }
    Qs.prototype.ja = function() { return this.j };

    function Xs(a, b, c) { b = { Ig: b, cf: c, fa: [] };
        a.h.push(b); return b }

    function Ys(a) {
        if (!a.l && a.M && !a.J && !a.O) {
            a.J = !0;
            var b;
            if (b = Zs(a.g)) { b = a.g; var c = a.h; if (1 == b.length && b[0] && b[0].vf) { for (var d = [], e = 0; e < c.length; ++e)
                        for (var f = 0; f < c[e].fa.length; ++f) d.push(c[e].fa[f].Y);
                    b[0].Qa(d.join(" "), b[0].node);
                    b = !0 } else b = !1;
                b = !b }
            if (b && (b = Ms(a.g))) {
                a.o = b.cj;
                a.m = b.Ci;
                d = a.g;
                e = a.o;
                f = a.m;
                var h = b.wf;
                c = [];
                for (var k = 0; k < d.length; ++k)
                    if (c[k] = [], d[k].node && void 0 !== e[k])
                        for (var l = 0; l < f.length; ++l)
                            if (!(h[l] > h[e[k]])) {
                                if (h[l] == h[e[k]]) { if (f[l].node.parentNode != f[e[k]].node.parentNode) continue } else {
                                    for (var m =
                                            h[e[k]] - h[l], n = f[e[k]].node.parentNode; m-- && n && n != f[l].node.parentNode;) n = n.parentNode;
                                    if (n != f[l].node.parentNode) continue
                                }
                                c[k].push(l)
                            } d = a.g;
                e = a.h;
                f = -1;
                for (h = e.length - 1; 0 <= h; --h)
                    for (k = e[h], l = k.fa.length - 1; 0 <= l; --l)
                        if (m = k.fa[l], !(0 > m.W) && d[m.W] && d[m.W].node)
                            if (0 > f) m.Ed = Nn(c[m.W]), f = c[m.W][c[m.W].length - 1];
                            else
                                for (n = c[m.W].length - 1; 0 <= n; --n)
                                    if (c[m.W][n] <= f) { m.Ed = Nn(c[m.W].slice(0, n + 1));
                                        f = c[m.W][n]; break } for (c = d = 0; c < a.h.length; ++c) {
                    e = a.h[c];
                    f = a.g;
                    h = e;
                    k = b.wf;
                    l = a.o;
                    m = "";
                    for (n = 0; n < h.fa.length; ++n) {
                        var q =
                            h.fa[n];
                        m += q.Y;
                        if (0 > q.W) { var t = -1,
                                y = -1,
                                F = l[h.fa[n - 1].W];
                            void 0 !== F && (t = k[F]);
                            n < h.fa.length - 1 && (F = l[h.fa[n + 1].W], void 0 !== F && (y = k[F])); if (0 <= t || 0 <= y) a: if (y = (0 > t || y < t) && n < h.fa.length - 1, t = h.fa[y ? n + 1 : n - 1], !(t.W >= f.length || null == f[t.W].node)) { F = q.Y;
                                q.Y = ""; if (/^ +$/.test(F) && (q = y ? t.Y.charCodeAt(0) : t.Y.charCodeAt(t.Y.length - 1), 3584 <= q && 3711 >= q || 12288 <= q && 12351 >= q || 12352 <= q && 12543 >= q || 12784 <= q && 12799 >= q || 19968 <= q && 40959 >= q || 65280 <= q && 65519 >= q)) break a;
                                t.Y = y ? F + t.Y : t.Y + F } }
                    }
                    f = m;
                    h = a.g;
                    k = e;
                    l = a.m;
                    m = b.wf;
                    n = a.o;
                    q = [];
                    for (t = 0; t < k.fa.length && !(d >= l.length); ++t)
                        if (y = k.fa[t], y.Ed && !(0 > y.W) && h[y.W].node && y.Y)
                            if (d == n[y.W] || d in y.Ed && (!(d + 1 in y.Ed) || d + 1 != n[y.W])) { if (l[d] && l[d].node) { F = Ps(l[d].node);
                                    q.push(F); for (var Q = l[d].node, Oe = m[n[y.W]] - m[d], Tc = F, ib = h[y.W].node.parentNode, Re = Tc; ib && Oe--;) Re = ib.cloneNode(!1), Re.appendChild(Tc), ib = ib.parentNode, Tc = Re;
                                    Q.appendChild(Re);
                                    Q = h[y.W].node;
                                    h[y.W].Xd ? h[y.W].vg || F.appendChild(Q) : (Q = h[y.W].node.cloneNode(!1), Q.id && (Q.id = ""), F.appendChild(Q));
                                    h[y.W].Qa(y.Y, Q) } } else ++d,
                                --t;
                    h = q;
                    q = a.g;
                    k = a.C;
                    if (e.Ig) k = e.Ig;
                    else { l = q.length;
                        m = -1; for (n = 0; n < e.fa.length; ++n) t = e.fa[n].W, 0 <= t && q[t] && q[t].node && (m = Math.max(m, t), l = Math.min(l, t));
                        q = ""; for (n = l; n <= m; ++n) k[n] && (q += k[n]);
                        k = q } m = h;
                    n = k;
                    if (a.A) {
                        if (3 != a.A.g.Jb) {
                            h = a.T;
                            k = h.push;
                            l = a.A;
                            e = e.cf;
                            q = a;
                            e = l.j[++l.A] = { id: l.A.toString(), Ph: q, text: n, ik: e || n, Y: f, pj: l.C, rj: l.B, Fa: m };
                            for (f = 0; f < m.length; ++f) m[f] && l.l.Hf(e.id, m[f]);
                            if (l.h)
                                for (f = l.h, q = n.length, f.j += q, n = f.g.length, f.g.push(q), q = 0; q < m.length; ++q) t = f, y = m[q], mh(y) ? (y[Is] = n, t.l += Ah(y).length,
                                    t.h && t.h.observe(y)) : t.xg(y.nodeType);
                            l.m && l.m.start();
                            k.call(h, e.id)
                        }
                    } else
                        for (e = 0; e < m.length; ++e) m[e].title = n
                }
                b = a.g;
                for (c = 0; c < b.length; ++c) b[c].node && !b[c].Xd && ih(b[c].node);
                b = a.g;
                c = a.m;
                a = a.o;
                for (e = d = 0; e < c.length; ++e)
                    if (f = c[e].node) { for (; d < b.length && e > a[d];) d++;
                        (d >= b.length || e != a[d]) && !f.firstChild && (ih(f), c[e].node = null) }
            }
        }
    }
    Qs.prototype.restore = function() {
        if (this.J)
            if (this.J = !1, this.A && Ks(this.A), this.T = [], Zs(this.m), 1 == this.g.length && this.g[0].vf) this.g[0].Qa(this.C[0], this.g[0].node);
            else {
                for (var a = 0, b = 0; b < this.m.length; ++b) {
                    var c = this.m[b].node;
                    if (c) {
                        for (; a < this.g.length && b > this.o[a];) { var d = a++;
                            this.g[d].node && ($s(this.g[d].node), this.g[d].node = null) }
                        if (a < this.g.length && b == this.o[a] && this.g[a].node) {
                            this.g[a].vg || (fh(c), c.appendChild(this.g[a].node));
                            this.g[a].Qa(this.C[a], this.g[a].node);
                            a++;
                            d = c;
                            var e = d.parentNode;
                            if (e && 11 != e.nodeType)
                                if (d.removeNode) d.removeNode(!1);
                                else { for (; c = d.firstChild;) e.insertBefore(c, d);
                                    ih(d) }
                        } else ih(c)
                    }
                }
                this.m = []
            }
    };
    Qs.prototype.K = function() { P.prototype.K.call(this);
        this.restore(); for (var a = 0; a < this.g.length; ++a) this.g[a].node && $s(this.g[a].node);
        this.g = null };

    function Ss(a) { if (a)
            if (3 == a.nodeType && D) { Vs in a.parentNode && a.parentNode[Vs] || (a.parentNode[Vs] = {}); var b = a.parentNode[Vs];
                b[a.nodeValue] || (b[a.nodeValue] = []);
                b = b[a.nodeValue]; for (var c = 0; c < b.length; ++c)
                    if (b[c] == a) return;
                b.push(a) } else a[Us] = 1 }

    function $s(a) { if (!a || 3 == a.nodeType && D) { var b = a.parentNode; if (b && Vs in b) { var c = b[Vs]; if (c && a && c[a.nodeValue]) { var d = c[a.nodeValue]; if (d)
                        for (var e = 0; e < d.length; ++e)
                            if (d[e] == a) { d.splice(e, 1); break } 0 == d.length && delete c[a.nodeValue] } if (c && bo(c)) try { delete b[Vs] } catch (f) { b[Vs] = "" } } } else if (Us in a) try { delete a[Us] } catch (f) { a[Us] = "" } }

    function Zs(a) { for (var b = 0; b < a.length; ++b) try { a[b].node && !a[b].node.parentNode && (a[b].node = null) } catch (c) { a[b].node = null }
        for (b = a.length - 1; 0 <= b && !a[b].node; --b);
        a.length = b + 1; return a.length }

    function Ps(a) { a = a.ownerDocument ? a.ownerDocument.createElement("font") : ah(document, "font");
        Ss(a);
        a.style.verticalAlign = "inherit"; return a }

    function at() { this.h = {};
        this.g = {} } at.prototype.has = function(a, b) { return null != this.h[a] || null != this.g[a] || b && (a in this.h || a in this.g) };
    at.prototype.write = function(a, b) { this.g[a] = b };
    at.prototype.remove = function(a) { delete this.g[a];
        delete this.h[a] };
    at.prototype.cc = function() { return bo(this.h) };
    var Us = "_gt_" + Math.random().toString(36).substr(2),
        Vs = "_gtn_" + Math.random().toString(36).substr(2);
    (function() {
        function a(c) { document.title = c } var b = {};
        Rs = function(c, d) { if ("TITLE" == c.tagName) return { node: c, Qa: a, Xd: !0, vg: !0, vf: !0 }; if (3 == c.nodeType) return { node: c, Qa: function(e, f) { uh(f, e) } };
            d || (d = "value");
            b[d] || (b[d] = function(e, f) { f.setAttribute && f.setAttribute(d, e);
                typeof e === v && (f[d] = e) });
            c = { node: c, Qa: b[d], Xd: !0 }; "value" != d && (c.vf = !0); return c } })();

    function bt(a, b, c, d) { d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : Ah(d);
        d = { W: c, Y: He(d) };
        a.push(d);
        b[c] ? b[c].end = d : b[c] = { start: d, end: d }; return d }

    function ct(a) { for (var b, c = a.firstChild; c; c = b) b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? gh(c, a) : hh(c, a), ct(c)) };

    function dt(a, b) { this.B = a || null;
        this.H = b || Ko.ka();
        this.A = this.o = this.L = null;
        this.l = this.j = !1;
        this.m = null;
        this.g = [];
        this.h = 0 }

    function et(a, b) { a.j || (a.L = b) }

    function ft(a, b, c) { a.o = c ? A(b, c) : b }

    function gt(a, b, c) { a.A = c ? A(b, c) : b }

    function ht(a, b) { a.j || (a.j = !0, a.J = b, a.h++, a.m = a.L, a.C()) } dt.prototype.stop = function() { this.h++;
        this.j = !1;
        this.g = [] };

    function it(a) { if (!a.j) return null; for (var b = !1, c = 0; c < a.g.length; ++c)
            if (a.g[c].target === a) { a.g[c].ready = !1;
                a.g[c].ah = a.h + 1;
                b = !0; break } b || a.g.push({ target: a, ready: !1, ah: a.h + 1 }); return A(a.C, a, a, a.h + 1) }

    function jt(a) { if (!a.j) return !0; for (var b = 0; b < a.g.length; ++b)
            if (a.g[b].target === a && a.g[b].ah == a.h) return a.g[b].ready; return !0 } dt.prototype.C = function(a, b) { if (this.j) { if (a)
                for (var c = 0; c < this.g.length; ++c)
                    if (this.g[c].target === a) { this.g[c].ready = !0; break } this.l || this.H.add(A(this.la, this, b || this.h)) } };
    dt.prototype.la = function(a) { if (this.h != a) return !1;
        a = this.m; if (a == kt) return this.stop(), this.o && this.o.call(this.B, this, this.J), !1;
        this.l = !0; try { var b = a.call(this.B, this, this.J); if (!b) throw Error(); } catch (c) { this.stop();
            a = c; if (this.A) this.A.call(this.B, a, this, this.J);
            else throw a; return !1 } finally { this.l = !1 } b != lt && (this.m = b, this.h++, this.C()); return !1 };

    function lt() {}

    function kt() {};

    function mt(a, b, c, d, e) { b = b || {};
        this.la = e || [];
        this.o = [];
        this.J = [];
        nt(this, a || document.documentElement, void 0 === b.Ng || !!b.Ng);
        this.C = c || Qs;
        this.B = b.Gi;
        this.j = this.g = this.m = this.Cc = null;
        this.A = !!b.uj;
        this.Aa = !!b.tj;
        this.O = this.A ? 27 : 13;
        this.H = !0;
        this.L = [];
        this.l = new dt(this, d) }

    function ot(a, b, c, d) { a.l.j || (b = { Xg: b, Tg: c, Fa: [], Jg: [], Gb: [], textLength: 0, size: 0, continuous: !0 }, a.Cc = null, et(a.l, a.h), ft(a.l, d), gt(a.l, A(function(e) { this.Ni(e);
            d() }, a)), ht(a.l, b)) }

    function pt(a, b) { return 0 < a.Fa.length ? new b(a.Fa, a.Gb.join(""), a.Jg, a.textLength, a.size) : null }

    function qt(a, b) {
        if (!a.j) return a.Cc = pt(b, a.C), !0;
        if (!b.continuous && 0 < b.Fa.length) return a.Cc = pt(b, a.C), !0;
        b.continuous = a.j.Dg;
        a: {
            var c = a.j;
            var d = a.O;
            if (b.size > b.Tg || b.textLength > b.Xg) c = !1;
            else {
                var e = c.size,
                    f = c.text.length;
                if (0 != b.Fa.length && (e += 1 == b.Fa.length ? b.size + d + d : b.size + d, f += b.textLength, e > b.Tg || f > b.Xg)) { c = !1; break a } b.size = e;
                b.textLength = f;
                b.Fa.push(c.node);
                b.Jg.push(c.text);
                d = b.Fa.length - 1;
                0 == d ? b.Gb.push(c.ze) : (1 == d && (b.Gb[0] = "<a i=0>" + b.Gb[0] + "</a>"), b.Gb.push("<a i=" + d + ">"), b.Gb.push(c.ze),
                    b.Gb.push("</a>"));
                c = !0
            }
        }
        if (c) return a.j = null, !1;
        a.Cc = pt(b, a.C);
        return !0
    }

    function rt(a, b, c) { var d = Ws(b, c);
        d && pd(Ae(d)) && a.L.push({ node: b, Gh: c, text: d }) }
    mt.prototype.h = function(a, b) {
        var c = this;
        if (this.j && qt(this, b)) return kt;
        if (!this.g) { this.H = !!this.o.length; if (!this.o.length && (a = this.L.shift())) return this.j = { Dg: !1, node: Rs(a.node, a.Gh), text: a.text, ze: Ge(a.text), size: this.A ? Ee(a.text).length : a.text.length }, b.continuous = !1, qt(this, b), kt;
            a = this.o.shift() || this.J.shift(); if (!a) return this.j = null, qt(this, b), kt;
            this.m = [a.sj];
            this.g = new So(a.root) } this.g.next();
        if (this.g.done) return this.g = null, b.continuous = !1, this.h;
        a = this.g.node();
        var d = this.g.g.g;
        if (-1 ==
            d) return st(this), tt(a) || (b.continuous = !1), this.h;
        ut(this, a);
        d = 1 == d;
        var e = vt(a);
        if ((e || d) && this.H && !wt(a)) return nt(this, a, xt(this), !0), this.g.g.Bb(), st(this), this.h;
        if (d && xt(this) && (this.Aa && rt(this, a, "title"), rt(this, a, "alt"), rt(this, a, "placeholder"), rt(this, a, "aria-label"), rt(this, a, "aria-placeholder"), rt(this, a, "aria-roledescription"), rt(this, a, "aria-valuetext"), Uo(this.g)))
            for (var f = a.firstChild; f;) {
                if (3 == f.nodeType) {
                    var h = f.nodeValue.split("\n");
                    if (2 < h.length || 2 == h.length && "" != pd(h[0]) && "" !=
                        pd(h[1])) { f.nodeValue = h[0]; for (var k = 1; k < h.length; ++k) { var l = J(a).createElement("font");
                            this.la.push(l);
                            hh(l, f);
                            f = l;
                            hh(J(a).createTextNode("\n" + h[k]), f);
                            f = f.nextSibling } }
                }
                f = f.nextSibling
            }
        a.shadowRoot && Array.from(a.shadowRoot.childNodes).forEach(function(n) { nt(c, n, xt(c)) });
        if (e) { this.g.g.Bb(); if (xt(this)) { var m = Ws(a); if (pd(Ae(m)) && (this.j = { Dg: !0, node: Rs(a), text: m, ze: Ge(m), size: this.A ? Ee(m).length : m.length }, qt(this, b))) return st(this), kt } st(this); return this.h }
        if (d) {
            if (yt(a) || !a.firstChild && a.tagName !=
                ma) return b.continuous = b.continuous && !!Qo[a.tagName], this.g.g.Bb(), st(this), this.h;
            if (a.tagName == ma) { try { a.src.match(/https?:\/\//) && Ue(a.src.match(Te)[3] || null) != window.location.hostname || (m = sh(a).documentElement) && nt(this, m, xt(this)) } catch (n) {} b.continuous = !1;
                this.g.g.Bb();
                st(this); return this.h } xt(this) && tt(a) ? this.B && "A" == a.tagName && a.href && this.B(a) : b.continuous = !1;
            return this.h
        }
        this.g.g.Bb();
        st(this);
        return this.h
    };

    function yt(a) { return Ts(a) || 3 != a.nodeType && (!a.tagName || Po[a.tagName] || Qo[a.tagName] || oi(a, Pb)) }

    function zt(a) { var b = J(a); return b.defaultView && b.defaultView.getComputedStyle ? b.defaultView.getComputedStyle(a, null) : a.currentStyle }

    function wt(a) { return 3 == a.nodeType ? !0 : 1 != a.nodeType ? !1 : a.offsetWidth && a.offsetHeight ? !0 : (a = zt(a), !!a && a.display != r && a.visibility != ob) }

    function tt(a) { if (3 == a.nodeType) return !0; if (1 != a.nodeType) return !1; var b = zt(a); return !!Oo[a.tagName] && (!b || !b.display || "inline" == b.display) }

    function vt(a) { return !!a && (3 == a.nodeType && typeof a.nodeValue === v || "TITLE" == a.tagName && typeof a.value === v || a.tagName == ta && oi(a, Yb) || a.tagName == na && (Ro[a.type] || oi(a, Yb))) }

    function nt(a, b, c, d) {
        (d ? a.J : a.o).push({ root: b, sj: void 0 === c || c }) }

    function xt(a) { return a.m[a.m.length - 1] }

    function ut(a, b) { b = !Ts(b) && (b.nodeType == Gc && xt(a) || !(oi(b, "notranslate") || b.attributes && b.attributes.translate && "no" == b.attributes.translate.value) && (oi(b, Yb) || !!b.attributes && !!b.attributes.translate && "yes" == b.attributes.translate.value || xt(a)));
        a.m.push(b) }

    function st(a) { a.m.pop() } ho(5762, mt.prototype, { Ni: 1 });

    function At() { N.call(this);
        this.g = [] } x(At, N);
    At.prototype.restore = function() { uk(this.h, 0, this) };
    At.prototype.h = function() { for (var a = 0; a < this.g.length; ++a) ih(this.g[a]);
        this.g = [] };
    At.prototype.K = function() { N.prototype.K.call(this);
        this.restore() };

    function Bt(a) { var b = new yp;
        Se(a, function(c) { if (mh(c)) b.add(c);
            else { a: { var d; if (Hg && !(D && cg("9") && !cg("10") && z.SVGElement && c instanceof z.SVGElement) && (d = c.parentElement)) { c = d; break a } d = c.parentNode;c = mh(d) ? d : null } null != c && b.add(c) } }); return b };

    function Ct(a) { this.h = !0;
        this.l = a;
        this.j = !1;
        this.g = [] } Ct.prototype.ja = function() { return this.g.join("") };

    function Dt(a, b) { this.m = a;
        this.l = !0;
        this.j = b;
        this.g = null;
        this.h = 0 }

    function Et(a, b) { return a.l ? (b(A(a.o, a), a.m, a.j ? "en" : ""), !0) : !1 } Dt.prototype.o = function(a, b, c) { this.g = b;
        this.h = c;
        a() };

    function Ft(a, b) { this.l = a;
        this.B = !!b;
        this.g = this.C = 0;
        this.m = this.j = -1;
        this.o = this.A = this.h = 0 }

    function Gt(a, b, c) {
        a.B && (b -= 9);
        for (var d = "", e = 0, f = a.C; f < a.l.length; ++f) {
            var h = a.l.charAt(f),
                k = h.charCodeAt(0);
            e++;
            a.h += a.B ? 127 >= k ? 32 >= k || Ht[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
            k = a.h >= b;
            It[h] ? (a.m = f, a.A = a.h, k = k || e > c) : " " == h && (a.j = f, a.o = a.h, k = k || e > c);
            if (k) return 0 <= a.m ? (d = a.l.substring(a.g, a.m + 1), a.h -= a.A, a.g = a.m + 1, a.m >= a.j ? (a.j = -1, a.o = 0) : a.o -= a.A, a.m = -1, a.A = 0) : 0 <= a.j ? (d = a.l.substring(a.g, a.j + 1), a.h -= a.o, a.g = a.j + 1, a.j = -1, a.o = 0) : (d = a.l.substring(a.g, f + 1), a.h = 0, a.g = f + 1, a.m = a.j = -1, a.o = a.A = 0), a.C = f + 1, d
        }
        a.g < a.l.length && (d = a.l.substring(a.g), a.g = a.l.length);
        return d
    }
    var It = Nn(". , ; : \\? !".split(" ")),
        Ht = Nn([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

    function Jt(a, b, c, d, e, f) { this.A = d || function() {};
        this.V = f || function() {};
        this.O = !!e;
        this.j = a.g.Ue;
        this.l = 0;
        this.H = function() {};
        this.B = c;
        this.J = this.h = this.m = 0;
        this.g = null;
        this.la = 0;
        this.ra = !1;
        this.da = a.g.Te;
        this.Aa = [];
        this.P = 0;
        this.M = a.g.nd;
        this.o = Ho(a);
        this.xa = this.O ? 1 : 6;
        this.ya = a.g.lf;
        this.T = b;
        this.C = [];
        this.S = a }

    function Kt(a, b) { var c = 0;
        a.H = A(function() {++c == this.C.length && b() }, a) }

    function Lt(a, b, c) { a.A = function() {};
        a.T = b;
        a.g = null;
        a.P = 0;
        a.C = [];
        a.H = function() {};
        a.B = c }

    function Mt(a, b, c) { if (0 == a.h && (a.h = b ? 860 : a.o, !c || c <= a.o)) { a.m = a.h; return } do b = a.h, a.h < a.o && (a.h *= a.xa, a.h > a.o && (a.h = a.o)); while (b != a.h && c && a.h < c);
        a.m = a.h }

    function Nt(a, b) { var c = null != b,
            d = !c && !a.ra;
        (d || c) && a.A(100, d, b) }

    function Ot(a) { return a.M ? a.g.P : a.g.ja().length }

    function Pt(a, b, c, d, e) { return new mt(a.T.shift(), { uj: a.M, Gi: b, Ng: !0, tj: !!c }, function() { var f = Array.prototype.slice.call(arguments); return new Qs(f.shift(), f.shift(), f.shift(), f.shift(), f.shift(), c, d) }, a.B, e) }

    function Qt(a, b, c) { if (0 < a.da && Rt(b) >= a.da) return !0; if (Ot(a) > a.h) { if (0 < Rt(b)) return !0;
            Mt(a, c, Ot(a)); for (var d = a.g.ja(), e = new Ft(d, a.M), f; f = Gt(e, a.h, a.j);)
                if (b.m.push(new Dt([f], !1)), a.l += f.length, a.j -= f.length, 0 >= a.j) { b.J = d.substring(e.g); break } else Mt(a, c);
            St(b, a.g, !0);
            a.g = null; return !0 } if (Ot(a) > a.m) return !0;
        St(b, a.g, !0);
        a.m -= Ot(a) + a.ya;
        a.l += a.g.L;
        a.j -= a.g.L;
        a.g = null; return !1 };

    function Tt(a, b) { N.call(this);
        this.l = b;
        this.j = { rootMargin: a };
        this.g = new IntersectionObserver(A(this.h, this), this.j) } x(Tt, N);
    Tt.prototype.K = function() { N.prototype.K.call(this);
        this.g = null };
    Tt.prototype.h = function(a) { for (var b = 0; b < a.length; b++)
            if (0 < a[b].intersectionRatio) { this.l(); break } };

    function Ut() { R.call(this) } x(Ut, R);
    Ut.prototype.I = function() { this.X(Fh(Nr)) };
    Ut.prototype.X = function(a) { this.F = a };

    function Vt(a) { qi(a.s(), nb);
        qi(a.s().firstChild, mb) };

    function Wt() { this.g = new Ut;
        this.g.I();
        this.g.ma();
        this.h = 0 } Wt.prototype.reset = function() { this.h = 0;
        Vt(this.g) };

    function Xt(a, b, c, d, e, f, h, k) { this.m = a;
        this.h = b;
        this.C = [];
        this.J = null;
        this.l = c;
        this.g = d;
        this.j = e;
        this.O = f;
        this.Aa = h;
        this.B = this.o = null;
        this.A = k || null;
        this.la = this.H = !1;
        this.L = {} }

    function Yt(a) { for (var b = new yp, c = 0; c < a.length; c++) { for (var d = a[c], e = new yp, f = 0; f < d.g.length; f++) { var h = d.g[f].node;
                null != h && e.add(h) } d = b;
            e = Pe(e);
            f = e.length; for (h = 0; h < f; h++) d.add(e[h]);
            d.size = d.g.size } return b } w = Xt.prototype;
    w.trackVisibility = function(a) { a = this.o = new Tt("200px", A(this.ri, this, a)); var b = Bt(Yt([].concat(this.h, this.C)));
        Se(b, A(a.g.observe, a.g));
        a = this.B = new Tt("0px", A(this.vi, this));
        b = Bt(Yt([].concat(this.h, this.C)));
        Se(b, A(a.g.observe, a.g)) };
    w.ri = function(a) { this.o && (this.o.g.disconnect(), this.o = null);
        a() };
    w.vi = function() { this.H = !0;
        Zt(this); if (!this.la && this.A) { var a = this.A;
            0 == a.h++ && (a = a.g, K(a.s(), nb), K(a.s().firstChild, mb)) } };

    function Zt(a) { a.B && (a.B.g.disconnect(), a.B = null) }
    w.Jf = function() { if (this.H && !this.la && this.A) { var a = this.A;
            0 == --a.h && Vt(a.g) } this.o && (this.o.g.disconnect(), this.o = null);
        Zt(this) };

    function St(a, b, c) { c ? (a.h.push(b), a.L[b.ja()] = !0) : a.C.push(b) }

    function Rt(a) { return a.h.length + a.C.length }

    function $t(a) { if (0 == a.m.length) { for (var b = [], c = 0; c < a.h.length; ++c) b.push(a.h[c].ja());
            a.m.push(new Dt(b, !1)) } }
    w.translate = function(a) {
        function b() {}

        function c() { e++;
            e == d && b() } $t(this); for (var d = 0, e = 0, f = this.l, h = this.g, k = this.j, l = this.O, m = this.Aa, n = 0; n < this.m.length; ++n) Et(this.m[n], function(q, t, y) { q = f.S.translate(Ac(q, c), t, y || h, k, ++f.P, l, m, f.O);
            f.Aa.push(q); return q }) && d++;
        0 != d && (b = it(a)); return d };

    function au(a, b) { N.call(this);
        this.h = [];
        this.l = [];
        this.g = a;
        this.j = b } x(au, N);
    au.prototype.m = function(a) { var b = pd(a.href);
        0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.l.push(a.href), this.h.push(a), a.href = b + "#googtrans/" + this.g + "/" + this.j) };
    au.prototype.K = function() { N.prototype.K.call(this);
        this.restore() };
    au.prototype.restore = function() { if (this.h.length) { for (var a = 0; a < this.h.length; ++a) this.h[a].href = this.l[a];
            this.h = [];
            this.l = [] } };

    function bu(a, b) { N.call(this);
        this.g = a;
        this.h = te.test(b) ? "translated-rtl" : "translated-ltr";
        a = [].concat(this.g); for (b = 0; b < a.length; ++b) mh(a[b]) && K(a[b], this.h) } x(bu, N);
    bu.prototype.K = function() { N.prototype.K.call(this);
        this.restore() };
    bu.prototype.restore = function() { for (var a = [].concat(this.g), b = 0; b < a.length; ++b) mh(a[b]) && qi(a[b], this.h) };

    function cu(a, b, c, d, e, f, h, k, l, m) { N.call(this);
        this.B = a;
        this.Fb = b;
        this.S = c || null;
        this.ra = m || null;
        this.H = null;
        this.Ra = !!d;
        this.gd = e || "transparent";
        this.Wb = !!f;
        this.J = [];
        this.kb = this.L = this.h = !1;
        this.l = k || new at;
        this.Lh = !k;
        this.da = h || Ko.ka();
        this.ab = new At;
        this.xa = this.oa = this.O = !1;
        this.bb = this.m = .5;
        this.jb = .01;
        this.C = new Lo(this.m);
        this.P = (this.A = this.V = !!l) ? new MutationObserver(A(this.li, this)) : null;
        this.j = this.g = null;
        O(window, Ha, this.pg, !0, this);
        O(window, $a, this.qg, !0, this) } x(cu, N);
    w = cu.prototype;
    w.nb = function() { return this.g ? this.g : "" };
    w.wa = function() { return this.j ? this.j : "" };
    w.Mh = function(a) { this.Ji.apply(this, arguments);
        this.o && this.o(0, !1, 1) };
    w.Xf = function(a) { this.Ki.apply(this, arguments);
        this.o && this.o(0, !1, 1) };
    w.Nh = function(a) { this.Li.apply(this, arguments);
        this.o && this.o(0, !1, 1) };
    w.Oh = function(a) { this.Mi.apply(this, arguments);
        this.o && this.o(0, !1, 1) };
    w.translate = function(a, b, c, d, e) { if (d || a != this.g || b != this.j) du(this), this.Lh && (this.l = new at);
        else if (this.h) return;
        this.o = c;
        this.hd = e;
        this.A = this.V;
        this.P && this.P.observe(document.body, { attributes: !0, childList: !0, characterData: !0, subtree: !0 });
        this.h = !0;
        this.g = a;
        this.j = b;
        this.Ra && (this.H = new au(a, b));
        this.xa = this.g == Ea;
        this.S && (c = this.S, a && (c.C = a), b && (c.B = b));
        this.ya = new bu(this.B, this.j);
        this.M = eu(this);
        (a = this.B instanceof Node ? this.B : null) && fu(a, this.j) };

    function eu(a) { var b = new dt(a, a.da);
        et(b, a.lg);
        gt(b, A(a.Mh, a));
        ht(b, new Jt(a.Fb, [].concat(a.B), a.da, a.o, a.A, a.hd)); return b } w.restore = function() { du(this);
        this.ab.restore(); var a = this.B instanceof Node ? this.B : null;
        a && fu(a, this.nb()) };
    w.K = function() { N.prototype.K.call(this);
        this.restore();
        Fj(window, Ha, this.pg, !0, this);
        Fj(window, $a, this.qg, !0, this) };

    function gu(a, b, c, d) { var e = a.l.cc(),
            f = new dt(a, b.B);
        b.C.push(f);
        ft(f, b.H);
        Mt(b, e);
        et(f, d || a.hg);
        b = c || new Xt([], [], b, a.nb(), a.wa(), a.kb, a.L, a.ra);
        gt(f, a.si, a);
        a.A && ft(f, b.Jf, b);
        ht(f, b) } w.si = function(a, b, c) { c.Jf();
        this.L ? this.Oh(a) : this.Nh(a);
        c.l.H() };
    w.qg = function() { this.O = !1;
        this.T = 0;
        Mo(this.C, this.m) };
    w.pg = function(a) { a.target == window && (this.O = !0, this.T = 0, Mo(this.C, .01)) };
    w.li = function(a) { if (this.h && this.A) { for (var b = 0; b < a.length; b++)
                if (a[b].target && a[b].target.className && typeof a[b].target.className === v && (0 <= a[b].target.className.indexOf(Yb) || 0 == a[b].target.className.indexOf("goog-"))) return;
                if (a[b].target && a[b].target.nodeValue && /^[0-9,/:-\s]+$/.test(a[b].target.nodeValue)) return;
            this.da.add(A(this.gj, this)) } };
    w.gj = function() { this.L = !0;
        this.M.stop();
        this.M = eu(this); return !1 };
    w.lg = function(a, b) { Kt(b, it(a));
        gu(this, b); return this.xi };
    w.xi = function(a, b) { if (!this.h) return kt; if (!jt(a)) return lt; if (!this.A)
            for (a = 0; a < this.J.length; ++a) { var c = A(this.Of, this, b, this.J[a]);
                b.B.add(c) }
        return this.wi };
    w.eg = function(a, b) {
        if (this.T && !this.O) { a = (new Date).getTime() - this.T; var c = this.m;
            900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
            this.m = c;
            this.oa ? this.jb = .01 : this.bb = this.m } this.L = this.h = !0;
        this.T = (new Date).getTime();
        this.Tf != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Tf = a, a = !0) : a = !1;
        a ? (this.oa = !1, this.m = this.bb, this.O || Mo(this.C, this.m), Lt(b, [].concat(this.B), this.C), a = new dt(this, this.C), et(a, this.lg), gt(a, A(this.Xf, this)), ht(a,
            b), this.M = a) : (this.oa = !0, this.m = this.jb, this.O || Mo(this.C, this.m), a = new dt(this, this.C), et(a, this.eg), gt(a, A(this.Xf, this)), ht(a, b), this.M = a);
        return kt
    };
    w.wi = function(a, b) { if (!this.h) return kt;
        this.L = this.h = !1;
        this.xa ? Nt(b, !0) : (Nt(b), b.V(b.l)); if (this.Wb) return this.eg; for (a = 0; a < b.C.length; ++a) b.C[a].stop(); for (a = 0; a < b.Aa.length; ++a) Go(b.S, b.Aa[a]); return kt };

    function hu(a, b, c) { a: { var d = iu(a),
                e = a.S,
                f = a.gd,
                h = a.ab.g;b = it(b); if (!c.L) { if (0 == c.T.length) { 0 == c.l && 0 == c.P && c.A(0, !0);
                    c = !1; break a } c.L = Pt(c, d, e, f, h) } c.oa = !0;ot(c.L, c.j, c.h, b);c = !0 } return c ? a.hg : a.xd }

    function iu(a) { return a.Ra ? A(a.H.m, a.H) : function() {} }
    w.hg = function(a, b) { if (!this.h) return kt; var c = b.l; if (null == c.g) { if (!c.oa) return hu(this, a, b.l); if (!jt(a)) return lt;
            c.oa = !1;
            c.g = c.L.Cc || null; var d = c.g ? c.g : c.L = null; if (!d) return hu(this, a, b.l);
            this.J.push(d); var e = d.ja(); if (this.l.has(e, !this.A) || null != b.L[e] && b.L[e]) return e = c.g.L, c.l += e, c.j -= e, c.g = null, this.A && St(b, d, !1), hu(this, a, b.l);
            this.l.g[d.ja()] = null } 0 < Rt(b) && Mo(this.C, .5);
        d = this.l.cc(); return Qt(c, b, d) ? this.xd : hu(this, a, b.l) };
    w.xd = function(a, b) { if (!this.h || 0 == Rt(b)) return kt;
        gu(this, b.l); return this.A ? (b.trackVisibility(it(a)), this.yi) : 0 == b.translate(a) ? kt : this.kg };
    w.yi = function(a, b) { return this.h ? jt(a) ? 0 == b.translate(a) ? kt : this.kg : lt : kt };
    w.Of = function(a, b) {
        b.l && this.l.remove(b.j);
        if (!this.h) return !1;
        if (this.l.has(b.ja(), !1)) { var c = this.l; if (c.has(b.j, !1)) { var d = b.j,
                    e = c.g[d];
                e || (e = c.h[d], c.g[d] = e);
                b.h = e;
                b.M = !0 } else c.remove(b.j), b.l = !0;
            Ys(b) } else if (c = this.l, b.l) c.remove(b.j);
        else if (b.B) {
            d = b.B.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
            b.M = !0;
            delete b.B;
            b.B = null;
            b.h = [];
            e = ah(document, Wa);
            M(e, !1);
            d = de(0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>");
            if (void 0 !== e.tagName) {
                if ("script" === e.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
                if ("style" === e.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
            }
            e.innerHTML = be(d);
            document.body.appendChild(e);
            d = [];
            var f;
            for (f = e.firstChild; f; f = f.nextSibling)
                if ("I" == f.tagName) var h = Xs(b, Ah(f), f.innerHTML);
                else if ("B" == f.tagName) {
                h || (h = Xs(b, "", ""));
                if (1 == b.g.length) bt(h.fa, d, 0, f);
                else {
                    var k = d;
                    var l = f;
                    var m = b.g;
                    h = h.fa;
                    for (var n = [], q = l.firstChild; q; q = t) { var t = q.nextSibling;
                        ct(q) }
                    for (t = l.firstChild; t; t = t.nextSibling) t.attributes && t.attributes.i ? (l = parseInt(t.attributes.i.nodeValue,
                        10), !isNaN(l) && 0 <= l && l < m.length && (m[l].Xd && n[l] ? n[l].Y += t.firstChild && 3 == t.firstChild.nodeType ? t.firstChild.nodeValue : Ah(t) : n[l] = bt(h, k, l, t))) : 3 == t.nodeType && h.push({ W: -1, Y: He(t.nodeValue) });
                    null != h && 0 < h.length && -1 == h[0].W && (1 == h.length ? h[0].W = 0 : (h[1].Y = h[0].Y + h[1].Y, h.shift()))
                }
                h = void 0
            }
            f = b.h;
            for (k = 0; k < f.length - 1; ++k) m = f[k], h = De(m.fa[m.fa.length - 1].Y), h = h.charCodeAt(h.length - 1), 12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.fa[m.fa.length - 1].Y += " ");
            ih(e);
            for (e = 0; e < b.g.length; ++e) e < d.length && e < b.C.length &&
                null != d[e] && (f = b.C[e], k = d[e].start, null != k && (m = f.substring(0, f.length - Ce(f).length), " " == m && (m = ""), m && (k.Y = m + Ce(k.Y))), k = d[e].end, null != k && (f = f.substring(De(f).length), " " == f && (f = ""), f && (k.Y = De(k.Y) + f)));
            1 != b.h.length || b.h[0].cf || (b.h[0].cf = b.j);
            c.write(b.j, b.h);
            Ys(b)
        }
        b.H || (this.xa = !1);
        c = b.l ? !0 : void 0;
        a.la += b.L;
        null != c && (a.ra = !0);
        b = Math.min(Math.floor(100 * a.la / a.l), 100);
        if (a.J != b || c) a.J = b, a.O ? (a.A(a.J, !0, c), a.V(a.la)) : a.A(a.J, !1, c);
        return !1
    };
    w.kg = function(a, b) {
        if (!this.h) return kt;
        if (!jt(a)) return lt;
        if (1 < Rt(b)) { a = b.m[0]; var c = b.h; if (a.j || 0 == c.length || null == a.g || 0 == a.g.length) a = null;
            else { for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) { var h = a.g[f];
                    h && h[0] && 200 == h[1] || (e.push(c[f]), d.push(a.m[f])) } a = 0 < e.length ? { hj: new Dt(d, !0), ij: e } : null } a = a ? new Xt([a.hj], a.ij, b.l, b.g, b.j, b.O, b.Aa, b.A) : null;
            null != a && gu(this, b.l, a, this.xd) } else { a = !1; for (c = 0; c < b.m.length; ++c) d = b.m[c], d.j || 200 == d.h && d.g && d.g[0] ? d = d.l = !1 : (d.j = !0, d = d.l = !0), a = d || a; if (a) return this.xd } d =
            this.nb();
        a = this.wa();
        if (1 < b.h.length)
            if (c = b.m[0], e = d == Ea, d = b.h, 200 == c.h)
                for (f = 0; f < c.g.length && f < d.length; ++f)
                    if ((h = c.g[f]) && 200 == h[1]) { var k = h[2],
                            l = d[f],
                            m = l,
                            n = null != k && k == a;
                        m.B = h[0];
                        void 0 !== n && (m.O = n);
                        l.H = e && null == k } else d[f].l = !0;
        else
            for (a = 0; a < d.length; ++a) d[a].l = !0;
        else {
            c = new Ct(d == Ea);
            for (d = 0; d < b.m.length; ++d) h = b.m[d], e = a, f = c, 200 == h.h && h.g && h.g[0] ? (h = h.g[0], f.g.push(h[0]), h = h[2], f.h = f.h && null != h && h == e, null != h && (f.l = !1)) : 500 != h.h && (f.j = !0);
            null != b.J && (c.g.push(b.J), b.J = null);
            if (a = b.h[0]) d = c.h,
                a.B = c.ja(), void 0 !== d && (a.O = d), a.H = c.l, a.l = c.j
        }
        if (this.A) { a = A(this.Of, this); for (c = 0; c < b.h.length; c++) a(b.l, b.h[c]); for (c = 0; c < b.C.length; c++) a(b.l, b.C[c]);
            Zt(b);
            b.la = !0;
            b.H && b.A && (b = b.A, 0 == --b.h && Vt(b.g)) }
        return kt
    };

    function du(a) { a.P && a.P.disconnect();
        a.ra && a.ra.reset();
        a.h && (a.M.stop(), a.h = !1, a.L = !1); if (a.J.length) { for (var b = 0; b < a.J.length; ++b) a.J[b].R();
            a.J = [] } null != a.H && (a.H.restore(), a.H = null);
        null != a.ya && (a.ya.restore(), a.ya = null) }

    function fu(a, b) { a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
        a.getAttribute("lang") && a.setAttribute("lang", b) } ho(3046, cu.prototype, { Ji: 1, Li: 2, Ki: 3, Mi: 4 });

    function ju(a, b, c, d, e, f, h, k, l, m, n) {
        N.call(this);
        this.O = b || null;
        this.T = !!c;
        this.H = d || "transparent";
        this.J = f || "";
        b = h || { fetchStart: 0, fk: 0 };
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.L = a && b ? b - a : 0;
        this.P = Date.now() - yn;
        this.o = !1;
        this.h = new Do(e || "", void 0, f, l, m, n);
        this.M = new Lo(1);
        this.A = new at;
        this.l = null;
        this.C = !0;
        this.m = null != z.IntersectionObserver;
        this.B = k || null;
        new xk(this);
        e = new On;
        f = new Qn(A(this.h.Ef, this.h, e.register()));
        this.td = Rn(f, e.delay(A(this.td, this)));
        this.pd = Rn(f, e.delay(A(this.pd, this)));
        this.Wd = Rn(f, e.delay(A(this.Wd, this)));
        this.restore = Rn(f, e.delay(A(this.restore, this)));
        f.finish();
        e.finish()
    }
    B(ju, N);
    ho(14097, ju.prototype, { Re: function() { Xn(this.h.j ? "te_afas" : "te_afau") } });
    w = ju.prototype;
    w.kj = function(a) { this.m = a };
    w.Ua = function() { return this.h.j };
    w.td = function(a, b) { if (this.h.Ua()) { var c = this.h,
                d = { alpha: !0 };
            b && (d.hl = b);
            c.m.send(d, a) } else this.Re(), a(null) };
    w.pd = function(a) { var b = document.documentElement.lang; if (b) a(b);
        else if (this.h.Ua()) { var c = new Ul(document.body, !1, !1, 1, 1);
            b = []; for (var d = 0, e = this.h.h.Bg; b.length + d < e;) { var f = c.next(); if (f.done) break;
                f = f.value;
                1 == c.g && yt(f) ? c.Bb() : 3 == f.nodeType && (f = pd(Ae(f.nodeValue))) && (b.push(f), d += f.length) } c = this.h;
            b = b.join(" ");
            a = c.h.zc(a);
            c.h.sa.send({ q: b.substring(0, c.h.Bg), sl: Ea, tl: "en" }, a) } else this.Re(), a(null, !0) };
    w.Wd = function(a, b, c, d, e) { var f = Date.now();
        jo(); if (!a || co(a, b)) a = Ea; if (e || a != this.g || b != this.j) this.A = new at;
        this.g = a;
        this.j = b;
        this.h.Ua() ? (d = d || document.documentElement, this.l && this.l.R(), this.B.reset(), this.l = new cu(d, this.h, this.O, this.T, this.H, !0, this.M, this.A, this.m, this.B), this.l.kb = this.o, this.C = !0, this.l.translate(a, b, c, e, A(this.Pi, this, f, a, b))) : (this.Re(), c(0, !1, !0)) };
    w.jh = function() { return !!this.l && this.l.h };
    w.Pg = function(a) { this.o = a };
    w.restore = function() { jo();
        this.h.Ua() && this.l && this.l.restore() };
    w.K = function() { ko();
        ju.G.K.call(this);
        this.h.R();
        this.l = this.h = null;
        this.A = new at };
    w.Pi = function(a, b, c, d) { this.C && (this.C = !1, b = { sl: b, tl: c, textlen: d }, this.o && (b.ctt = "1"), "" != this.J && (b.sp = this.J), b.ttt = Date.now() - a, b.ttl = this.P, this.L && (b.ttf = this.L), this.m && (b.sr = 1), Xn("te_time", b)) };

    function ku(a) { R.call(this, a);
        this.o = new xk(this) } x(ku, R);
    w = ku.prototype;
    w.I = function() { var a = Dh(this.h, "select");
        a.className = "goog-te-combo";
        a.setAttribute("aria-label", W.Kf);
        this.X(a) };
    w.U = function() { R.prototype.U.call(this);
        this.Wf() };
    w.Wf = function() { O(this.s(), Ma, Un(this, Ma));
        this.dispatchEvent(xb) };
    w.ea = function() { R.prototype.ea.call(this);
        this.o.R();
        this.o = null };

    function lu(a, b) { a.s().parentNode != b && (a.s().parentNode.removeChild(a.s()), b.appendChild(a.s())) }
    w.Pc = function(a) { this.h.Nc(this.s()); for (var b in a)
            if (a[b] !== Object.prototype[b]) { var c = this.h.I("OPTION", { value: b });
                this.h.fb(c, a[b]);
                this.s().appendChild(c) } this.s().selectedIndex = 0 };
    w.Ea = function() { return this.s().value };
    w.Ba = function(a) { if (this.s().value != a)
            for (var b = 0, c; c = this.s().options.item(b); ++b)
                if (c.value == a) { this.s().selectedIndex = b; break } };
    w.bd = function(a) { if ("undefined" == sc(a)) return this.s().options.item(this.s().selectedIndex).text; for (var b = 0, c; c = this.s().options.item(b); ++b)
            if (c.value == a) return c.text };
    w.qa = function(a) { this.s().disabled = !a };

    function mu(a) { ku.call(this, a) } x(mu, ku);
    mu.prototype.Ab = function(a) { this.Pc.call(this, a) };

    function nu(a, b) { ku.call(this, b);
        this.g = a && Zc(a) || {};
        this.g.hf = this.g.hf || 11;
        this.g.Td = 0 != this.g.Td;
        this.g.Va || (this.g.Va = Jn) } x(nu, ku);
    w = nu.prototype;
    w.ld = function() { throw Error("Not implemented."); };
    w.I = function() { this.ld();
        this.B = this.s();
        this.l = Zg(ma, { frameBorder: 0, "class": "goog-te-menu-frame skiptranslate", title: W.Kf });
        this.l.style.visibility = $b;
        M(this.l, !1);
        document.body.appendChild(this.l) };
    w.Wf = function() { var a = te.test(vn) ? Nb : "ltr",
            b = od(this.g.Va),
            c = T(this, "menuBody");
        this.o.D(this.l, xb, this.kh);
        Yn(this.l, A(function() { var d = sh(this.l); var e = ig(ia + H(zg(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + H(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + H(c) + '" class="goog-te-menu"></div></body>');
            e = vf(e);
            d.write(be(e));
            d.close() }, this)) };
    w.kh = function() { this.j = new Mg(sh(this.l));
        this.P = this.j.s(T(this, "menuBody"));
        this.o.D(this.B, Pa, this.He);
        D ? this.o.D(this.l, Ha, this.wd) : this.o.D(th(this.l), Ha, this.wd);
        this.dispatchEvent(xb) };
    w.ea = function() { ku.prototype.ea.call(this);
        ih(this.l);
        this.B = this.V = this.A = this.P = this.j = this.l = null };
    w.ig = function(a) { this.m != a.currentTarget.value && (this.Ba(a.currentTarget.value), this.dispatchEvent(Ma));
        this.wd() };
    w.He = function() { ou(this);
        th(this.l).focus();
        this.da = !0 };
    w.wd = function() { this.da && (this.da = !1, ou(this, !1), Yg(J(this.B)).focus()) };
    w.ef = function() {};
    w.ff = function() {};

    function ou(a, b) {
        if ("undefined" == typeof b || b) {
            a.ff();
            b = Gi(a.B, window);
            var c = b.y + a.B.offsetHeight,
                d = b.y - a.H.height,
                e = b.x,
                f = b.x + a.B.offsetWidth - a.H.width;
            if (D && !cg("7.0")) { var h = document.body;
                c -= h.offsetTop;
                d -= h.offsetTop;
                e -= h.offsetLeft;
                f -= h.offsetLeft } else h = Wg(document), c -= h.y, d -= h.y, e -= h.x, f -= h.x;
            h = Ug(window);
            b.y = b.y <= h.height - a.H.height ? c : d;
            b.y > h.height - a.H.height && (b.y = h.height - a.H.height);
            0 > b.y && (b.y = 0);
            te.test(vn) ? b.x = 0 <= f ? f : e : b.x = e <= h.width - a.H.width ? e : f;
            b.x > h.width - a.H.width && (b.x = h.width -
                a.H.width);
            0 > b.x && (b.x = 0);
            zi(a.l, b);
            M(a.l, !0);
            pu(a)
        } else a.ef(), M(a.l, !1)
    }
    w.Ea = function() { return this.m };
    w.Pc = function(a) {
        this.j.Nc(this.P);
        M(this.l, !0);
        this.oa = a;
        this.A = [];
        for (var b in a)
            if (a[b] !== Object.prototype[b])
                if ("---" == a[b]) { var c = { link: this.j.I(g, { className: "goog-te-menu2-separator", value: b }), Ei: !0 };
                    this.A.push(c) } else {
                    c = { link: this.j.I("A", { className: lb, href: ub, value: b }) };
                    this.A.push(c);
                    var d = this.j.I(g, { style: "white-space:nowrap" });
                    this.j.appendChild(c.link, d);
                    this.g.Td && this.j.appendChild(d, this.j.I(ra, { className: "indicator" }, "\u203a"));
                    this.j.appendChild(d, this.j.I(ra, { className: "text" },
                        a[b]));
                    this.o.D(c.link, Pa, this.ig)
                } a = this.A.length - 1;
        a = Math.round((a - a % this.g.hf) / this.g.hf) + 1;
        this.V = this.j.I("TABLE", { cellspacing: 0, cellpadding: 0, border: 0 });
        c = this.j.I("TBODY");
        b = this.j.I("TR", { valign: "top" });
        this.P.className = "goog-te-menu2";
        this.j.appendChild(this.P, this.V);
        this.j.appendChild(this.V, c);
        this.j.appendChild(c, b);
        for (d = c = 0; c < a; ++c) {
            var e = this.j.I("TD");
            this.j.appendChild(b, e);
            for (var f = 0; 11 > f && d < this.A.length; ++f, ++d) this.j.appendChild(e, this.A[d].link);
            c != a - 1 && (e = this.j.I("TD", { "class": "goog-te-menu2-colpad" },
                "\u00a0"), this.j.appendChild(b, e))
        }
        this.m = null;
        this.Ba(this.A[0].link.value);
        pu(this);
        M(this.l, !1)
    };
    w.bd = function(a) { return this.oa["undefined" == sc(a) ? this.m : a] };
    w.gf = function() {};
    w.Ba = function(a) { if (this.m != a) { this.bd(a) && (this.m = a, this.gf()); for (var b = 0; b < this.A.length; ++b) { var c = this.A[b];
                c.Ei || (c.link.className = c.link.value == a && this.g.Td ? lb : "goog-te-menu2-item") } } };

    function pu(a) { Pi(a.P, Oi(a.V));
        Pi(a.l, Oi(a.P));
        a.H = Oi(a.l) }

    function qu(a, b) { nu.call(this, a, b) } x(qu, nu);
    w = qu.prototype;
    w.ld = function() { var a = this.h.I("a", { "aria-haspopup": "true" });
        a.className = kb;
        a.href = ub;
        this.M = this.h.I(ra);
        a.appendChild(this.M);
        this.S = this.h.I("IMG", { src: sb, alt: "", style: "background-image:url(" + Gn + ");background-position:-14px 0px;border:none", width: 14, height: 14 });
        a.appendChild(this.S);
        this.X(a) };
    w.ef = function() { L(this.S, Ga, "-14px 0px") };
    w.ff = function() { L(this.S, Ga, "0px 0px") };
    w.ea = function() { nu.prototype.ea.call(this);
        this.S = this.M = null };
    w.gf = function() { this.h.fb(this.M, this.bd(this.m) || "") };
    w.Ab = function(a) { this.Pc.call(this, a) };

    function ru(a, b) { nu.call(this, a, b) } x(ru, nu);
    w = ru.prototype;
    w.ld = function() { var a = this.h.I("a", { "aria-haspopup": "true" });
        a.className = kb;
        a.href = ub;
        this.M = this.h.I(ra);
        a.appendChild(this.M);
        a.appendChild(this.h.I("IMG", { src: sb, alt: "", width: 1, height: 1 }));
        a.appendChild(this.h.I(ra, { style: "border-left:1px solid #bbb" }, "\u200b"));
        a.appendChild(this.h.I("IMG", { src: sb, alt: "", width: 1, height: 1 }));
        this.S = this.h.I("span", { style: "color:#767676", "aria-hidden": "true" }, "\u25bc");
        a.appendChild(this.S);
        this.X(a) };
    w.ef = function() { L(this.S, "color", "#9b9b9b") };
    w.ff = function() { L(this.S, "color", "#d5d5d5") };
    w.ea = function() { nu.prototype.ea.call(this);
        this.S = this.M = null };
    w.gf = function() { this.h.fb(this.M, this.bd(this.m) || "") };
    w.Ab = function(a) { this.Pc.call(this, a) };

    function su(a, b) { nu.call(this, a, b);
        this.g.Td = !1 } x(su, nu);
    su.prototype.ld = function() { var a = Dh(this.h, Wa);
        a.className = "goog-te-button"; var b = this.h.I(g, { style: "background: url(" + Fn + ") repeat-x 0 -39px" });
        a.appendChild(b);
        this.M = Dh(this.h, Ja);
        b.appendChild(this.M);
        this.X(a) };
    su.prototype.Og = function(a) { fh(this.M);
        this.M.appendChild(this.h.g.createTextNode(String(a + "\u00a0\u25bc"))) };
    su.prototype.ea = function() { nu.prototype.ea.call(this);
        this.M = null };
    su.prototype.ig = function(a) { this.Ba(a.currentTarget.value);
        this.dispatchEvent(Ma);
        this.wd() };

    function tu() { this.h = {};
        this.g = 0 } tu.prototype.j = function(a, b) { a = this.h[b]; if (!a) return b;
        b = "";
        a.tf && (b += "<" + a.tf + a.attributes + ">");
        a.Le && (b += a.Le);
        a.ye && (b += "</" + a.ye + ">"); return b };
    tu.prototype.tf = function(a, b) { ge(a); return uu(this, { tf: a, attributes: he(b) }) };
    tu.prototype.ye = function(a) { ge(a); return uu(this, { ye: a }) };
    tu.prototype.text = function(a) { return uu(this, { Le: Ge(a) }) };

    function uu(a, b) { a.g++; var c = "{SafeHtmlFormatter:" + a.g + "_" + Le() + "}";
        a.h[Ge(c)] = b; return c };

    function vu(a, b) { R.call(this, b);
        this.g = a && Zc(a) || {};
        this.j = new xk(this) } B(vu, R);
    var wu = { ak: 0, Ej: 1, Rj: 2 };
    w = vu.prototype;
    w.I = function() {
        var a = Dh(this.h, Wa);
        K(a, Pb);
        K(a, "goog-te-gadget");
        a.dir = te.test(vn) ? Nb : "ltr";
        M(a, !1);
        if (2 == this.g.Nb) { var b = Ir({ id: T(this, Sb), Lg: "", Kg: "" });
            xe(a, Hh(b)) } else {
            b = new tu;
            if (D && !cg("7.0")) var c = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + tb.replace(Gg, Eg) + "',sizingMethod='scale');\"></span>";
            else c = W.cd, c = '<img src="' + H(xg(tb)) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' +
                H(c) + '">';
            var d = W.cd;
            var e = ig('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + H(sg(rb)) + '" target="_blank">' + c + hg(d) + "</a></span>");
            c = W;
            d = c.th;
            e = vf(e);
            e = uu(b, { Le: be(e).toString() });
            c = d.call(c, e);
            d = Ge("SafeHtmlFormatter:");
            b = Ge(c).replace(new RegExp("\\{" + d + "[\\w&#;]+\\}", "g"), A(b.j, b, []));
            b = de(b);
            b = Ir({ id: T(this, Sb), Lg: "", Kg: 1 == this.g.Nb ? ie("\u00a0", "\u00a0", b) : b });
            xe(a, Hh(b))
        }
        this.X(a)
    };
    w.U = function() {
        vu.G.U.call(this);
        this.l = 2 == this.g.Nb ? new ru(null, this.h) : new mu(this.h);
        this.j.D(this.l, Ma, Un(this, Oa));
        this.j.D(this.l, xb, this.lh);
        var a = this.h.s(T(this, Sb));
        if (2 == this.g.Nb) { var b = this.h.I("IMG", { src: sb, "class": "goog-te-gadget-icon", alt: "" });
            b.style.backgroundImage = "url(" + Gn + ")";
            b.style.backgroundPosition = "-65px 0px"; var c = this.h.I(ra, { style: "vertical-align: middle" });
            a.appendChild(b);
            a.appendChild(c);
            this.l.ma(c);
            a.style.whiteSpace = "nowrap";
            a.className = "goog-te-gadget-simple" } else this.l.ma(a),
            1 == this.g.Nb && (a.style.display = "inline")
    };
    w.lh = function() { if (2 == this.g.Nb) { var a = this.l,
                b = this.h.s(T(this, Sb));
            a.o.ha(a.B, Pa, a.He);
            a.B = b;
            a.o.D(a.B, Pa, a.He) } this.dispatchEvent(xb) };
    w.ea = function() { vu.G.ea.call(this);
        this.j.R();
        this.j = null;
        this.l.R();
        this.l = null };
    w.wa = function() { return this.l.Ea() };
    w.Ga = function(a) { "" == a ? this.M && this.l.Ab(this.M) : this.H && this.l.Ab(this.H);
        this.l.Ba(a) };
    w.N = function(a) { M(this.s(), a) };
    w.qa = function(a) { this.l.qa(a) };
    w.qf = function(a, b) { this.M = a;
        this.H = b };

    function xu() { Lg() } xu.prototype.ma = function(a) { a({}, {}) };

    function yu(a, b) {
        a = b || {};
        b = a.id;
        var c = a.top,
            d = a.left,
            e = a.bottom,
            f = a.right;
        a = lg("." + Ag(a.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (ng(c) || mg(c, 0) ? "top:" + Ag(c) + "px; _top:expression((" + Ag(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (ng(d) || mg(d, 0) ? "left:" + Ag(d) + "px; _left:expression((" + Ag(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (ng(e) || mg(e, 0) ? "bottom:" +
            Ag(e) + "px; _top:expression((-" + Ag(e) + ca + String(b).replace(Gg, Eg) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (ng(f) || mg(f, 0) ? "right:" + Ag(f) + "px; _left:expression((-" + Ag(f) + ca + String(b).replace(Gg, Eg) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" :
            "right:auto;") + "}");
        return new Vd(a.toString(), Ud)
    };

    function zu(a, b) { R.call(this, b);
        this.g = a && Zc(a) || {};
        this.g.Va || (this.g.Va = Jn);
        this.j = new xk(this) } B(zu, R);
    var Au = { Uj: 1, Vj: 2, Aj: 3, zj: 4 };
    w = zu.prototype;
    w.I = function() { var a = Dh(this.h, Wa);
        this.na = !1;
        M(a, !1); var b = T(this, Sa);
        b = ig('<iframe id="' + H(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
        xe(a, Hh(b));
        this.X(a) };
    w.U = function() {
        zu.G.U.call(this);
        var a = te.test(vn) ? Nb : "ltr",
            b = od(this.g.Va),
            c = T(this, Yb);
        this.s().id = T(this, "floatContainer");
        var d = { id: this.s().id, className: "goog-te-ftab-float" };
        this.s().className += " goog-te-ftab-float";
        switch (this.g.od) {
            case 2:
                var e = db;
                d.top = 0;
                d.right = 20; break;
            case 3:
                e = cb;
                d.bottom = 0;
                d.right = 20; break;
            case 4:
                e = cb;
                d.bottom = 0;
                d.left = 20; break;
            default:
                e = db, d.top = 0, d.left = 20 } Ji(yu(new xu, d), this.s());
        this.A = this.h.s(T(this, Sa));
        this.j.D(this.A, xb, this.mh);
        Yn(this.A, A(function() {
            var f =
                sh(this.A);
            var h = e;
            var k = W.Mf;
            h = ig(ia + H(zg(b)) + '"></head><body class="goog-te-ftab ' + H(h) + '" scroll="no" style="overflow:hidden" dir="' + H(a) + '"><a id="' + H(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + H(xg(sb)) + aa + H(xg(Gn)) + ');background-position:-65px 0px"><span>' + hg(k) + "</span></a></body>");
            h = vf(h);
            f.write(be(h));
            f.close()
        }, this))
    };
    w.mh = function() { this.l = (new Mg(sh(this.A))).s(T(this, Yb));
        this.j.D(this.l, Pa, Un(this, "clk_trans"));
        M(this.s(), !0); var a = Oi(this.l);
        M(this.s(), !1);
        Pi(this.A, a);
        Pi(this.s(), a);
        this.dispatchEvent(xb) };
    w.ea = function() { zu.G.ea.call(this);
        this.j.R();
        this.j = null;
        ih(this.A);
        this.l = this.A = null };
    w.isVisible = function() { return this.na };
    w.N = function(a) { this.na = a;
        M(this.s(), a) };

    function Bu(a, b) { R.call(this, b);
        this.o = new xk(this);
        this.g = a && Zc(a) || {};
        this.g.Va || (this.g.Va = Jn);
        this.g.sf = !1;
        L(this.h.g.body, Hb, "relative");
        Lh || L(this.h.g.body, "minHeight", "100%");
        L(this.h.g.documentElement, "height", "100%");
        L(this.h.g.body, "top", "0px");
        D && (window._bannerquirkfixleft = -parseInt("0" + this.h.g.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.h.g.body.topMargin, 10) - 40) } B(Bu, R);
    w = Bu.prototype;
    w.ma = function() { var a = this.h.g.body.firstChild;
        Wk(this, a.parentNode, a) };
    w.I = function() { var a = Dh(this.h, Wa);
        this.na = !1;
        M(a, !1);
        K(a, Pb); var b = T(this, Sa);
        b = ig('<iframe id="' + H(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
        xe(a, Hh(b));
        this.X(a) };
    w.U = function() {
        Bu.G.U.call(this);
        var a = te.test(vn) ? Nb : "ltr",
            b = od(this.g.Va),
            c = T(this, "promptSection"),
            d = T(this, "confirm"),
            e = T(this, Ib),
            f = T(this, "progressValue"),
            h = T(this, "cancel"),
            k = T(this, "finishSection"),
            l = T(this, "restore"),
            m = T(this, "errorSection"),
            n = T(this, "errorContent"),
            q = T(this, "close"),
            t = T(this, "noAutoPopup"),
            y, F = [];
        this.g.sf && F.push(Hr({ id: T(this, Jb) }));
        F.push(Hr({ id: T(this, Kb) }));
        var Q = de(W.Dh.apply(null, F));
        F = [];
        this.g.sf && F.push(Hr({ id: T(this, Ya) }));
        F.push(Hr({ id: T(this, Za) }));
        var Oe = de(W.yh.apply(null,
            F));
        this.g.Ug && (y = this.g.Ug);
        this.A = this.h.s(T(this, Sa));
        this.o.D(this.A, xb, this.nh);
        Yn(this.A, A(function() {
            var Tc = sh(this.A);
            var ib = y;
            var Re = W.cd,
                Ru = W.Mf,
                Su = W.zh,
                Tu = W.yf,
                Uu = W.uh,
                Vu = W.zf,
                Wu = W.zf;
            ib = ig(ia + H(zg(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + H(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + H(sg(rb)) + '" class="goog-logo-link" target="_blank"><img src="' + H(xg("")) +
                '" alt="Google ' + H(Re) + '"></a></td>' + (ib ? '<td width=1><img src="' + H(xg(sb)) + '" width="9" height="15" title="' + H(ib) + '" alt="' + H(ib) + aa + H(xg(Gn)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + H(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + hg(Q) + ha + H(d) + '"><b>' + hg(Ru) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
                H(t) + '"></button></div></div></td></tr><tr id="' + H(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + hg(Su) + '&nbsp;<span dir="ltr">(<b id="' + H(f) + '"></b>%)</span>&nbsp;<img src="' + H(xg(In)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + H(h) + '">' + hg(Tu) + fa + H(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + hg(Oe) + ha + H(l) + '">' + hg(Uu) + fa + H(m) + '" style="display:none" valign=middle><td><span id="' +
                H(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td class="goog-te-banner-margin"></td><td width=1 id="options"></td><td width=1><a id="' + H(q) + '" class="goog-close-link" href="javascript:void(0)" title="' + H(Vu) + '"><img src="' + H(xg(sb)) + '" width="15" height="15" alt="' + H(Wu) + aa + H(xg(Gn)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
            ib = vf(ib);
            Tc.write(be(ib));
            Tc.close()
        }, this))
    };
    w.nh = function() {
        this.j = new Mg(sh(this.A));
        Cu(this, W.Af);
        if (this.g.Va == Jn) { var a = "url(" + Fn + ")";
            L(this.j.g.body, Fa, a); for (var b = this.j.g.getElementsByTagName(Ja), c = 0; c < b.length; ++c) { var d = b[c].parentNode;
                L(d, Fa, a);
                L(d, "backgroundRepeat", "repeat-x");
                L(d, Ga, "0 -39px") } } this.g.sf && (this.m = new qu(this.g, this.j));
        this.l = new qu(this.g, this.j);
        this.B = new su(this.g, this.j);
        this.o.D(this.j.s(T(this, "confirm")), Pa, Un(this, "clk_confirm"));
        this.o.D(this.j.s(T(this, "cancel")), Pa, Un(this, "clk_cancel"));
        this.o.D(this.j.s(T(this,
            "restore")), Pa, Un(this, "clk_restore"));
        this.o.D(this.j.s(T(this, "close")), Pa, Un(this, "clk_close"));
        this.P = this.j.s(T(this, "noAutoPopup"));
        this.o.D(this.P, Pa, Un(this, "clk_no_ap"));
        this.m && this.o.D(this.m, Ma, Un(this, "chg_src_lang"));
        this.o.D(this.l, Ma, Un(this, Oa));
        this.o.D(this.B, Ma, this.ni);
        a = new On(A(this.oh, this));
        this.m && this.o.D(this.m, xb, a.register());
        this.o.D(this.l, xb, a.register());
        this.o.D(this.B, xb, a.register());
        a.finish();
        this.m && this.m.ma(this.j.s(T(this, Jb)));
        this.l.ma(this.j.s(T(this,
            Kb)));
        this.B.ma(this.j.s("options"))
    };
    w.oh = function() { this.B.Og(W.rh);
        this.B.Pc({ turn_off_site: W.Bh, s1: "---", learn_more: W.qh });
        this.dispatchEvent(xb) };
    w.ni = function() { switch (this.B.Ea()) {
            case "learn_more":
                window.open(Mn, "_blank"); break;
            case "turn_off_site":
                this.dispatchEvent(Qa) } };
    w.ea = function() { this.N(!1);
        Bu.G.ea.call(this);
        this.o.R();
        this.o = null;
        this.m && (this.m.R(), this.m = null);
        this.l.R();
        this.l = null;
        this.B.R();
        this.B = null;
        ih(this.A);
        this.Bc = this.j = null };
    w.nb = function() { return this.m ? this.m.Ea() : "" };
    w.wa = function() { return this.l.Ea() };
    w.Qd = function(a) { this.m && this.m.Ba(a);
        this.S && this.S[a] && this.j.fb(this.P, W.Ah(this.S[a])) };
    w.Ga = function(a) { this.l.Ba(a) };

    function Du(a, b, c, d) { if (a.Bc != b) { a.Bc = b; if (0 == b) { a.m && lu(a.m, a.j.s(T(a, Jb))); if (a.M) { var e = a.wa();
                    a.l.Ab(a.M);
                    a.Ga(e) } lu(a.l, a.j.s(T(a, Kb))) } else 2 == b && (a.m && lu(a.m, a.j.s(T(a, Ya))), a.H && (e = a.wa(), a.l.Ab(a.H), a.Ga(e)), lu(a.l, a.j.s(T(a, Za))));
            e = {};
            e[-1] = a.j.s(T(a, "errorSection"));
            e[0] = a.j.s(T(a, "promptSection"));
            e[1] = a.j.s(T(a, Ib));
            e[2] = a.j.s(T(a, "finishSection")); for (var f in e) e[f] !== Object.prototype[f] && M(e[f], f == b) } c && a.N(!0);
        a.P.parentNode.parentNode.style.display = d ? "block" : r } w.isVisible = function() { return this.na };
    w.N = function(a) {
        if (this.na != a) {
            this.na = a;
            if (D) var b = parseInt("0" + this.h.g.body.leftMargin, 10),
                c = parseInt("0" + this.h.g.body.topMargin, 10);
            var d = "BackCompat" == this.h.g.compatMode;
            a ? (L(this.h.g.body, "top", "40px"), M(this.s(), !0), D && (cg("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.h.g.body.topMargin = c + 40)) : d ? (this.h.g.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) : (L(this.h.g.body,
                "top", "0px"), M(this.s(), !1), d && 40 <= c && (this.h.g.body.topMargin = c - 40))
        }
    };
    w.nf = function(a) { this.j.fb(this.j.s(T(this, "progressValue")), a) };

    function Cu(a, b) { a.j.fb(a.j.s(T(a, "errorContent")), b) } w.qf = function(a, b) { this.M = a;
        this.H = b;
        this.l.Ab(a) };

    function Eu(a, b) {
        N.call(this);
        sc(a) == v && (b = a, a = {});
        sc(b) == v && (b = Ng(document, String(b)));
        this.V = b;
        this.o = new xk(this);
        this.Pb = this.da = void 0;
        a = Object(a);
        this.m = Ea;
        !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
            b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
        this.g = { pe: b, Zf: !1, qe: null, fd: null, Me: [], Yf: [], Kh: !1, ic: !1, cb: "", ag: !1, Be: "", Nb: 0, Uf: !1 };
        this.xa = { Va: Jn, Ug: "https://" == En ? W.wh : null };
        this.S = { Va: Jn, od: null };
        a && ("autoDisplay" in a && (this.g.pe = this.g.pe && !!a.autoDisplay), "multilanguagePage" in a && (this.g.ic = !!a.multilanguagePage), "gaTrack" in a && (this.g.ag = !!a.gaTrack), "layout" in a && (this.g.Nb = a.layout), a.pageLanguage && (this.g.Od = Vn(a.pageLanguage)), a.includedLanguages && (this.g.Me = a.includedLanguages.split(",")),
            a.excludedLanguages && (this.g.Yf = a.excludedLanguages.split(",")), this.g.Od && (this.m = this.g.Od), a.key && (this.g.cb = a.key), a.gaId && (this.g.Be = a.gaId), this.S.od = Number(a.floatPosition) || this.S.od, "disableAutoTranslation" in a && (this.g.Uf = !!a.disableAutoTranslation), a.jwtToken && (this.da = new Bo(a.jwtToken)), a.jwtTokenProvider && (this.da = new Co(a.jwtTokenProvider)), a.translateErrorHandler && (this.Pb = a.translateErrorHandler));
        !this.g.Uf && Fu(this) && (this.g.Zf = !0);
        this.C = {};
        if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) &&
            a[2])
            for (this.C = {}, a = Fe(a[2]).split("|"), b = 0; b < a.length; ++b) { var c = a[b].split("=");
                c[0] && (this.C[c[0]] = c[1]) } this.oa = new Js({ cb: this.g.cb, Jb: 1, rf: !0, jk: Ln }, { client: Bn, u: window.location.href });
        this.J = new ju(void 0, this.oa, void 0, void 0, this.g.cb, void 0, void 0, new Wt, this.da, this.Pb);
        this.L = !1;
        this.o.D(window, "pagehide", this.R);
        this.O = new On(A(this.hi, this));
        this.H = new On(A(this.ki, this));
        this.T = new Qn(A(this.Fi, this));
        this.h = new Bu(this.xa);
        this.J.td(this.O.register(A(this.gi, this)), vn);
        this.V ? (this.l =
            new vu(this.g), this.o.D(this.l, xb, this.O.register()), this.o.D(this.l, Oa, Rn(this.T, this.H.delay(A(this.fi, this)))), this.l.ma(this.V)) : this.S.od && (this.A = new zu(this.S), this.o.D(this.A, xb, this.O.register()), this.o.D(this.A, "clk_trans", Rn(this.T, this.H.delay(A(this.ei, this)))), this.A.ma());
        !this.g.Od && this.g.Kh && this.J.pd(this.O.register(A(this.bi, this)));
        this.O.finish()
    }
    x(Eu, N);

    function Fu(a) {
        function b(f, h) { if (f = Fe(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) { if (f[3]) return h.g.qe = f[2], h.g.fd = f[3], !0; if (f[6]) return h.g.qe = f[5], h.g.fd = f[6], !0 } return !1 } var c = { url: function() { var f = window.location.href.match(/#.*googtrans(.*)/); return f && f[1] }, cookie: function() { var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/); return f && f[2] } },
            d; for (d in c)
            if (c[d] !== Object.prototype[d]) { var e = c[d](); if (e && b(e, a)) return d } return "" }

    function Gu(a, b) { for (var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
        c = ";domain=" + c.join(".");
        null != b ? a = a + "=" + b : (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
        a += ";path=/";
        document.cookie = a; try { document.cookie = a + c } catch (d) {} }

    function Hu(a, b) { var c = null;
        void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
        Gu("googtrans", c) } w = Eu.prototype;
    w.gi = function(a) { this.j = Vn(vn);
        this.M = a || {};
        this.B = {};
        this.P = {};
        a = !this.g.Me.length; var b = Nn(this.g.Me),
            c = Nn(this.g.Yf);
        this.B[vn] = "";
        this.P[vn] = ""; for (var d in this.M.tl) this.M.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.P[d] = this.M.tl[d], d == this.g.Od && !this.g.ic) || (this.B[d] = this.M.tl[d]);
        this.B[vn] || delete this.B[vn];
        this.P[vn] || delete this.P[vn];
        this.ra = Zc(this.M.sl) };
    w.bi = function(a) { a && (this.m = Vn(a)) };
    w.hi = function() {
        delete this.O;
        if (this.M) {
            this.m = this.m || this.g.qe;
            this.j = this.g.fd || this.j;
            var a = this.g.Zf || this.g.pe && this.m != this.j && !(this.m in zn) && "1" != this.C.os && "1" != this.C["o" + this.m];
            "zh-TW" == this.m && (this.m = "zh-CN");
            this.ra[this.m] || (a = !1, this.m = Ea);
            if (!this.B[this.j])
                if (a = !1, this.B.en) this.j = "en";
                else
                    for (var b in this.B)
                        if (this.B[b] !== Object.prototype[b]) { this.j = b; break } if (this.l) { var c = this.B,
                    d = { "": W.vh }; for (b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
                this.l.qf(d, this.P);
                this.l.Ga("") }!xn &&
                a ? this.g.fd ? Rn(this.T, this.H.delay(A(this.Sd, this, !0, !0))).call() : (this.L = !0, Rn(this.T, this.H.delay(A(this.Sd, this))).call(), Xn("te_ap", { sl: this.m })) : (this.A && this.A.N(!0), this.l && this.l.N(!0));
            window.google.translate.TranslateService && this.qa(!1);
            this.T.finish()
        }
    };
    w.ki = function() { var a = this.h,
            b = this.ra;
        a.m && a.m.Ab(b);
        a.S = b;
        this.h.qf(this.B, this.P);
        this.h.Qd(this.m);
        this.h.Ga(this.j);
        this.o.D(this.h, "clk_confirm", this.Vh);
        this.o.D(this.h, "clk_cancel", this.Uh);
        this.o.D(this.h, "clk_restore", this.Fe);
        this.o.D(this.h, "clk_close", this.vd);
        this.o.D(this.h, "clk_no_ap", this.Wh);
        this.o.D(this.h, Qa, this.Xh);
        this.o.D(this.h, "chg_src_lang", this.dg);
        this.o.D(this.h, Oa, this.dg);
        this.l && this.l.N(!0) };
    w.Fi = function() { this.o.D(this.h, xb, this.H.register());
        this.h.ma();
        this.H.finish() };
    w.K = function() { this.J.restore();
        N.prototype.K.call(this);
        this.J.R();
        this.o.R();
        this.o = null;
        this.h && this.h.R();
        this.h = null;
        this.A && this.A.R();
        this.A = null;
        this.l && this.l.R();
        this.V = this.l = null };
    w.Vh = function() {!this.h.isVisible() || !this.g.ic && co(this.m, this.h.wa()) || (this.L && Xn("te_apt", { sl: this.m }), Iu(this, !1), this.l && this.l.Ga(this.h.wa())) };
    w.Uh = function() { this.h.isVisible() && (Ju(this), Du(this.h, 0), this.l && this.l.Ga("")) };
    w.Fe = function() { this.h.isVisible() && (Ju(this), Du(this.h, 0));
        this.l && this.l.Ga("") };
    w.vd = function() { this.h.isVisible() && (this.L && (this.L = !1, Xn("te_apc", { sl: this.m })), Ju(this), this.h.N(!1), this.l && this.l.Ga(""), this.A && this.A.N(!0)) };
    w.Wh = function() { this.h.isVisible() && (this.C["o" + this.m] = "1", Xn("te_apr", { sl: this.m }), this.L = !1, this.vd()) };
    w.Xh = function() { if (this.h.isVisible()) { this.L = !1;
            this.C.os = "1"; var a = null; if (this.C) { a = []; for (var b in this.C) this.C[b] !== Object.prototype[b] && a.push(b + "=" + this.C[b]);
                a = a.join("|") } Gu("googtransopt", a);
            this.vd() } };
    w.dg = function() { this.h.isVisible() && (!this.g.ic && co(this.m, this.h.wa()) ? this.Fe() : (this.m = this.h.nb() || this.m, this.j = this.h.wa(), 2 == this.h.Bc && (this.l && this.l.Ga(this.h.wa()), Iu(this)))) };
    w.Sd = function(a, b) { this.h.isVisible() || (this.A && this.A.N(!1), a ? Iu(this, b) : Du(this.h, 0, !0, this.L)) };
    w.nj = function(a, b) { Rn(this.T, this.H.delay(A(this.Sd, this, a, b))).call() };
    w.ei = function() { this.Sd(2 == this.h.Bc) };
    w.fi = function() { this.l.wa() ? !this.g.ic && co(this.m, this.h.wa()) ? this.Fe() : (this.j = this.l.wa(), this.h.Ga(this.j), Iu(this)) : this.l.Ga(this.j) };

    function Iu(a, b) { if (window.google.translate.TranslateService) try { window.google.translate.TranslateService.getInstance().restore() } catch (c) {} Hu(a.m, a.j);
        a.L = !1;!b && a.m in zn && Xn("te_ape", { sl: a.m });
        a.h.nf(0);
        Du(a.h, 1, !0);
        a.J.Pg(!!b);
        window.setTimeout(A(a.J.Wd, a.J, a.g.ic ? Ea : a.m, a.j, A(a.ti, a), void 0, void 0), 0); if (a.g.ag && window._gaq && window._gat) try { a.g.Be ? window._gat._getTracker(a.g.Be)._trackEvent(la, "Translate", a.j) : window._gat._getTrackerByName()._trackEvent(la, "Translate", a.j) } catch (c) {} }
    w.ti = function(a, b, c) { typeof this.ya == p && this.ya();
        this.h.isVisible() && 1 == this.h.Bc && (c ? (Ju(this), Du(this.h, -1, !0), 2 == c ? Cu(this.h, W.ph) : Cu(this.h, W.Af)) : (this.h.nf(a), b && (this.l && this.l.Ga(this.j), this.h.Qd(this.m), Du(this.h, 2)))) };

    function Ju(a) { Hu();
        window.setTimeout(A(a.J.restore, a.J, null), 0) } w.qa = function(a) { a || this.vd();
        this.l && this.l.qa(a);
        this.A && this.A.N(a) };

    function Ku(a) { if (a && (a = String(a), a = a.split("."), a.length)) { for (var b = window, c = 0; c < a.length; ++c) { var d = a[c]; if (!(d && d in b)) return;
                b = b[d] } return b } };
    var Lu = Ku("google.translate.m");
    if (Lu)
        for (var Mu in W)
            if (W[Mu] !== Object.prototype[W[Mu]] && W[Mu]) { var Nu = W[Mu]();
                W[Mu] = Lu[Nu] ? Lu[Nu] : Vo }
    if (1 == An) {
        var Ou = null,
            Pu = function(a) {
                if (!Ou) {
                    var b, c, d, e;
                    a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers), (a = eo()) && (c = a));
                    a = 0;
                    if ("te_lib" == Bn || Of) a = 3;
                    Ou = new ju(void 0, new Js({ cb: b, Jb: a, rf: !0, trackVisibility: "tvis" == c }), void 0, void 0, b, c, d, new Wt, void 0, void 0, e);
                    Ou.constructor = function() {};
                    Ou.isAvailable = Ou.Ua;
                    Ou.getSupportedLanguages = Ou.td;
                    Ou.getPageLanguage = Ou.pd;
                    Ou.setClickThrough = Ou.Pg;
                    Ou.translatePage =
                        Ou.Wd;
                    Ou.restore = Ou.restore;
                    Ou.isTranslating = Ou.jh;
                    Ou.setCheckVisibility = Ou.kj
                }
                return Ou
            };
        Pu.getInstance = function() { return Ou };
        Cc("google.translate.TranslateService", Pu);
        Xn("te_li")
    } else {
        var Qu = null,
            Xu = function(a, b) { Qu || (Qu = new Eu(a, b), Qu.constructor = function() {}); return Qu };
        Xu.getInstance = function() { return Qu };
        Cc("google.translate.TranslateElement", Xu);
        Eu.prototype.dispose = Eu.prototype.R;
        Eu.prototype.showBanner = Eu.prototype.nj;
        Eu.prototype.setEnabled = Eu.prototype.qa;
        Cc("google.translate.TranslateElement.FloatPosition",
            Au);
        Au.TOP_LEFT = 1;
        Au.TOP_RIGHT = 2;
        Au.BOTTOM_RIGHT = 3;
        Au.BOTTOM_LEFT = 4;
        Cc("google.translate.TranslateElement.InlineLayout", wu);
        wu.VERTICAL = 0;
        wu.HORIZONTAL = 1;
        wu.SIMPLE = 2
    }(function() { for (var a in Object.prototype) { bd = function(d, e, f) { for (var h in d) d[h] !== Object.prototype[h] && e.call(f, d[h], h, d) }; break } var b = Bc(),
            c = Ku(wn);
        c && typeof c == p && (1 == An ? c() : function e() { var f = document.readyState; "undefined" == sc(f) || f == Ra || "interactive" == f || 2E4 <= Bc() - b ? c() : window.setTimeout(e, 500) }()) })();
}).call(window)
