// @ts-check

// Script run within the webview itself.
(function () {
  // Get access to the VS Code API from within the webview
  // @ts-ignore
  const vscode = acquireVsCodeApi();

  // Just like a regular webpage we need to wait for the webview
  // DOM to load before we can reference any of the HTML elements
  window.addEventListener('load', main);

  // Main function that gets executed once the webview DOM loads
  function main() {
    // Add click event listeners to all file locations
    document.querySelectorAll('.file-location').forEach((element) => {
      element.addEventListener('click', () => {
        const filePath = element.getAttribute('data-file');
        const lineNumber = parseInt(element.getAttribute('data-line') || '1', 10);

        if (filePath) {
          vscode.postMessage({
            command: 'openFile',
            filePath,
            lineNumber,
          });
        }
      });
    });

    // Add click event listeners to breaking change headers to toggle details
    document.querySelectorAll('.breaking-change-header').forEach((header) => {
      header.addEventListener('click', () => {
        const details = header.nextElementSibling;
        if (details && details.classList.contains('breaking-change-details')) {
          // Cast to HTMLElement to access style property
          const detailsElement = /** @type {HTMLElement} */ (details);
          if (detailsElement.style.display === 'none') {
            detailsElement.style.display = 'block';
          } else {
            detailsElement.style.display = 'none';
          }
        }
      });
    });

    // Initially show all details
    document.querySelectorAll('.breaking-change-details').forEach((details) => {
      // Cast to HTMLElement to access style property
      const detailsElement = /** @type {HTMLElement} */ (details);
      detailsElement.style.display = 'block';
    });
  }
})();
