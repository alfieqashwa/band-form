import Head from 'next/head'

import BandForm from '../src/components/BandForm'
import MemberForm from '../src/components/MemberForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Band Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen g-gray-50 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 space-y-16 bg-white md:space-y-0 md:grid-cols-2">

          {/* BAND FORM */}
          <BandForm />
          <MemberForm />

          {/* MEMBER FORM */}
        </div>
      </div>
    </ >
  )
}
