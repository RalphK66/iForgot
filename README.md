# iForgot:  An Online Reminder Application

This is an application developed as part of a school project.
It's goal is to help understand the software development process, to learn about practical online developmennt, and to work as a team.

As this project is work in-progress, certain aspects may not yet be fully developed or integrated in the master branch of the project.
This README file will provide a guide to use and showcase the capabilities of the project thus far.

## Team Members:

Name:               Student ID:
Simon Newell        A01196438
Ralph Kilian        A01202431
Trevor Hobenshield  A00933315
Ted Yuan            A01027086
Eric Dong           A01170099


## Running the main Application
The main script, index, modules, and ejs pages are found in the **'reminderapp' directory** of this repository.
Please note that currently this directory not only contains the necessary sub directories for .js script and other properties, such as images.  It also contains the required package.json and node js files needed to create a mock server and operate the application as a whole.

### Note (Initialization):
When attempting to initialize the application and start the server node, please ensure your terminal is operating in the correct directory.  In order to launch the mock server in the index.js, you must **first ensure** the terminal is in the **'reminderapp' directory** where it is stored.  Otherwise the server will fail to initialize.

Once in the correct directory, the server can be initialized using the terminal (shift + ~).  As the reminder app already comes with the node_modules directory and package.json installed, no additional installations should be required.  Instead, simply start the server by typing and executing: **node index.js**

This will start the **localhost server listening on port 3000**.

## Navigating the Application
Upon loading the localhost:3000, the landing page will automatically be loaded.  This is the only remaining static html.  Unfortunately, it does not currently re-link to the sign-in or other pages of the app.  It is a static design made to mimic the original prototype design, which is viewable in the 'wireframes' directory.

The currently available pages for the application are as follows:
### Main Pages
/home
/login
/reminder

### Sub-Pages
reminder/new
reminder/:id
reminder/edit/:id

In order to explore the application, it is suggested the either the /home or /login are manually navigated to.

### Note (Authentication)
The login page is currently a placeholder.  Authentication has been developed, but is currently un integrated.
The Authentication script and asscocaited guide is found under the **repository branch 'trevorAuthentication'**.
Please feel free to observe it there.  It contains a **separate README file** containing a **detailed explanation** of the application's authentication process and asscociated script.

## Main Application
From the /home page the remaing portions of the application can now be navigated to.  Please note you can navigate using the buttons at the bottom of the screen, viewing all current reminders or creating new reminders.  For any incomplete or unimplemented features, please see the appropriate section of the Documentation Booklet, which provides an indepth view of the current functionality of the application, as well as a guide for proposed future implementation.

### New Reminders
New reminders can have a name, associated date, and any number of sub-tasks.  On creation, these tasks are automatiacally added to the individual reminder and can be seen using the view button next to each reminder.  This button will redirect the page to a automatically generated reinder page containing the reminder's individual information.  From this page the reminder may also be editted or deleted.

Each new reminder also is automatically assigned it's own id number, which is stored in the database.  This is used to track and display each reminder and re-direct to the reminder's page.  The current total number of reminders is displayed on the home page under weekly and monthly reminders.  The sorting of reminders by date information has not been implemented.

## Overall Design
The above guide covers the current functionality of the application as a demo/showcase.  Some features, as mentioned, are not yet implemented.  For a more complete visualization on the application please view the 'prototype' files found in the wireframe directory.  These contain pdf versions of the web pages for the application, as well as linked .fig files, which can be used with figma to demonstrate the flow of application upon more complete implementation.