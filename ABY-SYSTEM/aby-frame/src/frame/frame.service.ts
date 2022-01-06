import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { resolve } from 'path';

@Injectable()
export class FrameService {
  config: ViewConfig;
  filesMap: { [key: string]: string };

  constructor() {
    this.setConfig();
    this.setFilesMap();
  }

  setConfig() {
    if (this.config) return this.config;
    this.config = JSON.parse(
      readFileSync(resolve('src/config.json')).toString(),
    );
  }

  setFilesMap() {
    if (this.filesMap) return this.filesMap;
    const { containers, plugins } = this.config || {
      containers: [],
      plugins: [],
    };
    this.filesMap = {};
    for (let plugin of plugins) {
      Object.assign(this.filesMap, plugin.filesMap);
    }
    for (let container of containers) {
      Object.assign(this.filesMap, container.filesMap);
    }
  }

  getContainerIndex(name?: string) {
    const { containers } = this.config || { containers: [] };
    let container: ViewPackage;
    if (name) {
      container = containers.find((x) => x.name === name);
    } else {
      if (containers.length > 0) {
        container = containers[0];
      }
    }
    if (container) {
      return readFileSync(container.filesMap['/index.html']).toString();
    } else {
      return '';
    }
  }

  getPluginIndex(name?: string) {
    const { plugins } = this.config || { plugins: [] };
    let plugin: ViewPackage;
    if (name) {
      plugin = plugins.find((x) => x.name === name);
    } else {
      if (plugins.length > 0) {
        plugin = plugins[0];
      }
    }
    if (plugin) {
      return readFileSync(plugin.filesMap['/index.html']).toString();
    } else {
      return '';
    }
  }

  getFilePath(url: string): string {
    const filePath = this.filesMap[url];
    if (filePath) return filePath;
    return '';
  }
}

export interface ViewConfig {
  containers: ViewPackage[];
  plugins: ViewPackage[];
}

export interface ViewPackage {
  name: string;
  version: string;
  description: string;
  filesMap: { [key: string]: string };
}
