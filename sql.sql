create table user_options ( id INT AUTO_INCREMENT PRIMARY KEY, user_data JSON NOT NULL);

alter table users add column data JSON;