/// <reference path="./node_modules/tree-sitter-cli/dsl.d.ts" />

/**
 * LAT localization.
 *
 * All properties are optional.
 * All default values match the values defined for the English language.
 */
export interface L10n {
  /**
   * Name for the grammar.
   *
   * Default: `"lat"`.
   */
  name?: string;

  /**
   * Indicates the localization is right-to-left (RTL).
   *
   * Default: `false`.
   */
  rtl?: boolean;
  /**
   * And operator
   *
   * Default: `"and"`.
   */
  and?: string | Iterable<string>;
  /**
   * As keyword.
   *
   * Default: `"as"`.
   */
  as?: string | Iterable<string>;
  /**
   * Break keyword.
   *
   * Default: `"break"`.
   */
  break?: string | Iterable<string>;
  /**
   * By keyword.
   *
   * Default: `"by"`.
   */
  by?: string | Iterable<string>;
  /**
   * Continue keyword.
   *
   * Default: `"continue"`.
   */
  continue?: string | Iterable<string>;
  /**
   * Each keyword.
   *
   * Default: `"each"`.
   */
  each?: string | Iterable<string>;
  /**
   * Else keyword.
   *
   * Default: `"else"`.
   */
  else?: string | Iterable<string>;
  /**
   * End keyword.
   *
   * Default: `"end"`.
   */
  end?: string | Iterable<string>;
  /**
   * Fallback keyword.
   *
   * Default: `"fallback"`.
   */
  fallback?: string | Iterable<string>;
  /**
   * False constant.
   *
   * Default: `"false"`.
   */
  false?: string | Iterable<string>;
  /**
   * From keyword.
   *
   * Default: `"from"`.
   */
  from?: string | Iterable<string>;
  /**
   * Function keyword.
   *
   * Default: `"function"`.
   */
  function?: string | Iterable<string>;
  /**
   * Global constant.
   *
   * Default: `"global"`.
   */
  global?: string | Iterable<string>;
  /**
   * If keyword.
   *
   * Default: `"if"`.
   */
  if?: string | Iterable<string>;
  /**
   * In keyword.
   *
   * Default: `"in"`.
   */
  in_keyword?: string | Iterable<string>;
  /**
   * In operator.
   *
   * Default: `"in"`.
   */
  in_operator?: string | Iterable<string>;
  /**
   * Infinity constant.
   *
   * Default: `"infinity"`.
   */
  infinity?: string | Iterable<string>;
  /**
   * Is keyword.
   *
   * Default: `"is"`.
   */
  is?: string | Iterable<string>;
  /**
   * Is not keyword.
   *
   * Default: `"is not"`.
   */
  is_not?: string | Iterable<string>;
  /**
   * Label keyword.
   *
   * Default: `"label"`.
   */
  label?: string | Iterable<string>;
  /**
   * Let keyword.
   *
   * Default: `"let"`.
   */
  let?: string | Iterable<string>;
  /**
   * List type.
   *
   * Default: `"list"`.
   */
  list?: string | Iterable<string>;
  /**
   * Logical type.
   *
   * Default: `"logical"`.
   */
  logical?: string | Iterable<string>;
  /**
   * Dictionary type.
   *
   * Default: `"dictionary"`.
   */
  dictionary?: string | Iterable<string>;
  /**
   * Match keyword.
   *
   * Default: `"match"`.
   */
  match?: string | Iterable<string>;
  /**
   * Matches keyword.
   *
   * Default: `"matches"`.
   */
  matches?: string | Iterable<string>;
  /**
   * Does Not Match keyword.
   *
   * Default: `"matches"`.
   */
  does_not_match?: string | Iterable<string>;
  /**
   * Modulo operator.
   *
   * Default: `["mod", "modulo"]`.
   */
  modulo?: string | Iterable<string>;
  /**
   * NaN (not a number) constant.
   *
   * Default: `"nan"`.
   */
  nan?: string | Iterable<string>;
  /**
   * Not operator.
   *
   * Default: `"not"`.
   */
  not?: string | Iterable<string>;
  /**
   * Null constant and type.
   *
   * Default: `"null"`.
   */
  null?: string | Iterable<string>;
  /**
   * Number type.
   *
   * Default: `"number"`.
   */
  number?: string | Iterable<string>;
  /**
   * Or operator.
   *
   * Default: `"or"`.
   */
  or?: string | Iterable<string>;
  /**
   * Out operator.
   *
   * Default: `"out"`.
   */
  out?: string | Iterable<string>;
  /**
   * Reduce keyword.
   *
   * Default: `"reduce"`.
   */
  reduce?: string | Iterable<string>;
  /**
   * Remainder operator.
   *
   * Default: `"remainder"`.
   */
  remainder?: string | Iterable<string>;
  /**
   * Root constant.
   *
   * Default: `"root"`.
   */
  root?: string | Iterable<string>;
  /**
   * Text type.
   *
   * Default: `"text"`.
   */
  text?: string | Iterable<string>;
  /**
   * Then keyword.
   *
   * Default: `"then"`.
   */
  then?: string | Iterable<string>;
  /**
   * To keyword.
   *
   * Default: `"to"`.
   */
  to?: string | Iterable<string>;
  /**
   * True constant.
   *
   * Default: `"true"`.
   */
  true?: string | Iterable<string>;
  /**
   * Type operator.
   *
   * Default: `"type"`.
   */
  type?: string | Iterable<string>;
  /**
   * Unknown type.
   *
   * Default: `"unknown"`.
   */
  unknown?: string | Iterable<string>;
  /**
   * Until keyword.
   *
   * Default: `"until"`.
   */
  until?: string | Iterable<string>;
  /**
   * With keyword.
   *
   * Default: `"with"`.
   */
  with?: string | Iterable<string>;

