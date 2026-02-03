provider "aws" {
  region = var.region
}

locals {
  tags = {
    Project     = var.project_name
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}
