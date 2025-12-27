---
description: Full implementation mode with roadmap tracking and per-phase commits
argument-hint: "<feature description> - what to implement"
---

**Current Time:** !`date`

## Implementation Request

Load and execute the implement skill for the following feature:

$ARGUMENTS

---

## MANDATORY WORKFLOW (NON-NEGOTIABLE)

You MUST follow these requirements:

### 1. Use the Roadmap Plugin

Before ANY implementation work:

- Call `createroadmap` to define all phases and actions
- Each phase MUST include a final commit action (e.g., `X.99: Commit phase X changes`)
- Track progress with `updateroadmap` throughout

### 2. Phase Execution Loop

Every phase follows this exact sequence:

```
Plan → Work → Verify → Commit → Proceed
```

- **Plan**: Mark phase `in_progress` via `updateroadmap`
- **Work**: Execute the phase work, delegate to specialists
- **Verify**: Run verification (tests, lints, build)
- **Commit**: Invoke `/commit` or load commit skill — DO NOT SKIP
- **Proceed**: Only after commit succeeds, move to next phase

### 3. Phase Gate (CRITICAL)

```
⚠️  DO NOT PROCEED TO NEXT PHASE UNTIL COMMIT SUCCEEDS
```

If commit fails, fix issues and retry. Never advance with uncommitted work.

### 4. Final Cleanup

After the last phase:

- Archive or delete the roadmap file
- Mark all roadmap actions as `completed`
- Confirm no uncommitted changes remain

---

## Load Skill

Now load and execute:

```
skill implement $ARGUMENTS
```

Follow all instructions in the implement skill, especially the roadmap and commit requirements above.
