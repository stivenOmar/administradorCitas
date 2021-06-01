import { UI } from "./ui.js";

class Storage {
  constructor() {
    this.key = "citas";
    this.inicializarStorage();
    this.ui = new UI();
  }

  cambiarKey(key) {
    this.key = key;
  }

  inicializarStorage() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
    }
  }

  dataStorageFormat(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  dataSetStorage(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  mostrarData() {
    const citas = this.dataStorageFormat(this.key);
    if (citas.length === 0) {
      this.ui.mostrarNotificacion("info", "No hay Citas a mostrar");
    } else {
      this.ui.mostrarCita("all", this.dataStorageFormat(this.key));
    }
  }

  guardar(data) {
    const dataStructure = this.dataStorageFormat(this.key);
    const dataCita = data.datosCitaObjLit();
    dataStructure.push(dataCita);
    this.dataSetStorage(dataStructure);
    this.ui.mostrarCita("indv", dataCita);
  }

  eliminar(id) {
    const dataStructure = this.dataStorageFormat(this.key);
    const index = dataStructure.findIndex((cita) => {
      return cita.id == id;
    });
    dataStructure.splice(index, 1);
    this.dataSetStorage(dataStructure);
    this.ui.eliminarCita(id);
  }

  mostrarDatosCampos(id) {
    const dataStructure = this.dataStorageFormat(this.key);
    const index = dataStructure.findIndex((cita) => {
      return cita.id == id;
    });
    const cita = dataStructure[index];
    this.ui.mostrarDatosForm(cita);
  }

  editar(data) {
    const bdCitas = this.dataStorageFormat(this.key);
    const cita = bdCitas.find((cita) => {
      return cita.id == data.id;
    });
    cita.nombreMascota = data.nombreMascota;
    cita.propietario = data.propietario;
    cita.telefono = data.telefono;
    cita.fecha = data.fecha;
    cita.hora = data.hora;
    cita.sintomas = data.sintomas;
    this.dataSetStorage(bdCitas);
    this.ui.editarCita(cita);
  }
}

export { Storage };
