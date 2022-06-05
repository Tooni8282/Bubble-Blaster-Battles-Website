const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./docs/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
