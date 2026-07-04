Cypress Mini-Project: E2E Test
This project tests user interactions, form submissions, and authentication workflows using sample pages from The Internet (Herokuapp).
Secure Authentication (/login)Inputs test credentials, submits the form, and verifies successful redirection to the secure dashboard.
Dropdown Selectors (/dropdown)Interacts with HTML dropdown lists to select options and verify that the correct internal values are registered
Interactive Checkboxes (/checkboxes)Toggles structural checkboxes on and off, confirming their binary check states (.checked vs .not.be.checked).
Number Inputs (/inputs)Targets input fields configured for numbers to ensure typing operations work correctly.
File Uploads (/upload)Pushes a mock JSON payload file from the local fixtures directory directly into the application's upload element.
Viewport Scrolling (/)Ensures long-page layouts render correctly by forcing the runner to scroll down and find page footer targets.
