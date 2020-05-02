/* You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:
Make case INsensitive

organize blocks

(A N)
(N A)
(B O)
(O B)
(C P)
(P C)
(D Q)
(Q D)
(R E)
(E R)
(F S)
(F S)
(G T)
(T G)
(H U)
(V I)
(J W)
(X K)
(L Y)
(Z M)


*/

const canMakeWord = (word) => {
  const blocks = {
    AN: 2,
    BO: 2,
    CP: 2,
    DQ: 2,
    ER: 2,
    FS: 2,
    GT: 2,
    HU: 1,
    VI: 1,
    JW: 1,
    XK: 1,
    LY: 1,
    ZM: 1,
  };

  const string = word.toUpperCase();

  for (let char = 0; char < string.length; char++) {
    for (let block in blocks) {
      if (block.includes(string[char])) {
        // if the keys of object include the char of a worrd
        if (blocks[block] === 0) {
          // if out of blocks,
          return false;
        } else if (blocks[block] !== 0) {
          blocks[block]--;
          console.log(`new blocks ${JSON.stringify(blocks)}`);
          break;
        }
      }
    }
  }

  return true;
};

console.log(canMakeWord('CONFUSE'));
