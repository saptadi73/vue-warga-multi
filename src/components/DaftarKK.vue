<template>
    <div>
        <div
            class="grid w-[90vw] p-5 md:grid-cols-2 md:gap-4 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <!-- start Card  -->
            <div id="card1" class="">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        Daftar Kartu Keluarga
                    </h3>
                <div class="p-4 md:p-5">
                    <div>
                        <div class="grid-cols-5">
                            <div class="sm:flex rounded-lg shadow-sm">
                                <span
                                    class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">Nomor
                                    KK</span>
                                <input type="text"
                                    class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
                                    placeholder="Silahkan Masukan Nomor Kartu Keluarga"/>
                            </div>
                        </div>
                        <div>
                            <div class="sm:flex rounded-lg shadow-sm mt-4">
                                <span
                                    class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">Nama
                                    Lengkap</span>
                                <input type="text"
                                    class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
                                    placeholder="Silahkan Masukan Nama Lengkap"/>
                            </div>
                            <div class="sm:flex rounded-lg shadow-sm mt-4">
                                <span
                                    class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">Nomor
                                    NIK</span>
                                <input type="text" placeholder="Silahkan Masukan Nomor NIK"
                                    class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                            </div>
                            <div class="mt-4">
                                <div class="relative">
                                    <select id="provinsi"
                                        class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                                        <option selected="">Jenis Kelamin</option>
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>
                                    </select>
                                    <label
                                        class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-400 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Silahkan
                                        Pilih Jenis Kelamin</label>
                                </div>
                                <div class="sm:flex rounded-lg shadow-sm mt-4">
                                    <span
                                        class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">Tempat
                                        Lahir</span>
                                    <input type="text"
                                        class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Silahkan Masukan Tempat Lahir" />
                                </div>
                                <div class="sm:flex rounded-lg shadow-sm mt-4">
                                    <span
                                        class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                                        Tanggal Lahir </span>
                                    <input type="date"
                                        class="py-3 px-4 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="mt-5 bg-purple-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-purple-200 hover:underline focus:underline focus:outline-none p-2 focus:text-purple-300 disabled:opacity-50 disabled:pointer-events-none"
                        href="#">
                        Simpan
                    </button>
                </div>
                <div
                    class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                    <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Last updated 5 mins ago
                    </p>
                </div>
            </div>
            <!--start Card2-->
            <div id="card2" class="mt-7">
                <div class="p-4 md:p-5">
                    <!-- <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        Pengisian No. Rumah Baru
                    </h3> -->
                    <div class="relative">
                        <select id="provinsi"
                            class="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                            <option selected="">Agama</option>
                            <option>Hindu</option>
                            <option>Islam</option>
                            <option>Katolik</option>
                            <option>Kristen Protestan</option>
                            <option>Budha</option>
                            <option>Konghucu</option>
                        </select>
                        <label
                            class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-400 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500">Silahkan
                            Pilih Agama</label>
                    </div>
                    <div class="sm:flex rounded-lg shadow-sm mt-4">
                        <span
                            class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                            Pendidikan</span>
                        <input type="text"
                            class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Silahkan Masukan Pendidikan" />
                    </div>
                    <div class="mt-3">
                        <div class="flex rounded-lg shadow-sm">
                            <span
                                class="inline-flex px-4 items-center min-w-fit rounded-s-md boder border-e-0 border-gray-600 text-sm text-gray-500 bg-slate-200">Nomor.Rumah</span>
                            <input type="number"
                                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none" />
                        </div>
                    </div>
                    <button
                        class="mt-5 bg-purple-500 text-base font-semibold rounded-lg text-white decoration-2 hover:text-purple-200 hover:underline focus:underline focus:outline-none p-2 focus:text-purple-300 disabled:opacity-50 disabled:pointer-events-none"
                        href="#">
                        Simpan
                    </button>
                </div>
                <div
                    class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                    <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Last updated 5 mins ago
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div
                class="flex p-5 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div class="p-4 md:p-5">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        Card title
                    </h3>
                    <div>
                        <div id="hs-datatable-filter" class="flex flex-col --prevent-on-load-init" data-hs-datatable='{
                  "pagingOptions": {
                    "pageBtnClasses": "min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                  },
                  "selecting": true,
                  "rowSelectingOptions": {
                    "selectAllSelector": "#hs-datatable-select-all-rows",
                    "individualSelector": ".hs-datatable-select-row"
                  },
                  "language": {
                    "zeroRecords": "<div class=\"p-5 h-full flex flex-col justify-center items-center text-center\"><svg class=\"w-48 mx-auto mb-4\" width=\"178\" height=\"90\" viewBox=\"0 0 178 90\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"27\" y=\"50.5\" width=\"124\" height=\"39\" rx=\"7.5\" fill=\"currentColor\" class=\"fill-white dark:fill-neutral-800\"/><rect x=\"27\" y=\"50.5\" width=\"124\" height=\"39\" rx=\"7.5\" stroke=\"currentColor\" class=\"stroke-gray-50 dark:stroke-neutral-700/10\"/><rect x=\"34.5\" y=\"58\" width=\"24\" height=\"24\" rx=\"4\" fill=\"currentColor\" class=\"fill-gray-50 dark:fill-neutral-700/30\"/><rect x=\"66.5\" y=\"61\" width=\"60\" height=\"6\" rx=\"3\" fill=\"currentColor\" class=\"fill-gray-50 dark:fill-neutral-700/30\"/><rect x=\"66.5\" y=\"73\" width=\"77\" height=\"6\" rx=\"3\" fill=\"currentColor\" class=\"fill-gray-50 dark:fill-neutral-700/30\"/><rect x=\"19.5\" y=\"28.5\" width=\"139\" height=\"39\" rx=\"7.5\" fill=\"currentColor\" class=\"fill-white dark:fill-neutral-800\"/><rect x=\"19.5\" y=\"28.5\" width=\"139\" height=\"39\" rx=\"7.5\" stroke=\"currentColor\" class=\"stroke-gray-100 dark:stroke-neutral-700/30\"/><rect x=\"27\" y=\"36\" width=\"24\" height=\"24\" rx=\"4\" fill=\"currentColor\" class=\"fill-gray-100 dark:fill-neutral-700/70\"/><rect x=\"59\" y=\"39\" width=\"60\" height=\"6\" rx=\"3\" fill=\"currentColor\" class=\"fill-gray-100 dark:fill-neutral-700/70\"/><rect x=\"59\" y=\"51\" width=\"92\" height=\"6\" rx=\"3\" fill=\"currentColor\" class=\"fill-gray-100 dark:fill-neutral-700/70\"/><g filter=\"url(#@@id)\"><rect x=\"12\" y=\"6\" width=\"154\" height=\"40\" rx=\"8\" fill=\"currentColor\" class=\"fill-white dark:fill-neutral-800\" shape-rendering=\"crispEdges\"/><rect x=\"12.5\" y=\"6.5\" width=\"153\" height=\"39\" rx=\"7.5\" stroke=\"currentColor\" class=\"stroke-gray-100 dark:stroke-neutral-700/60\" shape-rendering=\"crispEdges\"/><rect x=\"20\" y=\"14\" width=\"24\" height=\"24\" rx=\"4\" fill=\"currentColor\" class=\"fill-gray-200 dark:fill-neutral-700 \"/><rect x=\"52\" y=\"17\" width=\"60\" height=\"6\" rx=\"3\" fill=\"currentColor\" class=\"fill-gray-200 dark:fill-neutral-700\"/><rect x=\"52\" y=\"29\" width=\"106\" height=\"6\" rx=\"3\" fill=\"currentColor\" class=\"fill-gray-200 dark:fill-neutral-700\"/></g><defs><filter id=\"@@id\" x=\"0\" y=\"0\" width=\"178\" height=\"64\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/><feOffset dy=\"6\"/><feGaussianBlur stdDeviation=\"6\"/><feComposite in2=\"hardAlpha\" operator=\"out\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0\"/><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1187_14810\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1187_14810\" result=\"shape\"/></filter></defs></svg><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-gray-600 dark:text-neutral-400\">No data</p></div></div>"
                  }
                }'>
                            <div class="flex items-center space-x-2 mb-4">
                                <div class="flex-0">
                                    <div class="relative max-w-xs">
                                        <label for="hs-table-filter-search" class="sr-only">Search</label>
                                        <input type="text" name="hs-table-filter-search" id="hs-table-filter-search"
                                            class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            placeholder="Search for items" data-hs-datatable-search="" />
                                        <div
                                            class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                            <svg class="size-4 text-gray-400 dark:text-neutral-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <path d="m21 21-4.3-4.3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex-1 flex items-center justify-end space-x-2">
                                    <!-- Select -->
                                    <select class="hidden" data-hs-select='{
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span data-title></span></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-3 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                        "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                        "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                        "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                      }' data-hs-datatable-page-entities="">
                                        <option value="10" selected="">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                    </select>
                                    <!-- End Select -->

                                    <div
                                        class="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20">
                                        <button id="hs-dropdown-filter" type="button"
                                            class="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                            Filter
                                            <svg class="hs-dropdown-open:rotate-180 size-2.5" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                                </path>
                                            </svg>
                                        </button>

                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
                                            aria-labelledby="hs-dropdown-filter">
                                            <div class="max-w-sm flex gap-x-2">
                                                <input id="hs-input-number-min-age" type="number"
                                                    class="py-1 px-2.5 block w-20 border-gray-200 rounded-md text-[13px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    placeholder="Min age" />
                                                <input id="hs-input-number-max-age" type="number"
                                                    class="py-1 px-2.5 block w-20 border-gray-200 rounded-md text-[13px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    placeholder="Max age" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="overflow-x-auto min-h-[521px]">
                                <div class="min-w-full inline-block align-middle">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <thead class="border-y border-gray-200 dark:border-neutral-700">
                                                <tr>
                                                    <th scope="col" class="py-1 ps-3 --exclude-from-ordering">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-datatable-select-all-rows" type="checkbox"
                                                                class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                            <label class="sr-only">Checkbox</label>
                                                        </div>
                                                    </th>

                                                    <th scope="col"
                                                        class="py-1 group text-start font-normal focus:outline-none">
                                                        <div
                                                            class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700">
                                                            Name
                                                            <svg class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                                                                    d="m7 15 5 5 5-5"></path>
                                                                <path
                                                                    class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                                                                    d="m7 9 5-5 5 5"></path>
                                                            </svg>
                                                        </div>
                                                    </th>

                                                    <th scope="col"
                                                        class="py-1 group text-start font-normal focus:outline-none">
                                                        <div
                                                            class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700">
                                                            Nomor Rumah
                                                            <svg class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                                                                    d="m7 15 5 5 5-5"></path>
                                                                <path
                                                                    class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                                                                    d="m7 9 5-5 5 5"></path>
                                                            </svg>
                                                        </div>
                                                    </th>

                                                    <th scope="col"
                                                        class="py-1 group text-start font-normal focus:outline-none">
                                                        <div
                                                            class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700">
                                                            Age
                                                            <svg class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                                                                    d="m7 15 5 5 5-5"></path>
                                                                <path
                                                                    class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                                                                    d="m7 9 5-5 5 5"></path>
                                                            </svg>
                                                        </div>
                                                    </th>

                                                    <th scope="col"
                                                        class="py-1 group text-start font-normal focus:outline-none">
                                                        <div
                                                            class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700">
                                                            Address
                                                            <svg class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path
                                                                    class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                                                                    d="m7 15 5 5 5-5"></path>
                                                                <path
                                                                    class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                                                                    d="m7 9 5-5 5 5"></path>
                                                            </svg>
                                                        </div>
                                                    </th>

                                                    <th scope="col"
                                                        class="py-2 px-3 text-end font-normal text-sm text-gray-500 --exclude-from-ordering dark:text-neutral-500">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-1" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-1"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Christina Bersh
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        45
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        4222 River Rd, Columbus
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-2" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-2"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        David Harrison
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        2952 S Peoria Ave, Tulsa
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-3" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-3"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Anne Richard
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        31
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        255 Dock Ln, New Tazewell
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-4" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-4"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Samia Kartoon
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        45
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        4970 Park Ave W, Ohio
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-5" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-5"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        David Harrison
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        4222 River Rd, Columbus
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-6" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-6"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Brian Halligan
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        31
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        2952 S Peoria Ave, Tulsa
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-7" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-7"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Andy Clerk
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        45
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        1818 H St NW, Washington
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-8" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-8"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Bart Simpson
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        3 Grace Dr, New Mexico
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-9" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-9"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Camila Welters
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        45
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        4531 W Saile Dr, North Dakota
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-10" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-10"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Oliver Schevich
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        2126 N Eagle, Meridian, Illinois
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-11" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-11"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Inna Ivy
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        31
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        3817 Beryl Rd, Nebraska
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-12" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-12"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Jessica Williams
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        4807 3rd Ave, New Hampshire
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            <trashicon className="w-4 h-4" />
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-13" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-13"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        James Collins
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        31
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        Melbourne No. 1 Lake Park
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-14" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-14"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Costa Quinn
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        New York No. 1 Lake Park
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-15" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-15"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Jim Green
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        LA No. 1 Lake Park
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-16" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-16"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Joe Black
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        31
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        Sidney No. 1 Lake Park
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-17" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-17"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Isabella Cherry
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        4222 River Rd, Columbus
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-18" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-18"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Alex Tacker
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        31
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        2952 S Peoria Ave, Tulsa
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-19" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-19"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Endy Ruiz
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        45
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        1818 H St NW, Washington
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="py-3 ps-3">
                                                        <div class="flex items-center h-5">
                                                            <input id="hs-table-filter-checkbox-20" type="checkbox"
                                                                class="hs-datatable-select-row border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                data-hs-datatable-row-selecting-individual="" />
                                                            <label for="hs-table-filter-checkbox-20"
                                                                class="sr-only">Checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                        Jack Li
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        27
                                                    </td>
                                                    <td
                                                        class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        3 Grace Dr, New Mexico
                                                    </td>
                                                    <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button"
                                                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center mt-4">
                                <div class="flex items-center space-x-1" data-hs-datatable-paging="">
                                    <button type="button"
                                        class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        data-hs-datatable-paging-prev="">
                                        <span aria-hidden="true">«</span>
                                        <span class="sr-only">Previous</span>
                                    </button>
                                    <div class="flex items-center space-x-1 [&>.active]:bg-gray-100 dark:[&>.active]:bg-neutral-700"
                                        data-hs-datatable-paging-pages=""></div>
                                    <button type="button"
                                        class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        data-hs-datatable-paging-next="">
                                        <span class="sr-only">Next</span>
                                        <span aria-hidden="true">»</span>
                                    </button>
                                </div>
                                <div class="text-xs text-gray-500 ms-auto dark:text-neutral-400"
                                    data-hs-datatable-info="">
                                    Showing
                                    <span data-hs-datatable-info-from=""></span>
                                    to
                                    <span data-hs-datatable-info-to=""></span>
                                    of
                                    <span data-hs-datatable-info-length=""></span>
                                    users
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                        href="#">
                        Card link
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </a>
                </div>
                <div
                    class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                    <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Last updated 5 mins ago
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="css">
.dt-layout-row:has(.dt-search),
.dt-layout-row:has(.dt-length),
.dt-layout-row:has(.dt-paging) {
    display: none !important;
}
</style>