document.getElementById("bookBtn").addEventListener("click", function() {
  // Replace this path with your actual file path or URL later
  const bookPath = "path/to/Haribodhini_Ekadashi_First_Version.pdf";
  window.open(bookPath, "_blank");
});

document.getElementById("bookBtn").addEventListener("click", function() {
  // direct download
  const link = document.createElement("a");
  link.href = "https://basantasaru.github.io/Haribodhini_Ekadashi_First_Version.pdf";
  link.download = "Haribodhini_Ekadashi_First_Version.pdf";
  link.click();

});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}
