# Challenge Project: Appointment Planner

## Codecademy Project

Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

### Project Goals

In this project, you will use functional React components to create an app that manages contacts and appointments. The app consists of two pages: one to view and add contacts and one to view and add appointments.
You will work with stateful and stateless functional React components using hooks. The requirements section will walk through implementing the app from the topmost component down. If you would like to implement it in a different order, feel free to do what is comfortable for you.

### Requirements 

#### <code>App</code>

- Keep track of the contacts and appointments data, each being an array of objects
- Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
- Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments
- Pass the array of contacts and the appropriate callback function as props to the <code>ContactsPage</code> component
- Pass the appointments array, contacts array, and the add appointment function as props to the <code>AppointmentsPage</code> component

#### <code>ContactsPage</code>

- Receive two props:
    - The current list of contacts
    - A callback function for adding a new contact
- Keep track of three local state values: the current name, phone, and email entered into the form
- Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
- Only add a new contact on form submission if it does not duplicate an existing contact’s name
- A successful submission should clear the form
- In the Add Contact section, render a <code>ContactForm</code> with the following passed via <code>props</code>:
    - local state variables
    - local state variable setter functions
    - <code>handleSubmit</code> callback function
- In the Contacts section, render a <code>TileList</code> with the contact array passed via <code>props</code>

#### <code>ContactForm</code>

- Render a <code>form</code> with:
    - The <code>onSubmit</code> attribute set
    - 3 controlled ```<input>``` elements, one for each piece of contact data
    - A submit button
- Include a <code>pattern</code> attribute to the phone ```<input>``` with a regex that matches the phone locale of your preference
