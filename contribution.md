# How to Contribute to [CMS](https://github.com/gdsc-gvp/CMS) during hacktoberfest
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# First Contributions
It's always hard the first time you do something. Especially when you are collaborating, making mistakes isn't a comfortable thing. We wanted to simplify the way new open-source contributors learn & contribute for the first time. If you are looking to make your first contribution, follow the steps below.

#### *If you're not comfortable with command line, [here are tutorials using GUI tools.]( #tutorials-using-other-tools )*

If you don't have git on your machine, [install it]( https://help.github.com/articles/set-up-git/).

## Fork this repository
Fork this repo by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository
Open a terminal and run the following git command:

```
git clone https://github.com/{username}/CMS.git
```
where `{username}` is your GitHub username. Here you're copying the contents of your repository in GitHub to your computer.

## Create a branch
Change to the repository directory on your computer:

```
cd CMS
```
Now create a branch using the `git checkout` command:
```
git checkout -b <new-branch-name>
```
eg- `git checkout firsthack`

## Make necessary changes and commit those changes
Now go to profiles folder and a file <your-username>.md and add your details in a table. (You'll use this file to keep a record of your contributions to this repository)

If you go to the project directory and execute the command `git status`, you'll see there are changes. 


Add those changes to the branch you just created using the `git add` command:

```
git add .
```

Now commit those changes using the `git commit` command:
```
git commit -m "Add <username>.md to profiles folder"
```
replacing `<username>` with your username.

## Push changes to GitHub
```
git push origin <your-branch-name>
```
replacing `<your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review
If you go to your repository on GitHub, you'll see a  `Compare & pull request` button.  Click on that button.

Now submit the pull request.

Soon We will be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.

## Where to go from here?
Congrats! You just completed the standard _fork -> clone -> edit -> PR_ workflow that you'll encounter often as a contributor!


## Support ❤
If you liked this project, star⭐ it on [GitHub](https://github.com/gdsc-gvp/CMS)
Follow [GDSC GVP](https://linktr.ee/GdscGvp) for more such activities

<p align="center">
  Giving back to the community
  <br><br>
  <a href="https://gdsc.community.dev/gayatri-vidya-parishad-college-of-engineering-visakhapatnam/">🚀 Join Us 🚀</a>
  <br> <br>
  <a href="https://discord.com/invite/NkkTXYShTy"><img src="https://img.icons8.com/office/30/000000/discord-logo.png"/></a>&nbsp;
  <a href="https://twitter.com/gdsc_gvp"><img src="https://img.icons8.com/office/30/000000/twitter.png"/></a>&nbsp;
  <a href="https://www.linkedin.com/company/gdsc-gvp"><img src="https://img.icons8.com/office/30/000000/linkedin.png"/></a>&nbsp;
   <a href="https://www.instagram.com/gdsc_gvp/"><img src="https://img.icons8.com/office/30/000000/instagram-new.png"/></a>&nbsp;
</p>

