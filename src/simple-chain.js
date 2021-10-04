import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 export default {
  chainItems: [],

  getLength () {
    return chainItems.length;
  },

  addLink (value) {
    this.chainItems.push(`( ${value} )`);
    return this;
  },

  removeLink (position) {
    if (typeof position !== 'number' || position <= 0 || this.chainItems.length <= position - 1) {
      this.chainItems = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chainItems.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain () {
    this.chainItems = this.chainItems.reverse();
    return this;
  },

  finishChain () {
    const result = this.chainItems.join('~~');
    this.chainItems = [];

    return  result;
  }
};
