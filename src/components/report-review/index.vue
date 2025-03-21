<template>
    <div class="report-container">
        <div class="container-div">
            <!-- <div class="header" style="height: 25%; width: 100%;"
                :style="{ background: `url(data:image/png;base64,${bgDataurl}) no-repeat center center / cover` }">
                <div style="text-shadow: 3px 3px 4px rgba(204, 69, 59, 0.2); margin: auto 0;">
                    报告查询
                </div>
            </div> -->
            <div class="header" style="height: 35%; width: 100%;">
                <n-carousel autoplay draggable>
                    <img v-for="item in bannerList" :key="item" class="carousel-img" :src="configs.baseUrl.sourceUrl + item.bannerPicture" />
                </n-carousel>
            </div>
            <div class="content">
                <div class="top-menu">
                    <div class="menu-item" @click.stop="openSearchReportModal">
                        <div>
                            <svg t="1735281916611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21362" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="65%"><path d="M781.653333 317.44c-32.426667-75.093333-119.466667-110.933333-194.56-80.213333s-110.933333 119.466667-80.213333 194.56 119.466667 110.933333 194.56 80.213333c76.8-30.72 112.64-117.76 80.213333-194.56 1.706667 1.706667 1.706667 0 0 0zM819.2 0H204.8C129.706667 0 68.266667 61.44 68.266667 136.533333v750.933334c0 75.093333 61.44 136.533333 136.533333 136.533333h614.4c75.093333 0 136.533333-61.44 136.533333-136.533333V136.533333c0-75.093333-61.44-136.533333-136.533333-136.533333zM238.933333 303.786667h83.626667c18.773333 0 34.133333 13.653333 34.133333 32.426666 0 18.773333-13.653333 34.133333-32.426666 34.133334h-85.333334c-18.773333 0-34.133333-13.653333-34.133333-32.426667-1.706667-18.773333 13.653333-34.133333 34.133333-34.133333-1.706667 0-1.706667 0 0 0z m0 266.24h146.773334c18.773333 0 34.133333 15.36 34.133333 34.133333s-15.36 34.133333-34.133333 34.133333H238.933333c-18.773333 0-34.133333-15.36-34.133333-34.133333 0-20.48 15.36-34.133333 34.133333-34.133333z m419.84 331.093333H238.933333c-18.773333 0-34.133333-15.36-34.133333-34.133333s15.36-34.133333 34.133333-34.133334h419.84c18.773333 0 34.133333 15.36 34.133334 34.133334-1.706667 20.48-15.36 34.133333-34.133334 34.133333zM819.2 701.44c6.826667 15.36 0 34.133333-15.36 40.96-3.413333 1.706667-8.533333 1.706667-11.946667 1.706667-11.946667 0-23.893333-6.826667-29.013333-18.773334L699.733333 575.146667l-5.12 1.706666c-112.64 27.306667-225.28-42.666667-252.586666-155.306666S484.693333 196.266667 597.333333 168.96s225.28 42.666667 252.586667 155.306667c20.48 85.333333-13.653333 174.08-87.04 221.866666l-5.12 3.413334 61.44 151.893333z" fill="#66B4F3" p-id="21363"></path></svg>
                            <p>报告查询</p>
                        </div>
                    </div>
                </div>
                <div class="center-menu">
                    <div class="menu-title">
                        <p class="p">常用功能</p>
                    </div>
                    <div class="menu">
                        <div class="menu-item" @click.stop="jumpToDetail('科室简介')">
                            <div>
                                <svg t="1735281731237" class="icon" viewBox="0 0 1077 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11910" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="60%"><path d="M1044.210526 0H33.684211C13.473684 0 0 13.635368 0 34.115368s13.473684 34.169263 33.684211 34.169264h33.68421V614.4c0 75.075368 60.631579 136.515368 134.736842 136.515368H404.210526l-114.526315 204.8a36.271158 36.271158 0 0 0 13.473684 47.804632c13.473684 6.844632 33.684211 6.844632 47.157894-13.635368L485.052632 750.915368h148.210526l134.736842 232.124632c6.736842 13.635368 26.947368 20.48 47.157895 13.635368 13.473684-6.790737 20.210526-27.270737 13.473684-47.750736L700.631579 750.915368h175.157895c74.105263 0 134.736842-61.44 134.736842-136.515368V68.284632h33.68421c20.210526 0 33.684211-13.689263 33.684211-34.169264S1064.421053 0 1044.210526 0zM943.157895 614.4c0 40.96-26.947368 68.284632-67.368421 68.284632H202.105263c-40.421053 0-67.368421-27.324632-67.368421-68.284632V68.284632h808.421053V614.4z" fill="#1C4FCF" p-id="11911"></path><path d="M276.210526 505.155368l121.263158-122.88L565.894737 552.96c13.473684 13.635368 33.684211 13.635368 47.157895 0l282.947368-286.72a33.306947 33.306947 0 0 0 0-47.804632 32.282947 32.282947 0 0 0-47.157895 0l-262.736842 266.24L417.684211 314.044632a32.282947 32.282947 0 0 0-47.157895 0L229.052632 457.404632a33.306947 33.306947 0 0 0 0 47.750736c6.736842 13.689263 33.684211 13.689263 47.157894 0z" fill="#1C4FCF" p-id="11912"></path></svg>
                                <p>科室简介</p>
                            </div>
                        </div>
                        <div class="menu-item" @click.stop="jumpToDetail('体检指引')">
                            <div>
                                <svg t="1735281677660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9025" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="75%"><path d="M773.12 368.64H250.88a30.72 30.72 0 0 1-22.9376-10.24l-102.4-115.2a30.72 30.72 0 0 1 0-40.96l102.4-115.2A30.72 30.72 0 0 1 250.88 76.8h522.24a30.72 30.72 0 0 1 30.72 30.72v230.4a30.72 30.72 0 0 1-30.72 30.72zM264.6528 307.2H742.4V138.24H264.6528L189.44 222.72zM773.12 760.32H250.88a30.72 30.72 0 0 1-30.72-30.72v-230.4a30.72 30.72 0 0 1 30.72-30.72h522.24a30.72 30.72 0 0 1 22.9376 10.24l102.4 115.2a30.72 30.72 0 0 1 0 40.96l-102.4 115.2a30.72 30.72 0 0 1-22.9376 10.24z m-491.52-61.44h477.7472L834.56 614.4l-75.0592-84.48H281.6z" fill="#1273FF" p-id="9026"></path><path d="M512 527.36a30.72 30.72 0 0 1-30.72-30.72V343.04a30.72 30.72 0 0 1 61.44 0v153.6a30.72 30.72 0 0 1-30.72 30.72zM512 947.2a30.72 30.72 0 0 1-30.72-30.72v-184.32a30.72 30.72 0 0 1 61.44 0v184.32a30.72 30.72 0 0 1-30.72 30.72z" fill="#1273FF" p-id="9027"></path></svg>
                                <p>体检指引</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-menu">
                    <div class="menu-title">
                        <p class="p">其它</p>
                    </div>
                    <div class="menu">
                        <div class="menu-item" @click.stop="jumpToDetail('体检须知')">
                            <div>
                                <svg t="1735281756508" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13114" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="75%"><path d="M228.807111 199.566222a29.582222 29.582222 0 0 0-42.097778 0 29.582222 29.582222 0 0 0 0 42.097778l42.097778 42.097778a29.582222 29.582222 0 0 0 42.097778 0 29.582222 29.582222 0 0 0 0-42.097778l-42.097778-42.097778z m567.694222 0l-42.097777 42.097778a29.639111 29.639111 0 0 0 0 42.097778 29.639111 29.639111 0 0 0 42.097777 0l42.097778-42.097778a29.582222 29.582222 0 0 0 0-42.097778 29.582222 29.582222 0 0 0-42.097778 0zM153.998222 436.224H93.809778a29.923556 29.923556 0 0 0-29.809778 29.752889c0 16.440889 13.425778 29.809778 29.809778 29.809778h59.562666a29.866667 29.866667 0 0 0 29.809778-29.809778 29.013333 29.013333 0 0 0-29.184-29.809778z m777.500445 0h-59.619556a29.866667 29.866667 0 0 0-29.809778 29.752889c0 16.440889 13.425778 29.809778 29.809778 29.809778h59.619556a29.866667 29.866667 0 0 0 29.809777-29.809778 29.923556 29.923556 0 0 0-29.809777-29.809778z m-448.625778-344.177778v59.619556a29.866667 29.866667 0 0 0 59.619555 0V92.16a29.866667 29.866667 0 0 0-29.809777-29.809778 29.866667 29.866667 0 0 0-29.809778 29.809778zM303.502222 510.976a208.896 208.896 0 0 1 209.123556-209.123556 208.896 208.896 0 0 1 209.066666 209.123556 208.896 208.896 0 0 1-209.066666 209.066667 208.782222 208.782222 0 0 1-209.123556-209.066667z m-60.074666 0a268.970667 268.970667 0 0 0 269.255111 269.255111A269.368889 269.368889 0 1 0 243.370667 510.862222z m209.692444 418.872889c0 16.384 13.368889 29.809778 29.752889 29.809778h59.619555a29.866667 29.866667 0 0 0 29.809778-29.809778 29.866667 29.866667 0 0 0-29.809778-29.809778H482.872889a29.866667 29.866667 0 0 0-29.752889 29.809778z m-60.245333-89.998222c0 16.384 13.425778 29.809778 29.809777 29.809777h179.313778a29.866667 29.866667 0 0 0 29.809778-29.809777 29.866667 29.866667 0 0 0-29.809778-29.809778H422.684444a29.923556 29.923556 0 0 0-29.809777 29.809778z" fill="#536CD7" p-id="13115"></path></svg>
                                <p>体检须知</p>
                            </div>
                        </div>
                        <div class="menu-item" @click.stop="jumpToDetail('体检咨询')">
                            <div>
                                <svg t="1735281876065" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20326" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="75%"><path d="M853.74281115 125.12134368h-683.4856223c-42.55665253 0-77.37573228 34.81907982-77.37573226 77.37573233v506.16623766c0 42.55665253 34.81907982 77.37573228 77.37573226 77.37573229h272.74944964c23.8575162 0 47.71503251 5.80317818 68.99336151 16.11994355l187.63614997 94.14047413c17.40953991 8.38237086 37.39827241-3.86878903 37.39826714-23.2127181v-61.25578879c0-14.18554911 11.60636172-25.79191084 25.79191077-25.79191079h90.27168512c42.55665253 0 77.37573228-34.81907982 77.37573231-77.37573229v-506.16623766c0.64479817-42.55665253-34.17428163-77.37573228-76.73093416-77.37573233z m-566.1324301 193.43932827h257.91910238c18.05433809 0 32.23988718 14.18554911 32.23988722 32.23988705s-14.18554911 32.23988718-32.23988722 32.23988708h-257.91910238c-18.05433809 0-32.23988718-14.18554911-32.23988707-32.23988708s14.83034722-32.23988718 32.23988707-32.23988705z m448.13443974 257.91910226h-448.13443974c-18.05433809 0-32.23988718-14.18554911-32.23988707-32.23988703s14.18554911-32.23988718 32.23988707-32.23988718h448.13443974c18.05433809 0 32.23988718 14.18554911 32.23988719 32.23988718s-14.18554911 32.23988718-32.23988719 32.23988703z" fill="#12B7F5" p-id="20327"></path></svg>
                                <p>体检咨询</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-info">
                    <div>
                        <n-button tertiary :ghost="false" round type="info" color="#8a2be2" style="width: 50%; height: 90%; margin: auto;">
                            <span style="font-size: 20px;">{{ configs.hospitalName }}</span>
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
                    <template #header>
                        <span>报告查询</span>
                    </template>
                    <div class="modal-content" style="margin-top: 25px;">
                        <div class="form">
                            <n-form ref="formRef" :model="modelRef" size="large" label-placement="left"
                                label-align="left">
                                <n-form-item path="idCard" label="证件号码" :label-props="formLabelStyle">
                                    <n-input v-model:value="modelRef.idCard" @keydown.enter.prevent />
                                </n-form-item>
                                <div style="width: 100%" v-show="showWarning">
                                    <span style="color: red; font-size: 18px;">该证件号码无对应的体检报告，请核实证件号码或联系体检科工作人员。</span>
                                </div>
                                <div style="width: 100%; margin-top: 25px;">
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

                        <div class="report-content" style="margin-top: 25px; border: 1px solid rgb(231, 231, 231);">
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

                <n-modal v-model:show="showJumpModal" preset="card" :style="formStyle" :block-scroll="false" :z-index="10" :header-style="{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }">
                    <template #header>
                        <n-h2>{{ jumpModalTitle }}</n-h2>
                    </template>
                    <div class="modal-content" style="margin-top: 25px; height: 80vh;">
                        <div style="width: 100%; height: 100%; overflow-y: auto;" v-show="jumpModalTitle === '体检指引'">
                            <img style="width: 100%;":src="configs.baseUrl.sourceUrl + guideImg.bannerPicture" />
                        </div>
                        <div style="width: 100%; height: 100%; font-size: 18px; overflow-y: auto;" v-show="jumpModalTitle === '科室简介'">
                            <n-h3><div v-html="hospitalInfo.hospitalIntroduction"></div></n-h3>
                        </div>
                        <div style="width: 100%; height: 100%; font-size: 18px; overflow-y: auto;" v-show="jumpModalTitle === '体检须知'">
                            <n-h3><div v-html="hospitalInfo.medicalExaminationInstructions"></div></n-h3>
                        </div>
                        <div style="width: 100%; height: 100%; font-size: 18px; overflow-y: auto;" v-show="jumpModalTitle === '体检咨询'">
                            <div style="display: flex; align-items: center;">
                                <n-icon size="40">
                                    <!-- 地址 hospitalAddress-->
                                    <svg t="1735271797966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2508" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="75%">
                                        <path d="M512 64c211.776 0 384 174.272 384 388.48a379.264 379.264 0 0 1-101.44 259.584l-219.456 280.64a79.872 79.872 0 0 1-126.208 0.512l-223.872-283.2A388.224 388.224 0 0 1 128 452.48C128 238.272 300.224 64 512 64z m195.456 375.04c0-107.904-87.296-195.776-194.56-195.776-51.776 0-100.544 20.544-137.152 57.728a196.48 196.48 0 0 0-56.832 139.072c0.384 107.904 87.68 195.84 194.496 195.84a189.44 189.44 0 0 0 137.152-57.728c36.672-37.12 56.896-86.592 56.896-139.072z m-82.56 0c0 30.336-11.52 58.624-32.448 79.872a110.08 110.08 0 0 1-79.04 33.344c-61.824 0-112-50.56-112-112.64 0-30.272 11.52-58.624 32.384-79.808 21.76-21.504 49.92-33.344 79.616-33.344 29.888 0 57.92 11.648 79.04 33.024 21.12 21.312 32.768 49.6 32.512 79.616z" fill="#51A9FF" p-id="2509"></path>
                                    </svg>
                                </n-icon>
                                <p style="margin: 0; padding-left: 17px;">{{ hospitalInfo.hospitalAddress }}</p>
                            </div>
                            <div style="display: flex; align-items: center; margin-top: 20px;">
                                <n-icon size="40">
                                    <!-- 时间 healthExamTime-->
                                    <svg t="1735271853318" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6388" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="75%">
                                        <path d="M512 138.24c206.336 0 373.76 167.424 373.76 373.76s-167.424 373.76-373.76 373.76-373.76-167.424-373.76-373.76 167.424-373.76 373.76-373.76m0-61.44c-240.128 0-435.2 195.072-435.2 435.2s195.072 435.2 435.2 435.2 435.2-195.072 435.2-435.2-195.072-435.2-435.2-435.2z" fill="#70E08B" p-id="6389"></path><path d="M542.72 273.92H481.28v269.824h61.44V273.92z" fill="#70E08B" p-id="6390"></path><path d="M514.048 491.52L481.28 543.744l186.88 117.248 32.768-51.712-186.88-117.76z" fill="#70E08B" p-id="6391"></path>
                                    </svg>
                                </n-icon>
                                <p style="margin: 0; padding-left: 17px;">{{ hospitalInfo.healthExamTime }}</p>
                            </div>
                            <div style="display: flex; align-items: center; margin-top: 20px;">
                                <n-icon size="40">
                                    <!-- 电话 contactPhone-->
                                    <svg t="1735271777600" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1517" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="75%">
                                        <path d="M725.681633 902.791837c-38.661224 0-82.02449-7.314286-127.477551-21.420408-109.191837-33.959184-216.816327-105.012245-303.020409-200.09796C166.138776 538.644898 104.489796 396.538776 116.506122 270.106122c3.657143-31.346939 13.583673-71.053061 60.604082-102.922449 36.04898-29.257143 77.322449-45.97551 109.714286-45.453061 33.959184 0.522449 45.453061 12.538776 80.457143 63.216327 53.812245 74.187755 57.469388 110.759184 55.379591 131.657143-3.657143 34.481633-22.465306 49.632653-39.706122 63.216326-4.179592 3.134694-8.359184 6.791837-12.016326 9.926531-20.897959 26.644898-46.497959 63.738776 63.216326 177.110204 93.518367 89.861224 144.195918 100.832653 165.616327 99.265306 16.718367-1.044898 22.987755-9.926531 25.6-13.061225l0.522449-0.522448c35.004082-49.110204 46.497959-61.126531 79.934693-66.351021 32.391837-5.22449 49.110204 5.22449 118.07347 48.587755 62.171429 39.183673 90.906122 65.306122 84.636735 106.579592-2.089796 44.930612-36.571429 106.057143-75.232654 133.746939-26.644898 18.285714-63.738776 27.689796-107.624489 27.689796z" fill="#16C4AF" p-id="1518"></path>
                                    </svg>
                                </n-icon>
                                <p style="margin: 0; padding-left: 17px;">{{ hospitalInfo.contactPhone }}</p>
                            </div>
                        </div>
                    </div>
                </n-modal>
            </div>
        </div>
        <div class="report-preview">
            <div v-for="page in numPages" :key="page" class="pdf-page">
                <canvas :ref="`canvas-${page}`"></canvas>
            </div>
            <div style="position: fixed; bottom: 10%; left: 50%; transform: translateX(-50%);" v-show="showCloseBtn">
                <n-button type="primary" style="width: 120px; height: 50px;" @click="closePreview">关闭</n-button>
            </div>
        </div>
        <div class="report-loading" v-if="loading">
            <span class="loader"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, computed, reactive, nextTick, onBeforeMount } from 'vue'
