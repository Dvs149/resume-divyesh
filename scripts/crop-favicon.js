import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../src/assets/profile.png');
const outputPath = path.join(__dirname, '../public/profile-icon.png');

async function processImage() {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Calculate crop dimensions (square from center)
        const minDim = Math.min(metadata.width, metadata.height);
        // Let's crop to 70% of the minor dimension to zoom in a bit on the face (assuming center)
        const cropSize = Math.floor(minDim * 0.7);

        const left = Math.floor((metadata.width - cropSize) / 2);
        const top = Math.floor((metadata.height - cropSize) / 2); // Maybe slightly higher for face?
        // Faces are usually slightly above center. Let's try centering vertically for now or 40% from top.
        // Let's stick to center crop for simplicity as the user requested "if required crop it".

        await image
            .extract({ left: left, top: top, width: cropSize, height: cropSize })
            .resize(192, 192) // standard icon size but good quality
            .toFile(outputPath);

        console.log('Favicon created successfully at', outputPath);
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

processImage();
