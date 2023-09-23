output "ezhdevportfolio_bucket_name" {
  description = "Name (id) of the bucket"
  value = aws_s3_bucket.site_bucket.id
}

output "cloudfront_distribution_id" {
  # value = aws_cloudfront_distribution.s3_distribution.id
  value = aws_cloudfront_distribution.dist.id
}

output "bucket_endpoint" {
  description = "Bucket endpoint"
  value       = aws_s3_bucket_website_configuration.site.website_endpoint
}

output "cloudfront_endpoint" {
  description = "Cloudfront endpoint"
  # value       = aws_cloudfront_distribution.s3_distribution.domain_name
  value       = aws_cloudfront_distribution.dist.domain_name
}

output "domain_name" {
  description = "Website endpoint"
  value       = var.site_domain
}
