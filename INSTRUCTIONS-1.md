# Pig Scream Ice Cream — Initial Frontend Implementation

## Objective

Build the initial React frontend for our **Pig Scream Ice Cream** group project using the existing project files and the website mockup.

This is the first stage of frontend development. The goal is to establish the application's visual design, reusable components, functional navigation, and interactive product browsing experience.

**The application does not need to be fully functional yet.** However, it must render correctly in the browser, and the navigation, product cards, category filters, quantity counters, and modals should work locally.

**The Menu page is our highest priority.** It will be the primary customer-facing feature of the application, so pay particular attention to its appearance, usability, and component interactions.

Before making changes, inspect the existing project structure, components, assets, and relevant documentation.

Do not unnecessarily restructure the project. 

Please use the existing files and folders I have created.

## 1. Design Reference

Use the following image as the primary visual reference:

`frontend/src/assets/concept-menu-page.png`

Follow its overall aesthetic, including:

- Dark navy header and footer
- Blue and purple color scheme
- Ice cream drip design elements
- Rounded ice cream product cards
- Category navigation buttons
- Playful typography and styling

The concept image is a visual reference, not an asset to display as the entire page background. Recreate its appearance using actual React components and CSS.

Existing project-wide color variables are defined in:

`frontend/src/index.css`

**Use these existing CSS variables wherever possible.** Do not replace or duplicate the color palette.

### Image Assets

Use the following existing assets:

- `frontend/src/assets/logo.png` — Official application mascot/logo
- `frontend/src/assets/flying-pig.gif` — Flying pig animation for possible later use
- `frontend/src/assets/placeholer-image.jpg` — temporary placeholder image
- `frontend/public/favicon.ico` — Existing favicon


Replace the logos shown in the concept mockup with `logo.png`, particularly in the header and footer.

You may display the company name alongside the logo if needed to match the design.

Do not use the flying pig animation unless it serves a clear purpose in this initial design.

## 2. Component Structure

The project already contains most of the required component and page files.

**Pages:**
- `Home.jsx`
- `Menu.jsx`
- `About.jsx`

**Components:**
- `Header.jsx`
- `Navigation.jsx`
- `Footer.jsx`
- `Cart.jsx`
- `AuthUser.jsx`
- `CategoryNav.jsx`
- `ItemCard.jsx`
- `ItemDetails.jsx`

These should be organized under `frontend/src/pages/` and `frontend/src/components/`.

Note that there may be an older reference somewhere that still uses `IceCreamCard.jsx`. It has been renamed to **`ItemCard.jsx`**. Use the new name consistently throughout the application. Rename it appropriately if needed.

Implement functionality in the existing files whenever possible.

Additional files may be created if necessary, but keep the architecture simple and avoid unnecessary dependencies or abstractions.

## 3. Header.jsx

Create a reusable Header component that appears on every page.

Requirements:

- Match the aesthetics of the concept image.
- Display the official `logo.png`.
- Include the reusable `Navigation.jsx` component.
- Remain visually consistent when switching pages.

The header should be rendered through the shared application layout rather than being independently duplicated on every page.

## 4. Navigation.jsx

Create a functional navigation bar within the Header.

Navigation links:

| Label | Destination |
|---|---|
| Home | `Home.jsx` |
| Menu | `Menu.jsx` |
| About | `About.jsx` |
| Cart | Toggle `Cart.jsx` |

Requirements:

- All three page navigation links must work.
- The active page should be visually identifiable.
- Use a simple routing solution appropriate for a React SPA.
- Prefer hash-based routing because the application will eventually be hosted as static files through S3 and CloudFront.
- Do not implement unnecessary navigation features.

## 5. Cart.jsx

The Cart should be a small floating panel, not a separate page.

Requirements:

- Position it near the upper-right corner of the screen.
- Place it below the navigation bar so the Cart button remains accessible.
- Clicking the Cart navigation link opens the panel.
- Clicking the same link again closes it.
- Include an X/Close button.
- Display a simple empty-cart message initially.
- Style it consistently with the application.

Cart functionality will be implemented later.

Do not create backend requests, persistent cart storage, or checkout functionality yet.

## 6. Footer.jsx

Create a reusable Footer component displayed on every page.

Follow the footer design shown in the concept image.

Requirements:

- Use the official `logo.png`.
- Maintain the navy and purple visual theme.
- Include the company slogan or similar text from the concept design.
- Display social media icons matching the reference's general appearance.
- Social media icons are visual placeholders only; they should not navigate anywhere.

The footer should be part of the shared application layout.

## 7. Home.jsx

The application should open on the Home page.

For now, this page is intentionally simple.

Requirements:

- Display the shared Header and Footer through the application layout.
- Include a large hero-style placeholder section.
- Use styling consistent with the concept design.
- Display a temporary heading and brief introductory text.

We will design the actual homepage in a later development phase.

Do not spend significant time implementing homepage features.

