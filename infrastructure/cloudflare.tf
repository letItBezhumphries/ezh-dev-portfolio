data "cloudflare_zones" "domain" {
  filter {
    name = var.site_domain
  }
}

resource "cloudflare_record" "acm" {
  zone_id = data.cloudflare_zones.domain.zones[0].id

  // Cloudflare doesn't support `allow_overwrite` field like the route53_record
  // resource; as a result, this configuration hardcodes the first record to
  // verify the ACM certificate.
  // for_each = {
  //   for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
  //     name   = dvo.resource_record_name
  //     record = dvo.resource_record_value
  //     type   = dvo.resource_record_type
  //   }
  // }

  name  = aws_acm_certificate.cert.domain_validation_options.*.resource_record_name[0]
  type  = aws_acm_certificate.cert.domain_validation_options.*.resource_record_type[0]
  value = trimsuffix(aws_acm_certificate.cert.domain_validation_options.*.resource_record_value[0], ".")

  // Must be set to false. ACM validation false otherwise
  proxied = false
}

resource "cloudflare_record" "site_cname" {
  zone_id = data.cloudflare_zones.domain.zones[0].id
  name    = var.site_domain
  # value   = aws_cloudfront_distribution.s3_distribution.domain_name
  value   = aws_cloudfront_distribution.dist.domain_name
  type    = "CNAME"

  ttl     = 1
  proxied = true
}

resource "cloudflare_record" "www" {
  zone_id = data.cloudflare_zones.domain.zones[0].id
  name    = "www"
  # value   = aws_cloudfront_distribution.s3_distribution.domain_name
  value   = aws_cloudfront_distribution.dist.domain_name
  type    = "CNAME"

  ttl     = 1
  proxied = true
}

resource "cloudflare_page_rule" "https" {
  zone_id = data.cloudflare_zones.domain.zones[0].id
  target  = "*.${var.site_domain}/*"
  actions {
    always_use_https = true
  }
}
