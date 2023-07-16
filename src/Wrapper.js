import App from "./App"

const { useState, useEffect } = require("react")

export const Wrapper = () => {
  const [showApp, setShowApp] = useState(true)

  const unmountApp = () => setShowApp(false)

  useEffect(() => {
    let timer;
    if (showApp) {
      timer = setTimeout(unmountApp, 10000);
    }

    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (<>
    <h1>App is {showApp ? 'mounted' : 'unmounted'}</h1>
    {showApp && (<App />)}
  </>)
}