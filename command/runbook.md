# /runbook - Operational Runbook Generator

## Purpose

Generate operational runbooks for services, procedures, or incident response. Investigates the codebase and infrastructure to produce accurate, actionable procedures. Documents to Obsidian.

## Input

- Topic: service name, operation type, or incident scenario
- Scope: deployment, scaling, failover, maintenance, troubleshooting
- Optional: specific scenarios to cover

## Investigation Strategy

Launch parallel investigation tracks:

### Track 1: Codebase Exploration (explore agent)

- Identify service entry points and configuration
- Find health check endpoints
- Map dependencies (databases, caches, external services)
- Locate logging and metrics instrumentation
- Find existing scripts or automation

### Track 2: Infrastructure Analysis (inferred agent: k8s/sre/gcp-dev)

- Review deployment manifests
- Identify scaling configuration
- Map service dependencies
- Find monitoring and alerting setup
- Review backup and recovery procedures

### Track 3: External Research (librarian agent)

- Find operational best practices for the service type
- Research common failure modes
- Identify industry-standard procedures

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Runbooks/YYYY-MM-DD-service-operation.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Runbook: [Service/Operation Name]

## Overview

- **Service**: [Service name]
- **Owner**: [Team/person]
- **Last Updated**: [Date]
- **Criticality**: [P1-P4]

## Service Information

### Architecture

[Brief architecture description with component diagram if applicable]

### Dependencies

| Dependency | Type | Criticality | Failure Impact |
|------------|------|-------------|----------------|
| PostgreSQL | Database | Critical | Full outage |
| Redis | Cache | High | Degraded performance |

### Endpoints

| Endpoint | Purpose | Health Check |
|----------|---------|--------------|
| /health | Liveness | Yes |
| /ready | Readiness | Yes |

### Key Metrics

| Metric | Normal Range | Alert Threshold |
|--------|--------------|-----------------|
| Request latency p99 | < 200ms | > 500ms |
| Error rate | < 0.1% | > 1% |

## Procedures

### Deployment

#### Prerequisites

- [ ] [Prerequisite 1]
- [ ] [Prerequisite 2]

#### Steps

1. [Step with command]
   ```bash
   [command]
   ```
2. [Step with command]
   ```bash
   [command]
   ```

#### Verification

- [ ] [Verification step]
- [ ] [Verification step]

#### Rollback

[Link to rollback procedure or inline steps]

### Scaling

#### Scale Up

```bash
[commands]
```

#### Scale Down

```bash
[commands]
```

#### Auto-scaling Configuration

[Current auto-scaling settings and how to modify]

### Restart/Recovery

#### Graceful Restart

```bash
[commands]
```

#### Force Restart

```bash
[commands]
```

#### Full Recovery from Failure

1. [Step]
2. [Step]

### Maintenance

#### Database Maintenance

[Procedures for DB maintenance windows]

#### Cache Flush

```bash
[commands]
```

#### Log Rotation

[Log management procedures]

## Troubleshooting

### Common Issues

#### [Issue 1: Description]

**Symptoms**: [What you'll see]

**Diagnosis**:
```bash
[diagnostic commands]
```

**Resolution**:
1. [Step]
2. [Step]

#### [Issue 2: Description]

**Symptoms**: [What you'll see]

**Diagnosis**:
```bash
[diagnostic commands]
```

**Resolution**:
1. [Step]
2. [Step]

### Logs

```bash
# View logs
[log commands]

# Common log queries
[query examples]
```

### Useful Commands

```bash
# [Description]
[command]

# [Description]
[command]
```

## Escalation

| Level | Contact | When to Escalate |
|-------|---------|------------------|
| L1 | On-call | Initial response |
| L2 | Service owner | Unresolved after 30min |
| L3 | Platform team | Infrastructure issues |

## References

- [Link to architecture docs]
- [Link to monitoring dashboard]
- [Link to related runbooks]
```

## Behavior

1. Parse topic to identify service and operation scope
2. Infer appropriate infrastructure agent (k8s, sre, gcp-dev)
3. Launch explore, librarian, and inferred agent in parallel
4. Extract configuration, endpoints, and dependencies from codebase
5. Identify common operations and failure modes
6. Generate step-by-step procedures with actual commands
7. Write runbook to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-service-operation.md`
