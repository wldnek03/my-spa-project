// src/utils/utils.js (함수 및 클래스 예시)
export const fetchRandomNumber = () => {
    return Math.floor(Math.random() * 100);
};

export class Counter {
    constructor() {
        this.count = 0;
    }
    
    increment() {
        this.count += 1;
        return this.count;
    }
}