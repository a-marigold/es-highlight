import type { Token } from '../tokenizer';
import type { HighlightCSSClasses } from './types';

export const generate = (
    tokens: Token[],
    cssClasses: HighlightCSSClasses
): string => {
    const tokensLength = tokens.length;

    let generated: string = '';

    let tokenPos = 0;
    while (tokenPos < tokensLength) {
        if (tokens[tokenPos].type === 'WhiteSpace') {
            generated +=
                '<span' +
                ' ' +
                'class="' +
                cssClasses.token +
                ' ' +
                cssClasses.whitespace +
                '">';

            let charPos = 0;
            while (charPos < tokens[tokenPos].value.length) {
                generated += ' ';
                charPos++;
            }

            generated += '</span>';

            tokenPos++;

            continue;
        }

        tokenPos++;
    }

    return generated;
};
