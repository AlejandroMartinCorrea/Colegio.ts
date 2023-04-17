export default class Profesores implements Profesor {
    public nombre: string;
    public apellido: string;
    public dni: number;
    public fechaNacimiento: Date;
    public contrato: number;
    public materia: Materia;
  
    constructor(nombre: string,apellido: string,dni: number,fechaNacimiento: Date,contrato: number,materia: Materia) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
      this.fechaNacimiento = fechaNacimiento;
      this.contrato = contrato;
      this.materia = materia;
    }
  }