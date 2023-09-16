# Movie Review App

## Description

This React application uses a combination of Ruby on Rails for the back-end and React JS for the front-end in order to create a full stack SPA.

<!-- ![Alt Text]() -->

All information and images used in the app have been created by me, generated randomly or sourced from [image sites.](https://unsplash.com/)

This app implements a Rails API that follows RESTful routing conventions, in addition to validations for input data provided by Active Record. The implementation of Active Record allows for seemless interaction with the database and provides an extra layer of security via built in password protection methods that set and authorize Users. The React front end uses 'useState' to manage the flow of response data to the application, in addition to 'useContext' to prevent prop drilling. React Router is used to display the various client side route pages and 'react-router-dom' allows for seemless navigation between pages via 'Link'.

## Installation

1. Clone the repository into your local computer.
2. Cd into directory
3. Run snippet in directory:

```sh
npm install --prefix client
```

4. Run snippet in directory to start React server:

```sh
npm start --prefix client
```

5. Cd into back end directory
6. Run snippet in directory:

```sh
bundle install
```

7. Run snippet to create and seed database:

```sh
rails db:create db:seed
```

8. Run snippet to start backend server:

```sh
rails s
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the specified section directory, you can run:

### `npm  install --prefix client `

- Installs all dependencies used in React app

### `npm  start --prefix client `

- Runs the app in the development mode.\
- Hosts the app and opens a browser window to display App.\
  Open [http://localhost:3000](http://localhost:3000) to view if the browser does not open.

The page will reload if you make changes.\
You may also see any lint errors in the console.

### `bundle install`

- Installs all gems needed for full backend implementation.

### `rails db:create`

- Creates a development database using PostgreSQL as the database.

### `rails db:seed`

- Seeds data into database from 'db/seeds.rb' file.

### `rails s`

- Runs the backend server.

### `npm test --prefix client `

- Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build --prefix client `

- Builds the app for production to the `build` folder.\
- It correctly bundles React in production mode and optimizes the build for the best performance.

- The build is minified and the filenames include the hashes.\
- Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject --prefix client `

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Notable Dependencies

Ruby '2.7.4'

BCrypt '5.0'

PostgreSQL '1.1'

Active Model Serializers '0.10.13'

Material UI '5.14.7'

Bootstrap CSS '5.3.1'

React '18.2.0'

React Router Dom '5.0.1'

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started), In addition to the [Ruby on Rails documentation] (https://guides.rubyonrails.org/)

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build --prefix client` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

```

```
