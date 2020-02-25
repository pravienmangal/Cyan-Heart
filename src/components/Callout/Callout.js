import React from 'react'
import cprImage from '../../images/cpr-2.jpg'

const Callout = () => {
  return (
    <div class="container">
      <div class="grid flex">
        <div class="medium-span-1-2 large-span-1-3 transition-start">
          <a class="callout-list" href="#">
            <div class="box shadow-box-full callout-box lazy-image">
              <div className="lazy-load" style={{
                backgroundImage: `url('${cprImage}')`
              }}></div>
              <div class="box-content vertical-top">
                <h2>School to School Support</h2>
                <hr />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Callout;