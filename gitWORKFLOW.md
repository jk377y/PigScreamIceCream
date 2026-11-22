# Git Workflow

Use this guide whenever you're working on the project. **Do your work on a feature branch, not on `main`.**

<br>

## 1. Get the latest version of the main branch

Open a terminal in the `PigScreamIceCream` folder.

```
git switch main
```

Then:

```
git pull --ff-only origin main
```

---

<br>

## 2. Create a feature branch when working on a new feature

Give the branch a short name that describes your work. Replace `feature-name` with your own name and feature.

```
git switch -c feature/feature-name
```

Example: 

```
git switch -c feature/bliss-cart
```

<br>

## 3. Make your changes

Edit your files in VS Code (or your preferred editor), then check what changed:

```
git status
```

---

<br>

## 4. Save your work with a commit (run this from the root directory, `git add .` adds additional complexity to the process that we can avoid for now)

```
git add -A
```

Commit the changes (change the message to describe what you did).

```
git commit -m "Added shopping cart feature"
```


---

<br>

## 5. Push your branch to GitHub

**FIRST TIME push of a new branch:**

```
git push -u origin feature/feature-name
```

Remember to use your actual branch name. **After the first push**, you can just run:

```
git push
```

If GitHub asks you to sign in, follow the browser sign-in steps.

---

<br>

## 6. Open a pull request

1. Open [the repository on GitHub](https://github.com/jk377y/PigScreamIceCream).
2. Go to **Pull requests** and click **New pull request**.
3. Set **base** to `main` and **compare** to your feature branch.
4. Create the pull request and describe your changes.
5. Wait for **two approvals** before merging.

Anyone on the team can review and merge an approved pull request. Don't push directly to `main`. Everyone will be pushing to their feature branch. We will do a 2 person approval process to merge your new feature(s) with main.

## 7. Start your next task

After your branch has been merged, get the latest `main` before creating your next branch:

```
git switch main
```

Pull the main branch again so your local computer is updated:

```
git pull --ff-only origin main
```

Then repeat from Step 2 with a new branch name.

## Quick commands

| Command | What it does |
| --- | --- |
| `git status` | See your branch and changed files |
| `git branch` | List your local branches |
| `git switch main` | Switch to `main` |
| `git pull --ff-only origin main` | Update your local `main` |
| `git add -A` | Stage changed files (run from root location in the terminal)|
| `git commit -m "message"` | Commit staged changes |
| `git push` | Push commits on a tracked branch |
