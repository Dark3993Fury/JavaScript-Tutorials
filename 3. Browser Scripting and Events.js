// Understanding the Document Object Model (DOM)

// =========================
// 1. WHAT IS THE DOM?
// =========================
/*
The Document Object Model (DOM) is a programming interface for HTML and XML documents.
- It represents the structure of a document as a tree of nodes.
- JavaScript can interact with this tree to modify content, structure, and styles dynamically.

KEY CONCEPTS:
- **Node**: Every element, attribute, or piece of text in the DOM is a node.
- **Tree Structure**: The DOM organizes these nodes hierarchically, forming a tree.

ASCII REPRESENTATION:
<html>
|-- <head>
|   |-- <title>
|-- <body>
    |-- <div>
    |   |-- <h1>
    |   |-- <p>
    |-- <footer>
*/

// =========================
// 2. NAVIGATING THE DOM
// =========================
/*
You can navigate through the DOM tree using properties such as:
- **parentNode**: Access the parent of a node.
- **childNodes**: Get all child nodes of a node.
- **firstChild**: Get the first child node.
- **lastChild**: Get the last child node.
- **nextSibling** and **previousSibling**: Navigate between sibling nodes.
*/

// Example: Navigating the DOM
const body = document.body;
console.log("Parent of body:", body.parentNode);
console.log("First child of body:", body.firstChild);
console.log("All child nodes of body:", body.childNodes);

// =========================
// 3. SELECTING ELEMENTS
// =========================
/*
JavaScript provides methods to select elements in the DOM:
- **getElementById**: Selects an element by its ID.
- **getElementsByTagName**: Selects all elements of a specific tag.
- **getElementsByClassName**: Selects all elements with a specific class.
- **querySelector**: Selects the first element matching a CSS selector.
- **querySelectorAll**: Selects all elements matching a CSS selector.
*/

// Example: Selecting Elements
const mainTitle = document.getElementById("main-title");
const allParagraphs = document.getElementsByTagName("p");
const firstDiv = document.querySelector("div");
console.log("Main Title:", mainTitle);
console.log("Paragraphs:", allParagraphs);
console.log("First Div:", firstDiv);

// =========================
// 4. MODIFYING THE DOM
// =========================
/*
After selecting elements, you can modify their content and attributes:
- **innerHTML**: Change the HTML content inside an element.
- **textContent**: Change only the text content.
- **setAttribute**: Change an attribute of an element.
*/

// Example: Modifying Elements
const header = document.getElementById("main-title");
header.innerHTML = "Updated Header"; // Change HTML content
header.setAttribute("class", "highlighted"); // Change class attribute

const paragraph = document.querySelector("p");
paragraph.textContent = "This is a new paragraph."; // Change text content

// =========================
// 5. ADDING AND REMOVING ELEMENTS
// =========================
/*
You can dynamically add or remove elements using methods like:
- **createElement**: Create a new element.
- **appendChild**: Add an element as a child.
- **removeChild**: Remove a child element.
- **replaceChild**: Replace one child element with another.
*/

// Example: Adding and Removing Elements
const newDiv = document.createElement("div");
newDiv.textContent = "This is a dynamically added div.";
document.body.appendChild(newDiv); // Add the new div to the body

const oldParagraph = document.querySelector("p");
document.body.removeChild(oldParagraph); // Remove the first paragraph

// =========================
// 6. DOM EVENTS
// =========================
/*
The DOM allows you to respond to user interactions through events. Common event types include:
- **click**: Triggered when an element is clicked.
- **mouseover**: Triggered when the mouse hovers over an element.
- **keyup**: Triggered when a key is released.
*/

// Example: Adding Event Listeners
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
  alert("Button was clicked!");
});

// =========================
// 7. FLOWCHART OF DOM INTERACTIONS
// =========================
/*
+-----------------------+
|   Select Element      |
+-----------------------+
          |
          v
+-----------------------+
| Modify or Add Element |
+-----------------------+
          |
          v
+-----------------------+
|     Add Event         |
+-----------------------+
*/

// =========================
// 8. CONCLUSION
// =========================
/*
The DOM is a powerful interface that allows JavaScript to create dynamic, interactive web pages. By mastering DOM navigation, element manipulation, and event handling, you can build engaging user experiences.
*/


// Understanding the Document Object Model (DOM)

// =========================
// 1. WHAT IS THE DOM?
// =========================
/*
The Document Object Model (DOM) is a programming interface for HTML and XML documents.
- It represents the structure of a document as a tree of nodes.
- JavaScript can interact with this tree to modify content, structure, and styles dynamically.

KEY CONCEPTS:
- **Node**: Every element, attribute, or piece of text in the DOM is a node.
- **Tree Structure**: The DOM organizes these nodes hierarchically, forming a tree.

ASCII REPRESENTATION:
<html>
|-- <head>
|   |-- <title>
|-- <body>
    |-- <div>
    |   |-- <h1>
    |   |-- <p>
    |-- <footer>
*/

