import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none px-4">
      <AnimatePresence>
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-auto flex items-start gap-3 p-4 bg-[#1A1A1A] text-white shadow-2xl border border-white/20"
        >
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#2D4F3C] shrink-0 mt-0.5" />}
          {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-[#C27339] shrink-0 mt-0.5" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-[#C27339] shrink-0 mt-0.5" />}
          
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-wider">{toast.title}</h4>
            {toast.message && <p className="text-xs text-[#F7F5F2]/80 mt-1 leading-relaxed">{toast.message}</p>}
          </div>

          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const ToastContainer = Toast;
