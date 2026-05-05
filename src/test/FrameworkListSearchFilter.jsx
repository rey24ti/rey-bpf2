import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const _selectedTag = dataForm.selectedTag.toString();
    
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm);

        const matchesTag = _selectedTag
            ? framework.tags.includes(_selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-10 text-center sm:text-left">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        Framework Directory
                    </h1>
                    <p className="text-base text-slate-500 max-w-2xl">
                        Cari dan temukan framework terbaik untuk proyek Anda selanjutnya. Filter berdasarkan nama, deskripsi, atau kategori teknologi.
                    </p>
                </div>

                {/* Search & Filter Section */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg 
                                className="h-5 w-5 text-slate-400" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="searchTerm"
                            placeholder="Ketik nama atau deskripsi framework..."
                            className="w-full pl-11 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-700"
                            value={dataForm.searchTerm}
                            onChange={handleChange}
                        />
                    </div>

                    <select
                        name="selectedTag"
                        className="w-full sm:w-56 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-700 cursor-pointer appearance-none"
                        value={dataForm.selectedTag}
                        onChange={handleChange}
                    >
                        <option value="">Semua Kategori</option>
                        {allTags.map((tag, index) => (
                            <option key={index} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Content Section */}
                {filteredFrameworks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredFrameworks.map((item) => (
                            <div 
                                key={item.id} 
                                className="group flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300"
                            >
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                                        {item.name}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                
                                {/* Tag Badges */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tags?.map((tag, idx) => (
                                        <span 
                                            key={idx} 
                                            className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State UI */
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
                        <svg className="mx-auto h-12 w-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-lg font-medium text-slate-900">Framework tidak ditemukan</h3>
                        <p className="mt-1 text-slate-500">Coba gunakan kata kunci atau pilih kategori lain.</p>
                    </div>
                )}
            </div>
        </div>
    );
}