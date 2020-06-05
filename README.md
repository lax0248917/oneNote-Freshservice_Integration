## OneNote - Freshservice Integration Application

This application will allow the creation of a OneNote page from a freshservice modal from within the Ticket Properties Page.

### Folder structure explained

    .
    ├── README.md                  This file
    ├── app                        Contains the files that are required for the front end component of the app
    │   ├── app.js                 JS to render the dynamic portions of the app
    │   ├── icon.svg               Sidebar icon SVG file. Should have a resolution of 64x64px.
    │   ├── freshservice_logo.png  The Freshservice logo that is displayed in the app
    │   ├── style.css              Style sheet for the app
    │   ├── template.html          Contains the HTML required for the app’s UI
    ├── config                     Contains the installation parameters and OAuth configuration
    │   ├── iparams.json           Contains the parameters that will be collected during installation
    │   └── iparam_test_data.json  Contains sample Iparam values that will used during testing
    └── manifest.json              Contains app meta data and configuration information

### Application Checklist
- [x] Create file structure on local machine
- [x] Create App project using Freshworks SDK (fdk create)
- [x] Establish source control on local machine using Git
- [x] Establish source control using remote repository (Gitlab or Github)
- [x] Make initial commit and push changes to both local and remote repos
- [x] Update README file
- [x] Establish Git-workflow for application development (use a dev branch)
- [x] Build first working version of the application (v.1.0)
- [x] Submit Project to CoDiv Hackathon.io