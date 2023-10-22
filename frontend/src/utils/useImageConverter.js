import convertToBase64 from "./convertToBase64";

async function useImageConverter(e, setImage) {
    const imageFile = e.target.files[0];
    try {
        const base64 = await convertToBase64(imageFile);
        setImage(base64);
    } catch(error) {
        console.error(error);
    }
    
}

export default useImageConverter;