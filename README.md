# Optional Assignment: Recipe Collection App

## Overview

- **Lesson:** Foundations of Component-Based UI Development with React / 1
- **Type:** Optional Take-Home Assignment
- **Estimated Time:** 2-3 hours
- **Submission:** GitHub repository link or ZIP file

## Learning Objectives Covered

This assignment reinforces:

- Creating functional React components
- Using JSX syntax correctly
- Passing and destructuring props
- Using the `children` prop
- Component composition
- Applying CSS styling to React components

## Assignment Description

Build a **Recipe Collection App** that displays a collection of your favorite recipes using React components. This project will help you practice component composition, props, and JSX.

### What You'll Build

A single-page application that displays:

- A header with the app title
- Multiple recipe cards showing recipe information
- Recipe cards grouped by category (e.g., Breakfast, Lunch, Dinner, Desserts)
- Each recipe card should display: name, cooking time, difficulty level, ingredients list, and a brief description

## Requirements

### Core Requirements

#### 1. Project Setup

- [ ] Create a new React app using Vite
- [ ] Name your project `recipe-collection-app`
- [ ] Set up the basic project structure with a `components` folder

#### 2. Components to Create

Create the following components in separate files:

**a) Header Component** (`Header.jsx`)

- [ ] Accepts `title` and `subtitle` as props
- [ ] Displays app title and subtitle
- [ ] Styled with a distinct background color and centered text

**b) RecipeCard Component** (`RecipeCard.jsx`)

- [ ] Accepts props: `name`, `cookingTime`, `difficulty`, `ingredients` (array), `description`
- [ ] Use props destructuring
- [ ] Display all recipe information in a styled card
- [ ] Display the difficulty level as text (e.g., "Difficulty: Easy")
- [ ] Map over the ingredients array to display each ingredient as a list item

**c) CategorySection Component** (`CategorySection.jsx`)

- [ ] Accepts `category` (string) and `children` props
- [ ] Displays the category name as a heading
- [ ] Renders children components inside a styled container

**d) Footer Component** (`Footer.jsx`)

- [ ] Displays your name and the current year
- [ ] Include text like "Recipe Collection by [Your Name] © 2026"

#### 3. App Component Composition

In your `App.jsx`:

- [ ] Import all components
- [ ] Create at least **6 recipes** (2 per category minimum)
- [ ] Organize recipes into at least **3 categories** using `CategorySection`
- [ ] Compose all components together

#### 4. Styling (Optional)

- [ ] Add basic CSS styling to make your app presentable
- [ ] Style your cards with:
  - Border or shadow
  - Padding and margin
- [ ] Use a color scheme of your choice
- [ ] Ensure text is readable

**Note**: Advanced styling techniques like responsive design are optional for this assignment.

### Example Recipe Data Structure

```jsx
// In App.jsx
const breakfastRecipes = [
  {
    name: "Fluffy Pancakes",
    cookingTime: "20 minutes",
    difficulty: "easy",
    ingredients: [
      "2 cups flour",
      "2 eggs",
      "1.5 cups milk",
      "2 tbsp sugar",
      "2 tsp baking powder",
    ],
    description: "Light and fluffy pancakes perfect for weekend breakfast!",
  },
  {
    name: "Avocado Toast",
    cookingTime: "10 minutes",
    difficulty: "easy",
    ingredients: [
      "2 slices bread",
      "1 ripe avocado",
      "Salt & pepper",
      "Red pepper flakes",
      "Lemon juice",
    ],
    description: "A healthy and delicious breakfast packed with nutrients.",
  },
];
```

Feel free to add more recipes and categories as you like!

## Resources

### React Documentation

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering) _(For bonus challenges)_

### Free Resources

- **Images**: [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/), [Heroicons](https://heroicons.com/)
- **Colors**: [Coolors](https://coolors.co/), [Adobe Color](https://color.adobe.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
