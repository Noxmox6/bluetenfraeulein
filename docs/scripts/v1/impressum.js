import { h } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

export const Impressum = () => {
  return html`
      <div class="content has-text-centered">
        <div class="columns is-mobile">
          <div class="column has-text-right">Impressum:</div>
          <div class="column has-text-left">
            <div>Julia Albrecht</div>
            <div>Augustastraße 12</div>
            <div>02826 Görlitz</div>
          </div>
        </div>
      </div>
  `;
};

export default Impressum;