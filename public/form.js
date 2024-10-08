(function () {
  'use strict';
  function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t)
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      n.push.apply(n, r);
    }
    return n;
  }
  function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      if (t % 2)
        ownKeys(Object(n), true).forEach(function (t) {
          _defineProperty(e, t, n[t]);
        });
      else if (Object.getOwnPropertyDescriptors)
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      else
        ownKeys(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
  }
  function _defineProperty(e, t, n) {
    if (t in e)
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    else e[t] = n;
    return e;
  }
  var POS_PREFIX_5 = '--pos-banner-fluid-5__',
    posOptionsInitialBanner5 = {
      background: '#50b3ff',
      'grid-template-columns': '100%',
      'grid-template-rows': '292px auto',
      'max-width': '100%',
      'text-font-size': '20px',
      'text-margin': '0 3px 24px 0',
      'button-wrap-max-width': '100%',
      'bg-url': "url('https://pos.gosuslugi.ru/bin/banner-fluid/5/banner-fluid-bg-5.svg')",
      'bg-url-position': 'center bottom',
      'bg-size': 'contain',
      'content-padding': '24px',
      'content-grid-row': '0',
      'logo-width': '65px',
      'logo-wrap-top': '16px',
      'logo-wrap-right': '13px',
      'slogan-font-size': '12px',
    },
    setStyles = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_5;
      Object.keys(e).forEach(function (r) {
        t.style.setProperty(n + r, e[r]);
      });
    },
    removeStyles = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_5;
      Object.keys(e).forEach(function (e) {
        t.style.removeProperty(n + e);
      });
    };
  function changePosBannerOnResize() {
    var e = document.documentElement,
      t = _objectSpread({}, posOptionsInitialBanner5),
      n = document.getElementById('js-show-iframe-wrapper'),
      r = n ? n.offsetWidth : document.body.offsetWidth;
    if (r > 340)
      (t['grid-template-rows'] = '236px auto'),
        (t['bg-url'] =
          "url('https://pos.gosuslugi.ru/bin/banner-fluid/5/banner-fluid-bg-5-2.svg')"),
        (t['bg-url-position'] = 'center bottom calc(100% - 30px)'),
        (t['button-wrap-max-width'] = '209px'),
        (t['content-padding'] = '24px 32px'),
        (t['text-margin'] = '0 0 24px 0');
    if (r > 568)
      (t['grid-template-columns'] = '1fr 308px'),
        (t['grid-template-rows'] = '100%'),
        (t['content-grid-row'] = '1'),
        (t['content-padding'] = '32px 24px'),
        (t['bg-url'] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/5/banner-fluid-bg-5.svg')"),
        (t['bg-url-position'] = '6px bottom'),
        (t['logo-width'] = '78px'),
        (t['logo-wrap-top'] = '20px'),
        (t['logo-wrap-right'] = '17px'),
        (t['slogan-font-size'] = '15px');
    if (r > 694) t['bg-url-position'] = '12px 40px';
    if (r > 783) (t['grid-template-columns'] = '1fr 400px'), (t['text-font-size'] = '24px');
    if (r > 855) t['bg-url-position'] = 'center bottom calc(100% - 30px)';
    if (r > 1098)
      (t['bg-url'] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/5/banner-fluid-bg-5-2.svg')"),
        (t['grid-template-columns'] = '1fr 557px'),
        (t['text-font-size'] = '26px'),
        (t['content-padding'] = '32px 32px 32px 50px');
    if (r > 1422)
      (t['max-width'] = '1422px'),
        (t['grid-template-columns'] = '1fr 720px'),
        (t['content-padding'] = '32px 40px 32px 160px'),
        (t.background = 'linear-gradient(90deg, #50b3ff 50%, #fffaf6 50%)');
    setStyles(t, e);
  }
  changePosBannerOnResize(),
    window.addEventListener('resize', changePosBannerOnResize),
    (window.onunload = function () {
      var e = document.documentElement,
        t = _objectSpread({}, posOptionsInitialBanner5);
      window.removeEventListener('resize', changePosBannerOnResize), removeStyles(t, e);
    });
})();
