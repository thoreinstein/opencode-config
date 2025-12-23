# Dependency Audit: [Project Name]

## Summary

| Category        | Count | Critical | High | Medium | Low |
| --------------- | ----- | -------- | ---- | ------ | --- |
| Vulnerabilities | X     | X        | X    | X      | X   |
| Outdated        | X     | -        | -    | -      | -   |
| License Issues  | X     | -        | -    | -      | -   |

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

| Package | Current | Latest | Risk | Notes              |
| ------- | ------- | ------ | ---- | ------------------ |
| [pkg]   | X.X.X   | Y.0.0  | High | [Breaking changes] |

### Minor/Patch Updates Available

| Package | Current | Latest | Risk | Notes               |
| ------- | ------- | ------ | ---- | ------------------- |
| [pkg]   | X.X.X   | X.Y.Z  | Low  | [Changelog summary] |

## License Compliance

### Potentially Problematic Licenses

| Package | License | Issue    | Action Required |
| ------- | ------- | -------- | --------------- |
| [pkg]   | GPL-3.0 | Copyleft | Review usage    |
| [pkg]   | UNKNOWN | Missing  | Investigate     |

### License Summary

| License      | Count |
| ------------ | ----- |
| MIT          | X     |
| Apache-2.0   | X     |
| BSD-3-Clause | X     |
| Other        | X     |

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
