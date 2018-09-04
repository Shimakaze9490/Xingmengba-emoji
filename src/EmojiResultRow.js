import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

class EmojiResultsRow extends PureComponent {
  render() {
    // this.props.symbol 字符串检测
    // codePointAt(0) 返回指定索引处的字符
    // toString(16) 转换成字符串，16进制
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);

    // jsdelivr 静态cdn库，其中emojione模块用于表情图片加速。
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};
export default EmojiResultsRow;
