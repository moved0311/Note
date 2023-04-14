/*
 * @lc app=leetcode id=950 lang=typescript
 *
 * [950] Reveal Cards In Increasing Order
 */

// @lc code=start
function deckRevealedIncreasing(deck: number[]): number[] {
  return [];
}

// @lc code=end

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));

/**
 * [2,13,3,11,5,17,7]
 * 2 [3,11,5,17,7,13]
 * 3 [5,17,7,13,11]
 * 5 [7,13,11,17]
 * 7 [11,17,13]
 * 11 [13,17]
 * 13 [17]
 * 17 []
 */

/**
 * 1. runtime: 14.29%, memory: 14.29%
 * function deckRevealedIncreasing(deck: number[]): number[] {
  const result = [...deck.sort((a, b) => b - a)];

  return result.reduce((arr: number[], num: number) => {
    if (arr.length >= 2) {
      let last = arr.pop();

      if (last) arr.unshift(last);
    }

    arr.unshift(num);

    return arr;
  }, []);
}
 */

/**
 * 2. runtime: 28.57%, memory: 57.14%
 * function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => a - b);

  const res: number[] = [deck.pop() as number];

  while (deck.length > 0) {
    const last: number = deck.pop() as number;
    res.unshift(res.pop() as number);

    res.unshift(last);
  }

  return res;
}
 */

/**
import Queue from "./DataStructure/queue";
function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => a - b);

  const q = new Queue<number>();
  q.enqueue(deck.pop() as number);

  while (deck.length > 0) {
    const last: number = deck.pop() as number;

    q.enqueue(q.dequeue() as number);
    q.enqueue(last);
  }

  const res: number[] = [];
  while (q.size()) {
    res.push(q.dequeue() as number);
  }

  return res.reverse();
}
 */
