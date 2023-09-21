#####################
# S3 Resources
#####################

resource "aws_s3_bucket" "site_bucket" {
  bucket = local.bucket_name
  force_destroy = true

  tags = local.common_tags
}

resource "aws_s3_bucket_ownership_controls" "site" {
  bucket = aws_s3_bucket.site_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  restrict_public_buckets = true
  ignore_public_acls      = true

}

resource "aws_s3_bucket_acl" "site" {
  depends_on = [
    aws_s3_bucket_public_access_block.site,
    aws_s3_bucket_ownership_controls.site
  ]

  bucket = aws_s3_bucket.site_bucket.id
  acl    = "private"
  # acl = "public-read"
}

resource "aws_s3_bucket_versioning" "site" {
  bucket = aws_s3_bucket.site_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.site_bucket.arn,
          "${aws_s3_bucket.site_bucket.arn}/*",
        ]
      },
    ]
  })
}

resource "aws_s3_bucket_website_configuration" "site" {
  bucket = aws_s3_bucket.site_bucket.id
  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# data "aws_iam_policy_document" "ezhdevportfolio_bucket_policy_document" {
#   statement {
#     actions = ["s3:GetObject"]

#     resources = [
#       aws_s3_bucket.site_bucket.arn,
#       "${aws_s3_bucket.site_bucket.arn}/*"
#     ]

#     principals {
#       type        = "AWS"
#       identifiers = [aws_cloudfront_origin_access_identity.s3_oai.iam_arn]
#     }
#   }
# }



