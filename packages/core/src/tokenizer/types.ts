type LiteralTokenType =
    | 'NumberLiteral'
    | 'StringLiteral'
    | 'BooleanLiteral'
    | 'NaNLiteral'
    | 'NullLiteral'
    | 'UndefinedLiteral';

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
    | 'Instruction'
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
    'delete',

    'this',

    'debugger'
];
export type JSKeyword = JSKeywords[number];
export type TSKeywords = [
    'keyof',
    'abstract',
    'interface',
    'enum',
    'type',
    'implements',
    'declare'
];
export type TSKeyword = TSKeywords[number];

export type Keywords = [...JSKeywords, ...TSKeywords];
export type Keyword = Keywords[number];

type JSInstruction =
    | 'for'
    | 'do'
    | 'while'
    | 'continue'
    | 'break'
    | 'import'
    | 'from'
    | 'export'
    | 'package'
    | 'try'
    | 'catch'
    | 'finally'
    | 'async'
    | 'await'
    | 'yield'
    | 'with'
    | 'assert'
    | 'default'
    | 'throw'
    | 'return';

type TSInstruction = 'as' | 'asserts' | 'is';
export type Instruction = JSInstruction | TSInstruction;

type Literal = 'true' | 'false' | 'NaN' | 'null' | 'undefined';

/**
 * Token Types that are like `Identifier` TokenType
 */
export type IdentifierLike = Keyword | Instruction | Literal;

/**
 * Record with Token Types that are like `Identifier` TokenType.
 * Used to determine correct TokenType
 */
export type IdentifierLikeMap = {
    [K in IdentifierLike]: Extract<
        TokenType,
        | 'Keyword'
        | 'Instruction'
        | 'BooleanLiteral'
        | 'NaNLiteral'
        | 'NullLiteral'
        | 'UndefinedLiteral'
    >;
};

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
