'use strict'

import { Router } from 'express'
import { getAlumnos, addAlumno, getProfesores, addProfesor, getAsignaturas, addAsignatura } from './data.js';
let router = Router()

// Ruta para obtener todos los profesores
router.get('/profesores', (req, res) => {
    res.json(getProfesores());
});

// Ruta para añadir un nuevo profesor
router.post('/profesores', (req, res) => {
    const newProfesor = req.body;
    addProfesor(newProfesor);
    res.status(201).json(newProfesor);
});

// Ruta para obtener un profesor por ID
router.get('/profesores/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const profesor = getProfesorById(id);
    if (profesor) {
        res.json(profesor);
    } else {
        res.status(404).send('Profesor no encontrado');
    }
});


export default router
