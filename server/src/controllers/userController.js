
exports.getUserProfile = (req, res) => {
  res.json({
    message: 'Welcome to your profile',
    user: req.user, // This will have the user's id as set in the JWT payload
  });
};

