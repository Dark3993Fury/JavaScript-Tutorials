// Advanced JavaScript Concepts: Object-Oriented Programming

// =========================
// 1. UNDERSTANDING OBJECTS AND PROTOTYPES
// =========================


/*
+-------------------+
|   Object          |
|   Constructor     |
+-------------------+
          |
          | creates
          v
+-------------------+
|   Prototype       |
|   (e.g., Person)  |
+-------------------+
          |
          | inherits
          v
+-------------------+
|   Instance        |
|   (e.g., myFather)|
+-------------------+

### Explanation of the Diagram

1. **Object Constructor**: This is a function that creates objects. For example, `function Person(first, last) { ... }`.
2. **Prototype**: Each constructor has a prototype object where properties and methods can be defined. For instance, `Person.prototype.nationality = "English";`.
3. **Instance**: When you create an object using the constructor (e.g., `let myFather = new Person("John", "Doe");`), this object is an instance that inherits from the prototype.

## Difference Between Prototype and Instance

- **Prototype**:
  - Acts as a blueprint for creating objects.
  - Contains shared properties and methods that can be inherited by instances.
  - Example: `Person.prototype` can have methods like `name()` which all instances can access.

- **Instance**:
  - A specific object created from a constructor function.
  - Has its own properties and can access shared methods from its prototype.
  - Example: `myFather` is an instance of `Person`, with its own unique properties like `firstName` and `lastName`.

This distinction is crucial for understanding how inheritance works in JavaScript, allowing for efficient memory usage by sharing methods through prototypes while maintaining unique data in instances.
*/


// (a) Creating and Using Objects
let person = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 30,
    greet: function () {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
  };
  
  // Accessing Object Properties
  console.log("First Name:", person.firstName);
  console.log("Age:", person.age);
  
  // Calling Object Methods
  person.greet();
  
  // (b) Understanding Prototypes
  
  // Prototypes are the mechanism by which JavaScript objects inherit features from one another.
  function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
  };
  
  const dog = new Animal("Dog");
  dog.speak(); // "Dog makes a sound."
  
  // Prototypal inheritance example
  const cat = Object.create(dog);
  cat.name = "Cat";
  cat.speak(); // "Cat makes a sound."
  
  // =========================
  // 2. CLASSES AND INHERITANCE
  // =========================
  
  // (a) Defining Classes
  class Vehicle {
    constructor(type, wheels) {
      this.type = type;
      this.wheels = wheels;
    }
  
    describe() {
      console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
    }
  }
  
  // Creating Instances
  const car = new Vehicle("Car", 4);
  car.describe(); // "This is a Car with 4 wheels."
  
  const bike = new Vehicle("Bike", 2);
  bike.describe(); // "This is a Bike with 2 wheels."
  
  // (b) Inheritance in Classes
  class ElectricVehicle extends Vehicle {
    constructor(type, wheels, batteryCapacity) {
      super(type, wheels); // Call the parent class constructor
      this.batteryCapacity = batteryCapacity;
    }
  
    describeBattery() {
      console.log(`This ${this.type} has a battery capacity of ${this.batteryCapacity} kWh.`);
    }
  }
  
  const tesla = new ElectricVehicle("Electric Car", 4, 75);
  tesla.describe(); // "This is a Electric Car with 4 wheels."
  tesla.describeBattery(); // "This Electric Car has a battery capacity of 75 kWh."
  
  // =========================
  // PRACTICAL EXAMPLES
  // =========================

  // Example 1:  Prototypes in JavaScript
  /* Define a constructor function - Constructor Function: The Person function serves as a blueprint for creating objects. When called with the new keyword,
  it initializes properties like name and age.
  Prototype Method: The greet method is added to Person.prototype, allowing all instances of Person to share this method without creating multiple copies.
  Instance Creation: The line const john = new Person('John', 30); creates a new instance of Person. This instance has its own properties (name and age) 
  but shares the greet method from the prototype.
  */  
  
  function Person(name, age) {
        this.name = name; // Instance property
        this.age = age;   // Instance property
  }

  // Add a method to the Person prototype
  Person.prototype.greet = function() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  };

  // Create an instance of Person
  const john = new Person('John', 30);

  // Access instance properties
  console.log(john.name); // Output: John

  // Call the greet method from the prototype
  john.greet(); // Output: Hi, my name is John and I'm 30 years old.

  
  // Example 2: Bank Account Class
  class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds!");
      } else {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      }
    }
  }
  
  const account = new BankAccount("John Doe", 500);
  account.deposit(200);
  account.withdraw(100);
  account.withdraw(700);
  
  // Example 3: Shape and Circle Inheritance
  class Shape {
    constructor(name) {
      this.name = name;
    }
  
    describe() {
      console.log(`This is a ${this.name}.`);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super("Circle"); // Call parent constructor
      this.radius = radius;
    }
  
    calculateArea() {
      const area = Math.PI * this.radius * this.radius;
      console.log(`The area of this ${this.name} is ${area.toFixed(2)}.`);
    }
  }
  
  const circle = new Circle(5);
  circle.describe(); // "This is a Circle."
  circle.calculateArea(); // "The area of this Circle is 78.54."
  
  // =========================
  // CONCLUSION
  // =========================
  // This section covered objects, prototypes, classes, and inheritance.
 


  // Advanced JavaScript Concepts: Asynchronous JavaScript

