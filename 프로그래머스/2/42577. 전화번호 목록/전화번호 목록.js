function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        const idx = phone_book[i + 1].indexOf(phone_book[i]);
        if (idx === 0) return false;
    }
    return true;    
}
