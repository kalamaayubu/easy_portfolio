// Converts an image File object to WebP format using canvas API
export const convertToWebP = (file) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // Trigger once the image is fully loaded into memory
    img.onload = () => {
      // Create an off-screen canvas with same dimensions as original image
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Convert the canvas content to a WebP blob
      canvas.toBlob(
        (blob) => {
            if (blob) {
            const webpFile = new File(
                [blob], 
                file.name.replace(/\.\w+$/, '.webp'), 
                { type: 'image/webp' }
            );
            resolve(webpFile); // Return the converted WebP file
            } else {
            reject(new Error('Failed to convert to WebP'));
            }
        }, 
        'image/webp',
        0.9 // Quality level (0.0 to 1.0)
    );
    };

    img.onerror = reject;

    // Convert the File into a temporary blob URL so it can be loaded by the <img> element
    img.src = URL.createObjectURL(file);
  });
};
