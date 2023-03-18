# NodeJS RESTful API

## NodeJS Backend Service(s):

### Backend Service return random user data **/user**

-   Return up to 5000 [RandomUser](https://randomuser.me/api/)s.
-   Include/Exclude certain data fields which can SAVE time by not using intensive CPU fields.

    -   gender
    -   name
    -   location
    -   email
    -   and many more...

    //ONLY return name,gender,nat
    `https://randomuser.me/api/?inc=gender,name,nat`

    //EXCLUDE login
    `https://randomuser.me/api/?exc=login`

    // Download results with the correct format extension
    `https://randomuser.me/api/?results=100&nat=us,gb&format=csv&dl`

### Backend Service to determine gender, age, and nationality based on a given name

-   **/gender** - Let your name determine your gender? []

-   FREE up to 1000 names/day

##### Resources used

-   [Node](https://nodejs.org/en/)
-   [Npm](https://www.npmjs.com)
-   [Genderize](https://genderize.io)
-   [Nationalize](https://nationalize.io)
-   [Age](https://agify.io)
-   [Express](https://expressjs.com)
-   [Axios](https://axios-http.com)
-   [Jest](https://jestjs.io)
-   [Nodemon](https://www.npmjs.com/package/nodemon)
