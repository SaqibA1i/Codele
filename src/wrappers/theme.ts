export const DARK_MODE = 'darkMode';
export enum THEME {
    LIGHT = 'light',
    DARK = 'dark'
}

export const theme = {
    [THEME.DARK]: {
        main: "rgb(27, 28, 34)",
        accent: "#25262c",
        accentGradient: "linear-gradient(#dfbd00, #c49703)",
        buttonAccent: "linear-gradient(#dfbd00, #c49703)",
        text: "#9951fa",
        textAccent: "#dfbd00",
        error: "#ff8044",
        emptyBar: "#2e2f33",
    },
    [THEME.LIGHT]: {
        main: "aliceblue",
        accent: "#25262c",
        accentGradient: "linear-gradient(#2c77ff,rgba(44,118,255,.761))",
        buttonAccent: "#c3d7d8",
        text: "#9951fa",
        textAccent: "rgba(44,118,255,.761)",
        error: "#ff8044",
        emptyBar: "rgba(70,70,70,.151)",
    },
};
