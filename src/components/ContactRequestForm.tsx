'use client';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactRequestForm(emailProp: { email?: string }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState(''); // New State
    const [closingDate, setClosingDate] = useState(''); // New State
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const { executeRecaptcha } = useGoogleReCaptcha();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!executeRecaptcha) return;
        const token = await executeRecaptcha("contact_form");

        setStatus('sending');

        // Generate current timestamp for submission date
        const submissionDate = new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'short',
        });

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: emailProp.email || 'salvador@rgvisionmedia.com',
                    subject: 'New Website Form Contact Submission',
                    html: `
            <h3>New Issue Report</h3>
            <p><b>Submission Date:</b> ${submissionDate}</p>
            <hr />
            <p><b>Name:</b> ${name}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Address:</b> ${address}</p>
            <p><b>Closing Date:</b> ${closingDate}</p>
            <p><b>Description of Issue:</b> ${message}</p>
          `,
                    token,
                }),
            });

            if (res.ok) {
                setStatus('success');
                // Reset form
                setName('');
                setEmail('');
                setPhone('');
                setAddress('');
                setClosingDate('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    }

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => setStatus('idle'), 4000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <>
            <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                    <motion.div
                        key="toast"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-xl shadow-lg text-white font-medium z-50 ${status === 'success' ? 'bg-green-600' : 'bg-red-600'
                            }`}
                    >
                        {status === 'success'
                            ? '✅ Email sent successfully!'
                            : '❌ Failed to send email. Please try again.'}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full mb-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-700 text-left">Name</span>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </label>

                        {/* Address - Added */}
                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-700 text-left">Address</span>
                            <input
                                type="text"
                                placeholder="123 Main St, McAllen, TX"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Phone */}
                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-700 text-left">Phone</span>
                            <input
                                type="tel"
                                placeholder="(956) 123-4567"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </label>

                        {/* Email */}
                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-700 text-left">Email</span>
                            <input
                                type="email"
                                placeholder="johndoe@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </label>
                    </div>



                    {/* Closing Date - Added */}
                    <label className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-gray-700 text-left">Closing Date</span>
                        <input
                            type="date"
                            value={closingDate}
                            onChange={(e) => setClosingDate(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                    </label>

                    {/* Description of Issue - Changed Label */}
                    <label className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-gray-700 text-left">Description of Issue</span>
                        <textarea
                            placeholder="Please describe the issue in detail..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`rounded-full p-2 text-white transition ${status === 'sending'
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-primary hover:bg-accent hover:border-[var(--color-primary-hover)]'
                            }`}
                    >
                        {status === 'sending' ? 'Sending...' : 'Submit Request'}
                    </button>
                </form>
            </div>
        </>
    );
}