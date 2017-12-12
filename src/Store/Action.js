class Action {

    static increment = incNum
    static decrement = decNum


    static incrementNum() {
        return {
            type : increment
            
        }
    }

    static decrementNum() {
        return {
            type : decrement
        }
    }
}

export default Action