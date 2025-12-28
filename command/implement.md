---
description: Full implementation mode with beads task tracking and per-phase commits
argument-hint: "<feature description> - what to implement"
model: anthropic/claude-opus-4-5
---

**Current Time:** !`date`

## Implementation Request

Load and execute the implement skill for the following feature:

!bd show $ARGUMENTS

---

## MANDATORY WORKFLOW (NON-NEGOTIABLE)

You MUST follow these requirements:

### 1. Use Beads for Task Tracking

Before ANY implementation work:

- Use the beads task agent to move each task to in progress

### 2. Phase Execution Loop

Every phase follows this exact sequence:

```
Plan → Work → Verify → Commit → Proceed
```

- **Plan**: Use the beads task agent to move each task to in progress
- **Work**: Execute the phase work, delegate to specialists
- **Verify**: Run verification (tests, lints, build)
- **Commit**: Invoke `/commit` or load commit skill — DO NOT SKIP
- **Proceed**: Only after commit succeeds, dispatch the beads task agent to close the ticket

### 3. Phase Gate (CRITICAL)

```
⚠️  DO NOT PROCEED TO NEXT PHASE UNTIL COMMIT SUCCEEDS
```

If commit fails, fix issues and retry. Never advance with uncommitted work.

### 4. Final Cleanup

After the last phase:

- Dispatch the beads task agent to ensure all work is marked as closed
  - if any work remains dispatch agents to complete all remaining work
- Confirm no uncommitted changes remain

---

## Load Skill

Now load and execute:

```
skill implement $ARGUMENTS
```

Follow all instructions in the implement skill, especially the beads tracking and commit requirements above.
