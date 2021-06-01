import { Cita } from "./cita.js";
import { Storage } from "./localStorage.js";

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const formularioCita = document.getElementById("nueva-cita");
  const storage = new Storage();
  storage.mostrarData();
  formularioCita.addEventListener("submit", (e) => {
    e.preventDefault();
    const { edit, idcitaform } = formularioCita.dataset;
    const nombreMascota = document.getElementById("mascota").value;
    const propietario = document.getElementById("propietario").value;
    const telefono = document.getElementById("telefono").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const sintomas = document.getElementById("sintomas").value;
    if (edit == "true") {
      const data = {
        id: idcitaform,
        nombreMascota,
        propietario,
        telefono,
        fecha,
        hora,
        sintomas,
      };

      storage.editar(data);
    }

    if (edit == "false") {
      const citaPaciente = new Cita(
        nombreMascota,
        propietario,
        telefono,
        fecha,
        hora,
        sintomas
      );
      storage.guardar(citaPaciente);
    }
  });

  const citas = document.getElementById("citas");

  citas.addEventListener("click", (e) => {
    e.preventDefault();
    const element = e.target;
    if (element.className.includes("btnEliminar")) {
      const { id } = element.parentElement.dataset;
      storage.eliminar(id);
    }

    if (element.className.includes("btnEditar")) {
      const { id } = element.parentElement.dataset;
      storage.mostrarDatosCampos(id);
    }
  });
});
