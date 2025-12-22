# /rollback - Rollback Analysis & Checklist

## Purpose

Analyze a deployment or change for rollback safety and generate a prioritized rollback checklist. Documents findings to Obsidian.

## Input

- Target: deployment, commit SHA, release tag, or PR reference
- Context: what went wrong or why rollback is being considered
- Optional: urgency level (immediate vs planned)

## Investigation Strategy

Launch parallel investigation tracks:

### Track 1: Codebase Exploration (explore agent)

- Identify all changes included in the rollback scope
- Map database migrations in the change set
- Find feature flags introduced or modified
- Identify API contract changes
- Assess backward compatibility

### Track 2: Code Analysis (inferred agent: go/frontend/postgres)

- Analyze migration reversibility
- Check for data transformations that may not be reversible
- Identify breaking changes in APIs or contracts
- Review feature flag dependencies

### Track 3: External Research (librarian agent)

- Find rollback patterns for similar changes
- Check for known rollback issues with dependencies
- Research safe rollback strategies for the change type

## Rollback Safety Assessment

### Safe to Rollback

- Code-only changes (no DB migrations)
- Additive API changes
- Feature-flagged functionality
- UI/frontend changes

### Requires Caution

- Database migrations (check reversibility)
- API breaking changes (check client compatibility)
- Configuration changes (check dependent services)
- Infrastructure changes (check state)

### Potentially Dangerous

- Destructive migrations (DROP, DELETE, column removal)
- Data transformations (may lose data)
- Schema changes with live traffic
- Multi-service coordinated deployments

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Rollbacks/YYYY-MM-DD-HHMM-target.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Rollback Analysis: [Target]

## Context

- **Target**: [deployment/commit/release]
- **Reason**: [Why rollback is being considered]
- **Urgency**: [Immediate | Planned]

## Changes in Scope

### Code Changes

- [List of significant code changes]

### Database Migrations

| Migration | Reversible | Risk | Notes |
|-----------|------------|------|-------|
| [migration name] | Yes/No | Low/Medium/High | [details] |

### API Changes

| Endpoint/Service | Change Type | Breaking | Notes |
|------------------|-------------|----------|-------|
| [endpoint] | Added/Modified/Removed | Yes/No | [details] |

### Feature Flags

| Flag | Action | Cleanup Required |
|------|--------|------------------|
| [flag name] | Enable/Disable | Yes/No |

### Configuration Changes

- [Config changes that need reverting]

## Safety Assessment

**Overall Risk**: [Low | Medium | High | Critical]

### Safe Aspects

- [What can be safely rolled back]

### Caution Areas

- [What requires careful handling]

### Blockers

- [What prevents clean rollback]

## Rollback Checklist

### Pre-Rollback

- [ ] Notify stakeholders of planned rollback
- [ ] Verify rollback target is deployable
- [ ] Confirm database migration reversibility
- [ ] Check for dependent service impacts
- [ ] Prepare monitoring dashboards

### Execution

- [ ] [Specific rollback step 1]
- [ ] [Specific rollback step 2]
- [ ] [Database rollback if needed]
- [ ] [Feature flag changes if needed]

### Post-Rollback

- [ ] Verify service health
- [ ] Check error rates and latency
- [ ] Confirm functionality restored
- [ ] Update status page / stakeholders
- [ ] Clean up feature flags if applicable

## Data Considerations

### Data Created Since Deployment

- [How to handle new data that may not be compatible]

### Data Transformations

- [Irreversible transformations to be aware of]

## Rollback Commands

```bash
# [Actual commands to execute rollback]
```

## Notes

[Additional context, caveats, alternative approaches]
```

## Behavior

1. Parse target to identify rollback scope (commits, migrations, config)
2. Infer appropriate code agent from change types
3. Launch explore, librarian, and inferred code agent in parallel
4. Assess migration reversibility and data safety
5. Identify feature flags and configuration changes
6. Generate risk assessment with specific blockers
7. Create prioritized rollback checklist with actual commands
8. Write analysis to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-HHMM-target.md`
