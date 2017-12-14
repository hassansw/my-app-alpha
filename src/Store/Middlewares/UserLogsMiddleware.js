import UserLogsAction from '../Actions/UserLogsAction'
import axios from 'axios'

class UserLogsMiddleware {

    static getUserLogsFromURL() {
        return (dispatcher) => {
            //Uses Axios here
            axios.get('http://mmssatc.pk/ais/andro_API/data_logs.php', {
                    params: {
                        user_id: 1
                    }
                })
                .then(responseJson => {

                    var counter = 0;

                    responseJson.data.forEach(element => {
                        console.log(element)
                        counter++
                        if (counter == 10) {
                            return
                        }
                    });

                    this.setState({
                        userLogs: tempArray
                    })

                    this.state.userLogs.forEach(element => {
                        console.log(element)
                        counter++
                        
                    });

                })
                .catch(error => {
                    console.error(error);
                });
            dispatch(UserLogsAction.getUserLogsAction())
        }
    }

}

export default UserLogsMiddleware