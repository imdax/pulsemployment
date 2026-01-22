import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

const TrustCompliance = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Australian Standards</h3>
                        <p className="text-sm text-gray-500 max-w-xs">
                            We operate strictly according to Australian labor and recruitment laws, ensuring a safe and compliant process.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Data Privacy First</h3>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Your personal information is encrypted and securely stored. We never share your data without consent.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Process</h3>
                        <p className="text-sm text-gray-500 max-w-xs">
                            No hidden fees or misleading promises. We provide clear guidance on what we can and cannot do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustCompliance;
