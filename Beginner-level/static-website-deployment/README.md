# Beginner Level Github Projects: 

# Static Website Deployment:

* Create a simple static website (HTML, CSS) and use Git to version control it.
* Set up a basic CI/CD pipeline to automatically deploy changes to a web server or hosting platform like GitHub Pages or Netlify.

**To Acheive This Please Follow The Steps Outlined Below for deploying a static website using Git. We'll use GitHub Pages as an example hosting platform because it's free and straightforward to set up;** 

Step 1: Create a GitHub Account

* If you don't already have one, sign up for a GitHub account at https://github.com/.

Step 2: Create a New Repository

* Log in to your GitHub account.
* Click the "+" sign in the upper right corner and select "New repository."
* Choose a repository name (e.g., "my-static-website").
* Select the "Public" or "Private" repository visibility, depending on your preference.
* Do not initialize the repository with a README file as this might cause issues.
* Click "Create repository."

Step 3: Create Your Static Website

* Create a new directory on your local machine to hold your website files.
* Add your HTML, CSS, JavaScript, and other static files to this directory.

Step 4: Initialize Git Repository Locally

* Open your terminal or command prompt:
* Navigate to your website's directory using the cd command.
* Initialize a Git repository in the directory using: 

**git init**

Step 5: Add and Commit Your Website Files

* Add all your files to the Git repository using:

**git add .**

* Commit the changes using:

**git commit -m "Initial commit"**

Step 6: Connect Your Local Repository to GitHub

* Go to your GitHub repository's page.
* Under the "Quick setup" section, you'll see the URL for your repository (e.g., https://github.com/yourusername/my-static-website.git).
* In your terminal, set the remote repository URL using:

**git remote add origin https://github.com/yourusername/my-static-website.git**

* Push your local repository to GitHub using:

**git push -u origin master**

Step 7: Configure GitHub Pages

* Go to your GitHub repository's "Settings" tab.
* Scroll down to the "GitHub Pages" section.
* Under "Source," select the branch that contains your website (usually "master" or "main").
* Click "Save."

Step 8: Access Your Deployed Website

* After a few moments, your static website will be deployed. You can access it using the URL displayed in the GitHub Pages section of your repository settings (e.g., https://yourusername.github.io/my-static-website).

Step 9: Updating Your Website

* Whenever you make changes to your website, follow these steps to update it:
* Edit your local website files.
* Add and commit your changes using Git using:

**git add .**
**git commit -m "Updated website content"**
* push your changes to GitHub using:

**git push**

* GitHub Pages will automatically rebuild and update your website with the new content.

Congratulations! You've successfully deployed a static website using Git and GitHub Pages. You can continue to enhance your website and version control it using Git for any future updates.
