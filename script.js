// if (window.location.href.includes("register.html")) {
//     alert("PROMOCIONES:\n\nINSCRIPCIÓN A TALLER PEARS INCLUYE ACCESO A CONGRESO (SOLO Médicos Generales, Enfermeras, Residentes y Estudiantes) \n\nTALLER DE TOXICOLOGÍA: 50% DE DESCUENTO")
// }

document.getElementById("closeAd").addEventListener("click", function() {
    document.getElementById("adOverlay").style.display = "none";
  });

  // Optional: close when clicking outside the ad
  document.getElementById("adOverlay").addEventListener("click", function(e) {
    if (e.target === this) {
      this.style.display = "none";
    }
  });