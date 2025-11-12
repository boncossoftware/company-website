# GitHub Rulesets Configuration

This directory contains GitHub Rulesets that enforce repository security and quality standards.

## Rulesets Overview

### 1. Protect Production Branch (`production-branch-protection.json`)

Applies to: `master` and `main` branches

**Rules:**

- ✅ Require 1 pull request approval before merging
- ✅ Dismiss stale reviews when new commits are pushed
- ✅ Require code owner review (from `.github/CODEOWNERS`)
- ✅ Require all conversations resolved
- ✅ Require status checks to pass (CI/CD workflow)
- ✅ Require branches to be up to date before merging
- ✅ Block force pushes
- ✅ Block branch deletion
- ✅ Require linear history (no merge commits)
- ✅ Require signed commits (recommended for security)

**Bypass:** Only repository admins can bypass these rules

### 2. Secure All Branches (`secure-all-branches.json`)

Applies to: All branches

**Rules:**

- ✅ Restrict who can create branches
- ✅ Block force pushes
- ✅ Block branch deletion (except by admins)
- ✅ Allow fetch and merge updates

**Bypass:** Repository admins and maintainers

### 3. Protect Release Tags (`protect-release-tags.json`)

Applies to: All tags matching `v*` (e.g., `v1.0.0`, `v2.1.3`)

**Rules:**

- ✅ Restrict tag creation to authorized users
- ✅ Block tag updates
- ✅ Block tag deletion
- ✅ Require linear history

**Bypass:** Repository admins

## How to Apply These Rulesets

### Option 1: Via GitHub UI (Recommended)

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Rules** → **Rulesets**
3. Click **New ruleset** → **New branch ruleset**
4. Copy and paste the JSON content from each file
5. Click **Create** for each ruleset

### Option 2: Via GitHub CLI

```bash
# Install GitHub CLI if you haven't already
brew install gh

# Authenticate
gh auth login

# Create rulesets (requires repo admin access)
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/boncossoftware/company-website/rulesets \
  --input .github/rulesets/production-branch-protection.json

gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/boncossoftware/company-website/rulesets \
  --input .github/rulesets/secure-all-branches.json

gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/boncossoftware/company-website/rulesets \
  --input .github/rulesets/protect-release-tags.json
```

### Option 3: Via GitHub API

Use the [GitHub REST API](https://docs.github.com/en/rest/repos/rules) to create rulesets programmatically.

## Customization

### Adjust Required Approvals

In `production-branch-protection.json`, change:

```json
"required_approving_review_count": 1
```

To require more approvals (e.g., 2 for critical projects).

### Remove Signed Commits Requirement

If you don't want to require GPG-signed commits, remove this rule from `production-branch-protection.json`:

```json
{
  "type": "required_signatures"
}
```

### Modify Protected Branches

To protect additional branches, update the `include` array:

```json
"include": [
  "refs/heads/master",
  "refs/heads/main",
  "refs/heads/production",
  "refs/heads/staging"
]
```

## Actor IDs Reference

- `1` = Repository Admins
- `2` = Repository Maintainers
- `4` = Repository Writers
- `5` = Repository Admins + Maintainers

## Testing

After applying rulesets:

1. Try to push directly to `master` → Should be blocked ✅
2. Try to force push to any branch → Should be blocked ✅
3. Create a PR without approval → Should not be mergeable ✅
4. Create a PR with approval + passing CI → Should be mergeable ✅

## Additional Security

Consider also:

- Enable **Dependabot** for automatic dependency updates
- Enable **Secret scanning** to prevent leaked credentials
- Enable **Code scanning** (CodeQL) for security vulnerabilities
- Require 2FA for all organization members

## Documentation

- [GitHub Rulesets Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
- [Ruleset Recipes](https://github.com/github/ruleset-recipes)