  /**
   * HTML builtin
   *
   * Default: `"html"`.
   */
  html?: string | Iterable<string>;

  logical_methods?: LogicalMethods;
  number_constants?: NumberConstants;
  number_methods?: NumberMethods;
  text_methods?: TextMethods;
}

export interface LogicalMethods {
  all?: string | Iterable<string>;
  none?: string | Iterable<string>;
  any?: string | Iterable<string>;
}

export interface NumberConstants {
  euler_number?: string | Iterable<string>;
  pi?: string | Iterable<string>;
}

export interface NumberMethods {
  absolute?: string | Iterable<string>;
  round?: string | Iterable<string>;
  round_up?: string | Iterable<string>;
  round_down?: string | Iterable<string>;
  random?: string | Iterable<string>;
  clamp?: string | Iterable<string>;
  format?: string | Iterable<string>;
  is_finite?: string | Iterable<string>;
  is_integer?: string | Iterable<string>;
  is_safe_integer?: string | Iterable<string>;
  is_nan?: string | Iterable<string>;

  acos?: string | Iterable<string>;
  acosh?: string | Iterable<string>;
  asin?: string | Iterable<string>;
  asinh?: string | Iterable<string>;
  atan?: string | Iterable<string>;
  atanh?: string | Iterable<string>;

  cube_root?: string | Iterable<string>;
  square_root?: string | Iterable<string>;
  cos?: string | Iterable<string>;
  cosh?: string | Iterable<string>;
  exp?: string | Iterable<string>;
  log?: string | Iterable<string>;
  log2?: string | Iterable<string>;
  log10?: string | Iterable<string>;
  max?: string | Iterable<string>;
  min?: string | Iterable<string>;
  mean?: string | Iterable<string>;
  median?: string | Iterable<string>;
  mode?: string | Iterable<string>;
  sin?: string | Iterable<string>;
  sinh?: string | Iterable<string>;
  tan?: string | Iterable<string>;
  tanh?: string | Iterable<string>;
  truncate?: string | Iterable<string>;
}

interface TextMethods {
  lowercase?: string | Iterable<string>;
  uppercase?: string | Iterable<string>;
}

interface ListMethods {
  sort?: string | Iterable<string>;
}

interface DictionaryMethods {
  keys?: string | Iterable<string>;
  values?: string | Iterable<string>;
  entries?: string | Iterable<string>;
}

export interface Localized
  extends Record<
    | keyof Omit<L10n, 'logical_methods' | 'number_constants' | 'number_methods' | 'text_methods'>
    | 'addition'
    | 'arrow'
    | 'assignment'
    | 'close_braces'
    | 'close_brackets'
    | 'close_parenthesis'
    | 'comma'
    | 'division'
    | 'ellipsis'
    | 'equal'
    | 'exponentiation'
    | 'greater_than_or_equal'
    | 'greater_than'
    | 'less_than_or_equal'
    | 'less_than'
    | 'multiplication'
    | 'not_equal'
    | 'open_braces'
    | 'open_brackets'
    | 'open_parenthesis'
    | 'optional_assignment'
    | 'optional_comma'
    | 'subtraction',
    string | Rule
  > {
  name: string;
  logical_constants: Record<string, never>;
  logical_methods: Record<keyof LogicalMethods, string | Rule>;
  number_constants: Record<keyof NumberConstants, string | Rule>;
  number_methods: Record<keyof NumberMethods, string | Rule>;
  text_constants: Record<string, never>;
  text_methods: Record<keyof TextMethods, string | Rule>;
  list_constants: Record<string, never>;
  list_methods: Record<keyof ListMethods, string | Rule>;
  dictionary_constants: Record<string, never>;
  dictionary_methods: Record<keyof DictionaryMethods, string | Rule>;
}

/**
 * Localization for English.
 *
 * Constitutes the defaults for localization.
 */
const en: Omit<
  Required<L10n>,
  | 'name'
  | 'rtl'
  | 'logical_methods'
  | 'number_constants'
  | 'number_methods'
  | 'text_methods'
  | 'list_methods'
  | 'dictionary_methods'
