# Password Generator App

This project is a simple and customizable password generator built using React and styled with Tailwind CSS. It allows users to generate secure passwords with various options, including the length, inclusion of uppercase letters, numbers, and special characters.

## Features

- **Customizable Password Length:** Users can select a password length between 4 and 64 characters.
- **Inclusion Options:** Toggle options to include uppercase letters, numbers, and special characters in the generated password.
- **Real-time Strength Indicator:** Displays the strength of the generated password.
- **Copy to Clipboard:** Easy copying of the generated password to the clipboard.
- **Responsive Design:** Adaptable interface designed with Tailwind CSS.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Syed-Muhammad-Hussnain-Raza/Password-Generator-React-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Password-Generator-React-App
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:

   ```bash
   npm start
   ```

   Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

   The page will reload when you make changes. You may also see any lint errors in the console.

## Usage

1. Open the application in your browser. You can also use this app directly via this link: [Password Generator App](https://syed-muhammad-hussnain-raza.github.io/Password-Generator-React-App/)
2. Customize the password settings by adjusting the length and toggling the inclusion of uppercase letters, numbers, and special characters.
3. Click on "Generate Password" to create a new password.
4. Copy the generated password to your clipboard by clicking on the password text.

## Project Structure

- App.js: Main file that renders the PasswordGenerator and Footer components.
- PasswordGenerator.js: Handles the core functionality for generating passwords and evaluating their strength.
- Footer.js: Simple footer component with developer credits.

## Dependencies

- react: ^18.3.1
- react-switch: ^7.0.0
- tailwindcss: ^3.4.10

## Deployment

The app can be deployed using GitHub Pages. The predeploy script builds the app, and the deploy script pushes the build to the gh-pages branch.

``` bash
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

## Author

**Syed Muhammad Hussnain Raza**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