import axios from "axios"
// import bgDataurl from '@/assets/bg.dataurl?raw'
import { NModal, NList, NListItem, NForm, NFormItem, NInput, NFlex, NButton, NCarousel, NH2, NH3, NIcon, createDiscreteApi } from 'naive-ui'

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

// 头部图片
const bannerList = ref([])

// 报告列表
const list = ref([]);


const deviceWidth = document.documentElement.clientWidth;

const showWarning = ref(false)
const showCloseBtn = ref(false)
const imageUrl = reactive([])
const numPages = ref(0)

// 指引等的弹窗
const showJumpModal = ref(false)
const jumpModalTitle = ref('')
const guideImg = ref({})
const hospitalInfo = ref({})


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


// form 的校验规则

// const rules = {
//     // phone: [
//     //     {
//     //         required: true,
//     //         message: '请输入11位手机号',
//     //         validator: (rule, value) => {
//     //             return /^1[34578]\d{9}$/.test(value)
//     //         },
//     //         message: '手机号码不正确',
//     //         trigger: ['blur']
//     //     }
//     // ],
//     idCard: [
//         {
//             required: true,
//             message: '请输入18位身份证号',
//             validator: (rule, value) => {
//                 return /(^\d{18}$)|(^\d{15}$)/.test(value)
//             },
//             message: '身份证号不正确',
//             trigger: ['blur', 'change']
//         }
//     ]
// }

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
                if (res.data.data?.content) {
                    showWarning.value = false
                } else {
                    showWarning.value = true
                }
                // console.log('res--', res)
                list.value = res.data.data.content || []
            } catch (error) {
                console.log(error)
                showWarning.value = true
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
    showCloseBtn.value = true;

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
    showCloseBtn.value = false;
    Object.values(canvasPageRefs).forEach(canvas => {
        canvas.remove();
    })
    const reportPreview = document.querySelector('.report-preview');
    reportPreview.style.zIndex = '1';
}


