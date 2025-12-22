# /postmortem - Post-Incident Review

## Purpose

Generate a blameless postmortem document with root cause analysis. Investigates the incident and codebase to provide deeper RCA insights.

## Input

- Incident reference (Obsidian incident file path or summary)
- Resolution details (what fixed it, when)
- Optional: additional context, timeline notes

## Investigation Strategy

Launch three parallel investigation tracks to deepen RCA:

### Track 1: External Research (librarian agent)

- Research similar incidents in public postmortems
- Find industry best practices for preventing recurrence
- Identify patterns from similar failures

### Track 2: Codebase Exploration (explore agent)

- Trace the full failure path through the codebase
- Identify systemic issues (missing tests, error handling gaps)
- Find related code that may have similar vulnerabilities
- Review monitoring/alerting coverage for affected paths

### Track 3: Code Analysis (inferred agent: go/frontend/postgres/etc.)

- Infer appropriate agent from incident context
- Deep analysis of root cause code
- Identify contributing technical factors
- Assess fix completeness and durability

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Postmortems/YYYY-MM-DD-incident-title.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Postmortem: [YYYY-MM-DD] [Incident Title]

## Incident Reference

[[Incidents/YYYY-MM-DD-HHMM-incident-title]]

## Summary

| Field | Value |
|-------|-------|
| Severity | P[1-4] |
| Duration | [X hours/minutes] |
| Time to Detect | [X minutes] |
| Time to Mitigate | [X minutes] |
| User Impact | [Description] |

## What Happened

[Narrative description of the incident from detection to resolution]

## Timeline

| Time | Event |
|------|-------|
| HH:MM | [Event description] |
| HH:MM | [Event description] |

## Root Cause Analysis

### Immediate Cause

[What directly caused the incident]

### Contributing Factors

- [Factor 1]
- [Factor 2]

### 5 Whys

1. Why did [symptom] happen? → [Answer]
2. Why did [answer 1] happen? → [Answer]
3. Why did [answer 2] happen? → [Answer]
4. Why did [answer 3] happen? → [Answer]
5. Why did [answer 4] happen? → [Root cause]

### Codebase Findings

- [Systemic issues identified by explore agent]
- [Related vulnerabilities found]
- [Monitoring/testing gaps]

## What Went Well

- [Thing that worked]
- [Thing that worked]

## What Went Poorly

- [Thing that didn't work]
- [Thing that didn't work]

## Where We Got Lucky

- [Near-miss or lucky break]

## Action Items

- [ ] [Action item] — Owner: @name, Due: YYYY-MM-DD
- [ ] [Action item] — Owner: @name, Due: YYYY-MM-DD
- [ ] [Action item] — Owner: @name, Due: YYYY-MM-DD

## Lessons Learned

[Key takeaways for the team and organization]
```

## Behavior

1. Parse incident reference to extract context (read from Obsidian if path provided)
2. Infer appropriate code agent from incident context
3. Launch librarian, explore, and inferred code agent in parallel
4. Analyze failure path and identify systemic issues
5. Generate 5 Whys analysis based on findings
6. Synthesize into blameless postmortem document
7. Write to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-incident-title.md`
8. Include wiki-link back to original incident document
