# 6. linter-formatter

Date: 2022-07-16

## Status

2022-07-16 Accepted

## Context

The original codebase comes with a simple prettier config. It is lacking in terms of professional coding standards and style guide.

**How should we approach linting and formatting for this repo? Is there any existing standards that we can follow?**

## Decision

### Add a professional eslint config

1. [eslint-config-airbnb - npm](https://www.npmjs.com/package/eslint-config-airbnb)
   1. Used by airbnb; very popular eslint config
2. [wesbos/eslint-config-wesbos: No-Sweat™ Eslint and Prettier Setup - with or without VS Code](https://github.com/wesbos/eslint-config-wesbos#with-vs-code) : **Selected**
   1. builds on top of airbnb eslint config
   2. more beginner-friendly; includes step-by-step youtube tutorial

## Consequences

- Consistent linting and formatting

## Links

- [ESLint + Prettier + VS Code — The Perfect Setup - YouTube](https://www.youtube.com/watch?v=lHAeK8t94as)
