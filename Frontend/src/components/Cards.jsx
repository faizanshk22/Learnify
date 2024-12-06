import React from "react";
import toast, { Toaster } from "react-hot-toast";

function Cards({ item }) {
  const handleBuyNow = (id, downloadUrl) => {
    const confirmToast = toast(
      (t) => (
        <div>
          <p>Do you want to proceed with 'Buy Now'?</p>
          <div className="flex gap-2 justify-end mt-2">
            <button
              onClick={() => {
                toast.dismiss(t.id); // Dismiss the toast
                if (id === 1 || id === 2 || id === 3 || id == 4 || id == 5 || id == 6 || id == 7 || id == 8) {
                  if (downloadUrl) {
                    toast.success("Starting your download...");
                    // Trigger download
                    const link = document.createElement("a");
                    link.href = downloadUrl;
                    link.download = downloadUrl.split('/').pop(); // Dynamically get the filename from the URL
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } else {
                    toast.error("Download link is unavailable.");
                  }
                } else {
                  toast.success("Purchase successful!");
                }
              }}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Yes
            </button>
            <button
              onClick={() => {
                toast.dismiss(t.id); // Dismiss the toast
                toast.error("Purchase canceled.");
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity, 
      }
    );
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-white dark:bg-slate-800 dark:text-white dark:border w-92 shadow-xl cursor-pointer hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt={item.name} className="rounded-t-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge bg-blue-700 text-white dark:text-white">
                {item.category}
              </div>
            </h2>
            <p className="dark:text-gray-300">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="px-3 py-1 rounded-full border-[2px] dark:border-gray-600 font-semibold">
                ${item.price}
              </div>
              <button
                onClick={() =>
                  handleBuyNow(
                    item.id,
                    item.id === 1 ? "/OOP Interview questions.pdf" : 
                    item.id === 2 ? "/LinkedList.pdf" :
                    item.id === 3 ? "/Database.pdf" :
                    item.id === 4 ? "/ProblemSolving.pdf" :
                    item.id === 5 ? "/Javascript.pdf" :
                    item.id === 6 ? "/Reactquestions.pdf" :
                    item.id === 7 ? "/MERNquestions.pdf" :
                    item.id === 8 ? "/Axios vs Fetch.pdf" :
                    null
                  )
                }
                className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-yellow-700 hover:text-white dark:hover:bg-yellow-700 font-semibold duration-200"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
