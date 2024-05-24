'use strict';
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.38.0(0e330ae453813de4e6cf272460fb79c7117073d0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/lexon/lexon', ['require', 'require'], (require) => {
  var moduleExports = (() => {
    var n = Object.defineProperty;
    var s = Object.getOwnPropertyDescriptor;
    var d = Object.getOwnPropertyNames;
    var a = Object.prototype.hasOwnProperty;
    var l = (t, e) => {
        for (var i in e) n(t, i, { get: e[i], enumerable: !0 });
      },
      p = (t, e, i, r) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
          for (let o of d(e))
            !a.call(t, o) &&
              o !== i &&
              n(t, o, {
                get: () => e[o],
                enumerable: !(r = s(e, o)) || r.enumerable,
              });
        return t;
      };
    var c = (t) => p(n({}, '__esModule', { value: !0 }), t);
    var k = {};
    l(k, { conf: () => m, language: () => u });
    var m = {
        comments: { lineComment: 'COMMENT' },
        brackets: [['(', ')']],
        autoClosingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
          { open: '"', close: '"' },
          { open: ':', close: '.' },
        ],
        surroundingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
          { open: '`', close: '`' },
          { open: '"', close: '"' },
          { open: "'", close: "'" },
          { open: ':', close: '.' },
        ],
        folding: {
          markers: {
            start: new RegExp('^\\s*(::\\s*|COMMENT\\s+)#region'),
            end: new RegExp('^\\s*(::\\s*|COMMENT\\s+)#endregion'),
          },
        },
      },
      u = {
        tokenPostfix: '.lexon',
        ignoreCase: !0,
        keywords: [
          'lexon',
          'lex',
          'clause',
          'terms',
          'contracts',
          'may',
          'pay',
          'pays',
          'appoints',
          'into',
          'to',
        ],
        typeKeywords: [
          'amount',
          'person',
          'key',
          'time',
          'date',
          'asset',
          'text',
        ],
        operators: [
          'less',
          'greater',
          'equal',
          'le',
          'gt',
          'or',
          'and',
          'add',
          'added',
          'subtract',
          'subtracted',
          'multiply',
          'multiplied',
          'times',
          'divide',
          'divided',
          'is',
          'be',
          'certified',
        ],
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        tokenizer: {
          root: [
            [/^(\s*)(comment:?(?:\s.*|))$/, ['', 'comment']],
            [
              /"/,
              {
                token: 'identifier.quote',
                bracket: '@open',
                next: '@quoted_identifier',
              },
            ],
            [
              'LEX$',
              {
                token: 'keyword',
                bracket: '@open',
                next: '@identifier_until_period',
              },
            ],
            ['LEXON', { token: 'keyword', bracket: '@open', next: '@semver' }],
            [
              ':',
              {
                token: 'delimiter',
                bracket: '@open',
                next: '@identifier_until_period',
              },
            ],
            [
              /[a-z_$][\w$]*/,
              {
                cases: {
                  '@operators': 'operator',
                  '@typeKeywords': 'keyword.type',
                  '@keywords': 'keyword',
                  '@default': 'identifier',
                },
              },
            ],
            { include: '@whitespace' },
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, 'delimiter'],
            [/\d*\.\d*\.\d*/, 'number.semver'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/\d+/, 'number'],
            [/[;,.]/, 'delimiter'],
          ],
          quoted_identifier: [
            [/[^\\"]+/, 'identifier'],
            [
              /"/,
              { token: 'identifier.quote', bracket: '@close', next: '@pop' },
            ],
          ],
          space_identifier_until_period: [
            [':', 'delimiter'],
            [' ', { token: 'white', next: '@identifier_rest' }],
          ],
          identifier_until_period: [
            { include: '@whitespace' },
            [':', { token: 'delimiter', next: '@identifier_rest' }],
            [/[^\\.]+/, 'identifier'],
            [/\./, { token: 'delimiter', bracket: '@close', next: '@pop' }],
          ],
          identifier_rest: [
            [/[^\\.]+/, 'identifier'],
            [/\./, { token: 'delimiter', bracket: '@close', next: '@pop' }],
          ],
          semver: [
            { include: '@whitespace' },
            [':', 'delimiter'],
            [
              /\d*\.\d*\.\d*/,
              { token: 'number.semver', bracket: '@close', next: '@pop' },
            ],
          ],
          whitespace: [[/[ \t\r\n]+/, 'white']],
        },
      };
    return c(k);
  })();
  return moduleExports;
});
