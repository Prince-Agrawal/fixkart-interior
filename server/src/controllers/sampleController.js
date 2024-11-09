exports.sample = (req, res) => {
    res.json({
      message: 'Welcome to your dashboard',
      user: req.user, // This will have the user's id as set in the JWT payload
    });
  };
  