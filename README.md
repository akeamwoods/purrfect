# PurrfectPixels

## Live Demo
https://akeamwoods.github.io/purrfect/

## Screenshots:

## Homepage - Mobile
<img src="https://github.com/akeamwoods/purrfect/assets/19963177/ae8d7208-bc1f-44ec-8725-93bbd04ba2c8" width="300">
<img src="https://github.com/akeamwoods/purrfect/assets/19963177/09734f40-30ef-44c3-82db-e275b532e9aa" width="300">
<img src="https://github.com/akeamwoods/purrfect/assets/19963177/c06e6b3a-28e6-4c77-9aa1-5f3b1a7d8534" width="300">

### Homepage:
<img width="1000" alt="Screenshot 2023-12-15 at 08 05 19" src="https://github.com/akeamwoods/purrfect/assets/19963177/32bc7a44-fb8b-4eb3-b068-730c76c7f08c">


### Upload Page:
<img width="1000" alt="Screenshot 2023-12-15 at 08 06 23" src="https://github.com/akeamwoods/purrfect/assets/19963177/5fa242cb-54eb-4978-8fb9-a212ca60edb4">


### Upload Page with image selected:
<img width="1727" alt="Screenshot 2023-12-15 at 08 08 31" src="https://github.com/akeamwoods/purrfect/assets/19963177/aaea5e6c-8211-4564-9806-2e74e62f1572">

## About
This project is built with **React**, **TypeScript**, **Vite**, and **pnpm**. The app uses React Router for navigation and React Query for data fetching and state management.

Whilst I have lots of experience working with Webpack in the past (and Rollup for component libraries), [Vite is increasingly edging towards being dominant over webpack]([url](https://kinsta.com/blog/vite-vs-webpack/#2-popularity-community-and-ecosystem)https://kinsta.com/blog/vite-vs-webpack/#2-popularity-community-and-ecosystem) and is the [clear winner in terms of building speed](https://kinsta.com/blog/vite-vs-webpack/#5-build-time-and-bundle-size). It also has a lot less overhead, which is why I decided to use it in this project. 

## Setup
+ clone repo
+ setup .env file with api key as VITE_CAT_API_KEY='yourApiKey'
+ run **pnpn i** to install dependencies
+ run **pnpn dev** to start
+ run **pnpn test** to run tests
+ run **pnpn storybook** to run storybook

This project also has storybook, to start run **pnpn storybook**

## Key Features
+ **React Router Integration:** React Router for handling navigation.
+ **Data Fetching with React Query:** Uses React Query for efficient data fetching, caching, and updating the UI based on the data state (loading, error, success).
+ **Lazy Loading of Components:** Implemented Reacts lazy loading feature to enhance performance by loading pages only when needed.
+ **Custom Hooks for Data Management:** I've wrote custom hooks to encapsulate the logic for data fetching and management.
+ **TypeScript Support:** TypeScript for type safety.
+ **Styling and Layout:** Uses CSS modules for component styling, ensures styles are scoped and maintainable.

## External Packages Used
  + react-dropzone
  + react-icons
  + react-query
  + react-router-dom
  + axios
  + storybook
  + husky
  + eslint
  + lint-staged
  + prettier

## Code Quality Safeguard
For code quality and styling this project has pre-commit hooks setup to automatically check code as it is commited. If there are errors then it is rejected. This is achieved using the following packages:
+ husky
+ elint
+ prettier
+ lint-staged

The commits are automatically formatted as well using prettier to ensure consistency. Here's an example of some broken code and what it looks like:

<img width="660" alt="Screenshot 2023-12-15 at 08 25 44" src="https://github.com/akeamwoods/purrfect/assets/19963177/42570a08-f6f0-472b-91e4-0b686e9987cc">

and when we try and commit:

<img width="517" alt="Screenshot 2023-12-15 at 08 24 56" src="https://github.com/akeamwoods/purrfect/assets/19963177/f07b4526-00ea-4d87-ab03-20983ae8c8fa">

## Storybook

I am a big advocate for maintainability, and keeping components clean and resuable. I've added storybook to this project to demonstrate this:

<img width="1000" alt="Screenshot 2023-12-15 at 08 28 39" src="https://github.com/akeamwoods/purrfect/assets/19963177/b65eee58-c89e-4c6e-85b3-48ec37fe0608">

As you can see, storybook allows us to visually inspect/test all the props of the Card component in complete isolation from the rest of the application, allowing me to live update props.

## Testing
I have provided tests for the CatCard component using jest and react-testing-library. 

<img width="569" alt="Screenshot 2023-12-15 at 10 46 14" src="https://github.com/akeamwoods/purrfect/assets/19963177/320ccb4e-d6f2-46b7-b6c6-13b68389a773">


## Performance Considerations
Obviously performance is important, and ensuring the project is optimised can lead to significant differences in performance. In this project I have used memoisation where necessary to avoid duplicate re-renders. I have also added code splitting/lazy loading for the different routes, so this will have an impact on performance as not everything is loaded as one big chunk:

<img width="600" alt="Screenshot 2023-12-15 at 08 28 39" src="https://github.com/akeamwoods/purrfect/assets/19963177/27e28dc1-abc1-4e50-b5ab-0fa9188cac0b">

## Things to consider for further improvement:
+ Make use of react-query optimisitic updates and global state to decrease api calls
+ Pagination/virtualisation - At the moment we cap how much data is returned, however it would be good to implement a proper approach.
