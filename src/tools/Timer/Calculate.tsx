function  Calculate(msTotal:number){
    const ms = msTotal % 1000;
    const secs = ((msTotal - ms) / 1000) % 60;
    const mins = (((msTotal - ms) / 1000 - secs) / 60) % 60;
    const hours = (((msTotal - ms) / 1000 - secs) / 60 - mins) / 60;
    const hoursString = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';
  //padStart 是一个字符串方法，用于在字符串的开始添加特定字符，直到达到指定的长度。2 表示你希望最终的字符串长度至少为2个字符。'0' 是填充字符，即用来填充的字符，这里是0。
    return `${hoursString}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
}
export default Calculate;