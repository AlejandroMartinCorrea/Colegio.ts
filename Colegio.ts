    import Alumnos from "./Alumnos";
    import Profesores from "./Profesores";

    class Colegio implements ColegioInterface {
      private alumno: Alumnos[] = [];
      private profesor: Profesores[] = [];
      constructor() {}
    
      public agregarAlumno(alumno: Alumnos) {
        this.alumno.push(alumno);
      }
    
      public modificarAlumno(index: number, alumno: Alumnos) {
        this.alumno[index] = alumno;
      }
    
      public eliminarAlumno(index: number) {
        this.alumno.splice(index, 1);
      }
    
      public agregarProfesor(profesor: Profesores) {
        this.profesor.push(profesor);
      }
    
      public modificarProfesor(index: number, profesor: Profesores) {
        this.profesor[index] = profesor;
      }
    
      public eliminarProfesor(index: number) {
        this.profesor.splice(index, 1);
      } 
    
    public verTodos() {
      console.log('Alumnos:');
      console.log(this.alumno);
      console.log('Profesores:');
      console.log(this.profesor);
    }}
  
  
  const alumno1 = new Alumnos('Juan','perez',42354076,[],new Date(14/8/2010),1584,[7,9]);
  const alumno2 = new Alumnos('Jose','Hernandez',45354076,[],new Date(22/10/2010),1584,[]);
  const alumno3 = new Alumnos('Maria','Rojas',42354034,[],new Date(29/2/2010),1584,[]);
  
  
  const profesor1 = new Profesores('Marcecolo','Vettini',20347831,[],new Date(26/11/1974),12);
  const profesor2 = new Profesores('javier','Lopez',25999202,[],new Date(4/2/1981),12);
  
  const colegio1 = new Colegio();
  colegio1.agregarAlumno(alumno1);
  colegio1.agregarAlumno(alumno2);
  colegio1.agregarAlumno(alumno3);
  colegio1.agregarProfesor(profesor1);
  colegio1.agregarProfesor(profesor2)
  colegio1.verTodos()
  