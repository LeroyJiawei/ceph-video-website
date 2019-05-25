import qs from 'qs';

class commonApis {
  // 通用的处理axios错误的函数
  handleError = function (error, main, message) {
    if (error && error.response) {
      console.log("error.response.data", error.response.data);
      console.log("error.response.status", error.response.status);
      console.log("error.response.headers", error.response.headers);
      main.$message.error({
        message: message + error.status,
        showClose: true
      });
    } else {
      console.log(`error.request`, error.request);
      console.log("error.message", error.message);
      main.$message.error({
        message: message + error.message,
        showClose: true,
      });
    }
    console.log(`error.config`, error.config);
  };
  paramsSerializer = params => {
    return qs.stringify(params, { indices: false })
  };
  // 从给定字典的keys转化成values
  keysToValues = (dict, keys) => {
    var result = [];
    for (var keyIndex in keys) {
      for (var key in dict) {
        if (key === keys[keyIndex]) {
          result.push(dict[key]);
          break;
        }
      }
    }
    return result;
  };
  // 从给定字典的values转化成keys
  valuesToKeys = (dict, values) => {
    var result = [];
    for (var valueIndex in values) {
      for (var key in dict) {
        if (dict[key] === values[valueIndex]) {
          result.push(key);
          break;
        }
      }
    }
    return result;
  };
  // 从给定字典中提取出key或者value数组，type=0为key数组，type=1为value数组
  getArrOfKeyOrValue = (dict, type) => {
    var result = [];
    for (var key in dict) {
      if (type == 0) {
        result.push(key);
      } else {
        result.push(dict[key]);
      }
    }
    return result;
  };
  // 字符串前置补0
  addPreZero = (num, len) => {
    var arr = new Array(len);
    arr = arr.fill(0);
    return (arr.join('') + num).slice(-len);
  }
}

export default new commonApis();
