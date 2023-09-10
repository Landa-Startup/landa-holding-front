import Banner from '@/components/molecules/Banner'
import { Metadata } from 'next';
// import EntrepreneursForm from '@/components/organisms/EntrepreneursForm'
import React from 'react'

export const metadata: Metadata = {
  title: 'هلدینگ لاندا | کارآفرینان',
  description: '',
};

export default function page() {
  return (
    <>
          <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="ENTREPRENEURS"
      />
      {/* <EntrepreneursForm/> */}
    </>
  )
}
