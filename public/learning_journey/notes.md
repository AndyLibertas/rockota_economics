# Git and GitHub Course for Beginners 
## Video source: (https://www.youtube.com/watch?v=mAFoROnOfHs&t=930s)
## 2/11/2026


## What is Git?
- Think of Git as the coffee and GitHub as the coffee house where the coffee is served. They are not equal.
- Git is a powerful tool that constantly keeps track of every change you make to your files. 
- Git records what changed, when it changed, who changed it, and even where it happened.
- Any kind of files are tracked. Which line was edited, when it was edited, and by whom it was edited.
- The **coolest** part about Git, though, is that it saves versions of your files. It lets you keep multiple versions of the same file effortlessly. That's why Git is known as a version-control system. Git was created by Liunus Torvalds, the same mind behind Linux.

## Git vs Github
- Git is a tool that runs locally on your computer. 
- GitHub is a central hub where everyone can upload their updates. It's the central online server
- Other popular alternatives to GitHub are GitLab and BitBucket

## GitHub Strucure
- GitHub has two main parts: local and remote
- Local is on your machine, remote is on the cloud

### Local GitHub
- Working Directory is where you write code, create new files, and modify existing ones. 
- Save the changes (Stage). Staging means you are saying: "Alright, my changes are ready - they can move to the next step."
- Local Repository. This is a temporary area where files sit between working directory and repository save. 
- Once you are finished, you commit your work. Commiting means permanently saving changes to your local repository. 
- A **repository** is a place where all the versions of your files and their complete change history are stored. A repository is a secure digital cabinent for your code.
- GitHub is our cloud backup for code.

## Getting Started with Git
- The first step is to install Git on your computer. 
- One you install Git, you will get another terminal tool called "Git Bash", which feels similar to a Linux terminal.
- `git --version` gives you the version on your machine. 
- `git init` tells Git to start tracking the current folder. 
- `ni one.txt` is a useful PowerShell comand for creating a document, in this case a text file called one.txt.
- `ls - Force` shows the hidden .git file in your folder. 
- Here is a practice repository we can use throughout the project: https://github.com/AndyLibertas/github
- `git clone <link>` is how you clone a remote repository to your local machine. 
- The `git status` command will show you what changes have been made in our working directory.
- `git add --all`, `git add -A` Stages every single change across the entire project.
- `git add .` Only stages the changes within the current directory you are in. The `.` means the current directory and everything inside it. 
- `git reset` reverts everything to the previous state. 
- `git add *` only stages new or modified files, not deleted ones. Stages all visible changes except for deleted files.
- `git add <filename>` stages only a specific file. 
- `git add *.txt` stages all changes for a specific file-type, such as .txt files in this example.
- Next we are going to commit, which is confirming and saving our changes permanently. 
- `git commit -m "commit message"` is how you commit your changes.
- `git reset HEAD~` will undo the last commit.
- `git rm <filename>` will let you remove a file and stage that change all in one command. 
- `git reset --hard` will undo the last commit, returning deleted files. 
- `git rm -f <filename>` force removes a file. 
- `git rm --cached <filename>` removes a file from the staging area, but keeps it in your working directory.
- `--force` Completely deletes the file.
- `--cached` Only removes the file from staging. 
- `git rm -r <FOLDER>` Recursively removes all sub-folders.
- `git log` will show the full commit log. 
- `git log --oneline` gives a truncated view of the git log. 

## Branching
- The 'main' or 'master' branch is the primary branch of development. 
- Branching in Git provides a secure and organized way to review, test, and manage changes before adding them to your main project. 
- Merging means combining the changes from two branches into one. 
- `git branch` shows all branches. 
- `git branch <branch_name>` will create a new branch.
- `git checkout <development>` will checkout the new branch.
- `git merge <branch_name> -m <merge message>` merges changes from `<branch_name>` into the current branch. 
- A merge conflict can occur if the same part of the same file has been changed in both branches. You'll have to decide which changes to keep or merge both changes yourself. 
- `git checkout <commit id>` will checkout a specific commit.
- `git diff <commit id 1> <commit id 2>` will show you the exact changes between two commits. Place the most recent commit id first and the older one second.

## Pushing, Fetching & Pulling
- **Push** meanas sending local changes to the remote repository.
- **Fetch** means bringing remote changes into your local repository, but not merging them yet.
- **Pull** means fetching plus merging-so your working directory immediately reflects the remote changes. Pull = Fetch + Merge.
- `git push origin main` sends all of your changes to the remote main branch. Only the main branch is pushed. 
- `git restore` undoes local, uncommited changes in the staging area. 
- `git restore --staged .` will undo all changes in the current working directory. It helps your bring any file or directory back to its previous stage.
- `git stash` - Temporarily set aside your unfinished work, switch to another branch to do something. 
- `git stash pop` - Brings back most recent changes first that have been stashed. 
- `git stash apply` - Brings your changes back to your project, but keeps them in the stash. 
- `git stash list` - shows a list of all saved stashes
- `git stash drop` - removes a stash from the stash list
- `git revert` - Used to undo the changes made in a previous commit, but instead of deleting that old commit, it creates a new one that reverses those changes. This basically fixes an old mistake without erasing it. To revert something, you will need its commit id. 
- `git reset` vs `git revert` Reset doesn't track the reset. Revert creates a new commit. 
- `git rebase` changes the base of your feature branch. This cleans the commit history and makes it more linear. 

## Pull Request
- A pull request (PR) is a request you make to merge your changes into another branch. "I've made some changes in my branch; please review them, and if everything looks good, merge them into the main branch. You can't directly make changes into someone else's repository. 
- Give your PR a title and a clear description. 

