
//filterEmoji 函数定义
import emojiList from "./emojiList.json";  //表情清单

// 导出函数,参数：搜索文本+最大结果数
export default function filterEmoji(searchText, maxResults) {
  return emojiList
    .filter(emoji => {  // filter 过滤器，筛选回调函数为true的元素。
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {  //includes 字符串匹配
        return true;
      }
      if (emoji.keywords.includes(searchText)) { //交换位置 再次匹配
        return true;
      }
      return false;
    })
    .slice(0, maxResults); //截取数组中前maxResults个元素，过多的不要
}
