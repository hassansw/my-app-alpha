class Action {

    static increment = incNum
    static decrement = decNum


    static incrementNum(num) {
        return {
            type : increment,
            data : num
        }
    }
    
    static decrementNum(num) {
        return {
            type : decrement,
            data : num
        }
    }
}

export default Action