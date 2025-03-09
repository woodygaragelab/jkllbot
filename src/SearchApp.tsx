import React, { useState, useEffect } from "react";
import { TextField, Card, CardContent, Typography, Container, CircularProgress } from "@mui/material";

// 企業データ型定義
interface Company {
  name: string;
  description: string;
  keywords: string[];
}

const API_URL = "https://hobdfdu28a.execute-api.ap-northeast-1.amazonaws.com/default/indobizmatch";  // API Gateway の正しい URL に置き換える

const SearchApp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companyList, setCompanyList] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // APIから企業リストを取得
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setCompanyList([]);
      return;
    }
    
    const fetchCompanies = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ search: searchTerm })
        });

        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }

        const data = await response.json();
        const companies =  JSON.parse(data.body);
        setCompanyList(companies);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [searchTerm]);

  return (
    <Container maxWidth="md" sx={{ marginTop: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="検索キーワードを入力"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2, height: 80, '& .MuiInputBase-root': { height: 80 } }}
      />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : companyList.length > 0 ? (
        companyList.map((company, index) => (
          <Card key={index} sx={{ marginBottom: 2, padding: 1 }}>
            <CardContent>
              <Typography variant="h6">{company.name}</Typography>
              <Typography variant="body2" color="textSecondary">{company.description}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          該当する企業が見つかりませんでした。
        </Typography>
      )}
    </Container>
  );
};

export default SearchApp;