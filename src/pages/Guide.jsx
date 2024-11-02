import React, { useEffect } from 'react'
import './CSS/Guide.css'
const Guide = () => {
  useEffect(() => {
    window.scrollTo(0, 2100);
  }, []);
  
  return (
    <div className='GuideC'>
      <a href="" className='level1'>Level1</a>
      <a href="" className='level2'>Level2</a>
      <a href="" className='level3'>Level3</a>
      <a href="" className='level4'>Level4</a>
      <a href="" className='level5'>Level5</a>
      <a href="" className='level6'>Level6</a>
      <a href="" className='level7'>Level7</a>
      <a href="" className='level8'>Level8</a>
      <a href="" className='level9'>Level9</a>
      <a href="" className='level10'>Level10</a>
      <a href="" className='level11'>Level11</a>
      <a href="" className='level12'>Level12</a>
      <a href="" className='level13'>Level13</a>
      <a href="" className='level14'>Level14</a>
      <a href="" className='level15'>Level15</a>
      <a href="" className='level16'>Level16</a>
    </div>
  );
}

export default Guide
