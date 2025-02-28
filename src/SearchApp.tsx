import React, { useState } from "react";
import { TextField, Card, CardContent, Typography, Container } from "@mui/material";

interface Company {
  name: string;
  description: string;
  keywords: string[];
}

const companyData: Company[] = [
  { name: "TechCorp", description: "A leading technology company.", keywords: ["tech", "innovation", "software"] },
  { name: "GreenEnergy", description: "Sustainable energy solutions.", keywords: ["energy", "renewable", "solar"] },
  { name: "MediCare", description: "Healthcare and medical services.", keywords: ["health", "medical", "care"] },
  { name: "EduWorld", description: "Online education and learning.", keywords: ["education", "learning", "e-learning"] },
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
