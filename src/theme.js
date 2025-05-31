const theme = {
    colors: {
        darkBg: '#0f1117',
        darkBg2: '#181a20',
        lightBg: '#f8fafc',
        lightBg2: '#e2e8f0',
        accent: {
            primary: '#5a8fff',
            secondary: '#b16cff',
            success: '#1aff8b',
            warning: '#ffb01f',
            danger: '#ff5a5a'
        },
        text: {
            primary: '#e3e8ff',
            secondary: '#b3b8d6',
            muted: '#7b8bbd'
        },
        glass: {
            bg: 'rgba(30, 32, 48, 0.85)',
            border: 'rgba(90, 143, 255, 0.12)',
            hover: 'rgba(30, 32, 48, 0.95)'
        },
        card: {
            bg: 'rgba(24, 26, 32, 0.98)',
            border: '#23263a',
            hover: {
                shadow: '0 12px 40px 0 rgba(90, 143, 255, 0.25), 0 2px 16px 0 rgba(177, 108, 255, 0.12)',
                border: '#5a8fff'
            }
        },
        gradients: {
            primary: 'linear-gradient(90deg, #5a8fff 0%, #b16cff 100%)',
            glow: '0 0 8px #5a8fff, 0 0 16px #b16cff',
            text: 'linear-gradient(90deg, #e3e8ff 0%, #b3b8d6 100%)'
        }
    },
    spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem'
    },
    borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '18px',
        xl: '24px',
        full: '9999px'
    },
    animation: {
        transition: '0.25s cubic-bezier(.4,0,.2,1)',
        hover: {
            transform: 'translateY(-8px) scale(1.035)',
            transition: '0.3s cubic-bezier(.4,0,.2,1)'
        }
    },
    typography: {
        fontFamily: {
            primary: "'Inter', system-ui, -apple-system, sans-serif",
            mono: "'Fira Mono', 'Consolas', monospace"
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem'
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800
        }
    },
    shadows: {
        sm: '0 2px 8px 0 rgba(31, 38, 135, 0.1)',
        md: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        lg: '0 12px 40px 0 rgba(90, 143, 255, 0.25)',
        glow: '0 0 8px #5a8fff, 0 0 16px #b16cff'
    },
    blur: {
        sm: '8px',
        md: '16px',
        lg: '24px'
    }
};

export default theme;