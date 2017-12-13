class UserLogs {
    constructor(userAcc_id, user_id, userAcc_latitude, userAcc_longitude, userAcc_dateTime, userAcc_State, userAcc_City) {
        this.userAcc_id = userAcc_id;
        this.user_id = user_id;
        this.userAcc_latitude = userAcc_latitude;
        this.userAcc_longitude = userAcc_longitude;
        this.userAcc_dateTime = userAcc_dateTime;
        this.userAcc_State = userAcc_State;
        this.userAcc_City = userAcc_City;
    }

    setUserAcc_id(userAcc_id) { this.userAcc_id = userAcc_id;}
    getUserAcc_id() { return this.userAcc_id;}

    setUser_id(user_id) { this.user_id = user_id;}
    getUser_id() { return this.user_id;}

    setUserAcc_latitude(userAcc_latitude) { this.userAcc_latitude = userAcc_latitude;}
    getUserAcc_latitude() { return this.userAcc_latitude;}

    setUserAcc_longitude(userAcc_longitude) { this.userAcc_longitude = userAcc_longitude;}
    getUserAcc_longitude() { return this.userAcc_longitude;}

    setUserAcc_dateTime(userAcc_dateTime) { this.userAcc_dateTime = userAcc_dateTime;}
    getUserAcc_dateTime() { return this.userAcc_dateTime;}

    setUserAcc_State(userAcc_State) { this.userAcc_State = userAcc_State;}
    getUserAcc_State() { return this.userAcc_State;}

    setUserAcc_City(userAcc_City) { this.userAcc_City = userAcc_City;}
    getUserAcc_City() { return this.userAcc_City;}

}