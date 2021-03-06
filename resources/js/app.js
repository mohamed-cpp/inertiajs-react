/*import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init({
  color: '#ED3936',
  showSpinner: true
});


const app = document.getElementById('app');

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name =>
      import(`./Pages/${name}`).then(module => module.default)
    }
  />,
  app
);*/

import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init({
  color: '#ED3936',
  showSpinner: true
});


createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})