'use client';

import FederatedTraining from '@/components/FederatedTraining';
import { motion, AnimatePresence } from 'framer-motion';
import SharedNavbar from '@/components/SharedNavbar';

export default function TrainingPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <SharedNavbar title="Edge Training" backPath="/simulation" backLabel="Back to Simulation" />

            <FederatedTraining />
        </main>
    );
}
