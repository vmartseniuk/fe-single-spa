/* eslint-disable @typescript-eslint/ban-ts-comment */
import {useEffect } from 'react'

import {  unregisterAllApps, runSingleSpa } from './micro-fe';
import { getAppNames, registerApplication, start, unregisterApplication} from 'single-spa';


export const MicroApp = ({ config } : {config: {
  activeWhen: string,
  name: string,
  module: string


}}) => {
  useEffect(() => {
    console.log('MicroApp ~ useEffect', getAppNames());
    if(getAppNames().includes(config.name)){
      return
    }

    registerApplication({
      name: config.name,
      app: () => import(/* @vite-ignore */ config.module),
      activeWhen: config.activeWhen,
      // customProps: {
      //   domElementGetter: () => document.getElementById('micro-app')!,
      // },
    })

    // runSingleSpa();

   return () => {
      console.log('MicroApp ~ unregisterAllApps');
      unregisterAllApps()
    }
  }, [config])

  return <div id="micro-app" />
}
