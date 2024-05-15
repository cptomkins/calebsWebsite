#!/bin/bash

# Start http-server in the background
http-server &

# Wait a bit for the server to start
sleep 1

# Open the URL in the default browser
start "http://localhost:8080/" 