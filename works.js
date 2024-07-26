/// <reference path="./node_modules/tree-sitter-cli/dsl.d.ts" />
// @ts-check

const prefix = (/** @type {{ [s: string]: string; }} */ keywords) =>
  Object.entries(keywords).reduce((m, [k, v]) => {
    const choices = [];
    for (const letter of v) choices.push(choice(letter, letter.toUpperCase()));
    m[k] = alias(token(seq('@', ...choices)), '@' + k);
    return m;
  }, Object.create(null));

const en = {
  // types
  logical: 'logical',
  number: 'number',
  text: 'text',
  list: 'list',
  map: 'map',
  function: 'function',
  time: 'time',
  re: 're',
  unknown: 'unknown',

  // globals
  global: 'global',
  root: 'root',

  // constants
  null: 'null',
  false: 'false',
  true: 'true',
  nan: 'nan',
  infinity: 'infinity',

  // keywords
  as: 'as',
  break: 'break',
  by: 'by',
  continue: 'continue',
  each: 'each',
  else: 'else',
  end: 'end',
  fallback: 'fallback',
  from: 'from',
  if: 'if',
  in_kw: 'in',
  label: 'label',
  let: 'let',
  match: 'match',
  reduce: 'reduce',
  then: 'then',
  to: 'to',
  until: 'until',
  with: 'with',

  // operators
  and: 'and',
  in_op: 'in',
  is: 'is',
  matches: 'matches',
  mod: 'mod',
  modulo: 'modulo',
  not: 'not',
  or: 'or',
  out: 'out',
  remainder: 'remainder',
};

const enPunctuation = {
  op: '(',
  cp: ')',
  ob: '[',
  cb: ']',
  oc: '{',
  cc: '}',

  arrow: choice('->', '→'),
  comma: choice(',', ';'),
  optComma: optional(choice(',', ';')),
  ellipsis: choice('…', '...'),
  colon: ':',
  optColon: optional(':'),
};

const w = Object.assign(prefix(en), enPunctuation);

const unicode = {
  2: /[0-9A-Fa-f]{2}/,
  4: /[0-9A-Fa-f]{4}/,
  6: /(10|0[0-9A-Fa-f])[0-9A-Fa-f]{4}/,
};

