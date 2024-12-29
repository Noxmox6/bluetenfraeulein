import { h } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

export const Headline = ({title, subtitle}) => {
  return html`
          <div class="column is-1"></div>
          <div class="column">
            <h1 class="title is-3">${title}</h1>
            <h2 class="title is-4">${subtitle}</h2>
          </div>
  `;
};

export default Headline;