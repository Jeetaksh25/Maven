import React, { useEffect } from 'react'
import './CSS/Guide.css'
const Guide = () => {
  useEffect(() => {
    window.scrollTo(0, 2100);
  }, []);
  
  return (
    <div className='GuideC'>
      <a href="https://youtu.be/7dC2kiLNoQo?si=uyMBQRn5aWBRQWS8" target="_blanck" className='level1'>Level1</a>
      <a href="https://youtu.be/xRxT9cOKiM8" target="_blanck" className='level2'>Level2</a>
      <a href="https://youtu.be/odADwWzHR24?si=GR1j3SbHQ-Nisosl" target="_blanck" className='level3'>Level3</a>
      <a href="https://youtu.be/7CBfCW67xT8?si=blA3TO5wYVNionVr" target="_blanck" className='level4'>Level4</a>
      <a href="https://youtu.be/COp7BR_Dvps?si=LAFlpwILstikxj1s" target="_blanck" className='level5'>Level5</a>
      <a href="https://youtu.be/caq8XpjAswo?si=9FoRn8GD6kHT7SHD" target="_blanck" className='level6'>Level6</a>
      <a href="https://youtu.be/MoQVgJx_QN4?si=jo5Nh0HLcfBnj7P0" target="_blanck" className='level7'>Level7</a>
      <a href="https://youtu.be/1qq7lDL-bzY?si=A-EcskCtW8EMeqR_" target="_blanck" className='level8'>Level8</a>
      <a href="https://youtu.be/0G_HE8sc73Y?si=3DwsuVsQ9-lG0z7t" target="_blanck" className='level9'>Level9</a>
      <a href="https://youtu.be/8Cf1t4nRtaM?si=vELRauaMVXNmfTwT" target="_blanck" className='level10'>Level10</a>
      <a href="https://youtu.be/tC6PzcgK370?si=o0A5cb6nMwm24_CV" target="_blanck" className='level11'>Level11</a>
      <a href="https://youtu.be/f6CILJA110Y?si=RlkMq8hpuvLT07UL" target="_blanck" className='level12'>Level12</a>
      <a href="https://youtu.be/ztTexqGQ0VI?si=tlTgtGzCp5-Q2NL4" target="_blanck" className='level13'>Level13</a>
      <a href="https://youtu.be/gwmv_KGdceA?si=BJAy578h6LThPhZS" target="_blanck" className='level14'>Level14</a>
      <a href="https://youtu.be/SOf6EXR3qlQ?si=Z1PAweZIxlJbmRT-" target="_blanck" className='level15'>Level15</a>
      <a href="https://youtu.be/poV9Bhh5tsU?si=jC3d6GDtUZNHWU7a" target="_blanck" className='level16'>Level16</a>
    </div>
  );
}

export default Guide
