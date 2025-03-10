const utils = {
  /**
   * @description base64解密
   * @param res 需要解密的字符串
   * @returns 解密之后的对象
   */
  decryptResponse(encodedStr) {
    // 检查输入是否为空或无效
    if (typeof encodedStr !== "string" || !encodedStr) {
      return encodedStr;
    }

    try {
      // 去除可能存在的特殊字符（如换行符、空格等）
      encodedStr = encodedStr.replace(/[\t\n\f\r ]+/g, "");

      // 确保字符串长度是 4 的倍数
      while (encodedStr.length % 4 !== 0) {
        encodedStr += "=";
      }

      const data = atob(encodedStr);

      // 将二进制字符串转换为 Uint8Array
      const bytes = new Uint8Array(data.length);
      for (let i = 0; i < data.length; i++) {
        bytes[i] = data.charCodeAt(i);
      }
      // 使用 TextDecoder 解码为 UTF-8 格式的字符串
      return JSON.parse(new TextDecoder("utf-8").decode(bytes));

      // 使用微信小程序的 base64ToArrayBuffer 方法解码
      //   const arrayBuffer = uni.base64ToArrayBuffer(encodedStr);
      // 将 ArrayBuffer 转换为字符串
      // const decodedStr = String.fromCharCode.apply(
      //     null,
      //     new Uint8Array(arrayBuffer)
      // );

      // // 将二进制字符串转换为 Uint8Array
      // const bytes = new Uint8Array(decodedStr.length);
      // for (let i = 0; i < decodedStr.length; i++) {
      //     bytes[i] = decodedStr.charCodeAt(i);
      // }
      // 因为小程序不支持 TextDecoder ，所以使用 decodeURIComponent 解码
      // 使用 decodeURIComponent 解码
      //   const uint8Array = new Uint8Array(bytes.buffer);
      //   let uriEncodedString = "";
      //   for (let i = 0; i < uint8Array.length; i++) {
      //     uriEncodedString += `%${uint8Array[i].toString(16).padStart(2, "0")}`;
      //   }
      //   const decodedString = decodeURIComponent(uriEncodedString);

      // 将解码后的字符串解析为 JSON
      //   return JSON.parse(decodedString);
    } catch (e) {
      console.error("Error decoding base64 string:", e);
      return encodedStr; // 返回原始数据
    }
  },
}

export default utils;
