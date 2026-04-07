import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

const DEFAULT_TITLE = 'Gatherly - Event Booking Platform';

const PaymentFailed = () => {
    useEffect(() => {
        document.title = 'Payment failed · Gatherly';
        return () => {
            document.title = DEFAULT_TITLE;
        };
    }, []);

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border-t-8 border-red-500 transform transition-all hover:-translate-y-1">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Gatherly</p>
                <FaTimesCircle className="text-red-500 text-7xl mx-auto mb-6 drop-shadow-sm" />
                <h1 className="text-4xl font-black text-gray-900 mb-4">Booking Failed</h1>
                <p className="text-gray-500 mb-8 text-lg">We couldn't process your payment. Please ensure your payment details are correct and try again.</p>
                <div className="space-y-4">
                    <Link to="/" className="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg hover:shadow-xl">
                        Return to Events
                    </Link>
                    <Link to="/dashboard" className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-xl transition">
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailed;
