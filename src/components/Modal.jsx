export default function Modal({ isOpen, onClose, onApply, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
        <div
          className="relative px-6 py-4"
          style={{
            backgroundImage: "url('/images/modal_header.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white font-bold text-lg z-10 relative font-poppins">{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-white text-xl font-bold hover:scale-110 z-10 border border-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>

        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">{children}</div>

        <div className="flex justify-end gap-4 p-4 border-t border-gray-200">
          <button
            className="border border-2 font-semibold border-black text-black px-6 py-2 rounded cursor-pointer"
            onClick={onClose}
          >
            CANCEL
          </button>
          <button className="bg-gradient-to-r from-[#27963D] to-[#134323] font-semibold text-white px-6 py-2 rounded cursor-pointer" onClick={onApply}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
