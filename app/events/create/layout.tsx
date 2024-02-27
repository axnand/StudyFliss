"use client"
import React from 'react'
import { DayPickerProvider } from 'react-day-picker'

export default function CreateEventLayout({children, ...props}: {children: React.ReactNode}) {
  return (
    <DayPickerProvider initialProps={{...props}}>
        {children}
    </DayPickerProvider>
  )
}


