# 7. githooks

Date: 2022-08-09

## Status

2022-08-09 Accepted

## Context

The eslint config setup is heavily dependent on [precise config](https://github.com/wesbos/eslint-config-wesbos#with-vs-code) of VS Code. Not all developers use the same config and IDE for development. Code with different linting / formatting standards may be pushed into the codebase.

**How do we ensure linting standards in the code base? Git hooks?**

## Decision

### Add Githooks

[Git Hooks](https://githooks.com/) are scripts that Git executes before or after events such as: commit, push, and receive. Git hooks are a built-in feature - no need to download anything. Git hooks are run locally.

### Options

1. Github Actions eg. [Lint Action](https://github.com/marketplace/actions/lint-action)
2. [typicode/husky: Git hooks made easy 🐶 woof!](https://github.com/typicode/husky) : **Selected**
   1. More popular; many tutorials available
3. [toplenboren/simple-git-hooks: A simple git hooks manager for small projects](https://github.com/toplenboren/simple-git-hooks)
4. [pre-commit/pre-commit: A framework for managing and maintaining multi-language pre-commit hooks.](https://github.com/pre-commit/pre-commit)

Use husky with lint-staged.

## Consequences

- All commits will linted with the same linting standard before commit
- Takes a few more seconds to run `pre-commit` before every commit.

## Links

- [How to write tests for your Gatsby sites and apps with Kent C. Dodds — Learn With Jason - YouTube](https://www.youtube.com/watch?v=BzRAYt7BHRw)
