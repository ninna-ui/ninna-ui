# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within Ninna UI, please report it responsibly.

### How to Report

1. **Do NOT open a public GitHub issue** for security vulnerabilities
2. Email the maintainers or use [GitHub Security Advisories](https://github.com/ninna-ui/ninna-ui/security/advisories/new) to report privately
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Affected package(s) and version(s)
   - Potential impact

### What to Expect

- **Acknowledgment** within 48 hours
- **Assessment** within 1 week
- **Fix timeline** communicated after assessment
- **Credit** given in the security advisory (unless you prefer anonymity)

### Scope

This policy applies to all packages published under the `@ninna-ui` npm scope:

- `@ninna-ui/core`
- `@ninna-ui/primitives`
- `@ninna-ui/feedback`
- `@ninna-ui/layout`
- `@ninna-ui/forms`
- `@ninna-ui/overlays`
- `@ninna-ui/navigation`
- `@ninna-ui/data-display`
- `@ninna-ui/code-block`
- `@ninna-ui/cli`

## Security Best Practices

Ninna UI follows these security practices:

- **No `dangerouslySetInnerHTML`** in component library code
- **No eval or Function constructor** usage
- **Dependencies audited** regularly via `pnpm audit`
- **Automated CI checks** on every pull request
- **ESM-only distribution** to avoid prototype pollution vectors in CJS
