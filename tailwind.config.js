/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Yeni modern tema - Mavi-Mor
                primary: '#667eea',      // Soft Blue
                secondary: '#764ba2',    // Purple
                accent: '#f093fb',       // Pink accent
                surface: 'rgba(255, 255, 255, 0.1)',
                border: 'rgba(255, 255, 255, 0.2)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            },
        },
    },
    plugins: [],
}
