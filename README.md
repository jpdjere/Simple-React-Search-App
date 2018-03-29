# Simple Tour search app

## Decisions taken

### UX & UI

- The web app offers a simple search bar where the user inserts one or more terms.
- The user should enter at least 5 non-blank characters before pressing the search button or an error will pop up.
- After the user clicks on the search button, the information contained in the JSON with the results provided is shown on-screen. The search bar is cleared.
- By default, all results are shown. But, upon clicking the search button a useful Filter Panel appears, where the user can filter the results. These will be updated in real-time as the user changes the filter values. The results can be filtered by:

1. **Price:** The Price silder defaults with a minimum that corresponds to the lowest price in the results found and a maximum of the highest price on the results found. The slider allows the user to change only the highest price. This is a UX consideration: users tend to search for deals by filtering out the results with the highest prices.

1. **Ratings:** The Ratings silder defaults with a minimum that corresponds to the lowest rating in the results found and a maximum of the highest rating on the results found. In this case, the slider allows the user to change only the lowest rating. Here, the UX consideration is reversed: users tend to search for deals by filtering out the results with the lowest prices.

1. **Special Offers:** A Toggle component allows the user to filter out the results that are not Special Offers. This also corresponds to the normal behaviour of users, which is to look first for the results that have Special Offers.


### Tech stack

- React.js for the main UI and frontend design.
- Redux for state management (although a mixed approach was taken and certain pieces of state where handled with React's components' local state.)
- Material-UI and its React wrapper.
- Webpack as the Javascript module bundler.

### Other libraries

- LoDash to simplify data wrangling.

## Run the project

1. On a Terminal, on the root of the project, write `npm install` to install dependencies.
1. Start the project with `npm start`.
1. The project will run on port 3000. Use Chrome to visit the site at `locahost:3000`.

## Author

- **Juan Pablo Djeredjian**
