/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkolivegreen: {
          "100": "#5b4707",
          "200": "#3d4700",
          "300": "#273405",
          "400": "#163707",
          "500": "#12370a",
          "600": "#13340c",
          "700": "#11330a",
          "800": "#05310b",
          "900": "#0b2e04",
          "1000": "rgba(19, 52, 12, 0.49)",
          "1100": "rgba(19, 52, 12, 0.8)",
          "1200": "#204304",
        },
        white: "#fff",
        darkgray: {
          "100": "#baafaf",
          "200": "#a6b8a9",
          "300": "#bda7a7",
          "400": "#9599a3",
        },
        seagreen: {
          "100": "#358f43",
          "200": "rgba(59, 147, 81, 0.4)",
          "300": "rgba(53, 143, 67, 0.8)",
          "400": "rgba(53, 143, 67, 0.3)",
        },
        gainsboro: {
          "100": "#e4e4e4",
          "200": "#dedddd",
          "300": "#d9d9d9",
        },
        gray: {
          "100": "#fffdfd",
          "200": "#fcfcfc",
          "300": "#7d7c7c",
          "400": "#1d291e",
          "500": "#172310",
          "600": "#10220b",
          "700": "rgba(255, 255, 255, 0.06)",
          "800": "rgba(255, 255, 255, 0.07)",
          "900": "rgba(255, 255, 255, 0.45)",
          "1000": "rgba(255, 255, 255, 0.5)",
          "1100": "rgba(255, 255, 255, 0.6)",
          "1200": "rgba(125, 124, 124, 0.6)",
          "1300": "rgba(0, 0, 0, 0.1)",
          "1400": "rgba(33, 33, 34, 0.8)",
          "1500": "rgba(255, 255, 255, 0.16)",
          "1600": "rgba(255, 255, 255, 0.8)",
          "1700": "rgba(5, 5, 5, 0.06)",
          "1800": "rgba(255, 255, 255, 0.1)",
          "1900": "#0e0808",
          "2000": "#65816a",
        },
        goldenrod: {
          "100": "#feca3a",
          "200": "#f0c024",
          "300": "rgba(240, 192, 36, 0.4)",
          "400": "rgba(240, 192, 36, 0.6)",
          "500": "rgba(240, 192, 36, 0.8)",
          "600": "rgba(240, 192, 36, 0.7)",
        },
        darkslategray: {
          "100": "#495740",
          "200": "#003a2b",
          "300": "#002a24",
          "400": "rgba(6, 43, 12, 0.14)",
          "500": "rgba(58, 58, 58, 0.75)",
          "600": "rgba(0, 58, 43, 0.8)",
          "700": "rgba(0, 58, 43, 0.5)",
          "800": "rgba(59, 58, 58, 0.1)",
        },
        dimgray: {
          "100": "#515151",
          "200": "rgba(103, 72, 64, 0.24)",
          "300": "rgba(81, 81, 81, 0)",
        },
        darkslateblue: "rgba(48, 57, 99, 0.24)",
        black: "#000",
        sandybrown: "#ffa247",
        yellowgreen: {
          "100": "#c3db33",
          "200": "#bbd432",
        },
        olivedrab: {
          "100": "#9eb032",
          "200": "rgba(158, 176, 50, 0.8)",
        },
        beige: "#e3f5d5",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#ececec",
        },
        forestgreen: {
          "100": "#037b20",
          "200": "rgba(79, 148, 62, 0.6)",
        },
        honeydew: {
          "100": "#edffef",
          "200": "#f1fdeb",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "lexend-deca": "'Lexend Deca'",
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "21xl-4": "40.4px",
        "39xl-3": "58.3px",
        "17xl-9": "36.9px",
        "12xl-9": "31.9px",
        "21xl-5": "40.5px",
        "6xs-5": "6.5px",
        "6xs-7": "6.7px",
        "5xs-8": "7.8px",
        "5xs": "8px",
        "base-6": "16.6px",
        "mid-1": "17.1px",
        "xl-6": "20.6px",
        "2xl-3": "21.3px",
        "11xl": "30px",
        "12xl": "31px",
        xl: "20px",
        "9xs-1": "3.1px",
        "9xs-8": "3.8px",
        "7xs-6": "5.6px",
        "6xs": "7px",
        "3xs": "10px",
        "21xl": "40px",
        "7xs-3": "5.3px",
        "5xs-2": "7.2px",
        "6xs-3": "6.3px",
        "base-3": "16.3px",
        "5xs-3": "7.3px",
        "4xs-9": "8.9px",
        "3xl": "22px",
        "xs-9": "11.9px",
        "359xl-4": "378.4px",
        "31xl": "50px",
        mini: "15px",
        "xl-5": "20.5px",
        "5xl": "24px",
        "15xl-7": "34.7px",
        lgi: "19px",
        "5xl-9": "24.9px",
        "10xl-3": "29.3px",
        "23xl-3": "42.3px",
        "7xl-8": "26.8px",
        "4xl-2": "23.2px",
        "3xl-4": "22.4px",
        "13xl-4": "32.4px",
        "mid-7": "17.7px",
        "3xl-5": "22.5px",
        "9xl": "28px",
        "6xl-6": "25.6px",
        "3xl-1": "22.1px",
        "9xl-2": "28.2px",
        "18xl": "37px",
        "6xl": "25px",
        "10xl": "29px",
        smi: "13px",
        "4xs-7": "8.7px",
        "base-4": "15.4px",
        "2xs-3": "10.3px",
        "base-2": "15.2px",
        "2xs-1": "10.1px",
        "lg-9": "18.9px",
        "smi-6": "12.6px",
        "8xl-2": "27.2px",
        "lg-1": "18.1px",
        "29xl-9": "48.9px",
        "29xl": "48px",
        "sm-2": "13.2px",
        "lg-5": "18.5px",
        "5xs-4": "7.4px",
        "sm-3": "13.3px",
        base: "16px",
        "6xs-4": "6.4px",
        "5xs-7": "7.7px",
        "lgi-2": "19.2px",
        "sm-7": "13.7px",
        "base-1": "15.1px",
        "3xl-3": "22.3px",
        "8xl-8": "27.8px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      mini: "15px",
      xl: "20px",
      "26xl": "45px",
      "21xl": "40px",
      "15xl": "34px",
      "7xs-2": "5.2px",
      "8xs-3": "4.3px",
      "smi-1": "12.1px",
      "8xs-1": "4.1px",
      "4xs-2": "8.2px",
      "9xs-2": "3.2px",
      "7xs": "6px",
      "9xs-9": "3.9px",
      "7xs-4": "5.4px",
      "4xs-6": "8.6px",
      "6xs-2": "6.2px",
      "mini-5": "14.5px",
      "8xs-9": "4.9px",
      "3xs-8": "9.8px",
      "5xs-2": "7.2px",
      "8xs-6": "4.6px",
      "6xs-5": "6.5px",
      "2xs-3": "10.3px",
      "sm-2": "13.2px",
      "2xs": "11px",
      "11xl-9": "30.9px",
      "2xs-5": "10.5px",
      "2xl": "21px",
      "4xs-3": "8.3px",
      "base-4": "16.4px",
      "3xs-9": "9.9px",
      "sm-8": "13.8px",
      "3xl-1": "22.1px",
      "base-5": "16.5px",
      "sm-7": "13.7px",
      "19xl-5": "38.5px",
      "sm-1": "13.1px",
      "7xl-1": "26.1px",
      "lgi-2": "19.2px",
      "smi-4": "12.4px",
      "mid-2": "17.2px",
      "8xl-5": "27.5px",
      "5xl": "24px",
      "37xl": "56px",
      lgi: "19px",
      "19xl": "38px",
      "9xl": "28px",
      "6xl": "25px",
      "5xs-6": "7.6px",
      "3xl": "22px",
      smi: "13px",
      xs: "12px",
      sm: "14px",
      "2xl-8": "21.8px",
      "121xl": "140px",
      "8xs-7": "4.7px",
      "4xs-8": "8.8px",
      "sm-9": "13.9px",
      "7xs-3": "5.3px",
      "8xs-8": "4.8px",
      "2xs-6": "10.6px",
      "base-8": "16.8px",
      "smi-3": "12.3px",
      "xs-1": "11.1px",
      "base-6": "15.6px",
      "17xl-2": "36.2px",
      "sm-3": "13.3px",
      "lgi-5": "19.5px",
      "26xl-4": "45.4px",
      "46xl": "65px",
      "8xs-5": "4.5px",
      "3xs-7": "9.7px",
      "lgi-7": "19.7px",
      "xs-5": "11.5px",
      "4xl-4": "23.4px",
      "9xl-3": "28.3px",
      "mid-5": "17.5px",
      "16xl-6": "35.6px",
      "xs-7": "11.7px",
      "6xl-1": "25.1px",
      "31xl-9": "50.9px",
      "11xl": "30px",
      "7xs-1": "5.1px",
      "3xs": "10px",
      "6xs-1": "6.1px",
      "xs-9": "11.9px",
      "16xl-7": "35.7px",
      "26xl-3": "45.3px",
      "32xl": "51px",
      "39xl-3": "58.3px",
      "38xl-1": "57.1px",
      "mid-1": "17.1px",
      "lg-4": "18.4px",
      "43xl-1": "62.1px",
      "52xl": "71px",
      "47xl-7": "66.7px",
      "71xl": "90px",
      "76xl-1": "95.1px",
      "mini-8": "14.8px",
      "61xl": "80px",
      "2xs-1": "10.1px",
      "11xl-3": "30.3px",
      "3xs-5": "9.5px",
      "5xs-8": "7.8px",
      "5xs-4": "7.4px",
      "5xs-7": "7.7px",
      "5xs-9": "7.9px",
      "4xs-9": "8.9px",
      "5xs-5": "7.5px",
      "5xs": "8px",
      "4xs-7": "8.7px",
      "2xs-2": "10.2px",
      "17xl-9": "36.9px",
      "xs-6": "11.6px",
      "3xs-4": "9.4px",
      "2xs-9": "10.9px",
      "4xs": "9px",
      "3xs-6": "9.6px",
      "3xs-2": "9.2px",
      "lg-9": "18.9px",
      "smi-5": "12.5px",
      "2xs-4": "10.4px",
      "12xl-2": "31.2px",
      "4xl-6": "23.6px",
      "41xl": "60px",
      "6xs-9": "6.9px",
      "mid-6": "17.6px",
      "3xs-3": "9.3px",
      "lg-8": "18.8px",
      "xl-9": "20.9px",
      "3xs-1": "9.1px",
      "4xs-1": "8.1px",
      "base-1": "15.1px",
      "xs-3": "11.3px",
      "xl-8": "20.8px",
      "lg-7": "18.7px",
      "base-3": "16.3px",
      "smi-7": "12.7px",
      mid: "17px",
      "44xl": "63px",
      "mini-4": "14.4px",
      "53xl": "72px",
      "51xl": "70px",
      "25xl": "44px",
      "5xl-1": "24.1px",
      "13xl": "32px",
      "107xl-5": "126.5px",
      "43xl": "62px",
      "6xs-3": "6.3px",
      "8xl-9": "27.9px",
      "smi-9": "12.9px",
      "7xl-7": "26.7px",
      "xs-2": "11.2px",
      "5xl-2": "24.2px",
      "19xl-4": "38.4px",
      "lg-3": "18.3px",
      "sm-5": "13.5px",
      "21xl-9": "40.9px",
      "19xl-1": "38.1px",
      "7xs-7": "5.7px",
      "84xl-6": "103.6px",
      "111xl-1": "130.1px",
      "4xl-3": "23.3px",
      "167xl-4": "186.4px",
      "base-7": "16.7px",
      "181xl": "200px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
