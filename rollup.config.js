import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'amd'
  },
  plugins: [typescript({ tsconfig: "tsconfig.json"})]
};
