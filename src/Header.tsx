import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* 企業ロゴ or メニュー */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Avatar
          src="./logo.png" 
          alt="Company Logo"
          sx={{ width: 40, height: 40, marginLeft: 1 }}
        />

        {/* ナビゲーション */}
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
          Indo Biz Match
        </Typography>

        {/* ナビゲーションボタン（必要なら追加） */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button color="inherit">ホーム</Button>
          <Button color="inherit">サービス</Button>
          <Button color="inherit">お問い合わせ</Button>
        </Box>

        {/* ヘルプ & ユーザープロファイル */}
        <IconButton color="inherit" sx={{ marginLeft: 1 }}>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton color="inherit" sx={{ marginLeft: 1 }}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
