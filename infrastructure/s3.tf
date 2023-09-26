#####################
# S3 Resources
#####################

resource "aws_s3_bucket" "site_bucket" {
  bucket        = var.site_domain
  force_destroy = true

  tags = local.common_tags
}

resource "aws_s3_bucket_ownership_controls" "site" {
  bucket = aws_s3_bucket.site_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# resource "aws_s3_bucket_public_access_block" "site" {
#   bucket = aws_s3_bucket.site_bucket.id

#   block_public_acls       = true
#   block_public_policy     = true
#   restrict_public_buckets = true
#   ignore_public_acls      = true
# }

# # tutorial version
resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}


resource "aws_s3_bucket_acl" "site" {
  depends_on = [
    aws_s3_bucket_public_access_block.site,
    aws_s3_bucket_ownership_controls.site
  ]

  bucket = aws_s3_bucket.site_bucket.id

  # acl    = "private"
  # tutorial version below
  acl = "public-read"
}



# resource "aws_s3_bucket_versioning" "site" {
#   bucket = aws_s3_bucket.site_bucket.id
#   versioning_configuration {
#     status = "Enabled"
#   }
# }

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
  # tutorial version
  depends_on = [
    aws_s3_bucket_public_access_block.site
  ]
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

# tutorial version below
resource "aws_s3_bucket" "www" {
  bucket = "www.${var.site_domain}"
}

resource "aws_s3_bucket_ownership_controls" "www" {
  bucket = aws_s3_bucket.www.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "www" {
  bucket = aws_s3_bucket.www.id

  acl        = "private"
  depends_on = [aws_s3_bucket_ownership_controls.www]
}

resource "aws_s3_bucket_website_configuration" "www" {
  bucket = aws_s3_bucket.www.id

  redirect_all_requests_to {
    host_name = var.site_domain
  }
}
