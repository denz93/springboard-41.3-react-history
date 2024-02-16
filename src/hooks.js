import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(initialValue)
  const setStorageValue = useCallback((newValue) => {
    if (typeof newValue === "function") {
      newValue = newValue(state)
    }
    setItem(key, newValue)
    setState(newValue)
  }, [key, setState, state])

  useEffect(() => {
    const item = getItem(key)
    if (item) {
      setState(item)
    } else {
      setItem(key, state)
    }
  }, [key])

  return [state, setStorageValue]
}


function getItem(key) {
  try {
    return JSON.parse(localStorage.getItem(key))

  } catch (e) {
    return null
  }
}

function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    localStorage.setItem(key, value)
  }

}