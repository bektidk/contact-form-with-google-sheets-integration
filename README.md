# Contact Form with Google Sheets Integration

This repository contains the source code for a web-based contact form integrated with a Google Spreadsheet. The form collects user inputs and stores them directly into a Google Spreadsheet for easy data management.

## Files included

- `index.html`: The HTML structure of the contact form.
- `style.css`: The CSS styling for the form.
- `app-script.txt`: The Google Apps Script to enable integration with Google Sheets.

## Setup Instructions

Follow these steps to set up and use the contact form:

### 1. Google Sheets Setup

1. **Create a new Google Spreadsheet**: Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. **Name your spreadsheet**: Give it an appropriate name (e.g., "Contact Form Responses").
3. **Get the Spreadsheet ID**: The ID is the long string in the URL of your Google Spreadsheet.

### 2. Google Apps Script Setup

1. **Open the Script Editor**: In your Google Spreadsheet, go to `Extensions` > `Apps Script`.
2. **Copy the script**: Open the `app-script.txt` file in this repository and copy its contents.
3. **Paste the script**: In the Script Editor, delete any existing code and paste the copied script.
4. **Save the script**: Save your script with an appropriate name.
5. **Set up a trigger**:
    - Go to `Triggers` > `Add Trigger`.
    - Choose `doPost` function.
    - Set the event type to `From form` and select `On form submit`.

### 3. Deploy as a Web App

1. **Deploy the script**:
    - Click `Deploy` > `New deployment`.
    - Select `Web app`.
    - Give your deployment a description.
    - Set `Execute the app as` to `Me`.
    - Set `Who has access` to `Anyone`.
    - Click `Deploy`.
2. **Get the Web App URL**: Copy the URL provided after deploying.

### 4. Update `index.html`

1. **Open `index.html`**: Edit the `index.html` file in this repository.
2. **Update the form action**: Replace the form action URL with the Web App URL you copied from the previous step.

### 5. Hosting the Form

You can host your form on any web server or static site hosting service (e.g., GitHub Pages, Netlify, Vercel).

## Usage

Once everything is set up and deployed, users can fill out the contact form, and their submissions will be automatically stored in your Google Spreadsheet.

## License

No license specified.
