
import React from 'react';

interface StaticPageProps {
  title: string;
  content: React.ReactNode;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, content }) => {
  return (
    <div className="bg-[#FFFCF7] min-h-[60vh]">
      {/* Header */}
      <section className="py-20 bg-amber-50/30 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-orange-100 border border-orange-50 prose prose-orange max-w-none">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaticPage;

