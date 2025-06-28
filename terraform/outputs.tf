output "ec2_public_ip" {
  value = aws_instance.api_instance.public_ip
}
