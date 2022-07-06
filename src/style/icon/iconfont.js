!(function (e) {
  var t,
    n,
    o,
    i,
    a,
    c =
      '<svg><symbol id="icon-auto" viewBox="0 0 1024 1024"><path d="M689.536 192c26.816 0 50.794667 16.64 60.202667 41.706667l78.08 207.978666 67.754666-39.125333 27.562667 47.786667-50.709333 29.269333a64.213333 64.213333 0 0 1 27.157333 52.522667v202.368a64.298667 64.298667 0 0 1-64.298667 64.298666h-27.648V874.666667h-55.146666v-75.861334H255.957333V874.666667H200.853333v-75.861334H173.184a64.298667 64.298667 0 0 1-64.32-64.298666v-202.368a64.213333 64.213333 0 0 1 27.2-52.522667L85.333333 450.346667l27.584-47.786667 67.733334 39.104 78.08-207.957333A64.298667 64.298667 0 0 1 318.933333 192h370.602667z m145.728 342.954667H173.184v199.552h662.101333v-199.552z m-556.288 50.090666a41.386667 41.386667 0 1 1 0 82.752 41.386667 41.386667 0 0 1 0-82.752z m455.125333 0a41.386667 41.386667 0 1 1 0 82.752 41.386667 41.386667 0 0 1 0-82.752z m-44.565333-328.746666H318.933333l-79.402666 211.52h529.386666l-79.36-211.52z m-79.573333 46.037333v62.058667h-206.869334v-62.08h206.869334z"  ></path></symbol></svg>',
    d = (d = document.getElementsByTagName('script'))[d.length - 1].getAttribute('data-injectcss'),
    l = function (e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (d && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    a || ((a = !0), o());
  }
  function r() {
    try {
      i.documentElement.doScroll('left');
    } catch (e) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (t = function () {
    var e,
      t = document.createElement('div');
    (t.innerHTML = c),
      (c = null),
      (t = t.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (t = t),
        (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (a = !1),
        r(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
