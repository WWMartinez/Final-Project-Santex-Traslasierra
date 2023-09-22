const { preguntaModel } = require('../models');

const getPreguntas = async (req, res) => {
    const listPreguntas = await preguntaModel.findAll();

    res.json(listPreguntas);
}

const getPregunta = async (req, res) => {
    const { id } = req.params;
    const pregunta = await preguntaModel.findByPk(id);

    if (pregunta) {
        res.json(pregunta);
    } else {
        res.status(404).json({
            msg: 'No existe la Pregunta con ese (id)'
        })
    }
}

const deletePregunta = async (req, res) => {
    const { id } = req.params;
    const pregunta = await preguntaModel.findByPk(id);

    if (!pregunta) {
        res.status(404).json({
            msg: 'No existe la pregunta con ese (id)'
        })
    } else {
        await pregunta.destroy();
        res.json({
            msg: 'La pregunta fue eliminada con exito!'
        })
    }
}

const postPregunta = async (req, res) => {
    const { body } = req;

    try {
        await preguntaModel.create(body);

        res.json({
            msg: 'La pregunta fue agregada con exito!'
        })
    } catch (err) {
        console.log(err);
        res.json({
            msg: 'Ocurrio un error: ' + err
        })
    }
}

const updatePregunta = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const pregunta = await preguntaModel.findByPk(id);

        if (pregunta) {
            await pregunta.update(body);
            res.json({
                msg: 'La pregunta fue actualizada con exito!'
            })
        } else {
            res.status(404).json({
                msg: 'No existe la pregunta con ese id'
            })
        }
    } catch (err) {
        console.log(err);
        res.json({
            msg: 'Ocurrio un error, reinicie el Server'
        })
    }
};

module.exports = {
    getPregunta,
    getPreguntas,
    postPregunta,
    updatePregunta,
    deletePregunta
};
