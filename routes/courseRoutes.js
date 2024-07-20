const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Ruta para eliminar un curso por ID
router.delete('/courses/:id', async (req, res) => {
  try {
    const courseId = req.params.id;

    // Verificar si el curso existe por su ID
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Eliminar el curso de la base de datos
    await Course.findByIdAndRemove(courseId);

    res.json({ message: 'Curso eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el curso', details: error.message });
  }
});

module.exports = router;
