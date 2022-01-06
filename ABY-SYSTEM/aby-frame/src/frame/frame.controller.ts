import { Controller, Get, Param, Render, Req, Res } from '@nestjs/common';
import { resolve } from 'path';
import { Request, Response } from 'express';
import { FrameService } from './frame.service';

@Controller()
export class FrameController {
  constructor(private readonly frameService: FrameService) {}

  @Get()
  @Render('index')
  root() {
    return {
      container: this.frameService.getContainerIndex(),
      plugin: this.frameService.getPluginIndex(),
    };
  }

  @Get(['/views/:name', '/views/:name/*'])
  @Render('index')
  loadplugin(@Param('name') name: string) {
    return {
      container: this.frameService.getContainerIndex(),
      plugin: this.frameService.getPluginIndex(name),
    };
  }

  @Get(['*.js', '*.css'])
  find(@Req() request: Request, @Res() res: Response) {
    const filePath = this.frameService.getFilePath(request.url);
    if (filePath) {
      res.sendFile(resolve(filePath));
    }
  }

  @Get('/v1/plugins')
  getPlugins() {
    return this.frameService.config.plugins.map((x) => ({
      id: x.name,
      label: x.description ? x.description : x.name,
    }));
  }
}
