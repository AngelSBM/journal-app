import axios from 'axios';
 
 
 const uploadImage = async ( file ) => {
    if( !file ){ return }

    try {
        
        const formData = new FormData();
        formData.append('upload_preset', 'journal-app');
        formData.append('file', file);

        const url = 'https://api.cloudinary.com/v1_1/dgcp4ff7k/image/upload';
        const { data } = await axios.post(url, formData);

        console.log(data);

        return data.secure_url;

    } catch (error) {
        console.error('error al cargar imagen');
        console.log(error);
        return null;
    }

 } 


 export default uploadImage;