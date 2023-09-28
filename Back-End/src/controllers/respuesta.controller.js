const { respuestaService } = require("../services");
// const cloudinary = require("../utils/cloudinary");

const createRespuesta = async (req, res ) => {
  const { title, preguntaId, value } = req.body
  try {
    const newRespuesta = await respuestaService.createRespuesta({
      title,
      preguntaId,
      value
    });
    res.status(201).json({ message: 'Respuesta successfully created', newRespuesta });
  } catch (error) {
    res.status(500).json({ message: 'Error creating Respuesta', error: error.message });
  }
};

// GET INFOCARD BY ID
const getIdRespuesta = async (req, res) => {
  const respuestaId = req.params.respuestaId;
  try {
    const respuesta = await respuestaService.getIdRespuesta(respuestaId);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ message: "An error occurred finding Respuesta by ID", error: error.message });
  }
};

// GET INFOCARDs
// TODO: Agregar validaciones: Title y Description son campos obligatorios. Description deberia tener un 100 caracteres max, etc etc
const findRespuestas = async (req, res) => {
  const { title, preguntaId, value } = req.query;
  try {
    let respuestas;
    if (Object.keys(req.query).length !== 0) {
      respuestas = await respuestaService.findRespuestas({
        ...(title && { title }),
        ...(preguntaId && { preguntaId }),
        ...(value && { value }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      respuestas = await respuestaService.findRespuestas();
    }
    res.status(200).json(respuestas);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE INFO CARD BY ID
const putRespuesta = async (req, res) => {
  const respuestaId = req.params.respuestaId;
  const { title, preguntaId, value } = req.body;
  try {
    const newRespuesta = await respuestaService.putRespuesta(respuestaId, {
      title,
      preguntaId,
      value,
    });
    res.status(200).json({ message: "Respuesta successfully updated", newRespuesta });
  } catch (error) {
    res.status(500).json({ message: "An error occurred updating Respuesta", error: error.message });
  }
};

// DELETE INFOCARD
const deleteRespuesta = async (req, res) => {
  const respuestaId = req.params.respuestaId;
  try {
    const respuesta = respuestaService.deleteRespuesta(respuestaId);
    res.status(200).json({ message: 'Respuesta successfully deleted', respuesta });
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting respuesta", error: error.message });
  }
};

module.exports = { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta };
