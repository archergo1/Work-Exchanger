const OurSelect = () => {
  return (
    <div className="ourSelect bg-mySecondColor pt-1">
          <h2 className="my-16 text-center text-4xl text-black">精選換宿</h2>
          <div className="recommended mx-auto flex max-w-screen-xl justify-between">
            {/* <!-- ourSelect cards --> */}
            <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm">
              <h3 className="my-8 text-center text-3xl">評分最高</h3>
              <ol className="list-decimal pl-12">
                <li><a href="">北山古洋樓</a></li>
                <li><a href="">晃晃二手書</a></li>
                <li><a href="">台東龍捲風</a></li>
              </ol>
            </div>

            <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm">
              <h3 className="my-8 text-center text-3xl">工時最短</h3>
              <ol className="list-decimal pl-12">
                <li><a href="">北山古洋樓</a></li>
                <li><a href="">晃晃二手書</a></li>
                <li><a href="">台東龍捲風</a></li>
              </ol>
            </div>

            <div className="mb-16 h-60 w-72 rounded bg-white shadow-sm">
              <h3 className="my-8 text-center text-3xl">福利最多</h3>
              <ol className="list-decimal pl-12">
                <li><a href="">北山古洋樓</a></li>
                <li><a href="">晃晃二手書</a></li>
                <li><a href="">台東龍捲風</a></li>
              </ol>
            </div>
          </div>
        </div>
  )
}

export default OurSelect