# /deps - Dependency Analysis & Management

## Purpose

Analyze project dependencies for security vulnerabilities, outdated packages, and license compliance. Documents findings to Obsidian.

## Input

- Scope: full audit, security-only, updates-only, or licenses-only
- Optional: specific package to investigate
- Optional: target version constraints

## Investigation Strategy

Launch parallel investigation tracks:

### Track 1: Security Analysis

- Run `govulncheck` for Go vulnerabilities
- Run `npm audit` for JavaScript vulnerabilities
- Cross-reference with CVE databases
- Assess severity and exploitability

### Track 2: Update Analysis

- Check for outdated direct dependencies
- Identify major version updates (breaking changes)
- Review changelogs for significant updates
- Assess update risk and effort

### Track 3: External Research (librarian agent)

- Research CVE details and exploit availability
- Find migration guides for major updates
- Check for known issues with newer versions
- Identify deprecated packages needing replacement

## Output

Write to Obsidian via `obsidian_append_content` at:
`$OBSIDIAN_PATH/Dependencies/YYYY-MM-DD-audit.md`

> **Note**: `$OBSIDIAN_PATH` is set per-project via direnv.

### Document Structure

```markdown
# Dependency Audit: [Project Name]

## Summary

| Category | Count | Critical | High | Medium | Low |
|----------|-------|----------|------|--------|-----|
| Vulnerabilities | X | X | X | X | X |
| Outdated | X | - | - | - | - |
| License Issues | X | - | - | - | - |

## Security Vulnerabilities

### Critical

#### [CVE-XXXX-XXXXX] [Package Name]

- **Severity**: Critical (CVSS: X.X)
- **Affected Version**: X.X.X
- **Fixed Version**: X.X.X
- **Description**: [Brief description]
- **Exploitability**: [Known exploits, ease of exploitation]
- **Recommendation**: [Update/Replace/Mitigate]

### High

[Same format]

### Medium

[Same format]

### Low

[Same format]

## Outdated Dependencies

### Major Updates Available (Breaking Changes)

| Package | Current | Latest | Risk | Notes |
|---------|---------|--------|------|-------|
| [pkg] | X.X.X | Y.0.0 | High | [Breaking changes] |

### Minor/Patch Updates Available

| Package | Current | Latest | Risk | Notes |
|---------|---------|--------|------|-------|
| [pkg] | X.X.X | X.Y.Z | Low | [Changelog summary] |

## License Compliance

### Potentially Problematic Licenses

| Package | License | Issue | Action Required |
|---------|---------|-------|-----------------|
| [pkg] | GPL-3.0 | Copyleft | Review usage |
| [pkg] | UNKNOWN | Missing | Investigate |

### License Summary

| License | Count |
|---------|-------|
| MIT | X |
| Apache-2.0 | X |
| BSD-3-Clause | X |
| Other | X |

## Recommended Actions

### Immediate (Security)

1. [ ] [Action] — [Package] — [Reason]

### Short-term (Updates)

1. [ ] [Action] — [Package] — [Reason]

### Long-term (Maintenance)

1. [ ] [Action] — [Package] — [Reason]

## Update Commands

### Go

```bash
# Security updates
go get [package]@[version]
go mod tidy

# Full update
go get -u ./...
go mod tidy
```

### JavaScript

```bash
# Security fixes
npm audit fix

# Update specific package
npm update [package]

# Major version update
npm install [package]@latest
```

## Notes

[Additional context, known issues, deferral reasons]
```

## Behavior

1. Detect project type(s) from manifest files (go.mod, package.json)
2. Run security scanners (govulncheck, npm audit)
3. Analyze outdated dependencies and categorize by risk
4. Check license compliance for all dependencies
5. Launch librarian agent for CVE research on critical/high findings
6. Generate prioritized action items
7. Write audit report to Obsidian via `obsidian_append_content` with auto-generated filename: `YYYY-MM-DD-audit.md`

## Commands Reference

### Go

```bash
# Vulnerability check
govulncheck ./...

# List outdated (requires go-mod-outdated)
go list -u -m all | go-mod-outdated

# Tidy dependencies
go mod tidy

# Verify checksums
go mod verify
```

### JavaScript

```bash
# Security audit
npm audit
npm audit --json

# Outdated packages
npm outdated

# License check (requires license-checker)
npx license-checker --summary
```
