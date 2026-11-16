// Single place for business details. Empty values are simply not rendered,
// so fill them in here and they appear in the contact section, footer, privacy policy and JSON-LD.
export const site = {
  name: "Welding Vlček",
  owner: "Martin Vlček",
  url: "https://weldingvlcek.cz",
  domain: "weldingvlcek.cz",
  email: "info@weldingvlcek.cz",
  phone: "", // e.g. "+420 123 456 789"
  ico: "", // IČO – required on a Czech business website (§ 435 občanského zákoníku)
  address: "", // sídlo / místo podnikání, e.g. "Ulice 12, 123 45 Město"
  register: "", // e.g. "Fyzická osoba zapsaná v živnostenském rejstříku"
  instagram: "", // full profile URL
  facebook: "", // full page URL
  privacyUpdated: "16. 11. 2026",
};

export const nav = [
  ["/#sluzby", "Služby"],
  ["/#o-mne", "O mně"],
  ["/#realizace", "Realizace"],
  ["/#spoluprace", "Spolupráce"],
] as const;

export const privacyPath = "/ochrana-osobnich-udaju";
