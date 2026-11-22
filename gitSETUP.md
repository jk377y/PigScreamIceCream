# Git Setup

Use these steps **once** when setting up the project on your computer.

## 1. Get ready

1. Install [Git](https://git-scm.com/downloads) if you don't already have it.
2. Accept the GitHub invitation to the `PigScreamIceCream` repository in your email.
3. Open **Git Bash** (Windows) or a terminal (Mac/Linux).

<br>

## 2. Set your Git name and email

You need to set your Git environment variables for GitHub commits.

Set your GIT username:

```
git config --global user.name "Your Name"
```

Set your GIT email:

```
git config --global user.email "you@example.com"
```

Examples:
```
git config --global user.name "James"
git config --global user.email "jk377y@gmail.com"
```

You only need to do this once per computer.

---

<br>

## 3. Download the project

Open Git Bash or your terminal in the folder where you want to keep the project. Then run:

```
git clone https://github.com/jk377y/PigScreamIceCream.git
```

Move your terminal to the project directory:

```
cd PigScreamIceCream
```

Assuming you are using VS Code (this will open VS Code in the directory your terminal is currently active)

```
code .
```

---

<br>

## 4. Check the connection

See the connection details:

```
git remote -v
```

Verify that everything is good. 

```
git status
```

Should result in somethign like:

`On branch main`
`Your branch is up to date with 'origin/main'.`

`nothing to commit, working tree clean`

---

**That's it.** Cloning automatically sets up the remote connection. You do **not** need to run `git init` or `git remote add origin`.

For all other Git commands, see [gitWORKFLOW.md](gitWORKFLOW.md).
