---
name: analyze
description: "Multi-phase deep analysis of code, architecture, or systems with parallel reconnaissance and structured findings. Use when investigating bugs, evaluating architecture, auditing security, assessing performance, or reviewing code quality across a codebase."
---

# Deep Analysis

Perform a comprehensive, multi-phase analysis of: **$ARGUMENTS**

## Workflow

### Step 1: Reconnaissance

Launch parallel exploration to map the problem space:

```
background_task(agent="explore", prompt="Map relevant code structure for $ARGUMENTS")
background_task(agent="explore", prompt="Find related patterns and dependencies for $ARGUMENTS")
```

While background tasks run, use direct tools to build initial context:

```bash
# Find relevant files
glob "**/*<target>*"

# Identify usage patterns
grep -rn "<target-pattern>" src/ --include="*.go" --include="*.ts" | head -30

# Read key entry points
read <main-file-path>
```

### Step 2: Focused Analysis

Examine the target across six dimensions. For each, produce concrete findings with file paths and line numbers:

| Dimension | Focus |
|-----------|-------|
| **Correctness** | Logic errors, edge cases, unhandled states, wrong assumptions |
| **Security** | Input validation gaps, auth issues, data exposure, injection risks |
| **Performance** | Algorithmic complexity, N+1 queries, missing caches, resource leaks |
| **Reliability** | Error handling gaps, failure modes without recovery, missing retries |
| **Maintainability** | Tight coupling, code duplication, unclear naming, missing abstractions |
| **Testability** | Untested paths, hard-to-mock dependencies, missing integration tests |

For each finding, record:
- **Location**: file path and line number
- **Issue**: what is wrong and why it matters
- **Severity**: P0 (critical) / P1 (high) / P2 (medium)
- **Suggestion**: concrete fix or mitigation

### Step 3: Synthesize Findings

Structure the output as:

```markdown
## Executive Summary
[2–3 sentences: key findings and top recommendation]

## Issues Found

### Critical (P0)
- **[Issue title]** (`path/to/file.go:42`) — [Description and impact]

### High (P1)
- **[Issue title]** (`path/to/file.go:108`) — [Description and impact]

### Medium (P2)
- **[Issue title]** (`path/to/file.go:205`) — [Description and impact]

## Recommendations
### Immediate Actions
1. [Action] — [Rationale and expected impact]

### Short-term Improvements
1. [Improvement] — [Rationale]

### Long-term Considerations
1. [Consideration] — [Trade-offs]
```

### Step 4: Validate Findings

Before finalizing, verify each finding:
- Re-read the code at the cited location to confirm the issue exists.
- Check whether the issue is already handled elsewhere (guard clauses, middleware, tests).
- Remove false positives.

### Step 5: Output to Obsidian

Write the analysis to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Analysis/YYYY-MM-DD-target.md`

> **Note**: `$OBSIDIAN_PATH` must be a vault-relative path (e.g., `Projects/myapp`), set per-project via direnv. The `obsidian_append_content` tool expects paths relative to the vault root.

Use the template at `@~/.config/opencode/templates/analysis-report.md` for document structure.

## Example

```bash
/analyze the authentication middleware in cmd/api/middleware/
```

Expected output: An executive summary identifying 2 critical issues (e.g., missing token expiry validation, SQL injection in user lookup), 3 high-priority items, and a prioritized action plan with specific file references.

$ARGUMENTS
