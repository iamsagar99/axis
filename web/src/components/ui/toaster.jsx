// toaster.jsx
"use client"

import React from "react"
import {
  Toast as ToastPrimitive,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./toast"
import { useToast } from "./use-toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <>
      {toasts.map(({ id, title, description, variant }) => (
        <ToastPrimitive
          key={id}
          variant={variant}
          open={true}
          onOpenChange={(open) => {
            if (!open) dismiss(id)
          }}
        >
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          <ToastClose />
        </ToastPrimitive>
      ))}
    </>
  )
}
