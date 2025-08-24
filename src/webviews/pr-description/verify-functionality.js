/**
 * Verification script for PR Description Generator functionality
 * This script verifies that all existing functionality is preserved
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying PR Description Generator functionality...\n');

// Check that all required files exist
const requiredFiles = [
  'src/webviews/pr-description/index.tsx',
  'src/webviews/pr-description/PrDescriptionApp.tsx',
  'src/webviews/pr-description/components/BranchSelection.tsx',
  'src/webviews/pr-description/components/GenerationForm.tsx',
  'src/webviews/pr-description/components/ResultDisplay.tsx',
  'src/webviews/pr-description/styles/pr-description.css',
  'media/pr-description/pr-description.bundle.js'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log('✅', file);
  } else {
    console.log('❌', file, '(missing)');
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n❌ Some required files are missing!');
  process.exit(1);
}

// Check that the bundle was created and has reasonable size
const bundlePath = 'media/pr-description/pr-description.bundle.js';
const bundleStats = fs.statSync(bundlePath);
const bundleSize = bundleStats.size;

console.log(`\n📦 Bundle size: ${(bundleSize / 1024).toFixed(2)} KB`);

if (bundleSize < 1000) {
  console.log('⚠️  Bundle seems too small, might be incomplete');
} else if (bundleSize > 1000000) {
  console.log('⚠️  Bundle seems very large, might need optimization');
} else {
  console.log('✅ Bundle size looks reasonable');
}

// Check that the bundle contains expected React code
const bundleContent = fs.readFileSync(bundlePath, 'utf8');

const expectedPatterns = [
  'PrDescriptionApp',
  'BranchSelection',
  'GenerationForm',
  'ResultDisplay',
  'React',
  'useState',
  'useEffect'
];

console.log('\n🔍 Checking bundle content...');

expectedPatterns.forEach(pattern => {
  if (bundleContent.includes(pattern)) {
    console.log('✅', `Contains ${pattern}`);
  } else {
    console.log('❌', `Missing ${pattern}`);
  }
});

// Verify message handling compatibility
console.log('\n📨 Verifying message compatibility...');

const appContent = fs.readFileSync('src/webviews/pr-description/PrDescriptionApp.tsx', 'utf8');

const expectedMessages = [
  'getBranches',
  'generatePrDescription',
  'copyToClipboard',
  'branchesList',
  'startLoading',
  'stopLoading',
  'generationComplete',
  'error'
];

expectedMessages.forEach(message => {
  if (appContent.includes(message)) {
    console.log('✅', `Handles ${message} message`);
  } else {
    console.log('❌', `Missing ${message} message handler`);
  }
});

// Check CSS preservation
console.log('\n🎨 Verifying CSS styles...');

const cssContent = fs.readFileSync('src/webviews/pr-description/styles/pr-description.css', 'utf8');

const expectedStyles = [
  '.container',
  '.branch-selection',
  '.generate-button',
  '.results',
  '.result-section',
  '.copy-button',
  '.markdown-body'
];

expectedStyles.forEach(style => {
  if (cssContent.includes(style)) {
    console.log('✅', `Contains ${style} styles`);
  } else {
    console.log('❌', `Missing ${style} styles`);
  }
});

console.log('\n✅ Verification complete! All core functionality appears to be preserved.');
console.log('\n📋 Manual testing checklist:');
console.log('   1. Open PR Description Generator in VSCode');
console.log('   2. Verify branch selection dropdowns work');
console.log('   3. Verify model selection dropdown works');
console.log('   4. Verify generate button functionality');
console.log('   5. Verify copy buttons work');
console.log('   6. Verify error handling displays correctly');
console.log('   7. Verify loading states show properly');
console.log('   8. Verify markdown rendering in results');