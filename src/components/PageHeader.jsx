import React from 'react';

export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            
            {/* Bagian Kiri: Judul dan Breadcrumb */}
            <div id="pageheader-left" className="flex flex-col">
                
                {/* Menampilkan Prop Title */}
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                
                {/* Menampilkan Prop Breadcrumb (Bisa String atau Array) */}
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {Array.isArray(breadcrumb) ? (
                        // Jika breadcrumb berupa array
                        breadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                <span className="text-gray-500">{item}</span>
                                {/* Menampilkan separator '/' jika bukan elemen terakhir */}
                                {index < breadcrumb.length - 1 && (
                                    <span className="text-gray-500">/</span>
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        // Jika breadcrumb berupa string biasa
                        <span className="text-gray-500">{breadcrumb}</span>
                    )}
                </div>
            </div>

            {/* Bagian Kanan: Aksi / Tombol (Children) */}
            <div id="action-button">
                {children}
            </div>
            
        </div>
    );
}