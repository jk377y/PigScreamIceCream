# Git Setup

Use this guide **once per computer** to configure Git and clone the repository. For day-to-day Git work, see [Git Workflow](gitWORKFLOW.md).

## 1. Prepare Git and GitHub

1. Install [Git](https://git-scm.com/downloads) if needed.
2. Accept your GitHub invitation to the `PigScreamIceCream` repository.
3. Open Git Bash (Windows) or a terminal (Mac/Linux).

## 2. Set your Git identity

Replace the sample values with your own name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

You only need to set these values once per computer.

## 3. Clone the project

Navigate to the folder where you want to store the project, then run:

```bash
git clone https://github.com/jk377y/PigScreamIceCream.git
cd PigScreamIceCream
```

To open the folder in VS Code (if installed):

```bash
code .
```

## 4. Verify the repository

```bash
git remote -v
git status
```

You should see the GitHub remote and a clean working tree on the checked-out branch. **Do not run `git init` or `git remote add origin`** after cloning.
