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
- Pass the appointments array, contacts array, and the add appointment function as props to the <code>AppointmentsPage</code> component.

#### <code>ContactsPage</code>

- Receive two props:
    - The current list of contacts
    - A callback function for adding a new contact
- Keep track of three local state values: the current name, phone, and email entered into the form
- Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
- Only add a new contact on form submission if it does not duplicate an existing contact’s name
- A successful submission should clear the form
- In the **Add Contact** section, render a <code>ContactForm</code> with the following passed via <code>props</code>:
    - local state variables
    - local state variable setter functions
    - <code>handleSubmit</code> callback function
- In the **Contacts** section, render a <code>TileList</code> with the contact array passed via <code>props</code>.

#### <code>ContactForm</code>

- Render a <code>form</code> with:
    - The <code>onSubmit</code> attribute set
    - 3 controlled ```<input>``` elements, one for each piece of contact data
    - A submit button
- Include a <code>pattern</code> attribute to the phone ```<input>``` with a regex that matches the phone locale of your preference.

#### <code>TileList</code>

- Receive one prop:
    - An array of objects to render as a list
- Use the array passed via <code>props</code> to iteratively render <code>Tile</code> components, using each object in the array to pass the <code>name</code> and <code>description</code> props to each rendered <code>Tile</code> component

The requirements for the <code>TileList</code> component are generalized and allow it to be shared by the <code>ContactsPage</code> and <code>AppointmentsPage</code> components. As long as an array of objects with either the contact data or appointments data is passed then the content will be handled appropriately.

#### <code>Tile</code>

- Receive two props:
    - name
    - description
- Render a ```<p>``` element with the <code>name</code> prop. Give this element a <code>className</code> of <code>"tile-title"</code>
- Iterate over the values in the <code>description</code> object, passed in via props, and render a ```<p>``` element for each value and give each a <code>className</code> of <code>"tile"</code>.

Just like the <code>TileList</code> component, the <code>Tile</code> component is generalized to work with data from any object. This allows it to be used in both the <code>ContactsPage</code> and <code>AppointmentsPage</code> components.

#### <code>AppointmentsPage</code>

- Receive three props:
    - The current list of appointments
    - The current list of contacts
    - A callback function for adding a new appointment
- Keep track of four local state variables, the current name, contact, date, and time entered into the form
- Add a new appointment on form submission
- Clear the form on submission
- In the **Add Appointment** section, render an <code>AppointmentForm</code> with the following passed via <code>props</code>:
    - local state variables
    - local state variable setter functions
    - <code>handleSubmit</code> callback function
- In the **Appointments** section, render a <code>TileList</code> with the appointment array passed via <code>props</code>.

#### <code>AppointmentForm</code>

- Render a <code>form</code> with:
    - The <code>onSubmit</code> attribute set to the callback function passed in via <code>props</code>
    - 3 controlled <code>input</code> components, to be used for the name, date and time appointment data
    - A <code>ContactPicker</code> component with the contacts list passed in via props
    - A submit button
- Use <code>getTodayString()</code> to set the <code>min</code> attribute of the date <code>input</code>.

#### <code>ContactPicker</code>

- Receive 4 props:
    - The array of contacts
    - A callback function to handle when the <code>onChange</code> event is triggered
    - value
    - name
- Render a <code>select</code> element with the <code>onChange</code> attribute set to the callback passed in via props, a <code>value</code> attribute set to the <code>value</code> prop, and a <code>name</code> attribute set to the <code>name</code> prop.
- Add a default <code>option</code> element with the text “No Contact Selected” and a <code>value</code> attribute of <code>""</code>.
- Iteratively add <code>option</code> elements using the contact names from the array passed in via props.