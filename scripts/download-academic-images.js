const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrls = {
  'academics-hero.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80', // Library/study hall
  'curriculum.jpg': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80', // Books/curriculum
  'junior-school.jpg': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', // Happy elementary students
  'middle-school.jpg': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', // Students in science lab
  'faculty1.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', // Professional female teacher
  'faculty2.jpg': 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80', // Male teacher
  'faculty3.jpg': 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&q=80' // Female teacher
};

const downloadImage = (url, filename) => {
  const imagePath = path.join(__dirname, '..', 'public', 'images', filename);
  
  // Create directory if it doesn't exist
  const dir = path.dirname(imagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(imagePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Download all images
Object.entries(imageUrls).forEach(([filename, url]) => {
  downloadImage(url, filename);
}); 