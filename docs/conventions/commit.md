# Commit conventions

Commits follow [Conventional Commits](https://www.conventionalcommits.org/). One change per commit, so the history stays easy to read and easy to revert.

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

Images, icons and fonts go under `chore(assets)`.

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

- One logical change per commit
- Imperative mood: "add", not "added"
- Lowercase description, no period at the end
- No code identifiers in the subject: "fix scroll animation hook", not "fix useScrollAnimation"
- The whole header stays within 72 characters

## Breaking changes, reverts, issues

```
feat(seo)!: restructure schema output format
revert: feat(blog): add new post
fix(legal): resolve missing privacy page (#42)
```
