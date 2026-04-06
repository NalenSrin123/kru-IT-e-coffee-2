import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  PlusCircle,
  ImagePlus,
  CheckCircle,
  AlertCircle,
  Loader2,
  ChevronRight,
  Upload,
} from "lucide-react";

const AddCategory = () => {
  // API Configuration
  const API_BASE =
    "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1";

  // States
  const [step, setStep] = useState(1); // 1: Info, 2: Image
  const [categoryId, setCategoryId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Form States
  const [formData, setFormData] = useState({ name: "", is_active: true });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  // --- Step 1: Create Category ---
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await axios.post(`${API_BASE}/categories`, formData);

      if (response.data.status === "success") {
        setCategoryId(response.data.data.id); // Save the new ID
        setStep(2); // Move to Image Upload
        setMessage({ type: "success", text: "Category basic info saved!" });
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Error creating category",
      });
    } finally {
      setLoading(false);
    }
  };

  //Upload Image ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadImage = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const imageFormData = new FormData();
    imageFormData.append("image", selectedFile);

    try {
      await axios.post(
        `${API_BASE}/categories/${categoryId}/image`,
        imageFormData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      setMessage({
        type: "success",
        text: "Category fully created with image!",
      });
      // Reset after 2 seconds
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      setMessage({ type: "error", text: "Image upload failed." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/dashboard/categories"
          className="flex items-center text-gray-500 hover:text-[#a3531e] mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to List
        </Link>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Progress (Admin Style) */}
            <div className="w-full md:w-72 bg-[#a3531e] p-8 text-white">
              <h2 className="text-xl font-bold mb-8">Admin Portal</h2>
              <div className="space-y-8">
                <div
                  className={`flex items-center gap-4 ${step === 1 ? "opacity-100" : "opacity-50"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${step === 1 ? "bg-white text-[#a3531e]" : "border-white"}`}
                  >
                    1
                  </div>
                  <span className="font-semibold text-sm uppercase tracking-wider">
                    General Info
                  </span>
                </div>
                <div
                  className={`flex items-center gap-4 ${step === 2 ? "opacity-100" : "opacity-50"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${step === 2 ? "bg-white text-[#a3531e]" : "border-white"}`}
                  >
                    2
                  </div>
                  <span className="font-semibold text-sm uppercase tracking-wider">
                    Media Upload
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-8 md:p-12">
              {message.text && (
                <div
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                >
                  {message.type === "success" ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  {message.text}
                </div>
              )}

              {step === 1 ? (
                <form onSubmit={handleCreateCategory} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Category Details
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Enter the core information for the menu category.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-500 tracking-widest">
                      Category Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Specialty Brews"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#a3531e]/20 focus:bg-white transition-all outline-none"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-500 tracking-widest">
                      Visibility
                    </label>
                    <div className="flex bg-gray-50 p-1.5 rounded-2xl w-fit">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, is_active: true })
                        }
                        className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${formData.is_active ? "bg-white text-[#a3531e] shadow-sm" : "text-gray-400"}`}
                      >
                        Active
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, is_active: false })
                        }
                        className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${!formData.is_active ? "bg-white text-red-500 shadow-sm" : "text-gray-400"}`}
                      >
                        Inactive
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-[#a3531e] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#8b4619] transition-all shadow-lg shadow-orange-900/10 disabled:grayscale"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Continue to Image"
                    )}
                    <ChevronRight size={18} />
                  </button>
                </form>
              ) : (
                /*IMAGE UPLOAD */
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Visual Assets
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Upload a cover image for your new category.
                    </p>
                  </div>

                  <div
                    onClick={() => fileInputRef.current.click()}
                    className="border-2 border-dashed border-gray-200 rounded-[2rem] p-10 flex flex-col items-center justify-center cursor-pointer hover:border-[#a3531e]/40 hover:bg-orange-50/30 transition-all group"
                  >
                    <input
                      type="file"
                      hidden
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                    />

                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-40 h-40 object-cover rounded-2xl shadow-md"
                      />
                    ) : (
                      <div className="bg-orange-50 text-[#a3531e] p-5 rounded-full group-hover:scale-110 transition-transform">
                        <ImagePlus size={32} />
                      </div>
                    )}

                    <p className="mt-4 font-bold text-gray-700">
                      {previewUrl ? "Change Image" : "Drop your image here"}
                    </p>
                    <p className="text-xs text-gray-400">
                      Supports PNG, JPG (Max 2MB)
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 text-gray-400 font-bold hover:text-gray-600 transition"
                    >
                      Skip for now
                    </button>
                    <button
                      onClick={handleUploadImage}
                      disabled={!selectedFile || loading}
                      className="flex-[2] bg-[#a3531e] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#8b4619] transition-all shadow-lg disabled:bg-gray-200"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <Upload size={18} />
                      )}
                      Complete Creation
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
