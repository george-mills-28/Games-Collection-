# Fullstack Collection App

This repo is designed to provide space to code a fullstack app. It contains node modules and folders for databases, routes, API requests and React components that'll use React Query. Let's get going!

## Setup

### 0. Cloning and installation

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

    You may also want to start a new branch
    ```sh
    cd my-fullstack-collection
    npm i
    git checkout -b <branchname>
    npm run dev
    ```
  </details>

<details>
  <summary>More about using <code>npm</code> vs <code>npx</code></summary>

  - When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
</details>

---

## Requirements

### 1. Choosing your data set

- [ ] First, decide what you would like to keep a collection of. This could be a repo for keeping track of movies, books, gifs, cars, rocks, anything you fancy, but keep it simple!
  <details style="padding-left: 2em">
    <summary>More about your collection</summary>

    **Note:** the aim is to have some simple data. If you think you might need more than one database table, or have lots of details you want to store, how could you simplify the information you're keeping track of? Leave more complex data until later in the project. For example, I want to keep track of books that I want to read, ones that I have read, and ones that I own. To start with though, let's keep track of the books themselves. My data might look like:

    |id|title|author|
    |---|---|---|
    | 1 | Ready Player One | Ernest Cline |
    | 2 | Throwing Rocks at the Google Bus | Douglas Rushkoff |

Our first job is getting something showing on the front end from our database. Here's a list of steps in case they are useful. You can build in any order you like though ;)

## Back end

### 2. Building the database

- [ ] Design a database to store a list of your things (e.g. books)
- [ ] Build the migrations and seed data

### 3. Building the API
- [ ] Build an API (back end route) to get the information from your database
- [ ] Test your API with Thunder Client

## Front end

### 4. Setting the stage
- [ ] Build a React component with static html

### 5. Building the API client
- [ ] Build an API client in the front end to request the information from your routes

### 6. Querying Data 
- [ ] Write a query with the `useQuery` hook to fetch the collection data from the API
- [ ] Display the collection data you queried in a component (you may want to create a new component for this)

### 7. Create Data
- [ ] (Optional) Create a new component for your new collection item form
- [ ] Mutate data with the `useMutation` hook to create a new collection item via the API 

### 8. Delete Data
- [ ] Mutate data with the `useMutation` hook to delete an exisiting collection item via the API (you may want to add this to your collection display component)

### 9. Update Data
- [ ] (Optional) Create a new component for your update collection item form
- [ ] Mutate data with the `useMutation` hook to update an exisiting collection item via the API 

---

## Stretch

<details>
  <summary>More about stretch challenges</summary>
  
  - Forms can be tough to build accessibly. First ensure all parts of your form can be reached and used with keyboard-only navigation. Then test your form page with the WAVE browser extension, and fix any accessibility issues it detects
  - Is there any complex data you chose to not include earlier or any way you could expand this dataset?
    - You might have some other information (e.g. unread books vs. read books) that should be included in your database design, and this may require adjusting your database design
  - Could you add an external API (maybe an inspirational quote in the footer?)
  - If you haven't already, CSS!
</details>

---

## Submitting this Challenge for Marking
This challenge can be used for the following trello assessments:

- **WD03** - Forms
- **WD04** - Fullstack (**Note** - you will need to deploy this challenge to dokku to pass this trello assessment.)

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=my-fullstack-collection)


---

Create a stateful client-side application with an accessible form for user input
Description
This assessment is all about considerations that come along with more complex forms. In production applications you might build as a professional developer, forms with at least a couple of inputs are likely to be made up of multiple components. As a result, they will usually have state that's managed above the level of the individual component, and will often send the information in state somewhere else in the application.

Here, we're concerned with a form that lets you manipulate that state in different ways (for example adding, deleting, and editing). And accessibility is still important, so let's take it a step further and check for keyboard access!

Exercises you could use for this are:

todo-fullstack

my-fullstack-collection

Tips
Check for accessibility by using the WAVE browser extension while viewing the page containing the form (correct the errors, contrast errors, and alerts), and by navigating the form page entirely by keyboard.

Learning objective(s)
Build and deploy accessible interactive web applications using full-stack architecture, modern frameworks and dependency management

Implement and manage application-level state with tools appropriate to the framework

Required
Yes.


Show less
Competency requirements
Delete
0%
I am managing state for multiple child components in a single JS object or array (using technologies such as: prop drilling, React query, React contexts, cookies, or local storage)

I have built at least two ways for users to modify the state (adding and deleting, for example)

I have built an accessible form that includes at least one text input and one button


---


Create and deploy a rich full-stack application using a modern framework
Exercises you could use for this include:

todo-fullstack

my-fullstack-collection
- OR any other single example where you alone have done all the steps listed below in the checklist

Important! - this requires you to have completed the full cycle of interactions within the app, so must be completed on a solo branch in a single exercise or repo to show the full interaction

Learning objective(s)
Build and deploy accessible interactive web applications using full-stack architecture, modern frameworks and dependency management

Use technologies needed for complex interactions such as databases, APIs, and authentication

Implement and manage application-level state with tools appropriate to the framework

Required
Yes.


Show less
Competency requirements
Delete
0%
Data can be read from and written to a SQLite3 database

Data can be accessed and altered via a JSON API

React is used to display data and allow users to alter data via API

State is being managed on the front end, above the level of individual components (using technologies such as: prop drilling, React Query, React contexts, cookies, or local storage)

I have deployed the web application to a publicly available host