// =========================
// 2. NAVIGATING THE DOM
// =========================
/*
You can navigate through the DOM tree using properties such as:
- **parentNode**: Access the parent of a node.
- **childNodes**: Get all child nodes of a node.
- **firstChild**: Get the first child node.
- **lastChild**: Get the last child node.
- **nextSibling** and **previousSibling**: Navigate between sibling nodes.
*/

// Example: Navigating the DOM
const body = document.body;
console.log("Parent of body:", body.parentNode);
console.log("First child of body:", body.firstChild);
console.log("All child nodes of body:", body.childNodes);

// =========================
// 3. SELECTING ELEMENTS
// =========================
/*
JavaScript provides methods to select elements in the DOM:
- **getElementById**: Selects an element by its ID.
- **getElementsByTagName**: Selects all elements of a specific tag.
- **getElementsByClassName**: Selects all elements with a specific class.
- **querySelector**: Selects the first element matching a CSS selector.
- **querySelectorAll**: Selects all elements matching a CSS selector.
*/

// Example: Selecting Elements
const mainTitle = document.getElementById("main-title");
const allParagraphs = document.getElementsByTagName("p");
const firstDiv = document.querySelector("div");
console.log("Main Title:", mainTitle);
console.log("Paragraphs:", allParagraphs);
console.log("First Div:", firstDiv);

// =========================
// 4. MODIFYING THE DOM
// =========================
/*
After selecting elements, you can modify their content and attributes:
- **innerHTML**: Change the HTML content inside an element.
- **textContent**: Change only the text content.
- **setAttribute**: Change an attribute of an element.
*/

// Example: Modifying Elements
const header = document.getElementById("main-title");
header.innerHTML = "Updated Header"; // Change HTML content
header.setAttribute("class", "highlighted"); // Change class attribute

const paragraph = document.querySelector("p");
paragraph.textContent = "This is a new paragraph."; // Change text content

// =========================
// 5. ADDING AND REMOVING ELEMENTS
// =========================
/*
You can dynamically add or remove elements using methods like:
- **createElement**: Create a new element.
- **appendChild**: Add an element as a child.
- **removeChild**: Remove a child element.
- **replaceChild**: Replace one child element with another.
*/

// Example: Adding and Removing Elements
const newDiv = document.createElement("div");
newDiv.textContent = "This is a dynamically added div.";
document.body.appendChild(newDiv); // Add the new div to the body

const oldParagraph = document.querySelector("p");
document.body.removeChild(oldParagraph); // Remove the first paragraph

// =========================
// 6. DOM EVENTS
// =========================
/*
The DOM allows you to respond to user interactions through events. Common event types include:
- **click**: Triggered when an element is clicked.
- **mouseover**: Triggered when the mouse hovers over an element.
- **keyup**: Triggered when a key is released.
*/

// Example: Adding Event Listeners
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
  alert("Button was clicked!");
});

// =========================
// 7. FLOWCHART OF DOM INTERACTIONS
// =========================
/*
+-----------------------+
|   Select Element      |
+-----------------------+
          |
          v
+-----------------------+
| Modify or Add Element |
+-----------------------+
          |
          v
+-----------------------+
|     Add Event         |
+-----------------------+
*/

// =========================
// 8. HANDLING USER EVENTS (CLICKS, FORM SUBMISSIONS)
// =========================
/*
User events allow JavaScript to respond to user actions such as clicks, typing, or submitting a form.

COMMON USER EVENTS:
- **click**: Triggered when an element is clicked.
- **dblclick**: Triggered when an element is double-clicked.
- **input**: Triggered when the value of an input field changes.
- **submit**: Triggered when a form is submitted.

EVENT HANDLING METHODS:
- **addEventListener(event, callback)**: Adds an event listener to an element.
- **event.preventDefault()**: Prevents the default action of an event (e.g., stopping a form from submitting).
*/

// Example: Handling Click Events
const clickButton = document.createElement("button");
clickButton.textContent = "Click Me";
document.body.appendChild(clickButton);

clickButton.addEventListener("click", () => {
  alert("You clicked the button!");
});

// Example: Handling Form Submissions
const form = document.createElement("form");
form.innerHTML = `
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <button type="submit">Submit</button>
`;
document.body.appendChild(form);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from reloading the page
  const name = document.getElementById("name").value;
  alert(`Form submitted! Name: ${name}`);
});

// =========================
// 9. CONCLUSION
// =========================
/*
By mastering user event handling, you can make your web applications more interactive and dynamic. Proper use of event listeners and handlers ensures a seamless user experience.
*/


