function BannerArea() {
  return (
    // <!-- banner & search input-->
    <div className="banner h-64 bg-bannerImage bg-center pt-24">
      <form className="mx-auto max-w-xl">
        <label
          htmlFor="search"
        //   "for" in js => "htmlFor" in jsx 
          className="sr-only mb-2 text-sm font-medium text-gray-900"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="search"
            id="search"
            className=":border-gray-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900"
            placeholder="請輸入換宿商家名稱"
            required
          />
          <button
            type="submit"
            className="absolute right-2.5 bottom-2.5 rounded-lg bg-myThirdColor px-4 py-2 text-sm font-medium text-white focus:outline-none"
          >
            搜尋
          </button>
        </div>
      </form>
    </div>
  );
}

export default BannerArea;
