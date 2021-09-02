#!/bin/bash

set -e

echo 'Deploying TCSTask to dev'

date

profile=foxtel
stage=dev

serverless deploy \
  --aws-profile $profile \
  --stage $stage \
  --force
