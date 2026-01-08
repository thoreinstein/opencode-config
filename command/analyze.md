---
description: Analyze a ticket and produce an implementation plan for /implement
argument-hint: "<ticket-id> - e.g., PROJ-123, CORE-42"
---

**Current Time:** !`date`

## Ticket Analysis Request

Analyze the following ticket and produce an implementation plan:

**Ticket ID:** $ARGUMENTS

---

## MANDATORY WORKFLOW

### Step 1: Ticket Discovery

First, retrieve the ticket information:

!`bd show $ARGUMENTS --json`

**Classification Logic:**

1. Dispatch the beads task agent to retrieve ticket details
2. Check if `type: epic` OR if `dependents` array is non-empty
3. **If Epic:**
   - Dispatch the beads task agent to get the dependents of $ARGUMENTS
   - These are the tickets to analyze
4. **If Single Ticket:**
   - Use the ticket info directly from the beads task agent
   - This is the only ticket to analyze

### Step 2: Research & Analysis

**For Epics (multiple tickets):**

Launch PARALLEL explore agents to investigate each ready child ticket:

```
For each child ticket in ready list:
  background_task(agent="explore", prompt="Investigate ticket <id>: <title>
    - Find relevant code locations
    - Identify affected components
    - Map dependencies and interfaces
    - Note existing patterns to follow")
```

While explore agents run, analyze:

- Implementation order based on dependencies
- Parallelization opportunities (which tickets can run concurrently)
- Shared concerns across tickets

Then launch PARALLEL analyze agents for each ticket:

```
For each child ticket:
  background_task(agent="analyze", prompt="Build implementation plan for <id>: <title>
    - Use findings from explore phase
    - Identify specific code changes needed
    - Estimate complexity and risk
    - Define acceptance criteria verification")
```

**For Single Tickets:**

Load and execute the analyze skill directly:

```
skill analyze $ARGUMENTS
```

### Step 3: Story Creation (If Needed)

If analysis reveals missing stories, tasks, or gaps:

**Dispatch specialist agents in parallel:**

```
background_task(agent="pm", prompt="Review analysis for <epic/ticket>.
  - Identify missing user stories or acceptance criteria
  - Propose story structure with clear scope
  - Define dependencies between stories")

background_task(agent="architect", prompt="Review analysis for <epic/ticket>.
  - Identify missing technical tasks
  - Propose architectural spikes if uncertainty exists
  - Define integration points and contracts")

background_task(agent="principal", prompt="Review analysis for <epic/ticket>.
  - Identify missing quality gates or testing tasks
  - Propose risk mitigation tasks
  - Validate implementation approach")
```

**Create stories directly in bd:**

Dispatch the beads task agent to create new child tickets

Include all new stories in the final plan.

### Step 4: Output - Implementation Plan

Produce a structured implementation plan that `/implement` can parse.

**Plan Structure:**

```markdown
# Implementation Plan: $ARGUMENTS

**Generated:** <timestamp>
**Ticket:** <title>
**Type:** Epic | Story | Task

## Executive Summary

[2-3 sentences: scope, approach, key decisions]

## Tickets in Scope

| ID  | Title | Status | Dependencies | Parallelizable |
| --- | ----- | ------ | ------------ | -------------- |
| ... | ...   | ...    | ...          | Yes/No         |

## Implementation Phases

### Phase 1: <name>

**Tickets:** <list of ticket IDs that can run in parallel>
**Agent Types:** <specialist agents needed>

#### Ticket <ID>: <title>

- **Agent:** @<specialist>
- **Work:**
  - [ ] <specific action>
  - [ ] <specific action>
- **Files:** <key files to modify>
- **Verification:** <how to verify completion>

### Phase 2: <name>

**Depends on:** Phase 1
**Tickets:** ...

[Continue for all phases]

## Parallel Execution Plan
```

Phase 1: [TICKET-1, TICKET-2] (parallel)
|
v
Phase 2: [TICKET-3] (sequential, depends on Phase 1)
|
v
Phase 3: [TICKET-4, TICKET-5, TICKET-6] (parallel)

```

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| ... | ... | ... | ... |

## New Stories Created

| ID | Title | Rationale |
|----|-------|-----------|
| ... | ... | ... |

## Agent Dispatch Summary

| Phase | Agent | Ticket | Task |
|-------|-------|--------|------|
| 1 | @go | PROJ-123 | Implement core logic |
| 1 | @postgres | PROJ-124 | Add migrations |
| 2 | @frontend | PROJ-125 | Build UI components |
| ... | ... | ... | ... |
```

**Save to Obsidian:**

Use `obsidian_append_content` MCP tool:

- **Path:** `plans/$ARGUMENTS-plan.md`
- The Obsidian MCP server knows the vault root

---

## Agent Delegation

| Agent                                 | Role in Analysis                                    |
| ------------------------------------- | --------------------------------------------------- |
| `@explore`                            | Codebase reconnaissance, find relevant code         |
| `@pm`                                 | Story writing, acceptance criteria, scope           |
| `@architect`                          | System design, integration points, contracts        |
| `@principal`                          | Quality gates, risk assessment, approach validation |
| `@go`, `@frontend`, `@postgres`, etc. | Domain-specific implementation details              |

## Quality Checklist

Before finalizing the plan:

- [ ] All tickets in scope are accounted for
- [ ] Dependencies are correctly mapped
- [ ] Parallelization opportunities identified
- [ ] Each ticket has clear agent assignment
- [ ] Verification criteria defined for each ticket
- [ ] Risks identified with mitigations
- [ ] Plan saved to Obsidian

## Integration with /implement

The output format is designed for `/implement` to:

1. Parse the phase structure
2. Dispatch agents per the Agent Dispatch Summary
3. Track progress via beads task agent
4. Execute phases in dependency order
5. Parallelize within phases where indicated

---

## Begin Analysis

Now analyze ticket: **$ARGUMENTS**

Start with Step 1: Run disbatch the beads task agent
