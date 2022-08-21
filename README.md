<p align="center">
<img src="https://user-images.githubusercontent.com/73095396/185811032-7e78d53c-9b82-4482-8cab-832539d3812d.png" alt="logo" />
<h1 align="center" >Github Explorer 0.1.0</h1>
 
<p align="center">
      This sample project helps to explore open GitHub repositories. Where the user can get the required public repository information, such as the repository name, the number of stars and forks, the updated date, the total number of issues, and the default branches. Additionally, you can use pagination to select the number of items per page and organize the list of the searched repositories according to various criteria.
</p>

**Used API: https://api.github.com/**

## Features

- [x] Search public repository 
- [x] Filter searched repository [options](#Repository_Sort)
- [x] Home page with pagination
- [x] Change number of data in page [options](#Per_Page_Option)
- [x] View repository detail containing Repository Avatar, Total Issue, Default Branch, Owner Name, Repository Name

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

1. Best match
2. Most starts
3. Fewest stars
4. Most forks
5. Fewest forks
6. Recently updated
7. Last updated


### Per_Page_Option

1. 10 per page
2. 25 per page
3. 50 per page


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
