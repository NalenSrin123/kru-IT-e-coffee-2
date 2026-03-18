import React, { useState } from "react";
import {
  Award,
  Coffee,
  CreditCard,
  Eye,
  Home,
  Lock,
  MapPinHouse,
  Palette,
  RotateCcw,
  Save,
  User,
  Zap,
} from "lucide-react";

const defaultStyles = {
  navbarBg: "#1E140F",
  textColor: "#FFF7ED",
  hoverColor: "#C08457",
  activeColor: "#F5C66B",
};

const initialMenuItems = [
  {
    id: "home",
    name: "Home",
    description: "Landing page with highlights and promos.",
    enabled: true,
    icon: Home,
    accent: "from-amber-200 to-orange-100",
  },
  {
    id: "menu",
    name: "Menu",
    description: "Browse drinks, beans, and snacks.",
    enabled: true,
    icon: Coffee,
    accent: "from-orange-200 to-amber-100",
  },
  {
    id: "services",
    name: "Services",
    description: "Delivery, subscriptions, and offers.",
    enabled: true,
    icon: Zap,
    accent: "from-yellow-200 to-amber-100",
  },
  {
    id: "about",
    name: "About",
    description: "Brand story and shop info.",
    enabled: true,
    icon: Award,
    accent: "from-stone-200 to-orange-100",
  },
  {
    id: "contact",
    name: "Contact",
    description: "Location and support details.",
    enabled: true,
    icon: MapPinHouse,
    accent: "from-lime-100 to-amber-100",
  },
  {
    id: "cart",
    name: "Cart",
    description: "Review and checkout orders.",
    enabled: true,
    icon: CreditCard,
    accent: "from-emerald-100 to-amber-100",
  },
  {
    id: "login",
    name: "Login",
    description: "Access your account.",
    enabled: true,
    icon: Lock,
    accent: "from-sky-100 to-indigo-100",
  },
  {
    id: "signup",
    name: "Sign Up",
    description: "Create a new account.",
    enabled: true,
    icon: User,
    accent: "from-rose-100 to-orange-100",
  },
];

const stylePresets = [
  {
    id: "roastery",
    title: "Roastery",
    description: "Warm espresso palette with premium contrast.",
    styles: defaultStyles,
  },
  {
    id: "latte",
    title: "Latte Bar",
    description: "Soft cream background with cinnamon highlights.",
    styles: {
      navbarBg: "#F8EAD7",
      textColor: "#5B371C",
      hoverColor: "#D97745",
      activeColor: "#7C4A22",
    },
  },
];

const colorFields = [
  { key: "navbarBg", label: "Navbar background" },
  { key: "textColor", label: "Text color" },
  { key: "hoverColor", label: "Hover color" },
  { key: "activeColor", label: "Active color" },
];

