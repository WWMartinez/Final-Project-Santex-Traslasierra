const { infoCardService } = require("../services");
const cloudinary = require("../utils/cloudinary");

const createInfoCard = async (req, res ) => {
  const { title, image, description, category, order } = req.body
  try {
    const newInfoCard = await infoCardService.createInfoCard({
      title,
      image,
      description,
      category,
      order
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
    const infoCard = await infoCardService.getIdInfoCard(infoCardId);
    res.status(200).json(infoCard);
  } catch (error) {
    res.status(500).json({ message: "An error occurred finding InfoCard by ID", error: error.message });
  }
};

// GET INFOCARDs
// TODO: Agregar validaciones: Title y Description son campos obligatorios. Description deberia tener un 100 caracteres max, etc etc
const findInfoCards = async (req, res) => {
  const { title, category, order } = req.query;
  try {
    let infoCards;
    if (Object.keys(req.query).length !== 0) {
      infoCards = await infoCardService.findInfoCards({
        ...(title && { title }),
        ...(category && { category }),
        ...(order && { order }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      infoCards = await infoCardService.findInfoCards();
    }
    res.status(200).json(infoCards);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE INFO CARD BY ID
const putInfoCard = async (req, res) => {
  const infoCardId = req.params.infoCardId;
  const { title, image, description, category, order } = req.body;
  try {
    const newInfoCard = await infoCardService.putInfoCard(infoCardId, {
      title,
      image,
      description,
      category,
      order
    });
    res.status(200).json({ message: "InfoCard successfully updated", newInfoCard });
  } catch (error) {
    res.status(500).json({ message: "An error occurred updating InfoCard", error: error.message });
  }
};

// DELETE INFOCARD
const deleteInfoCard = async (req, res) => {
  const infoCardId = req.params.infoCardId;
  try {
    const infoCard = infoCardService.deleteInfoCard(infoCardId);
    res.status(200).json({ message: 'infoCard successfully deleted', infoCard });
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting InfoCard", error: error.message });
  }
};

module.exports = { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard };
