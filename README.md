<p align="center">
<img src="https://user-images.githubusercontent.com/73095396/185811032-7e78d53c-9b82-4482-8cab-832539d3812d.png" alt="logo" />
<h1 align="center" >Github Explorer 0.1.0</h1>
 
<p align="center">
      This sample project helps to explore open GitHub repositories. Where the user can get the required public repository information, such as the repository name, the number of stars and forks, the updated date, the total number of issues, and the default branches. Additionally, you can use pagination to select the number of items per page and organize the list of the searched repositories according to various criteria.
</p>

**Used API: https://api.github.com/**

## Features

The application has two pages, a Home page, and a Detail Page

:point_right: **On the Home Page users can**
- [x] Search public repositories
- [x] Filter searched repositories [options](#Repository_Sort)
- [x] Have pagination.
- [x] Change number of data per page [options](#Per_Page_Option)
- [x] Get the searched repositories containing detail like Owner Name, Repository Name, Total stars, Total forks, Watched count, last updated date, and short description.

:point_right: **On the Detail Page users can**
- [x] View selected repository detail like Owner Name, Repository Name, Avatar, Total Issue, and Default Branch.
- [x] The user will be direct to the owner's GitHub page if clicked on the owner name or repository name.


## Used Stack

:fire: **React : "^18.2.0"** 

:fire: **TypeScript : "^4.7.4"** 

:fire: **Redux toolkit : "^8.0.2"** 

:fire: **Tailwind : "^3.1.8"**


## Used Packages / Dependencies

:monkey: **axios : "^0.27.2"**

:monkey: **react-paginate : "^8.1.3"**

:monkey: **react-router-dom : "^18.0.6"**

:monkey: **nanoid : "^4.0.0"**




## Installation

**Clone the repo**

```sh
# Clone the repo
https://github.com/NishChal370/Github-explorer.git
```

**Install the app**

```sh
# Install dependencies
npm install

# Build the project
npm run build

# Run the app
npm start
```


## Filter Options

### Repository_Sort

:diamond_shape_with_a_dot_inside: Best match
:diamond_shape_with_a_dot_inside: Most starts
:diamond_shape_with_a_dot_inside: Fewest stars
:diamond_shape_with_a_dot_inside: Most forks
:diamond_shape_with_a_dot_inside: Fewest forks
:diamond_shape_with_a_dot_inside: Recently updated
:diamond_shape_with_a_dot_inside: Last updated


### Per_Page_Option

:small_red_triangle: 10 per page
:small_red_triangle: 25 per page
:small_red_triangle: 50 per page



## Package uses

***axios :*** It is used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations. This popular library is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.

***react-router-dom :*** React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

***react-paginate :*** It is used to allow users can easily switch between pages across a website or app. With the help of this component, a user can select a specific page from a range of pages.

***nanoid :*** A tiny, secure, URL-friendly, unique string ID generator for JavaScript.



***
To learn React, check out the [React documentation](https://reactjs.org/).
