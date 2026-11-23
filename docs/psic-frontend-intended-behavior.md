# Frontend Intended Behavior

This document defines the intended **user experience (UX)** for Pig Scream Ice Cream. It is a guide for teammates and AI coding assistants working on the application—not a task list or a replacement for the existing code.

**Preserve the behaviors below when adding features or connecting the frontend to real data.** The team may improve the design and implementation collaboratively, but changes that alter these expected interactions should be discussed before they are implemented.

## Shared Layout and Navigation

| Element | Intended Behavior |
|---|---|
| **Home** | The default page when a visitor opens the application or follows an unrecognized route. |
| **Header** | A reusable header shown across pages, with responsive navigation and consistent branding. |
| **Navigation** | Page links are generated from the navigation links array, so links can be added or edited without rebuilding the navigation component. Active-page highlighting should remain visible. |
| **Cart toggle** | The Cart button can open or close the floating cart from any page. It stays accessible while the cart is open. The cart also has its own close button. The cart is not a separate page. |
| **Footer** | Reusable across pages. Social media icons are decorative placeholders and should not navigate anywhere unless the team later decides otherwise. |

## Menu and Product Interactions

| Element | Intended Behavior |
|---|---|
| **Menu** | Displays a browsable grid of products using reusable `ItemCard` components. Placeholder data is temporary until API integration. |
| **CategoryNav** | Builds category buttons from the **unique categories returned by the backend** once database integration exists, rather than a permanently hardcoded list. Include an **All Flavors** option. Selecting a category updates the displayed products and highlights the active category. The frontend must not query PostgreSQL directly. |
| **ItemCard** | Shows the product image (or a styled fallback), product name banner, quantity counter, `−` and `+` buttons, and **Add to Cart** button. Keep descriptions, calories, allergens, and other product details off the card. |
| **Quantity controls** | Start at 1, never decrease below 1, and change only the quantity for that item. Clicking the quantity controls must not open the details modal. Quantity selections should remain stable during normal browsing where practical; resetting after a category filter currently occurs and may be improved. |
| **ItemDetails** | Clicking the non-control area of an `ItemCard` opens one reusable modal with the selected item's additional information, such as description, calories, allergens, and serving size, when those fields are available. It must display the details of the item actually selected. |
| **Add to Cart** | Does not open ItemDetails. When real authentication and cart functionality are implemented, an authenticated user can add the chosen product and quantity; an unauthenticated user is prompted to log in or sign up first. For now, no item is actually added. |

## Modals and Authentication

- **ItemDetails and AuthUser** use the existing shared modal behavior: open over the current page; close using **X**, a click on the backdrop, or **Escape**; do not navigate away or reload the page.
- Opening a product-details modal **does not require login**. Visitors can browse the full menu and product details freely.
- **AuthUser** appears when a user who is **not logged in** attempts to add an item to the cart. It should not appear just because a visitor opens the Menu, selects a category, views ItemDetails, or opens the Cart.
- Once authentication is actually implemented, **already authenticated users should not see the login/sign-up prompt** when adding an item.
- Authentication and cart operations are **not implemented yet**. Do not fake a successful login, pretend an item was added, or store real credentials in placeholder frontend code.

## Other Pages

- **Home** remains the default entry page. It may be developed further without changing the shared navigation or layout expectations.
- **About** may be expanded as needed while retaining the shared Header and Footer.
- **Menu** may be modified as needed while maintaining the shared layout and navigation. All temporary displayed data may be replaced to accomodate for real API data.

## Collaboration Boundaries

1. **Respect task ownership.** Team members and their AI assistants should work on their assigned areas, not independently complete or redesign another person's assignment. Backend APIs and database schema decisions belong to their assigned developers; frontend features belong to the frontend developer unless work is reassigned by the team.
2. **Integration changes are allowed.** Small, necessary changes across boundaries—such as updating a frontend data mapping to match an implemented API—are appropriate. Communicate affected changes to the owner and avoid unrelated edits.
3. **Do not invent contracts.** Do not create speculative API endpoints, database fields, authentication behavior, or additional infrastructure just to make a feature appear complete. Use the implemented contract or coordinate a change with its owner.
4. **Preserve working UX.** Refactoring or improving code is welcome, but do not silently remove, replace, or change an interaction defined in this document. Discuss intentional UX changes with the team first.
5. **Keep placeholders identifiable.** Temporary products, images, nutritional details, and inactive features should be clearly distinguishable from live data or implemented capabilities.
6. **Keep documentation scoped.** This file describes intended behavior only. Technology and deployment decisions belong in `psic-architecture.md`; implemented API routes belong in `psic-api.md`; Git instructions belong in the Git guides.
7. **Review before merging.** Test the affected user interactions and describe any intentional behavior changes in the pull request. Follow the existing team Git workflow for review and approvals.

**Guiding principle:** Extend the working application and connect teammates' contributions; do not rebuild functioning features or take over unassigned work without team agreement.