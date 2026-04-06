---
name: ultrathink
description: "Multi-perspective deep analysis for complex architectural and strategic decisions. Use when evaluating migration strategies, choosing technology stacks, designing system architecture, or making high-stakes technical decisions that need rigorous multi-angle reasoning."
---

# Ultra Think — Deep Analysis Mode

Perform deep, multi-perspective analysis on: **$ARGUMENTS**

## Workflow

### Step 1: Frame the Problem

1. Extract the core challenge and restate it precisely.
2. Identify stakeholders, constraints, and implicit requirements.
3. List assumptions — mark each as verified or unverified.
4. Define what a successful outcome looks like (measurable criteria if possible).

### Step 2: Multi-Perspective Analysis

Analyze the problem from four perspectives, spending roughly equal effort on each:

**Technical** — Feasibility, scalability, performance, security, maintainability, technical debt.

**Business** — ROI, time-to-market, competitive impact, risk tolerance, resource cost.

**User** — Needs, pain points, accessibility, edge-case user journeys.

**System** — Integration points, dependencies, coupling, emergent behaviors, failure domains.

For each perspective, produce 2–3 key findings with supporting evidence from the codebase or research.

### Step 3: Generate Solution Options

Produce at least 3 distinct approaches. For each option:

| Dimension | Detail |
|-----------|--------|
| **Description** | One-paragraph summary of the approach |
| **Pros** | Concrete advantages with evidence |
| **Cons** | Concrete disadvantages and risks |
| **Complexity** | Low / Medium / High — with justification |
| **Timeline** | Rough effort estimate (days/weeks) |
| **Reversibility** | Easy / Hard — cost of changing course later |

Include at least one unconventional or hybrid approach.

### Step 4: Stress-Test Top Options

For the 1–2 most promising options:

1. **Devil's advocate** — Argue against the option. What breaks under pressure?
2. **Second-order effects** — What happens 6–12 months after adoption?
3. **Failure modes** — How does it fail? What is the blast radius? How do you recover?
4. **"What if" scenarios** — Changed requirements, 10x load, team turnover, dependency deprecation.

### Step 5: Synthesize and Recommend

Structure the final output:

```markdown
## Problem Analysis
- Core challenge: [one sentence]
- Key constraints: [list]
- Success criteria: [measurable]

## Solution Options
### Option 1: [Name]
[Table from Step 3]

### Option 2: [Name]
[Table from Step 3]

### Option 3: [Name]
[Table from Step 3]

## Recommendation
- **Recommended approach**: [Name]
- **Rationale**: [Why this wins given constraints]
- **Implementation roadmap**: [Phased steps]
- **Key risks and mitigations**: [Top 3]
- **Confidence level**: [High/Medium/Low with reasoning]

## Open Questions
- [Unresolved items needing further input]
- [Areas where additional expertise would help]
```

### Step 6: Output to Obsidian

Write the analysis to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Thinking/YYYY-MM-DD-ultrathink-topic.md`

> **Note**: `$OBSIDIAN_PATH` must be a vault-relative path (e.g., `Projects/myapp`), set per-project via direnv. The `obsidian_append_content` tool expects paths relative to the vault root.

Use the template at `@~/.config/opencode/templates/thinking-session.md` for document structure.

## Example

```bash
/ultrathink Should we migrate the billing service from the monolith to a standalone microservice?
```

Expected output: A structured analysis covering technical feasibility (API surface, data coupling), business impact (billing downtime risk, team capacity), user impact (checkout latency), and system impact (new deployment pipeline, observability gaps) — with 3+ options, a recommendation, and an implementation roadmap.

$ARGUMENTS