> = {
  // types
  null: 'null',
  type: 'type',
  logical: 'logical',
  number: 'number',
  text: 'text',
  list: 'list',
  dictionary: 'dictionary',
  function: 'function',
  unknown: 'unknown',

  // globals
  global: 'global',
  root: 'root',

  // builtin
  html: 'html',

  // constants
  false: 'false',
  true: 'true',
  nan: ['nan', 'not a number'],
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
  in_keyword: 'in',
  label: 'label',
  let: 'let',
  match: 'match',
  reduce: 'reduce',
  // biome-ignore lint/suspicious/noThenProperty: This object will never be mistaken for a `Promise`.
  then: 'then',
  to: 'to',
  until: 'until',
  with: 'with',

  // operators
  and: 'and',
  in_operator: 'in',
  is: 'is',
  is_not: 'is not',
  matches: 'matches',
  does_not_match: 'does not match',
  modulo: ['mod', 'modulo'],
  not: 'not',
  or: 'or',
  out: ['out', 'out of', 'not in'],
  remainder: 'remainder',
};

const members = {
  constants: {
    logical: {},
    number: {
      euler_number: ['e', 'euler', 'euler number'],
      pi: ['pi', 'π'],
    },
    text: {},
    list: {},
    dictionary: {},
  },
  methods: {
    logical: {
      all: 'all',
      any: 'any',
      none: 'none',
    },
    number: {
      absolute: ['abs', 'absolute'],
      round: 'round',
      round_up: 'round up',
      round_down: 'round down',
      random: 'random',
      clamp: 'clamp',
      format: 'format',
      is_finite: 'is finite',
      is_integer: 'is integer',
      is_safe_integer: 'is safe integer',
      is_nan: ['is nan', 'is not a number'],

      acos: ['acos', 'inverse cosine'],
      acosh: ['acosh', 'inverse hyperbolic cosine'],
      asin: ['asin', 'inverse sine'],
      asinh: ['asinh', 'inverse hyperbolic sine'],
      atan: ['atan', 'inverse tangent'],
      atanh: ['atanh', 'inverse hyperbolic tangent'],

      cube_root: ['cbrt', 'cube root'],
      square_root: ['sqrt', 'square root'],
      cos: ['cos', 'cosine'],
      cosh: ['cosh', 'hyperbolic cosine'],
      exp: 'exp',

      log: ['log', 'natural logarithm'],
      log2: ['log2', 'base 2 logarithm'],
      log10: ['log10', 'base 10 logarithm'],
      max: ['max', 'maximum'],
      min: ['min', 'minimum'],
      mean: ['mean', 'average'],
      median: 'median',
      mode: 'mode',
      sin: ['sin', 'sine'],
      sinh: ['sinh', 'hyperbolic sine'],
      tan: ['tan', 'tangent'],
      tanh: ['tanh', 'hyperbolic tangent'],
      truncate: ['trunc', 'truncate'],
    },
    text: {
      uppercase: ['upper', 'uppercase'],
      lowercase: ['lower', 'lowercase'],
    },
    list: { sort: 'sort' },
    dictionary: {
      keys: 'keys',
      values: 'values',
      entries: 'entries',
    },
  },
};

export const caseInsensitive = (word: string) => {
  const choices: (string | Rule)[] = [];
  for (const letter of word) {
    const lower = letter.toLowerCase();
    const upper = letter.toUpperCase();
    choices.push(lower === upper ? lower : choice(lower, upper));
  }
  return token(seq(...choices));
};

export const makeLocalizedToken = (rule: string, prefix: string, allowSpecialSymbol: boolean) => {
  const choices: (RegExp | string | ChoiceRule | RepeatRule)[] = [];
  let trailingSpace = false;
  if (prefix) choices.push(prefix);
  for (const letter of rule)
    if (/\s/u.test(letter)) trailingSpace = true;
    else {
      if (trailingSpace) {
        choices.push(optional(choice(repeat1('_'), repeat1(' '))));
        if (allowSpecialSymbol) choices.push(optional('@'));
        trailingSpace = false;
      }
      const lower = letter.toLowerCase();
      const upper = letter.toUpperCase();

      choices.push(lower === upper ? lower : choice(lower, upper));
    }
  return token(seq(...choices));
};

const alias_rule = (
  rule: string | Iterable<string>,
  prefix: string,
  key: string,
  key_prefix: string,
  allowSpecialSymbol = false
) =>
  alias(
    typeof rule === 'string'
      ? makeLocalizedToken(rule, prefix, allowSpecialSymbol)
      : choice(
          ...Array.from(new Set(rule)).map((r) => makeLocalizedToken(r, prefix, allowSpecialSymbol))
        ),
    key_prefix + key
  );

