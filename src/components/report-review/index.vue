<template>
    <div class="report-container">
        <div class="container-div">
            <div class="header" style="height: 25%; width: 100%;"
                :style="{ background: `url(data:image/png;base64,${bgDataurl}) no-repeat center center / cover` }">
                <div style="text-shadow: 3px 3px 4px rgba(204, 69, 59, 0.2); margin: auto 0;">
                    报告查询
                </div>
            </div>
            <div class="content">

                <div class="top-menu">
                    <div class="menu-item">
                        <div>
                            <svg t="1724395018092" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1211" width="auto" height="75%"><path d="M320.408 96.312c-18.572 2.992-31.16 21.636-28.3 41.468 1.572 10.844 3.076 21.696 4.508 32.552 2.632 19.856 19.816 34.356 38.496 32.188l342.944-40.7c18.664-2.264 36.208 14.712 38.624 37.748a3131.472 3131.472 0 0 1 11.096 522.096c-1.396 23.024 9.1 53.3 23.568 67.576a3136.188 3136.188 0 0 1 67.124 68.032c14.132 14.848 27.816 7.596 30.172-16.404a3262.536 3262.536 0 0 0-18.464-780.908c-3.456-23.904-21.776-40.984-40.348-37.996L320.408 96.312z" fill="#E0D9D9" p-id="1212"></path><path d="M633.696 232.948c-151.16 14.656-302.316 29.316-453.48 43.968-17.084 1.7-29.536 18.432-27.972 37.208a2559.504 2559.504 0 0 1-19.396 592.124c-2.82 18.672 7.948 28.408 24.188 21.456a2912.492 2912.492 0 0 0 220.36-106.332c15.904-8.516 40.236-6.148 54.008 5.732a3021.056 3021.056 0 0 1 183.744 172.44c13 13.316 26.6 6.008 30.004-16.532a3077.736 3077.736 0 0 0 23.32-711.964c-1.884-22.664-17.692-39.8-34.776-38.1z" fill="#00CCC6" p-id="1213"></path><path d="M540.572 505.296c-0.08-10.84-7.908-19.592-17.304-19.448l-56.412 0.796c-9.404 0.12-17.208-8.36-17.428-18.844a2848.588 2848.588 0 0 0-2-62.956c-0.452-10.5-8.564-18.7-17.956-18.22-10.248 0.508-20.492 1.012-30.736 1.524-9.392 0.476-16.656 9.244-16.212 19.484 0.88 20.5 1.536 41.004 1.96 61.52 0.216 10.268-7.372 18.768-16.772 18.888l-56.412 0.796c-9.404 0.144-16.972 8.372-16.904 18.28 0.08 10.832 0.092 21.652 0.044 32.48-0.044 9.912 7.548 18.116 16.952 18.236l56.412 0.644c9.4 0.088 17.008 8.576 16.824 18.844a2794.02 2794.02 0 0 1-1.796 61.528c-0.412 10.236 6.872 18.984 16.264 19.432l30.74 1.44c9.392 0.456 17.488-7.764 17.908-18.268a2849.96 2849.96 0 0 0 1.836-62.96c0.188-10.48 7.972-18.984 17.38-18.888 18.804 0.22 37.608 0.428 56.42 0.64 9.392 0.116 17.204-8.652 17.248-19.492 0.044-11.828 0.032-23.644-0.056-35.456z" fill="#F8FFFF" p-id="1214"></path><path d="M547.928 481h-90.468V392.228H369.832v88.768H287.328v89.948h82.5v88.772h87.632v-88.772h90.468V481z" fill="#FFFFFF" p-id="1215"></path></svg>
                            <p>预约体检</p>
                        </div>
                    </div>
                    <div class="menu-item">
                        <div>
                            <svg t="1724395374521" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1586" width="auto" height="75%"><path d="M512.796029 970.586145c-44.734264 0-86.786326-17.419924-118.419681-49.050083l-289.760894-289.760894c-65.296744-65.296744-65.296744-171.542618 0-236.836165L394.376348 105.178109c31.630158-31.633355 73.685417-49.050083 118.419681-49.050083s86.789523 17.419924 118.419681 49.050083l289.760894 289.760894c65.296744 65.296744 65.296744 171.542618 0 236.836165l-289.760894 289.760894c-31.630158 31.626961-73.685417 49.050083-118.419681 49.050083z m0-869.704674c-32.777846 0-63.592794 12.765234-86.770341 35.942781l-289.760895 289.760894c-47.84485 47.84485-47.84485 125.695832 0 173.543879l289.760895 289.760894c23.177547 23.177547 53.992495 35.94278 86.770341 35.942781s63.595991-12.765234 86.773538-35.942781l289.760894-289.760894c47.84485-47.84485 47.84485-125.695832 0-173.543879l-289.760894-289.760894c-23.177547-23.177547-53.995692-35.94278-86.773538-35.942781z" fill="#009FE8" p-id="1587"></path><path d="M590.752509 778.231688h-151.654685a22.378321 22.378321 0 0 1-22.378321-22.378321v-137.898411H278.821092a22.378321 22.378321 0 0 1-22.378321-22.378321V443.921951a22.378321 22.378321 0 0 1 22.378321-22.378321h137.901608V283.645219a22.378321 22.378321 0 0 1 22.378321-22.378321h151.654684a22.378321 22.378321 0 0 1 22.378321 22.378321v137.898411h137.901608a22.378321 22.378321 0 0 1 22.378321 22.378321v151.654684a22.378321 22.378321 0 0 1-22.378321 22.378321H613.134026v137.898411a22.381518 22.381518 0 0 1-22.381517 22.378321z m-129.273167-44.756642h106.898042v-137.898411a22.378321 22.378321 0 0 1 22.378321-22.378321h137.901608V466.300272H590.755705a22.378321 22.378321 0 0 1-22.378321-22.378321V306.02354h-106.898042v137.898411a22.378321 22.378321 0 0 1-22.378321 22.378321H301.199413v106.898042h137.901608a22.378321 22.378321 0 0 1 22.378321 22.378321v137.898411z" fill="#009FE8" p-id="1588"></path></svg>
                            <p>团检预约</p>
                        </div>
                    </div>
                </div>
                <div class="center-menu">
                    <div class="menu-title">
                        <p class="p">常用功能</p>
                    </div>
                    <div class="menu">
                        <div class="menu-item">
                            <div>
                                <svg t="1724398923047" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1682" width="auto" height="75%"><path d="M822.736 464.932c36.876 88.668 68.5 178.156 94.86 267.984a2068.228 2068.228 0 0 0-468.616-35.04L429.064 190.52a2575.792 2575.792 0 0 1 583.68 43.644c-68.388 74.452-131.768 151.54-190.008 230.768z" fill="#9FC95F" p-id="1683"></path><path d="M91.776 125.528a2674.608 2674.608 0 0 1 522.012-34.844l-15.28 488.088a2187.348 2187.348 0 0 0-426.716 28.484L91.776 125.528z" fill="#ABD966" p-id="1684"></path><path d="M448.972 697.884a1956.74 1956.74 0 0 1 149.536-119.108 2184.892 2184.892 0 0 0-154.184 0.616l4.648 118.492z" opacity=".2" p-id="1685"></path><path d="M27.364 128.96a2691.84 2691.84 0 0 1 117.024-19.652l72.996 502.472a2171.324 2171.324 0 0 0-94.876 15.928L27.364 128.96z" fill="#FFFFFF" opacity=".79" p-id="1686"></path><path d="M235.096 988.384c-21.58 3.58-43.224-14.872-48.42-41.764L27.612 104.68c-5.192-26.88 17.516-53.856 50.836-59.38 33.324-5.544 63.476 12.648 67.252 39.764l121.68 848.144c3.784 27.14-10.704 51.58-32.284 55.176z" fill="#3F3F3F" p-id="1687"></path><path d="M147.868 116.82a2673.98 2673.98 0 0 1 70.292-9.2l56.944 485a2145.28 2145.28 0 0 0-57.46 7.524L147.868 116.82z" opacity=".05" p-id="1688"></path></svg>
                                <p>登录注册</p>
                            </div>
                        </div>
                        <div class="menu-item" @click.stop="openSearchReportModal">
                            <div>
                                <svg t="1724398868861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1526" width="auto" height="75%"><path d="M855.836939 179.306852c-123.218365-14.095583-246.43673-28.182261-369.646191-42.268939 2.132591-18.672417 4.429913-37.33593 6.883061-55.981635 2.484313-18.899478-8.704-36.124939-25.226018-38.511304L197.952557 4.140522c-16.517565-2.386365-32.336139 12.577391-35.078679 33.440278a3639.13127 3639.13127 0 0 0 0 950.111722c2.742539 20.871791 18.570017 35.831096 35.078679 33.449182l668.151095-95.085078c16.517565-2.381913 27.977461-17.750817 25.791444-34.348522a2904.224278 2904.224278 0 0 1-9.340661-678.800695c1.731896-16.642226-10.142052-31.668313-26.717496-33.600557z" fill="#F7DDBD" p-id="1527"></path><path d="M595.607374 415.877565l-375.487444-11.442087c0.850365-27.897322 2.030191-55.785739 3.530574-83.6608l375.117913 20.288557a3254.138435 3254.138435 0 0 0-3.161043 74.81433zM501.354852 566.530226l-282.401391 4.652522a3544.482504 3544.482504 0 0 1-0.391791-83.705322l282.432556 1.999026c-0.182539 25.689043-0.06233 51.369183 0.360626 77.053774zM599.676661 700.113252l-375.011061 22.167374c-1.647304-27.870609-2.9696-55.750122-3.957983-83.642991l375.429566-13.325357c0.890435 24.949983 2.061357 49.877704 3.539478 74.800974z" opacity=".3" p-id="1528"></path></svg>
                                <p>报告查询</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-menu">
                    <div class="menu-title">
                        <p class="p">便捷入口</p>
                    </div>
                    <div class="menu">
                        <div class="menu-item">
                            <div>
                                <svg t="1724399013660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1996" width="auto" height="75%"><path d="M986.968 466.62c-74.516-134.68-174.804-263.332-299.504-376.992-28.492-25.868-55.296-20.936-57.788 9.812l-14.76 167.852c-357.96-15.704-488.12 188.948-519.26 346.724-32.972 166.112 33.072 285.36 25.18 291.28-19.72-172.04 82.816-286.62 197.304-340.788 114.708-58.036 241.364-30.316 274.996-24.176l-18.012 204.82c-2.496 30.772 11.944 39.528 33.684 20.456 96.38-83.88 214.488-178.824 350.4-225.212 30.772-10.384 44.696-42.976 27.76-73.776z" fill="#9ACC58" p-id="1997"></path></svg>
                                <p>体检导引</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div>
                                <svg t="1724399049329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2151" width="auto" height="75%"><path d="M920.5972 843.25c51.412-235.288 70.516-470.18 57.308-704.68-2.336-39.832-41.176-78.388-84.928-84.5-253.98-34.14-507.964-41.164-761.948-21.08-43.74 3.6-82.896 42.32-85.552 84.848-15 249.736 4.308 499.072 57.928 748.02 272.4 27.628 544.8 20.092 817.192-22.608z" fill="#EDEDED" p-id="2152"></path><path d="M892.9772 54.07c-253.98-34.14-507.964-41.164-761.948-21.08-43.74 3.6-82.896 42.32-85.552 84.848-1.868 31.052-3.2 62.1-4.004 93.148a6284.228 6284.228 0 0 1 939.864 15.08 2559.7 2559.7 0 0 0-3.428-87.5c-2.34-39.828-41.176-78.384-84.932-84.496z" fill="#6B7F8F" p-id="2153"></path><path d="M192.2052 351.47c81.416-1.228 162.8-1.768 244.136-1.628 0.472 125.308 2.3 250.384 5.488 375.244-75.572 0.312-151.172-0.868-226.796-3.544a4223.748 4223.748 0 0 1-22.828-370.072z" fill="#F78383" p-id="2154"></path><path d="M554.2652 350.53c93.504 0.92 186.952 2.752 280.348 5.488a4100.768 4100.768 0 0 1-5.308 141.512c-91.868 0.78-183.784 1.304-275.752 1.568 0.324-49.492 0.564-99.012 0.712-148.568z" fill="#E0AC48" p-id="2155"></path><path d="M552.9612 575.322c90.62-0.868 181.192-2.58 271.712-5.14a4136.024 4136.024 0 0 1-12.72 141.432 5742.292 5742.292 0 0 1-260.552 11.98c0.612-49.392 1.132-98.816 1.56-148.272z" fill="#00CCC6" p-id="2156"></path></svg>
                                <p>微网站</p>
                            </div>
                        </div>
                    </div>
                    <div class="menu">
                        <div class="menu-item">
                            <div>
                                <svg t="1724398971738" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1840" width="auto" height="75%"><path d="M506.304 400.688c60.324-0.176 107.228 46.72 107.048 107.044 0.176 60.324-46.72 107.224-107.048 107.048-60.328 0.176-107.224-46.72-107.048-107.048-0.176-60.328 46.72-107.22 107.048-107.044z" fill="#A58376" p-id="1841"></path><path d="M926.404 560.936c0.004 0-0.54-13.404-0.8-29.8a1404.592 1404.592 0 0 1 0-46.816c0.264-16.448-10.204-29.352-23.688-28.708-12.3 0.528-24.6 1.032-36.896 1.508-13.464 0.476-26.28-11.332-28.212-26.092a2044.768 2044.768 0 0 1-7.568-42.528c-3.36-13.948 4.328-32.308 17.08-41.34a2627.228 2627.228 0 0 0 35.172-25.344c12.944-9.488 19.6-28.02 14.704-40.472-4.708-11.86-9.344-23.548-13.944-35.08-4.776-12.124-20.112-13.504-33.852-3.732a3051.772 3051.772 0 0 1-36.788 25.812c-13.356 9.24-30.52 8.4-38.464-1.32a2056.948 2056.948 0 0 0-25.96-26.508c-9.56-8.132-10.244-25.456-0.988-38.804a3025.6 3025.6 0 0 1 25.308-36.072c9.772-13.744 8.392-29.076-3.744-33.856-11.528-4.596-23.208-9.228-35.06-13.936-12.464-4.896-31 1.764-40.476 14.704a2636.584 2636.584 0 0 0-23.936 33.196c-9.072 12.76-27.384 20.312-41.256 16.784a2159.96 2159.96 0 0 1-43.94-8.368c-14.744-2.088-26.544-15.04-26.056-28.504 0.44-11.184 0.896-22.36 1.376-33.544 0.64-13.48-12.256-23.96-28.712-23.684a1428 1428 0 0 1-46.816 0c-16.452-0.268-29.352 10.2-28.708 23.684 0.46 10.748 0.904 21.496 1.332 32.24 0.48 13.46-11.416 26.096-26.28 27.796a2024.984 2024.984 0 0 1-45.88 7.404c-14.048 3.16-32.564-4.74-41.68-17.536a2632.748 2632.748 0 0 0-21.28-29.468c-9.488-12.94-28.02-19.604-40.48-14.704-11.856 4.708-23.544 9.34-35.08 13.932-12.128 4.78-13.5 20.12-3.732 33.86a3051.712 3051.712 0 0 1 21.056 29.92c9.336 13.404 8.516 30.516-1.284 38.332a2007.52 2007.52 0 0 0-29.04 28.108c-8.108 9.52-25.464 10.116-38.88 0.76a2972.264 2972.264 0 0 1-28.732-20.236c-13.736-9.76-29.076-8.392-33.856 3.74-4.596 11.532-9.228 23.224-13.932 35.08-4.9 12.456 1.76 30.988 14.704 40.48a2612.804 2612.804 0 0 0 26.276 19.012c12.812 9.16 20.492 27.6 17.056 41.536a2102.136 2102.136 0 0 1-8.712 48.132c-1.96 14.844-14.812 26.724-28.276 26.236-8.92-0.36-17.852-0.728-26.776-1.112-13.48-0.64-23.952 12.26-23.684 28.716 0.26 15.608 0.26 31.212 0 46.82-0.268 16.448 10.208 29.356 23.684 28.712 8.828-0.38 17.652-0.748 26.48-1.1 13.46-0.492 26.24 11.404 28.104 26.28 3.052 16.332 5.864 32.52 8.476 48.584 3.344 13.976-4.412 32.456-17.236 41.636-8.4 6-16.864 12.128-25.392 18.38-12.94 9.492-19.6 28.016-14.708 40.48 4.708 11.844 9.34 23.532 13.932 35.064 4.78 12.136 20.12 13.492 33.86 3.74a3064.62 3064.62 0 0 1 27.32-19.24c13.428-9.38 30.736-8.76 38.772 0.824a2015.352 2015.352 0 0 0 29.4 28.812c9.752 7.856 10.52 25.012 1.152 38.44a3115.22 3115.22 0 0 1-19.756 28.052c-9.76 13.748-8.396 29.08 3.736 33.86 11.536 4.592 23.22 9.232 35.076 13.94 12.456 4.896 30.988-1.764 40.476-14.712 6.76-9.216 13.364-18.36 19.84-27.428 9.148-12.812 27.676-20.696 41.728-17.536 15.6 2.34 31.32 4.88 47.152 7.644 14.892 1.712 26.8 14.36 26.32 27.816-0.4 9.984-0.812 19.964-1.24 29.944-0.64 13.484 12.26 23.952 28.708 23.688 15.608-0.26 31.212-0.26 46.816 0 16.46 0.264 29.36-10.2 28.716-23.688-0.448-10.412-0.88-20.828-1.292-31.24-0.48-13.46 11.328-26.42 26.084-28.52a2134.828 2134.828 0 0 1 45.188-8.64c13.876-3.548 32.208 4 41.3 16.784a2679 2679 0 0 0 22.512 31.176c9.5 12.952 28.02 19.612 40.48 14.72 11.848-4.712 23.536-9.352 35.064-13.948 12.136-4.784 13.496-20.12 3.74-33.86a3073.24 3073.24 0 0 1-24.056-34.252c-9.28-13.372-8.64-30.728 0.872-38.896a2086.052 2086.052 0 0 0 26.32-27.192c7.876-9.788 24.988-10.66 38.36-1.388a3044.364 3044.364 0 0 1 35.4 24.844c13.744 9.76 29.072 8.392 33.848-3.736 4.6-11.536 9.24-23.224 13.944-35.08 4.896-12.456-1.764-30.992-14.7-40.476a2683.772 2683.772 0 0 0-34.344-24.756c-12.756-9.048-20.52-27.448-17.256-41.44a2043.008 2043.008 0 0 1 7.368-42.96c1.84-14.784 14.592-26.612 28.044-26.136 12.2 0.476 24.416 0.98 36.62 1.504 13.448 0.552 24.472 1.06 24.472 1.072z m-425.56 202.108c-156.424 2.876-256.208-97.24-253.76-254.076-2.204-156.828 97.58-257.14 253.76-254.264 156.164-1.808 256.8 98.496 254.568 254.256 2.468 155.772-98.168 255.884-254.568 254.084z" fill="#A58376" p-id="1842"></path></svg>
                                <p>个人中心</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div>
                                <svg t="1724399075469" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2310" width="auto" height="75%"><path d="M911.252 727.78a4425.272 4425.272 0 0 0-21.468-701.44C625.896 55.48 361.992 84.616 98.096 113.752a3629.352 3629.352 0 0 1 0 796.504l571.52 63.096a4014.128 4014.128 0 0 0 241.64-245.568z" fill="#FFBF00" p-id="2311"></path><path d="M911.252 727.78l-221.252-10.8a4204.64 4204.64 0 0 1-20.392 256.368" fill="#D9A200" p-id="2312"></path></svg>
                                <p>健康问卷</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-info">
                    <div>
                        <n-button tertiary :ghost="false" round type="info" color="#8a2be2" style="width: 50%; height: 90%; margin: auto;">
                            松桃县人民医院
                        </n-button>
                    </div>
                    <!-- <div>
                        <n-button tertiary :ghost="false" round type="info" color="#8a2be2" style="width: 50%; height: 90%; margin: auto;">
                            <template #icon>
                                <n-icon>
                                    <CashIcon />
                                </n-icon>
                            </template>
                            0854-5715669
                        </n-button>
                    </div> -->
                </div>

                <n-modal v-model:show="showModal" preset="card" :style="formStyle" :block-scroll="false" :z-index="10">
                    <div class="modal-content">
                        <div class="form">
                            <n-form ref="formRef" :model="modelRef" :rules="rules" size="large" label-placement="left"
                                label-align="left">
                                <n-form-item path="idCard" label="身份证号" :label-props="formLabelStyle">
                                    <n-input v-model:value="modelRef.idCard" @keydown.enter.prevent />
                                </n-form-item>
                                <div style="width: 100%;">
                                    <n-flex vertical style="width: 100%;">
                                        <n-button :disabled="modelRef.age === null" type="primary"
                                            style="width: 50%; margin: auto;" @click="searchReport">
                                            查询
                                        </n-button>
                                        <n-button :disabled="modelRef.age === null" type="primary"
                                            style="width: 50%; margin: auto; margin-top: 10px;" @click="handleClearForm">
                                            清空
                                        </n-button>
                                    </n-flex>
                                </div>
                            </n-form>
                        </div>

                        <div class="report-content" style="margin-top: 20px; border: 1px solid rgb(231, 231, 231);">
                            <n-list hoverable clickable class="report-list">
                                <n-list-item class="item" v-for="item in list" :key="item">
                                    <div class="item-top" style="display: flex; align-items: center; justify-content: space-between; font-size: 1.1rem;">
                                        <div class="item-top-left" style="display: flex; align-items: center;">
                                            <img style="height: 3rem;" v-if="item.sex==='01'" src="../../assets/man.png"></img>
                                            <img style="height: 3rem;" v-else-if="item.sex==='02'" src="../../assets/girl.png"></img>
                                            <div class="item-top-left-title" style="margin-left: 5px;">
                                                <p>{{item.patientName}} {{item.sexName}}</p>
                                                <p>{{item.packageName}}</p>
                                            </div>
                                        </div>
                                        <div class="item-top-right">
                                            {{item.peisNo}}
                                        </div>
                                    </div>
                                    <div class="item-bottom" style="margin-top: 15px;">
                                        <div class="item-bottom-left" style="font-size: 1.1rem;">{{item.createDatetime}}</div>
                                        <div class="item-bottom-right" style="display: flex; align-items: center; margin-top: 10px;">
                                            <n-button type="secondary" @click.stop="previewReport(item)">预览报告</n-button>
                                            <n-button type="secondary" style="margin-left: 5px;" @click.stop="downloadReport(item)">下载报告</n-button>
                                        </div>
                                    </div>
                                </n-list-item>
                            </n-list>
                        </div>
                    </div>
                </n-modal>
            </div>
        </div>
        <div class="report-preview">
            <div v-for="page in numPages" :key="page" class="pdf-page">
                <canvas :ref="`canvas-${page}`"></canvas>
            </div>
            <div style="position: fixed; bottom: 10%; left: 50%; transform: translateX(-50%);">
                <n-button type="primary" style="width: 120px; height: 50px;" @click="closePreview">关闭</n-button>
            </div>
        </div>
        <div class="report-loading" v-if="loading">
            <span class="loader"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, computed, reactive, nextTick } from 'vue'
