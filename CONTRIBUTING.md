Below are steps to follow for making changes to the repository. Installation steps can be found in the [README](README.md).

## Before making changes

* Open Terminal and `cd` to the syndesis-ux repository.
* `git status` (to make sure you're on "On branch master" and you have "nothing to commit, working tree clean")
  * If you see modified files there, either run `git checkout .` to blow the changes away and start fresh, or skip to [Making Changes](#Making-Changes) to commit and push the current changes.
* `git pull origin master` (pulls latest changes down from the repo on github)


## Making Changes

* Edit your files.
* `git status` (tells you what you modified)
* `git add .` (adds the modified files to be committed)
* `git status` (shows you what is going to be committed)
* `git commit -m '[issue-2113] rest of commit msg'` (commits to master, with feedback about how many files changed, insertions, deletions)
* `git fetch` (updates your local branches with any changes on github)
* `git rebase origin master` (will merge in any new changes from github that may have occured while you were making this change)
  * If this fails and you see merge conflicts, grab a developer to help.
* `git push origin master` (pushes the changes to github)
* `git log` (see your commit at the top of the list)
* Verify the changes are visible at https://syndesisio.github.io/syndesis-ux/
