# Cracking the coding interview

> ## Never let your coding skills atrophy.

# Reference
* [Cracking the coding interview--问题与解答](https://hawstein.com/2013/03/14/ctci-solutions-contents/)

# Before the Interview
## Writing a Great Resume
* 篇幅: 一頁
* 可量化的貢獻
 the principle is the same: show what you did, how you did it, and what the results were. Ideally, you should try to make the results "measurable" somehow. 
* 專案: 最值得寫的專案(2-4項)
* 技能

# Technical Question
## Core Data Structures, Algorithms, and Concepts
|Data Structure|Algorithms|Concepts|
|--|--|--|
|Linked Lists| Breadth-First Search| Bit Manipulation |
|Trees, Tries, & Graphs| Depth-First Search |Memory (Stack vs. Heap) |
|Stacks & Queues |Binary Search |Recursion |
|Heaps |Merge Sort |Dynamic Programming |
|Vectors/Arraylists |Quick Sort |Big O Time & Space |
|Hash Tables|||

## Walking Through a Problem 
1. Listen Carefully
    專心理解題目，不懂提問，合理假設(執行環境/需求)。
2. Draw an Example
    畫出足夠大的範例，不要是特殊例外。
3. State a Brute Force 
    可以先寫出一個不是那麼有效率的版本，並分析時間空間複雜度。
4. Optimize

**著手優化**
- 有沒有沒有使用到的資訊
- 換個範例試試看
- 做時間複雜度與空間複雜度的取捨(tradeoff)
- 看有沒有一些資料可以預先計算，幫助節省時間。e.g. sorting
- 使用hash table
- 想像最佳的時間複雜度

**優化技巧**
* 優化技巧#1: BUD
    - **B**ottlenecks
    - **U**nnecessary work
    - **D**uplicated work   
* 優化技巧#2: DIY (Do It Yourself)
* 優化技巧#3: Simplify and Generalize
* 優化技巧#4: Base Case and Build
* 優化技巧#5: Data Structure Brainstorm 
5. Walk Through
    不要直接下去寫程式，先寫pseudocode。如果還不能很明確的知道要寫什麼，可能會卡住花費更多的時間完成。
6. Implement
    寫程式。並注意變數命名、錯誤檢查(Error checks)。
7. Test
    - 檢查並解釋每行程式，是否和你想像的相同
    - 檢查覺得奇怪的地方
    - Hot spots(e.g.遞迴的初始條件、樹的null node判斷)
    - 測試資料測試程式
    - 測試Special cases