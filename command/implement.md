---
description: Full implementation mode - end-to-end feature implementation with parallel agent orchestration
argument-hint: "<feature or task description> to implement"
---

# IMPLEMENTATION MODE

Execute a complete feature implementation using coordinated agent swarms.

## Implementation Protocol

### Phase 1: Requirements Analysis

Before coding, understand completely:

1. **Gather Context**

```
background_task(agent="explore", prompt="Find existing patterns for...")
background_task(agent="explore", prompt="Find related code that might be affected...")
background_task(agent="librarian", prompt="Research best practices for...")
```

2. **Clarify Requirements**

- What exactly needs to be built?
- What are the acceptance criteria?
- What constraints exist?
- What patterns should be followed?

3. **Create Implementation Plan**
   Use TODO list to break into atomic steps:

- Each step should be independently verifiable
- Identify parallelization opportunities
- Note which steps need which agents

### Phase 2: Architecture Decision (If Needed)

For significant features, consult:

```
@architect Design the architecture for:
- [Feature description]
- Constraints: [list]
- Expected scale: [numbers]
```

Or for simpler decisions:

```
@principal Quick architecture gut check:
- [Approach description]
- [Alternative considered]
```

### Phase 3: Parallel Implementation

Deploy domain specialists in parallel where independent:

```
┌─────────────────────────────────────────────────────────────┐
│  PARALLEL IMPLEMENTATION SWARM                              │
├─────────────────────────────────────────────────────────────┤
│  BACKEND                     │  FRONTEND                    │
│  ├─ @go (Go APIs/CLIs)       │  ├─ @frontend (UI)           │
│  ├─ @zig (Zig systems code)  │  └─ (styling, layout)        │
│  ├─ @postgres (schema)       │                              │
│  └─ @linux (shell scripts)   │                              │
├──────────────────────────────┼──────────────────────────────┤
│  INFRASTRUCTURE              │  QUALITY                     │
│  ├─ @k8s (manifests)         │  ├─ @testing (test strategy) │
│  ├─ @terraform (IaC)         │  ├─ @security (security)     │
│  ├─ @cicd (pipelines)        │  ├─ @perf (performance)      │
│  └─ @nix (Nix configs)       │  └─ @sre (reliability)       │
└─────────────────────────────────────────────────────────────┘
```

### Phase 4: Integration

After parallel work:

1. Integrate components
2. Resolve any conflicts
3. Ensure consistency

### Phase 5: Verification

```
┌─────────────────────────────────────────────────────────────┐
│  VERIFICATION CHECKLIST                                     │
├─────────────────────────────────────────────────────────────┤
│  [ ] lsp_diagnostics clean on all changed files            │
│  [ ] Tests pass (go test / npm test / etc.)                │
│  [ ] Linter passes (golangci-lint / eslint)                │
│  [ ] Build succeeds                                        │
│  [ ] Security review if needed (@security)                 │
│  [ ] Performance acceptable                                 │
└─────────────────────────────────────────────────────────────┘
```

### Phase 6: Documentation & Cleanup

- Update relevant documentation
- Clean up TODO list
- Cancel all background tasks
- Summarize what was implemented

## Implementation Output

At completion, provide:

```markdown
## Implementation Summary

### What Was Built

[Brief description of the feature]

### Files Changed

- `path/to/file.go` — [what changed]
- `path/to/file.go` — [what changed]

### Architecture Decisions

[Key decisions made and rationale]

### Testing

- [Tests added]
- [Coverage notes]

### Verification

- [ ] All diagnostics clean
- [ ] Tests passing
- [ ] Build succeeds

### Known Limitations

[Any constraints or future work]

### Next Steps

[Follow-up tasks if any]
```

## Implement

$ARGUMENTS
