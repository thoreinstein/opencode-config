# /debug - Structured Debugging Workflow

## Purpose

Guide systematic debugging through hypothesis generation, investigation, and verification. Documents findings to Obsidian for knowledge retention.

## Input

- Problem statement: symptoms, error messages, reproduction steps
- Context: environment, recent changes, frequency
- Optional: initial hypotheses or suspected areas

## Investigation Strategy

Launch parallel investigation tracks:

### Track 1: Codebase Exploration (explore agent)

- Trace code paths related to error messages/symptoms
- Find error handling and logging in affected areas
- Identify recent changes to suspect code
- Map data flow through affected components

### Track 2: Code Analysis (inferred agent: go/frontend/postgres)

- Deep analysis of suspect code paths
- Identify potential failure modes
- Review error handling completeness
- Check for race conditions, edge cases, nil handling

### Track 3: External Research (librarian agent)

- Search for known issues matching error signatures
- Find similar bugs in dependency issue trackers
- Research common causes for the symptom pattern

## Debugging Framework

### 1. Problem Definition

- What is the expected behavior?
- What is the actual behavior?
- What changed recently?
- Is it reproducible? How?

### 2. Hypothesis Generation

Generate ranked hypotheses based on:
- Probability (how likely is this the cause?)
- Testability (how easy to verify/falsify?)
- Recent changes (correlation with deployments)
- Error signatures (what do the errors suggest?)

### 3. Investigation Plan

For each hypothesis:
- What evidence would confirm it?
- What evidence would refute it?
- What's the fastest way to test?

### 4. Evidence Collection

- Log analysis
- Metric correlation
- Code inspection
- Reproduction attempts
- Binary search (git bisect)

### 5. Root Cause Identification

- Distinguish symptoms from causes
- Identify contributing factors
- Verify fix addresses root cause

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Debugging/YYYY-MM-DD-HHMM-issue-title.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Debug Session: [Issue Title]

## Problem Statement

### Expected Behavior

[What should happen]

### Actual Behavior

[What actually happens]

### Reproduction Steps

1. [Step]
2. [Step]
3. [Step]

### Environment

- **Environment**: [dev/staging/prod]
- **Version**: [commit/tag/release]
- **Frequency**: [always/intermittent/rare]
- **First Observed**: [date/time]

## Context

### Recent Changes

- [Relevant deployments or changes]

### Related Errors/Logs

```
[Relevant error messages or log snippets]
```

### Metrics

[Relevant metric observations]

## Hypotheses

### H1: [Hypothesis Title] — Probability: [High/Medium/Low]

**Description**: [What might be happening]

**Evidence For**:
- [Supporting observation]

**Evidence Against**:
- [Contradicting observation]

**Test Plan**:
- [ ] [How to verify/falsify]

**Status**: [Untested/Testing/Confirmed/Refuted]

### H2: [Hypothesis Title] — Probability: [High/Medium/Low]

[Same format]

## Investigation Log

### [YYYY-MM-DD HH:MM] [Action]

[What was done and what was found]

### [YYYY-MM-DD HH:MM] [Action]

[What was done and what was found]

## Findings

### Root Cause

[Confirmed root cause with evidence]

### Contributing Factors

- [Factor 1]
- [Factor 2]

### Code Locations

| File | Line | Issue |
|------|------|-------|
| [file] | [line] | [description] |

## Resolution

### Fix Description

[What was done to fix it]

### Verification

- [ ] [How the fix was verified]

### Prevention

- [ ] [Action to prevent recurrence]

## Lessons Learned

[Key takeaways for future debugging]
```

## Behavior

1. Parse problem statement to extract symptoms and context
2. Infer appropriate code agent from error context
3. Launch explore, librarian, and inferred code agent in parallel
4. Generate ranked hypotheses based on findings
5. Create investigation plan for top hypotheses
6. Document evidence and investigation log
7. Write debug session to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-HHMM-issue-title.md`
