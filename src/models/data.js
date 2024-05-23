'use strict'

import data from './data.json' assert { type: 'json' }

export function getAlumnos() {
    return data.alumnos
}

export function addAlumno(alumno) {
       // Añadir el nuevo alumno al array de alumnos
    data.alumnos.push(alumno);
    // Guardar los cambios en data.json
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

export function getProfesores() {
    return data.profesores
}

export function addProfesor(profesor) {
     // Añadir el nuevo profesor al array de profesores
    data.profesores.push(profesor);
    // Guardar los cambios en data.json
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

export function getAsignaturas() {
    return data.asignaturas
}

export function addAsignatura(asignatura) {
      // Añadir la nueva asignatura al array de asignaturas
    data.asignaturas.push(asignatura);
    // Guardar los cambios en data.json
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}
