#!/bin/sh

if [ ${REACT_APP_MODE} = "DEVELOPMENT" ]
then
   echo "Starting ui in development mode..."
   sh -c "npm run start"
else
   echo "Starting ui in production || staging mode..."
    sh -c "serve -s build -l 3000"
fi