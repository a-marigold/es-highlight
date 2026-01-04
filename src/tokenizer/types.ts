type LiteralTokenType =
    | 'NumberLiteral'
    | 'StringLiteral'
    | 'BooleanLiteral'
    | 'NaNLiteral';

/**
 * Variety of `Token` types
 */
export type TokenType =
    | 'Identifier'
    | 'Keyword'
    | 'Operator'
    | 'WhiteSpace'
    | 'Comment'
    | 'LineDivision'
    | LiteralTokenType;

/**
 *
 */
export type Token = {
    type: TokenType;
    value: string;

    /**
     * Start position of token value in source code
     */
    start: number;

    /**
     * The end of token value in source code
     */
    end: number;
};

export type SingleOperators = [
    '=',
    '+',
    '-',
    '*',
    '/',
    '%',
    '~',
    '^',
    '.',
    ':',
    '|',
    '&',
    '?',
    '!',
    '<',
    '>',

    '{',
    '}',
    '[',
    ']',
    '(',
    ')',

    ';',
    ','
];
export type SingleOperator = SingleOperators[number];

export type DoubleOperators = [
    '==',

    '!=',
    '<=',
    '>=',
    '++',
    '--',
    '**',
    '*=',
    '/=',
    '%=',
    '^=',
    '&=',
    '|=',

    '&&',
    '||',
    '??'
];
export type DoubleOperator = DoubleOperators[number];

export type TripleOperators = [
    '===',
    '!==',
    '**=',

    '<<=',
    '>>=',
    '>>>',

    '&&=',
    '||=',
    '??='
];
export type TripleOperator = TripleOperators[number];

export type QuadrupleOperator = '>>>=';

export type JSKeywords = [
    'var',
    'let',

    'const',

    'typeof',

    'class',
    'in',

    'new',
    'instanceof',

    'function',
    'void',
    'delete'
];
export type JSKeyword = JSKeywords[number];
export type TSKeywords = [
    'keyof',
    'abstract',
    'interface',
    'enum',
    'type',
    'implements'
];
export type TSKeyword = TSKeywords[number];

export type Keywords = [...JSKeywords, ...TSKeywords];
export type Keyword = Keywords[number];

/**
 *
 * Type that contains `TokenType` values to be checked in tokenizer.
 *
 *
 * @example
 * ```typescript
 * const singleOperatorsInit: SingleOperators = ['=', '+', '-' ...];
 *
 * const singleOperators: TokenSet = new Set(singleOperatorsInit);
 * ```
 */
export type TokenSet = Set<string>;
