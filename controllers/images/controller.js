function getPhotoPath() {
    const { dirname } = require('path');
    const appDir = dirname(require.main.filename);
    const imagesDirectory = `${appDir}/images/`;
    // const imagesDirectory = "C:\\Users\\830\\Pictures\\Canon\\2024 - Diefenbaker Football\\2024 11 01 - Diefenbaker vs North Trail - Semi Finals";
    return imagesDirectory;
}

function getImageList(req, res) {
    const imagesDirectory = getPhotoPath();
    
    console.log('getting image list');

    const images = [];
    const fs = require('fs');
    fs.readdir(imagesDirectory, (err, files) => {
        files.forEach(file => {
            images.push(file);
        });
        
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(images);
      });
}

function getImage(req, res) {
    const { filename } = req.params;
    const imagesDirectory = getPhotoPath();
    
    console.log(imagesDirectory);
    res.sendFile(`${imagesDirectory}/${filename}`)
}

module.exports = {
    getImageList,
    getImage,
};