export const makeLocalizedRule = (key: string, rule: string | Iterable<string>) => {
  let prefix: string | undefined = '@';
  switch (key) {
    case 'open_parenthesis':
    case 'close_parenthesis':
    case 'open_brackets':
    case 'close_brackets':
    case 'open_braces':
    case 'close_braces':
    case 'arrow':
    case 'assignment':
    case 'ellipsis':
    case 'comma':
      prefix = '';
  }

  return alias_rule(rule, prefix, key, prefix, true);
};

export const localize = (l10n?: L10n) => {
  const w = {
    addition: '+',
    assignment: ':',
    comma: choice(',', ';'),
    division: choice('÷', '/'),
    ellipsis: choice('...', '…'),
    equal: choice('=', '==', '==='),
    exponentiation: choice('^', '**'),
    greater_than_or_equal: choice('≥', '>='),
    greater_than: '>',
    less_than_or_equal: choice('≤', '<='),
    less_than: '<',
    multiplication: choice('×', '*'),
    not_equal: choice('≠', '!=', '!==', '<>'),
    subtraction: '-',
    ...(l10n?.rtl
      ? {
          arrow: choice('<-', '←', '⇐'),
          open_parenthesis: ')',
          close_parenthesis: '(',
          open_brackets: ']',
          close_brackets: '[',
          open_braces: '}',
          close_braces: '{',
        }
      : {
          arrow: choice('->', '=>', '→', '⇒'),
          open_parenthesis: '(',
          close_parenthesis: ')',
          open_brackets: '[',
          close_brackets: ']',
          open_braces: '{',
          close_braces: '}',
        }),

    logical_constants: {},
    logical_methods: {},
    number_constants: {},
    number_methods: {},
    text_constants: {},
    text_methods: {},
    list_constants: {},
    list_methods: {},
    dictionary_constants: {},
    dictionary_methods: {},
  } as Localized;
  for (const key in en) w[key] = makeLocalizedRule(key, l10n?.[key] || en[key]);
  for (const member of ['constants', 'methods'] as const)
    for (const kind of ['logical', 'number', 'text', 'list', 'dictionary'] as const) {
      const currentMembers = members[member][kind];
      const namespace = `${kind}_${member}` as const;
      for (const key in currentMembers)
        w[namespace][key] = alias_rule(
          l10n?.[namespace]?.[key] || currentMembers[key],
          '',
          key,
          `${kind}__`
        );
    }

  w.optional_comma = optional(w.comma);
  w.optional_assignment = optional(w.assignment);
  w.not = choice(w.not, '!');
  w.and = choice(w.and, '&', '&&');
  w.or = choice(w.or, '|', '||');
  w.to = choice(w.to, '..=');
  w.until = choice(w.until, '..');

  w.name = l10n?.name || 'lat';

  return w;
};

const multiple_line_comment = token.immediate(/[^|]+/u);
const single_line_comment = token.immediate(/[^\n]*/u);

/**
 * Creates a rule for a unary expression.
 *
 * @param level precedence level
 * @param right right precedence flag
 */
const unary = (
  $: GrammarSymbols<'_expr'>,
  operator: string | Rule,
  level: number,
  right?: boolean
) => prec[right ? 'right' : 'left'](level, seq(operator, field('expression', $._expr)));

/**
 * Creates a rule for a binary expression.
 *
 * @param level precedence level
 * @param right right precedence flag
 */
const binary = (
  $: GrammarSymbols<'_expr'>,
  operator: string | Rule,
  level: number,
  right?: boolean
) =>
  prec[right ? 'right' : 'left'](
    level,
    seq(choice(field('left', $._expr)), operator, choice(field('right', $._expr)))
  );

