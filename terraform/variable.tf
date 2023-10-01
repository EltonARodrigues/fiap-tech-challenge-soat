variable "cluster_name" {
  default = "fiap-tech-challeng-soat"
}

variable "region" {
  default     = "us-east-1"
  description = "AWS region"
}

variable "kubernetes_version" {
  default = "1.28"
}

variable "private_subnet_1a" {
  default = "10.0.0.0/19"
}

variable "private_subnet_1b" {
  default = "10.0.32.0/19"
}

variable "desired_size" {
  default = "1"

}

variable "max_size" {
  default = "1"
}

variable "min_size" {
  default = "1"
}
