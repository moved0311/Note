## Fiber
`Fiber = {}` is unit of work

It can
* split work into chunks and prioritize tasks
* pause work and come back to it later
* reuse work or abort it if it's not needed
* Fiber is asynchronous

2 phases
* render phase (asynchronous)
* commit phase (synchronous)

## Works
1. Fiber Root會維持兩個樹的結構(current, workInProgress)
	* current(Browser上目前的樣子)
	* 在背後的更新會在workInProgress上(render phase)
2. 當workInProgress更新好後,進入commit phase
	* Fiber Root會指向workInProgress並更新為current
	* 原本的current就變為workInProgress

## Reference

[React Fiber Reconciliation: How it Works (Part 1) - YouTube](https://www.youtube.com/watch?v=rKk4XJYzSQA)
[What Is React Fiber? React.js Deep Dive #2](https://www.youtube.com/watch?v=0ympFIwQFJw)
[React Fiber Reconciliation: How it Works (Part 1) - YouTube](https://www.youtube.com/watch?v=rKk4XJYzSQA)
[Inspecting React Fiber Reconciliation: Deep Dive (Part 2) - YouTube](https://www.youtube.com/watch?v=Zan16X8VvGM)