-- PROPERTIES
CREATE TABLE IF NOT EXISTS property (
    property_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(12,2) NOT NULL,
    location VARCHAR(255) NOT NULL,
    property_type VARCHAR(50) NOT NULL,
    year_built INT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- AGENTS
CREATE TABLE IF NOT EXISTS agent (
    agent_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20)
);

-- PROPERTY_AGENT (many-to-many)
CREATE TABLE IF NOT EXISTS property_agent (
    property_id INT REFERENCES property(property_id) ON DELETE CASCADE,
    agent_id INT REFERENCES agent(agent_id) ON DELETE CASCADE,
    PRIMARY KEY(property_id, agent_id)
);

-- Agents
INSERT INTO agent(name,email,phone) VALUES
('Alice Johnson','alice@example.com','1234567890'),
('Bob Smith','bob@example.com','0987654321'),
('Carol White','carol@example.com','1122334455'),
('David Brown','david@example.com','2233445566'),
('Eva Green','eva@example.com','3344556677'),
('Frank Black','frank@example.com','4455667788'),
('Grace Lee','grace@example.com','5566778899'),
('Henry King','henry@example.com','6677889900'),
('Ivy Scott','ivy@example.com','7788990011'),
('Jack Hill','jack@example.com','8899001122')
ON CONFLICT DO NOTHING;

-- Properties
INSERT INTO property(title,description,price,location,property_type) VALUES
('Luxury Apartment','Spacious 3-bedroom apartment','350000','New York','Apartment'),
('Cozy Cottage','Small but comfortable cottage','120000','Boston','House'),
('Downtown Loft','Modern loft in city center','450000','Chicago','Loft'),
('Beachfront Villa','Beautiful villa by the sea','750000','Miami','Villa'),
('Suburban House','Family house with garden','250000','Seattle','House'),
('Studio Flat','Compact studio','90000','San Francisco','Apartment'),
('Penthouse Suite','Top floor penthouse','900000','Los Angeles','Apartment'),
('Country Farm','Farmhouse with land','300000','Texas','Farm'),
('Mountain Cabin','Cabin in the mountains','200000','Colorado','Cabin'),
('Urban Condo','2-bedroom condo','280000','Denver','Condo')
ON CONFLICT DO NOTHING;

-- Property-Agent relationships
INSERT INTO property_agent(property_id,agent_id) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),
(1,2),(3,4),(5,6)
ON CONFLICT DO NOTHING;

