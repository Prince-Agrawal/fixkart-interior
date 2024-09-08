
const path = require('path')
const fs = require('fs');
const Category = require('../models/Category');


// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find(); // Fetch all categories from the database
        res.json(categories);
    } catch (err) {
        console.error('Error fetching categories:', err.message);
        res.status(500).send('Server error');
    }
};

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const { categoryName, categoryDescription, categoryAdditionalData } = req.body;

        // Ensure categoryAdditionalData is an array
        const processedCategoryAdditionalData = Array.isArray(categoryAdditionalData) 
            ? categoryAdditionalData.map(item => ({
                title: item.title || '',
                description: item.description || ''
            }))
            : [];

        // Handle file uploads and store image paths
        const imagePaths = req.files ? req.files.map(file => file.path) : [];

        // Create a new category object
        const newCategory = new Category({
            categoryName,
            categoryDescription,
            categoryAdditionalData: processedCategoryAdditionalData, // Use processed data
            imagePaths,
        });

        // Save the new category to the database
        await newCategory.save();

        res.status(201).json({ message: 'Category created successfully', category: newCategory });
    } catch (err) {
        console.error('Error creating category:', err.message);
        res.status(500).send('Server error');
    }
};