import axios from "axios"
import bgDataurl from '@/assets/bg.dataurl?raw'
import { NModal, NList, NListItem, NForm, NFormItem, NInput, NFlex, NButton, createDiscreteApi } from 'naive-ui'

import * as pdfjsLib from 'pdfjs-dist/build/pdf.js';
import * as pdfWorkerMin from 'pdfjs-dist/build/pdf.worker.min?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerMin.default

// import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
// import * as pdfWorkerMin from 'pdfjs-dist/legacy/build/pdf.worker.min?url'

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerMin.default

// pdfjsLib.GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs';
// 根据环境变量设置路径
// const workerSrc = process.env.NODE_ENV === 'production'
//   ? '/assets/pdf.worker.mjs'  // 生产环境路径
//   : 'node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs';  // 开发环境路径
// pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

const loading = ref(false)
const canvasPageRefs = reactive({})

const configs = inject('config')

// 报告列表
const list = ref([]);


const deviceWidth = document.documentElement.clientWidth;


const imageUrl = reactive([])
const numPages = ref(0)

// 新增人员
//新增人员弹窗
const showModal = ref(false)
const formStyle = ref({
    width: document.documentElement.clientWidth.toFixed(0) * 0.4 + 'px'
})
const formLabelStyle = ref({
    style: 'font-size: 18px;'
})

