import React from 'react';
// material-ui component
import Button from '@material-ui/core/Button';
// material-UI icon
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function FileUploader(props) {
  let { setSelectedFile } = props;
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    //show corresponding image with what user chose
    let reader = new FileReader();
    reader.onload = function () {
      let output = document.getElementById('outputUserProfile');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div>
      <Button
        color="primary"
        size="small"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onClick={handleClick}
      >
        Upload
      </Button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default FileUploader;
