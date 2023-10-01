terraform {
  backend "s3" {
    bucket         = "test-terraform-fiap-tech"
    key            = "terraform.tfstate"
    region         = var.region
    encrypt        = true
  }
}