const formRef = ref(null);
const {message} = createDiscreteApi(["message"])
const modelRef = ref({
    idCard: ''
});

const rules = {
    name: {
        required: true,
        message: '请填写姓名'
    },
    phone: [
        {
            required: true,
            message: '请输入11位手机号',
            validator: (rule, value) => {
                return /^1[34578]\d{9}$/.test(value)
            },
            message: '手机号码不正确',
            trigger: ['blur']
        }
    ],
    idCard: [
        {
            required: true,
            message: '请输入18位身份证号',
            validator: (rule, value) => {
                return /(^\d{18}$)|(^\d{15}$)/.test(value)
            },
            message: '身份证号不正确',
            trigger: ['blur', 'change']
        }
    ]
}

function searchReport(e) {
    e.preventDefault();
    formRef.value?.validate(async(errors) => {
        console.log('errors', errors)
        if (!errors) {
            message.success("验证成功");
            try {
                const res = await axios.request({
                    baseURL: configs.baseUrl.url,
                    url: `/peis/examReport/applet/list`,
                    method: 'GET',
                    params: { page: 1, size: 10, idCard: modelRef.value.idCard },
                    // headers: {
                    //     'auth': true// 需要认证，通过
                    // }
                })
                
                console.log('res--', res)
                list.value = res.data.data.content || []
            } catch (error) {
                console.log(error)
                if (Array.isArray(error)) {
                    message.warning('请按要求完成填写')
                }
            }
        } else {
            console.log(errors);
            message.error("验证失败");
        }
    })
}


