'use strict'

import { Router } from 'express'
import { getAlumnos, addAlumno} from './data.js';
let router = Router()

// Ruta para obtener todos los alumnos
router.get('/alumnos', (req, res) => {
    res.json(getAlumnos());
});

// Ruta para añadir un nuevo alumno
router.post('/alumnos', (req, res) => {
    const newAlumno = req.body;
    addAlumno(newAlumno);
    res.status(201).json(newAlumno);
});

// Ruta para obtener un alumno por ID
router.get('/alumnos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const alumno = getAlumnoById(id);
    if (alumno) {
        res.json(alumno);
    } else {
        res.status(404).send('Alumno no encontrado');
    }
});

export default router
