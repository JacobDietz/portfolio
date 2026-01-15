



export default function Description({ title, description }) {
    return (
      <article className="w-full md:w-9/10 md:h-full border-2 flex flex-col border-customRed bg-noteCardColor rounded-xl shadow-[0px_0px_10px_0.1px_#154731] ">
        <div className="w-full h-1/6 border-2 border-t-0 border-customRed  border-x-0 flex justify-start items-center">
          <p className="text-2xl text-projectsBG ml-2 text-red-900 font-bold">
            {title}
          </p>
        </div>
  
        <p className="p-5 text-lgfont-Satoshi">{description}</p>
  
        <section className="border-2 md:mb-1 border-b-0 border-x-0 border-customRed h-1/8 mt-auto flex">
          <ul className="flex items-center">
            <li>
              <a
                href="/ponyExpress"
                className="text-gray-300 text:md md:text-2xl mx-5 underline hover:text-green-800"
              >
                View More
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JacobDietz/pony-express"
                target="blank"
                className="text-gray-300 text-md md:text-2xl mx-5 underline hover:text-green-800"
              >
                Github
              </a>
            </li>
          </ul>
        </section>
      </article>
    );
  }