Awesome—here’s a clear, copy-and-go guide to get the ZIP contents into your **decision_matrix** repo and open a PR for Dana to review.

[Download the ZIP](sandbox:/mnt/data/decision_matrix_docs.zip)

# Option A — Command line (recommended)

**Works on Windows, macOS, Linux.**

1. **Download & extract**

* **Windows (PowerShell):**

  ```powershell
  mkdir $HOME\Downloads\dm_docs
  Expand-Archive -Path $HOME\Downloads\decision_matrix_docs.zip -DestinationPath $HOME\Downloads\dm_docs -Force
  ```
* **macOS/Linux (Terminal):**

  ```bash
  mkdir -p ~/Downloads/dm_docs
  unzip ~/Downloads/decision_matrix_docs.zip -d ~/Downloads/dm_docs
  ```

2. **Go to your local repo**

```bash
cd /path/to/your/decision_matrix
git fetch origin
git switch -c doc/add-initial-docs   # or: git checkout -b doc/add-initial-docs
```

3. **Copy the `/docs` folder into the repo root**

* **Windows (PowerShell, merges folders):**

  ```powershell
  robocopy $HOME\Downloads\dm_docs\docs .\docs /E
  ```
* **macOS/Linux:**

  ```bash
  rsync -a ~/Downloads/dm_docs/docs/ ./docs/
  # (or) cp -R ~/Downloads/dm_docs/docs ./   # creates ./docs
  ```

4. **Review, stage, and commit**

```bash
git status
git add docs
git commit -m "docs: add initial documentation structure (tools, workflow, glossary)"
```

5. **Push & open PR**

```bash
git push -u origin doc/add-initial-docs
```

* Go to GitHub → your repo → you’ll see **“Compare & pull request”**.
* Title: `docs: seed Decision Matrix documentation`
* Description: brief summary (what & why).
* Assign **Dana Nickerson** as reviewer.
* After approval, **Squash & Merge** → delete branch.

---

# Option B — GitHub Desktop (GUI)

1. Open **GitHub Desktop** → **File → Open** your `decision_matrix` repo → **Fetch origin**.
2. **Branch → New Branch…** → name it `doc/add-initial-docs` → **Create branch**.
3. In **File Explorer/Finder**, open your repo folder and **drag the extracted `docs/` folder** from the ZIP into the repo root.
4. Back in GitHub Desktop:

   * Verify changed files (the whole `docs/` tree).
   * **Summary:** `docs: add initial documentation structure`
   * Click **Commit to doc/add-initial-docs** → **Push origin** → **Create Pull Request**.
5. On GitHub, assign **Dana** → PR review → **Squash & Merge** → delete branch.

---

# Notes & tips

* **Existing `docs/`?** If you already have one, this will **merge** new files with the old. Review diffs before committing. If you prefer a clean slate, temporarily rename the old folder to `docs_old/` first.
* **Repo root, not nested:** Ensure you end up with `decision_matrix/docs/...` (not `decision_matrix/somefolder/docs/...`).
* **Link from root README (optional):** Add this line to your repo’s top-level `README.md`:

  ```markdown
  📘 Project Documentation lives in [/docs](./docs/).
  ```

If you want, I can also draft the **PR description text** you can paste when opening the pull request.

