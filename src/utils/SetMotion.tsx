import { fadeIn } from "./motion";


export const setMotion = {

        // Standard Content Motion
        desktopContentMotion: fadeIn('down', 'tween', 0, 0.5),
        mobileContentMotion: fadeIn('up', 'tween', 0, 0.5),

        //About me page has specfic duration motion than standard
        desktopAboutMetMotion: fadeIn('down', 'tween', 0, 0.2),
        mobileAboutMeMotion: fadeIn('up', 'tween', 0, 0.2),

        // standard image motion
        desktopImgMotion: fadeIn('up', 'tween', 0, 0.5),
        mobileImgMotion: fadeIn('up', 'tween', 0.5, 0.5)
  
}
