import React from 'react';
import MultiRangeSlider from './MultiRangeSlider'
import { useState } from 'react';

function Range({min, max, value}){

    return (
        <MultiRangeSlider
          min={18}
          max={60}
          onChange={({ min, max }) => value({min,max})}
        />
      );

}

export default Range;