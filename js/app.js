/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const mainContainer = document.querySelector("main");
const containerDiv = document.querySelector("div.landing__container");
const yourActiveClass = document.querySelector(".your-active-class");
const oddSection = document.querySelectorAll(
  "section:nth-of-type(odd) .landing__container"
);
const section3 = document.querySelector("#section3");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
section3.classList.add("your-active-class");

// Select the section3 container
const section3Container = document.querySelector(
  "#section3 .landing__container"
);

// Function to remove the ::after pseudo-element by setting its content to none
function removePseudoElement() {
  // Check if section3Container is found
  if (section3Container) {
    // Add a CSS rule to the document's style sheet to set the ::after content to none
    const style = document.createElement("style");
    style.textContent = `
            #section3 .landing__container::after {
                content: none !important;
            }
        `;
    document.head.appendChild(style);
  }
}

// Call the function to remove the pseudo-element
removePseudoElement();

const section4 = document.createElement("section");
section4.setAttribute("id", "section4");
section4.setAttribute("data-nav", "section4");
section4.classList.add("your-active-class");

const section4Div = document.createElement("div");
section4Div.classList.add("landing__container");

const section4Header = document.createElement("h2");
section4Header.textContent = "Section 4";

section4Div.appendChild(section4Header);

const section4Para = document.createElement("p");
section4Para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            fermentum metus faucibus lectus pharetra dapibus. Suspendisse
            potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
            lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
            convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
            eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
            nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
            lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
            tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
            vitae elit. Integer nec libero venenatis libero ultricies molestie
            semper in tellus. Sed congue et odio sed euismod.`;

const section4Para2 = document.createElement("p");
section4Para2.textContent = `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
            gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
            Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
            consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
            elementum tortor mollis non.`;

section4Div.appendChild(section4Para);
section4Div.appendChild(section4Para2);

section4.appendChild(section4Div);

mainContainer.appendChild(section4);

const section4Container = document.querySelector(
  "#section4 .landing__container"
);

function pseudo4Element() {
  if (section4Container) {
    const style4 = document.createElement("style");
    style4.textContent = `
    #section4 .landing__container::after {
    width: 0;
    height: 0;
    }
    `;
    document.head.appendChild(style4);
  }
}

pseudo4Element();

const section5 = document.createElement("section");
section5.setAttribute("id", "section5");
section5.setAttribute("data-nav", "section5");

const section5Container = document.createElement("div");
section5Container.classList.add("landing__container");
section5.appendChild(section5Container);

const section5Header = document.createElement("h2");
section5Header.textContent = "Section 5";
section5Container.appendChild(section5Header);

const section5Para = document.createElement("p");
section5Para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            fermentum metus faucibus lectus pharetra dapibus. Suspendisse
            potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
            lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
            convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
            eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
            nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
            lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
            tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
            vitae elit. Integer nec libero venenatis libero ultricies molestie
            semper in tellus. Sed congue et odio sed euismod.`;

const section5Para2 = document.createElement("p");
section5Para2.textContent = `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
            gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
            Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
            consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
            elementum tortor mollis non.`;

section5Container.appendChild(section5Para);
section5Container.appendChild(section5Para2);

mainContainer.appendChild(section5);

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");

/**
 * Build the navigation menu dynamically based on sections
 */
function buildNavMenu() {
  //Loop through the sections
  sections.forEach((section) => {
    // Create a list item
    const listItem = document.createElement("li");
    // Create an anchor inside each list item
    const listAnchor = document.createElement("a");
    // Add class for styling
    listAnchor.className = "menu__link";
    // Set link text based on data-nav attribute
    listAnchor.textContent = section.getAttribute("data-nav");
    // Set link target to the section's id
    listAnchor.href = `#${section.id}`;
    // Append the link to the list item, then the list item to the navigation list
    listItem.appendChild(listAnchor);
    navList.appendChild(listItem);
    // Optional: Scroll smoothly to section when link is clicked
    listAnchor.addEventListener("click", (event) => {
      // Prevent the default jump
      event.preventDefault();
      // Scroll smoothly to the section
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}

navList.style.backgroundColor = "#800";

// Call the function to build the menu
buildNavMenu();

// Hide fixed navigation bar while not scrolling (it should still be present on page load)
// Declare a variable to hold the timer
let timer;
// Add an event listener for the scroll event on the window
window.addEventListener("scroll", () => {
  // Clear the timeout if it has been set already
  clearTimeout(timer);
  // Show the navbar by setting the display to block
  navList.style.display = "block";
  // Set a timeout to hide the navbar after 5 seconds of no scrolling
  timer = setTimeout(() => {
    // Hide the navbar by setting the display to none
    navList.style.display = "none";
  }, 5000);
});

// Add class 'active' to section when near top of viewport

// Detect the element location relative to the viewport using .getBoundingClientRect()(opens in a new tab) built-in function.

// Select all sections
sections.forEach((section) => {
  // Get the bounding rectangle of the section
  const rect = section.getBoundingClientRect();
  // Check if the section is in the viewport
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // Add the active class to the section
    section.classList.add("your-active-class");
  } else {
    // Remove the active class from the section
    section.classList.remove("your-active-class");
  }
});

// Select all sections to observe
// const sections = document.querySelectorAll("section");

// Callback function for the IntersectionObserver
function handleIntersect(entries) {
  // Loop through the entries
  entries.forEach((entry) => {
    // Check if the entry is in view
    if (entry.isIntersecting) {
      // Add the active class to the section in view
      entry.target.classList.add("your-active-class");

      // Remove the active class from other sections
      // Loop through the sections
      sections.forEach((section) => {
        // Check if the section is not the one in view
        if (section !== entry.target) {
          // Remove the active class
          section.classList.remove("your-active-class");
        }
      });
    }
  });
}
// Set up the IntersectionObserver
// Create the observer and set the callback function
const observer = new IntersectionObserver(handleIntersect, {
  // Options for the observer (all are optional)
  root: null, // Use the viewport as the container
  rootMargin: "0px", // Margin around the viewport
  threshold: 0.6, // Trigger when 60% of the section is in view
});
// Observe each section
// Loop through the sections
sections.forEach((section) => {
  // Observe the section
  observer.observe(section);
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
