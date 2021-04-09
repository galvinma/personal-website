#!/bin/sh
echo "Restarting the develop env..."
docker-compose down
docker-compose up -d
npm run start