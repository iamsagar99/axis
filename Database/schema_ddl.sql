-- Create the database
CREATE DATABASE IF NOT EXISTS dm;
USE dm;

-- Table: services
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    icon_url VARCHAR(255),
    active_flag BOOLEAN DEFAULT TRUE COMMENT 'Visible on frontend if true',
    is_featured BOOLEAN DEFAULT FALSE,
    created_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing creation',
    updated_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing update',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: testimonials
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    company VARCHAR(100),
    quote TEXT NOT NULL,
    image_url VARCHAR(255),
    active_flag BOOLEAN DEFAULT TRUE COMMENT 'Visible on frontend if true',
    is_featured BOOLEAN DEFAULT FALSE,
    created_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing creation',
    updated_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing update',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: portfolios
CREATE TABLE portfolios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    before_stats TEXT,
    after_stats TEXT,
    client_name VARCHAR(100),
    client_logo VARCHAR(255),
    active_flag BOOLEAN DEFAULT TRUE COMMENT 'Visible on frontend if true',
    is_featured BOOLEAN DEFAULT FALSE,
    created_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing creation',
    updated_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing update',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: blogs
CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    content LONGTEXT NOT NULL,
    image_url VARCHAR(255),
    published_at DATETIME,
    author_id INT,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    is_featured BOOLEAN DEFAULT FALSE,
    created_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing creation',
    updated_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing update',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: blog_tags
CREATE TABLE blog_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) NOT NULL UNIQUE,
    active_flag BOOLEAN DEFAULT TRUE COMMENT 'Visible on frontend if true',
    is_featured BOOLEAN DEFAULT FALSE,
    created_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing creation',
    updated_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing update',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: blog_tag_map (many-to-many between blogs and tags)
CREATE TABLE blog_tag_map (
    blog_id INT NOT NULL,
    tag_id INT NOT NULL,
    created_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing creation',
    updated_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing update',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (blog_id, tag_id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES blog_tags(id) ON DELETE CASCADE
);

-- Table: contacts
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing creation',
    updated_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing update',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'editor') DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: reviews
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,                 -- Reviewer name
    email VARCHAR(100),                         -- Optional, for contact or moderation
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),  -- 1 to 5 stars
    comment TEXT NOT NULL,                      -- The actual review
    service_id INT,                             -- Optional: review for specific service
    is_approved BOOLEAN DEFAULT FALSE,          -- For moderation by admin
    active_flag BOOLEAN DEFAULT TRUE COMMENT 'Visible on frontend if true',
    created_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing creation',
    updated_by VARCHAR(255) DEFAULT NULL COMMENT 'User performing update',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE SET NULL
);
