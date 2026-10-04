// Fit documents to their frame on load; PDF.js preserves fit mode when resized.
const configure = event => {
  if (event.detail.source !== window) return;
  const options = window.PDFViewerApplicationOptions;
  options.set("disablePreferences", true);
  options.set("defaultZoomValue", "page-fit");
  options.set("sidebarViewOnLoad", 0);
  options.set("viewOnLoad", 1);
};
try { parent.document.addEventListener("webviewerloaded", configure); }
catch { document.addEventListener("webviewerloaded", configure); }
