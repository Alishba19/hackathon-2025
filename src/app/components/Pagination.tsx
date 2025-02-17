import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-12 mb-0">
      {/* First Button */}
      <button
        className="px-[0.8rem] py-4 text-[0.785rem] text-black bg-paginationBg border-t-[0.1rem] border-l-[0.1rem]  border-b-[0.1rem]  border-muttedColor rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-semibold"
        disabled
      >
        First
      </button>

      {/* Page Numbers */}
      <button className="px-[0.8rem] py-4 text-[0.785rem] font-semibold text-black bg-white border border-muttedColor border-t-[0.1rem] border-l-[0.1rem]  border-b-[0.1rem] hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
        1
      </button>
      <button className="px-[0.8rem] py-4 text-[0.785rem] font-semibold text-black bg-sky-600  border-t-[0.1rem] border-l-[0.1rem]  border-b-[0.1rem] border-muttedColor  focus:outline-none focus:ring-2 focus:ring-blue-600">
        2
      </button>
      <button className="px-[0.8rem] py-4 text-[0.785rem] font-semibold text-black bg-white border border-muttedColor border-t-[0.1rem] border-l-[0.1rem]  border-b-[0.1rem] hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
        3
      </button>
      {/* Next Button */}
      <button className="px-[0.8rem] py-4 text-[0.785rem] font-semibold text-black bg-white border-[0.1rem] border-muttedColor rounded-r-lg hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
        Next
      </button>
    </div>
  );
};

export default Pagination;