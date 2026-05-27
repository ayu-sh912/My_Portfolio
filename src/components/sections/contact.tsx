'use client';

import { useState } from 'react';
import Link from 'next/link';

import {
  Copy,
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Instagram,
  Linkedin,
  CheckCircle2,
} from 'lucide-react';

import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Tag from '@/components/data-display/tag';

import { copyTextToClipboard } from '@/lib/utils';

const email = 'engineer.ayush704@gmail.com';
const phone = '+91 9520707370';

type CopyValue = 'email' | 'phone';

const ContactSection = () => {
  const [copied, setCopied] = useState<CopyValue | null>(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = async (
    text: string,
    type: CopyValue
  ) => {
    try {
      await copyTextToClipboard(text);

      setCopied(type);

      setTimeout(() => {
        setCopied(null);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('/api/contact', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Message sent successfully!');

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);

      alert('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact">
      <section className="relative overflow-hidden border-x border-t border-white/[0.05] bg-[#030712] px-4 pt-10 md:px-8 md:pt-14">

        {/* Glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        {/* Heading */}
        <div className="relative flex flex-col items-center text-center">

          <Tag label="Get in touch" />

          <Typography
            variant="h2"
            className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            Let&apos;s Build{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </Typography>

          <Typography className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-lg">
            Open to collaborations, freelance projects,
            internships and meaningful developer
            connections.
          </Typography>
        </div>

        {/* Main Grid */}
        <div className="relative mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <div className="rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-[#071120] to-[#08111f] p-5">

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Mail size={20} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Contact Information
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Let&apos;s create something impactful
                  together
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-3">

              {/* Email */}
              <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      Email
                    </p>

                    <p className="break-all font-semibold text-white">
                      {email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleCopy(email, 'email')
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-gray-300 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  <Copy size={16} />
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      Phone
                    </p>

                    <p className="font-semibold text-white">
                      {phone}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleCopy(
                      phone.replace(/\s/g, ''),
                      'phone'
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-gray-300 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  <Copy size={16} />
                </button>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      Location
                    </p>

                    <p className="font-semibold text-white">
                      Firozabad, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                      <CheckCircle2 size={18} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        Availability
                      </p>

                      <p className="font-semibold text-green-400">
                        Open for opportunities
                      </p>
                    </div>
                  </div>

                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6">

              <h4 className="text-lg font-bold text-white">
                Connect with me
              </h4>

              <div className="mt-4 grid grid-cols-3 gap-3">

                {[
                  {
                    icon: <Github size={18} />,
                    label: 'GitHub',
                    href: 'https://github.com/ayu-sh912',
                  },
                  {
                    icon: <Instagram size={18} />,
                    label: 'Instagram',
                    href: 'https://instagram.com/engineer.ayush704',
                  },
                  {
                    icon: <Linkedin size={18} />,
                    label: 'LinkedIn',
                    href: 'https://linkedin.com/in/ayushagrawal0912',
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.04] px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-[#071120] to-[#08111f] p-5">

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Send size={20} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Send Me a Message
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  I&apos;ll get back within 24 hours
                </p>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              <div className="grid gap-4 md:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="h-12 w-full rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="h-12 w-full rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="h-12 w-full rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-500"
              />

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="w-full rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="group flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.01] disabled:opacity-50"
              >
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

                {loading
                  ? 'Sending...'
                  : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Copy Toast */}
        {copied && (
          <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black shadow-xl">
            {copied === 'email'
              ? 'Email copied!'
              : 'Phone number copied!'}
          </div>
        )}
      </section>
    </Container>
  );
};

export default ContactSection;