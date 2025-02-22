import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

import { Squares } from "./components/ui/squares-background";

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative">
      <div className="relative z-10 min-h-screen overflow-auto w-full">
        <div className="flex flex-col items-center gap-4 h-screen pt-12">
          <div className="absolute h-full w-full top-0">
            <div className=" h-full w-full rounded-lg overflow-hidden bg-[#060606]">
              <Squares
                direction="diagonal"
                speed={0.2}
                squareSize={30}
                borderColor="#2471a360"
                hoverFillColor="#4AA3A260"
              />
            </div>
          </div>

          <Avatar className="h-[120px] sm:h-[150px] md:h-[150px] mb-3 relative hover:scale-110">
            {/* changer l'url pour changer l'icone à gauche */}
            <AvatarImage
              src="\img\MOI.png"
              className="opacity-90 cursor-help shadow-inner shadow-black/80 transition-transform duration-300 "
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h1 className="text-white mb-2 text-4xl relative font-doto">
            Grégory Poupaux
          </h1>
          <h2 className="text-white text-xl relative ">
            Développeur Front-End
          </h2>
          <span className="text-lg mb-7 text-white relative ">
            React, Redux, TypeScript, TailWind, NextJs
          </span>

          {/* changer le contenu de la <span>TON CONTENU</span> pour changer le texte */}

          <button
            /* changer l'url pour changer la cible du lien */
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/grégory-poupaux-270622328",
                "_blank"
              )
            }
            className="hover-button w-[85%] sm:w-[70%] md:w-[50%] lg:w-1/3 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-25" />
            </span>
            <div
              className="relative flex h-12 justify-between space-x-2 items-center z-10 rounded-full bg-stone-950/50 hover:bg-slate-900/60
             py-1 px-8 ring-1 ring-white/10 "
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="\img\linkedin-logo-linkedin-icon-transparent-free-png.webp" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-lg">LinkedIn</span>
              <svg
                fill="none"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                xmlns="https://www.linkedin.com/in/grégory-poupaux-270622328"
                className="transition-transform duration-300 group-hover:translate-x-5"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <button
            /* changer l'url pour changer la cible du lien */
            onClick={() =>
              window.open(
                "https://misterpoy.github.io/GregDev-PortFolio/",
                "_blank"
              )
            }
            className="hover-button w-[85%] sm:w-[70%] md:w-[50%] lg:w-1/3 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-25" />
            </span>
            <div
              className="relative flex h-12 justify-between space-x-2 items-center z-10 rounded-full bg-stone-950/50 hover:bg-slate-900/60
             py-1 px-8 ring-1 ring-white/10 "
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="\img\MOI3.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-lg">Port-Folio</span>
              <svg
                fill="none"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-5"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>

          <button
            /* changer l'url pour changer la cible du lien */
            onClick={() =>
              window.open("https://github.com/MisterPoy", "_blank")
            }
            className="hover-button w-[85%] sm:w-[70%] md:w-[50%] lg:w-1/3 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-25" />
            </span>
            <div
              className="relative flex h-12 justify-between space-x-2 items-center z-10 rounded-full bg-stone-950/50 hover:bg-slate-900/60
             py-1 px-8 ring-1 ring-white/10 "
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="\img\pngwing.com.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-lg">Github</span>
              <svg
                fill="none"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                xmlns="https://github.com/MisterPoy"
                className="transition-transform duration-300 group-hover:translate-x-5"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <button
            /* changer l'url pour changer la cible du lien */
            onClick={() =>
              window.open("mailto:gregory.poupaux@hotmail.fr", "_blank")
            }
            className="hover-button w-[85%] sm:w-[70%] md:w-[50%] lg:w-1/3 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-25" />
            </span>
            <div
              className="relative flex h-12 justify-between space-x-2 items-center z-10 rounded-full bg-stone-950/50 hover:bg-slate-900/60
             py-1 px-8 ring-1 ring-white/10 "
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="\img\pngegg.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-lg">Écrivez moi @</span>
              <svg
                fill="none"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-5"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>

          {/* inserer ici un nouveau "bouton" en copiant et collant*/}

          <div className="flex gap-8 mt-6">
            {/* changer les url pour changer les icones en bas, duplication possible ils resteraont centrer avec le 
            même espace entre eux */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
