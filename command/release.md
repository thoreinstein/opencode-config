---
description: Author release notes, changelog, and signed release tag
model: github-copilot/gpt-5.1-codex-max
---

# Release Authoring

**Current Time:** !`date`

**Working Tree Status:** !`git status --porcelain`

**Git Log Since Last Tag:** !`git log $(git describe --tags --abbrev=0 2>/dev/null || git rev-list --max-parents=0 HEAD)..HEAD --oneline`

## Task

Author a release by automatically selecting the correct semver version based on the change set, generating release notes, updating the changelog, and creating a signed tag derived from recent commits.

## Semver Selection

- Determine version automatically from changes since the last tag:
  - **Major**: Breaking changes or backwards-incompatible behavior.
  - **Minor**: New features or notable enhancements without breaking changes.
  - **Patch**: Bug fixes, docs-only, or small internal changes.
- Base the increment on the highest-impact change observed. Use the last tag as the baseline; if none exists, start at `v0.1.0` and increment from there.

## Agent Delegation

- `@linux`: All git operations (status check, tag discovery, log parsing, tag creation).
- Specialized agents (`@go`, `@frontend`, `@postgres`, `@k8s`, `@terraform`, `@security`, `@perf`, etc.): Research commits based on files changed.
- `@architect`: Review overall release scope and architectural implications.
- `@principal`: Author the final `RELEASE_NOTES.md` content with principal-engineer quality.

## Requirements

1. **Clean tree required**: If the working tree is not clean, stop immediately and report the dirty state. Do not proceed.
2. **Understand change set**: Parse the git log output and inspect commits (`git show --stat --name-only <sha>`) to classify changes for semver and scope.
3. **Consult specialists per change**: For each significant commit, delegate to domain specialists based on affected files. Use multiple agents when changes span domains. Summarize their findings.
4. **RELEASE_NOTES.md**: `@principal` writes the new release section informed by specialist input and `@architect` review. Cover scope, user-facing changes, breaking changes, migrations, config/ops impacts, perf/security considerations, and rollout/rollback notes. Insert per existing convention.
5. **CHANGELOG.md**: `@linux` updates with a new section for the chosen version and date, including short SHAs and commit titles grouped appropriately.
6. **Signed tag**: `@linux` creates a signed tag with the release notes in the message: `git tag -s "$VERSION" -m "<release notes>"`. The `-s` flag is mandatory.
7. **No commits/pushes**: Do not commit or push; only author notes and the signed tag.

## Steps

1. `@linux` verifies the working tree is clean (`git status --porcelain`). If not empty, abort.
2. `@linux` determines the last tag (if any) and enumerates commits since that tag (shown above). If no tags exist, use the entire history.
3. `@linux` inspects commits to identify changed files and delegates research to the appropriate specialist agents. Specialists report notable features, fixes, breaking changes, migrations, security/perf impacts.
4. `@architect` reviews the collected scope and implications across domains.
5. Derive the correct semver bump (Major/Minor/Patch) from the highest-impact change and compute the next version. Set `$VERSION` to that value.
6. `@principal` drafts the release narrative and writes the new section into `RELEASE_NOTES.md` following existing format.
7. `@linux` updates `CHANGELOG.md` with a section for `$VERSION` including the date and bulletized commit list with short SHAs and subjects.
8. Review both files for clarity and completeness. Ensure no TODOs remain.
9. `@linux` creates the signed tag: `git tag -s "$VERSION" -m "<release notes>"` (message should match the finalized release notes content).
10. Output a brief summary of what changed and confirm the tag creation command executed (do not push).
11. DO NOT PUSH UNDER AND CIRCUMSTANCE
