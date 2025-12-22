# /refactor - Refactoring Analysis

## Purpose

Analyze code and suggest refactoring opportunities with rationale. Documents findings to Obsidian for tracking and discussion.

## Input

- Target: file path, directory/package, or function/component name
- Optional: specific concern (duplication, complexity, coupling, testability, etc.)

## Investigation Strategy

Launch parallel investigation tracks:

### Track 1: Codebase Exploration (explore agent)

- Map dependencies and call sites for target code
- Identify blast radius of potential changes
- Find related code with similar patterns
- Assess test coverage of affected areas

### Track 2: Code Analysis (inferred agent: go/frontend)

- Infer appropriate agent from target context
- Deep analysis of code smells and patterns
- Identify refactoring opportunities
- Assess complexity metrics

## Refactoring Patterns

### Universal Patterns

- **Extract function/method**: Pull out reusable logic
- **Inline function/variable**: Remove unnecessary indirection
- **Rename**: Improve clarity (with blast radius assessment)
- **Move**: Relocate to better home (file, package, module)
- **Replace conditional with polymorphism**: Simplify branching
- **Introduce parameter object**: Group related parameters
- **Dependency inversion**: Decouple via interfaces/abstractions

### Go-Specific Patterns

- **Extract interface**: Define behavior contracts
- **Consolidate error handling**: Reduce repetitive error checks
- **Replace concrete with interface**: Improve testability
- **Extract middleware**: Separate cross-cutting concerns
- **Table-driven refactor**: Convert repetitive code to data-driven

### Frontend-Specific Patterns

- **Extract component**: Break down large components
- **Extract custom hook**: Reuse stateful logic
- **Lift state up**: Move state to common ancestor
- **Push state down**: Colocate state with usage
- **Extract render function**: Simplify complex JSX
- **Memoization**: Optimize re-renders

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Refactoring/YYYY-MM-DD-target-name.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Refactoring Analysis: [Target Name]

## Target

- **Path**: [file/directory path]
- **Scope**: [file | directory | function | component]
- **Concern**: [specific concern if provided, or "general analysis"]

## Summary

[One paragraph overview of findings and recommendations]

## Code Smells Identified

### [Smell 1 Name]

- **Location**: `file:line`
- **Description**: [What the smell is]
- **Impact**: [Why it matters]

### [Smell 2 Name]

- **Location**: `file:line`
- **Description**: [What the smell is]
- **Impact**: [Why it matters]

## Suggested Refactorings

### 1. [Refactoring Name]

- **Type**: [Extract | Inline | Rename | Move | etc.]
- **Target**: `file:line` or `function/component name`
- **Description**: [What to do]
- **Rationale**: [Why this improves the code]
- **Blast Radius**: [Files/functions affected]
- **Risk**: [Low | Medium | High] — [Risk explanation]
- **Test Impact**: [Tests that need updating]

### 2. [Refactoring Name]

- **Type**: [Extract | Inline | Rename | Move | etc.]
- **Target**: `file:line` or `function/component name`
- **Description**: [What to do]
- **Rationale**: [Why this improves the code]
- **Blast Radius**: [Files/functions affected]
- **Risk**: [Low | Medium | High] — [Risk explanation]
- **Test Impact**: [Tests that need updating]

## Recommended Order of Operations

1. [First refactoring] — [Why first: lowest risk, enables others, etc.]
2. [Second refactoring] — [Why second]
3. [Third refactoring] — [Why third]

## Dependencies & Blast Radius

### Call Sites

- [List of files/functions that call the target]

### Dependencies

- [List of dependencies the target relies on]

### Test Coverage

- [Current coverage assessment]
- [Tests that exercise the target code]

## Notes

[Additional context, caveats, or considerations]
```

## Behavior

1. Parse target to determine scope (file, directory, function, component)
2. Infer appropriate code agent from target context (go vs frontend)
3. Launch explore and inferred code agent in parallel
4. Map dependencies, call sites, and blast radius
5. Identify code smells with specific locations
6. Generate refactoring suggestions with risk assessment
7. Recommend order of operations based on risk and dependencies
8. Write analysis to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-target-name.md`
