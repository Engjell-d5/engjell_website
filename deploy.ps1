# PowerShell deployment script for Next.js app
# Run this with: .\deploy.ps1

# === CONFIGURATION ===
$VPS_USER = "root"
$VPS_HOST = "division5.co"
$VPS_PATH = "/var/www/html/engjellrraklli.com"

# === DEPLOYMENT ===

Write-Host "Deploying to $VPS_USER@$VPS_HOST..." -ForegroundColor Green

# 1. Create target directory if it doesn't exist
ssh $VPS_USER@$VPS_HOST "mkdir -p $VPS_PATH"

# 2. Upload code from local folder using scp (excluding node_modules, .next, .git, deploy.sh)
# Create a tarball, copy it, and extract on the server for best cross-platform compatibility
$TAR_FILE = "deploy_temp.tar.gz"

# Use tar to create archive (if available) or use 7zip
try {
    tar --exclude='./node_modules' --exclude='./.next' --exclude='./.git' --exclude='./deploy.sh' --exclude='./deploy.ps1' --exclude='./package-lock.json' -czf $TAR_FILE .
} catch {
    Write-Host "tar not available, trying alternative method..." -ForegroundColor Yellow
    # Alternative: use PowerShell to create zip and convert to tar
    Compress-Archive -Path . -DestinationPath "deploy_temp.zip" -Force
    # You might need to install 7zip or use a different method
    Write-Host "Please install tar or 7zip to continue" -ForegroundColor Red
    exit 1
}

scp $TAR_FILE $VPS_USER@$VPS_HOST`:$VPS_PATH/
ssh $VPS_USER@$VPS_HOST "cd $VPS_PATH && tar -xzf $TAR_FILE && rm $TAR_FILE"
Remove-Item $TAR_FILE

# 3. Install dependencies, build, and start (using pm2 for process management)
ssh $VPS_USER@$VPS_HOST "
  set -e
  cd $VPS_PATH
  npm install --legacy-peer-deps
  npm run build
  pm2 stop engjell_website || true
  pm2 delete engjell_website || true
  pm2 start npm --name engjell_website -- start
  pm2 save
"

Write-Host "Deployment complete! Your app should be running on the VPS." -ForegroundColor Green 