const l10n = (w) =>
  grammar({
    name: 'lat',

    extras: ($) => [/\s/, $.comment, $.doc],

    rules: {
      source: ($) => optional($._namespace),

      doc: ($) =>
        choice(
          seq('|!', alias(token.immediate(/[^|]*/u), $.notes), token.immediate('|')),
          seq(choice('||!', '‖!'), alias(token.immediate(/[^\n]*/u), $.notes))
        ),
      comment: ($) =>
        choice(
          seq('|?', alias(token.immediate(/[^|]*/u), $.notes), token.immediate('|')),
          seq(choice('||?', '‖?'), alias(token.immediate(/[^\n]*/u), $.notes))
        ),

      definition: ($) =>
        seq(
          field('key', alias(/_?[a-z](_?[0-9a-z])*/, $.key)),
          choice(seq(w.colon, field('expression', $._expr)), field('namespace', $.namespace))
        ),

      namespace: ($) => seq(w.oc, optional($._namespace), w.cc),
      _namespace: ($) => seq($.definition, repeat(seq(w.comma, $.definition)), w.optComma),

      expression: ($) => $._expr,

      _expr: ($) =>
        choice(
          $.not,
          $.minus,

          $.exp,
          $.mul,
          $.div,
          $.rem,
          $.mod,
          $.add,
          $.sub,

          $.lt,
          $.lte,
          $.gte,
          $.gt,
          $.in,
          $.out,
          $.neq,
          $.eq,

          $.mtc,
          $.is,

          $.and,
          $.or,

          $.if,
          $.match,

          $.null,
          $.false,
          $.true,
          $._number,
          $.text,
          $.list,
          $.reduce,
          $.map,
          $.function,

          $.ref,

          $._enclosed
        ),

      function: ($) =>
        seq(
          '@',
          w.op,
          optional(seq(choice($.id, $.drop), optional(seq(w.comma, $.map_dest)), w.optComma)),
          w.cp,
          w.arrow,
          $.function_body
        ),
      function_body: ($) =>
        seq(w.oc, optional(seq($._function, repeat(seq(w.comma, $._function)), w.optComma)), w.cc),
      _function: ($) => choice($._expr, $.end, $.let),

      not: ($) => prec.left(80, seq(w.not, field('expression', $._expr))),
      minus: ($) => prec.left(80, seq('-', field('expression', $._expr))),

      exp: ($) => prec.right(70, seq(field('left', $._expr), '^', field('right', $._expr))),
      mul: ($) =>
        prec.left(60, seq(field('left', $._expr), choice('×', '*'), field('right', $._expr))),
      div: ($) =>
        prec.left(60, seq(field('left', $._expr), choice('÷', '/'), field('right', $._expr))),
      rem: ($) =>
        prec.left(60, seq(field('left', $._expr), choice(w.remainder), field('right', $._expr))),
      mod: ($) =>
        prec.left(
          60,
          seq(field('left', $._expr), choice(w.mod, w.modulo), field('right', $._expr))
        ),
      add: ($) => prec.left(50, seq(field('left', $._expr), '+', field('right', $._expr))),
      sub: ($) => prec.left(50, seq(field('left', $._expr), '-', field('right', $._expr))),
      lt: ($) => prec.left(40, seq(field('left', $._expr), '<', field('right', $._expr))),
      lte: ($) =>
        prec.left(40, seq(field('left', $._expr), choice('≤', '<='), field('right', $._expr))),
      gte: ($) =>
        prec.left(40, seq(field('left', $._expr), choice('≥', '>='), field('right', $._expr))),
      gt: ($) => prec.left(40, seq(field('left', $._expr), '>', field('right', $._expr))),
      in: ($) => prec.left(40, seq(field('left', $._expr), w.in_op, field('right', $._expr))),
      out: ($) => prec.left(40, seq(field('left', $._expr), w.out, field('right', $._expr))),
      is: ($) => prec.left(40, seq(field('left', $._expr), w.is, alias($.type, $.right))),
      neq: ($) =>
        prec.left(
          30,
          seq(field('left', $._expr), choice('≠', '<>', '!=', '!=='), field('right', $._expr))
        ),
      eq: ($) =>
        prec.left(
          30,
          seq(field('left', $._expr), choice('=', '==', '==='), field('right', $._expr))
        ),
      mtc: ($) => prec.left(25, seq(field('left', $._expr), w.matches, field('right', $._expr))),
      and: ($) => prec.left(20, seq(field('left', $._expr), w.and, field('right', $._expr))),
      or: ($) => prec.left(10, seq(field('left', $._expr), w.or, field('right', $._expr))),

      if: ($) => prec.right(seq($.condition, $.then, optional($.else))),
      condition: ($) => seq(w.if, $._expr),
      then: ($) => seq(w.then, $._expr),
      else: ($) => seq(w.else, $._expr),

      match: ($) => seq(w.match, $.list, optional(w.with), $.cases),
      cases: ($) =>
        seq(w.oc, optional(seq($.case, repeat(seq(w.comma, $.case)), w.optComma)), w.cc),
      case: ($) => seq(choice($.other, $.clauses), w.optColon, $._expr),
      clauses: ($) =>
        seq(w.ob, optional(seq($._clause, repeat(seq(w.comma, $._clause)), w.optComma)), w.cb),
      _clause: ($) => choice($._expr, $._match, $.drop),

      _match: ($) =>
        choice(
          $.m_lt,
          $.m_lte,
          $.m_eq,
          $.m_neq,
          $.m_in,
          $.m_out,
          $.m_gte,
          $.m_gt,
          $.m_is,
          $.m_mtc,
          $.m_not,
          $.m_and,
          $.m_or,
          $.range,
          seq(w.op, $._match, w.optComma, w.cp)
        ),

      m_not: ($) => prec.left(80, seq(w.not, $._match)),
      m_lt: ($) => prec.left(40, seq('<', $._expr)),
      m_lte: ($) => prec.left(40, seq('<=', $._expr)),
      m_in: ($) => prec.left(40, seq(w.in_op, $._expr)),
      m_out: ($) => prec.left(40, seq(w.out, $._expr)),
      m_gte: ($) => prec.left(40, seq('>=', $._expr)),
      m_gt: ($) => prec.left(40, seq('>', $._expr)),
      m_eq: ($) => prec.left(30, seq('=', $._expr)),
      m_is: ($) => prec.left(30, seq(w.is, $.type)),
      m_neq: ($) => prec.left(30, seq('!=', $._expr)),
      m_mtc: ($) => prec.left(25, seq(w.matches, $._expr)),
      m_and: ($) => prec.left(20, seq($._match, w.and, $._match)),
      m_or: ($) => prec.left(10, seq($._match, w.or, $._match)),

      other: () => '_',

      null: () => w.null,
      false: () => w.false,
      true: () => w.true,

      _number: ($) =>
        choice(
          alias(w.nan, $.nan),
          alias(w.infinity, $.infinity),
          seq(alias(/0(B|b)/, 'base'), alias(token.immediate(/(_?[0-1])+/), $.bin)),
          seq(alias(/0(O|o)/, 'base'), alias(token.immediate(/(_?[0-7])+/), $.oct)),
          seq(alias(/0(X|x)/, 'base'), alias(token.immediate(/(_?[0-9A-Za-z])+/), $.hex)),
          seq(
            alias(/0(U|u)/, 'base'),
            choice(alias(token.immediate(/[^\\]/u), $.uni), $.number_esc)
          ),
          alias(/([0-9](_?[0-9])*(\.(_?[0-9])+)?|\.(_?[0-9])+)([Ee][-\+]?(_?[0-9])+)?/, $.dec)
        ),
      number_esc: ($) =>
        seq(alias(token.immediate('\\'), 'ne_m'), alias(token.immediate(/[\\abfnrtb]/), $.ess)),
      text: ($) =>
        seq(
          '"',
          repeat(choice(alias(token.immediate(/[^\\"\[]+/), $.s), $.interpolation, $.text_esc)),
          token.immediate('"')
        ),

      interpolation: ($) =>
        seq(alias(token.immediate(w.ob), 'io'), optional($._list), alias(w.cb, 'ic')),

      _list: ($) => seq($._segment, repeat(seq(w.comma, $._segment)), w.optComma),

      list: ($) => seq(w.ob, optional($._list), w.cb),
      _segment: ($) =>
        choice(alias($.list_gen, $.gen), $._expr, $.break, $.continue, $.spread, $.let),
      list_gen: ($) => seq($._gen, $.list),

      reduce: ($) => seq(w.reduce, $.id, w.colon, $.expression, $.list),

      map: ($) => seq(w.oc, optional(seq($._map, repeat(seq(w.comma, $._map)), w.optComma)), w.cc),
      _map: ($) => choice(alias($.map_gen, $.gen), $.pair, $.break, $.continue, $.spread, $.let),
      map_gen: ($) => seq($._gen, $.map),

      _gen: ($) => seq($.each, repeat(seq(w.optComma, choice($.each, $.filter)))),

      each: ($) =>
        seq(
          optional($.label),
          w.each,
          optional(seq(optional(seq(alias($.id, $.i), w.comma)), alias($.id, $.k), w.comma)),
          alias($.id, $.value),
          choice($.iterator, $.range)
        ),
      iterator: ($) => seq(optional(seq($.fallback)), w.in_kw, $._expr),
      range: ($) => prec.left(100, seq($.from, choice($.until, $.to), optional($.by))),
      from: ($) => seq(w.from, $._expr),
      until: ($) => seq(w.until, $._expr),
      to: ($) => seq(w.to, $._expr),
      by: ($) => seq(w.by, $._expr),
      filter: ($) => seq(w.if, $._expr),

      pair: ($) => seq(choice($.key, $.map_dest), w.colon, $._expr),

      break: ($) => seq(w.break, optional($.label), optional(seq(w.if, $._expr))),
      continue: ($) => seq(w.continue, optional($.label), optional(seq(w.if, $._expr))),
      end: ($) => seq(w.end, optional(seq(w.if, $._expr))),

      label: ($) => seq(w.label, $.id),

      spread: ($) => seq(w.ellipsis, $._expr),

      let: ($) => seq(w.let, $._let, w.colon, $._expr),
      _let: ($) => choice($.list_dest, $.map_dest, $.var),

      list_dest: ($) =>
        seq(
          w.ob,
          optional(seq($._list_dest, repeat(seq(w.comma, $._list_dest)), w.optComma)),
          w.cb,
          optional($.fallback)
        ),
      _list_dest: ($) => choice($.list_dest, $.map_dest, $.var, $.drop, $.rest),
      drop: ($) =>
        seq(
          '_',
          optional(alias(token(seq(/[1-9]/, repeat(seq(optional('_'), /[0-9]/)))), $.places))
        ),

      map_dest: ($) =>
        seq(
          w.oc,
          optional(seq($._map_dest, repeat(seq(w.comma, $._map_dest)), w.optComma)),
          w.cc,
          optional($.fallback)
        ),
      _map_dest: ($) => choice($.key, $.rest),

      key: ($) =>
        choice(
          seq($.id, optional($.fallback), optional($.as)),
          seq(choice($._number, $.text, $._enclosed), $.as)
        ),
      as: ($) => seq(w.as, $._let),

      ref: ($) => prec.right(seq($.path, optional($.map), optional($.call))),

      path: ($) =>
        seq(
          choice($.id, alias(w.global, $.global), alias(w.root, $.root), $.type),
          repeat(
            seq('.', choice(alias(/[\p{Alphabetic}_0-9]+/u, $.id), $._number, $.text, $._enclosed))
          )
        ),

      type: ($) =>
        choice(
          alias(w.logical, $.Logical),
          alias(w.number, $.Number),
          alias(w.text, $.Text),
          alias(w.list, $.List),
          alias(w.map, $.Map),
          alias(w.function, $.Function),
          alias(w.re, $.Re),
          alias(w.time, $.Time),
          alias(w.unknown, $.Unknown)
        ),

      call: ($) => choice(seq(w.op, optional($._block), w.cp), $.text),

      _enclosed: ($) => seq(w.op, $._block, w.cp),
      _block: ($) => seq(choice($._expr, $.scope), w.optComma),

      scope: ($) => seq(repeat1(seq($.let, w.comma)), $._expr),

      var: ($) => seq($.id, optional($.fallback)),

      id: () => /_?[\p{Alphabetic}][\p{Alphabetic}_0-9]*/u,

      fallback: ($) => prec.left(80, seq(w.fallback, $._expr)),

      rest: ($) => seq(w.ellipsis, $.id),

      text_esc: ($) =>
        seq(
          alias(token.immediate('\\'), 'te_m'),
          choice(
            field(
              'value',
              choice(
                $.alert_bell,
                $.backspace,
                $.horizontal_tab,
                $.line_feed,
                $.vertical_tab,
                $.form_feed,
                $.carriage_return,
                $.quotation_mark,
                $.open_bracket,
                $.reverse_solidus,
                $.not_an_escape
              )
            ),
            seq(alias(token.immediate('x'), 'te_xk'), field('value', $.character_hex2)),
            seq(alias(token.immediate('u'), 'te_uk'), field('value', $.character_hex4)),
            seq(alias(token.immediate('U'), 'te_Uk'), field('value', $.character_hex6))
          )
        ),
      alert_bell: () => token.immediate('a'), // alert bell U+0007
      backspace: () => token.immediate('b'), // backspace U+0008
      horizontal_tab: () => token.immediate('t'), // horizontal tab U+0009
      line_feed: () => token.immediate('n'), // line feed (new line) U+000A
      vertical_tab: () => token.immediate('v'), // vertical tab U+000B
      form_feed: () => token.immediate('f'), // form feed U+000C
      carriage_return: () => token.immediate('r'), // carriage return U+000D
      quotation_mark: () => token.immediate('"'), // quotation mark U+022
      open_bracket: () => token.immediate(w.ob), // open bracket
      reverse_solidus: () => token.immediate('\\'), // reverse solidus (backslash) U+005C
      not_an_escape: () => token.immediate(/[^abfnrtvxuU\\"\[]/), // not an escape
      character_hex2: () => token.immediate(unicode[2]),
      character_hex4: () => token.immediate(unicode[4]),
      character_hex6: () => token.immediate(unicode[6]),
    },
  });

module.exports = l10n(w);
