# Git Workflow

Follow this process for your regular project work. **Do not make changes directly on `main`.** For initial cloning and Git setup, see [Git Setup](gitSETUP.md).

## 1. Update `main`

Run these commands from the repository root before starting a new task:

```bash
git switch main
git pull --ff-only origin main
```

## 2. Create your own branch

Use a short, descriptive name:

```bash
git switch -c feature/feature-name
```

Example: `feature/bliss-cart`

## 3. Make and review changes

Edit the files for your assignment, then check what changed:

```bash
git status
```

## 4. Commit your changes

From the repository root, stage the changes you intend to commit:

```bash
git add -A
git status
```

Make sure nothing unrelated or sensitive is staged, then commit:

```bash
git commit -m "Describe the change"
```

## 5. Push your branch

For the first push of a new branch, replace the example branch name with yours:

```bash
git push -u origin feature/feature-name
```

After that, use `git push` for additional commits on the same branch.

## 6. Open a pull request

1. Open the [GitHub repository](https://github.com/jk377y/PigScreamIceCream) and select **Pull requests → New pull request**.
2. Set **base** to `main` and **compare** to your feature branch.
3. Describe the changes and request team review.
4. Wait for **two approvals** before merging into `main`.

Anyone on the team may review and merge an approved pull request. Never push directly to `main`.

## 7. Start the next task

Once your pull request is merged, return to Step 1 to update `main` and create a fresh branch for the next task.
