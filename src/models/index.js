'use strict'

import { getAlumnos, addAlumno, getProfesores, addProfesor, getAsignaturas, addAsignatura } from './data.js'

function getAlumnoById(idAlumno) {
    const alumnos = getAlumnos();
    return alumnos.find(alumno => alumno.id === idAlumno);
}

function getProfesorById(idProfesor) {
      const profesores = getProfesores();
    return profesores.find(profesor => profesor.id === idProfesor);
}

function getAsignaturaById(idAsignatura) {
      const asignaturas = getAsignaturas();
    return asignaturas.find(asignatura => asignatura.id === idAsignatura);
}

// Asignaturas que imparte un profesor
function getAsignaturasByProfesorId(idProfesor) {
      const asignaturas = getAsignaturas();
    return asignaturas.filter(asignatura => asignatura.profesorId === idProfesor);
}

// Asignaturas en las que está matriculado un alumno
function getAsignaturasByAlumnoId(idAlumno) {
     const asignaturas = getAsignaturas();
    return asignaturas.filter(asignatura => asignatura.alumnos.includes(idAlumno));
}

export default {
    alumnos: {
        get: {
            all: getAlumnos,
            byId: getAlumnoById
        },
        add: addAlumno
    },
    profesores: {
        get: {
            all: getProfesores,
            byId: getProfesorById
        },
        add: addProfesor
    },
    asignaturas: {
        get: {
            all: getAsignaturas,
            byId: getAsignaturaById,
            byProfesorid: getAsignaturasByProfesorId,
        },
        add: addAsignatura
    }
}
