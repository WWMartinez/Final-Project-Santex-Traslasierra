const preguntaModel = require("../models/pregunta.model");

// CREATE PREGUNTA
const postPregunta = async (req, res) => {
  const { category, question } = req.body;
  try {
    const newPregunta = await preguntaModel.create({ category, question });
    res.status(201).json({ message: 'Question successfully created', newPregunta });
  } catch (error) {
    res.status(500).json({ message: "Error creating question", error: error.message });
  }
};

// TODO AGREGAR UN TRY/CATCH POR SI SE ROMPE ALGO
// GET PREGUNTA
const getPregunta = async (req, res) => {
  const preguntaId = req.params.preguntaId;
  try {
    const pregunta = await preguntaModel.findByPk(preguntaId);
    res.json(pregunta);
  } catch (error) {}
    res.status(404).json({ msg: "No existe la Pregunta con ese ID" });
};

// TODO AGREGAR UN TRY/CATCH POR SI SE ROMPE ALGO
// GET ALL PREGUNTA
const getPreguntas = async (_req, res) => {
  try {
    const listPreguntas = await preguntaModel.findAll();
    res.json(listPreguntas);
  } catch (error) {
    res.status(404).json({ msg: "No se encontraron Preguntas" });
  }
};

// UPDATE PREGUNTA
const updatePregunta = async (req, res) => {
  const { body } = req;
  const preguntaId = req.params.preguntaId;
  try {
    const pregunta = await preguntaModel.findByPk(preguntaId);
    if (pregunta) {
      await pregunta.update(body);
      res.json({ msg: "La pregunta fue actualizada con exito!" });
    } else {
      res.status(404).json({ msg: "No existe la pregunta con ese ID" });
    }
  } catch (err) {
    res.json({ msg: "Ocurrio un error, reinicie el Server" });
  }
};

// DELETE PREGUNTA
const deletePregunta = async (req, res) => {
  const preguntaId = req.params.preguntaId;
  try {
    const pregunta = await preguntaModel.findByPk(preguntaId);
    if (!pregunta) {
      res.status(404).json({ msg: "No existe la pregunta con ese ID" });
    } else {
      await pregunta.destroy();
      res.status(200).json({ msg: "La pregunta fue eliminada con exito!", pregunta });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting Pregunta", error: error.message });
  }
};

module.exports = {
  postPregunta,
  getPregunta,
  getPreguntas,
  updatePregunta,
  deletePregunta,
};