const Config_Menu = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [styles, setStyles] = useState(defaultStyles);
  const [saveMessage, setSaveMessage] = useState("Ready to save changes");

  const enabledCount = menuItems.filter((item) => item.enabled).length;
  const hiddenCount = menuItems.length - enabledCount;
  const previewItems = menuItems.filter((item) => item.enabled);

  const handleToggle = (id) => {
    setMenuItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const handleStyleChange = (name, value) => {
    setStyles((previousStyles) => ({ ...previousStyles, [name]: value }));
  };

  const applyPreset = (presetStyles) => {
    setStyles(presetStyles);
  };

  const handleSave = () => {
    setSaveMessage("Design saved locally. Connect this action to your API when ready.");
  };

  const handleReset = () => {
    setMenuItems(initialMenuItems);
    setStyles(defaultStyles);
    setSaveMessage("Settings restored to the default coffee theme.");
  };

  return (
    <div className="min-h-screen flex justify-content-end bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_32%),linear-gradient(180deg,_#fffaf5_0%,_#f5efe8_48%,_#efe6dc_100%)] px-4 py-8 text-stone-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
          <section className="rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(120,53,15,0.1)] backdrop-blur-xl lg:p-7">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-stone-900">Menu structure</h2>
                <p className="mt-1 text-sm text-stone-600">
                  Control ordering and visibility for every navigation item in the public header.
                </p>
              </div>
              <div className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700">
                {menuItems.length} pages configured
              </div>
            </div>

            <div className="space-y-4">
              {menuItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.id}
                    className={`rounded-[26px] border p-5 transition duration-300 ${item.enabled
                      ? "border-stone-200 bg-white shadow-sm"
                      : "border-stone-200/80 bg-stone-50/70"
                      }`}
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-stone-900 shadow-inner`}
                        >
                          <Icon size={24} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-medium ${item.enabled
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-stone-200 text-stone-600"
                                }`}
                            >
                              {item.enabled ? "Visible" : "Hidden"}
                            </span>
                          </div>
                          <p className="max-w-2xl text-sm leading-6 text-stone-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                        <button
                          type="button"
                          onClick={() => handleToggle(item.id)}
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${item.enabled
                            ? "bg-stone-900 text-white hover:bg-stone-800"
                            : "bg-white text-stone-700 ring-1 ring-inset ring-stone-300 hover:bg-stone-100"
                            }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${item.enabled ? "bg-emerald-300" : "bg-stone-400"
                              }`}
                          />
                          {item.enabled ? "Hide page" : "Show page"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(120,53,15,0.1)] backdrop-blur-xl lg:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-white">
                  <Palette size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-stone-900">Header styling</h2>
                  <p className="text-sm text-stone-600">Switch presets or tune every important menu color.</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-1">
                {stylePresets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => applyPreset(preset.styles)}
                    className="rounded-[22px] border border-stone-200 bg-stone-50 p-4 text-left transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white"
                  >
                    <p className="text-sm font-semibold text-stone-900">{preset.title}</p>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{preset.description}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {colorFields.map((field) => (
                  <label key={field.key} className="rounded-[22px] border border-stone-200 bg-white p-4">
                    <span className="mb-3 block text-sm font-medium text-stone-700">{field.label}</span>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={styles[field.key]}
                        onChange={(event) => handleStyleChange(field.key, event.target.value)}
                        className="h-12 w-16 cursor-pointer rounded-xl border border-stone-200 bg-transparent"
                      />
                      <div className="flex-1 rounded-xl bg-stone-50 px-4 py-3 text-sm font-semibold tracking-[0.18em] text-stone-600 uppercase">
                        {styles[field.key]}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(120,53,15,0.1)] backdrop-blur-xl lg:p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-stone-900">Live preview</h2>
                  <p className="mt-1 text-sm text-stone-600">Preview the exact mood of your public navigation bar.</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700">
                  <Eye size={15.5} />
                  {previewItems.length} items visible
                </div>
              </div>

              <div
                className="overflow-hidden rounded-[28px] border border-black/5 shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
                style={{ backgroundColor: styles.navbarBg }}
              >
                <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: styles.activeColor, color: styles.navbarBg }}
                    >
                      <Coffee size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: styles.hoverColor }}>
                        KRU Coffee
                      </p>
                      <p className="text-lg font-semibold" style={{ color: styles.textColor }}>
                        Premium Navigation
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {previewItems.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.id}
                          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium"
                          style={{
                            color: index === 0 ? styles.navbarBg : styles.textColor,
                            backgroundColor: index === 0 ? styles.activeColor : "transparent",
                            border: `1px solid ${index === 0 ? styles.activeColor : `${styles.textColor}26`}`,
                          }}
                        >
                          <Icon size={16} />
                          {item.name}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t px-5 py-4" style={{ borderColor: `${styles.textColor}1f` }}>
                  <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: styles.hoverColor }}>
                    <span className="rounded-full px-3 py-1" style={{ backgroundColor: `${styles.hoverColor}1f` }}>
                      Hover tone
                    </span>
                    <span className="rounded-full px-3 py-1" style={{ backgroundColor: `${styles.activeColor}1f` }}>
                      Active state
                    </span>
                    <span className="rounded-full px-3 py-1" style={{ backgroundColor: `${styles.textColor}14` }}>
                      High contrast text
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-stone-600">{saveMessage}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                >
                  <Save size={18} />
                  Save settings
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
                >
                  <RotateCcw size={18} />
                  Reset default
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Config_Menu;