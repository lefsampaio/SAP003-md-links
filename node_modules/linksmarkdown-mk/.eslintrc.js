module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'camelcase': 'error',
        'id-length': 'error',
        'keyword-spacing': [
            "error",
            { "before": true }
        ],
        'space-infix-ops': "error",
        'comma-spacing': [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        'space-before-blocks': "error",
        'spaced-comment': [
            "error",
            "always"
        ],
        'key-spacing': [
            "error",
            { "beforeColon": false }
        ],
        'no-multi-spaces': "error",
        'space-in-parens': [
            "error",
            "never"
        ],
        'space-before-function-paren': "error",
        'func-call-spacing': [
            "error",
            "never"
        ],
        'no-multiple-empty-lines': "error",
        'padded-blocks': [
            "error",
            "never"
        ],
        'no-floating-decimal': "error",
        'object-property-newline': "error",
        'brace-style': "error",
        'eqeqeq': "error",
        'no-array-constructor': "error",
    }
};