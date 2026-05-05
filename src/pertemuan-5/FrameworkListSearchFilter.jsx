import frameworkData from "./framework.json";
import { useState, useMemo } from "react";

export default function FrameworkListSearchFilter() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });
  /*Inisialisasi Handle perubahan nilai input form*/
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
      framework.description.toLowerCase().includes(_selectedTag);

    const matchesTag = _selectedTag
      ? framework.tags.includes(_selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  // Menggunakan useMemo agar ekstraksi tag tidak dirender ulang terus menerus
  const allTags = useMemo(() => {
    return [...new Set(frameworkData.flatMap((framework) => framework.tags))];
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Framework Directory
          </h1>
          <p className="mt-2 text-slate-600">
            Cari dan temukan framework yang paling cocok untuk project Anda.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="relative flex-1">
            <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
            <input
              type="text"
              name="searchTerm"
              placeholder="Cari framework atau deskripsi..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
              value={dataForm.searchTerm}
              onChange={handleChange}
            />
          </div>

          <select
            name="selectedTag"
            className="w-full sm:w-64 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white cursor-pointer transition-colors"
            value={dataForm.selectedTag}
            onChange={handleChange}
          >
            <option value="">🏷️ Semua Tag</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Grid Framework Cards */}
        {filteredFrameworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFrameworks.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6"
              >
                <div className="flex-1">
                  {/* Nama dan Tahun Rilis */}
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-slate-800 line-clamp-1">
                      {item.name}
                    </h2>
                    <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                      {item.details.releaseYear}
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-slate-600 text-sm mb-5 line-clamp-3">
                    {item.description}
                  </p>

                  {/* List Tag */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-indigo-50 text-indigo-700 px-2.5 py-1 text-xs font-medium rounded-md border border-indigo-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Card: Developer & Link */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <p className="text-xs text-slate-500 mb-4">
                    Developed by:{" "}
                    <span className="font-semibold text-slate-800">
                      {item.details.developer}
                    </span>
                  </p>
                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State Jika Data Kosong */
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-lg">
              Tidak ada framework yang sesuai dengan pencarian.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
