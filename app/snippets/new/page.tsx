import React from 'react'

const createSnippets = () => {
  return (
    <div className='min-h-screen items-center p-6'>
        <h1 className='text-center'>create snippets</h1>
        <form >
            <label htmlFor='title' className='font-bold'>Title:</label>
            <input type='text' className='shadow px-2 py-2 w-full'/>
            <label htmlFor='code' className='font-bold'>code:</label>
            <input type='text' className='shadow px-2 py-2 w-full'/>
        </form>
        <button className='px-4 py-2 bg-blue-700 mt-4 rounded text-white'>create</button>

    </div>
  )
}

export default createSnippets