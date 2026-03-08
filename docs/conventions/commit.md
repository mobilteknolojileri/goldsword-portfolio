# Commit Conventions

Conventional Commits format.

## Format

```
<type>(<scope>): <description>
```

## Types

| Type       | Use for                      |
| ---------- | ---------------------------- |
| `feat`     | New feature                  |
| `fix`      | Bug fix                      |
| `docs`     | Documentation                |
| `style`    | Formatting (no logic change) |
| `refactor` | Code restructure             |
| `perf`     | Performance                  |
| `test`     | Tests                        |
| `build`    | Dependencies, build system   |
| `ci`       | CI/CD                        |
| `chore`    | Maintenance, tooling         |
| `revert`   | Revert previous commit       |

## Scopes

`pages` `blog` `seo` `legal` `portfolio` `hero` `services` `faq` `research`
`contact` `config` `layout` `effects` `ui` `deps` `docs` `ci` `readme`

> **Note:** For static assets (images, icons), use `chore(assets)`.

## Examples

```
feat(blog): add new seo checklist post
fix(legal): update contact email across pages
refactor(services): remove tech keyword badges
docs(readme): update installation guide
chore(deps): upgrade astro to v5.18
ci: add github actions quality pipeline
style(blog): fix dark mode prose colors
perf(seo): add llms.txt for ai discoverability
```

## Rules

- **Atomic**: One logical change per commit
- **Imperative**: "add" not "added"
- **Lowercase**: description starts lowercase
- **No code identifiers**: Avoid function/class/constant names in subject:
  - ❌ `add SITE_CONFIG import` → uppercase constant
  - ❌ `fix useScrollAnimation` → code identifier
  - ✅ `add site configuration` → descriptive text
  - ✅ `fix scroll animation hook` → descriptive text
- **No period**: no `.` at end
- **Header max 72 chars**: type + scope + description combined

## Breaking Change

Add `!` after scope:

```
feat(seo)!: restructure schema output format
```

## Revert

```
revert: feat(blog): add new post
```

## Issue Reference

```
fix(legal): resolve missing privacy page (#42)
```

## AI Instructions

When suggesting commits:

1. **Batch format**: Provide commits as copy-pasteable PowerShell commands. **NO comment lines** (no `#` prefixes):

```powershell
git add "src/pages/kafadar/privacy-policy.astro" "src/pages/kafadar/delete-account.astro"
git commit -m "feat(legal): add kafadar privacy and delete-account pages"

git add "src/features/services/index.tsx"
git commit -m "refactor(services): remove tech keyword badges"
```

2. **Quote all paths**: PowerShell requires quotes:

```powershell
git add "src/pages/blog/[slug].astro"
```

3. **Atomic commits**: Group related files, separate unrelated changes into different commits.

4. **STRICT lowercase rule**: NEVER use camelCase, PascalCase or code identifiers in commit message subject:
   - ❌ `use getMetadata function` → camelCase identifier
   - ❌ `add BaseLayout component` → PascalCase identifier
   - ✅ `use metadata helper` → descriptive lowercase
   - ✅ `add base layout component` → descriptive lowercase
