import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    ImagePlus,
    PencilLine,
    RefreshCcw,
    Trash2,
    Upload,
    X,
} from "lucide-react";
import logo1 from "../../../assets/Logo/image.png";
import logo2 from "../../../assets/Logo/image copy.png";
import logo3 from "../../../assets/Logo/image copy 2.png";
import logo4 from "../../../assets/Logo/image copy 3.png";

const STORAGE_KEY = "kru-coffee-logo-library";

const createId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }

    return `logo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

const initialLogos = [
    {
        id: "logo-home-1",
        name: "Signature Roast",
        description: "Primary logo for the public header and hero branding.",
        previewUrl: logo1,
        fileName: "image.png",
        isActive: true,
        updatedAt: new Date().toISOString(),
        source: "asset",
    },
    {
        id: "logo-home-2",
        name: "Espresso Mark",
        description: "Secondary logo used for compact header and sidebar spaces.",
        previewUrl: logo2,
        fileName: "image copy.png",
        isActive: false,
        updatedAt: new Date().toISOString(),
        source: "asset",
    },
    {
        id: "logo-home-3",
        name: "Warm Blend",
        description: "Alternative mark for promotions and seasonal layouts.",
        previewUrl: logo3,
        fileName: "image copy 2.png",
        isActive: false,
        updatedAt: new Date().toISOString(),
        source: "asset",
    },
    {
        id: "logo-home-4",
        name: "Cafe Seal",
        description: "Archive version kept for visual testing and comparisons.",
        previewUrl: logo4,
        fileName: "image copy 3.png",
        isActive: false,
        updatedAt: new Date().toISOString(),
        source: "asset",
    },
];

const emptyForm = {
    id: null,
    name: "",
    description: "",
    previewUrl: "",
    fileName: "",
    isActive: true,
};

const formatDateTime = (value) =>
    new Intl.DateTimeFormat("en", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
    }).format(new Date(value));

const normalizeLogos = (items) => {
    const sanitized = Array.isArray(items)
        ? items.filter((item) => item && item.id && item.previewUrl && item.name)
        : [];

    if (!sanitized.length) {
        return initialLogos;
    }

    const activeIndex = sanitized.findIndex((item) => item.isActive);

    return sanitized.map((item, index) => ({
        ...item,
        isActive: activeIndex === -1 ? index === 0 : index === activeIndex,
    }));
};

const loadLogosFromStorage = () => {
    if (typeof window === "undefined") {
        return initialLogos;
    }

    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            return initialLogos;
        }

        return normalizeLogos(JSON.parse(stored));
    } catch {
        return initialLogos;
    }
};

const Crud_Logo = () => {
    const [logos, setLogos] = useState(loadLogosFromStorage);
    const [form, setForm] = useState(emptyForm);
    const [selectedLogoId, setSelectedLogoId] = useState(null);
    const [message, setMessage] = useState("Ready to manage brand logos.");
    const [isHydrated, setIsHydrated] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (!isHydrated || typeof window === "undefined") {
            return;
        }

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(logos));
    }, [isHydrated, logos]);

    const activeLogo = useMemo(() => logos.find((item) => item.isActive) ?? logos[0] ?? null, [logos]);

    const selectedLogo = useMemo(
        () => logos.find((item) => item.id === selectedLogoId) ?? null,
        [selectedLogoId, logos]
    );

    const editingLogo = useMemo(() => logos.find((item) => item.id === form.id) ?? null, [form.id, logos]);

    useEffect(() => {
        if (!logos.length) {
            setSelectedLogoId(null);
            return;
        }

        const exists = logos.some((item) => item.id === selectedLogoId);
        if (!exists) {
            setSelectedLogoId(logos[0].id);
        }
    }, [logos, selectedLogoId]);

    const stats = useMemo(() => {
        const activeCount = logos.filter((item) => item.isActive).length;
        const uploadedCount = logos.filter((item) => item.source === "upload").length;

        return {
            total: logos.length,
            activeCount,
            archivedCount: logos.length - activeCount,
            uploadedCount,
        };
    }, [logos]);

    const clearForm = () => {
        setForm(emptyForm);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const selectLogoForEdit = (logo) => {
        setSelectedLogoId(logo.id);
        setForm({
            id: logo.id,
            name: logo.name,
            description: logo.description,
            previewUrl: logo.previewUrl,
            fileName: logo.fileName,
            isActive: logo.isActive,
        });
        setMessage(`Editing ${logo.name}. Update the details or replace the image.`);
    };

    const handleFileChange = async (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const previewUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.onerror = () => reject(new Error("Unable to read file"));
            reader.readAsDataURL(file);
        });

        setForm((previous) => ({
            ...previous,
            previewUrl,
            fileName: file.name,
        }));
        setMessage(`Loaded ${file.name}. Save to upload the new logo.`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.name.trim() || !form.previewUrl) {
            setMessage("Add a logo name and choose an image before saving.");
            return;
        }

        const timestamp = new Date().toISOString();

        setLogos((previous) => {
            const nextList = previous.map((item) => ({ ...item }));

            if (form.isActive) {
                nextList.forEach((item) => {
                    item.isActive = false;
                });
            }

            if (form.id) {
                const index = nextList.findIndex((item) => item.id === form.id);
                if (index !== -1) {
                    const current = nextList[index];
                    nextList[index] = {
                        ...current,
                        name: form.name.trim(),
                        description: form.description.trim(),
                        previewUrl: form.previewUrl,
                        fileName: form.fileName,
                        isActive: form.isActive || current.isActive,
                        updatedAt: timestamp,
                        source: current.source === "upload" || form.fileName !== current.fileName ? "upload" : current.source,
                    };
                }
            } else {
                nextList.unshift({
                    id: createId(),
                    name: form.name.trim(),
                    description: form.description.trim(),
                    previewUrl: form.previewUrl,
                    fileName: form.fileName,
                    isActive: form.isActive || !previous.some((item) => item.isActive),
                    updatedAt: timestamp,
                    source: "upload",
                });
            }

            const activeExists = nextList.some((item) => item.isActive);
            if (!activeExists && nextList.length > 0) {
                nextList[0] = { ...nextList[0], isActive: true };
            }

            const activeIndex = nextList.findIndex((item) => item.isActive);
            return nextList.map((item, index) => ({
                ...item,
                isActive: index === activeIndex,
            }));
        });

        setMessage(form.id ? "Logo updated successfully." : "Logo uploaded successfully.");
        clearForm();
    };

    const handleDelete = (id) => {
        let deletedName = "Logo";

        setLogos((previous) => {
            const removed = previous.find((item) => item.id === id);
            deletedName = removed?.name ?? deletedName;

            const remaining = previous.filter((item) => item.id !== id);

            if (!remaining.length) {
                return [];
            }

            const hasActive = remaining.some((item) => item.isActive);
            if (!hasActive) {
                remaining[0] = { ...remaining[0], isActive: true };
            }

            const activeIndex = remaining.findIndex((item) => item.isActive);
            return remaining.map((item, index) => ({
                ...item,
                isActive: index === activeIndex,
            }));
        });

        if (form.id === id) {
            clearForm();
        }

        if (selectedLogoId === id) {
            setSelectedLogoId(null);
        }

        setMessage(`${deletedName} removed from the library.`);
    };
    const handleResetDefaults = () => {
        setLogos(initialLogos);
        setSelectedLogoId(initialLogos[0]?.id ?? null);
        clearForm();
        setMessage("Restored the default coffee brand logo set.");

        if (typeof window !== "undefined") {
            window.localStorage.removeItem(STORAGE_KEY);
        }
    };

    return (
        <section className="overflow-hidden rounded-[32px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:p-8">
                <div className="rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_18px_45px_rgba(120,53,15,0.1)]">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Status</p>
                            <h2 className="mt-1 text-2xl font-semibold text-stone-950">{editingLogo ? "Editing logo" : "Create a new logo"}</h2>
                        </div>
                        <button
                            type="button"
                            onClick={handleResetDefaults}
                            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
                        >
                            <RefreshCcw size={16} />
                            Reset defaults
                        </button>
                    </div>

                    <p className="mt-3 rounded-2xl bg-stone-100 px-4 py-3 text-sm text-stone-600">
                        {message}
                    </p>

                    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-stone-700" htmlFor="logoName">
                                Logo name
                            </label>
                            <input
                                id="logoName"
                                type="text"
                                value={form.name}
                                onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
                                placeholder="Signature Roast"
                                className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-stone-700" htmlFor="logoDescription">
                                Description
                            </label>
                            <textarea
                                id="logoDescription"
                                rows="4"
                                value={form.description}
                                onChange={(event) => setForm((previous) => ({ ...previous, description: event.target.value }))}
                                placeholder="Describe where this logo should be used."
                                className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                            />
                        </div>

                        <div className="rounded-3xl border border-dashed border-amber-300 bg-amber-50/70 p-4">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-stone-900">Logo image</p>
                                    <p className="text-xs leading-5 text-stone-600">PNG, JPG, or SVG recommended. Square images work best for the header.</p>
                                </div>
                                <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800">
                                    <Upload size={16} />
                                    Upload file
                                    <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>

                            {form.previewUrl ? (
                                <div className="mt-4 flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm">
                                    <img
                                        src={form.previewUrl}
                                        alt={form.name || "Logo preview"}
                                        className="h-20 w-20 rounded-2xl border border-stone-100 bg-stone-50 object-contain p-2"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-stone-900">{form.fileName || "Selected image"}</p>
                                        <p className="mt-1 text-xs leading-5 text-stone-500">
                                            The preview updates immediately when you choose a new image.
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setForm((previous) => ({ ...previous, previewUrl: "", fileName: "" }))}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition hover:border-stone-300 hover:bg-stone-50 hover:text-stone-700"
                                        aria-label="Remove selected image"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ) : null}
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                            >
                                <ImagePlus size={17} />
                                {editingLogo ? "Update logo" : "Upload logo"}
                            </button>
                            <button
                                type="button"
                                onClick={clearForm}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
                            >
                                Clear form
                            </button>
                        </div>
                    </form>
                </div>

                <div className="space-y-6 rounded-[32px] border border-white/70 bg-white/75 p-5 shadow-[0_24px_60px_rgba(120,53,15,0.1)] backdrop-blur-xl lg:p-6">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold text-stone-950">Detail preview</h2>
                            <p className="mt-1 text-sm text-stone-600">Review the selected logo before saving changes.</p>
                        </div>
                        <div className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-600">
                            {selectedLogo ? "Editing selected item" : "No item selected"}
                        </div>
                    </div>

                    {selectedLogo ? (
                        <div className="mt-5 overflow-hidden rounded-[30px] border border-[#6d4b35] bg-gradient-to-br from-[#1f130d] via-[#2b1a10] to-[#4f2f1d] p-0 text-white shadow-[0_20px_55px_rgba(62,39,28,0.28)]">
                            <div className="relative border-b border-white/10 px-5 pb-5 pt-6">
                                <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-amber-200/20 blur-2xl" />
                                <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-orange-300/20 blur-xl" />

                                <div className="relative flex items-center justify-between gap-3">
                                    <p className="text-[11px] uppercase tracking-[0.26em] text-amber-200">Brand Sample</p>
                                    <span
                                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${selectedLogo.isActive
                                            ? "bg-emerald-300/20 text-emerald-100"
                                            : "bg-white/15 text-stone-100"
                                            }`}
                                    >
                                        {selectedLogo.isActive ? "Current Live" : "Archive Draft"}
                                    </span>
                                </div>

                                <div className="relative mt-4 flex items-start gap-4">
                                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[26px] border border-white/25 bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
                                        <img
                                            src={selectedLogo.previewUrl}
                                            alt={selectedLogo.name}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="truncate text-2xl font-semibold tracking-tight text-white">{selectedLogo.name}</h3>
                                        <p className="mt-2 text-sm leading-6 text-stone-200">{selectedLogo.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-5 py-5">
                                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-white/12 bg-white/8 px-3 py-3">
                                        <p className="text-[11px] uppercase tracking-[0.16em] text-stone-300">File</p>
                                        <p className="mt-1 truncate text-sm font-medium text-white">{selectedLogo.fileName}</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/12 bg-white/8 px-3 py-3">
                                        <p className="text-[11px] uppercase tracking-[0.16em] text-stone-300">Source</p>
                                        <p className="mt-1 text-sm font-medium text-white">{selectedLogo.source === "upload" ? "Uploaded file" : "Bundled asset"}</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/12 bg-white/8 px-3 py-3">
                                        <p className="text-[11px] uppercase tracking-[0.16em] text-stone-300">Updated</p>
                                        <p className="mt-1 text-sm font-medium text-white">{formatDateTime(selectedLogo.updatedAt)}</p>
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    <button
                                        type="button"
                                        onClick={() => selectLogoForEdit(selectedLogo)}
                                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
                                    >
                                        <PencilLine size={15} />
                                        Update logo
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(selectedLogo.id)}
                                        className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-100/80 px-4 py-2.5 text-sm font-semibold text-rose-900 transition hover:bg-rose-200"
                                    >
                                        <Trash2 size={15} />
                                        Delete logo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-5 rounded-[28px] border border-dashed border-stone-300 bg-stone-50 p-8 text-center text-stone-500">
                            Choose a logo from the library to view its preview and edit details.
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
};

export default Crud_Logo;