function handleClearForm() {
    Object.keys(modelRef.value).map(item => {
        modelRef.value[item] = ''
    })
    list.value = []
}

function openSearchReportModal() {
    showModal.value = true
}

function getReportData(item, type) {
    let reportUrl = type === 'preview' ? true : false; // 这里应该是布尔值控制是否下载PDF
    const params = {
        baseURL: configs.baseUrl.url, 
        url: `/peis/examReport/applet/down/${item.peisNo}?reportUrl=${reportUrl}`,
        method: 'GET',
        params: {},
    }
    if(type === 'download') params.responseType = 'blob'
    return new Promise(async(resolve, reject) => {
        const res = await axios.request(params);
        console.log('getReportData-res--', res)
        resolve(res.data)
        
    })
}

 // base64文件流转为blob
 function base64ToBlob(base64, mimeType) {
  // 移除Base64前缀（如果有）
  const sliceSize = 1024;
  const byteCharacters = atob(base64.split(',')[1]); // 移除Base64前缀
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);
    const bytes = new Array(end - begin);

    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }

    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }

  return new Blob(byteArrays, { type: mimeType });
}

async function previewReport(item, e) {
    loading.value = true;
    const previewData = await getReportData(item, 'preview');
    const pdfChunk = 'data:application/pdf;base64,' + previewData.data.base64;
    const pdfBlob = base64ToBlob(pdfChunk, 'application/pdf');
    const fileURL = URL.createObjectURL(pdfBlob);


    // const reportPreview = document.querySelector('.report-preview');
    // reportPreview.style.zIndex = '15';
    // loading.value = false;
    // const iframe = document.getElementById('iframe-preview');
    // iframe.src = fileURL;

    // URL.revokeObjectURL(fileURL);
    // showModal.value = false;

    try {
        const loadingTask = await pdfjsLib.getDocument({url: fileURL, verbosity: 0}).promise;
        const pdf = loadingTask;
        const numPages = pdf.numPages;
        console.log('numPages', numPages);
        numPages.value = numPages;

        for (let i = 1; i <= numPages; i++) {
            const canvas = document.createElement('canvas');
            canvasPageRefs[i] = canvas;
            const reportPreview = document.querySelector('.report-preview');
            reportPreview.style.display = 'flex'; // 使用 Flexbox 布局
            reportPreview.style.flexWrap = 'wrap'; // 换行
            reportPreview.appendChild(canvas); // 将 canvas 添加到 DOM 中
            renderPage(pdf, i, canvas);
        }
        const reportPreview = document.querySelector('.report-preview');
        showModal.value = false;
        reportPreview.style.zIndex = '15'; //modal设置了z-index并未生效，暂不明是何原因
    } catch (error) {
        console.error('Error loading PDF: ', error);
    }
    finally {
        URL.revokeObjectURL(fileURL);
        loading.value = false;
    }
}

