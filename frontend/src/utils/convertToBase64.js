function convertToBase64(imageFile) {
    return new Promise((resolve, reject) => {
        const imageReader = new FileReader();
        imageReader.readAsDataURL(imageFile);
        imageReader.onload = () => {
            resolve(imageReader.result);
        };
        imageReader.onerror = (error) => {
            reject(error);
        };
    });
}

export default convertToBase64;