'use strict'

import { Router } from 'express'
import { getProfesores, addProfesor } from './data.js';
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


router.get('/', (req, res, next) => {
    res.send(`CodeMasters server V1 API`)
})

import alumnos from './alumnos/index.js'
router.use('/alumnos', alumnos)

import alumnos from './profesores/index.js'
router.use('/profesores', profesores)

import alumnos from './asignaturas/index.js'
router.use('/asignaturas', asignaturas)

export default router
