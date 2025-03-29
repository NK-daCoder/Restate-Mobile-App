import { StyleSheet } from 'react-native';

const utilityStyles = StyleSheet.create({
  // Spacing Utilities
  m0: { margin: 0 },
  m1: { margin: 4 },
  m2: { margin: 8 },
  m3: { margin: 12 },
  m4: { margin: 16 },

  mx0: { marginHorizontal: 0 },
  mx1: { marginHorizontal: 4 },
  mx2: { marginHorizontal: 8 },
  mx3: { marginHorizontal: 12 },
  mx4: { marginHorizontal: 16 },

  my0: { marginVertical: 0 },
  my1: { marginVertical: 4 },
  my2: { marginVertical: 8 },
  my3: { marginVertical: 12 },
  my4: { marginVertical: 16 },
  my5: { marginVertical: 20 },
  my6: { marginVertical: 24 },

  ml0: { marginLeft: 0 },
  ml1: { marginLeft: 4 },
  ml2: { marginLeft: 8 },
  ml3: { marginLeft: 12 },
  ml4: { marginLeft: 16 },

  mr0: { marginRight: 0 },
  mr1: { marginRight: 4 },
  mr2: { marginRight: 8 },
  mr3: { marginRight: 12 },
  mr4: { marginRight: 16 },

  mt0: { marginTop: 0 },
  mt1: { marginTop: 4 },
  mt2: { marginTop: 8 },
  mt3: { marginTop: 12 },
  mt4: { marginTop: 16 },

  mb0: { marginBottom: 0 },
  mb1: { marginBottom: 4 },
  mb2: { marginBottom: 8 },
  mb3: { marginBottom: 12 },
  mb4: { marginBottom: 16 },

  p0: { padding: 0 },
  p1: { padding: 4 },
  p2: { padding: 8 },
  p3: { padding: 12 },
  p4: { padding: 16 },
  p5: {padding: 20},
  p6: {padding: 24},
  p7: {padding: 28},

  px0: { paddingHorizontal: 0 },
  px1: { paddingHorizontal: 4 },
  px2: { paddingHorizontal: 8 },
  px3: { paddingHorizontal: 12 },
  px4: { paddingHorizontal: 16 },

  py0: { paddingVertical: 0 },
  py1: { paddingVertical: 4 },
  py2: { paddingVertical: 8 },
  py3: { paddingVertical: 12 },
  py4: { paddingVertical: 16 },

  pl0: { paddingLeft: 0 },
  pl1: { paddingLeft: 4 },
  pl2: { paddingLeft: 8 },
  pl3: { paddingLeft: 12 },
  pl4: { paddingLeft: 16 },

  pr0: { paddingRight: 0 },
  pr1: { paddingRight: 4 },
  pr2: { paddingRight: 8 },
  pr3: { paddingRight: 12 },
  pr4: { paddingRight: 16 },

  pt0: { paddingTop: 0 },
  pt1: { paddingTop: 4 },
  pt2: { paddingTop: 8 },
  pt3: { paddingTop: 12 },
  pt4: { paddingTop: 16 },

  pb0: { paddingBottom: 0 },
  pb1: { paddingBottom: 4 },
  pb2: { paddingBottom: 8 },
  pb3: { paddingBottom: 12 },
  pb4: { paddingBottom: 16 },

  // Flexbox Utilities
  flexNone: { flex: 0 },
  flex: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexCol: { flexDirection: 'column' },
  justifyCenterXY: { justifyContent: 'center', alignItems: 'center' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  flexStart: { justifyContent: 'flex-start' },
  flexEnd: { justifyContent: 'flex-end' },
  alignItemCenter: { alignItems: "center"},

  // Text Utilities
  textCenter: { textAlign: 'center' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
  textBold: { fontWeight: 'bold' },
  textLight: { fontWeight: '300' },
  textPrimary: { color: '#007bff' },
  textSecondary: { color: '#6c757d' },

  // Text Sizes
  textXs: { fontSize: 12 },
  textSm: { fontSize: 11.5 },
  textBase: { fontSize: 16 },
  textLg: { fontSize: 18 },
  textXl: { fontSize: 20 },
  text2xl: { fontSize: 24 },
  text3xl: { fontSize: 30 },
  text4xl: { fontSize: 36 },
  text5xl: { fontSize: 48 },

  // Border Utilities
  border: { borderWidth: 1, borderColor: '#ddd' },
  borderPrimary: { borderWidth: 1, borderColor: '#007bff' },
  borderPrimaryBottom: { borderWidth: 1, borderColor: '#007bff' },
  
  borderThin: { borderWidth: 0.5 },
  borderThick: { borderWidth: 2 },
  borderThicker: { borderWidth: 4 },
  borderThickest: { borderWidth: 6 },

  borderSolid: { borderWidth: 1, borderStyle: 'solid' }, 
  borderDashed: { borderWidth: 1, borderStyle: 'dashed' },
  borderDotted: { borderWidth: 1, borderStyle: 'dotted' },

  borderTop: { borderTopWidth: 1, borderColor: '#ddd' },
  borderBottom: { borderBottomWidth: 1, borderColor: '#ddd' },
  borderLeft: { borderLeftWidth: 1, borderColor: '#ddd' },
  borderRight: { borderRightWidth: 1, borderColor: '#ddd' },

  // Border Radius Utilities
  roundedNone: { borderRadius: 0 }, // No border radius
  roundedSm: { borderRadius: 2 }, // Small border radius
  rounded: { borderRadius: 4 }, // Default border radius
  roundedMd: { borderRadius: 6 }, // Medium border radius
  roundedLg: { borderRadius: 8 }, // Large border radius
  roundedXl: { borderRadius: 12 }, // Extra large border radius
  rounded2xl: { borderRadius: 16 }, // 2x large border radius
  rounded3xl: { borderRadius: 24 }, // 3x large border radius
  roundedFull: { borderRadius: 9999 }, // Fully rounded (circle)

  // Individual Corner Border Radius
  roundedTNone: { borderTopLeftRadius: 0, borderTopRightRadius: 0 }, // Top corners
  roundedRNone: { borderTopRightRadius: 0, borderBottomRightRadius: 0 }, // Right corners
  roundedBNone: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }, // Bottom corners
  roundedLNone: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }, // Left corners

  roundedTSm: { borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  roundedRSm: { borderTopRightRadius: 2, borderBottomRightRadius: 2 },
  roundedBSm: { borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
  roundedLSm: { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },

  roundedT: { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  roundedR: { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  roundedB: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
  roundedL: { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },

  roundedTMd: { borderTopLeftRadius: 6, borderTopRightRadius: 6 },
  roundedRMd: { borderTopRightRadius: 6, borderBottomRightRadius: 6 },
  roundedBMd: { borderBottomLeftRadius: 6, borderBottomRightRadius: 6 },
  roundedLMd: { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 },

  roundedTLg: { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  roundedRLg: { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
  roundedBLg: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  roundedLLg: { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },

  roundedTXl: { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  roundedRXl: { borderTopRightRadius: 12, borderBottomRightRadius: 12 },
  roundedBXl: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
  roundedLXl: { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },

  roundedT2xl: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  roundedR2xl: { borderTopRightRadius: 16, borderBottomRightRadius: 16 },
  roundedB2xl: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  roundedL2xl: { borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },

  roundedT3xl: { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  roundedR3xl: { borderTopRightRadius: 24, borderBottomRightRadius: 24 },
  roundedB3xl: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  roundedL3xl: { borderTopLeftRadius: 24, borderBottomLeftRadius: 24 },

  roundedTFull: { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },
  roundedRFull: { borderTopRightRadius: 9999, borderBottomRightRadius: 9999 },
  roundedBFull: { borderBottomLeftRadius: 9999, borderBottomRightRadius: 9999 },
  roundedLFull: { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },

  // Width & Height Utilities
  w0: { width: 0 },
  w1: { width: 4 },
  w2: { width: 8 },
  w3: { width: 12 },
  w4: { width: 16 },
  w5: { width: 20 },
  w6: { width: 24 },
  w8: { width: 32 },
  w10: { width: 40 },
  w12: { width: 48 },
  w16: { width: 64 },
  w20: { width: 80 },
  w24: { width: 96 },
  w32: { width: 128 },
  w40: { width: 160 },
  w42: {width: 165},
  w48: { width: 192 },
  w56: { width: 224 },
  w58: {width: 225},
  w64: { width: 256 },
  

  wFull: { width: '100%' },
  wAuto: { width: 'auto' },

  // Height Utilities
  h0: { height: 0 },
  h1: { height: 4 },
  h2: { height: 8 },
  h3: { height: 12 },
  h4: { height: 16 },
  h5: { height: 20 },
  h6: { height: 24 },
  h8: { height: 32 },
  h10: { height: 40 },
  h12: { height: 48 },
  h16: { height: 64 },
  h20: { height: 80 },
  h24: { height: 96 },
  h32: { height: 128 },
  h40: { height: 160 },
  h48: { height: 192 },
  h56: { height: 224 },
  h64: { height: 256 },
  h68: { height: 275 },
  hFull: { height: '100%' },
  hAuto: { height: 'auto' },

  minW0: { minWidth: 0 },
  minWFull: { minWidth: '100%' },
  minW1_2: { minWidth: '50%' },
  minW1_3: { minWidth: '33.3333%' },
  minW1_4: { minWidth: '25%' },
  minW1_5: { minWidth: '20%' },
  minW1_6: { minWidth: '16.6667%' },
 

  // Min-Height Utilities
  minH0: { minHeight: 0 },
  minHFull: { minHeight: '100%' },
  minH1_2: { minHeight: '50%' },
  minH1_3: { minHeight: '33.3333%' },
  minH1_4: { minHeight: '25%' },
  minH1_5: { minHeight: '20%' },
  minH1_6: { minHeight: '16.6667%' },
  minH1_7: { minHeight: '7.58%' },
 

  // Max-Width Utilities
  maxW0: { maxWidth: 0 },
  maxWFull: { maxWidth: '100%' },
  maxW1_2: { maxWidth: '50%' },
  maxW1_3: { maxWidth: '33.3333%' },
  maxW1_4: { maxWidth: '25%' },
  maxW1_5: { maxWidth: '20%' },
  maxW1_6: { maxWidth: '16.6667%' },
 

  // Max-Height Utilities
  maxH0: { maxHeight: 0 },
  maxHFull: { maxHeight: '100%' },
  maxH1_2: { maxHeight: '50%' },
  maxH1_3: { maxHeight: '33.3333%' },
  maxH1_4: { maxHeight: '25%' },
  maxH1_5: { maxHeight: '20%' },
  maxH1_6: { maxHeight: '16.6667%' },


  // Percentage-Based Width and Height
  w1_2: { width: '50%' },
  w1_3: { width: '33.333333%' },
  w2_3: { width: '66.666667%' },
  w1_4: { width: '25%' }, 
  w2_4: { width: '50%' },
  w3_4: { width: '75%' },
  w1_5: { width: '20%' },
  w2_5: { width: '40%' },
  w3_5: { width: '60%' },
  w4_5: { width: '80%' },

  h1_2: { height: '50%' },
  h1_3: { height: '33.333333%' },
  h2_3: { height: '66.666667%' },
  h1_4: { height: '25%' },
  h2_4: { height: '50%' },
  h3_4: { height: '75%' },
  h1_5: { height: '20%' },
  h2_5: { height: '40%' },
  h3_5: { height: '60%' },
  h4_5: { height: '80%' },

  // Positioning Utilities
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  fixed: { position: 'fixed' },
  sticky: { position: 'sticky' },

  // Positive positioning
  top0: { top: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },
  right0: { right: 0 },

  top1: { top: 4 },
  bottom1: { bottom: 4 },
  left1: { left: 4 },
  right1: { right: 4 },

  top2: { top: 8 },
  bottom2: { bottom: 8 },
  left2: { left: 8 },
  right2: { right: 8 },

  top3: { top: 12 },
  bottom3: { bottom: 12 },
  left3: { left: 12 },
  right3: { right: 12 },

  top4: { top: 16 },
  bottom4: { bottom: 16 },
  left4: { left: 16 },
  right4: { right: 16 },

  top5: { top: 20 },
  bottom5: { bottom: 20 },
  left5: { left: 20 },
  right5: { right: 20 },

  top10: { top: 40 },
  bottom10: { bottom: 40 },
  left10: { left: 40 },
  right10: { right: 40 },

  top15: { top: 60 },
  bottom15: { bottom: 60 },
  left15: { left: 60 },
  right15: { right: 60 },

  top20: { top: 80 },
  bottom20: { bottom: 80 },
  left20: { left: 80 },
  right20: { right: 80 },

  // Negative positioning
  topN1: { top: -4 },
  bottomN1: { bottom: -4 },
  leftN1: { left: -4 },
  rightN1: { right: -4 },

  topN2: { top: -8 },
  bottomN2: { bottom: -8 },
  leftN2: { left: -8 },
  rightN2: { right: -8 },

  topN3: { top: -12 },
  bottomN3: { bottom: -12 },
  leftN3: { left: -12 },
  rightN3: { right: -12 },

  topN4: { top: -16 },
  bottomN4: { bottom: -16 },
  leftN4: { left: -16 },
  rightN4: { right: -16 },

  topN5: { top: -20 },
  bottomN5: { bottom: -20 },
  leftN5: { left: -20 },
  rightN5: { right: -20 },

  topN10: { top: -40 },
  bottomN10: { bottom: -40 },
  leftN10: { left: -40 },
  rightN10: { right: -40 },

  topN15: { top: -60 },
  bottomN15: { bottom: -60 },
  leftN15: { left: -60 },
  rightN15: { right: -60 },

  topN20: { top: -80 },
  bottomN20: { bottom: -80 },
  leftN20: { left: -80 },
  rightN20: { right: -80 },

  topN40: { top: -100 },
  bottomN40: { bottom: -100 },
  leftN40: { left: -100 },
  rightN40: { right: -100 },

  // Inset utilities
  inset0: { top: 0, right: 0, bottom: 0, left: 0 },
  inset1: { top: 4, right: 4, bottom: 4, left: 4 },
  inset2: { top: 8, right: 8, bottom: 8, left: 8 },
  inset3: { top: 12, right: 12, bottom: 12, left: 12 },
  inset4: { top: 16, right: 16, bottom: 16, left: 16 },
  inset5: { top: 20, right: 20, bottom: 20, left: 20 },

  insetN1: { top: -4, right: -4, bottom: -4, left: -4 },
  insetN2: { top: -8, right: -8, bottom: -8, left: -8 },
  insetN3: { top: -12, right: -12, bottom: -12, left: -12 },
  insetN4: { top: -16, right: -16, bottom: -16, left: -16 },
  insetN5: { top: -20, right: -20, bottom: -20, left: -20 },

  // Centering utilities
  centerX: { left: '50%', transform: 'translateX(-50%)' },
  centerY: { top: '50%', transform: 'translateY(-50%)' },
  centerXY: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },

  zIndex1: { zIndex: 1 },
  zIndex10: { zIndex: 10 },
  zIndex50: { zIndex: 50 },
  zIndex100: { zIndex: 100 },
  centerAbsolute: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },

  // Shadow Utilities
  shadowSm: {
    shadowColor: 'Black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "white"
  },
  shadowMd: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: "white"
  },
  shadowLg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    backgroundColor: "white"
  },

  // Opacity Utilities
  opacity0: { opacity: 0 },
  opacity25: { opacity: 0.25 },
  opacity50: { opacity: 0.5 },
  opacity75: { opacity: 0.75 },
  opacity100: { opacity: 1 },

  // Grid Utilities
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  gridCol1: { width: '100%' },
  gridCol2: { width: '50%' },
  gridCol3: { width: '33.333%' },
  gridCol4: { width: '25%' },
  gridCol5: { width: '20%' },
  gridCol6: { width: '16.666%' },
  gridCol7: { width: '14.285%' },
  gridCol8: { width: '12.5%' },
  gridCol9: { width: '11.111%' },
  gridCol10: { width: '10%' },
  gridCol11: { width: '9.09%' },
  gridCol12: { width: '8.333%' },

  gap0: { gap: 0 },
  gap1: { gap: 4 },
  gap2: { gap: 8 },
  gap3: { gap: 12 },
  gap4: { gap: 16 },

  rowGap0: { rowGap: 0 },
  rowGap1: { rowGap: 4 },
  rowGap2: { rowGap: 8 },
  rowGap3: { rowGap: 12 },
  rowGap4: { rowGap: 16 },

  colGap0: { columnGap: 0 },
  colGap1: { columnGap: 4 },
  colGap2: { columnGap: 8 },
  colGap3: { columnGap: 12 },
  colGap4: { columnGap: 16 },

  // Font Weight Utilities
  fontThin: { fontWeight: '100' },
  fontExtralight: { fontWeight: '200' },
  fontLight: { fontWeight: '300' },
  fontNormal: { fontWeight: 'normal' },
  fontMedium: { fontWeight: '500' },
  fontSemibold: { fontWeight: '600' },
  fontBold: { fontWeight: 'bold' },
  fontExtrabold: { fontWeight: '800' },
  fontBlack: { fontWeight: '900' },

  // Font Style Utilities
  fontItalic: { fontStyle: 'italic' },
  fontNormalStyle: { fontStyle: 'normal' },

  // Line Height Utilities
  leadingNone: { lineHeight: 1 },
  leadingTight: { lineHeight: 1.25 },
  leadingSnug: { lineHeight: 1.375 },
  leadingNormal: { lineHeight: 1.5 },
  leadingRelaxed: { lineHeight: 1.625 },
  leadingLoose: { lineHeight: 2 },

  // Letter Spacing Utilities
  trackingTighter: { letterSpacing: -0.8 },
  trackingTight: { letterSpacing: -0.4 },
  trackingNormal: { letterSpacing: 0 },
  trackingWide: { letterSpacing: 0.4 },
  trackingWider: { letterSpacing: 0.8 },
  trackingWidest: { letterSpacing: 1.6 },

  // Text Transform Utilities
  uppercase: { textTransform: 'uppercase' },
  lowercase: { textTransform: 'lowercase' },
  capitalize: { textTransform: 'capitalize' },
  normalCase: { textTransform: 'none' }, // Reset text transform

  // Font Style Utilities
  italic: { fontStyle: 'italic' },
  notItalic: { fontStyle: 'normal' }, // Reset italic

  // Text Decoration Utilities
  underline: { textDecorationLine: 'underline' },
  lineThrough: { textDecorationLine: 'line-through' },
  noUnderline: { textDecorationLine: 'none' },

  // Base Color Utilities
  textWhite: {color: '#e6e6e6'},

  // Orange Color Utilities
  textOrange50: { color: '#fff7ed' },
  textOrange100: { color: '#ffedd5' },
  textOrange200: { color: '#fed7aa' },
  textOrange300: { color: '#fdba74' },
  textOrange400: { color: '#fb923c' },
  textOrange500: { color: '#f97316' },
  textOrange60text0: { color: '#ea580c' },
  textOrange700: { color: '#c2410c' },
  textOrange800: { color: '#9a3412' },
  textOrange900: { color: '#7c2d12' },

  // Pink Color Utilities
  textPink50: { color: '#fdf2f8' },
  textPink100: { color: '#fce7f3' },
  textPink200: { color: '#fbcfe8' },
  textPink300: { color: '#f9a8d4' },
  textPink400: { color: '#f472b6' },
  textPink500: { color: '#ec4899' },
  textPink600: { color: '#db2777' },
  textPink700: { color: '#be185d' },
  textPink800: { color: '#9d174d' },
  textPink900: { color: '#831843' },

  // Red Color Utilities
  textRed50: { color: '#fef2f2' },
  textRed100: { color: '#fee2e2' },
  textRed200: { color: '#fecaca' },
  textRed300: { color: '#fca5a5' },
  textRed400: { color: '#f87171' },
  textRed500: { color: '#ef4444' },
  textRed600: { color: '#dc2626' },
  textRed700: { color: '#b91c1c' },
  textRed800: { color: '#991b1b' },
  textRed900: { color: '#7f1d1d' },

  // Gray Color Utilities
  textGray50: { color: '#f9fafb' },
  textGray100: { color: '#f3f4f6' },
  textGray200: { color: '#e5e7eb' },
  textGray300: { color: '#d1d5db' },
  textGray400: { color: '#9ca3af' },
  textGray500: { color: '#6b7280' },
  textGray600: { color: '#4b5563' },
  textGray700: { color: '#374151' },
  textGray800: { color: '#1f2937' },
  textGray900: { color: '#111827' },

  // Stone Color Utilities
  textStone50: { color: '#fafaf9' },
  textStone100: { color: '#f5f5f4' },
  textStone200: { color: '#e7e5e4' },
  textStone300: { color: '#d6d3d1' },
  textStone400: { color: '#a8a29e' },
  textStone500: { color: '#78716c' },
  textStone600: { color: '#57534e' },
  textStone700: { color: '#44403c' },
  textStone800: { color: '#292524' },
  textStone900: { color: '#1c1917' },

  // Blue Color Utilities
  textBlue50: { color: '#eff6ff' },
  textBlue100: { color: '#dbeafe' },
  textBlue200: { color: '#bfdbfe' },
  textBlue300: { color: '#93c5fd' },
  textBlue400: { color: '#60a5fa' },
  textBlue500: { color: '#3b82f6' },
  textBlue600: { color: '#2563eb' },
  textBlue700: { color: '#1d4ed8' },
  textBlue800: { color: '#1e40af' },
  textBlue900: { color: '#1e3a8a' },

  // Sky Blue Color Utilities
  textSky50: { color: '#f0f9ff' },
  textSky100: { color: '#e0f2fe' },
  textSky200: { color: '#bae6fd' },
  textSky300: { color: '#7dd3fc' },
  textSky400: { color: '#38bdf8' },
  textSky500: { color: '#0ea5e9' },
  textSky600: { color: '#0284c7' },
  textSky700: { color: '#0369a1' },
  textSky800: { color: '#075985' },
  textSky900: { color: '#0c4a6e' },

  // Purple Color Utilities
  textPurple50: { color: '#faf5ff' },
  textPurple100: { color: '#f3e8ff' },
  textPurple200: { color: '#e9d5ff' },
  textPurple300: { color: '#d8b4fe' },
  textPurple400: { color: '#c084fc' },
  textPurple500: { color: '#a855f7' },
  textPurple600: { color: '#9333ea' },
  textPurple700: { color: '#7e22ce' },
  textPurple800: { color: '#6b21a8' },
  textPurple900: { color: '#581c87' },

  // Background Color Utilities
  bgWhite: { backgroundColor: '#ffffff' },
  bgBlack: { backgroundColor: '#000000' },

  bgOrange50: { backgroundColor: '#fff7ed' },
  bgOrange100: { backgroundColor: '#ffedd5' },
  bgOrange200: { backgroundColor: '#fed7aa' },
  bgOrange300: { backgroundColor: '#fdba74' },
  bgOrange400: { backgroundColor: '#fb923c' },
  bgOrange500: { backgroundColor: '#f97316' },
  bgOrange600: { backgroundColor: '#ea580c' },
  bgOrange700: { backgroundColor: '#c2410c' },
  bgOrange800: { backgroundColor: '#9a3412' },
  bgOrange900: { backgroundColor: '#7c2d12' },

  bgPink50: { backgroundColor: '#fdf2f8' },
  bgPink100: { backgroundColor: '#fce7f3' },
  bgPink200: { backgroundColor: '#fbcfe8' },
  bgPink300: { backgroundColor: '#f9a8d4' },
  bgPink400: { backgroundColor: '#f472b6' },
  bgPink500: { backgroundColor: '#ec4899' },
  bgPink600: { backgroundColor: '#db2777' },
  bgPink700: { backgroundColor: '#be185d' },
  bgPink800: { backgroundColor: '#9d174d' },
  bgPink900: { backgroundColor: '#831843' },

  bgRed50: { backgroundColor: '#fef2f2' },
  bgRed100: { backgroundColor: '#fee2e2' },
  bgRed200: { backgroundColor: '#fecaca' },
  bgRed300: { backgroundColor: '#fca5a5' },
  bgRed400: { backgroundColor: '#f87171' },
  bgRed500: { backgroundColor: '#ef4444' },
  bgRed600: { backgroundColor: '#dc2626' },
  bgRed700: { backgroundColor: '#b91c1c' },
  bgRed800: { backgroundColor: '#991b1b' },
  bgRed900: { backgroundColor: '#7f1d1d' },

  bgGray50: { backgroundColor: '#f9fafb' },
  bgGray100: { backgroundColor: '#f3f4f6' },
  bgGray200: { backgroundColor: '#e5e7eb' },
  bgGray300: { backgroundColor: '#d1d5db' },
  bgGray400: { backgroundColor: '#9ca3af' },
  bgGray500: { backgroundColor: '#6b7280' },
  bgGray600: { backgroundColor: '#4b5563' },
  bgGray700: { backgroundColor: '#374151' },
  bgGray800: { backgroundColor: '#1f2937' },
  bgGray900: { backgroundColor: '#111827' },

  bgStone50: { backgroundColor: '#fafaf9' },
  bgStone100: { backgroundColor: '#f5f5f4' },
  bgStone200: { backgroundColor: '#e7e5e4' },
  bgStone300: { backgroundColor: '#d6d3d1' },
  bgStone400: { backgroundColor: '#a8a29e' },
  bgStone500: { backgroundColor: '#78716c' },
  bgStone600: { backgroundColor: '#57534e' },
  bgStone700: { backgroundColor: '#44403c' },
  bgStone800: { backgroundColor: '#292524' },
  bgStone900: { backgroundColor: '#1c1917' },

  bgBlue50: { backgroundColor: '#eff6ff' },
  bgBlue100: { backgroundColor: '#dbeafe' },
  bgBlue200: { backgroundColor: '#bfdbfe' },
  bgBlue300: { backgroundColor: '#93c5fd' },
  bgBlue400: { backgroundColor: '#60a5fa' },
  bgBlue500: { backgroundColor: '#3b82f6' },
  bgBlue600: { backgroundColor: '#2563eb' },
  bgBlue700: { backgroundColor: '#1d4ed8' },
  bgBlue800: { backgroundColor: '#1e40af' },
  bgBlue900: { backgroundColor: '#1e3a8a' },

  bgSky50: { backgroundColor: '#f0f9ff' },
  bgSky100: { backgroundColor: '#e0f2fe' },
  bgSky200: { backgroundColor: '#bae6fd' },
  bgSky300: { backgroundColor: '#7dd3fc' },
  bgSky400: { backgroundColor: '#38bdf8' },
  bgSky500: { backgroundColor: '#0ea5e9' },
  bgSky600: { backgroundColor: '#0284c7' },
  bgSky700: { backgroundColor: '#0369a1' },
  bgSky800: { backgroundColor: '#075985' },
  bgSky900: { backgroundColor: '#0c4a6e' },

  bgPurple50: { backgroundColor: '#faf5ff' },
  bgPurple100: { backgroundColor: '#f3e8ff' },
  bgPurple200: { backgroundColor: '#e9d5ff' },
  bgPurple300: { backgroundColor: '#d8b4fe' },
  bgPurple400: { backgroundColor: '#c084fc' },
  bgPurple500: { backgroundColor: '#a855f7' },
  bgPurple600: { backgroundColor: '#9333ea' },
  bgPurple700: { backgroundColor: '#7e22ce' },
  bgPurple800: { backgroundColor: '#6b21a8' },
  bgPurple900: { backgroundColor: '#581c87' },

  // Rotations
  rotate0: { transform: [{ rotate: '0deg' }] },
  rotate45: { transform: [{ rotate: '45deg' }] },
  rotate90: { transform: [{ rotate: '90deg' }] },
  rotate180: { transform: [{ rotate: '180deg' }] },
  rotateNeg45: { transform: [{ rotate: '-45deg' }] },
  rotateNeg90: { transform: [{ rotate: '-90deg' }] },
  rotateNeg180: { transform: [{ rotate: '-180deg' }] },

  // Scales
  scale0: { transform: [{ scale: 0 }] },
  scale50: { transform: [{ scale: 0.5 }] },
  scale75: { transform: [{ scale: 0.75 }] },
  scale90: { transform: [{ scale: 0.9 }] },
  scale95: { transform: [{ scale: 0.95 }] },
  scale100: { transform: [{ scale: 1 }] },
  scale105: { transform: [{ scale: 1.05 }] },
  scale110: { transform: [{ scale: 1.1 }] },
  scale125: { transform: [{ scale: 1.25 }] },
  scale150: { transform: [{ scale: 1.5 }] },

  // Translations (Move along X and Y axes)
  translateX0: { transform: [{ translateX: 0 }] },
  translateX1: { transform: [{ translateX: 4 }] },
  translateX2: { transform: [{ translateX: 8 }] },
  translateX4: { transform: [{ translateX: 16 }] },
  translateX8: { transform: [{ translateX: 32 }] },
  translateXNeg1: { transform: [{ translateX: -4 }] },
  translateXNeg2: { transform: [{ translateX: -8 }] },
  translateXNeg4: { transform: [{ translateX: -16 }] },
  translateXNeg8: { transform: [{ translateX: -32 }] },

  translateY0: { transform: [{ translateY: 0 }] },
  translateY1: { transform: [{ translateY: 4 }] },
  translateY2: { transform: [{ translateY: 8 }] },
  translateY4: { transform: [{ translateY: 16 }] },
  translateY8: { transform: [{ translateY: 32 }] },
  translateYNeg1: { transform: [{ translateY: -4 }] },
  translateYNeg2: { transform: [{ translateY: -8 }] },
  translateYNeg4: { transform: [{ translateY: -16 }] },
  translateYNeg8: { transform: [{ translateY: -32 }] },

  // Skews
  skewX0: { transform: [{ skewX: '0deg' }] },
  skewX12: { transform: [{ skewX: '12deg' }] },
  skewXNeg12: { transform: [{ skewX: '-12deg' }] },

  skewY0: { transform: [{ skewY: '0deg' }] },
  skewY12: { transform: [{ skewY: '12deg' }] },
  skewYNeg12: { transform: [{ skewY: '-12deg' }] },

  // Combined Transforms
  transformCenter: {
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  transformCenterX: {
    transform: [{ translateX: -50 }],
  },
  transformCenterY: {
    transform: [{ translateY: -50 }],
  },

  size_2: { width: 23, height: 23 },
  size_3: { width: 30, height: 30 },
  size_4: { width: 40, height: 40 },
  size_5: { width: 50, height: 50 },
  size_6: { width: 60, height: 60 },
  size_7: { width: 70, height: 70 },
  size_8: { width: 80, height: 80 },
  size_9: { width: 90, height: 90 },
  size_10: { width: 100, height: 100 },
  size_12: { width: 120, height: 120 },
  size_14: { width: 140, height: 140 },
  size_16: { width: 160, height: 160 },
  size_18: { width: 180, height: 180 },
  size_20: { width: 200, height: 200 },
  size_24: { width: 240, height: 240 },
  size_28: { width: 280, height: 280 },
  size_32: { width: 320, height: 320 },
  size_36: { width: 360, height: 360 },
  size_40: { width: 400, height: 400 },

  size_1_2: { width: '50%', height: '50%' }, // Half of parent
  size_1_3: { width: '33.33%', height: '33.33%' }, // One-third
  size_2_3: { width: '66.66%', height: '66.66%' }, // Two-thirds
  size_1_4: { width: '25%', height: '25%' }, // One-fourth
  size_3_4: { width: '75%', height: '75%' }, // Three-fourths
  
});

const fontFamily = StyleSheet.create({
  // Rubik Font Family Utilities
  fontRubikBold: { fontFamily: 'Rubik-Bold' },
  fontRubikSemiBold: { fontFamily: 'Rubik-SemiBold' },
  fontRubikExtraBold: { fontFamily: 'Rubik-ExtraBold' },
  fontRubikLight: { fontFamily: 'Rubik-Light' },
  fontRubikMedium: { fontFamily: 'Rubik-Medium' },
  fontRubikRegular: { fontFamily: 'Rubik-Regular' },
});

export { utilityStyles, fontFamily };