export const makeGrammar = (l10n?: L10n) => {
  const w = localize(l10n);

  const logical_methods = choice(...Object.values(w.logical_methods));
  const number_constants = choice(...Object.values(w.number_constants));
  const number_methods = choice(...Object.values(w.number_methods));
  const text_methods = choice(...Object.values(w.text_methods));
  const list_methods = choice(...Object.values(w.list_methods));
  const dictionary_methods = choice(...Object.values(w.dictionary_methods));

  const html_tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'search',
    'section',
    'select',
    'slot',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
  ].map(caseInsensitive);
  const html_experimental_tags = ['fencedframe', 'portal'].map(caseInsensitive); // cspell: disable-line
  const html_deprecated_tags = [
    'acronym',
    'big',
    'center',
    'dir',
    'font',
    'frame',
    'frameset',
    'marquee',
    'nobr',
    'noembed', // cspell: disable-line
    'noframes',
    'param',
    'plaintext',
    'rb',
    'rtc',
    'strike',
    'tt',
    'xmp',
  ].map(caseInsensitive);

  return grammar({
    name: 'lat',

    extras: ($) => [
      /\s/,
      $.multiple_line_doc,
      $.single_line_doc,
      $.multiple_line_comment,
      $.single_line_comment,
    ],

    rules: {
      source: ($) => optional($._namespace),

      multiple_line_doc: ($) =>
        seq(
          alias('|!', 'multiline_doc_start'),
          optional(field('note', alias(multiple_line_comment, $.multiline_doc_note))),
          alias(token.immediate('|'), 'multiline_doc_end')
        ),
      single_line_doc: ($) =>
        seq(
          alias(choice('||!', '‖!'), 'doc_start'),
          field('note', alias(single_line_comment, $.doc_note))
        ),
      multiple_line_comment: ($) =>
        seq(
          alias('|?', 'multiline_comment_start'),
          optional(field('note', alias(multiple_line_comment, $.multiline_comment_note))),
          alias(token.immediate('|'), 'multiline_comment_end')
        ),
      single_line_comment: ($) =>
        seq(
          alias(choice('||?', '‖?'), 'comment_start'),
          field('note', alias(single_line_comment, $.comment_note))
        ),

      definition: ($) =>
        seq(
          field('key', $.definition_key),
          choice(seq(w.assignment, field('expression', $._expr)), field('namespace', $.namespace))
        ),

      definition_key: () => /_?[a-z](_?[0-9a-z])*/,

      namespace: ($) =>
        seq(
          alias(w.open_braces, 'namespace_start'),
          optional($._namespace),
          alias(w.close_braces, 'namespace_end')
        ),
      _namespace: ($) => seq($.definition, repeat(seq(w.comma, $.definition)), w.optional_comma),

      _expr: ($) =>
        choice(
          $.not,
          $.negation,

          $.exponentiation,

          $.multiplication,
          $.division,
          $.remainder,
          $.modulo,

          $.addition,
          $.subtraction,

          $.less_than,
          $.less_than_or_equal,
          $.greater_than_or_equal,
          $.greater_than,
          $.in,
          $.out,
          $.is,
          $.is_not,
          $.matches,
          $.does_not_match,

          $.equal,
          $.not_equal,

          $.and,
          $.or,

          alias(w.false, $.false),
          alias(w.true, $.true),

          alias(w.nan, $.nan),
          $._number,
          $.character,
          alias(w.infinity, $.infinity),

          $.text,
          $.reduce,
          $.list,
          $.dictionary,

          $.if,
          $.match,

          //

          $.function,

          $.ref,

          $.parenthesized
        ),

      parenthesized: ($) => seq(w.open_parenthesis, $._block, w.close_parenthesis),

      not: ($) => unary($, w.not, 80),
      negation: ($) => unary($, w.subtraction, 80),

      exponentiation: ($) => binary($, w.exponentiation, 70, true),

      multiplication: ($) => binary($, w.multiplication, 60),
      division: ($) => binary($, w.division, 60),
      remainder: ($) => binary($, w.remainder, 60),
      modulo: ($) => binary($, w.modulo, 60),

      addition: ($) => binary($, w.addition, 50),
      subtraction: ($) => binary($, w.subtraction, 50),

      less_than: ($) => binary($, w.less_than, 40),
      less_than_or_equal: ($) => binary($, w.less_than_or_equal, 40),
      greater_than_or_equal: ($) => binary($, w.greater_than_or_equal, 40),
      greater_than: ($) => binary($, w.greater_than, 40),
      in: ($) => binary($, w.in_operator, 40),
      out: ($) => binary($, w.out, 40),
      is: ($) => binary($, w.is, 40),
      is_not: ($) => binary($, w.is_not, 40),
      matches: ($) => binary($, w.matches, 40),
      does_not_match: ($) => binary($, w.does_not_match, 40),

      equal: ($) => binary($, w.equal, 30),
      not_equal: ($) => binary($, w.not_equal, 30),

      and: ($) => binary($, w.and, 20),
      or: ($) => binary($, w.or, 10),

      _number: ($) => choice($.binary, $.octal, $.decimal, $.hexadecimal),

      binary: ($) =>
        seq(
          alias(/0(B|b)/, 'base_bin'),
          field('value', alias(token.immediate(/(_?[0-1])+/), $.bin_value))
        ),
      octal: ($) =>
        seq(
          alias(/0(O|o)/, 'base_oct'),
          field('value', alias(token.immediate(/(_?[0-7])+/), $.oct_value))
        ),
      decimal: () => /([0-9](_?[0-9])*(\.(_?[0-9])+)?|\.(_?[0-9])+)([Ee][-\+]?(_?[0-9])+)?/,
      hexadecimal: ($) =>
        seq(
          alias(/0(X|x)/, 'base_hex'),
          field('value', alias(token.immediate(/(_?[0-9A-Za-z])+/), $.hex_value))
        ),
      character: ($) =>
        seq(
          alias(/0(U|u)/, 'base_character'),
          choice(
            field('value', alias(token.immediate(/[^\\]/u), $.character_value)),
            field('escape', $.character_escape)
          )
        ),
      character_escape: ($) =>
        seq(
          alias(token.immediate('\\'), 'character_escape_prefix'),
          field(
            'value',
            alias(token.immediate(/[\\abfnrtb]/), $.character_escape_value) // cspell:disable-line
          )
        ),

      text: ($) => seq('"', repeat(choice($.literal, $.interpolation)), token.immediate('"')),

      literal: ($) =>
        prec.right(repeat1(choice(alias(token.immediate(/[^\\"\[]+/), $.string), $.text_escape))),

      text_escape: ($) =>
        seq(
          alias(token.immediate('\\'), 'text_escape_prefix'),
          choice(
            field(
              'value',
              choice(
                alias(token.immediate('a'), $.alert_bell),
                alias(token.immediate('b'), $.backspace),
                alias(token.immediate('t'), $.horizontal_tab),
                alias(token.immediate('n'), $.line_feed),
                alias(token.immediate('v'), $.vertical_tab),
                alias(token.immediate('f'), $.form_feed),
                alias(token.immediate('r'), $.carriage_return),
                alias(token.immediate('"'), $.quotation_mark),
                alias(token.immediate(choice('[', ']')), $.escaped_bracket),
                alias(token.immediate('\\'), $.reverse_solidus)
              )
            ),
            seq(
              alias(token.immediate('x'), 'escape_hex_2'),
              field('value', alias(token.immediate(/[0-9A-Fa-f]{2}/), $.character_hex2))
            ),
            seq(
              alias(token.immediate('u'), 'escape_hex_4'),
              field('value', alias(token.immediate(/[0-9A-Fa-f]{4}/), $.character_hex4))
            ),
            seq(
              alias(token.immediate('U'), 'escape_hex_6'),
              field(
                'value',
                alias(token.immediate(/(10|0[0-9A-Fa-f])[0-9A-Fa-f]{4}/), $.character_hex6)
              )
            )
          )
        ),

      interpolation: ($) =>
        seq(
          alias(token.immediate(w.open_brackets), 'interpolation_start'),
          optional($._list),
          alias(w.close_brackets, 'interpolation_end')
        ),

      reduce: ($) =>
        seq(
          w.reduce,
          field('id', $.id),
          w.assignment,
          field('expression', $._expr),
          field('list', $.list)
        ),

      list: ($) =>
        seq(
          alias(w.open_brackets, 'list_start'),
          optional($._list),
          alias(w.close_brackets, 'list_end')
        ),
      _list: ($) => seq($._list_segment, repeat(seq(w.comma, $._list_segment)), w.optional_comma),

      _list_segment: ($) => choice($.list_gen, $._expr, $.break, $.continue, $.spread, $.let),
      list_gen: ($) => seq($._gen, $.list),

      _gen: ($) => seq($.each, repeat(seq(w.optional_comma, choice($.each, $.filter)))),

      each: ($) =>
        seq(
          optional($._label),
          w.each,
          optional(seq(optional(seq(field('index', $.id), w.comma)), field('key', $.id), w.comma)),
          field('value', $.id),
          field('iterable', choice($.iterator, $.range))
        ),
      iterator: ($) =>
        seq(
          optional(seq(field('fallback', $.fallback))),
          w.in_keyword,
          field('expression', $._expr)
        ),
      range: ($) =>
        prec.left(
          100,
          seq(
            seq(
              w.from,
              field('start', $._expr),
              field('end', choice($.to, $.until)),
              optional(seq(w.by, field('by', $._expr)))
            )
          )
        ),
      until: ($) => seq(w.until, field('expression', $._expr)),
      to: ($) => seq(w.to, $._expr),
      filter: ($) => $._condition,
      _condition: ($) => seq(w.if, field('condition', $._expr)),

      break: ($) => seq(w.break, optional($._label), optional($._condition)),
      continue: ($) => seq(w.continue, optional($._label), optional($._condition)),

      _label: ($) => seq(w.label, field('label', $.id)),

      let: ($) => seq(w.let, field('target', $._let), w.assignment, field('expression', $._expr)),
      _let: ($) => choice($.list_destructuring, $.dictionary_destructuring, $.var),

      list_destructuring: ($) =>
        seq(
          alias(w.open_brackets, 'list_destructuring_start'),
          optional(
            seq(
              $._list_destructuring_segment,
              repeat(seq(w.comma, $._list_destructuring_segment)),
              w.optional_comma
            )
          ),
          alias(w.close_brackets, 'list_destructuring_end'),
          optional($.fallback)
        ),
      _list_destructuring_segment: ($) =>
        choice($.list_destructuring, $.dictionary_destructuring, $.var, $.drop, $.rest),

      dictionary_destructuring: ($) =>
        seq(
          alias(w.open_braces, 'dictionary_destructuring_start'),
          optional(
            seq(
              $._dictionary_destructuring_segment,
              repeat(seq(w.comma, $._dictionary_destructuring_segment)),
              w.optional_comma
            )
          ),
          alias(w.close_braces, 'dictionary_destructuring_end'),
          optional($.fallback)
        ),
      _dictionary_destructuring_segment: ($) => choice($.dictionary_key, $.rest),

      dictionary_key: ($) =>
        choice(
          seq(field('id', $.id), optional(choice(field('fallback', $.fallback), $._as))),
          seq(field('expression', choice($._number, $.text, $.parenthesized)), $._as)
        ),
      _as: ($) => seq(w.as, field('as', $._let)),

      drop: ($) => seq('_', optional(field('places', $._number))),
      rest: ($) => seq(w.ellipsis, field('id', $.id)),
      spread: ($) => seq(w.ellipsis, field('expression', $._expr)),

      dictionary: ($) =>
        seq(
          alias(w.open_braces, 'dictionary_start'),
          optional(
            seq(
              $._dictionary_segment,
              repeat(seq(w.comma, $._dictionary_segment)),
              w.optional_comma
            )
          ),
          alias(w.close_braces, 'dictionary_end')
        ),
      _dictionary_segment: ($) =>
        choice($.dictionary_gen, $.pair, $.break, $.continue, $.spread, $.let),
      dictionary_gen: ($) => seq($._gen, $.dictionary),

      pair: ($) =>
        seq(
          field('key', choice($.dictionary_key, $.dictionary_destructuring)),
          w.assignment,
          field('value', $._expr)
        ),

      if: ($) =>
        prec.right(
          seq(
            $._condition,
            w.then,
            field('then', $._expr),
            optional(seq(w.else, field('else', $._expr)))
          )
        ),

      function: ($) =>
        seq(
          '@',
          alias(w.open_parenthesis, 'function_arguments_start'),
          optional(
            seq(
              choice(field('argument', $.id), $.drop),
              optional(seq(w.comma, $.dictionary_destructuring)),
              w.optional_comma
            )
          ),
          alias(w.close_parenthesis, 'function_arguments_end'),
          w.arrow,
          $.function_body
        ),
      function_body: ($) =>
        prec(
          1,
          seq(
            alias(w.open_braces, 'function_body_start'),
            optional(seq($._function, repeat(seq(w.comma, $._function)), w.optional_comma)),
            alias(w.open_braces, 'function_body_end')
          )
        ),
      _function: ($) => choice($._expr, $.end, $.let),

      match: ($) => seq(w.match, field('list', $.list), optional(w.with), field('cases', $.cases)),
      cases: ($) =>
        seq(
          alias(w.open_braces, 'cases_start'),
          optional(seq($.case, repeat(seq(w.comma, $.case)), w.optional_comma)),
          alias(w.close_braces, 'cases_end')
        ),
      case: ($) =>
        seq(
          field('clauses', choice($.other, $.clauses)),
          w.optional_assignment,
          field('expression', $._expr)
        ),
      clauses: ($) =>
        seq(
          alias(w.open_brackets, 'clauses_start'),
          optional(
            seq($._clauses_segment, repeat(seq(w.comma, $._clauses_segment)), w.optional_comma)
          ),
          alias(w.close_brackets, 'clauses_end')
        ),
      _clauses_segment: ($) => choice($._expr, $._clause, $.other),

      _clause: ($) =>
        choice(
          $.clause_less_than,
          $.clause_less_than_or_equal,
          $.clause_equal,
          $.clause_not_equal,
          $.clause_in,
          $.clause_out,
          $.clause_greater_than_or_equal,
          $.clause_greater_than,
          $.clause_is,
          $.clause_matches,
          $.clause_does_not_match,
          $.clause_not,
          $.clause_and,
          $.clause_or,
          $.range,
          $.parenthesized_clause
        ),

      parenthesized_clause: ($) =>
        seq(w.open_parenthesis, field('clause', $._clause), w.optional_comma, w.close_parenthesis),

      clause_not: ($) => prec.left(80, seq(w.not, field('clause', $._clause))),

      clause_less_than: ($) => prec.left(40, seq(w.less_than, field('expression', $._expr))),
      clause_less_than_or_equal: ($) =>
        prec.left(40, seq(w.less_than_or_equal, field('expression', $._expr))),
      clause_in: ($) => prec.left(40, seq(w.in_operator, field('expression', $._expr))),
      clause_out: ($) => prec.left(40, seq(w.out, field('expression', $._expr))),
      clause_greater_than_or_equal: ($) =>
        prec.left(40, seq(w.greater_than_or_equal, field('expression', $._expr))),
      clause_greater_than: ($) => prec.left(40, seq(w.greater_than, field('expression', $._expr))),

      clause_is: ($) => prec.left(40, seq(w.is, field('expression', $._expr))),
      clause_is_not: ($) => prec.left(40, seq(w.is_not, field('expression', $._expr))),
      clause_matches: ($) => prec.left(40, seq(w.matches, field('expression', $._expr))),
      clause_does_not_match: ($) =>
        prec.left(40, seq(w.does_not_match, field('expression', $._expr))),

      clause_equal: ($) => prec.left(30, seq(w.equal, field('expression', $._expr))),
      clause_not_equal: ($) => prec.left(30, seq(w.not_equal, field('expression', $._expr))),

      clause_and: ($) =>
        prec.left(20, seq(field('left', $._clause), w.and, field('right', $._clause))),
      clause_or: ($) =>
        prec.left(10, seq(field('left', $._clause), w.or, field('right', $._clause))),

      other: () => '_',

      end: ($) => seq(w.end, optional(seq(w.if, $._expr))),

      ref: ($) =>
        choice(
          $.ref_to_type,
          $.ref_to_null,
          $.ref_to_logical,
          $.ref_to_number,
          $.ref_to_text,
          $.ref_to_list,
          $.ref_to_dictionary,
          $.ref_to_function,
          $.ref_to_unknown,

          $.ref_to_html,

          $.reference_to_expression

          // TODO: ref to local variable
          // TODO: ref to global
          // TODO: ref to builtin
        ),

      ref_to_html: ($) =>
        prec.right(
          seq(
            w.html,
            optional(
              seq(
                '.',
                field(
                  'tag',
                  choice($.html_tag, $.html_deprecated_tag, $.html_experimental_tag, $.html_custom)
                ),
                optional($._options),
                optional($._call)
              )
            )
          )
        ),

      html_tag: ($) => choice(...html_tags),
      html_experimental_tag: ($) => choice(...html_experimental_tags),
      html_deprecated_tag: ($) => choice(...html_deprecated_tags),
      html_custom: () => /[A-Za-z]+(-[A-Za-z]+)+/,

      ref_to_type: ($) => prec.right(seq(w.type, optional($._options), optional($._call))),
      ref_to_null: ($) => prec.right(seq(w.null, optional($._options), optional($._call))),
      ref_to_function: ($) => prec.right(seq(w.function, optional($._options), optional($._call))),
      ref_to_unknown: ($) => prec.right(seq(w.unknown, optional($._options), optional($._call))),

      ref_to_logical: ($) =>
        prec.right(
          seq(
            w.logical,
            optional(
              choice(
                seq('.', field('member', $.logical_method)),
                seq(optional($._options), $._call)
              )
            )
          )
        ),
      logical_method: ($) =>
        prec.right(seq(field('method', logical_methods), optional($._options), optional($._call))),

      ref_to_number: ($) =>
        prec.right(
          seq(
            w.number,
            optional(
              choice(
                seq('.', field('member', choice($.number_constant, $.number_method))),
                seq(optional($._options), $._call)
              )
            )
          )
        ),
      number_constant: () => number_constants,
      number_method: ($) =>
        prec.right(seq(field('method', number_methods), optional($._options), optional($._call))),

      ref_to_text: ($) =>
        prec.right(
          seq(
            w.text,
            optional(
              choice(seq('.', field('member', $.text_method)), seq(optional($._options), $._call))
            )
          )
        ),
      text_method: ($) =>
        prec.right(seq(field('method', text_methods), optional($._options), optional($._call))),

      ref_to_list: ($) =>
        prec.right(
          seq(
            w.list,
            optional(
              choice(seq('.', field('member', $.list_method)), seq(optional($._options), $._call))
            )
          )
        ),
      list_method: ($) =>
        prec.right(seq(field('method', list_methods), optional($._options), optional($._call))),

      ref_to_dictionary: ($) =>
        prec.right(
          seq(
            w.dictionary,
            optional(
              choice(
                seq('.', field('member', $.dictionary_method)),
                seq(optional($._options), $._call)
              )
            )
          )
        ),
      dictionary_method: ($) =>
        prec.right(
          seq(field('method', dictionary_methods), optional($._options), optional($._call))
        ),

      reference_to_expression: ($) =>
        seq(w.root, field('path', $.path_to_expression), optional($._call)),
      path_to_expression: ($) => repeat1(seq('.', $.definition_key)),

      _options: ($) => field('options', $.dictionary),

      _call: ($) => field('call', $.call),

      call: ($) =>
        choice(
          seq(
            alias(w.open_parenthesis, 'call_start'),
            optional($._block),
            alias(w.close_parenthesis, 'call_end')
          ),
          field('block', $.text)
        ),

      _block: ($) => seq(field('block', choice($._expr, $.scope)), w.optional_comma),

      scope: ($) => seq(repeat1(seq($.let, w.comma)), $._expr),

      var: ($) => seq(field('id', $.id), optional(field('fallback', $.fallback))),

      id: () => /_?[\p{Alphabetic}][\p{Alphabetic}_0-9]*/u,

      fallback: ($) => prec.left(80, seq(w.fallback, field('expression', $._expr))),
    },
  });
};
