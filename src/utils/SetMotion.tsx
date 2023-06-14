import { fadeIn } from "./motion";


export const setMotion = {

        // Standard Content Motion
        FadeInDownMotion: fadeIn('down', 'tween', 0, 0.5),
        FadeInUpMotion: fadeIn('up', 'tween', 0, 0.5),

        //duration set 0.2 second for specfic section
        FadeInDown02tMotion: fadeIn('down', 'tween', 0, 0.2),
        FadeInUp02Motion: fadeIn('up', 'tween', 0, 0.2),

        //delay 0.5 seconds to fadein
        FadeInUpMotion05s: fadeIn('up', 'tween', 0.5, 0.5),
  
}
