# /incident - Incident Triage & Response

## Purpose

Analyze a production incident and generate a prioritized triage checklist. Writes findings to Obsidian incident log.

## Input

- Problem statement: symptoms, error messages, affected systems
- Optional: logs, metrics, alerts, or stack traces

## Investigation Strategy

Launch three parallel investigation tracks:

### Track 1: External Research (librarian agent)

- Search for known issues matching error signatures
- Check dependency changelogs for recent breaking changes
- Look for CVEs or security advisories in affected components
- Find similar incidents/solutions in public issue trackers

### Track 2: Codebase Exploration (explore agent)

- Identify code paths related to error messages/symptoms
- Find recent commits touching affected areas
- Locate error handling and logging for affected services
- Map service dependencies and failure modes

### Track 3: Code Analysis (inferred agent: go/frontend/postgres/etc.)

- Infer appropriate agent from problem statement context
- Deep analysis of suspect code paths
- Identify potential failure modes
- Review error handling completeness
- Assess rollback safety of recent changes

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Incidents/YYYY-MM-DD-HHMM-brief-title.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Incident: [YYYY-MM-DD-HHMM] [Brief Title]

## Severity: P[1-4]

[Justification for classification]

## Summary

[One paragraph synthesis of the problem and initial findings]

## Findings

### External Context

- [Known issues, CVEs, dependency problems from librarian]

### Codebase Investigation

- [Suspect code paths with file:line references]
- [Recent relevant commits with SHAs]

### Code Analysis

- [Identified failure modes]
- [Error handling gaps]

## Triage Checklist

- [ ] [Specific diagnostic step based on findings]
- [ ] [Specific verification step]
- [ ] ...

## Mitigation Options (ranked by speed-to-recovery)

1. [Option with safety assessment]
2. [Option with safety assessment]

## Communication Checklist

- [ ] Incident declared at P[X]
- [ ] Stakeholders notified
- [ ] Status updates scheduled

## Resolution Verification

- [ ] [Specific metric to watch]
- [ ] [User flow to verify]
- [ ] [Monitoring for recurrence]

## Timeline

- [HH:MM] Incident reported
- [HH:MM] Investigation started
```

## Behavior

1. Parse problem statement to extract symptoms, errors, affected systems
2. Infer appropriate code agent from context (go, frontend, postgres, etc.)
3. Launch librarian, explore, and inferred code agent in parallel
4. Synthesize findings from all three tracks
5. Generate customized checklist with specific file:line references
6. Rank mitigation options by speed-to-recovery
7. Write incident document to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-HHMM-brief-title.md`
