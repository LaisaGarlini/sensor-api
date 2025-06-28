variable "region" {
  default = "us-east-1"
}

variable "ami_id" {
  # Ubuntu 22.04 LTS para us-east-1
  default = "ami-053b0d53c279acc90"
}

variable "public_key_path" {
  default = "~/.ssh/id_rsa.pub" 
}

variable "api_port" {
  default = 3000
}
