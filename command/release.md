---
description: Author release notes, changelog, and signed release tag
---

# Release Authoring

**Current Time:** !`date`

**Working Tree Status:** !`git status --porcelain`

**Git Log Since Last Tag:** !`git log $(git describe --tags --abbrev=0 2>/dev/null || git rev-list --max-parents=0 HEAD)..HEAD --oneline`

---

## CRITICAL CONSTRAINTS

> **ALL DELEGATED AGENTS ARE READ-ONLY BY DEFAULT.**

1. **ONLY the orchestrator** may modify files or run git write operations.
2. **NO delegated agent** may commit, tag, push, or write files directly.
3. **`@architect` is RESEARCH ONLY** — it reviews scope and recommends semver, it does NOT execute any changes.
4. **Specialists return TEXT** — they analyze and report findings; the orchestrator applies changes.
5. **Release commits MUST NOT contain** `[skip ci]`, `[ci skip]`, `[no ci]`, or any CI-skip directive — these prevent the release workflow from triggering.

---

## FORBIDDEN ACTIONS FOR DELEGATED AGENTS

Delegated agents (all agents except the orchestrator) **MUST NEVER**:

- `git commit` — ANY commit operation
- `git tag` — ANY tag creation
- `git push` — ANY push operation
- `git reset` — ANY reset operation
- `git revert` — ANY revert operation
- `git checkout` with modifications
- `git branch -d` / `git branch -D` — branch deletion
- Write files directly (use Read, Grep, Glob — return content as TEXT for orchestrator)
- Run any destructive or state-changing git command

**Agents return findings and recommendations as TEXT. The orchestrator executes all writes.**

---

## Agent Delegation

### `@linux`
- **Research phases**: READ-ONLY — git status, log parsing, tag discovery, commit inspection
- **Final steps (orchestrator only)**: Tag creation, changelog updates
- Never commits or pushes

### `@architect`
- **READ-ONLY, RESEARCH ONLY**
- Reviews overall release scope and architectural implications
- Recommends semver version based on change analysis
- **NEVER modifies files, commits, tags, or pushes**
- Returns analysis and recommendations as TEXT

### `@principal`
- **READ-ONLY research** — analyzes commits, reviews specialist input
- **Returns release notes content as TEXT** for the orchestrator to write
- Does NOT write to RELEASE_NOTES.md directly

### Domain Specialists (`@go`, `@frontend`, `@postgres`, `@k8s`, `@terraform`, `@security`, `@perf`, etc.)
- **READ-ONLY** — research commits based on files changed
- Return findings as TEXT summaries
- Never modify files or run git write operations

---

## Task

Author a release by automatically selecting the correct semver version based on the change set, generating release notes, updating the changelog, and creating a signed tag derived from recent commits.

## Semver Selection

- Determine version automatically from changes since the last tag:
  - **Major**: Breaking changes or backwards-incompatible behavior.
  - **Minor**: New features or notable enhancements without breaking changes.
  - **Patch**: Bug fixes, docs-only, or small internal changes.
- Base the increment on the highest-impact change observed. Use the last tag as the baseline; if none exists, start at `v0.1.0` and increment from there.

## Task Tracking

- Dispatch all task tracking to the beads task agent

## Requirements

1. **Clean tree required**: If the working tree is not clean, stop immediately and report the dirty state. Do not proceed.
2. **Understand change set**: Parse the git log output and inspect commits (`git show --stat --name-only <sha>`) to classify changes for semver and scope.
3. **Consult specialists per change**: For each significant commit, delegate to domain specialists based on affected files. Use multiple agents when changes span domains. **Specialists return TEXT findings — they do not write.**
4. **RELEASE_NOTES.md**: `@principal` **RETURNS the release notes content as TEXT**. The **orchestrator writes** the new section into the file. Cover scope, user-facing changes, breaking changes, migrations, config/ops impacts, perf/security considerations, and rollout/rollback notes.
5. **CHANGELOG.md**: **Orchestrator** (using `@linux` for research) updates with a new section for the chosen version and date, including short SHAs and commit titles grouped appropriately.
6. **Signed tag**: **Orchestrator** creates a signed tag with the release notes in the message: `git tag -s "$VERSION" -m "<release notes>"`. The `-s` flag is mandatory.
7. **No commits/pushes**: Do not commit or push; only author notes and the signed tag.
8. **No CI-skip directives**: Release commit messages must NOT contain `[skip ci]`, `[ci skip]`, `[no ci]`, or similar — these prevent the release workflow from triggering.

## Steps

1. `@linux` (READ-ONLY) verifies the working tree is clean (`git status --porcelain`). If not empty, abort.
2. `@linux` (READ-ONLY) determines the last tag (if any) and enumerates commits since that tag (shown above). If no tags exist, use the entire history.
3. `@linux` (READ-ONLY) inspects commits to identify changed files. Delegate research to appropriate specialist agents. **Specialists return TEXT reports** of notable features, fixes, breaking changes, migrations, security/perf impacts.
4. `@architect` (READ-ONLY, RESEARCH ONLY) reviews the collected scope and implications across domains. **Returns semver recommendation and analysis as TEXT. Does NOT execute any changes.**
5. Orchestrator derives the correct semver bump (Major/Minor/Patch) from the highest-impact change and computes the next version. Set `$VERSION` to that value.
6. `@principal` (READ-ONLY) drafts the release narrative. **RETURNS the content as TEXT.** The **orchestrator writes** the new section into `RELEASE_NOTES.md` following existing format.
7. **Orchestrator** updates `CHANGELOG.md` with a section for `$VERSION` including the date and bulletized commit list with short SHAs and subjects.
8. Orchestrator reviews both files for clarity and completeness. Ensure no TODOs remain. **Verify no CI-skip directives are present.**
9. **Orchestrator** creates the signed tag: `git tag -s "$VERSION" -m "<release notes>"` (message should match the finalized release notes content).
10. Output a brief summary of what changed and confirm the tag creation command executed (do not push).

---

## DO NOT PUSH

> **UNDER NO CIRCUMSTANCES MAY YOU PUSH TO THE REMOTE.**
>
> - NO `git push`
> - NO `git push --tags`
> - NO `git push origin`
> - NO `git push` of any form
>
> The release workflow is triggered by the user pushing the signed tag manually.
> Pushing prematurely can trigger broken releases or bypass review gates.
>
> **STOP AFTER TAG CREATION. DO NOT PUSH.**
