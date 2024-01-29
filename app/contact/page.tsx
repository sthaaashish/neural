import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="border border-gray-300 p-2 w-full h-32 resize-none"
            id="message"
            name="message"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
  )
}

export default page
