#!/bin/bash

# === CONFIGURATION ===
VPS_USER="root"
VPS_HOST="144.91.71.117"
VPS_PATH="/var/www/html/engjellrraklli.com"
ENV_FILE_PATH=".env"

# === DEPLOYMENT ===

echo "Deploying to $VPS_USER@$VPS_HOST..."

# 1. Create target directory if it doesn't exist
ssh $VPS_USER@$VPS_HOST "mkdir -p $VPS_PATH"

# 2. Upload code from local folder using scp (excluding node_modules, .next, .git, deploy.sh)
# Create a tarball, copy it, and extract on the server for best cross-platform compatibility
TAR_FILE="deploy_temp.tar.gz"
tar --exclude='./node_modules' --exclude='./.next' --exclude='./.git' --exclude='./deploy.sh' --exclude='./package-lock.json' -czf $TAR_FILE .
scp $TAR_FILE $VPS_USER@$VPS_HOST:$VPS_PATH/
ssh $VPS_USER@$VPS_HOST "cd $VPS_PATH && tar -xzf $TAR_FILE && rm $TAR_FILE"
rm $TAR_FILE

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

echo "Deployment complete! Your app should be running on the VPS."