// =========================
// CREATING DYNAMIC WEB PAGES
// =========================

// =========================
// 1. WHAT ARE DYNAMIC WEB PAGES?
// =========================
/*
Dynamic web pages are interactive and responsive pages that change content, structure, or appearance based on user actions or data fetched from a server. Unlike static pages, which remain constant, dynamic pages update in real-time.

KEY FEATURES OF DYNAMIC WEB PAGES:
- **Interactivity**: Respond to user actions like clicks, inputs, or gestures.
- **Dynamic Content**: Display information retrieved from servers or APIs.
- **Enhanced User Experience**: Offer personalized and responsive interfaces.

EXAMPLES:
- Updating a shopping cart in an e-commerce site without reloading the page.
- Displaying live weather data based on a user’s location.
*/

// =========================
// 2. BUILDING BLOCKS OF DYNAMIC WEB PAGES
// =========================
/*
Dynamic web pages rely on three main components:
1. **HTML**: Defines the structure of the web page.
2. **CSS**: Styles the appearance of the page.
3. **JavaScript**: Adds interactivity and dynamic behavior.

In addition to these, AJAX or Fetch API can be used to fetch data dynamically from a server.
*/

// =========================
// 3. MODIFYING CONTENT IN REAL-TIME
// =========================
/*
JavaScript enables real-time content modification using DOM manipulation.
- **innerHTML**: Replace the entire content inside an element.
- **textContent**: Update only the text inside an element.
- **appendChild/removeChild**: Add or remove elements dynamically.
- **style**: Change the appearance of elements dynamically.
*/

// Example: Real-Time Content Update
const dynamicDiv = document.createElement("div");
dynamicDiv.textContent = "Initial Content";
document.body.appendChild(dynamicDiv);

// Update content dynamically
setTimeout(() => {
  dynamicDiv.textContent = "Updated Content after 3 seconds";
}, 3000);

// =========================
// 4. CREATING ELEMENTS DYNAMICALLY
// =========================
/*
Dynamic elements are useful for creating interactive components such as lists, modals, and tables. The methods commonly used include:
- **createElement(tagName)**: Creates a new element.
- **setAttribute(attribute, value)**: Sets attributes like id, class, or src.
- **appendChild(childNode)**: Appends a new child to an existing element.
*/

// Example: Adding Dynamic List Items
const ul = document.createElement("ul");
const items = ["Item 1", "Item 2", "Item 3"];
items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// =========================
// 5. HANDLING EVENTS FOR INTERACTIVITY
// =========================
/*
Adding interactivity to dynamic web pages often involves event listeners:
- **click**: For buttons or links.
- **input**: For real-time feedback in form fields.
- **mouseover/mouseout**: For hover effects.
- **keyup/keydown**: For responding to keyboard actions.
*/

// Example: Interactive Button
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const message = document.createElement("p");
  message.textContent = "Button was clicked!";
  document.body.appendChild(message);
});

// =========================
// 6. DYNAMICALLY LOADING DATA USING FETCH API
// =========================
/*
Dynamic web pages often fetch data from a server or API to update content without refreshing the page. The **Fetch API** is commonly used for this purpose.
*/

// Example: Fetching Data Dynamically
const fetchDataButton = document.createElement("button");
fetchDataButton.textContent = "Fetch Data";
document.body.appendChild(fetchDataButton);

fetchDataButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      const dataDiv = document.createElement("div");
      dataDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
      document.body.appendChild(dataDiv);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

// =========================
// 7. USING CSS FOR DYNAMIC STYLING
// =========================
/*
JavaScript can modify CSS styles dynamically using the **style** property or by toggling classes.
*/

// Example: Dynamic Styling
const styleButton = document.createElement("button");
styleButton.textContent = "Change Style";
document.body.appendChild(styleButton);

styleButton.addEventListener("click", () => {
  dynamicDiv.style.color = "blue";
  dynamicDiv.style.fontSize = "20px";
  dynamicDiv.style.fontWeight = "bold";
});

// =========================
// 8. FLOWCHART OF DYNAMIC WEB PAGE CREATION
// =========================
/*
+-------------------------+
| Create Base HTML/CSS    |
+-------------------------+
           |
           v
+-------------------------+
| Add JavaScript for      |
| Dynamic Interactions    |
+-------------------------+
           |
           v
+-------------------------+
| Fetch Data/Modify DOM   |
| Based on User Actions   |
+-------------------------+
*/

// =========================
// 9. CONCLUSION
// =========================
/*
Dynamic web pages enhance user experience by making content interactive and responsive. By mastering DOM manipulation, event handling, and data fetching, you can build web applications that feel modern and engaging.
*/
