'use strict'
import 'reflect-metadata'
import 'source-map-support/register'
import '@Typetron/Support'
import { Application } from '@Typetron/Framework'

export const appBuilder = Application.create(__dirname)
