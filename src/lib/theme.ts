export default {
  colors: {
    text: "#000",
    background: "#FFFFFF",
    primary: "#FFF",
    secondary: "#F0B929",
  },
  forms: {
    input: {
      color: "#1C1C1C",
    },
  },
  alerts: {
    primary: {
      color: "background",
      bg: "primary",
    },
    success: {
      bg: "validationSuccessLight",
      color: "fontDark",
      border: "1px solid #219653",
    },
    error: {
      bg: "errorLight",
      color: "fontDark",
      border: "1px solid #F56132",
    },
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
    monospace: '"Open Sans", sans-serif',
    label: '"Open Sans", sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    spinner: {
      color: "primary",
    },
    h1: {
      fontSize: 36,
      fontFamily: "body",
      fontWeight: "heading",
      color: "fontDark",
      mt: 4,
      mb: 2,
    },
    h2: {
      fontFamily: "body",
      fontWeight: "heading",
      color: "fontDark",
      lineHeight: "49.18px",
    },
    a: {
      "&:hover": {
        cursor: "pointer",
      },
      color: "primary",
      fontFamily: "body",
    },
    p: {
      fontFamily: "body",
    },
    body: {
      backgroundColor: "greyBackground",
    },
  },
  breakpoints: [
    "40em",
    "@media (min-width: 56em) and (orientation: landscape)",
    "64em",
  ],
  label: {
    fontFamily: "body",
  },
  buttons: {
    primary: {
      backgroundColor: "primary",
      "&:hover": {
        cursor: "pointer",
      },
      height: 49,
      border: "1px solid grey",
      borderRadius: 12,
    },
    "primary-wide": {
      backgroundColor: "primary",
      "&:hover": {
        cursor: "pointer",
      },
      height: 49,
      width: ["90%", 404],
      marginRight: ["5%", "unset"],
      marginLeft: ["5%", "unset"],
      borderRadius: 100,
    },
    "secondary-wide": {
      backgroundColor: "secondary",
      "&:hover": {
        cursor: "pointer",
      },
      height: 49,
      width: ["90%", 404],
      marginRight: ["5%", "unset"],
      marginLeft: ["5%", "unset"],
      borderRadius: 100,
    },
    secondary: {
      backgroundColor: "secondary",
      "&:hover": {
        cursor: "pointer",
      },
      color: "fontDark",
      height: 49,
      borderRadius: 100,
    },
    disabled: {
      backgroundColor: "#BEBEBE",
      "&:hover": {
        cursor: "not-allowed",
      },
      height: 49,
      borderRadius: 100,
    },
  },
};
