interface Settings {
  darkMode: boolean;
  fontSize: number;
  language: string;
}

let settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};
// settings.darkMode = "qwerty";

console.log(settings);