const jumpToDetail = (name) => {
    showJumpModal.value = true;
    jumpModalTitle.value = name;
}


onBeforeMount(async() => {
    try {
        const res = await axios.request({
            baseURL: configs.baseUrl.url,
            url: `/customer/banner`, // 获取banner图片
            method: 'GET',
            params: { page: 1, size: 20 },
        })
        
        // console.log('res--', res)
        if (!res.data.data?.content) {
            bannerList.value = []
        } else {
            bannerList.value = res.data.data.content.filter(item => item.bannerPicture && item.seq !== 999)
            guideImg.value = res.data.data.content.find(i => i.seq === 999) || {}
            // console.log('bannerList.value', bannerList.value)
        }
    } catch (error) {
        console.log(error)
    }

    try {
        const res = await axios.request({
            baseURL: configs.baseUrl.url,
            url: `/system/variable/base/config`, // 获取体检系统设置的当前医院的信息
            method: 'GET',
            params: { page: 1, size: 20 },
        })
        
        // console.log('res--', res)
        if (!res.data.data) {
            hospitalInfo.value = {}
        } else {
            hospitalInfo.value = res.data.data
        }
    } catch (error) {
        console.log(error)
    }
})


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

<style lang="less" scoped>

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

    .header {
        .carousel-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
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
    height: 65%;
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
        height: 20%;
        margin-top: 2%;
        display: flex;
        // 拥有悬浮效果的阴影
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        border-top: 1px solid rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 2;
        
        .menu-item {
            box-sizing: border-box;
            width: 100%;
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
                    padding-left: 15px;
                    font-size: 20px;
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
        margin-top: 6%;
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
            height: 80%;
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
                        padding-left: 15px;
                        font-size: 19px;
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
        height: 20%;
        margin-top: 6%;
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
            height: 80%;
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
                        padding-left: 15px;
                        font-size: 19px;
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
        margin-top: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

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