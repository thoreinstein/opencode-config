---
description: Refine the epic defined by the argument
---

**Current Time:** !`date`

**Current Epic: ** !`bd show $1`

gather @pm @principal @qa @architect @postgres @o11y @search-ranking-engineer @search-retrieval-engineer @agent-runtime-engineer to refine the epic $1

1. Dispatch the beads task agent to get the details of $1
2. Dispatch each agent with to use the analysis skill to evaluate the epic
3. They should each report back with a gap analysis report
4. From the gap analysis reports @pm will use bd to create child stories of the epic
   - The team should come to a consensus on the top level stories to be created
   - no solutioning, high level stories only, we'll refine later
   - Dispatch the beads task agent to create the appropriate child tickets of $1
5. Acceptance criteria for this task are several high quality high level to be refined stories to complete the epic $1 as described.

DO NOT IMPLEMENT ANY CODE

Questions?
