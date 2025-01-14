import {
  addErrorHandler,
  AppError,
  getAppNames,
  getAppStatus,
  LOAD_ERROR,
  SKIP_BECAUSE_BROKEN,
  start,
  unregisterApplication,
} from 'single-spa'

const isRegistered = (code: string) => getAppNames().includes(code)

export const unregisterApp = async ({ code }: { code: string }) => {
  try {
    console.log('unregisterApp ~ isRegistered(code):', code, isRegistered(code));
    if (isRegistered(code)) {
      await unregisterApplication(code)
      console.log("App '${code}' was unregistered")
    }
  } catch (error) {
    console.error(`Failed to unregister '${code}' app`, error)
  }
}

export const unregisterAllApps = async () => {
  try {
    await Promise.all(getAppNames().map(name => unregisterApplication(name)))
  } catch (error) {
    console.error("Can't unregister all apps ", error)
  }
}

export const runSingleSpa = () => {
  console.log('runSingleSpa')
  // addErrorHandler((error: AppError) => {
  //   const { appOrParcelName } = error
  //   console.log('addErrorHandler ~ error:', error);
  //   console.log('addErrorHandler ~ appOrParcelName:', appOrParcelName);
  //   const appStatus = getAppStatus(appOrParcelName)
  //   console.log('addErrorHandler ~ appStatus:', appStatus);

  //   switch (appStatus) {
  //     case SKIP_BECAUSE_BROKEN:
  //     case LOAD_ERROR:
  //       unregisterApp({ code: appOrParcelName })
  //       break

  //     default:
  //       break
  //   }

  //   // @TODO: Add global error handler
  //   console.error('SPA:',error)
  // })

  start()
}
