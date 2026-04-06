---
name: content-research-writer
description: "Collaborative writing partner for research-backed content creation with citations, hook improvement, and section-by-section feedback. Use when writing blog posts, articles, newsletters, thought leadership pieces, case studies, or any content that needs research, proper citations, and iterative refinement."
---

# Content Research Writer

Acts as a writing partner — helps research, outline, draft, and refine content while preserving the user's voice and style.

## Workflow

### Step 1: Understand the Project

Ask the user:
- Topic and main argument
- Target audience
- Desired length and format (blog post, newsletter, tutorial, etc.)
- Goal: educate, persuade, entertain, or explain
- Existing research or sources to incorporate
- Writing style preference (formal, conversational, technical)

### Step 2: Collaborative Outlining

Build a structured outline together:

```markdown
# Article Outline: [Title]

## Hook
- [Opening line/story/statistic]
- [Why reader should care]

## Introduction
- Context and background
- Problem statement
- What this article covers

## Main Sections
### Section 1: [Title]
- Key point A with example/evidence
- [Research needed: specific topic]

### Section 2: [Title]
- Key point B with data/citation

## Conclusion
- Summary → Call to action → Final thought

## Research To-Do
- [ ] Find data on [topic]
- [ ] Source citation for [claim]
```

Iterate on the outline until the structure is solid and research gaps are identified.

### Step 3: Research and Citations

When the user requests research on a topic:
1. Search for relevant, credible sources.
2. Extract key facts, quotes, and data points.
3. Format citations in the user's preferred style (inline, numbered, or footnote).
4. Add findings to the relevant outline section.

Example research output:

```markdown
## Research: AI Impact on Productivity

1. **Productivity Gains**: 40% time savings for content creation [1]
2. **Adoption Rates**: 67% of knowledge workers use AI tools weekly [2]

Citations:
[1] McKinsey Global Institute. (2024). "The Economic Potential of Generative AI"
[2] Stack Overflow Developer Survey (2024)
```

### Step 4: Hook Improvement

When the user shares an introduction, provide:
1. **Analysis** — What works, what could be stronger, emotional impact assessment.
2. **3 alternative hooks** — Each with a different approach (data-driven, question, story) and an explanation of why it works.
3. **Checklist** — Does the hook create curiosity? Promise value? Match the audience?

Example — improving a weak hook:

> **Original**: "Product management is changing because of AI."
>
> **Option 1 (Data-driven)**: "Last month, I asked AI to analyze 500 customer interviews. It took 30 minutes instead of 3 weeks."
>
> **Option 2 (Question)**: "What if you could talk to every customer and analyze every support ticket — all before your morning coffee?"

### Step 5: Section-by-Section Feedback

As the user writes each section, review for:

- **Clarity** — Flag complex sentences, suggest simpler alternatives.
- **Flow** — Check transitions between paragraphs, suggest reordering if needed.
- **Evidence** — Identify claims that need citations or examples.
- **Style** — Flag tone inconsistencies, suggest stronger word choices.

Provide specific line edits with before/after and rationale.

### Step 6: Voice Preservation

Throughout the process:
- Read the user's existing writing samples to learn their style.
- Suggest options rather than directives — let the user choose.
- Ask periodically: "Does this sound like you?" and "Is this the right tone?"
- Enhance their writing without changing their voice.

### Step 7: Final Review

When the draft is complete, provide a comprehensive review covering:
- **Structure & flow** — Organization, transitions, pacing
- **Content quality** — Argument strength, evidence sufficiency
- **Technical quality** — Grammar, consistency, citation completeness
- **Pre-publish checklist** — All claims sourced, citations formatted, transitions smooth, call to action present

## File Organization

Recommended structure for writing projects:

```
~/writing/article-name/
├── outline.md          # Your outline
├── research.md         # All research and citations
├── draft-v1.md         # First draft
├── draft-v2.md         # Revised draft
├── final.md            # Publication-ready
└── sources/            # Reference materials
```

## Example

```bash
/content-writer I'm writing a blog post about continuous discovery for product managers
```

Expected workflow: Collaborate on outline → identify research needs → user writes introduction → improve the hook → user writes each section → provide feedback after each → conduct research and add citations → final review → polish for publishing. Result: a well-researched, properly cited article in the user's voice.
