<template>
    <div class="w-[90vw]">
      <div
        class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Isi Data Iuran Warga
          </h3>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Nominal</span
              >
              <input
                id="nominal"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-3">
            <div class="flex rounded-lg shadow-sm">
              <span
                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200"
                >Tanggal</span
              >
              <input
                id="tanggal"
                type="date"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="mt-10">
            <div class="relative">
              <select
                id="jenis_iuran"
                class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
              >
                <option selected="">Pilih Jenis Iuran</option>
                <option>Wajib</option>
                <option>Peringatan 17-an</option>
                <option>PHBI</option>
              </select>
              <label
                class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                >Jenis Iuran</label
              >
            </div>
          </div>
          <a
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
              href="/dashboard"
            >
              Dashboard
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </div>
    <div>
      <div
        class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <div>
            <div
              class="flex flex-col"
              data-hs-datatable='{
              "pageLength": 10,
              "pagingOptions": {
                "pageBtnClasses": "min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
              }
            }'
            >
              <div class="overflow-x-auto min-h-[520px]">
                <div class="min-w-full inline-block align-middle">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead
                        class="border-b border-gray-200 dark:border-neutral-700"
                      >
                        <tr>
                          <th
                            scope="col"
                            class="py-1 group text-start font-normal focus:outline-none"
                          >
                            <div
                              class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700"
                            >
                              Name
                              <svg
                                class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                                  d="m7 15 5 5 5-5"
                                ></path>
                                <path
                                  class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                                  d="m7 9 5-5 5 5"
                                ></path>
                              </svg>
                            </div>
                          </th>
  
                          <th
                            scope="col"
                            class="py-1 group text-start font-normal focus:outline-none"
                          >
                            <div
                              class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700"
                            >
                              Age
                              <svg
                                class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                                  d="m7 15 5 5 5-5"
                                ></path>
                                <path
                                  class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                                  d="m7 9 5-5 5 5"
                                ></path>
                              </svg>
                            </div>
                          </th>
  
                          <th
                            scope="col"
                            class="py-1 group text-start font-normal focus:outline-none"
                          >
                            <div
                              class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700"
                            >
                              Address
                              <svg
                                class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                                  d="m7 15 5 5 5-5"
                                ></path>
                                <path
                                  class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                                  d="m7 9 5-5 5 5"
                                ></path>
                              </svg>
                            </div>
                          </th>
  
                          <th
                            scope="col"
                            class="py-2 px-3 text-end font-normal text-sm text-gray-500 --exclude-from-ordering dark:text-neutral-500"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
  
                      <tbody
                        class="divide-y divide-gray-200 dark:divide-neutral-700"
                      >
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Christina Bersh
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            45
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            4222 River Rd, Columbus
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            David Harrison
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            2952 S Peoria Ave, Tulsa
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Anne Richard
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            31
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            255 Dock Ln, New Tazewell
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Samia Kartoon
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            45
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            4970 Park Ave W, Ohio
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            David Harrison
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            4222 River Rd, Columbus
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Brian Halligan
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            31
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            2952 S Peoria Ave, Tulsa
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Andy Clerk
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            45
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            1818 H St NW, Washington
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Bart Simpson
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            3 Grace Dr, New Mexico
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Camila Welters
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            45
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            4531 W Saile Dr, North Dakota
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Oliver Schevich
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            2126 N Eagle, Meridian, Illinois
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Inna Ivy
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            31
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            3817 Beryl Rd, Nebraska
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Jessica Williams
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            4807 3rd Ave, New Hampshire
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            James Collins
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            31
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            Melbourne No. 1 Lake Park
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Costa Quinn
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            New York No. 1 Lake Park
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Jim Green
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            LA No. 1 Lake Park
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Joe Black
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            31
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            Sidney No. 1 Lake Park
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Isabella Cherry
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            4222 River Rd, Columbus
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Alex Tacker
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            31
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            2952 S Peoria Ave, Tulsa
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Endy Ruiz
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            45
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            1818 H St NW, Washington
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                          >
                            Jack Li
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            27
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                          >
                            3 Grace Dr, New Mexico
                          </td>
                          <td
                            class="p-3 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
  
              <div
                class="flex items-center space-x-1 mt-4"
                data-hs-datatable-paging=""
              >
                <button
                  type="button"
                  class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-datatable-paging-prev=""
                >
                  <span aria-hidden="true">«</span>
                  <span class="sr-only">Previous</span>
                </button>
                <div
                  class="flex items-center space-x-1 [&>.active]:bg-gray-100 dark:[&>.active]:bg-neutral-700"
                  data-hs-datatable-paging-pages=""
                ></div>
                <button
                  type="button"
                  class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-datatable-paging-next=""
                >
                  <span class="sr-only">Next</span>
                  <span aria-hidden="true">»</span>
                </button>
              </div>
            </div>
          </div>
          <a
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
              href="/dashboard"
            >
              Dashboard
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
        </div>
        <div
          class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700"
        >
          <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped></style>
  