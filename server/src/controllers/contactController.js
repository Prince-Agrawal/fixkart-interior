const ContactDetails = require('../models/contactDetail');

// Controller function to save contact details
exports.saveContactDetails = async (req, res) => {
    const { fullName, email, phone, message } = req.body;
    const propertyName = req.body.company;
    try {
        // Create a new contact detail document
        const newContact = new ContactDetails({
            fullName,
            email,
            phone,
            propertyName,
            message
        });

        // Save the contact details to the database
        const savedContact = await newContact.save();

        // Respond with the saved contact details
        res.status(201).json({
            message: 'Contact details saved successfully',
            data: savedContact
        });
    } catch (error) {
        console.error('Error saving contact details:', error.message);
        res.status(500).json({
            message: 'An error occurred while saving contact details',
            error: error.message
        });
    }
};

// Controller function to save contact details
exports.getContactDetails = async (req, res) => {
    try {
        const contacts = await ContactDetails.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error fetching contact details:', error);
        res.status(500).send('Server error');
    }
};