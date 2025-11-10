// *********************
// Role of the component: Single product tabs on the single product page containing product description, main product info and reviews
// Name of the component: ProductTabs.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 2.0 - Modern Liquid Glass Design
// Component call: <ProductTabs product={product} />
// Input parameters: { product: Product }
// Output: Single product tabs containing product description, main product info and reviews
// *********************

'use client';

import React, { useState } from 'react';
import RatingPercentElement from './RatingPercentElement';
import SingleReview from './SingleReview';
import { formatCategoryName } from '@/utils/categoryFormating';
import { sanitize, sanitizeHtml } from '@/lib/sanitize';

const ProductTabs = ({ product }: { product: Product }) => {
  const [currentProductTab, setCurrentProductTab] = useState<number>(0);

  const tabs = [
    { id: 0, label: 'Description', icon: 'M4 6h16M4 12h16M4 18h16' },
    {
      id: 1,
      label: 'Additional Info',
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  return (
    <div className="w-full px-5 py-8">
      {/* Tabs Navigation with Liquid Glass */}
      <div className="relative mb-8">
        {/* Glass background for tabs */}
        <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-2">
          <div className="flex gap-2 relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentProductTab(tab.id)}
                className={`
                  relative flex-1 px-6 py-4 rounded-xl font-semibold text-base
                  transition-all duration-300 ease-out
                  max-[500px]:text-sm max-[400px]:text-xs max-[370px]:px-3
                  ${
                    currentProductTab === tab.id
                      ? 'text-slate-900 shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
                      : 'text-slate-500 hover:text-slate-700'
                  }
                `}
              >
                {/* Active tab background */}
                {currentProductTab === tab.id && (
                  <div
                    className="absolute inset-0 rounded-xl bg-white/90 backdrop-blur-sm border border-white/60 -z-10 shadow-[0_4px_16px_rgba(0,0,0,0.06)] animate-slideIn"
                  />
                )}

                {/* Tab content */}
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className={`w-5 h-5 max-[500px]:w-4 max-[500px]:h-4 transition-transform duration-300 
                                ${currentProductTab === tab.id ? 'scale-110' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={tab.icon}
                    />
                  </svg>
                  <span>{tab.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content with Liquid Glass */}
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-slate-50/20 pointer-events-none" />

        <div className="relative z-10 p-8 max-[500px]:p-6">
          {/* Description Tab */}
          {currentProductTab === 0 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200/50 backdrop-blur-sm flex items-center justify-center border border-white/60 shadow-inner">
                  <svg
                    className="w-5 h-5 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 max-[500px]:text-xl">
                  Product Description
                </h3>
              </div>

              <div
                className="prose prose-slate max-w-none text-lg leading-relaxed text-slate-700 max-sm:text-base max-[500px]:text-sm prose-headings:text-slate-900 prose-headings:font-semibold prose-p:text-slate-700 prose-p:mb-4 prose-strong:text-slate-900 prose-strong:font-semibold prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2 prose-li:text-slate-700"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(product?.description),
                }}
              />
            </div>
          )}

          {/* Additional Info Tab */}
          {currentProductTab === 1 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200/50 backdrop-blur-sm flex items-center justify-center border border-white/60 shadow-inner">
                  <svg
                    className="w-5 h-5 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 max-[500px]:text-xl">
                  Additional Information
                </h3>
              </div>

              <div className="space-y-3">
                {/* Manufacturer Row */}
                <div
                  className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/60 border border-white/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-5 flex items-center justify-between max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100/50 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900 text-lg max-[500px]:text-base">
                        Manufacturer
                      </span>
                    </div>
                    <span className="text-slate-700 text-lg max-[500px]:text-base">
                      {sanitize(product?.manufacturer)}
                    </span>
                  </div>
                </div>

                {/* Category Row */}
                <div
                  className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/60 border border-white/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-5 flex items-center justify-between max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100/50 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900 text-lg max-[500px]:text-base">
                        Category
                      </span>
                    </div>
                    <span className="text-slate-700 text-lg max-[500px]:text-base">
                      {product?.category?.name
                        ? sanitize(formatCategoryName(product?.category?.name))
                        : 'No category'}
                    </span>
                  </div>
                </div>

                {/* Color Row */}
                <div
                  className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/60 border border-white/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-5 flex items-center justify-between max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-100/50 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-pink-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900 text-lg max-[500px]:text-base">
                        Color
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-700 text-lg max-[500px]:text-base">
                        Silver, LightSlateGray, Blue
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductTabs;
