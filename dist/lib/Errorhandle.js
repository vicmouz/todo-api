"use strict";Object.defineProperty(exports, "__esModule", {value: true});class ErroHandle extends Error {
  constructor({ message, status }) {
    super(message);
    this.name = 'ErroHandleLib';
    this.status = status || 500;
  }
}

exports. default = ErroHandle;
