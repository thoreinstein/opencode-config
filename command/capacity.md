# /capacity - Capacity Planning Analysis

## Purpose

Analyze service capacity, load patterns, and scaling requirements. Generates forecasts and recommendations for resource planning. Documents to Obsidian.

## Input

- Target: service, cluster, or infrastructure component
- Context: current traffic patterns, growth expectations
- Optional: specific scaling concerns or upcoming events

## Investigation Strategy

Launch parallel investigation tracks:

### Track 1: Codebase Exploration (explore agent)

- Find autoscaling configuration
- Identify resource requests/limits
- Locate performance-critical code paths
- Map service dependencies

### Track 2: Infrastructure Analysis (inferred agent: k8s/gcp-dev/sre)

- Review current resource utilization
- Analyze scaling policies
- Check quota and limits
- Assess headroom and buffer

### Track 3: External Research (librarian agent)

- Find capacity planning best practices
- Research scaling patterns for similar workloads
- Identify industry benchmarks

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Capacity/YYYY-MM-DD-service-analysis.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Capacity Analysis: [Service/Component]

## Summary

| Metric | Current | Peak | Headroom | Status |
|--------|---------|------|----------|--------|
| CPU | X cores | X cores | XX% | ✅/⚠️/❌ |
| Memory | X GB | X GB | XX% | ✅/⚠️/❌ |
| Requests/sec | X | X | XX% | ✅/⚠️/❌ |
| Connections | X | X | XX% | ✅/⚠️/❌ |

**Overall Status**: [Healthy / At Risk / Critical]

## Current State

### Resource Allocation

| Component | Requests | Limits | Actual Usage |
|-----------|----------|--------|--------------|
| [pod/vm] | CPU: X, Mem: X | CPU: X, Mem: X | CPU: X%, Mem: X% |

### Scaling Configuration

| Setting | Value | Notes |
|---------|-------|-------|
| Min replicas | X | |
| Max replicas | X | |
| Target CPU | X% | |
| Scale-up delay | Xs | |
| Scale-down delay | Xs | |

### Current Quotas

| Resource | Quota | Used | Available |
|----------|-------|------|-----------|
| vCPUs | X | X | X |
| Memory | X GB | X GB | X GB |
| IPs | X | X | X |

## Load Patterns

### Traffic Profile

| Time Period | Avg Load | Peak Load | Pattern |
|-------------|----------|-----------|---------|
| Daily | X req/s | X req/s | [description] |
| Weekly | X req/s | X req/s | [description] |
| Monthly | X req/s | X req/s | [description] |

### Seasonality

[Describe recurring patterns: daily peaks, weekly cycles, monthly events]

### Known Events

| Event | Date | Expected Impact |
|-------|------|-----------------|
| [event] | YYYY-MM-DD | +XX% traffic |

## Capacity Forecast

### Growth Assumptions

| Metric | Current | 3 Month | 6 Month | 12 Month |
|--------|---------|---------|---------|----------|
| Traffic | X req/s | X req/s | X req/s | X req/s |
| Data | X GB | X GB | X GB | X GB |
| Users | X | X | X | X |

### Resource Requirements

| Timeframe | CPU | Memory | Storage | Cost Delta |
|-----------|-----|--------|---------|------------|
| Current | X | X GB | X GB | - |
| 3 Month | X | X GB | X GB | +$X/mo |
| 6 Month | X | X GB | X GB | +$X/mo |
| 12 Month | X | X GB | X GB | +$X/mo |

## Bottleneck Analysis

### Current Bottlenecks

| Component | Bottleneck | Impact | Mitigation |
|-----------|------------|--------|------------|
| [component] | [description] | [impact] | [fix] |

### Future Risks

| Risk | Trigger Point | Timeline | Mitigation |
|------|---------------|----------|------------|
| [risk] | [threshold] | [when] | [action] |

## Recommendations

### Immediate (0-30 days)

- [ ] [Action] — Impact: [description]

### Short-term (1-3 months)

- [ ] [Action] — Impact: [description]

### Long-term (3-12 months)

- [ ] [Action] — Impact: [description]

## Scaling Playbook

### Scale Up Triggers

| Metric | Threshold | Action |
|--------|-----------|--------|
| CPU utilization | > 70% sustained | Add replicas |
| Memory utilization | > 80% | Increase limits |
| Request queue | > X | Scale horizontally |

### Scale Up Commands

```bash
# [Commands to scale up]
```

### Scale Down Triggers

| Metric | Threshold | Action |
|--------|-----------|--------|
| CPU utilization | < 30% sustained | Remove replicas |

## Notes

[Additional context, assumptions, caveats]
```

## Behavior

1. Parse target to identify service and infrastructure scope
2. Infer appropriate infrastructure agent (k8s, gcp-dev, sre)
3. Launch explore, librarian, and inferred agent in parallel
4. Analyze current utilization and scaling configuration
5. Identify load patterns and growth trends
6. Generate capacity forecast with resource requirements
7. Identify bottlenecks and risks
8. Write analysis to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-service-analysis.md`
