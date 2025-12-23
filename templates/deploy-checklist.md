# Deployment: [Service] to [Environment]

## Summary

| Field       | Value              |
| ----------- | ------------------ |
| Service     | [service name]     |
| Environment | [dev/staging/prod] |
| Version     | [tag/commit]       |
| Deployer    | [name]             |
| Date        | [YYYY-MM-DD HH:MM] |

## Changes Included

### Features

- [Feature 1]
- [Feature 2]

### Bug Fixes

- [Fix 1]
- [Fix 2]

### Database Migrations

| Migration | Reversible | Risk            |
| --------- | ---------- | --------------- |
| [name]    | Yes/No     | Low/Medium/High |

### Configuration Changes

- [Config change 1]
- [Config change 2]

### Dependencies Updated

| Package | From  | To    | Breaking |
| ------- | ----- | ----- | -------- |
| [pkg]   | X.X.X | Y.Y.Y | Yes/No   |

## Pre-flight Checklist

### Code Readiness

- [ ] All tests passing in CI
- [ ] Code reviewed and approved
- [ ] No blocking issues or known bugs
- [ ] Feature flags configured correctly

### Environment Readiness

- [ ] Target environment is healthy
- [ ] Required secrets/config in place
- [ ] Database migrations reviewed
- [ ] Dependent services are stable

### Observability

- [ ] Monitoring dashboards ready
- [ ] Alerts configured
- [ ] Log aggregation working
- [ ] Error tracking enabled

### Communication

- [ ] Stakeholders notified
- [ ] On-call aware of deployment
- [ ] Rollback plan documented

## Deployment Strategy

### Rollout Type

[Rolling | Blue-Green | Canary]

### Rollout Steps

1. [Step with verification]
2. [Step with verification]
3. [Step with verification]

### Traffic Progression (if canary)

| Stage | Traffic % | Duration | Success Criteria  |
| ----- | --------- | -------- | ----------------- |
| 1     | 5%        | 10min    | Error rate < 0.1% |
| 2     | 25%       | 15min    | Error rate < 0.1% |
| 3     | 50%       | 15min    | Error rate < 0.1% |
| 4     | 100%      | -        | Full rollout      |

## Deployment Commands

```bash
# [Deployment commands]
```

## Verification Checklist

### Immediate (0-5 min)

- [ ] Pods/instances running
- [ ] Health checks passing
- [ ] No crash loops
- [ ] Logs showing normal startup

### Short-term (5-30 min)

- [ ] Error rates normal
- [ ] Latency within bounds
- [ ] Key user flows working
- [ ] No new alerts firing

### Extended (30min - 2hr)

- [ ] Metrics stable
- [ ] No memory leaks
- [ ] No performance degradation
- [ ] Customer-facing functionality verified

## Rollback Trigger

Initiate rollback if:

- [ ] Error rate exceeds [X]%
- [ ] Latency p99 exceeds [X]ms
- [ ] Critical user flow broken
- [ ] Data integrity concerns

## Rollback Plan

[Link to /rollback analysis or inline steps]

```bash
# [Rollback commands]
```

## Notes

[Additional context, known risks, special instructions]
