import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Header from '@/components/Header'
import AddDocumentBtn from '@/components/AddDocumentBtn'

const Home = async () => {
  const clerkUser = await currentUser();
  if(!clerkUser) return redirect('/sign-in');

  const documents = [];

  return (
    <main className='home-container'>
        <Header className='stick left-0 top-0'>
          <div className='flex items-center gap-2 lg:gap-4'>
            Notifcation
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </Header>

        {documents.length > 0 ? (
          <div className='flex h-full w-full flex-col items-center justify-center'>

          </div>
        ) : (
          <div className='document-list-empty'>
            <Image
              src="/assets/icons/doc.svg"
              alt='document'
              width={40}
              height={40}
              className='mx-auto'
            />
            <AddDocumentBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
        )}
    </main>
  )
}

export default Home