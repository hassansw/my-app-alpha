class UserLogsAction {

    static userLogsData = 'userLogsData' 

    static getUserLogsAction() {
        return {
            type : userLogsData
        }
    }


}

export default UserLogsAction