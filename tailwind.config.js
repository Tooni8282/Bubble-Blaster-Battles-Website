const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./docs/*.{html,js}"],
    theme: {
        screens: {
            bs: "0px",
            xxs: "360px",
            xs: "475px",
            ...screens,
        },
        extend: {
            backgroundSize: {
                "size-200": "200% 200%",
            },
            backgroundPosition: {
                "pos-0": "0% 0%",
                "pos-100": "100% 100%",
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require("tw-elements/dist/plugin")],
};
