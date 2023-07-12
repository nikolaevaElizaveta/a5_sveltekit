import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
        base: '/',
        },

    
  },
  preprocess: preprocess(),
};

export default config;
