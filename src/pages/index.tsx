import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@/components/Link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import ToogleButton from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/languageSwitcher";
import useTranslation from "next-translate/useTranslation";
export default function Home() {
  const { t } = useTranslation("home");
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack gap={3}>
          <ToogleButton />
          <LanguageSwitcher />
          <Typography variant="h4" component="h1" gutterBottom>
            {t("hello-world")}
          </Typography>
        </Stack>
        <Link href="/about" color="secondary">
          Go to the about pages
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
