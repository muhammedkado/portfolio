import React from 'react';

const ContactForm = ({ formRef, onSubmit, isSubmitting }) => {
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="bg-tech-gradient from-primary-800 to-primary-900/50 p-8 rounded-lg shadow-lg border border-primary-700/30"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-primary-100 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
          className="w-full px-4 py-2 rounded-md bg-primary-800/50 border border-primary-700/30 text-white placeholder-primary-300 focus:outline-none focus:border-secondary-400"
          placeholder="Your name"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-primary-100 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
          className="w-full px-4 py-2 rounded-md bg-primary-800/50 border border-primary-700/30 text-white placeholder-primary-300 focus:outline-none focus:border-secondary-400"
          placeholder="your.email@example.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-primary-100 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          className="w-full px-4 py-2 rounded-md bg-primary-800/50 border border-primary-700/30 text-white placeholder-primary-300 focus:outline-none focus:border-secondary-400 resize-none"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;