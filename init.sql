CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  gender VARCHAR(20) NOT NULL,
  dateOfBirth DATE NOT NULL,
  email VARCHAR(319) NOT NULL
);

INSERT INTO users (firstName, lastName, gender, dateOfBirth, email) VALUES
('Robert', 'Yen', 'Male', '1985-08-08', 'robert.yen@linecorp.com'),
('Cid', 'Change', 'Male', '1990-10-10', 'cid.change@linecorp.com'),
('Miki', 'Lai', 'Female', '1993-04-05', 'miki.lai@linecorp.com'),
('Sherry', 'Chen', 'Female', '1993-08-08', 'sherry.lai@linecorp.com'),
('Peter', 'Wang', 'Male', '1950-12-22', 'peter.wang@linecorp.com');