const { infoCardService } = require("../services");
const cloudinary = require("../utils/cloudinary");

const createInfoCard = async (req, res ) => {
  const { title, image, description, category } = req.body

  try {
    const newInfoCard = await infoCardService.createInfoCard({
      title,
      image,
      description,
      category,
    });
    res.status(201).json({ message: 'InfoCard successfully created', newInfoCard });
  } catch (error) {
    res.status(500).json({ message: 'Error creating InfoCard', error: error.message });
  }
};

module.exports = { createInfoCard };
