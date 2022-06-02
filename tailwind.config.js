module.exports = {
    content: ["./docs/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio", "@videojs/http-streaming", "@videojs/vhs-utils", "@videojs/xhr"),
    ],
};
