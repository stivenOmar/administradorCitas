/* import { Cita } from "./cita.js";
import { Paciente } from "./paciente.js"; */

document.addEventListener("DOMContentLoaded", (e) => {
  const formularioCita = document.getElementById("nueva-cita");
  formularioCita.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombreMascota = document.getElementById("mascota").value;
    const propietario = document.getElementById("propietario").value;
    const telefono = document.getElementById("telefono").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const sintomas = document.getElementById("sintomas").value;
    const citaPaciente = new Cita(
      new Paciente(nombreMascota, propietario, telefono),
      fecha,
      hora,
      sintomas
    );
    storage.save(citaPaciente);
  });
});
