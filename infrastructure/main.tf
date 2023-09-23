provider "aws" {
  region = var.aws_region
}

provider "cloudflare" {
  # api_token = var.cloudflare_api_token
}
# provider "cloudflare" {}

resource "random_pet" "bucket" {
  length = 1
}


terraform {
  backend "s3" {
    bucket  = "ezhumphries-dev-portfolio-tf-state"
    key     = "ezhumphries-dev-portfolio.tfstate"
    region  = "us-west-2"
    encrypt = true
  }
}

# for tags set up in aws resources
locals {
  bucket_name = "${random_pet.bucket.id}-${var.site_domain}"
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Eric Humphries"
  }
}

# "portfolio-production-<name-of-resource>"
