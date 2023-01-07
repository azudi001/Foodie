import { Dimensions } from 'react-native';



export const SCR_HEIGHT = Dimensions.get('window').height;
export const SCR_WIDTH = Dimensions.get('window').width;
export const SWITCH_WIDTH_DISPLAY =()=>{
    return SCR_WIDTH > SCR_HEIGHT ? SCR_WIDTH : SCR_HEIGHT
  }
export const SEMI_SCR_WIDTH = SCR_WIDTH < 480 ? (Dimensions.get('window').width/2) - 20 : (Dimensions.get('window').width/3) - 20
export const TQUATER_SCR_WIDTH = (Dimensions.get('window').width/3) - 20
export const NUM_MEAL_COLUMN =  SCR_WIDTH < 480 ? 2 : 3
 
export const LAYOUT_HORIZONTAL_PADDING = 35;

export const HEADER_HEIGHT = 68;

export const BORDER_WIDTH = 1.2;
export const BORDER_RADIUS = 26;
