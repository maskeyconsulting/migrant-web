#!/bin/bash

# Build the Next.js application
npm run build

# Replace these with your S3 bucket name and CloudFront distribution ID
BUCKET_NAME="migrant-web"
CLOUDFRONT_DISTRIBUTION_ID="your-cloudfront-distribution-id"

# Sync the out directory with S3
aws s3 sync out s3://$BUCKET_NAME --delete

# Invalidate CloudFront cache (if you're using CloudFront)
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
  aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
fi

echo "Deployment complete!"
