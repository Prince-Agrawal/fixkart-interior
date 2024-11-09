
const path = require('path')
const fs = require('fs');
const Category = require('../models/Category');
const slugify = require('slugify');


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

        // Generate a slug from categoryName (removes spaces, special characters, and converts to lowercase)
        const categorySlug = slugify(categoryName, { lower: true, strict: true });

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
            categorySlug,
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

// Edit a category
exports.updateCategory = async (req, res) => {
    const { id } = req.params; // Get the category ID from the request parameters
    const { categoryName, categoryDescription, categoryAdditionalData } = req.body; // Destructure the incoming data

    try {
        // Find the existing category by ID
        const existingCategory = await Category.findById(id);
        if (!existingCategory) {
            return res.status(404).send('Category not found.');
        }

        let oldImagePaths = existingCategory.imagePaths;
        // Handle old image removal
        if (req.files && req.files.length > 0 && existingCategory.imagePaths && existingCategory.imagePaths.length > 0) {
            // Remove each file from the filesystem
            existingCategory.imagePaths.forEach(imagePath => {
                fs.unlink(path.join(__dirname, '..', imagePath), (err) => {
                    if (err) {
                        console.error(`Error deleting file ${imagePath}:`, err.message);
                    }
                });
            });
        }

        // Reset the imagePaths array
        let imagePaths = []; // Start with an empty array for new image paths

        // Append new images to the image paths if there are any uploaded files
        if (req.files && req.files.length > 0) {
            imagePaths = req.files.map(file => file.path); // Only use the new image paths
        }else{
            imagePaths = oldImagePaths;
        }

        // Ensure categoryAdditionalData is an array
        const processedCategoryAdditionalData = Array.isArray(categoryAdditionalData)
            ? categoryAdditionalData.map(item => ({
                title: item.title || '',
                description: item.description || ''
            }))
            : [];

        // Update the category fields
        existingCategory.categoryName = categoryName || existingCategory.categoryName;
        existingCategory.categoryDescription = categoryDescription || existingCategory.categoryDescription;
        existingCategory.categoryAdditionalData = categoryAdditionalData ? processedCategoryAdditionalData : existingCategory.categoryAdditionalData;
        existingCategory.imagePaths = imagePaths; // Update with the new image paths

        // Save the updated category to the database
        await existingCategory.save();

        // Send a success response
        res.status(200).send(`Category updated successfully with ID: ${existingCategory._id}`);
    } catch (err) {
        console.error('Error updating category:', err.message);
        res.status(500).send('Server error');
    }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).send('Category not found.');
        }

        if (category.imagePaths && category.imagePaths.length > 0) {
            category.imagePaths.forEach(imagePath => {
                const fullImagePath = path.join(__dirname, '..', imagePath);
                if (fs.existsSync(fullImagePath)) {
                    fs.unlinkSync(fullImagePath);
                }
            });
        }

        await Category.findByIdAndDelete(id); // Delete the category from the database
        res.status(200).send(`Category deleted successfully with ID: ${category._id}`);
    } catch (err) {
        console.error('Error deleting category:', err.message);
        res.status(500).send('Server error');
    }
};

// View a single category
exports.getCategoryById = async (req, res) => {
    const { id } = req.params; // Extract the category ID from the request parameters

    try {
        // Find the category by its ID
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).send('Category not found.');
        }

        res.status(200).json(category); // Return the category in JSON format
    } catch (err) {
        console.error('Error fetching category:', err.message);
        res.status(500).send('Server error');
    }
};