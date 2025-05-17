<<<<<<< HEAD
# E-commerce Database System

## 📝 Description
A comprehensive relational database system designed for e-commerce applications. This database schema supports essential e-commerce functionalities including user management, product catalog, order processing, shopping cart, wishlist, and review systems.

## 🏗️ Database Structure
The database consists of the following main components:

- **User Management**: User profiles and address management
- **Product Management**: Products, categories, and product images
- **Order System**: Orders and order items
- **Shopping Features**: Shopping cart and wishlist
- **Review System**: Product reviews and ratings

## 🚀 Setup Instructions

### Prerequisites
- MySQL Server (version 5.7 or higher)
- MySQL Workbench or any MySQL client

### Importing the Database
1. Open your MySQL client
2. Create a new database:
   ```sql
   CREATE DATABASE ecommerce_db;
   USE ecommerce_db;
   ```
3. Import the database schema:
   ```bash
   mysql -u your_username -p ecommerce_db < database.sql
   ```

## 📊 Entity Relationship Diagram (ERD)
The database follows these key relationships:

- Users (1) → (M) Addresses
- Users (M) → (M) Products (through Reviews)
- Users (M) → (M) Products (through Cart Items)
- Users (M) → (M) Products (through Wishlist Items)
- Categories (1) → (M) Products
- Products (1) → (M) Product Images
- Orders (1) → (M) Order Items
- Products (M) → (M) Orders (through Order Items)

## 🔑 Key Features
- Hierarchical category system
- Multiple product images support
- Comprehensive order tracking
- User review and rating system
- Shopping cart and wishlist functionality
- Address management for users

## 📋 Table Structure
The database includes the following tables:
- users
- addresses
- categories
- products
- product_images
- orders
- order_items
- reviews
- cart_items
- wishlist_items

=======
https://plp-ecommerce.netlify.app/
>>>>>>> 434c825176cf4f98a7ec0cab7a6d35f5b615957c
