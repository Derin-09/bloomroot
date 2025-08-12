'use client'
export const dynamic = 'force-dynamic';
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useForm } from 'react-hook-form';
import { email, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, "Message required")
})

type FormData = z.infer<typeof schema>


export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) })
  const [submitMessage, setSubmitMessage] = useState('')
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // })


  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }


  const onSubmit = async (data: FormData) => {

    try {
      await addDoc(collection(db, 'messages'), {
        createdAt: new Date().toISOString()
      })
      setSubmitMessage('Thank you for your message! We will get back to you soon.')
      reset()
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again later.')
      console.log(error)
    }
  }

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Visit Us</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179042!2d-73.98784492423947!3d40.74844097138976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-6">
            <p className="text-gray-600 mb-2"><strong>Address:</strong> 123 Plant St, Greenville</p>
            <p className="text-gray-600 mb-2"><strong>Hours:</strong> Mon-Sat: 9am-7pm, Sun: 10am-5pm</p>
            <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
          </div>
        </div>

        <div>
          <div className="">

          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                { ...register('name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dirtygreen text-black"
              />
              <p>{ errors.name && errors.name.message}</p>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                { ...register('email')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dirtygreen text-black"
              />
              <p>{ errors.email && errors.email.message}</p>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                { ...register('message')}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dirtygreen text-black"
              ></textarea>
              <p>{ errors.message && errors.message.message}</p>
            </div>
            )
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-dirtygreen hover:bg-dirtygreen text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Send Message'}
            </button>
            {submitMessage && (
              <p className={`mt-4 ${submitMessage.includes('Thank you') || submitMessage.includes('created') ? 'text-dirtygreen' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}