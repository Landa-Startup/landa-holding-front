import React from 'react'
import Banner from '@/components/molecules/Banner'
import JobForm from '@/components/organisms/JobForm'

export default function page() {
  return (
    <>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title="APPLY FORM"
      />
      <JobForm />
    </>
  )
}
