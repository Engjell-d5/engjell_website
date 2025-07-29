const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');

// Images to optimize with their target sizes
const imagesToOptimize = [
  {
    input: 'dai.png',
    output: 'dai.webp',
    width: 800,
    quality: 80
  },
  {
    input: 'DSC0019-scaled.jpg',
    output: 'DSC0019-scaled.webp',
    width: 1200,
    quality: 85
  },
  {
    input: 'DSC0112-scaled.jpg',
    output: 'DSC0112-scaled.webp',
    width: 1200,
    quality: 85
  },
  {
    input: 'DSC0055-scaled.jpg',
    output: 'DSC0055-scaled.webp',
    width: 1200,
    quality: 85
  },
  {
    input: 'd5.jpg',
    output: 'd5.webp',
    width: 800,
    quality: 80
  },
  {
    input: '3d.png',
    output: '3d.webp',
    width: 600,
    quality: 80
  },
  {
    input: 'DSC0036-scaled.jpg',
    output: 'DSC0036-scaled.webp',
    width: 1200,
    quality: 85
  },
  {
    input: 'IMG_0425-scaled.jpg',
    output: 'IMG_0425-scaled.webp',
    width: 1200,
    quality: 85
  },
  {
    input: 'divisionGrowth.png',
    output: 'divisionGrowth.webp',
    width: 600,
    quality: 80
  }
];

async function optimizeImage(inputPath, outputPath, width, quality) {
  try {
    const inputFullPath = path.join(publicDir, inputPath);
    const outputFullPath = path.join(publicDir, outputPath);
    
    // Check if input file exists
    if (!fs.existsSync(inputFullPath)) {
      console.log(`⚠️  Input file not found: ${inputPath}`);
      return;
    }
    
    // Get original file size
    const originalStats = fs.statSync(inputFullPath);
    const originalSize = (originalStats.size / 1024).toFixed(2);
    
    // Optimize image
    await sharp(inputFullPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputFullPath);
    
    // Get optimized file size
    const optimizedStats = fs.statSync(outputFullPath);
    const optimizedSize = (optimizedStats.size / 1024).toFixed(2);
    const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ ${inputPath} → ${outputPath}`);
    console.log(`   Original: ${originalSize}KB → Optimized: ${optimizedSize}KB (${savings}% smaller)`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  
  for (const image of imagesToOptimize) {
    await optimizeImage(image.input, image.output, image.width, image.quality);
    console.log(''); // Empty line for readability
  }
  
  console.log('🎉 Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update image references in your components to use .webp files');
  console.log('2. Test the optimized images in your browser');
  console.log('3. Consider removing the original large files if not needed');
}

// Run optimization
optimizeAllImages().catch(console.error); 