'use strict'

import { Router } from 'express'
import { getAlumnos, addAlumno, getProfesores, addProfesor, getAsignaturas, addAsignatura } from './data.js';
let router = Router();
// Ruta para obtener todas las asignaturas
router.get('/asignaturas', (req, res) => {
    res.json(getAsignaturas());
});

// Ruta para añadir una nueva asignatura
router.post('/asignaturas', (req, res) => {
    const newAsignatura = req.body;
    addAsignatura(newAsignatura);
    res.status(201).json(newAsignatura);
});

// Ruta para obtener una asignatura por ID
router.get('/asignaturas/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const asignatura = getAsignaturaById(id);
    if (asignatura) {
        res.json(asignatura);
    } else {
        res.status(404).send('Asignatura no encontrada');
    }
});
export default router
