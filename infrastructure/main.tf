provider "aws" {
  region  = "us-west-2"
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
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Eric Humphries"
  }
}

# "portfolio-production-<name-of-resource>"
