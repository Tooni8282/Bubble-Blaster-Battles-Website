const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./docs/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        screens: {
            bs: "0px",
            xxs: "360px",
            xs: "475px",
            ...screens,
            betterhover: { raw: "(hover:hover)" },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
