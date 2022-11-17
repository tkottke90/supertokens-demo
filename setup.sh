#! /bin/bash

(cd backend && npm install)

(cd frontend && npm install)

(cd infra && docker-compose up -d)