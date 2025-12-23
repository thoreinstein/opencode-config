# Rollback Analysis: [Target]

## Context

- **Target**: [deployment/commit/release]
- **Reason**: [Why rollback is being considered]
- **Urgency**: [Immediate | Planned]

## Changes in Scope

### Code Changes

- [List of significant code changes]

### Database Migrations

| Migration        | Reversible | Risk            | Notes     |
| ---------------- | ---------- | --------------- | --------- |
| [migration name] | Yes/No     | Low/Medium/High | [details] |

### API Changes

| Endpoint/Service | Change Type            | Breaking | Notes     |
| ---------------- | ---------------------- | -------- | --------- |
| [endpoint]       | Added/Modified/Removed | Yes/No   | [details] |

### Feature Flags

| Flag        | Action         | Cleanup Required |
| ----------- | -------------- | ---------------- |
| [flag name] | Enable/Disable | Yes/No           |

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
