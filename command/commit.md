---
description: Analyze unstaged changes and suggest atomic commit groups with messages
argument-hint: "[optional focus] - e.g., 'frontend only', 'exclude tests'"
model: github-copilot/claude-haiku-4.5
---

I need to make small, logical, atomic commits based on my current work.

Here is the current status of the repository:
!`git status`

Here are the specific unstaged changes (diff):
!`git diff`

Please analyze these changes and suggest a plan to stage and commit them in a logical order.

1. Group the changes into atomic units (e.g., by feature, fix, or refactor).
2. For each group, list the specific files (or hunks, if applicable) to stage.
3. Provide a suggested commit message for each group.
4. If there are dependencies (e.g., File A must be committed before File B), please note them.

$ARGUMENTS
