import React from "react";
import Avatar from "react-avatar";

function InfoUser({ username }: { username: string }) {
  return (
    <>
      <div className="flex flex-row justify-between p-10">
        <div className="flex flex-row gap-3">
          <div className="grid place-content-center">
            <Avatar src={""} round={true} />
          </div>
          <div className="grid place-content-center">
            <div className="flex flex-col">
              <h2 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-6xl">
                {username}
              </h2>
              <div className="flex flex-row">
                <h5 className="font-thin justify-start">200k Seguidores</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="grid place-content-center">
          <div>
            <button
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 me-2 -ms-1"
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <linearGradient
                  id="a"
                  gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                  gradientUnits="userSpaceOnUse"
                  x2="1"
                >
                  <stop offset="0" stop-color="#ff1b2d" />
                  <stop offset=".3" stop-color="#ff1b2d" />
                  <stop offset=".614" stop-color="#ff1b2d" />
                  <stop offset="1" stop-color="#a70014" />
                </linearGradient>
                <linearGradient
                  id="b"
                  gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                  gradientUnits="userSpaceOnUse"
                  x2="1"
                >
                  <rect
                    width="80"
                    height="80"
                    fill="white"
                    transform="translate(0.519043 0.132812)"
                  />{" "}
                  <stop offset="0" stop-color="#9c0000" />
                  <stop offset=".7" stop-color="#ff4b4b" />
                  <stop offset="1" stop-color="#ff4b4b" />
                </linearGradient>
                <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                  <path
                    d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                    fill="url(#a)"
                  />
                  <path
                    d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                    fill="url(#b)"
                  />
                </g>
              </svg>
              Seguir
            </button>

            <button
              type="button"
              className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2 -ms-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="bitcoin"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"
                ></path>
              </svg>
              Subscribirse
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoUser;
