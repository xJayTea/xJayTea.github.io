webpackJsonp([40], {
    312: function(t, e, i) {
        "use strict";
        i(313),
        i(314),
        i(315)
    },
    313: function(t, e) {
        var t = void 0
          , i = void 0
          , n = void 0
          , e = void 0;
        (function() {
            !function t(e, i, o) {
                function s(a, l) {
                    if (!i[a]) {
                        if (!e[a]) {
                            var h = "function" == typeof n && n;
                            if (!l && h)
                                return h(a, !0);
                            if (r)
                                return r(a, !0);
                            var u = new Error("Cannot find module '" + a + "'");
                            throw u.code = "MODULE_NOT_FOUND",
                            u
                        }
                        var c = i[a] = {
                            exports: {}
                        };
                        e[a][0].call(c.exports, function(t) {
                            var i = e[a][1][t];
                            return s(i ? i : t)
                        }, c, c.exports, t, e, i, o)
                    }
                    return i[a].exports
                }
                for (var r = "function" == typeof n && n, a = 0; a < o.length; a++)
                    s(o[a]);
                return s
            }({
                1: [function(t, e, i) {
                    function n(t, e, i) {
                        function n(t) {
                            return t >= 200 && 300 > t || 304 === t
                        }
                        function o() {
                            void 0 === a.status || n(a.status) ? e.call(a, null , a) : e.call(a, a, null )
                        }
                        var s = !1;
                        if ("undefined" == typeof window.XMLHttpRequest)
                            return e(Error("Browser not supported"));
                        if ("undefined" == typeof i) {
                            var r = t.match(/^\s*https?:\/\/[^\/]*/);
                            i = r && r[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "")
                        }
                        var a = new window.XMLHttpRequest;
                        if (i && !("withCredentials"in a)) {
                            a = new window.XDomainRequest;
                            var l = e;
                            e = function() {
                                if (s)
                                    l.apply(this, arguments);
                                else {
                                    var t = this
                                      , e = arguments;
                                    setTimeout(function() {
                                        l.apply(t, e)
                                    }, 0)
                                }
                            }
                        }
                        return "onload"in a ? a.onload = o : a.onreadystatechange = function h() {
                            4 === a.readyState && o()
                        }
                        ,
                        a.onerror = function u(t) {
                            e.call(this, t || !0, null ),
                            e = function() {}
                        }
                        ,
                        a.onprogress = function() {}
                        ,
                        a.ontimeout = function(t) {
                            e.call(this, t, null ),
                            e = function() {}
                        }
                        ,
                        a.onabort = function(t) {
                            e.call(this, t, null ),
                            e = function() {}
                        }
                        ,
                        a.open("GET", t, !0),
                        a.send(null ),
                        s = !0,
                        a
                    }
                    "undefined" != typeof e && (e.exports = n)
                }
                , {}],
                2: [function(t, e, n) {
                    !function(t, n, o) {
                        var s = t.L
                          , r = {};
                        r.version = "0.7.2",
                        "object" == typeof e && "object" == typeof e.exports ? e.exports = r : "function" == typeof i && i.amd && i(r),
                        r.noConflict = function() {
                            return t.L = s,
                            this
                        }
                        ,
                        t.L = r,
                        r.Util = {
                            extend: function(t) {
                                var e = Array.prototype.slice.call(arguments, 1), i, n, o, s;
                                for (n = 0,
                                o = e.length; o > n; n++) {
                                    s = e[n] || {};
                                    for (i in s)
                                        s.hasOwnProperty(i) && (t[i] = s[i])
                                }
                                return t
                            },
                            bind: function(t, e) {
                                var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null ;
                                return function() {
                                    return t.apply(e, i || arguments)
                                }
                            },
                            stamp: function() {
                                var t = 0
                                  , e = "_leaflet_id";
                                return function(i) {
                                    return i[e] = i[e] || ++t,
                                    i[e]
                                }
                            }(),
                            invokeEach: function(t, e, i) {
                                var n, o;
                                if ("object" == typeof t) {
                                    o = Array.prototype.slice.call(arguments, 3);
                                    for (n in t)
                                        e.apply(i, [n, t[n]].concat(o));
                                    return !0
                                }
                                return !1
                            },
                            limitExecByInterval: function(t, e, i) {
                                var n, o;
                                return function s() {
                                    var r = arguments;
                                    return n ? void (o = !0) : (n = !0,
                                    setTimeout(function() {
                                        n = !1,
                                        o && (s.apply(i, r),
                                        o = !1)
                                    }, e),
                                    void t.apply(i, r))
                                }
                            },
                            falseFn: function() {
                                return !1
                            },
                            formatNum: function(t, e) {
                                var i = Math.pow(10, e || 5);
                                return Math.round(t * i) / i
                            },
                            trim: function(t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                            },
                            splitWords: function(t) {
                                return r.Util.trim(t).split(/\s+/)
                            },
                            setOptions: function(t, e) {
                                return t.options = r.extend({}, t.options, e),
                                t.options
                            },
                            getParamString: function(t, e, i) {
                                var n = [];
                                for (var o in t)
                                    n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                                return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
                            },
                            template: function(t, e) {
                                return t.replace(/\{ *([\w_]+) *\}/g, function(t, i) {
                                    var n = e[i];
                                    if (n === o)
                                        throw new Error("No value provided for variable " + t);
                                    return "function" == typeof n && (n = n(e)),
                                    n
                                })
                            },
                            isArray: Array.isArray || function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            }
                            ,
                            emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        },
                        function() {
                            function e(e) {
                                var i, n, o = ["webkit", "moz", "o", "ms"];
                                for (i = 0; i < o.length && !n; i++)
                                    n = t[o[i] + e];
                                return n
                            }
                            function i(e) {
                                var i = +new Date
                                  , o = Math.max(0, 16 - (i - n));
                                return n = i + o,
                                t.setTimeout(e, o)
                            }
                            var n = 0
                              , o = t.requestAnimationFrame || e("RequestAnimationFrame") || i
                              , s = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function(e) {
                                t.clearTimeout(e)
                            }
                            ;
                            r.Util.requestAnimFrame = function(e, n, s, a) {
                                return e = r.bind(e, n),
                                s && o === i ? void e() : o.call(t, e, a)
                            }
                            ,
                            r.Util.cancelAnimFrame = function(e) {
                                e && s.call(t, e)
                            }
                        }(),
                        r.extend = r.Util.extend,
                        r.bind = r.Util.bind,
                        r.stamp = r.Util.stamp,
                        r.setOptions = r.Util.setOptions,
                        r.Class = function() {}
                        ,
                        r.Class.extend = function(t) {
                            var e = function() {
                                this.initialize && this.initialize.apply(this, arguments),
                                this._initHooks && this.callInitHooks()
                            }
                              , i = function() {}
                            ;
                            i.prototype = this.prototype;
                            var n = new i;
                            n.constructor = e,
                            e.prototype = n;
                            for (var o in this)
                                this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
                            t.statics && (r.extend(e, t.statics),
                            delete t.statics),
                            t.includes && (r.Util.extend.apply(null , [n].concat(t.includes)),
                            delete t.includes),
                            t.options && n.options && (t.options = r.extend({}, n.options, t.options)),
                            r.extend(n, t),
                            n._initHooks = [];
                            var s = this;
                            return e.__super__ = s.prototype,
                            n.callInitHooks = function() {
                                if (!this._initHooksCalled) {
                                    s.prototype.callInitHooks && s.prototype.callInitHooks.call(this),
                                    this._initHooksCalled = !0;
                                    for (var t = 0, e = n._initHooks.length; e > t; t++)
                                        n._initHooks[t].call(this)
                                }
                            }
                            ,
                            e
                        }
                        ,
                        r.Class.include = function(t) {
                            r.extend(this.prototype, t)
                        }
                        ,
                        r.Class.mergeOptions = function(t) {
                            r.extend(this.prototype.options, t)
                        }
                        ,
                        r.Class.addInitHook = function(t) {
                            var e = Array.prototype.slice.call(arguments, 1)
                              , i = "function" == typeof t ? t : function() {
                                this[t].apply(this, e)
                            }
                            ;
                            this.prototype._initHooks = this.prototype._initHooks || [],
                            this.prototype._initHooks.push(i)
                        }
                        ;
                        var a = "_leaflet_events";
                        r.Mixin = {},
                        r.Mixin.Events = {
                            addEventListener: function(t, e, i) {
                                if (r.Util.invokeEach(t, this.addEventListener, this, e, i))
                                    return this;
                                var n = this[a] = this[a] || {}, o = i && i !== this && r.stamp(i), s, l, h, u, c, p, d;
                                for (t = r.Util.splitWords(t),
                                s = 0,
                                l = t.length; l > s; s++)
                                    h = {
                                        action: e,
                                        context: i || this
                                    },
                                    u = t[s],
                                    o ? (c = u + "_idx",
                                    p = c + "_len",
                                    d = n[c] = n[c] || {},
                                    d[o] || (d[o] = [],
                                    n[p] = (n[p] || 0) + 1),
                                    d[o].push(h)) : (n[u] = n[u] || [],
                                    n[u].push(h));
                                return this
                            },
                            hasEventListeners: function(t) {
                                var e = this[a];
                                return !!e && (t in e && e[t].length > 0 || t + "_idx"in e && e[t + "_idx_len"] > 0)
                            },
                            removeEventListener: function(t, e, i) {
                                if (!this[a])
                                    return this;
                                if (!t)
                                    return this.clearAllEventListeners();
                                if (r.Util.invokeEach(t, this.removeEventListener, this, e, i))
                                    return this;
                                var n = this[a], o = i && i !== this && r.stamp(i), s, l, h, u, c, p, d, m, _;
                                for (t = r.Util.splitWords(t),
                                s = 0,
                                l = t.length; l > s; s++)
                                    if (h = t[s],
                                    p = h + "_idx",
                                    d = p + "_len",
                                    m = n[p],
                                    e) {
                                        if (u = o && m ? m[o] : n[h]) {
                                            for (c = u.length - 1; c >= 0; c--)
                                                u[c].action !== e || i && u[c].context !== i || (_ = u.splice(c, 1),
                                                _[0].action = r.Util.falseFn);
                                            i && m && 0 === u.length && (delete m[o],
                                            n[d]--)
                                        }
                                    } else
                                        delete n[h],
                                        delete n[p],
                                        delete n[d];
                                return this
                            },
                            clearAllEventListeners: function() {
                                return delete this[a],
                                this
                            },
                            fireEvent: function(t, e) {
                                if (!this.hasEventListeners(t))
                                    return this;
                                var i = r.Util.extend({}, e, {
                                    type: t,
                                    target: this
                                }), n = this[a], o, s, l, h, u;
                                if (n[t])
                                    for (o = n[t].slice(),
                                    s = 0,
                                    l = o.length; l > s; s++)
                                        o[s].action.call(o[s].context, i);
                                h = n[t + "_idx"];
                                for (u in h)
                                    if (o = h[u].slice())
                                        for (s = 0,
                                        l = o.length; l > s; s++)
                                            o[s].action.call(o[s].context, i);
                                return this
                            },
                            addOneTimeEventListener: function(t, e, i) {
                                if (r.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i))
                                    return this;
                                var n = r.bind(function() {
                                    this.removeEventListener(t, e, i).removeEventListener(t, n, i)
                                }, this);
                                return this.addEventListener(t, e, i).addEventListener(t, n, i)
                            }
                        },
                        r.Mixin.Events.on = r.Mixin.Events.addEventListener,
                        r.Mixin.Events.off = r.Mixin.Events.removeEventListener,
                        r.Mixin.Events.once = r.Mixin.Events.addOneTimeEventListener,
                        r.Mixin.Events.fire = r.Mixin.Events.fireEvent,
                        function() {
                            var e = "ActiveXObject"in t
                              , i = e && !n.addEventListener
                              , s = navigator.userAgent.toLowerCase()
                              , a = -1 !== s.indexOf("webkit")
                              , l = -1 !== s.indexOf("chrome")
                              , h = -1 !== s.indexOf("phantom")
                              , u = -1 !== s.indexOf("android")
                              , c = -1 !== s.search("android [23]")
                              , p = -1 !== s.indexOf("gecko")
                              , d = typeof orientation != o + ""
                              , m = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent
                              , _ = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || m
                              , f = "devicePixelRatio"in t && t.devicePixelRatio > 1 || "matchMedia"in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches
                              , g = n.documentElement
                              , v = e && "transition"in g.style
                              , y = "WebKitCSSMatrix"in t && "m11"in new t.WebKitCSSMatrix && !c
                              , L = "MozPerspective"in g.style
                              , b = "OTransition"in g.style
                              , P = !t.L_DISABLE_3D && (v || y || L || b) && !h
                              , T = !t.L_NO_TOUCH && !h && function() {
                                var t = "ontouchstart";
                                if (_ || t in g)
                                    return !0;
                                var e = n.createElement("div")
                                  , i = !1;
                                return e.setAttribute ? (e.setAttribute(t, "return;"),
                                "function" == typeof e[t] && (i = !0),
                                e.removeAttribute(t),
                                e = null ,
                                i) : !1
                            }();
                            r.Browser = {
                                ie: e,
                                ielt9: i,
                                webkit: a,
                                gecko: p && !a && !t.opera && !e,
                                android: u,
                                android23: c,
                                chrome: l,
                                ie3d: v,
                                webkit3d: y,
                                gecko3d: L,
                                opera3d: b,
                                any3d: P,
                                mobile: d,
                                mobileWebkit: d && a,
                                mobileWebkit3d: d && y,
                                mobileOpera: d && t.opera,
                                touch: T,
                                msPointer: m,
                                pointer: _,
                                retina: f
                            }
                        }(),
                        r.Point = function(t, e, i) {
                            this.x = i ? Math.round(t) : t,
                            this.y = i ? Math.round(e) : e
                        }
                        ,
                        r.Point.prototype = {
                            clone: function() {
                                return new r.Point(this.x,this.y)
                            },
                            add: function(t) {
                                return this.clone()._add(r.point(t))
                            },
                            _add: function(t) {
                                return this.x += t.x,
                                this.y += t.y,
                                this
                            },
                            subtract: function(t) {
                                return this.clone()._subtract(r.point(t))
                            },
                            _subtract: function(t) {
                                return this.x -= t.x,
                                this.y -= t.y,
                                this
                            },
                            divideBy: function(t) {
                                return this.clone()._divideBy(t)
                            },
                            _divideBy: function(t) {
                                return this.x /= t,
                                this.y /= t,
                                this
                            },
                            multiplyBy: function(t) {
                                return this.clone()._multiplyBy(t)
                            },
                            _multiplyBy: function(t) {
                                return this.x *= t,
                                this.y *= t,
                                this
                            },
                            round: function() {
                                return this.clone()._round()
                            },
                            _round: function() {
                                return this.x = Math.round(this.x),
                                this.y = Math.round(this.y),
                                this
                            },
                            floor: function() {
                                return this.clone()._floor()
                            },
                            _floor: function() {
                                return this.x = Math.floor(this.x),
                                this.y = Math.floor(this.y),
                                this
                            },
                            distanceTo: function(t) {
                                t = r.point(t);
                                var e = t.x - this.x
                                  , i = t.y - this.y;
                                return Math.sqrt(e * e + i * i)
                            },
                            equals: function(t) {
                                return t = r.point(t),
                                t.x === this.x && t.y === this.y
                            },
                            contains: function(t) {
                                return t = r.point(t),
                                Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                            },
                            toString: function() {
                                return "Point(" + r.Util.formatNum(this.x) + ", " + r.Util.formatNum(this.y) + ")"
                            }
                        },
                        r.point = function(t, e, i) {
                            return t instanceof r.Point ? t : r.Util.isArray(t) ? new r.Point(t[0],t[1]) : t === o || null === t ? t : new r.Point(t,e,i)
                        }
                        ,
                        r.Bounds = function(t, e) {
                            if (t)
                                for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)
                                    this.extend(i[n])
                        }
                        ,
                        r.Bounds.prototype = {
                            extend: function(t) {
                                return t = r.point(t),
                                this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
                                this.max.x = Math.max(t.x, this.max.x),
                                this.min.y = Math.min(t.y, this.min.y),
                                this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
                                this.max = t.clone()),
                                this
                            },
                            getCenter: function(t) {
                                return new r.Point((this.min.x + this.max.x) / 2,(this.min.y + this.max.y) / 2,t)
                            },
                            getBottomLeft: function() {
                                return new r.Point(this.min.x,this.max.y)
                            },
                            getTopRight: function() {
                                return new r.Point(this.max.x,this.min.y)
                            },
                            getSize: function() {
                                return this.max.subtract(this.min)
                            },
                            contains: function(t) {
                                var e, i;
                                return t = "number" == typeof t[0] || t instanceof r.Point ? r.point(t) : r.bounds(t),
                                t instanceof r.Bounds ? (e = t.min,
                                i = t.max) : e = i = t,
                                e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                            },
                            intersects: function(t) {
                                t = r.bounds(t);
                                var e = this.min
                                  , i = this.max
                                  , n = t.min
                                  , o = t.max
                                  , s = o.x >= e.x && n.x <= i.x
                                  , a = o.y >= e.y && n.y <= i.y;
                                return s && a
                            },
                            isValid: function() {
                                return !(!this.min || !this.max)
                            }
                        },
                        r.bounds = function(t, e) {
                            return !t || t instanceof r.Bounds ? t : new r.Bounds(t,e)
                        }
                        ,
                        r.Transformation = function(t, e, i, n) {
                            this._a = t,
                            this._b = e,
                            this._c = i,
                            this._d = n
                        }
                        ,
                        r.Transformation.prototype = {
                            transform: function(t, e) {
                                return this._transform(t.clone(), e)
                            },
                            _transform: function(t, e) {
                                return e = e || 1,
                                t.x = e * (this._a * t.x + this._b),
                                t.y = e * (this._c * t.y + this._d),
                                t
                            },
                            untransform: function(t, e) {
                                return e = e || 1,
                                new r.Point((t.x / e - this._b) / this._a,(t.y / e - this._d) / this._c)
                            }
                        },
                        r.DomUtil = {
                            get: function(t) {
                                return "string" == typeof t ? n.getElementById(t) : t
                            },
                            getStyle: function(t, e) {
                                var i = t.style[e];
                                if (!i && t.currentStyle && (i = t.currentStyle[e]),
                                (!i || "auto" === i) && n.defaultView) {
                                    var o = n.defaultView.getComputedStyle(t, null );
                                    i = o ? o[e] : null
                                }
                                return "auto" === i ? null : i
                            },
                            getViewportOffset: function(t) {
                                var e = 0, i = 0, o = t, s = n.body, a = n.documentElement, l;
                                do {
                                    if (e += o.offsetTop || 0,
                                    i += o.offsetLeft || 0,
                                    e += parseInt(r.DomUtil.getStyle(o, "borderTopWidth"), 10) || 0,
                                    i += parseInt(r.DomUtil.getStyle(o, "borderLeftWidth"), 10) || 0,
                                    l = r.DomUtil.getStyle(o, "position"),
                                    o.offsetParent === s && "absolute" === l)
                                        break;
                                    if ("fixed" === l) {
                                        e += s.scrollTop || a.scrollTop || 0,
                                        i += s.scrollLeft || a.scrollLeft || 0;
                                        break
                                    }
                                    if ("relative" === l && !o.offsetLeft) {
                                        var h = r.DomUtil.getStyle(o, "width")
                                          , u = r.DomUtil.getStyle(o, "max-width")
                                          , c = o.getBoundingClientRect();
                                        "none" === h && "none" === u || (i += c.left + o.clientLeft),
                                        e += c.top + (s.scrollTop || a.scrollTop || 0);
                                        break
                                    }
                                    o = o.offsetParent
                                } while (o);o = t;
                                do {
                                    if (o === s)
                                        break;
                                    e -= o.scrollTop || 0,
                                    i -= o.scrollLeft || 0,
                                    o = o.parentNode
                                } while (o);return new r.Point(i,e)
                            },
                            documentIsLtr: function() {
                                return r.DomUtil._docIsLtrCached || (r.DomUtil._docIsLtrCached = !0,
                                r.DomUtil._docIsLtr = "ltr" === r.DomUtil.getStyle(n.body, "direction")),
                                r.DomUtil._docIsLtr
                            },
                            create: function(t, e, i) {
                                var o = n.createElement(t);
                                return o.className = e,
                                i && i.appendChild(o),
                                o
                            },
                            hasClass: function(t, e) {
                                if (t.classList !== o)
                                    return t.classList.contains(e);
                                var i = r.DomUtil._getClass(t);
                                return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                            },
                            addClass: function(t, e) {
                                if (t.classList !== o)
                                    for (var i = r.Util.splitWords(e), n = 0, s = i.length; s > n; n++)
                                        t.classList.add(i[n]);
                                else if (!r.DomUtil.hasClass(t, e)) {
                                    var a = r.DomUtil._getClass(t);
                                    r.DomUtil._setClass(t, (a ? a + " " : "") + e)
                                }
                            },
                            removeClass: function(t, e) {
                                t.classList !== o ? t.classList.remove(e) : r.DomUtil._setClass(t, r.Util.trim((" " + r.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
                            },
                            _setClass: function(t, e) {
                                t.className.baseVal === o ? t.className = e : t.className.baseVal = e
                            },
                            _getClass: function(t) {
                                return t.className.baseVal === o ? t.className : t.className.baseVal
                            },
                            setOpacity: function(t, e) {
                                if ("opacity"in t.style)
                                    t.style.opacity = e;
                                else if ("filter"in t.style) {
                                    var i = !1
                                      , n = "DXImageTransform.Microsoft.Alpha";
                                    try {
                                        i = t.filters.item(n)
                                    } catch (o) {
                                        if (1 === e)
                                            return
                                    }
                                    e = Math.round(100 * e),
                                    i ? (i.Enabled = 100 !== e,
                                    i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                                }
                            },
                            testProp: function(t) {
                                for (var e = n.documentElement.style, i = 0; i < t.length; i++)
                                    if (t[i]in e)
                                        return t[i];
                                return !1
                            },
                            getTranslateString: function(t) {
                                var e = r.Browser.webkit3d
                                  , i = "translate" + (e ? "3d" : "") + "("
                                  , n = (e ? ",0" : "") + ")";
                                return i + t.x + "px," + t.y + "px" + n
                            },
                            getScaleString: function(t, e) {
                                var i = r.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t)))
                                  , n = " scale(" + t + ") ";
                                return i + n
                            },
                            setPosition: function(t, e, i) {
                                t._leaflet_pos = e,
                                !i && r.Browser.any3d ? t.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px",
                                t.style.top = e.y + "px")
                            },
                            getPosition: function(t) {
                                return t._leaflet_pos
                            }
                        },
                        r.DomUtil.TRANSFORM = r.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
                        r.DomUtil.TRANSITION = r.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
                        r.DomUtil.TRANSITION_END = "webkitTransition" === r.DomUtil.TRANSITION || "OTransition" === r.DomUtil.TRANSITION ? r.DomUtil.TRANSITION + "End" : "transitionend",
                        function() {
                            if ("onselectstart"in n)
                                r.extend(r.DomUtil, {
                                    disableTextSelection: function() {
                                        r.DomEvent.on(t, "selectstart", r.DomEvent.preventDefault)
                                    },
                                    enableTextSelection: function() {
                                        r.DomEvent.off(t, "selectstart", r.DomEvent.preventDefault)
                                    }
                                });
                            else {
                                var e = r.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                                r.extend(r.DomUtil, {
                                    disableTextSelection: function() {
                                        if (e) {
                                            var t = n.documentElement.style;
                                            this._userSelect = t[e],
                                            t[e] = "none"
                                        }
                                    },
                                    enableTextSelection: function() {
                                        e && (n.documentElement.style[e] = this._userSelect,
                                        delete this._userSelect)
                                    }
                                })
                            }
                            r.extend(r.DomUtil, {
                                disableImageDrag: function() {
                                    r.DomEvent.on(t, "dragstart", r.DomEvent.preventDefault)
                                },
                                enableImageDrag: function() {
                                    r.DomEvent.off(t, "dragstart", r.DomEvent.preventDefault)
                                }
                            })
                        }(),
                        r.LatLng = function(t, e, i) {
                            if (t = parseFloat(t),
                            e = parseFloat(e),
                            isNaN(t) || isNaN(e))
                                throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                            this.lat = t,
                            this.lng = e,
                            i !== o && (this.alt = parseFloat(i))
                        }
                        ,
                        r.extend(r.LatLng, {
                            DEG_TO_RAD: Math.PI / 180,
                            RAD_TO_DEG: 180 / Math.PI,
                            MAX_MARGIN: 1e-9
                        }),
                        r.LatLng.prototype = {
                            equals: function(t) {
                                if (!t)
                                    return !1;
                                t = r.latLng(t);
                                var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                                return e <= r.LatLng.MAX_MARGIN
                            },
                            toString: function(t) {
                                return "LatLng(" + r.Util.formatNum(this.lat, t) + ", " + r.Util.formatNum(this.lng, t) + ")"
                            },
                            distanceTo: function(t) {
                                t = r.latLng(t);
                                var e = 6378137
                                  , i = r.LatLng.DEG_TO_RAD
                                  , n = (t.lat - this.lat) * i
                                  , o = (t.lng - this.lng) * i
                                  , s = this.lat * i
                                  , a = t.lat * i
                                  , l = Math.sin(n / 2)
                                  , h = Math.sin(o / 2)
                                  , u = l * l + h * h * Math.cos(s) * Math.cos(a);
                                return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
                            },
                            wrap: function(t, e) {
                                var i = this.lng;
                                return t = t || -180,
                                e = e || 180,
                                i = (i + e) % (e - t) + (t > i || i === e ? e : t),
                                new r.LatLng(this.lat,i)
                            }
                        },
                        r.latLng = function(t, e) {
                            return t instanceof r.LatLng ? t : r.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new r.LatLng(t[0],t[1],t[2]) : null : t === o || null === t ? t : "object" == typeof t && "lat"in t ? new r.LatLng(t.lat,"lng"in t ? t.lng : t.lon) : e === o ? null : new r.LatLng(t,e)
                        }
                        ,
                        r.LatLngBounds = function(t, e) {
                            if (t)
                                for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)
                                    this.extend(i[n])
                        }
                        ,
                        r.LatLngBounds.prototype = {
                            extend: function(t) {
                                if (!t)
                                    return this;
                                var e = r.latLng(t);
                                return t = null !== e ? e : r.latLngBounds(t),
                                t instanceof r.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat),
                                this._southWest.lng = Math.min(t.lng, this._southWest.lng),
                                this._northEast.lat = Math.max(t.lat, this._northEast.lat),
                                this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new r.LatLng(t.lat,t.lng),
                                this._northEast = new r.LatLng(t.lat,t.lng)) : t instanceof r.LatLngBounds && (this.extend(t._southWest),
                                this.extend(t._northEast)),
                                this
                            },
                            pad: function(t) {
                                var e = this._southWest
                                  , i = this._northEast
                                  , n = Math.abs(e.lat - i.lat) * t
                                  , o = Math.abs(e.lng - i.lng) * t;
                                return new r.LatLngBounds(new r.LatLng(e.lat - n,e.lng - o),new r.LatLng(i.lat + n,i.lng + o))
                            },
                            getCenter: function() {
                                return new r.LatLng((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
                            },
                            getSouthWest: function() {
                                return this._southWest
                            },
                            getNorthEast: function() {
                                return this._northEast
                            },
                            getNorthWest: function() {
                                return new r.LatLng(this.getNorth(),this.getWest())
                            },
                            getSouthEast: function() {
                                return new r.LatLng(this.getSouth(),this.getEast())
                            },
                            getWest: function() {
                                return this._southWest.lng
                            },
                            getSouth: function() {
                                return this._southWest.lat
                            },
                            getEast: function() {
                                return this._northEast.lng
                            },
                            getNorth: function() {
                                return this._northEast.lat
                            },
                            contains: function(t) {
                                t = "number" == typeof t[0] || t instanceof r.LatLng ? r.latLng(t) : r.latLngBounds(t);
                                var e = this._southWest, i = this._northEast, n, o;
                                return t instanceof r.LatLngBounds ? (n = t.getSouthWest(),
                                o = t.getNorthEast()) : n = o = t,
                                e && n && i && o ? n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng : !1
                            },
                            intersects: function(t) {
                                t = r.latLngBounds(t);
                                var e = this._southWest
                                  , i = this._northEast
                                  , n = t.getSouthWest()
                                  , o = t.getNorthEast()
                                  , s = o.lat >= e.lat && n.lat <= i.lat
                                  , a = o.lng >= e.lng && n.lng <= i.lng;
                                return s && a
                            },
                            toBBoxString: function() {
                                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                            },
                            equals: function(t) {
                                return t ? (t = r.latLngBounds(t),
                                this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
                            },
                            isValid: function() {
                                return !(!this._southWest || !this._northEast)
                            }
                        },
                        r.latLngBounds = function(t, e) {
                            return !t || t instanceof r.LatLngBounds ? t : new r.LatLngBounds(t,e)
                        }
                        ,
                        r.Projection = {},
                        r.Projection.SphericalMercator = {
                            MAX_LATITUDE: 85.0511287798,
                            project: function(t) {
                                var e = r.LatLng.DEG_TO_RAD
                                  , i = this.MAX_LATITUDE
                                  , n = Math.max(Math.min(i, t.lat), -i)
                                  , o = t.lng * e
                                  , s = n * e;
                                return s = Math.log(Math.tan(Math.PI / 4 + s / 2)),
                                new r.Point(o,s)
                            },
                            unproject: function(t) {
                                var e = r.LatLng.RAD_TO_DEG
                                  , i = t.x * e
                                  , n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
                                return new r.LatLng(n,i)
                            }
                        },
                        r.Projection.LonLat = {
                            project: function(t) {
                                return new r.Point(t.lng,t.lat)
                            },
                            unproject: function(t) {
                                return new r.LatLng(t.y,t.x)
                            }
                        },
                        r.CRS = {
                            latLngToPoint: function(t, e) {
                                var i = this.projection.project(t)
                                  , n = this.scale(e);
                                return this.transformation._transform(i, n)
                            },
                            pointToLatLng: function(t, e) {
                                var i = this.scale(e)
                                  , n = this.transformation.untransform(t, i);
                                return this.projection.unproject(n)
                            },
                            project: function(t) {
                                return this.projection.project(t)
                            },
                            scale: function(t) {
                                return 256 * Math.pow(2, t)
                            },
                            getSize: function(t) {
                                var e = this.scale(t);
                                return r.point(e, e)
                            }
                        },
                        r.CRS.Simple = r.extend({}, r.CRS, {
                            projection: r.Projection.LonLat,
                            transformation: new r.Transformation(1,0,-1,0),
                            scale: function(t) {
                                return Math.pow(2, t)
                            }
                        }),
                        r.CRS.EPSG3857 = r.extend({}, r.CRS, {
                            code: "EPSG:3857",
                            projection: r.Projection.SphericalMercator,
                            transformation: new r.Transformation(.5 / Math.PI,.5,-.5 / Math.PI,.5),
                            project: function(t) {
                                var e = this.projection.project(t)
                                  , i = 6378137;
                                return e.multiplyBy(i)
                            }
                        }),
                        r.CRS.EPSG900913 = r.extend({}, r.CRS.EPSG3857, {
                            code: "EPSG:900913"
                        }),
                        r.CRS.EPSG4326 = r.extend({}, r.CRS, {
                            code: "EPSG:4326",
                            projection: r.Projection.LonLat,
                            transformation: new r.Transformation(1 / 360,.5,-1 / 360,.5)
                        }),
                        r.Map = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                crs: r.CRS.EPSG3857,
                                fadeAnimation: r.DomUtil.TRANSITION && !r.Browser.android23,
                                trackResize: !0,
                                markerZoomAnimation: r.DomUtil.TRANSITION && r.Browser.any3d
                            },
                            initialize: function(t, e) {
                                e = r.setOptions(this, e),
                                this._initContainer(t),
                                this._initLayout(),
                                this._onResize = r.bind(this._onResize, this),
                                this._initEvents(),
                                e.maxBounds && this.setMaxBounds(e.maxBounds),
                                e.center && e.zoom !== o && this.setView(r.latLng(e.center), e.zoom, {
                                    reset: !0
                                }),
                                this._handlers = [],
                                this._layers = {},
                                this._zoomBoundLayers = {},
                                this._tileLayersNum = 0,
                                this.callInitHooks(),
                                this._addLayers(e.layers)
                            },
                            setView: function(t, e) {
                                return e = e === o ? this.getZoom() : e,
                                this._resetView(r.latLng(t), this._limitZoom(e)),
                                this
                            },
                            setZoom: function(t, e) {
                                return this._loaded ? this.setView(this.getCenter(), t, {
                                    zoom: e
                                }) : (this._zoom = this._limitZoom(t),
                                this)
                            },
                            zoomIn: function(t, e) {
                                return this.setZoom(this._zoom + (t || 1), e)
                            },
                            zoomOut: function(t, e) {
                                return this.setZoom(this._zoom - (t || 1), e)
                            },
                            setZoomAround: function(t, e, i) {
                                var n = this.getZoomScale(e)
                                  , o = this.getSize().divideBy(2)
                                  , s = t instanceof r.Point ? t : this.latLngToContainerPoint(t)
                                  , a = s.subtract(o).multiplyBy(1 - 1 / n)
                                  , l = this.containerPointToLatLng(o.add(a));
                                return this.setView(l, e, {
                                    zoom: i
                                })
                            },
                            fitBounds: function(t, e) {
                                e = e || {},
                                t = t.getBounds ? t.getBounds() : r.latLngBounds(t);
                                var i = r.point(e.paddingTopLeft || e.padding || [0, 0])
                                  , n = r.point(e.paddingBottomRight || e.padding || [0, 0])
                                  , o = this.getBoundsZoom(t, !1, i.add(n))
                                  , s = n.subtract(i).divideBy(2)
                                  , a = this.project(t.getSouthWest(), o)
                                  , l = this.project(t.getNorthEast(), o)
                                  , h = this.unproject(a.add(l).divideBy(2).add(s), o);
                                return o = e && e.maxZoom ? Math.min(e.maxZoom, o) : o,
                                this.setView(h, o, e)
                            },
                            fitWorld: function(t) {
                                return this.fitBounds([[-90, -180], [90, 180]], t)
                            },
                            panTo: function(t, e) {
                                return this.setView(t, this._zoom, {
                                    pan: e
                                })
                            },
                            panBy: function(t) {
                                return this.fire("movestart"),
                                this._rawPanBy(r.point(t)),
                                this.fire("move"),
                                this.fire("moveend")
                            },
                            setMaxBounds: function(t) {
                                return t = r.latLngBounds(t),
                                this.options.maxBounds = t,
                                t ? (this._loaded && this._panInsideMaxBounds(),
                                this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
                            },
                            panInsideBounds: function(t, e) {
                                var i = this.getCenter()
                                  , n = this._limitCenter(i, this._zoom, t);
                                return i.equals(n) ? this : this.panTo(n, e)
                            },
                            addLayer: function(t) {
                                var e = r.stamp(t);
                                return this._layers[e] ? this : (this._layers[e] = t,
                                !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t,
                                this._updateZoomLevels()),
                                this.options.zoomAnimation && r.TileLayer && t instanceof r.TileLayer && (this._tileLayersNum++,
                                this._tileLayersToLoad++,
                                t.on("load", this._onTileLayerLoad, this)),
                                this._loaded && this._layerAdd(t),
                                this)
                            },
                            removeLayer: function(t) {
                                var e = r.stamp(t);
                                return this._layers[e] ? (this._loaded && t.onRemove(this),
                                delete this._layers[e],
                                this._loaded && this.fire("layerremove", {
                                    layer: t
                                }),
                                this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e],
                                this._updateZoomLevels()),
                                this.options.zoomAnimation && r.TileLayer && t instanceof r.TileLayer && (this._tileLayersNum--,
                                this._tileLayersToLoad--,
                                t.off("load", this._onTileLayerLoad, this)),
                                this) : this
                            },
                            hasLayer: function(t) {
                                return t ? r.stamp(t)in this._layers : !1
                            },
                            eachLayer: function(t, e) {
                                for (var i in this._layers)
                                    t.call(e, this._layers[i]);
                                return this
                            },
                            invalidateSize: function(t) {
                                if (!this._loaded)
                                    return this;
                                t = r.extend({
                                    animate: !1,
                                    pan: !0
                                }, t === !0 ? {
                                    animate: !0
                                } : t);
                                var e = this.getSize();
                                this._sizeChanged = !0,
                                this._initialCenter = null ;
                                var i = this.getSize()
                                  , n = e.divideBy(2).round()
                                  , o = i.divideBy(2).round()
                                  , s = n.subtract(o);
                                return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s),
                                this.fire("move"),
                                t.debounceMoveend ? (clearTimeout(this._sizeTimer),
                                this._sizeTimer = setTimeout(r.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
                                this.fire("resize", {
                                    oldSize: e,
                                    newSize: i
                                })) : this
                            },
                            addHandler: function(t, e) {
                                if (!e)
                                    return this;
                                var i = this[t] = new e(this);
                                return this._handlers.push(i),
                                this.options[t] && i.enable(),
                                this
                            },
                            remove: function() {
                                this._loaded && this.fire("unload"),
                                this._initEvents("off");
                                try {
                                    delete this._container._leaflet
                                } catch (t) {
                                    this._container._leaflet = o
                                }
                                return this._clearPanes(),
                                this._clearControlPos && this._clearControlPos(),
                                this._clearHandlers(),
                                this
                            },
                            getCenter: function() {
                                return this._checkIfLoaded(),
                                this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                            },
                            getZoom: function() {
                                return this._zoom
                            },
                            getBounds: function() {
                                var t = this.getPixelBounds()
                                  , e = this.unproject(t.getBottomLeft())
                                  , i = this.unproject(t.getTopRight());
                                return new r.LatLngBounds(e,i)
                            },
                            getMinZoom: function() {
                                return this.options.minZoom === o ? this._layersMinZoom === o ? 0 : this._layersMinZoom : this.options.minZoom
                            },
                            getMaxZoom: function() {
                                return this.options.maxZoom === o ? this._layersMaxZoom === o ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                            },
                            getBoundsZoom: function(t, e, i) {
                                t = r.latLngBounds(t);
                                var n = this.getMinZoom() - (e ? 1 : 0), o = this.getMaxZoom(), s = this.getSize(), a = t.getNorthWest(), l = t.getSouthEast(), h = !0, u;
                                i = r.point(i || [0, 0]);
                                do
                                    n++,
                                    u = this.project(l, n).subtract(this.project(a, n)).add(i),
                                    h = e ? u.x < s.x || u.y < s.y : s.contains(u);
                                while (h && o >= n);return h && e ? null : e ? n : n - 1
                            },
                            getSize: function() {
                                return this._size && !this._sizeChanged || (this._size = new r.Point(this._container.clientWidth,this._container.clientHeight),
                                this._sizeChanged = !1),
                                this._size.clone()
                            },
                            getPixelBounds: function() {
                                var t = this._getTopLeftPoint();
                                return new r.Bounds(t,t.add(this.getSize()))
                            },
                            getPixelOrigin: function() {
                                return this._checkIfLoaded(),
                                this._initialTopLeftPoint
                            },
                            getPanes: function() {
                                return this._panes
                            },
                            getContainer: function() {
                                return this._container
                            },
                            getZoomScale: function(t) {
                                var e = this.options.crs;
                                return e.scale(t) / e.scale(this._zoom)
                            },
                            getScaleZoom: function(t) {
                                return this._zoom + Math.log(t) / Math.LN2
                            },
                            project: function(t, e) {
                                return e = e === o ? this._zoom : e,
                                this.options.crs.latLngToPoint(r.latLng(t), e)
                            },
                            unproject: function(t, e) {
                                return e = e === o ? this._zoom : e,
                                this.options.crs.pointToLatLng(r.point(t), e)
                            },
                            layerPointToLatLng: function(t) {
                                var e = r.point(t).add(this.getPixelOrigin());
                                return this.unproject(e)
                            },
                            latLngToLayerPoint: function(t) {
                                var e = this.project(r.latLng(t))._round();
                                return e._subtract(this.getPixelOrigin())
                            },
                            containerPointToLayerPoint: function(t) {
                                return r.point(t).subtract(this._getMapPanePos())
                            },
                            layerPointToContainerPoint: function(t) {
                                return r.point(t).add(this._getMapPanePos())
                            },
                            containerPointToLatLng: function(t) {
                                var e = this.containerPointToLayerPoint(r.point(t));
                                return this.layerPointToLatLng(e)
                            },
                            latLngToContainerPoint: function(t) {
                                return this.layerPointToContainerPoint(this.latLngToLayerPoint(r.latLng(t)))
                            },
                            mouseEventToContainerPoint: function(t) {
                                return r.DomEvent.getMousePosition(t, this._container)
                            },
                            mouseEventToLayerPoint: function(t) {
                                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                            },
                            mouseEventToLatLng: function(t) {
                                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                            },
                            _initContainer: function(t) {
                                var e = this._container = r.DomUtil.get(t);
                                if (!e)
                                    throw new Error("Map container not found.");
                                if (e._leaflet)
                                    throw new Error("Map container is already initialized.");
                                e._leaflet = !0
                            },
                            _initLayout: function() {
                                var t = this._container;
                                r.DomUtil.addClass(t, "leaflet-container" + (r.Browser.touch ? " leaflet-touch" : "") + (r.Browser.retina ? " leaflet-retina" : "") + (r.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                                var e = r.DomUtil.getStyle(t, "position");
                                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
                                this._initPanes(),
                                this._initControlPos && this._initControlPos()
                            },
                            _initPanes: function() {
                                var t = this._panes = {};
                                this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container),
                                this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane),
                                t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane),
                                t.shadowPane = this._createPane("leaflet-shadow-pane"),
                                t.overlayPane = this._createPane("leaflet-overlay-pane"),
                                t.markerPane = this._createPane("leaflet-marker-pane"),
                                t.popupPane = this._createPane("leaflet-popup-pane");
                                var e = " leaflet-zoom-hide";
                                this.options.markerZoomAnimation || (r.DomUtil.addClass(t.markerPane, e),
                                r.DomUtil.addClass(t.shadowPane, e),
                                r.DomUtil.addClass(t.popupPane, e))
                            },
                            _createPane: function(t, e) {
                                return r.DomUtil.create("div", t, e || this._panes.objectsPane)
                            },
                            _clearPanes: function() {
                                this._container.removeChild(this._mapPane)
                            },
                            _addLayers: function(t) {
                                t = t ? r.Util.isArray(t) ? t : [t] : [];
                                for (var e = 0, i = t.length; i > e; e++)
                                    this.addLayer(t[e])
                            },
                            _resetView: function(t, e, i, n) {
                                var o = this._zoom !== e;
                                n || (this.fire("movestart"),
                                o && this.fire("zoomstart")),
                                this._zoom = e,
                                this._initialCenter = t,
                                this._initialTopLeftPoint = this._getNewTopLeftPoint(t),
                                i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : r.DomUtil.setPosition(this._mapPane, new r.Point(0,0)),
                                this._tileLayersToLoad = this._tileLayersNum;
                                var s = !this._loaded;
                                this._loaded = !0,
                                this.fire("viewreset", {
                                    hard: !i
                                }),
                                s && (this.fire("load"),
                                this.eachLayer(this._layerAdd, this)),
                                this.fire("move"),
                                (o || n) && this.fire("zoomend"),
                                this.fire("moveend", {
                                    hard: !i
                                })
                            },
                            _rawPanBy: function(t) {
                                r.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
                            },
                            _getZoomSpan: function() {
                                return this.getMaxZoom() - this.getMinZoom()
                            },
                            _updateZoomLevels: function() {
                                var t, e = 1 / 0, i = -(1 / 0), n = this._getZoomSpan();
                                for (t in this._zoomBoundLayers) {
                                    var s = this._zoomBoundLayers[t];
                                    isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)),
                                    isNaN(s.options.maxZoom) || (i = Math.max(i, s.options.maxZoom))
                                }
                                t === o ? this._layersMaxZoom = this._layersMinZoom = o : (this._layersMaxZoom = i,
                                this._layersMinZoom = e),
                                n !== this._getZoomSpan() && this.fire("zoomlevelschange")
                            },
                            _panInsideMaxBounds: function() {
                                this.panInsideBounds(this.options.maxBounds)
                            },
                            _checkIfLoaded: function() {
                                if (!this._loaded)
                                    throw new Error("Set map center and zoom first.")
                            },
                            _initEvents: function(e) {
                                if (r.DomEvent) {
                                    e = e || "on",
                                    r.DomEvent[e](this._container, "click", this._onMouseClick, this);
                                    var i = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"], n, o;
                                    for (n = 0,
                                    o = i.length; o > n; n++)
                                        r.DomEvent[e](this._container, i[n], this._fireMouseEvent, this);
                                    this.options.trackResize && r.DomEvent[e](t, "resize", this._onResize, this)
                                }
                            },
                            _onResize: function() {
                                r.Util.cancelAnimFrame(this._resizeRequest),
                                this._resizeRequest = r.Util.requestAnimFrame(function() {
                                    this.invalidateSize({
                                        debounceMoveend: !0
                                    })
                                }, this, !1, this._container)
                            },
                            _onMouseClick: function(t) {
                                !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || r.DomEvent._skipped(t) || (this.fire("preclick"),
                                this._fireMouseEvent(t))
                            },
                            _fireMouseEvent: function(t) {
                                if (this._loaded && !r.DomEvent._skipped(t)) {
                                    var e = t.type;
                                    if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e,
                                    this.hasEventListeners(e)) {
                                        "contextmenu" === e && r.DomEvent.preventDefault(t);
                                        var i = this.mouseEventToContainerPoint(t)
                                          , n = this.containerPointToLayerPoint(i)
                                          , o = this.layerPointToLatLng(n);
                                        this.fire(e, {
                                            latlng: o,
                                            layerPoint: n,
                                            containerPoint: i,
                                            originalEvent: t
                                        })
                                    }
                                }
                            },
                            _onTileLayerLoad: function() {
                                this._tileLayersToLoad--,
                                this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
                            },
                            _clearHandlers: function() {
                                for (var t = 0, e = this._handlers.length; e > t; t++)
                                    this._handlers[t].disable()
                            },
                            whenReady: function(t, e) {
                                return this._loaded ? t.call(e || this, this) : this.on("load", t, e),
                                this
                            },
                            _layerAdd: function(t) {
                                t.onAdd(this),
                                this.fire("layeradd", {
                                    layer: t
                                })
                            },
                            _getMapPanePos: function() {
                                return r.DomUtil.getPosition(this._mapPane)
                            },
                            _moved: function() {
                                var t = this._getMapPanePos();
                                return t && !t.equals([0, 0])
                            },
                            _getTopLeftPoint: function() {
                                return this.getPixelOrigin().subtract(this._getMapPanePos())
                            },
                            _getNewTopLeftPoint: function(t, e) {
                                var i = this.getSize()._divideBy(2);
                                return this.project(t, e)._subtract(i)._round()
                            },
                            _latLngToNewLayerPoint: function(t, e, i) {
                                var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
                                return this.project(t, e)._subtract(n)
                            },
                            _getCenterLayerPoint: function() {
                                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                            },
                            _getCenterOffset: function(t) {
                                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                            },
                            _limitCenter: function(t, e, i) {
                                if (!i)
                                    return t;
                                var n = this.project(t, e)
                                  , o = this.getSize().divideBy(2)
                                  , s = new r.Bounds(n.subtract(o),n.add(o))
                                  , a = this._getBoundsOffset(s, i, e);
                                return this.unproject(n.add(a), e)
                            },
                            _limitOffset: function(t, e) {
                                if (!e)
                                    return t;
                                var i = this.getPixelBounds()
                                  , n = new r.Bounds(i.min.add(t),i.max.add(t));
                                return t.add(this._getBoundsOffset(n, e))
                            },
                            _getBoundsOffset: function(t, e, i) {
                                var n = this.project(e.getNorthWest(), i).subtract(t.min)
                                  , o = this.project(e.getSouthEast(), i).subtract(t.max)
                                  , s = this._rebound(n.x, -o.x)
                                  , a = this._rebound(n.y, -o.y);
                                return new r.Point(s,a)
                            },
                            _rebound: function(t, e) {
                                return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                            },
                            _limitZoom: function(t) {
                                var e = this.getMinZoom()
                                  , i = this.getMaxZoom();
                                return Math.max(e, Math.min(i, t))
                            }
                        }),
                        r.map = function(t, e) {
                            return new r.Map(t,e)
                        }
                        ,
                        r.Projection.Mercator = {
                            MAX_LATITUDE: 85.0840591556,
                            R_MINOR: 6356752.314245179,
                            R_MAJOR: 6378137,
                            project: function(t) {
                                var e = r.LatLng.DEG_TO_RAD
                                  , i = this.MAX_LATITUDE
                                  , n = Math.max(Math.min(i, t.lat), -i)
                                  , o = this.R_MAJOR
                                  , s = this.R_MINOR
                                  , a = t.lng * e * o
                                  , l = n * e
                                  , h = s / o
                                  , u = Math.sqrt(1 - h * h)
                                  , c = u * Math.sin(l);
                                c = Math.pow((1 - c) / (1 + c), .5 * u);
                                var p = Math.tan(.5 * (.5 * Math.PI - l)) / c;
                                return l = -o * Math.log(p),
                                new r.Point(a,l)
                            },
                            unproject: function(t) {
                                for (var e = r.LatLng.RAD_TO_DEG, i = this.R_MAJOR, n = this.R_MINOR, o = t.x * e / i, s = n / i, a = Math.sqrt(1 - s * s), l = Math.exp(-t.y / i), h = Math.PI / 2 - 2 * Math.atan(l), u = 15, c = 1e-7, p = u, d = .1, m; Math.abs(d) > c && --p > 0; )
                                    m = a * Math.sin(h),
                                    d = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - m) / (1 + m), .5 * a)) - h,
                                    h += d;
                                return new r.LatLng(h * e,o)
                            }
                        },
                        r.CRS.EPSG3395 = r.extend({}, r.CRS, {
                            code: "EPSG:3395",
                            projection: r.Projection.Mercator,
                            transformation: function() {
                                var t = r.Projection.Mercator
                                  , e = t.R_MAJOR
                                  , i = .5 / (Math.PI * e);
                                return new r.Transformation(i,.5,-i,.5)
                            }()
                        }),
                        r.TileLayer = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                minZoom: 0,
                                maxZoom: 18,
                                tileSize: 256,
                                subdomains: "abc",
                                errorTileUrl: "",
                                attribution: "",
                                zoomOffset: 0,
                                opacity: 1,
                                unloadInvisibleTiles: r.Browser.mobile,
                                updateWhenIdle: r.Browser.mobile
                            },
                            initialize: function(t, e) {
                                e = r.setOptions(this, e),
                                e.detectRetina && r.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2),
                                e.zoomOffset++,
                                e.minZoom > 0 && e.minZoom--,
                                this.options.maxZoom--),
                                e.bounds && (e.bounds = r.latLngBounds(e.bounds)),
                                this._url = t;
                                var i = this.options.subdomains;
                                "string" == typeof i && (this.options.subdomains = i.split(""))
                            },
                            onAdd: function(t) {
                                this._map = t,
                                this._animated = t._zoomAnimated,
                                this._initContainer(),
                                t.on({
                                    viewreset: this._reset,
                                    moveend: this._update
                                }, this),
                                this._animated && t.on({
                                    zoomanim: this._animateZoom,
                                    zoomend: this._endZoomAnim
                                }, this),
                                this.options.updateWhenIdle || (this._limitedUpdate = r.Util.limitExecByInterval(this._update, 150, this),
                                t.on("move", this._limitedUpdate, this)),
                                this._reset(),
                                this._update()
                            },
                            addTo: function(t) {
                                return t.addLayer(this),
                                this
                            },
                            onRemove: function(t) {
                                this._container.parentNode.removeChild(this._container),
                                t.off({
                                    viewreset: this._reset,
                                    moveend: this._update
                                }, this),
                                this._animated && t.off({
                                    zoomanim: this._animateZoom,
                                    zoomend: this._endZoomAnim
                                }, this),
                                this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this),
                                this._container = null ,
                                this._map = null
                            },
                            bringToFront: function() {
                                var t = this._map._panes.tilePane;
                                return this._container && (t.appendChild(this._container),
                                this._setAutoZIndex(t, Math.max)),
                                this
                            },
                            bringToBack: function() {
                                var t = this._map._panes.tilePane;
                                return this._container && (t.insertBefore(this._container, t.firstChild),
                                this._setAutoZIndex(t, Math.min)),
                                this
                            },
                            getAttribution: function() {
                                return this.options.attribution
                            },
                            getContainer: function() {
                                return this._container
                            },
                            setOpacity: function(t) {
                                return this.options.opacity = t,
                                this._map && this._updateOpacity(),
                                this
                            },
                            setZIndex: function(t) {
                                return this.options.zIndex = t,
                                this._updateZIndex(),
                                this
                            },
                            setUrl: function(t, e) {
                                return this._url = t,
                                e || this.redraw(),
                                this
                            },
                            redraw: function() {
                                return this._map && (this._reset({
                                    hard: !0
                                }),
                                this._update()),
                                this
                            },
                            _updateZIndex: function() {
                                this._container && this.options.zIndex !== o && (this._container.style.zIndex = this.options.zIndex)
                            },
                            _setAutoZIndex: function(t, e) {
                                var i = t.children, n = -e(1 / 0, -(1 / 0)), o, s, r;
                                for (s = 0,
                                r = i.length; r > s; s++)
                                    i[s] !== this._container && (o = parseInt(i[s].style.zIndex, 10),
                                    isNaN(o) || (n = e(n, o)));
                                this.options.zIndex = this._container.style.zIndex = (isFinite(n) ? n : 0) + e(1, -1)
                            },
                            _updateOpacity: function() {
                                var t, e = this._tiles;
                                if (r.Browser.ielt9)
                                    for (t in e)
                                        r.DomUtil.setOpacity(e[t], this.options.opacity);
                                else
                                    r.DomUtil.setOpacity(this._container, this.options.opacity)
                            },
                            _initContainer: function() {
                                var t = this._map._panes.tilePane;
                                if (!this._container) {
                                    if (this._container = r.DomUtil.create("div", "leaflet-layer"),
                                    this._updateZIndex(),
                                    this._animated) {
                                        var e = "leaflet-tile-container";
                                        this._bgBuffer = r.DomUtil.create("div", e, this._container),
                                        this._tileContainer = r.DomUtil.create("div", e, this._container)
                                    } else
                                        this._tileContainer = this._container;
                                    t.appendChild(this._container),
                                    this.options.opacity < 1 && this._updateOpacity()
                                }
                            },
                            _reset: function(t) {
                                for (var e in this._tiles)
                                    this.fire("tileunload", {
                                        tile: this._tiles[e]
                                    });
                                this._tiles = {},
                                this._tilesToLoad = 0,
                                this.options.reuseTiles && (this._unusedTiles = []),
                                this._tileContainer.innerHTML = "",
                                this._animated && t && t.hard && this._clearBgBuffer(),
                                this._initContainer()
                            },
                            _getTileSize: function() {
                                var t = this._map
                                  , e = t.getZoom() + this.options.zoomOffset
                                  , i = this.options.maxNativeZoom
                                  , n = this.options.tileSize;
                                return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)),
                                n
                            },
                            _update: function() {
                                if (this._map) {
                                    var t = this._map
                                      , e = t.getPixelBounds()
                                      , i = t.getZoom()
                                      , n = this._getTileSize();
                                    if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                                        var o = r.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                                        this._addTilesFromCenterOut(o),
                                        (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(o)
                                    }
                                }
                            },
                            _addTilesFromCenterOut: function(t) {
                                var e = [], i = t.getCenter(), o, s, a;
                                for (o = t.min.y; o <= t.max.y; o++)
                                    for (s = t.min.x; s <= t.max.x; s++)
                                        a = new r.Point(s,o),
                                        this._tileShouldBeLoaded(a) && e.push(a);
                                var l = e.length;
                                if (0 !== l) {
                                    e.sort(function(t, e) {
                                        return t.distanceTo(i) - e.distanceTo(i)
                                    });
                                    var h = n.createDocumentFragment();
                                    for (this._tilesToLoad || this.fire("loading"),
                                    this._tilesToLoad += l,
                                    s = 0; l > s; s++)
                                        this._addTile(e[s], h);
                                    this._tileContainer.appendChild(h)
                                }
                            },
                            _tileShouldBeLoaded: function(t) {
                                if (t.x + ":" + t.y in this._tiles)
                                    return !1;
                                var e = this.options;
                                if (!e.continuousWorld) {
                                    var i = this._getWrapTileNum();
                                    if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y)
                                        return !1
                                }
                                if (e.bounds) {
                                    var n = e.tileSize
                                      , o = t.multiplyBy(n)
                                      , s = o.add([n, n])
                                      , r = this._map.unproject(o)
                                      , a = this._map.unproject(s);
                                    if (e.continuousWorld || e.noWrap || (r = r.wrap(),
                                    a = a.wrap()),
                                    !e.bounds.intersects([r, a]))
                                        return !1
                                }
                                return !0
                            },
                            _removeOtherTiles: function(t) {
                                var e, i, n, o;
                                for (o in this._tiles)
                                    e = o.split(":"),
                                    i = parseInt(e[0], 10),
                                    n = parseInt(e[1], 10),
                                    (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
                            },
                            _removeTile: function(t) {
                                var e = this._tiles[t];
                                this.fire("tileunload", {
                                    tile: e,
                                    url: e.src
                                }),
                                this.options.reuseTiles ? (r.DomUtil.removeClass(e, "leaflet-tile-loaded"),
                                this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e),
                                r.Browser.android || (e.onload = null ,
                                e.src = r.Util.emptyImageUrl),
                                delete this._tiles[t]
                            },
                            _addTile: function(t, e) {
                                var i = this._getTilePos(t)
                                  , n = this._getTile();
                                r.DomUtil.setPosition(n, i, r.Browser.chrome),
                                this._tiles[t.x + ":" + t.y] = n,
                                this._loadTile(n, t),
                                n.parentNode !== this._tileContainer && e.appendChild(n)
                            },
                            _getZoomForUrl: function() {
                                var t = this.options
                                  , e = this._map.getZoom();
                                return t.zoomReverse && (e = t.maxZoom - e),
                                e += t.zoomOffset,
                                t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
                            },
                            _getTilePos: function(t) {
                                var e = this._map.getPixelOrigin()
                                  , i = this._getTileSize();
                                return t.multiplyBy(i).subtract(e)
                            },
                            getTileUrl: function(t) {
                                return r.Util.template(this._url, r.extend({
                                    s: this._getSubdomain(t),
                                    z: t.z,
                                    x: t.x,
                                    y: t.y
                                }, this.options))
                            },
                            _getWrapTileNum: function() {
                                var t = this._map.options.crs
                                  , e = t.getSize(this._map.getZoom());
                                return e.divideBy(this._getTileSize())._floor()
                            },
                            _adjustTilePoint: function(t) {
                                var e = this._getWrapTileNum();
                                this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x),
                                this.options.tms && (t.y = e.y - t.y - 1),
                                t.z = this._getZoomForUrl()
                            },
                            _getSubdomain: function(t) {
                                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                                return this.options.subdomains[e]
                            },
                            _getTile: function() {
                                if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                                    var t = this._unusedTiles.pop();
                                    return this._resetTile(t),
                                    t
                                }
                                return this._createTile()
                            },
                            _resetTile: function() {},
                            _createTile: function() {
                                var t = r.DomUtil.create("img", "leaflet-tile");
                                return t.style.width = t.style.height = this._getTileSize() + "px",
                                t.galleryimg = "no",
                                t.onselectstart = t.onmousemove = r.Util.falseFn,
                                r.Browser.ielt9 && this.options.opacity !== o && r.DomUtil.setOpacity(t, this.options.opacity),
                                r.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"),
                                t
                            },
                            _loadTile: function(t, e) {
                                t._layer = this,
                                t.onload = this._tileOnLoad,
                                t.onerror = this._tileOnError,
                                this._adjustTilePoint(e),
                                t.src = this.getTileUrl(e),
                                this.fire("tileloadstart", {
                                    tile: t,
                                    url: t.src
                                })
                            },
                            _tileLoaded: function() {
                                this._tilesToLoad--,
                                this._animated && r.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"),
                                this._tilesToLoad || (this.fire("load"),
                                this._animated && (clearTimeout(this._clearBgBufferTimer),
                                this._clearBgBufferTimer = setTimeout(r.bind(this._clearBgBuffer, this), 500)))
                            },
                            _tileOnLoad: function() {
                                var t = this._layer;
                                this.src !== r.Util.emptyImageUrl && (r.DomUtil.addClass(this, "leaflet-tile-loaded"),
                                t.fire("tileload", {
                                    tile: this,
                                    url: this.src
                                })),
                                t._tileLoaded()
                            },
                            _tileOnError: function() {
                                var t = this._layer;
                                t.fire("tileerror", {
                                    tile: this,
                                    url: this.src
                                });
                                var e = t.options.errorTileUrl;
                                e && (this.src = e),
                                t._tileLoaded()
                            }
                        }),
                        r.tileLayer = function(t, e) {
                            return new r.TileLayer(t,e)
                        }
                        ,
                        r.TileLayer.WMS = r.TileLayer.extend({
                            defaultWmsParams: {
                                service: "WMS",
                                request: "GetMap",
                                version: "1.1.1",
                                layers: "",
                                styles: "",
                                format: "image/jpeg",
                                transparent: !1
                            },
                            initialize: function(t, e) {
                                this._url = t;
                                var i = r.extend({}, this.defaultWmsParams)
                                  , n = e.tileSize || this.options.tileSize;
                                e.detectRetina && r.Browser.retina ? i.width = i.height = 2 * n : i.width = i.height = n;
                                for (var o in e)
                                    this.options.hasOwnProperty(o) || "crs" === o || (i[o] = e[o]);
                                this.wmsParams = i,
                                r.setOptions(this, e)
                            },
                            onAdd: function(t) {
                                this._crs = this.options.crs || t.options.crs,
                                this._wmsVersion = parseFloat(this.wmsParams.version);
                                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                                this.wmsParams[e] = this._crs.code,
                                r.TileLayer.prototype.onAdd.call(this, t)
                            },
                            getTileUrl: function(t) {
                                var e = this._map
                                  , i = this.options.tileSize
                                  , n = t.multiplyBy(i)
                                  , o = n.add([i, i])
                                  , s = this._crs.project(e.unproject(n, t.z))
                                  , a = this._crs.project(e.unproject(o, t.z))
                                  , l = this._wmsVersion >= 1.3 && this._crs === r.CRS.EPSG4326 ? [a.y, s.x, s.y, a.x].join(",") : [s.x, a.y, a.x, s.y].join(",")
                                  , h = r.Util.template(this._url, {
                                    s: this._getSubdomain(t)
                                });
                                return h + r.Util.getParamString(this.wmsParams, h, !0) + "&BBOX=" + l
                            },
                            setParams: function(t, e) {
                                return r.extend(this.wmsParams, t),
                                e || this.redraw(),
                                this
                            }
                        }),
                        r.tileLayer.wms = function(t, e) {
                            return new r.TileLayer.WMS(t,e)
                        }
                        ,
                        r.TileLayer.Canvas = r.TileLayer.extend({
                            options: {
                                async: !1
                            },
                            initialize: function(t) {
                                r.setOptions(this, t)
                            },
                            redraw: function() {
                                this._map && (this._reset({
                                    hard: !0
                                }),
                                this._update());
                                for (var t in this._tiles)
                                    this._redrawTile(this._tiles[t]);
                                return this
                            },
                            _redrawTile: function(t) {
                                this.drawTile(t, t._tilePoint, this._map._zoom)
                            },
                            _createTile: function() {
                                var t = r.DomUtil.create("canvas", "leaflet-tile");
                                return t.width = t.height = this.options.tileSize,
                                t.onselectstart = t.onmousemove = r.Util.falseFn,
                                t
                            },
                            _loadTile: function(t, e) {
                                t._layer = this,
                                t._tilePoint = e,
                                this._redrawTile(t),
                                this.options.async || this.tileDrawn(t)
                            },
                            drawTile: function() {},
                            tileDrawn: function(t) {
                                this._tileOnLoad.call(t)
                            }
                        }),
                        r.tileLayer.canvas = function(t) {
                            return new r.TileLayer.Canvas(t)
                        }
                        ,
                        r.ImageOverlay = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                opacity: 1
                            },
                            initialize: function(t, e, i) {
                                this._url = t,
                                this._bounds = r.latLngBounds(e),
                                r.setOptions(this, i)
                            },
                            onAdd: function(t) {
                                this._map = t,
                                this._image || this._initImage(),
                                t._panes.overlayPane.appendChild(this._image),
                                t.on("viewreset", this._reset, this),
                                t.options.zoomAnimation && r.Browser.any3d && t.on("zoomanim", this._animateZoom, this),
                                this._reset()
                            },
                            onRemove: function(t) {
                                t.getPanes().overlayPane.removeChild(this._image),
                                t.off("viewreset", this._reset, this),
                                t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
                            },
                            addTo: function(t) {
                                return t.addLayer(this),
                                this
                            },
                            setOpacity: function(t) {
                                return this.options.opacity = t,
                                this._updateOpacity(),
                                this
                            },
                            bringToFront: function() {
                                return this._image && this._map._panes.overlayPane.appendChild(this._image),
                                this
                            },
                            bringToBack: function() {
                                var t = this._map._panes.overlayPane;
                                return this._image && t.insertBefore(this._image, t.firstChild),
                                this
                            },
                            setUrl: function(t) {
                                this._url = t,
                                this._image.src = this._url
                            },
                            getAttribution: function() {
                                return this.options.attribution
                            },
                            _initImage: function() {
                                this._image = r.DomUtil.create("img", "leaflet-image-layer"),
                                this._map.options.zoomAnimation && r.Browser.any3d ? r.DomUtil.addClass(this._image, "leaflet-zoom-animated") : r.DomUtil.addClass(this._image, "leaflet-zoom-hide"),
                                this._updateOpacity(),
                                r.extend(this._image, {
                                    galleryimg: "no",
                                    onselectstart: r.Util.falseFn,
                                    onmousemove: r.Util.falseFn,
                                    onload: r.bind(this._onImageLoad, this),
                                    src: this._url
                                })
                            },
                            _animateZoom: function(t) {
                                var e = this._map
                                  , i = this._image
                                  , n = e.getZoomScale(t.zoom)
                                  , o = this._bounds.getNorthWest()
                                  , s = this._bounds.getSouthEast()
                                  , a = e._latLngToNewLayerPoint(o, t.zoom, t.center)
                                  , l = e._latLngToNewLayerPoint(s, t.zoom, t.center)._subtract(a)
                                  , h = a._add(l._multiplyBy(.5 * (1 - 1 / n)));
                                i.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(h) + " scale(" + n + ") "
                            },
                            _reset: function() {
                                var t = this._image
                                  , e = this._map.latLngToLayerPoint(this._bounds.getNorthWest())
                                  , i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
                                r.DomUtil.setPosition(t, e),
                                t.style.width = i.x + "px",
                                t.style.height = i.y + "px"
                            },
                            _onImageLoad: function() {
                                this.fire("load")
                            },
                            _updateOpacity: function() {
                                r.DomUtil.setOpacity(this._image, this.options.opacity)
                            }
                        }),
                        r.imageOverlay = function(t, e, i) {
                            return new r.ImageOverlay(t,e,i)
                        }
                        ,
                        r.Icon = r.Class.extend({
                            options: {
                                className: ""
                            },
                            initialize: function(t) {
                                r.setOptions(this, t)
                            },
                            createIcon: function(t) {
                                return this._createIcon("icon", t)
                            },
                            createShadow: function(t) {
                                return this._createIcon("shadow", t)
                            },
                            _createIcon: function(t, e) {
                                var i = this._getIconUrl(t);
                                if (!i) {
                                    if ("icon" === t)
                                        throw new Error("iconUrl not set in Icon options (see the docs).");
                                    return null
                                }
                                var n;
                                return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i),
                                this._setIconStyles(n, t),
                                n
                            },
                            _setIconStyles: function(t, e) {
                                var i = this.options, n = r.point(i[e + "Size"]), o;
                                o = "shadow" === e ? r.point(i.shadowAnchor || i.iconAnchor) : r.point(i.iconAnchor),
                                !o && n && (o = n.divideBy(2, !0)),
                                t.className = "leaflet-marker-" + e + " " + i.className,
                                o && (t.style.marginLeft = -o.x + "px",
                                t.style.marginTop = -o.y + "px"),
                                n && (t.style.width = n.x + "px",
                                t.style.height = n.y + "px")
                            },
                            _createImg: function(t, e) {
                                return e = e || n.createElement("img"),
                                e.src = t,
                                e
                            },
                            _getIconUrl: function(t) {
                                return r.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
                            }
                        }),
                        r.icon = function(t) {
                            return new r.Icon(t)
                        }
                        ,
                        r.Icon.Default = r.Icon.extend({
                            options: {
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            },
                            _getIconUrl: function(t) {
                                var e = t + "Url";
                                if (this.options[e])
                                    return this.options[e];
                                r.Browser.retina && "icon" === t && (t += "-2x");
                                var i = r.Icon.Default.imagePath;
                                if (!i)
                                    throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                                return i + "/marker-" + t + ".png"
                            }
                        }),
                        r.Icon.Default.imagePath = function() {
                            var t = n.getElementsByTagName("script"), e = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/, i, o, s, r, a;
                            for (i = 0,
                            o = t.length; o > i; i++)
                                if (s = t[i].src,
                                r = s.match(e))
                                    return a = s.split(e)[0],
                                    (a ? a + "/" : "") + "images"
                        }(),
                        r.Marker = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                icon: new r.Icon.Default,
                                title: "",
                                alt: "",
                                clickable: !0,
                                draggable: !1,
                                keyboard: !0,
                                zIndexOffset: 0,
                                opacity: 1,
                                riseOnHover: !1,
                                riseOffset: 250
                            },
                            initialize: function(t, e) {
                                r.setOptions(this, e),
                                this._latlng = r.latLng(t)
                            },
                            onAdd: function(t) {
                                this._map = t,
                                t.on("viewreset", this.update, this),
                                this._initIcon(),
                                this.update(),
                                this.fire("add"),
                                t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
                            },
                            addTo: function(t) {
                                return t.addLayer(this),
                                this
                            },
                            onRemove: function(t) {
                                this.dragging && this.dragging.disable(),
                                this._removeIcon(),
                                this._removeShadow(),
                                this.fire("remove"),
                                t.off({
                                    viewreset: this.update,
                                    zoomanim: this._animateZoom
                                }, this),
                                this._map = null
                            },
                            getLatLng: function() {
                                return this._latlng
                            },
                            setLatLng: function(t) {
                                return this._latlng = r.latLng(t),
                                this.update(),
                                this.fire("move", {
                                    latlng: this._latlng
                                })
                            },
                            setZIndexOffset: function(t) {
                                return this.options.zIndexOffset = t,
                                this.update(),
                                this
                            },
                            setIcon: function(t) {
                                return this.options.icon = t,
                                this._map && (this._initIcon(),
                                this.update()),
                                this._popup && this.bindPopup(this._popup),
                                this
                            },
                            update: function() {
                                if (this._icon) {
                                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                                    this._setPos(t)
                                }
                                return this
                            },
                            _initIcon: function() {
                                var t = this.options
                                  , e = this._map
                                  , i = e.options.zoomAnimation && e.options.markerZoomAnimation
                                  , n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide"
                                  , o = t.icon.createIcon(this._icon)
                                  , s = !1;
                                o !== this._icon && (this._icon && this._removeIcon(),
                                s = !0,
                                t.title && (o.title = t.title),
                                t.alt && (o.alt = t.alt)),
                                r.DomUtil.addClass(o, n),
                                t.keyboard && (o.tabIndex = "0"),
                                this._icon = o,
                                this._initInteraction(),
                                t.riseOnHover && r.DomEvent.on(o, "mouseover", this._bringToFront, this).on(o, "mouseout", this._resetZIndex, this);
                                var a = t.icon.createShadow(this._shadow)
                                  , l = !1;
                                a !== this._shadow && (this._removeShadow(),
                                l = !0),
                                a && r.DomUtil.addClass(a, n),
                                this._shadow = a,
                                t.opacity < 1 && this._updateOpacity();
                                var h = this._map._panes;
                                s && h.markerPane.appendChild(this._icon),
                                a && l && h.shadowPane.appendChild(this._shadow)
                            },
                            _removeIcon: function() {
                                this.options.riseOnHover && r.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex),
                                this._map._panes.markerPane.removeChild(this._icon),
                                this._icon = null
                            },
                            _removeShadow: function() {
                                this._shadow && this._map._panes.shadowPane.removeChild(this._shadow),
                                this._shadow = null
                            },
                            _setPos: function(t) {
                                r.DomUtil.setPosition(this._icon, t),
                                this._shadow && r.DomUtil.setPosition(this._shadow, t),
                                this._zIndex = t.y + this.options.zIndexOffset,
                                this._resetZIndex()
                            },
                            _updateZIndex: function(t) {
                                this._icon.style.zIndex = this._zIndex + t
                            },
                            _animateZoom: function(t) {
                                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                                this._setPos(e)
                            },
                            _initInteraction: function() {
                                if (this.options.clickable) {
                                    var t = this._icon
                                      , e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                                    r.DomUtil.addClass(t, "leaflet-clickable"),
                                    r.DomEvent.on(t, "click", this._onMouseClick, this),
                                    r.DomEvent.on(t, "keypress", this._onKeyPress, this);
                                    for (var i = 0; i < e.length; i++)
                                        r.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                                    r.Handler.MarkerDrag && (this.dragging = new r.Handler.MarkerDrag(this),
                                    this.options.draggable && this.dragging.enable())
                                }
                            },
                            _onMouseClick: function(t) {
                                var e = this.dragging && this.dragging.moved();
                                (this.hasEventListeners(t.type) || e) && r.DomEvent.stopPropagation(t),
                                e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                                    originalEvent: t,
                                    latlng: this._latlng
                                })
                            },
                            _onKeyPress: function(t) {
                                13 === t.keyCode && this.fire("click", {
                                    originalEvent: t,
                                    latlng: this._latlng
                                })
                            },
                            _fireMouseEvent: function(t) {
                                this.fire(t.type, {
                                    originalEvent: t,
                                    latlng: this._latlng
                                }),
                                "contextmenu" === t.type && this.hasEventListeners(t.type) && r.DomEvent.preventDefault(t),
                                "mousedown" !== t.type ? r.DomEvent.stopPropagation(t) : r.DomEvent.preventDefault(t)
                            },
                            setOpacity: function(t) {
                                return this.options.opacity = t,
                                this._map && this._updateOpacity(),
                                this
                            },
                            _updateOpacity: function() {
                                r.DomUtil.setOpacity(this._icon, this.options.opacity),
                                this._shadow && r.DomUtil.setOpacity(this._shadow, this.options.opacity)
                            },
                            _bringToFront: function() {
                                this._updateZIndex(this.options.riseOffset)
                            },
                            _resetZIndex: function() {
                                this._updateZIndex(0)
                            }
                        }),
                        r.marker = function(t, e) {
                            return new r.Marker(t,e)
                        }
                        ,
                        r.DivIcon = r.Icon.extend({
                            options: {
                                iconSize: [12, 12],
                                className: "leaflet-div-icon",
                                html: !1
                            },
                            createIcon: function(t) {
                                var e = t && "DIV" === t.tagName ? t : n.createElement("div")
                                  , i = this.options;
                                return i.html !== !1 ? e.innerHTML = i.html : e.innerHTML = "",
                                i.bgPos && (e.style.backgroundPosition = -i.bgPos.x + "px " + -i.bgPos.y + "px"),
                                this._setIconStyles(e, "icon"),
                                e
                            },
                            createShadow: function() {
                                return null
                            }
                        }),
                        r.divIcon = function(t) {
                            return new r.DivIcon(t)
                        }
                        ,
                        r.Map.mergeOptions({
                            closePopupOnClick: !0
                        }),
                        r.Popup = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                minWidth: 50,
                                maxWidth: 300,
                                autoPan: !0,
                                closeButton: !0,
                                offset: [0, 7],
                                autoPanPadding: [5, 5],
                                keepInView: !1,
                                className: "",
                                zoomAnimation: !0
                            },
                            initialize: function(t, e) {
                                r.setOptions(this, t),
                                this._source = e,
                                this._animated = r.Browser.any3d && this.options.zoomAnimation,
                                this._isOpen = !1
                            },
                            onAdd: function(t) {
                                this._map = t,
                                this._container || this._initLayout();
                                var e = t.options.fadeAnimation;
                                e && r.DomUtil.setOpacity(this._container, 0),
                                t._panes.popupPane.appendChild(this._container),
                                t.on(this._getEvents(), this),
                                this.update(),
                                e && r.DomUtil.setOpacity(this._container, 1),
                                this.fire("open"),
                                t.fire("popupopen", {
                                    popup: this
                                }),
                                this._source && this._source.fire("popupopen", {
                                    popup: this
                                })
                            },
                            addTo: function(t) {
                                return t.addLayer(this),
                                this
                            },
                            openOn: function(t) {
                                return t.openPopup(this),
                                this
                            },
                            onRemove: function(t) {
                                t._panes.popupPane.removeChild(this._container),
                                r.Util.falseFn(this._container.offsetWidth),
                                t.off(this._getEvents(), this),
                                t.options.fadeAnimation && r.DomUtil.setOpacity(this._container, 0),
                                this._map = null ,
                                this.fire("close"),
                                t.fire("popupclose", {
                                    popup: this
                                }),
                                this._source && this._source.fire("popupclose", {
                                    popup: this
                                })
                            },
                            getLatLng: function() {
                                return this._latlng
                            },
                            setLatLng: function(t) {
                                return this._latlng = r.latLng(t),
                                this._map && (this._updatePosition(),
                                this._adjustPan()),
                                this
                            },
                            getContent: function() {
                                return this._content
                            },
                            setContent: function(t) {
                                return this._content = t,
                                this.update(),
                                this
                            },
                            update: function() {
                                this._map && (this._container.style.visibility = "hidden",
                                this._updateContent(),
                                this._updateLayout(),
                                this._updatePosition(),
                                this._container.style.visibility = "",
                                this._adjustPan())
                            },
                            _getEvents: function() {
                                var t = {
                                    viewreset: this._updatePosition
                                };
                                return this._animated && (t.zoomanim = this._zoomAnimation),
                                ("closeOnClick"in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
                                this.options.keepInView && (t.moveend = this._adjustPan),
                                t
                            },
                            _close: function() {
                                this._map && this._map.closePopup(this)
                            },
                            _initLayout: function() {
                                var t = "leaflet-popup", e = t + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"), i = this._container = r.DomUtil.create("div", e), n;
                                this.options.closeButton && (n = this._closeButton = r.DomUtil.create("a", t + "-close-button", i),
                                n.href = "#close",
                                n.innerHTML = "&#215;",
                                r.DomEvent.disableClickPropagation(n),
                                r.DomEvent.on(n, "click", this._onCloseButtonClick, this));
                                var o = this._wrapper = r.DomUtil.create("div", t + "-content-wrapper", i);
                                r.DomEvent.disableClickPropagation(o),
                                this._contentNode = r.DomUtil.create("div", t + "-content", o),
                                r.DomEvent.disableScrollPropagation(this._contentNode),
                                r.DomEvent.on(o, "contextmenu", r.DomEvent.stopPropagation),
                                this._tipContainer = r.DomUtil.create("div", t + "-tip-container", i),
                                this._tip = r.DomUtil.create("div", t + "-tip", this._tipContainer)
                            },
                            _updateContent: function() {
                                if (this._content) {
                                    if ("string" == typeof this._content)
                                        this._contentNode.innerHTML = this._content;
                                    else {
                                        for (; this._contentNode.hasChildNodes(); )
                                            this._contentNode.removeChild(this._contentNode.firstChild);
                                        this._contentNode.appendChild(this._content)
                                    }
                                    this.fire("contentupdate")
                                }
                            },
                            _updateLayout: function() {
                                var t = this._contentNode
                                  , e = t.style;
                                e.width = "",
                                e.whiteSpace = "nowrap";
                                var i = t.offsetWidth;
                                i = Math.min(i, this.options.maxWidth),
                                i = Math.max(i, this.options.minWidth),
                                e.width = i + 1 + "px",
                                e.whiteSpace = "",
                                e.height = "";
                                var n = t.offsetHeight
                                  , o = this.options.maxHeight
                                  , s = "leaflet-popup-scrolled";
                                o && n > o ? (e.height = o + "px",
                                r.DomUtil.addClass(t, s)) : r.DomUtil.removeClass(t, s),
                                this._containerWidth = this._container.offsetWidth
                            },
                            _updatePosition: function() {
                                if (this._map) {
                                    var t = this._map.latLngToLayerPoint(this._latlng)
                                      , e = this._animated
                                      , i = r.point(this.options.offset);
                                    e && r.DomUtil.setPosition(this._container, t),
                                    this._containerBottom = -i.y - (e ? 0 : t.y),
                                    this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x),
                                    this._container.style.bottom = this._containerBottom + "px",
                                    this._container.style.left = this._containerLeft + "px"
                                }
                            },
                            _zoomAnimation: function(t) {
                                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                                r.DomUtil.setPosition(this._container, e)
                            },
                            _adjustPan: function() {
                                if (this.options.autoPan) {
                                    var t = this._map
                                      , e = this._container.offsetHeight
                                      , i = this._containerWidth
                                      , n = new r.Point(this._containerLeft,-e - this._containerBottom);
                                    this._animated && n._add(r.DomUtil.getPosition(this._container));
                                    var o = t.layerPointToContainerPoint(n)
                                      , s = r.point(this.options.autoPanPadding)
                                      , a = r.point(this.options.autoPanPaddingTopLeft || s)
                                      , l = r.point(this.options.autoPanPaddingBottomRight || s)
                                      , h = t.getSize()
                                      , u = 0
                                      , c = 0;
                                    o.x + i + l.x > h.x && (u = o.x + i - h.x + l.x),
                                    o.x - u - a.x < 0 && (u = o.x - a.x),
                                    o.y + e + l.y > h.y && (c = o.y + e - h.y + l.y),
                                    o.y - c - a.y < 0 && (c = o.y - a.y),
                                    (u || c) && t.fire("autopanstart").panBy([u, c])
                                }
                            },
                            _onCloseButtonClick: function(t) {
                                this._close(),
                                r.DomEvent.stop(t)
                            }
                        }),
                        r.popup = function(t, e) {
                            return new r.Popup(t,e)
                        }
                        ,
                        r.Map.include({
                            openPopup: function(t, e, i) {
                                if (this.closePopup(),
                                !(t instanceof r.Popup)) {
                                    var n = t;
                                    t = new r.Popup(i).setLatLng(e).setContent(n)
                                }
                                return t._isOpen = !0,
                                this._popup = t,
                                this.addLayer(t)
                            },
                            closePopup: function(t) {
                                return t && t !== this._popup || (t = this._popup,
                                this._popup = null ),
                                t && (this.removeLayer(t),
                                t._isOpen = !1),
                                this
                            }
                        }),
                        r.Marker.include({
                            openPopup: function() {
                                return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng),
                                this._map.openPopup(this._popup)),
                                this
                            },
                            closePopup: function() {
                                return this._popup && this._popup._close(),
                                this
                            },
                            togglePopup: function() {
                                return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()),
                                this
                            },
                            bindPopup: function(t, e) {
                                var i = r.point(this.options.icon.options.popupAnchor || [0, 0]);
                                return i = i.add(r.Popup.prototype.options.offset),
                                e && e.offset && (i = i.add(e.offset)),
                                e = r.extend({
                                    offset: i
                                }, e),
                                this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this),
                                this._popupHandlersAdded = !0),
                                t instanceof r.Popup ? (r.setOptions(t, e),
                                this._popup = t) : this._popup = new r.Popup(e,this).setContent(t),
                                this
                            },
                            setPopupContent: function(t) {
                                return this._popup && this._popup.setContent(t),
                                this
                            },
                            unbindPopup: function() {
                                return this._popup && (this._popup = null ,
                                this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this),
                                this._popupHandlersAdded = !1),
                                this
                            },
                            getPopup: function() {
                                return this._popup
                            },
                            _movePopup: function(t) {
                                this._popup.setLatLng(t.latlng)
                            }
                        }),
                        r.LayerGroup = r.Class.extend({
                            initialize: function(t) {
                                this._layers = {};
                                var e, i;
                                if (t)
                                    for (e = 0,
                                    i = t.length; i > e; e++)
                                        this.addLayer(t[e])
                            },
                            addLayer: function(t) {
                                var e = this.getLayerId(t);
                                return this._layers[e] = t,
                                this._map && this._map.addLayer(t),
                                this
                            },
                            removeLayer: function(t) {
                                var e = t in this._layers ? t : this.getLayerId(t);
                                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
                                delete this._layers[e],
                                this
                            },
                            hasLayer: function(t) {
                                return t ? t in this._layers || this.getLayerId(t)in this._layers : !1
                            },
                            clearLayers: function() {
                                return this.eachLayer(this.removeLayer, this),
                                this
                            },
                            invoke: function(t) {
                                var e = Array.prototype.slice.call(arguments, 1), i, n;
                                for (i in this._layers)
                                    n = this._layers[i],
                                    n[t] && n[t].apply(n, e);
                                return this
                            },
                            onAdd: function(t) {
                                this._map = t,
                                this.eachLayer(t.addLayer, t)
                            },
                            onRemove: function(t) {
                                this.eachLayer(t.removeLayer, t),
                                this._map = null
                            },
                            addTo: function(t) {
                                return t.addLayer(this),
                                this
                            },
                            eachLayer: function(t, e) {
                                for (var i in this._layers)
                                    t.call(e, this._layers[i]);
                                return this
                            },
                            getLayer: function(t) {
                                return this._layers[t]
                            },
                            getLayers: function() {
                                var t = [];
                                for (var e in this._layers)
                                    t.push(this._layers[e]);
                                return t
                            },
                            setZIndex: function(t) {
                                return this.invoke("setZIndex", t)
                            },
                            getLayerId: function(t) {
                                return r.stamp(t)
                            }
                        }),
                        r.layerGroup = function(t) {
                            return new r.LayerGroup(t)
                        }
                        ,
                        r.FeatureGroup = r.LayerGroup.extend({
                            includes: r.Mixin.Events,
                            statics: {
                                EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
                            },
                            addLayer: function(t) {
                                return this.hasLayer(t) ? this : ("on"in t && t.on(r.FeatureGroup.EVENTS, this._propagateEvent, this),
                                r.LayerGroup.prototype.addLayer.call(this, t),
                                this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions),
                                this.fire("layeradd", {
                                    layer: t
                                }))
                            },
                            removeLayer: function(t) {
                                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]),
                                t.off(r.FeatureGroup.EVENTS, this._propagateEvent, this),
                                r.LayerGroup.prototype.removeLayer.call(this, t),
                                this._popupContent && this.invoke("unbindPopup"),
                                this.fire("layerremove", {
                                    layer: t
                                })) : this
                            },
                            bindPopup: function(t, e) {
                                return this._popupContent = t,
                                this._popupOptions = e,
                                this.invoke("bindPopup", t, e)
                            },
                            openPopup: function(t) {
                                for (var e in this._layers) {
                                    this._layers[e].openPopup(t);
                                    break
                                }
                                return this
                            },
                            setStyle: function(t) {
                                return this.invoke("setStyle", t)
                            },
                            bringToFront: function() {
                                return this.invoke("bringToFront")
                            },
                            bringToBack: function() {
                                return this.invoke("bringToBack")
                            },
                            getBounds: function() {
                                var t = new r.LatLngBounds;
                                return this.eachLayer(function(e) {
                                    t.extend(e instanceof r.Marker ? e.getLatLng() : e.getBounds())
                                }),
                                t
                            },
                            _propagateEvent: function(t) {
                                t = r.extend({
                                    layer: t.target,
                                    target: this
                                }, t),
                                this.fire(t.type, t)
                            }
                        }),
                        r.featureGroup = function(t) {
                            return new r.FeatureGroup(t)
                        }
                        ,
                        r.Path = r.Class.extend({
                            includes: [r.Mixin.Events],
                            statics: {
                                CLIP_PADDING: function() {
                                    var e = r.Browser.mobile ? 1280 : 2e3
                                      , i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
                                    return Math.max(0, Math.min(.5, i))
                                }()
                            },
                            options: {
                                stroke: !0,
                                color: "#0033ff",
                                dashArray: null ,
                                lineCap: null ,
                                lineJoin: null ,
                                weight: 5,
                                opacity: .5,
                                fill: !1,
                                fillColor: null ,
                                fillOpacity: .2,
                                clickable: !0
                            },
                            initialize: function(t) {
                                r.setOptions(this, t)
                            },
                            onAdd: function(t) {
                                this._map = t,
                                this._container || (this._initElements(),
                                this._initEvents()),
                                this.projectLatlngs(),
                                this._updatePath(),
                                this._container && this._map._pathRoot.appendChild(this._container),
                                this.fire("add"),
                                t.on({
                                    viewreset: this.projectLatlngs,
                                    moveend: this._updatePath
                                }, this)
                            },
                            addTo: function(t) {
                                return t.addLayer(this),
                                this
                            },
                            onRemove: function(t) {
                                t._pathRoot.removeChild(this._container),
                                this.fire("remove"),
                                this._map = null ,
                                r.Browser.vml && (this._container = null ,
                                this._stroke = null ,
                                this._fill = null ),
                                t.off({
                                    viewreset: this.projectLatlngs,
                                    moveend: this._updatePath
                                }, this)
                            },
                            projectLatlngs: function() {},
                            setStyle: function(t) {
                                return r.setOptions(this, t),
                                this._container && this._updateStyle(),
                                this
                            },
                            redraw: function() {
                                return this._map && (this.projectLatlngs(),
                                this._updatePath()),
                                this
                            }
                        }),
                        r.Map.include({
                            _updatePathViewport: function() {
                                var t = r.Path.CLIP_PADDING
                                  , e = this.getSize()
                                  , i = r.DomUtil.getPosition(this._mapPane)
                                  , n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round())
                                  , o = n.add(e.multiplyBy(1 + 2 * t)._round());
                                this._pathViewport = new r.Bounds(n,o)
                            }
                        }),
                        r.Path.SVG_NS = "http://www.w3.org/2000/svg",
                        r.Browser.svg = !(!n.createElementNS || !n.createElementNS(r.Path.SVG_NS, "svg").createSVGRect),
                        r.Path = r.Path.extend({
                            statics: {
                                SVG: r.Browser.svg
                            },
                            bringToFront: function() {
                                var t = this._map._pathRoot
                                  , e = this._container;
                                return e && t.lastChild !== e && t.appendChild(e),
                                this
                            },
                            bringToBack: function() {
                                var t = this._map._pathRoot
                                  , e = this._container
                                  , i = t.firstChild;
                                return e && i !== e && t.insertBefore(e, i),
                                this
                            },
                            getPathString: function() {},
                            _createElement: function(t) {
                                return n.createElementNS(r.Path.SVG_NS, t)
                            },
                            _initElements: function() {
                                this._map._initPathRoot(),
                                this._initPath(),
                                this._initStyle()
                            },
                            _initPath: function() {
                                this._container = this._createElement("g"),
                                this._path = this._createElement("path"),
                                this.options.className && r.DomUtil.addClass(this._path, this.options.className),
                                this._container.appendChild(this._path)
                            },
                            _initStyle: function() {
                                this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"),
                                this._path.setAttribute("stroke-linecap", "round")),
                                this.options.fill && this._path.setAttribute("fill-rule", "evenodd"),
                                this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents),
                                this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"),
                                this._updateStyle()
                            },
                            _updateStyle: function() {
                                this.options.stroke ? (this._path.setAttribute("stroke", this.options.color),
                                this._path.setAttribute("stroke-opacity", this.options.opacity),
                                this._path.setAttribute("stroke-width", this.options.weight),
                                this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"),
                                this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap),
                                this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"),
                                this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color),
                                this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
                            },
                            _updatePath: function() {
                                var t = this.getPathString();
                                t || (t = "M0 0"),
                                this._path.setAttribute("d", t)
                            },
                            _initEvents: function() {
                                if (this.options.clickable) {
                                    !r.Browser.svg && r.Browser.vml || r.DomUtil.addClass(this._path, "leaflet-clickable"),
                                    r.DomEvent.on(this._container, "click", this._onMouseClick, this);
                                    for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++)
                                        r.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
                                }
                            },
                            _onMouseClick: function(t) {
                                this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
                            },
                            _fireMouseEvent: function(t) {
                                if (this.hasEventListeners(t.type)) {
                                    var e = this._map
                                      , i = e.mouseEventToContainerPoint(t)
                                      , n = e.containerPointToLayerPoint(i)
                                      , o = e.layerPointToLatLng(n);
                                    this.fire(t.type, {
                                        latlng: o,
                                        layerPoint: n,
                                        containerPoint: i,
                                        originalEvent: t
                                    }),
                                    "contextmenu" === t.type && r.DomEvent.preventDefault(t),
                                    "mousemove" !== t.type && r.DomEvent.stopPropagation(t)
                                }
                            }
                        }),
                        r.Map.include({
                            _initPathRoot: function() {
                                this._pathRoot || (this._pathRoot = r.Path.prototype._createElement("svg"),
                                this._panes.overlayPane.appendChild(this._pathRoot),
                                this.options.zoomAnimation && r.Browser.any3d ? (r.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"),
                                this.on({
                                    zoomanim: this._animatePathZoom,
                                    zoomend: this._endPathZoom
                                })) : r.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"),
                                this.on("moveend", this._updateSvgViewport),
                                this._updateSvgViewport())
                            },
                            _animatePathZoom: function(t) {
                                var e = this.getZoomScale(t.zoom)
                                  , i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
                                this._pathRoot.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(i) + " scale(" + e + ") ",
                                this._pathZooming = !0
                            },
                            _endPathZoom: function() {
                                this._pathZooming = !1
                            },
                            _updateSvgViewport: function() {
                                if (!this._pathZooming) {
                                    this._updatePathViewport();
                                    var t = this._pathViewport
                                      , e = t.min
                                      , i = t.max
                                      , n = i.x - e.x
                                      , o = i.y - e.y
                                      , s = this._pathRoot
                                      , a = this._panes.overlayPane;
                                    r.Browser.mobileWebkit && a.removeChild(s),
                                    r.DomUtil.setPosition(s, e),
                                    s.setAttribute("width", n),
                                    s.setAttribute("height", o),
                                    s.setAttribute("viewBox", [e.x, e.y, n, o].join(" ")),
                                    r.Browser.mobileWebkit && a.appendChild(s)
                                }
                            }
                        }),
                        r.Path.include({
                            bindPopup: function(t, e) {
                                return t instanceof r.Popup ? this._popup = t : (this._popup && !e || (this._popup = new r.Popup(e,this)),
                                this._popup.setContent(t)),
                                this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this),
                                this._popupHandlersAdded = !0),
                                this
                            },
                            unbindPopup: function() {
                                return this._popup && (this._popup = null ,
                                this.off("click", this._openPopup).off("remove", this.closePopup),
                                this._popupHandlersAdded = !1),
                                this
                            },
                            openPopup: function(t) {
                                return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)],
                                this._openPopup({
                                    latlng: t
                                })),
                                this
                            },
                            closePopup: function() {
                                return this._popup && this._popup._close(),
                                this
                            },
                            _openPopup: function(t) {
                                this._popup.setLatLng(t.latlng),
                                this._map.openPopup(this._popup)
                            }
                        }),
                        r.Browser.vml = !r.Browser.svg && function() {
                            try {
                                var t = n.createElement("div");
                                t.innerHTML = '<v:shape adj="1"/>';
                                var e = t.firstChild;
                                return e.style.behavior = "url(#default#VML)",
                                e && "object" == typeof e.adj
                            } catch (i) {
                                return !1
                            }
                        }(),
                        r.Path = r.Browser.svg || !r.Browser.vml ? r.Path : r.Path.extend({
                            statics: {
                                VML: !0,
                                CLIP_PADDING: .02
                            },
                            _createElement: function() {
                                try {
                                    return n.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                    function(t) {
                                        return n.createElement("<lvml:" + t + ' class="lvml">')
                                    }
                                } catch (t) {
                                    return function(t) {
                                        return n.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                                    }
                                }
                            }(),
                            _initPath: function() {
                                var t = this._container = this._createElement("shape");
                                r.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")),
                                this.options.clickable && r.DomUtil.addClass(t, "leaflet-clickable"),
                                t.coordsize = "1 1",
                                this._path = this._createElement("path"),
                                t.appendChild(this._path),
                                this._map._pathRoot.appendChild(t)
                            },
                            _initStyle: function() {
                                this._updateStyle()
                            },
                            _updateStyle: function() {
                                var t = this._stroke
                                  , e = this._fill
                                  , i = this.options
                                  , n = this._container;
                                n.stroked = i.stroke,
                                n.filled = i.fill,
                                i.stroke ? (t || (t = this._stroke = this._createElement("stroke"),
                                t.endcap = "round",
                                n.appendChild(t)),
                                t.weight = i.weight + "px",
                                t.color = i.color,
                                t.opacity = i.opacity,
                                i.dashArray ? t.dashStyle = r.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : t.dashStyle = "",
                                i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")),
                                i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t),
                                this._stroke = null ),
                                i.fill ? (e || (e = this._fill = this._createElement("fill"),
                                n.appendChild(e)),
                                e.color = i.fillColor || i.color,
                                e.opacity = i.fillOpacity) : e && (n.removeChild(e),
                                this._fill = null )
                            },
                            _updatePath: function() {
                                var t = this._container.style;
                                t.display = "none",
                                this._path.v = this.getPathString() + " ",
                                t.display = ""
                            }
                        }),
                        r.Map.include(r.Browser.svg || !r.Browser.vml ? {} : {
                            _initPathRoot: function() {
                                if (!this._pathRoot) {
                                    var t = this._pathRoot = n.createElement("div");
                                    t.className = "leaflet-vml-container",
                                    this._panes.overlayPane.appendChild(t),
                                    this.on("moveend", this._updatePathViewport),
                                    this._updatePathViewport()
                                }
                            }
                        }),
                        r.Browser.canvas = function() {
                            return !!n.createElement("canvas").getContext
                        }(),
                        r.Path = r.Path.SVG && !t.L_PREFER_CANVAS || !r.Browser.canvas ? r.Path : r.Path.extend({
                            statics: {
                                CANVAS: !0,
                                SVG: !1
                            },
                            redraw: function() {
                                return this._map && (this.projectLatlngs(),
                                this._requestUpdate()),
                                this
                            },
                            setStyle: function(t) {
                                return r.setOptions(this, t),
                                this._map && (this._updateStyle(),
                                this._requestUpdate()),
                                this
                            },
                            onRemove: function(t) {
                                t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this),
                                this.options.clickable && (this._map.off("click", this._onClick, this),
                                this._map.off("mousemove", this._onMouseMove, this)),
                                this._requestUpdate(),
                                this.fire("remove"),
                                this._map = null
                            },
                            _requestUpdate: function() {
                                this._map && !r.Path._updateRequest && (r.Path._updateRequest = r.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
                            },
                            _fireMapMoveEnd: function() {
                                r.Path._updateRequest = null ,
                                this.fire("moveend")
                            },
                            _initElements: function() {
                                this._map._initPathRoot(),
                                this._ctx = this._map._canvasCtx
                            },
                            _updateStyle: function() {
                                var t = this.options;
                                t.stroke && (this._ctx.lineWidth = t.weight,
                                this._ctx.strokeStyle = t.color),
                                t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
                            },
                            _drawPath: function() {
                                var t, e, i, n, o, s;
                                for (this._ctx.beginPath(),
                                t = 0,
                                i = this._parts.length; i > t; t++) {
                                    for (e = 0,
                                    n = this._parts[t].length; n > e; e++)
                                        o = this._parts[t][e],
                                        s = (0 === e ? "move" : "line") + "To",
                                        this._ctx[s](o.x, o.y);
                                    this instanceof r.Polygon && this._ctx.closePath()
                                }
                            },
                            _checkIfEmpty: function() {
                                return !this._parts.length
                            },
                            _updatePath: function() {
                                if (!this._checkIfEmpty()) {
                                    var t = this._ctx
                                      , e = this.options;
                                    this._drawPath(),
                                    t.save(),
                                    this._updateStyle(),
                                    e.fill && (t.globalAlpha = e.fillOpacity,
                                    t.fill()),
                                    e.stroke && (t.globalAlpha = e.opacity,
                                    t.stroke()),
                                    t.restore()
                                }
                            },
                            _initEvents: function() {
                                this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this),
                                this._map.on("click", this._onClick, this))
                            },
                            _onClick: function(t) {
                                this._containsPoint(t.layerPoint) && this.fire("click", t)
                            },
                            _onMouseMove: function(t) {
                                this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer",
                                this._mouseInside = !0,
                                this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "",
                                this._mouseInside = !1,
                                this.fire("mouseout", t)))
                            }
                        }),
                        r.Map.include(r.Path.SVG && !t.L_PREFER_CANVAS || !r.Browser.canvas ? {} : {
                            _initPathRoot: function() {
                                var t = this._pathRoot, e;
                                t || (t = this._pathRoot = n.createElement("canvas"),
                                t.style.position = "absolute",
                                e = this._canvasCtx = t.getContext("2d"),
                                e.lineCap = "round",
                                e.lineJoin = "round",
                                this._panes.overlayPane.appendChild(t),
                                this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated",
                                this.on("zoomanim", this._animatePathZoom),
                                this.on("zoomend", this._endPathZoom)),
                                this.on("moveend", this._updateCanvasViewport),
                                this._updateCanvasViewport())
                            },
                            _updateCanvasViewport: function() {
                                if (!this._pathZooming) {
                                    this._updatePathViewport();
                                    var t = this._pathViewport
                                      , e = t.min
                                      , i = t.max.subtract(e)
                                      , n = this._pathRoot;
                                    r.DomUtil.setPosition(n, e),
                                    n.width = i.x,
                                    n.height = i.y,
                                    n.getContext("2d").translate(-e.x, -e.y)
                                }
                            }
                        }),
                        r.LineUtil = {
                            simplify: function(t, e) {
                                if (!e || !t.length)
                                    return t.slice();
                                var i = e * e;
                                return t = this._reducePoints(t, i),
                                t = this._simplifyDP(t, i)
                            },
                            pointToSegmentDistance: function(t, e, i) {
                                return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
                            },
                            closestPointOnSegment: function(t, e, i) {
                                return this._sqClosestPointOnSegment(t, e, i)
                            },
                            _simplifyDP: function(t, e) {
                                var i = t.length
                                  , n = typeof Uint8Array != o + "" ? Uint8Array : Array
                                  , s = new n(i);
                                s[0] = s[i - 1] = 1,
                                this._simplifyDPStep(t, s, e, 0, i - 1);
                                var r, a = [];
                                for (r = 0; i > r; r++)
                                    s[r] && a.push(t[r]);
                                return a
                            },
                            _simplifyDPStep: function(t, e, i, n, o) {
                                var s = 0, r, a, l;
                                for (a = n + 1; o - 1 >= a; a++)
                                    l = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0),
                                    l > s && (r = a,
                                    s = l);
                                s > i && (e[r] = 1,
                                this._simplifyDPStep(t, e, i, n, r),
                                this._simplifyDPStep(t, e, i, r, o))
                            },
                            _reducePoints: function(t, e) {
                                for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++)
                                    this._sqDist(t[n], t[o]) > e && (i.push(t[n]),
                                    o = n);
                                return s - 1 > o && i.push(t[s - 1]),
                                i
                            },
                            clipSegment: function(t, e, i, n) {
                                var o = n ? this._lastCode : this._getBitCode(t, i), s = this._getBitCode(e, i), r, a, l;
                                for (this._lastCode = s; ; ) {
                                    if (!(o | s))
                                        return [t, e];
                                    if (o & s)
                                        return !1;
                                    r = o || s,
                                    a = this._getEdgeIntersection(t, e, r, i),
                                    l = this._getBitCode(a, i),
                                    r === o ? (t = a,
                                    o = l) : (e = a,
                                    s = l)
                                }
                            },
                            _getEdgeIntersection: function(t, e, i, n) {
                                var o = e.x - t.x
                                  , s = e.y - t.y
                                  , a = n.min
                                  , l = n.max;
                                return 8 & i ? new r.Point(t.x + o * (l.y - t.y) / s,l.y) : 4 & i ? new r.Point(t.x + o * (a.y - t.y) / s,a.y) : 2 & i ? new r.Point(l.x,t.y + s * (l.x - t.x) / o) : 1 & i ? new r.Point(a.x,t.y + s * (a.x - t.x) / o) : void 0
                            },
                            _getBitCode: function(t, e) {
                                var i = 0;
                                return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
                                t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
                                i
                            },
                            _sqDist: function(t, e) {
                                var i = e.x - t.x
                                  , n = e.y - t.y;
                                return i * i + n * n
                            },
                            _sqClosestPointOnSegment: function(t, e, i, n) {
                                var o = e.x, s = e.y, a = i.x - o, l = i.y - s, h = a * a + l * l, u;
                                return h > 0 && (u = ((t.x - o) * a + (t.y - s) * l) / h,
                                u > 1 ? (o = i.x,
                                s = i.y) : u > 0 && (o += a * u,
                                s += l * u)),
                                a = t.x - o,
                                l = t.y - s,
                                n ? a * a + l * l : new r.Point(o,s)
                            }
                        },
                        r.Polyline = r.Path.extend({
                            initialize: function(t, e) {
                                r.Path.prototype.initialize.call(this, e),
                                this._latlngs = this._convertLatLngs(t)
                            },
                            options: {
                                smoothFactor: 1,
                                noClip: !1
                            },
                            projectLatlngs: function() {
                                this._originalPoints = [];
                                for (var t = 0, e = this._latlngs.length; e > t; t++)
                                    this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
                            },
                            getPathString: function() {
                                for (var t = 0, e = this._parts.length, i = ""; e > t; t++)
                                    i += this._getPathPartStr(this._parts[t]);
                                return i
                            },
                            getLatLngs: function() {
                                return this._latlngs
                            },
                            setLatLngs: function(t) {
                                return this._latlngs = this._convertLatLngs(t),
                                this.redraw()
                            },
                            addLatLng: function(t) {
                                return this._latlngs.push(r.latLng(t)),
                                this.redraw()
                            },
                            spliceLatLngs: function() {
                                var t = [].splice.apply(this._latlngs, arguments);
                                return this._convertLatLngs(this._latlngs, !0),
                                this.redraw(),
                                t
                            },
                            closestLayerPoint: function(t) {
                                for (var e = 1 / 0, i = this._parts, n, o, s = null , a = 0, l = i.length; l > a; a++)
                                    for (var h = i[a], u = 1, c = h.length; c > u; u++) {
                                        n = h[u - 1],
                                        o = h[u];
                                        var p = r.LineUtil._sqClosestPointOnSegment(t, n, o, !0);
                                        e > p && (e = p,
                                        s = r.LineUtil._sqClosestPointOnSegment(t, n, o))
                                    }
                                return s && (s.distance = Math.sqrt(e)),
                                s
                            },
                            getBounds: function() {
                                return new r.LatLngBounds(this.getLatLngs())
                            },
                            _convertLatLngs: function(t, e) {
                                var i, n, o = e ? t : [];
                                for (i = 0,
                                n = t.length; n > i; i++) {
                                    if (r.Util.isArray(t[i]) && "number" != typeof t[i][0])
                                        return;
                                    o[i] = r.latLng(t[i])
                                }
                                return o
                            },
                            _initEvents: function() {
                                r.Path.prototype._initEvents.call(this)
                            },
                            _getPathPartStr: function(t) {
                                for (var e = r.Path.VML, i = 0, n = t.length, o = "", s; n > i; i++)
                                    s = t[i],
                                    e && s._round(),
                                    o += (i ? "L" : "M") + s.x + " " + s.y;
                                return o
                            },
                            _clipPoints: function() {
                                var t = this._originalPoints, e = t.length, i, n, o;
                                if (this.options.noClip)
                                    return void (this._parts = [t]);
                                this._parts = [];
                                var s = this._parts
                                  , a = this._map._pathViewport
                                  , l = r.LineUtil;
                                for (i = 0,
                                n = 0; e - 1 > i; i++)
                                    o = l.clipSegment(t[i], t[i + 1], a, i),
                                    o && (s[n] = s[n] || [],
                                    s[n].push(o[0]),
                                    o[1] === t[i + 1] && i !== e - 2 || (s[n].push(o[1]),
                                    n++))
                            },
                            _simplifyPoints: function() {
                                for (var t = this._parts, e = r.LineUtil, i = 0, n = t.length; n > i; i++)
                                    t[i] = e.simplify(t[i], this.options.smoothFactor)
                            },
                            _updatePath: function() {
                                this._map && (this._clipPoints(),
                                this._simplifyPoints(),
                                r.Path.prototype._updatePath.call(this))
                            }
                        }),
                        r.polyline = function(t, e) {
                            return new r.Polyline(t,e)
                        }
                        ,
                        r.PolyUtil = {},
                        r.PolyUtil.clipPolygon = function(t, e) {
                            var i, n = [1, 4, 2, 8], o, s, a, l, h, u, c, p, d = r.LineUtil;
                            for (o = 0,
                            u = t.length; u > o; o++)
                                t[o]._code = d._getBitCode(t[o], e);
                            for (a = 0; 4 > a; a++) {
                                for (c = n[a],
                                i = [],
                                o = 0,
                                u = t.length,
                                s = u - 1; u > o; s = o++)
                                    l = t[o],
                                    h = t[s],
                                    l._code & c ? h._code & c || (p = d._getEdgeIntersection(h, l, c, e),
                                    p._code = d._getBitCode(p, e),
                                    i.push(p)) : (h._code & c && (p = d._getEdgeIntersection(h, l, c, e),
                                    p._code = d._getBitCode(p, e),
                                    i.push(p)),
                                    i.push(l));
                                t = i
                            }
                            return t
                        }
                        ,
                        r.Polygon = r.Polyline.extend({
                            options: {
                                fill: !0
                            },
                            initialize: function(t, e) {
                                r.Polyline.prototype.initialize.call(this, t, e),
                                this._initWithHoles(t)
                            },
                            _initWithHoles: function(t) {
                                var e, i, n;
                                if (t && r.Util.isArray(t[0]) && "number" != typeof t[0][0])
                                    for (this._latlngs = this._convertLatLngs(t[0]),
                                    this._holes = t.slice(1),
                                    e = 0,
                                    i = this._holes.length; i > e; e++)
                                        n = this._holes[e] = this._convertLatLngs(this._holes[e]),
                                        n[0].equals(n[n.length - 1]) && n.pop();
                                t = this._latlngs,
                                t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
                            },
                            projectLatlngs: function() {
                                if (r.Polyline.prototype.projectLatlngs.call(this),
                                this._holePoints = [],
                                this._holes) {
                                    var t, e, i, n;
                                    for (t = 0,
                                    i = this._holes.length; i > t; t++)
                                        for (this._holePoints[t] = [],
                                        e = 0,
                                        n = this._holes[t].length; n > e; e++)
                                            this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
                                }
                            },
                            setLatLngs: function(t) {
                                return t && r.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t),
                                this.redraw()) : r.Polyline.prototype.setLatLngs.call(this, t)
                            },
                            _clipPoints: function() {
                                var t = this._originalPoints
                                  , e = [];
                                if (this._parts = [t].concat(this._holePoints),
                                !this.options.noClip) {
                                    for (var i = 0, n = this._parts.length; n > i; i++) {
                                        var o = r.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                                        o.length && e.push(o)
                                    }
                                    this._parts = e
                                }
                            },
                            _getPathPartStr: function(t) {
                                var e = r.Polyline.prototype._getPathPartStr.call(this, t);
                                return e + (r.Browser.svg ? "z" : "x")
                            }
                        }),
                        r.polygon = function(t, e) {
                            return new r.Polygon(t,e)
                        }
                        ,
                        function() {
                            function t(t) {
                                return r.FeatureGroup.extend({
                                    initialize: function(t, e) {
                                        this._layers = {},
                                        this._options = e,
                                        this.setLatLngs(t)
                                    },
                                    setLatLngs: function(e) {
                                        var i = 0
                                          , n = e.length;
                                        for (this.eachLayer(function(t) {
                                            n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                                        }, this); n > i; )
                                            this.addLayer(new t(e[i++],this._options));
                                        return this
                                    },
                                    getLatLngs: function() {
                                        var t = [];
                                        return this.eachLayer(function(e) {
                                            t.push(e.getLatLngs())
                                        }),
                                        t
                                    }
                                })
                            }
                            r.MultiPolyline = t(r.Polyline),
                            r.MultiPolygon = t(r.Polygon),
                            r.multiPolyline = function(t, e) {
                                return new r.MultiPolyline(t,e)
                            }
                            ,
                            r.multiPolygon = function(t, e) {
                                return new r.MultiPolygon(t,e)
                            }
                        }(),
                        r.Rectangle = r.Polygon.extend({
                            initialize: function(t, e) {
                                r.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                            },
                            setBounds: function(t) {
                                this.setLatLngs(this._boundsToLatLngs(t))
                            },
                            _boundsToLatLngs: function(t) {
                                return t = r.latLngBounds(t),
                                [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                            }
                        }),
                        r.rectangle = function(t, e) {
                            return new r.Rectangle(t,e)
                        }
                        ,
                        r.Circle = r.Path.extend({
                            initialize: function(t, e, i) {
                                r.Path.prototype.initialize.call(this, i),
                                this._latlng = r.latLng(t),
                                this._mRadius = e
                            },
                            options: {
                                fill: !0
                            },
                            setLatLng: function(t) {
                                return this._latlng = r.latLng(t),
                                this.redraw()
                            },
                            setRadius: function(t) {
                                return this._mRadius = t,
                                this.redraw()
                            },
                            projectLatlngs: function() {
                                var t = this._getLngRadius()
                                  , e = this._latlng
                                  , i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
                                this._point = this._map.latLngToLayerPoint(e),
                                this._radius = Math.max(this._point.x - i.x, 1)
                            },
                            getBounds: function() {
                                var t = this._getLngRadius()
                                  , e = this._mRadius / 40075017 * 360
                                  , i = this._latlng;
                                return new r.LatLngBounds([i.lat - e, i.lng - t],[i.lat + e, i.lng + t])
                            },
                            getLatLng: function() {
                                return this._latlng
                            },
                            getPathString: function() {
                                var t = this._point
                                  , e = this._radius;
                                return this._checkIfEmpty() ? "" : r.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(),
                                e = Math.round(e),
                                "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
                            },
                            getRadius: function() {
                                return this._mRadius
                            },
                            _getLatRadius: function() {
                                return this._mRadius / 40075017 * 360
                            },
                            _getLngRadius: function() {
                                return this._getLatRadius() / Math.cos(r.LatLng.DEG_TO_RAD * this._latlng.lat)
                            },
                            _checkIfEmpty: function() {
                                if (!this._map)
                                    return !1;
                                var t = this._map._pathViewport
                                  , e = this._radius
                                  , i = this._point;
                                return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
                            }
                        }),
                        r.circle = function(t, e, i) {
                            return new r.Circle(t,e,i)
                        }
                        ,
                        r.CircleMarker = r.Circle.extend({
                            options: {
                                radius: 10,
                                weight: 2
                            },
                            initialize: function(t, e) {
                                r.Circle.prototype.initialize.call(this, t, null , e),
                                this._radius = this.options.radius
                            },
                            projectLatlngs: function() {
                                this._point = this._map.latLngToLayerPoint(this._latlng)
                            },
                            _updateStyle: function() {
                                r.Circle.prototype._updateStyle.call(this),
                                this.setRadius(this.options.radius)
                            },
                            setLatLng: function(t) {
                                return r.Circle.prototype.setLatLng.call(this, t),
                                this._popup && this._popup._isOpen && this._popup.setLatLng(t),
                                this
                            },
                            setRadius: function(t) {
                                return this.options.radius = this._radius = t,
                                this.redraw()
                            },
                            getRadius: function() {
                                return this._radius
                            }
                        }),
                        r.circleMarker = function(t, e) {
                            return new r.CircleMarker(t,e)
                        }
                        ,
                        r.Polyline.include(r.Path.CANVAS ? {
                            _containsPoint: function(t, e) {
                                var i, n, o, s, a, l, h, u = this.options.weight / 2;
                                for (r.Browser.touch && (u += 10),
                                i = 0,
                                s = this._parts.length; s > i; i++)
                                    for (h = this._parts[i],
                                    n = 0,
                                    a = h.length,
                                    o = a - 1; a > n; o = n++)
                                        if ((e || 0 !== n) && (l = r.LineUtil.pointToSegmentDistance(t, h[o], h[n]),
                                        u >= l))
                                            return !0;
                                return !1
                            }
                        } : {}),
                        r.Polygon.include(r.Path.CANVAS ? {
                            _containsPoint: function(t) {
                                var e = !1, i, n, o, s, a, l, h, u;
                                if (r.Polyline.prototype._containsPoint.call(this, t, !0))
                                    return !0;
                                for (s = 0,
                                h = this._parts.length; h > s; s++)
                                    for (i = this._parts[s],
                                    a = 0,
                                    u = i.length,
                                    l = u - 1; u > a; l = a++)
                                        n = i[a],
                                        o = i[l],
                                        n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (e = !e);
                                return e
                            }
                        } : {}),
                        r.Circle.include(r.Path.CANVAS ? {
                            _drawPath: function() {
                                var t = this._point;
                                this._ctx.beginPath(),
                                this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
                            },
                            _containsPoint: function(t) {
                                var e = this._point
                                  , i = this.options.stroke ? this.options.weight / 2 : 0;
                                return t.distanceTo(e) <= this._radius + i
                            }
                        } : {}),
                        r.CircleMarker.include(r.Path.CANVAS ? {
                            _updateStyle: function() {
                                r.Path.prototype._updateStyle.call(this)
                            }
                        } : {}),
                        r.GeoJSON = r.FeatureGroup.extend({
                            initialize: function(t, e) {
                                r.setOptions(this, e),
                                this._layers = {},
                                t && this.addData(t)
                            },
                            addData: function(t) {
                                var e = r.Util.isArray(t) ? t : t.features, i, n, o;
                                if (e) {
                                    for (i = 0,
                                    n = e.length; n > i; i++)
                                        o = e[i],
                                        (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(e[i]);
                                    return this
                                }
                                var s = this.options;
                                if (!s.filter || s.filter(t)) {
                                    var a = r.GeoJSON.geometryToLayer(t, s.pointToLayer, s.coordsToLatLng, s);
                                    return a.feature = r.GeoJSON.asFeature(t),
                                    a.defaultOptions = a.options,
                                    this.resetStyle(a),
                                    s.onEachFeature && s.onEachFeature(t, a),
                                    this.addLayer(a)
                                }
                            },
                            resetStyle: function(t) {
                                var e = this.options.style;
                                e && (r.Util.extend(t.options, t.defaultOptions),
                                this._setLayerStyle(t, e))
                            },
                            setStyle: function(t) {
                                this.eachLayer(function(e) {
                                    this._setLayerStyle(e, t)
                                }, this)
                            },
                            _setLayerStyle: function(t, e) {
                                "function" == typeof e && (e = e(t.feature)),
                                t.setStyle && t.setStyle(e)
                            }
                        }),
                        r.extend(r.GeoJSON, {
                            geometryToLayer: function(t, e, i, n) {
                                var o = "Feature" === t.type ? t.geometry : t, s = o.coordinates, a = [], l, h, u, c;
                                switch (i = i || this.coordsToLatLng,
                                o.type) {
                                case "Point":
                                    return l = i(s),
                                    e ? e(t, l) : new r.Marker(l);
                                case "MultiPoint":
                                    for (u = 0,
                                    c = s.length; c > u; u++)
                                        l = i(s[u]),
                                        a.push(e ? e(t, l) : new r.Marker(l));
                                    return new r.FeatureGroup(a);
                                case "LineString":
                                    return h = this.coordsToLatLngs(s, 0, i),
                                    new r.Polyline(h,n);
                                case "Polygon":
                                    if (2 === s.length && !s[1].length)
                                        throw new Error("Invalid GeoJSON object.");
                                    return h = this.coordsToLatLngs(s, 1, i),
                                    new r.Polygon(h,n);
                                case "MultiLineString":
                                    return h = this.coordsToLatLngs(s, 1, i),
                                    new r.MultiPolyline(h,n);
                                case "MultiPolygon":
                                    return h = this.coordsToLatLngs(s, 2, i),
                                    new r.MultiPolygon(h,n);
                                case "GeometryCollection":
                                    for (u = 0,
                                    c = o.geometries.length; c > u; u++)
                                        a.push(this.geometryToLayer({
                                            geometry: o.geometries[u],
                                            type: "Feature",
                                            properties: t.properties
                                        }, e, i, n));
                                    return new r.FeatureGroup(a);
                                default:
                                    throw new Error("Invalid GeoJSON object.")
                                }
                            },
                            coordsToLatLng: function(t) {
                                return new r.LatLng(t[1],t[0],t[2])
                            },
                            coordsToLatLngs: function(t, e, i) {
                                var n, o, s, r = [];
                                for (o = 0,
                                s = t.length; s > o; o++)
                                    n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]),
                                    r.push(n);
                                return r
                            },
                            latLngToCoords: function(t) {
                                var e = [t.lng, t.lat];
                                return t.alt !== o && e.push(t.alt),
                                e
                            },
                            latLngsToCoords: function(t) {
                                for (var e = [], i = 0, n = t.length; n > i; i++)
                                    e.push(r.GeoJSON.latLngToCoords(t[i]));
                                return e
                            },
                            getFeature: function(t, e) {
                                return t.feature ? r.extend({}, t.feature, {
                                    geometry: e
                                }) : r.GeoJSON.asFeature(e)
                            },
                            asFeature: function(t) {
                                return "Feature" === t.type ? t : {
                                    type: "Feature",
                                    properties: {},
                                    geometry: t
                                }
                            }
                        });
                        var l = {
                            toGeoJSON: function() {
                                return r.GeoJSON.getFeature(this, {
                                    type: "Point",
                                    coordinates: r.GeoJSON.latLngToCoords(this.getLatLng())
                                })
                            }
                        };
                        r.Marker.include(l),
                        r.Circle.include(l),
                        r.CircleMarker.include(l),
                        r.Polyline.include({
                            toGeoJSON: function() {
                                return r.GeoJSON.getFeature(this, {
                                    type: "LineString",
                                    coordinates: r.GeoJSON.latLngsToCoords(this.getLatLngs())
                                })
                            }
                        }),
                        r.Polygon.include({
                            toGeoJSON: function() {
                                var t = [r.GeoJSON.latLngsToCoords(this.getLatLngs())], e, i, n;
                                if (t[0].push(t[0][0]),
                                this._holes)
                                    for (e = 0,
                                    i = this._holes.length; i > e; e++)
                                        n = r.GeoJSON.latLngsToCoords(this._holes[e]),
                                        n.push(n[0]),
                                        t.push(n);
                                return r.GeoJSON.getFeature(this, {
                                    type: "Polygon",
                                    coordinates: t
                                })
                            }
                        }),
                        function() {
                            function t(t) {
                                return function() {
                                    var e = [];
                                    return this.eachLayer(function(t) {
                                        e.push(t.toGeoJSON().geometry.coordinates)
                                    }),
                                    r.GeoJSON.getFeature(this, {
                                        type: t,
                                        coordinates: e
                                    })
                                }
                            }
                            r.MultiPolyline.include({
                                toGeoJSON: t("MultiLineString")
                            }),
                            r.MultiPolygon.include({
                                toGeoJSON: t("MultiPolygon")
                            }),
                            r.LayerGroup.include({
                                toGeoJSON: function() {
                                    var e = this.feature && this.feature.geometry, i = [], n;
                                    if (e && "MultiPoint" === e.type)
                                        return t("MultiPoint").call(this);
                                    var o = e && "GeometryCollection" === e.type;
                                    return this.eachLayer(function(t) {
                                        t.toGeoJSON && (n = t.toGeoJSON(),
                                        i.push(o ? n.geometry : r.GeoJSON.asFeature(n)))
                                    }),
                                    o ? r.GeoJSON.getFeature(this, {
                                        geometries: i,
                                        type: "GeometryCollection"
                                    }) : {
                                        type: "FeatureCollection",
                                        features: i
                                    }
                                }
                            })
                        }(),
                        r.geoJson = function(t, e) {
                            return new r.GeoJSON(t,e)
                        }
                        ,
                        r.DomEvent = {
                            addListener: function(t, e, i, n) {
                                var o = r.stamp(i), s = "_leaflet_" + e + o, a, l, h;
                                return t[s] ? this : (a = function(e) {
                                    return i.call(n || t, e || r.DomEvent._getEvent())
                                }
                                ,
                                r.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, a, o) : (r.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, a, o),
                                "addEventListener"in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", a, !1),
                                t.addEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? (l = a,
                                h = "mouseenter" === e ? "mouseover" : "mouseout",
                                a = function(e) {
                                    return r.DomEvent._checkMouse(t, e) ? l(e) : void 0
                                }
                                ,
                                t.addEventListener(h, a, !1)) : "click" === e && r.Browser.android ? (l = a,
                                a = function(t) {
                                    return r.DomEvent._filterClick(t, l)
                                }
                                ,
                                t.addEventListener(e, a, !1)) : t.addEventListener(e, a, !1) : "attachEvent"in t && t.attachEvent("on" + e, a),
                                t[s] = a,
                                this))
                            },
                            removeListener: function(t, e, i) {
                                var n = r.stamp(i)
                                  , o = "_leaflet_" + e + n
                                  , s = t[o];
                                return s ? (r.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : r.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener"in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", s, !1),
                                t.removeEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", s, !1) : t.removeEventListener(e, s, !1) : "detachEvent"in t && t.detachEvent("on" + e, s),
                                t[o] = null ,
                                this) : this
                            },
                            stopPropagation: function(t) {
                                return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
                                r.DomEvent._skipped(t),
                                this
                            },
                            disableScrollPropagation: function(t) {
                                var e = r.DomEvent.stopPropagation;
                                return r.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
                            },
                            disableClickPropagation: function(t) {
                                for (var e = r.DomEvent.stopPropagation, i = r.Draggable.START.length - 1; i >= 0; i--)
                                    r.DomEvent.on(t, r.Draggable.START[i], e);
                                return r.DomEvent.on(t, "click", r.DomEvent._fakeStop).on(t, "dblclick", e)
                            },
                            preventDefault: function(t) {
                                return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                                this
                            },
                            stop: function(t) {
                                return r.DomEvent.preventDefault(t).stopPropagation(t)
                            },
                            getMousePosition: function(t, e) {
                                if (!e)
                                    return new r.Point(t.clientX,t.clientY);
                                var i = e.getBoundingClientRect();
                                return new r.Point(t.clientX - i.left - e.clientLeft,t.clientY - i.top - e.clientTop)
                            },
                            getWheelDelta: function(t) {
                                var e = 0;
                                return t.wheelDelta && (e = t.wheelDelta / 120),
                                t.detail && (e = -t.detail / 3),
                                e
                            },
                            _skipEvents: {},
                            _fakeStop: function(t) {
                                r.DomEvent._skipEvents[t.type] = !0
                            },
                            _skipped: function(t) {
                                var e = this._skipEvents[t.type];
                                return this._skipEvents[t.type] = !1,
                                e
                            },
                            _checkMouse: function(t, e) {
                                var i = e.relatedTarget;
                                if (!i)
                                    return !0;
                                try {
                                    for (; i && i !== t; )
                                        i = i.parentNode
                                } catch (n) {
                                    return !1
                                }
                                return i !== t
                            },
                            _getEvent: function() {
                                var e = t.event;
                                if (!e)
                                    for (var i = arguments.callee.caller; i && (e = i.arguments[0],
                                    !e || t.Event !== e.constructor); )
                                        i = i.caller;
                                return e
                            },
                            _filterClick: function(t, e) {
                                var i = t.timeStamp || t.originalEvent.timeStamp
                                  , n = r.DomEvent._lastClick && i - r.DomEvent._lastClick;
                                return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void r.DomEvent.stop(t) : (r.DomEvent._lastClick = i,
                                e(t))
                            }
                        },
                        r.DomEvent.on = r.DomEvent.addListener,
                        r.DomEvent.off = r.DomEvent.removeListener,
                        r.Draggable = r.Class.extend({
                            includes: r.Mixin.Events,
                            statics: {
                                START: r.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                                END: {
                                    mousedown: "mouseup",
                                    touchstart: "touchend",
                                    pointerdown: "touchend",
                                    MSPointerDown: "touchend"
                                },
                                MOVE: {
                                    mousedown: "mousemove",
                                    touchstart: "touchmove",
                                    pointerdown: "touchmove",
                                    MSPointerDown: "touchmove"
                                }
                            },
                            initialize: function(t, e) {
                                this._element = t,
                                this._dragStartTarget = e || t
                            },
                            enable: function() {
                                if (!this._enabled) {
                                    for (var t = r.Draggable.START.length - 1; t >= 0; t--)
                                        r.DomEvent.on(this._dragStartTarget, r.Draggable.START[t], this._onDown, this);
                                    this._enabled = !0
                                }
                            },
                            disable: function() {
                                if (this._enabled) {
                                    for (var t = r.Draggable.START.length - 1; t >= 0; t--)
                                        r.DomEvent.off(this._dragStartTarget, r.Draggable.START[t], this._onDown, this);
                                    this._enabled = !1,
                                    this._moved = !1
                                }
                            },
                            _onDown: function(t) {
                                if (this._moved = !1,
                                !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (r.DomEvent.stopPropagation(t),
                                !r.Draggable._disabled && (r.DomUtil.disableImageDrag(),
                                r.DomUtil.disableTextSelection(),
                                !this._moving))) {
                                    var e = t.touches ? t.touches[0] : t;
                                    this._startPoint = new r.Point(e.clientX,e.clientY),
                                    this._startPos = this._newPos = r.DomUtil.getPosition(this._element),
                                    r.DomEvent.on(n, r.Draggable.MOVE[t.type], this._onMove, this).on(n, r.Draggable.END[t.type], this._onUp, this)
                                }
                            },
                            _onMove: function(t) {
                                if (t.touches && t.touches.length > 1)
                                    return void (this._moved = !0);
                                var e = t.touches && 1 === t.touches.length ? t.touches[0] : t
                                  , i = new r.Point(e.clientX,e.clientY)
                                  , o = i.subtract(this._startPoint);
                                (o.x || o.y) && (r.Browser.touch && Math.abs(o.x) + Math.abs(o.y) < 3 || (r.DomEvent.preventDefault(t),
                                this._moved || (this.fire("dragstart"),
                                this._moved = !0,
                                this._startPos = r.DomUtil.getPosition(this._element).subtract(o),
                                r.DomUtil.addClass(n.body, "leaflet-dragging"),
                                this._lastTarget = t.target || t.srcElement,
                                r.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")),
                                this._newPos = this._startPos.add(o),
                                this._moving = !0,
                                r.Util.cancelAnimFrame(this._animRequest),
                                this._animRequest = r.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
                            },
                            _updatePosition: function() {
                                this.fire("predrag"),
                                r.DomUtil.setPosition(this._element, this._newPos),
                                this.fire("drag")
                            },
                            _onUp: function() {
                                r.DomUtil.removeClass(n.body, "leaflet-dragging"),
                                this._lastTarget && (r.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"),
                                this._lastTarget = null );
                                for (var t in r.Draggable.MOVE)
                                    r.DomEvent.off(n, r.Draggable.MOVE[t], this._onMove).off(n, r.Draggable.END[t], this._onUp);
                                r.DomUtil.enableImageDrag(),
                                r.DomUtil.enableTextSelection(),
                                this._moved && this._moving && (r.Util.cancelAnimFrame(this._animRequest),
                                this.fire("dragend", {
                                    distance: this._newPos.distanceTo(this._startPos)
                                })),
                                this._moving = !1
                            }
                        }),
                        r.Handler = r.Class.extend({
                            initialize: function(t) {
                                this._map = t
                            },
                            enable: function() {
                                this._enabled || (this._enabled = !0,
                                this.addHooks())
                            },
                            disable: function() {
                                this._enabled && (this._enabled = !1,
                                this.removeHooks())
                            },
                            enabled: function() {
                                return !!this._enabled
                            }
                        }),
                        r.Map.mergeOptions({
                            dragging: !0,
                            inertia: !r.Browser.android23,
                            inertiaDeceleration: 3400,
                            inertiaMaxSpeed: 1 / 0,
                            inertiaThreshold: r.Browser.touch ? 32 : 18,
                            easeLinearity: .25,
                            worldCopyJump: !1
                        }),
                        r.Map.Drag = r.Handler.extend({
                            addHooks: function() {
                                if (!this._draggable) {
                                    var t = this._map;
                                    this._draggable = new r.Draggable(t._mapPane,t._container),
                                    this._draggable.on({
                                        dragstart: this._onDragStart,
                                        drag: this._onDrag,
                                        dragend: this._onDragEnd
                                    }, this),
                                    t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this),
                                    t.on("viewreset", this._onViewReset, this),
                                    t.whenReady(this._onViewReset, this))
                                }
                                this._draggable.enable()
                            },
                            removeHooks: function() {
                                this._draggable.disable()
                            },
                            moved: function() {
                                return this._draggable && this._draggable._moved
                            },
                            _onDragStart: function() {
                                var t = this._map;
                                t._panAnim && t._panAnim.stop(),
                                t.fire("movestart").fire("dragstart"),
                                t.options.inertia && (this._positions = [],
                                this._times = [])
                            },
                            _onDrag: function() {
                                if (this._map.options.inertia) {
                                    var t = this._lastTime = +new Date
                                      , e = this._lastPos = this._draggable._newPos;
                                    this._positions.push(e),
                                    this._times.push(t),
                                    t - this._times[0] > 200 && (this._positions.shift(),
                                    this._times.shift())
                                }
                                this._map.fire("move").fire("drag")
                            },
                            _onViewReset: function() {
                                var t = this._map.getSize()._divideBy(2)
                                  , e = this._map.latLngToLayerPoint([0, 0]);
                                this._initialWorldOffset = e.subtract(t).x,
                                this._worldWidth = this._map.project([0, 180]).x
                            },
                            _onPreDrag: function() {
                                var t = this._worldWidth
                                  , e = Math.round(t / 2)
                                  , i = this._initialWorldOffset
                                  , n = this._draggable._newPos.x
                                  , o = (n - e + i) % t + e - i
                                  , s = (n + e + i) % t - e - i
                                  , r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                                this._draggable._newPos.x = r
                            },
                            _onDragEnd: function(t) {
                                var e = this._map
                                  , i = e.options
                                  , n = +new Date - this._lastTime
                                  , o = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
                                if (e.fire("dragend", t),
                                o)
                                    e.fire("moveend");
                                else {
                                    var s = this._lastPos.subtract(this._positions[0])
                                      , a = (this._lastTime + n - this._times[0]) / 1e3
                                      , l = i.easeLinearity
                                      , h = s.multiplyBy(l / a)
                                      , u = h.distanceTo([0, 0])
                                      , c = Math.min(i.inertiaMaxSpeed, u)
                                      , p = h.multiplyBy(c / u)
                                      , d = c / (i.inertiaDeceleration * l)
                                      , m = p.multiplyBy(-d / 2).round();
                                    m.x && m.y ? (m = e._limitOffset(m, e.options.maxBounds),
                                    r.Util.requestAnimFrame(function() {
                                        e.panBy(m, {
                                            duration: d,
                                            easeLinearity: l,
                                            noMoveStart: !0
                                        })
                                    })) : e.fire("moveend")
                                }
                            }
                        }),
                        r.Map.addInitHook("addHandler", "dragging", r.Map.Drag),
                        r.Map.mergeOptions({
                            doubleClickZoom: !0
                        }),
                        r.Map.DoubleClickZoom = r.Handler.extend({
                            addHooks: function() {
                                this._map.on("dblclick", this._onDoubleClick, this)
                            },
                            removeHooks: function() {
                                this._map.off("dblclick", this._onDoubleClick, this)
                            },
                            _onDoubleClick: function(t) {
                                var e = this._map
                                  , i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
                                "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
                            }
                        }),
                        r.Map.addInitHook("addHandler", "doubleClickZoom", r.Map.DoubleClickZoom),
                        r.Map.mergeOptions({
                            scrollWheelZoom: !0
                        }),
                        r.Map.ScrollWheelZoom = r.Handler.extend({
                            addHooks: function() {
                                r.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this),
                                r.DomEvent.on(this._map._container, "MozMousePixelScroll", r.DomEvent.preventDefault),
                                this._delta = 0
                            },
                            removeHooks: function() {
                                r.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll),
                                r.DomEvent.off(this._map._container, "MozMousePixelScroll", r.DomEvent.preventDefault)
                            },
                            _onWheelScroll: function(t) {
                                var e = r.DomEvent.getWheelDelta(t);
                                this._delta += e,
                                this._lastMousePos = this._map.mouseEventToContainerPoint(t),
                                this._startTime || (this._startTime = +new Date);
                                var i = Math.max(40 - (+new Date - this._startTime), 0);
                                clearTimeout(this._timer),
                                this._timer = setTimeout(r.bind(this._performZoom, this), i),
                                r.DomEvent.preventDefault(t),
                                r.DomEvent.stopPropagation(t)
                            },
                            _performZoom: function() {
                                var t = this._map
                                  , e = this._delta
                                  , i = t.getZoom();
                                e = e > 0 ? Math.ceil(e) : Math.floor(e),
                                e = Math.max(Math.min(e, 4), -4),
                                e = t._limitZoom(i + e) - i,
                                this._delta = 0,
                                this._startTime = null ,
                                e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
                            }
                        }),
                        r.Map.addInitHook("addHandler", "scrollWheelZoom", r.Map.ScrollWheelZoom),
                        r.extend(r.DomEvent, {
                            _touchstart: r.Browser.msPointer ? "MSPointerDown" : r.Browser.pointer ? "pointerdown" : "touchstart",
                            _touchend: r.Browser.msPointer ? "MSPointerUp" : r.Browser.pointer ? "pointerup" : "touchend",
                            addDoubleTapListener: function(t, e, i) {
                                function o(t) {
                                    var e;
                                    if (r.Browser.pointer ? (m.push(t.pointerId),
                                    e = m.length) : e = t.touches.length,
                                    !(e > 1)) {
                                        var i = Date.now()
                                          , n = i - (a || i);
                                        u = t.touches ? t.touches[0] : t,
                                        l = n > 0 && h >= n,
                                        a = i
                                    }
                                }
                                function s(t) {
                                    if (r.Browser.pointer) {
                                        var i = m.indexOf(t.pointerId);
                                        if (-1 === i)
                                            return;
                                        m.splice(i, 1)
                                    }
                                    if (l) {
                                        if (r.Browser.pointer) {
                                            var n = {}, o;
                                            for (var s in u)
                                                o = u[s],
                                                "function" == typeof o ? n[s] = o.bind(u) : n[s] = o;
                                            u = n
                                        }
                                        u.type = "dblclick",
                                        e(u),
                                        a = null
                                    }
                                }
                                var a, l = !1, h = 250, u, c = "_leaflet_", p = this._touchstart, d = this._touchend, m = [];
                                t[c + p + i] = o,
                                t[c + d + i] = s;
                                var _ = r.Browser.pointer ? n.documentElement : t;
                                return t.addEventListener(p, o, !1),
                                _.addEventListener(d, s, !1),
                                r.Browser.pointer && _.addEventListener(r.DomEvent.POINTER_CANCEL, s, !1),
                                this
                            },
                            removeDoubleTapListener: function(t, e) {
                                var i = "_leaflet_";
                                return t.removeEventListener(this._touchstart, t[i + this._touchstart + e], !1),
                                (r.Browser.pointer ? n.documentElement : t).removeEventListener(this._touchend, t[i + this._touchend + e], !1),
                                r.Browser.pointer && n.documentElement.removeEventListener(r.DomEvent.POINTER_CANCEL, t[i + this._touchend + e], !1),
                                this
                            }
                        }),
                        r.extend(r.DomEvent, {
                            POINTER_DOWN: r.Browser.msPointer ? "MSPointerDown" : "pointerdown",
                            POINTER_MOVE: r.Browser.msPointer ? "MSPointerMove" : "pointermove",
                            POINTER_UP: r.Browser.msPointer ? "MSPointerUp" : "pointerup",
                            POINTER_CANCEL: r.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
                            _pointers: [],
                            _pointerDocumentListener: !1,
                            addPointerListener: function(t, e, i, n) {
                                switch (e) {
                                case "touchstart":
                                    return this.addPointerListenerStart(t, e, i, n);
                                case "touchend":
                                    return this.addPointerListenerEnd(t, e, i, n);
                                case "touchmove":
                                    return this.addPointerListenerMove(t, e, i, n);
                                default:
                                    throw "Unknown touch event type"
                                }
                            },
                            addPointerListenerStart: function(t, e, i, o) {
                                var s = "_leaflet_"
                                  , a = this._pointers
                                  , l = function(t) {
                                    r.DomEvent.preventDefault(t);
                                    for (var e = !1, n = 0; n < a.length; n++)
                                        if (a[n].pointerId === t.pointerId) {
                                            e = !0;
                                            break
                                        }
                                    e || a.push(t),
                                    t.touches = a.slice(),
                                    t.changedTouches = [t],
                                    i(t)
                                }
                                ;
                                if (t[s + "touchstart" + o] = l,
                                t.addEventListener(this.POINTER_DOWN, l, !1),
                                !this._pointerDocumentListener) {
                                    var h = function(t) {
                                        for (var e = 0; e < a.length; e++)
                                            if (a[e].pointerId === t.pointerId) {
                                                a.splice(e, 1);
                                                break
                                            }
                                    }
                                    ;
                                    n.documentElement.addEventListener(this.POINTER_UP, h, !1),
                                    n.documentElement.addEventListener(this.POINTER_CANCEL, h, !1),
                                    this._pointerDocumentListener = !0
                                }
                                return this
                            },
                            addPointerListenerMove: function(t, e, i, n) {
                                function o(t) {
                                    if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                                        for (var e = 0; e < r.length; e++)
                                            if (r[e].pointerId === t.pointerId) {
                                                r[e] = t;
                                                break
                                            }
                                        t.touches = r.slice(),
                                        t.changedTouches = [t],
                                        i(t)
                                    }
                                }
                                var s = "_leaflet_"
                                  , r = this._pointers;
                                return t[s + "touchmove" + n] = o,
                                t.addEventListener(this.POINTER_MOVE, o, !1),
                                this
                            },
                            addPointerListenerEnd: function(t, e, i, n) {
                                var o = "_leaflet_"
                                  , s = this._pointers
                                  , r = function(t) {
                                    for (var e = 0; e < s.length; e++)
                                        if (s[e].pointerId === t.pointerId) {
                                            s.splice(e, 1);
                                            break
                                        }
                                    t.touches = s.slice(),
                                    t.changedTouches = [t],
                                    i(t)
                                }
                                ;
                                return t[o + "touchend" + n] = r,
                                t.addEventListener(this.POINTER_UP, r, !1),
                                t.addEventListener(this.POINTER_CANCEL, r, !1),
                                this
                            },
                            removePointerListener: function(t, e, i) {
                                var n = "_leaflet_"
                                  , o = t[n + e + i];
                                switch (e) {
                                case "touchstart":
                                    t.removeEventListener(this.POINTER_DOWN, o, !1);
                                    break;
                                case "touchmove":
                                    t.removeEventListener(this.POINTER_MOVE, o, !1);
                                    break;
                                case "touchend":
                                    t.removeEventListener(this.POINTER_UP, o, !1),
                                    t.removeEventListener(this.POINTER_CANCEL, o, !1)
                                }
                                return this
                            }
                        }),
                        r.Map.mergeOptions({
                            touchZoom: r.Browser.touch && !r.Browser.android23,
                            bounceAtZoomLimits: !0
                        }),
                        r.Map.TouchZoom = r.Handler.extend({
                            addHooks: function() {
                                r.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                            },
                            removeHooks: function() {
                                r.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                            },
                            _onTouchStart: function(t) {
                                var e = this._map;
                                if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                                    var i = e.mouseEventToLayerPoint(t.touches[0])
                                      , o = e.mouseEventToLayerPoint(t.touches[1])
                                      , s = e._getCenterLayerPoint();
                                    this._startCenter = i.add(o)._divideBy(2),
                                    this._startDist = i.distanceTo(o),
                                    this._moved = !1,
                                    this._zooming = !0,
                                    this._centerOffset = s.subtract(this._startCenter),
                                    e._panAnim && e._panAnim.stop(),
                                    r.DomEvent.on(n, "touchmove", this._onTouchMove, this).on(n, "touchend", this._onTouchEnd, this),
                                    r.DomEvent.preventDefault(t)
                                }
                            },
                            _onTouchMove: function(t) {
                                var e = this._map;
                                if (t.touches && 2 === t.touches.length && this._zooming) {
                                    var i = e.mouseEventToLayerPoint(t.touches[0])
                                      , n = e.mouseEventToLayerPoint(t.touches[1]);
                                    this._scale = i.distanceTo(n) / this._startDist,
                                    this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter),
                                    1 !== this._scale && (!e.options.bounceAtZoomLimits && (e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1) || (this._moved || (r.DomUtil.addClass(e._mapPane, "leaflet-touching"),
                                    e.fire("movestart").fire("zoomstart"),
                                    this._moved = !0),
                                    r.Util.cancelAnimFrame(this._animRequest),
                                    this._animRequest = r.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container),
                                    r.DomEvent.preventDefault(t)))
                                }
                            },
                            _updateOnMove: function() {
                                var t = this._map
                                  , e = this._getScaleOrigin()
                                  , i = t.layerPointToLatLng(e)
                                  , n = t.getScaleZoom(this._scale);
                                t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
                            },
                            _onTouchEnd: function() {
                                if (!this._moved || !this._zooming)
                                    return void (this._zooming = !1);
                                var t = this._map;
                                this._zooming = !1,
                                r.DomUtil.removeClass(t._mapPane, "leaflet-touching"),
                                r.Util.cancelAnimFrame(this._animRequest),
                                r.DomEvent.off(n, "touchmove", this._onTouchMove).off(n, "touchend", this._onTouchEnd);
                                var e = this._getScaleOrigin()
                                  , i = t.layerPointToLatLng(e)
                                  , o = t.getZoom()
                                  , s = t.getScaleZoom(this._scale) - o
                                  , a = s > 0 ? Math.ceil(s) : Math.floor(s)
                                  , l = t._limitZoom(o + a)
                                  , h = t.getZoomScale(l) / this._scale;
                                t._animateZoom(i, l, e, h)
                            },
                            _getScaleOrigin: function() {
                                var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                                return this._startCenter.add(t)
                            }
                        }),
                        r.Map.addInitHook("addHandler", "touchZoom", r.Map.TouchZoom),
                        r.Map.mergeOptions({
                            tap: !0,
                            tapTolerance: 15
                        }),
                        r.Map.Tap = r.Handler.extend({
                            addHooks: function() {
                                r.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
                            },
                            removeHooks: function() {
                                r.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
                            },
                            _onDown: function(t) {
                                if (t.touches) {
                                    if (r.DomEvent.preventDefault(t),
                                    this._fireClick = !0,
                                    t.touches.length > 1)
                                        return this._fireClick = !1,
                                        void clearTimeout(this._holdTimeout);
                                    var e = t.touches[0]
                                      , i = e.target;
                                    this._startPos = this._newPos = new r.Point(e.clientX,e.clientY),
                                    i.tagName && "a" === i.tagName.toLowerCase() && r.DomUtil.addClass(i, "leaflet-active"),
                                    this._holdTimeout = setTimeout(r.bind(function() {
                                        this._isTapValid() && (this._fireClick = !1,
                                        this._onUp(),
                                        this._simulateEvent("contextmenu", e))
                                    }, this), 1e3),
                                    r.DomEvent.on(n, "touchmove", this._onMove, this).on(n, "touchend", this._onUp, this)
                                }
                            },
                            _onUp: function(t) {
                                if (clearTimeout(this._holdTimeout),
                                r.DomEvent.off(n, "touchmove", this._onMove, this).off(n, "touchend", this._onUp, this),
                                this._fireClick && t && t.changedTouches) {
                                    var e = t.changedTouches[0]
                                      , i = e.target;
                                    i && i.tagName && "a" === i.tagName.toLowerCase() && r.DomUtil.removeClass(i, "leaflet-active"),
                                    this._isTapValid() && this._simulateEvent("click", e)
                                }
                            },
                            _isTapValid: function() {
                                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                            },
                            _onMove: function(t) {
                                var e = t.touches[0];
                                this._newPos = new r.Point(e.clientX,e.clientY)
                            },
                            _simulateEvent: function(e, i) {
                                var o = n.createEvent("MouseEvents");
                                o._simulated = !0,
                                i.target._simulatedClick = !0,
                                o.initMouseEvent(e, !0, !0, t, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null ),
                                i.target.dispatchEvent(o)
                            }
                        }),
                        r.Browser.touch && !r.Browser.pointer && r.Map.addInitHook("addHandler", "tap", r.Map.Tap),
                        r.Map.mergeOptions({
                            boxZoom: !0
                        }),
                        r.Map.BoxZoom = r.Handler.extend({
                            initialize: function(t) {
                                this._map = t,
                                this._container = t._container,
                                this._pane = t._panes.overlayPane,
                                this._moved = !1
                            },
                            addHooks: function() {
                                r.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                            },
                            removeHooks: function() {
                                r.DomEvent.off(this._container, "mousedown", this._onMouseDown),
                                this._moved = !1
                            },
                            moved: function() {
                                return this._moved
                            },
                            _onMouseDown: function(t) {
                                return this._moved = !1,
                                !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (r.DomUtil.disableTextSelection(),
                                r.DomUtil.disableImageDrag(),
                                this._startLayerPoint = this._map.mouseEventToLayerPoint(t),
                                void r.DomEvent.on(n, "mousemove", this._onMouseMove, this).on(n, "mouseup", this._onMouseUp, this).on(n, "keydown", this._onKeyDown, this))
                            },
                            _onMouseMove: function(t) {
                                this._moved || (this._box = r.DomUtil.create("div", "leaflet-zoom-box", this._pane),
                                r.DomUtil.setPosition(this._box, this._startLayerPoint),
                                this._container.style.cursor = "crosshair",
                                this._map.fire("boxzoomstart"));
                                var e = this._startLayerPoint
                                  , i = this._box
                                  , n = this._map.mouseEventToLayerPoint(t)
                                  , o = n.subtract(e)
                                  , s = new r.Point(Math.min(n.x, e.x),Math.min(n.y, e.y));
                                r.DomUtil.setPosition(i, s),
                                this._moved = !0,
                                i.style.width = Math.max(0, Math.abs(o.x) - 4) + "px",
                                i.style.height = Math.max(0, Math.abs(o.y) - 4) + "px"
                            },
                            _finish: function() {
                                this._moved && (this._pane.removeChild(this._box),
                                this._container.style.cursor = ""),
                                r.DomUtil.enableTextSelection(),
                                r.DomUtil.enableImageDrag(),
                                r.DomEvent.off(n, "mousemove", this._onMouseMove).off(n, "mouseup", this._onMouseUp).off(n, "keydown", this._onKeyDown)
                            },
                            _onMouseUp: function(t) {
                                this._finish();
                                var e = this._map
                                  , i = e.mouseEventToLayerPoint(t);
                                if (!this._startLayerPoint.equals(i)) {
                                    var n = new r.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));
                                    e.fitBounds(n),
                                    e.fire("boxzoomend", {
                                        boxZoomBounds: n
                                    })
                                }
                            },
                            _onKeyDown: function(t) {
                                27 === t.keyCode && this._finish()
                            }
                        }),
                        r.Map.addInitHook("addHandler", "boxZoom", r.Map.BoxZoom),
                        r.Map.mergeOptions({
                            keyboard: !0,
                            keyboardPanOffset: 80,
                            keyboardZoomOffset: 1
                        }),
                        r.Map.Keyboard = r.Handler.extend({
                            keyCodes: {
                                left: [37],
                                right: [39],
                                down: [40],
                                up: [38],
                                zoomIn: [187, 107, 61, 171],
                                zoomOut: [189, 109, 173]
                            },
                            initialize: function(t) {
                                this._map = t,
                                this._setPanOffset(t.options.keyboardPanOffset),
                                this._setZoomOffset(t.options.keyboardZoomOffset)
                            },
                            addHooks: function() {
                                var t = this._map._container;
                                -1 === t.tabIndex && (t.tabIndex = "0"),
                                r.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this),
                                this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
                            },
                            removeHooks: function() {
                                this._removeHooks();
                                var t = this._map._container;
                                r.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this),
                                this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
                            },
                            _onMouseDown: function() {
                                if (!this._focused) {
                                    var e = n.body
                                      , i = n.documentElement
                                      , o = e.scrollTop || i.scrollTop
                                      , s = e.scrollLeft || i.scrollLeft;
                                    this._map._container.focus(),
                                    t.scrollTo(s, o)
                                }
                            },
                            _onFocus: function() {
                                this._focused = !0,
                                this._map.fire("focus")
                            },
                            _onBlur: function() {
                                this._focused = !1,
                                this._map.fire("blur")
                            },
                            _setPanOffset: function(t) {
                                var e = this._panKeys = {}, i = this.keyCodes, n, o;
                                for (n = 0,
                                o = i.left.length; o > n; n++)
                                    e[i.left[n]] = [-1 * t, 0];
                                for (n = 0,
                                o = i.right.length; o > n; n++)
                                    e[i.right[n]] = [t, 0];
                                for (n = 0,
                                o = i.down.length; o > n; n++)
                                    e[i.down[n]] = [0, t];
                                for (n = 0,
                                o = i.up.length; o > n; n++)
                                    e[i.up[n]] = [0, -1 * t]
                            },
                            _setZoomOffset: function(t) {
                                var e = this._zoomKeys = {}, i = this.keyCodes, n, o;
                                for (n = 0,
                                o = i.zoomIn.length; o > n; n++)
                                    e[i.zoomIn[n]] = t;
                                for (n = 0,
                                o = i.zoomOut.length; o > n; n++)
                                    e[i.zoomOut[n]] = -t
                            },
                            _addHooks: function() {
                                r.DomEvent.on(n, "keydown", this._onKeyDown, this)
                            },
                            _removeHooks: function() {
                                r.DomEvent.off(n, "keydown", this._onKeyDown, this)
                            },
                            _onKeyDown: function(t) {
                                var e = t.keyCode
                                  , i = this._map;
                                if (e in this._panKeys) {
                                    if (i._panAnim && i._panAnim._inProgress)
                                        return;
                                    i.panBy(this._panKeys[e]),
                                    i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
                                } else {
                                    if (!(e in this._zoomKeys))
                                        return;
                                    i.setZoom(i.getZoom() + this._zoomKeys[e])
                                }
                                r.DomEvent.stop(t)
                            }
                        }),
                        r.Map.addInitHook("addHandler", "keyboard", r.Map.Keyboard),
                        r.Handler.MarkerDrag = r.Handler.extend({
                            initialize: function(t) {
                                this._marker = t
                            },
                            addHooks: function() {
                                var t = this._marker._icon;
                                this._draggable || (this._draggable = new r.Draggable(t,t)),
                                this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this),
                                this._draggable.enable(),
                                r.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
                            },
                            removeHooks: function() {
                                this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this),
                                this._draggable.disable(),
                                r.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
                            },
                            moved: function() {
                                return this._draggable && this._draggable._moved
                            },
                            _onDragStart: function() {
                                this._marker.closePopup().fire("movestart").fire("dragstart")
                            },
                            _onDrag: function() {
                                var t = this._marker
                                  , e = t._shadow
                                  , i = r.DomUtil.getPosition(t._icon)
                                  , n = t._map.layerPointToLatLng(i);
                                e && r.DomUtil.setPosition(e, i),
                                t._latlng = n,
                                t.fire("move", {
                                    latlng: n
                                }).fire("drag")
                            },
                            _onDragEnd: function(t) {
                                this._marker.fire("moveend").fire("dragend", t)
                            }
                        }),
                        r.Control = r.Class.extend({
                            options: {
                                position: "topright"
                            },
                            initialize: function(t) {
                                r.setOptions(this, t)
                            },
                            getPosition: function() {
                                return this.options.position
                            },
                            setPosition: function(t) {
                                var e = this._map;
                                return e && e.removeControl(this),
                                this.options.position = t,
                                e && e.addControl(this),
                                this
                            },
                            getContainer: function() {
                                return this._container
                            },
                            addTo: function(t) {
                                this._map = t;
                                var e = this._container = this.onAdd(t)
                                  , i = this.getPosition()
                                  , n = t._controlCorners[i];
                                return r.DomUtil.addClass(e, "leaflet-control"),
                                -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
                                this
                            },
                            removeFrom: function(t) {
                                var e = this.getPosition()
                                  , i = t._controlCorners[e];
                                return i.removeChild(this._container),
                                this._map = null ,
                                this.onRemove && this.onRemove(t),
                                this
                            },
                            _refocusOnMap: function() {
                                this._map && this._map.getContainer().focus()
                            }
                        }),
                        r.control = function(t) {
                            return new r.Control(t)
                        }
                        ,
                        r.Map.include({
                            addControl: function(t) {
                                return t.addTo(this),
                                this
                            },
                            removeControl: function(t) {
                                return t.removeFrom(this),
                                this
                            },
                            _initControlPos: function() {
                                function t(t, o) {
                                    var s = i + t + " " + i + o;
                                    e[t + o] = r.DomUtil.create("div", s, n)
                                }
                                var e = this._controlCorners = {}
                                  , i = "leaflet-"
                                  , n = this._controlContainer = r.DomUtil.create("div", i + "control-container", this._container);
                                t("top", "left"),
                                t("top", "right"),
                                t("bottom", "left"),
                                t("bottom", "right")
                            },
                            _clearControlPos: function() {
                                this._container.removeChild(this._controlContainer)
                            }
                        }),
                        r.Control.Zoom = r.Control.extend({
                            options: {
                                position: "topleft",
                                zoomInText: "+",
                                zoomInTitle: "Zoom in",
                                zoomOutText: "-",
                                zoomOutTitle: "Zoom out"
                            },
                            onAdd: function(t) {
                                var e = "leaflet-control-zoom"
                                  , i = r.DomUtil.create("div", e + " leaflet-bar");
                                return this._map = t,
                                this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this),
                                this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this),
                                this._updateDisabled(),
                                t.on("zoomend zoomlevelschange", this._updateDisabled, this),
                                i
                            },
                            onRemove: function(t) {
                                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                            },
                            _zoomIn: function(t) {
                                this._map.zoomIn(t.shiftKey ? 3 : 1)
                            },
                            _zoomOut: function(t) {
                                this._map.zoomOut(t.shiftKey ? 3 : 1)
                            },
                            _createButton: function(t, e, i, n, o, s) {
                                var a = r.DomUtil.create("a", i, n);
                                a.innerHTML = t,
                                a.href = "#",
                                a.title = e;
                                var l = r.DomEvent.stopPropagation;
                                return r.DomEvent.on(a, "click", l).on(a, "mousedown", l).on(a, "dblclick", l).on(a, "click", r.DomEvent.preventDefault).on(a, "click", o, s).on(a, "click", this._refocusOnMap, s),
                                a
                            },
                            _updateDisabled: function() {
                                var t = this._map
                                  , e = "leaflet-disabled";
                                r.DomUtil.removeClass(this._zoomInButton, e),
                                r.DomUtil.removeClass(this._zoomOutButton, e),
                                t._zoom === t.getMinZoom() && r.DomUtil.addClass(this._zoomOutButton, e),
                                t._zoom === t.getMaxZoom() && r.DomUtil.addClass(this._zoomInButton, e)
                            }
                        }),
                        r.Map.mergeOptions({
                            zoomControl: !0
                        }),
                        r.Map.addInitHook(function() {
                            this.options.zoomControl && (this.zoomControl = new r.Control.Zoom,
                            this.addControl(this.zoomControl))
                        }),
                        r.control.zoom = function(t) {
                            return new r.Control.Zoom(t)
                        }
                        ,
                        r.Control.Attribution = r.Control.extend({
                            options: {
                                position: "bottomright",
                                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                            },
                            initialize: function(t) {
                                r.setOptions(this, t),
                                this._attributions = {}
                            },
                            onAdd: function(t) {
                                this._container = r.DomUtil.create("div", "leaflet-control-attribution"),
                                r.DomEvent.disableClickPropagation(this._container);
                                for (var e in t._layers)
                                    t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                                return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this),
                                this._update(),
                                this._container
                            },
                            onRemove: function(t) {
                                t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
                            },
                            setPrefix: function(t) {
                                return this.options.prefix = t,
                                this._update(),
                                this
                            },
                            addAttribution: function(t) {
                                return t ? (this._attributions[t] || (this._attributions[t] = 0),
                                this._attributions[t]++,
                                this._update(),
                                this) : void 0
                            },
                            removeAttribution: function(t) {
                                return t ? (this._attributions[t] && (this._attributions[t]--,
                                this._update()),
                                this) : void 0
                            },
                            _update: function() {
                                if (this._map) {
                                    var t = [];
                                    for (var e in this._attributions)
                                        this._attributions[e] && t.push(e);
                                    var i = [];
                                    this.options.prefix && i.push(this.options.prefix),
                                    t.length && i.push(t.join(", ")),
                                    this._container.innerHTML = i.join(" | ")
                                }
                            },
                            _onLayerAdd: function(t) {
                                t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
                            },
                            _onLayerRemove: function(t) {
                                t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
                            }
                        }),
                        r.Map.mergeOptions({
                            attributionControl: !0
                        }),
                        r.Map.addInitHook(function() {
                            this.options.attributionControl && (this.attributionControl = (new r.Control.Attribution).addTo(this))
                        }),
                        r.control.attribution = function(t) {
                            return new r.Control.Attribution(t)
                        }
                        ,
                        r.Control.Scale = r.Control.extend({
                            options: {
                                position: "bottomleft",
                                maxWidth: 100,
                                metric: !0,
                                imperial: !0,
                                updateWhenIdle: !1
                            },
                            onAdd: function(t) {
                                this._map = t;
                                var e = "leaflet-control-scale"
                                  , i = r.DomUtil.create("div", e)
                                  , n = this.options;
                                return this._addScales(n, e, i),
                                t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
                                t.whenReady(this._update, this),
                                i
                            },
                            onRemove: function(t) {
                                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                            },
                            _addScales: function(t, e, i) {
                                t.metric && (this._mScale = r.DomUtil.create("div", e + "-line", i)),
                                t.imperial && (this._iScale = r.DomUtil.create("div", e + "-line", i))
                            },
                            _update: function() {
                                var t = this._map.getBounds()
                                  , e = t.getCenter().lat
                                  , i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180)
                                  , n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180
                                  , o = this._map.getSize()
                                  , s = this.options
                                  , r = 0;
                                o.x > 0 && (r = n * (s.maxWidth / o.x)),
                                this._updateScales(s, r)
                            },
                            _updateScales: function(t, e) {
                                t.metric && e && this._updateMetric(e),
                                t.imperial && e && this._updateImperial(e)
                            },
                            _updateMetric: function(t) {
                                var e = this._getRoundNum(t);
                                this._mScale.style.width = this._getScaleWidth(e / t) + "px",
                                this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
                            },
                            _updateImperial: function(t) {
                                var e = 3.2808399 * t, i = this._iScale, n, o, s;
                                e > 5280 ? (n = e / 5280,
                                o = this._getRoundNum(n),
                                i.style.width = this._getScaleWidth(o / n) + "px",
                                i.innerHTML = o + " mi") : (s = this._getRoundNum(e),
                                i.style.width = this._getScaleWidth(s / e) + "px",
                                i.innerHTML = s + " ft")
                            },
                            _getScaleWidth: function(t) {
                                return Math.round(this.options.maxWidth * t) - 10
                            },
                            _getRoundNum: function(t) {
                                var e = Math.pow(10, (Math.floor(t) + "").length - 1)
                                  , i = t / e;
                                return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1,
                                e * i
                            }
                        }),
                        r.control.scale = function(t) {
                            return new r.Control.Scale(t)
                        }
                        ,
                        r.Control.Layers = r.Control.extend({
                            options: {
                                collapsed: !0,
                                position: "topright",
                                autoZIndex: !0
                            },
                            initialize: function(t, e, i) {
                                r.setOptions(this, i),
                                this._layers = {},
                                this._lastZIndex = 0,
                                this._handlingClick = !1;
                                for (var n in t)
                                    this._addLayer(t[n], n);
                                for (n in e)
                                    this._addLayer(e[n], n, !0)
                            },
                            onAdd: function(t) {
                                return this._initLayout(),
                                this._update(),
                                t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this),
                                this._container
                            },
                            onRemove: function(t) {
                                t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
                            },
                            addBaseLayer: function(t, e) {
                                return this._addLayer(t, e),
                                this._update(),
                                this
                            },
                            addOverlay: function(t, e) {
                                return this._addLayer(t, e, !0),
                                this._update(),
                                this
                            },
                            removeLayer: function(t) {
                                var e = r.stamp(t);
                                return delete this._layers[e],
                                this._update(),
                                this
                            },
                            _initLayout: function() {
                                var t = "leaflet-control-layers"
                                  , e = this._container = r.DomUtil.create("div", t);
                                e.setAttribute("aria-haspopup", !0),
                                r.Browser.touch ? r.DomEvent.on(e, "click", r.DomEvent.stopPropagation) : r.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
                                var i = this._form = r.DomUtil.create("form", t + "-list");
                                if (this.options.collapsed) {
                                    r.Browser.android || r.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                                    var n = this._layersLink = r.DomUtil.create("a", t + "-toggle", e);
                                    n.href = "#",
                                    n.title = "Layers",
                                    r.Browser.touch ? r.DomEvent.on(n, "click", r.DomEvent.stop).on(n, "click", this._expand, this) : r.DomEvent.on(n, "focus", this._expand, this),
                                    r.DomEvent.on(i, "click", function() {
                                        setTimeout(r.bind(this._onInputClick, this), 0)
                                    }, this),
                                    this._map.on("click", this._collapse, this)
                                } else
                                    this._expand();
                                this._baseLayersList = r.DomUtil.create("div", t + "-base", i),
                                this._separator = r.DomUtil.create("div", t + "-separator", i),
                                this._overlaysList = r.DomUtil.create("div", t + "-overlays", i),
                                e.appendChild(i)
                            },
                            _addLayer: function(t, e, i) {
                                var n = r.stamp(t);
                                this._layers[n] = {
                                    layer: t,
                                    name: e,
                                    overlay: i
                                },
                                this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
                                t.setZIndex(this._lastZIndex))
                            },
                            _update: function() {
                                if (this._container) {
                                    this._baseLayersList.innerHTML = "",
                                    this._overlaysList.innerHTML = "";
                                    var t = !1, e = !1, i, n;
                                    for (i in this._layers)
                                        n = this._layers[i],
                                        this._addItem(n),
                                        e = e || n.overlay,
                                        t = t || !n.overlay;
                                    this._separator.style.display = e && t ? "" : "none"
                                }
                            },
                            _onLayerChange: function(t) {
                                var e = this._layers[r.stamp(t.layer)];
                                if (e) {
                                    this._handlingClick || this._update();
                                    var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null ;
                                    i && this._map.fire(i, e)
                                }
                            },
                            _createRadioElement: function(t, e) {
                                var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
                                e && (i += ' checked="checked"'),
                                i += "/>";
                                var o = n.createElement("div");
                                return o.innerHTML = i,
                                o.firstChild
                            },
                            _addItem: function(t) {
                                var e = n.createElement("label"), i, o = this._map.hasLayer(t.layer);
                                t.overlay ? (i = n.createElement("input"),
                                i.type = "checkbox",
                                i.className = "leaflet-control-layers-selector",
                                i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o),
                                i.layerId = r.stamp(t.layer),
                                r.DomEvent.on(i, "click", this._onInputClick, this);
                                var s = n.createElement("span");
                                s.innerHTML = " " + t.name,
                                e.appendChild(i),
                                e.appendChild(s);
                                var a = t.overlay ? this._overlaysList : this._baseLayersList;
                                return a.appendChild(e),
                                e
                            },
                            _onInputClick: function() {
                                var t, e, i, n = this._form.getElementsByTagName("input"), o = n.length;
                                for (this._handlingClick = !0,
                                t = 0; o > t; t++)
                                    e = n[t],
                                    i = this._layers[e.layerId],
                                    e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
                                this._handlingClick = !1,
                                this._refocusOnMap()
                            },
                            _expand: function() {
                                r.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
                            },
                            _collapse: function() {
                                this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
                            }
                        }),
                        r.control.layers = function(t, e, i) {
                            return new r.Control.Layers(t,e,i)
                        }
                        ,
                        r.PosAnimation = r.Class.extend({
                            includes: r.Mixin.Events,
                            run: function(t, e, i, n) {
                                this.stop(),
                                this._el = t,
                                this._inProgress = !0,
                                this._newPos = e,
                                this.fire("start"),
                                t.style[r.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)",
                                r.DomEvent.on(t, r.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
                                r.DomUtil.setPosition(t, e),
                                r.Util.falseFn(t.offsetWidth),
                                this._stepTimer = setInterval(r.bind(this._onStep, this), 50)
                            },
                            stop: function() {
                                this._inProgress && (r.DomUtil.setPosition(this._el, this._getPos()),
                                this._onTransitionEnd(),
                                r.Util.falseFn(this._el.offsetWidth))
                            },
                            _onStep: function() {
                                var t = this._getPos();
                                return t ? (this._el._leaflet_pos = t,
                                void this.fire("step")) : void this._onTransitionEnd()
                            },
                            _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
                            _getPos: function() {
                                var e, i, n, o = this._el, s = t.getComputedStyle(o);
                                if (r.Browser.any3d) {
                                    if (n = s[r.DomUtil.TRANSFORM].match(this._transformRe),
                                    !n)
                                        return;
                                    e = parseFloat(n[1]),
                                    i = parseFloat(n[2])
                                } else
                                    e = parseFloat(s.left),
                                    i = parseFloat(s.top);
                                return new r.Point(e,i,!0)
                            },
                            _onTransitionEnd: function() {
                                r.DomEvent.off(this._el, r.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
                                this._inProgress && (this._inProgress = !1,
                                this._el.style[r.DomUtil.TRANSITION] = "",
                                this._el._leaflet_pos = this._newPos,
                                clearInterval(this._stepTimer),
                                this.fire("step").fire("end"))
                            }
                        }),
                        r.Map.include({
                            setView: function(t, e, i) {
                                if (e = e === o ? this._zoom : this._limitZoom(e),
                                t = this._limitCenter(r.latLng(t), e, this.options.maxBounds),
                                i = i || {},
                                this._panAnim && this._panAnim.stop(),
                                this._loaded && !i.reset && i !== !0) {
                                    i.animate !== o && (i.zoom = r.extend({
                                        animate: i.animate
                                    }, i.zoom),
                                    i.pan = r.extend({
                                        animate: i.animate
                                    }, i.pan));
                                    var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
                                    if (n)
                                        return clearTimeout(this._sizeTimer),
                                        this
                                }
                                return this._resetView(t, e),
                                this
                            },
                            panBy: function(t, e) {
                                if (t = r.point(t).round(),
                                e = e || {},
                                !t.x && !t.y)
                                    return this;
                                if (this._panAnim || (this._panAnim = new r.PosAnimation,
                                this._panAnim.on({
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd
                                }, this)),
                                e.noMoveStart || this.fire("movestart"),
                                e.animate !== !1) {
                                    r.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                                    var i = this._getMapPanePos().subtract(t);
                                    this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                                } else
                                    this._rawPanBy(t),
                                    this.fire("move").fire("moveend");
                                return this
                            },
                            _onPanTransitionStep: function() {
                                this.fire("move")
                            },
                            _onPanTransitionEnd: function() {
                                r.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"),
                                this.fire("moveend")
                            },
                            _tryAnimatedPan: function(t, e) {
                                var i = this._getCenterOffset(t)._floor();
                                return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e),
                                !0) : !1
                            }
                        }),
                        r.PosAnimation = r.DomUtil.TRANSITION ? r.PosAnimation : r.PosAnimation.extend({
                            run: function(t, e, i, n) {
                                this.stop(),
                                this._el = t,
                                this._inProgress = !0,
                                this._duration = i || .25,
                                this._easeOutPower = 1 / Math.max(n || .5, .2),
                                this._startPos = r.DomUtil.getPosition(t),
                                this._offset = e.subtract(this._startPos),
                                this._startTime = +new Date,
                                this.fire("start"),
                                this._animate()
                            },
                            stop: function() {
                                this._inProgress && (this._step(),
                                this._complete())
                            },
                            _animate: function() {
                                this._animId = r.Util.requestAnimFrame(this._animate, this),
                                this._step()
                            },
                            _step: function() {
                                var t = +new Date - this._startTime
                                  , e = 1e3 * this._duration;
                                e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1),
                                this._complete())
                            },
                            _runFrame: function(t) {
                                var e = this._startPos.add(this._offset.multiplyBy(t));
                                r.DomUtil.setPosition(this._el, e),
                                this.fire("step")
                            },
                            _complete: function() {
                                r.Util.cancelAnimFrame(this._animId),
                                this._inProgress = !1,
                                this.fire("end")
                            },
                            _easeOut: function(t) {
                                return 1 - Math.pow(1 - t, this._easeOutPower)
                            }
                        }),
                        r.Map.mergeOptions({
                            zoomAnimation: !0,
                            zoomAnimationThreshold: 4
                        }),
                        r.DomUtil.TRANSITION && r.Map.addInitHook(function() {
                            this._zoomAnimated = this.options.zoomAnimation && r.DomUtil.TRANSITION && r.Browser.any3d && !r.Browser.android23 && !r.Browser.mobileOpera,
                            this._zoomAnimated && r.DomEvent.on(this._mapPane, r.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
                        }),
                        r.Map.include(r.DomUtil.TRANSITION ? {
                            _catchTransitionEnd: function(t) {
                                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                            },
                            _nothingToAnimate: function() {
                                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                            },
                            _tryAnimatedZoom: function(t, e, i) {
                                if (this._animatingZoom)
                                    return !0;
                                if (i = i || {},
                                !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                                    return !1;
                                var n = this.getZoomScale(e)
                                  , o = this._getCenterOffset(t)._divideBy(1 - 1 / n)
                                  , s = this._getCenterLayerPoint()._add(o);
                                return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"),
                                this._animateZoom(t, e, s, n, null , !0),
                                !0) : !1
                            },
                            _animateZoom: function(t, e, i, n, o, s, a) {
                                a || (this._animatingZoom = !0),
                                r.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"),
                                this._animateToCenter = t,
                                this._animateToZoom = e,
                                r.Draggable && (r.Draggable._disabled = !0),
                                r.Util.requestAnimFrame(function() {
                                    this.fire("zoomanim", {
                                        center: t,
                                        zoom: e,
                                        origin: i,
                                        scale: n,
                                        delta: o,
                                        backwards: s
                                    })
                                }, this)
                            },
                            _onZoomTransitionEnd: function() {
                                this._animatingZoom = !1,
                                r.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"),
                                this._resetView(this._animateToCenter, this._animateToZoom, !0, !0),
                                r.Draggable && (r.Draggable._disabled = !1)
                            }
                        } : {}),
                        r.TileLayer.include({
                            _animateZoom: function(t) {
                                this._animating || (this._animating = !0,
                                this._prepareBgBuffer());
                                var e = this._bgBuffer
                                  , i = r.DomUtil.TRANSFORM
                                  , n = t.delta ? r.DomUtil.getTranslateString(t.delta) : e.style[i]
                                  , o = r.DomUtil.getScaleString(t.scale, t.origin);
                                e.style[i] = t.backwards ? o + " " + n : n + " " + o
                            },
                            _endZoomAnim: function() {
                                var t = this._tileContainer
                                  , e = this._bgBuffer;
                                t.style.visibility = "",
                                t.parentNode.appendChild(t),
                                r.Util.falseFn(e.offsetWidth),
                                this._animating = !1
                            },
                            _clearBgBuffer: function() {
                                var t = this._map;
                                !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "",
                                this._bgBuffer.style[r.DomUtil.TRANSFORM] = "")
                            },
                            _prepareBgBuffer: function() {
                                var t = this._tileContainer
                                  , e = this._bgBuffer
                                  , i = this._getLoadedTilesPercentage(e)
                                  , n = this._getLoadedTilesPercentage(t);
                                return e && i > .5 && .5 > n ? (t.style.visibility = "hidden",
                                void this._stopLoadingImages(t)) : (e.style.visibility = "hidden",
                                e.style[r.DomUtil.TRANSFORM] = "",
                                this._tileContainer = e,
                                e = this._bgBuffer = t,
                                this._stopLoadingImages(e),
                                void clearTimeout(this._clearBgBufferTimer))
                            },
                            _getLoadedTilesPercentage: function(t) {
                                var e = t.getElementsByTagName("img"), i, n, o = 0;
                                for (i = 0,
                                n = e.length; n > i; i++)
                                    e[i].complete && o++;
                                return o / n
                            },
                            _stopLoadingImages: function(t) {
                                var e = Array.prototype.slice.call(t.getElementsByTagName("img")), i, n, o;
                                for (i = 0,
                                n = e.length; n > i; i++)
                                    o = e[i],
                                    o.complete || (o.onload = r.Util.falseFn,
                                    o.onerror = r.Util.falseFn,
                                    o.src = r.Util.emptyImageUrl,
                                    o.parentNode.removeChild(o))
                            }
                        }),
                        r.Map.include({
                            _defaultLocateOptions: {
                                watch: !1,
                                setView: !1,
                                maxZoom: 1 / 0,
                                timeout: 1e4,
                                maximumAge: 0,
                                enableHighAccuracy: !1
                            },
                            locate: function(t) {
                                if (t = this._locateOptions = r.extend(this._defaultLocateOptions, t),
                                !navigator.geolocation)
                                    return this._handleGeolocationError({
                                        code: 0,
                                        message: "Geolocation not supported."
                                    }),
                                    this;
                                var e = r.bind(this._handleGeolocationResponse, this)
                                  , i = r.bind(this._handleGeolocationError, this);
                                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t),
                                this
                            },
                            stopLocate: function() {
                                return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId),
                                this._locateOptions && (this._locateOptions.setView = !1),
                                this
                            },
                            _handleGeolocationError: function(t) {
                                var e = t.code
                                  , i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                                this._locateOptions.setView && !this._loaded && this.fitWorld(),
                                this.fire("locationerror", {
                                    code: e,
                                    message: "Geolocation error: " + i + "."
                                })
                            },
                            _handleGeolocationResponse: function(t) {
                                var e = t.coords.latitude
                                  , i = t.coords.longitude
                                  , n = new r.LatLng(e,i)
                                  , o = 180 * t.coords.accuracy / 40075017
                                  , s = o / Math.cos(r.LatLng.DEG_TO_RAD * e)
                                  , a = r.latLngBounds([e - o, i - s], [e + o, i + s])
                                  , l = this._locateOptions;
                                if (l.setView) {
                                    var h = Math.min(this.getBoundsZoom(a), l.maxZoom);
                                    this.setView(n, h)
                                }
                                var u = {
                                    latlng: n,
                                    bounds: a,
                                    timestamp: t.timestamp
                                };
                                for (var c in t.coords)
                                    "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
                                this.fire("locationfound", u)
                            }
                        })
                    }(window, document)
                }
                , {}],
                3: [function(t, e, n) {
                    /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */
                    !function(t, e) {
                        if ("object" == typeof n && n)
                            e(n);
                        else {
                            var o = {};
                            e(o),
                            "function" == typeof i && i.amd ? i(o) : t.Mustache = o
                        }
                    }(this, function(t) {
                        function e(t, e) {
                            return L.call(t, e)
                        }
                        function i(t) {
                            return !e(f, t)
                        }
                        function n(t) {
                            return "function" == typeof t
                        }
                        function o(t) {
                            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                        }
                        function s(t) {
                            return String(t).replace(/[&<>"'\/]/g, function(t) {
                                return T[t]
                            })
                        }
                        function r(t) {
                            this.string = t,
                            this.tail = t,
                            this.pos = 0
                        }
                        function a(t, e) {
                            this.view = null == t ? {} : t,
                            this.parent = e,
                            this._cache = {
                                ".": this.view
                            }
                        }
                        function l() {
                            this.clearCache()
                        }
                        function h(e, i, o, s) {
                            function r(t) {
                                return i.render(t, o)
                            }
                            for (var a = "", l, u, c, p = 0, d = e.length; d > p; ++p)
                                switch (l = e[p],
                                u = l[1],
                                l[0]) {
                                case "#":
                                    if (c = o.lookup(u),
                                    "object" == typeof c || "string" == typeof c)
                                        if (P(c))
                                            for (var m = 0, _ = c.length; _ > m; ++m)
                                                a += h(l[4], i, o.push(c[m]), s);
                                        else
                                            c && (a += h(l[4], i, o.push(c), s));
                                    else if (n(c)) {
                                        var f = null == s ? null : s.slice(l[3], l[5]);
                                        c = c.call(o.view, f, r),
                                        null != c && (a += c)
                                    } else
                                        c && (a += h(l[4], i, o, s));
                                    break;
                                case "^":
                                    c = o.lookup(u),
                                    (!c || P(c) && 0 === c.length) && (a += h(l[4], i, o, s));
                                    break;
                                case ">":
                                    c = i.getPartial(u),
                                    n(c) && (a += c(o));
                                    break;
                                case "&":
                                    c = o.lookup(u),
                                    null != c && (a += c);
                                    break;
                                case "name":
                                    c = o.lookup(u),
                                    null != c && (a += t.escape(c));
                                    break;
                                case "text":
                                    a += u
                                }
                            return a
                        }
                        function u(t) {
                            for (var e = [], i = e, n = [], o, s = 0, r = t.length; r > s; ++s)
                                switch (o = t[s],
                                o[0]) {
                                case "#":
                                case "^":
                                    n.push(o),
                                    i.push(o),
                                    i = o[4] = [];
                                    break;
                                case "/":
                                    var a = n.pop();
                                    a[5] = o[2],
                                    i = n.length > 0 ? n[n.length - 1][4] : e;
                                    break;
                                default:
                                    i.push(o)
                                }
                            return e
                        }
                        function c(t) {
                            for (var e = [], i, n, o = 0, s = t.length; s > o; ++o)
                                i = t[o],
                                i && ("text" === i[0] && n && "text" === n[0] ? (n[1] += i[1],
                                n[3] = i[3]) : (n = i,
                                e.push(i)));
                            return e
                        }
                        function p(t) {
                            return [new RegExp(o(t[0]) + "\\s*"), new RegExp("\\s*" + o(t[1]))]
                        }
                        function d(e, n) {
                            function s() {
                                if (L && !b)
                                    for (; f.length; )
                                        delete d[f.pop()];
                                else
                                    f = [];
                                L = !1,
                                b = !1
                            }
                            if (e = e || "",
                            n = n || t.tags,
                            "string" == typeof n && (n = n.split(_)),
                            2 !== n.length)
                                throw new Error("Invalid tags: " + n.join(", "));
                            for (var a = p(n), l = new r(e), h = [], d = [], f = [], L = !1, b = !1, P, T, C, x, E, w; !l.eos(); ) {
                                if (P = l.pos,
                                C = l.scanUntil(a[0]))
                                    for (var M = 0, D = C.length; D > M; ++M)
                                        x = C.charAt(M),
                                        i(x) ? f.push(d.length) : b = !0,
                                        d.push(["text", x, P, P + 1]),
                                        P += 1,
                                        "\n" == x && s();
                                if (!l.scan(a[0]))
                                    break;
                                if (L = !0,
                                T = l.scan(y) || "name",
                                l.scan(m),
                                "=" === T ? (C = l.scanUntil(g),
                                l.scan(g),
                                l.scanUntil(a[1])) : "{" === T ? (C = l.scanUntil(new RegExp("\\s*" + o("}" + n[1]))),
                                l.scan(v),
                                l.scanUntil(a[1]),
                                T = "&") : C = l.scanUntil(a[1]),
                                !l.scan(a[1]))
                                    throw new Error("Unclosed tag at " + l.pos);
                                if (E = [T, C, P, l.pos],
                                d.push(E),
                                "#" === T || "^" === T)
                                    h.push(E);
                                else if ("/" === T) {
                                    if (w = h.pop(),
                                    !w)
                                        throw new Error('Unopened section "' + C + '" at ' + P);
                                    if (w[1] !== C)
                                        throw new Error('Unclosed section "' + w[1] + '" at ' + P)
                                } else if ("name" === T || "{" === T || "&" === T)
                                    b = !0;
                                else if ("=" === T) {
                                    if (n = C.split(_),
                                    2 !== n.length)
                                        throw new Error("Invalid tags at " + P + ": " + n.join(", "));
                                    a = p(n)
                                }
                            }
                            if (w = h.pop())
                                throw new Error('Unclosed section "' + w[1] + '" at ' + l.pos);
                            return u(c(d))
                        }
                        var m = /\s*/
                          , _ = /\s+/
                          , f = /\S/
                          , g = /\s*=/
                          , v = /\s*\}/
                          , y = /#|\^|\/|>|\{|&|=|!/
                          , L = RegExp.prototype.test
                          , b = Object.prototype.toString
                          , P = Array.isArray || function(t) {
                            return "[object Array]" === b.call(t)
                        }
                          , T = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#x2F;"
                        };
                        r.prototype.eos = function() {
                            return "" === this.tail
                        }
                        ,
                        r.prototype.scan = function(t) {
                            var e = this.tail.match(t);
                            if (e && 0 === e.index) {
                                var i = e[0];
                                return this.tail = this.tail.substring(i.length),
                                this.pos += i.length,
                                i
                            }
                            return ""
                        }
                        ,
                        r.prototype.scanUntil = function(t) {
                            var e = this.tail.search(t), i;
                            switch (e) {
                            case -1:
                                i = this.tail,
                                this.tail = "";
                                break;
                            case 0:
                                i = "";
                                break;
                            default:
                                i = this.tail.substring(0, e),
                                this.tail = this.tail.substring(e)
                            }
                            return this.pos += i.length,
                            i
                        }
                        ,
                        a.make = function(t) {
                            return t instanceof a ? t : new a(t)
                        }
                        ,
                        a.prototype.push = function(t) {
                            return new a(t,this)
                        }
                        ,
                        a.prototype.lookup = function(t) {
                            var e;
                            if (t in this._cache)
                                e = this._cache[t];
                            else {
                                for (var i = this; i; ) {
                                    if (t.indexOf(".") > 0) {
                                        e = i.view;
                                        for (var o = t.split("."), s = 0; null != e && s < o.length; )
                                            e = e[o[s++]]
                                    } else
                                        e = i.view[t];
                                    if (null != e)
                                        break;
                                    i = i.parent
                                }
                                this._cache[t] = e
                            }
                            return n(e) && (e = e.call(this.view)),
                            e
                        }
                        ,
                        l.prototype.clearCache = function() {
                            this._cache = {},
                            this._partialCache = {}
                        }
                        ,
                        l.prototype.compile = function(e, i) {
                            var n = this._cache[e];
                            if (!n) {
                                var o = t.parse(e, i);
                                n = this._cache[e] = this.compileTokens(o, e)
                            }
                            return n
                        }
                        ,
                        l.prototype.compilePartial = function(t, e, i) {
                            var n = this.compile(e, i);
                            return this._partialCache[t] = n,
                            n
                        }
                        ,
                        l.prototype.getPartial = function(t) {
                            return t in this._partialCache || !this._loadPartial || this.compilePartial(t, this._loadPartial(t)),
                            this._partialCache[t]
                        }
                        ,
                        l.prototype.compileTokens = function(t, e) {
                            var i = this;
                            return function(o, s) {
                                if (s)
                                    if (n(s))
                                        i._loadPartial = s;
                                    else
                                        for (var r in s)
                                            i.compilePartial(r, s[r]);
                                return h(t, i, a.make(o), e)
                            }
                        }
                        ,
                        l.prototype.render = function(t, e, i) {
                            return this.compile(t)(e, i)
                        }
                        ,
                        t.name = "mustache.js",
                        t.version = "0.7.3",
                        t.tags = ["{{", "}}"],
                        t.Scanner = r,
                        t.Context = a,
                        t.Writer = l,
                        t.parse = d,
                        t.escape = s;
                        var C = new l;
                        t.clearCache = function() {
                            return C.clearCache()
                        }
                        ,
                        t.compile = function(t, e) {
                            return C.compile(t, e)
                        }
                        ,
                        t.compilePartial = function(t, e, i) {
                            return C.compilePartial(t, e, i)
                        }
                        ,
                        t.compileTokens = function(t, e) {
                            return C.compileTokens(t, e)
                        }
                        ,
                        t.render = function(t, e, i) {
                            return C.render(t, e, i)
                        }
                        ,
                        t.to_html = function(e, i, o, s) {
                            var r = t.render(e, i, o);
                            return n(s) ? void s(r) : r
                        }
                    })
                }
                , {}],
                4: [function(t, e, i) {
                    function n(t) {
                        "use strict";
                        return /^https?/.test(t.getScheme()) ? t.toString() : /^mailto?/.test(t.getScheme()) ? t.toString() : "data" == t.getScheme() && /^image/.test(t.getPath()) ? t.toString() : void 0
                    }
                    function o(t) {
                        return t
                    }
                    var s = t("./sanitizer-bundle.js");
                    e.exports = function(t) {
                        return t ? s(t, n, o) : ""
                    }
                }
                , {
                    "./sanitizer-bundle.js": 5
                }],
                5: [function(t, e, i) {
                    var n = function() {
                        function t(t) {
                            var e = ("" + t).match(d);
                            return e ? new l(h(e[1]),h(e[2]),h(e[3]),h(e[4]),h(e[5]),h(e[6]),h(e[7])) : null
                        }
                        function e(t, e, s, r, a, h, u) {
                            var c = new l(n(t, m),n(e, m),i(s),r > 0 ? r.toString() : null ,n(a, _),null ,i(u));
                            return h && ("string" == typeof h ? c.setRawQuery(h.replace(/[^?&=0-9A-Za-z_\-~.%]/g, o)) : c.setAllParameters(h)),
                            c
                        }
                        function i(t) {
                            return "string" == typeof t ? encodeURIComponent(t) : null
                        }
                        function n(t, e) {
                            return "string" == typeof t ? encodeURI(t).replace(e, o) : null
                        }
                        function o(t) {
                            var e = t.charCodeAt(0);
                            return "%" + "0123456789ABCDEF".charAt(e >> 4 & 15) + "0123456789ABCDEF".charAt(15 & e)
                        }
                        function s(t) {
                            return t.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/")
                        }
                        function r(t) {
                            if (null === t)
                                return null ;
                            for (var e = s(t), i = c, n; (n = e.replace(i, "$1")) != e; e = n)
                                ;
                            return e
                        }
                        function a(t, e) {
                            var i = t.clone()
                              , n = e.hasScheme();
                            n ? i.setRawScheme(e.getRawScheme()) : n = e.hasCredentials(),
                            n ? i.setRawCredentials(e.getRawCredentials()) : n = e.hasDomain(),
                            n ? i.setRawDomain(e.getRawDomain()) : n = e.hasPort();
                            var o = e.getRawPath()
                              , s = r(o);
                            if (n)
                                i.setPort(e.getPort()),
                                s = s && s.replace(p, "");
                            else if (n = !!o) {
                                if (47 !== s.charCodeAt(0)) {
                                    var a = r(i.getRawPath() || "").replace(p, "")
                                      , l = a.lastIndexOf("/") + 1;
                                    s = r((l ? a.substring(0, l) : "") + r(o)).replace(p, "")
                                }
                            } else
                                s = s && s.replace(p, ""),
                                s !== o && i.setRawPath(s);
                            return n ? i.setRawPath(s) : n = e.hasQuery(),
                            n ? i.setRawQuery(e.getRawQuery()) : n = e.hasFragment(),
                            n && i.setRawFragment(e.getRawFragment()),
                            i
                        }
                        function l(t, e, i, n, o, s, r) {
                            this.scheme_ = t,
                            this.credentials_ = e,
                            this.domain_ = i,
                            this.port_ = n,
                            this.path_ = o,
                            this.query_ = s,
                            this.fragment_ = r,
                            this.paramCache_ = null
                        }
                        function h(t) {
                            return "string" == typeof t && t.length > 0 ? t : null
                        }
                        var u = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)")
                          , c = new RegExp(u)
                          , p = /^(?:\.\.\/)*(?:\.\.$)?/;
                        l.prototype.toString = function() {
                            var t = [];
                            return null !== this.scheme_ && t.push(this.scheme_, ":"),
                            null !== this.domain_ && (t.push("//"),
                            null !== this.credentials_ && t.push(this.credentials_, "@"),
                            t.push(this.domain_),
                            null !== this.port_ && t.push(":", this.port_.toString())),
                            null !== this.path_ && t.push(this.path_),
                            null !== this.query_ && t.push("?", this.query_),
                            null !== this.fragment_ && t.push("#", this.fragment_),
                            t.join("")
                        }
                        ,
                        l.prototype.clone = function() {
                            return new l(this.scheme_,this.credentials_,this.domain_,this.port_,this.path_,this.query_,this.fragment_)
                        }
                        ,
                        l.prototype.getScheme = function() {
                            return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
                        }
                        ,
                        l.prototype.getRawScheme = function() {
                            return this.scheme_
                        }
                        ,
                        l.prototype.setScheme = function(t) {
                            return this.scheme_ = n(t, m),
                            this
                        }
                        ,
                        l.prototype.setRawScheme = function(t) {
                            return this.scheme_ = t ? t : null ,
                            this
                        }
                        ,
                        l.prototype.hasScheme = function() {
                            return null !== this.scheme_
                        }
                        ,
                        l.prototype.getCredentials = function() {
                            return this.credentials_ && decodeURIComponent(this.credentials_)
                        }
                        ,
                        l.prototype.getRawCredentials = function() {
                            return this.credentials_
                        }
                        ,
                        l.prototype.setCredentials = function(t) {
                            return this.credentials_ = n(t, m),
                            this
                        }
                        ,
                        l.prototype.setRawCredentials = function(t) {
                            return this.credentials_ = t ? t : null ,
                            this
                        }
                        ,
                        l.prototype.hasCredentials = function() {
                            return null !== this.credentials_
                        }
                        ,
                        l.prototype.getDomain = function() {
                            return this.domain_ && decodeURIComponent(this.domain_)
                        }
                        ,
                        l.prototype.getRawDomain = function() {
                            return this.domain_
                        }
                        ,
                        l.prototype.setDomain = function(t) {
                            return this.setRawDomain(t && encodeURIComponent(t))
                        }
                        ,
                        l.prototype.setRawDomain = function(t) {
                            return this.domain_ = t ? t : null ,
                            this.setRawPath(this.path_)
                        }
                        ,
                        l.prototype.hasDomain = function() {
                            return null !== this.domain_
                        }
                        ,
                        l.prototype.getPort = function() {
                            return this.port_ && decodeURIComponent(this.port_)
                        }
                        ,
                        l.prototype.setPort = function(t) {
                            if (t) {
                                if (t = Number(t),
                                t !== (65535 & t))
                                    throw new Error("Bad port number " + t);
                                this.port_ = "" + t
                            } else
                                this.port_ = null ;
                            return this
                        }
                        ,
                        l.prototype.hasPort = function() {
                            return null !== this.port_
                        }
                        ,
                        l.prototype.getPath = function() {
                            return this.path_ && decodeURIComponent(this.path_)
                        }
                        ,
                        l.prototype.getRawPath = function() {
                            return this.path_
                        }
                        ,
                        l.prototype.setPath = function(t) {
                            return this.setRawPath(n(t, _))
                        }
                        ,
                        l.prototype.setRawPath = function(t) {
                            return t ? (t = String(t),
                            this.path_ = !this.domain_ || /^\//.test(t) ? t : "/" + t) : this.path_ = null ,
                            this
                        }
                        ,
                        l.prototype.hasPath = function() {
                            return null !== this.path_
                        }
                        ,
                        l.prototype.getQuery = function() {
                            return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ")
                        }
                        ,
                        l.prototype.getRawQuery = function() {
                            return this.query_
                        }
                        ,
                        l.prototype.setQuery = function(t) {
                            return this.paramCache_ = null ,
                            this.query_ = i(t),
                            this
                        }
                        ,
                        l.prototype.setRawQuery = function(t) {
                            return this.paramCache_ = null ,
                            this.query_ = t ? t : null ,
                            this
                        }
                        ,
                        l.prototype.hasQuery = function() {
                            return null !== this.query_
                        }
                        ,
                        l.prototype.setAllParameters = function(t) {
                            if ("object" == typeof t && !(t instanceof Array) && (t instanceof Object || "[object Array]" !== Object.prototype.toString.call(t))) {
                                var e = []
                                  , i = -1;
                                for (var n in t) {
                                    var o = t[n];
                                    "string" == typeof o && (e[++i] = n,
                                    e[++i] = o)
                                }
                                t = e
                            }
                            this.paramCache_ = null ;
                            for (var s = [], r = "", a = 0; a < t.length; ) {
                                var n = t[a++]
                                  , o = t[a++];
                                s.push(r, encodeURIComponent(n.toString())),
                                r = "&",
                                o && s.push("=", encodeURIComponent(o.toString()))
                            }
                            return this.query_ = s.join(""),
                            this
                        }
                        ,
                        l.prototype.checkParameterCache_ = function() {
                            if (!this.paramCache_) {
                                var t = this.query_;
                                if (t) {
                                    for (var e = t.split(/[&\?]/), i = [], n = -1, o = 0; o < e.length; ++o) {
                                        var s = e[o].match(/^([^=]*)(?:=(.*))?$/);
                                        i[++n] = decodeURIComponent(s[1]).replace(/\+/g, " "),
                                        i[++n] = decodeURIComponent(s[2] || "").replace(/\+/g, " ")
                                    }
                                    this.paramCache_ = i
                                } else
                                    this.paramCache_ = []
                            }
                        }
                        ,
                        l.prototype.setParameterValues = function(t, e) {
                            "string" == typeof e && (e = [e]),
                            this.checkParameterCache_();
                            for (var i = 0, n = this.paramCache_, o = [], s = 0, r = 0; s < n.length; s += 2)
                                t === n[s] ? i < e.length && o.push(t, e[i++]) : o.push(n[s], n[s + 1]);
                            for (; i < e.length; )
                                o.push(t, e[i++]);
                            return this.setAllParameters(o),
                            this
                        }
                        ,
                        l.prototype.removeParameter = function(t) {
                            return this.setParameterValues(t, [])
                        }
                        ,
                        l.prototype.getAllParameters = function() {
                            return this.checkParameterCache_(),
                            this.paramCache_.slice(0, this.paramCache_.length)
                        }
                        ,
                        l.prototype.getParameterValues = function(t) {
                            this.checkParameterCache_();
                            for (var e = [], i = 0; i < this.paramCache_.length; i += 2)
                                t === this.paramCache_[i] && e.push(this.paramCache_[i + 1]);
                            return e
                        }
                        ,
                        l.prototype.getParameterMap = function(t) {
                            this.checkParameterCache_();
                            for (var e = {}, i = 0; i < this.paramCache_.length; i += 2) {
                                var n = this.paramCache_[i++]
                                  , o = this.paramCache_[i++];
                                n in e ? e[n].push(o) : e[n] = [o]
                            }
                            return e
                        }
                        ,
                        l.prototype.getParameterValue = function(t) {
                            this.checkParameterCache_();
                            for (var e = 0; e < this.paramCache_.length; e += 2)
                                if (t === this.paramCache_[e])
                                    return this.paramCache_[e + 1];
                            return null
                        }
                        ,
                        l.prototype.getFragment = function() {
                            return this.fragment_ && decodeURIComponent(this.fragment_)
                        }
                        ,
                        l.prototype.getRawFragment = function() {
                            return this.fragment_
                        }
                        ,
                        l.prototype.setFragment = function(t) {
                            return this.fragment_ = t ? encodeURIComponent(t) : null ,
                            this
                        }
                        ,
                        l.prototype.setRawFragment = function(t) {
                            return this.fragment_ = t ? t : null ,
                            this
                        }
                        ,
                        l.prototype.hasFragment = function() {
                            return null !== this.fragment_
                        }
                        ;
                        var d = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$")
                          , m = /[#\/\?@]/g
                          , _ = /[\#\?]/g;
                        return l.parse = t,
                        l.create = e,
                        l.resolve = a,
                        l.collapse_dots = r,
                        l.utils = {
                            mimeTypeOf: function(e) {
                                var i = t(e);
                                return /\.html$/.test(i.getPath()) ? "text/html" : "application/javascript"
                            },
                            resolve: function(e, i) {
                                return e ? a(t(e), t(i)).toString() : "" + i
                            }
                        },
                        l
                    }()
                      , o = {};
                    if (o.atype = {
                        NONE: 0,
                        URI: 1,
                        URI_FRAGMENT: 11,
                        SCRIPT: 2,
                        STYLE: 3,
                        HTML: 12,
                        ID: 4,
                        IDREF: 5,
                        IDREFS: 6,
                        GLOBAL_NAME: 7,
                        LOCAL_NAME: 8,
                        CLASSES: 9,
                        FRAME_TARGET: 10,
                        MEDIA_QUERY: 13
                    },
                    o.atype = o.atype,
                    o.ATTRIBS = {
                        "*::class": 9,
                        "*::dir": 0,
                        "*::draggable": 0,
                        "*::hidden": 0,
                        "*::id": 4,
                        "*::inert": 0,
                        "*::itemprop": 0,
                        "*::itemref": 6,
                        "*::itemscope": 0,
                        "*::lang": 0,
                        "*::onblur": 2,
                        "*::onchange": 2,
                        "*::onclick": 2,
                        "*::ondblclick": 2,
                        "*::onfocus": 2,
                        "*::onkeydown": 2,
                        "*::onkeypress": 2,
                        "*::onkeyup": 2,
                        "*::onload": 2,
                        "*::onmousedown": 2,
                        "*::onmousemove": 2,
                        "*::onmouseout": 2,
                        "*::onmouseover": 2,
                        "*::onmouseup": 2,
                        "*::onreset": 2,
                        "*::onscroll": 2,
                        "*::onselect": 2,
                        "*::onsubmit": 2,
                        "*::onunload": 2,
                        "*::spellcheck": 0,
                        "*::style": 3,
                        "*::title": 0,
                        "*::translate": 0,
                        "a::accesskey": 0,
                        "a::coords": 0,
                        "a::href": 1,
                        "a::hreflang": 0,
                        "a::name": 7,
                        "a::onblur": 2,
                        "a::onfocus": 2,
                        "a::shape": 0,
                        "a::tabindex": 0,
                        "a::target": 10,
                        "a::type": 0,
                        "area::accesskey": 0,
                        "area::alt": 0,
                        "area::coords": 0,
                        "area::href": 1,
                        "area::nohref": 0,
                        "area::onblur": 2,
                        "area::onfocus": 2,
                        "area::shape": 0,
                        "area::tabindex": 0,
                        "area::target": 10,
                        "audio::controls": 0,
                        "audio::loop": 0,
                        "audio::mediagroup": 5,
                        "audio::muted": 0,
                        "audio::preload": 0,
                        "bdo::dir": 0,
                        "blockquote::cite": 1,
                        "br::clear": 0,
                        "button::accesskey": 0,
                        "button::disabled": 0,
                        "button::name": 8,
                        "button::onblur": 2,
                        "button::onfocus": 2,
                        "button::tabindex": 0,
                        "button::type": 0,
                        "button::value": 0,
                        "canvas::height": 0,
                        "canvas::width": 0,
                        "caption::align": 0,
                        "col::align": 0,
                        "col::char": 0,
                        "col::charoff": 0,
                        "col::span": 0,
                        "col::valign": 0,
                        "col::width": 0,
                        "colgroup::align": 0,
                        "colgroup::char": 0,
                        "colgroup::charoff": 0,
                        "colgroup::span": 0,
                        "colgroup::valign": 0,
                        "colgroup::width": 0,
                        "command::checked": 0,
                        "command::command": 5,
                        "command::disabled": 0,
                        "command::icon": 1,
                        "command::label": 0,
                        "command::radiogroup": 0,
                        "command::type": 0,
                        "data::value": 0,
                        "del::cite": 1,
                        "del::datetime": 0,
                        "details::open": 0,
                        "dir::compact": 0,
                        "div::align": 0,
                        "dl::compact": 0,
                        "fieldset::disabled": 0,
                        "font::color": 0,
                        "font::face": 0,
                        "font::size": 0,
                        "form::accept": 0,
                        "form::action": 1,
                        "form::autocomplete": 0,
                        "form::enctype": 0,
                        "form::method": 0,
                        "form::name": 7,
                        "form::novalidate": 0,
                        "form::onreset": 2,
                        "form::onsubmit": 2,
                        "form::target": 10,
                        "h1::align": 0,
                        "h2::align": 0,
                        "h3::align": 0,
                        "h4::align": 0,
                        "h5::align": 0,
                        "h6::align": 0,
                        "hr::align": 0,
                        "hr::noshade": 0,
                        "hr::size": 0,
                        "hr::width": 0,
                        "iframe::align": 0,
                        "iframe::frameborder": 0,
                        "iframe::height": 0,
                        "iframe::marginheight": 0,
                        "iframe::marginwidth": 0,
                        "iframe::width": 0,
                        "img::align": 0,
                        "img::alt": 0,
                        "img::border": 0,
                        "img::height": 0,
                        "img::hspace": 0,
                        "img::ismap": 0,
                        "img::name": 7,
                        "img::src": 1,
                        "img::usemap": 11,
                        "img::vspace": 0,
                        "img::width": 0,
                        "input::accept": 0,
                        "input::accesskey": 0,
                        "input::align": 0,
                        "input::alt": 0,
                        "input::autocomplete": 0,
                        "input::checked": 0,
                        "input::disabled": 0,
                        "input::inputmode": 0,
                        "input::ismap": 0,
                        "input::list": 5,
                        "input::max": 0,
                        "input::maxlength": 0,
                        "input::min": 0,
                        "input::multiple": 0,
                        "input::name": 8,
                        "input::onblur": 2,
                        "input::onchange": 2,
                        "input::onfocus": 2,
                        "input::onselect": 2,
                        "input::placeholder": 0,
                        "input::readonly": 0,
                        "input::required": 0,
                        "input::size": 0,
                        "input::src": 1,
                        "input::step": 0,
                        "input::tabindex": 0,
                        "input::type": 0,
                        "input::usemap": 11,
                        "input::value": 0,
                        "ins::cite": 1,
                        "ins::datetime": 0,
                        "label::accesskey": 0,
                        "label::for": 5,
                        "label::onblur": 2,
                        "label::onfocus": 2,
                        "legend::accesskey": 0,
                        "legend::align": 0,
                        "li::type": 0,
                        "li::value": 0,
                        "map::name": 7,
                        "menu::compact": 0,
                        "menu::label": 0,
                        "menu::type": 0,
                        "meter::high": 0,
                        "meter::low": 0,
                        "meter::max": 0,
                        "meter::min": 0,
                        "meter::value": 0,
                        "ol::compact": 0,
                        "ol::reversed": 0,
                        "ol::start": 0,
                        "ol::type": 0,
                        "optgroup::disabled": 0,
                        "optgroup::label": 0,
                        "option::disabled": 0,
                        "option::label": 0,
                        "option::selected": 0,
                        "option::value": 0,
                        "output::for": 6,
                        "output::name": 8,
                        "p::align": 0,
                        "pre::width": 0,
                        "progress::max": 0,
                        "progress::min": 0,
                        "progress::value": 0,
                        "q::cite": 1,
                        "select::autocomplete": 0,
                        "select::disabled": 0,
                        "select::multiple": 0,
                        "select::name": 8,
                        "select::onblur": 2,
                        "select::onchange": 2,
                        "select::onfocus": 2,
                        "select::required": 0,
                        "select::size": 0,
                        "select::tabindex": 0,
                        "source::type": 0,
                        "table::align": 0,
                        "table::bgcolor": 0,
                        "table::border": 0,
                        "table::cellpadding": 0,
                        "table::cellspacing": 0,
                        "table::frame": 0,
                        "table::rules": 0,
                        "table::summary": 0,
                        "table::width": 0,
                        "tbody::align": 0,
                        "tbody::char": 0,
                        "tbody::charoff": 0,
                        "tbody::valign": 0,
                        "td::abbr": 0,
                        "td::align": 0,
                        "td::axis": 0,
                        "td::bgcolor": 0,
                        "td::char": 0,
                        "td::charoff": 0,
                        "td::colspan": 0,
                        "td::headers": 6,
                        "td::height": 0,
                        "td::nowrap": 0,
                        "td::rowspan": 0,
                        "td::scope": 0,
                        "td::valign": 0,
                        "td::width": 0,
                        "textarea::accesskey": 0,
                        "textarea::autocomplete": 0,
                        "textarea::cols": 0,
                        "textarea::disabled": 0,
                        "textarea::inputmode": 0,
                        "textarea::name": 8,
                        "textarea::onblur": 2,
                        "textarea::onchange": 2,
                        "textarea::onfocus": 2,
                        "textarea::onselect": 2,
                        "textarea::placeholder": 0,
                        "textarea::readonly": 0,
                        "textarea::required": 0,
                        "textarea::rows": 0,
                        "textarea::tabindex": 0,
                        "textarea::wrap": 0,
                        "tfoot::align": 0,
                        "tfoot::char": 0,
                        "tfoot::charoff": 0,
                        "tfoot::valign": 0,
                        "th::abbr": 0,
                        "th::align": 0,
                        "th::axis": 0,
                        "th::bgcolor": 0,
                        "th::char": 0,
                        "th::charoff": 0,
                        "th::colspan": 0,
                        "th::headers": 6,
                        "th::height": 0,
                        "th::nowrap": 0,
                        "th::rowspan": 0,
                        "th::scope": 0,
                        "th::valign": 0,
                        "th::width": 0,
                        "thead::align": 0,
                        "thead::char": 0,
                        "thead::charoff": 0,
                        "thead::valign": 0,
                        "tr::align": 0,
                        "tr::bgcolor": 0,
                        "tr::char": 0,
                        "tr::charoff": 0,
                        "tr::valign": 0,
                        "track::default": 0,
                        "track::kind": 0,
                        "track::label": 0,
                        "track::srclang": 0,
                        "ul::compact": 0,
                        "ul::type": 0,
                        "video::controls": 0,
                        "video::height": 0,
                        "video::loop": 0,
                        "video::mediagroup": 5,
                        "video::muted": 0,
                        "video::poster": 1,
                        "video::preload": 0,
                        "video::width": 0
                    },
                    o.ATTRIBS = o.ATTRIBS,
                    o.eflags = {
                        OPTIONAL_ENDTAG: 1,
                        EMPTY: 2,
                        CDATA: 4,
                        RCDATA: 8,
                        UNSAFE: 16,
                        FOLDABLE: 32,
                        SCRIPT: 64,
                        STYLE: 128,
                        VIRTUALIZED: 256
                    },
                    o.eflags = o.eflags,
                    o.ELEMENTS = {
                        a: 0,
                        abbr: 0,
                        acronym: 0,
                        address: 0,
                        applet: 272,
                        area: 2,
                        article: 0,
                        aside: 0,
                        audio: 0,
                        b: 0,
                        base: 274,
                        basefont: 274,
                        bdi: 0,
                        bdo: 0,
                        big: 0,
                        blockquote: 0,
                        body: 305,
                        br: 2,
                        button: 0,
                        canvas: 0,
                        caption: 0,
                        center: 0,
                        cite: 0,
                        code: 0,
                        col: 2,
                        colgroup: 1,
                        command: 2,
                        data: 0,
                        datalist: 0,
                        dd: 1,
                        del: 0,
                        details: 0,
                        dfn: 0,
                        dialog: 272,
                        dir: 0,
                        div: 0,
                        dl: 0,
                        dt: 1,
                        em: 0,
                        fieldset: 0,
                        figcaption: 0,
                        figure: 0,
                        font: 0,
                        footer: 0,
                        form: 0,
                        frame: 274,
                        frameset: 272,
                        h1: 0,
                        h2: 0,
                        h3: 0,
                        h4: 0,
                        h5: 0,
                        h6: 0,
                        head: 305,
                        header: 0,
                        hgroup: 0,
                        hr: 2,
                        html: 305,
                        i: 0,
                        iframe: 4,
                        img: 2,
                        input: 2,
                        ins: 0,
                        isindex: 274,
                        kbd: 0,
                        keygen: 274,
                        label: 0,
                        legend: 0,
                        li: 1,
                        link: 274,
                        map: 0,
                        mark: 0,
                        menu: 0,
                        meta: 274,
                        meter: 0,
                        nav: 0,
                        nobr: 0,
                        noembed: 276,
                        noframes: 276,
                        noscript: 276,
                        object: 272,
                        ol: 0,
                        optgroup: 0,
                        option: 1,
                        output: 0,
                        p: 1,
                        param: 274,
                        pre: 0,
                        progress: 0,
                        q: 0,
                        s: 0,
                        samp: 0,
                        script: 84,
                        section: 0,
                        select: 0,
                        small: 0,
                        source: 2,
                        span: 0,
                        strike: 0,
                        strong: 0,
                        style: 148,
                        sub: 0,
                        summary: 0,
                        sup: 0,
                        table: 0,
                        tbody: 1,
                        td: 1,
                        textarea: 8,
                        tfoot: 1,
                        th: 1,
                        thead: 1,
                        time: 0,
                        title: 280,
                        tr: 1,
                        track: 2,
                        tt: 0,
                        u: 0,
                        ul: 0,
                        "var": 0,
                        video: 0,
                        wbr: 2
                    },
                    o.ELEMENTS = o.ELEMENTS,
                    o.ELEMENT_DOM_INTERFACES = {
                        a: "HTMLAnchorElement",
                        abbr: "HTMLElement",
                        acronym: "HTMLElement",
                        address: "HTMLElement",
                        applet: "HTMLAppletElement",
                        area: "HTMLAreaElement",
                        article: "HTMLElement",
                        aside: "HTMLElement",
                        audio: "HTMLAudioElement",
                        b: "HTMLElement",
                        base: "HTMLBaseElement",
                        basefont: "HTMLBaseFontElement",
                        bdi: "HTMLElement",
                        bdo: "HTMLElement",
                        big: "HTMLElement",
                        blockquote: "HTMLQuoteElement",
                        body: "HTMLBodyElement",
                        br: "HTMLBRElement",
                        button: "HTMLButtonElement",
                        canvas: "HTMLCanvasElement",
                        caption: "HTMLTableCaptionElement",
                        center: "HTMLElement",
                        cite: "HTMLElement",
                        code: "HTMLElement",
                        col: "HTMLTableColElement",
                        colgroup: "HTMLTableColElement",
                        command: "HTMLCommandElement",
                        data: "HTMLElement",
                        datalist: "HTMLDataListElement",
                        dd: "HTMLElement",
                        del: "HTMLModElement",
                        details: "HTMLDetailsElement",
                        dfn: "HTMLElement",
                        dialog: "HTMLDialogElement",
                        dir: "HTMLDirectoryElement",
                        div: "HTMLDivElement",
                        dl: "HTMLDListElement",
                        dt: "HTMLElement",
                        em: "HTMLElement",
                        fieldset: "HTMLFieldSetElement",
                        figcaption: "HTMLElement",
                        figure: "HTMLElement",
                        font: "HTMLFontElement",
                        footer: "HTMLElement",
                        form: "HTMLFormElement",
                        frame: "HTMLFrameElement",
                        frameset: "HTMLFrameSetElement",
                        h1: "HTMLHeadingElement",
                        h2: "HTMLHeadingElement",
                        h3: "HTMLHeadingElement",
                        h4: "HTMLHeadingElement",
                        h5: "HTMLHeadingElement",
                        h6: "HTMLHeadingElement",
                        head: "HTMLHeadElement",
                        header: "HTMLElement",
                        hgroup: "HTMLElement",
                        hr: "HTMLHRElement",
                        html: "HTMLHtmlElement",
                        i: "HTMLElement",
                        iframe: "HTMLIFrameElement",
                        img: "HTMLImageElement",
                        input: "HTMLInputElement",
                        ins: "HTMLModElement",
                        isindex: "HTMLUnknownElement",
                        kbd: "HTMLElement",
                        keygen: "HTMLKeygenElement",
                        label: "HTMLLabelElement",
                        legend: "HTMLLegendElement",
                        li: "HTMLLIElement",
                        link: "HTMLLinkElement",
                        map: "HTMLMapElement",
                        mark: "HTMLElement",
                        menu: "HTMLMenuElement",
                        meta: "HTMLMetaElement",
                        meter: "HTMLMeterElement",
                        nav: "HTMLElement",
                        nobr: "HTMLElement",
                        noembed: "HTMLElement",
                        noframes: "HTMLElement",
                        noscript: "HTMLElement",
                        object: "HTMLObjectElement",
                        ol: "HTMLOListElement",
                        optgroup: "HTMLOptGroupElement",
                        option: "HTMLOptionElement",
                        output: "HTMLOutputElement",
                        p: "HTMLParagraphElement",
                        param: "HTMLParamElement",
                        pre: "HTMLPreElement",
                        progress: "HTMLProgressElement",
                        q: "HTMLQuoteElement",
                        s: "HTMLElement",
                        samp: "HTMLElement",
                        script: "HTMLScriptElement",
                        section: "HTMLElement",
                        select: "HTMLSelectElement",
                        small: "HTMLElement",
                        source: "HTMLSourceElement",
                        span: "HTMLSpanElement",
                        strike: "HTMLElement",
                        strong: "HTMLElement",
                        style: "HTMLStyleElement",
                        sub: "HTMLElement",
                        summary: "HTMLElement",
                        sup: "HTMLElement",
                        table: "HTMLTableElement",
                        tbody: "HTMLTableSectionElement",
                        td: "HTMLTableDataCellElement",
                        textarea: "HTMLTextAreaElement",
                        tfoot: "HTMLTableSectionElement",
                        th: "HTMLTableHeaderCellElement",
                        thead: "HTMLTableSectionElement",
                        time: "HTMLTimeElement",
                        title: "HTMLTitleElement",
                        tr: "HTMLTableRowElement",
                        track: "HTMLTrackElement",
                        tt: "HTMLElement",
                        u: "HTMLElement",
                        ul: "HTMLUListElement",
                        "var": "HTMLElement",
                        video: "HTMLVideoElement",
                        wbr: "HTMLElement"
                    },
                    o.ELEMENT_DOM_INTERFACES = o.ELEMENT_DOM_INTERFACES,
                    o.ueffects = {
                        NOT_LOADED: 0,
                        SAME_DOCUMENT: 1,
                        NEW_DOCUMENT: 2
                    },
                    o.ueffects = o.ueffects,
                    o.URIEFFECTS = {
                        "a::href": 2,
                        "area::href": 2,
                        "blockquote::cite": 0,
                        "command::icon": 1,
                        "del::cite": 0,
                        "form::action": 2,
                        "img::src": 1,
                        "input::src": 1,
                        "ins::cite": 0,
                        "q::cite": 0,
                        "video::poster": 1
                    },
                    o.URIEFFECTS = o.URIEFFECTS,
                    o.ltypes = {
                        UNSANDBOXED: 2,
                        SANDBOXED: 1,
                        DATA: 0
                    },
                    o.ltypes = o.ltypes,
                    o.LOADERTYPES = {
                        "a::href": 2,
                        "area::href": 2,
                        "blockquote::cite": 2,
                        "command::icon": 1,
                        "del::cite": 2,
                        "form::action": 2,
                        "img::src": 1,
                        "input::src": 1,
                        "ins::cite": 2,
                        "q::cite": 2,
                        "video::poster": 1
                    },
                    o.LOADERTYPES = o.LOADERTYPES,
                    "i" !== "I".toLowerCase())
                        throw "I/i problem";
                    var s = function(t) {
                        function e(t) {
                            if (A.hasOwnProperty(t))
                                return A[t];
                            var e = t.match(O);
                            if (e)
                                return String.fromCharCode(parseInt(e[1], 10));
                            if (e = t.match(U))
                                return String.fromCharCode(parseInt(e[1], 16));
                            if (z && I.test(t)) {
                                z.innerHTML = "&" + t + ";";
                                var i = z.textContent;
                                return A[t] = i,
                                i
                            }
                            return "&" + t + ";"
                        }
                        function i(t, i) {
                            return e(i)
                        }
                        function o(t) {
                            return t.replace(B, "")
                        }
                        function s(t) {
                            return t.replace(R, i)
                        }
                        function r(t) {
                            return ("" + t).replace(Z, "&amp;").replace(j, "&lt;").replace(G, "&gt;").replace(F, "&#34;")
                        }
                        function a(t) {
                            return t.replace(H, "&amp;$1").replace(j, "&lt;").replace(G, "&gt;")
                        }
                        function l(t) {
                            var e = {
                                cdata: t.cdata || t.cdata,
                                comment: t.comment || t.comment,
                                endDoc: t.endDoc || t.endDoc,
                                endTag: t.endTag || t.endTag,
                                pcdata: t.pcdata || t.pcdata,
                                rcdata: t.rcdata || t.rcdata,
                                startDoc: t.startDoc || t.startDoc,
                                startTag: t.startTag || t.startTag
                            };
                            return function(t, i) {
                                return h(t, e, i)
                            }
                        }
                        function h(t, e, i) {
                            var n, o, s, r = p(t), a = {
                                noMoreGT: !1,
                                noMoreEndComments: !1
                            };
                            c(e, r, 0, a, i)
                        }
                        function u(t, e, i, n, o) {
                            return function() {
                                c(t, e, i, n, o)
                            }
                        }
                        function c(e, i, n, o, s) {
                            try {
                                e.startDoc && 0 == n && e.startDoc(s);
                                for (var r, a, l, h = n, c = i.length; c > h; ) {
                                    var p = i[h++]
                                      , f = i[h];
                                    switch (p) {
                                    case "&":
                                        N.test(f) ? (e.pcdata && e.pcdata("&" + f, s, J, u(e, i, h, o, s)),
                                        h++) : e.pcdata && e.pcdata("&amp;", s, J, u(e, i, h, o, s));
                                        break;
                                    case "</":
                                        (r = /^([-\w:]+)[^\'\"]*/.exec(f)) ? r[0].length === f.length && ">" === i[h + 1] ? (h += 2,
                                        l = r[1].toLowerCase(),
                                        e.endTag && e.endTag(l, s, J, u(e, i, h, o, s))) : h = d(i, h, e, s, J, o) : e.pcdata && e.pcdata("&lt;/", s, J, u(e, i, h, o, s));
                                        break;
                                    case "<":
                                        if (r = /^([-\w:]+)\s*\/?/.exec(f))
                                            if (r[0].length === f.length && ">" === i[h + 1]) {
                                                h += 2,
                                                l = r[1].toLowerCase(),
                                                e.startTag && e.startTag(l, [], s, J, u(e, i, h, o, s));
                                                var g = t.ELEMENTS[l];
                                                if (g & q) {
                                                    var v = {
                                                        name: l,
                                                        next: h,
                                                        eflags: g
                                                    };
                                                    h = _(i, v, e, s, J, o)
                                                }
                                            } else
                                                h = m(i, h, e, s, J, o);
                                        else
                                            e.pcdata && e.pcdata("&lt;", s, J, u(e, i, h, o, s));
                                        break;
                                    case "<!--":
                                        if (!o.noMoreEndComments) {
                                            for (a = h + 1; c > a && (">" !== i[a] || !/--$/.test(i[a - 1])); a++)
                                                ;
                                            if (c > a) {
                                                if (e.comment) {
                                                    var y = i.slice(h, a).join("");
                                                    e.comment(y.substr(0, y.length - 2), s, J, u(e, i, a + 1, o, s))
                                                }
                                                h = a + 1
                                            } else
                                                o.noMoreEndComments = !0
                                        }
                                        o.noMoreEndComments && e.pcdata && e.pcdata("&lt;!--", s, J, u(e, i, h, o, s));
                                        break;
                                    case "<!":
                                        if (/^\w/.test(f)) {
                                            if (!o.noMoreGT) {
                                                for (a = h + 1; c > a && ">" !== i[a]; a++)
                                                    ;
                                                c > a ? h = a + 1 : o.noMoreGT = !0
                                            }
                                            o.noMoreGT && e.pcdata && e.pcdata("&lt;!", s, J, u(e, i, h, o, s))
                                        } else
                                            e.pcdata && e.pcdata("&lt;!", s, J, u(e, i, h, o, s));
                                        break;
                                    case "<?":
                                        if (!o.noMoreGT) {
                                            for (a = h + 1; c > a && ">" !== i[a]; a++)
                                                ;
                                            c > a ? h = a + 1 : o.noMoreGT = !0
                                        }
                                        o.noMoreGT && e.pcdata && e.pcdata("&lt;?", s, J, u(e, i, h, o, s));
                                        break;
                                    case ">":
                                        e.pcdata && e.pcdata("&gt;", s, J, u(e, i, h, o, s));
                                        break;
                                    case "":
                                        break;
                                    default:
                                        e.pcdata && e.pcdata(p, s, J, u(e, i, h, o, s))
                                    }
                                }
                                e.endDoc && e.endDoc(s)
                            } catch (L) {
                                if (L !== J)
                                    throw L
                            }
                        }
                        function p(t) {
                            var e = /(<\/|<\!--|<[!?]|[&<>])/g;
                            if (t += "",
                            W)
                                return t.split(e);
                            for (var i = [], n = 0, o; null !== (o = e.exec(t)); )
                                i.push(t.substring(n, o.index)),
                                i.push(o[0]),
                                n = o.index + o[0].length;
                            return i.push(t.substring(n)),
                            i
                        }
                        function d(t, e, i, n, o, s) {
                            var r = f(t, e);
                            return r ? (i.endTag && i.endTag(r.name, n, o, u(i, t, e, s, n)),
                            r.next) : t.length
                        }
                        function m(t, e, i, n, o, s) {
                            var r = f(t, e);
                            return r ? (i.startTag && i.startTag(r.name, r.attrs, n, o, u(i, t, r.next, s, n)),
                            r.eflags & q ? _(t, r, i, n, o, s) : r.next) : t.length
                        }
                        function _(e, i, n, o, s, r) {
                            var l = e.length;
                            K.hasOwnProperty(i.name) || (K[i.name] = new RegExp("^" + i.name + "(?:[\\s\\/]|$)","i"));
                            for (var h = K[i.name], c = i.next, p = i.next + 1; l > p && ("</" !== e[p - 1] || !h.test(e[p])); p++)
                                ;
                            l > p && (p -= 1);
                            var d = e.slice(c, p).join("");
                            if (i.eflags & t.eflags.CDATA)
                                n.cdata && n.cdata(d, o, s, u(n, e, p, r, o));
                            else {
                                if (!(i.eflags & t.eflags.RCDATA))
                                    throw new Error("bug");
                                n.rcdata && n.rcdata(a(d), o, s, u(n, e, p, r, o))
                            }
                            return p
                        }
                        function f(e, i) {
                            var n = /^([-\w:]+)/.exec(e[i])
                              , o = {};
                            o.name = n[1].toLowerCase(),
                            o.eflags = t.ELEMENTS[o.name];
                            for (var s = e[i].substr(n[0].length), r = i + 1, a = e.length; a > r && ">" !== e[r]; r++)
                                s += e[r];
                            if (!(r >= a)) {
                                for (var l = []; "" !== s; )
                                    if (n = V.exec(s)) {
                                        if (n[4] && !n[5] || n[6] && !n[7]) {
                                            for (var h = n[4] || n[6], u = !1, c = [s, e[r++]]; a > r; r++) {
                                                if (u) {
                                                    if (">" === e[r])
                                                        break
                                                } else
                                                    0 <= e[r].indexOf(h) && (u = !0);
                                                c.push(e[r])
                                            }
                                            if (r >= a)
                                                break;
                                            s = c.join("");
                                            continue
                                        }
                                        var p = n[1].toLowerCase()
                                          , d = n[2] ? g(n[3]) : "";
                                        l.push(p, d),
                                        s = s.substr(n[0].length)
                                    } else
                                        s = s.replace(/^[\s\S][^a-z\s]*/, "");
                                return o.attrs = l,
                                o.next = r + 1,
                                o
                            }
                        }
                        function g(t) {
                            var e = t.charCodeAt(0);
                            return 34 !== e && 39 !== e || (t = t.substr(1, t.length - 2)),
                            s(o(t))
                        }
                        function v(e) {
                            var i, n, o = function(t, e) {
                                n || e.push(t)
                            }
                            ;
                            return l({
                                startDoc: function(t) {
                                    i = [],
                                    n = !1
                                },
                                startTag: function(o, s, a) {
                                    if (!n && t.ELEMENTS.hasOwnProperty(o)) {
                                        var l = t.ELEMENTS[o];
                                        if (!(l & t.eflags.FOLDABLE)) {
                                            var h = e(o, s);
                                            if (!h)
                                                return void (n = !(l & t.eflags.EMPTY));
                                            if ("object" != typeof h)
                                                throw new Error("tagPolicy did not return object (old API?)");
                                            if (!("attribs"in h))
                                                throw new Error("tagPolicy gave no attribs");
                                            s = h.attribs;
                                            var u, c;
                                            if ("tagName"in h ? (c = h.tagName,
                                            u = t.ELEMENTS[c]) : (c = o,
                                            u = l),
                                            l & t.eflags.OPTIONAL_ENDTAG) {
                                                var p = i[i.length - 1];
                                                !p || p.orig !== o || p.rep === c && o === c || a.push("</", p.rep, ">")
                                            }
                                            l & t.eflags.EMPTY || i.push({
                                                orig: o,
                                                rep: c
                                            }),
                                            a.push("<", c);
                                            for (var d = 0, m = s.length; m > d; d += 2) {
                                                var _ = s[d]
                                                  , f = s[d + 1];
                                                null !== f && void 0 !== f && a.push(" ", _, '="', r(f), '"')
                                            }
                                            a.push(">"),
                                            l & t.eflags.EMPTY && !(u & t.eflags.EMPTY) && a.push("</", c, ">")
                                        }
                                    }
                                },
                                endTag: function(e, o) {
                                    if (n)
                                        return void (n = !1);
                                    if (t.ELEMENTS.hasOwnProperty(e)) {
                                        var s = t.ELEMENTS[e];
                                        if (!(s & (t.eflags.EMPTY | t.eflags.FOLDABLE))) {
                                            var r;
                                            if (s & t.eflags.OPTIONAL_ENDTAG)
                                                for (r = i.length; --r >= 0; ) {
                                                    var a = i[r].orig;
                                                    if (a === e)
                                                        break;
                                                    if (!(t.ELEMENTS[a] & t.eflags.OPTIONAL_ENDTAG))
                                                        return
                                                }
                                            else
                                                for (r = i.length; --r >= 0 && i[r].orig !== e; )
                                                    ;
                                            if (0 > r)
                                                return;
                                            for (var l = i.length; --l > r; ) {
                                                var h = i[l].rep;
                                                t.ELEMENTS[h] & t.eflags.OPTIONAL_ENDTAG || o.push("</", h, ">")
                                            }
                                            r < i.length && (e = i[r].rep),
                                            i.length = r,
                                            o.push("</", e, ">")
                                        }
                                    }
                                },
                                pcdata: o,
                                rcdata: o,
                                cdata: o,
                                endDoc: function(t) {
                                    for (; i.length; i.length--)
                                        t.push("</", i[i.length - 1].rep, ">")
                                }
                            })
                        }
                        function y(t, e, i, o, s) {
                            if (!s)
                                return null ;
                            try {
                                var r = n.parse("" + t);
                                if (r && (!r.hasScheme() || X.test(r.getScheme()))) {
                                    var a = s(r, e, i, o);
                                    return a ? a.toString() : null
                                }
                            } catch (l) {
                                return null
                            }
                            return null
                        }
                        function L(t, e, i, n, o) {
                            if (i || t(e + " removed", {
                                change: "removed",
                                tagName: e
                            }),
                            n !== o) {
                                var s = "changed";
                                n && !o ? s = "removed" : !n && o && (s = "added"),
                                t(e + "." + i + " " + s, {
                                    change: s,
                                    tagName: e,
                                    attribName: i,
                                    oldValue: n,
                                    newValue: o
                                })
                            }
                        }
                        function b(t, e, i) {
                            var n;
                            return n = e + "::" + i,
                            t.hasOwnProperty(n) ? t[n] : (n = "*::" + i,
                            t.hasOwnProperty(n) ? t[n] : void 0)
                        }
                        function P(e, i) {
                            return b(t.ATTRIBS, e, i)
                        }
                        function T(e, i) {
                            return b(t.LOADERTYPES, e, i)
                        }
                        function C(e, i) {
                            return b(t.URIEFFECTS, e, i)
                        }
                        function x(e, i, n, o, s) {
                            for (var r = 0; r < i.length; r += 2) {
                                var a = i[r], l = i[r + 1], h = l, u = null , c;
                                if (c = e + "::" + a,
                                (t.ATTRIBS.hasOwnProperty(c) || (c = "*::" + a,
                                t.ATTRIBS.hasOwnProperty(c))) && (u = t.ATTRIBS[c]),
                                null !== u)
                                    switch (u) {
                                    case t.atype.NONE:
                                        break;
                                    case t.atype.SCRIPT:
                                        l = null ,
                                        s && L(s, e, a, h, l);
                                        break;
                                    case t.atype.STYLE:
                                        if ("undefined" == typeof D) {
                                            l = null ,
                                            s && L(s, e, a, h, l);
                                            break
                                        }
                                        var p = [];
                                        D(l, {
                                            declaration: function(e, i) {
                                                var o = e.toLowerCase()
                                                  , s = k[o];
                                                s && (S(o, s, i, n ? function(e) {
                                                    return y(e, t.ueffects.SAME_DOCUMENT, t.ltypes.SANDBOXED, {
                                                        TYPE: "CSS",
                                                        CSS_PROP: o
                                                    }, n)
                                                }
                                                : null ),
                                                p.push(e + ": " + i.join(" ")))
                                            }
                                        }),
                                        l = p.length > 0 ? p.join(" ; ") : null ,
                                        s && L(s, e, a, h, l);
                                        break;
                                    case t.atype.ID:
                                    case t.atype.IDREF:
                                    case t.atype.IDREFS:
                                    case t.atype.GLOBAL_NAME:
                                    case t.atype.LOCAL_NAME:
                                    case t.atype.CLASSES:
                                        l = o ? o(l) : l,
                                        s && L(s, e, a, h, l);
                                        break;
                                    case t.atype.URI:
                                        l = y(l, C(e, a), T(e, a), {
                                            TYPE: "MARKUP",
                                            XML_ATTR: a,
                                            XML_TAG: e
                                        }, n),
                                        s && L(s, e, a, h, l);
                                        break;
                                    case t.atype.URI_FRAGMENT:
                                        l && "#" === l.charAt(0) ? (l = l.substring(1),
                                        l = o ? o(l) : l,
                                        null !== l && void 0 !== l && (l = "#" + l)) : l = null ,
                                        s && L(s, e, a, h, l);
                                        break;
                                    default:
                                        l = null ,
                                        s && L(s, e, a, h, l)
                                    }
                                else
                                    l = null ,
                                    s && L(s, e, a, h, l);
                                i[r + 1] = l
                            }
                            return i
                        }
                        function E(e, i, n) {
                            return function(o, s) {
                                return t.ELEMENTS[o] & t.eflags.UNSAFE ? void (n && L(n, o, void 0, void 0, void 0)) : {
                                    attribs: x(o, s, e, i, n)
                                }
                            }
                        }
                        function w(t, e) {
                            var i = [];
                            return v(e)(t, i),
                            i.join("")
                        }
                        function M(t, e, i, n) {
                            var o = E(e, i, n);
                            return w(t, o)
                        }
                        var D, S, k;
                        "undefined" != typeof window && (D = window.parseCssDeclarations,
                        S = window.sanitizeCssProperty,
                        k = window.cssSchema);
                        var A = {
                            lt: "<",
                            LT: "<",
                            gt: ">",
                            GT: ">",
                            amp: "&",
                            AMP: "&",
                            quot: '"',
                            apos: "'",
                            nbsp: " "
                        }
                          , O = /^#(\d+)$/
                          , U = /^#x([0-9A-Fa-f]+)$/
                          , I = /^[A-Za-z][A-za-z0-9]+$/
                          , z = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null
                          , B = /\0/g
                          , R = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g
                          , N = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/
                          , Z = /&/g
                          , H = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi
                          , j = /[<]/g
                          , G = />/g
                          , F = /\"/g
                          , V = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?","i")
                          , W = 3 === "a,b".split(/(,)/).length
                          , q = t.eflags.CDATA | t.eflags.RCDATA
                          , J = {}
                          , K = {}
                          , X = /^(?:https?|mailto|data)$/i
                          , Y = {};
                        return Y.escapeAttrib = Y.escapeAttrib = r,
                        Y.makeHtmlSanitizer = Y.makeHtmlSanitizer = v,
                        Y.makeSaxParser = Y.makeSaxParser = l,
                        Y.makeTagPolicy = Y.makeTagPolicy = E,
                        Y.normalizeRCData = Y.normalizeRCData = a,
                        Y.sanitize = Y.sanitize = M,
                        Y.sanitizeAttribs = Y.sanitizeAttribs = x,
                        Y.sanitizeWithPolicy = Y.sanitizeWithPolicy = w,
                        Y.unescapeEntities = Y.unescapeEntities = s,
                        Y
                    }(o)
                      , r = s.sanitize;
                    o.ATTRIBS["*::style"] = 0,
                    o.ELEMENTS.style = 0,
                    o.ATTRIBS["a::target"] = 0,
                    o.ELEMENTS.video = 0,
                    o.ATTRIBS["video::src"] = 0,
                    o.ATTRIBS["video::poster"] = 0,
                    o.ATTRIBS["video::controls"] = 0,
                    o.ELEMENTS.audio = 0,
                    o.ATTRIBS["audio::src"] = 0,
                    o.ATTRIBS["video::autoplay"] = 0,
                    o.ATTRIBS["video::controls"] = 0,
                    "undefined" != typeof e && (e.exports = r)
                }
                , {}],
                6: [function(t, e, i) {
                    e.exports = {
                        author: "Mapbox",
                        name: "mapbox.js",
                        description: "mapbox javascript api",
                        version: "2.1.5",
                        homepage: "http://mapbox.com/",
                        repository: {
                            type: "git",
                            url: "git://github.com/mapbox/mapbox.js.git"
                        },
                        main: "src/index.js",
                        dependencies: {
                            leaflet: "0.7.3",
                            mustache: "0.7.3",
                            corslite: "0.0.6",
                            "sanitize-caja": "0.1.2"
                        },
                        scripts: {
                            test: "jshint src/*.js && mocha-phantomjs test/index.html"
                        },
                        devDependencies: {
                            "leaflet-hash": "0.2.1",
                            "leaflet-fullscreen": "0.0.4",
                            "uglify-js": "2.4.8",
                            mocha: "1.17.1",
                            "expect.js": "0.3.1",
                            sinon: "1.10.2",
                            "mocha-phantomjs": "3.1.6",
                            happen: "0.1.3",
                            browserify: "^6.3.2",
                            jshint: "2.4.4",
                            "clean-css": "~2.0.7",
                            minimist: "0.0.5",
                            marked: "~0.3.0"
                        },
                        optionalDependencies: {},
                        engines: {
                            node: "*"
                        }
                    }
                }
                , {}],
                7: [function(t, e, i) {
                    "use strict";
                    e.exports = {
                        HTTP_URL: "http://a.tiles.mapbox.com/v4",
                        HTTPS_URL: "https://a.tiles.mapbox.com/v4",
                        FORCE_HTTPS: !1,
                        REQUIRE_ACCESS_TOKEN: !0
                    }
                }
                , {}],
                8: [function(t, e, i) {
                    "use strict";
                    var n = t("./util")
                      , o = t("./url")
                      , s = t("./request")
                      , r = t("./marker")
                      , a = t("./simplestyle")
                      , l = L.FeatureGroup.extend({
                        options: {
                            filter: function() {
                                return !0
                            },
                            sanitizer: t("sanitize-caja"),
                            style: a.style,
                            popupOptions: {
                                closeButton: !1
                            }
                        },
                        initialize: function(t, e) {
                            L.setOptions(this, e),
                            this._layers = {},
                            "string" == typeof t ? n.idUrl(t, this) : t && "object" == typeof t && this.setGeoJSON(t)
                        },
                        setGeoJSON: function(t) {
                            return this._geojson = t,
                            this.clearLayers(),
                            this._initialize(t),
                            this
                        },
                        getGeoJSON: function() {
                            return this._geojson
                        },
                        loadURL: function(t) {
                            return this._request && "abort"in this._request && this._request.abort(),
                            this._request = s(t, L.bind(function(e, i) {
                                this._request = null ,
                                e && "abort" !== e.type ? (n.log("could not load features at " + t),
                                this.fire("error", {
                                    error: e
                                })) : i && (this.setGeoJSON(i),
                                this.fire("ready"))
                            }, this)),
                            this
                        },
                        loadID: function(t) {
                            return this.loadURL(o("/" + t + "/features.json", this.options.accessToken))
                        },
                        setFilter: function(t) {
                            return this.options.filter = t,
                            this._geojson && (this.clearLayers(),
                            this._initialize(this._geojson)),
                            this
                        },
                        getFilter: function() {
                            return this.options.filter
                        },
                        _initialize: function(t) {
                            var e = L.Util.isArray(t) ? t : t.features, i, n;
                            if (e)
                                for (i = 0,
                                n = e.length; n > i; i++)
                                    (e[i].geometries || e[i].geometry || e[i].features) && this._initialize(e[i]);
                            else if (this.options.filter(t)) {
                                var o = {
                                    accessToken: this.options.accessToken
                                }
                                  , s = L.GeoJSON.geometryToLayer(t, function(t, e) {
                                    return r.style(t, e, o)
                                })
                                  , l = r.createPopup(t, this.options.sanitizer);
                                "setStyle"in s && s.setStyle(a.style(t)),
                                s.feature = t,
                                l && s.bindPopup(l, this.options.popupOptions),
                                this.addLayer(s)
                            }
                        }
                    });
                    e.exports.FeatureLayer = l,
                    e.exports.featureLayer = function(t, e) {
                        return new l(t,e)
                    }
                }
                , {
                    "./marker": 22,
                    "./request": 23,
                    "./simplestyle": 25,
                    "./url": 27,
                    "./util": 28,
                    "sanitize-caja": 4
                }],
                9: [function(t, e, i) {
                    "use strict";
                    var n = t("./util")
                      , o = t("./url")
                      , s = t("./request");
                    e.exports = function(t, e) {
                        var i = {};
                        return n.strict(t, "string"),
                        -1 === t.indexOf("/") && (t = o("/geocode/" + t + "/{query}.json", e && e.accessToken)),
                        i.getURL = function() {
                            return t
                        }
                        ,
                        i.queryURL = function(t) {
                            if ("string" != typeof t) {
                                for (var e = [], n = 0; n < t.length; n++)
                                    e[n] = encodeURIComponent(t[n]);
                                return L.Util.template(i.getURL(), {
                                    query: e.join(";")
                                })
                            }
                            return L.Util.template(i.getURL(), {
                                query: encodeURIComponent(t)
                            })
                        }
                        ,
                        i.query = function(t, e) {
                            return n.strict(e, "function"),
                            s(i.queryURL(t), function(t, i) {
                                if (i && (i.length || i.features)) {
                                    var o = {
                                        results: i
                                    };
                                    i.features && i.features.length && (o.latlng = [i.features[0].center[1], i.features[0].center[0]],
                                    i.features[0].bbox && (o.bounds = i.features[0].bbox,
                                    o.lbounds = n.lbounds(o.bounds))),
                                    e(null , o)
                                } else
                                    e(t || !0)
                            }),
                            i
                        }
                        ,
                        i.reverseQuery = function(t, e) {
                            function n(t) {
                                return void 0 !== t.lat && void 0 !== t.lng ? t.lng + "," + t.lat : void 0 !== t.lat && void 0 !== t.lon ? t.lon + "," + t.lat : t[0] + "," + t[1]
                            }
                            var o = "";
                            if (t.length && t[0].length) {
                                for (var r = 0, a = []; r < t.length; r++)
                                    a.push(n(t[r]));
                                o = a.join(";")
                            } else
                                o = n(t);
                            return s(i.queryURL(o), function(t, i) {
                                e(t, i)
                            }),
                            i
                        }
                        ,
                        i
                    }
                }
                , {
                    "./request": 23,
                    "./url": 27,
                    "./util": 28
                }],
                10: [function(t, e, i) {
                    "use strict";
                    var n = t("./geocoder")
                      , o = t("./util")
                      , s = L.Control.extend({
                        includes: L.Mixin.Events,
                        options: {
                            position: "topleft",
                            pointZoom: 16,
                            keepOpen: !1,
                            autocomplete: !1
                        },
                        initialize: function(t, e) {
                            L.Util.setOptions(this, e),
                            this.setURL(t),
                            this._updateSubmit = L.bind(this._updateSubmit, this),
                            this._updateAutocomplete = L.bind(this._updateAutocomplete, this),
                            this._chooseResult = L.bind(this._chooseResult, this)
                        },
                        setURL: function(t) {
                            return this.geocoder = n(t, {
                                accessToken: this.options.accessToken
                            }),
                            this
                        },
                        getURL: function() {
                            return this.geocoder.getURL()
                        },
                        setID: function(t) {
                            return this.setURL(t)
                        },
                        setTileJSON: function(t) {
                            return this.setURL(t.geocoder)
                        },
                        _toggle: function(t) {
                            t && L.DomEvent.stop(t),
                            L.DomUtil.hasClass(this._container, "active") ? (L.DomUtil.removeClass(this._container, "active"),
                            this._results.innerHTML = "",
                            this._input.blur()) : (L.DomUtil.addClass(this._container, "active"),
                            this._input.focus(),
                            this._input.select())
                        },
                        _closeIfOpen: function(t) {
                            L.DomUtil.hasClass(this._container, "active") && !this.options.keepOpen && (L.DomUtil.removeClass(this._container, "active"),
                            this._results.innerHTML = "",
                            this._input.blur())
                        },
                        onAdd: function(t) {
                            var e = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder leaflet-bar leaflet-control")
                              , i = L.DomUtil.create("a", "leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder", e)
                              , n = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-results", e)
                              , o = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-wrap", e)
                              , s = L.DomUtil.create("form", "leaflet-control-mapbox-geocoder-form", o)
                              , r = L.DomUtil.create("input", "", s);
                            return i.href = "#",
                            i.innerHTML = "&nbsp;",
                            r.type = "text",
                            r.setAttribute("placeholder", "Search"),
                            L.DomEvent.addListener(s, "submit", this._geocode, this),
                            L.DomEvent.addListener(r, "keyup", this._autocomplete, this),
                            L.DomEvent.disableClickPropagation(e),
                            this._map = t,
                            this._results = n,
                            this._input = r,
                            this._form = s,
                            this.options.keepOpen ? L.DomUtil.addClass(e, "active") : (this._map.on("click", this._closeIfOpen, this),
                            L.DomEvent.addListener(i, "click", this._toggle, this)),
                            e
                        },
                        _updateSubmit: function(t, e) {
                            if (L.DomUtil.removeClass(this._container, "searching"),
                            this._results.innerHTML = "",
                            t || !e)
                                this.fire("error", {
                                    error: t
                                });
                            else {
                                var i = [];
                                e.results && e.results.features && (i = e.results.features),
                                1 === i.length ? (this.fire("autoselect", {
                                    feature: i[0]
                                }),
                                this.fire("found", {
                                    results: e.results
                                }),
                                this._chooseResult(i[0]),
                                this._closeIfOpen()) : i.length > 1 ? (this.fire("found", {
                                    results: e.results
                                }),
                                this._displayResults(i)) : this._displayResults(i)
                            }
                        },
                        _updateAutocomplete: function(t, e) {
                            if (this._results.innerHTML = "",
                            t || !e)
                                this.fire("error", {
                                    error: t
                                });
                            else {
                                var i = [];
                                e.results && e.results.features && (i = e.results.features),
                                i.length && this.fire("found", {
                                    results: e.results
                                }),
                                this._displayResults(i)
                            }
                        },
                        _displayResults: function(t) {
                            for (var e = 0, i = Math.min(t.length, 5); i > e; e++) {
                                var n = t[e]
                                  , o = n.place_name;
                                if (o.length) {
                                    var s = L.DomUtil.create("a", "", this._results)
                                      , r = "innerText"in s ? "innerText" : "textContent";
                                    s[r] = o,
                                    s.href = "#",
                                    L.bind(function(t) {
                                        L.DomEvent.addListener(s, "click", function(e) {
                                            this._chooseResult(t),
                                            L.DomEvent.stop(e),
                                            this.fire("select", {
                                                feature: t
                                            })
                                        }, this)
                                    }, this)(n)
                                }
                            }
                            if (t.length > 5) {
                                var a = L.DomUtil.create("span", "", this._results);
                                a.innerHTML = "Top 5 of " + t.length + "  results"
                            }
                        },
                        _chooseResult: function(t) {
                            t.bbox ? this._map.fitBounds(o.lbounds(t.bbox)) : t.center && this._map.setView([t.center[1], t.center[0]], void 0 === this._map.getZoom() ? this.options.pointZoom : Math.max(this._map.getZoom(), this.options.pointZoom))
                        },
                        _geocode: function(t) {
                            return L.DomEvent.preventDefault(t),
                            "" === this._input.value ? this._updateSubmit() : (L.DomUtil.addClass(this._container, "searching"),
                            void this.geocoder.query(this._input.value, this._updateSubmit))
                        },
                        _autocomplete: function(t) {
                            return this.options.autocomplete ? "" === this._input.value ? this._updateAutocomplete() : void this.geocoder.query(this._input.value, this._updateAutocomplete) : void 0
                        }
                    });
                    e.exports.GeocoderControl = s,
                    e.exports.geocoderControl = function(t, e) {
                        return new s(t,e)
                    }
                }
                , {
                    "./geocoder": 9,
                    "./util": 28
                }],
                11: [function(t, e, i) {
                    "use strict";
                    function n(t) {
                        return t >= 93 && t--,
                        t >= 35 && t--,
                        t - 32
                    }
                    e.exports = function(t) {
                        return function(e, i) {
                            if (t) {
                                var o = n(t.grid[i].charCodeAt(e))
                                  , s = t.keys[o];
                                return t.data[s]
                            }
                        }
                    }
                }
                , {}],
                12: [function(t, e, i) {
                    "use strict";
                    var n = t("./util")
                      , o = t("mustache")
                      , s = L.Control.extend({
                        options: {
                            pinnable: !0,
                            follow: !1,
                            sanitizer: t("sanitize-caja"),
                            touchTeaser: !0,
                            location: !0
                        },
                        _currentContent: "",
                        _pinned: !1,
                        initialize: function(t, e) {
                            L.Util.setOptions(this, e),
                            n.strict_instance(t, L.Class, "L.mapbox.gridLayer"),
                            this._layer = t
                        },
                        setTemplate: function(t) {
                            return n.strict(t, "string"),
                            this.options.template = t,
                            this
                        },
                        _template: function(t, e) {
                            if (e) {
                                var i = this.options.template || this._layer.getTileJSON().template;
                                if (i) {
                                    var n = {};
                                    return n["__" + t + "__"] = !0,
                                    this.options.sanitizer(o.to_html(i, L.extend(n, e)))
                                }
                            }
                        },
                        _show: function(t, e) {
                            t !== this._currentContent && (this._currentContent = t,
                            this.options.follow ? (this._popup.setContent(t).setLatLng(e.latLng),
                            this._map._popup !== this._popup && this._popup.openOn(this._map)) : (this._container.style.display = "block",
                            this._contentWrapper.innerHTML = t))
                        },
                        hide: function() {
                            return this._pinned = !1,
                            this._currentContent = "",
                            this._map.closePopup(),
                            this._container.style.display = "none",
                            this._contentWrapper.innerHTML = "",
                            L.DomUtil.removeClass(this._container, "closable"),
                            this
                        },
                        _mouseover: function(t) {
                            if (t.data ? L.DomUtil.addClass(this._map._container, "map-clickable") : L.DomUtil.removeClass(this._map._container, "map-clickable"),
                            !this._pinned) {
                                var e = this._template("teaser", t.data);
                                e ? this._show(e, t) : this.hide()
                            }
                        },
                        _mousemove: function(t) {
                            this._pinned || this.options.follow && this._popup.setLatLng(t.latLng)
                        },
                        _navigateTo: function(t) {
                            window.top.location.href = t
                        },
                        _click: function(t) {
                            var e = this._template("location", t.data);
                            if (this.options.location && e && 0 === e.search(/^https?:/))
                                return this._navigateTo(this._template("location", t.data));
                            if (this.options.pinnable) {
                                var i = this._template("full", t.data);
                                !i && this.options.touchTeaser && L.Browser.touch && (i = this._template("teaser", t.data)),
                                i ? (L.DomUtil.addClass(this._container, "closable"),
                                this._pinned = !0,
                                this._show(i, t)) : this._pinned && (L.DomUtil.removeClass(this._container, "closable"),
                                this._pinned = !1,
                                this.hide())
                            }
                        },
                        _onPopupClose: function() {
                            this._currentContent = null ,
                            this._pinned = !1
                        },
                        _createClosebutton: function(t, e) {
                            var i = L.DomUtil.create("a", "close", t);
                            return i.innerHTML = "close",
                            i.href = "#",
                            i.title = "close",
                            L.DomEvent.on(i, "click", L.DomEvent.stopPropagation).on(i, "mousedown", L.DomEvent.stopPropagation).on(i, "dblclick", L.DomEvent.stopPropagation).on(i, "click", L.DomEvent.preventDefault).on(i, "click", e, this),
                            i
                        },
                        onAdd: function(t) {
                            this._map = t;
                            var e = "leaflet-control-grid map-tooltip"
                              , i = L.DomUtil.create("div", e)
                              , n = L.DomUtil.create("div", "map-tooltip-content");
                            return i.style.display = "none",
                            this._createClosebutton(i, this.hide),
                            i.appendChild(n),
                            this._contentWrapper = n,
                            this._popup = new L.Popup({
                                autoPan: !1,
                                closeOnClick: !1
                            }),
                            t.on("popupclose", this._onPopupClose, this),
                            L.DomEvent.disableClickPropagation(i).addListener(i, "mousewheel", L.DomEvent.stopPropagation),
                            this._layer.on("mouseover", this._mouseover, this).on("mousemove", this._mousemove, this).on("click", this._click, this),
                            i
                        },
                        onRemove: function(t) {
                            t.off("popupclose", this._onPopupClose, this),
                            this._layer.off("mouseover", this._mouseover, this).off("mousemove", this._mousemove, this).off("click", this._click, this)
                        }
                    });
                    e.exports.GridControl = s,
                    e.exports.gridControl = function(t, e) {
                        return new s(t,e)
                    }
                }
                , {
                    "./util": 28,
                    mustache: 3,
                    "sanitize-caja": 4
                }],
                13: [function(t, e, i) {
                    "use strict";
                    var n = t("./util")
                      , o = t("./request")
                      , s = t("./grid")
                      , r = L.Class.extend({
                        includes: [L.Mixin.Events, t("./load_tilejson")],
                        options: {
                            template: function() {
                                return ""
                            }
                        },
                        _mouseOn: null ,
                        _tilejson: {},
                        _cache: {},
                        initialize: function(t, e) {
                            L.Util.setOptions(this, e),
                            this._loadTileJSON(t)
                        },
                        _setTileJSON: function(t) {
                            return n.strict(t, "object"),
                            L.extend(this.options, {
                                grids: t.grids,
                                minZoom: t.minzoom,
                                maxZoom: t.maxzoom,
                                bounds: t.bounds && n.lbounds(t.bounds)
                            }),
                            this._tilejson = t,
                            this._cache = {},
                            this._update(),
                            this
                        },
                        getTileJSON: function() {
                            return this._tilejson
                        },
                        active: function() {
                            return !!(this._map && this.options.grids && this.options.grids.length)
                        },
                        addTo: function(t) {
                            return t.addLayer(this),
                            this
                        },
                        onAdd: function(t) {
                            this._map = t,
                            this._update(),
                            this._map.on("click", this._click, this).on("mousemove", this._move, this).on("moveend", this._update, this)
                        },
                        onRemove: function() {
                            this._map.off("click", this._click, this).off("mousemove", this._move, this).off("moveend", this._update, this)
                        },
                        getData: function(t, e) {
                            if (this.active()) {
                                var i = this._map
                                  , n = i.project(t.wrap())
                                  , o = 256
                                  , s = 4
                                  , r = Math.floor(n.x / o)
                                  , a = Math.floor(n.y / o)
                                  , l = i.options.crs.scale(i.getZoom()) / o;
                                return r = (r + l) % l,
                                a = (a + l) % l,
                                this._getTile(i.getZoom(), r, a, function(t) {
                                    var i = Math.floor((n.x - r * o) / s)
                                      , l = Math.floor((n.y - a * o) / s);
                                    e(t(i, l))
                                }),
                                this
                            }
                        },
                        _click: function(t) {
                            this.getData(t.latlng, L.bind(function(e) {
                                this.fire("click", {
                                    latLng: t.latlng,
                                    data: e
                                })
                            }, this))
                        },
                        _move: function(t) {
                            this.getData(t.latlng, L.bind(function(e) {
                                e !== this._mouseOn ? (this._mouseOn && this.fire("mouseout", {
                                    latLng: t.latlng,
                                    data: this._mouseOn
                                }),
                                this.fire("mouseover", {
                                    latLng: t.latlng,
                                    data: e
                                }),
                                this._mouseOn = e) : this.fire("mousemove", {
                                    latLng: t.latlng,
                                    data: e
                                })
                            }, this))
                        },
                        _getTileURL: function(t) {
                            var e = this.options.grids
                              , i = (t.x + t.y) % e.length
                              , n = e[i];
                            return L.Util.template(n, t)
                        },
                        _update: function() {
                            if (this.active()) {
                                var t = this._map.getPixelBounds()
                                  , e = this._map.getZoom()
                                  , i = 256;
                                if (!(e > this.options.maxZoom || e < this.options.minZoom))
                                    for (var n = L.bounds(t.min.divideBy(i)._floor(), t.max.divideBy(i)._floor()), o = this._map.options.crs.scale(e) / i, s = n.min.x; s <= n.max.x; s++)
                                        for (var r = n.min.y; r <= n.max.y; r++)
                                            this._getTile(e, (s % o + o) % o, (r % o + o) % o)
                            }
                        },
                        _getTile: function(t, e, i, n) {
                            var r = t + "_" + e + "_" + i
                              , a = L.point(e, i);
                            if (a.z = t,
                            this._tileShouldBeLoaded(a)) {
                                if (r in this._cache) {
                                    if (!n)
                                        return;
                                    return void ("function" == typeof this._cache[r] ? n(this._cache[r]) : this._cache[r].push(n))
                                }
                                this._cache[r] = [],
                                n && this._cache[r].push(n),
                                o(this._getTileURL(a), L.bind(function(t, e) {
                                    var i = this._cache[r];
                                    this._cache[r] = s(e);
                                    for (var n = 0; n < i.length; ++n)
                                        i[n](this._cache[r])
                                }, this))
                            }
                        },
                        _tileShouldBeLoaded: function(t) {
                            if (t.z > this.options.maxZoom || t.z < this.options.minZoom)
                                return !1;
                            if (this.options.bounds) {
                                var e = 256
                                  , i = t.multiplyBy(e)
                                  , n = i.add(new L.Point(e,e))
                                  , o = this._map.unproject(i)
                                  , s = this._map.unproject(n)
                                  , r = new L.LatLngBounds([o, s]);
                                if (!this.options.bounds.intersects(r))
                                    return !1
                            }
                            return !0
                        }
                    });
                    e.exports.GridLayer = r,
                    e.exports.gridLayer = function(t, e) {
                        return new r(t,e)
                    }
                }
                , {
                    "./grid": 11,
                    "./load_tilejson": 18,
                    "./request": 23,
                    "./util": 28
                }],
                14: [function(t, e, i) {
                    t("./leaflet"),
                    t("./mapbox")
                }
                , {
                    "./leaflet": 16,
                    "./mapbox": 20
                }],
                15: [function(t, e, i) {
                    "use strict";
                    var n = L.Control.extend({
                        options: {
                            position: "bottomright",
                            sanitizer: t("sanitize-caja")
                        },
                        initialize: function(t) {
                            L.setOptions(this, t),
                            this._info = {}
                        },
                        onAdd: function(t) {
                            this._container = L.DomUtil.create("div", "mapbox-control-info mapbox-small"),
                            this._content = L.DomUtil.create("div", "map-info-container", this._container);
                            var e = L.DomUtil.create("a", "mapbox-info-toggle mapbox-icon mapbox-icon-info", this._container);
                            e.href = "#",
                            L.DomEvent.addListener(e, "click", this._showInfo, this),
                            L.DomEvent.disableClickPropagation(this._container);
                            for (var i in t._layers)
                                t._layers[i].getAttribution && this.addInfo(t._layers[i].getAttribution());
                            return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this),
                            this._update(),
                            this._container
                        },
                        onRemove: function(t) {
                            t.off("layeradd", this._onLayerAdd, this).off("layerremove", this._onLayerRemove, this)
                        },
                        addInfo: function(t) {
                            return t ? (this._info[t] || (this._info[t] = 0),
                            this._info[t] = !0,
                            this._update()) : this
                        },
                        removeInfo: function(t) {
                            return t ? (this._info[t] && (this._info[t] = !1),
                            this._update()) : this
                        },
                        _showInfo: function(t) {
                            return L.DomEvent.preventDefault(t),
                            this._active === !0 ? this._hidecontent() : (L.DomUtil.addClass(this._container, "active"),
                            this._active = !0,
                            void this._update())
                        },
                        _hidecontent: function() {
                            this._content.innerHTML = "",
                            this._active = !1,
                            L.DomUtil.removeClass(this._container, "active")
                        },
                        _update: function() {
                            if (!this._map)
                                return this;
                            this._content.innerHTML = "";
                            var t = "none"
                              , e = [];
                            for (var i in this._info)
                                this._info.hasOwnProperty(i) && this._info[i] && (e.push(this.options.sanitizer(i)),
                                t = "block");
                            return this._content.innerHTML += e.join(" | "),
                            this._container.style.display = t,
                            this
                        },
                        _onLayerAdd: function(t) {
                            t.layer.getAttribution && t.layer.getAttribution() ? this.addInfo(t.layer.getAttribution()) : "on"in t.layer && t.layer.getAttribution && t.layer.on("ready", L.bind(function() {
                                this.addInfo(t.layer.getAttribution())
                            }, this))
                        },
                        _onLayerRemove: function(t) {
                            t.layer.getAttribution && this.removeInfo(t.layer.getAttribution())
                        }
                    });
                    e.exports.InfoControl = n,
                    e.exports.infoControl = function(t) {
                        return new n(t)
                    }
                }
                , {
                    "sanitize-caja": 4
                }],
                16: [function(t, e, i) {
                    window.L = t("leaflet/dist/leaflet-src")
                }
                , {
                    "leaflet/dist/leaflet-src": 2
                }],
                17: [function(t, e, i) {
                    "use strict";
                    var n = L.Control.extend({
                        options: {
                            position: "bottomright",
                            sanitizer: t("sanitize-caja")
                        },
                        initialize: function(t) {
                            L.setOptions(this, t),
                            this._legends = {}
                        },
                        onAdd: function(t) {
                            return this._container = L.DomUtil.create("div", "map-legends wax-legends"),
                            L.DomEvent.disableClickPropagation(this._container),
                            this._update(),
                            this._container
                        },
                        addLegend: function(t) {
                            return t ? (this._legends[t] || (this._legends[t] = 0),
                            this._legends[t]++,
                            this._update()) : this
                        },
                        removeLegend: function(t) {
                            return t ? (this._legends[t] && this._legends[t]--,
                            this._update()) : this
                        },
                        _update: function() {
                            if (!this._map)
                                return this;
                            this._container.innerHTML = "";
                            var t = "none";
                            for (var e in this._legends)
                                if (this._legends.hasOwnProperty(e) && this._legends[e]) {
                                    var i = L.DomUtil.create("div", "map-legend wax-legend", this._container);
                                    i.innerHTML = this.options.sanitizer(e),
                                    t = "block"
                                }
                            return this._container.style.display = t,
                            this
                        }
                    });
                    e.exports.LegendControl = n,
                    e.exports.legendControl = function(t) {
                        return new n(t)
                    }
                }
                , {
                    "sanitize-caja": 4
                }],
                18: [function(t, e, i) {
                    "use strict";
                    var n = t("./request")
                      , o = t("./url")
                      , s = t("./util");
                    e.exports = {
                        _loadTileJSON: function(t) {
                            "string" == typeof t ? (t = o.tileJSON(t, this.options && this.options.accessToken),
                            n(t, L.bind(function(e, i) {
                                e ? (s.log("could not load TileJSON at " + t),
                                this.fire("error", {
                                    error: e
                                })) : i && (this._setTileJSON(i),
                                this.fire("ready"))
                            }, this))) : t && "object" == typeof t && this._setTileJSON(t)
                        }
                    }
                }
                , {
                    "./request": 23,
                    "./url": 27,
                    "./util": 28
                }],
                19: [function(t, e, i) {
                    "use strict";
                    function n(t, e) {
                        return !e || t.accessToken ? t : L.extend({
                            accessToken: e
                        }, t)
                    }
                    var o = t("./util")
                      , s = t("./tile_layer").tileLayer
                      , r = t("./feature_layer").featureLayer
                      , a = t("./grid_layer").gridLayer
                      , l = t("./grid_control").gridControl
                      , h = t("./info_control").infoControl
                      , u = t("./share_control").shareControl
                      , c = t("./legend_control").legendControl
                      , p = t("./mapbox_logo").mapboxLogoControl
                      , d = L.Map.extend({
                        includes: [t("./load_tilejson")],
                        options: {
                            tileLayer: {},
                            featureLayer: {},
                            gridLayer: {},
                            legendControl: {},
                            gridControl: {},
                            infoControl: !1,
                            shareControl: !1
                        },
                        _tilejson: {},
                        initialize: function(t, e, i) {
                            L.Map.prototype.initialize.call(this, t, L.extend({}, L.Map.prototype.options, i)),
                            this.attributionControl && this.attributionControl.setPrefix(""),
                            this.options.tileLayer && (this.tileLayer = s(void 0, n(this.options.tileLayer, this.options.accessToken)),
                            this.addLayer(this.tileLayer)),
                            this.options.featureLayer && (this.featureLayer = r(void 0, n(this.options.featureLayer, this.options.accessToken)),
                            this.addLayer(this.featureLayer)),
                            this.options.gridLayer && (this.gridLayer = a(void 0, n(this.options.gridLayer, this.options.accessToken)),
                            this.addLayer(this.gridLayer)),
                            this.options.gridLayer && this.options.gridControl && (this.gridControl = l(this.gridLayer, this.options.gridControl),
                            this.addControl(this.gridControl)),
                            this.options.infoControl && (this.infoControl = h(this.options.infoControl),
                            this.addControl(this.infoControl)),
                            this.options.legendControl && (this.legendControl = c(this.options.legendControl),
                            this.addControl(this.legendControl)),
                            this.options.shareControl && (this.shareControl = u(void 0, n(this.options.shareControl, this.options.accessToken)),
                            this.addControl(this.shareControl)),
                            this._mapboxLogoControl = p(this.options.mapboxLogoControl),
                            this.addControl(this._mapboxLogoControl),
                            this._loadTileJSON(e)
                        },
                        addLayer: function(t) {
                            return "on"in t && t.on("ready", L.bind(function() {
                                this._updateLayer(t)
                            }, this)),
                            L.Map.prototype.addLayer.call(this, t)
                        },
                        _setTileJSON: function(t) {
                            return this._tilejson = t,
                            this._initialize(t),
                            this
                        },
                        getTileJSON: function() {
                            return this._tilejson
                        },
                        _initialize: function(t) {
                            if (this.tileLayer && (this.tileLayer._setTileJSON(t),
                            this._updateLayer(this.tileLayer)),
                            this.featureLayer && !this.featureLayer.getGeoJSON() && t.data && t.data[0] && this.featureLayer.loadURL(t.data[0]),
                            this.gridLayer && (this.gridLayer._setTileJSON(t),
                            this._updateLayer(this.gridLayer)),
                            this.infoControl && t.attribution && this.infoControl.addInfo(t.attribution),
                            this.legendControl && t.legend && this.legendControl.addLegend(t.legend),
                            this.shareControl && this.shareControl._setTileJSON(t),
                            this._mapboxLogoControl._setTileJSON(t),
                            !this._loaded && t.center) {
                                var e = void 0 !== this.getZoom() ? this.getZoom() : t.center[2]
                                  , i = L.latLng(t.center[1], t.center[0]);
                                this.setView(i, e)
                            }
                        },
                        _editLink: function() {
                            if (this._controlContainer.getElementsByClassName) {
                                var t = this._controlContainer.getElementsByClassName("mapbox-improve-map");
                                if (t.length && this._loaded)
                                    for (var e = this.getCenter().wrap(), i = this._tilejson || {}, n = i.id || "", o = 0; o < t.length; o++)
                                        t[o].href = t[o].href.split("#")[0] + "#" + n + "/" + e.lng.toFixed(3) + "/" + e.lat.toFixed(3) + "/" + this.getZoom()
                            }
                        },
                        _updateLayer: function(t) {
                            t.options && (this.infoControl && this._loaded && this.infoControl.addInfo(t.options.infoControl),
                            this.attributionControl && this._loaded && t.getAttribution && this.attributionControl.addAttribution(t.getAttribution()),
                            this.on("moveend", this._editLink, this),
                            L.stamp(t)in this._zoomBoundLayers || !t.options.maxZoom && !t.options.minZoom || (this._zoomBoundLayers[L.stamp(t)] = t),
                            this._editLink(),
                            this._updateZoomLevels())
                        }
                    });
                    e.exports.Map = d,
                    e.exports.map = function(t, e, i) {
                        return new d(t,e,i)
                    }
                }
                , {
                    "./feature_layer": 8,
                    "./grid_control": 12,
                    "./grid_layer": 13,
                    "./info_control": 15,
                    "./legend_control": 17,
                    "./load_tilejson": 18,
                    "./mapbox_logo": 21,
                    "./share_control": 24,
                    "./tile_layer": 26,
                    "./util": 28
                }],
                20: [function(t, e, i) {
                    "use strict";
                    var n = t("./geocoder_control")
                      , o = t("./grid_control")
                      , s = t("./feature_layer")
                      , r = t("./legend_control")
                      , a = t("./share_control")
                      , l = t("./tile_layer")
                      , h = t("./info_control")
                      , u = t("./map")
                      , c = t("./grid_layer");
                    L.mapbox = e.exports = {
                        VERSION: t("../package.json").version,
                        geocoder: t("./geocoder"),
                        marker: t("./marker"),
                        simplestyle: t("./simplestyle"),
                        tileLayer: l.tileLayer,
                        TileLayer: l.TileLayer,
                        infoControl: h.infoControl,
                        InfoControl: h.InfoControl,
                        shareControl: a.shareControl,
                        ShareControl: a.ShareControl,
                        legendControl: r.legendControl,
                        LegendControl: r.LegendControl,
                        geocoderControl: n.geocoderControl,
                        GeocoderControl: n.GeocoderControl,
                        gridControl: o.gridControl,
                        GridControl: o.GridControl,
                        gridLayer: c.gridLayer,
                        GridLayer: c.GridLayer,
                        featureLayer: s.featureLayer,
                        FeatureLayer: s.FeatureLayer,
                        map: u.map,
                        Map: u.Map,
                        config: t("./config"),
                        sanitize: t("sanitize-caja"),
                        template: t("mustache").to_html
                    },
                    window.L.Icon.Default.imagePath = ("https:" == document.location.protocol || "http:" == document.location.protocol ? "" : "https:") + "//api.tiles.mapbox.com/mapbox.js/v" + t("../package.json").version + "/images"
                }
                , {
                    "../package.json": 6,
                    "./config": 7,
                    "./feature_layer": 8,
                    "./geocoder": 9,
                    "./geocoder_control": 10,
                    "./grid_control": 12,
                    "./grid_layer": 13,
                    "./info_control": 15,
                    "./legend_control": 17,
                    "./map": 19,
                    "./marker": 22,
                    "./share_control": 24,
                    "./simplestyle": 25,
                    "./tile_layer": 26,
                    mustache: 3,
                    "sanitize-caja": 4
                }],
                21: [function(t, e, i) {
                    "use strict";
                    var n = L.Control.extend({
                        options: {
                            position: "bottomleft"
                        },
                        initialize: function(t) {
                            L.setOptions(this, t)
                        },
                        onAdd: function(t) {
                            return this._container = L.DomUtil.create("div", "mapbox-logo"),
                            this._container
                        },
                        _setTileJSON: function(t) {
                            t.mapbox_logo && L.DomUtil.addClass(this._container, "mapbox-logo-true")
                        }
                    });
                    e.exports.MapboxLogoControl = n,
                    e.exports.mapboxLogoControl = function(t) {
                        return new n(t)
                    }
                }
                , {}],
                22: [function(t, e, i) {
                    "use strict";
                    function n(t, e) {
                        t = t || {};
                        var i = {
                            small: [20, 50],
                            medium: [30, 70],
                            large: [35, 90]
                        }
                          , n = t["marker-size"] || "medium"
                          , o = "marker-symbol"in t && "" !== t["marker-symbol"] ? "-" + t["marker-symbol"] : ""
                          , s = (t["marker-color"] || "7e7e7e").replace("#", "");
                        return L.icon({
                            iconUrl: r("/marker/pin-" + n.charAt(0) + o + "+" + s + (L.Browser.retina ? "@2x" : "") + ".png", e && e.accessToken),
                            iconSize: i[n],
                            iconAnchor: [i[n][0] / 2, i[n][1] / 2],
                            popupAnchor: [0, -i[n][1] / 2]
                        })
                    }
                    function o(t, e, i) {
                        return L.marker(e, {
                            icon: n(t.properties, i),
                            title: a.strip_tags(l(t.properties && t.properties.title || ""))
                        })
                    }
                    function s(t, e) {
                        if (!t || !t.properties)
                            return "";
                        var i = "";
                        return t.properties.title && (i += '<div class="marker-title">' + t.properties.title + "</div>"),
                        t.properties.description && (i += '<div class="marker-description">' + t.properties.description + "</div>"),
                        (e || l)(i)
                    }
                    var r = t("./url")
                      , a = t("./util")
                      , l = t("sanitize-caja");
                    e.exports = {
                        icon: n,
                        style: o,
                        createPopup: s
                    }
                }
                , {
                    "./url": 27,
                    "./util": 28,
                    "sanitize-caja": 4
                }],
                23: [function(t, e, i) {
                    "use strict";
                    var n = t("corslite")
                      , o = t("./util").strict
                      , s = t("./config")
                      , r = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;
                    e.exports = function(t, e) {
                        function i(t, i) {
                            !t && i && (i = JSON.parse(i.responseText)),
                            e(t, i)
                        }
                        o(t, "string"),
                        o(e, "function");
                        var a;
                        return a = "withCredentials"in new window.XMLHttpRequest ? t.match(r).indexOf("https:") > -1 || "https:" === document.location.protocol || s.FORCE_HTTPS ? "https:" : "http:" : document.location.protocol,
                        t = t.replace(r, a),
                        n(t, i)
                    }
                }
                , {
                    "./config": 7,
                    "./util": 28,
                    corslite: 1
                }],
                24: [function(t, e, i) {
                    "use strict";
                    var n = t("./url")
                      , o = L.Control.extend({
                        includes: [t("./load_tilejson")],
                        options: {
                            position: "topleft",
                            url: ""
                        },
                        initialize: function(t, e) {
                            L.setOptions(this, e),
                            this._loadTileJSON(t)
                        },
                        _setTileJSON: function(t) {
                            this._tilejson = t
                        },
                        onAdd: function(t) {
                            this._map = t;
                            var e = L.DomUtil.create("div", "leaflet-control-mapbox-share leaflet-bar")
                              , i = L.DomUtil.create("a", "mapbox-share mapbox-icon mapbox-icon-share", e);
                            return i.href = "#",
                            this._modal = L.DomUtil.create("div", "mapbox-modal", this._map._container),
                            this._mask = L.DomUtil.create("div", "mapbox-modal-mask", this._modal),
                            this._content = L.DomUtil.create("div", "mapbox-modal-content", this._modal),
                            L.DomEvent.addListener(i, "click", this._shareClick, this),
                            L.DomEvent.disableClickPropagation(e),
                            this._map.on("mousedown", this._clickOut, this),
                            e
                        },
                        _clickOut: function(t) {
                            return this._sharing ? (L.DomEvent.preventDefault(t),
                            L.DomUtil.removeClass(this._modal, "active"),
                            this._content.innerHTML = "",
                            void (this._sharing = null )) : void 0
                        },
                        _shareClick: function(t) {
                            if (L.DomEvent.stop(t),
                            this._sharing)
                                return this._clickOut(t);
                            var e = this._tilejson || this._map._tilejson || {}
                              , i = encodeURIComponent(this.options.url || e.webpage || window.location)
                              , o = encodeURIComponent(e.name)
                              , s = n("/" + e.id + "/" + this._map.getCenter().lng + "," + this._map.getCenter().lat + "," + this._map.getZoom() + "/600x600.png", this.options.accessToken)
                              , r = n("/" + e.id + ".html", this.options.accessToken)
                              , a = "//twitter.com/intent/tweet?status=" + o + " " + i
                              , l = "//www.facebook.com/sharer.php?u=" + i + "&t=" + encodeURIComponent(e.name)
                              , h = "//www.pinterest.com/pin/create/button/?url=" + i + "&media=" + s + "&description=" + e.name
                              , u = "<h3>Share this map</h3><div class='mapbox-share-buttons'><a class='mapbox-button mapbox-button-icon mapbox-icon-facebook' target='_blank' href='{{facebook}}'>Facebook</a><a class='mapbox-button mapbox-button-icon mapbox-icon-twitter' target='_blank' href='{{twitter}}'>Twitter</a><a class='mapbox-button mapbox-button-icon mapbox-icon-pinterest' target='_blank' href='{{pinterest}}'>Pinterest</a></div>".replace("{{twitter}}", a).replace("{{facebook}}", l).replace("{{pinterest}}", h)
                              , c = '<iframe width="100%" height="500px" frameBorder="0" src="{{embed}}"></iframe>'.replace("{{embed}}", r)
                              , p = "Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";
                            L.DomUtil.addClass(this._modal, "active"),
                            this._sharing = L.DomUtil.create("div", "mapbox-modal-body", this._content),
                            this._sharing.innerHTML = u;
                            var d = L.DomUtil.create("input", "mapbox-embed", this._sharing);
                            d.type = "text",
                            d.value = c;
                            var m = L.DomUtil.create("label", "mapbox-embed-description", this._sharing);
                            m.innerHTML = p;
                            var _ = L.DomUtil.create("a", "leaflet-popup-close-button", this._sharing);
                            _.href = "#",
                            L.DomEvent.disableClickPropagation(this._sharing),
                            L.DomEvent.addListener(_, "click", this._clickOut, this),
                            L.DomEvent.addListener(d, "click", function(t) {
                                t.target.focus(),
                                t.target.select()
                            })
                        }
                    });
                    e.exports.ShareControl = o,
                    e.exports.shareControl = function(t, e) {
                        return new o(t,e)
                    }
                }
                , {
                    "./load_tilejson": 18,
                    "./url": 27
                }],
                25: [function(t, e, i) {
                    "use strict";
                    function n(t, e) {
                        var i = {};
                        for (var n in e)
                            void 0 === t[n] ? i[n] = e[n] : i[n] = t[n];
                        return i
                    }
                    function o(t) {
                        for (var e = {}, i = 0; i < a.length; i++)
                            e[a[i][1]] = t[a[i][0]];
                        return e
                    }
                    function s(t) {
                        return o(n(t.properties || {}, r))
                    }
                    var r = {
                        stroke: "#555555",
                        "stroke-width": 2,
                        "stroke-opacity": 1,
                        fill: "#555555",
                        "fill-opacity": .5
                    }
                      , a = [["stroke", "color"], ["stroke-width", "weight"], ["stroke-opacity", "opacity"], ["fill", "fillColor"], ["fill-opacity", "fillOpacity"]];
                    e.exports = {
                        style: s,
                        defaults: r
                    }
                }
                , {}],
                26: [function(t, e, i) {
                    "use strict";
                    var n = t("./util")
                      , o = L.TileLayer.extend({
                        includes: [t("./load_tilejson")],
                        options: {
                            format: "png"
                        },
                        formats: ["png", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90"],
                        scalePrefix: "@2x.",
                        initialize: function(t, e) {
                            L.TileLayer.prototype.initialize.call(this, void 0, e),
                            this._tilejson = {},
                            e && e.format && n.strict_oneof(e.format, this.formats),
                            this._loadTileJSON(t)
                        },
                        setFormat: function(t) {
                            return n.strict(t, "string"),
                            this.options.format = t,
                            this.redraw(),
                            this
                        },
                        setUrl: null ,
                        _setTileJSON: function(t) {
                            return n.strict(t, "object"),
                            L.extend(this.options, {
                                tiles: t.tiles,
                                attribution: t.attribution,
                                minZoom: t.minzoom || 0,
                                maxZoom: t.maxzoom || 18,
                                tms: "tms" === t.scheme,
                                bounds: t.bounds && n.lbounds(t.bounds)
                            }),
                            this._tilejson = t,
                            this.redraw(),
                            this
                        },
                        getTileJSON: function() {
                            return this._tilejson
                        },
                        getTileUrl: function(t) {
                            var e = this.options.tiles
                              , i = Math.floor(Math.abs(t.x + t.y) % e.length)
                              , n = e[i]
                              , o = L.Util.template(n, t);
                            return o ? o.replace(".png", (L.Browser.retina ? this.scalePrefix : ".") + this.options.format) : o
                        },
                        _update: function() {
                            this.options.tiles && L.TileLayer.prototype._update.call(this)
                        }
                    });
                    e.exports.TileLayer = o,
                    e.exports.tileLayer = function(t, e) {
                        return new o(t,e)
                    }
                }
                , {
                    "./load_tilejson": 18,
                    "./util": 28
                }],
                27: [function(t, e, i) {
                    "use strict";
                    var n = t("./config")
                      , o = t("../package.json").version;
                    e.exports = function(t, e) {
                        if (e = e || L.mapbox.accessToken,
                        !e && n.REQUIRE_ACCESS_TOKEN)
                            throw new Error("An API access token is required to use Mapbox.js. See https://www.mapbox.com/mapbox.js/api/v" + o + "/api-access-tokens/");
                        var i = "https:" === document.location.protocol || n.FORCE_HTTPS ? n.HTTPS_URL : n.HTTP_URL;
                        if (i += t,
                        i += -1 !== i.indexOf("?") ? "&access_token=" : "?access_token=",
                        n.REQUIRE_ACCESS_TOKEN) {
                            if ("s" === e[0])
                                throw new Error("Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). See https://www.mapbox.com/mapbox.js/api/v" + o + "/api-access-tokens/");
                            i += e
                        }
                        return i
                    }
                    ,
                    e.exports.tileJSON = function(t, i) {
                        if (-1 !== t.indexOf("/"))
                            return t;
                        var n = e.exports("/" + t + ".json", i);
                        return 0 === n.indexOf("https") && (n += "&secure"),
                        n
                    }
                }
                , {
                    "../package.json": 6,
                    "./config": 7
                }],
                28: [function(t, e, i) {
                    "use strict";
                    function n(t, e) {
                        if (!e || !e.length)
                            return !1;
                        for (var i = 0; i < e.length; i++)
                            if (e[i] == t)
                                return !0;
                        return !1
                    }
                    e.exports = {
                        idUrl: function(t, e) {
                            -1 == t.indexOf("/") ? e.loadID(t) : e.loadURL(t)
                        },
                        log: function(t) {
                            "object" == typeof console && "function" == typeof console.error && console.error(t)
                        },
                        strict: function(t, e) {
                            if (typeof t !== e)
                                throw new Error("Invalid argument: " + e + " expected")
                        },
                        strict_instance: function(t, e, i) {
                            if (!(t instanceof e))
                                throw new Error("Invalid argument: " + i + " expected")
                        },
                        strict_oneof: function(t, e) {
                            if (!n(t, e))
                                throw new Error("Invalid argument: " + t + " given, valid values are " + e.join(", "))
                        },
                        strip_tags: function(t) {
                            return t.replace(/<[^<]+>/g, "")
                        },
                        lbounds: function(t) {
                            return new L.LatLngBounds([[t[1], t[0]], [t[3], t[2]]])
                        }
                    }
                }
                , {}]
            }, {}, [14])
        }
        ).call(window)
    },
    314: function(t, e, i) {
        var t = void 0
          , n = void 0
          , e = void 0;
        (function() {
            "use strict";
            var t = i(162);
            L.Control.CustomMapZoomControl = L.Control.Zoom.extend({
                options: {
                    position: "bottomright",
                    rightMostPoint: 515
                },
                _getZoomLatLng: function e() {
                    var e = this._map
                      , i = this.options.rightMostPoint / 2
                      , n = t.width / 2 + i
                      , o = t.height / 2
                      , s = L.point(n, o)
                      , r = e.containerPointToLatLng(s);
                    return r
                },
                _zoomIn: function n(t) {
                    var e = this._map
                      , i = e.getZoom();
                    if (!(i >= e.getMaxZoom())) {
                        var n = this._getZoomLatLng();
                        i += t.shiftKey ? 3 : 1,
                        e.setZoomAround(n, i)
                    }
                },
                _zoomOut: function o(t) {
                    var e = this._map
                      , i = e.getZoom();
                    if (!(i <= e.getMinZoom())) {
                        var n = this._getZoomLatLng();
                        i -= t.shiftKey ? 3 : 1,
                        e.setZoomAround(n, i)
                    }
                }
            }),
            L.control.customMapZoomControl = function(t) {
                return new L.Control.CustomMapZoomControl(t)
            }
        }
        ).call(window)
    },
    315: function(t, e) {
        var t = void 0
          , i = void 0
          , n = void 0
          , e = void 0;
        (function() {
            !function(t, e, i) {
                L.MarkerClusterGroup = L.FeatureGroup.extend({
                    options: {
                        maxClusterRadius: 80,
                        iconCreateFunction: null ,
                        spiderfyOnMaxZoom: !0,
                        showCoverageOnHover: !0,
                        zoomToBoundsOnClick: !0,
                        singleMarkerMode: !1,
                        disableClusteringAtZoom: null ,
                        removeOutsideVisibleBounds: !0,
                        animateAddingMarkers: !1,
                        spiderfyDistanceMultiplier: 1,
                        chunkedLoading: !1,
                        chunkInterval: 200,
                        chunkDelay: 50,
                        chunkProgress: null ,
                        polygonOptions: {}
                    },
                    initialize: function(t) {
                        L.Util.setOptions(this, t),
                        this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction),
                        this._featureGroup = L.featureGroup(),
                        this._featureGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this),
                        this._nonPointGroup = L.featureGroup(),
                        this._nonPointGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this),
                        this._inZoomAnimation = 0,
                        this._needsClustering = [],
                        this._needsRemoving = [],
                        this._currentShownBounds = null ,
                        this._queue = []
                    },
                    addLayer: function(t) {
                        if (t instanceof L.LayerGroup) {
                            var e = [];
                            for (var i in t._layers)
                                e.push(t._layers[i]);
                            return this.addLayers(e)
                        }
                        if (!t.getLatLng)
                            return this._nonPointGroup.addLayer(t),
                            this;
                        if (!this._map)
                            return this._needsClustering.push(t),
                            this;
                        if (this.hasLayer(t))
                            return this;
                        this._unspiderfy && this._unspiderfy(),
                        this._addLayer(t, this._maxZoom);
                        var n = t
                          , o = this._map.getZoom();
                        if (t.__parent)
                            for (; n.__parent._zoom >= o; )
                                n = n.__parent;
                        return this._currentShownBounds.contains(n.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, n) : this._animationAddLayerNonAnimated(t, n)),
                        this
                    },
                    removeLayer: function(t) {
                        if (t instanceof L.LayerGroup) {
                            var e = [];
                            for (var i in t._layers)
                                e.push(t._layers[i]);
                            return this.removeLayers(e)
                        }
                        return t.getLatLng ? this._map ? t.__parent ? (this._unspiderfy && (this._unspiderfy(),
                        this._unspiderfyLayer(t)),
                        this._removeLayer(t, !0),
                        this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t),
                        t.setOpacity && t.setOpacity(1)),
                        this) : this : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push(t),
                        this) : (this._nonPointGroup.removeLayer(t),
                        this)
                    },
                    addLayers: function(t) {
                        var e = this._featureGroup, i = this._nonPointGroup, n = this.options.chunkedLoading, o = this.options.chunkInterval, s = this.options.chunkProgress, r, a, l, h;
                        if (this._map) {
                            var u = 0
                              , c = (new Date).getTime()
                              , p = L.bind(function() {
                                for (var r = (new Date).getTime(); u < t.length; u++) {
                                    if (n && u % 200 === 0) {
                                        var a = (new Date).getTime() - r;
                                        if (a > o)
                                            break
                                    }
                                    if (h = t[u],
                                    h.getLatLng) {
                                        if (!this.hasLayer(h) && (this._addLayer(h, this._maxZoom),
                                        h.__parent && 2 === h.__parent.getChildCount())) {
                                            var l = h.__parent.getAllChildMarkers()
                                              , d = l[0] === h ? l[1] : l[0];
                                            e.removeLayer(d)
                                        }
                                    } else
                                        i.addLayer(h)
                                }
                                s && s(u, t.length, (new Date).getTime() - c),
                                u === t.length ? (this._featureGroup.eachLayer(function(t) {
                                    t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon()
                                }),
                                this._topClusterLevel._recursivelyAddChildrenToMap(null , this._zoom, this._currentShownBounds)) : setTimeout(p, this.options.chunkDelay)
                            }, this);
                            p()
                        } else {
                            for (r = [],
                            a = 0,
                            l = t.length; l > a; a++)
                                h = t[a],
                                h.getLatLng ? this.hasLayer(h) || r.push(h) : i.addLayer(h);
                            this._needsClustering = this._needsClustering.concat(r)
                        }
                        return this
                    },
                    removeLayers: function(t) {
                        var e, i, n, o = this._featureGroup, s = this._nonPointGroup;
                        if (!this._map) {
                            for (e = 0,
                            i = t.length; i > e; e++)
                                n = t[e],
                                this._arraySplice(this._needsClustering, n),
                                s.removeLayer(n);
                            return this
                        }
                        for (e = 0,
                        i = t.length; i > e; e++)
                            n = t[e],
                            n.__parent ? (this._removeLayer(n, !0, !0),
                            o.hasLayer(n) && (o.removeLayer(n),
                            n.setOpacity && n.setOpacity(1))) : s.removeLayer(n);
                        return this._topClusterLevel._recursivelyAddChildrenToMap(null , this._zoom, this._currentShownBounds),
                        o.eachLayer(function(t) {
                            t instanceof L.MarkerCluster && t._updateIcon()
                        }),
                        this
                    },
                    clearLayers: function() {
                        return this._map || (this._needsClustering = [],
                        delete this._gridClusters,
                        delete this._gridUnclustered),
                        this._noanimationUnspiderfy && this._noanimationUnspiderfy(),
                        this._featureGroup.clearLayers(),
                        this._nonPointGroup.clearLayers(),
                        this.eachLayer(function(t) {
                            delete t.__parent
                        }),
                        this._map && this._generateInitialClusters(),
                        this
                    },
                    getBounds: function() {
                        var t = new L.LatLngBounds;
                        this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
                        for (var e = this._needsClustering.length - 1; e >= 0; e--)
                            t.extend(this._needsClustering[e].getLatLng());
                        return t.extend(this._nonPointGroup.getBounds()),
                        t
                    },
                    eachLayer: function(t, e) {
                        var i = this._needsClustering.slice(), n;
                        for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(i),
                        n = i.length - 1; n >= 0; n--)
                            t.call(e, i[n]);
                        this._nonPointGroup.eachLayer(t, e)
                    },
                    getLayers: function() {
                        var t = [];
                        return this.eachLayer(function(e) {
                            t.push(e)
                        }),
                        t
                    },
                    getLayer: function(t) {
                        var e = null ;
                        return this.eachLayer(function(i) {
                            L.stamp(i) === t && (e = i)
                        }),
                        e
                    },
                    hasLayer: function(t) {
                        if (!t)
                            return !1;
                        var e, i = this._needsClustering;
                        for (e = i.length - 1; e >= 0; e--)
                            if (i[e] === t)
                                return !0;
                        for (i = this._needsRemoving,
                        e = i.length - 1; e >= 0; e--)
                            if (i[e] === t)
                                return !1;
                        return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t)
                    },
                    zoomToShowLayer: function(t, e) {
                        var i = function() {
                            if ((t._icon || t.__parent._icon) && !this._inZoomAnimation)
                                if (this._map.off("moveend", i, this),
                                this.off("animationend", i, this),
                                t._icon)
                                    e();
                                else if (t.__parent._icon) {
                                    var n = function() {
                                        this.off("spiderfied", n, this),
                                        e()
                                    }
                                    ;
                                    this.on("spiderfied", n, this),
                                    t.__parent.spiderfy()
                                }
                        }
                        ;
                        t._icon && this._map.getBounds().contains(t.getLatLng()) ? e() : t.__parent._zoom < this._map.getZoom() ? (this._map.on("moveend", i, this),
                        this._map.panTo(t.getLatLng())) : (this._map.on("moveend", i, this),
                        this.on("animationend", i, this),
                        this._map.setView(t.getLatLng(), t.__parent._zoom + 1),
                        t.__parent.zoomToBounds())
                    },
                    onAdd: function(t) {
                        this._map = t;
                        var e, i, n;
                        if (!isFinite(this._map.getMaxZoom()))
                            throw "Map has no maxZoom specified";
                        for (this._featureGroup.onAdd(t),
                        this._nonPointGroup.onAdd(t),
                        this._gridClusters || this._generateInitialClusters(),
                        e = 0,
                        i = this._needsRemoving.length; i > e; e++)
                            n = this._needsRemoving[e],
                            this._removeLayer(n, !0);
                        this._needsRemoving = [],
                        this._zoom = this._map.getZoom(),
                        this._currentShownBounds = this._getExpandedVisibleBounds(),
                        this._map.on("zoomend", this._zoomEnd, this),
                        this._map.on("moveend", this._moveEnd, this),
                        this._spiderfierOnAdd && this._spiderfierOnAdd(),
                        this._bindEvents(),
                        i = this._needsClustering,
                        this._needsClustering = [],
                        this.addLayers(i)
                    },
                    onRemove: function(t) {
                        t.off("zoomend", this._zoomEnd, this),
                        t.off("moveend", this._moveEnd, this),
                        this._unbindEvents(),
                        this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""),
                        this._spiderfierOnRemove && this._spiderfierOnRemove(),
                        this._hideCoverage(),
                        this._featureGroup.onRemove(t),
                        this._nonPointGroup.onRemove(t),
                        this._featureGroup.clearLayers(),
                        this._map = null
                    },
                    getVisibleParent: function(t) {
                        for (var e = t; e && !e._icon; )
                            e = e.__parent;
                        return e || null
                    },
                    _arraySplice: function(t, e) {
                        for (var i = t.length - 1; i >= 0; i--)
                            if (t[i] === e)
                                return t.splice(i, 1),
                                !0
                    },
                    _removeLayer: function(t, e, i) {
                        var n = this._gridClusters
                          , o = this._gridUnclustered
                          , s = this._featureGroup
                          , r = this._map;
                        if (e)
                            for (var a = this._maxZoom; a >= 0 && o[a].removeObject(t, r.project(t.getLatLng(), a)); a--)
                                ;
                        var l = t.__parent, h = l._markers, u;
                        for (this._arraySplice(h, t); l && (l._childCount--,
                        !(l._zoom < 0)); )
                            e && l._childCount <= 1 ? (u = l._markers[0] === t ? l._markers[1] : l._markers[0],
                            n[l._zoom].removeObject(l, r.project(l._cLatLng, l._zoom)),
                            o[l._zoom].addObject(u, r.project(u.getLatLng(), l._zoom)),
                            this._arraySplice(l.__parent._childClusters, l),
                            l.__parent._markers.push(u),
                            u.__parent = l.__parent,
                            l._icon && (s.removeLayer(l),
                            i || s.addLayer(u))) : (l._recalculateBounds(),
                            i && l._icon || l._updateIcon()),
                            l = l.__parent;
                        delete t.__parent
                    },
                    _isOrIsParent: function(t, e) {
                        for (; e; ) {
                            if (t === e)
                                return !0;
                            e = e.parentNode
                        }
                        return !1
                    },
                    _propagateEvent: function(t) {
                        if (t.layer instanceof L.MarkerCluster) {
                            if (t.originalEvent && this._isOrIsParent(t.layer._icon, t.originalEvent.relatedTarget))
                                return;
                            t.type = "cluster" + t.type
                        }
                        this.fire(t.type, t)
                    },
                    _defaultIconCreateFunction: function(t) {
                        var e = t.getChildCount()
                          , i = " marker-cluster-";
                        return i += 10 > e ? "small" : 100 > e ? "medium" : "large",
                        new L.DivIcon({
                            html: "<div><span>" + e + "</span></div>",
                            className: "marker-cluster" + i,
                            iconSize: new L.Point(40,40)
                        })
                    },
                    _bindEvents: function() {
                        var t = this._map
                          , e = this.options.spiderfyOnMaxZoom
                          , i = this.options.showCoverageOnHover
                          , n = this.options.zoomToBoundsOnClick;
                        (e || n) && this.on("clusterclick", this._zoomOrSpiderfy, this),
                        i && (this.on("clustermouseover", this._showCoverage, this),
                        this.on("clustermouseout", this._hideCoverage, this),
                        t.on("zoomend", this._hideCoverage, this))
                    },
                    _zoomOrSpiderfy: function(t) {
                        var e = this._map;
                        e.getMaxZoom() === e.getZoom() ? this.options.spiderfyOnMaxZoom && t.layer.spiderfy() : this.options.zoomToBoundsOnClick && t.layer.zoomToBounds(),
                        t.originalEvent && 13 === t.originalEvent.keyCode && e._container.focus()
                    },
                    _showCoverage: function(t) {
                        var e = this._map;
                        this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon),
                        t.layer.getChildCount() > 2 && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(),this.options.polygonOptions),
                        e.addLayer(this._shownPolygon)))
                    },
                    _hideCoverage: function() {
                        this._shownPolygon && (this._map.removeLayer(this._shownPolygon),
                        this._shownPolygon = null )
                    },
                    _unbindEvents: function() {
                        var t = this.options.spiderfyOnMaxZoom
                          , e = this.options.showCoverageOnHover
                          , i = this.options.zoomToBoundsOnClick
                          , n = this._map;
                        (t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this),
                        e && (this.off("clustermouseover", this._showCoverage, this),
                        this.off("clustermouseout", this._hideCoverage, this),
                        n.off("zoomend", this._hideCoverage, this))
                    },
                    _zoomEnd: function() {
                        this._map && (this._mergeSplitClusters(),
                        this._zoom = this._map._zoom,
                        this._currentShownBounds = this._getExpandedVisibleBounds())
                    },
                    _moveEnd: function() {
                        if (!this._inZoomAnimation) {
                            var t = this._getExpandedVisibleBounds();
                            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, t),
                            this._topClusterLevel._recursivelyAddChildrenToMap(null , this._map._zoom, t),
                            this._currentShownBounds = t
                        }
                    },
                    _generateInitialClusters: function() {
                        var t = this._map.getMaxZoom()
                          , e = this.options.maxClusterRadius
                          , i = e;
                        "function" != typeof e && (i = function() {
                            return e
                        }
                        ),
                        this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1),
                        this._maxZoom = t,
                        this._gridClusters = {},
                        this._gridUnclustered = {};
                        for (var n = t; n >= 0; n--)
                            this._gridClusters[n] = new L.DistanceGrid(i(n)),
                            this._gridUnclustered[n] = new L.DistanceGrid(i(n));
                        this._topClusterLevel = new L.MarkerCluster(this,-1)
                    },
                    _addLayer: function(t, e) {
                        var i = this._gridClusters, n = this._gridUnclustered, o, s;
                        for (this.options.singleMarkerMode && (t.options.icon = this.options.iconCreateFunction({
                            getChildCount: function() {
                                return 1
                            },
                            getAllChildMarkers: function() {
                                return [t]
                            }
                        })); e >= 0; e--) {
                            o = this._map.project(t.getLatLng(), e);
                            var r = i[e].getNearObject(o);
                            if (r)
                                return r._addChild(t),
                                void (t.__parent = r);
                            if (r = n[e].getNearObject(o)) {
                                var a = r.__parent;
                                a && this._removeLayer(r, !1);
                                var l = new L.MarkerCluster(this,e,r,t);
                                i[e].addObject(l, this._map.project(l._cLatLng, e)),
                                r.__parent = l,
                                t.__parent = l;
                                var h = l;
                                for (s = e - 1; s > a._zoom; s--)
                                    h = new L.MarkerCluster(this,s,h),
                                    i[s].addObject(h, this._map.project(r.getLatLng(), s));
                                for (a._addChild(h),
                                s = e; s >= 0 && n[s].removeObject(r, this._map.project(r.getLatLng(), s)); s--)
                                    ;
                                return
                            }
                            n[e].addObject(t, o)
                        }
                        this._topClusterLevel._addChild(t),
                        t.__parent = this._topClusterLevel
                    },
                    _enqueue: function(t) {
                        this._queue.push(t),
                        this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300))
                    },
                    _processQueue: function() {
                        for (var t = 0; t < this._queue.length; t++)
                            this._queue[t].call(this);
                        this._queue.length = 0,
                        clearTimeout(this._queueTimeout),
                        this._queueTimeout = null
                    },
                    _mergeSplitClusters: function() {
                        this._processQueue(),
                        this._zoom < this._map._zoom && this._currentShownBounds.contains(this._getExpandedVisibleBounds()) ? (this._animationStart(),
                        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, this._getExpandedVisibleBounds()),
                        this._animationZoomIn(this._zoom, this._map._zoom)) : this._zoom > this._map._zoom ? (this._animationStart(),
                        this._animationZoomOut(this._zoom, this._map._zoom)) : this._moveEnd()
                    },
                    _getExpandedVisibleBounds: function() {
                        if (!this.options.removeOutsideVisibleBounds)
                            return this.getBounds();
                        var t = this._map
                          , e = t.getBounds()
                          , i = e._southWest
                          , n = e._northEast
                          , o = L.Browser.mobile ? 0 : Math.abs(i.lat - n.lat)
                          , s = L.Browser.mobile ? 0 : Math.abs(i.lng - n.lng);
                        return new L.LatLngBounds(new L.LatLng(i.lat - o,i.lng - s,!0),new L.LatLng(n.lat + o,n.lng + s,!0))
                    },
                    _animationAddLayerNonAnimated: function(t, e) {
                        if (e === t)
                            this._featureGroup.addLayer(t);
                        else if (2 === e._childCount) {
                            e._addToMap();
                            var i = e.getAllChildMarkers();
                            this._featureGroup.removeLayer(i[0]),
                            this._featureGroup.removeLayer(i[1])
                        } else
                            e._updateIcon()
                    }
                }),
                L.MarkerClusterGroup.include(L.DomUtil.TRANSITION ? {
                    _animationStart: function() {
                        this._map._mapPane.className += " leaflet-cluster-anim",
                        this._inZoomAnimation++
                    },
                    _animationEnd: function() {
                        this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")),
                        this._inZoomAnimation--,
                        this.fire("animationend")
                    },
                    _animationZoomIn: function(t, e) {
                        var i = this._getExpandedVisibleBounds(), n = this._featureGroup, o;
                        this._topClusterLevel._recursively(i, t, 0, function(s) {
                            var r = s._latlng, a = s._markers, l;
                            for (i.contains(r) || (r = null ),
                            s._isSingleParent() && t + 1 === e ? (n.removeLayer(s),
                            s._recursivelyAddChildrenToMap(null , e, i)) : (s.setOpacity(0),
                            s._recursivelyAddChildrenToMap(r, e, i)),
                            o = a.length - 1; o >= 0; o--)
                                l = a[o],
                                i.contains(l._latlng) || n.removeLayer(l)
                        }),
                        this._forceLayout(),
                        this._topClusterLevel._recursivelyBecomeVisible(i, e),
                        n.eachLayer(function(t) {
                            t instanceof L.MarkerCluster || !t._icon || t.setOpacity(1)
                        }),
                        this._topClusterLevel._recursively(i, t, e, function(t) {
                            t._recursivelyRestoreChildPositions(e)
                        }),
                        this._enqueue(function() {
                            this._topClusterLevel._recursively(i, t, 0, function(t) {
                                n.removeLayer(t),
                                t.setOpacity(1)
                            }),
                            this._animationEnd()
                        })
                    },
                    _animationZoomOut: function(t, e) {
                        this._animationZoomOutSingle(this._topClusterLevel, t - 1, e),
                        this._topClusterLevel._recursivelyAddChildrenToMap(null , e, this._getExpandedVisibleBounds()),
                        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t, this._getExpandedVisibleBounds())
                    },
                    _animationZoomOutSingle: function(t, e, i) {
                        var n = this._getExpandedVisibleBounds();
                        t._recursivelyAnimateChildrenInAndAddSelfToMap(n, e + 1, i);
                        var o = this;
                        this._forceLayout(),
                        t._recursivelyBecomeVisible(n, i),
                        this._enqueue(function() {
                            if (1 === t._childCount) {
                                var s = t._markers[0];
                                s.setLatLng(s.getLatLng()),
                                s.setOpacity && s.setOpacity(1)
                            } else
                                t._recursively(n, i, 0, function(t) {
                                    t._recursivelyRemoveChildrenFromMap(n, e + 1)
                                });
                            o._animationEnd()
                        })
                    },
                    _animationAddLayer: function(t, e) {
                        var i = this
                          , n = this._featureGroup;
                        n.addLayer(t),
                        e !== t && (e._childCount > 2 ? (e._updateIcon(),
                        this._forceLayout(),
                        this._animationStart(),
                        t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),
                        t.setOpacity(0),
                        this._enqueue(function() {
                            n.removeLayer(t),
                            t.setOpacity(1),
                            i._animationEnd()
                        })) : (this._forceLayout(),
                        i._animationStart(),
                        i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._map.getZoom())))
                    },
                    _forceLayout: function() {
                        L.Util.falseFn(e.body.offsetWidth)
                    }
                } : {
                    _animationStart: function() {},
                    _animationZoomIn: function(t, e) {
                        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t),
                        this._topClusterLevel._recursivelyAddChildrenToMap(null , e, this._getExpandedVisibleBounds()),
                        this.fire("animationend")
                    },
                    _animationZoomOut: function(t, e) {
                        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t),
                        this._topClusterLevel._recursivelyAddChildrenToMap(null , e, this._getExpandedVisibleBounds()),
                        this.fire("animationend")
                    },
                    _animationAddLayer: function(t, e) {
                        this._animationAddLayerNonAnimated(t, e)
                    }
                }),
                L.markerClusterGroup = function(t) {
                    return new L.MarkerClusterGroup(t)
                }
                ,
                L.MarkerCluster = L.Marker.extend({
                    initialize: function(t, e, i, n) {
                        L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0,0), {
                            icon: this
                        }),
                        this._group = t,
                        this._zoom = e,
                        this._markers = [],
                        this._childClusters = [],
                        this._childCount = 0,
                        this._iconNeedsUpdate = !0,
                        this._bounds = new L.LatLngBounds,
                        i && this._addChild(i),
                        n && this._addChild(n)
                    },
                    getAllChildMarkers: function(t) {
                        t = t || [];
                        for (var e = this._childClusters.length - 1; e >= 0; e--)
                            this._childClusters[e].getAllChildMarkers(t);
                        for (var i = this._markers.length - 1; i >= 0; i--)
                            t.push(this._markers[i]);
                        return t
                    },
                    getChildCount: function() {
                        return this._childCount
                    },
                    zoomToBounds: function() {
                        for (var t = this._childClusters.slice(), e = this._group._map, i = e.getBoundsZoom(this._bounds), n = this._zoom + 1, o = e.getZoom(), s; t.length > 0 && i > n; ) {
                            n++;
                            var r = [];
                            for (s = 0; s < t.length; s++)
                                r = r.concat(t[s]._childClusters);
                            t = r
                        }
                        if (e.options.isMobile)
                            i > n ? this._group._map.setView(this._latlng, n) : o >= i ? this._group._map.setView(this._latlng, o + 1) : this._group._map.fitBounds(this._bounds);
                        else {
                            var a = this._group.options.mapModule;
                            e = a.map;
                            var l = a.getSafeZonePaddingTopLeft()
                              , h = a.getSafeZonePaddingBottomRight();
                            i > n ? this._group._map.fitBounds(this._bounds, {
                                paddingTopLeft: l,
                                paddingBottomRight: h
                            }) : o >= i ? this._group._map.setView(this._latlng, o + 1) : this._group._map.fitBounds(this._bounds, {
                                paddingTopLeft: l,
                                paddingBottomRight: h
                            })
                        }
                    },
                    getBounds: function() {
                        var t = new L.LatLngBounds;
                        return t.extend(this._bounds),
                        t
                    },
                    _updateIcon: function() {
                        this._iconNeedsUpdate = !0,
                        this._icon && this.setIcon(this)
                    },
                    createIcon: function() {
                        return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this),
                        this._iconNeedsUpdate = !1),
                        this._iconObj.createIcon()
                    },
                    createShadow: function() {
                        return this._iconObj.createShadow()
                    },
                    _addChild: function(t, e) {
                        this._iconNeedsUpdate = !0,
                        this._expandBounds(t),
                        t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t),
                        t.__parent = this),
                        this._childCount += t._childCount) : (e || this._markers.push(t),
                        this._childCount++),
                        this.__parent && this.__parent._addChild(t, !0)
                    },
                    _expandBounds: function(t) {
                        var e, i = t._wLatLng || t._latlng;
                        t instanceof L.MarkerCluster ? (this._bounds.extend(t._bounds),
                        e = t._childCount) : (this._bounds.extend(i),
                        e = 1),
                        this._cLatLng || (this._cLatLng = t._cLatLng || i);
                        var n = this._childCount + e;
                        this._wLatLng ? (this._wLatLng.lat = (i.lat * e + this._wLatLng.lat * this._childCount) / n,
                        this._wLatLng.lng = (i.lng * e + this._wLatLng.lng * this._childCount) / n) : this._latlng = this._wLatLng = new L.LatLng(i.lat,i.lng)
                    },
                    _addToMap: function(t) {
                        t && (this._backupLatlng = this._latlng,
                        this.setLatLng(t)),
                        this._group._featureGroup.addLayer(this)
                    },
                    _recursivelyAnimateChildrenIn: function(t, e, i) {
                        this._recursively(t, 0, i - 1, function(t) {
                            var i = t._markers, n, o;
                            for (n = i.length - 1; n >= 0; n--)
                                o = i[n],
                                o._icon && (o._setPos(e),
                                o.setOpacity(0))
                        }, function(t) {
                            var i = t._childClusters, n, o;
                            for (n = i.length - 1; n >= 0; n--)
                                o = i[n],
                                o._icon && (o._setPos(e),
                                o.setOpacity(0))
                        })
                    },
                    _recursivelyAnimateChildrenInAndAddSelfToMap: function(t, e, i) {
                        this._recursively(t, i, 0, function(n) {
                            n._recursivelyAnimateChildrenIn(t, n._group._map.latLngToLayerPoint(n.getLatLng()).round(), e),
                            n._isSingleParent() && e - 1 === i ? (n.setOpacity(1),
                            n._recursivelyRemoveChildrenFromMap(t, e)) : n.setOpacity(0),
                            n._addToMap()
                        })
                    },
                    _recursivelyBecomeVisible: function(t, e) {
                        this._recursively(t, 0, e, null , function(t) {
                            t.setOpacity(1)
                        })
                    },
                    _recursivelyAddChildrenToMap: function(t, e, i) {
                        this._recursively(i, -1, e, function(n) {
                            if (e !== n._zoom)
                                for (var o = n._markers.length - 1; o >= 0; o--) {
                                    var s = n._markers[o];
                                    i.contains(s._latlng) && (t && (s._backupLatlng = s.getLatLng(),
                                    s.setLatLng(t),
                                    s.setOpacity && s.setOpacity(0)),
                                    n._group._featureGroup.addLayer(s))
                                }
                        }, function(e) {
                            e._addToMap(t)
                        })
                    },
                    _recursivelyRestoreChildPositions: function(t) {
                        for (var e = this._markers.length - 1; e >= 0; e--) {
                            var i = this._markers[e];
                            i._backupLatlng && (i.setLatLng(i._backupLatlng),
                            delete i._backupLatlng)
                        }
                        if (t - 1 === this._zoom)
                            for (var n = this._childClusters.length - 1; n >= 0; n--)
                                this._childClusters[n]._restorePosition();
                        else
                            for (var o = this._childClusters.length - 1; o >= 0; o--)
                                this._childClusters[o]._recursivelyRestoreChildPositions(t)
                    },
                    _restorePosition: function() {
                        this._backupLatlng && (this.setLatLng(this._backupLatlng),
                        delete this._backupLatlng)
                    },
                    _recursivelyRemoveChildrenFromMap: function(t, e, i) {
                        var n, o;
                        this._recursively(t, -1, e - 1, function(t) {
                            for (o = t._markers.length - 1; o >= 0; o--)
                                n = t._markers[o],
                                i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n),
                                n.setOpacity && n.setOpacity(1))
                        }, function(t) {
                            for (o = t._childClusters.length - 1; o >= 0; o--)
                                n = t._childClusters[o],
                                i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n),
                                n.setOpacity && n.setOpacity(1))
                        })
                    },
                    _recursively: function(t, e, i, n, o) {
                        var s = this._childClusters, r = this._zoom, a, l;
                        if (e > r)
                            for (a = s.length - 1; a >= 0; a--)
                                l = s[a],
                                t.intersects(l._bounds) && l._recursively(t, e, i, n, o);
                        else if (n && n(this),
                        o && this._zoom === i && o(this),
                        i > r)
                            for (a = s.length - 1; a >= 0; a--)
                                l = s[a],
                                t.intersects(l._bounds) && l._recursively(t, e, i, n, o)
                    },
                    _recalculateBounds: function() {
                        var t = this._markers, e = this._childClusters, i;
                        for (this._bounds = new L.LatLngBounds,
                        delete this._wLatLng,
                        i = t.length - 1; i >= 0; i--)
                            this._expandBounds(t[i]);
                        for (i = e.length - 1; i >= 0; i--)
                            this._expandBounds(e[i])
                    },
                    _isSingleParent: function() {
                        return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount
                    }
                }),
                L.DistanceGrid = function(t) {
                    this._cellSize = t,
                    this._sqCellSize = t * t,
                    this._grid = {},
                    this._objectPoint = {}
                }
                ,
                L.DistanceGrid.prototype = {
                    addObject: function(t, e) {
                        var i = this._getCoord(e.x)
                          , n = this._getCoord(e.y)
                          , o = this._grid
                          , s = o[n] = o[n] || {}
                          , r = s[i] = s[i] || []
                          , a = L.Util.stamp(t);
                        this._objectPoint[a] = e,
                        r.push(t)
                    },
                    updateObject: function(t, e) {
                        this.removeObject(t),
                        this.addObject(t, e)
                    },
                    removeObject: function(t, e) {
                        var i = this._getCoord(e.x), n = this._getCoord(e.y), o = this._grid, s = o[n] = o[n] || {}, r = s[i] = s[i] || [], a, l;
                        for (delete this._objectPoint[L.Util.stamp(t)],
                        a = 0,
                        l = r.length; l > a; a++)
                            if (r[a] === t)
                                return r.splice(a, 1),
                                1 === l && delete s[i],
                                !0
                    },
                    eachObject: function(t, e) {
                        var i, n, o, s, r, a, l, h = this._grid;
                        for (i in h) {
                            r = h[i];
                            for (n in r)
                                for (a = r[n],
                                o = 0,
                                s = a.length; s > o; o++)
                                    l = t.call(e, a[o]),
                                    l && (o--,
                                    s--)
                        }
                    },
                    getNearObject: function(t) {
                        var e = this._getCoord(t.x), i = this._getCoord(t.y), n, o, s, r, a, l, h, u, c = this._objectPoint, p = this._sqCellSize, d = null ;
                        for (n = i - 1; i + 1 >= n; n++)
                            if (r = this._grid[n])
                                for (o = e - 1; e + 1 >= o; o++)
                                    if (a = r[o])
                                        for (s = 0,
                                        l = a.length; l > s; s++)
                                            h = a[s],
                                            u = this._sqDist(c[L.Util.stamp(h)], t),
                                            p > u && (p = u,
                                            d = h);
                        return d
                    },
                    _getCoord: function(t) {
                        return Math.floor(t / this._cellSize)
                    },
                    _sqDist: function(t, e) {
                        var i = e.x - t.x
                          , n = e.y - t.y;
                        return i * i + n * n
                    }
                },
                function() {
                    L.QuickHull = {
                        getDistant: function(t, e) {
                            var i = e[1].lat - e[0].lat
                              , n = e[0].lng - e[1].lng;
                            return n * (t.lat - e[0].lat) + i * (t.lng - e[0].lng)
                        },
                        findMostDistantPointFromBaseLine: function(t, e) {
                            var i = 0, n = null , o = [], s, r, a;
                            for (s = e.length - 1; s >= 0; s--)
                                r = e[s],
                                a = this.getDistant(r, t),
                                a > 0 && (o.push(r),
                                a > i && (i = a,
                                n = r));
                            return {
                                maxPoint: n,
                                newPoints: o
                            }
                        },
                        buildConvexHull: function(t, e) {
                            var i = []
                              , n = this.findMostDistantPointFromBaseLine(t, e);
                            return n.maxPoint ? (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints)),
                            i = i.concat(this.buildConvexHull([n.maxPoint, t[1]], n.newPoints))) : [t[0]]
                        },
                        getConvexHull: function(t) {
                            var e = !1, i = !1, n = null , o = null , s;
                            for (s = t.length - 1; s >= 0; s--) {
                                var r = t[s];
                                (e === !1 || r.lat > e) && (n = r,
                                e = r.lat),
                                (i === !1 || r.lat < i) && (o = r,
                                i = r.lat)
                            }
                            var a = [].concat(this.buildConvexHull([o, n], t), this.buildConvexHull([n, o], t));
                            return a
                        }
                    }
                }(),
                L.MarkerCluster.include({
                    getConvexHull: function() {
                        var t = this.getAllChildMarkers(), e = [], i, n;
                        for (n = t.length - 1; n >= 0; n--)
                            i = t[n].getLatLng(),
                            e.push(i);
                        return L.QuickHull.getConvexHull(e)
                    }
                }),
                L.MarkerCluster.include({
                    _2PI: 2 * Math.PI,
                    _circleFootSeparation: 25,
                    _circleStartAngle: Math.PI / 6,
                    _spiralFootSeparation: 28,
                    _spiralLengthStart: 11,
                    _spiralLengthFactor: 5,
                    _circleSpiralSwitchover: 9,
                    spiderfy: function() {
                        if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                            var t = this.getAllChildMarkers(), e = this._group, i = e._map, n = i.latLngToLayerPoint(this._latlng), o;
                            this._group._unspiderfy(),
                            this._group._spiderfied = this,
                            t.length >= this._circleSpiralSwitchover ? o = this._generatePointsSpiral(t.length, n) : (n.y += 10,
                            o = this._generatePointsCircle(t.length, n)),
                            this._animationSpiderfy(t, o)
                        }
                    },
                    unspiderfy: function(t) {
                        this._group._inZoomAnimation || (this._animationUnspiderfy(t),
                        this._group._spiderfied = null )
                    },
                    _generatePointsCircle: function(t, e) {
                        var i = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t), n = i / this._2PI, o = this._2PI / t, s = [], r, a;
                        for (s.length = t,
                        r = t - 1; r >= 0; r--)
                            a = this._circleStartAngle + r * o,
                            s[r] = new L.Point(e.x + n * Math.cos(a),e.y + n * Math.sin(a))._round();
                        return s
                    },
                    _generatePointsSpiral: function(t, e) {
                        var i = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthStart, n = this._group.options.spiderfyDistanceMultiplier * this._spiralFootSeparation, o = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthFactor, s = 0, r = [], a;
                        for (r.length = t,
                        a = t - 1; a >= 0; a--)
                            s += n / i + 5e-4 * a,
                            r[a] = new L.Point(e.x + i * Math.cos(s),e.y + i * Math.sin(s))._round(),
                            i += this._2PI * o / s;
                        return r
                    },
                    _noanimationUnspiderfy: function() {
                        var t = this._group, e = t._map, i = t._featureGroup, n = this.getAllChildMarkers(), o, s;
                        for (this.setOpacity(1),
                        s = n.length - 1; s >= 0; s--)
                            o = n[s],
                            i.removeLayer(o),
                            o._preSpiderfyLatlng && (o.setLatLng(o._preSpiderfyLatlng),
                            delete o._preSpiderfyLatlng),
                            o.setZIndexOffset && o.setZIndexOffset(0),
                            o._spiderLeg && (e.removeLayer(o._spiderLeg),
                            delete o._spiderLeg);
                        t._spiderfied = null
                    }
                }),
                L.MarkerCluster.include(L.DomUtil.TRANSITION ? {
                    SVG_ANIMATION: function() {
                        return e.createElementNS("http://www.w3.org/2000/svg", "animate").toString().indexOf("SVGAnimate") > -1
                    }(),
                    _animationSpiderfy: function(t, i) {
                        var n = this, o = this._group, s = o._map, r = o._featureGroup, a = s.latLngToLayerPoint(this._latlng), l, h, u, c;
                        for (l = t.length - 1; l >= 0; l--)
                            h = t[l],
                            h.setOpacity ? (h.setZIndexOffset(1e6),
                            h.setOpacity(0),
                            r.addLayer(h),
                            h._setPos(a)) : r.addLayer(h);
                        o._forceLayout(),
                        o._animationStart();
                        var p = L.Path.SVG ? 0 : .3
                          , d = L.Path.SVG_NS;
                        for (l = t.length - 1; l >= 0; l--)
                            if (c = s.layerPointToLatLng(i[l]),
                            h = t[l],
                            h._preSpiderfyLatlng = h._latlng,
                            h.setLatLng(c),
                            h.setOpacity && h.setOpacity(1),
                            u = new L.Polyline([n._latlng, c],{
                                weight: 1.5,
                                color: "#222",
                                opacity: p
                            }),
                            s.addLayer(u),
                            h._spiderLeg = u,
                            L.Path.SVG && this.SVG_ANIMATION) {
                                var m = u._path.getTotalLength();
                                u._path.setAttribute("stroke-dasharray", m + "," + m);
                                var _ = e.createElementNS(d, "animate");
                                _.setAttribute("attributeName", "stroke-dashoffset"),
                                _.setAttribute("begin", "indefinite"),
                                _.setAttribute("from", m),
                                _.setAttribute("to", 0),
                                _.setAttribute("dur", .25),
                                u._path.appendChild(_),
                                _.beginElement(),
                                _ = e.createElementNS(d, "animate"),
                                _.setAttribute("attributeName", "stroke-opacity"),
                                _.setAttribute("attributeName", "stroke-opacity"),
                                _.setAttribute("begin", "indefinite"),
                                _.setAttribute("from", 0),
                                _.setAttribute("to", .5),
                                _.setAttribute("dur", .25),
                                u._path.appendChild(_),
                                _.beginElement()
                            }
                        if (n.setOpacity(.3),
                        L.Path.SVG)
                            for (this._group._forceLayout(),
                            l = t.length - 1; l >= 0; l--)
                                h = t[l]._spiderLeg,
                                h.options.opacity = .5,
                                h._path.setAttribute("stroke-opacity", .5);
                        setTimeout(function() {
                            o._animationEnd(),
                            o.fire("spiderfied")
                        }, 200)
                    },
                    _animationUnspiderfy: function(t) {
                        var e = this._group, i = e._map, n = e._featureGroup, o = t ? i._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : i.latLngToLayerPoint(this._latlng), s = this.getAllChildMarkers(), r = L.Path.SVG && this.SVG_ANIMATION, a, l, h;
                        for (e._animationStart(),
                        this.setOpacity(1),
                        l = s.length - 1; l >= 0; l--)
                            a = s[l],
                            a._preSpiderfyLatlng && (a.setLatLng(a._preSpiderfyLatlng),
                            delete a._preSpiderfyLatlng,
                            a.setOpacity ? (a._setPos(o),
                            a.setOpacity(0)) : n.removeLayer(a),
                            r && (h = a._spiderLeg._path.childNodes[0],
                            h.setAttribute("to", h.getAttribute("from")),
                            h.setAttribute("from", 0),
                            h.beginElement(),
                            h = a._spiderLeg._path.childNodes[1],
                            h.setAttribute("from", .5),
                            h.setAttribute("to", 0),
                            h.setAttribute("stroke-opacity", 0),
                            h.beginElement(),
                            a._spiderLeg._path.setAttribute("stroke-opacity", 0)));
                        setTimeout(function() {
                            var t = 0;
                            for (l = s.length - 1; l >= 0; l--)
                                a = s[l],
                                a._spiderLeg && t++;
                            for (l = s.length - 1; l >= 0; l--)
                                a = s[l],
                                a._spiderLeg && (a.setOpacity && (a.setOpacity(1),
                                a.setZIndexOffset(0)),
                                t > 1 && n.removeLayer(a),
                                i.removeLayer(a._spiderLeg),
                                delete a._spiderLeg);
                            e._animationEnd()
                        }, 200)
                    }
                } : {
                    _animationSpiderfy: function(t, e) {
                        var i = this._group, n = i._map, o = i._featureGroup, s, r, a, l;
                        for (s = t.length - 1; s >= 0; s--)
                            l = n.layerPointToLatLng(e[s]),
                            r = t[s],
                            r._preSpiderfyLatlng = r._latlng,
                            r.setLatLng(l),
                            r.setZIndexOffset && r.setZIndexOffset(1e6),
                            o.addLayer(r),
                            a = new L.Polyline([this._latlng, l],{
                                weight: 1.5,
                                color: "#222"
                            }),
                            n.addLayer(a),
                            r._spiderLeg = a;
                        this.setOpacity(.3),
                        i.fire("spiderfied")
                    },
                    _animationUnspiderfy: function() {
                        this._noanimationUnspiderfy()
                    }
                }),
                L.MarkerClusterGroup.include({
                    _spiderfied: null ,
                    _spiderfierOnAdd: function() {
                        this._map.on("click", this._unspiderfyWrapper, this),
                        this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this),
                        this._map.on("zoomend", this._noanimationUnspiderfy, this),
                        L.Path.SVG && !L.Browser.touch && this._map._initPathRoot()
                    },
                    _spiderfierOnRemove: function() {
                        this._map.off("click", this._unspiderfyWrapper, this),
                        this._map.off("zoomstart", this._unspiderfyZoomStart, this),
                        this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
                        this._unspiderfy()
                    },
                    _unspiderfyZoomStart: function() {
                        this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
                    },
                    _unspiderfyZoomAnim: function(t) {
                        L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
                        this._unspiderfy(t))
                    },
                    _unspiderfyWrapper: function() {
                        this._unspiderfy()
                    },
                    _unspiderfy: function(t) {
                        this._spiderfied && this._spiderfied.unspiderfy(t)
                    },
                    _noanimationUnspiderfy: function() {
                        this._spiderfied && this._spiderfied._noanimationUnspiderfy()
                    },
                    _unspiderfyLayer: function(t) {
                        t._spiderLeg && (this._featureGroup.removeLayer(t),
                        t.setOpacity(1),
                        t.setZIndexOffset(0),
                        this._map.removeLayer(t._spiderLeg),
                        delete t._spiderLeg)
                    }
                })
            }(window, document)
        }
        ).call(window)
    }
});
