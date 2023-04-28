/*! For license information please see main.js.LICENSE.txt */
!(function () {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          'use strict';
          'object' == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        'jQuery requires a window with a document',
                      );
                    return n(e);
                  })
            : n(t);
        })('undefined' != typeof window ? window : this, function (r, i) {
          'use strict';
          var o = [],
            a = Object.getPrototypeOf,
            s = o.slice,
            u = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            c = o.push,
            l = o.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            h = p.toString,
            v = h.call(Object),
            g = {},
            y = function (e) {
              return (
                'function' == typeof e &&
                'number' != typeof e.nodeType &&
                'function' != typeof e.item
              );
            },
            m = function (e) {
              return null != e && e === e.window;
            },
            b = r.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              i,
              o = (n = n || b).createElement('script');
            if (((o.text = e), t))
              for (r in x)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function E(e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
              ? f[d.call(e)] || 'object'
              : typeof e;
          }
          var T = '3.6.4',
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function S(e) {
            var t = !!e && 'length' in e && e.length,
              n = E(e);
            return (
              !y(e) &&
              !m(e) &&
              ('array' === n ||
                0 === t ||
                ('number' == typeof t && t > 0 && t - 1 in e))
            );
          }
          (C.fn = C.prototype =
            {
              jquery: T,
              constructor: C,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  }),
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  }),
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  }),
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  c = !1;
                for (
                  'boolean' == typeof a &&
                    ((c = a), (a = arguments[s] || {}), s++),
                    'object' == typeof a || y(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        '__proto__' !== t &&
                          a !== r &&
                          (c &&
                          r &&
                          (C.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = a[t]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[t] = C.extend(c, o, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            C.extend({
              expando: 'jQuery' + (T + Math.random()).replace(/\D/g, ''),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  '[object Object]' !== d.call(e) ||
                  ((t = a(e)) &&
                    ('function' !=
                      typeof (n = p.call(t, 'constructor') && t.constructor) ||
                      h.call(n) !== v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (S(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (S(Object(e))
                      ? C.merge(n, 'string' == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = [];
                if (S(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return u(a);
              },
              guid: 1,
              support: g,
            }),
            'function' == typeof Symbol &&
              (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each(
              'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                ' ',
              ),
              function (e, t) {
                f['[object ' + t + ']'] = t.toLowerCase();
              },
            );
          var k = (function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              d,
              p,
              h,
              v,
              g,
              y,
              m,
              b,
              x = 'sizzle' + 1 * new Date(),
              w = e.document,
              E = 0,
              T = 0,
              C = ue(),
              S = ue(),
              k = ue(),
              A = ue(),
              j = function (e, t) {
                return e === t && (f = !0), 0;
              },
              D = {}.hasOwnProperty,
              N = [],
              L = N.pop,
              q = N.push,
              P = N.push,
              O = N.slice,
              I = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              H =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
              M = '[\\x20\\t\\r\\n\\f]',
              _ =
                '(?:\\\\[\\da-fA-F]{1,6}' +
                M +
                '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
              R =
                '\\[' +
                M +
                '*(' +
                _ +
                ')(?:' +
                M +
                '*([*^$|!~]?=)' +
                M +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                _ +
                '))|)' +
                M +
                '*\\]',
              F =
                ':(' +
                _ +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                R +
                ')*)|.*)\\)|)',
              W = new RegExp(M + '+', 'g'),
              B = new RegExp(
                '^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$',
                'g',
              ),
              $ = new RegExp('^' + M + '*,' + M + '*'),
              z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
              X = new RegExp(M + '|>'),
              U = new RegExp(F),
              V = new RegExp('^' + _ + '$'),
              G = {
                ID: new RegExp('^#(' + _ + ')'),
                CLASS: new RegExp('^\\.(' + _ + ')'),
                TAG: new RegExp('^(' + _ + '|[*])'),
                ATTR: new RegExp('^' + R),
                PSEUDO: new RegExp('^' + F),
                CHILD: new RegExp(
                  '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                    M +
                    '*(even|odd|(([+-]|)(\\d*)n|)' +
                    M +
                    '*(?:([+-]|)' +
                    M +
                    '*(\\d+)|))' +
                    M +
                    '*\\)|)',
                  'i',
                ),
                bool: new RegExp('^(?:' + H + ')$', 'i'),
                needsContext: new RegExp(
                  '^' +
                    M +
                    '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                    M +
                    '*((?:-\\d)?\\d*)' +
                    M +
                    '*\\)|)(?=[^-]|$)',
                  'i',
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                '\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])',
                'g',
              ),
              ne = function (e, t) {
                var n = '0x' + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320,
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? '\0' === e
                    ? '�'
                    : e.slice(0, -1) +
                      '\\' +
                      e.charCodeAt(e.length - 1).toString(16) +
                      ' '
                  : '\\' + e;
              },
              oe = function () {
                d();
              },
              ae = xe(
                function (e) {
                  return (
                    !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
                  );
                },
                { dir: 'parentNode', next: 'legend' },
              );
            try {
              P.apply((N = O.call(w.childNodes)), w.childNodes),
                N[w.childNodes.length].nodeType;
            } catch (e) {
              P = {
                apply: N.length
                  ? function (e, t) {
                      q.apply(e, O.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, i) {
              var o,
                s,
                c,
                l,
                f,
                h,
                y,
                m = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                'string' != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!i && (d(t), (t = t || p), v)) {
                if (11 !== w && (f = Z.exec(e)))
                  if ((o = f[1])) {
                    if (9 === w) {
                      if (!(c = t.getElementById(o))) return r;
                      if (c.id === o) return r.push(c), r;
                    } else if (
                      m &&
                      (c = m.getElementById(o)) &&
                      b(t, c) &&
                      c.id === o
                    )
                      return r.push(c), r;
                  } else {
                    if (f[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return P.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !A[e + ' '] &&
                  (!g || !g.test(e)) &&
                  (1 !== w || 'object' !== t.nodeName.toLowerCase())
                ) {
                  if (((y = e), (m = t), 1 === w && (X.test(e) || z.test(e)))) {
                    for (
                      ((m = (ee.test(e) && ye(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((l = t.getAttribute('id'))
                          ? (l = l.replace(re, ie))
                          : t.setAttribute('id', (l = x))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (l ? '#' + l : ':scope') + ' ' + be(h[s]);
                    y = h.join(',');
                  }
                  try {
                    return P.apply(r, m.querySelectorAll(y)), r;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    l === x && t.removeAttribute('id');
                  }
                }
              }
              return u(e.replace(B, '$1'), t, r, i);
            }
            function ue() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + ' ') > r.cacheLength && delete t[e.shift()],
                  (t[n + ' '] = i)
                );
              };
            }
            function ce(e) {
              return (e[x] = !0), e;
            }
            function le(e) {
              var t = p.createElement('fieldset');
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (var n = e.split('|'), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function de(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function pe(e) {
              return function (t) {
                return 'input' === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && t.type === e;
              };
            }
            function ve(e) {
              return function (t) {
                return 'form' in t
                  ? t.parentNode && !1 === t.disabled
                    ? 'label' in t
                      ? 'label' in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : 'label' in t && t.disabled === e;
              };
            }
            function ge(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ye(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (o = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || 'HTML');
              }),
            (d = se.setDocument =
              function (e) {
                var t,
                  i,
                  a = e ? e.ownerDocument || e : w;
                return a != p && 9 === a.nodeType && a.documentElement
                  ? ((h = (p = a).documentElement),
                    (v = !o(p)),
                    w != p &&
                      (i = p.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener('unload', oe, !1)
                        : i.attachEvent && i.attachEvent('onunload', oe)),
                    (n.scope = le(function (e) {
                      return (
                        h.appendChild(e).appendChild(p.createElement('div')),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(':scope fieldset div').length
                      );
                    })),
                    (n.cssHas = le(function () {
                      try {
                        return p.querySelector(':has(*,:jqfake)'), !1;
                      } catch (e) {
                        return !0;
                      }
                    })),
                    (n.attributes = le(function (e) {
                      return (e.className = 'i'), !e.getAttribute('className');
                    })),
                    (n.getElementsByTagName = le(function (e) {
                      return (
                        e.appendChild(p.createComment('')),
                        !e.getElementsByTagName('*').length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      p.getElementsByClassName,
                    )),
                    (n.getById = le(function (e) {
                      return (
                        (h.appendChild(e).id = x),
                        !p.getElementsByName || !p.getElementsByName(x).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute('id') === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode('id');
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode('id')) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode('id')) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ('*' === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (y = []),
                    (g = []),
                    (n.qsa = K.test(p.querySelectorAll)) &&
                      (le(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          x +
                          "'></a><select id='" +
                          x +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push('[*^$]=' + M + '*(?:\'\'|"")'),
                          e.querySelectorAll('[selected]').length ||
                            g.push('\\[' + M + '*(?:value|' + H + ')'),
                          e.querySelectorAll('[id~=' + x + '-]').length ||
                            g.push('~='),
                          (t = p.createElement('input')).setAttribute(
                            'name',
                            '',
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              '\\[' +
                                M +
                                '*name' +
                                M +
                                '*=' +
                                M +
                                '*(?:\'\'|"")',
                            ),
                          e.querySelectorAll(':checked').length ||
                            g.push(':checked'),
                          e.querySelectorAll('a#' + x + '+*').length ||
                            g.push('.#.+[+~]'),
                          e.querySelectorAll('\\\f'),
                          g.push('[\\r\\n\\f]');
                      }),
                      le(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement('input');
                        t.setAttribute('type', 'hidden'),
                          e.appendChild(t).setAttribute('name', 'D'),
                          e.querySelectorAll('[name=d]').length &&
                            g.push('name' + M + '*[*^$|!~]?='),
                          2 !== e.querySelectorAll(':enabled').length &&
                            g.push(':enabled', ':disabled'),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(':disabled').length &&
                            g.push(':enabled', ':disabled'),
                          e.querySelectorAll('*,:x'),
                          g.push(',.*:');
                      })),
                    (n.matchesSelector = K.test(
                      (m =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector),
                    )) &&
                      le(function (e) {
                        (n.disconnectedMatch = m.call(e, '*')),
                          m.call(e, "[s!='']:x"),
                          y.push('!=', F);
                      }),
                    n.cssHas || g.push(':has'),
                    (g = g.length && new RegExp(g.join('|'))),
                    (y = y.length && new RegExp(y.join('|'))),
                    (t = K.test(h.compareDocumentPosition)),
                    (b =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n =
                                (9 === e.nodeType && e.documentElement) || e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (j = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == p || (e.ownerDocument == w && b(w, e))
                                ? -1
                                : t == p || (t.ownerDocument == w && b(w, t))
                                ? 1
                                : l
                                ? I(l, e) - I(l, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!i || !o)
                            return e == p
                              ? -1
                              : t == p
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : l
                              ? I(l, e) - I(l, t)
                              : 0;
                          if (i === o) return de(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? de(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        }),
                    p)
                  : p;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (d(e),
                n.matchesSelector &&
                  v &&
                  !A[t + ' '] &&
                  (!y || !y.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  A(t, !0);
                }
              return se(t, p, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != p && d(e), b(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != p && d(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && D.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !v)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !v
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + '').replace(re, ie);
            }),
            (se.error = function (e) {
              throw new Error('Syntax error, unrecognized expression: ' + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                (l = !n.sortStable && e.slice(0)),
                e.sort(j),
                f)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (l = null), e;
            }),
            (i = se.getText =
              function (e) {
                var t,
                  n = '',
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ('string' == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            (r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                  '>': { dir: 'parentNode', first: !0 },
                  ' ': { dir: 'parentNode' },
                  '+': { dir: 'previousSibling', first: !0 },
                  '~': { dir: 'previousSibling' },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                      '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      'nth' === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ('even' === e[3] || 'odd' === e[3]))),
                          (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || '')
                          : n &&
                            U.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(')', n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return '*' === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = C[e + ' '];
                    return (
                      t ||
                      ((t = new RegExp(
                        '(^|' + M + ')' + e + '(' + M + '|$)',
                      )) &&
                        C(e, function (e) {
                          return t.test(
                            ('string' == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute('class')) ||
                              '',
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = se.attr(r, e);
                      return null == i
                        ? '!=' === t
                        : !t ||
                            ((i += ''),
                            '=' === t
                              ? i === n
                              : '!=' === t
                              ? i !== n
                              : '^=' === t
                              ? n && 0 === i.indexOf(n)
                              : '*=' === t
                              ? n && i.indexOf(n) > -1
                              : '$=' === t
                              ? n && i.slice(-n.length) === n
                              : '~=' === t
                              ? (' ' + i.replace(W, ' ') + ' ').indexOf(n) > -1
                              : '|=' === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + '-'));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = 'nth' !== e.slice(0, 3),
                      a = 'last' !== e.slice(-4),
                      s = 'of-type' === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var c,
                            l,
                            f,
                            d,
                            p,
                            h,
                            v = o !== a ? 'nextSibling' : 'previousSibling',
                            g = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            b = !1;
                          if (g) {
                            if (o) {
                              for (; v; ) {
                                for (d = t; (d = d[v]); )
                                  if (
                                    s
                                      ? d.nodeName.toLowerCase() === y
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                h = v = 'only' === e && !h && 'nextSibling';
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? g.firstChild : g.lastChild]), a && m)
                            ) {
                              for (
                                b =
                                  (p =
                                    (c =
                                      (l =
                                        (f = (d = g)[x] || (d[x] = {}))[
                                          d.uniqueID
                                        ] || (f[d.uniqueID] = {}))[e] ||
                                      [])[0] === E && c[1]) && c[2],
                                  d = p && g.childNodes[p];
                                (d =
                                  (++p && d && d[v]) || (b = p = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++b && d === t) {
                                  l[e] = [E, p, b];
                                  break;
                                }
                            } else if (
                              (m &&
                                (b = p =
                                  (c =
                                    (l =
                                      (f = (d = t)[x] || (d[x] = {}))[
                                        d.uniqueID
                                      ] || (f[d.uniqueID] = {}))[e] ||
                                    [])[0] === E && c[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (d =
                                  (++p && d && d[v]) ||
                                  (b = p = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? d.nodeName.toLowerCase() !== y
                                  : 1 !== d.nodeType) ||
                                  !++b ||
                                  (m &&
                                    ((l =
                                      (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] = [E, b]),
                                  d !== t));

                              );
                            return (b -= i) === r || (b % r == 0 && b / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error('unsupported pseudo: ' + e);
                    return i[x]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, '', t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var r, o = i(e, t), a = o.length; a--; )
                                e[(r = I(e, o[a]))] = !(n[r] = o[a]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(B, '$1'));
                    return r[x]
                      ? ce(function (e, t, n, i) {
                          for (
                            var o, a = r(e, null, i, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      V.test(e || '') || se.error('unsupported lang: ' + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? t.lang
                              : t.getAttribute('xml:lang') ||
                                t.getAttribute('lang'))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + '-')
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === p.activeElement &&
                      (!p.hasFocus || p.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ve(!1),
                  disabled: ve(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ('input' === t && !!e.checked) ||
                      ('option' === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ('input' === t && 'button' === e.type) || 'button' === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      'input' === e.nodeName.toLowerCase() &&
                      'text' === e.type &&
                      (null == (t = e.getAttribute('type')) ||
                        'text' === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (r.pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = pe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function me() {}
            function be(e) {
              for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
              return r;
            }
            function xe(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && 'parentNode' === o,
                s = T++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, u) {
                    var c,
                      l,
                      f,
                      d = [E, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((l =
                              (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((c = l[o]) && c[0] === E && c[1] === s)
                              return (d[2] = c[2]);
                            if (((l[o] = d), (d[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Ee(e, t, n, r, i) {
              for (
                var o, a = [], s = 0, u = e.length, c = null != t;
                s < u;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
              return a;
            }
            function Te(e, t, n, r, i, o) {
              return (
                r && !r[x] && (r = Te(r)),
                i && !i[x] && (i = Te(i, o)),
                ce(function (o, a, s, u) {
                  var c,
                    l,
                    f,
                    d = [],
                    p = [],
                    h = a.length,
                    v =
                      o ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || '*', s.nodeType ? [s] : s, []),
                    g = !e || (!o && t) ? v : Ee(v, d, e, s, u),
                    y = n ? (i || (o ? e : h || r) ? [] : a) : g;
                  if ((n && n(g, y, s, u), r))
                    for (c = Ee(y, p), r(c, [], s, u), l = c.length; l--; )
                      (f = c[l]) && (y[p[l]] = !(g[p[l]] = f));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (c = [], l = y.length; l--; )
                          (f = y[l]) && c.push((g[l] = f));
                        i(null, (y = []), c, u);
                      }
                      for (l = y.length; l--; )
                        (f = y[l]) &&
                          (c = i ? I(o, f) : d[l]) > -1 &&
                          (o[c] = !(a[c] = f));
                    }
                  } else (y = Ee(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, u) : P.apply(a, y);
                })
              );
            }
            function Ce(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[' '],
                  u = a ? 1 : 0,
                  l = xe(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0,
                  ),
                  f = xe(
                    function (e) {
                      return I(t, e) > -1;
                    },
                    s,
                    !0,
                  ),
                  d = [
                    function (e, n, r) {
                      var i =
                        (!a && (r || n !== c)) ||
                        ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                      return (t = null), i;
                    },
                  ];
                u < o;
                u++
              )
                if ((n = r.relative[e[u].type])) d = [xe(we(d), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                    return Te(
                      u > 1 && we(d),
                      u > 1 &&
                        be(
                          e
                            .slice(0, u - 1)
                            .concat({
                              value: ' ' === e[u - 2].type ? '*' : '',
                            }),
                        ).replace(B, '$1'),
                      n,
                      u < i && Ce(e.slice(u, i)),
                      i < o && Ce((e = e.slice(i))),
                      i < o && be(e),
                    );
                  }
                  d.push(n);
                }
              return we(d);
            }
            return (
              (me.prototype = r.filters = r.pseudos),
              (r.setFilters = new me()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    c,
                    l = S[e + ' '];
                  if (l) return t ? 0 : l.slice(0);
                  for (s = e, u = [], c = r.preFilter; s; ) {
                    for (a in ((n && !(i = $.exec(s))) ||
                      (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                    (n = !1),
                    (i = z.exec(s)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(B, ' ') }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(i = G[a].exec(s)) ||
                        (c[a] && !(i = c[a](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    i = [],
                    o = [],
                    s = k[e + ' '];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Ce(t[n]))[x] ? i.push(s) : o.push(s);
                    (s = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          o = function (o, a, s, u, l) {
                            var f,
                              h,
                              g,
                              y = 0,
                              m = '0',
                              b = o && [],
                              x = [],
                              w = c,
                              T = o || (i && r.find.TAG('*', l)),
                              C = (E += null == w ? 1 : Math.random() || 0.1),
                              S = T.length;
                            for (
                              l && (c = a == p || a || l);
                              m !== S && null != (f = T[m]);
                              m++
                            ) {
                              if (i && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == p ||
                                      (d(f), (s = !v));
                                  (g = e[h++]);

                                )
                                  if (g(f, a || p, s)) {
                                    u.push(f);
                                    break;
                                  }
                                l && (E = C);
                              }
                              n && ((f = !g && f) && y--, o && b.push(f));
                            }
                            if (((y += m), n && m !== y)) {
                              for (h = 0; (g = t[h++]); ) g(b, x, a, s);
                              if (o) {
                                if (y > 0)
                                  for (; m--; )
                                    b[m] || x[m] || (x[m] = L.call(u));
                                x = Ee(x);
                              }
                              P.apply(u, x),
                                l &&
                                  !o &&
                                  x.length > 0 &&
                                  y + t.length > 1 &&
                                  se.uniqueSort(u);
                            }
                            return l && ((E = C), (c = w)), b;
                          };
                        return n ? ce(o) : o;
                      })(o, i),
                    )),
                      (s.selector = e);
                  }
                  return s;
                }),
              (u = se.select =
                function (e, t, n, i) {
                  var o,
                    u,
                    c,
                    l,
                    f,
                    d = 'function' == typeof e && e,
                    p = !i && a((e = d.selector || e));
                  if (((n = n || []), 1 === p.length)) {
                    if (
                      (u = p[0] = p[0].slice(0)).length > 2 &&
                      'ID' === (c = u[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      d && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      o = G.needsContext.test(e) ? 0 : u.length;
                      o-- && ((c = u[o]), !r.relative[(l = c.type)]);

                    )
                      if (
                        (f = r.find[l]) &&
                        (i = f(
                          c.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && ye(t.parentNode)) || t,
                        ))
                      ) {
                        if ((u.splice(o, 1), !(e = i.length && be(u))))
                          return P.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (d || s(e, p))(
                      i,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && ye(t.parentNode)) || t,
                    ),
                    n
                  );
                }),
              (n.sortStable = x.split('').sort(j).join('') === x),
              (n.detectDuplicates = !!f),
              d(),
              (n.sortDetached = le(function (e) {
                return (
                  1 & e.compareDocumentPosition(p.createElement('fieldset'))
                );
              })),
              le(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  '#' === e.firstChild.getAttribute('href')
                );
              }) ||
                fe('type|href|height|width', function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      'type' === t.toLowerCase() ? 1 : 2,
                    );
                }),
              (n.attributes &&
                le(function (e) {
                  return (
                    (e.innerHTML = '<input/>'),
                    e.firstChild.setAttribute('value', ''),
                    '' === e.firstChild.getAttribute('value')
                  );
                })) ||
                fe('value', function (e, t, n) {
                  if (!n && 'input' === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              le(function (e) {
                return null == e.getAttribute('disabled');
              }) ||
                fe(H, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (C.find = k),
            (C.expr = k.selectors),
            (C.expr[':'] = C.expr.pseudos),
            (C.uniqueSort = C.unique = k.uniqueSort),
            (C.text = k.getText),
            (C.isXMLDoc = k.isXML),
            (C.contains = k.contains),
            (C.escapeSelector = k.escape);
          var A = function (e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && C(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            j = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            D = C.expr.match.needsContext;
          function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var L =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function q(e, t, n) {
            return y(t)
              ? C.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : 'string' != typeof t
              ? C.grep(e, function (e) {
                  return l.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ':not(' + e + ')'),
              1 === t.length && 1 === r.nodeType
                ? C.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    }),
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ('string' != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (C.contains(i[t], this)) return !0;
                    }),
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  C.find(e, i[t], n);
                return r > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(q(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(q(this, e || [], !0));
              },
              is: function (e) {
                return !!q(
                  this,
                  'string' == typeof e && D.test(e) ? C(e) : e || [],
                  !1,
                ).length;
              },
            });
          var P,
            O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || P), 'string' == typeof e)) {
              if (
                !(r =
                  '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : O.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0,
                    ),
                  ),
                  L.test(r[1]) && C.isPlainObject(t))
                )
                  for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = b.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (P = C(b));
          var I = /^(?:parents|prev(?:Until|All))/,
            H = { children: !0, contents: !0, next: !0, prev: !0 };
          function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = 'string' != typeof e && C(e);
              if (!D.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? 'string' == typeof e
                  ? l.call(C(e), this[0])
                  : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e),
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, 'parentNode');
                },
                parentsUntil: function (e, t, n) {
                  return A(e, 'parentNode', n);
                },
                next: function (e) {
                  return M(e, 'nextSibling');
                },
                prev: function (e) {
                  return M(e, 'previousSibling');
                },
                nextAll: function (e) {
                  return A(e, 'nextSibling');
                },
                prevAll: function (e) {
                  return A(e, 'previousSibling');
                },
                nextUntil: function (e, t, n) {
                  return A(e, 'nextSibling', n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, 'previousSibling', n);
                },
                siblings: function (e) {
                  return j((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return j(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (N(e, 'template') && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, r) {
                  var i = C.map(this, t, n);
                  return (
                    'Until' !== e.slice(-5) && (r = n),
                    r && 'string' == typeof r && (i = C.filter(r, i)),
                    this.length > 1 &&
                      (H[e] || C.uniqueSort(i), I.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              },
            );
          var _ = /[^\x20\t\r\n\f]+/g;
          function R(e) {
            return e;
          }
          function F(e) {
            throw e;
          }
          function W(e, t, n, r) {
            var i;
            try {
              e && y((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && y((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              'string' == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(_) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              a = [],
              s = -1,
              u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        C.each(n, function (n, r) {
                          y(r)
                            ? (e.unique && c.has(r)) || o.push(r)
                            : r && r.length && 'string' !== E(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = a = []), (o = n = ''), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = a = []), n || t || (o = n = ''), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return c;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      'notify',
                      'progress',
                      C.Callbacks('memory'),
                      C.Callbacks('memory'),
                      2,
                    ],
                    [
                      'resolve',
                      'done',
                      C.Callbacks('once memory'),
                      C.Callbacks('once memory'),
                      0,
                      'resolved',
                    ],
                    [
                      'reject',
                      'fail',
                      C.Callbacks('once memory'),
                      C.Callbacks('once memory'),
                      1,
                      'rejected',
                    ],
                  ],
                  n = 'pending',
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, r) {
                          var i = y(e[r[4]]) && e[r[4]];
                          o[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + 'With'](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var o = 0;
                      function a(e, t, n, i) {
                        return function () {
                          var s = this,
                            u = arguments,
                            c = function () {
                              var r, c;
                              if (!(e < o)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    'Thenable self-resolution',
                                  );
                                (c =
                                  r &&
                                  ('object' == typeof r ||
                                    'function' == typeof r) &&
                                  r.then),
                                  y(c)
                                    ? i
                                      ? c.call(r, a(o, t, R, i), a(o, t, F, i))
                                      : (o++,
                                        c.call(
                                          r,
                                          a(o, t, R, i),
                                          a(o, t, F, i),
                                          a(o, t, R, t.notifyWith),
                                        ))
                                    : (n !== R && ((s = void 0), (u = [r])),
                                      (i || t.resolveWith)(s, u));
                              }
                            },
                            l = i
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (r) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(r, l.stackTrace),
                                      e + 1 >= o &&
                                        (n !== F && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? l()
                            : (C.Deferred.getStackHook &&
                                (l.stackTrace = C.Deferred.getStackHook()),
                              r.setTimeout(l));
                        };
                      }
                      return C.Deferred(function (r) {
                        t[0][3].add(a(0, r, y(i) ? i : R, r.notifyWith)),
                          t[1][3].add(a(0, r, y(e) ? e : R)),
                          t[2][3].add(a(0, r, y(n) ? n : F));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  C.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (i[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock,
                        ),
                      a.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + 'With'](
                            this === o ? void 0 : this,
                            arguments,
                          ),
                          this
                        );
                      }),
                      (o[r[0] + 'With'] = a.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = s.call(arguments),
                  o = C.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (W(e, o.done(a(n)).resolve, o.reject, !t),
                  'pending' === o.state() || y(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) W(i[n], a(n), o.reject);
                return o.promise();
              },
            });
          var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              B.test(e.name) &&
              r.console.warn(
                'jQuery.Deferred exception: ' + e.message,
                e.stack,
                t,
              );
          }),
            (C.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var $ = C.Deferred();
          function z() {
            b.removeEventListener('DOMContentLoaded', z),
              r.removeEventListener('load', z),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              $.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || $.resolveWith(b, [C]));
              },
            }),
            (C.ready.then = $.then),
            'complete' === b.readyState ||
            ('loading' !== b.readyState && !b.documentElement.doScroll)
              ? r.setTimeout(C.ready)
              : (b.addEventListener('DOMContentLoaded', z),
                r.addEventListener('load', z));
          var X = function (e, t, n, r, i, o, a) {
              var s = 0,
                u = e.length,
                c = null == n;
              if ('object' === E(n))
                for (s in ((i = !0), n)) X(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                y(r) || (a = !0),
                c &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(C(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
            },
            U = /^-ms-/,
            V = /-([a-z])/g;
          function G(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(U, 'ms-').replace(V, G);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = C.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ('string' == typeof t) i[Y(t)] = n;
                else for (r in t) i[Y(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && 'string' == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Y)
                      : (t = Y(t)) in r
                      ? [t]
                      : t.match(_) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = 'data-' + t.replace(te, '-$&').toLowerCase()),
                'string' == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      'true' === e ||
                      ('false' !== e &&
                        ('null' === e
                          ? null
                          : e === +e + ''
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = Z.get(o)),
                    1 === o.nodeType && !K.get(o, 'hasDataAttrs'))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf('data-') &&
                        ((r = Y(r.slice(5))), ne(o, r, i[r]));
                    K.set(o, 'hasDataAttrs', !0);
                  }
                  return i;
                }
                return 'object' == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : X(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = Z.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0,
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || 'fx') + 'queue'),
                    (r = K.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = K.access(e, t, C.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || 'fx';
                var n = C.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = C._queueHooks(e, t);
                'inprogress' === i && ((i = n.shift()), r--),
                  i &&
                    ('fx' === t && n.unshift('inprogress'),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      o,
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + 'queueHooks';
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: C.Callbacks('once memory').add(function () {
                      K.remove(e, [t + 'queue', n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  'string' != typeof e && ((t = e), (e = 'fx'), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          'fx' === e &&
                            'inprogress' !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || 'fx', []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = C.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  'string' != typeof e && ((t = e), (e = void 0)),
                    e = e || 'fx';
                  a--;

                )
                  (n = K.get(o[a], e + 'queueHooks')) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
            oe = ['Top', 'Right', 'Bottom', 'Left'],
            ae = b.documentElement,
            se = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              'none' === (e = t || e).style.display ||
              ('' === e.style.display &&
                se(e) &&
                'none' === C.css(e, 'display'))
            );
          };
          function le(e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return C.css(e, t, '');
                  },
              u = s(),
              c = (n && n[3]) || (C.cssNumber[t] ? '' : 'px'),
              l =
                e.nodeType &&
                (C.cssNumber[t] || ('px' !== c && +u)) &&
                ie.exec(C.css(e, t));
            if (l && l[3] !== c) {
              for (u /= 2, c = c || l[3], l = +u || 1; a--; )
                C.style(e, t, l + c),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (l /= o);
              (l *= 2), C.style(e, t, l + c), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +u || 0),
                (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = c), (r.start = l), (r.end = i))),
              i
            );
          }
          var fe = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = fe[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = C.css(t, 'display')),
              t.parentNode.removeChild(t),
              'none' === i && (i = 'block'),
              (fe[r] = i),
              i)
            );
          }
          function pe(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ('none' === n &&
                      ((i[o] = K.get(r, 'display') || null),
                      i[o] || (r.style.display = '')),
                    '' === r.style.display && ce(r) && (i[o] = de(r)))
                  : 'none' !== n && ((i[o] = 'none'), K.set(r, 'display', n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return pe(this, !0);
            },
            hide: function () {
              return pe(this);
            },
            toggle: function (e) {
              return 'boolean' == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var he,
            ve,
            ge = /^(?:checkbox|radio)$/i,
            ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement('div'))),
            (ve = b.createElement('input')).setAttribute('type', 'radio'),
            ve.setAttribute('checked', 'checked'),
            ve.setAttribute('name', 't'),
            he.appendChild(ve),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = '<textarea>x</textarea>'),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = '<option></option>'),
            (g.option = !!he.lastChild);
          var be = {
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
          };
          function xe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || '*')
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || '*')
                  : []),
              void 0 === t || (t && N(e, t)) ? C.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            g.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", '</select>']);
          var Ee = /<|&#?\w+;/;
          function Te(e, t, n, r, i) {
            for (
              var o,
                a,
                s,
                u,
                c,
                l,
                f = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ('object' === E(o)) C.merge(d, o.nodeType ? [o] : o);
                else if (Ee.test(o)) {
                  for (
                    a = a || f.appendChild(t.createElement('div')),
                      s = (ye.exec(o) || ['', ''])[1].toLowerCase(),
                      u = be[s] || be._default,
                      a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2],
                      l = u[0];
                    l--;

                  )
                    a = a.lastChild;
                  C.merge(d, a.childNodes),
                    ((a = f.firstChild).textContent = '');
                } else d.push(t.createTextNode(o));
            for (f.textContent = '', p = 0; (o = d[p++]); )
              if (r && C.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((c = se(o)),
                (a = xe(f.appendChild(o), 'script')),
                c && we(a),
                n)
              )
                for (l = 0; (o = a[l++]); ) me.test(o.type || '') && n.push(o);
            return f;
          }
          var Ce = /^([^.]*)(?:\.(.+)|)/;
          function Se() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function Ae(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ('focus' === t)
            );
          }
          function je(e, t, n, r, i, o) {
            var a, s;
            if ('object' == typeof t) {
              for (s in ('string' != typeof n && ((r = r || n), (n = void 0)),
              t))
                je(e, s, n, r, t[s], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ('string' == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = ke;
            else if (!i) return e;
            return (
              1 === o &&
                ((a = i),
                (i = function (e) {
                  return C().off(e), a.apply(this, arguments);
                }),
                (i.guid = a.guid || (a.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, i, r, n);
              })
            );
          }
          function De(e, t, n) {
            n
              ? (K.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = s.call(arguments)),
                        K.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = K.get(this, t)) || r
                          ? K.set(this, t, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      o.length &&
                        (K.set(this, t, {
                          value: C.event.trigger(
                            C.extend(o[0], C.Event.prototype),
                            o.slice(1),
                            this,
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && C.event.add(e, t, Se);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                c,
                l,
                f,
                d,
                p,
                h,
                v,
                g = K.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && C.find.matchesSelector(ae, i),
                    n.guid || (n.guid = C.guid++),
                    (u = g.events) || (u = g.events = Object.create(null)),
                    (a = g.handle) ||
                      (a = g.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || '').match(_) || ['']).length;
                  c--;

                )
                  (p = v = (s = Ce.exec(t[c]) || [])[1]),
                    (h = (s[2] || '').split('.').sort()),
                    p &&
                      ((f = C.event.special[p] || {}),
                      (p = (i ? f.delegateType : f.bindType) || p),
                      (f = C.event.special[p] || {}),
                      (l = C.extend(
                        {
                          type: p,
                          origType: v,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && C.expr.match.needsContext.test(i),
                          namespace: h.join('.'),
                        },
                        o,
                      )),
                      (d = u[p]) ||
                        (((d = u[p] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(p, a))),
                      f.add &&
                        (f.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                      (C.event.global[p] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                c,
                l,
                f,
                d,
                p,
                h,
                v,
                g = K.hasData(e) && K.get(e);
              if (g && (u = g.events)) {
                for (c = (t = (t || '').match(_) || ['']).length; c--; )
                  if (
                    ((p = v = (s = Ce.exec(t[c]) || [])[1]),
                    (h = (s[2] || '').split('.').sort()),
                    p)
                  ) {
                    for (
                      f = C.event.special[p] || {},
                        d =
                          u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)',
                          ),
                        a = o = d.length;
                      o--;

                    )
                      (l = d[o]),
                        (!i && v !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (s && !s.test(l.namespace)) ||
                          (r &&
                            r !== l.selector &&
                            ('**' !== r || !l.selector)) ||
                          (d.splice(o, 1),
                          l.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, l));
                    a &&
                      !d.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                        C.removeEvent(e, p, g.handle),
                      delete u[p]);
                  } else for (p in u) C.event.remove(e, p + t[c], n, r, !0);
                C.isEmptyObject(u) && K.remove(e, 'handle events');
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = C.event.fix(e),
                c =
                  (K.get(this, 'events') || Object.create(null))[u.type] || [],
                l = C.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, u))
              ) {
                for (
                  a = C.event.handlers.call(this, u, c), t = 0;
                  (i = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== o.namespace &&
                      !u.rnamespace.test(o.namespace)) ||
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !==
                        (r = (
                          (C.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                c = e.target;
              if (u && c.nodeType && !('click' === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ('click' !== e.type || !0 !== c.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                        (a[i] = r.needsContext
                          ? C(i, this).index(c) > -1
                          : C.find(i, this, null, [c]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: c, handlers: o });
                  }
              return (
                (c = this),
                u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      N(t, 'input') &&
                      De(t, 'click', Se),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      N(t, 'input') &&
                      De(t, 'click'),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      N(t, 'input') &&
                      K.get(t, 'click')) ||
                    N(t, 'a')
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Se
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Se),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Se),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Se),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              C.event.addProp,
            ),
            C.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
              C.event.special[e] = {
                setup: function () {
                  return De(this, e, Ae), !1;
                },
                trigger: function () {
                  return De(this, e), !0;
                },
                _default: function (t) {
                  return K.get(t.target, e);
                },
                delegateType: t,
              };
            }),
            C.each(
              {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (r && (r === this || C.contains(this, r))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              },
            ),
            C.fn.extend({
              on: function (e, t, n, r) {
                return je(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return je(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    C(e.delegateTarget).off(
                      r.namespace ? r.origType + '.' + r.namespace : r.origType,
                      r.selector,
                      r.handler,
                    ),
                    this
                  );
                if ('object' == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && 'function' != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Ne = /<script|<style|<link/i,
            Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
            qe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Pe(e, t) {
            return (
              (N(e, 'table') &&
                N(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                C(e).children('tbody')[0]) ||
              e
            );
          }
          function Oe(e) {
            return (
              (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
            );
          }
          function Ie(e) {
            return (
              'true/' === (e.type || '').slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute('type'),
              e
            );
          }
          function He(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (s = K.get(e).events))
                for (i in (K.remove(t, 'handle events'), s))
                  for (n = 0, r = s[i].length; n < r; n++)
                    C.event.add(t, i, s[i][n]);
              Z.hasData(e) &&
                ((o = Z.access(e)), (a = C.extend({}, o)), Z.set(t, a));
            }
          }
          function Me(e, t) {
            var n = t.nodeName.toLowerCase();
            'input' === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ('input' !== n && 'textarea' !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function _e(e, t, n, r) {
            t = u(t);
            var i,
              o,
              a,
              s,
              c,
              l,
              f = 0,
              d = e.length,
              p = d - 1,
              h = t[0],
              v = y(h);
            if (
              v ||
              (d > 1 && 'string' == typeof h && !g.checkClone && Le.test(h))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = h.call(this, i, o.html())), _e(o, t, n, r);
              });
            if (
              d &&
              ((o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (s = (a = C.map(xe(i, 'script'), Oe)).length; f < d; f++)
                (c = i),
                  f !== p &&
                    ((c = C.clone(c, !0, !0)),
                    s && C.merge(a, xe(c, 'script'))),
                  n.call(e[f], c, f);
              if (s)
                for (
                  l = a[a.length - 1].ownerDocument, C.map(a, Ie), f = 0;
                  f < s;
                  f++
                )
                  (c = a[f]),
                    me.test(c.type || '') &&
                      !K.access(c, 'globalEval') &&
                      C.contains(l, c) &&
                      (c.src && 'module' !== (c.type || '').toLowerCase()
                        ? C._evalUrl &&
                          !c.noModule &&
                          C._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute('nonce') },
                            l,
                          )
                        : w(c.textContent.replace(qe, ''), c, l));
            }
            return e;
          }
          function Re(e, t, n) {
            for (
              var r, i = t ? C.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || C.cleanData(xe(r)),
                r.parentNode &&
                  (n && se(r) && we(xe(r, 'script')),
                  r.parentNode.removeChild(r));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = se(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (a = xe(s), r = 0, i = (o = xe(e)).length; r < i; r++)
                  Me(o[r], a[r]);
              if (t)
                if (n)
                  for (
                    o = o || xe(e), a = a || xe(s), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    He(o[r], a[r]);
                else He(e, s);
              return (
                (a = xe(s, 'script')).length > 0 &&
                  we(a, !u && xe(e, 'script')),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = C.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (Q(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? C.event.remove(n, r)
                          : C.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return Re(this, e, !0);
              },
              remove: function (e) {
                return Re(this, e);
              },
              text: function (e) {
                return X(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              append: function () {
                return _e(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Pe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return _e(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Pe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return _e(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return _e(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(xe(e, !1)), (e.textContent = ''));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return X(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      'string' == typeof e &&
                      !Ne.test(e) &&
                      !be[(ye.exec(e) || ['', ''])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(xe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              replaceWith: function () {
                var e = [];
                return _e(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(xe(this)), n && n.replaceChild(t, this));
                  },
                  e,
                );
              },
            }),
            C.each(
              {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, r = [], i = C(e), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      C(i[a])[t](n),
                      c.apply(r, n.get());
                  return this.pushStack(r);
                };
              },
            );
          var Fe = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
            We = /^--/,
            Be = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            $e = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            ze = new RegExp(oe.join('|'), 'i'),
            Xe = '[\\x20\\t\\r\\n\\f]',
            Ue = new RegExp(
              '^' + Xe + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Xe + '+$',
              'g',
            );
          function Ve(e, t, n) {
            var r,
              i,
              o,
              a,
              s = We.test(t),
              u = e.style;
            return (
              (n = n || Be(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace(Ue, '$1') || void 0),
                '' !== a || se(e) || (a = C.style(e, t)),
                !g.pixelBoxStyles() &&
                  Fe.test(a) &&
                  ze.test(t) &&
                  ((r = u.width),
                  (i = u.minWidth),
                  (o = u.maxWidth),
                  (u.minWidth = u.maxWidth = u.width = a),
                  (a = n.width),
                  (u.width = r),
                  (u.minWidth = i),
                  (u.maxWidth = o))),
              void 0 !== a ? a + '' : a
            );
          }
          function Ge(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (l) {
                (c.style.cssText =
                  'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                  (l.style.cssText =
                    'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                  ae.appendChild(c).appendChild(l);
                var e = r.getComputedStyle(l);
                (n = '1%' !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (l.style.right = '60%'),
                  (a = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (l.style.position = 'absolute'),
                  (o = 12 === t(l.offsetWidth / 3)),
                  ae.removeChild(c),
                  (l = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              a,
              s,
              u,
              c = b.createElement('div'),
              l = b.createElement('div');
            l.style &&
              ((l.style.backgroundClip = 'content-box'),
              (l.cloneNode(!0).style.backgroundClip = ''),
              (g.clearCloneStyle = 'content-box' === l.style.backgroundClip),
              C.extend(g, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == s &&
                      ((e = b.createElement('table')),
                      (t = b.createElement('tr')),
                      (n = b.createElement('div')),
                      (e.style.cssText =
                        'position:absolute;left:-11111px;border-collapse:separate'),
                      (t.style.cssText = 'border:1px solid'),
                      (t.style.height = '1px'),
                      (n.style.height = '9px'),
                      (n.style.display = 'block'),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (s =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ye = ['Webkit', 'Moz', 'ms'],
            Qe = b.createElement('div').style,
            Je = {};
          function Ke(e) {
            return (
              C.cssProps[e] ||
              Je[e] ||
              (e in Qe
                ? e
                : (Je[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                        n--;

                      )
                        if ((e = Ye[n] + t) in Qe) return e;
                    })(e) || e))
            );
          }
          var Ze = /^(none|table(?!-c[ea]).+)/,
            et = {
              position: 'absolute',
              visibility: 'hidden',
              display: 'block',
            },
            tt = { letterSpacing: '0', fontWeight: '400' };
          function nt(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
          }
          function rt(e, t, n, r, i, o) {
            var a = 'width' === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? 'border' : 'content')) return 0;
            for (; a < 4; a += 2)
              'margin' === n && (u += C.css(e, n + oe[a], !0, i)),
                r
                  ? ('content' === n &&
                      (u -= C.css(e, 'padding' + oe[a], !0, i)),
                    'margin' !== n &&
                      (u -= C.css(e, 'border' + oe[a] + 'Width', !0, i)))
                  : ((u += C.css(e, 'padding' + oe[a], !0, i)),
                    'padding' !== n
                      ? (u += C.css(e, 'border' + oe[a] + 'Width', !0, i))
                      : (s += C.css(e, 'border' + oe[a] + 'Width', !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e['offset' + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        u -
                        s -
                        0.5,
                    ),
                  ) || 0),
              u
            );
          }
          function it(e, t, n) {
            var r = Be(e),
              i =
                (!g.boxSizingReliable() || n) &&
                'border-box' === C.css(e, 'boxSizing', !1, r),
              o = i,
              a = Ve(e, t, r),
              s = 'offset' + t[0].toUpperCase() + t.slice(1);
            if (Fe.test(a)) {
              if (!n) return a;
              a = 'auto';
            }
            return (
              ((!g.boxSizingReliable() && i) ||
                (!g.reliableTrDimensions() && N(e, 'tr')) ||
                'auto' === a ||
                (!parseFloat(a) && 'inline' === C.css(e, 'display', !1, r))) &&
                e.getClientRects().length &&
                ((i = 'border-box' === C.css(e, 'boxSizing', !1, r)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                rt(e, t, n || (i ? 'border' : 'content'), o, r, a) +
                'px'
            );
          }
          function ot(e, t, n, r, i) {
            return new ot.prototype.init(e, t, n, r, i);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ve(e, 'opacity');
                    return '' === n ? '1' : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  a,
                  s = Y(t),
                  u = We.test(t),
                  c = e.style;
                if (
                  (u || (t = Ke(s)),
                  (a = C.cssHooks[t] || C.cssHooks[s]),
                  void 0 === n)
                )
                  return a && 'get' in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : c[t];
                'string' == (o = typeof n) &&
                  (i = ie.exec(n)) &&
                  i[1] &&
                  ((n = le(e, t, i)), (o = 'number')),
                  null != n &&
                    n == n &&
                    ('number' !== o ||
                      u ||
                      (n += (i && i[3]) || (C.cssNumber[s] ? '' : 'px')),
                    g.clearCloneStyle ||
                      '' !== n ||
                      0 !== t.indexOf('background') ||
                      (c[t] = 'inherit'),
                    (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                a,
                s = Y(t);
              return (
                We.test(t) || (t = Ke(s)),
                (a = C.cssHooks[t] || C.cssHooks[s]) &&
                  'get' in a &&
                  (i = a.get(e, !0, n)),
                void 0 === i && (i = Ve(e, t, r)),
                'normal' === i && t in tt && (i = tt[t]),
                '' === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            C.each(['height', 'width'], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ze.test(C.css(e, 'display')) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? it(e, t, r)
                      : $e(e, et, function () {
                          return it(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = Be(e),
                    a = !g.scrollboxSize() && 'absolute' === o.position,
                    s =
                      (a || r) && 'border-box' === C.css(e, 'boxSizing', !1, o),
                    u = r ? rt(e, t, r, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e['offset' + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          rt(e, t, 'border', !1, o) -
                          0.5,
                      )),
                    u &&
                      (i = ie.exec(n)) &&
                      'px' !== (i[3] || 'px') &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    nt(0, n, u)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = Ge(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, 'marginLeft')) ||
                    e.getBoundingClientRect().left -
                      $e(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + 'px'
                );
            })),
            C.each(
              { margin: '', padding: '', border: 'Width' },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = 'string' == typeof n ? n.split(' ') : [n];
                      r < 4;
                      r++
                    )
                      i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  'margin' !== e && (C.cssHooks[e + t].set = nt);
              },
            ),
            C.fn.extend({
              css: function (e, t) {
                return X(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Be(e), i = t.length; a < i; a++)
                        o[t[a]] = C.css(e, t[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1,
                );
              },
            }),
            (C.Tween = ot),
            (ot.prototype = {
              constructor: ot,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (C.cssNumber[n] ? '' : 'px'));
              },
              cur: function () {
                var e = ot.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : ot.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = ot.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration,
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : ot.propHooks._default.set(this),
                  this
                );
              },
            }),
            (ot.prototype.init.prototype = ot.prototype),
            (ot.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, '')) && 'auto' !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (ot.propHooks.scrollTop = ot.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: 'swing',
            }),
            (C.fx = ot.prototype.init),
            (C.fx.step = {});
          var at,
            st,
            ut = /^(?:toggle|show|hide)$/,
            ct = /queueHooks$/;
          function lt() {
            st &&
              (!1 === b.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(lt)
                : r.setTimeout(lt, C.fx.interval),
              C.fx.tick());
          }
          function ft() {
            return (
              r.setTimeout(function () {
                at = void 0;
              }),
              (at = Date.now())
            );
          }
          function dt(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i['margin' + (n = oe[r])] = i['padding' + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function pt(e, t, n) {
            for (
              var r,
                i = (ht.tweeners[t] || []).concat(ht.tweeners['*']),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function ht(e, t, n) {
            var r,
              i,
              o = 0,
              a = ht.prefilters.length,
              s = C.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var t = at || ft(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    r = 1 - (n / c.duration || 0),
                    o = 0,
                    a = c.tweens.length;
                  o < a;
                  o++
                )
                  c.tweens[o].run(r);
                return (
                  s.notifyWith(e, [c, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [c, 1, 0]),
                      s.resolveWith(e, [c]),
                      !1)
                );
              },
              c = s.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n,
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: at || ft(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = C.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing,
                  );
                  return c.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? c.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                      : s.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              l = c.props;
            for (
              (function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = Y(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = C.cssHooks[r]) && ('expand' in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(l, c.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = ht.prefilters[o].call(c, e, l, c.opts)))
                return (
                  y(r.stop) &&
                    (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              C.map(l, pt, c),
              y(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              C.fx.timer(
                C.extend(u, { elem: e, anim: c, queue: c.opts.queue }),
              ),
              c
            );
          }
          (C.Animation = C.extend(ht, {
            tweeners: {
              '*': [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return le(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              y(e) ? ((t = e), (e = ['*'])) : (e = e.match(_));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (ht.tweeners[n] = ht.tweeners[n] || []),
                  ht.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f = 'width' in t || 'height' in t,
                  d = this,
                  p = {},
                  h = e.style,
                  v = e.nodeType && ce(e),
                  g = K.get(e, 'fxshow');
                for (r in (n.queue ||
                  (null == (a = C._queueHooks(e, 'fx')).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      a.unqueued--, C.queue(e, 'fx').length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), ut.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || 'toggle' === i),
                      i === (v ? 'hide' : 'show'))
                    ) {
                      if ('show' !== i || !g || void 0 === g[r]) continue;
                      v = !0;
                    }
                    p[r] = (g && g[r]) || C.style(e, r);
                  }
                if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = K.get(e, 'display')),
                    'none' === (l = C.css(e, 'display')) &&
                      (c
                        ? (l = c)
                        : (pe([e], !0),
                          (c = e.style.display || c),
                          (l = C.css(e, 'display')),
                          pe([e]))),
                    ('inline' === l || ('inline-block' === l && null != c)) &&
                      'none' === C.css(e, 'float') &&
                      (u ||
                        (d.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((l = h.display), (c = 'none' === l ? '' : l))),
                      (h.display = 'inline-block'))),
                  n.overflow &&
                    ((h.overflow = 'hidden'),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  p))
                    u ||
                      (g
                        ? 'hidden' in g && (v = g.hidden)
                        : (g = K.access(e, 'fxshow', { display: c })),
                      o && (g.hidden = !v),
                      v && pe([e], !0),
                      d.done(function () {
                        for (r in (v || pe([e]), K.remove(e, 'fxshow'), p))
                          C.style(e, r, p[r]);
                      })),
                      (u = pt(v ? g[r] : 0, r, d)),
                      r in g ||
                        ((g[r] = u.start),
                        v && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var r =
                e && 'object' == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (y(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !y(t) && t),
                    };
              return (
                C.fx.off
                  ? (r.duration = 0)
                  : 'number' != typeof r.duration &&
                    (r.duration in C.fx.speeds
                      ? (r.duration = C.fx.speeds[r.duration])
                      : (r.duration = C.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                (r.old = r.complete),
                (r.complete = function () {
                  y(r.old) && r.old.call(this),
                    r.queue && C.dequeue(this, r.queue);
                }),
                r
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ce)
                  .css('opacity', 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = C.isEmptyObject(e),
                  o = C.speed(t, n, r),
                  a = function () {
                    var t = ht(this, C.extend({}, e), o);
                    (i || K.get(this, 'finish')) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || 'fx', []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + 'queueHooks',
                      o = C.timers,
                      a = K.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && ct.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || 'fx'),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + 'queue'],
                      i = n[e + 'queueHooks'],
                      o = C.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(['toggle', 'show', 'hide'], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, r, i) {
                return null == e || 'boolean' == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(dt(t, !0), e, r, i);
              };
            }),
            C.each(
              {
                slideDown: dt('show'),
                slideUp: dt('hide'),
                slideToggle: dt('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' },
              },
              function (e, t) {
                C.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              },
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (at = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (at = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              st || ((st = !0), lt());
            }),
            (C.fx.stop = function () {
              st = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || 'fx'),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement('input'),
                t = b
                  .createElement('select')
                  .appendChild(b.createElement('option'));
              (e.type = 'checkbox'),
                (g.checkOn = '' !== e.value),
                (g.optSelected = t.selected),
                ((e = b.createElement('input')).value = 't'),
                (e.type = 'radio'),
                (g.radioValue = 't' === e.value);
            })();
          var vt,
            gt = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return X(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === o && C.isXMLDoc(e)) ||
                        (i =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? vt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ''), n)
                        : i && 'get' in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = C.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && 'radio' === t && N(e, 'input')) {
                      var n = e.value;
                      return e.setAttribute('type', t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(_);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (vt = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = gt[t] || C.find.attr;
              gt[t] = function (e, t, r) {
                var i,
                  o,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((o = gt[a]),
                    (gt[a] = i),
                    (i = null != n(e, t, r) ? a : null),
                    (gt[a] = o)),
                  i
                );
              };
            });
          var yt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
          function bt(e) {
            return (e.match(_) || []).join(' ');
          }
          function xt(e) {
            return (e.getAttribute && e.getAttribute('class')) || '';
          }
          function wt(e) {
            return Array.isArray(e)
              ? e
              : ('string' == typeof e && e.match(_)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return X(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                    void 0 !== n
                      ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && 'get' in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, 'tabindex');
                    return t
                      ? parseInt(t, 10)
                      : yt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: 'htmlFor', class: 'className' },
            }),
            g.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              },
            ),
            C.fn.extend({
              addClass: function (e) {
                var t, n, r, i, o, a;
                return y(e)
                  ? this.each(function (t) {
                      C(this).addClass(e.call(this, t, xt(this)));
                    })
                  : (t = wt(e)).length
                  ? this.each(function () {
                      if (
                        ((r = xt(this)),
                        (n = 1 === this.nodeType && ' ' + bt(r) + ' '))
                      ) {
                        for (o = 0; o < t.length; o++)
                          (i = t[o]),
                            n.indexOf(' ' + i + ' ') < 0 && (n += i + ' ');
                        (a = bt(n)), r !== a && this.setAttribute('class', a);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, r, i, o, a;
                return y(e)
                  ? this.each(function (t) {
                      C(this).removeClass(e.call(this, t, xt(this)));
                    })
                  : arguments.length
                  ? (t = wt(e)).length
                    ? this.each(function () {
                        if (
                          ((r = xt(this)),
                          (n = 1 === this.nodeType && ' ' + bt(r) + ' '))
                        ) {
                          for (o = 0; o < t.length; o++)
                            for (i = t[o]; n.indexOf(' ' + i + ' ') > -1; )
                              n = n.replace(' ' + i + ' ', ' ');
                          (a = bt(n)), r !== a && this.setAttribute('class', a);
                        }
                      })
                    : this
                  : this.attr('class', '');
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  a = typeof e,
                  s = 'string' === a || Array.isArray(e);
                return y(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, xt(this), t), t);
                    })
                  : 'boolean' == typeof t && s
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = wt(e)),
                    this.each(function () {
                      if (s)
                        for (o = C(this), i = 0; i < n.length; i++)
                          (r = n[i]),
                            o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                      else
                        (void 0 !== e && 'boolean' !== a) ||
                          ((r = xt(this)) && K.set(this, '__className__', r),
                          this.setAttribute &&
                            this.setAttribute(
                              'class',
                              r || !1 === e
                                ? ''
                                : K.get(this, '__className__') || '',
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = ' ' + e + ' '; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (' ' + bt(xt(n)) + ' ').indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var Et = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = y(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, C(this).val()) : e)
                        ? (i = '')
                        : 'number' == typeof i
                        ? (i += '')
                        : Array.isArray(i) &&
                          (i = C.map(i, function (e) {
                            return null == e ? '' : e + '';
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        'set' in t &&
                        void 0 !== t.set(this, i, 'value')) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    C.valHooks[i.type] ||
                    C.valHooks[i.nodeName.toLowerCase()]) &&
                  'get' in t &&
                  void 0 !== (n = t.get(i, 'value'))
                  ? n
                  : 'string' == typeof (n = i.value)
                  ? n.replace(Et, '')
                  : null == n
                  ? ''
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, 'value');
                    return null != t ? t : bt(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = 'select-one' === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !N(n.parentNode, 'optgroup'))
                      ) {
                        if (((t = C(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = C.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        C.inArray(C.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            C.each(['radio', 'checkbox'], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute('value') ? 'on' : e.value;
                  });
            }),
            (g.focusin = 'onfocusin' in r);
          var Tt = /^(?:focusinfocus|focusoutblur)$/,
            Ct = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, i) {
              var o,
                a,
                s,
                u,
                c,
                l,
                f,
                d,
                h = [n || b],
                v = p.call(e, 'type') ? e.type : e,
                g = p.call(e, 'namespace') ? e.namespace.split('.') : [];
              if (
                ((a = d = s = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Tt.test(v + C.event.triggered) &&
                  (v.indexOf('.') > -1 &&
                    ((g = v.split('.')), (v = g.shift()), g.sort()),
                  (c = v.indexOf(':') < 0 && 'on' + v),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(v, 'object' == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = g.join('.')),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        '(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)',
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (f = C.event.special[v] || {}),
                  i || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!i && !f.noBubble && !m(n)) {
                  for (
                    u = f.delegateType || v,
                      Tt.test(u + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || b) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                  (d = a),
                    (e.type = o > 1 ? u : f.bindType || v),
                    (l =
                      (K.get(a, 'events') || Object.create(null))[e.type] &&
                      K.get(a, 'handle')) && l.apply(a, t),
                    (l = c && a[c]) &&
                      l.apply &&
                      Q(a) &&
                      ((e.result = l.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  i ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (c &&
                      y(n[v]) &&
                      !m(n) &&
                      ((s = n[c]) && (n[c] = null),
                      (C.event.triggered = v),
                      e.isPropagationStopped() && d.addEventListener(v, Ct),
                      n[v](),
                      e.isPropagationStopped() && d.removeEventListener(v, Ct),
                      (C.event.triggered = void 0),
                      s && (n[c] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(r, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              C.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
                var n = function (e) {
                  C.event.simulate(t, e.target, C.event.fix(e));
                };
                C.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      K.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t) - 1;
                    i
                      ? K.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), K.remove(r, t));
                  },
                };
              });
          var St = r.location,
            kt = { guid: Date.now() },
            At = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || 'string' != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, 'text/xml');
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName('parsererror')[0]),
              (t && !n) ||
                C.error(
                  'Invalid XML: ' +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join('\n')
                      : e),
                ),
              t
            );
          };
          var jt = /\[\]$/,
            Dt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
          function qt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              C.each(t, function (t, i) {
                n || jt.test(e)
                  ? r(e, i)
                  : qt(
                      e +
                        '[' +
                        ('object' == typeof i && null != i ? t : '') +
                        ']',
                      i,
                      n,
                      r,
                    );
              });
            else if (n || 'object' !== E(t)) r(e, t);
            else for (i in t) qt(e + '[' + i + ']', t[i], n, r);
          }
          (C.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = y(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  '=' +
                  encodeURIComponent(null == n ? '' : n);
              };
            if (null == e) return '';
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) qt(n, e[n], t, i);
            return r.join('&');
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, 'elements');
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(':disabled') &&
                      Lt.test(this.nodeName) &&
                      !Nt.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return { name: t.name, value: e.replace(Dt, '\r\n') };
                        })
                      : { name: t.name, value: n.replace(Dt, '\r\n') };
                  })
                  .get();
              },
            });
          var Pt = /%20/g,
            Ot = /#.*$/,
            It = /([?&])_=[^&]*/,
            Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Mt = /^(?:GET|HEAD)$/,
            _t = /^\/\//,
            Rt = {},
            Ft = {},
            Wt = '*/'.concat('*'),
            Bt = b.createElement('a');
          function $t(e) {
            return function (t, n) {
              'string' != typeof t && ((n = t), (t = '*'));
              var r,
                i = 0,
                o = t.toLowerCase().match(_) || [];
              if (y(n))
                for (; (r = o[i++]); )
                  '+' === r[0]
                    ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function zt(e, t, n, r) {
            var i = {},
              o = e === Ft;
            function a(s) {
              var u;
              return (
                (i[s] = !0),
                C.each(e[s] || [], function (e, s) {
                  var c = s(t, n, r);
                  return 'string' != typeof c || o || i[c]
                    ? o
                      ? !(u = c)
                      : void 0
                    : (t.dataTypes.unshift(c), a(c), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!i['*'] && a('*'));
          }
          function Xt(e, t) {
            var n,
              r,
              i = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e;
          }
          (Bt.href = St.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: 'GET',
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    St.protocol,
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                  '*': Wt,
                  text: 'text/plain',
                  html: 'text/html',
                  xml: 'application/xml, text/xml',
                  json: 'application/json, text/javascript',
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: 'responseXML',
                  text: 'responseText',
                  json: 'responseJSON',
                },
                converters: {
                  '* text': String,
                  'text html': !0,
                  'text json': JSON.parse,
                  'text xml': C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Xt(Xt(e, C.ajaxSettings), t) : Xt(C.ajaxSettings, e);
              },
              ajaxPrefilter: $t(Rt),
              ajaxTransport: $t(Ft),
              ajax: function (e, t) {
                'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  d,
                  p = C.ajaxSetup({}, t),
                  h = p.context || p,
                  v = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                  g = C.Deferred(),
                  y = C.Callbacks('once memory'),
                  m = p.statusCode || {},
                  x = {},
                  w = {},
                  E = 'canceled',
                  T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!a)
                          for (a = {}; (t = Ht.exec(o)); )
                            a[t[1].toLowerCase() + ' '] = (
                              a[t[1].toLowerCase() + ' '] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + ' '];
                      }
                      return null == t ? null : t.join(', ');
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) T.always(e[T.status]);
                        else for (t in e) m[t] = [m[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || E;
                      return n && n.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (g.promise(T),
                  (p.url = ((e || p.url || St.href) + '').replace(
                    _t,
                    St.protocol + '//',
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || '*').toLowerCase().match(_) || [
                    '',
                  ]),
                  null == p.crossDomain)
                ) {
                  u = b.createElement('a');
                  try {
                    (u.href = p.url),
                      (u.href = u.href),
                      (p.crossDomain =
                        Bt.protocol + '//' + Bt.host !=
                        u.protocol + '//' + u.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if (
                  (p.data &&
                    p.processData &&
                    'string' != typeof p.data &&
                    (p.data = C.param(p.data, p.traditional)),
                  zt(Rt, p, t, T),
                  c)
                )
                  return T;
                for (f in ((l = C.event && p.global) &&
                  0 == C.active++ &&
                  C.event.trigger('ajaxStart'),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Mt.test(p.type)),
                (i = p.url.replace(Ot, '')),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || '').indexOf(
                        'application/x-www-form-urlencoded',
                      ) &&
                    (p.data = p.data.replace(Pt, '+'))
                  : ((d = p.url.slice(i.length)),
                    p.data &&
                      (p.processData || 'string' == typeof p.data) &&
                      ((i += (At.test(i) ? '&' : '?') + p.data), delete p.data),
                    !1 === p.cache &&
                      ((i = i.replace(It, '$1')),
                      (d = (At.test(i) ? '&' : '?') + '_=' + kt.guid++ + d)),
                    (p.url = i + d)),
                p.ifModified &&
                  (C.lastModified[i] &&
                    T.setRequestHeader('If-Modified-Since', C.lastModified[i]),
                  C.etag[i] && T.setRequestHeader('If-None-Match', C.etag[i])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  T.setRequestHeader('Content-Type', p.contentType),
                T.setRequestHeader(
                  'Accept',
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ('*' !== p.dataTypes[0] ? ', ' + Wt + '; q=0.01' : '')
                    : p.accepts['*'],
                ),
                p.headers))
                  T.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || c))
                  return T.abort();
                if (
                  ((E = 'abort'),
                  y.add(p.complete),
                  T.done(p.success),
                  T.fail(p.error),
                  (n = zt(Ft, p, t, T)))
                ) {
                  if (
                    ((T.readyState = 1), l && v.trigger('ajaxSend', [T, p]), c)
                  )
                    return T;
                  p.async &&
                    p.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      T.abort('timeout');
                    }, p.timeout));
                  try {
                    (c = !1), n.send(x, S);
                  } catch (e) {
                    if (c) throw e;
                    S(-1, e);
                  }
                } else S(-1, 'No Transport');
                function S(e, t, a, u) {
                  var f,
                    d,
                    b,
                    x,
                    w,
                    E = t;
                  c ||
                    ((c = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (o = u || ''),
                    (T.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (x = (function (e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, u = e.dataTypes;
                          '*' === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader('Content-Type'));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + ' ' + u[0]]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(p, T, a)),
                    !f &&
                      C.inArray('script', p.dataTypes) > -1 &&
                      C.inArray('json', p.dataTypes) < 0 &&
                      (p.converters['text script'] = function () {}),
                    (x = (function (e, t, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        u,
                        c = {},
                        l = e.dataTypes.slice();
                      if (l[1])
                        for (a in e.converters)
                          c[a.toLowerCase()] = e.converters[a];
                      for (o = l.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = l.shift()))
                        )
                          if ('*' === o) o = u;
                          else if ('*' !== u && u !== o) {
                            if (!(a = c[u + ' ' + o] || c['* ' + o]))
                              for (i in c)
                                if (
                                  (s = i.split(' '))[1] === o &&
                                  (a = c[u + ' ' + s[0]] || c['* ' + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = c[i])
                                    : !0 !== c[i] &&
                                      ((o = s[0]), l.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: 'parsererror',
                                    error: a
                                      ? e
                                      : 'No conversion from ' + u + ' to ' + o,
                                  };
                                }
                          }
                      return { state: 'success', data: t };
                    })(p, x, T, f)),
                    f
                      ? (p.ifModified &&
                          ((w = T.getResponseHeader('Last-Modified')) &&
                            (C.lastModified[i] = w),
                          (w = T.getResponseHeader('etag')) && (C.etag[i] = w)),
                        204 === e || 'HEAD' === p.type
                          ? (E = 'nocontent')
                          : 304 === e
                          ? (E = 'notmodified')
                          : ((E = x.state), (d = x.data), (f = !(b = x.error))))
                      : ((b = E),
                        (!e && E) || ((E = 'error'), e < 0 && (e = 0))),
                    (T.status = e),
                    (T.statusText = (t || E) + ''),
                    f
                      ? g.resolveWith(h, [d, E, T])
                      : g.rejectWith(h, [T, E, b]),
                    T.statusCode(m),
                    (m = void 0),
                    l &&
                      v.trigger(f ? 'ajaxSuccess' : 'ajaxError', [
                        T,
                        p,
                        f ? d : b,
                      ]),
                    y.fireWith(h, [T, E]),
                    l &&
                      (v.trigger('ajaxComplete', [T, p]),
                      --C.active || C.event.trigger('ajaxStop')));
                }
                return T;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, 'json');
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, 'script');
              },
            }),
            C.each(['get', 'post'], function (e, t) {
              C[t] = function (e, n, r, i) {
                return (
                  y(n) && ((i = i || r), (r = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      C.isPlainObject(e) && e,
                    ),
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                'content-type' === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || '');
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: { 'text script': function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (y(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return y(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not('body')
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Ut = { 0: 200, 1223: 204 },
            Vt = C.ajaxSettings.xhr();
          (g.cors = !!Vt && 'withCredentials' in Vt),
            (g.ajax = Vt = !!Vt),
            C.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Vt && !e.crossDomain))
                return {
                  send: function (i, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i['X-Requested-With'] ||
                      (i['X-Requested-With'] = 'XMLHttpRequest'),
                    i))
                      s.setRequestHeader(a, i[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          'abort' === e
                            ? s.abort()
                            : 'error' === e
                            ? 'number' != typeof s.status
                              ? o(0, 'error')
                              : o(s.status, s.statusText)
                            : o(
                                Ut[s.status] || s.status,
                                s.statusText,
                                'text' !== (s.responseType || 'text') ||
                                  'string' != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders(),
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t('error')),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t('abort'));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                'text script': function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter('script', function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = 'GET');
            }),
            C.ajaxTransport('script', function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = C('<script>')
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        'load error',
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i('error' === e.type ? 404 : 200, e.type);
                        }),
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Gt,
            Yt = [],
            Qt = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function () {
              var e = Yt.pop() || C.expando + '_' + kt.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter('json jsonp', function (e, t, n) {
              var i,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Qt.test(e.url)
                    ? 'url'
                    : 'string' == typeof e.data &&
                      0 ===
                        (e.contentType || '').indexOf(
                          'application/x-www-form-urlencoded',
                        ) &&
                      Qt.test(e.data) &&
                      'data');
              if (s || 'jsonp' === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Qt, '$1' + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (At.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
                  (e.converters['script json'] = function () {
                    return a || C.error(i + ' was not called'), a[0];
                  }),
                  (e.dataTypes[0] = 'json'),
                  (o = r[i]),
                  (r[i] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? C(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                      a && y(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  'script'
                );
            }),
            (g.createHTMLDocument =
              (((Gt = b.implementation.createHTMLDocument('').body).innerHTML =
                '<form></form><form></form>'),
              2 === Gt.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return 'string' != typeof e
                ? []
                : ('boolean' == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((r = (t =
                          b.implementation.createHTMLDocument(
                            '',
                          )).createElement('base')).href = b.location.href),
                        t.head.appendChild(r))
                      : (t = b)),
                  (o = !n && []),
                  (i = L.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Te([e], t, o)),
                      o && o.length && C(o).remove(),
                      C.merge([], i.childNodes)));
              var r, i, o;
            }),
            (C.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                a = this,
                s = e.indexOf(' ');
              return (
                s > -1 && ((r = bt(e.slice(s))), (e = e.slice(0, s))),
                y(t)
                  ? ((n = t), (t = void 0))
                  : t && 'object' == typeof t && (i = 'POST'),
                a.length > 0 &&
                  C.ajax({
                    url: e,
                    type: i || 'GET',
                    dataType: 'html',
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          r ? C('<div>').append(C.parseHTML(e)).find(r) : e,
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        },
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c = C.css(e, 'position'),
                  l = C(e),
                  f = {};
                'static' === c && (e.style.position = 'relative'),
                  (s = l.offset()),
                  (o = C.css(e, 'top')),
                  (u = C.css(e, 'left')),
                  ('absolute' === c || 'fixed' === c) &&
                  (o + u).indexOf('auto') > -1
                    ? ((a = (r = l.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  y(t) && (t = t.call(e, n, C.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + i),
                  'using' in t ? t.using.call(e, f) : l.css(f);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ('fixed' === C.css(r, 'position'))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      'static' === C.css(e, 'position');

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = C(e).offset()).top += C.css(
                        e,
                        'borderTopWidth',
                        !0,
                      )),
                      (i.left += C.css(e, 'borderLeftWidth', !0)));
                  }
                  return {
                    top: t.top - i.top - C.css(r, 'marginTop', !0),
                    left: t.left - i.left - C.css(r, 'marginLeft', !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && 'static' === C.css(e, 'position');

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            C.each(
              { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
              function (e, t) {
                var n = 'pageYOffset' === t;
                C.fn[e] = function (r) {
                  return X(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (m(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset,
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length,
                  );
                };
              },
            ),
            C.each(['top', 'left'], function (e, t) {
              C.cssHooks[t] = Ge(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ve(e, t)), Fe.test(n) ? C(e).position()[t] + 'px' : n
                  );
              });
            }),
            C.each({ Height: 'height', Width: 'width' }, function (e, t) {
              C.each(
                { padding: 'inner' + e, content: t, '': 'outer' + e },
                function (n, r) {
                  C.fn[r] = function (i, o) {
                    var a = arguments.length && (n || 'boolean' != typeof i),
                      s = n || (!0 === i || !0 === o ? 'margin' : 'border');
                    return X(
                      this,
                      function (t, n, i) {
                        var o;
                        return m(t)
                          ? 0 === r.indexOf('outer')
                            ? t['inner' + e]
                            : t.document.documentElement['client' + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body['scroll' + e],
                              o['scroll' + e],
                              t.body['offset' + e],
                              o['offset' + e],
                              o['client' + e],
                            ))
                          : void 0 === i
                          ? C.css(t, n, s)
                          : C.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a,
                    );
                  };
                },
              );
            }),
            C.each(
              [
                'ajaxStart',
                'ajaxStop',
                'ajaxComplete',
                'ajaxError',
                'ajaxSuccess',
                'ajaxSend',
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              },
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, '**')
                  : this.off(t, e || '**', n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            C.each(
              'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                ' ',
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              },
            );
          var Jt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, r, i;
            if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = s.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || C.guid++),
                i
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = N),
            (C.isFunction = y),
            (C.isWindow = m),
            (C.camelCase = Y),
            (C.type = E),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? '' : (e + '').replace(Jt, '$1');
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var Kt = r.jQuery,
            Zt = r.$;
          return (
            (C.noConflict = function (e) {
              return (
                r.$ === C && (r.$ = Zt),
                e && r.jQuery === C && (r.jQuery = Kt),
                C
              );
            }),
            void 0 === i && (r.jQuery = r.$ = C),
            C
          );
        });
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  !(function () {
    'use strict';
    function e() {
      this.entries = [];
    }
    function t(e) {
      if ('object' != typeof e) throw new TypeError(e + ' is not an object.');
      if (0 === Object.keys(e).length && e.constructor === Object)
        throw new Error(e + ' is empty.');
    }
    (e.prototype.add = function (e, t, n) {
      this.entries.push({ element: e, event: t, fn: n }),
        e.addEventListener(t, n);
    }),
      (e.prototype.removeAll = function () {
        this.entries = this.entries.filter(function (e) {
          return e.element.removeEventListener(e.event, e.fn), !1;
        });
      });
    var r = {
      idInput: '[name="id"]',
      optionInput: '[name^="options"]',
      quantityInput: '[name="quantity"]',
      propertyInput: '[name^="properties"]',
    };
    function i(t, n, i) {
      (this.element = t),
        (this.product = (function (e) {
          if ('object' != typeof e)
            throw new TypeError(e + ' is not an object.');
          if (void 0 === e.variants[0].options)
            throw new TypeError(
              'Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route',
            );
          return e;
        })(n)),
        (i = i || {}),
        (this._listeners = new e()),
        this._listeners.add(
          this.element,
          'submit',
          this._onSubmit.bind(this, i),
        ),
        (this.optionInputs = this._initInputs(r.optionInput, i.onOptionChange)),
        (this.quantityInputs = this._initInputs(
          r.quantityInput,
          i.onQuantityChange,
        )),
        (this.propertyInputs = this._initInputs(
          r.propertyInput,
          i.onPropertyChange,
        ));
    }
    (i.prototype.destroy = function () {
      this._listeners.removeAll();
    }),
      (i.prototype.options = function () {
        return (
          (e = this.optionInputs),
          (t = function (e) {
            return (e.name = /(?:^(options\[))(.*?)(?:\])/.exec(e.name)[2]), e;
          }),
          e.reduce(function (e, n) {
            return (
              (n.checked || ('radio' !== n.type && 'checkbox' !== n.type)) &&
                e.push(t({ name: n.name, value: n.value })),
              e
            );
          }, [])
        );
        var e, t;
      }),
      (i.prototype.variant = function () {
        return (function (e, n) {
          t(e);
          var r = (function (e, n) {
            t(e),
              (function (e) {
                if (!Array.isArray(e))
                  throw new TypeError(e + ' is not an array.');
                if (0 === e.length) return [];
                if (!e[0].hasOwnProperty('name'))
                  throw new Error(e[0] + 'does not contain name key.');
                if ('string' != typeof e[0].name)
                  throw new TypeError(
                    'Invalid value type passed for name of option ' +
                      e[0].name +
                      '. Value should be string.',
                  );
              })(n);
            var r = [];
            return (
              n.forEach(function (t) {
                for (var n = 0; n < e.options.length; n++)
                  if (
                    e.options[n].name.toLowerCase() === t.name.toLowerCase()
                  ) {
                    r[n] = t.value;
                    break;
                  }
              }),
              r
            );
          })(e, n);
          return (function (e, n) {
            return (
              t(e),
              (function (e) {
                if (Array.isArray(e) && 'object' == typeof e[0])
                  throw new Error(e + 'is not a valid array of options.');
              })(n),
              e.variants.filter(function (e) {
                return n.every(function (t, n) {
                  return e.options[n] === t;
                });
              })[0] || null
            );
          })(e, r);
        })(this.product, this.options());
      }),
      (i.prototype.properties = function () {
        var e,
          t,
          n =
            ((e = this.propertyInputs),
            (t = function (e) {
              return /(?:^(properties\[))(.*?)(?:\])/.exec(e)[2];
            }),
            e.reduce(function (e, n) {
              return (
                (n.checked || ('radio' !== n.type && 'checkbox' !== n.type)) &&
                  (e[t(n.name)] = n.value),
                e
              );
            }, {}));
        return 0 === Object.entries(n).length ? null : n;
      }),
      (i.prototype.quantity = function () {
        return this.quantityInputs[0]
          ? Number.parseInt(this.quantityInputs[0].value, 10)
          : 1;
      }),
      (i.prototype._setIdInputValue = function (e) {
        var t = this.element.querySelector(r.idInput);
        t ||
          (((t = document.createElement('input')).type = 'hidden'),
          (t.name = 'id'),
          this.element.appendChild(t)),
          (t.value = e.toString());
      }),
      (i.prototype._onSubmit = function (e, t) {
        (t.dataset = this._getProductFormEventData()),
          t.dataset.variant && this._setIdInputValue(t.dataset.variant.id),
          e.onFormSubmit && e.onFormSubmit(t);
      }),
      (i.prototype._onFormEvent = function (e) {
        return void 0 === e
          ? Function.prototype
          : function (t) {
              (t.dataset = this._getProductFormEventData()), e(t);
            }.bind(this);
      }),
      (i.prototype._initInputs = function (e, t) {
        return Array.prototype.slice.call(this.element.querySelectorAll(e)).map(
          function (e) {
            return this._listeners.add(e, 'change', this._onFormEvent(t)), e;
          }.bind(this),
        );
      }),
      (i.prototype._getProductFormEventData = function () {
        return {
          options: this.options(),
          variant: this.variant(),
          properties: this.properties(),
          quantity: this.quantity(),
        };
      }),
      n(755);
    var o = 'data-section-id';
    function a(e, t) {
      (this.container = (function (e) {
        if (!(e instanceof Element))
          throw new TypeError(
            'Theme Sections: Attempted to load section. The section container provided is not a DOM element.',
          );
        if (null === e.getAttribute(o))
          throw new Error(
            'Theme Sections: The section container provided does not have an id assigned to the ' +
              o +
              ' attribute.',
          );
        return e;
      })(e)),
        (this.id = e.getAttribute(o)),
        (this.extensions = []),
        Object.assign(
          this,
          (function (e) {
            if ((void 0 !== e && 'object' != typeof e) || null === e)
              throw new TypeError(
                'Theme Sections: The properties object provided is not a valid',
              );
            return e;
          })(t),
        ),
        this.onLoad();
    }
    (a.prototype = {
      onLoad: Function.prototype,
      onUnload: Function.prototype,
      onSelect: Function.prototype,
      onDeselect: Function.prototype,
      onBlockSelect: Function.prototype,
      onBlockDeselect: Function.prototype,
      extend: function (e) {
        this.extensions.push(e);
        var t = Object.assign({}, e);
        delete t.init,
          Object.assign(this, t),
          'function' == typeof e.init && e.init.apply(this);
      },
    }),
      'function' != typeof Object.assign &&
        Object.defineProperty(Object, 'assign', {
          value: function (e) {
            if (null == e)
              throw new TypeError('Cannot convert undefined or null to object');
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
              var r = arguments[n];
              if (null != r)
                for (var i in r)
                  Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          },
          writable: !0,
          configurable: !0,
        });
    var s = 'data-section-type',
      u = 'data-section-id';
    (window.Shopify = window.Shopify || {}),
      (window.Shopify.theme = window.Shopify.theme || {}),
      (window.Shopify.theme.sections = window.Shopify.theme.sections || {});
    var c = (window.Shopify.theme.sections.registered =
        window.Shopify.theme.sections.registered || {}),
      l = (window.Shopify.theme.sections.instances =
        window.Shopify.theme.sections.instances || []);
    function f(e) {
      var t = [];
      if (NodeList.prototype.isPrototypeOf(e) || Array.isArray(e)) var n = e[0];
      return (
        e instanceof Element || n instanceof Element
          ? h(e).forEach(function (e) {
              t = t.concat(
                l.filter(function (t) {
                  return t.container === e;
                }),
              );
            })
          : ('string' != typeof e && 'string' != typeof n) ||
            p(e).forEach(function (e) {
              t = t.concat(
                l.filter(function (t) {
                  return t.type === e;
                }),
              );
            }),
        t
      );
    }
    function d(e) {
      for (var t, n = 0; n < l.length; n++)
        if (l[n].id === e) {
          t = l[n];
          break;
        }
      return t;
    }
    function p(e) {
      return (
        '*' === e
          ? (e = Object.keys(c))
          : 'string' == typeof e
          ? (e = [e])
          : e.constructor === a
          ? (e = [e.prototype.type])
          : Array.isArray(e) &&
            e[0].constructor === a &&
            (e = e.map(function (e) {
              return e.prototype.type;
            })),
        e.map(function (e) {
          return e.toLowerCase();
        })
      );
    }
    function h(e) {
      return (
        NodeList.prototype.isPrototypeOf(e) && e.length > 0
          ? (e = Array.prototype.slice.call(e))
          : (NodeList.prototype.isPrototypeOf(e) && 0 === e.length) ||
            null === e
          ? (e = [])
          : !Array.isArray(e) && e instanceof Element && (e = [e]),
        e
      );
    }
    function v(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    window.Shopify.designMode &&
      (document.addEventListener('shopify:section:load', function (e) {
        var t,
          n,
          r = e.detail.sectionId,
          i = e.target.querySelector('[' + u + '="' + r + '"]');
        null !== i &&
          ((t = i.getAttribute(s)),
          (n = i),
          (t = p(t)),
          void 0 === n && (n = document.querySelectorAll('[' + s + ']')),
          (n = h(n)),
          t.forEach(function (e) {
            var t = c[e];
            void 0 !== t &&
              (n = n.filter(function (n) {
                return !(
                  f(n).length > 0 ||
                  null === n.getAttribute(s) ||
                  (n.getAttribute(s) === e && (l.push(new t(n)), 1))
                );
              }));
          }));
      }),
      document.addEventListener('shopify:section:unload', function (e) {
        var t = e.detail.sectionId,
          n = e.target.querySelector('[' + u + '="' + t + '"]');
        'object' == typeof f(n)[0] &&
          f(n).forEach(function (e) {
            var t = l
              .map(function (e) {
                return e.id;
              })
              .indexOf(e.id);
            l.splice(t, 1), e.onUnload();
          });
      }),
      document.addEventListener('shopify:section:select', function (e) {
        var t = d(e.detail.sectionId);
        'object' == typeof t && t.onSelect(e);
      }),
      document.addEventListener('shopify:section:deselect', function (e) {
        var t = d(e.detail.sectionId);
        'object' == typeof t && t.onDeselect(e);
      }),
      document.addEventListener('shopify:block:select', function (e) {
        var t = d(e.detail.sectionId);
        'object' == typeof t && t.onBlockSelect(e);
      }),
      document.addEventListener('shopify:block:deselect', function (e) {
        var t = d(e.detail.sectionId);
        'object' == typeof t && t.onBlockDeselect(e);
      }));
    var g = '(prefers-reduced-motion: reduce)',
      y = 4,
      m = 5,
      b = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: y,
        SCROLLING: m,
        DRAGGING: 6,
        DESTROYED: 7,
      };
    function x(e) {
      e.length = 0;
    }
    function w(e, t, n) {
      return Array.prototype.slice.call(e, t, n);
    }
    function E(e) {
      return e.bind.apply(e, [null].concat(w(arguments, 1)));
    }
    var T = setTimeout,
      C = function () {};
    function S(e) {
      return requestAnimationFrame(e);
    }
    function k(e, t) {
      return typeof t === e;
    }
    function A(e) {
      return !q(e) && k('object', e);
    }
    var j = Array.isArray,
      D = E(k, 'function'),
      N = E(k, 'string'),
      L = E(k, 'undefined');
    function q(e) {
      return null === e;
    }
    function P(e) {
      try {
        return e instanceof (e.ownerDocument.defaultView || window).HTMLElement;
      } catch (e) {
        return !1;
      }
    }
    function O(e) {
      return j(e) ? e : [e];
    }
    function I(e, t) {
      O(e).forEach(t);
    }
    function H(e, t) {
      return e.indexOf(t) > -1;
    }
    function M(e, t) {
      return e.push.apply(e, O(t)), e;
    }
    function _(e, t, n) {
      e &&
        I(t, function (t) {
          t && e.classList[n ? 'add' : 'remove'](t);
        });
    }
    function R(e, t) {
      _(e, N(t) ? t.split(' ') : t, !0);
    }
    function F(e, t) {
      I(t, e.appendChild.bind(e));
    }
    function W(e, t) {
      I(e, function (e) {
        var n = (t || e).parentNode;
        n && n.insertBefore(e, t);
      });
    }
    function B(e, t) {
      return P(e) && (e.msMatchesSelector || e.matches).call(e, t);
    }
    function $(e, t) {
      var n = e ? w(e.children) : [];
      return t
        ? n.filter(function (e) {
            return B(e, t);
          })
        : n;
    }
    function z(e, t) {
      return t ? $(e, t)[0] : e.firstElementChild;
    }
    var X = Object.keys;
    function U(e, t, n) {
      return (
        e &&
          (n ? X(e).reverse() : X(e)).forEach(function (n) {
            '__proto__' !== n && t(e[n], n);
          }),
        e
      );
    }
    function V(e) {
      return (
        w(arguments, 1).forEach(function (t) {
          U(t, function (n, r) {
            e[r] = t[r];
          });
        }),
        e
      );
    }
    function G(e) {
      return (
        w(arguments, 1).forEach(function (t) {
          U(t, function (t, n) {
            j(t)
              ? (e[n] = t.slice())
              : A(t)
              ? (e[n] = G({}, A(e[n]) ? e[n] : {}, t))
              : (e[n] = t);
          });
        }),
        e
      );
    }
    function Y(e, t) {
      I(t || X(e), function (t) {
        delete e[t];
      });
    }
    function Q(e, t) {
      I(e, function (e) {
        I(t, function (t) {
          e && e.removeAttribute(t);
        });
      });
    }
    function J(e, t, n) {
      A(t)
        ? U(t, function (t, n) {
            J(e, n, t);
          })
        : I(e, function (e) {
            q(n) || '' === n ? Q(e, t) : e.setAttribute(t, String(n));
          });
    }
    function K(e, t, n) {
      var r = document.createElement(e);
      return t && (N(t) ? R(r, t) : J(r, t)), n && F(n, r), r;
    }
    function Z(e, t, n) {
      if (L(n)) return getComputedStyle(e)[t];
      q(n) || (e.style[t] = '' + n);
    }
    function ee(e, t) {
      Z(e, 'display', t);
    }
    function te(e) {
      (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
    }
    function ne(e, t) {
      return e.getAttribute(t);
    }
    function re(e, t) {
      return e && e.classList.contains(t);
    }
    function ie(e) {
      return e.getBoundingClientRect();
    }
    function oe(e) {
      I(e, function (e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      });
    }
    function ae(e) {
      return z(new DOMParser().parseFromString(e, 'text/html').body);
    }
    function se(e, t) {
      e.preventDefault(),
        t && (e.stopPropagation(), e.stopImmediatePropagation());
    }
    function ue(e, t) {
      return e && e.querySelector(t);
    }
    function ce(e, t) {
      return t ? w(e.querySelectorAll(t)) : [];
    }
    function le(e, t) {
      _(e, t, !1);
    }
    function fe(e) {
      return e.timeStamp;
    }
    function de(e) {
      return N(e) ? e : e ? e + 'px' : '';
    }
    var pe = 'splide',
      he = 'data-' + pe;
    function ve(e, t) {
      if (!e) throw new Error('[' + pe + '] ' + (t || ''));
    }
    var ge = Math.min,
      ye = Math.max,
      me = Math.floor,
      be = Math.ceil,
      xe = Math.abs;
    function we(e, t, n) {
      return xe(e - t) < n;
    }
    function Ee(e, t, n, r) {
      var i = ge(t, n),
        o = ye(t, n);
      return r ? i < e && e < o : i <= e && e <= o;
    }
    function Te(e, t, n) {
      var r = ge(t, n),
        i = ye(t, n);
      return ge(ye(r, e), i);
    }
    function Ce(e) {
      return +(e > 0) - +(e < 0);
    }
    function Se(e, t) {
      return (
        I(t, function (t) {
          e = e.replace('%s', '' + t);
        }),
        e
      );
    }
    function ke(e) {
      return e < 10 ? '0' + e : '' + e;
    }
    var Ae = {};
    function je() {
      var e = [];
      function t(e, t, n) {
        I(e, function (e) {
          e &&
            I(t, function (t) {
              t.split(' ').forEach(function (t) {
                var r = t.split('.');
                n(e, r[0], r[1]);
              });
            });
        });
      }
      return {
        bind: function (n, r, i, o) {
          t(n, r, function (t, n, r) {
            var a = 'addEventListener' in t,
              s = a
                ? t.removeEventListener.bind(t, n, i, o)
                : t.removeListener.bind(t, i);
            a ? t.addEventListener(n, i, o) : t.addListener(i),
              e.push([t, n, r, i, s]);
          });
        },
        unbind: function (n, r, i) {
          t(n, r, function (t, n, r) {
            e = e.filter(function (e) {
              return (
                !!(
                  e[0] !== t ||
                  e[1] !== n ||
                  e[2] !== r ||
                  (i && e[3] !== i)
                ) || (e[4](), !1)
              );
            });
          });
        },
        dispatch: function (e, t, n) {
          var r;
          return (
            'function' == typeof CustomEvent
              ? (r = new CustomEvent(t, { bubbles: !0, detail: n }))
              : (r = document.createEvent('CustomEvent')).initCustomEvent(
                  t,
                  !0,
                  !1,
                  n,
                ),
            e.dispatchEvent(r),
            r
          );
        },
        destroy: function () {
          e.forEach(function (e) {
            e[4]();
          }),
            x(e);
        },
      };
    }
    var De = 'mounted',
      Ne = 'ready',
      Le = 'move',
      qe = 'moved',
      Pe = 'click',
      Oe = 'refresh',
      Ie = 'updated',
      He = 'resize',
      Me = 'resized',
      _e = 'scroll',
      Re = 'scrolled',
      Fe = 'destroy',
      We = 'navigation:mounted',
      Be = 'autoplay:play',
      $e = 'autoplay:pause',
      ze = 'lazyload:loaded',
      Xe = 'sk',
      Ue = 'sh',
      Ve = 'ei';
    function Ge(e) {
      var t = e ? e.event.bus : document.createDocumentFragment(),
        n = je();
      return (
        e && e.event.on(Fe, n.destroy),
        V(n, {
          bus: t,
          on: function (e, r) {
            n.bind(t, O(e).join(' '), function (e) {
              r.apply(r, j(e.detail) ? e.detail : []);
            });
          },
          off: E(n.unbind, t),
          emit: function (e) {
            n.dispatch(t, e, w(arguments, 1));
          },
        })
      );
    }
    function Ye(e, t, n, r) {
      var i,
        o,
        a = Date.now,
        s = 0,
        u = !0,
        c = 0;
      function l() {
        if (!u) {
          if (
            ((s = e ? ge((a() - i) / e, 1) : 1),
            n && n(s),
            s >= 1 && (t(), (i = a()), r && ++c >= r))
          )
            return f();
          o = S(l);
        }
      }
      function f() {
        u = !0;
      }
      function d() {
        o && cancelAnimationFrame(o), (s = 0), (o = 0), (u = !0);
      }
      return {
        start: function (t) {
          t || d(), (i = a() - (t ? s * e : 0)), (u = !1), (o = S(l));
        },
        rewind: function () {
          (i = a()), (s = 0), n && n(s);
        },
        pause: f,
        cancel: d,
        set: function (t) {
          e = t;
        },
        isPaused: function () {
          return u;
        },
      };
    }
    var Qe = 'Arrow',
      Je = Qe + 'Left',
      Ke = Qe + 'Right',
      Ze = Qe + 'Up',
      et = Qe + 'Down',
      tt = 'ttb',
      nt = {
        width: ['height'],
        left: ['top', 'right'],
        right: ['bottom', 'left'],
        x: ['y'],
        X: ['Y'],
        Y: ['X'],
        ArrowLeft: [Ze, Ke],
        ArrowRight: [et, Je],
      };
    var rt = 'role',
      it = 'tabindex',
      ot = 'aria-',
      at = ot + 'controls',
      st = ot + 'current',
      ut = ot + 'selected',
      ct = ot + 'label',
      lt = ot + 'labelledby',
      ft = ot + 'hidden',
      dt = ot + 'orientation',
      pt = ot + 'roledescription',
      ht = ot + 'live',
      vt = ot + 'busy',
      gt = ot + 'atomic',
      yt = [rt, it, 'disabled', at, st, ct, lt, ft, dt, pt],
      mt = pe + '__',
      bt = 'is-',
      xt = pe,
      wt = mt + 'track',
      Et = mt + 'list',
      Tt = mt + 'slide',
      Ct = Tt + '--clone',
      St = Tt + '__container',
      kt = mt + 'arrows',
      At = mt + 'arrow',
      jt = At + '--prev',
      Dt = At + '--next',
      Nt = mt + 'pagination',
      Lt = Nt + '__page',
      qt = mt + 'progress__bar',
      Pt = mt + 'toggle',
      Ot = mt + 'sr',
      It = bt + 'initialized',
      Ht = bt + 'active',
      Mt = bt + 'prev',
      _t = bt + 'next',
      Rt = bt + 'visible',
      Ft = bt + 'loading',
      Wt = bt + 'focus-in',
      Bt = bt + 'overflow',
      $t = [Ht, Rt, Mt, _t, Ft, Wt, Bt],
      zt = {
        slide: Tt,
        clone: Ct,
        arrows: kt,
        arrow: At,
        prev: jt,
        next: Dt,
        pagination: Nt,
        page: Lt,
        spinner: mt + 'spinner',
      },
      Xt = 'touchstart mousedown',
      Ut = 'touchmove mousemove',
      Vt = 'touchend touchcancel mouseup click',
      Gt = 'slide',
      Yt = 'loop',
      Qt = 'fade';
    var Jt = he + '-interval',
      Kt = { passive: !1, capture: !0 },
      Zt = { Spacebar: ' ', Right: Ke, Left: Je, Up: Ze, Down: et };
    function en(e) {
      return (e = N(e) ? e : e.key), Zt[e] || e;
    }
    var tn = 'keydown',
      nn = he + '-lazy',
      rn = nn + '-srcset',
      on = '[' + nn + '], [' + rn + ']',
      an = [' ', 'Enter'],
      sn = Object.freeze({
        __proto__: null,
        Media: function (e, t, n) {
          var r = e.state,
            i = n.breakpoints || {},
            o = n.reducedMotion || {},
            a = je(),
            s = [];
          function u(e) {
            e && a.destroy();
          }
          function c(e, t) {
            var n = matchMedia(t);
            a.bind(n, 'change', l), s.push([e, n]);
          }
          function l() {
            var t = r.is(7),
              i = n.direction,
              o = s.reduce(function (e, t) {
                return G(e, t[1].matches ? t[0] : {});
              }, {});
            Y(n),
              f(o),
              n.destroy
                ? e.destroy('completely' === n.destroy)
                : t
                ? (u(!0), e.mount())
                : i !== n.direction && e.refresh();
          }
          function f(t, i, o) {
            G(n, t),
              i && G(Object.getPrototypeOf(n), t),
              (!o && r.is(1)) || e.emit(Ie, n);
          }
          return {
            setup: function () {
              var e = 'min' === n.mediaQuery;
              X(i)
                .sort(function (t, n) {
                  return e ? +t - +n : +n - +t;
                })
                .forEach(function (t) {
                  c(i[t], '(' + (e ? 'min' : 'max') + '-width:' + t + 'px)');
                }),
                c(o, g),
                l();
            },
            destroy: u,
            reduce: function (e) {
              matchMedia(g).matches && (e ? G(n, o) : Y(n, X(o)));
            },
            set: f,
          };
        },
        Direction: function (e, t, n) {
          return {
            resolve: function (e, t, r) {
              var i =
                'rtl' !== (r = r || n.direction) || t ? (r === tt ? 0 : -1) : 1;
              return (
                (nt[e] && nt[e][i]) ||
                e.replace(/width|left|right/i, function (e, t) {
                  var n = nt[e.toLowerCase()][i] || e;
                  return t > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n;
                })
              );
            },
            orient: function (e) {
              return e * ('rtl' === n.direction ? 1 : -1);
            },
          };
        },
        Elements: function (e, t, n) {
          var r,
            i,
            o,
            a = Ge(e),
            s = a.on,
            u = a.bind,
            c = e.root,
            l = n.i18n,
            f = {},
            d = [],
            p = [],
            h = [];
          function v() {
            var e, t, o;
            (r = m('.' + wt)),
              (i = z(r, '.' + Et)),
              ve(r && i, 'A track/list element is missing.'),
              M(d, $(i, '.' + Tt + ':not(.' + Ct + ')')),
              U(
                {
                  arrows: kt,
                  pagination: Nt,
                  prev: jt,
                  next: Dt,
                  bar: qt,
                  toggle: Pt,
                },
                function (e, t) {
                  f[t] = m('.' + e);
                },
              ),
              V(f, { root: c, track: r, list: i, slides: d }),
              (t = c.id || '' + (e = pe) + ke((Ae[e] = (Ae[e] || 0) + 1))),
              (o = n.role),
              (c.id = t),
              (r.id = r.id || t + '-track'),
              (i.id = i.id || t + '-list'),
              !ne(c, rt) && 'SECTION' !== c.tagName && o && J(c, rt, o),
              J(c, pt, l.carousel),
              J(i, rt, 'presentation'),
              y();
          }
          function g(e) {
            var t = yt.concat('style');
            x(d), le(c, p), le(r, h), Q([r, i], t), Q(c, e ? t : ['style', pt]);
          }
          function y() {
            le(c, p),
              le(r, h),
              (p = b(xt)),
              (h = b(wt)),
              R(c, p),
              R(r, h),
              J(c, ct, n.label),
              J(c, lt, n.labelledby);
          }
          function m(e) {
            var t = ue(c, e);
            return t &&
              (function (e, t) {
                if (D(e.closest)) return e.closest(t);
                for (var n = e; n && 1 === n.nodeType && !B(n, t); )
                  n = n.parentElement;
                return n;
              })(t, '.' + xt) === c
              ? t
              : void 0;
          }
          function b(e) {
            return [
              e + '--' + n.type,
              e + '--' + n.direction,
              n.drag && e + '--draggable',
              n.isNavigation && e + '--nav',
              e === xt && Ht,
            ];
          }
          return V(f, {
            setup: v,
            mount: function () {
              s(Oe, g),
                s(Oe, v),
                s(Ie, y),
                u(
                  document,
                  Xt + ' keydown',
                  function (e) {
                    o = 'keydown' === e.type;
                  },
                  { capture: !0 },
                ),
                u(c, 'focusin', function () {
                  _(c, Wt, !!o);
                });
            },
            destroy: g,
          });
        },
        Slides: function (e, t, n) {
          var r = Ge(e),
            i = r.on,
            o = r.emit,
            a = r.bind,
            s = t.Elements,
            u = s.slides,
            c = s.list,
            l = [];
          function f() {
            u.forEach(function (e, t) {
              p(e, t, -1);
            });
          }
          function d() {
            v(function (e) {
              e.destroy();
            }),
              x(l);
          }
          function p(t, n, r) {
            var i = (function (e, t, n, r) {
              var i,
                o = Ge(e),
                a = o.on,
                s = o.emit,
                u = o.bind,
                c = e.Components,
                l = e.root,
                f = e.options,
                d = f.isNavigation,
                p = f.updateOnMove,
                h = f.i18n,
                v = f.pagination,
                g = f.slideFocus,
                b = c.Direction.resolve,
                x = ne(r, 'style'),
                w = ne(r, ct),
                T = n > -1,
                C = z(r, '.' + St);
              function S() {
                var i = e.splides
                  .map(function (e) {
                    var n = e.splide.Components.Slides.getAt(t);
                    return n ? n.slide.id : '';
                  })
                  .join(' ');
                J(r, ct, Se(h.slideX, (T ? n : t) + 1)),
                  J(r, at, i),
                  J(r, rt, g ? 'button' : ''),
                  g && Q(r, pt);
              }
              function k() {
                i || A();
              }
              function A() {
                if (!i) {
                  var n = e.index;
                  (o = j()) !== re(r, Ht) &&
                    (_(r, Ht, o),
                    J(r, st, (d && o) || ''),
                    s(o ? 'active' : 'inactive', D)),
                    (function () {
                      var t = (function () {
                          if (e.is(Qt)) return j();
                          var t = ie(c.Elements.track),
                            n = ie(r),
                            i = b('left', !0),
                            o = b('right', !0);
                          return me(t[i]) <= be(n[i]) && me(n[o]) <= be(t[o]);
                        })(),
                        n = !t && (!j() || T);
                      if (
                        (e.state.is([y, m]) || J(r, ft, n || ''),
                        J(ce(r, f.focusableNodes || ''), it, n ? -1 : ''),
                        g && J(r, it, n ? -1 : 0),
                        t !== re(r, Rt) &&
                          (_(r, Rt, t), s(t ? 'visible' : 'hidden', D)),
                        !t && document.activeElement === r)
                      ) {
                        var i = c.Slides.getAt(e.index);
                        i && te(i.slide);
                      }
                    })(),
                    _(r, Mt, t === n - 1),
                    _(r, _t, t === n + 1);
                }
                var o;
              }
              function j() {
                var r = e.index;
                return r === t || (f.cloneStatus && r === n);
              }
              var D = {
                index: t,
                slideIndex: n,
                slide: r,
                container: C,
                isClone: T,
                mount: function () {
                  T ||
                    ((r.id = l.id + '-slide' + ke(t + 1)),
                    J(r, rt, v ? 'tabpanel' : 'group'),
                    J(r, pt, h.slide),
                    J(r, ct, w || Se(h.slideLabel, [t + 1, e.length]))),
                    u(r, 'click', E(s, Pe, D)),
                    u(r, 'keydown', E(s, Xe, D)),
                    a([qe, Ue, Re], A),
                    a(We, S),
                    p && a(Le, k);
                },
                destroy: function () {
                  (i = !0),
                    o.destroy(),
                    le(r, $t),
                    Q(r, yt),
                    J(r, 'style', x),
                    J(r, ct, w || '');
                },
                update: A,
                style: function (e, t, n) {
                  Z((n && C) || r, e, t);
                },
                isWithin: function (n, r) {
                  var i = xe(n - t);
                  return (
                    T || (!f.rewind && !e.is(Yt)) || (i = ge(i, e.length - i)),
                    i <= r
                  );
                },
              };
              return D;
            })(e, n, r, t);
            i.mount(),
              l.push(i),
              l.sort(function (e, t) {
                return e.index - t.index;
              });
          }
          function h(e) {
            return e
              ? g(function (e) {
                  return !e.isClone;
                })
              : l;
          }
          function v(e, t) {
            h(t).forEach(e);
          }
          function g(e) {
            return l.filter(
              D(e)
                ? e
                : function (t) {
                    return N(e) ? B(t.slide, e) : H(O(e), t.index);
                  },
            );
          }
          return {
            mount: function () {
              f(), i(Oe, d), i(Oe, f);
            },
            destroy: d,
            update: function () {
              v(function (e) {
                e.update();
              });
            },
            register: p,
            get: h,
            getIn: function (e) {
              var r = t.Controller,
                i = r.toIndex(e),
                o = r.hasFocus() ? 1 : n.perPage;
              return g(function (e) {
                return Ee(e.index, i, i + o - 1);
              });
            },
            getAt: function (e) {
              return g(e)[0];
            },
            add: function (e, t) {
              I(e, function (e) {
                if ((N(e) && (e = ae(e)), P(e))) {
                  var r = u[t];
                  r ? W(e, r) : F(c, e),
                    R(e, n.classes.slide),
                    (i = e),
                    (s = E(o, He)),
                    (l = ce(i, 'img')),
                    (f = l.length)
                      ? l.forEach(function (e) {
                          a(e, 'load error', function () {
                            --f || s();
                          });
                        })
                      : s();
                }
                var i, s, l, f;
              }),
                o(Oe);
            },
            remove: function (e) {
              oe(
                g(e).map(function (e) {
                  return e.slide;
                }),
              ),
                o(Oe);
            },
            forEach: v,
            filter: g,
            style: function (e, t, n) {
              v(function (r) {
                r.style(e, t, n);
              });
            },
            getLength: function (e) {
              return e ? u.length : l.length;
            },
            isEnough: function () {
              return l.length > n.perPage;
            },
          };
        },
        Layout: function (e, t, n) {
          var r,
            i,
            o,
            a = Ge(e),
            s = a.on,
            u = a.bind,
            c = a.emit,
            l = t.Slides,
            f = t.Direction.resolve,
            d = t.Elements,
            p = d.root,
            h = d.track,
            v = d.list,
            g = l.getAt,
            y = l.style;
          function m() {
            (r = n.direction === tt),
              Z(p, 'maxWidth', de(n.width)),
              Z(h, f('paddingLeft'), x(!1)),
              Z(h, f('paddingRight'), x(!0)),
              b(!0);
          }
          function b(e) {
            var t,
              a = ie(p);
            (e || i.width !== a.width || i.height !== a.height) &&
              (Z(
                h,
                'height',
                ((t = ''),
                r &&
                  (ve((t = w()), 'height or heightRatio is missing.'),
                  (t = 'calc(' + t + ' - ' + x(!1) + ' - ' + x(!0) + ')')),
                t),
              ),
              y(f('marginRight'), de(n.gap)),
              y(
                'width',
                n.autoWidth ? null : de(n.fixedWidth) || (r ? '' : T()),
              ),
              y(
                'height',
                de(n.fixedHeight) || (r ? (n.autoHeight ? null : T()) : w()),
                !0,
              ),
              (i = a),
              c(Me),
              o !== (o = N()) && (_(p, Bt, o), c('overflow', o)));
          }
          function x(e) {
            var t = n.padding,
              r = f(e ? 'right' : 'left');
            return (t && de(t[r] || (A(t) ? 0 : t))) || '0px';
          }
          function w() {
            return de(n.height || ie(v).width * n.heightRatio);
          }
          function T() {
            var e = de(n.gap);
            return (
              'calc((100%' +
              (e && ' + ' + e) +
              ')/' +
              (n.perPage || 1) +
              (e && ' - ' + e) +
              ')'
            );
          }
          function C() {
            return ie(v)[f('width')];
          }
          function S(e, t) {
            var n = g(e || 0);
            return n ? ie(n.slide)[f('width')] + (t ? 0 : D()) : 0;
          }
          function k(e, t) {
            var n = g(e);
            if (n) {
              var r = ie(n.slide)[f('right')],
                i = ie(v)[f('left')];
              return xe(r - i) + (t ? 0 : D());
            }
            return 0;
          }
          function j(t) {
            return k(e.length - 1) - k(0) + S(0, t);
          }
          function D() {
            var e = g(0);
            return (e && parseFloat(Z(e.slide, f('marginRight')))) || 0;
          }
          function N() {
            return e.is(Qt) || j(!0) > C();
          }
          return {
            mount: function () {
              var e, t;
              m(),
                u(
                  window,
                  'resize load',
                  ((e = E(c, He)),
                  (t = Ye(0, e, null, 1)),
                  function () {
                    t.isPaused() && t.start();
                  }),
                ),
                s([Ie, Oe], m),
                s(He, b);
            },
            resize: b,
            listSize: C,
            slideSize: S,
            sliderSize: j,
            totalSize: k,
            getPadding: function (e) {
              return (
                parseFloat(Z(h, f('padding' + (e ? 'Right' : 'Left')))) || 0
              );
            },
            isOverflow: N,
          };
        },
        Clones: function (e, t, n) {
          var r,
            i = Ge(e),
            o = i.on,
            a = t.Elements,
            s = t.Slides,
            u = t.Direction.resolve,
            c = [];
          function l() {
            o(Oe, f),
              o([Ie, He], p),
              (r = h()) &&
                ((function (t) {
                  var r = s.get().slice(),
                    i = r.length;
                  if (i) {
                    for (; r.length < t; ) M(r, r);
                    M(r.slice(-t), r.slice(0, t)).forEach(function (o, u) {
                      var l = u < t,
                        f = (function (t, r) {
                          var i = t.cloneNode(!0);
                          return (
                            R(i, n.classes.clone),
                            (i.id = e.root.id + '-clone' + ke(r + 1)),
                            i
                          );
                        })(o.slide, u);
                      l ? W(f, r[0].slide) : F(a.list, f),
                        M(c, f),
                        s.register(f, u - t + (l ? 0 : i), o.index);
                    });
                  }
                })(r),
                t.Layout.resize(!0));
          }
          function f() {
            d(), l();
          }
          function d() {
            oe(c), x(c), i.destroy();
          }
          function p() {
            var e = h();
            r !== e && (r < e || !e) && i.emit(Oe);
          }
          function h() {
            var r = n.clones;
            if (e.is(Yt)) {
              if (L(r)) {
                var i = n[u('fixedWidth')] && t.Layout.slideSize(0);
                r =
                  (i && be(ie(a.track)[u('width')] / i)) ||
                  (n[u('autoWidth')] && e.length) ||
                  2 * n.perPage;
              }
            } else r = 0;
            return r;
          }
          return { mount: l, destroy: d };
        },
        Move: function (e, t, n) {
          var r,
            i = Ge(e),
            o = i.on,
            a = i.emit,
            s = e.state.set,
            u = t.Layout,
            c = u.slideSize,
            l = u.getPadding,
            f = u.totalSize,
            d = u.listSize,
            p = u.sliderSize,
            h = t.Direction,
            v = h.resolve,
            g = h.orient,
            m = t.Elements,
            b = m.list,
            x = m.track;
          function w() {
            t.Controller.isBusy() ||
              (t.Scroll.cancel(), E(e.index), t.Slides.update());
          }
          function E(e) {
            T(A(e, !0));
          }
          function T(n, r) {
            if (!e.is(Qt)) {
              var i = r
                ? n
                : (function (n) {
                    if (e.is(Yt)) {
                      var r = k(n),
                        i = r > t.Controller.getEnd();
                      (r < 0 || i) && (n = C(n, i));
                    }
                    return n;
                  })(n);
              Z(b, 'transform', 'translate' + v('X') + '(' + i + 'px)'),
                n !== i && a(Ue);
            }
          }
          function C(e, t) {
            var n = e - D(t),
              r = p();
            return e - g(r * (be(xe(n) / r) || 1)) * (t ? 1 : -1);
          }
          function S() {
            T(j(), !0), r.cancel();
          }
          function k(e) {
            for (
              var n = t.Slides.get(), r = 0, i = 1 / 0, o = 0;
              o < n.length;
              o++
            ) {
              var a = n[o].index,
                s = xe(A(a, !0) - e);
              if (!(s <= i)) break;
              (i = s), (r = a);
            }
            return r;
          }
          function A(t, r) {
            var i = g(
              f(t - 1) -
                (function (e) {
                  var t = n.focus;
                  return 'center' === t ? (d() - c(e, !0)) / 2 : +t * c(e) || 0;
                })(t),
            );
            return r
              ? (function (t) {
                  return (
                    n.trimSpace && e.is(Gt) && (t = Te(t, 0, g(p(!0) - d()))), t
                  );
                })(i)
              : i;
          }
          function j() {
            var e = v('left');
            return ie(b)[e] - ie(x)[e] + g(l(!1));
          }
          function D(e) {
            return A(e ? t.Controller.getEnd() : 0, !!n.trimSpace);
          }
          return {
            mount: function () {
              (r = t.Transition), o([De, Me, Ie, Oe], w);
            },
            move: function (e, t, n, i) {
              var o, u;
              e !== t &&
                ((o = e > n),
                (u = g(C(j(), o))),
                o ? u >= 0 : u <= b[v('scrollWidth')] - ie(x)[v('width')]) &&
                (S(), T(C(j(), e > n), !0)),
                s(y),
                a(Le, t, n, e),
                r.start(t, function () {
                  s(3), a(qe, t, n, e), i && i();
                });
            },
            jump: E,
            translate: T,
            shift: C,
            cancel: S,
            toIndex: k,
            toPosition: A,
            getPosition: j,
            getLimit: D,
            exceededLimit: function (e, t) {
              t = L(t) ? j() : t;
              var n = !0 !== e && g(t) < g(D(!1)),
                r = !1 !== e && g(t) > g(D(!0));
              return n || r;
            },
            reposition: w,
          };
        },
        Controller: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = Ge(e),
            u = s.on,
            c = s.emit,
            l = t.Move,
            f = l.getPosition,
            d = l.getLimit,
            p = l.toPosition,
            h = t.Slides,
            v = h.isEnough,
            g = h.getLength,
            b = n.omitEnd,
            x = e.is(Yt),
            w = e.is(Gt),
            T = E(D, !1),
            C = E(D, !0),
            S = n.start || 0,
            k = S;
          function A() {
            (i = g(!0)), (o = n.perMove), (a = n.perPage), (r = O());
            var e = Te(S, 0, b ? r : i - 1);
            e !== S && ((S = e), l.reposition());
          }
          function j() {
            r !== O() && c(Ve);
          }
          function D(e, t) {
            var n = o || (_() ? 1 : a),
              i = q(S + n * (e ? -1 : 1), S, !(o || _()));
            return -1 === i && w && !we(f(), d(!e), 1)
              ? e
                ? 0
                : r
              : t
              ? i
              : P(i);
          }
          function q(t, s, u) {
            if (v() || _()) {
              var c = (function (t) {
                if (w && 'move' === n.trimSpace && t !== S)
                  for (
                    var r = f();
                    r === p(t, !0) && Ee(t, 0, e.length - 1, !n.rewind);

                  )
                    t < S ? --t : ++t;
                return t;
              })(t);
              c !== t && ((s = t), (t = c), (u = !1)),
                t < 0 || t > r
                  ? (t =
                      o || (!Ee(0, t, s, !0) && !Ee(r, s, t, !0))
                        ? x
                          ? u
                            ? t < 0
                              ? -(i % a || a)
                              : i
                            : t
                          : n.rewind
                          ? t < 0
                            ? r
                            : 0
                          : -1
                        : I(H(t)))
                  : u && t !== s && (t = I(H(s) + (t < s ? -1 : 1)));
            } else t = -1;
            return t;
          }
          function P(e) {
            return x ? (e + i) % i || 0 : e;
          }
          function O() {
            for (var e = i - (_() || (x && o) ? 1 : a); b && e-- > 0; )
              if (p(i - 1, !0) !== p(e, !0)) {
                e++;
                break;
              }
            return Te(e, 0, i - 1);
          }
          function I(e) {
            return Te(_() ? e : a * e, 0, r);
          }
          function H(e) {
            return _() ? ge(e, r) : me((e >= r ? i - 1 : e) / a);
          }
          function M(e) {
            e !== S && ((k = S), (S = e));
          }
          function _() {
            return !L(n.focus) || n.isNavigation;
          }
          function R() {
            return e.state.is([y, m]) && !!n.waitForTransition;
          }
          return {
            mount: function () {
              A(), u([Ie, Oe, Ve], A), u(Me, j);
            },
            go: function (e, t, n) {
              if (!R()) {
                var i = (function (e) {
                    var t = S;
                    if (N(e)) {
                      var n = e.match(/([+\-<>])(\d+)?/) || [],
                        i = n[1],
                        o = n[2];
                      '+' === i || '-' === i
                        ? (t = q(S + +('' + i + (+o || 1)), S))
                        : '>' === i
                        ? (t = o ? I(+o) : T(!0))
                        : '<' === i && (t = C(!0));
                    } else t = x ? e : Te(e, 0, r);
                    return t;
                  })(e),
                  o = P(i);
                o > -1 && (t || o !== S) && (M(o), l.move(i, o, k, n));
              }
            },
            scroll: function (e, n, i, o) {
              t.Scroll.scroll(e, n, i, function () {
                var e = P(l.toIndex(f()));
                M(b ? ge(e, r) : e), o && o();
              });
            },
            getNext: T,
            getPrev: C,
            getAdjacent: D,
            getEnd: O,
            setIndex: M,
            getIndex: function (e) {
              return e ? k : S;
            },
            toIndex: I,
            toPage: H,
            toDest: function (e) {
              var t = l.toIndex(e);
              return w ? Te(t, 0, r) : t;
            },
            hasFocus: _,
            isBusy: R,
          };
        },
        Arrows: function (e, t, n) {
          var r,
            i,
            o = Ge(e),
            a = o.on,
            s = o.bind,
            u = o.emit,
            c = n.classes,
            l = n.i18n,
            f = t.Elements,
            d = t.Controller,
            p = f.arrows,
            h = f.track,
            v = p,
            g = f.prev,
            y = f.next,
            m = {};
          function b() {
            var e;
            !(e = n.arrows) ||
              (g && y) ||
              ((v = p || K('div', c.arrows)),
              (g = C(!0)),
              (y = C(!1)),
              (r = !0),
              F(v, [g, y]),
              !p && W(v, h)),
              g &&
                y &&
                (V(m, { prev: g, next: y }),
                ee(v, e ? '' : 'none'),
                R(v, (i = kt + '--' + n.direction)),
                e &&
                  (a([De, qe, Oe, Re, Ve], S),
                  s(y, 'click', E(T, '>')),
                  s(g, 'click', E(T, '<')),
                  S(),
                  J([g, y], at, h.id),
                  u('arrows:mounted', g, y))),
              a(Ie, x);
          }
          function x() {
            w(), b();
          }
          function w() {
            o.destroy(),
              le(v, i),
              r ? (oe(p ? [g, y] : v), (g = y = null)) : Q([g, y], yt);
          }
          function T(e) {
            d.go(e, !0);
          }
          function C(e) {
            return ae(
              '<button class="' +
                c.arrow +
                ' ' +
                (e ? c.prev : c.next) +
                '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                (n.arrowPath ||
                  'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z') +
                '" />',
            );
          }
          function S() {
            if (g && y) {
              var t = e.index,
                n = d.getPrev(),
                r = d.getNext(),
                i = n > -1 && t < n ? l.last : l.prev,
                o = r > -1 && t > r ? l.first : l.next;
              (g.disabled = n < 0),
                (y.disabled = r < 0),
                J(g, ct, i),
                J(y, ct, o),
                u('arrows:updated', g, y, n, r);
            }
          }
          return { arrows: m, mount: b, destroy: w, update: S };
        },
        Autoplay: function (e, t, n) {
          var r,
            i,
            o = Ge(e),
            a = o.on,
            s = o.bind,
            u = o.emit,
            c = Ye(n.interval, e.go.bind(e, '>'), function (e) {
              var t = f.bar;
              t && Z(t, 'width', 100 * e + '%'), u('autoplay:playing', e);
            }),
            l = c.isPaused,
            f = t.Elements,
            d = t.Elements,
            p = d.root,
            h = d.toggle,
            v = n.autoplay,
            g = 'pause' === v;
          function y() {
            l() &&
              t.Slides.isEnough() &&
              (c.start(!n.resetProgress), (i = r = g = !1), x(), u(Be));
          }
          function m(e) {
            void 0 === e && (e = !0), (g = !!e), x(), l() || (c.pause(), u($e));
          }
          function b() {
            g || (r || i ? m(!1) : y());
          }
          function x() {
            h && (_(h, Ht, !g), J(h, ct, n.i18n[g ? 'play' : 'pause']));
          }
          function w(e) {
            var r = t.Slides.getAt(e);
            c.set((r && +ne(r.slide, Jt)) || n.interval);
          }
          return {
            mount: function () {
              v &&
                (n.pauseOnHover &&
                  s(p, 'mouseenter mouseleave', function (e) {
                    (r = 'mouseenter' === e.type), b();
                  }),
                n.pauseOnFocus &&
                  s(p, 'focusin focusout', function (e) {
                    (i = 'focusin' === e.type), b();
                  }),
                h &&
                  s(h, 'click', function () {
                    g ? y() : m(!0);
                  }),
                a([Le, _e, Oe], c.rewind),
                a(Le, w),
                h && J(h, at, f.track.id),
                g || y(),
                x());
            },
            destroy: c.cancel,
            play: y,
            pause: m,
            isPaused: l,
          };
        },
        Cover: function (e, t, n) {
          var r = Ge(e).on;
          function i(e) {
            t.Slides.forEach(function (t) {
              var n = z(t.container || t.slide, 'img');
              n && n.src && o(e, n, t);
            });
          }
          function o(e, t, n) {
            n.style(
              'background',
              e ? 'center/cover no-repeat url("' + t.src + '")' : '',
              !0,
            ),
              ee(t, e ? 'none' : '');
          }
          return {
            mount: function () {
              n.cover && (r(ze, E(o, !0)), r([De, Ie, Oe], E(i, !0)));
            },
            destroy: E(i, !1),
          };
        },
        Scroll: function (e, t, n) {
          var r,
            i,
            o = Ge(e),
            a = o.on,
            s = o.emit,
            u = e.state.set,
            c = t.Move,
            l = c.getPosition,
            f = c.getLimit,
            d = c.exceededLimit,
            p = c.translate,
            h = e.is(Gt),
            v = 1;
          function g(e, n, o, a, f) {
            var p = l();
            if ((x(), o && (!h || !d()))) {
              var g = t.Layout.sliderSize(),
                w = Ce(e) * g * me(xe(e) / g) || 0;
              e = c.toPosition(t.Controller.toDest(e % g)) + w;
            }
            var T = we(p, e, 1);
            (v = 1),
              (n = T ? 0 : n || ye(xe(e - p) / 1.5, 800)),
              (i = a),
              (r = Ye(n, y, E(b, p, e, f), 1)),
              u(m),
              s(_e),
              r.start();
          }
          function y() {
            u(3), i && i(), s(Re);
          }
          function b(e, t, r, o) {
            var a,
              s,
              u = l(),
              c =
                (e +
                  (t - e) *
                    ((a = o),
                    (s = n.easingFunc) ? s(a) : 1 - Math.pow(1 - a, 4)) -
                  u) *
                v;
            p(u + c),
              h &&
                !r &&
                d() &&
                ((v *= 0.6), xe(c) < 10 && g(f(d(!0)), 600, !1, i, !0));
          }
          function x() {
            r && r.cancel();
          }
          function w() {
            r && !r.isPaused() && (x(), y());
          }
          return {
            mount: function () {
              a(Le, x), a([Ie, Oe], w);
            },
            destroy: x,
            scroll: g,
            cancel: w,
          };
        },
        Drag: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f = Ge(e),
            d = f.on,
            p = f.emit,
            h = f.bind,
            v = f.unbind,
            g = e.state,
            b = t.Move,
            x = t.Scroll,
            w = t.Controller,
            E = t.Elements.track,
            T = t.Media.reduce,
            S = t.Direction,
            k = S.resolve,
            j = S.orient,
            D = b.getPosition,
            N = b.exceededLimit,
            L = !1;
          function q() {
            var e = n.drag;
            z(!e), (a = 'free' === e);
          }
          function P(e) {
            if (((u = !1), !c)) {
              var t = $(e);
              (r = e.target),
                (i = n.noDrag),
                B(r, '.' + Lt + ', .' + At) ||
                  (i && B(r, i)) ||
                  (!t && e.button) ||
                  (w.isBusy()
                    ? se(e, !0)
                    : ((l = t ? E : window),
                      (s = g.is([y, m])),
                      (o = null),
                      h(l, Ut, O, Kt),
                      h(l, Vt, I, Kt),
                      b.cancel(),
                      x.cancel(),
                      M(e)));
            }
            var r, i;
          }
          function O(t) {
            if ((g.is(6) || (g.set(6), p('drag')), t.cancelable))
              if (s) {
                b.translate(r + _(t) / (L && e.is(Gt) ? 5 : 1));
                var i = R(t) > 200,
                  o = L !== (L = N());
                (i || o) && M(t), (u = !0), p('dragging'), se(t);
              } else
                (function (e) {
                  return xe(_(e)) > xe(_(e, !0));
                })(t) &&
                  ((s = (function (e) {
                    var t = n.dragMinThreshold,
                      r = A(t),
                      i = (r && t.mouse) || 0,
                      o = (r ? t.touch : +t) || 10;
                    return xe(_(e)) > ($(e) ? o : i);
                  })(t)),
                  se(t));
          }
          function I(r) {
            g.is(6) && (g.set(3), p('dragged')),
              s &&
                ((function (r) {
                  var i = (function (t) {
                      if (e.is(Yt) || !L) {
                        var n = R(t);
                        if (n && n < 200) return _(t) / n;
                      }
                      return 0;
                    })(r),
                    o = (function (e) {
                      return (
                        D() +
                        Ce(e) *
                          ge(
                            xe(e) * (n.flickPower || 600),
                            a
                              ? 1 / 0
                              : t.Layout.listSize() * (n.flickMaxPages || 1),
                          )
                      );
                    })(i),
                    s = n.rewind && n.rewindByDrag;
                  T(!1),
                    a
                      ? w.scroll(o, 0, n.snap)
                      : e.is(Qt)
                      ? w.go(j(Ce(i)) < 0 ? (s ? '<' : '-') : s ? '>' : '+')
                      : e.is(Gt) && L && s
                      ? w.go(N(!0) ? '>' : '<')
                      : w.go(w.toDest(o), !0),
                    T(!0);
                })(r),
                se(r)),
              v(l, Ut, O),
              v(l, Vt, I),
              (s = !1);
          }
          function H(e) {
            !c && u && se(e, !0);
          }
          function M(e) {
            (o = i), (i = e), (r = D());
          }
          function _(e, t) {
            return W(e, t) - W(F(e), t);
          }
          function R(e) {
            return fe(e) - fe(F(e));
          }
          function F(e) {
            return (i === e && o) || i;
          }
          function W(e, t) {
            return ($(e) ? e.changedTouches[0] : e)['page' + k(t ? 'Y' : 'X')];
          }
          function $(e) {
            return 'undefined' != typeof TouchEvent && e instanceof TouchEvent;
          }
          function z(e) {
            c = e;
          }
          return {
            mount: function () {
              h(E, Ut, C, Kt),
                h(E, Vt, C, Kt),
                h(E, Xt, P, Kt),
                h(E, 'click', H, { capture: !0 }),
                h(E, 'dragstart', se),
                d([De, Ie], q);
            },
            disable: z,
            isDragging: function () {
              return s;
            },
          };
        },
        Keyboard: function (e, t, n) {
          var r,
            i,
            o = Ge(e),
            a = o.on,
            s = o.bind,
            u = o.unbind,
            c = e.root,
            l = t.Direction.resolve;
          function f() {
            var e = n.keyboard;
            e && ((r = 'global' === e ? window : c), s(r, tn, h));
          }
          function d() {
            u(r, tn);
          }
          function p() {
            var e = i;
            (i = !0),
              T(function () {
                i = e;
              });
          }
          function h(t) {
            if (!i) {
              var n = en(t);
              n === l(Je) ? e.go('<') : n === l(Ke) && e.go('>');
            }
          }
          return {
            mount: function () {
              f(), a(Ie, d), a(Ie, f), a(Le, p);
            },
            destroy: d,
            disable: function (e) {
              i = e;
            },
          };
        },
        LazyLoad: function (e, t, n) {
          var r = Ge(e),
            i = r.on,
            o = r.off,
            a = r.bind,
            s = r.emit,
            u = 'sequential' === n.lazyLoad,
            c = [qe, Re],
            l = [];
          function f() {
            x(l),
              t.Slides.forEach(function (e) {
                ce(e.slide, on).forEach(function (t) {
                  var r = ne(t, nn),
                    i = ne(t, rn);
                  if (r !== t.src || i !== t.srcset) {
                    var o = n.classes.spinner,
                      a = t.parentElement,
                      s = z(a, '.' + o) || K('span', o, a);
                    l.push([t, e, s]), t.src || ee(t, 'none');
                  }
                });
              }),
              u ? v() : (o(c), i(c, d), d());
          }
          function d() {
            (l = l.filter(function (t) {
              var r = n.perPage * ((n.preloadPages || 1) + 1) - 1;
              return !t[1].isWithin(e.index, r) || p(t);
            })).length || o(c);
          }
          function p(e) {
            var t = e[0];
            R(e[1].slide, Ft),
              a(t, 'load error', E(h, e)),
              J(t, 'src', ne(t, nn)),
              J(t, 'srcset', ne(t, rn)),
              Q(t, nn),
              Q(t, rn);
          }
          function h(e, t) {
            var n = e[0],
              r = e[1];
            le(r.slide, Ft),
              'error' !== t.type && (oe(e[2]), ee(n, ''), s(ze, n, r), s(He)),
              u && v();
          }
          function v() {
            l.length && p(l.shift());
          }
          return {
            mount: function () {
              n.lazyLoad && (f(), i(Oe, f));
            },
            destroy: E(x, l),
            check: d,
          };
        },
        Pagination: function (e, t, n) {
          var r,
            i,
            o = Ge(e),
            a = o.on,
            s = o.emit,
            u = o.bind,
            c = t.Slides,
            l = t.Elements,
            f = t.Controller,
            d = f.hasFocus,
            p = f.getIndex,
            h = f.go,
            v = t.Direction.resolve,
            g = l.pagination,
            y = [];
          function m() {
            r && (oe(g ? w(r.children) : r), le(r, i), x(y), (r = null)),
              o.destroy();
          }
          function b(e) {
            h('>' + e, !0);
          }
          function T(e, t) {
            var n = y.length,
              r = en(t),
              i = C(),
              o = -1;
            r === v(Ke, !1, i)
              ? (o = ++e % n)
              : r === v(Je, !1, i)
              ? (o = (--e + n) % n)
              : 'Home' === r
              ? (o = 0)
              : 'End' === r && (o = n - 1);
            var a = y[o];
            a && (te(a.button), h('>' + o), se(t, !0));
          }
          function C() {
            return n.paginationDirection || n.direction;
          }
          function S(e) {
            return y[f.toPage(e)];
          }
          function k() {
            var e = S(p(!0)),
              t = S(p());
            if (e) {
              var n = e.button;
              le(n, Ht), Q(n, ut), J(n, it, -1);
            }
            if (t) {
              var i = t.button;
              R(i, Ht), J(i, ut, !0), J(i, it, '');
            }
            s('pagination:updated', { list: r, items: y }, e, t);
          }
          return {
            items: y,
            mount: function t() {
              m(), a([Ie, Oe, Ve], t);
              var o = n.pagination;
              g && ee(g, o ? '' : 'none'),
                o &&
                  (a([Le, _e, Re], k),
                  (function () {
                    var t = e.length,
                      o = n.classes,
                      a = n.i18n,
                      s = n.perPage,
                      p = d() ? f.getEnd() + 1 : be(t / s);
                    R(
                      (r = g || K('ul', o.pagination, l.track.parentElement)),
                      (i = Nt + '--' + C()),
                    ),
                      J(r, rt, 'tablist'),
                      J(r, ct, a.select),
                      J(r, dt, C() === tt ? 'vertical' : '');
                    for (var h = 0; h < p; h++) {
                      var v = K('li', null, r),
                        m = K('button', { class: o.page, type: 'button' }, v),
                        x = c.getIn(h).map(function (e) {
                          return e.slide.id;
                        }),
                        w = !d() && s > 1 ? a.pageX : a.slideX;
                      u(m, 'click', E(b, h)),
                        n.paginationKeyboard && u(m, 'keydown', E(T, h)),
                        J(v, rt, 'presentation'),
                        J(m, rt, 'tab'),
                        J(m, at, x.join(' ')),
                        J(m, ct, Se(w, h + 1)),
                        J(m, it, -1),
                        y.push({ li: v, button: m, page: h });
                    }
                  })(),
                  k(),
                  s('pagination:mounted', { list: r, items: y }, S(e.index)));
            },
            destroy: m,
            getAt: S,
            update: k,
          };
        },
        Sync: function (e, t, n) {
          var r = n.isNavigation,
            i = n.slideFocus,
            o = [];
          function a() {
            var t, n;
            e.splides.forEach(function (t) {
              t.isParent || (u(e, t.splide), u(t.splide, e));
            }),
              r &&
                ((n = (t = Ge(e)).on)(Pe, l),
                n(Xe, f),
                n([De, Ie], c),
                o.push(t),
                t.emit(We, e.splides));
          }
          function s() {
            o.forEach(function (e) {
              e.destroy();
            }),
              x(o);
          }
          function u(e, t) {
            var n = Ge(e);
            n.on(Le, function (e, n, r) {
              t.go(t.is(Yt) ? r : e);
            }),
              o.push(n);
          }
          function c() {
            J(t.Elements.list, dt, n.direction === tt ? 'vertical' : '');
          }
          function l(t) {
            e.go(t.index);
          }
          function f(e, t) {
            H(an, en(t)) && (l(e), se(t));
          }
          return {
            setup: E(t.Media.set, { slideFocus: L(i) ? r : i }, !0),
            mount: a,
            destroy: s,
            remount: function () {
              s(), a();
            },
          };
        },
        Wheel: function (e, t, n) {
          var r = Ge(e).bind,
            i = 0;
          function o(r) {
            if (r.cancelable) {
              var o = r.deltaY,
                a = o < 0,
                s = fe(r),
                u = n.wheelMinThreshold || 0,
                c = n.wheelSleep || 0;
              xe(o) > u && s - i > c && (e.go(a ? '<' : '>'), (i = s)),
                (function (r) {
                  return (
                    !n.releaseWheel ||
                    e.state.is(y) ||
                    -1 !== t.Controller.getAdjacent(r)
                  );
                })(a) && se(r);
            }
          }
          return {
            mount: function () {
              n.wheel && r(t.Elements.track, 'wheel', o, Kt);
            },
          };
        },
        Live: function (e, t, n) {
          var r = Ge(e).on,
            i = t.Elements.track,
            o = n.live && !n.isNavigation,
            a = K('span', Ot),
            s = Ye(90, E(u, !1));
          function u(e) {
            J(i, vt, e), e ? (F(i, a), s.start()) : (oe(a), s.cancel());
          }
          function c(e) {
            o && J(i, ht, e ? 'off' : 'polite');
          }
          return {
            mount: function () {
              o &&
                (c(!t.Autoplay.isPaused()),
                J(i, gt, !0),
                (a.textContent = '…'),
                r(Be, E(c, !0)),
                r($e, E(c, !1)),
                r([qe, Re], E(u, !0)));
            },
            disable: c,
            destroy: function () {
              Q(i, [ht, gt, vt]), oe(a);
            },
          };
        },
      }),
      un = {
        type: 'slide',
        role: 'region',
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        drag: !0,
        direction: 'ltr',
        trimSpace: !0,
        focusableNodes: 'a, button, textarea, input, select, iframe',
        live: !0,
        classes: zt,
        i18n: {
          prev: 'Previous slide',
          next: 'Next slide',
          first: 'Go to first slide',
          last: 'Go to last slide',
          slideX: 'Go to slide %s',
          pageX: 'Go to page %s',
          play: 'Start autoplay',
          pause: 'Pause autoplay',
          carousel: 'carousel',
          slide: 'slide',
          select: 'Select a slide to show',
          slideLabel: '%s of %s',
        },
        reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: 'pause' },
      };
    function cn(e, t, n) {
      var r = t.Slides;
      function i() {
        r.forEach(function (e) {
          e.style('transform', 'translateX(-' + 100 * e.index + '%)');
        });
      }
      return {
        mount: function () {
          Ge(e).on([De, Oe], i);
        },
        start: function (e, t) {
          r.style('transition', 'opacity ' + n.speed + 'ms ' + n.easing), T(t);
        },
        cancel: C,
      };
    }
    function ln(e, t, n) {
      var r,
        i = t.Move,
        o = t.Controller,
        a = t.Scroll,
        s = t.Elements.list,
        u = E(Z, s, 'transition');
      function c() {
        u(''), a.cancel();
      }
      return {
        mount: function () {
          Ge(e).bind(s, 'transitionend', function (e) {
            e.target === s && r && (c(), r());
          });
        },
        start: function (t, s) {
          var c = i.toPosition(t, !0),
            l = i.getPosition(),
            f = (function (t) {
              var r = n.rewindSpeed;
              if (e.is(Gt) && r) {
                var i = o.getIndex(!0),
                  a = o.getEnd();
                if ((0 === i && t >= a) || (i >= a && 0 === t)) return r;
              }
              return n.speed;
            })(t);
          xe(c - l) >= 1 && f >= 1
            ? n.useScroll
              ? a.scroll(c, f, !1, s)
              : (u('transform ' + f + 'ms ' + n.easing),
                i.translate(c, !0),
                (r = s))
            : (i.jump(t), s());
        },
        cancel: c,
      };
    }
    var fn = (function () {
        function e(t, n) {
          var r;
          (this.event = Ge()),
            (this.Components = {}),
            (this.state =
              ((r = 1),
              {
                set: function (e) {
                  r = e;
                },
                is: function (e) {
                  return H(O(e), r);
                },
              })),
            (this.splides = []),
            (this._o = {}),
            (this._E = {});
          var i = N(t) ? ue(document, t) : t;
          ve(i, i + ' is invalid.'),
            (this.root = i),
            (n = G(
              { label: ne(i, ct) || '', labelledby: ne(i, lt) || '' },
              un,
              e.defaults,
              n || {},
            ));
          try {
            G(n, JSON.parse(ne(i, he)));
          } catch (e) {
            ve(!1, 'Invalid JSON');
          }
          this._o = Object.create(G({}, n));
        }
        var t,
          n,
          r = e.prototype;
        return (
          (r.mount = function (e, t) {
            var n = this,
              r = this.state,
              i = this.Components;
            return (
              ve(r.is([1, 7]), 'Already mounted!'),
              r.set(1),
              (this._C = i),
              (this._T = t || this._T || (this.is(Qt) ? cn : ln)),
              (this._E = e || this._E),
              U(V({}, sn, this._E, { Transition: this._T }), function (e, t) {
                var r = e(n, i, n._o);
                (i[t] = r), r.setup && r.setup();
              }),
              U(i, function (e) {
                e.mount && e.mount();
              }),
              this.emit(De),
              R(this.root, It),
              r.set(3),
              this.emit(Ne),
              this
            );
          }),
          (r.sync = function (e) {
            return (
              this.splides.push({ splide: e }),
              e.splides.push({ splide: this, isParent: !0 }),
              this.state.is(3) &&
                (this._C.Sync.remount(), e.Components.Sync.remount()),
              this
            );
          }),
          (r.go = function (e) {
            return this._C.Controller.go(e), this;
          }),
          (r.on = function (e, t) {
            return this.event.on(e, t), this;
          }),
          (r.off = function (e) {
            return this.event.off(e), this;
          }),
          (r.emit = function (e) {
            var t;
            return (
              (t = this.event).emit.apply(t, [e].concat(w(arguments, 1))), this
            );
          }),
          (r.add = function (e, t) {
            return this._C.Slides.add(e, t), this;
          }),
          (r.remove = function (e) {
            return this._C.Slides.remove(e), this;
          }),
          (r.is = function (e) {
            return this._o.type === e;
          }),
          (r.refresh = function () {
            return this.emit(Oe), this;
          }),
          (r.destroy = function (e) {
            void 0 === e && (e = !0);
            var t = this.event,
              n = this.state;
            return (
              n.is(1)
                ? Ge(this).on(Ne, this.destroy.bind(this, e))
                : (U(
                    this._C,
                    function (t) {
                      t.destroy && t.destroy(e);
                    },
                    !0,
                  ),
                  t.emit(Fe),
                  t.destroy(),
                  e && x(this.splides),
                  n.set(7)),
              this
            );
          }),
          (t = e),
          (n = [
            {
              key: 'options',
              get: function () {
                return this._o;
              },
              set: function (e) {
                this._C.Media.set(e, !0, !0);
              },
            },
            {
              key: 'length',
              get: function () {
                return this._C.Slides.getLength(!0);
              },
            },
            {
              key: 'index',
              get: function () {
                return this._C.Controller.getIndex();
              },
            },
          ]) && v(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e
        );
      })(),
      dn = fn;
    (dn.defaults = {}),
      (dn.STATES = b),
      document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('[data-vf-trending-slider]') &&
          new dn('[data-vf-trending-slider]', {
            gap: 32,
            type: 'slide',
            pagination: !1,
            arrows: !0,
            perPage: 4,
            perMove: 1,
            breakpoints: { 575: { perPage: 2, gap: 16 }, 992: { perPage: 3 } },
          }).mount();
      });
  })();
})();
