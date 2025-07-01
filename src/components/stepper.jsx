import React from "react";

const Stepper = ({ currentStep = 1, totalSteps = 4 }) => {
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

    return (
        <div className="max-w-[520px] mx-auto my-5">
            <div className="flex items-center justify-center w-full gap-2">
                {steps.map((step, idx) => {
                    const isCompleted = step < currentStep;
                    const isActive = step === currentStep;
                    const isLast = step === totalSteps;

                    return (
                        <React.Fragment key={step}>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center  text-sm font-semibold shrink-0
                ${isCompleted || isActive ? "bg-green-600 text-white" : "text-black border border-gray-300 text-gray-500 bg-white"}
              `}
                            >
                                {isCompleted ? (
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    step
                                )}
                            </div>

                            {!isLast && (
                                <div className="relative w-25 h-1 mx-1 rounded-sm bg-gray-200 overflow-hidden">
                                    <div
                                        className={`absolute h-1 rounded-sm top-0 left-0 transition-all duration-300 ${currentStep > step
                                            ? "bg-green-600 w-full"
                                            : currentStep === step
                                                ? "bg-green-600 w-1/2"
                                                : "w-0"
                                            }`}
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Stepper;