## 8. Menu.jsx — Primary Development Priority

**This is the most important page for the initial frontend implementation.**

Use `concept-menu-page.png` as the main visual reference.

The Menu page should feel like a polished ice cream ordering interface, even though we are currently using placeholder product data.

### Layout Requirements

- Display a prominent "Our Menu" heading.
- Include `CategoryNav.jsx` above the products.
- Display approximately 6–8 placeholder ice cream products, enough to mostly fill in the page.
- Render all products using reusable `ItemCard.jsx` components.
- Use a visually appealing grid layout similar to the mockup.
- Keep the layout clean, consistent, and easy to browse.

### Placeholder Product Data

For now, product information should come from a small local JavaScript data array. Any data you need to create to satisfy this should have code comments stating that the data is temporary and will be replaced with actual backend data.

Include enough placeholder information to demonstrate the card and details modal functionality.

Example properties:

- Product ID
- Product name
- Category
- Product image or visual placeholder
- Description
- Calories
- Allergens
- Serving size

The information should be structured so it can eventually be replaced with responses from our FastAPI backend.

**Do not create a temporary API or database connection.**

The actual product records and categories will eventually come from PostgreSQL.

## 9. ItemCard.jsx — Product Cards

`ItemCard.jsx` is a reusable component representing an individual product available for purchase.

**The cards should be visually simple.** They are intended for browsing and selecting products, not displaying every detail about them.

### Visual Requirements

Each ItemCard should contain only:

1. **Product image area**
   - Display a placeholder image if one is available.
   - Otherwise, use a framed colored background or visually appealing placeholder.
   - Use styling consistent with the website's color palette.

2. **Product name banner**
   - Display the product name prominently.
   - Place the name in a banner or visually distinct section of the card.
   - Use colors and styling that complement the design reference.

3. **Quantity selector**
   - Include a `-` button.
   - Display the currently selected quantity.
   - Include a `+` button.

4. **Add to Cart button**
   - Display a clearly identifiable Add to Cart button.
   - Match the visual styling of the application.

**Do not display descriptions, calories, allergens, serving sizes, or other product information directly on the card.**

That information belongs in `ItemDetails.jsx`.

### Quantity Selector Behavior

The quantity selector should be interactive.

Requirements:

- Default quantity is `1`.
- Clicking `+` increases the quantity by one.
- Clicking `-` decreases the quantity by one.
- Quantity cannot go below `1`.
- Each product card maintains its own quantity.
- Changing quantity should not open the product details modal.

This is frontend-only state. No backend connection is required.

### Add to Cart Button

The Add to Cart button must be visible and styled, but actual cart functionality is not part of this implementation.

For now:

- Clicking Add to Cart while unauthenticated should open `AuthUser.jsx`.
- No product should actually be added to the Cart.
- No API requests should be made.
- No real authentication should occur.
- Clicking the button must not accidentally open `ItemDetails.jsx`.

We will connect the actual cart functionality later when authentication and backend APIs are available.

### Product Card Click Behavior

**Clicking an ItemCard should open the ItemDetails modal for that specific product.**

Requirements:

- The card should visibly communicate that it is clickable.
- Clicking the image, product name banner, or another non-control area of the card should open `ItemDetails.jsx`.
- Pass the selected product's information to the modal.
- The quantity selector and Add to Cart button must work independently of the card click behavior.

Use proper event handling to prevent nested button clicks from opening the details modal.

## 10. ItemDetails.jsx — Product Information Modal

`frontend/src/components/ItemDetails.jsx`

This modal displays additional information about the product selected from the Menu.

### Modal Appearance

The modal should:

- Open above the Menu page.
- Display a backdrop overlay behind it.
- Use the same blue, navy, and purple design aesthetic as the rest of the application.
- Be large enough to comfortably display product information.
- Remain visually separate from the underlying Menu page.

It should not navigate the user to a different page.

### Modal Content

Display information about the selected product, including:

- Product name
- Product image or placeholder
- Description
- Calories
- Allergens
- Serving size
- Any other basic product details that make sense for the layout

For now, use clearly labeled placeholder information.

Do not treat placeholder nutritional information as verified product facts.

The actual product details will eventually come from PostgreSQL through the backend API.

### Modal Behavior

Requirements:

- Clicking an ItemCard opens the modal.
- The modal displays information for the specific card that was clicked.
- Include a clearly visible X/Close button.
- Clicking the close button hides the modal.
- Clicking the backdrop should also close the modal.
- Pressing Escape should close the modal.
- Opening and closing the modal should not navigate away from the Menu page.
- Closing the modal should preserve the quantity previously selected on the ItemCard.

Only one ItemDetails modal should be visible at a time.

### Component Design

The modal should receive the selected product as a prop.

The Menu page should manage which product is currently selected and whether its details modal is open.

**Do not create a separate modal instance for every product card.** Use one reusable ItemDetails component that displays whichever product was selected.

