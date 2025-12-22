# /deploy - Deployment Checklist & Pre-flight

## Purpose

Generate a deployment checklist with pre-flight checks, rollout strategy, and verification steps. Documents to Obsidian.

## Input

- Target: service, environment, or release
- Scope: what's being deployed (commits, features, fixes)
- Optional: deployment strategy preference (rolling, blue-green, canary)

## Investigation Strategy

Launch parallel investigation tracks:

### Track 1: Codebase Exploration (explore agent)

- Identify changes included in deployment
- Find database migrations
- Detect configuration changes
- Map affected services and dependencies
- Locate feature flags

### Track 2: Infrastructure Analysis (inferred agent: k8s/gcp-dev)

- Review deployment manifests
- Check resource requirements
- Verify environment configuration
- Assess scaling and rollout settings

### Track 3: External Research (librarian agent)

- Check for known issues with dependencies being updated
- Find deployment best practices for change types

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Deployments/YYYY-MM-DD-HHMM-service-env.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Deployment: [Service] to [Environment]

## Summary

| Field | Value |
|-------|-------|
| Service | [service name] |
| Environment | [dev/staging/prod] |
| Version | [tag/commit] |
| Deployer | [name] |
| Date | [YYYY-MM-DD HH:MM] |

## Changes Included

### Features

- [Feature 1]
- [Feature 2]

### Bug Fixes

- [Fix 1]
- [Fix 2]

### Database Migrations

| Migration | Reversible | Risk |
|-----------|------------|------|
| [name] | Yes/No | Low/Medium/High |

### Configuration Changes

- [Config change 1]
- [Config change 2]

### Dependencies Updated

| Package | From | To | Breaking |
|---------|------|-----|----------|
| [pkg] | X.X.X | Y.Y.Y | Yes/No |

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

| Stage | Traffic % | Duration | Success Criteria |
|-------|-----------|----------|------------------|
| 1 | 5% | 10min | Error rate < 0.1% |
| 2 | 25% | 15min | Error rate < 0.1% |
| 3 | 50% | 15min | Error rate < 0.1% |
| 4 | 100% | - | Full rollout |

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
```

## Behavior

1. Parse target to identify service, environment, and scope
2. Infer appropriate infrastructure agent (k8s, gcp-dev)
3. Launch explore, librarian, and inferred agent in parallel
4. Identify all changes, migrations, and config updates
5. Generate appropriate rollout strategy
6. Create pre-flight and verification checklists
7. Write deployment doc to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-HHMM-service-env.md`
