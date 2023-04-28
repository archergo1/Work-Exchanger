import { useEffect, useState, useRef } from "react";
import axios from "axios";

// export default function UploadImg() {
//   const [file, setFile] = useState([]);
//   const inputRef = useRef(null);
//   let formData = new FormData();

//     function handleFileUpload(){
//         setFile(inputFile.files[0]);
//         formData.append('image', file);
//     }

//     function submitFile(){
//         axios({
//             method: 'POST',
//             url:'https://api.imgur.com/3/image',
//             data: formData,
//             Authorization: "Bearer aa051819756b33017027be0e14eb761929ad5af6",
//             mimeType: 'multipart/form-data'
//         }).then((res) => {
//             console.log(res.data);
//          }).catch((err) => {
//             console.log(err);
//           })

//     }
//   return (
//     <>
//       <input
//       id="inputFile"
//       type="file"
//       name="file"
//       ref={inputRef}
//       onChange={handleFileUpload}
//       />
//       <input
//       id="inputSubmit"
//       type="submit"
//       value="Upload image"
//       onClick={submitFile}
//       />
//       <img id="image" />
//     </>
//   );
// }

export default function UploadImage() {
  const [file, setFile] = useState();
  const onFileChange = (event) => {
    // Updating the state
    setFile({ file: event.target.files[0] });
  };
  const onFileUpload = async () => {

  
    // Creating an object of formData
    const formData = new FormData();
  
    // Adding our image to formData
    formData.append("file", file);
  
    // Making the post request
    await axios({
      method: 'POST',
      url: 'https://api.imgur.com/3/image',
      data: formData,
      headers: {
        Authorization: "Client-ID 4ef4ca52de4b42c"
      },
      mimeType: 'multipart/form-data'})
      // Handling success
      .then((res) => alert("image uploaded") && console.log(res)) 
      .catch((err) => alert("Failed") && console.log(err)); 
  };
  return (
    <>
      <input name="file" type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </>
  );
}

