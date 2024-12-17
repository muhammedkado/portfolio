import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-100">
          Get in Touch
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm formRef={formRef} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default Contact;