import React, { PureComponent } from "react";
import PropTypes from "prop-types"; // 类型检测

import "./SearchInput.css"; //导入css文件

// 组件注册
class SearchInput extends PureComponent {
  // handleChange 是个中间函数！实则为了调用 this.props.textChange(event);
  handleChange = event => {
    this.props.textChange(event); //在原型上的函数
  };

  //onChange 输入域内容改变
  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />  
        </div>
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func  //检测函数类型
};

export default SearchInput;  //导出模块
