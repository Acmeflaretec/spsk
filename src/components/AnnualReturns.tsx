import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const AnnualReturns = () => {
    const [containerWidth, setContainerWidth] = useState(400);
    const [numPages, setNumPages] = useState<number>(0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 500) {
                setContainerWidth(width - 48); // 24px padding on each side
            } else {
                setContainerWidth(400);
            }
        };

        handleResize(); // Initial calculation
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="pt-24 pb-16 min-h-screen container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-[#FFD600] text-center">
                Annual Returns - 2024 - 2025, FY
            </h1>

            <div className="flex flex-col items-center justify-center w-full">
                <Document
                    file="/assets/Form MGT-7A.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="text-white text-xl animate-pulse flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#FFD600] animate-bounce" />
                            Loading Document...
                        </div>
                    }
                    error={
                        <div className="text-red-500 bg-red-100/10 p-4 rounded border border-red-500">
                            Failed to load PDF file. Please try downloading it directly.
                        </div>
                    }
                    className="flex justify-center w-full overflow-x-hidden"
                >
                    {numPages > 0 && (
                        <div className="flex justify-center items-center w-full">
                            {/* @ts-ignore */}
                            <HTMLFlipBook
                                key={containerWidth} // Force re-render on width change for correct centering
                                width={containerWidth}
                                height={containerWidth * 1.414}
                                size="fixed"
                                minWidth={300}
                                maxWidth={500}
                                minHeight={400}
                                maxHeight={800}
                                showCover={true}
                                mobileScrollSupport={true}
                                className="shadow-2xl"
                                startPage={0}
                                drawShadow={true}
                                flippingTime={1000}
                                usePortrait={true}
                                startZIndex={0}
                                autoSize={true}
                                maxShadowOpacity={0.5}
                                showPageCorners={true}
                                disableFlipByClick={false}
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <div key={`page_${index + 1}`} className="bg-white overflow-hidden shadow-lg border-l border-gray-200">
                                        <div className="h-full w-full relative flex items-center justify-center bg-white">
                                            <Page
                                                pageNumber={index + 1}
                                                width={containerWidth}
                                                renderAnnotationLayer={false}
                                                renderTextLayer={false}
                                                className="h-full w-full py-4 text-black bg-white"
                                            />
                                            <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-gray-500 font-sans">
                                                Page {index + 1} / {numPages}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </HTMLFlipBook>
                        </div>
                    )}
                </Document>

                <div className="mt-12 text-center space-y-4">
                    <p className="text-white/60 text-sm hidden md:block">
                        Click or drag corners to flip pages • Use arrow keys for navigation
                    </p>
                    <a
                        href="/assets/Form MGT-7A.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#FFD600] text-[#0A0819] font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FFD600]/20"
                    >
                        <span>Download PDF</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AnnualReturns;
