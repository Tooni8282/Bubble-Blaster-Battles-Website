const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./docs/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        screens: {
            bs: "0px",
            xs: "475px",
            ...screens,
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
