!function() {
    "use strict";
    var e, n, t, r = {}, o = {};
    function i(e) {
        var n = o[e];
        if (void 0 !== n)
            return n.exports;
        var t = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(t.exports, t, t.exports, i),
        t.loaded = !0,
        t.exports
    }
    i.m = r,
    i.amdO = {},
    e = [],
    i.O = function(n, t, r, o) {
        if (!t) {
            var a = 1 / 0;
            for (s = 0; s < e.length; s++) {
                t = e[s][0],
                r = e[s][1],
                o = e[s][2];
                for (var u = !0, c = 0; c < t.length; c++)
                    (!1 & o || a >= o) && Object.keys(i.O).every((function(e) {
                        return i.O[e](t[c])
                    }
                    )) ? t.splice(c--, 1) : (u = !1,
                    o < a && (a = o));
                if (u) {
                    e.splice(s--, 1);
                    var l = r();
                    void 0 !== l && (n = l)
                }
            }
            return n
        }
        o = o || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > o; s--)
            e[s] = e[s - 1];
        e[s] = [t, r, o]
    }
    ,
    i.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(n, {
            a: n
        }),
        n
    }
    ,
    i.d = function(e, n) {
        for (var t in n)
            i.o(n, t) && !i.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: n[t]
            })
    }
    ,
    i.f = {},
    i.e = function(e) {
        return Promise.all(Object.keys(i.f).reduce((function(n, t) {
            return i.f[t](e, n),
            n
        }
        ), []))
    }
    ,
    i.u = function(e) {
        return "public/js/" + e + "." + {
            DevTools: "0c6d35267b09bbc16db5",
            Interdiction: "945a4ca5e28efea8d90e",
            GlobalSearchDesktop: "c0035f75859b1a3bb9b2"
        }[e] + ".chunk.js"
    }
    ,
    i.miniCssF = function(e) {
        return "public/stylesheets/" + e + "." + {
            DevTools: "157b36354b1f1182a08f",
            Interdiction: "b8b8505deaf9f619489f",
            GlobalSearchDesktop: "dd88679a5f9a25bc4045"
        }[e] + ".chunk.css"
    }
    ,
    i.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    i.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e
    }
    ,
    i.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    n = {},
    t = "loginapp-alt-signon:",
    i.l = function(e, r, o, a) {
        if (n[e])
            n[e].push(r);
        else {
            var u, c;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), s = 0; s < l.length; s++) {
                    var f = l[s];
                    if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == t + o) {
                        u = f;
                        break
                    }
                }
            u || (c = !0,
            (u = document.createElement("script")).charset = "utf-8",
            u.timeout = 120,
            i.nc && u.setAttribute("nonce", i.nc),
            u.setAttribute("data-webpack", t + o),
            u.src = e,
            0 !== u.src.indexOf(window.location.origin + "/") && (u.crossOrigin = "anonymous"),
            u.integrity = i.sriHashes[a],
            u.crossOrigin = "anonymous"),
            n[e] = [r];
            var d = function(t, r) {
                u.onerror = u.onload = null,
                clearTimeout(h);
                var o = n[e];
                if (delete n[e],
                u.parentNode && u.parentNode.removeChild(u),
                o && o.forEach((function(e) {
                    return e(r)
                }
                )),
                t)
                    return t(r)
            }
              , h = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: u
            }), 12e4);
            u.onerror = d.bind(null, u.onerror),
            u.onload = d.bind(null, u.onload),
            c && document.head.appendChild(u)
        }
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    i.p = "/auth/static/ui/loginaltsignon/",
    i.sriHashes = {
        DevTools: "sha256-vbpl+9awSF5+zNG49qR9y6oa+iu5Gg+wrfy3aRwCkE8= sha384-qVQpulyKPyChbizRKH8a9OaVm9pnVhZv1uAXDSDhHxsCxibIToYYXOFhGXFTbFqC",
        Interdiction: "sha256-6qPW2G5T5+Lto7JzNHFVjbCdm8sCrNVEoZJjWQ03nXQ= sha384-luHhxVID0ErRvTSFfotRxUkmCz1S42PNvFHmtdShckrNBSDvWeYcx/q4lbte84lK",
        GlobalSearchDesktop: "sha256-nfSLL9pKb7Ifv1W3YAdCHxFAWzti710nIdvf7Tp9cv0= sha384-7bNXPg6QqLhNFq/PqEt0AXncZRaTIZqj3RRHcgr7yNvECXdmyYH1Ol6BMv3KZ5ZY"
    },
    function() {
        if ("undefined" != typeof document) {
            var e = function(e) {
                return new Promise((function(n, t) {
                    var r = i.miniCssF(e)
                      , o = i.p + r;
                    if (function(e, n) {
                        for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                            var o = (a = t[r]).getAttribute("data-href") || a.getAttribute("href");
                            if ("stylesheet" === a.rel && (o === e || o === n))
                                return a
                        }
                        var i = document.getElementsByTagName("style");
                        for (r = 0; r < i.length; r++) {
                            var a;
                            if ((o = (a = i[r]).getAttribute("data-href")) === e || o === n)
                                return a
                        }
                    }(r, o))
                        return n();
                    !function(e, n, t, r, o) {
                        var a = document.createElement("link");
                        a.rel = "stylesheet",
                        a.type = "text/css",
                        i.nc && (a.nonce = i.nc),
                        a.onerror = a.onload = function(t) {
                            if (a.onerror = a.onload = null,
                            "load" === t.type)
                                r();
                            else {
                                var i = t && t.type
                                  , u = t && t.target && t.target.href || n
                                  , c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + u + ")");
                                c.name = "ChunkLoadError",
                                c.code = "CSS_CHUNK_LOAD_FAILED",
                                c.type = i,
                                c.request = u,
                                a.parentNode && a.parentNode.removeChild(a),
                                o(c)
                            }
                        }
                        ,
                        a.href = n,
                        0 !== a.href.indexOf(window.location.origin + "/") && (a.crossOrigin = "anonymous"),
                        t ? t.parentNode.insertBefore(a, t.nextSibling) : document.head.appendChild(a)
                    }(e, o, null, n, t)
                }
                ))
            }
              , n = {
                runtime: 0
            };
            i.f.miniCss = function(t, r) {
                n[t] ? r.push(n[t]) : 0 !== n[t] && {
                    DevTools: 1,
                    Interdiction: 1,
                    GlobalSearchDesktop: 1
                }[t] && r.push(n[t] = e(t).then((function() {
                    n[t] = 0
                }
                ), (function(e) {
                    throw delete n[t],
                    e
                }
                )))
            }
        }
    }(),
    function() {
        var e = {
            runtime: 0
        };
        i.f.j = function(n, t) {
            var r = i.o(e, n) ? e[n] : void 0;
            if (0 !== r)
                if (r)
                    t.push(r[2]);
                else if ("runtime" != n) {
                    var o = new Promise((function(t, o) {
                        r = e[n] = [t, o]
                    }
                    ));
                    t.push(r[2] = o);
                    var a = i.p + i.u(n)
                      , u = new Error;
                    i.l(a, (function(t) {
                        if (i.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0),
                        r)) {
                            var o = t && ("load" === t.type ? "missing" : t.type)
                              , a = t && t.target && t.target.src;
                            u.message = "Loading chunk " + n + " failed.\n(" + o + ": " + a + ")",
                            u.name = "ChunkLoadError",
                            u.type = o,
                            u.request = a,
                            r[1](u)
                        }
                    }
                    ), "chunk-" + n, n)
                } else
                    e[n] = 0
        }
        ,
        i.O.j = function(n) {
            return 0 === e[n]
        }
        ;
        var n = function(n, t) {
            var r, o, a = t[0], u = t[1], c = t[2], l = 0;
            if (a.some((function(n) {
                return 0 !== e[n]
            }
            ))) {
                for (r in u)
                    i.o(u, r) && (i.m[r] = u[r]);
                if (c)
                    var s = c(i)
            }
            for (n && n(t); l < a.length; l++)
                o = a[l],
                i.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return i.O(s)
        }
          , t = self.webpackChunkloginapp_alt_signon = self.webpackChunkloginapp_alt_signon || [];
        t.forEach(n.bind(null, 0)),
        t.push = n.bind(null, t.push.bind(t))
    }()
}();
