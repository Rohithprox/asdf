const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrls = {
  'science-exhibition.jpg': 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80',
  'library.jpg': 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
  'sports-meet.jpg': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
  'basketball.jpg': 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  'annual-day.jpg': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  'music-concert.jpg': 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
  'campus-life.jpg': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
  'art-exhibition.jpg': 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80'
};

const downloadImage = (url, filename) => {
  const imagePath = path.join(__dirname, '..', 'public', 'images', 'gallery', filename);
  
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