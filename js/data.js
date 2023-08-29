let isWidgetActive = false

const cookiesArr = ['translateLanguage', 'text-magnify-color-swatch', 'reading-mask-reload', 'text-magnify-size-input', 'img-magnify-size-input', 'img-magnify-color-swatch', 'text-magnify-color-swatch', '.img-magnify-color-swatch', 'edit-reading-guide', 'edit-reading-mask', 'TTS_click_enabled', 'googtrans', 'readingMaskVal', 'BackgroundColorCookie', 'TextColorCookie', 'LinkColorCookie', 'TextMagnifier', 'HighlightLinks', 'ImageDescription', 'HighlightHover', 'FontSizeCookie', 'BaskervilleFontCookie', 'DyslexicFontCookie', 'FM_FontTypeCookie', 'CursorEnlargeCookie', 'DarkContrastBackgroundCookie', 'LowSaturationBackgroundCookie', 'InvertBackgroundCookie', 'HighSaturationBackgroundCookie', 'DesaturatedBackgroundCookie', 'DesaturatedBackgroundCookie', 'InvertBackgroundCookie', 'DarkContrastBackgroundCookie', 'SeizureSafe', 'ReadingMask', 'CursorGuide', 'TTS_click_enabled', 'LinpageHeightVal', 'WordSpaceVal', 'LetterSpaceVal', 'speechPitch', 'speechRate', 'speechVol', 'voiceCookie']

// booleans used to determine if widget is still active
let widgetItemObj = {
    isHighlighted: false,
    isOutlined: false,
    isTextMag: false,
    isImgMag: false,
    isFontBig: false,
    isFontChanged: false,
    isCursorBig: false,
    isLineHeightChanged: false,
    isWordSpaceChanged: false,
    isLetterSpaceChanged: false,

    isDarkContrast: false,
    isDesaturated: false,
    isInverted: false,
    isHighSat: false,
    isLowSat: false,

    isTextColorChanged: false,
    isBackColorChanged: false,
    isLinkColorChanged: false,
    isSeizureSafe: false,
    isReadingMask: false,
    isReadingGuide: false,
    isSpeech: false,
    isDyslexicFont: false,
    isBaskervilleFont: false,
    isTranslated: false,
}

// const itemArr = [
//     {
//         id: 'ToggleHighlightHover',
//         cookie: 'HighlightHover',
//         isActive: false,
//     },
//     {
//         id: 'ToggleHighlightHover',
//         cookie: 'HighlightHover',
//         isActive: false,
//     },
//     {

//     }
// ]



