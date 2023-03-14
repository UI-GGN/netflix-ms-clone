#!/usr/bin/env sh

CleanUp() {
  rm -rf .husky
}

Install() {
  pnpm husky install
}

PreCommit() {
  pnpm husky add .husky/pre-commit "pnpm lint-staged"
  pnpm husky add .husky/pre-commit "git status"
}

CommitMessage() {
  pnpm husky add .husky/commit-msg 'pnpm commitlint --config ./commitlint.config.cjs --edit $1'
}

PrePush() {
  pnpm husky add .husky/pre-push "pnpm test:coverage"
  pnpm husky add .husky/pre-push "git status"
}

Setup() {
  CleanUp
  Install
  PreCommit
  CommitMessage
  PrePush
}

if [ "$CI" = true ]
then
  echo "Skipping husky setup, since env is set to CI=true"
else
  Setup
fi
