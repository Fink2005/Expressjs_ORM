CREATE DATABASE IF NOT EXISTS Capstone_express

-- USERS
CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(255) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	`password` VARCHAR(255),
	age TINYINT UNSIGNED,
	avatar VARCHAR(255)
)



ALTER TABLE users ADD COLUMN googleId  VARCHAR(255) UNIQUE;

ALTER TABLE users ADD COLUMN facebookId  VARCHAR(255) UNIQUE;

INSERT INTO users (user_name, email, `password`, age, avatar)
VALUES
    ('John Doe', 'john.doe@example.com', 'hashed_password1', 30, 'avatar1.png'),
    ('Jane Smith', 'jane.smith@example.com', 'hashed_password2', 25, 'avatar2.png'),
    ('Alice Johnson', 'alice.johnson@example.com', 'hashed_password3', 28, NULL),
    ('Bob Brown', 'bob.brown@example.com', 'hashed_password4', 35, 'avatar4.png');




-- IMAGES
CREATE TABLE images (
image_id INT PRIMARY KEY AUTO_INCREMENT,
image_name VARCHAR(255) NOT NULL,
image_url VARCHAR(255) NOT NULL,
image_des VARCHAR(255) NOT NULL,
image_user_id INT , FOREIGN KEY (image_user_id) REFERENCES users (user_id)
)


-- SAVE IMAGES
CREATE TABLE saving_images (
saving_image_user_id INT,
saving_image_image_id INT,
PRIMARY KEY (saving_image_user_id, saving_image_image_id),
FOREIGN KEY (saving_image_user_id) REFERENCES users (user_id),
FOREIGN KEY (saving_image_image_id) REFERENCES images (image_id),
saved_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
)



	
-- COMMENTS

CREATE TABLE comments (
comment_id INT PRIMARY KEY AUTO_INCREMENT,
comment_user_id INT , FOREIGN KEY (comment_user_id) REFERENCES users (user_id),
comment_image_id INT, FOREIGN KEY (comment_image_id) REFERENCES images (image_id),
comment_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
comment_content VARCHAR(255)
)


	
