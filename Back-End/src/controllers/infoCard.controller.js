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

// GET INFOCARD BY ID
const getIdInfoCard = async (req, res) => {
  const infoCardId = req.params.infoCardId;
  try {
    const infoCard = await userService.getIdInfoCard(infoCardId);
    res.status(200).json(infoCard);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};




module.exports = { createInfoCard, getIdInfoCard };
