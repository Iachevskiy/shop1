const primaryColor = 'rgb(252, 224, 0)';
const primaryColorHover = '#f2d700';

const SecondaryColor = '#f1f0ed';
const SecondaryColorHover = '#e7e6e4';

const defaultColor = 'white';
const defaultColorHover = '#fafbfc';

const colorBtn = '#21201f';

export default {
  common: {
    borderRadius: '8px',
    borderFocus: `1px solid ${SecondaryColor}`,
    borderHover: `1px solid ${SecondaryColor}`,
    boxShadowFocus: 'none',
    caretColor: colorBtn,

    borderPrimary: 'none',
    borderHoverPrimary: 'none',
    borderPressedPrimary: 'none',
    borderFocusPrimary: 'none',
    borderDisabledPrimary: 'none',
    primaryColor,
  },

  Select: {
    borderRadius: '8px',
    borderFocus: `1px solid ${SecondaryColor}`,
    borderHover: `1px solid ${SecondaryColor}`,
    boxShadowFocus: 'none',
    caretColor: colorBtn,
    borderPrimary: 'none',
    borderHoverPrimary: 'none',
    borderPressedPrimary: 'none',
    borderFocusPrimary: 'none',
    borderDisabledPrimary: 'none',
  },

  Input: {
    borderRadius: '8px',
    borderFocus: `1px solid ${SecondaryColor}`,
    borderHover: `1px solid ${SecondaryColor}`,
    boxShadowFocus: 'none',
    caretColor: colorBtn,

  },

  Button: {

    borderRadiusLarge: '16px',
    heightLarge: '48px',
    paddingLarge: '0 20px',
    fontSizeLarge: '16px',

    // цвет пульсации
    rippleColor: 'red',

    // Primary type-theme
    // background
    // colorPrimary: primaryColor,
    colorHoverPrimary: primaryColorHover,
    colorPressedPrimary: primaryColorHover,
    colorFocusPrimary: primaryColorHover,
    colorDisabledPrimary: primaryColor,
    rippleColorPrimary: primaryColor,
    // color
    textColorPrimary: colorBtn,
    textColorHoverPrimary: colorBtn,
    textColorPressedPrimary: colorBtn,
    textColorFocusPrimary: colorBtn,
    textColorDisabledPrimary: colorBtn,
    // border
    borderPrimary: 'none',
    borderHoverPrimary: 'none',
    borderPressedPrimary: 'none',
    borderFocusPrimary: 'none',
    borderDisabledPrimary: 'none',

    // Secondary(Info) type-theme
    // background
    colorInfo: SecondaryColor,
    colorHoverInfo: SecondaryColorHover,
    colorPressedInfo: SecondaryColorHover,
    colorFocusInfo: SecondaryColorHover,
    colorDisabledInfo: SecondaryColor,
    rippleColorInfo: SecondaryColor,

    // color
    textColorInfo: colorBtn,
    textColorHoverInfo: colorBtn,
    textColorPressedInfo: colorBtn,
    textColorFocusInfo: colorBtn,
    textColorDisabledInfo: colorBtn,
    // border
    borderInfo: 'none',
    borderHoverInfo: 'none',
    borderPressedInfo: 'none',
    borderFocusInfo: 'none',
    borderDisabledInfo: 'none',

    //  default (Warning) type-theme
    // background
    colorWarning: defaultColor,
    colorHoverWarning: defaultColorHover,
    colorPressedWarning: defaultColorHover,
    colorFocusWarning: defaultColorHover,
    colorDisabledWarning: defaultColor,
    rippleColorWarning: defaultColor,

    // color
    textColorWarning: colorBtn,
    textColorHoverWarning: colorBtn,
    textColorPressedWarning: colorBtn,
    textColorFocusWarning: colorBtn,
    textColorDisabledWarning: colorBtn,
    // border
    borderWarning: 'none',
    borderHoverWarning: 'none',
    borderPressedWarning: 'none',
    borderFocusWarning: 'none',
    borderDisabledWarning: 'none',

  },
};
