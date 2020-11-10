// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"rellax.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (q, g) {
  "function" === typeof define && define.amd ? define([], g) : "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = g() : q.Rellax = g();
})("undefined" !== typeof window ? window : global, function () {
  var q = function q(g, u) {
    function C() {
      if (3 === a.options.breakpoints.length && Array.isArray(a.options.breakpoints)) {
        var f = !0,
            c = !0,
            b;
        a.options.breakpoints.forEach(function (a) {
          "number" !== typeof a && (c = !1);
          null !== b && a < b && (f = !1);
          b = a;
        });
        if (f && c) return;
      }

      a.options.breakpoints = [576, 768, 1201];
      console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
    }

    var a = Object.create(q.prototype),
        l = 0,
        v = 0,
        m = 0,
        n = 0,
        d = [],
        w = !0,
        A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (a) {
      return setTimeout(a, 1E3 / 60);
    },
        p = null,
        x = !1;

    try {
      var k = Object.defineProperty({}, "passive", {
        get: function get() {
          x = !0;
        }
      });
      window.addEventListener("testPassive", null, k);
      window.removeEventListener("testPassive", null, k);
    } catch (f) {}

    var D = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
        E = window.transformProp || function () {
      var a = document.createElement("div");

      if (null === a.style.transform) {
        var c = ["Webkit", "Moz", "ms"],
            b;

        for (b in c) {
          if (void 0 !== a.style[c[b] + "Transform"]) return c[b] + "Transform";
        }
      }

      return "transform";
    }();

    a.options = {
      speed: -2,
      verticalSpeed: null,
      horizontalSpeed: null,
      breakpoints: [576, 768, 1201],
      center: !1,
      wrapper: null,
      relativeToWrapper: !1,
      round: !0,
      vertical: !0,
      horizontal: !1,
      verticalScrollAxis: "y",
      horizontalScrollAxis: "x",
      callback: function callback() {}
    };
    u && Object.keys(u).forEach(function (d) {
      a.options[d] = u[d];
    });
    u && u.breakpoints && C();
    g || (g = ".rellax");
    k = "string" === typeof g ? document.querySelectorAll(g) : [g];

    if (0 < k.length) {
      a.elems = k;
      if (a.options.wrapper && !a.options.wrapper.nodeType) if (k = document.querySelector(a.options.wrapper)) a.options.wrapper = k;else {
        console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
        return;
      }

      var F,
          B = function B() {
        for (var f = 0; f < d.length; f++) {
          a.elems[f].style.cssText = d[f].style;
        }

        d = [];
        v = window.innerHeight;
        n = window.innerWidth;
        f = a.options.breakpoints;
        F = n < f[0] ? "xs" : n >= f[0] && n < f[1] ? "sm" : n >= f[1] && n < f[2] ? "md" : "lg";
        H();

        for (f = 0; f < a.elems.length; f++) {
          var c = void 0,
              b = a.elems[f],
              e = b.getAttribute("data-rellax-percentage"),
              y = b.getAttribute("data-rellax-speed"),
              t = b.getAttribute("data-rellax-xs-speed"),
              g = b.getAttribute("data-rellax-mobile-speed"),
              h = b.getAttribute("data-rellax-tablet-speed"),
              k = b.getAttribute("data-rellax-desktop-speed"),
              l = b.getAttribute("data-rellax-vertical-speed"),
              m = b.getAttribute("data-rellax-horizontal-speed"),
              p = b.getAttribute("data-rellax-vertical-scroll-axis"),
              q = b.getAttribute("data-rellax-horizontal-scroll-axis"),
              u = b.getAttribute("data-rellax-zindex") || 0,
              x = b.getAttribute("data-rellax-min"),
              A = b.getAttribute("data-rellax-max"),
              C = b.getAttribute("data-rellax-min-x"),
              D = b.getAttribute("data-rellax-max-x"),
              E = b.getAttribute("data-rellax-min-y"),
              L = b.getAttribute("data-rellax-max-y"),
              r = !0;
          t || g || h || k ? c = {
            xs: t,
            sm: g,
            md: h,
            lg: k
          } : r = !1;
          t = a.options.wrapper ? a.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          a.options.relativeToWrapper && (t = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - a.options.wrapper.offsetTop);
          var z = a.options.vertical ? e || a.options.center ? t : 0 : 0,
              I = a.options.horizontal ? e || a.options.center ? a.options.wrapper ? a.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
          t = z + b.getBoundingClientRect().top;
          g = b.clientHeight || b.offsetHeight || b.scrollHeight;
          h = I + b.getBoundingClientRect().left;
          k = b.clientWidth || b.offsetWidth || b.scrollWidth;
          z = e ? e : (z - t + v) / (g + v);
          e = e ? e : (I - h + n) / (k + n);
          a.options.center && (z = e = .5);
          c = r && null !== c[F] ? Number(c[F]) : y ? y : a.options.speed;
          l = l ? l : a.options.verticalSpeed;
          m = m ? m : a.options.horizontalSpeed;
          p = p ? p : a.options.verticalScrollAxis;
          q = q ? q : a.options.horizontalScrollAxis;
          y = J(e, z, c, l, m);
          b = b.style.cssText;
          r = "";
          if (e = /transform\s*:/i.exec(b)) r = b.slice(e.index), r = (e = r.indexOf(";")) ? " " + r.slice(11, e).replace(/\s/g, "") : " " + r.slice(11).replace(/\s/g, "");
          d.push({
            baseX: y.x,
            baseY: y.y,
            top: t,
            left: h,
            height: g,
            width: k,
            speed: c,
            verticalSpeed: l,
            horizontalSpeed: m,
            verticalScrollAxis: p,
            horizontalScrollAxis: q,
            style: b,
            transform: r,
            zindex: u,
            min: x,
            max: A,
            minX: C,
            maxX: D,
            minY: E,
            maxY: L
          });
        }

        K();
        w && (window.addEventListener("resize", B), w = !1, G());
      },
          H = function H() {
        var d = l,
            c = m;
        l = a.options.wrapper ? a.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
        m = a.options.wrapper ? a.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
        a.options.relativeToWrapper && (l = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - a.options.wrapper.offsetTop);
        return d != l && a.options.vertical || c != m && a.options.horizontal ? !0 : !1;
      },
          J = function J(d, c, b, e, g) {
        var f = {};
        d = 100 * (g ? g : b) * (1 - d);
        c = 100 * (e ? e : b) * (1 - c);
        f.x = a.options.round ? Math.round(d) : Math.round(100 * d) / 100;
        f.y = a.options.round ? Math.round(c) : Math.round(100 * c) / 100;
        return f;
      },
          h = function h() {
        window.removeEventListener("resize", h);
        window.removeEventListener("orientationchange", h);
        (a.options.wrapper ? a.options.wrapper : window).removeEventListener("scroll", h);
        (a.options.wrapper ? a.options.wrapper : document).removeEventListener("touchmove", h);
        p = A(G);
      },
          G = function G() {
        H() && !1 === w ? (K(), p = A(G)) : (p = null, window.addEventListener("resize", h), window.addEventListener("orientationchange", h), (a.options.wrapper ? a.options.wrapper : window).addEventListener("scroll", h, x ? {
          passive: !0
        } : !1), (a.options.wrapper ? a.options.wrapper : document).addEventListener("touchmove", h, x ? {
          passive: !0
        } : !1));
      },
          K = function K() {
        for (var f, c = 0; c < a.elems.length; c++) {
          var b = d[c].verticalScrollAxis.toLowerCase(),
              e = d[c].horizontalScrollAxis.toLowerCase();
          f = -1 != b.indexOf("x") ? l : 0;
          b = -1 != b.indexOf("y") ? l : 0;
          var g = -1 != e.indexOf("x") ? m : 0;
          e = -1 != e.indexOf("y") ? m : 0;
          f = J((f + g - d[c].left + n) / (d[c].width + n), (b + e - d[c].top + v) / (d[c].height + v), d[c].speed, d[c].verticalSpeed, d[c].horizontalSpeed);
          e = f.y - d[c].baseY;
          b = f.x - d[c].baseX;
          null !== d[c].min && (a.options.vertical && !a.options.horizontal && (e = e <= d[c].min ? d[c].min : e), a.options.horizontal && !a.options.vertical && (b = b <= d[c].min ? d[c].min : b));
          null != d[c].minY && (e = e <= d[c].minY ? d[c].minY : e);
          null != d[c].minX && (b = b <= d[c].minX ? d[c].minX : b);
          null !== d[c].max && (a.options.vertical && !a.options.horizontal && (e = e >= d[c].max ? d[c].max : e), a.options.horizontal && !a.options.vertical && (b = b >= d[c].max ? d[c].max : b));
          null != d[c].maxY && (e = e >= d[c].maxY ? d[c].maxY : e);
          null != d[c].maxX && (b = b >= d[c].maxX ? d[c].maxX : b);
          a.elems[c].style[E] = "translate3d(" + (a.options.horizontal ? b : "0") + "px," + (a.options.vertical ? e : "0") + "px," + d[c].zindex + "px) " + d[c].transform;
        }

        a.options.callback(f);
      };

      a.destroy = function () {
        for (var f = 0; f < a.elems.length; f++) {
          a.elems[f].style.cssText = d[f].style;
        }

        w || (window.removeEventListener("resize", B), w = !0);
        D(p);
        p = null;
      };

      B();
      a.refresh = B;
      return a;
    }

    console.warn("Rellax: The elements you're trying to select don't exist.");
  };

  return q;
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55719" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","rellax.min.js"], null)
//# sourceMappingURL=/rellax.min.92533d2c.js.map