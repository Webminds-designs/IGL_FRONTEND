import React from "react";
import { Check } from "lucide-react"; // Import the Check icon for the tick mark

const StepIndicator = ({ step }) => {
    return (
        <div className="flex items-center justify-between mb-10 relative w-full">
            {["Personal Information", "Academic Background", "Additional Information"].map((title, index) => (
                <div key={index} className="relative flex flex-col items-center w-full">
                    {/* Connecting Line */}
                    {index > 0 && (
                        <div
                            className={`absolute top-4 h-0.5 ${step > index ? "bg-black" : "bg-gray-300"}`}
                            style={{ width: "calc(100% - 31px)", zIndex: 1, left: "calc(-50% + 16px)" }} // Adjusted left to remove gap
                        />
                    )}

                    {/* Step Circle (Outer Circle) */}
                    <div className="relative z-10">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= index + 1 ? "border-black" : "border-gray-300"}`}>
                            {/* Inner Circle or Tick Mark */}
                            {step > index + 1 ? ( // If the step is completed, show a tick mark
                                <Check className="w-4 h-4 text-black" />
                            ) : (
                                <div className={`w-3 h-3 rounded-full ${step >= index + 1 ? "bg-black" : "bg-gray-300"}`} />
                            )}
                        </div>
                    </div>

                    {/* Step Title (Always Black) */}
                    <span className="mt-2 text-black text-sm">{title}</span>
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;