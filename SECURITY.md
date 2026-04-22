# Security Policy

> **Responsible vulnerability reporting and security practices for the Ninna UI ecosystem** - covering all 12 published `@ninna-ui` packages on npm.

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.6.x   | Yes       |
| < 0.6   | No        |

## Reporting a Vulnerability

If you discover a security vulnerability in any Ninna UI package, please report it responsibly through private channels - **not** through public GitHub issues.

### How to Report

1. **Do NOT open a public GitHub issue** - this could expose users before a fix is available
2. Use [GitHub Security Advisories](https://github.com/ninna-ui/ninna-ui/security/advisories/new) to report privately (preferred)
3. Include in your report:
   - **Description** of the vulnerability
   - **Steps to reproduce** the issue
   - **Affected package(s)** and version(s)
   - **Potential impact** assessment

### Response Timeline

- **Acknowledgment** - within 48 hours of report
- **Initial assessment** - within 3-5 business days
- **Fix timeline** - determined based on severity and communicated after assessment
- **Security advisory** - published when fix is available (or sooner if widespread risk)
- **Credit** - given in the security advisory (unless you prefer anonymity)

### Severity Classification

We classify vulnerabilities using industry-standard CVSS scoring and the following severity levels:

| Severity | CVSS Score | Description | Target Fix Timeline |
|----------|-------------|-------------|---------------------|
| **Critical** | 9.0-10.0 | Remote code execution, privilege escalation, widespread data exposure | 48-72 hours |
| **High** | 7.0-8.9 | Significant data exposure, authentication bypass, major security control failure | 5-7 business days |
| **Medium** | 4.0-6.9 | Limited data exposure, minor authentication issues, security best practice violations | 2-3 weeks |
| **Low** | 0.1-3.9 | Information disclosure, minor security improvements, defense in depth | 4-6 weeks |

### Scope

This policy covers all packages published under the `@ninna-ui` npm scope:

`@ninna-ui/core` · `@ninna-ui/primitives` · `@ninna-ui/feedback` · `@ninna-ui/layout` · `@ninna-ui/forms` · `@ninna-ui/overlays` · `@ninna-ui/navigation` · `@ninna-ui/data-display` · `@ninna-ui/code-block` · `@ninna-ui/cli`

## Security Practices

Ninna UI is built with security as a design principle:

- **No `dangerouslySetInnerHTML`** - zero usage in any component library code
- **No `eval` or `Function` constructor** - no dynamic code execution
- **Dependency auditing** - regular `pnpm audit` scans with CI enforcement
- **Automated CI checks** - every pull request is validated before merge
- **ESM-only distribution** - eliminates prototype pollution vectors present in CommonJS modules
- **No external network requests** - components never fetch data or phone home