async function renderPage(pdf, pageNumber, canvas) {
    console.log('pageNumber', pageNumber);
    try {
        const page = await pdf.getPage(pageNumber);
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        canvas.style.width = deviceWidth + 'px';

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        await page.render(renderContext).promise;

        // imageUrl.push(canvas.toDataURL('image/png')) // 图片转base64

        // adjustCanvasWidth(canvas, pageNumber);
    } catch (error) {
        console.error(`Error rendering page ${pageNumber}: `, error);
    }
}
// 动态调整 canvas 宽度
function adjustCanvasWidth(canvas, pageNumber) {
    const reportPreview = document.querySelector('.report-preview');
    const containerWidth = reportPreview.clientWidth;
    const totalCanvasWidth = containerWidth / pageNumber;
    canvas.style.width = `${totalCanvasWidth}px`;
}

function downloadAndOpenPdf(pdfUrl, item) {
  var element = document.createElement('a');
  element.href = pdfUrl;
  element.download = `${item.patientName}_${item.packageName}.pdf`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

async function downloadReport(item) {
  try {
    const reportData = await getReportData(item, 'download')

    if (reportData instanceof Blob) {
      const url = window.URL.createObjectURL(new Blob([reportData]));
      showModal.value = false;
      downloadAndOpenPdf(url, item);
    } else {
      console.error('Failed to fetch the PDF or the response is not a Blob.');
    }
  } catch (error) {
    console.error('Error fetching the PDF:', error);
  }
}

function closePreview() {
    Object.values(canvasPageRefs).forEach(canvas => {
        canvas.remove();
    })
    const reportPreview = document.querySelector('.report-preview');
    reportPreview.style.zIndex = '1';
}




onMounted(() => {
    // console.log('configs--', configs)
    document.documentElement.style.fontSize = '9px'
    formStyle.value.width = document.documentElement.clientWidth.toFixed(0) * 0.9 + 'px'
    formLabelStyle.value.style = 'font-size: 14px;'
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 750) {
            document.documentElement.style.fontSize = '10px'
            formStyle.value.width = document.documentElement.clientWidth.toFixed(0) * 0.9 + 'px'
            formLabelStyle.value.style = 'font-size: 14px;'
        } else {
            document.documentElement.style.fontSize = document.documentElement.clientWidth * 0.01 + 'px'
            formStyle.value.width = document.documentElement.clientWidth.toFixed(0) * 0.4 + 'px'
            formLabelStyle.value.style = 'font-size: 18px;'
        }
    })
})

