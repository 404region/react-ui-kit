import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import  webpack  from "webpack"
import { BuildOptions } from './types/config';
import { BuildPaths } from './types/config';

export default function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin( {
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}