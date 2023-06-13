import { fadeIn } from "./motion";


export const setMotion = {

        desktopContentMotion: fadeIn('down', 'tween', 0, 0.5),
        mobileContentMotion: fadeIn('up', 'tween', 0, 0.5),

        desktopImgMotion: fadeIn('up', 'tween', 0, 0.5),
        mobileImgMotion: fadeIn('up', 'tween', 0.5, 0.5)
  
}
