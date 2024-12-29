import { h } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

export const TextArticle = (probs) => {
  return html`
    <article class="columns is-mobile">
      <div class="column is-1 has-text-right">
        <span class="counter"></span>
      </div>
      <div class="column">
        <p class="has-text-justified">
          <strong>${probs.strongText}</strong>: <span>${probs.description}</span>
        </p>
      </div>
    </article>
  `;
};

export default TextArticle;