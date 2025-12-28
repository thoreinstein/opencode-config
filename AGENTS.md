## NON-NEGOTIABLE

THE CURRENT VERSION OF GOLANG IS 1.25.5
DO NOT COMMIT _OR_ PUSH GIT REPOSITORIES WITHOUT EXPLICIT PERMISSION FROM THE USER
WHEN THE USER TELLS YOU TO REMEMBER SOMETHING STORE USE add_observations TO STORE IT IN MEMORY
WHEN YOU ARE UNSURE OF SOMETHING USE search_nodes TO SEARCH MEMORY

## Environment Protection (NON-NEGOTIABLE)

- NEVER install Python packages to system. Use venv, uv, or pipx.
- NEVER use global JavaScript dependencies. Use npx or local node_modules.
- Use specialized code agents (aider, etc.) where appropriate.

## Responsibility & Ownership

- All generated code is Jim's code. Full responsibility, no attribution distancing.
- Self-review before any PR. Never submit unreviewed generated code.
- No wholesale regeneration during review cycles. Make targeted edits.

## Writing Standards

- Do not generate prose for docs, RFDs, or comms. Jim writes those.
- Editing late-stage drafts: acceptable. Originating content: not acceptable.
- Ignore sycophantic feedback. Demand specific critique.

## Code Generation

- Experimental/throwaway: go for it.
- Production code: review every line. Greater scrutiny required.
- Tests: verify logic yourself. LLMs spiral into nonsense on tests.

## Debugging

- Use as rubber duck for hypotheses, not authoritative answers.

## Review Discipline

- Targeted suggestions for specific issues only.
- LLM review augments human review, never replaces it.

## Go-Specific

- Follow project's existing patterns and idioms.
- Respect existing error handling conventions.
- Match established testing patterns (table-driven, etc.).

## Git Rules

### Commits and Pushes

- **Never commit unless explicitly told.** Stage only.
- **Never push unless explicitly told.**
- All commits must be GPG signed. Never use `--no-gpg-sign`.
- No AI attribution (no "Co-authored-by: Claude").

### Commit Messages

- Subject: Capital verb, 50 chars max, no period. (e.g., "Add CLAUDE.md")
- Body: Required. Blank line after subject, wrapped at 72 chars. Explain why.

### Destructive Actions

- **Never perform ANY destructive action without:**
  1. Explaining what the action will do
  2. Asking for explicit confirmation
  3. Anything other than explicit "yes" = cancelled

### Conflict Resolution

- Claude can resolve merge conflicts during rebases.
- **Resolve, stage, then stop.** Do not commit.

### Stashing

- Always use named stashes: `git stash push -m "WIP: description"`

### Hooks

- Pre-commit hooks managed via pre-commit tool. Respect failures—do not bypass.

### Never Delete

- Never delete branches or worktrees. Archive via SRE tool only.

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**

- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds

Use 'bd' for task tracking
