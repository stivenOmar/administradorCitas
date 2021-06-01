class Paciente {
  constructor(nombreMascota, propietario, telefono) {
    this.nombreMascota = nombreMascota;
    this.propietario = propietario;
    this.telefono = telefono;
  }

  cambiarNombreMascota(nombreMascota) {
    this.nombreMascota = nombreMascota;
  }

  cambiarPropietario(propietario) {
    this.propietario = propietario;
  }

  cambiarTelefono(telefono) {
    this.telefono = telefono;
  }

  infoNombreMascota() {
    return this.nombreMascota;
  }

  infoPropietario() {
    return this.propietario;
  }

  infoTelefono() {
    return this.telefono;
  }

  datosPaciente() {
    return [
      this.infoNombreMascota(),
      this.infoPropietario(),
      this.infoTelefono(),
    ];
  }

  cambiarDatosPaciente(nombreMascota, propietario, telefono) {
    this.cambiarNombreMascota(nombreMascota);
    this.cambiarPropietario(propietario);
    this.cambiarTelefono(telefono);
  }

  cambiarDatosPacienteArr(datos) {
    this.cambiarDatosPaciente(datos[0], datos[1], datos[2]);
  }
}

export { Paciente };
