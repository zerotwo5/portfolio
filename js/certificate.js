/* Certificate viewer page: certificate.html?id=<certificate id> */
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

document.addEventListener("DOMContentLoaded", () => {
  initMatrix(document.getElementById("matrix-canvas"));

  const app = document.getElementById("app");
  const id = new URLSearchParams(window.location.search).get("id");
  const cert = CERTIFICATES.find((c) => c.id === id);

  if (!cert) {
    app.innerHTML = `
      <div class="cert-notfound">
        <h1 class="font-mono">Certificate Not Found</h1>
        <p class="font-mono">The requested certificate could not be found.</p>
      </div>`;
    return;
  }

  document.title = cert.title + " | Md. Tanvir Rahman Pranto";
  // encodeURIComponent makes file names with spaces work (e.g. "API sec CASA-cert")
  const pdf = `certificates/${encodeURIComponent(cert.id)}.pdf`;
  const png = `certificates/${encodeURIComponent(cert.id)}.png`;

  // Loading spinner is shown until the image is ready
  app.innerHTML = `
    <div class="cert-loading" id="loading">
      <div class="spinner"></div>
      <p class="font-mono">Loading certificate...</p>
    </div>
    <div class="cert-view" id="view" hidden>
      <div class="cert-view-head">
        <div>
          <h1 class="cert-view-title font-mono">${esc(cert.title)}</h1>
          <p class="cert-view-vendor font-mono">Issued by ${esc(cert.vendor)}</p>
        </div>
        <a class="btn btn-download" href="${pdf}" download>${icon("download", "icon icon-4")}Download Certificate</a>
      </div>
      <div class="cert-frame">
        <div class="cert-img-wrap"><img id="cert-img" alt="${esc(cert.title)}" /></div>
      </div>
    </div>`;

  const img = document.getElementById("cert-img");
  const show = () => {
    document.getElementById("loading").hidden = true;
    document.getElementById("view").hidden = false;
  };
  img.addEventListener("load", show);
  img.addEventListener("error", show);
  img.src = png;
});