Keep the code simple and understandable.

## 11. CategoryNav.jsx

Create a secondary navigation bar above the product cards.

Use the categories shown in the concept image:

- All Flavors
- Classic
- Chocolate
- Fruity
- Dessert Inspired
- Specialty

Requirements:

- Display categories as styled buttons.
- Highlight the currently selected category.
- Accept the selected category and a callback as props.
- For now, category selection should filter the local placeholder product array.
- Changing categories should update the displayed ItemCard components without reloading the page.
- Use the same styling and button aesthetics as the concept image.

**Important:** The final category filtering will be handled through database queries using the FastAPI backend.

Do not implement API calls or database logic at this stage.

## 12. AuthUser.jsx — Authentication Modal

Before a customer can actually add a product to the Cart, they must be authenticated.

Create a full-screen modal overlay containing two options:

- **Log In** — Existing customers
- **Sign Up** — New customers

Requirements:

- The modal should overlay the current page without navigating away.
- Include a clearly visible X/Close button.
- Closing the modal should return the user to the page they were viewing.
- Customers who are not logged in must still be able to browse the menu.
- Customers must be able to open ItemDetails without authentication.
- Clicking Add to Cart while unauthenticated should open this modal.
- Provide basic placeholder form fields for login and registration.

### Authentication Limitations

Real authentication is **not part of this implementation**.

Do not:

- Create authentication API endpoints.
- Simulate successful authentication as though it were real.
- Store passwords, credentials, or authentication tokens.
- Add products to the cart without authentication.
- Implement database connections.

The authentication interface should be visually functional, but its actual submission behavior will be implemented when the backend is ready.

## 13. About.jsx

Create a simple placeholder About page.

Requirements:

- Use the shared Header and Footer.
- Include an "About Us" heading.
- Add a short placeholder description about the fictional ice cream company.
- Maintain the application's overall visual style.

We will expand this page later.

## 14. Implementation Guidelines

Follow these requirements throughout development:

1. Keep the code simple, readable, and appropriate for a student group project.
2. Use React functional components and hooks where needed.
3. Use regular CSS rather than adding Tailwind, Bootstrap, or another styling framework.
4. Preserve the existing global CSS color palette.
5. Reuse existing components and project organization.
6. Avoid unnecessary dependencies.
7. Prioritize the desktop layout shown in the concept image.
8. Keep frontend styling consistent between pages.
9. Use meaningful component and variable names.
10. Add brief, informal comments only where they help explain non-obvious functionality.
11. Keep ItemCard focused on the product image, name, quantity selector, and Add to Cart button.
12. Keep detailed product information inside ItemDetails.
13. Use reusable components rather than duplicating markup.
14. Manage modal visibility and selected products using simple React state.
15. Make sure interactive buttons inside product cards do not trigger the card's click handler.

Do not modify the `backend/`, `database/`, or `.github/` directories.

Do not implement AWS deployment, database integration, authentication services, or checkout functionality.

Do not add speculative API definitions to the documentation.

## 15. Completion Requirements

When implementation is complete, I should be able to run:

```bash
cd frontend
npm run dev
```

And open the application locally in my browser.

### General Application

- Home page displays by default.
- Header navigation switches between Home, Menu, and About.
- Header and Footer appear consistently across pages.
- Cart panel opens and closes.
- Application styling reflects the design reference.

### Menu Page

- Menu displays 6–8 placeholder ItemCard components.
- Cards display an image area, name banner, quantity selector, and Add to Cart button.
- Quantity counters increment and decrement correctly.
- Quantity cannot drop below 1.
- Category navigation filters the displayed products.
- Clicking a card opens ItemDetails for the correct product.
- ItemDetails displays placeholder product information.
- ItemDetails can be closed using X, the backdrop, or Escape.
- Closing the modal returns the user to the same Menu page.
- Quantity selections remain unchanged after closing ItemDetails.
- Clicking +, −, or Add to Cart does not open ItemDetails.
- Clicking Add to Cart opens the authentication modal.
- No actual cart or authentication operations occur.

### Technical Validation

- Application runs without browser errors.
- Application builds successfully.
- Existing components and assets are used correctly.
- No unnecessary dependencies have been introduced.

Run the appropriate build and lint checks and report any problems.

## 16. Development Boundaries

This is an **initial frontend implementation**, not the completion of the application.

Do not overengineer functionality that depends on APIs or database tables that haven't been implemented yet.

Keep all product data local for now. Harshini and Santos will develop the backend and database independently.

When those systems are ready, we will connect the frontend to the real API rather than replacing temporary backend implementations.

Do not commit, push, merge, or deploy anything to GitHub.

When finished, provide:

1. A brief summary of what was implemented.
2. A list of files created or modified.
3. Any additional dependencies installed.
4. Any incomplete features intentionally left for later.
5. Results of build and lint checks.

**Stop after implementation and testing so I can review the changes before creating a Git commit.**