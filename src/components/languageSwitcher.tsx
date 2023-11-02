// react
import React from "react";

// next
import { useRouter } from "next/router";

// material
import { Box, Select, FormControl } from "@mui/material";

// languages
const languages = [
  { name: "English", key: "en", countryCode: "uk" },
  { name: "عربي", key: "ar-EG", countryCode: "sa" },
];

export default function LanguageSelect() {
  const router = useRouter();

  const { pathname, asPath, query, locale } = router;
  // change just the locale and maintain all other route information including href's query

  const [selectedLocale, setSelectedLocale] = React.useState<any>("en");
  return (
    <>
      <Box>
        <FormControl fullWidth>
          <Select
            id="language-select"
            value={selectedLocale}
            onChange={(e) => {
              setSelectedLocale(e.target.value);
              router.push({ pathname, query }, asPath, {
                locale: e.target.value,
              });
            }}
            fullWidth
            size="small"
            native
          >
            {languages.map((lang) => (
              <option key={Math.random()} value={lang.key}>
                {lang.name}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
