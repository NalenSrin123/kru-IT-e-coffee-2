import { useState } from "react";

const pageBgColor      = "#f5edd8";
const cardBorderColor  = "#e0d0b5";
const inputBorderColor = "#e0d0b5";
const inputFocusColor  = "#c8915a";
const titleColor       = "#3b1f0e";
const bodyTextColor    = "#2c1a09";
const labelColor       = "#8a6848";
const selectedColor    = "#7a3e1a";
const walletBgSelected = "#AC7F5E";
const badgeColor       = "#22c55e";
const btnStartColor    = "#5c2d0e";
const btnEndColor      = "#7a3e1a";

const Design_checkout_page = () => {
  const [fullName, setFullName] = useState("");
  const [phone,    setPhone]    = useState("");
  const [email,    setEmail]    = useState("");
  const [address,  setAddress]  = useState("");
  const [city,     setCity]     = useState("");
  const [payMethod, setPayMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal    = 4.50;
  const tax         = 0.43;
  const deliveryFee = 1.50;
  const total       = subtotal + tax + deliveryFee;

  const inputStyle = {
    background: pageBgColor,
    border: `1.5px solid ${inputBorderColor}`,
    borderRadius: "10px",
    padding: "13px 16px",
    fontSize: "16px",
    color: bodyTextColor,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  const focusHandlers = {
    onFocus: (e) => { e.target.style.borderColor = inputFocusColor; e.target.style.boxShadow = "0 0 0 3px rgba(200,145,90,0.18)"; },
    onBlur:  (e) => { e.target.style.borderColor = inputBorderColor; e.target.style.boxShadow = "none"; },
  };

  const Field = ({ label, ...props }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label style={{ color: labelColor, fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</label>
      <input style={inputStyle} {...props} {...focusHandlers} />
    </div>
  );

  const walletBtn = (id, label, icon) => (
    <button
      key={id}
      onClick={() => setPayMethod(id)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
        padding: "16px 12px", borderRadius: "14px",
        border:     payMethod === id ? `2px solid ${selectedColor}` : `2px solid ${cardBorderColor}`,
        background: payMethod === id ? walletBgSelected : pageBgColor,
        boxShadow:  payMethod === id ? "0 2px 14px rgba(122,62,26,0.18)" : "none",
        transform:  payMethod === id ? "scale(1.04)" : "scale(1)",
        transition: "all 0.2s", cursor: "pointer", fontWeight: "600", fontSize: "14px", color: titleColor,
        width: "100%",
      }}
    >
      {icon}
      {label}
    </button>
  );

  const card = {
    background: pageBgColor,
    border: `1px solid ${cardBorderColor}`,
    borderRadius: "20px",
    padding: "16px 14px",
  };

  const sectionLabel = {
    color: labelColor, fontSize: "11px", fontWeight: "700",
    textTransform: "uppercase", letterSpacing: "2px", marginBottom: "14px",
  };

  return (
    <div style={{ background: pageBgColor, minHeight: "100vh", padding: "32px 16px 48px", fontFamily: "sans-serif" }}>
      <style>{`
        .co-name-phone { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .co-wallets    { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 28px; }
        .co-city       { width: 50%; }
        @media (max-width: 580px) {
          .co-name-phone { grid-template-columns: 1fr; gap: 20px; }
          .co-wallets    { grid-template-columns: 1fr; gap: 12px; }
          .co-city       { width: 100%; }
        }
      `}</style>

      <h1 style={{ textAlign: "center", color: titleColor, fontSize: "26px", fontWeight: "800", marginBottom: "28px" }}>
        CheckOut
      </h1>

      <div style={{ maxWidth: "672px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* BILLING */}
        <div style={card}>
          <h2 style={{ color: titleColor, fontSize: "17px", fontWeight: "bold", marginBottom: "24px" }}>Billing Information</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="co-name-phone">
              <Field label="Full Name"    type="text"  placeholder="John Doe"            value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <Field label="Phone Number" type="tel"   placeholder="+855 123-4567"       value={phone}    onChange={(e) => setPhone(e.target.value)} />
            </div>
            <Field label="Email"   type="email" placeholder="johndon@123gmail.com" value={email}   onChange={(e) => setEmail(e.target.value)} />
            <Field label="Address" type="text"  placeholder="123 Main Street"      value={address} onChange={(e) => setAddress(e.target.value)} />
            <div className="co-city">
              <Field label="City" type="text" placeholder="Phnom Penh" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div style={card}>
          <h2 style={{ color: titleColor, fontSize: "17px", fontWeight: "bold", marginBottom: "24px" }}>Payment Method</h2>
          <p style={sectionLabel}>Digital Wallet</p>
          <div className="co-wallets">
            {walletBtn("aba", "ABA",
              <svg viewBox="0 0 36 36" fill="none" style={{ width: "32px", height: "32px", flexShrink: 0 }}>
                <rect width="36" height="36" rx="8" fill="#003087" />
                <text x="18" y="24" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="sans-serif">ABA</text>
              </svg>
            )}
            {walletBtn("acleda", "ACLEDA",
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1502 1448" style={{ width: "32px", height: "32px", flexShrink: 0 }}>
                <path fillRule="evenodd" fill="#163865" d="m670.2 9.2c246.3-40.4 508.1 62 665.7 254.8l1.2-5.3c11.9 23.8 29 44.5 43.9 66.5 74.5 110.6 114.7 242.6 120.6 375.5 3.3 126.6-26.2 254.4-86.6 365.9-68.7 128-177.1 234.1-306.2 300.5-216.2 113.1-489.4 105.8-699.1-19.2-133.7-78.5-241.3-200.8-301.1-343.8-91.4-214-69.9-471.6 56.1-667.2 60.2 69 107 149.8 135.8 236.9 49.7 164.3 175.9 300.5 332.3 369.2 177 80.1 383.5 84.1 567.3 24.8-101-61-209-121.2-276.9-221.1-45.9-63.8-57.3-143.9-95.8-211.5-101.4-195.4-301.7-334.4-519.8-362.5 102.8-86.4 229.4-145 362.6-163.5zm218.7 486.5c22.8 42.6 41.1 87.4 56.1 133.3 18.5 56.1 53.1 105.8 95.7 146.4 74-62.2 129.3-147.8 147.3-243.5 16.9-100 68.5-197 150.7-258-37.9-15.3-80.4-10.3-120.2-8.1-139.6 14.4-267.2 104.6-329.6 229.9zm-342.8 480.2c15.1 57.7 39.9 113.1 77 160 29.2 38.5 69.1 67.2 97.9 106.1 44 56.3 70.5 124.3 82.8 194.4l-9.7 3.6c9.6-0.2 19.1-0.4 28.9-0.6l-9-1.3c83.9-97.4 118-233.1 91.9-358.8-125.7-7.4-249.6-42.2-359.8-103.4z" />
                <path fill="#cea939" d="m0.8 200.4c98.6-31.4 204.2-42.4 306.8-27.7 218.1 28.1 418.4 167.1 519.8 362.5 38.5 67.6 49.9 147.7 95.8 211.5 67.9 99.9 175.9 160.1 276.9 221.1-183.8 59.3-390.3 55.3-567.3-24.8-156.4-68.7-282.6-204.9-332.3-369.2-28.8-87.1-75.6-167.9-135.8-236.9-47.1-53.8-103.1-99.1-163.9-136.5z" />
                <path fill="#ffffff" d="m888.9 495.7c62.4-125.3 190-215.5 329.6-229.9 39.8-2.2 82.3-7.2 120.2 8.1-82.2 61-133.8 158-150.7 258-18 95.7-73.3 181.3-147.3 243.5-42.6-40.6-77.2-90.3-95.7-146.4-15-45.9-33.3-90.7-56.1-133.3z" />
              </svg>
            )}
            {walletBtn("kb", "KB PRASAC",
              <svg viewBox="0 0 36 36" fill="none" style={{ width: "32px", height: "32px", flexShrink: 0 }}>
                <rect width="36" height="36" rx="8" fill="#FFD600" />
                <text x="18" y="15" textAnchor="middle" fill="#222" fontSize="7" fontWeight="800" fontFamily="sans-serif">KB</text>
                <text x="18" y="26" textAnchor="middle" fill="#222" fontSize="5.5" fontWeight="700" fontFamily="sans-serif">PRASAC</text>
              </svg>
            )}
          </div>

          <p style={sectionLabel}>Other</p>
          <button
            onClick={() => setPayMethod("cod")}
            style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px", borderRadius: "14px",
              border:     payMethod === "cod" ? `2px solid ${selectedColor}` : `2px solid ${cardBorderColor}`,
              background: pageBgColor,
              boxShadow:  payMethod === "cod" ? "0 2px 14px rgba(122,62,26,0.15)" : "none",
              transition: "all 0.2s", cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#ede0c8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m210.6 44.39l-7-4.39c-13.7-8.4-30.8-13.28-45.5-8.7c-15.8 4.92-28.4 17.09-35 35.37l-9.4-4.84c-16.2-8.34-24.68-8.47-31.71-5.31c-5.61 2.51-11.46 8.55-18.09 17.37l82.4 63.71c12.9 4.2 31.8 4.1 50.7-.8c19-4.9 37.9-14.5 51.7-27.4l31.1-76.9c-27.4-21.65-52.4-9.11-69.2 11.89m53.1 76.51c-17 17.2-42.3 28.8-62 34c-6.9 1.8-13.8 3.1-20.5 3.8c-3.7 6.1-6.8 12.3-9.2 18.5c4.8 24.4 13.8 44.4 27.3 60.8l-14.4 12c-8.3-10-15.7-20.8-21.3-32.8c-.9 23.2 4.3 47.2 12.8 72.2l-17.7 6c-15.6-45.6-20.9-92.3 1-136.3c-7.4-.6-14.4-2-20.9-4.3l-.3-.1q-6.45 6.15-12.3 12.9c-31.57 36.6-48.96 85.3-39.86 123.2c4.87 20.3 13.6 39.5 26.16 55.9c18.4-.4 35.8 0 51.6 6c7.5-.8 15.2-1.3 23.2-1.3c28.5 0 54.3 5.3 73.8 14.5c7.6 3.6 14.5 7.9 20 12.8c0-5.3.8-11 2.4-15.2c-8.9-8.4-14.5-18.6-14.5-30.2c0-16.1 10.7-29.4 26.2-39c0-4.6.9-9 2.5-13.2c-10.1-8.7-16.6-19.5-16.6-32.1c0-7.9 2.6-15.1 7-21.6c-4.4-6.4-7-13.6-7-21.5c0-3.9.6-7.5 1.7-11c-9.7-8.6-15.8-19.2-15.8-31.4c0-12.1 6-22.6 15.6-31.1c-5.9-4.6-12.2-8.5-18.9-11.5m111.4 2.3c-26 0-49.5 5.5-65.6 13.6c-16.2 8.1-23.8 18.1-23.8 26.7c0 8.7 7.6 18.7 23.8 26.8c16.1 8.1 39.6 13.6 65.6 13.6c11.3 0 22-1.1 31.9-2.9v-17c13.9-2.1 25.4-5.9 32.8-10.8v17.6c12.5-3.6 24.5-16.9 24.8-27.3c0-8.6-7.6-18.6-23.8-26.7s-39.6-13.6-65.7-13.6m96.5 67.7c-3.3 3.5-7.2 6.8-11.6 9.8l.2 29c12.6-7.5 18.5-16.2 18.5-23.8c0-4.8-2.3-10-7.1-15m-171.8 15.4c.3 8.6 7.9 18.3 23.8 26.3c16.2 8.2 39.6 13.6 65.7 13.6c16.3 0 31.6-2.2 44.7-5.8l.7-27.2c-17.2 6-37.6 9.3-59.6 9.3c-28.5 0-54.4-5.7-74-15.5c-.5-.2-.9-.5-1.3-.7m2 34.8c-1.4 2.7-2 5.4-2 7.9c0 8.7 7.6 18.7 23.8 26.8s39.6 13.5 65.7 13.5c13.2 0 25.7-1.3 37-3.8v-24c-11.6 2.2-24 3.3-37 3.3c-28.6 0-54.5-5.6-74.1-15.5c-4.9-2.4-9.4-5.2-13.4-8.2m174.9 0c-6.1 4.3-11.4 7.5-17.6 10.2v22.3c13.3-7.7 19.6-16.7 19.6-24.6c0-2.5-.6-5.2-2-7.9m7.5 36.8c-2 2-4.2 3.9-6.6 5.8v32.4c10.3-7 15.3-14.7 15.3-21.7c0-5.3-2.9-11-8.7-16.5m-170.1 14c-.1.9-.2 1.7-.2 2.5c0 8.7 7.6 18.6 23.8 26.7c16.2 8.2 39.7 13.6 65.7 13.6c14.9 0 29.1-1.8 41.4-4.8V300c-16.3 5.2-35.2 8-55.5 8c-28.6 0-54.5-5.7-74.1-15.5c-.4-.2-.7-.4-1.1-.6m-13.6 21.4c-8.7 6.5-12.8 13.6-12.8 20c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c9.5 0 18.7-.7 27.3-2v-18.2h-1.1c-28.6 0-54.5-5.7-74.1-15.6c-12.5-6.2-22.9-14.5-28.8-24.5M463 343.9c-7.9 2.8-16.5 5.1-25.7 6.6v12.1c1.9-.8 3.8-1.6 5.6-2.5c9.8-5 16.4-10.6 20.1-16.2m9.2 18.2c-3.8 3.8-8.2 7.2-13.1 10.3V401c13.3-7.6 19.6-16.6 19.6-24.5c0-4.6-2.1-9.6-6.5-14.4m-348.7 2.8c-10.2.1-21.2 1.4-32.6 4.1c-22.81 5.3-42.42 15-55.22 25.7c-12.8 10.6-17.8 21.4-16.3 29.1s9.4 14.8 24.8 18.9c15.35 4 36.82 4.2 59.62-1.1c9.2-2.2 17.8-5 25.7-8.3v-20.7c14.6-6.5 25.5-14.3 30.4-21.9v24.4c12.1-10.4 16.8-20.8 15.4-28.4c-1.4-7.7-9.4-14.8-24.8-18.8c-7.7-2-16.9-3.1-27-3m64.6 5.2c2.7 3.9 4.6 8.3 5.6 13.2c1.1 6 .6 11.8-1.2 17.5c9.9 2.6 18.9 6.1 26.7 10.5c4.4 2.4 8.5 5.3 12.1 8.3c9-2.1 16.6-5.1 22-8.7v20.6c16.1-7.6 23.5-16.9 23.5-24.3c0-7.5-7.4-16.8-23.6-24.4c-16.1-7.5-39.3-12.6-65.1-12.7m111.8 5c-.1.4-.1.9-.1 1.4c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c13.2 0 25.7-1.4 37-3.8v-26.9c-14.8 4-31.5 6.2-49.1 6.2c-28.6 0-54.5-5.7-74.1-15.5c-1.1-.6-2.2-1.2-3.2-1.7m2.8 37.3c-2 3.3-2.9 6.5-2.9 9.6c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c13.2 0 25.7-1.4 37-3.8v-26.4c-11.6 2.2-24 3.4-37 3.4c-28.6 0-54.5-5.7-74.1-15.6c-4.5-2.2-8.7-4.7-12.5-7.5m173.1 0c-5.8 3.9-10.9 7-16.7 9.5v24.6c13.3-7.6 19.6-16.6 19.6-24.5c0-3.1-.9-6.3-2.9-9.6m-292.6 5.4c-3.5 4.4-7.6 8.6-12.2 12.4c-15.6 13.1-37.6 23.7-63 29.6c-9.06 2.1-18.06 3.4-26.7 4.1c3.2 5.3 8.83 10.5 17.07 15.1c13.63 7.7 33.63 12.9 55.83 12.9c10.1 0 19.7-1.1 28.5-3v-20.8c13.8-2.1 25.4-5.9 32.8-10.8v18.4c10-7 14.8-14.9 14.8-22.4c0-8.7-6.5-18-20.2-25.7c-7.4-4.1-16.6-7.5-26.9-9.8"/></svg></div>
              <div style={{ textAlign: "left" }}>
                <p style={{ color: titleColor, fontWeight: "600", fontSize: "15px", margin: 0 }}>Cash on Delivery</p>
                <p style={{ color: labelColor, fontSize: "13px", margin: "3px 0 0" }}>Pay when your order arrives.</p>
              </div>
            </div>
            {payMethod === "cod" && (
              <span style={{ background: badgeColor, color: "#fff", fontSize: "12px", fontWeight: "600", padding: "5px 14px", borderRadius: "20px", flexShrink: 0, marginLeft: "10px" }}>
                ✓ Default
              </span>
            )}
          </button>
        </div>

        {/* ORDER SUMMARY */}
        <div style={card}>
          <h2 style={{ color: titleColor, fontSize: "17px", fontWeight: "bold", marginBottom: "20px" }}>Order Summary</h2>
          {[
            { label: "Subtotal",     val: subtotal,    bold: true  },
            { label: "Tax (8%)",     val: tax,         bold: false },
            { label: "Delivery Fee", val: deliveryFee, bold: false },
          ].map(({ label, val, bold }) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
              <span style={{ color: bold ? bodyTextColor : labelColor, fontSize: "15px", fontWeight: bold ? "600" : "400" }}>{label}</span>
              <span style={{ color: bodyTextColor, fontSize: "15px", fontWeight: "500" }}>${val.toFixed(2)}</span>
            </div>
          ))}
          <div style={{ borderTop: `2px solid ${cardBorderColor}`, paddingTop: "18px", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: titleColor, fontSize: "17px", fontWeight: "bold" }}>Total</span>
            <span style={{ color: titleColor, fontSize: "19px", fontWeight: "bold" }}>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* PLACE ORDER */}
        {orderPlaced ? (
          <div style={{ background: badgeColor, color: "#fff", textAlign: "center", padding: "18px", borderRadius: "16px", fontWeight: "bold", fontSize: "16px" }}>
            ✓ Order Placed Successfully!
          </div>
        ) : (
          <button
            onClick={() => setOrderPlaced(true)}
            style={{
              width: "100%", padding: "18px", borderRadius: "16px", border: "none",
              background: `linear-gradient(135deg, ${btnStartColor}, ${btnEndColor})`,
              color: "#fff", fontSize: "17px", fontWeight: "bold", letterSpacing: "0.5px",
              cursor: "pointer", boxShadow: "0 4px 20px rgba(92,45,14,0.35)", transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "scale(1)"; }}
            onMouseDown={(e)  => { e.currentTarget.style.transform = "scale(0.97)"; }}
            onMouseUp={(e)    => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Place Order
          </button>
        )}

      </div>
    </div>
  );
};

export default Design_checkout_page;