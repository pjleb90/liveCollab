import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'

const Document = () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center gap-2'>
          <p className='document-title'>
            Placeholder Document Title
          </p>
        </div>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </Header>
      <Editor />
    </div>
  )
}

export default Document