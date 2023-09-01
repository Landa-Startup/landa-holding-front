import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';

export default function RoadmapContainer() {
  return (
    <div className="flex flex-col">
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
}
