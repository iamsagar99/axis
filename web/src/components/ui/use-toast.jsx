// use-toast.jsx
import React, { createContext, useContext, useState, useCallback } from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"

const ToastContext = createContext()

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ title, description, variant = "default" }) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, title, description, variant }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)

    return id
  }, [])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      <ToastPrimitives.Provider swipeDirection="right" duration={5000}>
        {children}
        <ToastPrimitives.Viewport className="fixed top-0 right-0 z-[100] m-4 w-96" />
      </ToastPrimitives.Provider>
    </ToastContext.Provider>
  )
}
