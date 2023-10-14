# CMS
Club Management System is a web application that helps clubs manage their day-to-day operations more efficiently and effectively. It typically includes features such as:  Membership management, Event management, Communication tools, Reporting and analytics


# Build with

## Frontend
- React
- Tailwind
- React router dom
- parcel (bundler)


# How to setup and run frontend locally

## Prerequisites

NodeJs should be installed in your system.

## Steps to setup

1. First clone the repo

   ```sh
   git clone https://github.com/gdsc-gvp/CMS.git
   ```
   ```sh
   cd CMS/frontend
   ```
2. Install all the dependencies

   ```sh
   npm install
   ```
3. Run the frontend

   ```sh
   npm start
   ```
////////////////////////////////////////////////////////////////////
## Backend
# How to setup and run backend locally

## Prerequisites

Before you begin, ensure you have the following software installed on your computer:

## Installation
- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/)
- [Git](https://git-scm.com/downloads)

## Steps to setup
Follow these steps to set up the CMS backend on your local machine:

1. **Fork the Repository:**

   First, fork the repository by clicking the "Fork" button at the top right of the GitHub page.

2. **Clone the Forked Repository:**

   Clone your forked repository to your local machine using the following command (replace `<your_github_username>` with your GitHub username):

   ```bash
   git clone https://github.com/<your_github_username>/CMS.git
   ```

3. Change directory

   ```bash
   cd CMS/backend
   ```

4. Set the 'upstream' remote repository to track changes from the original repository

    ```bash
    git remote add upstream https://github.com/gdsc-gvp/CMS.git
    ```

5. Pull the latest changes from the 'upstream' remote's 'dev' branch into your local branch

   ```bash
   git pull upstream main
   ```

6. Create a new branch for the task you were assigned to, eg `(Feat/Bug/Fix/Chore)` :
   ```bash
   git checkout -b <your_branch_name>
   ```
eg- `git checkout firsthack`

## Running Locally

```bash

npm install

npm run start

```


