# Ingredients Checker

## Overview

The Ingredients Checker is a simple web application that allows users to input a list of ingredients and categorize them into three categories: **Bad**, **Weird**, and **Good**. The application helps users identify potentially harmful or unnatural ingredients in their products.

I am big into food and nutrition and have a passion for healthy eating! I want to spread awareness of what goes into food and this app is a beginner way to show this.

## Features

- **Ingredient Input**: Users can enter a list of ingredients in a textarea.
- **Categorization**: The app categorizes ingredients into:
  - **Bad Ingredients**: Known harmful ingredients (e.g., preservatives).
  - **Weird Ingredients**: Uncommon or synthetic ingredients (e.g., sucralose, dextrose).
  - **Good Ingredients**: Natural and safe ingredients.
- **Expandable Lists**: Users can expand and collapse each category to view the ingredients.
- **Error Handling**: The app prompts users to enter ingredients if the input field is empty.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Styling**: CSS
- **Testing**: Jest (for backend testing)

// TODO consider using client server model, put here as a foundation for scaling. 
// for now it is okay to do it client side, i think because it is simple processing.


## Installation

To get started with the Ingredients Checker, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (Node package manager)

### Clone the Repository

```bash
git clone https://github.com/yourusername/ingredients-checker.git
cd ingredients-checker
```
# Install Dependencies
Navigate to the server and client directories and install the dependencies:
## In the server directory
cd server
npm install

## Start the Application
Start the backend server:

```bash
cd server
npm start
```
Then, in a new terminal, start the frontend:

```bash
cd client
npm start
```
The application should now be running on http://localhost:3000.

#Usage
1. Enter a list of ingredients into the textarea provided.
2. Click the "Check Ingredients" button.
3. Review the categorized results that will display below the input field.

Testing
To run tests for the backend, navigate to the server directory and run:

```bash
Copy code
npm test
```

Acknowledgements
This project was created to enhance awareness of ingredient transparency in food products.
Built using React for frontend and Node.js for backend functionality.

Contact
For any questions or feedback, please reach out to:

Nickan Tousi
nickan.tousi@gmail.com

