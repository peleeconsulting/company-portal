# Contributing Guidelines

Thank you for your interest in contributing! Please follow the workflow outlined below to ensure a smooth and safe release process.

---

## 🚀 Workflow Overview

Our deployment pipeline includes:
- **Preview Deploys** for all pull requests via Netlify
- A **Pre-Production** environment for staging/QA
- A protected **Production** environment served via GitHub Pages

---

## 🛠️ Step-by-Step Contribution Process

### 1. Fork and Create a Feature Branch
Create your feature or bugfix branch off of `preprod`:

```bash
git checkout -b user/yourname/feature-name preprod
```

> 🔒 You **cannot** push directly to `preprod` or `main`. All changes must go through pull requests.

---

### 2. Open a Pull Request to `preprod`

- Set the base branch to `preprod`
- Your PR will automatically get a **Netlify Deploy Preview** link from the Netlify bot (e.g., `https://deploy-preview-123--your-site.netlify.app`)
- Review and test your changes using this deploy preview

✅ You **do not need approval** to merge into `preprod`  
✅ You **can merge** your PR into `preprod` yourself once you've tested the deploy preview

---

### 3. Test on Pre-Production

Once your changes are merged into `preprod`, they will be deployed automatically to:

🔗 [Pre-Production Site](https://effervescent-licorice-a3c4ff.netlify.app)

Please do a final test here to ensure everything works correctly in the integrated staging environment.

---

### 4. Open a Pull Request to `main`

Once you're confident in your changes:

- Open a new PR from `preprod` → `main`
- This PR **must receive at least one approval** before it can be merged
- Direct PRs to `main` from any other branch are **not allowed and will be automatically blocked**

---

## 🧪 Summary

| Branch      | Purpose            | Merge Rules                      | Deploy Location |
|-------------|--------------------|----------------------------------|-----------------|
| `preprod`   | Staging / QA       | No approval required             | [Pre-Prod Site](https://effervescent-licorice-a3c4ff.netlify.app) |
| `main`      | Production         | ✅ Requires at least **1 approval** | GitHub Pages + Custom Domain |
| PRs → `main`| Production Release | ❌ Must come **only from `preprod`** | — |

---

## 🙏 Thanks for contributing!

If you have questions, open an issue or reach out to the maintainers.
