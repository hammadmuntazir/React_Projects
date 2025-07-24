
import React, { useId } from "react";

// InputBox component that handles currency amount input and currency type selection
function InputBox({
    label,                    // Text label for the amount field (e.g., "From" or "To")
    amount,                  // Current amount value
    onAmountChange,          // Function to call when amount changes
    onCurrencyChange,        // Function to call when currency selection changes
    currencyOptions = [],    // Array of available currency options (e.g., ['usd', 'eur'])
    selectedCurrency = "usd", // Currently selected currency (default: 'usd')
    amountDisable = false,   // Boolean to disable amount input
    currencyDisable = false, // Boolean to disable currency dropdown
    className = "",          // Additional CSS classes for styling
}) {
    // Generate a unique ID for accessibility (links label to input)
    const amountInputId = useId();

    return (
        // Main container with white background, padding, rounded corners, and flex layout
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            
            {/* Left section - Amount input */}
            <div className="w-1/2">
                {/* Label for the amount input */}
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                
                {/* Amount input field */}
                <input
                    
                    id={amountInputId}  // Links to the label for accessibility
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"       // Only allows numbers
                    placeholder="Amount"
                    disabled={amountDisable} // Disables input if true
                    value={amount}     // Controlled component - value comes from props
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    // When changed, converts value to number and calls callback
                />
            </div>

            {/* Right section - Currency selector */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                {/* Label for currency dropdown */}
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                
                {/* Currency selection dropdown */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}  // Shows currently selected currency
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    // When changed, calls callback with new currency value
                    disabled={currencyDisable} // Disables dropdown if true
                >
                    {/* Maps through currencyOptions to create dropdown options */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}  {/* Shows currency code in uppercase */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;