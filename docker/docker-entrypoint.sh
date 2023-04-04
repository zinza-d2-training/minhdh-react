#!/bin/bash

# Exit on fail
set -e

# Bundle install
npm install -f

# Start services
npm start

# Finally call command issued to the docker service
exec "$@"
