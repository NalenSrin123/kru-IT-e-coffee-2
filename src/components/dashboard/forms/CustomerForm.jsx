import { useState } from "react"

// Step list for the sidebar
const steps = [
  { id: 1, label: "Personal Info" },
  { id: 2, label: "Order Details" },
  { id: 3, label: "Preferences" },
  { id: 4, label: "Summary" },
]

export default function CustomerForm() {

  // Store form data in state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
  })

  // Current active step
  const [currentStep, setCurrentStep] = useState(1)

  // Update form data when user types
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Go to next step
  function handleNext() {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "#3b2314" }}>

      {/* Main card */}
      <div className="flex rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl">

        {/* ===== LEFT SIDEBAR ===== */}
        <div className="flex flex-col gap-6 p-10 w-52 min-w-52"
          style={{ backgroundColor: "#5c3317" }}>

          {/* Logo */}
          <div>
            <h1 className="text-xl tracking-widest font-bold mb-1"
              style={{ color: "#e8c89a", fontFamily: "Georgia, serif" }}>
              KOFEE
            </h1>
            <p className="text-xs font-light tracking-widest"
              style={{ color: "#fdf6ee" }}>
              New Customer
            </p>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={step.id}>

              {/* Step row */}
              <div className="flex items-center gap-3">

                {/* Circle */}
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    backgroundColor: currentStep > step.id
                      ? "#e8c89a"
                      : currentStep === step.id
                      ? "#e8c89a"
                      : "#7a4a28",
                    color: currentStep >= step.id ? "#3b2314" : "#c4a07a",
                  }}>
                  {currentStep > step.id ? "✓" : step.id}
                </div>

                {/* Label */}
                <span className="text-xs"
                  style={{ color: currentStep >= step.id ? "#fdf6ee" : "#c4a07a" }}>
                  {step.label}
                </span>

              </div>

              {/* Line between steps */}
              {index < steps.length - 1 && (
                <div className="w-0.5 h-5 ml-3 mt-1"
                  style={{ backgroundColor: "#7a4a28" }} />
              )}

            </div>
          ))}
        </div>

        {/* ===== RIGHT FORM ===== */}
        <div className="flex-1 p-10" style={{ backgroundColor: "#fdf6ee" }}>

          <p className="text-xs tracking-widest uppercase mb-5"
            style={{ color: "#8b5e3c" }}>
            Your Personal Details
          </p>

          {/* First Name + Last Name */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-xs mb-1" style={{ color: "#7a5230" }}>
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Sok"
                className="w-full px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ borderColor: "#ddc9b0", color: "#3b2314" }}
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs mb-1" style={{ color: "#7a5230" }}>
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Chanlika"
                className="w-full px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ borderColor: "#ddc9b0", color: "#3b2314" }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs mb-1" style={{ color: "#7a5230" }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourname@gmail.com"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none border"
              style={{ borderColor: "#ddc9b0", color: "#3b2314" }}
            />
            <p className="text-xs mt-1" style={{ color: "#a07850" }}>
              We'll send your order confirmation here
            </p>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-xs mb-1" style={{ color: "#7a5230" }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+855 000 000 000"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none border"
              style={{ borderColor: "#ddc9b0", color: "#3b2314" }}
            />
          </div>

          {/* Section divider */}
          <p className="text-xs tracking-widest uppercase mt-6 mb-4 pb-2"
            style={{ color: "#8b5e3c", borderBottom: "1px solid #e5d4c0" }}>
            Delivery Address
          </p>

          {/* Street */}
          <div className="mb-4">
            <label className="block text-xs mb-1" style={{ color: "#7a5230" }}>
              Street Address
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="123 Coffee Lane"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none border"
              style={{ borderColor: "#ddc9b0", color: "#3b2314" }}
            />
          </div>

          {/* City */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-xs mb-1" style={{ color: "#7a5230" }}>
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Phnom Penh"
                className="w-full px-3 py-2 rounded-lg text-sm outline-none border"
                style={{ borderColor: "#ddc9b0", color: "#3b2314" }}
              />
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-8 py-2.5 rounded-lg text-sm tracking-widest cursor-pointer"
              style={{ backgroundColor: "#6b3a1f", color: "#fdf6ee" }}
            >
              Next →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}