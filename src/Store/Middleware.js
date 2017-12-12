class Middleware {

    static incTextNum (currNum) {
        return (dispatch) => {
            currNum++;
        }
    }
    
}

export default Middleware