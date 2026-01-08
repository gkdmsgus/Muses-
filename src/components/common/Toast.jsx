import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-6 h-6 text-green-500" />,
    error: <XCircle className="w-6 h-6 text-red-500" />,
    warning: <AlertCircle className="w-6 h-6 text-orange-500" />,
    info: <Info className="w-6 h-6 text-blue-500" />,
  };

  const backgrounds = {
    success: 'bg-white border-green-200',
    error: 'bg-white border-red-200',
    warning: 'bg-white border-orange-200',
    info: 'bg-white border-blue-200',
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] animate-slideDown">
      <div className={`${backgrounds[type]} border-2 rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3 min-w-[280px] max-w-[90vw]`}>
        {icons[type]}
        <p className="flex-1 text-gray-900 font-semibold text-sm sm:text-base">{message}</p>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
