import React, { useState } from "react";
import { TextField, Card, CardContent, Typography, Container } from "@mui/material";

interface Company {
  name: string;
  description: string;
  keywords: string[];
}

const companyData: Company[] = [
  {
    name: "TechCorp",
    description: "TechCorp is a leading technology company specializing in software development, AI research, and cloud computing solutions. With a strong commitment to innovation, it serves global clients in various industries, offering reliable and scalable digital solutions.",
    keywords: ["tech", "innovation", "software"]
  },
  {
    name: "GreenEnergy",
    description: "GreenEnergy is dedicated to providing sustainable energy solutions, focusing on solar and wind power generation. By developing cutting-edge renewable energy technologies, the company aims to reduce carbon emissions and promote a cleaner environment worldwide.",
    keywords: ["energy", "renewable", "solar"]
  },
  {
    name: "MediCare",
    description: "MediCare offers top-tier healthcare and medical services, ranging from hospital management to telemedicine. With a patient-centric approach, the company integrates advanced medical technologies to enhance diagnosis, treatment, and overall patient care.",
    keywords: ["health", "medical", "care"]
  },
  {
    name: "EduWorld",
    description: "EduWorld is an online education platform that provides interactive learning experiences through digital courses, virtual classrooms, and AI-driven tutoring. It aims to make quality education accessible to learners worldwide, regardless of location.",
    keywords: ["education", "learning", "e-learning"]
  },
  {
    name: "AutoDrive",
    description: "AutoDrive specializes in autonomous vehicle technology, developing self-driving cars and AI-powered navigation systems. The company focuses on enhancing road safety, reducing traffic congestion, and making transportation more efficient and sustainable.",
    keywords: ["automotive", "AI", "self-driving"]
  },
  {
    name: "FinTech Solutions",
    description: "FinTech Solutions is a financial technology company that offers innovative digital banking, payment processing, and blockchain solutions. It empowers businesses and individuals with secure, seamless, and user-friendly financial services.",
    keywords: ["finance", "blockchain", "banking"]
  },
  {
    name: "FoodInnovate",
    description: "FoodInnovate pioneers sustainable food production using biotechnology and AI. It develops plant-based alternatives, lab-grown meat, and smart agricultural solutions to ensure a sustainable and nutritious food supply for the future.",
    keywords: ["food", "biotech", "sustainability"]
  },
  {
    name: "CyberSecure",
    description: "CyberSecure provides advanced cybersecurity solutions, including threat detection, data protection, and encryption services. Its mission is to safeguard businesses and individuals from cyber threats in an increasingly digital world.",
    keywords: ["cybersecurity", "encryption", "data protection"]
  },
  {
    name: "SpaceTech",
    description: "SpaceTech is at the forefront of aerospace innovation, developing cutting-edge satellite technology, space exploration programs, and interplanetary travel solutions. The company collaborates with governments and private firms to advance space technology.",
    keywords: ["space", "satellite", "exploration"]
  },
  {
    name: "SmartHome Solutions",
    description: "SmartHome Solutions designs and manufactures IoT-based smart home devices, including automated lighting, security systems, and AI assistants. The company aims to create a more connected, secure, and energy-efficient living environment.",
    keywords: ["IoT", "smart home", "automation"]
  }
];

const SearchApp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companyData.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container maxWidth="lg">
      <TextField sx={{ width: '100%', '& .MuiInputBase-root': { height: '56px' } }}
        fullWidth
        variant="outlined"
        label="検索キーワードを入力"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        margin="normal"
      />
      <div>
        {filteredCompanies.map((company, index) => (
          <Card key={index} style={{ marginBottom: "10px" }}>
            <CardContent>
              <Typography variant="h6" component="div">{company.name}</Typography>
              <Typography variant="body2" color="textSecondary">{company.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default SearchApp;
