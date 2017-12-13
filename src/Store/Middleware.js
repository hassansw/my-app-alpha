class Middleware {

    static incTextNum (currNum) {
        return (dispatch) => {
            currNum++;
        }
    }

    static decTextNum (currNum) {
        return (dispatch) => {
            currNum--;
        } 
    }
    
}

export default Middleware