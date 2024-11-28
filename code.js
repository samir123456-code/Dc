function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);

    if (codeElement) {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = codeElement.innerText; 
        document.body.appendChild(tempTextArea);

        tempTextArea.select();
        document.execCommand('copy');

        document.body.removeChild(tempTextArea);

        alert('Code copied to clipboard!');
    } else {
        alert('Code block not found!');
    }
}
