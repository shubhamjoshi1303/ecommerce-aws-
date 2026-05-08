# eCommerce AWS Application

A cloud-native eCommerce application built using AWS microservices architecture and modern AWS deployment patterns.

## Overview

This project demonstrates a complete cloud-native microservices-based application consisting of frontend, backend, database, networking, authentication, and messaging layers deployed on AWS.

The application showcases scalable cloud architecture patterns using containerized services, API Gateway, authentication systems, managed databases, and asynchronous messaging.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Cost Estimates](#cost-estimates)
- [Getting Started](#getting-started)

## Architecture Overview

This project demonstrates a complete cloud-native microservices-based application where we have Frontend, Backend, Database, Access, and Integration layers.

Below is the architecture for this application:

<img width="800" height="450" alt="image" src="https://github.com/user-attachments/assets/f4059007-aea1-4a75-9a2f-9178a86cd373" />

### AWS Services

- **Frontend**: S3 + CloudFront + Route53
- **API Layer**: API Gateway (HTTP API) + VPC Link + ALB
- **Compute**: ECS/Fargate
- **Authentication**: Cognito User Pools
- **Databases**: DynamoDB and RDS PostgreSQL
- **Messaging**: SNS + SQS (+ SES)
- **Networking**: VPC, Subnets, Security Groups, NAT Gateway
- **Logs and Management**: CloudWatch, Systems Manager
- **Security**: IAM

## Project Structure

```text
ecommerce-web-app/
├── services/                    # Backend microservices
│   ├── product-service/         # Python FastAPI
│   ├── cart-service/            # Python FastAPI
│   ├── user-service/            # Python FastAPI
│   └── order-service/           # Python FastAPI
├── frontend/
│   └── react-app/               # React application
├── data/                        # Product data + S3 upload scripts
├── deployment/                  # AWS deployment guides
│   ├── README.md                # Deployment overview
│   └── module*.md               # Step-by-step modules
└── install-prerequisites.sh     # Tool installation script