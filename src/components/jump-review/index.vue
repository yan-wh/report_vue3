<template>
    <div class="report-container">
        <div class="container-div">
            <div class="content">

                <n-modal 
                    v-model:show="showModal" 
                    preset="card" 
                    :maskClosable="false" 
                    :closable="false" 
                    :style="formStyle" 
                    :block-scroll="false" 
                    :z-index="10"
                >
                    <template #header>
                        <div v-show="!noReport" style="font-size: 20px;">查看报告</div>
                        <div v-show="noReport" style="color: red; font-size: 20px;">该人员下无对应的体检报告，请核实人员或联系体检科！</div>
                    </template>
                    <div class="form" v-show="noParam">
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
                                        style="width: 50%; margin: auto;" @click="searchReportFromIdCard">
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
                    <div class="modal-content">
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
        <div class="report-preview" ref="pdfPage">
            <!-- <div v-for="page in numPages" :key="page" class="pdf-page">
                <canvas :ref="`canvas-${page}`"></canvas>
            </div> -->
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
import { ref, inject, onMounted, computed, reactive, nextTick, onBeforeMount, watchEffect } from 'vue'
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

// const configs = inject('config')

// 报告列表
const list = ref([]);
const noReport = ref(false)
const noParam = ref(false)
const showWarning = ref(false)

const deviceWidth = document.documentElement.clientWidth;


const imageUrl = reactive([])
// const numPages = ref(0)
const pdfPage = ref(null)

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


const configs = reactive({});
const getFetchEnv = async () => {
    // const envUrl = `env-${import.meta.env.MODE}`;
    const fetchFile = await fetch(`/config/index.json`);
    const fetchENV = await fetchFile.json();
    // console.log('fetchENV_fetchENV', fetchENV);
    return JSON.parse(JSON.stringify(fetchENV));
};
onBeforeMount(async () => {
    try {
        const fetchedConfig = await getFetchEnv();
        // console.log('fetchedConfig', fetchedConfig)
        Object.assign(configs, fetchedConfig);
    } catch (error) {
        console.error('Failed to load config:', error);
    }
});

const searchReportFromIdCard = (e) => {
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

async function searchReport(idCard) {
    try {
        const res = await axios.request({
            baseURL: configs.baseUrl.url,
            url: `/peis/examReport/applet/list`,
            method: 'GET',
            params: { page: 1, size: 10, idCard: idCard },
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
        if (!res.data.data?.content) {
            noReport.value = true
        }
        list.value = res.data.data.content || []
    } catch (error) {
        showWarning.value = true
        noReport.value = true
        console.log(error)
    }
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
        // console.log('getReportData-res--', res)
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
        const pageNums = pdf.numPages;
        // console.log('pageNums', pageNums);
        // numPages.value = pageNums;

        const reportPreview = document.querySelector('.report-preview');
        for (let i = 1; i <= pageNums; i++) {
            const canvas = document.createElement('canvas');
            canvasPageRefs[i] = canvas;
            reportPreview.style.display = 'flex'; // 使用 Flexbox 布局
            reportPreview.style.flexWrap = 'wrap'; // 换行
            reportPreview.style.scrollY = 'scroll'; // 添加滚动条
            reportPreview.appendChild(canvas); // 将 canvas 添加到 DOM 中
            renderPage(pdf, i, canvas);
        }
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
    // console.log('pageNumber', pageNumber);
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
    showModal.value = true;
}

watchEffect(() => {
    if (configs) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const idCard = urlParams.get('idCard');
        showModal.value = true
        if (idCard) {
            if (configs.baseUrl) {
                // console.log('configs--', configs)
                searchReport(idCard)
            }
        } else {
            noParam.value = true
        }
    }
})


onMounted(() => {
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