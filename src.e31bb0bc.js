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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\images\\products\\ice-cream\\iceproductMobile@1x.png":[["iceproductMobile@1x.783a620a.png","images/images/products/ice-cream/iceproductMobile@1x.png"],"images/images/products/ice-cream/iceproductMobile@1x.png"],"./..\\images\\images\\products\\ice-cream\\iceproductMobile@2x.png":[["iceproductMobile@2x.b950e6b9.png","images/images/products/ice-cream/iceproductMobile@2x.png"],"images/images/products/ice-cream/iceproductMobile@2x.png"],"./..\\images\\images\\products\\ice-cream\\iceproductTablet@1x.png":[["iceproductTablet@1x.f75e206b.png","images/images/products/ice-cream/iceproductTablet@1x.png"],"images/images/products/ice-cream/iceproductTablet@1x.png"],"./..\\images\\images\\products\\ice-cream\\iceproductTablet@2x.png":[["iceproductTablet@2x.b3fe7c81.png","images/images/products/ice-cream/iceproductTablet@2x.png"],"images/images/products/ice-cream/iceproductTablet@2x.png"],"./..\\images\\images\\products\\ice-cream\\iceproductDecktop@1x.png":[["iceproductDecktop@1x.07c238e2.png","images/images/products/ice-cream/iceproductDecktop@1x.png"],"images/images/products/ice-cream/iceproductDecktop@1x.png"],"./..\\images\\images\\products\\ice-cream\\iceproductDecktop@2x.png":[["iceproductDecktop@2x.1531002c.png","images/images/products/ice-cream/iceproductDecktop@2x.png"],"images/images/products/ice-cream/iceproductDecktop@2x.png"],"./..\\images\\images\\products\\ice-coffee\\icecoffeeMobile@1x.png":[["icecoffeeMobile@1x.bd5cee48.png","images/images/products/ice-coffee/icecoffeeMobile@1x.png"],"images/images/products/ice-coffee/icecoffeeMobile@1x.png"],"./..\\images\\images\\products\\ice-coffee\\icecoffeeMobile@2x.png":[["icecoffeeMobile@2x.01366bf9.png","images/images/products/ice-coffee/icecoffeeMobile@2x.png"],"images/images/products/ice-coffee/icecoffeeMobile@2x.png"],"./..\\images\\images\\products\\ice-coffee\\icecoffeeTablet@1x.png":[["icecoffeeTablet@1x.ae967d78.png","images/images/products/ice-coffee/icecoffeeTablet@1x.png"],"images/images/products/ice-coffee/icecoffeeTablet@1x.png"],"./..\\images\\images\\products\\ice-coffee\\icecoffeeTablet@2x.png":[["icecoffeeTablet@2x.7a61a41b.png","images/images/products/ice-coffee/icecoffeeTablet@2x.png"],"images/images/products/ice-coffee/icecoffeeTablet@2x.png"],"./..\\images\\images\\products\\ice-coffee\\icecoffeeDecktop@1x.png":[["icecoffeeDecktop@1x.adc87818.png","images/images/products/ice-coffee/icecoffeeDecktop@1x.png"],"images/images/products/ice-coffee/icecoffeeDecktop@1x.png"],"./..\\images\\images\\products\\ice-coffee\\icecoffeeDecktop@2x.png":[["icecoffeeDecktop@2x.94ef7ebc.png","images/images/products/ice-coffee/icecoffeeDecktop@2x.png"],"images/images/products/ice-coffee/icecoffeeDecktop@2x.png"],"./..\\images\\images\\products\\milk-shakes\\milkshakesMobile@1x.png":[["milkshakesMobile@1x.661171da.png","images/images/products/milk-shakes/milkshakesMobile@1x.png"],"images/images/products/milk-shakes/milkshakesMobile@1x.png"],"./..\\images\\images\\products\\milk-shakes\\milkshakesMobile@2x.png":[["milkshakesMobile@2x.0543aa36.png","images/images/products/milk-shakes/milkshakesMobile@2x.png"],"images/images/products/milk-shakes/milkshakesMobile@2x.png"],"./..\\images\\images\\products\\milk-shakes\\milkshakesTablet@1x.png":[["milkshakesTablet@1x.d0e52604.png","images/images/products/milk-shakes/milkshakesTablet@1x.png"],"images/images/products/milk-shakes/milkshakesTablet@1x.png"],"./..\\images\\images\\products\\milk-shakes\\milkshakesTablet@2x.png":[["milkshakesTablet@2x.07aa88a2.png","images/images/products/milk-shakes/milkshakesTablet@2x.png"],"images/images/products/milk-shakes/milkshakesTablet@2x.png"],"./..\\images\\images\\products\\milk-shakes\\milkshakesDecktop@1x.png":[["milkshakesDecktop@1x.ad65a185.png","images/images/products/milk-shakes/milkshakesDecktop@1x.png"],"images/images/products/milk-shakes/milkshakesDecktop@1x.png"],"./..\\images\\images\\products\\milk-shakes\\milkshakesDecktop@2x.png":[["milkshakesDecktop@2x.c59924fa.png","images/images/products/milk-shakes/milkshakesDecktop@2x.png"],"images/images/products/milk-shakes/milkshakesDecktop@2x.png"],"./..\\images\\images\\about\\backgraund-img\\backmilkMobile@1x.png":[["backmilkMobile@1x.1bc1016e.png","images/images/about/backgraund-img/backmilkMobile@1x.png"],"images/images/about/backgraund-img/backmilkMobile@1x.png"],"./..\\images\\images\\about\\backgraund-img\\backmilkMobile@2x.png":[["backmilkMobile@2x.8c1c100c.png","images/images/about/backgraund-img/backmilkMobile@2x.png"],"images/images/about/backgraund-img/backmilkMobile@2x.png"],"./..\\images\\images\\about\\backgraund-img\\backmilkDecktop@1x.png":[["backmilkDecktop@1x.1ac33588.png","images/images/about/backgraund-img/backmilkDecktop@1x.png"],"images/images/about/backgraund-img/backmilkDecktop@1x.png"],"./..\\images\\images\\about\\backgraund-img\\backmilkDecktop@2x.png":[["backmilkDecktop@2x.4acec510.png","images/images/about/backgraund-img/backmilkDecktop@2x.png"],"images/images/about/backgraund-img/backmilkDecktop@2x.png"],"./..\\images\\about\\icon2.png":[["icon2.3459cd2f.png","images/about/icon2.png"],"images/about/icon2.png"],"./..\\images\\about\\icon1.png":[["icon1.b7e377e3.png","images/about/icon1.png"],"images/about/icon1.png"],"./..\\images\\about\\icon3.png":[["icon3.5dc24244.png","images/about/icon3.png"],"images/about/icon3.png"],"./..\\images\\images\\gallery\\galleryMobile@1x.jpg":[["galleryMobile@1x.1ba907c7.jpg","images/images/gallery/galleryMobile@1x.jpg"],"images/images/gallery/galleryMobile@1x.jpg"],"./..\\images\\images\\gallery\\galleryMobile@2x.jpg":[["galleryMobile@2x.9db5a380.jpg","images/images/gallery/galleryMobile@2x.jpg"],"images/images/gallery/galleryMobile@2x.jpg"],"./..\\images\\images\\gallery\\galleryTablet@1x.jpg":[["galleryTablet@1x.60e9cbf2.jpg","images/images/gallery/galleryTablet@1x.jpg"],"images/images/gallery/galleryTablet@1x.jpg"],"./..\\images\\images\\gallery\\galleryTablet@2x.jpg":[["galleryTablet@2x.15365fe9.jpg","images/images/gallery/galleryTablet@2x.jpg"],"images/images/gallery/galleryTablet@2x.jpg"],"./..\\images\\images\\gallery\\galleryDesktop@1x.jpg":[["galleryDesktop@1x.4237a920.jpg","images/images/gallery/galleryDesktop@1x.jpg"],"images/images/gallery/galleryDesktop@1x.jpg"],"./..\\images\\images\\gallery\\galleryDesktop@2x.jpg":[["galleryDesktop@2x.7228d2b1.jpg","images/images/gallery/galleryDesktop@2x.jpg"],"images/images/gallery/galleryDesktop@2x.jpg"],"./..\\images\\images\\gallery\\post\\“.svg":[["“.f3ab5b6d.svg","images/images/gallery/post/“.svg"],"images/images/gallery/post/“.svg"],"./..\\images\\bg-contacts@1x.png":[["bg-contacts@1x.a56512c8.png","images/bg-contacts@1x.png"],"images/bg-contacts@1x.png"],"./..\\images\\bg-contacts@2x.png":[["bg-contacts@2x.68e29554.png","images/bg-contacts@2x.png"],"images/bg-contacts@2x.png"],"./..\\images\\images\\about\\bio-eco\\biomilkDecktop@1x.png":[["biomilkDecktop@1x.b4fd1ff4.png","images/images/about/bio-eco/biomilkDecktop@1x.png"],"images/images/about/bio-eco/biomilkDecktop@1x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51766" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map