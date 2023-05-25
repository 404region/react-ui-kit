import  webpack  from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    // Порядок при котором лоадеры возвращаются в масиве имеет значение
    const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    };

    return [
        typescriptLoader,
      ]
}