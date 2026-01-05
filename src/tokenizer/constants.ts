import type {
    TokenSet,
    SingleOperators,
    DoubleOperators,
    TripleOperators,
    QuadrupleOperator,
    IdentifierLikeMap,
} from './types';

// operators

const singleOperatorsInit: SingleOperators = [
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
    ',',
];
const doubleOperatorsInit: DoubleOperators = [
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
    '??',
];
const tripleOperatorsInit: TripleOperators = [
    '===',
    '!==',

    '**=',
    '<<=',
    '>>=',
    '>>>',
    '&&=',
    '||=',
    '??=',
];

/**
 * `Set` with all javascript one-symbol operators
 *
 * @example '='
 */
export const singleOperators: TokenSet = new Set(singleOperatorsInit);

/**
 * `Set` with all javascript two-symbol operators
 *
 * @example '++'
 */
export const doubleOperators: TokenSet = new Set(doubleOperatorsInit);

/**
 * `Set` with all javascript three-symbol operators
 *
 * @example '>>>'
 */
export const tripleOperators: TokenSet = new Set(tripleOperatorsInit);

/**
 * The javascript four-symbol operator.
 *
 * Always equals '>>>=' on December 18, 2025 ECMAScript Specification
 */
export const quadrupleOperator: QuadrupleOperator = '>>>=';

// identifier like token types
/**
 * Object with Identifier like literals and their TokenType.
 *
 * Used to determine correct TokenType.
 *
 *
 *
 * @example
 * ```typescript
 * const unknownIdentifier = 'function';
 *
 * const tokenTypeOfUnknownIdentifier = identifierLikeMap[unknownIdentifier as IdentifierLike];
 *
 * // Output:
 *
 * 'Keyword';
 *
 * ```
 */
export const identifierLikeMap: IdentifierLikeMap = {
    abstract: 'Keyword',
    as: 'Instruction',
    assert: 'Instruction',
    asserts: 'Instruction',
    await: 'Instruction',
    break: 'Instruction',
    catch: 'Instruction',
    class: 'Keyword',
    const: 'Keyword',
    continue: 'Instruction',
    debugger: 'Keyword',
    declare: 'Keyword',
    default: 'Instruction',
    delete: 'Keyword',
    do: 'Instruction',
    enum: 'Keyword',
};

// regular expresions (RegExp)

/**
 * RegExp that is used to match javascript identifier start symbol
 *
 */

export const IDENTIFIER_START_REGEXP: RegExp = /^[a-zA-Zа-яА-Я_$]$/;

/**
 * RegExp that is used to match javascript identifier symbols after the first symbol
 */

export const IDENTIFIER_REGEXP: RegExp = /^[a-zA-Zа-яА-Я_$0-9]$/;

/**
 *
 * RegExp that is used to match any number
 */
export const NUMBER_REGEXP: RegExp = /^[0-9]$/;
