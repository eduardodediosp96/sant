## How to start

After cloning the project:

### Create an env file

### `npm install`

Installs the project's dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## How to customize

This project includes a theme that specifies the palette colors, media screen sizes, font family, sizes and shadows used in the project. To customize the project's style, just replace the default values on the theme.

**Example: change the main value on the palette to #0000FF to make the buttons, links and shadows blue instead of orange.**


## Using styled components

A theme provider was created to receive the theme prop in every styled component of the project, therefore allowing the components to use the values declared on the theme file.