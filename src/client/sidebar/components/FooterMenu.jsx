import React from 'react';

import CheckTextButton from './CheckTextButton';

const FooterMenu = () => (
  <div>
    <div className="button-container">
      <CheckTextButton>Lesa yfir allt skjalið</CheckTextButton>
    </div>
    <div className="block" id="mideindFooter">
      <span style={{ paddingRight: '3px' }}>Keyrt með</span>
      <a href="https://greynir.is/about" target="_blank" rel="noreferrer">
        Greyni
      </a>
      <span style={{ color: 'gray', marginLeft: 'auto' }}>
        Miðeind og Rannsóknarstofan mál og tækni
      </span>
    </div>
  </div>
);

export default FooterMenu;
