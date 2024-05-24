'use strict';
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.38.0(0e330ae453813de4e6cf272460fb79c7117073d0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/language/json/jsonWorker', ['require', 'require'], (require) => {
  var moduleExports = (() => {
    var lt = Object.defineProperty;
    var Hr = Object.getOwnPropertyDescriptor;
    var Gr = Object.getOwnPropertyNames;
    var Xr = Object.prototype.hasOwnProperty;
    var Zr = (t, r) => {
        for (var i in r) lt(t, i, { get: r[i], enumerable: !0 });
      },
      Qr = (t, r, i, e) => {
        if ((r && typeof r == 'object') || typeof r == 'function')
          for (let n of Gr(r))
            !Xr.call(t, n) &&
              n !== i &&
              lt(t, n, {
                get: () => r[n],
                enumerable: !(e = Hr(r, n)) || e.enumerable,
              });
        return t;
      };
    var Yr = (t) => Qr(lt({}, '__esModule', { value: !0 }), t);
    var _n = {};
    Zr(_n, { JSONWorker: () => st, create: () => Bn });
    function Pe(t, r) {
      r === void 0 && (r = !1);
      var i = t.length,
        e = 0,
        n = '',
        a = 0,
        s = 16,
        o = 0,
        f = 0,
        l = 0,
        u = 0,
        c = 0;
      function h(v, O) {
        for (var E = 0, j = 0; E < v || !O; ) {
          var A = t.charCodeAt(e);
          if (A >= 48 && A <= 57) j = j * 16 + A - 48;
          else if (A >= 65 && A <= 70) j = j * 16 + A - 65 + 10;
          else if (A >= 97 && A <= 102) j = j * 16 + A - 97 + 10;
          else break;
          e++, E++;
        }
        return E < v && (j = -1), j;
      }
      function g(v) {
        (e = v), (n = ''), (a = 0), (s = 16), (c = 0);
      }
      function m() {
        var v = e;
        if (t.charCodeAt(e) === 48) e++;
        else for (e++; e < t.length && Ce(t.charCodeAt(e)); ) e++;
        if (e < t.length && t.charCodeAt(e) === 46)
          if ((e++, e < t.length && Ce(t.charCodeAt(e))))
            for (e++; e < t.length && Ce(t.charCodeAt(e)); ) e++;
          else return (c = 3), t.substring(v, e);
        var O = e;
        if (e < t.length && (t.charCodeAt(e) === 69 || t.charCodeAt(e) === 101))
          if (
            (e++,
            ((e < t.length && t.charCodeAt(e) === 43) ||
              t.charCodeAt(e) === 45) &&
              e++,
            e < t.length && Ce(t.charCodeAt(e)))
          ) {
            for (e++; e < t.length && Ce(t.charCodeAt(e)); ) e++;
            O = e;
          } else c = 3;
        return t.substring(v, O);
      }
      function p() {
        for (var v = '', O = e; ; ) {
          if (e >= i) {
            (v += t.substring(O, e)), (c = 2);
            break;
          }
          var E = t.charCodeAt(e);
          if (E === 34) {
            (v += t.substring(O, e)), e++;
            break;
          }
          if (E === 92) {
            if (((v += t.substring(O, e)), e++, e >= i)) {
              c = 2;
              break;
            }
            var j = t.charCodeAt(e++);
            switch (j) {
              case 34:
                v += '"';
                break;
              case 92:
                v += '\\';
                break;
              case 47:
                v += '/';
                break;
              case 98:
                v += '\b';
                break;
              case 102:
                v += '\f';
                break;
              case 110:
                v += `
`;
                break;
              case 114:
                v += '\r';
                break;
              case 116:
                v += '	';
                break;
              case 117:
                var A = h(4, !0);
                A >= 0 ? (v += String.fromCharCode(A)) : (c = 4);
                break;
              default:
                c = 5;
            }
            O = e;
            continue;
          }
          if (E >= 0 && E <= 31)
            if (Le(E)) {
              (v += t.substring(O, e)), (c = 2);
              break;
            } else c = 6;
          e++;
        }
        return v;
      }
      function d() {
        if (((n = ''), (c = 0), (a = e), (f = o), (u = l), e >= i))
          return (a = i), (s = 17);
        var v = t.charCodeAt(e);
        if (ht(v)) {
          do e++, (n += String.fromCharCode(v)), (v = t.charCodeAt(e));
          while (ht(v));
          return (s = 15);
        }
        if (Le(v))
          return (
            e++,
            (n += String.fromCharCode(v)),
            v === 13 &&
              t.charCodeAt(e) === 10 &&
              (e++,
              (n += `
`)),
            o++,
            (l = e),
            (s = 14)
          );
        switch (v) {
          case 123:
            return e++, (s = 1);
          case 125:
            return e++, (s = 2);
          case 91:
            return e++, (s = 3);
          case 93:
            return e++, (s = 4);
          case 58:
            return e++, (s = 6);
          case 44:
            return e++, (s = 5);
          case 34:
            return e++, (n = p()), (s = 10);
          case 47:
            var O = e - 1;
            if (t.charCodeAt(e + 1) === 47) {
              for (e += 2; e < i && !Le(t.charCodeAt(e)); ) e++;
              return (n = t.substring(O, e)), (s = 12);
            }
            if (t.charCodeAt(e + 1) === 42) {
              e += 2;
              for (var E = i - 1, j = !1; e < E; ) {
                var A = t.charCodeAt(e);
                if (A === 42 && t.charCodeAt(e + 1) === 47) {
                  (e += 2), (j = !0);
                  break;
                }
                e++,
                  Le(A) &&
                    (A === 13 && t.charCodeAt(e) === 10 && e++, o++, (l = e));
              }
              return j || (e++, (c = 1)), (n = t.substring(O, e)), (s = 13);
            }
            return (n += String.fromCharCode(v)), e++, (s = 16);
          case 45:
            if (
              ((n += String.fromCharCode(v)),
              e++,
              e === i || !Ce(t.charCodeAt(e)))
            )
              return (s = 16);
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return (n += m()), (s = 11);
          default:
            for (; e < i && b(v); ) e++, (v = t.charCodeAt(e));
            if (a !== e) {
              switch (((n = t.substring(a, e)), n)) {
                case 'true':
                  return (s = 8);
                case 'false':
                  return (s = 9);
                case 'null':
                  return (s = 7);
              }
              return (s = 16);
            }
            return (n += String.fromCharCode(v)), e++, (s = 16);
        }
      }
      function b(v) {
        if (ht(v) || Le(v)) return !1;
        switch (v) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return !1;
        }
        return !0;
      }
      function y() {
        var v;
        do v = d();
        while (v >= 12 && v <= 15);
        return v;
      }
      return {
        setPosition: g,
        getPosition: function () {
          return e;
        },
        scan: r ? y : d,
        getToken: function () {
          return s;
        },
        getTokenValue: function () {
          return n;
        },
        getTokenOffset: function () {
          return a;
        },
        getTokenLength: function () {
          return e - a;
        },
        getTokenStartLine: function () {
          return f;
        },
        getTokenStartCharacter: function () {
          return a - u;
        },
        getTokenError: function () {
          return c;
        },
      };
    }
    function ht(t) {
      return (
        t === 32 ||
        t === 9 ||
        t === 11 ||
        t === 12 ||
        t === 160 ||
        t === 5760 ||
        (t >= 8192 && t <= 8203) ||
        t === 8239 ||
        t === 8287 ||
        t === 12288 ||
        t === 65279
      );
    }
    function Le(t) {
      return t === 10 || t === 13 || t === 8232 || t === 8233;
    }
    function Ce(t) {
      return t >= 48 && t <= 57;
    }
    function pt(t, r, i) {
      var e, n, a, s, o;
      if (r) {
        for (s = r.offset, o = s + r.length, a = s; a > 0 && !gt(t, a - 1); )
          a--;
        for (var f = o; f < t.length && !gt(t, f); ) f++;
        (n = t.substring(a, f)), (e = en(n, i));
      } else (n = t), (e = 0), (a = 0), (s = 0), (o = t.length);
      var l = tn(i, t),
        u = !1,
        c = 0,
        h;
      i.insertSpaces ? (h = dt(' ', i.tabSize || 4)) : (h = '	');
      var g = Pe(n, !1),
        m = !1;
      function p() {
        return l + dt(h, e + c);
      }
      function d() {
        var N = g.scan();
        for (u = !1; N === 15 || N === 14; )
          (u = u || N === 14), (N = g.scan());
        return (m = N === 16 || g.getTokenError() !== 0), N;
      }
      var b = [];
      function y(N, V, R) {
        !m &&
          (!r || (V < o && R > s)) &&
          t.substring(V, R) !== N &&
          b.push({ offset: V, length: R - V, content: N });
      }
      var v = d();
      if (v !== 17) {
        var O = g.getTokenOffset() + a,
          E = dt(h, e);
        y(E, a, O);
      }
      for (; v !== 17; ) {
        for (
          var j = g.getTokenOffset() + g.getTokenLength() + a,
            A = d(),
            P = '',
            w = !1;
          !u && (A === 12 || A === 13);

        ) {
          var C = g.getTokenOffset() + a;
          y(' ', j, C),
            (j = g.getTokenOffset() + g.getTokenLength() + a),
            (w = A === 12),
            (P = w ? p() : ''),
            (A = d());
        }
        if (A === 2) v !== 1 && (c--, (P = p()));
        else if (A === 4) v !== 3 && (c--, (P = p()));
        else {
          switch (v) {
            case 3:
            case 1:
              c++, (P = p());
              break;
            case 5:
            case 12:
              P = p();
              break;
            case 13:
              u ? (P = p()) : w || (P = ' ');
              break;
            case 6:
              w || (P = ' ');
              break;
            case 10:
              if (A === 6) {
                w || (P = '');
                break;
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              A === 12 || A === 13
                ? w || (P = ' ')
                : A !== 5 && A !== 17 && (m = !0);
              break;
            case 16:
              m = !0;
              break;
          }
          u && (A === 12 || A === 13) && (P = p());
        }
        A === 17 && (P = i.insertFinalNewline ? l : '');
        var L = g.getTokenOffset() + a;
        y(P, j, L), (v = A);
      }
      return b;
    }
    function dt(t, r) {
      for (var i = '', e = 0; e < r; e++) i += t;
      return i;
    }
    function en(t, r) {
      for (var i = 0, e = 0, n = r.tabSize || 4; i < t.length; ) {
        var a = t.charAt(i);
        if (a === ' ') e++;
        else if (a === '	') e += n;
        else break;
        i++;
      }
      return Math.floor(e / n);
    }
    function tn(t, r) {
      for (var i = 0; i < r.length; i++) {
        var e = r.charAt(i);
        if (e === '\r')
          return i + 1 < r.length &&
            r.charAt(i + 1) ===
              `
`
            ? `\r
`
            : '\r';
        if (
          e ===
          `
`
        )
          return `
`;
      }
      return (
        (t && t.eol) ||
        `
`
      );
    }
    function gt(t, r) {
      return (
        `\r
`.indexOf(t.charAt(r)) !== -1
      );
    }
    var Be;
    (function (t) {
      t.DEFAULT = { allowTrailingComma: !1 };
    })(Be || (Be = {}));
    function Xt(t, r, i) {
      r === void 0 && (r = []), i === void 0 && (i = Be.DEFAULT);
      var e = null,
        n = [],
        a = [];
      function s(f) {
        Array.isArray(n) ? n.push(f) : e !== null && (n[e] = f);
      }
      var o = {
        onObjectBegin: function () {
          var f = {};
          s(f), a.push(n), (n = f), (e = null);
        },
        onObjectProperty: function (f) {
          e = f;
        },
        onObjectEnd: function () {
          n = a.pop();
        },
        onArrayBegin: function () {
          var f = [];
          s(f), a.push(n), (n = f), (e = null);
        },
        onArrayEnd: function () {
          n = a.pop();
        },
        onLiteralValue: s,
        onError: function (f, l, u) {
          r.push({ error: f, offset: l, length: u });
        },
      };
      return Zt(t, o, i), n[0];
    }
    function mt(t) {
      if (!t.parent || !t.parent.children) return [];
      var r = mt(t.parent);
      if (t.parent.type === 'property') {
        var i = t.parent.children[0].value;
        r.push(i);
      } else if (t.parent.type === 'array') {
        var e = t.parent.children.indexOf(t);
        e !== -1 && r.push(e);
      }
      return r;
    }
    function _e(t) {
      switch (t.type) {
        case 'array':
          return t.children.map(_e);
        case 'object':
          for (
            var r = Object.create(null), i = 0, e = t.children;
            i < e.length;
            i++
          ) {
            var n = e[i],
              a = n.children[1];
            a && (r[n.children[0].value] = _e(a));
          }
          return r;
        case 'null':
        case 'string':
        case 'number':
        case 'boolean':
          return t.value;
        default:
          return;
      }
    }
    function nn(t, r, i) {
      return (
        i === void 0 && (i = !1),
        (r >= t.offset && r < t.offset + t.length) ||
          (i && r === t.offset + t.length)
      );
    }
    function vt(t, r, i) {
      if ((i === void 0 && (i = !1), nn(t, r, i))) {
        var e = t.children;
        if (Array.isArray(e))
          for (var n = 0; n < e.length && e[n].offset <= r; n++) {
            var a = vt(e[n], r, i);
            if (a) return a;
          }
        return t;
      }
    }
    function Zt(t, r, i) {
      i === void 0 && (i = Be.DEFAULT);
      var e = Pe(t, !1);
      function n(w) {
        return w
          ? function () {
              return w(
                e.getTokenOffset(),
                e.getTokenLength(),
                e.getTokenStartLine(),
                e.getTokenStartCharacter(),
              );
            }
          : function () {
              return !0;
            };
      }
      function a(w) {
        return w
          ? function (C) {
              return w(
                C,
                e.getTokenOffset(),
                e.getTokenLength(),
                e.getTokenStartLine(),
                e.getTokenStartCharacter(),
              );
            }
          : function () {
              return !0;
            };
      }
      var s = n(r.onObjectBegin),
        o = a(r.onObjectProperty),
        f = n(r.onObjectEnd),
        l = n(r.onArrayBegin),
        u = n(r.onArrayEnd),
        c = a(r.onLiteralValue),
        h = a(r.onSeparator),
        g = n(r.onComment),
        m = a(r.onError),
        p = i && i.disallowComments,
        d = i && i.allowTrailingComma;
      function b() {
        for (;;) {
          var w = e.scan();
          switch (e.getTokenError()) {
            case 4:
              y(14);
              break;
            case 5:
              y(15);
              break;
            case 3:
              y(13);
              break;
            case 1:
              p || y(11);
              break;
            case 2:
              y(12);
              break;
            case 6:
              y(16);
              break;
          }
          switch (w) {
            case 12:
            case 13:
              p ? y(10) : g();
              break;
            case 16:
              y(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return w;
          }
        }
      }
      function y(w, C, L) {
        if (
          (C === void 0 && (C = []),
          L === void 0 && (L = []),
          m(w),
          C.length + L.length > 0)
        )
          for (var N = e.getToken(); N !== 17; ) {
            if (C.indexOf(N) !== -1) {
              b();
              break;
            } else if (L.indexOf(N) !== -1) break;
            N = b();
          }
      }
      function v(w) {
        var C = e.getTokenValue();
        return w ? c(C) : o(C), b(), !0;
      }
      function O() {
        switch (e.getToken()) {
          case 11:
            var w = e.getTokenValue(),
              C = Number(w);
            isNaN(C) && (y(2), (C = 0)), c(C);
            break;
          case 7:
            c(null);
            break;
          case 8:
            c(!0);
            break;
          case 9:
            c(!1);
            break;
          default:
            return !1;
        }
        return b(), !0;
      }
      function E() {
        return e.getToken() !== 10
          ? (y(3, [], [2, 5]), !1)
          : (v(!1),
            e.getToken() === 6
              ? (h(':'), b(), P() || y(4, [], [2, 5]))
              : y(5, [], [2, 5]),
            !0);
      }
      function j() {
        s(), b();
        for (var w = !1; e.getToken() !== 2 && e.getToken() !== 17; ) {
          if (e.getToken() === 5) {
            if ((w || y(4, [], []), h(','), b(), e.getToken() === 2 && d))
              break;
          } else w && y(6, [], []);
          E() || y(4, [], [2, 5]), (w = !0);
        }
        return f(), e.getToken() !== 2 ? y(7, [2], []) : b(), !0;
      }
      function A() {
        l(), b();
        for (var w = !1; e.getToken() !== 4 && e.getToken() !== 17; ) {
          if (e.getToken() === 5) {
            if ((w || y(4, [], []), h(','), b(), e.getToken() === 4 && d))
              break;
          } else w && y(6, [], []);
          P() || y(4, [], [4, 5]), (w = !0);
        }
        return u(), e.getToken() !== 4 ? y(8, [4], []) : b(), !0;
      }
      function P() {
        switch (e.getToken()) {
          case 3:
            return A();
          case 1:
            return j();
          case 10:
            return v(!0);
          default:
            return O();
        }
      }
      return (
        b(),
        e.getToken() === 17
          ? i.allowEmptyContent
            ? !0
            : (y(4, [], []), !1)
          : P()
          ? (e.getToken() !== 17 && y(9, [], []), !0)
          : (y(4, [], []), !1)
      );
    }
    var le = Pe;
    var Qt = Xt;
    var Yt = vt,
      Kt = mt,
      er = _e;
    function tr(t, r, i) {
      return pt(t, r, i);
    }
    function Ie(t, r) {
      if (t === r) return !0;
      if (
        t == null ||
        r === null ||
        r === void 0 ||
        typeof t != typeof r ||
        typeof t != 'object' ||
        Array.isArray(t) !== Array.isArray(r)
      )
        return !1;
      var i, e;
      if (Array.isArray(t)) {
        if (t.length !== r.length) return !1;
        for (i = 0; i < t.length; i++) if (!Ie(t[i], r[i])) return !1;
      } else {
        var n = [];
        for (e in t) n.push(e);
        n.sort();
        var a = [];
        for (e in r) a.push(e);
        if ((a.sort(), !Ie(n, a))) return !1;
        for (i = 0; i < n.length; i++) if (!Ie(t[n[i]], r[n[i]])) return !1;
      }
      return !0;
    }
    function ee(t) {
      return typeof t == 'number';
    }
    function se(t) {
      return typeof t < 'u';
    }
    function ie(t) {
      return typeof t == 'boolean';
    }
    function rr(t) {
      return typeof t == 'string';
    }
    function un(t, r) {
      if (t.length < r.length) return !1;
      for (var i = 0; i < r.length; i++) if (t[i] !== r[i]) return !1;
      return !0;
    }
    function pe(t, r) {
      var i = t.length - r.length;
      return i > 0 ? t.lastIndexOf(r) === i : i === 0 ? t === r : !1;
    }
    function xe(t) {
      var r = '';
      un(t, '(?i)') && ((t = t.substring(4)), (r = 'i'));
      try {
        return new RegExp(t, r + 'u');
      } catch {
        try {
          return new RegExp(t, r);
        } catch {
          return;
        }
      }
    }
    var ir;
    (function (t) {
      (t.MIN_VALUE = -2147483648), (t.MAX_VALUE = 2147483647);
    })(ir || (ir = {}));
    var Ge;
    (function (t) {
      (t.MIN_VALUE = 0), (t.MAX_VALUE = 2147483647);
    })(Ge || (Ge = {}));
    var re;
    (function (t) {
      function r(e, n) {
        return (
          e === Number.MAX_VALUE && (e = Ge.MAX_VALUE),
          n === Number.MAX_VALUE && (n = Ge.MAX_VALUE),
          { line: e, character: n }
        );
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.objectLiteral(n) && x.uinteger(n.line) && x.uinteger(n.character)
        );
      }
      t.is = i;
    })(re || (re = {}));
    var U;
    (function (t) {
      function r(e, n, a, s) {
        if (x.uinteger(e) && x.uinteger(n) && x.uinteger(a) && x.uinteger(s))
          return { start: re.create(e, n), end: re.create(a, s) };
        if (re.is(e) && re.is(n)) return { start: e, end: n };
        throw new Error(
          'Range#create called with invalid arguments[' +
            e +
            ', ' +
            n +
            ', ' +
            a +
            ', ' +
            s +
            ']',
        );
      }
      t.create = r;
      function i(e) {
        var n = e;
        return x.objectLiteral(n) && re.is(n.start) && re.is(n.end);
      }
      t.is = i;
    })(U || (U = {}));
    var Se;
    (function (t) {
      function r(e, n) {
        return { uri: e, range: n };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.defined(n) &&
          U.is(n.range) &&
          (x.string(n.uri) || x.undefined(n.uri))
        );
      }
      t.is = i;
    })(Se || (Se = {}));
    var ar;
    (function (t) {
      function r(e, n, a, s) {
        return {
          targetUri: e,
          targetRange: n,
          targetSelectionRange: a,
          originSelectionRange: s,
        };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.defined(n) &&
          U.is(n.targetRange) &&
          x.string(n.targetUri) &&
          (U.is(n.targetSelectionRange) ||
            x.undefined(n.targetSelectionRange)) &&
          (U.is(n.originSelectionRange) || x.undefined(n.originSelectionRange))
        );
      }
      t.is = i;
    })(ar || (ar = {}));
    var Xe;
    (function (t) {
      function r(e, n, a, s) {
        return { red: e, green: n, blue: a, alpha: s };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.numberRange(n.red, 0, 1) &&
          x.numberRange(n.green, 0, 1) &&
          x.numberRange(n.blue, 0, 1) &&
          x.numberRange(n.alpha, 0, 1)
        );
      }
      t.is = i;
    })(Xe || (Xe = {}));
    var bt;
    (function (t) {
      function r(e, n) {
        return { range: e, color: n };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return U.is(n.range) && Xe.is(n.color);
      }
      t.is = i;
    })(bt || (bt = {}));
    var xt;
    (function (t) {
      function r(e, n, a) {
        return { label: e, textEdit: n, additionalTextEdits: a };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.string(n.label) &&
          (x.undefined(n.textEdit) || Y.is(n)) &&
          (x.undefined(n.additionalTextEdits) ||
            x.typedArray(n.additionalTextEdits, Y.is))
        );
      }
      t.is = i;
    })(xt || (xt = {}));
    var Ae;
    (function (t) {
      (t.Comment = 'comment'), (t.Imports = 'imports'), (t.Region = 'region');
    })(Ae || (Ae = {}));
    var St;
    (function (t) {
      function r(e, n, a, s, o) {
        var f = { startLine: e, endLine: n };
        return (
          x.defined(a) && (f.startCharacter = a),
          x.defined(s) && (f.endCharacter = s),
          x.defined(o) && (f.kind = o),
          f
        );
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.uinteger(n.startLine) &&
          x.uinteger(n.startLine) &&
          (x.undefined(n.startCharacter) || x.uinteger(n.startCharacter)) &&
          (x.undefined(n.endCharacter) || x.uinteger(n.endCharacter)) &&
          (x.undefined(n.kind) || x.string(n.kind))
        );
      }
      t.is = i;
    })(St || (St = {}));
    var At;
    (function (t) {
      function r(e, n) {
        return { location: e, message: n };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return x.defined(n) && Se.is(n.location) && x.string(n.message);
      }
      t.is = i;
    })(At || (At = {}));
    var Z;
    (function (t) {
      (t.Error = 1), (t.Warning = 2), (t.Information = 3), (t.Hint = 4);
    })(Z || (Z = {}));
    var or;
    (function (t) {
      (t.Unnecessary = 1), (t.Deprecated = 2);
    })(or || (or = {}));
    var sr;
    (function (t) {
      function r(i) {
        var e = i;
        return e != null && x.string(e.href);
      }
      t.is = r;
    })(sr || (sr = {}));
    var ae;
    (function (t) {
      function r(e, n, a, s, o, f) {
        var l = { range: e, message: n };
        return (
          x.defined(a) && (l.severity = a),
          x.defined(s) && (l.code = s),
          x.defined(o) && (l.source = o),
          x.defined(f) && (l.relatedInformation = f),
          l
        );
      }
      t.create = r;
      function i(e) {
        var n,
          a = e;
        return (
          x.defined(a) &&
          U.is(a.range) &&
          x.string(a.message) &&
          (x.number(a.severity) || x.undefined(a.severity)) &&
          (x.integer(a.code) || x.string(a.code) || x.undefined(a.code)) &&
          (x.undefined(a.codeDescription) ||
            x.string(
              (n = a.codeDescription) === null || n === void 0
                ? void 0
                : n.href,
            )) &&
          (x.string(a.source) || x.undefined(a.source)) &&
          (x.undefined(a.relatedInformation) ||
            x.typedArray(a.relatedInformation, At.is))
        );
      }
      t.is = i;
    })(ae || (ae = {}));
    var je;
    (function (t) {
      function r(e, n) {
        for (var a = [], s = 2; s < arguments.length; s++)
          a[s - 2] = arguments[s];
        var o = { title: e, command: n };
        return x.defined(a) && a.length > 0 && (o.arguments = a), o;
      }
      t.create = r;
      function i(e) {
        var n = e;
        return x.defined(n) && x.string(n.title) && x.string(n.command);
      }
      t.is = i;
    })(je || (je = {}));
    var Y;
    (function (t) {
      function r(a, s) {
        return { range: a, newText: s };
      }
      t.replace = r;
      function i(a, s) {
        return { range: { start: a, end: a }, newText: s };
      }
      t.insert = i;
      function e(a) {
        return { range: a, newText: '' };
      }
      t.del = e;
      function n(a) {
        var s = a;
        return x.objectLiteral(s) && x.string(s.newText) && U.is(s.range);
      }
      t.is = n;
    })(Y || (Y = {}));
    var Ee;
    (function (t) {
      function r(e, n, a) {
        var s = { label: e };
        return (
          n !== void 0 && (s.needsConfirmation = n),
          a !== void 0 && (s.description = a),
          s
        );
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          n !== void 0 &&
          x.objectLiteral(n) &&
          x.string(n.label) &&
          (x.boolean(n.needsConfirmation) || n.needsConfirmation === void 0) &&
          (x.string(n.description) || n.description === void 0)
        );
      }
      t.is = i;
    })(Ee || (Ee = {}));
    var X;
    (function (t) {
      function r(i) {
        var e = i;
        return typeof e == 'string';
      }
      t.is = r;
    })(X || (X = {}));
    var me;
    (function (t) {
      function r(a, s, o) {
        return { range: a, newText: s, annotationId: o };
      }
      t.replace = r;
      function i(a, s, o) {
        return { range: { start: a, end: a }, newText: s, annotationId: o };
      }
      t.insert = i;
      function e(a, s) {
        return { range: a, newText: '', annotationId: s };
      }
      t.del = e;
      function n(a) {
        var s = a;
        return Y.is(s) && (Ee.is(s.annotationId) || X.is(s.annotationId));
      }
      t.is = n;
    })(me || (me = {}));
    var Ve;
    (function (t) {
      function r(e, n) {
        return { textDocument: e, edits: n };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return x.defined(n) && Qe.is(n.textDocument) && Array.isArray(n.edits);
      }
      t.is = i;
    })(Ve || (Ve = {}));
    var Fe;
    (function (t) {
      function r(e, n, a) {
        var s = { kind: 'create', uri: e };
        return (
          n !== void 0 &&
            (n.overwrite !== void 0 || n.ignoreIfExists !== void 0) &&
            (s.options = n),
          a !== void 0 && (s.annotationId = a),
          s
        );
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          n &&
          n.kind === 'create' &&
          x.string(n.uri) &&
          (n.options === void 0 ||
            ((n.options.overwrite === void 0 ||
              x.boolean(n.options.overwrite)) &&
              (n.options.ignoreIfExists === void 0 ||
                x.boolean(n.options.ignoreIfExists)))) &&
          (n.annotationId === void 0 || X.is(n.annotationId))
        );
      }
      t.is = i;
    })(Fe || (Fe = {}));
    var $e;
    (function (t) {
      function r(e, n, a, s) {
        var o = { kind: 'rename', oldUri: e, newUri: n };
        return (
          a !== void 0 &&
            (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) &&
            (o.options = a),
          s !== void 0 && (o.annotationId = s),
          o
        );
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          n &&
          n.kind === 'rename' &&
          x.string(n.oldUri) &&
          x.string(n.newUri) &&
          (n.options === void 0 ||
            ((n.options.overwrite === void 0 ||
              x.boolean(n.options.overwrite)) &&
              (n.options.ignoreIfExists === void 0 ||
                x.boolean(n.options.ignoreIfExists)))) &&
          (n.annotationId === void 0 || X.is(n.annotationId))
        );
      }
      t.is = i;
    })($e || ($e = {}));
    var De;
    (function (t) {
      function r(e, n, a) {
        var s = { kind: 'delete', uri: e };
        return (
          n !== void 0 &&
            (n.recursive !== void 0 || n.ignoreIfNotExists !== void 0) &&
            (s.options = n),
          a !== void 0 && (s.annotationId = a),
          s
        );
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          n &&
          n.kind === 'delete' &&
          x.string(n.uri) &&
          (n.options === void 0 ||
            ((n.options.recursive === void 0 ||
              x.boolean(n.options.recursive)) &&
              (n.options.ignoreIfNotExists === void 0 ||
                x.boolean(n.options.ignoreIfNotExists)))) &&
          (n.annotationId === void 0 || X.is(n.annotationId))
        );
      }
      t.is = i;
    })(De || (De = {}));
    var Ze;
    (function (t) {
      function r(i) {
        var e = i;
        return (
          e &&
          (e.changes !== void 0 || e.documentChanges !== void 0) &&
          (e.documentChanges === void 0 ||
            e.documentChanges.every(function (n) {
              return x.string(n.kind)
                ? Fe.is(n) || $e.is(n) || De.is(n)
                : Ve.is(n);
            }))
        );
      }
      t.is = r;
    })(Ze || (Ze = {}));
    var He = (function () {
        function t(r, i) {
          (this.edits = r), (this.changeAnnotations = i);
        }
        return (
          (t.prototype.insert = function (r, i, e) {
            var n, a;
            if (
              (e === void 0
                ? (n = Y.insert(r, i))
                : X.is(e)
                ? ((a = e), (n = me.insert(r, i, e)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (a = this.changeAnnotations.manage(e)),
                  (n = me.insert(r, i, a))),
              this.edits.push(n),
              a !== void 0)
            )
              return a;
          }),
          (t.prototype.replace = function (r, i, e) {
            var n, a;
            if (
              (e === void 0
                ? (n = Y.replace(r, i))
                : X.is(e)
                ? ((a = e), (n = me.replace(r, i, e)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (a = this.changeAnnotations.manage(e)),
                  (n = me.replace(r, i, a))),
              this.edits.push(n),
              a !== void 0)
            )
              return a;
          }),
          (t.prototype.delete = function (r, i) {
            var e, n;
            if (
              (i === void 0
                ? (e = Y.del(r))
                : X.is(i)
                ? ((n = i), (e = me.del(r, i)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (n = this.changeAnnotations.manage(i)),
                  (e = me.del(r, n))),
              this.edits.push(e),
              n !== void 0)
            )
              return n;
          }),
          (t.prototype.add = function (r) {
            this.edits.push(r);
          }),
          (t.prototype.all = function () {
            return this.edits;
          }),
          (t.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
          }),
          (t.prototype.assertChangeAnnotations = function (r) {
            if (r === void 0)
              throw new Error(
                'Text edit change is not configured to manage change annotations.',
              );
          }),
          t
        );
      })(),
      fr = (function () {
        function t(r) {
          (this._annotations = r === void 0 ? Object.create(null) : r),
            (this._counter = 0),
            (this._size = 0);
        }
        return (
          (t.prototype.all = function () {
            return this._annotations;
          }),
          Object.defineProperty(t.prototype, 'size', {
            get: function () {
              return this._size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.manage = function (r, i) {
            var e;
            if (
              (X.is(r) ? (e = r) : ((e = this.nextId()), (i = r)),
              this._annotations[e] !== void 0)
            )
              throw new Error('Id ' + e + ' is already in use.');
            if (i === void 0)
              throw new Error('No annotation provided for id ' + e);
            return (this._annotations[e] = i), this._size++, e;
          }),
          (t.prototype.nextId = function () {
            return this._counter++, this._counter.toString();
          }),
          t
        );
      })(),
      ni = (function () {
        function t(r) {
          var i = this;
          (this._textEditChanges = Object.create(null)),
            r !== void 0
              ? ((this._workspaceEdit = r),
                r.documentChanges
                  ? ((this._changeAnnotations = new fr(r.changeAnnotations)),
                    (r.changeAnnotations = this._changeAnnotations.all()),
                    r.documentChanges.forEach(function (e) {
                      if (Ve.is(e)) {
                        var n = new He(e.edits, i._changeAnnotations);
                        i._textEditChanges[e.textDocument.uri] = n;
                      }
                    }))
                  : r.changes &&
                    Object.keys(r.changes).forEach(function (e) {
                      var n = new He(r.changes[e]);
                      i._textEditChanges[e] = n;
                    }))
              : (this._workspaceEdit = {});
        }
        return (
          Object.defineProperty(t.prototype, 'edit', {
            get: function () {
              return (
                this.initDocumentChanges(),
                this._changeAnnotations !== void 0 &&
                  (this._changeAnnotations.size === 0
                    ? (this._workspaceEdit.changeAnnotations = void 0)
                    : (this._workspaceEdit.changeAnnotations =
                        this._changeAnnotations.all())),
                this._workspaceEdit
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.getTextEditChange = function (r) {
            if (Qe.is(r)) {
              if (
                (this.initDocumentChanges(),
                this._workspaceEdit.documentChanges === void 0)
              )
                throw new Error(
                  'Workspace edit is not configured for document changes.',
                );
              var i = { uri: r.uri, version: r.version },
                e = this._textEditChanges[i.uri];
              if (!e) {
                var n = [],
                  a = { textDocument: i, edits: n };
                this._workspaceEdit.documentChanges.push(a),
                  (e = new He(n, this._changeAnnotations)),
                  (this._textEditChanges[i.uri] = e);
              }
              return e;
            } else {
              if ((this.initChanges(), this._workspaceEdit.changes === void 0))
                throw new Error(
                  'Workspace edit is not configured for normal text edit changes.',
                );
              var e = this._textEditChanges[r];
              if (!e) {
                var n = [];
                (this._workspaceEdit.changes[r] = n),
                  (e = new He(n)),
                  (this._textEditChanges[r] = e);
              }
              return e;
            }
          }),
          (t.prototype.initDocumentChanges = function () {
            this._workspaceEdit.documentChanges === void 0 &&
              this._workspaceEdit.changes === void 0 &&
              ((this._changeAnnotations = new fr()),
              (this._workspaceEdit.documentChanges = []),
              (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all()));
          }),
          (t.prototype.initChanges = function () {
            this._workspaceEdit.documentChanges === void 0 &&
              this._workspaceEdit.changes === void 0 &&
              (this._workspaceEdit.changes = Object.create(null));
          }),
          (t.prototype.createFile = function (r, i, e) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.',
              );
            var n;
            Ee.is(i) || X.is(i) ? (n = i) : (e = i);
            var a, s;
            if (
              (n === void 0
                ? (a = Fe.create(r, e))
                : ((s = X.is(n) ? n : this._changeAnnotations.manage(n)),
                  (a = Fe.create(r, e, s))),
              this._workspaceEdit.documentChanges.push(a),
              s !== void 0)
            )
              return s;
          }),
          (t.prototype.renameFile = function (r, i, e, n) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.',
              );
            var a;
            Ee.is(e) || X.is(e) ? (a = e) : (n = e);
            var s, o;
            if (
              (a === void 0
                ? (s = $e.create(r, i, n))
                : ((o = X.is(a) ? a : this._changeAnnotations.manage(a)),
                  (s = $e.create(r, i, n, o))),
              this._workspaceEdit.documentChanges.push(s),
              o !== void 0)
            )
              return o;
          }),
          (t.prototype.deleteFile = function (r, i, e) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.',
              );
            var n;
            Ee.is(i) || X.is(i) ? (n = i) : (e = i);
            var a, s;
            if (
              (n === void 0
                ? (a = De.create(r, e))
                : ((s = X.is(n) ? n : this._changeAnnotations.manage(n)),
                  (a = De.create(r, e, s))),
              this._workspaceEdit.documentChanges.push(a),
              s !== void 0)
            )
              return s;
          }),
          t
        );
      })();
    var ur;
    (function (t) {
      function r(e) {
        return { uri: e };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return x.defined(n) && x.string(n.uri);
      }
      t.is = i;
    })(ur || (ur = {}));
    var wt;
    (function (t) {
      function r(e, n) {
        return { uri: e, version: n };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return x.defined(n) && x.string(n.uri) && x.integer(n.version);
      }
      t.is = i;
    })(wt || (wt = {}));
    var Qe;
    (function (t) {
      function r(e, n) {
        return { uri: e, version: n };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.defined(n) &&
          x.string(n.uri) &&
          (n.version === null || x.integer(n.version))
        );
      }
      t.is = i;
    })(Qe || (Qe = {}));
    var cr;
    (function (t) {
      function r(e, n, a, s) {
        return { uri: e, languageId: n, version: a, text: s };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.defined(n) &&
          x.string(n.uri) &&
          x.string(n.languageId) &&
          x.integer(n.version) &&
          x.string(n.text)
        );
      }
      t.is = i;
    })(cr || (cr = {}));
    var fe;
    (function (t) {
      (t.PlainText = 'plaintext'), (t.Markdown = 'markdown');
    })(fe || (fe = {}));
    (function (t) {
      function r(i) {
        var e = i;
        return e === t.PlainText || e === t.Markdown;
      }
      t.is = r;
    })(fe || (fe = {}));
    var Ye;
    (function (t) {
      function r(i) {
        var e = i;
        return x.objectLiteral(i) && fe.is(e.kind) && x.string(e.value);
      }
      t.is = r;
    })(Ye || (Ye = {}));
    var Q;
    (function (t) {
      (t.Text = 1),
        (t.Method = 2),
        (t.Function = 3),
        (t.Constructor = 4),
        (t.Field = 5),
        (t.Variable = 6),
        (t.Class = 7),
        (t.Interface = 8),
        (t.Module = 9),
        (t.Property = 10),
        (t.Unit = 11),
        (t.Value = 12),
        (t.Enum = 13),
        (t.Keyword = 14),
        (t.Snippet = 15),
        (t.Color = 16),
        (t.File = 17),
        (t.Reference = 18),
        (t.Folder = 19),
        (t.EnumMember = 20),
        (t.Constant = 21),
        (t.Struct = 22),
        (t.Event = 23),
        (t.Operator = 24),
        (t.TypeParameter = 25);
    })(Q || (Q = {}));
    var z;
    (function (t) {
      (t.PlainText = 1), (t.Snippet = 2);
    })(z || (z = {}));
    var Tt;
    (function (t) {
      t.Deprecated = 1;
    })(Tt || (Tt = {}));
    var lr;
    (function (t) {
      function r(e, n, a) {
        return { newText: e, insert: n, replace: a };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return n && x.string(n.newText) && U.is(n.insert) && U.is(n.replace);
      }
      t.is = i;
    })(lr || (lr = {}));
    var hr;
    (function (t) {
      (t.asIs = 1), (t.adjustIndentation = 2);
    })(hr || (hr = {}));
    var Re;
    (function (t) {
      function r(i) {
        return { label: i };
      }
      t.create = r;
    })(Re || (Re = {}));
    var kt;
    (function (t) {
      function r(i, e) {
        return { items: i || [], isIncomplete: !!e };
      }
      t.create = r;
    })(kt || (kt = {}));
    var Ue;
    (function (t) {
      function r(e) {
        return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
      }
      t.fromPlainText = r;
      function i(e) {
        var n = e;
        return (
          x.string(n) ||
          (x.objectLiteral(n) && x.string(n.language) && x.string(n.value))
        );
      }
      t.is = i;
    })(Ue || (Ue = {}));
    var Ot;
    (function (t) {
      function r(i) {
        var e = i;
        return (
          !!e &&
          x.objectLiteral(e) &&
          (Ye.is(e.contents) ||
            Ue.is(e.contents) ||
            x.typedArray(e.contents, Ue.is)) &&
          (i.range === void 0 || U.is(i.range))
        );
      }
      t.is = r;
    })(Ot || (Ot = {}));
    var dr;
    (function (t) {
      function r(i, e) {
        return e ? { label: i, documentation: e } : { label: i };
      }
      t.create = r;
    })(dr || (dr = {}));
    var gr;
    (function (t) {
      function r(i, e) {
        for (var n = [], a = 2; a < arguments.length; a++)
          n[a - 2] = arguments[a];
        var s = { label: i };
        return (
          x.defined(e) && (s.documentation = e),
          x.defined(n) ? (s.parameters = n) : (s.parameters = []),
          s
        );
      }
      t.create = r;
    })(gr || (gr = {}));
    var Ct;
    (function (t) {
      (t.Text = 1), (t.Read = 2), (t.Write = 3);
    })(Ct || (Ct = {}));
    var Pt;
    (function (t) {
      function r(i, e) {
        var n = { range: i };
        return x.number(e) && (n.kind = e), n;
      }
      t.create = r;
    })(Pt || (Pt = {}));
    var oe;
    (function (t) {
      (t.File = 1),
        (t.Module = 2),
        (t.Namespace = 3),
        (t.Package = 4),
        (t.Class = 5),
        (t.Method = 6),
        (t.Property = 7),
        (t.Field = 8),
        (t.Constructor = 9),
        (t.Enum = 10),
        (t.Interface = 11),
        (t.Function = 12),
        (t.Variable = 13),
        (t.Constant = 14),
        (t.String = 15),
        (t.Number = 16),
        (t.Boolean = 17),
        (t.Array = 18),
        (t.Object = 19),
        (t.Key = 20),
        (t.Null = 21),
        (t.EnumMember = 22),
        (t.Struct = 23),
        (t.Event = 24),
        (t.Operator = 25),
        (t.TypeParameter = 26);
    })(oe || (oe = {}));
    var pr;
    (function (t) {
      t.Deprecated = 1;
    })(pr || (pr = {}));
    var It;
    (function (t) {
      function r(i, e, n, a, s) {
        var o = { name: i, kind: e, location: { uri: a, range: n } };
        return s && (o.containerName = s), o;
      }
      t.create = r;
    })(It || (It = {}));
    var Et;
    (function (t) {
      function r(e, n, a, s, o, f) {
        var l = { name: e, detail: n, kind: a, range: s, selectionRange: o };
        return f !== void 0 && (l.children = f), l;
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          n &&
          x.string(n.name) &&
          x.number(n.kind) &&
          U.is(n.range) &&
          U.is(n.selectionRange) &&
          (n.detail === void 0 || x.string(n.detail)) &&
          (n.deprecated === void 0 || x.boolean(n.deprecated)) &&
          (n.children === void 0 || Array.isArray(n.children)) &&
          (n.tags === void 0 || Array.isArray(n.tags))
        );
      }
      t.is = i;
    })(Et || (Et = {}));
    var jt;
    (function (t) {
      (t.Empty = ''),
        (t.QuickFix = 'quickfix'),
        (t.Refactor = 'refactor'),
        (t.RefactorExtract = 'refactor.extract'),
        (t.RefactorInline = 'refactor.inline'),
        (t.RefactorRewrite = 'refactor.rewrite'),
        (t.Source = 'source'),
        (t.SourceOrganizeImports = 'source.organizeImports'),
        (t.SourceFixAll = 'source.fixAll');
    })(jt || (jt = {}));
    var Nt;
    (function (t) {
      function r(e, n) {
        var a = { diagnostics: e };
        return n != null && (a.only = n), a;
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.defined(n) &&
          x.typedArray(n.diagnostics, ae.is) &&
          (n.only === void 0 || x.typedArray(n.only, x.string))
        );
      }
      t.is = i;
    })(Nt || (Nt = {}));
    var Mt;
    (function (t) {
      function r(e, n, a) {
        var s = { title: e },
          o = !0;
        return (
          typeof n == 'string'
            ? ((o = !1), (s.kind = n))
            : je.is(n)
            ? (s.command = n)
            : (s.edit = n),
          o && a !== void 0 && (s.kind = a),
          s
        );
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          n &&
          x.string(n.title) &&
          (n.diagnostics === void 0 || x.typedArray(n.diagnostics, ae.is)) &&
          (n.kind === void 0 || x.string(n.kind)) &&
          (n.edit !== void 0 || n.command !== void 0) &&
          (n.command === void 0 || je.is(n.command)) &&
          (n.isPreferred === void 0 || x.boolean(n.isPreferred)) &&
          (n.edit === void 0 || Ze.is(n.edit))
        );
      }
      t.is = i;
    })(Mt || (Mt = {}));
    var mr;
    (function (t) {
      function r(e, n) {
        var a = { range: e };
        return x.defined(n) && (a.data = n), a;
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.defined(n) &&
          U.is(n.range) &&
          (x.undefined(n.command) || je.is(n.command))
        );
      }
      t.is = i;
    })(mr || (mr = {}));
    var vr;
    (function (t) {
      function r(e, n) {
        return { tabSize: e, insertSpaces: n };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.defined(n) && x.uinteger(n.tabSize) && x.boolean(n.insertSpaces)
        );
      }
      t.is = i;
    })(vr || (vr = {}));
    var Lt;
    (function (t) {
      function r(e, n, a) {
        return { range: e, target: n, data: a };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          x.defined(n) &&
          U.is(n.range) &&
          (x.undefined(n.target) || x.string(n.target))
        );
      }
      t.is = i;
    })(Lt || (Lt = {}));
    var Ne;
    (function (t) {
      function r(e, n) {
        return { range: e, parent: n };
      }
      t.create = r;
      function i(e) {
        var n = e;
        return (
          n !== void 0 &&
          U.is(n.range) &&
          (n.parent === void 0 || t.is(n.parent))
        );
      }
      t.is = i;
    })(Ne || (Ne = {}));
    var yr;
    (function (t) {
      function r(a, s, o, f) {
        return new cn(a, s, o, f);
      }
      t.create = r;
      function i(a) {
        var s = a;
        return !!(
          x.defined(s) &&
          x.string(s.uri) &&
          (x.undefined(s.languageId) || x.string(s.languageId)) &&
          x.uinteger(s.lineCount) &&
          x.func(s.getText) &&
          x.func(s.positionAt) &&
          x.func(s.offsetAt)
        );
      }
      t.is = i;
      function e(a, s) {
        for (
          var o = a.getText(),
            f = n(s, function (m, p) {
              var d = m.range.start.line - p.range.start.line;
              return d === 0
                ? m.range.start.character - p.range.start.character
                : d;
            }),
            l = o.length,
            u = f.length - 1;
          u >= 0;
          u--
        ) {
          var c = f[u],
            h = a.offsetAt(c.range.start),
            g = a.offsetAt(c.range.end);
          if (g <= l)
            o = o.substring(0, h) + c.newText + o.substring(g, o.length);
          else throw new Error('Overlapping edit');
          l = h;
        }
        return o;
      }
      t.applyEdits = e;
      function n(a, s) {
        if (a.length <= 1) return a;
        var o = (a.length / 2) | 0,
          f = a.slice(0, o),
          l = a.slice(o);
        n(f, s), n(l, s);
        for (var u = 0, c = 0, h = 0; u < f.length && c < l.length; ) {
          var g = s(f[u], l[c]);
          g <= 0 ? (a[h++] = f[u++]) : (a[h++] = l[c++]);
        }
        for (; u < f.length; ) a[h++] = f[u++];
        for (; c < l.length; ) a[h++] = l[c++];
        return a;
      }
    })(yr || (yr = {}));
    var cn = (function () {
        function t(r, i, e, n) {
          (this._uri = r),
            (this._languageId = i),
            (this._version = e),
            (this._content = n),
            (this._lineOffsets = void 0);
        }
        return (
          Object.defineProperty(t.prototype, 'uri', {
            get: function () {
              return this._uri;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'languageId', {
            get: function () {
              return this._languageId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'version', {
            get: function () {
              return this._version;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.getText = function (r) {
            if (r) {
              var i = this.offsetAt(r.start),
                e = this.offsetAt(r.end);
              return this._content.substring(i, e);
            }
            return this._content;
          }),
          (t.prototype.update = function (r, i) {
            (this._content = r.text),
              (this._version = i),
              (this._lineOffsets = void 0);
          }),
          (t.prototype.getLineOffsets = function () {
            if (this._lineOffsets === void 0) {
              for (
                var r = [], i = this._content, e = !0, n = 0;
                n < i.length;
                n++
              ) {
                e && (r.push(n), (e = !1));
                var a = i.charAt(n);
                (e =
                  a === '\r' ||
                  a ===
                    `
`),
                  a === '\r' &&
                    n + 1 < i.length &&
                    i.charAt(n + 1) ===
                      `
` &&
                    n++;
              }
              e && i.length > 0 && r.push(i.length), (this._lineOffsets = r);
            }
            return this._lineOffsets;
          }),
          (t.prototype.positionAt = function (r) {
            r = Math.max(Math.min(r, this._content.length), 0);
            var i = this.getLineOffsets(),
              e = 0,
              n = i.length;
            if (n === 0) return re.create(0, r);
            for (; e < n; ) {
              var a = Math.floor((e + n) / 2);
              i[a] > r ? (n = a) : (e = a + 1);
            }
            var s = e - 1;
            return re.create(s, r - i[s]);
          }),
          (t.prototype.offsetAt = function (r) {
            var i = this.getLineOffsets();
            if (r.line >= i.length) return this._content.length;
            if (r.line < 0) return 0;
            var e = i[r.line],
              n = r.line + 1 < i.length ? i[r.line + 1] : this._content.length;
            return Math.max(Math.min(e + r.character, n), e);
          }),
          Object.defineProperty(t.prototype, 'lineCount', {
            get: function () {
              return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(),
      x;
    (function (t) {
      var r = Object.prototype.toString;
      function i(g) {
        return typeof g < 'u';
      }
      t.defined = i;
      function e(g) {
        return typeof g > 'u';
      }
      t.undefined = e;
      function n(g) {
        return g === !0 || g === !1;
      }
      t.boolean = n;
      function a(g) {
        return r.call(g) === '[object String]';
      }
      t.string = a;
      function s(g) {
        return r.call(g) === '[object Number]';
      }
      t.number = s;
      function o(g, m, p) {
        return r.call(g) === '[object Number]' && m <= g && g <= p;
      }
      t.numberRange = o;
      function f(g) {
        return (
          r.call(g) === '[object Number]' && -2147483648 <= g && g <= 2147483647
        );
      }
      t.integer = f;
      function l(g) {
        return r.call(g) === '[object Number]' && 0 <= g && g <= 2147483647;
      }
      t.uinteger = l;
      function u(g) {
        return r.call(g) === '[object Function]';
      }
      t.func = u;
      function c(g) {
        return g !== null && typeof g == 'object';
      }
      t.objectLiteral = c;
      function h(g, m) {
        return Array.isArray(g) && g.every(m);
      }
      t.typedArray = h;
    })(x || (x = {}));
    var we = class {
        constructor(r, i, e, n) {
          (this._uri = r),
            (this._languageId = i),
            (this._version = e),
            (this._content = n),
            (this._lineOffsets = void 0);
        }
        get uri() {
          return this._uri;
        }
        get languageId() {
          return this._languageId;
        }
        get version() {
          return this._version;
        }
        getText(r) {
          if (r) {
            let i = this.offsetAt(r.start),
              e = this.offsetAt(r.end);
            return this._content.substring(i, e);
          }
          return this._content;
        }
        update(r, i) {
          for (let e of r)
            if (we.isIncremental(e)) {
              let n = xr(e.range),
                a = this.offsetAt(n.start),
                s = this.offsetAt(n.end);
              this._content =
                this._content.substring(0, a) +
                e.text +
                this._content.substring(s, this._content.length);
              let o = Math.max(n.start.line, 0),
                f = Math.max(n.end.line, 0),
                l = this._lineOffsets,
                u = br(e.text, !1, a);
              if (f - o === u.length)
                for (let h = 0, g = u.length; h < g; h++) l[h + o + 1] = u[h];
              else
                u.length < 1e4
                  ? l.splice(o + 1, f - o, ...u)
                  : (this._lineOffsets = l =
                      l.slice(0, o + 1).concat(u, l.slice(f + 1)));
              let c = e.text.length - (s - a);
              if (c !== 0)
                for (let h = o + 1 + u.length, g = l.length; h < g; h++)
                  l[h] = l[h] + c;
            } else if (we.isFull(e))
              (this._content = e.text), (this._lineOffsets = void 0);
            else throw new Error('Unknown change event received');
          this._version = i;
        }
        getLineOffsets() {
          return (
            this._lineOffsets === void 0 &&
              (this._lineOffsets = br(this._content, !0)),
            this._lineOffsets
          );
        }
        positionAt(r) {
          r = Math.max(Math.min(r, this._content.length), 0);
          let i = this.getLineOffsets(),
            e = 0,
            n = i.length;
          if (n === 0) return { line: 0, character: r };
          for (; e < n; ) {
            let s = Math.floor((e + n) / 2);
            i[s] > r ? (n = s) : (e = s + 1);
          }
          let a = e - 1;
          return { line: a, character: r - i[a] };
        }
        offsetAt(r) {
          let i = this.getLineOffsets();
          if (r.line >= i.length) return this._content.length;
          if (r.line < 0) return 0;
          let e = i[r.line],
            n = r.line + 1 < i.length ? i[r.line + 1] : this._content.length;
          return Math.max(Math.min(e + r.character, n), e);
        }
        get lineCount() {
          return this.getLineOffsets().length;
        }
        static isIncremental(r) {
          let i = r;
          return (
            i != null &&
            typeof i.text == 'string' &&
            i.range !== void 0 &&
            (i.rangeLength === void 0 || typeof i.rangeLength == 'number')
          );
        }
        static isFull(r) {
          let i = r;
          return (
            i != null &&
            typeof i.text == 'string' &&
            i.range === void 0 &&
            i.rangeLength === void 0
          );
        }
      },
      We;
    (function (t) {
      function r(n, a, s, o) {
        return new we(n, a, s, o);
      }
      t.create = r;
      function i(n, a, s) {
        if (n instanceof we) return n.update(a, s), n;
        throw new Error(
          'TextDocument.update: document must be created by TextDocument.create',
        );
      }
      t.update = i;
      function e(n, a) {
        let s = n.getText(),
          o = Vt(a.map(ln), (u, c) => {
            let h = u.range.start.line - c.range.start.line;
            return h === 0
              ? u.range.start.character - c.range.start.character
              : h;
          }),
          f = 0,
          l = [];
        for (let u of o) {
          let c = n.offsetAt(u.range.start);
          if (c < f) throw new Error('Overlapping edit');
          c > f && l.push(s.substring(f, c)),
            u.newText.length && l.push(u.newText),
            (f = n.offsetAt(u.range.end));
        }
        return l.push(s.substr(f)), l.join('');
      }
      t.applyEdits = e;
    })(We || (We = {}));
    function Vt(t, r) {
      if (t.length <= 1) return t;
      let i = (t.length / 2) | 0,
        e = t.slice(0, i),
        n = t.slice(i);
      Vt(e, r), Vt(n, r);
      let a = 0,
        s = 0,
        o = 0;
      for (; a < e.length && s < n.length; )
        r(e[a], n[s]) <= 0 ? (t[o++] = e[a++]) : (t[o++] = n[s++]);
      for (; a < e.length; ) t[o++] = e[a++];
      for (; s < n.length; ) t[o++] = n[s++];
      return t;
    }
    function br(t, r, i = 0) {
      let e = r ? [i] : [];
      for (let n = 0; n < t.length; n++) {
        let a = t.charCodeAt(n);
        (a === 13 || a === 10) &&
          (a === 13 && n + 1 < t.length && t.charCodeAt(n + 1) === 10 && n++,
          e.push(i + n + 1));
      }
      return e;
    }
    function xr(t) {
      let r = t.start,
        i = t.end;
      return r.line > i.line || (r.line === i.line && r.character > i.character)
        ? { start: i, end: r }
        : t;
    }
    function ln(t) {
      let r = xr(t.range);
      return r !== t.range ? { newText: t.newText, range: r } : t;
    }
    var W;
    (function (t) {
      (t[(t.Undefined = 0)] = 'Undefined'),
        (t[(t.EnumValueMismatch = 1)] = 'EnumValueMismatch'),
        (t[(t.Deprecated = 2)] = 'Deprecated'),
        (t[(t.UnexpectedEndOfComment = 257)] = 'UnexpectedEndOfComment'),
        (t[(t.UnexpectedEndOfString = 258)] = 'UnexpectedEndOfString'),
        (t[(t.UnexpectedEndOfNumber = 259)] = 'UnexpectedEndOfNumber'),
        (t[(t.InvalidUnicode = 260)] = 'InvalidUnicode'),
        (t[(t.InvalidEscapeCharacter = 261)] = 'InvalidEscapeCharacter'),
        (t[(t.InvalidCharacter = 262)] = 'InvalidCharacter'),
        (t[(t.PropertyExpected = 513)] = 'PropertyExpected'),
        (t[(t.CommaExpected = 514)] = 'CommaExpected'),
        (t[(t.ColonExpected = 515)] = 'ColonExpected'),
        (t[(t.ValueExpected = 516)] = 'ValueExpected'),
        (t[(t.CommaOrCloseBacketExpected = 517)] =
          'CommaOrCloseBacketExpected'),
        (t[(t.CommaOrCloseBraceExpected = 518)] = 'CommaOrCloseBraceExpected'),
        (t[(t.TrailingComma = 519)] = 'TrailingComma'),
        (t[(t.DuplicateKey = 520)] = 'DuplicateKey'),
        (t[(t.CommentNotPermitted = 521)] = 'CommentNotPermitted'),
        (t[(t.SchemaResolveError = 768)] = 'SchemaResolveError');
    })(W || (W = {}));
    var Sr;
    (function (t) {
      t.LATEST = {
        textDocument: {
          completion: {
            completionItem: {
              documentationFormat: [fe.Markdown, fe.PlainText],
              commitCharactersSupport: !0,
            },
          },
        },
      };
    })(Sr || (Sr = {}));
    function hn(t, r) {
      let i;
      return (
        r.length === 0
          ? (i = t)
          : (i = t.replace(/\{(\d+)\}/g, (e, n) => {
              let a = n[0];
              return typeof r[a] < 'u' ? r[a] : e;
            })),
        i
      );
    }
    function dn(t, r, ...i) {
      return hn(r, i);
    }
    function he(t) {
      return dn;
    }
    var Te = (function () {
        var t = function (r, i) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                  e.__proto__ = n;
                }) ||
              function (e, n) {
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }),
            t(r, i)
          );
        };
        return function (r, i) {
          if (typeof i != 'function' && i !== null)
            throw new TypeError(
              'Class extends value ' +
                String(i) +
                ' is not a constructor or null',
            );
          t(r, i);
          function e() {
            this.constructor = r;
          }
          r.prototype =
            i === null
              ? Object.create(i)
              : ((e.prototype = i.prototype), new e());
        };
      })(),
      M = he(),
      gn = {
        'color-hex': {
          errorMessage: M(
            'colorHexFormatWarning',
            'Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.',
          ),
          pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
        },
        'date-time': {
          errorMessage: M(
            'dateTimeFormatWarning',
            'String is not a RFC3339 date-time.',
          ),
          pattern:
            /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
        },
        date: {
          errorMessage: M('dateFormatWarning', 'String is not a RFC3339 date.'),
          pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i,
        },
        time: {
          errorMessage: M('timeFormatWarning', 'String is not a RFC3339 time.'),
          pattern:
            /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
        },
        email: {
          errorMessage: M(
            'emailFormatWarning',
            'String is not an e-mail address.',
          ),
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/,
        },
        hostname: {
          errorMessage: M('hostnameFormatWarning', 'String is not a hostname.'),
          pattern:
            /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
        },
        ipv4: {
          errorMessage: M(
            'ipv4FormatWarning',
            'String is not an IPv4 address.',
          ),
          pattern:
            /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
        },
        ipv6: {
          errorMessage: M(
            'ipv6FormatWarning',
            'String is not an IPv6 address.',
          ),
          pattern:
            /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
        },
      },
      ke = (function () {
        function t(r, i, e) {
          e === void 0 && (e = 0),
            (this.offset = i),
            (this.length = e),
            (this.parent = r);
        }
        return (
          Object.defineProperty(t.prototype, 'children', {
            get: function () {
              return [];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.toString = function () {
            return (
              'type: ' +
              this.type +
              ' (' +
              this.offset +
              '/' +
              this.length +
              ')' +
              (this.parent ? ' parent: {' + this.parent.toString() + '}' : '')
            );
          }),
          t
        );
      })();
    var pn = (function (t) {
      Te(r, t);
      function r(i, e) {
        var n = t.call(this, i, e) || this;
        return (n.type = 'null'), (n.value = null), n;
      }
      return r;
    })(ke);
    var Ar = (function (t) {
      Te(r, t);
      function r(i, e, n) {
        var a = t.call(this, i, n) || this;
        return (a.type = 'boolean'), (a.value = e), a;
      }
      return r;
    })(ke);
    var mn = (function (t) {
      Te(r, t);
      function r(i, e) {
        var n = t.call(this, i, e) || this;
        return (n.type = 'array'), (n.items = []), n;
      }
      return (
        Object.defineProperty(r.prototype, 'children', {
          get: function () {
            return this.items;
          },
          enumerable: !1,
          configurable: !0,
        }),
        r
      );
    })(ke);
    var vn = (function (t) {
      Te(r, t);
      function r(i, e) {
        var n = t.call(this, i, e) || this;
        return (
          (n.type = 'number'), (n.isInteger = !0), (n.value = Number.NaN), n
        );
      }
      return r;
    })(ke);
    var Ft = (function (t) {
      Te(r, t);
      function r(i, e, n) {
        var a = t.call(this, i, e, n) || this;
        return (a.type = 'string'), (a.value = ''), a;
      }
      return r;
    })(ke);
    var yn = (function (t) {
      Te(r, t);
      function r(i, e, n) {
        var a = t.call(this, i, e) || this;
        return (a.type = 'property'), (a.colonOffset = -1), (a.keyNode = n), a;
      }
      return (
        Object.defineProperty(r.prototype, 'children', {
          get: function () {
            return this.valueNode
              ? [this.keyNode, this.valueNode]
              : [this.keyNode];
          },
          enumerable: !1,
          configurable: !0,
        }),
        r
      );
    })(ke);
    var bn = (function (t) {
      Te(r, t);
      function r(i, e) {
        var n = t.call(this, i, e) || this;
        return (n.type = 'object'), (n.properties = []), n;
      }
      return (
        Object.defineProperty(r.prototype, 'children', {
          get: function () {
            return this.properties;
          },
          enumerable: !1,
          configurable: !0,
        }),
        r
      );
    })(ke);
    function K(t) {
      return ie(t) ? (t ? {} : { not: {} }) : t;
    }
    var wr;
    (function (t) {
      (t[(t.Key = 0)] = 'Key'), (t[(t.Enum = 1)] = 'Enum');
    })(wr || (wr = {}));
    var xn = (function () {
        function t(r, i) {
          r === void 0 && (r = -1),
            (this.focusOffset = r),
            (this.exclude = i),
            (this.schemas = []);
        }
        return (
          (t.prototype.add = function (r) {
            this.schemas.push(r);
          }),
          (t.prototype.merge = function (r) {
            Array.prototype.push.apply(this.schemas, r.schemas);
          }),
          (t.prototype.include = function (r) {
            return (
              (this.focusOffset === -1 || Dt(r, this.focusOffset)) &&
              r !== this.exclude
            );
          }),
          (t.prototype.newSub = function () {
            return new t(-1, this.exclude);
          }),
          t
        );
      })(),
      $t = (function () {
        function t() {}
        return (
          Object.defineProperty(t.prototype, 'schemas', {
            get: function () {
              return [];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.add = function (r) {}),
          (t.prototype.merge = function (r) {}),
          (t.prototype.include = function (r) {
            return !0;
          }),
          (t.prototype.newSub = function () {
            return this;
          }),
          (t.instance = new t()),
          t
        );
      })(),
      te = (function () {
        function t() {
          (this.problems = []),
            (this.propertiesMatches = 0),
            (this.propertiesValueMatches = 0),
            (this.primaryValueMatches = 0),
            (this.enumValueMatch = !1),
            (this.enumValues = void 0);
        }
        return (
          (t.prototype.hasProblems = function () {
            return !!this.problems.length;
          }),
          (t.prototype.mergeAll = function (r) {
            for (var i = 0, e = r; i < e.length; i++) {
              var n = e[i];
              this.merge(n);
            }
          }),
          (t.prototype.merge = function (r) {
            this.problems = this.problems.concat(r.problems);
          }),
          (t.prototype.mergeEnumValues = function (r) {
            if (
              !this.enumValueMatch &&
              !r.enumValueMatch &&
              this.enumValues &&
              r.enumValues
            ) {
              this.enumValues = this.enumValues.concat(r.enumValues);
              for (var i = 0, e = this.problems; i < e.length; i++) {
                var n = e[i];
                n.code === W.EnumValueMismatch &&
                  (n.message = M(
                    'enumWarning',
                    'Value is not accepted. Valid values: {0}.',
                    this.enumValues
                      .map(function (a) {
                        return JSON.stringify(a);
                      })
                      .join(', '),
                  ));
              }
            }
          }),
          (t.prototype.mergePropertyMatch = function (r) {
            this.merge(r),
              this.propertiesMatches++,
              (r.enumValueMatch || (!r.hasProblems() && r.propertiesMatches)) &&
                this.propertiesValueMatches++,
              r.enumValueMatch &&
                r.enumValues &&
                r.enumValues.length === 1 &&
                this.primaryValueMatches++;
          }),
          (t.prototype.compare = function (r) {
            var i = this.hasProblems();
            return i !== r.hasProblems()
              ? i
                ? -1
                : 1
              : this.enumValueMatch !== r.enumValueMatch
              ? r.enumValueMatch
                ? -1
                : 1
              : this.primaryValueMatches !== r.primaryValueMatches
              ? this.primaryValueMatches - r.primaryValueMatches
              : this.propertiesValueMatches !== r.propertiesValueMatches
              ? this.propertiesValueMatches - r.propertiesValueMatches
              : this.propertiesMatches - r.propertiesMatches;
          }),
          t
        );
      })();
    function Tr(t, r) {
      return r === void 0 && (r = []), new kr(t, r, []);
    }
    function ge(t) {
      return er(t);
    }
    function qe(t) {
      return Kt(t);
    }
    function Dt(t, r, i) {
      return (
        i === void 0 && (i = !1),
        (r >= t.offset && r < t.offset + t.length) ||
          (i && r === t.offset + t.length)
      );
    }
    var kr = (function () {
      function t(r, i, e) {
        i === void 0 && (i = []),
          e === void 0 && (e = []),
          (this.root = r),
          (this.syntaxErrors = i),
          (this.comments = e);
      }
      return (
        (t.prototype.getNodeFromOffset = function (r, i) {
          if ((i === void 0 && (i = !1), this.root)) return Yt(this.root, r, i);
        }),
        (t.prototype.visit = function (r) {
          if (this.root) {
            var i = function (e) {
              var n = r(e),
                a = e.children;
              if (Array.isArray(a))
                for (var s = 0; s < a.length && n; s++) n = i(a[s]);
              return n;
            };
            i(this.root);
          }
        }),
        (t.prototype.validate = function (r, i, e) {
          if ((e === void 0 && (e = Z.Warning), this.root && i)) {
            var n = new te();
            return (
              _(this.root, i, n, $t.instance),
              n.problems.map(function (a) {
                var s,
                  o = U.create(
                    r.positionAt(a.location.offset),
                    r.positionAt(a.location.offset + a.location.length),
                  );
                return ae.create(
                  o,
                  a.message,
                  (s = a.severity) !== null && s !== void 0 ? s : e,
                  a.code,
                );
              })
            );
          }
        }),
        (t.prototype.getMatchingSchemas = function (r, i, e) {
          i === void 0 && (i = -1);
          var n = new xn(i, e);
          return this.root && r && _(this.root, r, new te(), n), n.schemas;
        }),
        t
      );
    })();
    function _(t, r, i, e) {
      if (!t || !e.include(t)) return;
      var n = t;
      switch (n.type) {
        case 'object':
          l(n, r, i, e);
          break;
        case 'array':
          f(n, r, i, e);
          break;
        case 'string':
          o(n, r, i, e);
          break;
        case 'number':
          s(n, r, i, e);
          break;
        case 'property':
          return _(n.valueNode, r, i, e);
      }
      a(), e.add({ node: n, schema: r });
      function a() {
        function u(V) {
          return (
            n.type === V ||
            (V === 'integer' && n.type === 'number' && n.isInteger)
          );
        }
        if (
          (Array.isArray(r.type)
            ? r.type.some(u) ||
              i.problems.push({
                location: { offset: n.offset, length: n.length },
                message:
                  r.errorMessage ||
                  M(
                    'typeArrayMismatchWarning',
                    'Incorrect type. Expected one of {0}.',
                    r.type.join(', '),
                  ),
              })
            : r.type &&
              (u(r.type) ||
                i.problems.push({
                  location: { offset: n.offset, length: n.length },
                  message:
                    r.errorMessage ||
                    M(
                      'typeMismatchWarning',
                      'Incorrect type. Expected "{0}".',
                      r.type,
                    ),
                })),
          Array.isArray(r.allOf))
        )
          for (var c = 0, h = r.allOf; c < h.length; c++) {
            var g = h[c];
            _(n, K(g), i, e);
          }
        var m = K(r.not);
        if (m) {
          var p = new te(),
            d = e.newSub();
          _(n, m, p, d),
            p.hasProblems() ||
              i.problems.push({
                location: { offset: n.offset, length: n.length },
                message: M(
                  'notSchemaWarning',
                  'Matches a schema that is not allowed.',
                ),
              });
          for (var b = 0, y = d.schemas; b < y.length; b++) {
            var v = y[b];
            (v.inverted = !v.inverted), e.add(v);
          }
        }
        var O = function (V, R) {
          for (var H = [], q = void 0, T = 0, S = V; T < S.length; T++) {
            var k = S[T],
              I = K(k),
              F = new te(),
              D = e.newSub();
            if ((_(n, I, F, D), F.hasProblems() || H.push(I), !q))
              q = { schema: I, validationResult: F, matchingSchemas: D };
            else if (
              !R &&
              !F.hasProblems() &&
              !q.validationResult.hasProblems()
            )
              q.matchingSchemas.merge(D),
                (q.validationResult.propertiesMatches += F.propertiesMatches),
                (q.validationResult.propertiesValueMatches +=
                  F.propertiesValueMatches);
            else {
              var J = F.compare(q.validationResult);
              J > 0
                ? (q = { schema: I, validationResult: F, matchingSchemas: D })
                : J === 0 &&
                  (q.matchingSchemas.merge(D),
                  q.validationResult.mergeEnumValues(F));
            }
          }
          return (
            H.length > 1 &&
              R &&
              i.problems.push({
                location: { offset: n.offset, length: 1 },
                message: M(
                  'oneOfWarning',
                  'Matches multiple schemas when only one must validate.',
                ),
              }),
            q &&
              (i.merge(q.validationResult),
              (i.propertiesMatches += q.validationResult.propertiesMatches),
              (i.propertiesValueMatches +=
                q.validationResult.propertiesValueMatches),
              e.merge(q.matchingSchemas)),
            H.length
          );
        };
        Array.isArray(r.anyOf) && O(r.anyOf, !1),
          Array.isArray(r.oneOf) && O(r.oneOf, !0);
        var E = function (V) {
            var R = new te(),
              H = e.newSub();
            _(n, K(V), R, H),
              i.merge(R),
              (i.propertiesMatches += R.propertiesMatches),
              (i.propertiesValueMatches += R.propertiesValueMatches),
              e.merge(H);
          },
          j = function (V, R, H) {
            var q = K(V),
              T = new te(),
              S = e.newSub();
            _(n, q, T, S), e.merge(S), T.hasProblems() ? H && E(H) : R && E(R);
          },
          A = K(r.if);
        if ((A && j(A, K(r.then), K(r.else)), Array.isArray(r.enum))) {
          for (var P = ge(n), w = !1, C = 0, L = r.enum; C < L.length; C++) {
            var N = L[C];
            if (Ie(P, N)) {
              w = !0;
              break;
            }
          }
          (i.enumValues = r.enum),
            (i.enumValueMatch = w),
            w ||
              i.problems.push({
                location: { offset: n.offset, length: n.length },
                code: W.EnumValueMismatch,
                message:
                  r.errorMessage ||
                  M(
                    'enumWarning',
                    'Value is not accepted. Valid values: {0}.',
                    r.enum
                      .map(function (V) {
                        return JSON.stringify(V);
                      })
                      .join(', '),
                  ),
              });
        }
        if (se(r.const)) {
          var P = ge(n);
          Ie(P, r.const)
            ? (i.enumValueMatch = !0)
            : (i.problems.push({
                location: { offset: n.offset, length: n.length },
                code: W.EnumValueMismatch,
                message:
                  r.errorMessage ||
                  M(
                    'constWarning',
                    'Value must be {0}.',
                    JSON.stringify(r.const),
                  ),
              }),
              (i.enumValueMatch = !1)),
            (i.enumValues = [r.const]);
        }
        r.deprecationMessage &&
          n.parent &&
          i.problems.push({
            location: { offset: n.parent.offset, length: n.parent.length },
            severity: Z.Warning,
            message: r.deprecationMessage,
            code: W.Deprecated,
          });
      }
      function s(u, c, h, g) {
        var m = u.value;
        function p(C) {
          var L,
            N = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(C.toString());
          return (
            N && {
              value: Number(N[1] + (N[2] || '')),
              multiplier:
                (((L = N[2]) === null || L === void 0 ? void 0 : L.length) ||
                  0) - (parseInt(N[3]) || 0),
            }
          );
        }
        if (ee(c.multipleOf)) {
          var d = -1;
          if (Number.isInteger(c.multipleOf)) d = m % c.multipleOf;
          else {
            var b = p(c.multipleOf),
              y = p(m);
            if (b && y) {
              var v = Math.pow(10, Math.abs(y.multiplier - b.multiplier));
              y.multiplier < b.multiplier ? (y.value *= v) : (b.value *= v),
                (d = y.value % b.value);
            }
          }
          d !== 0 &&
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message: M(
                'multipleOfWarning',
                'Value is not divisible by {0}.',
                c.multipleOf,
              ),
            });
        }
        function O(C, L) {
          if (ee(L)) return L;
          if (ie(L) && L) return C;
        }
        function E(C, L) {
          if (!ie(L) || !L) return C;
        }
        var j = O(c.minimum, c.exclusiveMinimum);
        ee(j) &&
          m <= j &&
          h.problems.push({
            location: { offset: u.offset, length: u.length },
            message: M(
              'exclusiveMinimumWarning',
              'Value is below the exclusive minimum of {0}.',
              j,
            ),
          });
        var A = O(c.maximum, c.exclusiveMaximum);
        ee(A) &&
          m >= A &&
          h.problems.push({
            location: { offset: u.offset, length: u.length },
            message: M(
              'exclusiveMaximumWarning',
              'Value is above the exclusive maximum of {0}.',
              A,
            ),
          });
        var P = E(c.minimum, c.exclusiveMinimum);
        ee(P) &&
          m < P &&
          h.problems.push({
            location: { offset: u.offset, length: u.length },
            message: M(
              'minimumWarning',
              'Value is below the minimum of {0}.',
              P,
            ),
          });
        var w = E(c.maximum, c.exclusiveMaximum);
        ee(w) &&
          m > w &&
          h.problems.push({
            location: { offset: u.offset, length: u.length },
            message: M(
              'maximumWarning',
              'Value is above the maximum of {0}.',
              w,
            ),
          });
      }
      function o(u, c, h, g) {
        if (
          (ee(c.minLength) &&
            u.value.length < c.minLength &&
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message: M(
                'minLengthWarning',
                'String is shorter than the minimum length of {0}.',
                c.minLength,
              ),
            }),
          ee(c.maxLength) &&
            u.value.length > c.maxLength &&
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message: M(
                'maxLengthWarning',
                'String is longer than the maximum length of {0}.',
                c.maxLength,
              ),
            }),
          rr(c.pattern))
        ) {
          var m = xe(c.pattern);
          m?.test(u.value) ||
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message:
                c.patternErrorMessage ||
                c.errorMessage ||
                M(
                  'patternWarning',
                  'String does not match the pattern of "{0}".',
                  c.pattern,
                ),
            });
        }
        if (c.format)
          switch (c.format) {
            case 'uri':
            case 'uri-reference':
              {
                var p = void 0;
                if (!u.value) p = M('uriEmpty', 'URI expected.');
                else {
                  var d =
                    /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(
                      u.value,
                    );
                  d
                    ? !d[2] &&
                      c.format === 'uri' &&
                      (p = M(
                        'uriSchemeMissing',
                        'URI with a scheme is expected.',
                      ))
                    : (p = M('uriMissing', 'URI is expected.'));
                }
                p &&
                  h.problems.push({
                    location: { offset: u.offset, length: u.length },
                    message:
                      c.patternErrorMessage ||
                      c.errorMessage ||
                      M('uriFormatWarning', 'String is not a URI: {0}', p),
                  });
              }
              break;
            case 'color-hex':
            case 'date-time':
            case 'date':
            case 'time':
            case 'email':
            case 'hostname':
            case 'ipv4':
            case 'ipv6':
              var b = gn[c.format];
              (!u.value || !b.pattern.exec(u.value)) &&
                h.problems.push({
                  location: { offset: u.offset, length: u.length },
                  message:
                    c.patternErrorMessage || c.errorMessage || b.errorMessage,
                });
            default:
          }
      }
      function f(u, c, h, g) {
        if (Array.isArray(c.items)) {
          for (var m = c.items, p = 0; p < m.length; p++) {
            var d = m[p],
              b = K(d),
              y = new te(),
              v = u.items[p];
            v
              ? (_(v, b, y, g), h.mergePropertyMatch(y))
              : u.items.length >= m.length && h.propertiesValueMatches++;
          }
          if (u.items.length > m.length)
            if (typeof c.additionalItems == 'object')
              for (var O = m.length; O < u.items.length; O++) {
                var y = new te();
                _(u.items[O], c.additionalItems, y, g), h.mergePropertyMatch(y);
              }
            else
              c.additionalItems === !1 &&
                h.problems.push({
                  location: { offset: u.offset, length: u.length },
                  message: M(
                    'additionalItemsWarning',
                    'Array has too many items according to schema. Expected {0} or fewer.',
                    m.length,
                  ),
                });
        } else {
          var E = K(c.items);
          if (E)
            for (var j = 0, A = u.items; j < A.length; j++) {
              var v = A[j],
                y = new te();
              _(v, E, y, g), h.mergePropertyMatch(y);
            }
        }
        var P = K(c.contains);
        if (P) {
          var w = u.items.some(function (N) {
            var V = new te();
            return _(N, P, V, $t.instance), !V.hasProblems();
          });
          w ||
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message:
                c.errorMessage ||
                M(
                  'requiredItemMissingWarning',
                  'Array does not contain required item.',
                ),
            });
        }
        if (
          (ee(c.minItems) &&
            u.items.length < c.minItems &&
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message: M(
                'minItemsWarning',
                'Array has too few items. Expected {0} or more.',
                c.minItems,
              ),
            }),
          ee(c.maxItems) &&
            u.items.length > c.maxItems &&
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message: M(
                'maxItemsWarning',
                'Array has too many items. Expected {0} or fewer.',
                c.maxItems,
              ),
            }),
          c.uniqueItems === !0)
        ) {
          var C = ge(u),
            L = C.some(function (N, V) {
              return V !== C.lastIndexOf(N);
            });
          L &&
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message: M('uniqueItemsWarning', 'Array has duplicate items.'),
            });
        }
      }
      function l(u, c, h, g) {
        for (
          var m = Object.create(null), p = [], d = 0, b = u.properties;
          d < b.length;
          d++
        ) {
          var y = b[d],
            v = y.keyNode.value;
          (m[v] = y.valueNode), p.push(v);
        }
        if (Array.isArray(c.required))
          for (var O = 0, E = c.required; O < E.length; O++) {
            var j = E[O];
            if (!m[j]) {
              var A =
                  u.parent && u.parent.type === 'property' && u.parent.keyNode,
                P = A
                  ? { offset: A.offset, length: A.length }
                  : { offset: u.offset, length: 1 };
              h.problems.push({
                location: P,
                message: M(
                  'MissingRequiredPropWarning',
                  'Missing property "{0}".',
                  j,
                ),
              });
            }
          }
        var w = function (Gt) {
          for (var ct = p.indexOf(Gt); ct >= 0; )
            p.splice(ct, 1), (ct = p.indexOf(Gt));
        };
        if (c.properties)
          for (var C = 0, L = Object.keys(c.properties); C < L.length; C++) {
            var j = L[C];
            w(j);
            var N = c.properties[j],
              V = m[j];
            if (V)
              if (ie(N))
                if (N) h.propertiesMatches++, h.propertiesValueMatches++;
                else {
                  var y = V.parent;
                  h.problems.push({
                    location: {
                      offset: y.keyNode.offset,
                      length: y.keyNode.length,
                    },
                    message:
                      c.errorMessage ||
                      M(
                        'DisallowedExtraPropWarning',
                        'Property {0} is not allowed.',
                        j,
                      ),
                  });
                }
              else {
                var R = new te();
                _(V, N, R, g), h.mergePropertyMatch(R);
              }
          }
        if (c.patternProperties)
          for (
            var H = 0, q = Object.keys(c.patternProperties);
            H < q.length;
            H++
          )
            for (
              var T = q[H], S = xe(T), k = 0, I = p.slice(0);
              k < I.length;
              k++
            ) {
              var j = I[k];
              if (S?.test(j)) {
                w(j);
                var V = m[j];
                if (V) {
                  var N = c.patternProperties[T];
                  if (ie(N))
                    if (N) h.propertiesMatches++, h.propertiesValueMatches++;
                    else {
                      var y = V.parent;
                      h.problems.push({
                        location: {
                          offset: y.keyNode.offset,
                          length: y.keyNode.length,
                        },
                        message:
                          c.errorMessage ||
                          M(
                            'DisallowedExtraPropWarning',
                            'Property {0} is not allowed.',
                            j,
                          ),
                      });
                    }
                  else {
                    var R = new te();
                    _(V, N, R, g), h.mergePropertyMatch(R);
                  }
                }
              }
            }
        if (typeof c.additionalProperties == 'object')
          for (var F = 0, D = p; F < D.length; F++) {
            var j = D[F],
              V = m[j];
            if (V) {
              var R = new te();
              _(V, c.additionalProperties, R, g), h.mergePropertyMatch(R);
            }
          }
        else if (c.additionalProperties === !1 && p.length > 0)
          for (var J = 0, ue = p; J < ue.length; J++) {
            var j = ue[J],
              V = m[j];
            if (V) {
              var y = V.parent;
              h.problems.push({
                location: {
                  offset: y.keyNode.offset,
                  length: y.keyNode.length,
                },
                message:
                  c.errorMessage ||
                  M(
                    'DisallowedExtraPropWarning',
                    'Property {0} is not allowed.',
                    j,
                  ),
              });
            }
          }
        if (
          (ee(c.maxProperties) &&
            u.properties.length > c.maxProperties &&
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message: M(
                'MaxPropWarning',
                'Object has more properties than limit of {0}.',
                c.maxProperties,
              ),
            }),
          ee(c.minProperties) &&
            u.properties.length < c.minProperties &&
            h.problems.push({
              location: { offset: u.offset, length: u.length },
              message: M(
                'MinPropWarning',
                'Object has fewer properties than the required number of {0}',
                c.minProperties,
              ),
            }),
          c.dependencies)
        )
          for (
            var G = 0, ne = Object.keys(c.dependencies);
            G < ne.length;
            G++
          ) {
            var v = ne[G],
              Oe = m[v];
            if (Oe) {
              var ce = c.dependencies[v];
              if (Array.isArray(ce))
                for (var ft = 0, zt = ce; ft < zt.length; ft++) {
                  var Bt = zt[ft];
                  m[Bt]
                    ? h.propertiesValueMatches++
                    : h.problems.push({
                        location: { offset: u.offset, length: u.length },
                        message: M(
                          'RequiredDependentPropWarning',
                          'Object is missing property {0} required by property {1}.',
                          Bt,
                          v,
                        ),
                      });
                }
              else {
                var N = K(ce);
                if (N) {
                  var R = new te();
                  _(u, N, R, g), h.mergePropertyMatch(R);
                }
              }
            }
          }
        var _t = K(c.propertyNames);
        if (_t)
          for (var ut = 0, Ht = u.properties; ut < Ht.length; ut++) {
            var _r = Ht[ut],
              v = _r.keyNode;
            v && _(v, _t, h, $t.instance);
          }
      }
    }
    function Or(t, r) {
      var i = [],
        e = -1,
        n = t.getText(),
        a = le(n, !1),
        s = r && r.collectComments ? [] : void 0;
      function o() {
        for (;;) {
          var A = a.scan();
          switch ((c(), A)) {
            case 12:
            case 13:
              Array.isArray(s) &&
                s.push(
                  U.create(
                    t.positionAt(a.getTokenOffset()),
                    t.positionAt(a.getTokenOffset() + a.getTokenLength()),
                  ),
                );
              break;
            case 15:
            case 14:
              break;
            default:
              return A;
          }
        }
      }
      function f(A) {
        return a.getToken() === A ? (o(), !0) : !1;
      }
      function l(A, P, w, C, L) {
        if ((L === void 0 && (L = Z.Error), i.length === 0 || w !== e)) {
          var N = U.create(t.positionAt(w), t.positionAt(C));
          i.push(ae.create(N, A, L, P, t.languageId)), (e = w);
        }
      }
      function u(A, P, w, C, L) {
        w === void 0 && (w = void 0),
          C === void 0 && (C = []),
          L === void 0 && (L = []);
        var N = a.getTokenOffset(),
          V = a.getTokenOffset() + a.getTokenLength();
        if (N === V && N > 0) {
          for (N--; N > 0 && /\s/.test(n.charAt(N)); ) N--;
          V = N + 1;
        }
        if ((l(A, P, N, V), w && h(w, !1), C.length + L.length > 0))
          for (var R = a.getToken(); R !== 17; ) {
            if (C.indexOf(R) !== -1) {
              o();
              break;
            } else if (L.indexOf(R) !== -1) break;
            R = o();
          }
        return w;
      }
      function c() {
        switch (a.getTokenError()) {
          case 4:
            return (
              u(
                M('InvalidUnicode', 'Invalid unicode sequence in string.'),
                W.InvalidUnicode,
              ),
              !0
            );
          case 5:
            return (
              u(
                M(
                  'InvalidEscapeCharacter',
                  'Invalid escape character in string.',
                ),
                W.InvalidEscapeCharacter,
              ),
              !0
            );
          case 3:
            return (
              u(
                M('UnexpectedEndOfNumber', 'Unexpected end of number.'),
                W.UnexpectedEndOfNumber,
              ),
              !0
            );
          case 1:
            return (
              u(
                M('UnexpectedEndOfComment', 'Unexpected end of comment.'),
                W.UnexpectedEndOfComment,
              ),
              !0
            );
          case 2:
            return (
              u(
                M('UnexpectedEndOfString', 'Unexpected end of string.'),
                W.UnexpectedEndOfString,
              ),
              !0
            );
          case 6:
            return (
              u(
                M(
                  'InvalidCharacter',
                  'Invalid characters in string. Control characters must be escaped.',
                ),
                W.InvalidCharacter,
              ),
              !0
            );
        }
        return !1;
      }
      function h(A, P) {
        return (
          (A.length = a.getTokenOffset() + a.getTokenLength() - A.offset),
          P && o(),
          A
        );
      }
      function g(A) {
        if (a.getToken() === 3) {
          var P = new mn(A, a.getTokenOffset());
          o();
          for (var w = 0, C = !1; a.getToken() !== 4 && a.getToken() !== 17; ) {
            if (a.getToken() === 5) {
              C || u(M('ValueExpected', 'Value expected'), W.ValueExpected);
              var L = a.getTokenOffset();
              if ((o(), a.getToken() === 4)) {
                C &&
                  l(
                    M('TrailingComma', 'Trailing comma'),
                    W.TrailingComma,
                    L,
                    L + 1,
                  );
                continue;
              }
            } else
              C && u(M('ExpectedComma', 'Expected comma'), W.CommaExpected);
            var N = O(P);
            N
              ? P.items.push(N)
              : u(
                  M('PropertyExpected', 'Value expected'),
                  W.ValueExpected,
                  void 0,
                  [],
                  [4, 5],
                ),
              (C = !0);
          }
          return a.getToken() !== 4
            ? u(
                M('ExpectedCloseBracket', 'Expected comma or closing bracket'),
                W.CommaOrCloseBacketExpected,
                P,
              )
            : h(P, !0);
        }
      }
      var m = new Ft(void 0, 0, 0);
      function p(A, P) {
        var w = new yn(A, a.getTokenOffset(), m),
          C = b(w);
        if (!C)
          if (a.getToken() === 16) {
            u(
              M('DoubleQuotesExpected', 'Property keys must be doublequoted'),
              W.Undefined,
            );
            var L = new Ft(w, a.getTokenOffset(), a.getTokenLength());
            (L.value = a.getTokenValue()), (C = L), o();
          } else return;
        w.keyNode = C;
        var N = P[C.value];
        if (
          (N
            ? (l(
                M('DuplicateKeyWarning', 'Duplicate object key'),
                W.DuplicateKey,
                w.keyNode.offset,
                w.keyNode.offset + w.keyNode.length,
                Z.Warning,
              ),
              typeof N == 'object' &&
                l(
                  M('DuplicateKeyWarning', 'Duplicate object key'),
                  W.DuplicateKey,
                  N.keyNode.offset,
                  N.keyNode.offset + N.keyNode.length,
                  Z.Warning,
                ),
              (P[C.value] = !0))
            : (P[C.value] = w),
          a.getToken() === 6)
        )
          (w.colonOffset = a.getTokenOffset()), o();
        else if (
          (u(M('ColonExpected', 'Colon expected'), W.ColonExpected),
          a.getToken() === 10 &&
            t.positionAt(C.offset + C.length).line <
              t.positionAt(a.getTokenOffset()).line)
        )
          return (w.length = C.length), w;
        var V = O(w);
        return V
          ? ((w.valueNode = V), (w.length = V.offset + V.length - w.offset), w)
          : u(
              M('ValueExpected', 'Value expected'),
              W.ValueExpected,
              w,
              [],
              [2, 5],
            );
      }
      function d(A) {
        if (a.getToken() === 1) {
          var P = new bn(A, a.getTokenOffset()),
            w = Object.create(null);
          o();
          for (var C = !1; a.getToken() !== 2 && a.getToken() !== 17; ) {
            if (a.getToken() === 5) {
              C ||
                u(
                  M('PropertyExpected', 'Property expected'),
                  W.PropertyExpected,
                );
              var L = a.getTokenOffset();
              if ((o(), a.getToken() === 2)) {
                C &&
                  l(
                    M('TrailingComma', 'Trailing comma'),
                    W.TrailingComma,
                    L,
                    L + 1,
                  );
                continue;
              }
            } else
              C && u(M('ExpectedComma', 'Expected comma'), W.CommaExpected);
            var N = p(P, w);
            N
              ? P.properties.push(N)
              : u(
                  M('PropertyExpected', 'Property expected'),
                  W.PropertyExpected,
                  void 0,
                  [],
                  [2, 5],
                ),
              (C = !0);
          }
          return a.getToken() !== 2
            ? u(
                M('ExpectedCloseBrace', 'Expected comma or closing brace'),
                W.CommaOrCloseBraceExpected,
                P,
              )
            : h(P, !0);
        }
      }
      function b(A) {
        if (a.getToken() === 10) {
          var P = new Ft(A, a.getTokenOffset());
          return (P.value = a.getTokenValue()), h(P, !0);
        }
      }
      function y(A) {
        if (a.getToken() === 11) {
          var P = new vn(A, a.getTokenOffset());
          if (a.getTokenError() === 0) {
            var w = a.getTokenValue();
            try {
              var C = JSON.parse(w);
              if (!ee(C))
                return u(
                  M('InvalidNumberFormat', 'Invalid number format.'),
                  W.Undefined,
                  P,
                );
              P.value = C;
            } catch {
              return u(
                M('InvalidNumberFormat', 'Invalid number format.'),
                W.Undefined,
                P,
              );
            }
            P.isInteger = w.indexOf('.') === -1;
          }
          return h(P, !0);
        }
      }
      function v(A) {
        var P;
        switch (a.getToken()) {
          case 7:
            return h(new pn(A, a.getTokenOffset()), !0);
          case 8:
            return h(new Ar(A, !0, a.getTokenOffset()), !0);
          case 9:
            return h(new Ar(A, !1, a.getTokenOffset()), !0);
          default:
            return;
        }
      }
      function O(A) {
        return g(A) || d(A) || b(A) || y(A) || v(A);
      }
      var E = void 0,
        j = o();
      return (
        j !== 17 &&
          ((E = O(E)),
          E
            ? a.getToken() !== 17 &&
              u(M('End of file expected', 'End of file expected.'), W.Undefined)
            : u(
                M(
                  'Invalid symbol',
                  'Expected a JSON object, array or literal.',
                ),
                W.Undefined,
              )),
        new kr(E, i, s)
      );
    }
    function et(t, r, i) {
      if (t !== null && typeof t == 'object') {
        var e = r + '	';
        if (Array.isArray(t)) {
          if (t.length === 0) return '[]';
          for (
            var n = `[
`,
              a = 0;
            a < t.length;
            a++
          )
            (n += e + et(t[a], e, i)),
              a < t.length - 1 && (n += ','),
              (n += `
`);
          return (n += r + ']'), n;
        } else {
          var s = Object.keys(t);
          if (s.length === 0) return '{}';
          for (
            var n = `{
`,
              a = 0;
            a < s.length;
            a++
          ) {
            var o = s[a];
            (n += e + JSON.stringify(o) + ': ' + et(t[o], e, i)),
              a < s.length - 1 && (n += ','),
              (n += `
`);
          }
          return (n += r + '}'), n;
        }
      }
      return i(t);
    }
    var Rt = he(),
      Sn = [',', '}', ']'],
      An = [':'],
      Cr = (function () {
        function t(r, i, e, n) {
          i === void 0 && (i = []),
            e === void 0 && (e = Promise),
            n === void 0 && (n = {}),
            (this.schemaService = r),
            (this.contributions = i),
            (this.promiseConstructor = e),
            (this.clientCapabilities = n);
        }
        return (
          (t.prototype.doResolve = function (r) {
            for (var i = this.contributions.length - 1; i >= 0; i--) {
              var e = this.contributions[i].resolveCompletion;
              if (e) {
                var n = e(r);
                if (n) return n;
              }
            }
            return this.promiseConstructor.resolve(r);
          }),
          (t.prototype.doComplete = function (r, i, e) {
            var n = this,
              a = { items: [], isIncomplete: !1 },
              s = r.getText(),
              o = r.offsetAt(i),
              f = e.getNodeFromOffset(o, !0);
            if (this.isInComment(r, f ? f.offset : 0, o))
              return Promise.resolve(a);
            if (f && o === f.offset + f.length && o > 0) {
              var l = s[o - 1];
              ((f.type === 'object' && l === '}') ||
                (f.type === 'array' && l === ']')) &&
                (f = f.parent);
            }
            var u = this.getCurrentWord(r, o),
              c;
            if (
              f &&
              (f.type === 'string' ||
                f.type === 'number' ||
                f.type === 'boolean' ||
                f.type === 'null')
            )
              c = U.create(
                r.positionAt(f.offset),
                r.positionAt(f.offset + f.length),
              );
            else {
              var h = o - u.length;
              h > 0 && s[h - 1] === '"' && h--,
                (c = U.create(r.positionAt(h), i));
            }
            var g = !1,
              m = {},
              p = {
                add: function (d) {
                  var b = d.label,
                    y = m[b];
                  if (y)
                    y.documentation || (y.documentation = d.documentation),
                      y.detail || (y.detail = d.detail);
                  else {
                    if (((b = b.replace(/[\n]/g, '\u21B5')), b.length > 60)) {
                      var v = b.substr(0, 57).trim() + '...';
                      m[v] || (b = v);
                    }
                    c &&
                      d.insertText !== void 0 &&
                      (d.textEdit = Y.replace(c, d.insertText)),
                      g &&
                        (d.commitCharacters = d.kind === Q.Property ? An : Sn),
                      (d.label = b),
                      (m[b] = d),
                      a.items.push(d);
                  }
                },
                setAsIncomplete: function () {
                  a.isIncomplete = !0;
                },
                error: function (d) {
                  console.error(d);
                },
                log: function (d) {
                  console.log(d);
                },
                getNumberOfProposals: function () {
                  return a.items.length;
                },
              };
            return this.schemaService
              .getSchemaForResource(r.uri, e)
              .then(function (d) {
                var b = [],
                  y = !0,
                  v = '',
                  O = void 0;
                if (f && f.type === 'string') {
                  var E = f.parent;
                  E &&
                    E.type === 'property' &&
                    E.keyNode === f &&
                    ((y = !E.valueNode),
                    (O = E),
                    (v = s.substr(f.offset + 1, f.length - 2)),
                    E && (f = E.parent));
                }
                if (f && f.type === 'object') {
                  if (f.offset === o) return a;
                  var j = f.properties;
                  j.forEach(function (C) {
                    (!O || O !== C) && (m[C.keyNode.value] = Re.create('__'));
                  });
                  var A = '';
                  y && (A = n.evaluateSeparatorAfter(r, r.offsetAt(c.end))),
                    d
                      ? n.getPropertyCompletions(d, e, f, y, A, p)
                      : n.getSchemaLessPropertyCompletions(e, f, v, p);
                  var P = qe(f);
                  n.contributions.forEach(function (C) {
                    var L = C.collectPropertyCompletions(
                      r.uri,
                      P,
                      u,
                      y,
                      A === '',
                      p,
                    );
                    L && b.push(L);
                  }),
                    !d &&
                      u.length > 0 &&
                      s.charAt(o - u.length - 1) !== '"' &&
                      (p.add({
                        kind: Q.Property,
                        label: n.getLabelForValue(u),
                        insertText: n.getInsertTextForProperty(
                          u,
                          void 0,
                          !1,
                          A,
                        ),
                        insertTextFormat: z.Snippet,
                        documentation: '',
                      }),
                      p.setAsIncomplete());
                }
                var w = {};
                return (
                  d
                    ? n.getValueCompletions(d, e, f, o, r, p, w)
                    : n.getSchemaLessValueCompletions(e, f, o, r, p),
                  n.contributions.length > 0 &&
                    n.getContributedValueCompletions(e, f, o, r, p, b),
                  n.promiseConstructor.all(b).then(function () {
                    if (p.getNumberOfProposals() === 0) {
                      var C = o;
                      f &&
                        (f.type === 'string' ||
                          f.type === 'number' ||
                          f.type === 'boolean' ||
                          f.type === 'null') &&
                        (C = f.offset + f.length);
                      var L = n.evaluateSeparatorAfter(r, C);
                      n.addFillerValueCompletions(w, L, p);
                    }
                    return a;
                  })
                );
              });
          }),
          (t.prototype.getPropertyCompletions = function (r, i, e, n, a, s) {
            var o = this,
              f = i.getMatchingSchemas(r.schema, e.offset);
            f.forEach(function (l) {
              if (l.node === e && !l.inverted) {
                var u = l.schema.properties;
                u &&
                  Object.keys(u).forEach(function (p) {
                    var d = u[p];
                    if (
                      typeof d == 'object' &&
                      !d.deprecationMessage &&
                      !d.doNotSuggest
                    ) {
                      var b = {
                        kind: Q.Property,
                        label: p,
                        insertText: o.getInsertTextForProperty(p, d, n, a),
                        insertTextFormat: z.Snippet,
                        filterText: o.getFilterTextForValue(p),
                        documentation:
                          o.fromMarkup(d.markdownDescription) ||
                          d.description ||
                          '',
                      };
                      d.suggestSortText !== void 0 &&
                        (b.sortText = d.suggestSortText),
                        b.insertText &&
                          pe(b.insertText, '$1'.concat(a)) &&
                          (b.command = {
                            title: 'Suggest',
                            command: 'editor.action.triggerSuggest',
                          }),
                        s.add(b);
                    }
                  });
                var c = l.schema.propertyNames;
                if (
                  typeof c == 'object' &&
                  !c.deprecationMessage &&
                  !c.doNotSuggest
                ) {
                  var h = function (p, d) {
                    d === void 0 && (d = void 0);
                    var b = {
                      kind: Q.Property,
                      label: p,
                      insertText: o.getInsertTextForProperty(p, void 0, n, a),
                      insertTextFormat: z.Snippet,
                      filterText: o.getFilterTextForValue(p),
                      documentation:
                        d ||
                        o.fromMarkup(c.markdownDescription) ||
                        c.description ||
                        '',
                    };
                    c.suggestSortText !== void 0 &&
                      (b.sortText = c.suggestSortText),
                      b.insertText &&
                        pe(b.insertText, '$1'.concat(a)) &&
                        (b.command = {
                          title: 'Suggest',
                          command: 'editor.action.triggerSuggest',
                        }),
                      s.add(b);
                  };
                  if (c.enum)
                    for (var g = 0; g < c.enum.length; g++) {
                      var m = void 0;
                      c.markdownEnumDescriptions &&
                      g < c.markdownEnumDescriptions.length
                        ? (m = o.fromMarkup(c.markdownEnumDescriptions[g]))
                        : c.enumDescriptions &&
                          g < c.enumDescriptions.length &&
                          (m = c.enumDescriptions[g]),
                        h(c.enum[g], m);
                    }
                  c.const && h(c.const);
                }
              }
            });
          }),
          (t.prototype.getSchemaLessPropertyCompletions = function (
            r,
            i,
            e,
            n,
          ) {
            var a = this,
              s = function (f) {
                f.properties.forEach(function (l) {
                  var u = l.keyNode.value;
                  n.add({
                    kind: Q.Property,
                    label: u,
                    insertText: a.getInsertTextForValue(u, ''),
                    insertTextFormat: z.Snippet,
                    filterText: a.getFilterTextForValue(u),
                    documentation: '',
                  });
                });
              };
            if (i.parent)
              if (i.parent.type === 'property') {
                var o = i.parent.keyNode.value;
                r.visit(function (f) {
                  return (
                    f.type === 'property' &&
                      f !== i.parent &&
                      f.keyNode.value === o &&
                      f.valueNode &&
                      f.valueNode.type === 'object' &&
                      s(f.valueNode),
                    !0
                  );
                });
              } else
                i.parent.type === 'array' &&
                  i.parent.items.forEach(function (f) {
                    f.type === 'object' && f !== i && s(f);
                  });
            else
              i.type === 'object' &&
                n.add({
                  kind: Q.Property,
                  label: '$schema',
                  insertText: this.getInsertTextForProperty(
                    '$schema',
                    void 0,
                    !0,
                    '',
                  ),
                  insertTextFormat: z.Snippet,
                  documentation: '',
                  filterText: this.getFilterTextForValue('$schema'),
                });
          }),
          (t.prototype.getSchemaLessValueCompletions = function (
            r,
            i,
            e,
            n,
            a,
          ) {
            var s = this,
              o = e;
            if (
              (i &&
                (i.type === 'string' ||
                  i.type === 'number' ||
                  i.type === 'boolean' ||
                  i.type === 'null') &&
                ((o = i.offset + i.length), (i = i.parent)),
              !i)
            ) {
              a.add({
                kind: this.getSuggestionKind('object'),
                label: 'Empty object',
                insertText: this.getInsertTextForValue({}, ''),
                insertTextFormat: z.Snippet,
                documentation: '',
              }),
                a.add({
                  kind: this.getSuggestionKind('array'),
                  label: 'Empty array',
                  insertText: this.getInsertTextForValue([], ''),
                  insertTextFormat: z.Snippet,
                  documentation: '',
                });
              return;
            }
            var f = this.evaluateSeparatorAfter(n, o),
              l = function (g) {
                g.parent &&
                  !Dt(g.parent, e, !0) &&
                  a.add({
                    kind: s.getSuggestionKind(g.type),
                    label: s.getLabelTextForMatchingNode(g, n),
                    insertText: s.getInsertTextForMatchingNode(g, n, f),
                    insertTextFormat: z.Snippet,
                    documentation: '',
                  }),
                  g.type === 'boolean' &&
                    s.addBooleanValueCompletion(!g.value, f, a);
              };
            if (i.type === 'property' && e > (i.colonOffset || 0)) {
              var u = i.valueNode;
              if (
                u &&
                (e > u.offset + u.length ||
                  u.type === 'object' ||
                  u.type === 'array')
              )
                return;
              var c = i.keyNode.value;
              r.visit(function (g) {
                return (
                  g.type === 'property' &&
                    g.keyNode.value === c &&
                    g.valueNode &&
                    l(g.valueNode),
                  !0
                );
              }),
                c === '$schema' &&
                  i.parent &&
                  !i.parent.parent &&
                  this.addDollarSchemaCompletions(f, a);
            }
            if (i.type === 'array')
              if (i.parent && i.parent.type === 'property') {
                var h = i.parent.keyNode.value;
                r.visit(function (g) {
                  return (
                    g.type === 'property' &&
                      g.keyNode.value === h &&
                      g.valueNode &&
                      g.valueNode.type === 'array' &&
                      g.valueNode.items.forEach(l),
                    !0
                  );
                });
              } else i.items.forEach(l);
          }),
          (t.prototype.getValueCompletions = function (r, i, e, n, a, s, o) {
            var f = n,
              l = void 0,
              u = void 0;
            if (
              (e &&
                (e.type === 'string' ||
                  e.type === 'number' ||
                  e.type === 'boolean' ||
                  e.type === 'null') &&
                ((f = e.offset + e.length), (u = e), (e = e.parent)),
              !e)
            ) {
              this.addSchemaValueCompletions(r.schema, '', s, o);
              return;
            }
            if (e.type === 'property' && n > (e.colonOffset || 0)) {
              var c = e.valueNode;
              if (c && n > c.offset + c.length) return;
              (l = e.keyNode.value), (e = e.parent);
            }
            if (e && (l !== void 0 || e.type === 'array')) {
              for (
                var h = this.evaluateSeparatorAfter(a, f),
                  g = i.getMatchingSchemas(r.schema, e.offset, u),
                  m = 0,
                  p = g;
                m < p.length;
                m++
              ) {
                var d = p[m];
                if (d.node === e && !d.inverted && d.schema) {
                  if (e.type === 'array' && d.schema.items)
                    if (Array.isArray(d.schema.items)) {
                      var b = this.findItemAtOffset(e, a, n);
                      b < d.schema.items.length &&
                        this.addSchemaValueCompletions(
                          d.schema.items[b],
                          h,
                          s,
                          o,
                        );
                    } else
                      this.addSchemaValueCompletions(d.schema.items, h, s, o);
                  if (l !== void 0) {
                    var y = !1;
                    if (d.schema.properties) {
                      var v = d.schema.properties[l];
                      v &&
                        ((y = !0), this.addSchemaValueCompletions(v, h, s, o));
                    }
                    if (d.schema.patternProperties && !y)
                      for (
                        var O = 0, E = Object.keys(d.schema.patternProperties);
                        O < E.length;
                        O++
                      ) {
                        var j = E[O],
                          A = xe(j);
                        if (A?.test(l)) {
                          y = !0;
                          var v = d.schema.patternProperties[j];
                          this.addSchemaValueCompletions(v, h, s, o);
                        }
                      }
                    if (d.schema.additionalProperties && !y) {
                      var v = d.schema.additionalProperties;
                      this.addSchemaValueCompletions(v, h, s, o);
                    }
                  }
                }
              }
              l === '$schema' &&
                !e.parent &&
                this.addDollarSchemaCompletions(h, s),
                o.boolean &&
                  (this.addBooleanValueCompletion(!0, h, s),
                  this.addBooleanValueCompletion(!1, h, s)),
                o.null && this.addNullValueCompletion(h, s);
            }
          }),
          (t.prototype.getContributedValueCompletions = function (
            r,
            i,
            e,
            n,
            a,
            s,
          ) {
            if (!i)
              this.contributions.forEach(function (u) {
                var c = u.collectDefaultCompletions(n.uri, a);
                c && s.push(c);
              });
            else if (
              ((i.type === 'string' ||
                i.type === 'number' ||
                i.type === 'boolean' ||
                i.type === 'null') &&
                (i = i.parent),
              i && i.type === 'property' && e > (i.colonOffset || 0))
            ) {
              var o = i.keyNode.value,
                f = i.valueNode;
              if ((!f || e <= f.offset + f.length) && i.parent) {
                var l = qe(i.parent);
                this.contributions.forEach(function (u) {
                  var c = u.collectValueCompletions(n.uri, l, o, a);
                  c && s.push(c);
                });
              }
            }
          }),
          (t.prototype.addSchemaValueCompletions = function (r, i, e, n) {
            var a = this;
            typeof r == 'object' &&
              (this.addEnumValueCompletions(r, i, e),
              this.addDefaultValueCompletions(r, i, e),
              this.collectTypes(r, n),
              Array.isArray(r.allOf) &&
                r.allOf.forEach(function (s) {
                  return a.addSchemaValueCompletions(s, i, e, n);
                }),
              Array.isArray(r.anyOf) &&
                r.anyOf.forEach(function (s) {
                  return a.addSchemaValueCompletions(s, i, e, n);
                }),
              Array.isArray(r.oneOf) &&
                r.oneOf.forEach(function (s) {
                  return a.addSchemaValueCompletions(s, i, e, n);
                }));
          }),
          (t.prototype.addDefaultValueCompletions = function (r, i, e, n) {
            var a = this;
            n === void 0 && (n = 0);
            var s = !1;
            if (se(r.default)) {
              for (var o = r.type, f = r.default, l = n; l > 0; l--)
                (f = [f]), (o = 'array');
              e.add({
                kind: this.getSuggestionKind(o),
                label: this.getLabelForValue(f),
                insertText: this.getInsertTextForValue(f, i),
                insertTextFormat: z.Snippet,
                detail: Rt('json.suggest.default', 'Default value'),
              }),
                (s = !0);
            }
            Array.isArray(r.examples) &&
              r.examples.forEach(function (u) {
                for (var c = r.type, h = u, g = n; g > 0; g--)
                  (h = [h]), (c = 'array');
                e.add({
                  kind: a.getSuggestionKind(c),
                  label: a.getLabelForValue(h),
                  insertText: a.getInsertTextForValue(h, i),
                  insertTextFormat: z.Snippet,
                }),
                  (s = !0);
              }),
              Array.isArray(r.defaultSnippets) &&
                r.defaultSnippets.forEach(function (u) {
                  var c = r.type,
                    h = u.body,
                    g = u.label,
                    m,
                    p;
                  if (se(h)) {
                    for (var d = r.type, b = n; b > 0; b--)
                      (h = [h]), (d = 'array');
                    (m = a.getInsertTextForSnippetValue(h, i)),
                      (p = a.getFilterTextForSnippetValue(h)),
                      (g = g || a.getLabelForSnippetValue(h));
                  } else if (typeof u.bodyText == 'string') {
                    for (var y = '', v = '', O = '', b = n; b > 0; b--)
                      (y =
                        y +
                        O +
                        `[
`),
                        (v =
                          v +
                          `
` +
                          O +
                          ']'),
                        (O += '	'),
                        (c = 'array');
                    (m =
                      y +
                      O +
                      u.bodyText
                        .split(
                          `
`,
                        )
                        .join(
                          `
` + O,
                        ) +
                      v +
                      i),
                      (g = g || m),
                      (p = m.replace(/[\n]/g, ''));
                  } else return;
                  e.add({
                    kind: a.getSuggestionKind(c),
                    label: g,
                    documentation:
                      a.fromMarkup(u.markdownDescription) || u.description,
                    insertText: m,
                    insertTextFormat: z.Snippet,
                    filterText: p,
                  }),
                    (s = !0);
                }),
              !s &&
                typeof r.items == 'object' &&
                !Array.isArray(r.items) &&
                n < 5 &&
                this.addDefaultValueCompletions(r.items, i, e, n + 1);
          }),
          (t.prototype.addEnumValueCompletions = function (r, i, e) {
            if (
              (se(r.const) &&
                e.add({
                  kind: this.getSuggestionKind(r.type),
                  label: this.getLabelForValue(r.const),
                  insertText: this.getInsertTextForValue(r.const, i),
                  insertTextFormat: z.Snippet,
                  documentation:
                    this.fromMarkup(r.markdownDescription) || r.description,
                }),
              Array.isArray(r.enum))
            )
              for (var n = 0, a = r.enum.length; n < a; n++) {
                var s = r.enum[n],
                  o = this.fromMarkup(r.markdownDescription) || r.description;
                r.markdownEnumDescriptions &&
                n < r.markdownEnumDescriptions.length &&
                this.doesSupportMarkdown()
                  ? (o = this.fromMarkup(r.markdownEnumDescriptions[n]))
                  : r.enumDescriptions &&
                    n < r.enumDescriptions.length &&
                    (o = r.enumDescriptions[n]),
                  e.add({
                    kind: this.getSuggestionKind(r.type),
                    label: this.getLabelForValue(s),
                    insertText: this.getInsertTextForValue(s, i),
                    insertTextFormat: z.Snippet,
                    documentation: o,
                  });
              }
          }),
          (t.prototype.collectTypes = function (r, i) {
            if (!(Array.isArray(r.enum) || se(r.const))) {
              var e = r.type;
              Array.isArray(e)
                ? e.forEach(function (n) {
                    return (i[n] = !0);
                  })
                : e && (i[e] = !0);
            }
          }),
          (t.prototype.addFillerValueCompletions = function (r, i, e) {
            r.object &&
              e.add({
                kind: this.getSuggestionKind('object'),
                label: '{}',
                insertText: this.getInsertTextForGuessedValue({}, i),
                insertTextFormat: z.Snippet,
                detail: Rt('defaults.object', 'New object'),
                documentation: '',
              }),
              r.array &&
                e.add({
                  kind: this.getSuggestionKind('array'),
                  label: '[]',
                  insertText: this.getInsertTextForGuessedValue([], i),
                  insertTextFormat: z.Snippet,
                  detail: Rt('defaults.array', 'New array'),
                  documentation: '',
                });
          }),
          (t.prototype.addBooleanValueCompletion = function (r, i, e) {
            e.add({
              kind: this.getSuggestionKind('boolean'),
              label: r ? 'true' : 'false',
              insertText: this.getInsertTextForValue(r, i),
              insertTextFormat: z.Snippet,
              documentation: '',
            });
          }),
          (t.prototype.addNullValueCompletion = function (r, i) {
            i.add({
              kind: this.getSuggestionKind('null'),
              label: 'null',
              insertText: 'null' + r,
              insertTextFormat: z.Snippet,
              documentation: '',
            });
          }),
          (t.prototype.addDollarSchemaCompletions = function (r, i) {
            var e = this,
              n = this.schemaService.getRegisteredSchemaIds(function (a) {
                return a === 'http' || a === 'https';
              });
            n.forEach(function (a) {
              return i.add({
                kind: Q.Module,
                label: e.getLabelForValue(a),
                filterText: e.getFilterTextForValue(a),
                insertText: e.getInsertTextForValue(a, r),
                insertTextFormat: z.Snippet,
                documentation: '',
              });
            });
          }),
          (t.prototype.getLabelForValue = function (r) {
            return JSON.stringify(r);
          }),
          (t.prototype.getFilterTextForValue = function (r) {
            return JSON.stringify(r);
          }),
          (t.prototype.getFilterTextForSnippetValue = function (r) {
            return JSON.stringify(r).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1');
          }),
          (t.prototype.getLabelForSnippetValue = function (r) {
            var i = JSON.stringify(r);
            return i.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1');
          }),
          (t.prototype.getInsertTextForPlainText = function (r) {
            return r.replace(/[\\\$\}]/g, '\\$&');
          }),
          (t.prototype.getInsertTextForValue = function (r, i) {
            var e = JSON.stringify(r, null, '	');
            return e === '{}'
              ? '{$1}' + i
              : e === '[]'
              ? '[$1]' + i
              : this.getInsertTextForPlainText(e + i);
          }),
          (t.prototype.getInsertTextForSnippetValue = function (r, i) {
            var e = function (n) {
              return typeof n == 'string' && n[0] === '^'
                ? n.substr(1)
                : JSON.stringify(n);
            };
            return et(r, '', e) + i;
          }),
          (t.prototype.getInsertTextForGuessedValue = function (r, i) {
            switch (typeof r) {
              case 'object':
                return r === null
                  ? '${1:null}' + i
                  : this.getInsertTextForValue(r, i);
              case 'string':
                var e = JSON.stringify(r);
                return (
                  (e = e.substr(1, e.length - 2)),
                  (e = this.getInsertTextForPlainText(e)),
                  '"${1:' + e + '}"' + i
                );
              case 'number':
              case 'boolean':
                return '${1:' + JSON.stringify(r) + '}' + i;
            }
            return this.getInsertTextForValue(r, i);
          }),
          (t.prototype.getSuggestionKind = function (r) {
            if (Array.isArray(r)) {
              var i = r;
              r = i.length > 0 ? i[0] : void 0;
            }
            if (!r) return Q.Value;
            switch (r) {
              case 'string':
                return Q.Value;
              case 'object':
                return Q.Module;
              case 'property':
                return Q.Property;
              default:
                return Q.Value;
            }
          }),
          (t.prototype.getLabelTextForMatchingNode = function (r, i) {
            switch (r.type) {
              case 'array':
                return '[]';
              case 'object':
                return '{}';
              default:
                var e = i.getText().substr(r.offset, r.length);
                return e;
            }
          }),
          (t.prototype.getInsertTextForMatchingNode = function (r, i, e) {
            switch (r.type) {
              case 'array':
                return this.getInsertTextForValue([], e);
              case 'object':
                return this.getInsertTextForValue({}, e);
              default:
                var n = i.getText().substr(r.offset, r.length) + e;
                return this.getInsertTextForPlainText(n);
            }
          }),
          (t.prototype.getInsertTextForProperty = function (r, i, e, n) {
            var a = this.getInsertTextForValue(r, '');
            if (!e) return a;
            var s = a + ': ',
              o,
              f = 0;
            if (i) {
              if (Array.isArray(i.defaultSnippets)) {
                if (i.defaultSnippets.length === 1) {
                  var l = i.defaultSnippets[0].body;
                  se(l) && (o = this.getInsertTextForSnippetValue(l, ''));
                }
                f += i.defaultSnippets.length;
              }
              if (
                (i.enum &&
                  (!o &&
                    i.enum.length === 1 &&
                    (o = this.getInsertTextForGuessedValue(i.enum[0], '')),
                  (f += i.enum.length)),
                se(i.default) &&
                  (o || (o = this.getInsertTextForGuessedValue(i.default, '')),
                  f++),
                Array.isArray(i.examples) &&
                  i.examples.length &&
                  (o ||
                    (o = this.getInsertTextForGuessedValue(i.examples[0], '')),
                  (f += i.examples.length)),
                f === 0)
              ) {
                var u = Array.isArray(i.type) ? i.type[0] : i.type;
                switch (
                  (u ||
                    (i.properties ? (u = 'object') : i.items && (u = 'array')),
                  u)
                ) {
                  case 'boolean':
                    o = '$1';
                    break;
                  case 'string':
                    o = '"$1"';
                    break;
                  case 'object':
                    o = '{$1}';
                    break;
                  case 'array':
                    o = '[$1]';
                    break;
                  case 'number':
                  case 'integer':
                    o = '${1:0}';
                    break;
                  case 'null':
                    o = '${1:null}';
                    break;
                  default:
                    return a;
                }
              }
            }
            return (!o || f > 1) && (o = '$1'), s + o + n;
          }),
          (t.prototype.getCurrentWord = function (r, i) {
            for (
              var e = i - 1, n = r.getText();
              e >= 0 &&
              ` 	
\r\v":{[,]}`.indexOf(n.charAt(e)) === -1;

            )
              e--;
            return n.substring(e + 1, i);
          }),
          (t.prototype.evaluateSeparatorAfter = function (r, i) {
            var e = le(r.getText(), !0);
            e.setPosition(i);
            var n = e.scan();
            switch (n) {
              case 5:
              case 2:
              case 4:
              case 17:
                return '';
              default:
                return ',';
            }
          }),
          (t.prototype.findItemAtOffset = function (r, i, e) {
            for (
              var n = le(i.getText(), !0), a = r.items, s = a.length - 1;
              s >= 0;
              s--
            ) {
              var o = a[s];
              if (e > o.offset + o.length) {
                n.setPosition(o.offset + o.length);
                var f = n.scan();
                return f === 5 && e >= n.getTokenOffset() + n.getTokenLength()
                  ? s + 1
                  : s;
              } else if (e >= o.offset) return s;
            }
            return 0;
          }),
          (t.prototype.isInComment = function (r, i, e) {
            var n = le(r.getText(), !1);
            n.setPosition(i);
            for (
              var a = n.scan();
              a !== 17 && n.getTokenOffset() + n.getTokenLength() < e;

            )
              a = n.scan();
            return (a === 12 || a === 13) && n.getTokenOffset() <= e;
          }),
          (t.prototype.fromMarkup = function (r) {
            if (r && this.doesSupportMarkdown())
              return { kind: fe.Markdown, value: r };
          }),
          (t.prototype.doesSupportMarkdown = function () {
            if (!se(this.supportsMarkdown)) {
              var r =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsMarkdown =
                r &&
                r.completionItem &&
                Array.isArray(r.completionItem.documentationFormat) &&
                r.completionItem.documentationFormat.indexOf(fe.Markdown) !==
                  -1;
            }
            return this.supportsMarkdown;
          }),
          (t.prototype.doesSupportsCommitCharacters = function () {
            if (!se(this.supportsCommitCharacters)) {
              var r =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsCommitCharacters =
                r &&
                r.completionItem &&
                !!r.completionItem.commitCharactersSupport;
            }
            return this.supportsCommitCharacters;
          }),
          t
        );
      })();
    var Pr = (function () {
      function t(r, i, e) {
        i === void 0 && (i = []),
          (this.schemaService = r),
          (this.contributions = i),
          (this.promise = e || Promise);
      }
      return (
        (t.prototype.doHover = function (r, i, e) {
          var n = r.offsetAt(i),
            a = e.getNodeFromOffset(n);
          if (
            !a ||
            ((a.type === 'object' || a.type === 'array') &&
              n > a.offset + 1 &&
              n < a.offset + a.length - 1)
          )
            return this.promise.resolve(null);
          var s = a;
          if (a.type === 'string') {
            var o = a.parent;
            if (
              o &&
              o.type === 'property' &&
              o.keyNode === a &&
              ((a = o.valueNode), !a)
            )
              return this.promise.resolve(null);
          }
          for (
            var f = U.create(
                r.positionAt(s.offset),
                r.positionAt(s.offset + s.length),
              ),
              l = function (m) {
                var p = { contents: m, range: f };
                return p;
              },
              u = qe(a),
              c = this.contributions.length - 1;
            c >= 0;
            c--
          ) {
            var h = this.contributions[c],
              g = h.getInfoContribution(r.uri, u);
            if (g)
              return g.then(function (m) {
                return l(m);
              });
          }
          return this.schemaService
            .getSchemaForResource(r.uri, e)
            .then(function (m) {
              if (m && a) {
                var p = e.getMatchingSchemas(m.schema, a.offset),
                  d = void 0,
                  b = void 0,
                  y = void 0,
                  v = void 0;
                p.every(function (E) {
                  if (
                    E.node === a &&
                    !E.inverted &&
                    E.schema &&
                    ((d = d || E.schema.title),
                    (b =
                      b ||
                      E.schema.markdownDescription ||
                      Ut(E.schema.description)),
                    E.schema.enum)
                  ) {
                    var j = E.schema.enum.indexOf(ge(a));
                    E.schema.markdownEnumDescriptions
                      ? (y = E.schema.markdownEnumDescriptions[j])
                      : E.schema.enumDescriptions &&
                        (y = Ut(E.schema.enumDescriptions[j])),
                      y &&
                        ((v = E.schema.enum[j]),
                        typeof v != 'string' && (v = JSON.stringify(v)));
                  }
                  return !0;
                });
                var O = '';
                return (
                  d && (O = Ut(d)),
                  b &&
                    (O.length > 0 &&
                      (O += `

`),
                    (O += b)),
                  y &&
                    (O.length > 0 &&
                      (O += `

`),
                    (O += '`'.concat(wn(v), '`: ').concat(y))),
                  l([O])
                );
              }
              return null;
            });
        }),
        t
      );
    })();
    function Ut(t) {
      if (t) {
        var r = t.replace(
          /([^\n\r])(\r?\n)([^\n\r])/gm,
          `$1

$3`,
        );
        return r.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
      }
    }
    function wn(t) {
      return t.indexOf('`') !== -1 ? '`` ' + t + ' ``' : t;
    }
    var Tn = he(),
      Ir = (function () {
        function t(r, i) {
          (this.jsonSchemaService = r),
            (this.promise = i),
            (this.validationEnabled = !0);
        }
        return (
          (t.prototype.configure = function (r) {
            r &&
              ((this.validationEnabled = r.validate !== !1),
              (this.commentSeverity = r.allowComments ? void 0 : Z.Error));
          }),
          (t.prototype.doValidation = function (r, i, e, n) {
            var a = this;
            if (!this.validationEnabled) return this.promise.resolve([]);
            var s = [],
              o = {},
              f = function (h) {
                var g =
                  h.range.start.line +
                  ' ' +
                  h.range.start.character +
                  ' ' +
                  h.message;
                o[g] || ((o[g] = !0), s.push(h));
              },
              l = function (h) {
                var g = e?.trailingCommas ? tt(e.trailingCommas) : Z.Error,
                  m = e?.comments ? tt(e.comments) : a.commentSeverity,
                  p = e?.schemaValidation ? tt(e.schemaValidation) : Z.Warning,
                  d = e?.schemaRequest ? tt(e.schemaRequest) : Z.Warning;
                if (h) {
                  if (h.errors.length && i.root && d) {
                    var b = i.root,
                      y = b.type === 'object' ? b.properties[0] : void 0;
                    if (y && y.keyNode.value === '$schema') {
                      var v = y.valueNode || y,
                        O = U.create(
                          r.positionAt(v.offset),
                          r.positionAt(v.offset + v.length),
                        );
                      f(ae.create(O, h.errors[0], d, W.SchemaResolveError));
                    } else {
                      var O = U.create(
                        r.positionAt(b.offset),
                        r.positionAt(b.offset + 1),
                      );
                      f(ae.create(O, h.errors[0], d, W.SchemaResolveError));
                    }
                  } else if (p) {
                    var E = i.validate(r, h.schema, p);
                    E && E.forEach(f);
                  }
                  Er(h.schema) && (m = void 0), jr(h.schema) && (g = void 0);
                }
                for (var j = 0, A = i.syntaxErrors; j < A.length; j++) {
                  var P = A[j];
                  if (P.code === W.TrailingComma) {
                    if (typeof g != 'number') continue;
                    P.severity = g;
                  }
                  f(P);
                }
                if (typeof m == 'number') {
                  var w = Tn(
                    'InvalidCommentToken',
                    'Comments are not permitted in JSON.',
                  );
                  i.comments.forEach(function (C) {
                    f(ae.create(C, w, m, W.CommentNotPermitted));
                  });
                }
                return s;
              };
            if (n) {
              var u = n.id || 'schemaservice://untitled/' + kn++,
                c = this.jsonSchemaService.registerExternalSchema(u, [], n);
              return c.getResolvedSchema().then(function (h) {
                return l(h);
              });
            }
            return this.jsonSchemaService
              .getSchemaForResource(r.uri, i)
              .then(function (h) {
                return l(h);
              });
          }),
          (t.prototype.getLanguageStatus = function (r, i) {
            return {
              schemas: this.jsonSchemaService.getSchemaURIsForResource(
                r.uri,
                i,
              ),
            };
          }),
          t
        );
      })();
    var kn = 0;
    function Er(t) {
      if (t && typeof t == 'object') {
        if (ie(t.allowComments)) return t.allowComments;
        if (t.allOf)
          for (var r = 0, i = t.allOf; r < i.length; r++) {
            var e = i[r],
              n = Er(e);
            if (ie(n)) return n;
          }
      }
    }
    function jr(t) {
      if (t && typeof t == 'object') {
        if (ie(t.allowTrailingCommas)) return t.allowTrailingCommas;
        var r = t;
        if (ie(r.allowsTrailingCommas)) return r.allowsTrailingCommas;
        if (t.allOf)
          for (var i = 0, e = t.allOf; i < e.length; i++) {
            var n = e[i],
              a = jr(n);
            if (ie(a)) return a;
          }
      }
    }
    function tt(t) {
      switch (t) {
        case 'error':
          return Z.Error;
        case 'warning':
          return Z.Warning;
        case 'ignore':
          return;
      }
    }
    var Nr = 48,
      On = 57,
      Cn = 65,
      rt = 97,
      Pn = 102;
    function B(t) {
      return t < Nr
        ? 0
        : t <= On
        ? t - Nr
        : (t < rt && (t += rt - Cn), t >= rt && t <= Pn ? t - rt + 10 : 0);
    }
    function Mr(t) {
      if (t[0] === '#')
        switch (t.length) {
          case 4:
            return {
              red: (B(t.charCodeAt(1)) * 17) / 255,
              green: (B(t.charCodeAt(2)) * 17) / 255,
              blue: (B(t.charCodeAt(3)) * 17) / 255,
              alpha: 1,
            };
          case 5:
            return {
              red: (B(t.charCodeAt(1)) * 17) / 255,
              green: (B(t.charCodeAt(2)) * 17) / 255,
              blue: (B(t.charCodeAt(3)) * 17) / 255,
              alpha: (B(t.charCodeAt(4)) * 17) / 255,
            };
          case 7:
            return {
              red: (B(t.charCodeAt(1)) * 16 + B(t.charCodeAt(2))) / 255,
              green: (B(t.charCodeAt(3)) * 16 + B(t.charCodeAt(4))) / 255,
              blue: (B(t.charCodeAt(5)) * 16 + B(t.charCodeAt(6))) / 255,
              alpha: 1,
            };
          case 9:
            return {
              red: (B(t.charCodeAt(1)) * 16 + B(t.charCodeAt(2))) / 255,
              green: (B(t.charCodeAt(3)) * 16 + B(t.charCodeAt(4))) / 255,
              blue: (B(t.charCodeAt(5)) * 16 + B(t.charCodeAt(6))) / 255,
              alpha: (B(t.charCodeAt(7)) * 16 + B(t.charCodeAt(8))) / 255,
            };
        }
    }
    var Lr = (function () {
      function t(r) {
        this.schemaService = r;
      }
      return (
        (t.prototype.findDocumentSymbols = function (r, i, e) {
          var n = this;
          e === void 0 && (e = { resultLimit: Number.MAX_VALUE });
          var a = i.root;
          if (!a) return [];
          var s = e.resultLimit || Number.MAX_VALUE,
            o = r.uri;
          if (
            (o === 'vscode://defaultsettings/keybindings.json' ||
              pe(o.toLowerCase(), '/user/keybindings.json')) &&
            a.type === 'array'
          ) {
            for (var f = [], l = 0, u = a.items; l < u.length; l++) {
              var c = u[l];
              if (c.type === 'object')
                for (var h = 0, g = c.properties; h < g.length; h++) {
                  var m = g[h];
                  if (m.keyNode.value === 'key' && m.valueNode) {
                    var p = Se.create(r.uri, ve(r, c));
                    if (
                      (f.push({
                        name: ge(m.valueNode),
                        kind: oe.Function,
                        location: p,
                      }),
                      s--,
                      s <= 0)
                    )
                      return (
                        e &&
                          e.onResultLimitExceeded &&
                          e.onResultLimitExceeded(o),
                        f
                      );
                  }
                }
            }
            return f;
          }
          for (
            var d = [{ node: a, containerName: '' }],
              b = 0,
              y = !1,
              v = [],
              O = function (j, A) {
                j.type === 'array'
                  ? j.items.forEach(function (P) {
                      P && d.push({ node: P, containerName: A });
                    })
                  : j.type === 'object' &&
                    j.properties.forEach(function (P) {
                      var w = P.valueNode;
                      if (w)
                        if (s > 0) {
                          s--;
                          var C = Se.create(r.uri, ve(r, P)),
                            L = A ? A + '.' + P.keyNode.value : P.keyNode.value;
                          v.push({
                            name: n.getKeyLabel(P),
                            kind: n.getSymbolKind(w.type),
                            location: C,
                            containerName: A,
                          }),
                            d.push({ node: w, containerName: L });
                        } else y = !0;
                    });
              };
            b < d.length;

          ) {
            var E = d[b++];
            O(E.node, E.containerName);
          }
          return (
            y && e && e.onResultLimitExceeded && e.onResultLimitExceeded(o), v
          );
        }),
        (t.prototype.findDocumentSymbols2 = function (r, i, e) {
          var n = this;
          e === void 0 && (e = { resultLimit: Number.MAX_VALUE });
          var a = i.root;
          if (!a) return [];
          var s = e.resultLimit || Number.MAX_VALUE,
            o = r.uri;
          if (
            (o === 'vscode://defaultsettings/keybindings.json' ||
              pe(o.toLowerCase(), '/user/keybindings.json')) &&
            a.type === 'array'
          ) {
            for (var f = [], l = 0, u = a.items; l < u.length; l++) {
              var c = u[l];
              if (c.type === 'object')
                for (var h = 0, g = c.properties; h < g.length; h++) {
                  var m = g[h];
                  if (m.keyNode.value === 'key' && m.valueNode) {
                    var p = ve(r, c),
                      d = ve(r, m.keyNode);
                    if (
                      (f.push({
                        name: ge(m.valueNode),
                        kind: oe.Function,
                        range: p,
                        selectionRange: d,
                      }),
                      s--,
                      s <= 0)
                    )
                      return (
                        e &&
                          e.onResultLimitExceeded &&
                          e.onResultLimitExceeded(o),
                        f
                      );
                  }
                }
            }
            return f;
          }
          for (
            var b = [],
              y = [{ node: a, result: b }],
              v = 0,
              O = !1,
              E = function (A, P) {
                A.type === 'array'
                  ? A.items.forEach(function (w, C) {
                      if (w)
                        if (s > 0) {
                          s--;
                          var L = ve(r, w),
                            N = L,
                            V = String(C),
                            R = {
                              name: V,
                              kind: n.getSymbolKind(w.type),
                              range: L,
                              selectionRange: N,
                              children: [],
                            };
                          P.push(R), y.push({ result: R.children, node: w });
                        } else O = !0;
                    })
                  : A.type === 'object' &&
                    A.properties.forEach(function (w) {
                      var C = w.valueNode;
                      if (C)
                        if (s > 0) {
                          s--;
                          var L = ve(r, w),
                            N = ve(r, w.keyNode),
                            V = [],
                            R = {
                              name: n.getKeyLabel(w),
                              kind: n.getSymbolKind(C.type),
                              range: L,
                              selectionRange: N,
                              children: V,
                              detail: n.getDetail(C),
                            };
                          P.push(R), y.push({ result: V, node: C });
                        } else O = !0;
                    });
              };
            v < y.length;

          ) {
            var j = y[v++];
            E(j.node, j.result);
          }
          return (
            O && e && e.onResultLimitExceeded && e.onResultLimitExceeded(o), b
          );
        }),
        (t.prototype.getSymbolKind = function (r) {
          switch (r) {
            case 'object':
              return oe.Module;
            case 'string':
              return oe.String;
            case 'number':
              return oe.Number;
            case 'array':
              return oe.Array;
            case 'boolean':
              return oe.Boolean;
            default:
              return oe.Variable;
          }
        }),
        (t.prototype.getKeyLabel = function (r) {
          var i = r.keyNode.value;
          return (
            i && (i = i.replace(/[\n]/g, '\u21B5')),
            i && i.trim() ? i : '"'.concat(i, '"')
          );
        }),
        (t.prototype.getDetail = function (r) {
          if (!!r) {
            if (
              r.type === 'boolean' ||
              r.type === 'number' ||
              r.type === 'null' ||
              r.type === 'string'
            )
              return String(r.value);
            if (r.type === 'array') return r.children.length ? void 0 : '[]';
            if (r.type === 'object') return r.children.length ? void 0 : '{}';
          }
        }),
        (t.prototype.findDocumentColors = function (r, i, e) {
          return this.schemaService
            .getSchemaForResource(r.uri, i)
            .then(function (n) {
              var a = [];
              if (n)
                for (
                  var s =
                      e && typeof e.resultLimit == 'number'
                        ? e.resultLimit
                        : Number.MAX_VALUE,
                    o = i.getMatchingSchemas(n.schema),
                    f = {},
                    l = 0,
                    u = o;
                  l < u.length;
                  l++
                ) {
                  var c = u[l];
                  if (
                    !c.inverted &&
                    c.schema &&
                    (c.schema.format === 'color' ||
                      c.schema.format === 'color-hex') &&
                    c.node &&
                    c.node.type === 'string'
                  ) {
                    var h = String(c.node.offset);
                    if (!f[h]) {
                      var g = Mr(ge(c.node));
                      if (g) {
                        var m = ve(r, c.node);
                        a.push({ color: g, range: m });
                      }
                      if (((f[h] = !0), s--, s <= 0))
                        return (
                          e &&
                            e.onResultLimitExceeded &&
                            e.onResultLimitExceeded(r.uri),
                          a
                        );
                    }
                  }
                }
              return a;
            });
        }),
        (t.prototype.getColorPresentations = function (r, i, e, n) {
          var a = [],
            s = Math.round(e.red * 255),
            o = Math.round(e.green * 255),
            f = Math.round(e.blue * 255);
          function l(c) {
            var h = c.toString(16);
            return h.length !== 2 ? '0' + h : h;
          }
          var u;
          return (
            e.alpha === 1
              ? (u = '#'.concat(l(s)).concat(l(o)).concat(l(f)))
              : (u = '#'
                  .concat(l(s))
                  .concat(l(o))
                  .concat(l(f))
                  .concat(l(Math.round(e.alpha * 255)))),
            a.push({ label: u, textEdit: Y.replace(n, JSON.stringify(u)) }),
            a
          );
        }),
        t
      );
    })();
    function ve(t, r) {
      return U.create(
        t.positionAt(r.offset),
        t.positionAt(r.offset + r.length),
      );
    }
    var $ = he(),
      at = {
        schemaAssociations: [],
        schemas: {
          'http://json-schema.org/schema#': {
            $ref: 'http://json-schema.org/draft-07/schema#',
          },
          'http://json-schema.org/draft-04/schema#': {
            $schema: 'http://json-schema.org/draft-04/schema#',
            definitions: {
              schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
              positiveInteger: { type: 'integer', minimum: 0 },
              positiveIntegerDefault0: {
                allOf: [
                  { $ref: '#/definitions/positiveInteger' },
                  { default: 0 },
                ],
              },
              simpleTypes: {
                type: 'string',
                enum: [
                  'array',
                  'boolean',
                  'integer',
                  'null',
                  'number',
                  'object',
                  'string',
                ],
              },
              stringArray: {
                type: 'array',
                items: { type: 'string' },
                minItems: 1,
                uniqueItems: !0,
              },
            },
            type: 'object',
            properties: {
              id: { type: 'string', format: 'uri' },
              $schema: { type: 'string', format: 'uri' },
              title: { type: 'string' },
              description: { type: 'string' },
              default: {},
              multipleOf: { type: 'number', minimum: 0, exclusiveMinimum: !0 },
              maximum: { type: 'number' },
              exclusiveMaximum: { type: 'boolean', default: !1 },
              minimum: { type: 'number' },
              exclusiveMinimum: { type: 'boolean', default: !1 },
              maxLength: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
              minLength: {
                allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
              },
              pattern: { type: 'string', format: 'regex' },
              additionalItems: {
                anyOf: [{ type: 'boolean' }, { $ref: '#' }],
                default: {},
              },
              items: {
                anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }],
                default: {},
              },
              maxItems: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
              minItems: {
                allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
              },
              uniqueItems: { type: 'boolean', default: !1 },
              maxProperties: {
                allOf: [{ $ref: '#/definitions/positiveInteger' }],
              },
              minProperties: {
                allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
              },
              required: { allOf: [{ $ref: '#/definitions/stringArray' }] },
              additionalProperties: {
                anyOf: [{ type: 'boolean' }, { $ref: '#' }],
                default: {},
              },
              definitions: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              properties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              patternProperties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              dependencies: {
                type: 'object',
                additionalProperties: {
                  anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }],
                },
              },
              enum: { type: 'array', minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: '#/definitions/simpleTypes' },
                  {
                    type: 'array',
                    items: { $ref: '#/definitions/simpleTypes' },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                ],
              },
              format: {
                anyOf: [
                  {
                    type: 'string',
                    enum: [
                      'date-time',
                      'uri',
                      'email',
                      'hostname',
                      'ipv4',
                      'ipv6',
                      'regex',
                    ],
                  },
                  { type: 'string' },
                ],
              },
              allOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              anyOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              oneOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              not: { allOf: [{ $ref: '#' }] },
            },
            dependencies: {
              exclusiveMaximum: ['maximum'],
              exclusiveMinimum: ['minimum'],
            },
            default: {},
          },
          'http://json-schema.org/draft-07/schema#': {
            definitions: {
              schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
              nonNegativeInteger: { type: 'integer', minimum: 0 },
              nonNegativeIntegerDefault0: {
                allOf: [
                  { $ref: '#/definitions/nonNegativeInteger' },
                  { default: 0 },
                ],
              },
              simpleTypes: {
                enum: [
                  'array',
                  'boolean',
                  'integer',
                  'null',
                  'number',
                  'object',
                  'string',
                ],
              },
              stringArray: {
                type: 'array',
                items: { type: 'string' },
                uniqueItems: !0,
                default: [],
              },
            },
            type: ['object', 'boolean'],
            properties: {
              $id: { type: 'string', format: 'uri-reference' },
              $schema: { type: 'string', format: 'uri' },
              $ref: { type: 'string', format: 'uri-reference' },
              $comment: { type: 'string' },
              title: { type: 'string' },
              description: { type: 'string' },
              default: !0,
              readOnly: { type: 'boolean', default: !1 },
              examples: { type: 'array', items: !0 },
              multipleOf: { type: 'number', exclusiveMinimum: 0 },
              maximum: { type: 'number' },
              exclusiveMaximum: { type: 'number' },
              minimum: { type: 'number' },
              exclusiveMinimum: { type: 'number' },
              maxLength: { $ref: '#/definitions/nonNegativeInteger' },
              minLength: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
              pattern: { type: 'string', format: 'regex' },
              additionalItems: { $ref: '#' },
              items: {
                anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }],
                default: !0,
              },
              maxItems: { $ref: '#/definitions/nonNegativeInteger' },
              minItems: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
              uniqueItems: { type: 'boolean', default: !1 },
              contains: { $ref: '#' },
              maxProperties: { $ref: '#/definitions/nonNegativeInteger' },
              minProperties: {
                $ref: '#/definitions/nonNegativeIntegerDefault0',
              },
              required: { $ref: '#/definitions/stringArray' },
              additionalProperties: { $ref: '#' },
              definitions: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              properties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                default: {},
              },
              patternProperties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                propertyNames: { format: 'regex' },
                default: {},
              },
              dependencies: {
                type: 'object',
                additionalProperties: {
                  anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }],
                },
              },
              propertyNames: { $ref: '#' },
              const: !0,
              enum: { type: 'array', items: !0, minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: '#/definitions/simpleTypes' },
                  {
                    type: 'array',
                    items: { $ref: '#/definitions/simpleTypes' },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                ],
              },
              format: { type: 'string' },
              contentMediaType: { type: 'string' },
              contentEncoding: { type: 'string' },
              if: { $ref: '#' },
              then: { $ref: '#' },
              else: { $ref: '#' },
              allOf: { $ref: '#/definitions/schemaArray' },
              anyOf: { $ref: '#/definitions/schemaArray' },
              oneOf: { $ref: '#/definitions/schemaArray' },
              not: { $ref: '#' },
            },
            default: !0,
          },
        },
      },
      In = {
        id: $('schema.json.id', 'A unique identifier for the schema.'),
        $schema: $(
          'schema.json.$schema',
          'The schema to verify this document against.',
        ),
        title: $('schema.json.title', 'A descriptive title of the element.'),
        description: $(
          'schema.json.description',
          'A long description of the element. Used in hover menus and suggestions.',
        ),
        default: $(
          'schema.json.default',
          'A default value. Used by suggestions.',
        ),
        multipleOf: $(
          'schema.json.multipleOf',
          'A number that should cleanly divide the current value (i.e. have no remainder).',
        ),
        maximum: $(
          'schema.json.maximum',
          'The maximum numerical value, inclusive by default.',
        ),
        exclusiveMaximum: $(
          'schema.json.exclusiveMaximum',
          'Makes the maximum property exclusive.',
        ),
        minimum: $(
          'schema.json.minimum',
          'The minimum numerical value, inclusive by default.',
        ),
        exclusiveMinimum: $(
          'schema.json.exclusiveMininum',
          'Makes the minimum property exclusive.',
        ),
        maxLength: $(
          'schema.json.maxLength',
          'The maximum length of a string.',
        ),
        minLength: $(
          'schema.json.minLength',
          'The minimum length of a string.',
        ),
        pattern: $(
          'schema.json.pattern',
          'A regular expression to match the string against. It is not implicitly anchored.',
        ),
        additionalItems: $(
          'schema.json.additionalItems',
          'For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.',
        ),
        items: $(
          'schema.json.items',
          'For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.',
        ),
        maxItems: $(
          'schema.json.maxItems',
          'The maximum number of items that can be inside an array. Inclusive.',
        ),
        minItems: $(
          'schema.json.minItems',
          'The minimum number of items that can be inside an array. Inclusive.',
        ),
        uniqueItems: $(
          'schema.json.uniqueItems',
          'If all of the items in the array must be unique. Defaults to false.',
        ),
        maxProperties: $(
          'schema.json.maxProperties',
          'The maximum number of properties an object can have. Inclusive.',
        ),
        minProperties: $(
          'schema.json.minProperties',
          'The minimum number of properties an object can have. Inclusive.',
        ),
        required: $(
          'schema.json.required',
          'An array of strings that lists the names of all properties required on this object.',
        ),
        additionalProperties: $(
          'schema.json.additionalProperties',
          "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.",
        ),
        definitions: $(
          'schema.json.definitions',
          'Not used for validation. Place subschemas here that you wish to reference inline with $ref.',
        ),
        properties: $(
          'schema.json.properties',
          'A map of property names to schemas for each property.',
        ),
        patternProperties: $(
          'schema.json.patternProperties',
          'A map of regular expressions on property names to schemas for matching properties.',
        ),
        dependencies: $(
          'schema.json.dependencies',
          'A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.',
        ),
        enum: $(
          'schema.json.enum',
          'The set of literal values that are valid.',
        ),
        type: $(
          'schema.json.type',
          'Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.',
        ),
        format: $(
          'schema.json.format',
          'Describes the format expected for the value.',
        ),
        allOf: $(
          'schema.json.allOf',
          'An array of schemas, all of which must match.',
        ),
        anyOf: $(
          'schema.json.anyOf',
          'An array of schemas, where at least one must match.',
        ),
        oneOf: $(
          'schema.json.oneOf',
          'An array of schemas, exactly one of which must match.',
        ),
        not: $('schema.json.not', 'A schema which must not match.'),
        $id: $('schema.json.$id', 'A unique identifier for the schema.'),
        $ref: $(
          'schema.json.$ref',
          'Reference a definition hosted on any location.',
        ),
        $comment: $(
          'schema.json.$comment',
          'Comments from schema authors to readers or maintainers of the schema.',
        ),
        readOnly: $(
          'schema.json.readOnly',
          'Indicates that the value of the instance is managed exclusively by the owning authority.',
        ),
        examples: $(
          'schema.json.examples',
          'Sample JSON values associated with a particular schema, for the purpose of illustrating usage.',
        ),
        contains: $(
          'schema.json.contains',
          'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.',
        ),
        propertyNames: $(
          'schema.json.propertyNames',
          'If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema.',
        ),
        const: $(
          'schema.json.const',
          'An instance validates successfully against this keyword if its value is equal to the value of the keyword.',
        ),
        contentMediaType: $(
          'schema.json.contentMediaType',
          'Describes the media type of a string property.',
        ),
        contentEncoding: $(
          'schema.json.contentEncoding',
          'Describes the content encoding of a string property.',
        ),
        if: $(
          'schema.json.if',
          'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.',
        ),
        then: $(
          'schema.json.then',
          'The "if" subschema is used for validation when the "if" subschema succeeds.',
        ),
        else: $(
          'schema.json.else',
          'The "else" subschema is used for validation when the "if" subschema fails.',
        ),
      };
    for (Vr in at.schemas) {
      nt = at.schemas[Vr];
      for (Me in nt.properties)
        (it = nt.properties[Me]),
          typeof it == 'boolean' && (it = nt.properties[Me] = {}),
          (Wt = In[Me]),
          Wt
            ? (it.description = Wt)
            : console.log(
                ''.concat(Me, ": localize('schema.json.").concat(Me, `', "")`),
              );
    }
    var nt, it, Wt, Me, Vr;
    var Fr;
    Fr = (() => {
      'use strict';
      var t = {
          470: (e) => {
            function n(o) {
              if (typeof o != 'string')
                throw new TypeError(
                  'Path must be a string. Received ' + JSON.stringify(o),
                );
            }
            function a(o, f) {
              for (
                var l, u = '', c = 0, h = -1, g = 0, m = 0;
                m <= o.length;
                ++m
              ) {
                if (m < o.length) l = o.charCodeAt(m);
                else {
                  if (l === 47) break;
                  l = 47;
                }
                if (l === 47) {
                  if (!(h === m - 1 || g === 1))
                    if (h !== m - 1 && g === 2) {
                      if (
                        u.length < 2 ||
                        c !== 2 ||
                        u.charCodeAt(u.length - 1) !== 46 ||
                        u.charCodeAt(u.length - 2) !== 46
                      ) {
                        if (u.length > 2) {
                          var p = u.lastIndexOf('/');
                          if (p !== u.length - 1) {
                            p === -1
                              ? ((u = ''), (c = 0))
                              : (c =
                                  (u = u.slice(0, p)).length -
                                  1 -
                                  u.lastIndexOf('/')),
                              (h = m),
                              (g = 0);
                            continue;
                          }
                        } else if (u.length === 2 || u.length === 1) {
                          (u = ''), (c = 0), (h = m), (g = 0);
                          continue;
                        }
                      }
                      f && (u.length > 0 ? (u += '/..') : (u = '..'), (c = 2));
                    } else
                      u.length > 0
                        ? (u += '/' + o.slice(h + 1, m))
                        : (u = o.slice(h + 1, m)),
                        (c = m - h - 1);
                  (h = m), (g = 0);
                } else l === 46 && g !== -1 ? ++g : (g = -1);
              }
              return u;
            }
            var s = {
              resolve: function () {
                for (
                  var o, f = '', l = !1, u = arguments.length - 1;
                  u >= -1 && !l;
                  u--
                ) {
                  var c;
                  u >= 0
                    ? (c = arguments[u])
                    : (o === void 0 && (o = process.cwd()), (c = o)),
                    n(c),
                    c.length !== 0 &&
                      ((f = c + '/' + f), (l = c.charCodeAt(0) === 47));
                }
                return (
                  (f = a(f, !l)),
                  l ? (f.length > 0 ? '/' + f : '/') : f.length > 0 ? f : '.'
                );
              },
              normalize: function (o) {
                if ((n(o), o.length === 0)) return '.';
                var f = o.charCodeAt(0) === 47,
                  l = o.charCodeAt(o.length - 1) === 47;
                return (
                  (o = a(o, !f)).length !== 0 || f || (o = '.'),
                  o.length > 0 && l && (o += '/'),
                  f ? '/' + o : o
                );
              },
              isAbsolute: function (o) {
                return n(o), o.length > 0 && o.charCodeAt(0) === 47;
              },
              join: function () {
                if (arguments.length === 0) return '.';
                for (var o, f = 0; f < arguments.length; ++f) {
                  var l = arguments[f];
                  n(l),
                    l.length > 0 && (o === void 0 ? (o = l) : (o += '/' + l));
                }
                return o === void 0 ? '.' : s.normalize(o);
              },
              relative: function (o, f) {
                if (
                  (n(o),
                  n(f),
                  o === f || (o = s.resolve(o)) === (f = s.resolve(f)))
                )
                  return '';
                for (var l = 1; l < o.length && o.charCodeAt(l) === 47; ++l);
                for (
                  var u = o.length, c = u - l, h = 1;
                  h < f.length && f.charCodeAt(h) === 47;
                  ++h
                );
                for (
                  var g = f.length - h, m = c < g ? c : g, p = -1, d = 0;
                  d <= m;
                  ++d
                ) {
                  if (d === m) {
                    if (g > m) {
                      if (f.charCodeAt(h + d) === 47) return f.slice(h + d + 1);
                      if (d === 0) return f.slice(h + d);
                    } else
                      c > m &&
                        (o.charCodeAt(l + d) === 47
                          ? (p = d)
                          : d === 0 && (p = 0));
                    break;
                  }
                  var b = o.charCodeAt(l + d);
                  if (b !== f.charCodeAt(h + d)) break;
                  b === 47 && (p = d);
                }
                var y = '';
                for (d = l + p + 1; d <= u; ++d)
                  (d !== u && o.charCodeAt(d) !== 47) ||
                    (y.length === 0 ? (y += '..') : (y += '/..'));
                return y.length > 0
                  ? y + f.slice(h + p)
                  : ((h += p), f.charCodeAt(h) === 47 && ++h, f.slice(h));
              },
              _makeLong: function (o) {
                return o;
              },
              dirname: function (o) {
                if ((n(o), o.length === 0)) return '.';
                for (
                  var f = o.charCodeAt(0),
                    l = f === 47,
                    u = -1,
                    c = !0,
                    h = o.length - 1;
                  h >= 1;
                  --h
                )
                  if ((f = o.charCodeAt(h)) === 47) {
                    if (!c) {
                      u = h;
                      break;
                    }
                  } else c = !1;
                return u === -1
                  ? l
                    ? '/'
                    : '.'
                  : l && u === 1
                  ? '//'
                  : o.slice(0, u);
              },
              basename: function (o, f) {
                if (f !== void 0 && typeof f != 'string')
                  throw new TypeError('"ext" argument must be a string');
                n(o);
                var l,
                  u = 0,
                  c = -1,
                  h = !0;
                if (f !== void 0 && f.length > 0 && f.length <= o.length) {
                  if (f.length === o.length && f === o) return '';
                  var g = f.length - 1,
                    m = -1;
                  for (l = o.length - 1; l >= 0; --l) {
                    var p = o.charCodeAt(l);
                    if (p === 47) {
                      if (!h) {
                        u = l + 1;
                        break;
                      }
                    } else
                      m === -1 && ((h = !1), (m = l + 1)),
                        g >= 0 &&
                          (p === f.charCodeAt(g)
                            ? --g == -1 && (c = l)
                            : ((g = -1), (c = m)));
                  }
                  return (
                    u === c ? (c = m) : c === -1 && (c = o.length),
                    o.slice(u, c)
                  );
                }
                for (l = o.length - 1; l >= 0; --l)
                  if (o.charCodeAt(l) === 47) {
                    if (!h) {
                      u = l + 1;
                      break;
                    }
                  } else c === -1 && ((h = !1), (c = l + 1));
                return c === -1 ? '' : o.slice(u, c);
              },
              extname: function (o) {
                n(o);
                for (
                  var f = -1, l = 0, u = -1, c = !0, h = 0, g = o.length - 1;
                  g >= 0;
                  --g
                ) {
                  var m = o.charCodeAt(g);
                  if (m !== 47)
                    u === -1 && ((c = !1), (u = g + 1)),
                      m === 46
                        ? f === -1
                          ? (f = g)
                          : h !== 1 && (h = 1)
                        : f !== -1 && (h = -1);
                  else if (!c) {
                    l = g + 1;
                    break;
                  }
                }
                return f === -1 ||
                  u === -1 ||
                  h === 0 ||
                  (h === 1 && f === u - 1 && f === l + 1)
                  ? ''
                  : o.slice(f, u);
              },
              format: function (o) {
                if (o === null || typeof o != 'object')
                  throw new TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                      typeof o,
                  );
                return (function (f, l) {
                  var u = l.dir || l.root,
                    c = l.base || (l.name || '') + (l.ext || '');
                  return u ? (u === l.root ? u + c : u + '/' + c) : c;
                })(0, o);
              },
              parse: function (o) {
                n(o);
                var f = { root: '', dir: '', base: '', ext: '', name: '' };
                if (o.length === 0) return f;
                var l,
                  u = o.charCodeAt(0),
                  c = u === 47;
                c ? ((f.root = '/'), (l = 1)) : (l = 0);
                for (
                  var h = -1, g = 0, m = -1, p = !0, d = o.length - 1, b = 0;
                  d >= l;
                  --d
                )
                  if ((u = o.charCodeAt(d)) !== 47)
                    m === -1 && ((p = !1), (m = d + 1)),
                      u === 46
                        ? h === -1
                          ? (h = d)
                          : b !== 1 && (b = 1)
                        : h !== -1 && (b = -1);
                  else if (!p) {
                    g = d + 1;
                    break;
                  }
                return (
                  h === -1 ||
                  m === -1 ||
                  b === 0 ||
                  (b === 1 && h === m - 1 && h === g + 1)
                    ? m !== -1 &&
                      (f.base = f.name =
                        g === 0 && c ? o.slice(1, m) : o.slice(g, m))
                    : (g === 0 && c
                        ? ((f.name = o.slice(1, h)), (f.base = o.slice(1, m)))
                        : ((f.name = o.slice(g, h)), (f.base = o.slice(g, m))),
                      (f.ext = o.slice(h, m))),
                  g > 0 ? (f.dir = o.slice(0, g - 1)) : c && (f.dir = '/'),
                  f
                );
              },
              sep: '/',
              delimiter: ':',
              win32: null,
              posix: null,
            };
            (s.posix = s), (e.exports = s);
          },
          447: (e, n, a) => {
            var s;
            if (
              (a.r(n),
              a.d(n, { URI: () => y, Utils: () => V }),
              typeof process == 'object')
            )
              s = process.platform === 'win32';
            else if (typeof navigator == 'object') {
              var o = navigator.userAgent;
              s = o.indexOf('Windows') >= 0;
            }
            var f,
              l,
              u =
                ((f = function (T, S) {
                  return (f =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (k, I) {
                        k.__proto__ = I;
                      }) ||
                    function (k, I) {
                      for (var F in I)
                        Object.prototype.hasOwnProperty.call(I, F) &&
                          (k[F] = I[F]);
                    })(T, S);
                }),
                function (T, S) {
                  if (typeof S != 'function' && S !== null)
                    throw new TypeError(
                      'Class extends value ' +
                        String(S) +
                        ' is not a constructor or null',
                    );
                  function k() {
                    this.constructor = T;
                  }
                  f(T, S),
                    (T.prototype =
                      S === null
                        ? Object.create(S)
                        : ((k.prototype = S.prototype), new k()));
                }),
              c = /^\w[\w\d+.-]*$/,
              h = /^\//,
              g = /^\/\//;
            function m(T, S) {
              if (!T.scheme && S)
                throw new Error(
                  '[UriError]: Scheme is missing: {scheme: "", authority: "'
                    .concat(T.authority, '", path: "')
                    .concat(T.path, '", query: "')
                    .concat(T.query, '", fragment: "')
                    .concat(T.fragment, '"}'),
                );
              if (T.scheme && !c.test(T.scheme))
                throw new Error(
                  '[UriError]: Scheme contains illegal characters.',
                );
              if (T.path) {
                if (T.authority) {
                  if (!h.test(T.path))
                    throw new Error(
                      '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
                    );
                } else if (g.test(T.path))
                  throw new Error(
                    '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
                  );
              }
            }
            var p = '',
              d = '/',
              b =
                /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
              y = (function () {
                function T(S, k, I, F, D, J) {
                  J === void 0 && (J = !1),
                    typeof S == 'object'
                      ? ((this.scheme = S.scheme || p),
                        (this.authority = S.authority || p),
                        (this.path = S.path || p),
                        (this.query = S.query || p),
                        (this.fragment = S.fragment || p))
                      : ((this.scheme = (function (ue, G) {
                          return ue || G ? ue : 'file';
                        })(S, J)),
                        (this.authority = k || p),
                        (this.path = (function (ue, G) {
                          switch (ue) {
                            case 'https':
                            case 'http':
                            case 'file':
                              G ? G[0] !== d && (G = d + G) : (G = d);
                          }
                          return G;
                        })(this.scheme, I || p)),
                        (this.query = F || p),
                        (this.fragment = D || p),
                        m(this, J));
                }
                return (
                  (T.isUri = function (S) {
                    return (
                      S instanceof T ||
                      (!!S &&
                        typeof S.authority == 'string' &&
                        typeof S.fragment == 'string' &&
                        typeof S.path == 'string' &&
                        typeof S.query == 'string' &&
                        typeof S.scheme == 'string' &&
                        typeof S.fsPath == 'string' &&
                        typeof S.with == 'function' &&
                        typeof S.toString == 'function')
                    );
                  }),
                  Object.defineProperty(T.prototype, 'fsPath', {
                    get: function () {
                      return P(this, !1);
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (T.prototype.with = function (S) {
                    if (!S) return this;
                    var k = S.scheme,
                      I = S.authority,
                      F = S.path,
                      D = S.query,
                      J = S.fragment;
                    return (
                      k === void 0 ? (k = this.scheme) : k === null && (k = p),
                      I === void 0
                        ? (I = this.authority)
                        : I === null && (I = p),
                      F === void 0 ? (F = this.path) : F === null && (F = p),
                      D === void 0 ? (D = this.query) : D === null && (D = p),
                      J === void 0
                        ? (J = this.fragment)
                        : J === null && (J = p),
                      k === this.scheme &&
                      I === this.authority &&
                      F === this.path &&
                      D === this.query &&
                      J === this.fragment
                        ? this
                        : new O(k, I, F, D, J)
                    );
                  }),
                  (T.parse = function (S, k) {
                    k === void 0 && (k = !1);
                    var I = b.exec(S);
                    return I
                      ? new O(
                          I[2] || p,
                          N(I[4] || p),
                          N(I[5] || p),
                          N(I[7] || p),
                          N(I[9] || p),
                          k,
                        )
                      : new O(p, p, p, p, p);
                  }),
                  (T.file = function (S) {
                    var k = p;
                    if (
                      (s && (S = S.replace(/\\/g, d)), S[0] === d && S[1] === d)
                    ) {
                      var I = S.indexOf(d, 2);
                      I === -1
                        ? ((k = S.substring(2)), (S = d))
                        : ((k = S.substring(2, I)), (S = S.substring(I) || d));
                    }
                    return new O('file', k, S, p, p);
                  }),
                  (T.from = function (S) {
                    var k = new O(
                      S.scheme,
                      S.authority,
                      S.path,
                      S.query,
                      S.fragment,
                    );
                    return m(k, !0), k;
                  }),
                  (T.prototype.toString = function (S) {
                    return S === void 0 && (S = !1), w(this, S);
                  }),
                  (T.prototype.toJSON = function () {
                    return this;
                  }),
                  (T.revive = function (S) {
                    if (S) {
                      if (S instanceof T) return S;
                      var k = new O(S);
                      return (
                        (k._formatted = S.external),
                        (k._fsPath = S._sep === v ? S.fsPath : null),
                        k
                      );
                    }
                    return S;
                  }),
                  T
                );
              })(),
              v = s ? 1 : void 0,
              O = (function (T) {
                function S() {
                  var k = (T !== null && T.apply(this, arguments)) || this;
                  return (k._formatted = null), (k._fsPath = null), k;
                }
                return (
                  u(S, T),
                  Object.defineProperty(S.prototype, 'fsPath', {
                    get: function () {
                      return (
                        this._fsPath || (this._fsPath = P(this, !1)),
                        this._fsPath
                      );
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (S.prototype.toString = function (k) {
                    return (
                      k === void 0 && (k = !1),
                      k
                        ? w(this, !0)
                        : (this._formatted || (this._formatted = w(this, !1)),
                          this._formatted)
                    );
                  }),
                  (S.prototype.toJSON = function () {
                    var k = { $mid: 1 };
                    return (
                      this._fsPath && ((k.fsPath = this._fsPath), (k._sep = v)),
                      this._formatted && (k.external = this._formatted),
                      this.path && (k.path = this.path),
                      this.scheme && (k.scheme = this.scheme),
                      this.authority && (k.authority = this.authority),
                      this.query && (k.query = this.query),
                      this.fragment && (k.fragment = this.fragment),
                      k
                    );
                  }),
                  S
                );
              })(y),
              E =
                (((l = {})[58] = '%3A'),
                (l[47] = '%2F'),
                (l[63] = '%3F'),
                (l[35] = '%23'),
                (l[91] = '%5B'),
                (l[93] = '%5D'),
                (l[64] = '%40'),
                (l[33] = '%21'),
                (l[36] = '%24'),
                (l[38] = '%26'),
                (l[39] = '%27'),
                (l[40] = '%28'),
                (l[41] = '%29'),
                (l[42] = '%2A'),
                (l[43] = '%2B'),
                (l[44] = '%2C'),
                (l[59] = '%3B'),
                (l[61] = '%3D'),
                (l[32] = '%20'),
                l);
            function j(T, S) {
              for (var k = void 0, I = -1, F = 0; F < T.length; F++) {
                var D = T.charCodeAt(F);
                if (
                  (D >= 97 && D <= 122) ||
                  (D >= 65 && D <= 90) ||
                  (D >= 48 && D <= 57) ||
                  D === 45 ||
                  D === 46 ||
                  D === 95 ||
                  D === 126 ||
                  (S && D === 47)
                )
                  I !== -1 &&
                    ((k += encodeURIComponent(T.substring(I, F))), (I = -1)),
                    k !== void 0 && (k += T.charAt(F));
                else {
                  k === void 0 && (k = T.substr(0, F));
                  var J = E[D];
                  J !== void 0
                    ? (I !== -1 &&
                        ((k += encodeURIComponent(T.substring(I, F))),
                        (I = -1)),
                      (k += J))
                    : I === -1 && (I = F);
                }
              }
              return (
                I !== -1 && (k += encodeURIComponent(T.substring(I))),
                k !== void 0 ? k : T
              );
            }
            function A(T) {
              for (var S = void 0, k = 0; k < T.length; k++) {
                var I = T.charCodeAt(k);
                I === 35 || I === 63
                  ? (S === void 0 && (S = T.substr(0, k)), (S += E[I]))
                  : S !== void 0 && (S += T[k]);
              }
              return S !== void 0 ? S : T;
            }
            function P(T, S) {
              var k;
              return (
                (k =
                  T.authority && T.path.length > 1 && T.scheme === 'file'
                    ? '//'.concat(T.authority).concat(T.path)
                    : T.path.charCodeAt(0) === 47 &&
                      ((T.path.charCodeAt(1) >= 65 &&
                        T.path.charCodeAt(1) <= 90) ||
                        (T.path.charCodeAt(1) >= 97 &&
                          T.path.charCodeAt(1) <= 122)) &&
                      T.path.charCodeAt(2) === 58
                    ? S
                      ? T.path.substr(1)
                      : T.path[1].toLowerCase() + T.path.substr(2)
                    : T.path),
                s && (k = k.replace(/\//g, '\\')),
                k
              );
            }
            function w(T, S) {
              var k = S ? A : j,
                I = '',
                F = T.scheme,
                D = T.authority,
                J = T.path,
                ue = T.query,
                G = T.fragment;
              if (
                (F && ((I += F), (I += ':')),
                (D || F === 'file') && ((I += d), (I += d)),
                D)
              ) {
                var ne = D.indexOf('@');
                if (ne !== -1) {
                  var Oe = D.substr(0, ne);
                  (D = D.substr(ne + 1)),
                    (ne = Oe.indexOf(':')) === -1
                      ? (I += k(Oe, !1))
                      : ((I += k(Oe.substr(0, ne), !1)),
                        (I += ':'),
                        (I += k(Oe.substr(ne + 1), !1))),
                    (I += '@');
                }
                (ne = (D = D.toLowerCase()).indexOf(':')) === -1
                  ? (I += k(D, !1))
                  : ((I += k(D.substr(0, ne), !1)), (I += D.substr(ne)));
              }
              if (J) {
                if (
                  J.length >= 3 &&
                  J.charCodeAt(0) === 47 &&
                  J.charCodeAt(2) === 58
                )
                  (ce = J.charCodeAt(1)) >= 65 &&
                    ce <= 90 &&
                    (J = '/'
                      .concat(String.fromCharCode(ce + 32), ':')
                      .concat(J.substr(3)));
                else if (J.length >= 2 && J.charCodeAt(1) === 58) {
                  var ce;
                  (ce = J.charCodeAt(0)) >= 65 &&
                    ce <= 90 &&
                    (J = ''
                      .concat(String.fromCharCode(ce + 32), ':')
                      .concat(J.substr(2)));
                }
                I += k(J, !0);
              }
              return (
                ue && ((I += '?'), (I += k(ue, !1))),
                G && ((I += '#'), (I += S ? G : j(G, !1))),
                I
              );
            }
            function C(T) {
              try {
                return decodeURIComponent(T);
              } catch {
                return T.length > 3 ? T.substr(0, 3) + C(T.substr(3)) : T;
              }
            }
            var L = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
            function N(T) {
              return T.match(L)
                ? T.replace(L, function (S) {
                    return C(S);
                  })
                : T;
            }
            var V,
              R = a(470),
              H = function (T, S, k) {
                if (k || arguments.length === 2)
                  for (var I, F = 0, D = S.length; F < D; F++)
                    (!I && F in S) ||
                      (I || (I = Array.prototype.slice.call(S, 0, F)),
                      (I[F] = S[F]));
                return T.concat(I || Array.prototype.slice.call(S));
              },
              q = R.posix || R;
            (function (T) {
              (T.joinPath = function (S) {
                for (var k = [], I = 1; I < arguments.length; I++)
                  k[I - 1] = arguments[I];
                return S.with({ path: q.join.apply(q, H([S.path], k, !1)) });
              }),
                (T.resolvePath = function (S) {
                  for (var k = [], I = 1; I < arguments.length; I++)
                    k[I - 1] = arguments[I];
                  var F = S.path || '/';
                  return S.with({ path: q.resolve.apply(q, H([F], k, !1)) });
                }),
                (T.dirname = function (S) {
                  var k = q.dirname(S.path);
                  return k.length === 1 && k.charCodeAt(0) === 46
                    ? S
                    : S.with({ path: k });
                }),
                (T.basename = function (S) {
                  return q.basename(S.path);
                }),
                (T.extname = function (S) {
                  return q.extname(S.path);
                });
            })(V || (V = {}));
          },
        },
        r = {};
      function i(e) {
        if (r[e]) return r[e].exports;
        var n = (r[e] = { exports: {} });
        return t[e](n, n.exports, i), n.exports;
      }
      return (
        (i.d = (e, n) => {
          for (var a in n)
            i.o(n, a) &&
              !i.o(e, a) &&
              Object.defineProperty(e, a, { enumerable: !0, get: n[a] });
        }),
        (i.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (i.r = (e) => {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        i(447)
      );
    })();
    var { URI: ye, Utils: Pi } = Fr;
    function $r(t, r) {
      if (typeof t != 'string') throw new TypeError('Expected a string');
      for (
        var i = String(t),
          e = '',
          n = r ? !!r.extended : !1,
          a = r ? !!r.globstar : !1,
          s = !1,
          o = r && typeof r.flags == 'string' ? r.flags : '',
          f,
          l = 0,
          u = i.length;
        l < u;
        l++
      )
        switch (((f = i[l]), f)) {
          case '/':
          case '$':
          case '^':
          case '+':
          case '.':
          case '(':
          case ')':
          case '=':
          case '!':
          case '|':
            e += '\\' + f;
            break;
          case '?':
            if (n) {
              e += '.';
              break;
            }
          case '[':
          case ']':
            if (n) {
              e += f;
              break;
            }
          case '{':
            if (n) {
              (s = !0), (e += '(');
              break;
            }
          case '}':
            if (n) {
              (s = !1), (e += ')');
              break;
            }
          case ',':
            if (s) {
              e += '|';
              break;
            }
            e += '\\' + f;
            break;
          case '*':
            for (var c = i[l - 1], h = 1; i[l + 1] === '*'; ) h++, l++;
            var g = i[l + 1];
            if (!a) e += '.*';
            else {
              var m =
                h > 1 &&
                (c === '/' || c === void 0 || c === '{' || c === ',') &&
                (g === '/' || g === void 0 || g === ',' || g === '}');
              m
                ? (g === '/'
                    ? l++
                    : c === '/' &&
                      e.endsWith('\\/') &&
                      (e = e.substr(0, e.length - 2)),
                  (e += '((?:[^/]*(?:/|$))*)'))
                : (e += '([^/]*)');
            }
            break;
          default:
            e += f;
        }
      return (!o || !~o.indexOf('g')) && (e = '^' + e + '$'), new RegExp(e, o);
    }
    var de = he(),
      En = '!',
      jn = '/',
      Nn = (function () {
        function t(r, i) {
          this.globWrappers = [];
          try {
            for (var e = 0, n = r; e < n.length; e++) {
              var a = n[e],
                s = a[0] !== En;
              s || (a = a.substring(1)),
                a.length > 0 &&
                  (a[0] === jn && (a = a.substring(1)),
                  this.globWrappers.push({
                    regexp: $r('**/' + a, { extended: !0, globstar: !0 }),
                    include: s,
                  }));
            }
            this.uris = i;
          } catch {
            (this.globWrappers.length = 0), (this.uris = []);
          }
        }
        return (
          (t.prototype.matchesPattern = function (r) {
            for (var i = !1, e = 0, n = this.globWrappers; e < n.length; e++) {
              var a = n[e],
                s = a.regexp,
                o = a.include;
              s.test(r) && (i = o);
            }
            return i;
          }),
          (t.prototype.getURIs = function () {
            return this.uris;
          }),
          t
        );
      })(),
      Mn = (function () {
        function t(r, i, e) {
          (this.service = r),
            (this.uri = i),
            (this.dependencies = new Set()),
            (this.anchors = void 0),
            e &&
              (this.unresolvedSchema = this.service.promise.resolve(new ze(e)));
        }
        return (
          (t.prototype.getUnresolvedSchema = function () {
            return (
              this.unresolvedSchema ||
                (this.unresolvedSchema = this.service.loadSchema(this.uri)),
              this.unresolvedSchema
            );
          }),
          (t.prototype.getResolvedSchema = function () {
            var r = this;
            return (
              this.resolvedSchema ||
                (this.resolvedSchema = this.getUnresolvedSchema().then(
                  function (i) {
                    return r.service.resolveSchemaContent(i, r);
                  },
                )),
              this.resolvedSchema
            );
          }),
          (t.prototype.clearSchema = function () {
            var r = !!this.unresolvedSchema;
            return (
              (this.resolvedSchema = void 0),
              (this.unresolvedSchema = void 0),
              this.dependencies.clear(),
              (this.anchors = void 0),
              r
            );
          }),
          t
        );
      })(),
      ze = (function () {
        function t(r, i) {
          i === void 0 && (i = []), (this.schema = r), (this.errors = i);
        }
        return t;
      })();
    var Dr = (function () {
      function t(r, i) {
        i === void 0 && (i = []), (this.schema = r), (this.errors = i);
      }
      return (
        (t.prototype.getSection = function (r) {
          var i = this.getSectionRecursive(r, this.schema);
          if (i) return K(i);
        }),
        (t.prototype.getSectionRecursive = function (r, i) {
          if (!i || typeof i == 'boolean' || r.length === 0) return i;
          var e = r.shift();
          if (i.properties && typeof i.properties[e])
            return this.getSectionRecursive(r, i.properties[e]);
          if (i.patternProperties)
            for (
              var n = 0, a = Object.keys(i.patternProperties);
              n < a.length;
              n++
            ) {
              var s = a[n],
                o = xe(s);
              if (o?.test(e))
                return this.getSectionRecursive(r, i.patternProperties[s]);
            }
          else {
            if (typeof i.additionalProperties == 'object')
              return this.getSectionRecursive(r, i.additionalProperties);
            if (e.match('[0-9]+')) {
              if (Array.isArray(i.items)) {
                var f = parseInt(e, 10);
                if (!isNaN(f) && i.items[f])
                  return this.getSectionRecursive(r, i.items[f]);
              } else if (i.items) return this.getSectionRecursive(r, i.items);
            }
          }
        }),
        t
      );
    })();
    var Rr = (function () {
      function t(r, i, e) {
        (this.contextService = i),
          (this.requestService = r),
          (this.promiseConstructor = e || Promise),
          (this.callOnDispose = []),
          (this.contributionSchemas = {}),
          (this.contributionAssociations = []),
          (this.schemasById = {}),
          (this.filePatternAssociations = []),
          (this.registeredSchemasIds = {});
      }
      return (
        (t.prototype.getRegisteredSchemaIds = function (r) {
          return Object.keys(this.registeredSchemasIds).filter(function (i) {
            var e = ye.parse(i).scheme;
            return e !== 'schemaservice' && (!r || r(e));
          });
        }),
        Object.defineProperty(t.prototype, 'promise', {
          get: function () {
            return this.promiseConstructor;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.dispose = function () {
          for (; this.callOnDispose.length > 0; ) this.callOnDispose.pop()();
        }),
        (t.prototype.onResourceChange = function (r) {
          var i = this;
          this.cachedSchemaForResource = void 0;
          var e = !1;
          r = be(r);
          for (
            var n = [r],
              a = Object.keys(this.schemasById).map(function (l) {
                return i.schemasById[l];
              });
            n.length;

          )
            for (var s = n.pop(), o = 0; o < a.length; o++) {
              var f = a[o];
              f &&
                (f.uri === s || f.dependencies.has(s)) &&
                (f.uri !== s && n.push(f.uri),
                f.clearSchema() && (e = !0),
                (a[o] = void 0));
            }
          return e;
        }),
        (t.prototype.setSchemaContributions = function (r) {
          if (r.schemas) {
            var i = r.schemas;
            for (var e in i) {
              var n = be(e);
              this.contributionSchemas[n] = this.addSchemaHandle(n, i[e]);
            }
          }
          if (Array.isArray(r.schemaAssociations))
            for (
              var a = r.schemaAssociations, s = 0, o = a;
              s < o.length;
              s++
            ) {
              var f = o[s],
                l = f.uris.map(be),
                u = this.addFilePatternAssociation(f.pattern, l);
              this.contributionAssociations.push(u);
            }
        }),
        (t.prototype.addSchemaHandle = function (r, i) {
          var e = new Mn(this, r, i);
          return (this.schemasById[r] = e), e;
        }),
        (t.prototype.getOrAddSchemaHandle = function (r, i) {
          return this.schemasById[r] || this.addSchemaHandle(r, i);
        }),
        (t.prototype.addFilePatternAssociation = function (r, i) {
          var e = new Nn(r, i);
          return this.filePatternAssociations.push(e), e;
        }),
        (t.prototype.registerExternalSchema = function (r, i, e) {
          var n = be(r);
          return (
            (this.registeredSchemasIds[n] = !0),
            (this.cachedSchemaForResource = void 0),
            i && this.addFilePatternAssociation(i, [n]),
            e ? this.addSchemaHandle(n, e) : this.getOrAddSchemaHandle(n)
          );
        }),
        (t.prototype.clearExternalSchemas = function () {
          (this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.registeredSchemasIds = {}),
            (this.cachedSchemaForResource = void 0);
          for (var r in this.contributionSchemas)
            (this.schemasById[r] = this.contributionSchemas[r]),
              (this.registeredSchemasIds[r] = !0);
          for (
            var i = 0, e = this.contributionAssociations;
            i < e.length;
            i++
          ) {
            var n = e[i];
            this.filePatternAssociations.push(n);
          }
        }),
        (t.prototype.getResolvedSchema = function (r) {
          var i = be(r),
            e = this.schemasById[i];
          return e ? e.getResolvedSchema() : this.promise.resolve(void 0);
        }),
        (t.prototype.loadSchema = function (r) {
          if (!this.requestService) {
            var i = de(
              'json.schema.norequestservice',
              "Unable to load schema from '{0}'. No schema request service available",
              ot(r),
            );
            return this.promise.resolve(new ze({}, [i]));
          }
          return this.requestService(r).then(
            function (e) {
              if (!e) {
                var n = de(
                  'json.schema.nocontent',
                  "Unable to load schema from '{0}': No content.",
                  ot(r),
                );
                return new ze({}, [n]);
              }
              var a = {},
                s = [];
              a = Qt(e, s);
              var o = s.length
                ? [
                    de(
                      'json.schema.invalidFormat',
                      "Unable to parse content from '{0}': Parse error at offset {1}.",
                      ot(r),
                      s[0].offset,
                    ),
                  ]
                : [];
              return new ze(a, o);
            },
            function (e) {
              var n = e.toString(),
                a = e.toString().split('Error: ');
              return (
                a.length > 1 && (n = a[1]),
                pe(n, '.') && (n = n.substr(0, n.length - 1)),
                new ze({}, [
                  de(
                    'json.schema.nocontent',
                    "Unable to load schema from '{0}': {1}.",
                    ot(r),
                    n,
                  ),
                ])
              );
            },
          );
        }),
        (t.prototype.resolveSchemaContent = function (r, i) {
          var e = this,
            n = r.errors.slice(0),
            a = r.schema;
          if (a.$schema) {
            var s = be(a.$schema);
            if (s === 'http://json-schema.org/draft-03/schema')
              return this.promise.resolve(
                new Dr({}, [
                  de(
                    'json.schema.draft03.notsupported',
                    'Draft-03 schemas are not supported.',
                  ),
                ]),
              );
            s === 'https://json-schema.org/draft/2019-09/schema'
              ? n.push(
                  de(
                    'json.schema.draft201909.notsupported',
                    'Draft 2019-09 schemas are not yet fully supported.',
                  ),
                )
              : s === 'https://json-schema.org/draft/2020-12/schema' &&
                n.push(
                  de(
                    'json.schema.draft202012.notsupported',
                    'Draft 2020-12 schemas are not yet fully supported.',
                  ),
                );
          }
          var o = this.contextService,
            f = function (p, d) {
              d = decodeURIComponent(d);
              var b = p;
              return (
                d[0] === '/' && (d = d.substring(1)),
                d.split('/').some(function (y) {
                  return (
                    (y = y.replace(/~1/g, '/').replace(/~0/g, '~')),
                    (b = b[y]),
                    !b
                  );
                }),
                b
              );
            },
            l = function (p, d, b) {
              return d.anchors || (d.anchors = m(p)), d.anchors.get(b);
            },
            u = function (p, d) {
              for (var b in d)
                d.hasOwnProperty(b) &&
                  !p.hasOwnProperty(b) &&
                  b !== 'id' &&
                  b !== '$id' &&
                  (p[b] = d[b]);
            },
            c = function (p, d, b, y) {
              var v;
              y === void 0 || y.length === 0
                ? (v = d)
                : y.charAt(0) === '/'
                ? (v = f(d, y))
                : (v = l(d, b, y)),
                v
                  ? u(p, v)
                  : n.push(
                      de(
                        'json.schema.invalidid',
                        "$ref '{0}' in '{1}' can not be resolved.",
                        y,
                        b.uri,
                      ),
                    );
            },
            h = function (p, d, b, y) {
              o &&
                !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(d) &&
                (d = o.resolveRelativePath(d, y.uri)),
                (d = be(d));
              var v = e.getOrAddSchemaHandle(d);
              return v.getUnresolvedSchema().then(function (O) {
                if ((y.dependencies.add(d), O.errors.length)) {
                  var E = b ? d + '#' + b : d;
                  n.push(
                    de(
                      'json.schema.problemloadingref',
                      "Problems loading reference '{0}': {1}",
                      E,
                      O.errors[0],
                    ),
                  );
                }
                return c(p, O.schema, v, b), g(p, O.schema, v);
              });
            },
            g = function (p, d, b) {
              var y = [];
              return (
                e.traverseNodes(p, function (v) {
                  for (var O = new Set(); v.$ref; ) {
                    var E = v.$ref,
                      j = E.split('#', 2);
                    if ((delete v.$ref, j[0].length > 0)) {
                      y.push(h(v, j[0], j[1], b));
                      return;
                    } else if (!O.has(E)) {
                      var A = j[1];
                      c(v, d, b, A), O.add(E);
                    }
                  }
                }),
                e.promise.all(y)
              );
            },
            m = function (p) {
              var d = new Map();
              return (
                e.traverseNodes(p, function (b) {
                  var y = b.$id || b.id;
                  if (typeof y == 'string' && y.charAt(0) === '#') {
                    var v = y.substring(1);
                    d.has(v)
                      ? n.push(
                          de(
                            'json.schema.duplicateid',
                            "Duplicate id declaration: '{0}'",
                            y,
                          ),
                        )
                      : d.set(v, b);
                  }
                }),
                d
              );
            };
          return g(a, a, i).then(function (p) {
            return new Dr(a, n);
          });
        }),
        (t.prototype.traverseNodes = function (r, i) {
          if (!r || typeof r != 'object') return Promise.resolve(null);
          for (
            var e = new Set(),
              n = function () {
                for (var l = [], u = 0; u < arguments.length; u++)
                  l[u] = arguments[u];
                for (var c = 0, h = l; c < h.length; c++) {
                  var g = h[c];
                  typeof g == 'object' && o.push(g);
                }
              },
              a = function () {
                for (var l = [], u = 0; u < arguments.length; u++)
                  l[u] = arguments[u];
                for (var c = 0, h = l; c < h.length; c++) {
                  var g = h[c];
                  if (typeof g == 'object')
                    for (var m in g) {
                      var p = m,
                        d = g[p];
                      typeof d == 'object' && o.push(d);
                    }
                }
              },
              s = function () {
                for (var l = [], u = 0; u < arguments.length; u++)
                  l[u] = arguments[u];
                for (var c = 0, h = l; c < h.length; c++) {
                  var g = h[c];
                  if (Array.isArray(g))
                    for (var m = 0, p = g; m < p.length; m++) {
                      var d = p[m];
                      typeof d == 'object' && o.push(d);
                    }
                }
              },
              o = [r],
              f = o.pop();
            f;

          )
            e.has(f) ||
              (e.add(f),
              i(f),
              n(
                f.items,
                f.additionalItems,
                f.additionalProperties,
                f.not,
                f.contains,
                f.propertyNames,
                f.if,
                f.then,
                f.else,
              ),
              a(
                f.definitions,
                f.properties,
                f.patternProperties,
                f.dependencies,
              ),
              s(f.anyOf, f.allOf, f.oneOf, f.items)),
              (f = o.pop());
        }),
        (t.prototype.getSchemaFromProperty = function (r, i) {
          var e, n;
          if (
            ((e = i.root) === null || e === void 0 ? void 0 : e.type) ===
            'object'
          )
            for (var a = 0, s = i.root.properties; a < s.length; a++) {
              var o = s[a];
              if (
                o.keyNode.value === '$schema' &&
                ((n = o.valueNode) === null || n === void 0
                  ? void 0
                  : n.type) === 'string'
              ) {
                var f = o.valueNode.value;
                return (
                  this.contextService &&
                    !/^\w[\w\d+.-]*:/.test(f) &&
                    (f = this.contextService.resolveRelativePath(f, r)),
                  f
                );
              }
            }
        }),
        (t.prototype.getAssociatedSchemas = function (r) {
          for (
            var i = Object.create(null),
              e = [],
              n = Vn(r),
              a = 0,
              s = this.filePatternAssociations;
            a < s.length;
            a++
          ) {
            var o = s[a];
            if (o.matchesPattern(n))
              for (var f = 0, l = o.getURIs(); f < l.length; f++) {
                var u = l[f];
                i[u] || (e.push(u), (i[u] = !0));
              }
          }
          return e;
        }),
        (t.prototype.getSchemaURIsForResource = function (r, i) {
          var e = i && this.getSchemaFromProperty(r, i);
          return e ? [e] : this.getAssociatedSchemas(r);
        }),
        (t.prototype.getSchemaForResource = function (r, i) {
          if (i) {
            var e = this.getSchemaFromProperty(r, i);
            if (e) {
              var n = be(e);
              return this.getOrAddSchemaHandle(n).getResolvedSchema();
            }
          }
          if (
            this.cachedSchemaForResource &&
            this.cachedSchemaForResource.resource === r
          )
            return this.cachedSchemaForResource.resolvedSchema;
          var a = this.getAssociatedSchemas(r),
            s =
              a.length > 0
                ? this.createCombinedSchema(r, a).getResolvedSchema()
                : this.promise.resolve(void 0);
          return (
            (this.cachedSchemaForResource = { resource: r, resolvedSchema: s }),
            s
          );
        }),
        (t.prototype.createCombinedSchema = function (r, i) {
          if (i.length === 1) return this.getOrAddSchemaHandle(i[0]);
          var e = 'schemaservice://combinedSchema/' + encodeURIComponent(r),
            n = {
              allOf: i.map(function (a) {
                return { $ref: a };
              }),
            };
          return this.addSchemaHandle(e, n);
        }),
        (t.prototype.getMatchingSchemas = function (r, i, e) {
          if (e) {
            var n = e.id || 'schemaservice://untitled/matchingSchemas/' + Ln++,
              a = this.addSchemaHandle(n, e);
            return a.getResolvedSchema().then(function (s) {
              return i.getMatchingSchemas(s.schema).filter(function (o) {
                return !o.inverted;
              });
            });
          }
          return this.getSchemaForResource(r.uri, i).then(function (s) {
            return s
              ? i.getMatchingSchemas(s.schema).filter(function (o) {
                  return !o.inverted;
                })
              : [];
          });
        }),
        t
      );
    })();
    var Ln = 0;
    function be(t) {
      try {
        return ye.parse(t).toString(!0);
      } catch {
        return t;
      }
    }
    function Vn(t) {
      try {
        return ye.parse(t).with({ fragment: null, query: null }).toString(!0);
      } catch {
        return t;
      }
    }
    function ot(t) {
      try {
        var r = ye.parse(t);
        if (r.scheme === 'file') return r.fsPath;
      } catch {}
      return t;
    }
    function Ur(t, r) {
      var i = [],
        e = [],
        n = [],
        a = -1,
        s = le(t.getText(), !1),
        o = s.scan();
      function f(C) {
        i.push(C), e.push(n.length);
      }
      for (; o !== 17; ) {
        switch (o) {
          case 1:
          case 3: {
            var l = t.positionAt(s.getTokenOffset()).line,
              u = {
                startLine: l,
                endLine: l,
                kind: o === 1 ? 'object' : 'array',
              };
            n.push(u);
            break;
          }
          case 2:
          case 4: {
            var c = o === 2 ? 'object' : 'array';
            if (n.length > 0 && n[n.length - 1].kind === c) {
              var u = n.pop(),
                h = t.positionAt(s.getTokenOffset()).line;
              u &&
                h > u.startLine + 1 &&
                a !== u.startLine &&
                ((u.endLine = h - 1), f(u), (a = u.startLine));
            }
            break;
          }
          case 13: {
            var l = t.positionAt(s.getTokenOffset()).line,
              g = t.positionAt(s.getTokenOffset() + s.getTokenLength()).line;
            s.getTokenError() === 1 && l + 1 < t.lineCount
              ? s.setPosition(t.offsetAt(re.create(l + 1, 0)))
              : l < g &&
                (f({ startLine: l, endLine: g, kind: Ae.Comment }), (a = l));
            break;
          }
          case 12: {
            var m = t.getText().substr(s.getTokenOffset(), s.getTokenLength()),
              p = m.match(/^\/\/\s*#(region\b)|(endregion\b)/);
            if (p) {
              var h = t.positionAt(s.getTokenOffset()).line;
              if (p[1]) {
                var u = { startLine: h, endLine: h, kind: Ae.Region };
                n.push(u);
              } else {
                for (var d = n.length - 1; d >= 0 && n[d].kind !== Ae.Region; )
                  d--;
                if (d >= 0) {
                  var u = n[d];
                  (n.length = d),
                    h > u.startLine &&
                      a !== u.startLine &&
                      ((u.endLine = h), f(u), (a = u.startLine));
                }
              }
            }
            break;
          }
        }
        o = s.scan();
      }
      var b = r && r.rangeLimit;
      if (typeof b != 'number' || i.length <= b) return i;
      r && r.onRangeLimitExceeded && r.onRangeLimitExceeded(t.uri);
      for (var y = [], v = 0, O = e; v < O.length; v++) {
        var E = O[v];
        E < 30 && (y[E] = (y[E] || 0) + 1);
      }
      for (var j = 0, A = 0, d = 0; d < y.length; d++) {
        var P = y[d];
        if (P) {
          if (P + j > b) {
            A = d;
            break;
          }
          j += P;
        }
      }
      for (var w = [], d = 0; d < i.length; d++) {
        var E = e[d];
        typeof E == 'number' && (E < A || (E === A && j++ < b)) && w.push(i[d]);
      }
      return w;
    }
    function Wr(t, r, i) {
      function e(o) {
        for (
          var f = t.offsetAt(o), l = i.getNodeFromOffset(f, !0), u = [];
          l;

        ) {
          switch (l.type) {
            case 'string':
            case 'object':
            case 'array':
              var c = l.offset + 1,
                h = l.offset + l.length - 1;
              c < h && f >= c && f <= h && u.push(n(c, h)),
                u.push(n(l.offset, l.offset + l.length));
              break;
            case 'number':
            case 'boolean':
            case 'null':
            case 'property':
              u.push(n(l.offset, l.offset + l.length));
              break;
          }
          if (
            l.type === 'property' ||
            (l.parent && l.parent.type === 'array')
          ) {
            var g = s(l.offset + l.length, 5);
            g !== -1 && u.push(n(l.offset, g));
          }
          l = l.parent;
        }
        for (var m = void 0, p = u.length - 1; p >= 0; p--)
          m = Ne.create(u[p], m);
        return m || (m = Ne.create(U.create(o, o))), m;
      }
      function n(o, f) {
        return U.create(t.positionAt(o), t.positionAt(f));
      }
      var a = le(t.getText(), !0);
      function s(o, f) {
        a.setPosition(o);
        var l = a.scan();
        return l === f ? a.getTokenOffset() + a.getTokenLength() : -1;
      }
      return r.map(e);
    }
    function Jr(t, r) {
      var i = [];
      return (
        r.visit(function (e) {
          var n;
          if (
            e.type === 'property' &&
            e.keyNode.value === '$ref' &&
            ((n = e.valueNode) === null || n === void 0 ? void 0 : n.type) ===
              'string'
          ) {
            var a = e.valueNode.value,
              s = $n(r, a);
            if (s) {
              var o = t.positionAt(s.offset);
              i.push({
                target: ''
                  .concat(t.uri, '#')
                  .concat(o.line + 1, ',')
                  .concat(o.character + 1),
                range: Fn(t, e.valueNode),
              });
            }
          }
          return !0;
        }),
        Promise.resolve(i)
      );
    }
    function Fn(t, r) {
      return U.create(
        t.positionAt(r.offset + 1),
        t.positionAt(r.offset + r.length - 1),
      );
    }
    function $n(t, r) {
      var i = Dn(r);
      return i ? Jt(i, t.root) : null;
    }
    function Jt(t, r) {
      if (!r) return null;
      if (t.length === 0) return r;
      var i = t.shift();
      if (r && r.type === 'object') {
        var e = r.properties.find(function (s) {
          return s.keyNode.value === i;
        });
        return e ? Jt(t, e.valueNode) : null;
      } else if (r && r.type === 'array' && i.match(/^(0|[1-9][0-9]*)$/)) {
        var n = Number.parseInt(i),
          a = r.items[n];
        return a ? Jt(t, a) : null;
      }
      return null;
    }
    function Dn(t) {
      return t === '#'
        ? []
        : t[0] !== '#' || t[1] !== '/'
        ? null
        : t.substring(2).split(/\//).map(Rn);
    }
    function Rn(t) {
      return t.replace(/~1/g, '/').replace(/~0/g, '~');
    }
    function qr(t) {
      var r = t.promiseConstructor || Promise,
        i = new Rr(t.schemaRequestService, t.workspaceContext, r);
      i.setSchemaContributions(at);
      var e = new Cr(i, t.contributions, r, t.clientCapabilities),
        n = new Pr(i, t.contributions, r),
        a = new Lr(i),
        s = new Ir(i, r);
      return {
        configure: function (o) {
          i.clearExternalSchemas(),
            o.schemas &&
              o.schemas.forEach(function (f) {
                i.registerExternalSchema(f.uri, f.fileMatch, f.schema);
              }),
            s.configure(o);
        },
        resetSchema: function (o) {
          return i.onResourceChange(o);
        },
        doValidation: s.doValidation.bind(s),
        getLanguageStatus: s.getLanguageStatus.bind(s),
        parseJSONDocument: function (o) {
          return Or(o, { collectComments: !0 });
        },
        newJSONDocument: function (o, f) {
          return Tr(o, f);
        },
        getMatchingSchemas: i.getMatchingSchemas.bind(i),
        doResolve: e.doResolve.bind(e),
        doComplete: e.doComplete.bind(e),
        findDocumentSymbols: a.findDocumentSymbols.bind(a),
        findDocumentSymbols2: a.findDocumentSymbols2.bind(a),
        findDocumentColors: a.findDocumentColors.bind(a),
        getColorPresentations: a.getColorPresentations.bind(a),
        doHover: n.doHover.bind(n),
        getFoldingRanges: Ur,
        getSelectionRanges: Wr,
        findDefinition: function () {
          return Promise.resolve([]);
        },
        findLinks: Jr,
        format: function (o, f, l) {
          var u = void 0;
          if (f) {
            var c = o.offsetAt(f.start),
              h = o.offsetAt(f.end) - c;
            u = { offset: c, length: h };
          }
          var g = {
            tabSize: l ? l.tabSize : 4,
            insertSpaces: l?.insertSpaces === !0,
            insertFinalNewline: l?.insertFinalNewline === !0,
            eol: `
`,
          };
          return tr(o.getText(), u, g).map(function (m) {
            return Y.replace(
              U.create(
                o.positionAt(m.offset),
                o.positionAt(m.offset + m.length),
              ),
              m.content,
            );
          });
        },
      };
    }
    var zr;
    typeof fetch < 'u' &&
      (zr = function (t) {
        return fetch(t).then((r) => r.text());
      });
    var st = class {
        _ctx;
        _languageService;
        _languageSettings;
        _languageId;
        constructor(r, i) {
          (this._ctx = r),
            (this._languageSettings = i.languageSettings),
            (this._languageId = i.languageId),
            (this._languageService = qr({
              workspaceContext: {
                resolveRelativePath: (e, n) => {
                  let a = n.substr(0, n.lastIndexOf('/') + 1);
                  return qn(a, e);
                },
              },
              schemaRequestService: i.enableSchemaRequest ? zr : void 0,
            })),
            this._languageService.configure(this._languageSettings);
        }
        async doValidation(r) {
          let i = this._getTextDocument(r);
          if (i) {
            let e = this._languageService.parseJSONDocument(i);
            return this._languageService.doValidation(
              i,
              e,
              this._languageSettings,
            );
          }
          return Promise.resolve([]);
        }
        async doComplete(r, i) {
          let e = this._getTextDocument(r);
          if (!e) return null;
          let n = this._languageService.parseJSONDocument(e);
          return this._languageService.doComplete(e, i, n);
        }
        async doResolve(r) {
          return this._languageService.doResolve(r);
        }
        async doHover(r, i) {
          let e = this._getTextDocument(r);
          if (!e) return null;
          let n = this._languageService.parseJSONDocument(e);
          return this._languageService.doHover(e, i, n);
        }
        async format(r, i, e) {
          let n = this._getTextDocument(r);
          if (!n) return [];
          let a = this._languageService.format(n, i, e);
          return Promise.resolve(a);
        }
        async resetSchema(r) {
          return Promise.resolve(this._languageService.resetSchema(r));
        }
        async findDocumentSymbols(r) {
          let i = this._getTextDocument(r);
          if (!i) return [];
          let e = this._languageService.parseJSONDocument(i),
            n = this._languageService.findDocumentSymbols(i, e);
          return Promise.resolve(n);
        }
        async findDocumentColors(r) {
          let i = this._getTextDocument(r);
          if (!i) return [];
          let e = this._languageService.parseJSONDocument(i),
            n = this._languageService.findDocumentColors(i, e);
          return Promise.resolve(n);
        }
        async getColorPresentations(r, i, e) {
          let n = this._getTextDocument(r);
          if (!n) return [];
          let a = this._languageService.parseJSONDocument(n),
            s = this._languageService.getColorPresentations(n, a, i, e);
          return Promise.resolve(s);
        }
        async getFoldingRanges(r, i) {
          let e = this._getTextDocument(r);
          if (!e) return [];
          let n = this._languageService.getFoldingRanges(e, i);
          return Promise.resolve(n);
        }
        async getSelectionRanges(r, i) {
          let e = this._getTextDocument(r);
          if (!e) return [];
          let n = this._languageService.parseJSONDocument(e),
            a = this._languageService.getSelectionRanges(e, i, n);
          return Promise.resolve(a);
        }
        _getTextDocument(r) {
          let i = this._ctx.getMirrorModels();
          for (let e of i)
            if (e.uri.toString() === r)
              return We.create(r, this._languageId, e.version, e.getValue());
          return null;
        }
      },
      Wn = '/'.charCodeAt(0),
      qt = '.'.charCodeAt(0);
    function Jn(t) {
      return t.charCodeAt(0) === Wn;
    }
    function qn(t, r) {
      if (Jn(r)) {
        let i = ye.parse(t),
          e = r.split('/');
        return i.with({ path: Br(e) }).toString();
      }
      return zn(t, r);
    }
    function Br(t) {
      let r = [];
      for (let e of t)
        e.length === 0 ||
          (e.length === 1 && e.charCodeAt(0) === qt) ||
          (e.length === 2 && e.charCodeAt(0) === qt && e.charCodeAt(1) === qt
            ? r.pop()
            : r.push(e));
      t.length > 1 && t[t.length - 1].length === 0 && r.push('');
      let i = r.join('/');
      return t[0].length === 0 && (i = '/' + i), i;
    }
    function zn(t, ...r) {
      let i = ye.parse(t),
        e = i.path.split('/');
      for (let n of r) e.push(...n.split('/'));
      return i.with({ path: Br(e) }).toString();
    }
    function Bn(t, r) {
      return new st(t, r);
    }
    return Yr(_n);
  })();
  return moduleExports;
});
