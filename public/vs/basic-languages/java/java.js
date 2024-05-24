'use strict';
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.38.0(0e330ae453813de4e6cf272460fb79c7117073d0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/java/java', ['require', 'require'], (require) => {
  var moduleExports = (() => {
    var s = Object.defineProperty;
    var a = Object.getOwnPropertyDescriptor;
    var r = Object.getOwnPropertyNames;
    var c = Object.prototype.hasOwnProperty;
    var l = (t, e) => {
        for (var o in e) s(t, o, { get: e[o], enumerable: !0 });
      },
      d = (t, e, o, i) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
          for (let n of r(e))
            !c.call(t, n) &&
              n !== o &&
              s(t, n, {
                get: () => e[n],
                enumerable: !(i = a(e, n)) || i.enumerable,
              });
        return t;
      };
    var g = (t) => d(s({}, '__esModule', { value: !0 }), t);
    var f = {};
    l(f, { conf: () => m, language: () => p });
    var m = {
        wordPattern:
          /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        comments: { lineComment: '//', blockComment: ['/*', '*/'] },
        brackets: [
          ['{', '}'],
          ['[', ']'],
          ['(', ')'],
        ],
        autoClosingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
          { open: '"', close: '"' },
          { open: "'", close: "'" },
        ],
        surroundingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
          { open: '"', close: '"' },
          { open: "'", close: "'" },
          { open: '<', close: '>' },
        ],
        folding: {
          markers: {
            start: new RegExp(
              '^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))',
            ),
            end: new RegExp(
              '^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))',
            ),
          },
        },
      },
      p = {
        defaultToken: '',
        tokenPostfix: '.java',
        keywords: [
          'abstract',
          'continue',
          'for',
          'new',
          'switch',
          'assert',
          'default',
          'goto',
          'package',
          'synchronized',
          'boolean',
          'do',
          'if',
          'private',
          'this',
          'break',
          'double',
          'implements',
          'protected',
          'throw',
          'byte',
          'else',
          'import',
          'public',
          'throws',
          'case',
          'enum',
          'instanceof',
          'return',
          'transient',
          'catch',
          'extends',
          'int',
          'short',
          'try',
          'char',
          'final',
          'interface',
          'static',
          'void',
          'class',
          'finally',
          'long',
          'strictfp',
          'volatile',
          'const',
          'float',
          'native',
          'super',
          'while',
          'true',
          'false',
          'yield',
          'record',
          'sealed',
          'non-sealed',
          'permits',
        ],
        operators: [
          '=',
          '>',
          '<',
          '!',
          '~',
          '?',
          ':',
          '==',
          '<=',
          '>=',
          '!=',
          '&&',
          '||',
          '++',
          '--',
          '+',
          '-',
          '*',
          '/',
          '&',
          '|',
          '^',
          '%',
          '<<',
          '>>',
          '>>>',
          '+=',
          '-=',
          '*=',
          '/=',
          '&=',
          '|=',
          '^=',
          '%=',
          '<<=',
          '>>=',
          '>>>=',
        ],
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes:
          /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        digits: /\d+(_+\d+)*/,
        octaldigits: /[0-7]+(_+[0-7]+)*/,
        binarydigits: /[0-1]+(_+[0-1]+)*/,
        hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
        tokenizer: {
          root: [
            ['non-sealed', 'keyword.non-sealed'],
            [
              /[a-zA-Z_$][\w$]*/,
              {
                cases: {
                  '@keywords': { token: 'keyword.$0' },
                  '@default': 'identifier',
                },
              },
            ],
            { include: '@whitespace' },
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
              /@symbols/,
              { cases: { '@operators': 'delimiter', '@default': '' } },
            ],
            [/@\s*[a-zA-Z_\$][\w\$]*/, 'annotation'],
            [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, 'number.float'],
            [
              /(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/,
              'number.float',
            ],
            [/0[xX](@hexdigits)[Ll]?/, 'number.hex'],
            [/0(@octaldigits)[Ll]?/, 'number.octal'],
            [/0[bB](@binarydigits)[Ll]?/, 'number.binary'],
            [/(@digits)[fFdD]/, 'number.float'],
            [/(@digits)[lL]?/, 'number'],
            [/[;,.]/, 'delimiter'],
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"""/, 'string', '@multistring'],
            [/"/, 'string', '@string'],
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid'],
          ],
          whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@javadoc'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
          ],
          comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment'],
          ],
          javadoc: [
            [/[^\/*]+/, 'comment.doc'],
            [/\/\*/, 'comment.doc.invalid'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc'],
          ],
          string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop'],
          ],
          multistring: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"""/, 'string', '@pop'],
            [/./, 'string'],
          ],
        },
      };
    return g(f);
  })();
  return moduleExports;
});
