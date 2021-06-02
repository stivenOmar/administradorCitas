class UI {
  constructor() {
    this.form = document.getElementById("nueva-cita");
  }

  mostrarCard(data) {
    document.getElementById(
      "citas"
    ).innerHTML += `<div class="cita p-3" data-id="${data.id}">
                <h2 class='card-title font-weight-bolder nombreMascota'>${data.nombreMascota}</h2>
                <p > <span class='font-weight-bolder'>Propietario: </span> <span class='propietario'> ${data.propietario} </span> </p>
                <p> <span class='font-weight-bolder'>Telefono: </span> 
                <span class='telefono'> ${data.telefono} </span>
                 </p>
                <p > <span class='font-weight-bolder'>Fecha: </span> 
                <span class='fecha'>${data.fecha} </span>
                </p>
                <p> <span class='font-weight-bolder'>Hora: </span>
                <span class='hora'>${data.hora}</span>
                </p>
                <p> <span class='font-weight-bolder'>Sintomas: </span>
                <span class='sintomas'>${data.sintomas}</span>
                </p>
                <button class ='btn btn-danger mr-2 btnEliminar'>Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
<button class ='btn btn-info mr-2 btnEditar'>Editar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg></button>

            </div>`;
  }
  mostrarCita(cant = "indv", data) {
    if (cant === "indv") {
      this.mostrarCard(data);
      this.form.reset();
      this.mostrarNotificacion("success", "Cita guardada");
    }

    if (cant === "all") {
      for (const cita of data) {
        this.mostrarCard(cita);
      }
    }
  }

  eliminarCita(id) {
    document.querySelector(`[data-id*='${id}']`).remove();
    this.mostrarNotificacion("danger", "Cita eliminada");
  }

  propiedadDatasetForm(propiedad) {
    return this.form.dataset[`${propiedad}`];
  }

  cambiarPropiedaDatasetForm(propiedad, valor) {
    this.form.dataset[`${propiedad}`] = valor;
  }

  mostrarTextoBoton() {
    if (this.propiedadDatasetForm("edit") == "true") {
      this.form.querySelector("#btnSubmit").textContent = "Editar Cita";
    }

    if (this.propiedadDatasetForm("edit") == "false") {
      this.form.querySelector("#btnSubmit").textContent = "Crear Cita";
    }
  }

  mostrarNotificacion(tipo, contenido) {
    const contentNotif = document.querySelector("#notificacion");
    contentNotif.innerHTML += `<div class="text-center alert col-12 alert-${tipo}">
            ${contenido}
    </div> `;
    setTimeout(() => {
      document.querySelector(`#notificacion div`).remove();
    }, 3000);
  }

  desabilitarBotonEliminar(id, valor) {
    const citaUi = document.querySelector(`[data-id*='${id}']`);
    citaUi.querySelector(".btnEliminar").disabled = valor;
  }

  mostrarDatosForm(data) {
    this.desabilitarBotonEliminar(data.id, true);
    this.form.querySelector("#mascota").value = data.nombreMascota;
    this.form.querySelector("#propietario").value = data.propietario;
    this.form.querySelector("#telefono").value = data.telefono;
    this.form.querySelector("#fecha").value = data.fecha;
    this.form.querySelector("#hora").value = data.hora;
    this.form.querySelector("#sintomas").value = data.sintomas;
    this.cambiarPropiedaDatasetForm("edit", true);
    this.mostrarTextoBoton();
    this.cambiarPropiedaDatasetForm("idcitaform", data.id);
  }

  editarCita(data) {
    const citaUi = document.querySelector(`[data-id*='${data.id}']`);
    citaUi.querySelector(`.nombreMascota`).textContent = data.nombreMascota;
    citaUi.querySelector(`.propietario`).textContent = data.propietario;
    citaUi.querySelector(`.telefono`).textContent = data.telefono;
    citaUi.querySelector(`.fecha`).textContent = data.fecha;
    citaUi.querySelector(`.hora`).textContent = data.hora;
    citaUi.querySelector(`.sintomas`).textContent = data.sintomas;
    this.form.reset();
    this.desabilitarBotonEliminar(data.id, false);
    this.cambiarPropiedaDatasetForm("edit", false);
    this.mostrarTextoBoton();
    this.mostrarNotificacion("success", "Edición de cita realizada");
  }
}

export { UI };