</script>

<style lang="less">

html {
    font-size: 12px;
}
.report-container {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;
}

.container-div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
}
.report-preview {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    z-index: -1;
}

.report-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#d6d4d4, 0.8);
    z-index: 8;
    display: flex; /* 启用 Flexbox 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

    .loader {
        color: #3e3d3d;
        font-size: 45px;
        text-indent: -9999em;
        overflow: hidden;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        transform: translateZ(0);
        animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
    }

    @keyframes mltShdSpin {
        0% {
            box-shadow: 0 -0.83em 0 -0.4em,
                0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
                0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }

        5%,
        95% {
            box-shadow: 0 -0.83em 0 -0.4em,
                0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
                0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }

        10%,
        59% {
            box-shadow: 0 -0.83em 0 -0.4em,
                -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em,
                -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
        }

        20% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
                -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
                -0.749em -0.34em 0 -0.477em;
        }

        38% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
                -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
                -0.82em -0.09em 0 -0.477em;
        }

        100% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
                0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
    }

    @keyframes round {
        0% {
            transform: rotate(0deg)
        }

        100% {
            transform: rotate(360deg)
        }
    }
}

.header {
    box-sizing: border-box;
    font-size: 5rem;
    text-align: center;
    color: #fff;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}
.content {
    width: 100%;
    height: 80%;
    left: 0;
    top: 35%;
    box-sizing: border-box;

    .title {
        width: 100%;
        height: 10%;
        box-sizing: border-box;
        padding: 1% 0 0 1%;
        font-weight: 700;
        font-size: 2rem;
    }
    
    .top-menu {
        width: 100%;
        height: 15%;
        display: flex;
        // 拥有悬浮效果的阴影
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 2;
        
        .menu-item {
            box-sizing: border-box;
            width: 49%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            div {
                width: auto;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                p {
                    margin: 0;
                    padding: 0;
                    white-space: nowrap;
                }
            }
        }
        .menu-item:nth-of-type(2) {
            border-left: 1px solid rgb(235, 233, 233);
        }
    }
    .center-menu {
        width: 100%;
        height: 20%;
        margin-top: 3%;
        // 拥有悬浮效果的阴影
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 2;
        
        .menu-title {
            width: 100%;
            height: 30%;
            border-bottom: 1px solid rgb(235, 233, 233);
            .p {
                margin: 0;
                padding: 0;
                position: relative;
                padding-left: 5%;
            }
            .p::before {
                position: absolute;
                top: 0;
                left: 0;
                content: "";
                height: 100%;
                width: 3%;
                border-radius: 10px;
                background: #abdaf4;
            }
        }

        .menu {
            box-sizing: border-box;
            width: 100%;
            height: 70%;
            display: flex;

            .menu-item {
                box-sizing: border-box;
                width: 49%;
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
                div {
                    width: auto;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    p {
                        margin: 0;
                        padding: 0;
                        white-space: nowrap;
                    }
                }
            }
            .menu-item:nth-of-type(2) {
                border-left: 1px solid rgb(235, 233, 233);
            }
        }
    }

    .bottom-menu {
        width: 100%;
        height: 40%;
        margin-top: 3%;
        // 拥有悬浮效果的阴影
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 2;
        
        .menu-title {
            width: 100%;
            height: 20%;
            border-bottom: 1px solid rgb(235, 233, 233);
            .p {
                margin: 0;
                padding: 0;
                position: relative;
                padding-left: 5%;
            }
            .p::before {
                position: absolute;
                top: 0;
                left: 0;
                content: "";
                height: 100%;
                width: 3%;
                border-radius: 10px;
                background: #abdaf4;
            }
        }

        .menu {
            box-sizing: border-box;
            width: 100%;
            height: 39%;
            display: flex;

            .menu-item {
                box-sizing: border-box;
                width: 49%;
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
                div {
                    width: auto;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    p {
                        margin: 0;
                        padding: 0;
                        white-space: nowrap;
                    }
                }
            }
            .menu-item:nth-of-type(2) {
                border-left: 1px solid rgb(235, 233, 233);
            }
        }
        .menu:nth-of-type(2) {
            border-bottom: 1px solid rgb(235, 233, 233);
        }
    }

    .bottom-info {
        height: 30%;
        width: 100%;
        position: relative;
        z-index: 2;
        background-color: white;
        div {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
    }
}

.modal-content {
    width: 100%;
    background: white; 
    box-sizing: border-box;
    .form {
        width: 100%;
    }
}

</style>