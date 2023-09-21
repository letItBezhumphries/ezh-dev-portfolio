#####################
# Cloudfront Resources
#####################
# resource "aws_cloudfront_origin_access_identity" "s3_oai" {
#   comment = "OAI for ezhdevportfolio s3 bucket"
# }

resource "aws_cloudfront_distribution" "s3_distribution" {
  retain_on_delete    = false
  price_class         = "PriceClass_All"
  enabled             = true
  is_ipv6_enabled     = false
  default_root_object = "index.html"

  origin {
    # domain_name = aws_s3_bucket.site_bucket.bucket_regional_domain_name
    domain_name = aws_s3_bucket_website_configuration.site.website_endpoint
    origin_id   = aws_s3_bucket.site_bucket.id
    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
    # s3_origin_config {
    #   origin_access_identity = aws_cloudfront_origin_access_identity.s3_oai.cloudfront_access_identity_path
    # }
  }

  aliases = [
    var.site_domain, "www.${var.site_domain}"
  ]

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.site_bucket.id
    viewer_protocol_policy = "redirect-to-https"
    # viewer_protocol_policy = "allow-all"
    compress               = true
    min_ttl                = 0
    default_ttl            = 300
    max_ttl                = 300

    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }

    }
  }

  dynamic "custom_error_response" {
    for_each = var.custom_error_response
    content {
      error_caching_min_ttl = custom_error_response.value.error_caching_min_ttl
      error_code            = custom_error_response.value.error_code
      response_code         = custom_error_response.value.response_code
      response_page_path    = custom_error_response.value.response_page_path
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.cert.certificate_arn
    ssl_support_method  = "sni-only"
  }

  tags = local.common_tags
}

