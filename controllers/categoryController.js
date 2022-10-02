const Category = require('../models/Category');
const Course = require('../models/Course');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).redirect('/users/dashboard')
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findOneAndRemove(req.params.id);

    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
