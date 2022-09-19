import React from 'react';
import MultiRangeSlider from './MultiRangeSlider'

function Range({min, max, value, height}){

    return (
        <MultiRangeSlider
          height={height}
          min={min}
          max={max}
          onChange={({ min, max }) => value({min,max})}
        />
      );

}

export default Range;