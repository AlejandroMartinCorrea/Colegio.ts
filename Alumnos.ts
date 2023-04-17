export default class Alumnos implements Alumno {
  public nombre: string;
  public apellido: string;
  public dni: number;
  public materias: Materia[];
  public fechaNacimiento: Date;
  public matricula: number;
  public notas: number[];

  constructor(nombre: string,apellido: string,dni: number,materias: Materia[],fechaNacimiento: Date,matricula: number,notas: number[]) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.materias = materias;
    this.fechaNacimiento = fechaNacimiento;
    this.matricula = matricula;
    this.notas = notas;
  }
}