// =========================
// 1. UNDERSTANDING ASYNCHRONOUS JAVASCRIPT
// =========================

/*
JavaScript is single-threaded, meaning it executes code sequentially on one thread.
However, real-world applications often require tasks like fetching data from a server
or waiting for user input without freezing the main program. Asynchronous programming
allows these tasks to run without blocking the rest of the code.

KEY TERMS:
- **Synchronous**: Tasks are executed sequentially, one after another.
- **Asynchronous**: Tasks can be paused and resumed, allowing other tasks to run.
*/

// =========================
// 2. CALLBACKS
// =========================
/*
Callbacks are functions passed as arguments to other functions, executed after an asynchronous operation completes.
*/

// Example: Callback Function
testAsyncOperation = (message, callback) => {
    console.log("Starting operation...");
    setTimeout(() => {
      console.log(message);
      callback(); // Invoking the callback function
    }, 2000); // Simulate 2-second delay
  };
  
  // Usage
  testAsyncOperation("Operation Complete!", () => {
    console.log("Callback executed.");
  });
  
  // Limitations:
  // Callbacks can lead to "callback hell"—nested callbacks that make the code hard to read and maintain.
  
  // =========================
  // 3. PROMISES
  // =========================
  /*
  Promises are objects representing the eventual completion or failure of an asynchronous operation.
  A promise can be in one of three states:
  - **Pending**: Initial state, neither fulfilled nor rejected.
  - **Fulfilled**: Operation completed successfully.
  - **Rejected**: Operation failed.
  */
  
  // Example: Promise Creation and Usage
  const fetchData = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully."); // Fulfill the promise
      } else {
        reject("Failed to fetch data."); // Reject the promise
      }
    }, 3000); // Simulate 3-second delay
  });
  
  // Handling Promises
  fetchData
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  
  // =========================
  // 4. ASYNC/AWAIT
  // =========================
  /*
  Async/Await is syntactic sugar for promises, making asynchronous code look and behave more like synchronous code.
  - **async**: Declares a function as asynchronous.
  - **await**: Pauses execution until a promise is resolved.
  */
  
  // Example: Async/Await
  async function asyncOperation() {
    try {
      console.log("Fetching data...");
      const result = await fetchData; // Wait for the promise to resolve
      console.log("Result:", result);
    } catch (error) {
      console.log("Caught an error:", error);
    }
  }
  asyncOperation();
  
  // =========================
  // 5. ERROR HANDLING WITH TRY/CATCH
  // =========================
  /*
  Errors in asynchronous code must be handled to prevent runtime crashes.
  Promises and async/await provide mechanisms to handle errors gracefully.
  - Use `.catch()` with promises.
  - Use `try/catch` blocks with async/await.
  */
  
  // Example: Error Handling with Promises
  const unreliableFetch = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Randomly succeed or fail
    setTimeout(() => {
      success ? resolve("Data received.") : reject("Network Error.");
    }, 1000);
  });
  
  unreliableFetch
    .then((data) => console.log("Promise Resolved:", data))
    .catch((error) => console.error("Promise Rejected:", error));
  
  // Example: Error Handling with Async/Await
  async function fetchDataWithErrorHandling() {
    try {
      const response = await unreliableFetch;
      console.log("Async/Await Success:", response);
    } catch (error) {
      console.error("Async/Await Error:", error);
    }
  }
  fetchDataWithErrorHandling();
  
  // =========================
  // ASCII FLOWCHART: ASYNC/AWAIT FLOW
  // =========================
  /*
  +------------------------+
  | Start Function         |
  +------------------------+
             |
             v
  +------------------------+
  | Await Promise          |
  +------------------------+
             |
             v
  +------------------------+
  | Promise Resolved?      |
  +------------------------+
        /                  \
       v                    v
  +----------------+   +-----------------+
  | Handle Success |   | Handle Error    |
  +----------------+   +-----------------+
  */
  
  // =========================
  // PRACTICAL EXAMPLES
  // =========================
  
  // Example 1: Simulating API Fetch with Async/Await
  const mockApiFetch = async (url) => {
    console.log(`Fetching data from ${url}...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3
          ? resolve({ data: "Sample Data" })
          : reject("API Error");
      }, 2000);
    });
  };
  
  (async function testApiFetch() {
    try {
      const data = await mockApiFetch("https://example.com");
      console.log("API Data:", data);
    } catch (error) {
      console.error("API Fetch Failed:", error);
    }
  })();
  
  // Example 2: Chaining Promises for Sequential Operations
  mockApiFetch("https://example.com")
    .then((data) => {
      console.log("First API Response:", data);
      return mockApiFetch("https://example2.com"); // Chain another fetch
    })
    .then((data) => {
      console.log("Second API Response:", data);
    })
    .catch((error) => {
      console.error("Error in API chain:", error);
    });
  
  // =========================
  // CONCLUSION
  // =========================
  // This section explained asynchronous JavaScript, including callbacks, promises,
  // async/await, and error handling with practical examples.
  

  // Working with the DOM in JavaScript

// =========================
// 1. INTRODUCTION TO THE DOM
// =========================
/*
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can manipulate the structure, style, and content.

KEY CONCEPTS:
- **Node**: Each element in the DOM is a node (e.g., elements, attributes, text).
- **Tree Structure**: The DOM is structured as a tree with parent-child relationships.

ASCII TREE REPRESENTATION OF DOM:
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
// 2. SELECTING ELEMENTS
// =========================
/*
JavaScript provides various methods to select and manipulate DOM elements. Common methods include:
- **getElementById**: Selects an element by its ID.
- **querySelector**: Selects the first element matching a CSS selector.
- **querySelectorAll**: Selects all elements matching a CSS selector.
*/

// Example: Selecting Elements
const title = document.getElementById("main-title");
console.log("Selected by ID:", title);

const firstParagraph = document.querySelector("p");
console.log("First paragraph:", firstParagraph);

const allParagraphs = document.querySelectorAll("p");
console.log("All paragraphs:", allParagraphs);

// =========================
// 3. MODIFYING ELEMENTS
// =========================
/*
After selecting elements, you can modify their content and styles:
- **innerHTML**: Sets or retrieves the HTML content inside an element.
- **style**: Modifies inline CSS styles.
*/

// Example: Modifying Content and Style
const heading = document.getElementById("main-title");
heading.innerHTML = "Updated Title!"; // Change text content
heading.style.color = "blue"; // Change text color
heading.style.fontSize = "2em"; // Change font size

const paragraph = document.querySelector(".description");
paragraph.style.backgroundColor = "lightyellow"; // Change background color

// =========================
// 4. EVENT HANDLING
// =========================
/*
JavaScript can handle user interactions through events. Commonly used methods include:
- **addEventListener**: Adds an event listener to an element.
- **removeEventListener**: Removes an event listener from an element.

Common event types:
- `click`: Triggered when an element is clicked.
- `mouseover`: Triggered when the mouse hovers over an element.
- `keyup`: Triggered when a key is released.
*/

// Example: Adding Event Listeners
const button = document.getElementById("action-button");

// Add a click event listener
button.addEventListener("click", () => {
  alert("Button was clicked!");
});

// Add a hover event listener
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "lightgreen";
});

// Add a keyup event listener on an input field
const inputField = document.getElementById("text-input");
inputField.addEventListener("keyup", (event) => {
  console.log("Input value:", event.target.value);
});

// =========================
// ASCII FLOWCHART: EVENT HANDLING
// =========================
/*
+--------------------+
| User Interaction   |
+--------------------+
          |
          v
+-----------------------+
| Event Listener Trigger|
+-----------------------+
          |
          v
+-----------------------+
| Callback Function Run |
+-----------------------+
*/

// =========================
// PRACTICAL EXAMPLES
// =========================

// Example 1: Toggle Content Visibility
const toggleButton = document.getElementById("toggle-button");
const content = document.getElementById("hidden-content");

// Initially hide the content
content.style.display = "none";

// Toggle visibility on button click
toggleButton.addEventListener("click", () => {
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});

// Example 2: Form Validation
const form = document.getElementById("my-form");
form.addEventListener("submit", (event) => {
  const input = document.getElementById("name-input").value;
  if (input.trim() === "") {
    alert("Name cannot be empty!");
    event.preventDefault(); // Prevent form submission
  }
});

// =========================
// CONCLUSION
// =========================
// This section covered DOM manipulation, including selecting elements, modifying content and style, 
// and handling user events. These techniques are foundational for creating interactive web pages.

  