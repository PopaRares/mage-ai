export function commenceDownload(document: Document, url: string) {
    const a = document.createElement('a');
    a.href = url;
    document.body.appendChild(a); 

    // Trigger the download
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
