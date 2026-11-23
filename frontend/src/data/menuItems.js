import placeholderImage from '../assets/placeholder-image.jpg'

//! TEMPORARY placeholder data for frontend development only
//! Categories and products will be replaced by real data from database

export const ALL_CATEGORIES = 'All Flavors'

//! TEMPORARY: the category list will eventually come from the backend.
export const categories = [
    { name: ALL_CATEGORIES, icon: '🍦' },
    { name: 'Classic', icon: '⭐' },
    { name: 'Chocolate', icon: '🍫' },
    { name: 'Fruity', icon: '🍓' },
    { name: 'Dessert Inspired', icon: '🍰' },
    { name: 'Specialty', icon: '👑' },
]

//! TEMPORARY: placeholder products. Calories, allergens, and serving sizes are made up
//! for layout purposes and are NOT verified product facts.
export const menuItems = [
    {
        id: 1,
        name: 'Vanilla Dream',
        category: 'Classic',
        image: placeholderImage,
        description: 'Classic vanilla bean ice cream, smooth and creamy.',
        calories: 250,
        allergens: ['Milk', 'Eggs'],
        servingSize: '1 scoop (4 oz)',
    },
    {
        id: 2,
        name: 'Chocolate Bliss',
        category: 'Chocolate',
        image: placeholderImage,
        description: 'Rich chocolate ice cream for serious chocolate lovers.',
        calories: 280,
        allergens: ['Milk', 'Soy'],
        servingSize: '1 scoop (4 oz)',
    },
    {
        id: 3,
        name: 'Mint Chocolate Chip',
        category: 'Chocolate',
        image: placeholderImage,
        description: 'Cool mint ice cream loaded with chocolate chips.',
        calories: 270,
        allergens: ['Milk', 'Soy'],
        servingSize: '1 scoop (4 oz)',
    },
    {
        id: 4,
        name: 'Strawberry Delight',
        category: 'Fruity',
        image: placeholderImage,
        description: 'Sweet strawberry ice cream with real fruit pieces.',
        calories: 230,
        allergens: ['Milk'],
        servingSize: '1 scoop (4 oz)',
    },
    {
        id: 5,
        name: 'Tropical Dream',
        category: 'Fruity',
        image: placeholderImage,
        description: 'Mango and pineapple swirled into a creamy blend.',
        calories: 220,
        allergens: ['Milk'],
        servingSize: '1 scoop (4 oz)',
    },
    {
        id: 6,
        name: 'Birthday Cake',
        category: 'Dessert Inspired',
        image: placeholderImage,
        description: 'Cake batter ice cream with colorful sprinkles.',
        calories: 300,
        allergens: ['Milk', 'Eggs', 'Wheat'],
        servingSize: '1 scoop (4 oz)',
    },
    {
        id: 7,
        name: 'Cookie Dough Dream',
        category: 'Dessert Inspired',
        image: placeholderImage,
        description: 'Vanilla ice cream packed with chunks of cookie dough.',
        calories: 310,
        allergens: ['Milk', 'Eggs', 'Wheat', 'Soy'],
        servingSize: '1 scoop (4 oz)',
    },
    {
        id: 8,
        name: 'Salted Caramel Swirl',
        category: 'Specialty',
        image: placeholderImage,
        description: 'Caramel ice cream with a ribbon of caramel and a hint of sea salt.',
        calories: 290,
        allergens: ['Milk'],
        servingSize: '1 scoop (4 oz)',
    },
]
