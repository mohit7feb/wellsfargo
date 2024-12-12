"use strict";
(self.webpackChunkloginapp_alt_signon = self.webpackChunkloginapp_alt_signon || []).push([["main"], {
    43963: function(A, e, t) {
        t.r(e);
        t(71673)
    },
    41402: function(A, e, t) {
        var n = t(96540)
          , r = t(40961)
          , a = t(1489)
          , v = t(56847)
          , f = t(71673)
          , P = t(10467)
          , l = t(5544)
          , X = t(54756)
          , u = t.n(X)
          , d = t(61225)
          , s = t(91173)
          , D = t(40145)
          , g = t(80407)
          , w = t(14875)
          , c = t(57443)
          , N = n.createContext()
          , b = (0,
        P.A)(u().mark((function A() {
            var e, t, n, r, a, v, P, l;
            return u().wrap((function(A) {
                for (; ; )
                    switch (A.prev = A.next) {
                    case 0:
                        return A.next = 2,
                        (0,
                        f.eg)((0,
                        f.zQ)().pageData);
                    case 2:
                        return n = A.sent,
                        r = (0,
                        f.zQ)().viewName,
                        A.next = 6,
                        (0,
                        f.eg)((0,
                        f.zQ)().errorMessageText);
                    case 6:
                        return a = A.sent,
                        A.next = 9,
                        (0,
                        f.eg)((0,
                        f.zQ)().lifestyleImageMapJson);
                    case 9:
                        return v = A.sent,
                        P = (0,
                        f.zQ)().lifestyleImagePath,
                        l = {
                            displayTitle: null === (e = a.errorMessageData) || void 0 === e ? void 0 : e.displayTitle,
                            messageText: null === (t = a.errorMessageData) || void 0 === t ? void 0 : t.messagetext,
                            errorCode: (0,
                            f.zQ)().errorCode
                        },
                        A.abrupt("return", {
                            pageData: n,
                            viewName: r,
                            errorMessage: l,
                            lifestyleImageObj: v,
                            lifestyleImagePath: P
                        });
                    case 13:
                    case "end":
                        return A.stop()
                    }
            }
            ), A)
        }
        )))
          , B = t(58168)
          , m = t(64467)
          , i = (t(50113),
        t(52675),
        t(2008),
        t(51629),
        t(62062),
        t(62010),
        t(83851),
        t(81278),
        t(79432),
        t(26099),
        t(23500),
        t(85843))
          , o = t(36058)
          , y = t(45547)
          , z = t(4063)
          , H = t(13260)
          , p = t(37535)
          , Q = (t(28706),
        t(24652))
          , C = t(98896)
          , x = t(16673)
          , j = t(88606)
          , O = t(39885)
          , L = t(20494)
          , k = t(62488)
          , W = t(25514)
          , T = t(60732)
          , I = t(2720)
          , V = {
            BrandedLogoBar: "CustomFusionMenu__BrandedLogoBar___ZDVjf",
            small: "CustomFusionMenu__small___FoQVV",
            center: "CustomFusionMenu__center____pfKE",
            dc: "CustomFusionMenu__dc___LMFfd",
            menuIconButton: "CustomFusionMenu__menuIconButton___zlX0D",
            sac: "CustomFusionMenu__sac___paZ13",
            ModalCloseIcon: "CustomFusionMenu__ModalCloseIcon___UhGLs",
            overlay: "CustomFusionMenu__overlay___D4Je7",
            drawerContainer: "CustomFusionMenu__drawerContainer___jIUgc",
            mm: "CustomFusionMenu__mm___QYFuF",
            menuContainer: "CustomFusionMenu__menuContainer___jfzwC",
            hiddenButton: "CustomFusionMenu__hiddenButton___Vn9gx",
            masthead: "CustomFusionMenu__masthead___vjW3G",
            searchEnroll: "CustomFusionMenu__searchEnroll___ZayEG"
        }
          , J = function() {
            var A, e = (0,
            n.useState)(!1), t = (0,
            l.A)(e, 2), r = t[0], a = t[1], v = (0,
            H.A)(), P = (0,
            c.A)().getString, X = (0,
            k.A)(), u = (0,
            n.useContext)(W.A).menuItems, s = (0,
            n.useContext)(z.A).getContainer, D = (0,
            d.wA)(), g = (0,
            f.lw)({
                styles: V,
                classes: ["menuContainer", v]
            }), w = (0,
            f.lw)({
                styles: V,
                classes: ["searchEnroll", v]
            }), N = (0,
            f.lw)({
                styles: V,
                classes: ["drawerContainer", v]
            }), b = (0,
            f.lw)({
                styles: V,
                classes: ["overlay", v]
            }), B = (0,
            f.lw)({
                styles: V,
                classes: ["hiddenButton", v]
            }), i = (0,
            f.lw)({
                styles: V,
                classes: ["ModalCloseIcon"],
                brand: X
            }), o = (0,
            f.lw)({
                styles: V,
                classes: ["menuIconButton", v],
                brand: X
            }), y = function() {
                a(!1)
            }, J = function(A) {
                return function() {
                    y(),
                    (0,
                    O.A)({
                        dispatch: D,
                        link: A
                    })
                }
            }, q = function(A) {
                var e = A.label
                  , t = A.onClick
                  , r = (0,
                I.Ay)({
                    buttonMap: (0,
                    m.A)({}, I.M3, t)
                });
                return n.createElement("li", null, n.createElement("a", {
                    ref: r,
                    role: "link",
                    tabIndex: "0"
                }, e))
            }, G = null === (A = s("HAMBURGER_MENU")) || void 0 === A || null === (A = A.sections[0]) || void 0 === A ? void 0 : A.links, Z = null == G ? void 0 : G.filter((function(A) {
                return "ENROLL" === A.navigationId
            }
            ))[0], E = null == G ? void 0 : G.filter((function(A) {
                return "SEARCH" === A.navigationId
            }
            ))[0];
            return n.createElement(n.Fragment, null, n.createElement(Q.A, {
                onClick: function() {
                    a(!0)
                },
                ariaLabel: "".concat(P("global.navigation.menu"), ", ").concat(P("global.opensDialog")),
                className: o
            }, r ? n.createElement(L.A, {
                className: i
            }) : n.createElement(j.A, null)), n.createElement(T.A, {
                position: "right",
                isOpen: r,
                onClose: y,
                containerStyle: N,
                overlayClassName: b
            }, n.createElement(Q.A, {
                className: B,
                onClick: y,
                ariaLabel: P("global.close")
            }), n.createElement("div", {
                className: g
            }, (E || Z) && n.createElement("div", {
                className: w
            }, E && n.createElement(p.A.Provider, {
                value: {
                    includeSearch: !0
                }
            }, n.createElement(x.A, null)), Z && n.createElement(C.A, null)), n.createElement("ul", null, null == u ? void 0 : u.filter((function(A) {
                return A.label
            }
            )).filter((function(A) {
                return "ENROLL" !== A.navigationId
            }
            )).filter((function(A) {
                return "SEARCH" !== A.navigationId
            }
            )).map((function(A, e) {
                return n.createElement(q, {
                    key: "".concat(A.label, "-").concat(e),
                    label: A.label,
                    link: A,
                    onClick: J(A)
                })
            }
            ))))))
        };
        function q(A, e) {
            var t = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(A);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function G(A) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? q(Object(t), !0).forEach((function(e) {
                    (0,
                    m.A)(A, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach((function(e) {
                    Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return A
        }
        var Z = function(A) {
            return "ENROLL" === (null == A ? void 0 : A.navigationId) ? n.createElement(v.A, {
                layout: !0,
                horizontal: !0,
                center: !0
            }, n.createElement(o.A, {
                width: "14px",
                height: "20px"
            }), n.createElement(v.A, {
                pl: "xs"
            }, A.label)) : A.label
        }
          , E = function() {
            return n.createElement(p.A.Provider, {
                value: {
                    includeSearch: !0
                }
            }, n.createElement(y.A, null))
        }
          , M = function(A) {
            var e = (0,
            f.zQ)()
              , t = e.uiOrigin
              , r = void 0 === t ? "" : t
              , a = e.devicePlatform
              , v = function() {
                var A = (0,
                d.wA)()
                  , e = (0,
                n.useContext)(z.A)
                  , t = e.getContainer
                  , r = e.navigate;
                return {
                    linkFinder: function(A) {
                        var e, n = A.container, r = A.section;
                        return null === (e = t(n)) || void 0 === e || null === (e = e.sections) || void 0 === e || null === (e = e.find((function(A) {
                            var e = A.name;
                            return r === e
                        }
                        ))) || void 0 === e ? void 0 : e.links
                    },
                    makeNavigate: function(e) {
                        return function() {
                            return r({
                                dispatch: A,
                                link: e
                            })
                        }
                    },
                    getContainer: t
                }
            }()
              , P = v.linkFinder
              , X = v.makeNavigate
              , u = v.getContainer
              , s = (0,
            H.A)()
              , D = (0,
            n.useState)("")
              , g = (0,
            l.A)(D, 2)
              , w = g[0]
              , c = g[1]
              , N = !("7M" !== a && "small" !== s && "medium" !== s)
              , b = ("cob" === r || "divested" === r || "wfa" === r || "goToRewards" === r) && !0;
            (0,
            n.useEffect)((function() {
                if (N) {
                    var A, e = u("HAMBURGER_MENU"), t = null == e || null === (A = e.sections[0]) || void 0 === A || null === (A = A.links) || void 0 === A ? void 0 : A.map((function(A) {
                        return G(G({}, A), {}, {
                            navigate: X(A),
                            label: Z(A)
                        })
                    }
                    ));
                    c(t)
                } else {
                    var n, r = null === (n = P({
                        container: "MASTHEAD_NAV",
                        section: "MAIN"
                    })) || void 0 === n ? void 0 : n.map((function(A) {
                        return G(G({}, A), {}, {
                            navigate: X(A),
                            label: Z(A)
                        })
                    }
                    ));
                    b && (null == r || r.push({
                        component: E
                    })),
                    c(r)
                }
            }
            ), [N, b]);
            var m, o, y;
            return w && n.createElement(i.A, (0,
            B.A)({}, A, {
                menuItems: w,
                mastheadMenu: N ? J : null,
                subLogoLink: (m = P({
                    container: "MASTHEAD_NAV",
                    section: "MAIN"
                })[0],
                o = P({
                    container: "MASTHEAD_NAV",
                    section: "SUB"
                }),
                y = o ? o[0] : "",
                {
                    url: m.url,
                    navigate: X(y)
                })
            }))
        }
          , S = "FETCH_QRCODE"
          , Y = "SET_QR_RESPONSE"
          , U = "SET_FIDO_RESPONSE"
          , R = "SET_UN_PLACEHOLDER"
          , F = "SET_CAPSLOCK_ON"
          , K = function(A) {
            return {
                type: Y,
                payload: A
            }
        }
          , h = function(A) {
            return {
                type: R,
                payload: A
            }
        }
          , _ = function(A) {
            return {
                type: F,
                payload: A
            }
        }
          , $ = t(61991)
          , AA = t(73441)
          , eA = t(1726)
          , tA = t(74353)
          , nA = t.n(tA)
          , rA = "SignOnCopyRight__copyright___up0wO"
          , aA = function() {
            return n.createElement(v.A, {
                className: rA
            }, "© 1999 - ".concat(nA()().year(), " "), n.createElement("span", {
                lang: "en"
            }, "Wells Fargo Clearing Services, LLC."))
        }
          , vA = {
            footer: "SACSignOnFooter__footer___sJuQP",
            onlineRegistered: "SACSignOnFooter__onlineRegistered___H3xl7"
        }
          , fA = function(A) {
            var e = A.footerConfig
              , t = A.className
              , r = (0,
            AA.lw)({
                styles: vA,
                classes: ["footer"],
                className: t
            });
            return n.createElement(v.A, {
                layout: !0,
                horizontal: !0,
                centered: !0,
                className: r
            }, n.createElement($.A, null, n.createElement(v.A, null, n.createElement(v.A, {
                className: vA.onlineRegistered
            }, "Wells Fargo Online®"), n.createElement(eA.A, {
                links: e.sections[0].links
            }), n.createElement(aA, null))))
        }
          , PA = function(A) {
            var e = A.className
              , t = (0,
            (0,
            n.useContext)(z.A).getContainer)("FOOTER");
            return t ? n.createElement(fA, {
                className: e,
                footerConfig: t
            }) : null
        }
          , lA = "Main__pageContainer___IOaj3"
          , XA = t(89767)
          , uA = t(56044)
          , dA = t(97755)
          , sA = t(37096)
          , DA = t(37426)
          , gA = {
            disclosure: "SignOnDisclosures__disclosure___yfK65"
        }
          , wA = function() {
            var A = (0,
            n.useContext)(N).nnmSwitch
              , e = (0,
            n.useState)("")
              , t = (0,
            l.A)(e, 2)
              , r = t[0]
              , a = t[1]
              , v = (0,
            f.zQ)().cmsEntries;
            (0,
            n.useEffect)((function() {
                null != v && v.footnotedisclosure && A && (0,
                f.eg)(v.footnotedisclosure).then((function(A) {
                    a(A)
                }
                ))
            }
            ), []);
            var P = (0,
            XA.A)()
              , X = (0,
            f.lw)({
                styles: gA,
                classes: ["disclosure"],
                device: P
            });
            return r ? n.createElement("div", {
                className: X
            }, n.createElement(DA.A, {
                id: "footnotedisclosure",
                cmsData: r
            })) : null
        }
          , cA = t(28464)
          , NA = t(60543)
          , bA = t(77046)
          , BA = t(10944)
          , mA = t(24020)
          , iA = {
            errorMessageContainer: "ErrorMessage__errorMessageContainer___bq38X",
            desktop: "ErrorMessage__desktop___fHjsJ",
            mobile: "ErrorMessage__mobile___l4MQg",
            errorMessageText: "ErrorMessage__errorMessageText___G0chy"
        }
          , oA = function(A) {
            var e = A.pageLevelUiError
              , t = (0,
            XA.A)()
              , r = (0,
            c.A)().getString
              , a = (0,
            n.useState)({})
              , v = (0,
            l.A)(a, 2)
              , P = v[0]
              , X = v[1]
              , u = r("global.message.error")
              , s = (0,
            d.d4)((function(A) {
                return A.app.loginReducer
            }
            ), d.bN).pageErrorId
              , D = void 0 === s ? "" : s;
            (0,
            n.useEffect)((function() {
                (0,
                f.eg)((0,
                f.zQ)().errorMessageText).then((function(A) {
                    var e;
                    A.errorMessageData && (e = {
                        messageText: A.errorMessageData.messagetext,
                        errorCode: (0,
                        f.zQ)().errorCode
                    },
                    X(e))
                }
                ))
            }
            ), []),
            (0,
            n.useEffect)((function() {
                X(e ? {
                    messageText: e
                } : {
                    messageText: ""
                })
            }
            ), [e]),
            (0,
            n.useEffect)((function() {
                if (D) {
                    var A = r(D);
                    X({
                        messageText: A
                    })
                }
            }
            ), [D]);
            var g, w = (0,
            f.lw)({
                styles: iA,
                classes: ["errorMessageContainer"],
                device: t
            });
            return P.messageText ? n.createElement("div", {
                className: w,
                "data-testid": "errorMessage"
            }, n.createElement(BA.A, {
                type: "page",
                level: "emergency"
            }, n.createElement("div", null, n.createElement("div", {
                dangerouslySetInnerHTML: (g = P.messageText,
                {
                    __html: bA.A.sanitize(g)
                }),
                className: iA.errorMessageText
            }), P.errorCode && n.createElement("span", null, "(".concat(P.errorCode, ")")))), n.createElement(mA.A, {
                message: "".concat(u, ". ").concat(P.messageText),
                "aria-live": "polite"
            })) : null
        }
          , yA = t(32298)
          , zA = t(3477)
          , HA = t(5917)
          , pA = function() {
            return (0,
            (0,
            c.A)().getString)("loginApp.login.downloadApp.heading")
        }
          , QA = function() {
            return (0,
            (0,
            c.A)().getString)("loginApp.login.downloadApp.content")
        }
          , CA = function() {
            var A = (0,
            n.useContext)(HA.A).close
              , e = (0,
            n.useContext)(N).nativeDownloadLink
              , t = (0,
            c.A)().getString;
            return n.createElement(yA.A, null, n.createElement(Q.A, {
                buttonType: "primary",
                "data-testid": "getTheApp",
                onClick: function() {
                    window.open(e)
                }
            }, t("loginApp.login.downloadApp.button.getTheApp")), n.createElement(Q.A, {
                buttonType: "secondary",
                "data-testid": "noThanks",
                onClick: A
            }, t("loginApp.login.downloadApp.button.noThanks")))
        }
          , xA = function() {
            var A = (0,
            n.useContext)(N).nativeDownloadPopup
              , e = void 0 !== A && A
              , t = (0,
            n.useState)(e)
              , r = (0,
            l.A)(t, 2)
              , a = r[0]
              , v = r[1]
              , P = (0,
            f.zQ)().devicePlatform;
            return n.createElement(n.Fragment, null, "7M" === P && a && n.createElement(zA.A, {
                isOpen: a,
                close: function() {
                    v(!1)
                },
                header: pA,
                content: QA,
                footer: CA
            }))
        }
          , jA = function() {
            var A = (0,
            n.useState)("")
              , e = (0,
            l.A)(A, 2)
              , t = e[0]
              , r = e[1]
              , a = (0,
            c.A)().getString;
            return (0,
            n.useEffect)((function() {
                var A = new Date(Date.now()).getHours();
                r(A >= 3 && A <= 11 ? "loginApp.login.salutationMorningTitle" : A >= 12 && A <= 17 ? "loginApp.login.salutationAfternoonTitle" : "loginApp.login.salutationEveningTitle")
            }
            ), []),
            n.createElement(n.Fragment, null, a(t))
        }
          , OA = {
            "floating-container": "FloatingPage__floating-container___eisjJ",
            desktop: "FloatingPage__desktop___HERT8",
            mobile: "FloatingPage__mobile___UaGdc",
            qrCodeContainer: "FloatingPage__qrCodeContainer___FDNlY",
            subTitle: "FloatingPage__subTitle___dXWGR",
            salutationTitle: "FloatingPage__salutationTitle___WuPLY",
            heading: "FloatingPage__heading___m3xcM",
            "floating-mobileView": "FloatingPage__floating-mobileView___WuvdL"
        }
          , LA = function(A) {
            var e = A.pageLevelError
              , t = A.showQRCode
              , r = A.pageTitleId
              , a = A.children
              , P = t && r
              , l = (0,
            XA.A)()
              , X = ["floating-container"];
            t && X.push("qrCodeContainer");
            var u = (0,
            f.lw)({
                styles: OA,
                classes: X,
                device: l
            });
            return n.createElement("div", {
                className: "".concat(u, " antiClickjackContent"),
                "data-testid": "floatingPage"
            }, n.createElement(oA, {
                pageLevelUiError: e
            }), n.createElement(v.A, {
                centered: !0,
                className: OA.salutationTitle
            }, n.createElement(cA.A, {
                className: OA.heading
            }, n.createElement(jA, null), n.createElement("span", {
                "data-testid": "pageTitle",
                className: OA.subTitle
            }, n.createElement(NA.A, {
                id: P
            })))), n.createElement(v.A, null, a), n.createElement(xA, null))
        }
          , kA = t(16063)
          , WA = t(84631)
          , TA = t(6012)
          , IA = t(34901)
          , VA = (t(42762),
        t(83514))
          , JA = t(77127)
          , qA = t(4026)
          , GA = t(94509)
          , ZA = t(11340)
          , EA = t(2903)
          , MA = "CaptchaPayload__captchaWrapper___FoQ0x"
          , SA = "CaptchaPayload__nucaptcha-container___bAnKZ"
          , YA = "CaptchaPayload__verboseLabelWrapper___VNjSW"
          , UA = "CaptchaPayload__nucaptcha-media-buttons___VMXnJ"
          , RA = "CaptchaPayload__nucaptcha-media___fjcTh"
          , FA = "CaptchaPayload__nucaptcha-buttons___mFuIE"
          , KA = "CaptchaPayload__new-challenge____nnPH"
          , hA = "CaptchaPayload__player-mode___QSgqx"
          , _A = "CaptchaPayload__nucaptcha-answer-wrapper___bYpw0"
          , $A = function(A) {
            var e = (0,
            f.zQ)().ndHtml || ""
              , t = (0,
            c.A)().getString
              , r = t("loginApp.login.captchaPlaceholder.audioChallenge")
              , a = t("loginApp.login.captchaPlaceholder.visualChallenge")
              , v = t("loginApp.login.captchaPlaceholder.verboseLabel")
              , P = t("loginApp.login.captchaPlaceholder.answerInputLabel");
            function l(A) {
                var e = document.getElementById("nucaptcha-answer");
                e && e.setAttribute("placeholder", A)
            }
            var X = (0,
            n.useCallback)((function(A) {
                A.target.pause(),
                A.target.removeEventListener("play", X),
                setTimeout((function() {
                    A.target.play()
                }
                ), 5e3),
                document.getElementById("nucaptcha-answer").focus()
            }
            ), [])
              , u = (0,
            n.useCallback)((function(e) {
                var t = document.getElementById("player-mode")
                  , n = document.getElementById("new-challenge")
                  , r = document.getElementById("nucaptcha-answer")
                  , a = document.getElementById("nucaptcha-media")
                  , v = e.currentTarget.activeElement.id || e.target.id
                  , f = e.which || e.keyCode;
                if ("player-mode" === e.currentTarget.activeElement.id && t ? 32 === f && t.click() : "new-challenge" === e.currentTarget.activeElement.id && n && 32 === f && n.click(),
                (13 === f || 32 === f && a) && a.addEventListener("play", X),
                "nucaptcha-answer" === v && r) {
                    var P = e.currentTarget.activeElement.value || e.target.value;
                    setTimeout((function() {
                        A.keyPressInCaptcha(f + P)
                    }
                    ), 100)
                }
            }
            ), [X, A])
              , d = (0,
            n.useCallback)((function(e) {
                l(document.querySelector("#media-container audio") ? r : a),
                "player-mode" !== e.currentTarget.activeElement.id && "new-challenge" !== e.currentTarget.activeElement.id || (document.getElementById("nucaptcha-media").focus(),
                document.getElementById("nucaptcha-media").addEventListener("play", X),
                A.keyPressInCaptcha(""))
            }
            ), [r, X, A, a])
              , s = '\n    ${PlayerStart}\n    <div id="'.concat(SA, '" role="group" aria-labelledby="verbose-label-wrapper">\n        <div id="verbose-label-wrapper" class="').concat(YA, '">').concat(v, '</div>\n        <div id="').concat(UA, '">\n            <div id="').concat(RA, '">\n                ${Media}\n            </div>\n            <div id="').concat(FA, '">\n                <span\n                  id="').concat(hA, '"\n                >\n                  ${CommandPlayerMode}\n                </span>\n                <span\n                  id="').concat(KA, '"\n                >\n                  ${CommandNewChallenge}\n                </span>\n            </div>\n        </div>\n        <div id="').concat(_A, '">\n          <label id="nucaptcha-input-label" for="nucaptcha-answer">').concat(P, '</label>\n          <input\n            id="nucaptcha-answer"\n            placeholder="').concat(a, '"\n            class="nucaptcha-answer"\n            name="nucaptcha-answer"\n            title=""\n            type="text"\n            maxlength="64"\n            aria-required="true"\n            autocomplete="off"\n            iprname="ndinputat"\n            aria-labelledby="nucaptcha-input-label"\n          />\n        </div>\n    </div>\n    ${PlayerEnd}\n  ');
            return (0,
            n.useEffect)((function() {
                var A = document.createElement("script");
                A.async = !1,
                A.text = s,
                A.id = "nucaptcha-template",
                A.type = "text/x-nucaptcha-template",
                document.head.appendChild(A);
                var t = (0,
                f.HY)(e);
                return "" !== t.trim() && function(A, e, t) {
                    var n = document.getElementById(A);
                    t && (n.innerHTML = bA.A.sanitize("")),
                    n.insertAdjacentHTML("beforeend", e);
                    for (var r = n.getElementsByTagName("script"); r.length; ) {
                        var a = r[0];
                        a.parentNode.removeChild(a);
                        var v = document.createElement("script");
                        a.src ? v.src = a.src : a.textContent ? v.textContent = a.textContent : a.innerText && (v.innerText = a.innerText);
                        var f = a.getAttribute("nonce") || a.nonce;
                        null != f && "" !== f && v.setAttribute("nonce", f),
                        document.body.appendChild(v)
                    }
                }("captchaContainer", t, !0),
                function() {
                    document.head.removeChild(A)
                }
            }
            ), [e, s]),
            (0,
            n.useEffect)((function() {
                return document.addEventListener("keydown", u),
                document.addEventListener("click", d),
                function() {
                    document.removeEventListener("keydown", u),
                    document.removeEventListener("click", d)
                }
            }
            ), [d, u]),
            n.createElement("section", {
                className: MA,
                id: "captchaContainer",
                "data-testid": "capatcha-payload"
            })
        }
          , Ae = t(60436)
          , ee = t(33125)
          , te = t(44992)
          , ne = t(70354)
          , re = t(91054)
          , ae = t(4464)
          , ve = "DownloadNativeAppModal__rectangleBar___tzurg"
          , fe = "DownloadNativeAppModal__verticalbar___rxSC6"
          , Pe = "DownloadNativeAppModal__modal___bHccp"
          , le = "DownloadNativeAppModal__heading___EMsRW"
          , Xe = "DownloadNativeAppModal__lottieImage___QFt87"
          , ue = "DownloadNativeAppModal__overlayClassName___tSxnN"
          , de = "DownloadNativeAppModal__disclosure___CeW34"
          , se = "DownloadNativeAppModal__content___f63RU"
          , De = "DownloadNativeAppModal__ratings___BfCHu"
          , ge = "DownloadNativeAppModal__downloads___DzVrb"
          , we = "DownloadNativeAppModal__buttonWrapper___b9GlS"
          , ce = "DownloadNativeAppModal__button___xbFe0"
          , be = function(A) {
            var e = A.setModalDismissed
              , t = (0,
            n.useContext)(N).displayNativeModal
              , r = (0,
            n.useState)(t)
              , a = (0,
            l.A)(r, 2)
              , f = a[0]
              , P = a[1];
            return n.createElement(ae.A, {
                isOpen: f,
                header: function() {
                    return n.createElement(v.A, {
                        "data-testid": "wf-Modal-basic-header"
                    })
                },
                content: function() {
                    var A = (0,
                    c.A)().getString
                      , e = (0,
                    n.useContext)(N).modalUrl
                      , t = {
                        downloads: A("loginApp.login.downloadNativeApp.downloads"),
                        rating: 4.9,
                        stars: 5
                    };
                    return n.createElement(v.A, {
                        "data-testid": "wf-modal-basic-content",
                        className: Pe
                    }, n.createElement(v.A, {
                        centered: !0,
                        layout: !0,
                        vertical: !0,
                        p: "b"
                    }, n.createElement(v.A, {
                        className: le
                    }, n.createElement(cA.A, {
                        "data-testid": "downloadNativeApp-heading",
                        level: 2
                    }, n.createElement(NA.A, {
                        id: "loginApp.login.downloadNativeApp.header"
                    }))), n.createElement(v.A, {
                        my: "s",
                        className: se
                    }, n.createElement(re.A, {
                        id: "loginApp.login.downloadNativeApp.content"
                    })), n.createElement(v.A, {
                        centered: !0
                    }, n.createElement("span", {
                        className: ge
                    }, t.downloads), n.createElement("span", {
                        className: fe
                    }), n.createElement("span", {
                        className: De
                    }, t.rating, n.createElement("span", {
                        className: "visuallyHidden"
                    }, A("loginApp.login.downloadNativeApp.rating.arialabel"))), n.createElement("span", {
                        className: fe
                    }), (0,
                    Ae.A)(Array(t.stars)).map((function(e, t) {
                        return n.createElement(ne.A, {
                            key: t,
                            image: A("loginApp.login.downloadNativeApp.rating.stars.arialabel")
                        })
                    }
                    ))), n.createElement(v.A, {
                        mt: "m",
                        className: we
                    }, n.createElement(te.A, {
                        onClick: function() {
                            window.open(e),
                            P(!1)
                        },
                        className: ce
                    }, n.createElement(NA.A, {
                        id: "loginApp.login.downloadNativeApp.CTA"
                    })))), n.createElement("div", {
                        className: Xe,
                        "aria-hidden": "true"
                    }, n.createElement(ee.Ay, {
                        animationData: Ne
                    })))
                },
                footer: function() {
                    return n.createElement(n.Fragment, null, n.createElement(v.A, {
                        className: de,
                        layout: !0,
                        vertical: !0
                    }, n.createElement(re.A, {
                        id: "loginApp.login.downloadNativeApp.legal.disclosure"
                    }), n.createElement(NA.A, {
                        id: "loginApp.login.downloadNativeApp.ratings.disclosure"
                    })), n.createElement("div", {
                        className: ve
                    }))
                },
                close: function() {
                    P(!1),
                    e(!0)
                },
                overlayClassName: ue
            })
        }
          , Be = {
            passwordField: "PasswordLoginForm__passwordField___At8Ad",
            checkboxLabel: "PasswordLoginForm__checkboxLabel___P0crz",
            containerWrap: "PasswordLoginForm__containerWrap___lvV0L",
            eyeIconButton: "PasswordLoginForm__eyeIconButton___Nc5UE",
            checkbox: "PasswordLoginForm__checkbox___KZFnG",
            checked: "PasswordLoginForm__checked___CO3wd",
            usernameBlock: "PasswordLoginForm__usernameBlock___HQvQ7",
            placeholderClassName: "PasswordLoginForm__placeholderClassName___mU3wr",
            usernameFieldDiv: "PasswordLoginForm__usernameFieldDiv___wrEoh",
            usernameField: "PasswordLoginForm__usernameField___72rqA",
            clearIcon: "PasswordLoginForm__clearIcon___PdhmN",
            buttonContainer: "PasswordLoginForm__buttonContainer___E69mo",
            signOnButton: "PasswordLoginForm__signOnButton___LNWOU",
            sacButton: "PasswordLoginForm__sacButton___kvqRk",
            disabled: "PasswordLoginForm__disabled___P9O46",
            text: "PasswordLoginForm__text___aaQlT"
        }
          , me = function(A) {
            var e = (0,
            f.zQ)().uiOrigin
              , t = void 0 === e ? "" : e
              , r = "sac" === t.toLowerCase() ? Be.sacButton : ""
              , a = "divested" === t ? "secondary" : "primary"
              , v = (0,
            f.AA)("loginApp.login.button.signOn");
            return n.createElement(n.Fragment, null, n.createElement("div", {
                className: Be.buttonContainer
            }, n.createElement(Q.A, {
                buttonType: a,
                onClick: A.handleSubmit,
                className: r,
                "data-testid": "signon-button",
                disabled: A.disabled
            }, v)))
        }
          , ie = t(54889)
          , oe = function(A) {
            var e = A.fieldId
              , t = A.value
              , r = void 0 === t ? "" : t
              , a = A.showWhen;
            return void 0 === a || a ? n.createElement(JA.A, {
                formId: "signOnForm",
                fieldId: e,
                value: r
            }, n.createElement(ie.A, {
                id: e
            })) : null
        }
          , ye = function(A) {
            var e = A.savedUsername
              , t = A.modalDismissed
              , r = (0,
            d.d4)((function(A) {
                return A.app.loginReducer
            }
            )).fidoAssertions
              , a = void 0 === r ? "" : r
              , v = (0,
            n.useContext)(N)
              , f = v.origin
              , P = void 0 === f ? "" : f
              , l = v.loginParams
              , X = void 0 === l ? {} : l
              , u = v.samlPrefix
              , s = void 0 === u ? "" : u
              , D = v.pcg
              , g = void 0 === D ? "" : D
              , w = v.ndfc
              , c = void 0 === w ? "" : w
              , b = v.ndlvl
              , B = void 0 === b ? "" : b
              , m = v.cancelUrl
              , i = void 0 === m ? "" : m
              , o = v.guid
              , y = void 0 === o ? "" : o
              , z = v.sourceApp
              , H = void 0 === z ? "" : z
              , p = v.langPref
              , Q = void 0 === p ? "" : p
              , C = v.encryptedIndex
              , x = void 0 === C ? "" : C
              , j = v.encryptedToken
              , O = void 0 === j ? "" : j
              , L = v.landingPage
              , k = void 0 === L ? "" : L
              , W = v.alppage
              , T = void 0 === W ? "" : W
              , I = v.user_id
              , V = void 0 === I ? "" : I
              , J = v.ASDE_DEST
              , q = void 0 === J ? "" : J
              , G = v.sde_allParams
              , Z = void 0 === G ? "" : G
              , E = v.paramMap
              , M = void 0 === E ? {} : E
              , S = v.segmentation
              , Y = void 0 === S ? "" : S
              , U = v.code
              , R = void 0 === U ? "" : U
              , F = v.requestId
              , K = void 0 === F ? "" : F
              , h = v.fse
              , _ = void 0 === h ? "" : h
              , $ = v.request
              , AA = void 0 === $ ? "" : $
              , eA = v.SAMLRequest
              , tA = void 0 === eA ? "" : eA
              , nA = v.RelayState
              , rA = void 0 === nA ? "" : nA
              , aA = v.forceJsonResponse
              , vA = void 0 === aA ? "" : aA
              , fA = v.forceDTSToken
              , PA = void 0 === fA ? "" : fA
              , lA = v.marketChannel
              , XA = void 0 === lA ? "" : lA
              , uA = v.depmSwitch
              , dA = void 0 !== uA && uA;
            return n.createElement(n.Fragment, null, n.createElement(oe, {
                fieldId: "origin",
                value: P
            }), n.createElement(oe, {
                fieldId: "jsenabled",
                value: "true"
            }), n.createElement(oe, {
                fieldId: "userPrefs"
            }), n.createElement(oe, {
                fieldId: "serviceType",
                value: X.serviceType,
                showWhen: !(!X || !X.serviceType)
            }), n.createElement(oe, {
                fieldId: "signonContext",
                value: X.signonContext,
                showWhen: !(!X || !X.signonContext)
            }), n.createElement(oe, {
                fieldId: "cid",
                value: X.campaignId,
                showWhen: !(!X || !X.campaignId)
            }), n.createElement(oe, {
                fieldId: "txnID",
                value: X.txnID,
                showWhen: !(!X || !X.txnID)
            }), n.createElement(oe, {
                fieldId: "signerID",
                value: X.signerID,
                showWhen: !(!X || !X.signerID)
            }), n.createElement(oe, {
                fieldId: "widgetLangPref",
                value: X.widgetLangPref,
                showWhen: !(!X || !X.widgetLangPref)
            }), n.createElement(oe, {
                fieldId: "destination",
                value: X.destination,
                showWhen: !(!X || !X.destination)
            }), n.createElement(oe, {
                fieldId: "type",
                value: X.type,
                showWhen: !(!X || !X.type)
            }), n.createElement(oe, {
                fieldId: "samlPrefix",
                value: s,
                showWhen: !!s
            }), n.createElement(oe, {
                fieldId: "pcg",
                value: g,
                showWhen: !!g
            }), n.createElement(oe, {
                fieldId: "ndfc",
                value: c,
                showWhen: !!c
            }), n.createElement(oe, {
                fieldId: "ndlvl",
                value: B,
                showWhen: !!B
            }), n.createElement(oe, {
                fieldId: "cancelUrl",
                value: i,
                showWhen: !!i
            }), n.createElement(oe, {
                fieldId: "guid",
                value: y,
                showWhen: !!y
            }), n.createElement(oe, {
                fieldId: "sourceApp",
                value: H,
                showWhen: !!H
            }), n.createElement(oe, {
                fieldId: "langPref",
                value: Q,
                showWhen: !!Q
            }), n.createElement(oe, {
                fieldId: "encryptedIndex",
                value: x,
                showWhen: !!x
            }), n.createElement(oe, {
                fieldId: "encryptedToken",
                value: O,
                showWhen: !!O
            }), n.createElement(oe, {
                fieldId: "landingPage",
                value: k,
                showWhen: !!k
            }), n.createElement(oe, {
                fieldId: "alppage",
                value: T,
                showWhen: !!T
            }), n.createElement(oe, {
                fieldId: "user_id",
                value: V,
                showWhen: !!V
            }), n.createElement(oe, {
                fieldId: "ASDE_DEST",
                value: q,
                showWhen: !!q
            }), n.createElement(oe, {
                fieldId: "sde_allParams",
                value: Z,
                showWhen: !!Z
            }), n.createElement(oe, {
                fieldId: "save-username",
                value: e
            }), Object.keys(M).map((function(A, e) {
                return n.createElement(oe, {
                    fieldId: A,
                    value: M[A],
                    key: "parammap" + e
                })
            }
            )), n.createElement(oe, {
                fieldId: "segmentation",
                value: Y,
                showWhen: !!Y
            }), n.createElement(oe, {
                fieldId: "code",
                value: R,
                showWhen: !!R
            }), n.createElement(oe, {
                fieldId: "requestId",
                value: K,
                showWhen: !!K
            }), n.createElement(oe, {
                fieldId: "fse",
                value: _,
                showWhen: !!_
            }), n.createElement(oe, {
                fieldId: "request",
                value: AA,
                showWhen: !!AA
            }), n.createElement(oe, {
                fieldId: "SAMLRequest",
                value: tA,
                showWhen: !!tA
            }), n.createElement(oe, {
                fieldId: "RelayState",
                value: rA,
                showWhen: !!rA
            }), n.createElement(oe, {
                fieldId: "forceJsonResponse",
                value: vA,
                showWhen: !!vA
            }), n.createElement(oe, {
                fieldId: "forceDTSToken",
                value: PA,
                showWhen: !!PA
            }), n.createElement(oe, {
                fieldId: "marketChannel",
                value: XA,
                showWhen: !!XA
            }), n.createElement(oe, {
                fieldId: "modalDismissed",
                value: t,
                showWhen: t
            }), a && n.createElement(n.Fragment, null, n.createElement(oe, {
                fieldId: "fidoAuthType",
                value: a
            }), n.createElement(oe, {
                fieldId: "authType",
                value: "FIDO"
            })), dA && n.createElement("input", {
                type: "hidden",
                "data-testid": "wf_bc_cs_id",
                id: "wf_bc_cs_id",
                name: "bcsid"
            }))
        }
          , ze = t(9328)
          , He = {
            panel: "Panel__panel___dFjGF",
            desktop: "Panel__desktop___zgpFr",
            panelFooter: "Panel__panelFooter___y4us0",
            mobile: "Panel__mobile___hGEJL"
        }
          , pe = function() {
            var A = (0,
            XA.A)()
              , e = (0,
            n.useContext)(N).oamPasswordResetUrl
              , t = (0,
            f.lw)({
                styles: He,
                classes: ["panelFooter"],
                device: A
            })
              , r = (0,
            f.lw)({
                styles: He,
                classes: ["panel"],
                device: A
            });
            return n.createElement(v.A, {
                layout: !0,
                horizontal: !0,
                centered: !0,
                className: r,
                el: "section",
                "data-testid": "panel-container"
            }, n.createElement(ze.A, {
                href: e,
                indicator: !0,
                indicatorType: "common",
                className: t,
                "data-testid": "forgotUsernamePassword"
            }, n.createElement(NA.A, {
                id: "loginApp.login.label.forgotUsernamePassword"
            })))
        }
          , Qe = t(19413)
          , Ce = function(A) {
            return n.createElement(Qe.A, A, n.createElement("path", {
                d: "M6 7.66683C8.02505 7.66683 9.66667 6.02521 9.66667 4.00016C9.66667 1.97512 8.02505 0.333496 6 0.333496C3.97496 0.333496 2.33334 1.97512 2.33334 4.00016C2.33334 6.02521 3.97496 7.66683 6 7.66683Z"
            }), n.createElement("path", {
                d: "M15.9232 7.6124C15.9249 7.08662 15.7904 6.56999 15.5336 6.1165C15.2768 5.66301 14.9071 5.28931 14.4632 5.03445C14.0194 4.77958 13.5176 4.65291 13.0103 4.66766C12.5031 4.68241 12.0089 4.83805 11.5796 5.11832C11.1502 5.39858 10.8014 5.79318 10.5695 6.26088C10.3377 6.72858 10.2313 7.25222 10.2615 7.77707C10.2918 8.30192 10.4575 8.80872 10.7414 9.24452C11.0254 9.68031 11.417 10.0291 11.8755 10.2544V14.7417L13.0898 15.9998L15.1136 13.903L13.8993 12.6449L15.1136 11.3867L14.1098 10.3467C14.643 10.1336 15.1014 9.75837 15.425 9.2704C15.7486 8.78242 15.9223 8.20446 15.9232 7.6124ZM13.0898 7.6124C12.9297 7.6124 12.7732 7.56321 12.6401 7.47104C12.507 7.37888 12.4032 7.24789 12.3419 7.09463C12.2807 6.94137 12.2646 6.77272 12.2959 6.61002C12.3271 6.44732 12.4042 6.29787 12.5174 6.18057C12.6306 6.06327 12.7749 5.98339 12.9319 5.95103C13.0889 5.91866 13.2517 5.93527 13.3996 5.99875C13.5475 6.06224 13.674 6.16974 13.7629 6.30767C13.8519 6.4456 13.8993 6.60777 13.8993 6.77365C13.8993 6.9961 13.8141 7.20944 13.6622 7.36673C13.5104 7.52403 13.3045 7.6124 13.0898 7.6124Z"
            }), n.createElement("path", {
                d: "M9.68 8.7885C9.03022 8.48892 8.32682 8.3339 7.61538 8.3335H5.07692C3.73044 8.3335 2.4391 8.88662 1.487 9.87119C0.534889 10.8558 0 12.1911 0 13.5835V15.3335H11V10.5122C10.4294 10.0589 9.97591 9.46678 9.68 8.7885Z"
            }))
        };
        Ce.defaultProps = {
            width: "16px",
            height: "16px",
            viewBox: "0 0 16 16"
        };
        var xe = Ce
          , je = "passkeyLogin__passkeyLoginCont___puVRN"
          , Oe = "passkeyLogin__orString___WAimW"
          , Le = "passkeyLogin__passkeyCreateText___DWnY5"
          , ke = "passkeyLogin__passkeyContent___lwGEs"
          , We = "passkeyLogin__secButton___qFv7j"
          , Te = function(A) {
            return n.createElement("div", {
                className: je
            }, n.createElement("div", {
                className: Oe
            }, n.createElement(re.A, {
                id: "loginApp.login.passkey.or"
            })), n.createElement(te.A, {
                onClick: A.handlePasskeyLoginClick,
                "data-testid": "passkeyLogin-button",
                type: "button",
                className: We
            }, n.createElement(xe, null), n.createElement(re.A, {
                id: "loginApp.login.passkey.buttonLabel"
            })), n.createElement(v.A, {
                centered: !0,
                className: Le
            }, n.createElement("span", {
                className: ke
            }, n.createElement(re.A, {
                id: "loginApp.login.passkey.create"
            }))))
        }
          , Ie = t(34422)
          , Ve = t(72190)
          , Je = t(62101)
          , qe = t(84404)
          , Ge = t(88850);
        var Ze = function(A) {
            var e = (0,
            n.useContext)(Ge.A).fieldMessageId;
            return n.createElement("div", {
                id: e
            }, A.children)
        }
          , Ee = function(A) {
            var e = A.handleKeyPress
              , t = (0,
            n.useContext)(ZA.A).fields
              , r = (0,
            n.useContext)(GA.A).dispatch
              , a = (0,
            d.d4)((function(A) {
                var e = A.app.loginReducer;
                return null == e ? void 0 : e.capslockOn
            }
            ))
              , v = (0,
            n.useState)("")
              , P = (0,
            l.A)(v, 2)
              , X = P[0]
              , u = P[1]
              , s = (0,
            c.A)().getString
              , D = (0,
            f.zQ)().enableConditionalUi
              , g = (0,
            n.useRef)(!1)
              , w = (0,
            n.useRef)()
              , N = (0,
            n.useCallback)((function(A) {
                A ? clearTimeout(w.current) : w.current = setTimeout((function() {
                    r((0,
                    qA.A)({
                        formId: "signOnForm",
                        fieldId: "j_password",
                        masked: !0
                    }))
                }
                ), 15e3)
            }
            ), [r])
              , b = s("loginApp.login.inputLabel.password")
              , B = s("loginApp.login.error.capslockOn")
              , m = s("loginApp.login.error.passwordMinValidation");
            (0,
            n.useEffect)((function() {
                var A = null == t ? void 0 : t.get("j_password")
                  , e = null == A ? void 0 : A.focused
                  , n = null == A ? void 0 : A.message
                  , v = null == A ? void 0 : A.value;
                e ? (g.current = !0,
                a ? r((0,
                qA.A)({
                    formId: "signOnForm",
                    fieldId: "j_password",
                    message: B,
                    showMessage: !0,
                    value: v
                })) : n === B && r((0,
                qA.A)({
                    formId: "signOnForm",
                    fieldId: "j_password",
                    message: "",
                    showMessage: !1
                }))) : (null == v ? void 0 : v.length) < 6 && g.current && (r((0,
                qA.A)({
                    formId: "signOnForm",
                    fieldId: "j_password",
                    message: m,
                    showMessage: !0
                })),
                g.current = !1)
            }
            ), [a, t]);
            var i = [(0,
            Ve.A)(6)({
                message: m
            })];
            return n.createElement("div", {
                className: Be.passwordField
            }, n.createElement(Je.A.Provider, {
                value: {
                    fieldId: "j_password"
                }
            }, n.createElement(JA.A, {
                formId: "signOnForm",
                fieldId: "j_password",
                name: "j_password",
                value: X,
                onChange: u,
                label: b,
                maxLength: 32,
                minlength: 6,
                validations: i
            }, D ? n.createElement(Ie.A, {
                allowUnmask: !0,
                onKeyDown: e,
                autoComplete: "current-password webauthn",
                maskIconAsText: !0,
                onMask: N
            }) : n.createElement(Ie.A, {
                allowUnmask: !0,
                onKeyDown: e,
                maskIconAsText: !0,
                onMask: N
            }), n.createElement(Ze, null, n.createElement(qe.A, null)))))
        }
          , Me = (t(25276),
        t(27495),
        t(71761),
        t(678))
          , Se = t(25153)
          , Ye = function(A) {
            var e = (0,
            n.useContext)(N)
              , t = e.usernameMasked
              , r = void 0 === t ? "" : t
              , a = e.savedUsername
              , v = (0,
            d.d4)((function(A) {
                var e = A.app.loginReducer;
                return null == e ? void 0 : e.placeholderValue
            }
            ))
              , P = (0,
            d.wA)()
              , X = (0,
            n.useContext)(ZA.A).fields
              , u = (0,
            n.useContext)(GA.A).dispatch
              , s = A.setIsAutoFillError
              , D = A.setSavedUsername
              , g = A.setMessage
              , w = A.isAutoFillError
              , b = (0,
            n.useState)("")
              , B = (0,
            l.A)(b, 2)
              , m = B[0]
              , i = B[1]
              , o = (0,
            n.useState)(!1)
              , y = (0,
            l.A)(o, 2)
              , z = y[0]
              , H = y[1]
              , p = (0,
            c.A)().getString
              , C = (0,
            n.useRef)(!1)
              , x = (0,
            XA.A)().platform
              , j = (0,
            n.useState)(!1)
              , O = (0,
            l.A)(j, 2)
              , L = O[0]
              , k = O[1]
              , W = (0,
            f.zQ)().enableConditionalUi
              , T = p("loginApp.login.inputLabel.username")
              , I = p("loginApp.login.error.usernameMinValidation")
              , V = p("loginApp.login.error.usernameClear")
              , J = p("loginApp.login.button.label.clearUserName")
              , q = "7P" === x
              , G = (0,
            n.useRef)()
              , Z = [(0,
            Ve.A)(6)({
                message: I
            })]
              , E = function(A) {
                var e;
                q && !a && -1 !== (null == A ? void 0 : A.indexOf("*")) ? (k(!0),
                (null == A || null === (e = A.match(/[*]/g)) || void 0 === e ? void 0 : e.length) >= 5 && s(!0)) : (k(!1),
                s(!1),
                (null == A ? void 0 : A.length) >= 6 && g(""))
            };
            (0,
            n.useEffect)((function() {
                z || (H(!0),
                r && !a && i(r))
            }
            ), [a, z, r]),
            (0,
            n.useEffect)((function() {
                var A, e = null == X ? void 0 : X.get("j_username");
                (null == e ? void 0 : e.focused) ? (C.current = !0,
                w ? (u((0,
                qA.A)({
                    formId: "signOnForm",
                    fieldId: "j_username",
                    message: V,
                    showMessage: !0
                })),
                g(p("loginApp.login.error.passwordManager"))) : q && !a && L && E(null == e ? void 0 : e.value)) : (null == e || null === (A = e.value) || void 0 === A ? void 0 : A.length) < 6 && C.current && !L && (v && a && r ? u((0,
                qA.A)({
                    formId: "signOnForm",
                    fieldId: "j_username",
                    message: "",
                    showMessage: !1
                })) : (C.current = !1,
                u((0,
                qA.A)({
                    formId: "signOnForm",
                    fieldId: "j_username",
                    message: I,
                    showMessage: !0
                }))))
            }
            ), [w, X]);
            return n.createElement(Je.A.Provider, {
                value: {
                    fieldId: "j_username"
                }
            }, n.createElement("div", {
                className: Be.usernameBlock
            }, n.createElement("div", {
                className: Be.usernameFieldDiv
            }, n.createElement(JA.A, {
                formId: "signOnForm",
                fieldId: "j_username",
                name: "j_username",
                sensitive: !0,
                value: v ? "" : m,
                onChange: function(A) {
                    E(A),
                    i(A),
                    P(h(""))
                },
                label: T,
                maxLength: 14,
                minlength: 6,
                validations: Z
            }, W ? n.createElement(Se.A, {
                onKeyDown: A.handleKeyPress,
                ref: G,
                placeholder: v,
                forceTransition: v,
                placeholderClassName: Be.placeholderClassName,
                autoComplete: "username webauthn"
            }) : n.createElement(Se.A, {
                onKeyDown: A.handleKeyPress,
                ref: G,
                placeholder: v,
                forceTransition: v,
                placeholderClassName: Be.placeholderClassName
            }), n.createElement(Ze, null, n.createElement(qe.A, null)))), q && n.createElement(Q.A, {
                onClick: function() {
                    return A = I,
                    u((0,
                    qA.A)({
                        formId: "signOnForm",
                        fieldId: "j_username",
                        value: "",
                        message: A
                    })),
                    D(!1),
                    P(h("")),
                    void G.current.focus();
                    var A
                },
                className: Be.clearIcon,
                "data-testid": "username-clearIcon",
                "aria-label": J
            }, n.createElement(Me.A, null))))
        }
          , Ue = function(A) {
            "CapsLock" === (null == A ? void 0 : A.key) && (0,
            f.KA)().dispatch(_(A.getModifierState("CapsLock")))
        };
        document.addEventListener("keydown", Ue),
        document.addEventListener("keyup", Ue);
        var Re = function(A) {
            var e = (0,
            n.useContext)(N)
              , t = e.usernameMasked
              , r = void 0 === t ? "" : t
              , a = e.savedUsername
              , P = e.modalDismissed
              , X = (0,
            d.d4)((function(A) {
                var e = A.app.loginReducer;
                return null == e ? void 0 : e.placeholderValue
            }
            ))
              , u = (0,
            d.wA)()
              , s = a && !!r
              , D = (0,
            n.useState)(s)
              , g = (0,
            l.A)(D, 2)
              , w = g[0]
              , b = g[1]
              , B = (0,
            n.useContext)(ZA.A).fields
              , m = (0,
            c.A)().getString
              , i = (0,
            n.useContext)(GA.A).dispatch
              , o = (0,
            n.useRef)()
              , y = (0,
            n.useState)(!0)
              , z = (0,
            l.A)(y, 2)
              , H = z[0]
              , p = z[1]
              , Q = (0,
            n.useState)("")
              , C = (0,
            l.A)(Q, 2)
              , x = C[0]
              , j = C[1]
              , O = (0,
            XA.A)().platform
              , L = (0,
            n.useState)(!1)
              , k = (0,
            l.A)(L, 2)
              , W = k[0]
              , T = k[1]
              , I = (0,
            n.useState)(P || !1)
              , V = (0,
            l.A)(I, 2)
              , J = V[0]
              , q = V[1]
              , G = (0,
            f.zQ)()
              , Z = G.uiOrigin
              , E = void 0 === Z ? "" : Z
              , M = G.ndHtml
              , S = void 0 === M ? "" : M
              , Y = G.passkeyPilotFlagKey
              , U = void 0 !== Y && Y
              , R = G.passkeyLoginEnable
              , F = void 0 !== R && R
              , K = (0,
            f.HY)(S)
              , $ = null == B ? void 0 : B.get("j_username")
              , AA = null == B ? void 0 : B.get("j_password");
            (0,
            n.useEffect)((function() {
                var e = !0
                  , t = setTimeout((function() {
                    (e && "" !== (null == $ ? void 0 : $.value) || "" !== (null == AA ? void 0 : AA.value)) && (i((0,
                    qA.A)({
                        formId: "signOnForm",
                        fieldId: "j_password",
                        value: "",
                        masked: !0
                    })),
                    !w && i((0,
                    qA.A)({
                        formId: "signOnForm",
                        fieldId: "j_username",
                        value: ""
                    })),
                    u(_(!1)),
                    T(!1),
                    A.setMessage("")),
                    i((0,
                    qA.A)({
                        formId: "signOnForm",
                        fieldId: "j_password",
                        message: "",
                        showMessage: !1
                    })),
                    i((0,
                    qA.A)({
                        formId: "signOnForm",
                        fieldId: "j_username",
                        message: "",
                        showMessage: !1
                    }))
                }
                ), 6e5);
                return function() {
                    e = !1,
                    clearTimeout(t)
                }
            }
            ), [i, A, w, null == $ ? void 0 : $.value, null == AA ? void 0 : AA.value]);
            var eA = function(e) {
                "Enter" === e.key && !H && A.handleSubmit()
            }
              , tA = m("loginApp.login.checkboxLabel.saveUsername")
              , nA = "7P" === O;
            (0,
            n.useEffect)((function() {
                var A, e, t, n, r = document.getElementById("nucaptcha-answer");
                (null === (A = B.get("j_username")) || void 0 === A ? void 0 : A.value.length) >= 6 && !W && (null === (e = B.get("j_password")) || void 0 === e ? void 0 : e.value.length) >= 6 && (!r || r.value.length >= 3) || 0 === (null === (t = B.get("j_username")) || void 0 === t ? void 0 : t.value.length) && a && X && (null === (n = B.get("j_password")) || void 0 === n ? void 0 : n.value.length) >= 6 && (!r || r.value.length >= 3) ? p(!1) : p(!0)
            }
            ), [B, x, nA, a, W, X]);
            var rA = ["checkbox", !0 === w && "checked", !1 === w && "unchecked"]
              , aA = (0,
            f.lw)({
                styles: Be,
                classes: ["text"]
            })
              , vA = "sac" === E.toLowerCase() ? (0,
            f.lw)({
                styles: Be,
                classes: rA
            }) : "";
            return n.createElement(n.Fragment, null, n.createElement(ye, {
                savedUsername: w,
                modalDismissed: J
            }), n.createElement("div", {
                className: Be.containerWrap
            }, n.createElement(be, {
                setModalDismissed: q
            }), n.createElement(Ye, {
                setIsAutoFillError: T,
                isAutoFillError: W,
                setSavedUsername: function(A) {
                    b(A),
                    T(A)
                },
                handleKeyPress: eA,
                setMessage: A.setMessage
            }), n.createElement("div", {
                className: Be.passwordField
            }, n.createElement(Ee, {
                handleKeyPress: eA
            })), n.createElement(v.A, {
                layout: !0,
                horizontal: !0,
                center: !0,
                "data-testid": "saveUsername-checkbox"
            }, n.createElement(JA.A, {
                formId: "signOnForm",
                fieldId: "saveUsername",
                name: "saveUserName",
                value: w,
                onChange: function(A) {
                    b(A),
                    w && (i((0,
                    qA.A)({
                        formId: "signOnForm",
                        fieldId: "j_username",
                        value: "",
                        message: "",
                        showMessage: !1
                    })),
                    u(h("")))
                },
                className: Be.checkboxLabel
            }, n.createElement(VA.A, {
                ref: o,
                className: vA
            }, tA), n.createElement(EA.A, {
                className: aA
            }, n.createElement(NA.A, {
                id: "loginApp.login.saveUsername.supportingText"
            }))))), "" !== K.trim() && n.createElement($A, {
                keyPressInCaptcha: j
            }), n.createElement(v.A, {
                centered: !0,
                className: Be.signOnButton
            }, n.createElement(me, {
                handleSubmit: A.handleSubmit,
                disabled: H
            })), U && F && n.createElement(Te, {
                handlePasskeyLoginClick: A.handlePasskeyLoginClick
            }), n.createElement(pe, null))
        }
          , Fe = t(16130)
          , Ke = t(8121)
          , he = "OTPfield__inputWrapper___hqb1E"
          , _e = function() {
            var A = (0,
            (0,
            c.A)().getString)("loginApp.login.qrCode.otpField.label.enterCode")
              , e = (0,
            n.useState)("")
              , t = (0,
            l.A)(e, 2)
              , r = t[0]
              , a = t[1];
            return n.createElement(Je.A.Provider, {
                value: {
                    fieldId: "authViaAppCode"
                }
            }, n.createElement("div", {
                className: he
            }, n.createElement(JA.A, {
                formId: "signOnForm",
                fieldId: "authViaAppCode",
                name: "authViaAppCode",
                value: r,
                onChange: a,
                label: A,
                minLength: 6
            }, n.createElement(Se.A, {
                filterKeys: function(A) {
                    return (0,
                    Ke.fu)(A) || (0,
                    Ke.hX)(A)
                }
            }))))
        }
          , $e = (t(38781),
        t(47290))
          , At = function() {
            var A = (0,
            d.d4)((function(A) {
                return A.app.loginReducer
            }
            ), d.bN).qrCodeLink
              , e = void 0 === A ? "" : A
              , t = window.location.origin.toString() + "/" + e;
            return n.createElement(n.Fragment, null, e && n.createElement($e.Ay, {
                value: t,
                size: 200,
                bgColor: "#ffffff",
                fgColor: "#333333"
            }))
        }
          , et = "QRCodeLoginForm__qrCodeWrapper___lRSix"
          , tt = "QRCodeLoginForm__toolTip___X49vR"
          , nt = "QRCodeLoginForm__signOnButton___tT27n"
          , rt = function(A) {
            var e = (0,
            c.A)().getString
              , t = (0,
            n.useContext)(ZA.A).fields
              , r = e("loginApp.login.qrCode.tooltip.anchor")
              , a = e("loginApp.login.qrCode.tooltip.header")
              , f = e("loginApp.login.qrCode.tooltip.content")
              , P = (0,
            n.useState)(!0)
              , X = (0,
            l.A)(P, 2)
              , u = X[0]
              , d = X[1];
            return (0,
            n.useEffect)((function() {
                var A;
                (null === (A = t.get("authViaAppCode")) || void 0 === A ? void 0 : A.value.length) >= 6 ? d(!1) : d(!0)
            }
            ), [t]),
            n.createElement(n.Fragment, null, n.createElement(ye, null), n.createElement(v.A, {
                className: et
            }, n.createElement(At, null), n.createElement(_e, null), n.createElement(v.A, {
                centered: !0,
                className: nt
            }, n.createElement(me, {
                handleSubmit: A.handleSubmit,
                disabled: u
            })), n.createElement("div", {
                className: tt
            }, n.createElement(Fe.A, {
                anchor: r,
                header: a,
                content: f
            }))))
        }
          , at = "LoginTabs__segments___pNJCp"
          , vt = "LoginTabs__segmentTab___kVsjD"
          , ft = function(A) {
            var e = (0,
            n.useState)(0)
              , t = (0,
            l.A)(e, 2)
              , r = t[0]
              , a = t[1]
              , v = (0,
            n.useState)(!1)
              , f = (0,
            l.A)(v, 2)
              , P = f[0]
              , X = f[1]
              , u = (0,
            c.A)().getString
              , s = A.updatePageTitle
              , D = A.setMessage
              , g = A.formRef
              , w = A.handleSubmit
              , N = u("loginApp.login.qrCode.tab.enterPassword")
              , b = u("loginApp.login.qrCode.tab.enterQRcode")
              , B = (0,
            d.wA)()
              , m = (0,
            d.d4)((function(A) {
                return A.app.loginReducer
            }
            ), d.bN).status
              , i = void 0 === m ? "" : m
              , o = (0,
            n.useRef)(null)
              , y = function() {
                1 === r && (s("loginApp.login.qrCode.enterPassword.pageTitle"),
                a(0))
            };
            return (0,
            n.useEffect)((function() {
                "failure" === i && (y(),
                D(u("loginApp.login.qrCode.notAvailable.pageError")),
                clearTimeout(o.current),
                X(!1))
            }
            ), [i]),
            n.createElement(WA.A, {
                animate: !0,
                index: r
            }, n.createElement("div", {
                className: at
            }, n.createElement(IA.A, null, n.createElement("div", {
                onClick: y,
                className: vt
            }, n.createElement(kA.A, null, N)), n.createElement("div", {
                onClick: function() {
                    0 === r && (s("loginApp.login.qrCode.scanQRCode.pageTitle"),
                    a(1),
                    P || (X(!0),
                    B({
                        type: S
                    }),
                    o.current = setTimeout((function() {
                        a(0),
                        s("loginApp.login.qrCode.enterPassword.pageTitle"),
                        D(u("loginApp.login.qrCode.error.sessionTimeout")),
                        X(!1)
                    }
                    ), 24e4)))
                },
                className: vt
            }, n.createElement(kA.A, null, b)))), n.createElement(TA.A, null, n.createElement(Re, {
                formRef: g,
                handleSubmit: w,
                setMessage: D
            })), n.createElement(TA.A, null, n.createElement(rt, {
                formRef: g,
                handleSubmit: w
            })))
        };
        t(60739);
        var Pt = t(78126)
          , lt = t(72321)
          , Xt = (t(23792),
        t(48598),
        t(72712),
        t(11745),
        t(38309),
        t(27337),
        t(25440),
        t(21489),
        t(81630),
        t(72170),
        t(75044),
        t(69539),
        t(31694),
        t(89955),
        t(33206),
        t(44496),
        t(66651),
        t(12887),
        t(19369),
        t(66812),
        t(8995),
        t(31575),
        t(36072),
        t(88747),
        t(28845),
        t(29423),
        t(57301),
        t(373),
        t(86614),
        t(41405),
        t(33684),
        function(A) {
            for (var e, t = (e = A,
            window.atob(e)), n = t.length, r = new Uint8Array(n), a = 0; a < n; a++)
                r[a] = t.charCodeAt(a);
            return r.buffer
        }
        )
          , ut = function(A) {
            return Xt((e = A.replace(/-/g, "+").replace(/_/g, "/"),
            (t = e.length % 4) && (e += new Array(5 - t).join("=")),
            e));
            var e, t
        };
        function dt(A) {
            return function(A) {
                return (A = (A = A.split("=")[0]).replace(/\+/g, "-")).replace(/\//g, "_")
            }(function(A) {
                return window.btoa(A)
            }(new Uint8Array(A).reduce((function(A, e) {
                return A + String.fromCodePoint(e)
            }
            ), "")))
        }
        function st() {
            return Dt.apply(this, arguments)
        }
        function Dt() {
            return (Dt = (0,
            P.A)(u().mark((function A() {
                return u().wrap((function(A) {
                    for (; ; )
                        switch (A.prev = A.next) {
                        case 0:
                            if (void 0 === window.PublicKeyCredential || "function" != typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable) {
                                A.next = 4;
                                break
                            }
                            return A.next = 3,
                            window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
                        case 3:
                            return A.abrupt("return", A.sent);
                        case 4:
                            return A.abrupt("return", !1);
                        case 5:
                        case "end":
                            return A.stop()
                        }
                }
                ), A)
            }
            )))).apply(this, arguments)
        }
        function gt() {
            return wt.apply(this, arguments)
        }
        function wt() {
            return (wt = (0,
            P.A)(u().mark((function A() {
                return u().wrap((function(A) {
                    for (; ; )
                        switch (A.prev = A.next) {
                        case 0:
                            if (void 0 === window.PublicKeyCredential || "function" != typeof window.PublicKeyCredential.isConditionalMediationAvailable) {
                                A.next = 4;
                                break
                            }
                            return A.next = 3,
                            window.PublicKeyCredential.isConditionalMediationAvailable();
                        case 3:
                            return A.abrupt("return", A.sent);
                        case 4:
                            return A.abrupt("return", !1);
                        case 5:
                        case "end":
                            return A.stop()
                        }
                }
                ), A)
            }
            )))).apply(this, arguments)
        }
        var ct = function() {
            var A = (0,
            P.A)(u().mark((function A(e) {
                var t, n, r, a, v, P, l, X, d;
                return u().wrap((function(A) {
                    for (; ; )
                        switch (A.prev = A.next) {
                        case 0:
                            return t = e.origin,
                            v = (0,
                            Pt.A)(),
                            P = v.fidoAssertionsPath,
                            A.prev = 2,
                            A.next = 5,
                            (0,
                            lt.A)({
                                url: P,
                                data: {
                                    origin: t
                                }
                            });
                        case 5:
                            return 200 === (l = A.sent).status && (a = l.data),
                            u = a,
                            s = void 0,
                            D = void 0,
                            s = (0,
                            Pt.A)().enableConditionalUi,
                            D = {
                                publicKey: {
                                    challenge: ut(u.challenge),
                                    timeout: u.timeout,
                                    rpId: u.rpId,
                                    userVerification: u.userVerification
                                }
                            },
                            s && (D.mediation = "conditional"),
                            r = D,
                            A.next = 10,
                            navigator.credentials.get(r);
                        case 10:
                            X = A.sent,
                            f.vF.info("credential is ", X),
                            d = {
                                id: X.id,
                                rawId: dt(X.rawId),
                                type: X.type,
                                authenticatorData: dt(X.response.authenticatorData),
                                clientDataJson: dt(X.response.clientDataJSON),
                                signature: dt(X.response.signature),
                                userHandle: dt(X.response.userHandle)
                            },
                            n = JSON.stringify(d),
                            A.next = 19;
                            break;
                        case 16:
                            A.prev = 16,
                            A.t0 = A.catch(2),
                            f.vF.error("error communicating with the server", A.t0);
                        case 19:
                            return A.abrupt("return", n);
                        case 20:
                        case "end":
                            return A.stop()
                        }
                    var u, s, D
                }
                ), A, null, [[2, 16]])
            }
            )));
            return function(e) {
                return A.apply(this, arguments)
            }
        }()
          , Nt = ct
          , bt = "Login__disclosureWithFDIC___tyZ3X"
          , Bt = "Login__disclosures___H8EjE"
          , mt = function(A) {
            var e = (0,
            d.wA)()
              , t = (0,
            n.useRef)()
              , r = (0,
            n.useState)(!1)
              , a = (0,
            l.A)(r, 2)
              , v = a[0]
              , X = a[1]
              , s = (0,
            n.useState)(!1)
              , D = (0,
            l.A)(s, 2)
              , g = D[0]
              , w = D[1]
              , c = (0,
            n.useState)(!1)
              , b = (0,
            l.A)(c, 2)
              , B = b[0]
              , m = b[1]
              , i = (0,
            n.useState)("")
              , o = (0,
            l.A)(i, 2)
              , y = o[0]
              , z = o[1]
              , H = (0,
            n.useContext)(N)
              , p = H.displayQRCodeSwitch
              , Q = H.depmSwitch
              , C = H.origin
              , x = void 0 === C ? "" : C
              , j = H.loginParams
              , O = void 0 === j ? {} : j
              , L = (0,
            sA.A)().width
              , k = (0,
            XA.A)().platform
              , W = (0,
            f.zQ)()
              , T = W.uiOrigin
              , I = void 0 === T ? "" : T
              , V = W.enableConditionalUi
              , J = void 0 !== V && V
              , q = W.ndHtml
              , G = void 0 === q ? "" : q
              , Z = W.staticDomain
              , E = void 0 === Z ? "" : Z
              , M = W.rootContextPath
              , S = void 0 === M ? "" : M
              , Y = (0,
            n.useState)("loginApp.login.qrCode.enterPassword.pageTitle")
              , R = (0,
            l.A)(Y, 2)
              , F = R[0]
              , K = R[1]
              , h = p && "7P" === k && L >= 768 && ("cob" === I || "bob" === I) && "" === (G || "")
              , _ = (0,
            d.d4)((function(A) {
                return A.app.loginReducer
            }
            )).fidoError
              , $ = function() {
                var A;
                B || (window.disableSubmitsCollectUserPrefs(t.current),
                g && (null === (A = window.cdApi) || void 0 === A || null === (A = A.client) || void 0 === A || A.flush()),
                m(!0))
            }
              , AA = function(A) {
                Nt({
                    origin: A,
                    dispatch: e
                }).then((function(A) {
                    A && (e({
                        type: U,
                        payload: A
                    }),
                    function() {
                        try {
                            $()
                        } catch (A) {
                            f.vF.error("error communicating with the server", A)
                        } finally {
                            t.current.submit()
                        }
                    }())
                }
                ))
            };
            (0,
            n.useEffect)((function() {
                var A, e = document.createElement("script");
                e.src = "".concat(S, "/static/prefs/login-userprefs.min.js"),
                e.async = !0,
                document.body.appendChild(e),
                X(!0),
                A = window.location.protocol,
                document.cookie = "https:" !== A ? "CookiesAreEnabled=yes; path=/; domain=.wellsfargo.com" : "CookiesAreEnabled=yes; path=/; domain=.wellsfargo.com; Secure"
            }
            ), []);
            var eA = function() {
                window.wf_depm_wrapper.endSession(),
                window.wf_depm_wrapper.newSession()
            };
            (0,
            n.useEffect)((function() {
                if (Q) {
                    var A = document.createElement("script");
                    A.src = "".concat(E, "auth/static/depm/depm_wrapper.js"),
                    A.async = !0,
                    document.body.appendChild(A),
                    w(!0),
                    A.addEventListener("load", (function() {
                        window.wf_depm_wrapper.onLoad = eA
                    }
                    ))
                }
            }
            ), []);
            var tA = function A() {
                var e = window.ndsapi;
                e ? e.init() : setTimeout(A, 1e3)
            };
            (0,
            n.useEffect)((function() {
                "Y" === (null == O ? void 0 : O.autoPasskeyLoginFlag) && AA(x)
            }
            ), []);
            var nA = function() {
                var A = (0,
                P.A)(u().mark((function A() {
                    return u().wrap((function(A) {
                        for (; ; )
                            switch (A.prev = A.next) {
                            case 0:
                                return A.next = 2,
                                st();
                            case 2:
                                if (A.t0 = A.sent,
                                !A.t0) {
                                    A.next = 7;
                                    break
                                }
                                return A.next = 6,
                                gt();
                            case 6:
                                A.t0 = A.sent;
                            case 7:
                                if (!A.t0) {
                                    A.next = 10;
                                    break
                                }
                                !_ && AA(x),
                                tA();
                            case 10:
                            case "end":
                                return A.stop()
                            }
                    }
                    ), A)
                }
                )));
                return function() {
                    return A.apply(this, arguments)
                }
            }()
              , rA = function(A) {
                z(A)
            };
            return (0,
            n.useEffect)((function() {
                z(y)
            }
            ), [y]),
            n.createElement(n.Fragment, null, n.createElement(LA, {
                pageLevelError: y,
                showQRCode: h,
                pageTitleId: F
            }, n.createElement(dA.A, null, n.createElement(uA.A, {
                formId: "signOnForm",
                action: "/auth/login/do",
                ref: t,
                submitWithAjax: !1,
                method: "post"
            }, h ? n.createElement(ft, {
                formRef: t,
                handleSubmit: $,
                setMessage: rA,
                updatePageTitle: function(A) {
                    K(A)
                }
            }) : n.createElement(Re, {
                formRef: t,
                handleSubmit: $,
                handlePasskeyLoginClick: function() {
                    return function(A) {
                        v && (J && nA(),
                        AA(A),
                        tA())
                    }(x)
                },
                setMessage: rA
            })))), n.createElement("div", {
                className: A.showFDICBanner ? bt : Bt
            }, n.createElement(wA, null)))
        }
          , it = "ErrorPage__errorPage___KP3Bu"
          , ot = "ErrorPage__heading___rsosP"
          , yt = "ErrorPage__errorMessageText___S60j5"
          , zt = function(A) {
            var e, t, r, a, v, f = (0,
            (0,
            c.A)().getString)("global.message.error"), P = null !== (e = A.errorMessage) && void 0 !== e && e.displayTitle ? null === (t = A.errorMessage) || void 0 === t ? void 0 : t.displayTitle : f, l = null === (r = A.errorMessage) || void 0 === r ? void 0 : r.messageText, X = null === (a = A.errorMessage) || void 0 === a ? void 0 : a.errorCode;
            return n.createElement(n.Fragment, null, n.createElement(s.A, {
                title: P
            }), n.createElement("div", {
                className: it
            }, n.createElement(cA.A, {
                className: ot
            }, P), n.createElement("div", {
                dangerouslySetInnerHTML: (v = l,
                {
                    __html: bA.A.sanitize(v)
                }),
                className: yt
            }), X && n.createElement("div", null, "(", X, ")")))
        }
          , Ht = t(78223)
          , pt = "BrowserBlock__mobile___rfRcq"
          , Qt = "BrowserBlock__heading___WSuO2"
          , Ct = "BrowserBlock__content___c0fKa"
          , xt = "BrowserBlock__titleDivider___uTxod"
          , jt = "BrowserBlock__desktop___oXrpV"
          , Ot = "BrowserBlock__subHeading___bUgwf"
          , Lt = "BrowserBlock__buttonContainer___t9dfh"
          , kt = function() {
            var A = (0,
            Ht.A)().getString
              , e = (0,
            XA.A)().platform
              , t = (0,
            n.useContext)(N).supportedBrowserUrl;
            return n.createElement(n.Fragment, null, n.createElement(s.A, {
                title: A("loginApp.login.browserblock.title")
            }), n.createElement(v.A, {
                p: "b",
                className: "7M" === e ? pt : jt
            }, n.createElement(v.A, null, n.createElement(v.A, {
                pb: "b",
                className: Qt,
                centered: "7M" === e && !0
            }, n.createElement(cA.A, {
                level: 1
            }, A("loginApp.login.browserblock.heading"))), n.createElement("div", {
                className: xt
            }), n.createElement(v.A, {
                mt: "s",
                className: Ot
            }, n.createElement("h2", null, A("loginApp.login.browserblock.subheading"))), n.createElement(re.A, {
                className: Ct,
                id: "loginApp.login.browserblock.content"
            }), n.createElement("div", {
                className: Lt
            }, n.createElement(Q.A, {
                buttonType: "primary",
                onClick: function(A) {
                    return function() {
                        A && window.location.assign(A)
                    }
                }(t)
            }, n.createElement(NA.A, {
                id: "loginApp.login.browserblock.button"
            }))))))
        }
          , Wt = t(98225)
          , Tt = "BrowserWarning__desktop___XL06x"
          , It = "BrowserWarning__title___Dpku7"
          , Vt = "BrowserWarning__titleDivider___C9uqc"
          , Jt = "BrowserWarning__subTitle___pjtEO"
          , qt = "BrowserWarning__content___xu8Mf"
          , Gt = "BrowserWarning__mobile___EySaC"
          , Zt = "BrowserWarning__buttonContainer___V_nC9"
          , Et = function() {
            var A = (0,
            c.A)().getString
              , e = (0,
            XA.A)().platform
              , t = (0,
            n.useContext)(N).continueLoginUrl;
            return n.createElement(n.Fragment, null, n.createElement(s.A, {
                title: A("loginApp.login.browserblock.title")
            }), n.createElement(v.A, {
                p: "b",
                className: "7M" === e ? Gt : Tt
            }, n.createElement(v.A, {
                centered: "7M" === e && !0,
                className: It
            }, n.createElement(cA.A, {
                level: 1
            }, A("loginApp.login.browserWarning.title"))), n.createElement("div", {
                className: Vt
            }), n.createElement("div", {
                className: Jt
            }, n.createElement("h2", null, A("loginApp.login.browserWarning.subTitle"))), n.createElement("div", {
                className: qt
            }, n.createElement(re.A, {
                id: "loginApp.login.browserWarning.content"
            }), n.createElement(Wt.A, null, n.createElement("ol", null, n.createElement(re.A, {
                id: "loginApp.login.browserWarning.content.list1"
            }), n.createElement(re.A, {
                id: "loginApp.login.browserWarning.content.list2"
            }), n.createElement(re.A, {
                id: "loginApp.login.browserWarning.content.list3"
            })))), n.createElement("div", {
                className: Zt
            }, n.createElement(Q.A, {
                buttonType: "primary",
                onClick: function(A) {
                    return function() {
                        A && window.location.assign(A)
                    }
                }(t)
            }, n.createElement(NA.A, {
                id: "global.continue"
            })))))
        }
          , Mt = "tempOtpPage__otpPage___UzXsA"
          , St = "tempOtpPage__heading___hDSd8"
          , Yt = "tempOtpPage__otp___p3wsA"
          , Ut = "tempOtpPage__title___gHKLf"
          , Rt = function() {
            var A = (0,
            n.useContext)(N).displayOtp
              , e = void 0 === A ? "" : A
              , t = (0,
            (0,
            c.A)().getString)("loginApp.login.qrCode.tempOtp.pageTitle");
            return n.createElement(n.Fragment, null, n.createElement(s.A, {
                title: t
            }), e ? n.createElement("div", {
                className: Mt
            }, n.createElement(cA.A, {
                className: St
            }, t), n.createElement("div", {
                className: Yt
            }, " ", e, " "), n.createElement("div", {
                className: Ut
            }, n.createElement(NA.A, {
                id: "loginApp.login.qrCode.tempOtp.subTitle"
            }))) : null)
        }
          , Ft = function() {
            var A = (0,
            f.zQ)()
              , e = A.uiOrigin
              , t = A.devicePlatform
              , r = (0,
            c.A)().getString
              , a = (0,
            d.wA)()
              , v = (0,
            n.useState)()
              , X = (0,
            l.A)(v, 2)
              , B = X[0]
              , m = X[1]
              , i = (0,
            w.A)().setShowFDIC;
            (0,
            n.useEffect)((function() {
                var A = !0
                  , e = function() {
                    var e = (0,
                    P.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    b();
                                case 3:
                                    t = e.sent,
                                    A && t && m(t),
                                    A && t && t.pageData.savedUsername && a(h(t.pageData.usernameMasked)),
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e.catch(0),
                                    f.vF.error("Failed to load login data " + e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 8]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return A && e(),
                function() {
                    A = !1
                }
            }
            ), [a]);
            var o, y, z, H, p, Q, C, x = function() {
                var A = (0,
                w.A)().setApplicationReady;
                return (0,
                n.useEffect)((function() {
                    A()
                }
                ), [A]),
                null
            }, j = r("loginApp.login.pageTitle") || "", O = {
                altSignon: mt,
                errorPage: zt,
                browserWarning: Et,
                browserBlocked: kt,
                tempOtpPage: Rt
            };
            B && (o = B.pageData,
            y = B.viewName ? O[B.viewName] : O.altSignon,
            z = B.errorMessage,
            H = (null === (C = B.pageData) || void 0 === C ? void 0 : C.fdicBannerSwitch) && ("goToRewards" === e || "enroll" === e || "cob" === e || "tpb" === e),
            p = B.lifestyleImageObj,
            Q = B.lifestyleImagePath);
            var L = "7P" === t && y === mt ? function() {
                var A, t, n, r;
                if ("documentCenter" === (null == B || null === (A = B.pageData) || void 0 === A || null === (A = A.loginParams) || void 0 === A ? void 0 : A.serviceType))
                    n = Q + (null === (r = p) || void 0 === r ? void 0 : r.documentCenter);
                else if ("goToRewards" === (null == B || null === (t = B.pageData) || void 0 === t || null === (t = t.loginParams) || void 0 === t ? void 0 : t.serviceType)) {
                    var a;
                    n = Q + (null === (a = p) || void 0 === a ? void 0 : a.goToRewards)
                } else if ("sac" === e) {
                    var v;
                    n = Q + (null === (v = p) || void 0 === v ? void 0 : v.sac)
                } else
                    n = "enroll" === e || "cob" === e || "tpb" === e || "wfa" === e ? Q + function(A) {
                        var e = new Date(Date.now()).getHours();
                        return e >= 3 && e <= 11 ? null == A ? void 0 : A["BG-IMG-MORNING"] : e >= 12 && e <= 17 ? null == A ? void 0 : A["BG-IMG-AFTERNOON"] : null == A ? void 0 : A["BG-IMG-EVENING"]
                    }(p) : "";
                return n
            }() : null;
            return (0,
            n.useEffect)((function() {
                H && i(!0)
            }
            ), [H, i]),
            n.createElement(n.Fragment, null, n.createElement(s.A, {
                title: j
            }), n.createElement(g.A, {
                masthead: M,
                footer: function() {
                    return "sac" === (null == e ? void 0 : e.toLowerCase()) ? n.createElement(PA, null) : n.createElement(D.A, null)
                },
                lifestyleImagePath: L,
                className: lA
            }, B ? n.createElement(N.Provider, {
                value: o
            }, y && n.createElement(y, {
                errorMessage: z,
                showFDICBanner: H
            })) : null, n.createElement(x, null)))
        }
          , Kt = t(68238);
        function ht(A, e) {
            var t = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(A);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function _t(A) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ht(Object(t), !0).forEach((function(e) {
                    (0,
                    m.A)(A, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : ht(Object(t)).forEach((function(e) {
                    Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return A
        }
        var $t = {}
          , An = (0,
        Kt.HY)({
            loginReducer: function() {
                var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $t
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                switch (e.type) {
                case Y:
                    return _t(_t({}, A), e.payload);
                case U:
                    return _t(_t({}, A), {}, {
                        fidoAssertions: e.payload
                    });
                case R:
                    return _t(_t({}, A), {}, {
                        placeholderValue: e.payload ? e.payload : ""
                    });
                case F:
                    return _t(_t({}, A), {}, {
                        capslockOn: e.payload
                    });
                default:
                    return A
                }
            }
        })
          , en = An
          , tn = t(43786)
          , nn = (t(3362),
        function() {
            var A = (0,
            P.A)(u().mark((function A() {
                var e, t;
                return u().wrap((function(A) {
                    for (; ; )
                        switch (A.prev = A.next) {
                        case 0:
                            return "/auth/login/xapi/otp/v1/code",
                            A.prev = 1,
                            A.next = 4,
                            fetch("/auth/login/xapi/otp/v1/code").then((function(A) {
                                return A.json()
                            }
                            ));
                        case 4:
                            t = A.sent,
                            e = t,
                            A.next = 11;
                            break;
                        case 8:
                            A.prev = 8,
                            A.t0 = A.catch(1),
                            e = Promise.resolve({
                                status: "failure"
                            });
                        case 11:
                            return A.abrupt("return", e);
                        case 12:
                        case "end":
                            return A.stop()
                        }
                }
                ), A, null, [[1, 8]])
            }
            )));
            return function() {
                return A.apply(this, arguments)
            }
        }())
          , rn = nn
          , an = u().mark((function A() {
            var e;
            return u().wrap((function(A) {
                for (; ; )
                    switch (A.prev = A.next) {
                    case 0:
                        return A.next = 3,
                        (0,
                        tn.s)(S);
                    case 3:
                        return A.next = 5,
                        (0,
                        tn.yJ)(K({
                            status: ""
                        }));
                    case 5:
                        return A.next = 7,
                        (0,
                        tn.T1)(rn);
                    case 7:
                        return e = A.sent,
                        A.next = 10,
                        (0,
                        tn.yJ)(K(e));
                    case 10:
                        A.next = 0;
                        break;
                    case 12:
                    case "end":
                        return A.stop()
                    }
            }
            ), A)
        }
        ))
          , vn = [u().mark((function A() {
            return u().wrap((function(A) {
                for (; ; )
                    switch (A.prev = A.next) {
                    case 0:
                        return A.next = 2,
                        (0,
                        tn.Q7)([(0,
                        tn.Zy)(an)]);
                    case 2:
                    case "end":
                        return A.stop()
                    }
            }
            ), A)
        }
        ))];
        t(43963);
        var fn = (0,
        a.yM)((function() {
            var A = (0,
            f.zQ)().brand;
            return n.createElement(v.A, {
                flex: !0,
                layout: !0,
                vertical: !0,
                className: "masthead__".concat(A),
                basisMax: !0
            }, n.createElement(Ft, null))
        }
        ), {
            appReducer: en,
            appSagas: vn,
            appMiddleware: []
        });
        r.render(n.createElement(fn, null), document.getElementById("root"))
    }
}, function(A) {
    var e = function(e) {
        return A(A.s = e)
    };
    A.O(0, ["wfui", "vendor"], (function() {
        return e(7452),
        e(41402)
    }
    ));
    A.O()
}
]);