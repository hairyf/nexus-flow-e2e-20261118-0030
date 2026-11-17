# Test repository scope

This repository exists only for DSH Nexus end-to-end validation.

- Work only on greeting.js and greeting.test.js for the requested issue.
- Do not edit CI, permissions, credentials, or dependencies.
- Do not force push.
- Run `npm test` before reporting ready.
- Publish with the plain `gh` CLI (the session already carries the bot identity);
  never run `gh auth login`, and never read or print tokens.
- When Settings enables automatic merging and the pull request is ready, changes fewer
  than the configured line limit, and no review requires changes, enable native auto-merge
  with: `gh-default pr merge <number> --auto --merge --match-head-commit <sha> --repo <repository>`
  where `gh-default` is the merge identity. Use `--disable-auto` before any later push
  or when a condition stops holding. No human approval is required for this repository.