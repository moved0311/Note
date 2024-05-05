## Listener
* addEventListener/removeEventListener
* setInterval/clearInterval


## 檢測工具
* [nolanlawson/fuite: A tool for finding memory leaks in web apps](https://github.com/nolanlawson/fuite)
* [Debugging a memory leak with fuite - YouTube](https://www.youtube.com/watch?v=H0BHL2lo89M)


## 檢查Listener是否釋放
* Chrome Dev Tool > Elements > Event Listeners > transitionend 是否會不斷增加沒有釋放
* `getEventListeners(window)` 查看裡面元素有沒有不斷增加


## 檢查Div元素會不會每一次render都會增加

