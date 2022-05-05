# Checks & Balances

is a budget tracking app, set up as a PWA (Progressive Web App) that you can use offline, and install on your desktop/mobile device.

Visit the deployed site here:

[Checkas & Balances](https://rocky-scrubland-32612.herokuapp.com/)

## Description

- A user can log transactions by entering a transaction name, dollar amount, and increase/decrease value option for each log.

- A graphical interface shows you your income/expenses as you log them over time.

- Data is stored remotely via MongoDB, and in cases of poor or no internet connection, indexedDB is utilized to save the data inputs, so no transactions are lost and a user may continue to add transaction while offline.

- Once a connetion is re-established, the saved data will automatically be sent to the primary database, with no interuptions for the user.

- A user may also install the app directly to their home screen, for access outside of the browser.

## Project Details

This project is intended to demostrate the implementation of PWA capabilities for completion of The University of Texas Code Bootcamp week 19 challenge.

The starter code, which includes all HTML, CSS, and JavaScript necessary to run the application in the browser while online was provided by University of Texas for use in the challenge. All offline functionality, including code for implementing indexedDB, Service Workers, and the manifest.json file, was coded by [Stevie Trudell](https://github.com/strudelAndCoffee).