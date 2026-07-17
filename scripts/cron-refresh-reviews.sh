#!/bin/bash
# Google yorum snapshot tazeleme — Hetzner cron (Pzt + Per 04:30 Istanbul).
# Kurulum: crontab -e →
#   30 4 * * 1,4 /opt/bosphorusnight-site/scripts/cron-refresh-reviews.sh >> /var/log/reviews-refresh.log 2>&1
# GOOGLE_API_KEY AI projesinin .env'inden okunur (tek kaynak, ayrı secret dosyası yok).
set -euo pipefail
cd /opt/bosphorusnight-site

export "$(grep -E '^GOOGLE_API_KEY=' /opt/bosphorus-night-ai/.env | head -1)"

git pull --ff-only -q
node scripts/fetch-google-reviews.js

if git diff --quiet -- assets/data/google-reviews.json; then
  echo "$(date -Is) değişiklik yok"
else
  git add assets/data/google-reviews.json
  git commit -q -m "chore(reviews): google yorum snapshot tazeleme ($(date +%F))"
  git push -q origin main
  echo "$(date -Is) push edildi → Vercel rebuild"
fi
