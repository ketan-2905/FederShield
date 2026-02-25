'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface SharedNavbarProps {
    title?: string;
    backPath?: string;
    backLabel?: string;
}

export default function SharedNavbar({
    title = "FedAura",
    backPath = "/",
    backLabel = "Back to Home"
}: SharedNavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-0 md:p-0 flex items-center justify-between pointer-events-none">
            {/* Desktop: Minimal Left Arrow with 2px margin */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden md:block pointer-events-auto m-[2px]"
            >
                <Link
                    href={backPath}
                    className="flex items-center justify-center w-8 h-8 hover:bg-white/10 rounded-lg transition-all active:scale-95"
                    title={backLabel}
                >
                    <ChevronLeft size={20} className="text-white/40 hover:text-white transition-colors" />
                </Link>
            </motion.div>

            {/* Mobile: Standard Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="pointer-events-auto p-6 md:hidden"
            >
                <Link
                    href={backPath}
                    className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 backdrop-blur-3xl transition-all active:scale-95 shadow-2xl shadow-black/50"
                >
                    <ChevronLeft size={16} className="text-white/40 group-hover:text-white transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{backLabel}</span>
                </Link>
            </motion.div>

            {/* Right Side Branding Icon */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="pointer-events-auto p-6 md:p-10 hidden sm:flex"
            >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Shield size={18} className="text-black" />
                </div>
            </motion.div>
        </nav>
    );
}
