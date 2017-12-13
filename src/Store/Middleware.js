import Action  from "./Action";

class Middleware {

    static incTextNum (currNum) {
        return (dispatch) => {
            currNum++;
            dispatch(Action.incrementNum(currNum))
        }
    }

    static decTextNum (currNum) {
        return (dispatch) => {
            currNum--;
            dispatch(Action.decrementNum(currNum))
        }
    }
    
}

export default Middleware