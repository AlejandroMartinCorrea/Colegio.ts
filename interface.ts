interface RegistroPersonasColegio {
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: Date;
  }
  interface Materia {
    nombre: string[];
  }
  interface Alumno extends RegistroPersonasColegio{
    matricula: number;
    notas: number[];
    materias: Materia[];
  }
  
  interface Profesor extends RegistroPersonasColegio {
    contrato: number;
    materia: Materia;
  }
  
  
  interface ColegioInterface {
    agregarAlumno(alumno: Alumno): void;
    modificarAlumno(index: number, alumno: Alumno): void;
    eliminarAlumno(index: number): void;
    agregarProfesor(profesor: Profesor): void;
    modificarProfesor(index: number, profesor: Profesor): void;
    eliminarProfesor(index: number): void;
    verTodos(): void;
  }