---
description: Analyze unstaged changes and suggest atomic commit groups with messages
argument-hint: "[optional focus] - e.g., 'frontend only', 'exclude tests', 'phase 3'"
model: github-copilot/claude-opus-4.5
---

**Current Time:** !`date`

I need to make small, logical, atomic commits based on my current work.

---

## Roadmap Integration (When Using Implement Skill)

If this commit is part of an implementation workflow:

1. **Check roadmap state**: Call `readroadmap` to see current phase
2. **Verify phase work complete**: Ensure all actions for current phase are done
3. **After commit succeeds**: Call `updateroadmap` to mark phase actions as `completed`
4. **Phase gate**: Do NOT proceed to next phase until this commit succeeds
5. **Final phase cleanup**: If this is the last phase, archive/delete the roadmap

```
┌─────────────────────────────────────────────────────────────┐
│  PHASE COMMIT GATE                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Current Phase: [read from roadmap]                        │
│                                                             │
│   ✓ Phase work complete                                     │
│   ✓ Verification passed                                     │
│   → COMMIT (this command)                                   │
│   → Update roadmap (mark phase completed)                   │
│   → PROCEED to next phase                                   │
│                                                             │
│   ⚠️  DO NOT PROCEED UNTIL COMMIT SUCCEEDS                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Pre-flight Checks

Run these before analysis:

1. **Working tree state**: !`git status --porcelain`
2. **Conflict markers**: !`git diff --check`
3. **No rebase/merge in progress**: Verify no `.git/MERGE_HEAD` or `.git/REBASE_HEAD` exists
4. **GPG signing**: All commits MUST use `git commit -S`

If conflicts or rebase/merge in progress, abort and report.

## Repository State

**Status:**
!`git status`

**Unstaged changes:**
!`git diff`

**Staged changes:**
!`git diff --cached`

## Agent Delegation

- `@linux`: All git operations (status, diff, staging, commit execution)
- `@architect`: Review commit organization for architectural coherence
- `@principal`: Validate commit message quality and scope appropriateness
- Specialized agents (`@go`, `@frontend`, `@postgres`, `@k8s`, etc.): Consult for domain-specific changes

## Staging Strategy (CRITICAL)

- **Stage entire files only**: `git add <file>` — NEVER use `git add -p` or `git add --patch`
- `@architect` and `@principal` determine logical commit groupings
- `@linux` executes staging commands for approved file groups
- If a file has mixed concerns: prefer whole-file commit with clear scope in message
- Alternative isolation: `git stash push -m "WIP: description" -- file1 file2`, commit remaining, then `git stash pop`

## Commit Ordering

Follow this sequence when dependencies exist:

1. **Dependencies** — `go.mod`, `package.json`, `requirements.txt`, etc.
2. **Schema/migrations** — Database changes other code depends on
3. **Shared libraries** — Utilities, helpers, common code
4. **Core implementation** — The main feature/fix
5. **Tests** — With implementation if tightly coupled, otherwise after
6. **Documentation** — References final state

## Analysis Instructions

Analyze the changes and create a plan to stage and commit them logically:

1. Group changes into atomic units (by feature, fix, or refactor)
2. For each group, list the specific files to stage
3. Provide a commit message for each group following format:
   - Subject: Capital verb, 50 chars max, no period
   - Body: Required. Blank line after subject, wrapped at 72 chars. Explain *why*.
4. Note any dependencies (File A must be committed before File B)
5. Unless there are questions, proceed with creating the commits
6. **DO NOT PUSH UNDER ANY CIRCUMSTANCE**

## Post-Commit Actions (Implementation Workflow)

After successful commit:

1. **Update roadmap**: `updateroadmap(actionNumber="X.99", status="completed", note="Phase X committed")`
2. **Check if final phase**: If yes, archive/delete roadmap file
3. **Proceed signal**: Only after roadmap updated, signal ready for next phase

$ARGUMENTS
