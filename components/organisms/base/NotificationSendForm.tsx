import React from 'react'
import { useState } from 'react';
export default function NotificationSendForm({submitting,success}:{submitting:boolean,success:boolean}) {

  return (
    <div>
              {success && submitting && (
        <div
          className="flex p-4   mb-4 text-sm text-green-900 rounded-lg text-bold bg-green-10 dark:bg-neutral-700 dark:text-green-400"
          role="alert"
          style={{ backgroundColor: '#26ff2a54' }}
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">پیام</span>
          <div>
            <span className="font-medium">Successfull</span>!
          </div>
        </div>
      )}

      {!success && submitting && (
        <div
          className="flex p-4 mb-4 text-sm text-red-900 rounded-lg text-bold bg-red-90 dark:bg-neutral-700 dark:text-red-400"
          role="alert"
          style={{ backgroundColor: '#ff24244f' }}
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only"></span>
          <div>
            <span className="font-medium">Unsuccessfull</span>!
          </div>  
        </div>
      )}
    </div>
  )
}