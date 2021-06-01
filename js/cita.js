import { Paciente } from "./paciente.js";

class Cita {
  constructor(nombreMascota, propietario, telefono, fecha, hora, sintomas) {
    this.id = new Date().getTime();
    this.paciente = new Paciente(nombreMascota, propietario, telefono);
    this.fecha = fecha;
    this.hora = hora;
    this.sintomas = sintomas;
    this.atendida = false;
  }

  cambiarFecha(fecha) {
    this.fecha = fecha;
  }

  cambiarHora(hora) {
    this.hora = hora;
  }

  cambiarSintomas(sintomas) {
    this.sintomas = sintomas;
  }

  cambiarDatos(nombreMascota, propietario, telefono, fecha, hora, sintomas) {
    this.paciente.cambiarDatosPaciente(nombreMascota, propietario, telefono);
    this.cambiarFecha(fecha);
    this.cambiarHora(hora);
    this.cambiarSintomas(sintomas);
  }

  infoFecha() {
    return this.fecha;
  }

  infoHora() {
    return this.hora;
  }

  infoSintomas() {
    return this.sintomas;
  }

  datosCitaArr() {
    return [
      this.id,
      ...this.paciente.datosPaciente(),
      this.infoFecha(),
      this.infoHora(),
      this.infoSintomas(),
    ];
  }

  datosCitaObjLit() {
    const objLit = {
      id: "",
      nombreMascota: "",
      propietario: "",
      telefono: "",
      fecha: "",
      hora: "",
      sintomas: "",
    };

    objLit.id = this.id;
    objLit.nombreMascota = this.paciente.infoNombreMascota();
    objLit.propietario = this.paciente.infoPropietario();
    objLit.telefono = this.paciente.infoTelefono();
    objLit.fecha = this.infoFecha();
    objLit.hora = this.infoHora();
    objLit.sintomas = this.infoSintomas();

    return objLit;
  }
}

export { Cita };
