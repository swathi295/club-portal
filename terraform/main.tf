# ----------------------------
# Azure Provider Configuration
# ----------------------------
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }

  required_version = ">= 1.4.0"
}

provider "azurerm" {
  features {}
}

# ----------------------------
# Resource Group
# ----------------------------
resource "azurerm_resource_group" "rg" {
  name     = "clubportal-rg"
  location = "East US"
}

# ----------------------------
# App Service Plan (Linux)
# ----------------------------
resource "azurerm_service_plan" "app_plan" {
  name                = "clubportal-service-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "B1"   # Basic Tier
}

# ----------------------------
# Web App (Frontend)
# ----------------------------
resource "azurerm_linux_web_app" "frontend_app" {
  name                = "clubportal-frontend-app"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  service_plan_id     = azurerm_service_plan.app_plan.id

  site_config {
    application_stack {
      docker_image     = "<your-acr-name>.azurecr.io/clubportal-app"  # Replace with your ACR image
      docker_image_tag = "v1"
    }
  }

  app_settings = {
    "WEBSITES_PORT" = "8080"
  }
}
